// src/nodes/ML/NodePCA.tsx

import React, { useEffect, useMemo } from "react";
import * as dfd from "danfojs";
import { createNodeComponent } from "../createNodeComponent";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type State = {
  featureCols: string[];
  nComponents: number;
  standardize: boolean; // z-score per column (recommended)
  prefix: string; // column name prefix, e.g. "PC" -> PC1, PC2...
  keepOriginal: boolean;

  processing: boolean;
  progress: number;

  cachedScores: (number | null)[][] | null; // [nRows][nComponents] (nulls allowed)
  cachedExplained: number[] | null; // explained variance ratio per component
  cacheMeta?: {
    colsKey: string;
    nComponents: number;
    standardize: boolean;
    prefix: string;
    keepOriginal: boolean;
    rowCount: number;
  };
};

function clampInt(v: any, lo: number, hi: number, fallback: number) {
  const n = Number.parseInt(String(v), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
}

function dot(a: number[], b: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) s += a[i] * b[i];
  return s;
}

function matVecMul(A: number[][], v: number[]) {
  const n = A.length;
  const out = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = 0;
    const row = A[i];
    for (let j = 0; j < v.length; j++) s += row[j] * v[j];
    out[i] = s;
  }
  return out;
}

function identity(n: number) {
  const I = Array.from({ length: n }, (_, i) => {
    const row = new Array(n).fill(0);
    row[i] = 1;
    return row;
  });
  return I;
}

function transpose(A: number[][]) {
  const r = A.length;
  const c = A[0]?.length ?? 0;
  const T = Array.from({ length: c }, () => new Array(r).fill(0));
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) T[j][i] = A[i][j];
  return T;
}

function jacobiEigenSymmetric(
  A_in: number[][],
  maxIter = 200,
  eps = 1e-10,
  onProgress?: (pct: number) => void
): { values: number[]; vectors: number[][] } {
  // A is symmetric (n x n). Returns eigenvalues and eigenvectors (columns).
  const n = A_in.length;
  // copy A
  const A = A_in.map((r) => r.slice());
  let V = identity(n);

  const offDiagNorm = () => {
    let s = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i !== j) s += A[i][j] * A[i][j];
      }
    }
    return Math.sqrt(s);
  };

  for (let iter = 0; iter < maxIter; iter++) {
    // Find largest off-diagonal element
    let p = 0;
    let q = 1;
    let max = Math.abs(A[p][q]);
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const v = Math.abs(A[i][j]);
        if (v > max) {
          max = v;
          p = i;
          q = j;
        }
      }
    }

    const norm = offDiagNorm();
    const pct = Math.round(((iter + 1) / maxIter) * 100);
    onProgress?.(pct);

    if (max < eps || norm < eps) break;

    const app = A[p][p];
    const aqq = A[q][q];
    const apq = A[p][q];

    // Compute rotation
    const phi = 0.5 * Math.atan2(2 * apq, aqq - app);
    const c = Math.cos(phi);
    const s = Math.sin(phi);

    // Apply rotation to A: A = R^T A R
    // Update rows/cols p and q
    for (let k = 0; k < n; k++) {
      if (k !== p && k !== q) {
        const aik = A[k][p];
        const akq = A[k][q];
        A[k][p] = c * aik - s * akq;
        A[p][k] = A[k][p];
        A[k][q] = s * aik + c * akq;
        A[q][k] = A[k][q];
      }
    }

    const app2 = c * c * app - 2 * s * c * apq + s * s * aqq;
    const aqq2 = s * s * app + 2 * s * c * apq + c * c * aqq;

    A[p][p] = app2;
    A[q][q] = aqq2;
    A[p][q] = 0;
    A[q][p] = 0;

    // Accumulate eigenvectors: V = V R
    for (let k = 0; k < n; k++) {
      const vip = V[k][p];
      const viq = V[k][q];
      V[k][p] = c * vip - s * viq;
      V[k][q] = s * vip + c * viq;
    }
  }

  const values = new Array(n).fill(0).map((_, i) => A[i][i]);
  // V columns are eigenvectors
  const vectors = V;

  return { values, vectors };
}

function computeMeanStd(X: number[][]) {
  const n = X.length;
  const d = X[0]?.length ?? 0;
  const mean = new Array(d).fill(0);
  const std = new Array(d).fill(0);

  for (let i = 0; i < n; i++) {
    const row = X[i];
    for (let j = 0; j < d; j++) mean[j] += row[j];
  }
  for (let j = 0; j < d; j++) mean[j] /= n;

  for (let i = 0; i < n; i++) {
    const row = X[i];
    for (let j = 0; j < d; j++) {
      const diff = row[j] - mean[j];
      std[j] += diff * diff;
    }
  }
  for (let j = 0; j < d; j++) {
    std[j] = Math.sqrt(std[j] / n);
    if (!Number.isFinite(std[j]) || std[j] === 0) std[j] = 1;
  }

  return { mean, std };
}

function centerAndOptionallyStandardizeInPlace(
  X: number[][],
  standardize: boolean
): { mean: number[]; std: number[] } {
  const { mean, std } = computeMeanStd(X);

  for (let i = 0; i < X.length; i++) {
    const row = X[i];
    for (let j = 0; j < row.length; j++) {
      const centered = row[j] - mean[j];
      row[j] = standardize ? centered / std[j] : centered;
    }
  }
  return { mean, std };
}

function covarianceMatrix(X: number[][]) {
  // X assumed centered (and maybe standardized). Cov = (X^T X) / (n-1)
  const n = X.length;
  const d = X[0]?.length ?? 0;
  const C = Array.from({ length: d }, () => new Array(d).fill(0));

  for (let i = 0; i < n; i++) {
    const row = X[i];
    for (let a = 0; a < d; a++) {
      for (let b = a; b < d; b++) {
        C[a][b] += row[a] * row[b];
      }
    }
  }

  const denom = Math.max(1, n - 1);
  for (let a = 0; a < d; a++) {
    for (let b = a; b < d; b++) {
      C[a][b] /= denom;
      C[b][a] = C[a][b];
    }
  }
  return C;
}

function projectScores(X_centered: number[][], eigenvectors: number[][], k: number) {
  // eigenvectors is d x d, columns are eigenvectors
  // scores = X * V_k (n x d) * (d x k) => n x k
  const n = X_centered.length;
  const d = X_centered[0]?.length ?? 0;
  const scores = Array.from({ length: n }, () => new Array(k).fill(0));

  for (let i = 0; i < n; i++) {
    const x = X_centered[i];
    for (let c = 0; c < k; c++) {
      // column c in eigenvectors:
      let s = 0;
      for (let j = 0; j < d; j++) s += x[j] * eigenvectors[j][c];
      scores[i][c] = s;
    }
  }
  return scores;
}

const NodePCA = createNodeComponent<State>({
  label: "PCA",
  description:
    "Principal Component Analysis on selected numeric columns. Uses a symmetric Jacobi eigen-decomposition (best for small/medium feature counts). Adds PC columns and exposes explained variance ratios.",
  width: 400,
  initialInputs: ["dataframe"],
  outputType: "dataframe",
  initialState: {
    featureCols: [],
    nComponents: 2,
    standardize: true,
    prefix: "PC",
    keepOriginal: true,

    processing: false,
    progress: 0,

    cachedScores: null,
    cachedExplained: null,
    cacheMeta: undefined,
  },

  computeOutput: (inputs, state) => {
    const df: dfd.DataFrame | null = inputs[0]?.value ?? null;
    if (!df || !df.shape) return df;

    const rowCount = df.shape[0];
    if (!state.featureCols.length) return df;

    const meta = state.cacheMeta;
    const colsKey = state.featureCols.join("|");

    if (
      state.cachedScores &&
      meta &&
      meta.rowCount === rowCount &&
      meta.colsKey === colsKey &&
      meta.nComponents === state.nComponents &&
      meta.standardize === state.standardize &&
      meta.prefix === state.prefix &&
      meta.keepOriginal === state.keepOriginal
    ) {
      const k = Math.min(state.nComponents, state.cachedScores[0]?.length ?? 0);
      if (k <= 0) return df;

      let outDf: dfd.DataFrame = df;
      // If keepOriginal is false, return only the PC columns (and preserve row count).
      // We build a new DF, then (optionally) include original index by leaving it as-is.
      if (!state.keepOriginal) {
        const data: Record<string, any[]> = {};
        for (let c = 0; c < k; c++) {
          const name = `${state.prefix}${c + 1}`;
          data[name] = state.cachedScores.map((row) => row[c]);
        }
        return new dfd.DataFrame(data);
      }

      // keepOriginal: add PC columns onto original df
      for (let c = 0; c < k; c++) {
        const name = `${state.prefix}${c + 1}`;
        const col = state.cachedScores.map((row) => row[c]);
        outDf = outDf.addColumn(name, col, { inplace: false }) as unknown as dfd.DataFrame;
      }
      return outDf;
    }

    return df;
  },

  renderInputControls: () => null,

  renderControls: ({ inputs, state, setState }) => {
    const df: dfd.DataFrame | null = inputs[0]?.value ?? null;
    const columns = useMemo(() => (df ? (df.columns as string[]) : []), [df]);

    const colsKey = useMemo(() => state.featureCols.join("|"), [state.featureCols]);

    const toggleFeatureCol = (col: string) => {
      setState((prev) => ({
        ...prev,
        featureCols: prev.featureCols.includes(col)
          ? prev.featureCols.filter((c) => c !== col)
          : [...prev.featureCols, col],
      }));
    };

    useEffect(() => {
      if (!df || !df.shape || df.shape[0] === 0 || state.featureCols.length === 0) {
        setState((s) => ({
          ...s,
          processing: false,
          progress: 0,
          cachedScores: null,
          cachedExplained: null,
          cacheMeta: undefined,
        }));
        return;
      }

      const rowCount = df.shape[0];

      // Already cached for these params
      if (
        state.cachedScores &&
        state.cacheMeta &&
        state.cacheMeta.rowCount === rowCount &&
        state.cacheMeta.colsKey === colsKey &&
        state.cacheMeta.nComponents === state.nComponents &&
        state.cacheMeta.standardize === state.standardize &&
        state.cacheMeta.prefix === state.prefix &&
        state.cacheMeta.keepOriginal === state.keepOriginal
      ) {
        return;
      }

      let cancelled = false;

      setState((s) => ({
        ...s,
        processing: true,
        progress: 0,
        cachedScores: null,
        cachedExplained: null,
        cacheMeta: undefined,
      }));

      const handle = window.setTimeout(() => {
        try {
          const cols = df.columns as string[];
          const rows = df.values as any[][];

          const featIdx = state.featureCols.map((c) => cols.indexOf(c));
          if (featIdx.some((i) => i < 0)) throw new Error("Selected column not found");

          // Build X for valid rows (complete cases)
          const validRowIdx: number[] = [];
          const X: number[][] = [];

          for (let r = 0; r < rows.length; r++) {
            const row = rows[r];
            const vec: number[] = [];
            let ok = true;
            for (let j = 0; j < featIdx.length; j++) {
              const v = row[featIdx[j]];
              const num = typeof v === "number" ? v : Number.parseFloat(String(v));
              if (!Number.isFinite(num)) {
                ok = false;
                break;
              }
              vec.push(num);
            }
            if (!ok) continue;
            validRowIdx.push(r);
            X.push(vec);
          }

          // Prepare full score matrix with nulls for invalid rows
          const kMax = Math.min(
            clampInt(state.nComponents, 1, 50, 2),
            state.featureCols.length,
            Math.max(1, X.length)
          );

          const scoresFull: (number | null)[][] = Array.from({ length: rowCount }, () =>
            new Array(kMax).fill(null)
          );

          if (X.length < 2 || state.featureCols.length < 1) {
            if (cancelled) return;
            setState((s) => ({
              ...s,
              processing: false,
              progress: 100,
              cachedScores: scoresFull,
              cachedExplained: new Array(kMax).fill(0),
              cacheMeta: {
                colsKey,
                nComponents: s.nComponents,
                standardize: s.standardize,
                prefix: s.prefix,
                keepOriginal: s.keepOriginal,
                rowCount,
              },
            }));
            return;
          }

          // Center and (optionally) standardize
          centerAndOptionallyStandardizeInPlace(X, state.standardize);

          // Covariance + eigen decomposition
          const C = covarianceMatrix(X);

          const { values, vectors } = jacobiEigenSymmetric(
            C,
            200,
            1e-10,
            (pct) => {
              if (cancelled) return;
              // Keep progress in 0..90 for eigen solve, reserve 10% for projection
              setState((s) => ({ ...s, progress: Math.min(90, Math.round(pct * 0.9)) }));
            }
          );

          // Sort eigenpairs by descending eigenvalue
          const order = values
            .map((v, i) => ({ v, i }))
            .sort((a, b) => b.v - a.v)
            .map((o) => o.i);

          const sortedVals = order.map((i) => values[i]);
          const Vsorted = vectors.map((row) => order.map((i) => row[i])); // reorder columns

          const totalVar = sortedVals.reduce((s, v) => s + (Number.isFinite(v) ? Math.max(0, v) : 0), 0) || 1;
          const explained = sortedVals
            .slice(0, kMax)
            .map((v) => (Number.isFinite(v) ? Math.max(0, v) / totalVar : 0));

          // Project
          const Vk = Vsorted.map((row) => row.slice(0, kMax)); // d x k
          const projected = projectScores(X, Vk, kMax); // validRows x k

          if (cancelled) return;
          setState((s) => ({ ...s, progress: 100 }));

          // Fill into full matrix at corresponding row indices
          for (let i = 0; i < validRowIdx.length; i++) {
            const r = validRowIdx[i];
            for (let c = 0; c < kMax; c++) scoresFull[r][c] = projected[i][c];
          }

          if (cancelled) return;

          setState((s) => ({
            ...s,
            processing: false,
            progress: 100,
            cachedScores: scoresFull,
            cachedExplained: explained,
            cacheMeta: {
              colsKey,
              nComponents: s.nComponents,
              standardize: s.standardize,
              prefix: s.prefix,
              keepOriginal: s.keepOriginal,
              rowCount,
            },
          }));
        } catch (e) {
          console.warn("PCA node error:", e);
          if (cancelled) return;
          setState((s) => ({
            ...s,
            processing: false,
            progress: 0,
            cachedScores: null,
            cachedExplained: null,
            cacheMeta: undefined,
          }));
        }
      }, 0);

      return () => {
        cancelled = true;
        window.clearTimeout(handle);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      df,
      colsKey,
      state.nComponents,
      state.standardize,
      state.prefix,
      state.keepOriginal,
    ]);

    const nCompDisplay = clampInt(state.nComponents, 1, 50, 2);

    return (
      <div className="flex flex-col gap-3 text-white">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white text-black">
              Feature Columns
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-64 z-[10000]" onCloseAutoFocus={(e) => e.preventDefault()}>
            <DropdownMenuLabel>Select numeric columns</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {columns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col}
                checked={state.featureCols.includes(col)}
                onSelect={(e) => e.preventDefault()}
                onCheckedChange={() => toggleFeatureCol(col)}
              >
                {col}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {state.featureCols.length > 0 && (
          <div className="flex flex-wrap gap-2 text-[10px] text-white">
            {state.featureCols.map((col) => (
              <span key={col} className="bg-[#3b3f42] px-2 py-1 rounded text-xs font-mono">
                {col}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[110px]">Components</label>
          <Input
            type="number"
            min={1}
            max={50}
            value={nCompDisplay}
            onChange={(e) => setState((s) => ({ ...s, nComponents: Number(e.target.value) }))}
            className="w-[200px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[110px]">Prefix</label>
          <Input
            type="text"
            value={state.prefix}
            onChange={(e) => setState((s) => ({ ...s, prefix: e.target.value || "PC" }))}
            className="w-[200px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs text-gray-200">
            <input
              className="accent-blue-500"
              type="checkbox"
              checked={state.standardize}
              onChange={(e) => setState((s) => ({ ...s, standardize: e.target.checked }))}
            />
            Standardize (z-score)
          </label>

          <label className="flex items-center gap-2 text-xs text-gray-200">
            <input
              className="accent-blue-500"
              type="checkbox"
              checked={state.keepOriginal}
              onChange={(e) => setState((s) => ({ ...s, keepOriginal: e.target.checked }))}
            />
            Keep original columns
          </label>
        </div>

        {state.processing ? (
          <div className="flex flex-col gap-1 w-[320px] mt-1">
            <div className="h-2 bg-gray-700 rounded overflow-hidden">
              <div className="h-2 bg-blue-500 transition-all duration-200" style={{ width: `${state.progress}%` }} />
            </div>
            <div className="text-xs text-yellow-400 pl-1">{`Computing PCA: ${state.progress}%`}</div>
          </div>
        ) : state.cachedExplained && state.cachedExplained.length > 0 ? (
          <div className="text-xs text-gray-200">
            <div className="mb-1">Explained variance ratio:</div>
            <div className="flex flex-col gap-1">
              {state.cachedExplained.map((v, i) => (
                <div key={i} className="font-mono">
                  {`${state.prefix}${i + 1}`}: {(v * 100).toFixed(2)}%
                </div>
              ))}
            </div>
            <div className="mt-2">
              Output: adds columns <code>{state.prefix}1..</code> (rows with non-numeric/invalid values become null).
            </div>
          </div>
        ) : (
          <div className="text-xs text-gray-200">
            Select feature columns to compute PCA.
          </div>
        )}
      </div>
    );
  },

  hideOutputPort: false,
});

export default NodePCA;