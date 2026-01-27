// src/nodes/ML/NodeKMeans.tsx

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
  k: number;
  maxIter: number;
  seed: number;
  standardize: boolean;

  processing: boolean;
  progress: number;

  cachedLabels: (number | null)[] | null; // same length as df rows
  cacheMeta?: {
    colsKey: string; // stable join of selected cols
    k: number;
    maxIter: number;
    seed: number;
    standardize: boolean;
    rowCount: number;
  };
};

const CLUSTER_COL = "cluster";

function clampInt(v: any, lo: number, hi: number, fallback: number) {
  const n = Number.parseInt(String(v), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return function rand() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function squaredDistance(a: number[], b: number[]) {
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const d = a[i] - b[i];
    s += d * d;
  }
  return s;
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
    if (!Number.isFinite(std[j]) || std[j] === 0) std[j] = 1; // avoid div-by-zero
  }

  return { mean, std };
}

function standardizeInPlace(X: number[][], mean: number[], std: number[]) {
  for (let i = 0; i < X.length; i++) {
    const row = X[i];
    for (let j = 0; j < row.length; j++) row[j] = (row[j] - mean[j]) / std[j];
  }
}

function chooseInitialCentroidsKMeansPP(
  X: number[][],
  k: number,
  rand: () => number
): number[][] {
  const n = X.length;
  const centroids: number[][] = [];

  // 1) pick first centroid uniformly
  const firstIdx = Math.floor(rand() * n);
  centroids.push([...X[firstIdx]]);

  // 2) pick remaining centroids proportional to D^2
  const dist2 = new Array(n).fill(0);

  while (centroids.length < k) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
      let best = Infinity;
      for (let c = 0; c < centroids.length; c++) {
        const d2 = squaredDistance(X[i], centroids[c]);
        if (d2 < best) best = d2;
      }
      dist2[i] = best;
      sum += best;
    }

    if (sum === 0) {
      // all points identical; pad with duplicates
      while (centroids.length < k) centroids.push([...centroids[0]]);
      break;
    }

    let r = rand() * sum;
    let chosen = 0;
    for (let i = 0; i < n; i++) {
      r -= dist2[i];
      if (r <= 0) {
        chosen = i;
        break;
      }
    }
    centroids.push([...X[chosen]]);
  }

  return centroids;
}

function runKMeans(
  X: number[][],
  k: number,
  maxIter: number,
  seed: number,
  onProgress?: (pct: number) => void
): number[] {
  const n = X.length;
  const d = X[0]?.length ?? 0;

  const rand = mulberry32(seed);
  let centroids = chooseInitialCentroidsKMeansPP(X, k, rand);

  let labels = new Array(n).fill(0);
  let prevLabels: number[] | null = null;

  for (let iter = 0; iter < maxIter; iter++) {
    // Assign step
    for (let i = 0; i < n; i++) {
      let bestC = 0;
      let bestD = Infinity;
      for (let c = 0; c < k; c++) {
        const d2 = squaredDistance(X[i], centroids[c]);
        if (d2 < bestD) {
          bestD = d2;
          bestC = c;
        }
      }
      labels[i] = bestC;
    }

    // Convergence check
    if (prevLabels) {
      let changed = false;
      for (let i = 0; i < n; i++) {
        if (labels[i] !== prevLabels[i]) {
          changed = true;
          break;
        }
      }
      if (!changed) {
        onProgress?.(100);
        break;
      }
    }
    prevLabels = [...labels];

    // Update step
    const sums = Array.from({ length: k }, () => new Array(d).fill(0));
    const counts = new Array(k).fill(0);

    for (let i = 0; i < n; i++) {
      const c = labels[i];
      counts[c] += 1;
      const row = X[i];
      for (let j = 0; j < d; j++) sums[c][j] += row[j];
    }

    for (let c = 0; c < k; c++) {
      if (counts[c] === 0) {
        // Empty cluster → re-seed to a random point (seeded RNG)
        const idx = Math.floor(rand() * n);
        centroids[c] = [...X[idx]];
      } else {
        for (let j = 0; j < d; j++) sums[c][j] /= counts[c];
        centroids[c] = sums[c];
      }
    }

    onProgress?.(Math.round(((iter + 1) / maxIter) * 100));
  }

  return labels;
}

const NodeKMeans = createNodeComponent<State>({
  label: "K-Means Clustering",
  description:
    "Clusters rows using K-Means on selected numeric columns. Adds a 'cluster' column to the dataframe. Deterministic via seed.",
  width: 380,
  initialInputs: ["dataframe"],
  outputType: "dataframe",
  initialState: {
    featureCols: [],
    k: 3,
    maxIter: 30,
    seed: 42,
    standardize: true,
    processing: false,
    progress: 0,
    cachedLabels: null,
    cacheMeta: undefined,
  },

  computeOutput: (inputs, state) => {
    const df: dfd.DataFrame | null = inputs[0]?.value ?? null;
    if (!df || !df.shape) return df;

    if (!state.featureCols.length) return df;
    const rowCount = df.shape[0];

    const meta = state.cacheMeta;
    const colsKey = state.featureCols.join("|");
    if (
      state.cachedLabels &&
      state.cachedLabels.length === rowCount &&
      meta &&
      meta.rowCount === rowCount &&
      meta.colsKey === colsKey &&
      meta.k === state.k &&
      meta.maxIter === state.maxIter &&
      meta.seed === state.seed &&
      meta.standardize === state.standardize
    ) {
      return df.addColumn(CLUSTER_COL, state.cachedLabels, { inplace: false });
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

    // Run clustering (async-ish) whenever params change
    useEffect(() => {
      if (!df || !df.shape || df.shape[0] === 0 || state.featureCols.length === 0) {
        setState((s) => ({
          ...s,
          processing: false,
          progress: 0,
          cachedLabels: null,
          cacheMeta: undefined,
        }));
        return;
      }

      const rowCount = df.shape[0];

      // If already cached for these params, do nothing.
      if (
        state.cachedLabels &&
        state.cacheMeta &&
        state.cacheMeta.rowCount === rowCount &&
        state.cacheMeta.colsKey === colsKey &&
        state.cacheMeta.k === state.k &&
        state.cacheMeta.maxIter === state.maxIter &&
        state.cacheMeta.seed === state.seed &&
        state.cacheMeta.standardize === state.standardize
      ) {
        return;
      }

      let cancelled = false;

      setState((s) => ({
        ...s,
        processing: true,
        progress: 0,
        cachedLabels: null,
        cacheMeta: undefined,
      }));

      // Defer heavy work to next tick to keep UI responsive
      const handle = window.setTimeout(() => {
        try {
          // Build numeric matrix X and mapping back to df row indices.
          const cols = df.columns as string[];
          const rows = df.values as any[][];

          const idxs = state.featureCols.map((c) => cols.indexOf(c));
          if (idxs.some((i) => i < 0)) throw new Error("Selected column not found");

          const validIdx: number[] = [];
          const X: number[][] = [];

          for (let r = 0; r < rows.length; r++) {
            const row = rows[r];
            const vec: number[] = [];
            let ok = true;
            for (let j = 0; j < idxs.length; j++) {
              const v = row[idxs[j]];
              const num = typeof v === "number" ? v : Number.parseFloat(String(v));
              if (!Number.isFinite(num)) {
                ok = false;
                break;
              }
              vec.push(num);
            }
            if (!ok) continue;
            validIdx.push(r);
            X.push(vec);
          }

          const labelsFull: (number | null)[] = new Array(rowCount).fill(null);

          if (X.length === 0) {
            // Nothing to cluster (all rows invalid)
            if (cancelled) return;
            setState((s) => ({
              ...s,
              processing: false,
              progress: 100,
              cachedLabels: labelsFull,
              cacheMeta: {
                colsKey,
                k: s.k,
                maxIter: s.maxIter,
                seed: s.seed,
                standardize: s.standardize,
                rowCount,
              },
            }));
            return;
          }

          // k constraints: 2..min(n, 50) (prevent nonsense)
          const k = Math.max(2, Math.min(clampInt(state.k, 2, 50, 3), X.length));

          // Standardize features (recommended)
          if (state.standardize && X.length >= 2) {
            const { mean, std } = computeMeanStd(X);
            standardizeInPlace(X, mean, std);
          }

          const labelsValid = runKMeans(X, k, clampInt(state.maxIter, 1, 500, 30), state.seed, (pct) => {
            if (cancelled) return;
            setState((s) => ({ ...s, progress: pct }));
          });

          for (let i = 0; i < validIdx.length; i++) {
            labelsFull[validIdx[i]] = labelsValid[i];
          }

          if (cancelled) return;

          setState((s) => ({
            ...s,
            processing: false,
            progress: 100,
            cachedLabels: labelsFull,
            cacheMeta: {
              colsKey,
              k: s.k,
              maxIter: s.maxIter,
              seed: s.seed,
              standardize: s.standardize,
              rowCount,
            },
          }));
        } catch (e) {
          console.warn("K-Means node error:", e);
          if (cancelled) return;
          setState((s) => ({
            ...s,
            processing: false,
            progress: 0,
            cachedLabels: null,
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
      state.k,
      state.maxIter,
      state.seed,
      state.standardize,
      // include only what’s needed; df is already included
    ]);

    const kDisplay = clampInt(state.k, 2, 50, 3);
    const maxIterDisplay = clampInt(state.maxIter, 1, 500, 30);

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
          <label className="text-xs text-white w-[90px]">k</label>
          <Input
            type="number"
            min={2}
            max={50}
            value={kDisplay}
            onChange={(e) => setState((s) => ({ ...s, k: Number(e.target.value) }))}
            className="w-[200px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[90px]">maxIter</label>
          <Input
            type="number"
            min={1}
            max={500}
            value={maxIterDisplay}
            onChange={(e) => setState((s) => ({ ...s, maxIter: Number(e.target.value) }))}
            className="w-[200px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[90px]">seed</label>
          <Input
            type="number"
            value={state.seed}
            onChange={(e) => setState((s) => ({ ...s, seed: Number(e.target.value) }))}
            className="w-[200px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            className="accent-blue-500"
            type="checkbox"
            checked={state.standardize}
            onChange={(e) => setState((s) => ({ ...s, standardize: e.target.checked }))}
          />
          <span className="text-xs text-gray-200">Standardize features (z-score)</span>
        </div>

        {state.processing ? (
          <div className="flex flex-col gap-1 w-[290px] mt-1">
            <div className="h-2 bg-gray-700 rounded overflow-hidden">
              <div className="h-2 bg-blue-500 transition-all duration-200" style={{ width: `${state.progress}%` }} />
            </div>
            <div className="text-xs text-yellow-400 pl-1">{`Clustering: ${state.progress}%`}</div>
          </div>
        ) : (
          <div className="text-xs text-gray-200">
            Output: adds column <code>{CLUSTER_COL}</code> (null for rows with non-numeric/invalid values).
          </div>
        )}
      </div>
    );
  },

  hideOutputPort: false,
});

export default NodeKMeans;
