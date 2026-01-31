// NodePairPlot.tsx

import React, { useMemo, useRef } from "react";
import * as dfd from "danfojs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BaseRPlot } from "./BaseRPlot";
import { createNodeComponent } from "../createNodeComponent";

type State = {
  columns: string[];
  groupCol: string | null;
  maxPoints: number; // downsample cap for scatter
};

function isNumericDtype(dtype: any): boolean {
  return dtype === "float32" || dtype === "float64" || dtype === "int32" || dtype === "int64";
}

function toFiniteNumber(v: any): number | null {
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

/** Numerically stable single-pass-ish Pearson on arrays with equal length */
function pearson(a: ArrayLike<number>, b: ArrayLike<number>): number {
  const n = a.length;
  if (!n || n !== b.length) return NaN;

  let sumA = 0,
    sumB = 0;
  for (let i = 0; i < n; i++) {
    sumA += a[i];
    sumB += b[i];
  }
  const meanA = sumA / n;
  const meanB = sumB / n;

  let num = 0;
  let denA = 0;
  let denB = 0;
  for (let i = 0; i < n; i++) {
    const da = a[i] - meanA;
    const db = b[i] - meanB;
    num += da * db;
    denA += da * da;
    denB += db * db;
  }
  const den = Math.sqrt(denA) * Math.sqrt(denB);
  return den === 0 ? NaN : num / den;
}

/** Simple reservoir-style stride downsample to cap points while preserving order */
function downsampleXY(
  xs: ArrayLike<number>,
  ys: ArrayLike<number>,
  maxPoints: number
): { x: number; y: number }[] {
  const n = xs.length;
  if (n <= maxPoints) {
    const out = new Array(n);
    for (let i = 0; i < n; i++) out[i] = { x: xs[i], y: ys[i] };
    return out;
  }
  const stride = Math.ceil(n / maxPoints);
  const m = Math.ceil(n / stride);
  const out: { x: number; y: number }[] = new Array(m);
  let k = 0;
  for (let i = 0; i < n; i += stride) {
    out[k++] = { x: xs[i], y: ys[i] };
  }
  return out;
}

const NodePairPlot = createNodeComponent<State>({
  label: "Pair Plot",
  description:
    "Pairwise scatter plots and densities with correlation coefficients in the upper triangle.",
  width: undefined,
  initialInputs: ["dataframe"],
  outputType: "",
  hideOutputPort: true,

  initialState: {
    columns: [] as string[],
    groupCol: null as string | null,
    maxPoints: 2000,
  },

  computeOutput: (inputs) => {
    const df = inputs[0]?.value;
    return df && df.shape ? df : null;
  },

  renderInputControls: () => null,

  renderControls: ({ inputs, state, setState }) => {
    const df: dfd.DataFrame | null = inputs[0]?.value ?? null;
    const allColumns = df?.columns || [];

    // 1) Clean once (memo), do NOT bounce it through setState
    const cleanDF = useMemo(() => {
      if (!df || !df.shape || df.shape[0] === 0) return null;
      try {
        // dropNa can be expensive; keep it memoized on df identity
        return df.dropNa();
      } catch {
        return null;
      }
    }, [df]);

    // 2) Numeric columns based on cleanDF (not raw df)
    const numericCols = useMemo(() => {
      if (!cleanDF) return [];
      return cleanDF.columns.filter((c: string) => isNumericDtype((cleanDF as any)[c]?.dtype));
    }, [cleanDF]);

    // 3) Precompute numeric vectors once: col -> Float64Array
    const numericVectors = useMemo(() => {
      if (!cleanDF) return new Map<string, Float64Array>();
      const m = new Map<string, Float64Array>();
      for (const c of numericCols) {
        const raw = (cleanDF as any)[c]?.values as any[];
        const arr = new Float64Array(raw.length);
        for (let i = 0; i < raw.length; i++) {
          const n = toFiniteNumber(raw[i]);
          arr[i] = n ?? 0; // after dropNa this should be finite; fallback to 0
        }
        m.set(c, arr);
      }
      return m;
    }, [cleanDF, numericCols]);

    // 4) Precompute group indices once: group -> indices[]
    const groupIndex = useMemo(() => {
      if (!cleanDF || !state.groupCol) return null;

      const col = state.groupCol;
      const raw = (cleanDF as any)[col]?.values as any[];
      if (!raw) return null;

      const map = new Map<string, number[]>();
      for (let i = 0; i < raw.length; i++) {
        const key = String(raw[i]);
        const bucket = map.get(key);
        if (bucket) bucket.push(i);
        else map.set(key, [i]);
      }
      return map;
    }, [cleanDF, state.groupCol]);

    // 5) Pair caches to avoid recomputing per render cell
    const corrCacheRef = useRef<Map<string, number>>(new Map());
    const scatterCacheRef = useRef<Map<string, any>>(new Map());
    const densityCacheRef = useRef<Map<string, any>>(new Map());

    // Invalidate caches when core inputs change
    useMemo(() => {
      corrCacheRef.current.clear();
      scatterCacheRef.current.clear();
      densityCacheRef.current.clear();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cleanDF, state.groupCol, state.maxPoints, state.columns.join("|")]);

    const selectedCols = state.columns;

    const getCorrelation = (aCol: string, bCol: string) => {
      const key = `${aCol}__${bCol}`;
      const cached = corrCacheRef.current.get(key);
      if (cached !== undefined) return cached;

      const a = numericVectors.get(aCol);
      const b = numericVectors.get(bCol);
      const val = a && b ? pearson(a, b) : NaN;
      corrCacheRef.current.set(key, val);
      return val;
    };

    const getScatterData = (x: string, y: string) => {
      const key = `${x}__${y}__${state.groupCol ?? "nogroup"}__${state.maxPoints}`;
      const cached = scatterCacheRef.current.get(key);
      if (cached !== undefined) return cached;

      const xs = numericVectors.get(x);
      const ys = numericVectors.get(y);
      if (!xs || !ys) return null;

      let result: any;

      if (!state.groupCol || !groupIndex) {
        result = downsampleXY(xs, ys, state.maxPoints);
      } else {
        const groups: { group: string; points: { x: number; y: number }[] }[] = [];
        for (const [g, idxs] of groupIndex.entries()) {
          // downsample within group if needed
          const n = idxs.length;
          if (n === 0) continue;

          if (n <= state.maxPoints) {
            const pts = new Array(n);
            for (let i = 0; i < n; i++) {
              const idx = idxs[i];
              pts[i] = { x: xs[idx], y: ys[idx] };
            }
            groups.push({ group: g, points: pts });
          } else {
            const stride = Math.ceil(n / state.maxPoints);
            const m = Math.ceil(n / stride);
            const pts = new Array(m);
            let k = 0;
            for (let i = 0; i < n; i += stride) {
              const idx = idxs[i];
              pts[k++] = { x: xs[idx], y: ys[idx] };
            }
            groups.push({ group: g, points: pts });
          }
        }
        result = groups;
      }

      scatterCacheRef.current.set(key, result);
      return result;
    };

    const getDensityData = (col: string) => {
      const key = `${col}__${state.groupCol ?? "nogroup"}`;
      const cached = densityCacheRef.current.get(key);
      if (cached !== undefined) return cached;

      const vec = numericVectors.get(col);
      if (!vec) return null;

      let result: any;

      if (!state.groupCol || !groupIndex) {
        // BaseRPlot expects an array of numbers for "density"
        result = Array.from(vec);
      } else {
        const groups: { group: string; values: number[] }[] = [];
        for (const [g, idxs] of groupIndex.entries()) {
          const vals = new Array(idxs.length);
          for (let i = 0; i < idxs.length; i++) vals[i] = vec[idxs[i]];
          groups.push({ group: g, values: vals });
        }
        result = groups;
      }

      densityCacheRef.current.set(key, result);
      return result;
    };

    return (
      <div className="flex flex-col gap-3 pl-2">
        {/* Column Multi-select */}
        <Select
          value=""
          onValueChange={(value) =>
            setState((s) => {
              const next = s.columns.includes(value)
                ? s.columns.filter((c) => c !== value)
                : [...s.columns, value];
              return { ...s, columns: next };
            })
          }
        >
          <SelectTrigger className="w-[280px] rounded bg-white !text-black">
            <SelectValue
              placeholder={
                state.columns.length > 0 ? state.columns.join(", ") : "Select numeric columns"
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Numeric Columns</SelectLabel>
              {numericCols.map((col) => (
                <SelectItem key={col} value={col}>
                  {col}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Optional Group Column */}
        <Select
          value={state.groupCol ?? "__none__"}
          onValueChange={(value) =>
            setState((s) => ({
              ...s,
              groupCol: value === "__none__" ? null : value,
            }))
          }
        >
          <SelectTrigger className="w-[280px] rounded bg-white !text-black">
            <SelectValue placeholder="Group column (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Group</SelectLabel>
              {allColumns.map((col) => (
                <SelectItem key={col} value={col}>
                  {col}
                </SelectItem>
              ))}
              <SelectItem value="__none__">(None)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Downsample cap */}
        <div className="text-xs text-white font-mono bg-black bg-opacity-30 rounded p-2 w-[280px]">
          Max points per scatter:{" "}
          <input
            className="ml-2 w-20 rounded bg-white text-black px-2 py-1"
            type="number"
            min={200}
            step={200}
            value={state.maxPoints}
            onChange={(e) =>
              setState((s) => ({ ...s, maxPoints: Math.max(200, Number(e.target.value) || 2000) }))
            }
          />
        </div>

        {/* Grid */}
        {selectedCols.length > 0 && cleanDF && (
          <div
            className="grid bg-gray-100 rounded p-2 w-auto h-auto"
            style={{
              gridTemplateColumns: `repeat(${selectedCols.length}, minmax(260px, 2fr))`,
              gap: "6px",
            }}
          >
            {selectedCols.map((rowCol, i) =>
              selectedCols.map((colCol, j) => {
                const key = `${i}-${j}`;
                const isDiagonal = i === j;

                if (isDiagonal) {
                  const densityData = getDensityData(rowCol);
                  return (
                    <div key={key} className="bg-white p-0.5 rounded shadow-inner">
                      <BaseRPlot
                        data={densityData ?? []}
                        type={state.groupCol ? "density-grouped" : "density"}
                        width={undefined}
                        height={undefined}
                        xLabel={rowCol}
                        compact={true}
                      />
                    </div>
                  );
                }

                if (i > j) {
                  const plotData = getScatterData(colCol, rowCol);
                  return (
                    <div key={key} className="bg-white p-1 rounded shadow-inner">
                      <BaseRPlot
                        data={plotData ?? []}
                        type={state.groupCol ? "scatter-grouped" : "scatter"}
                        width={undefined}
                        height={undefined}
                        xLabel={colCol}
                        yLabel={rowCol}
                        compact={true}
                      />
                    </div>
                  );
                }

                // upper triangle: correlation on demand (cached)
                const corr = getCorrelation(rowCol, colCol);
                const text = Number.isFinite(corr) ? corr.toFixed(2) : "–";
                const intensity = Number.isFinite(corr) ? Math.abs(corr) : 0;
                const bg = `rgba(${corr >= 0 ? "0,128,0" : "200,0,0"},${0.15 + intensity * 0.6})`;

                return (
                  <div
                    key={key}
                    className="flex items-center justify-center rounded text-black font-semibold"
                    style={{
                      backgroundColor: bg,
                      color: "black",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                  >
                    {text}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    );
  },
});

export default NodePairPlot;
