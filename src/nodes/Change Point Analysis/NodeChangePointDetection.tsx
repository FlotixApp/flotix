// src/nodes/TimeSeries/NodeChangePointDetection.tsx

import React, { useEffect, useMemo, useRef, useLayoutEffect } from "react";
import * as dfd from "danfojs";
import Plotly, { Data, Layout } from "plotly.js-dist-min";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { createNodeComponent } from "../createNodeComponent";
import { parseTimeToMs } from "@/lib/utils";

export type PlotPayload = {
  data: Partial<Data>[];
  layout: Partial<Layout>;
};

type Method =
  | "rolling_mean"
  | "cusum"
  | "ewma"
  | "lrt_mean"
  | "binary_seg"
  | "pelt";

type State = {
  timeCol: string | null;
  valueCol: string | null;
  method: Method;

  windowSize: number;
  zThreshold: number;
  minSeparation: number;
  maxPoints: number;

  cusumK: number;
  cusumH: number;

  ewmaAlpha: number;
  ewmaZ: number;

  penalty: number;
  maxChanges: number;

  processing: boolean;
  progress: number;

  cachedPlot: PlotPayload | null;
  cacheMeta?: {
    timeCol: string;
    valueCol: string;
    method: Method;

    windowSize: number;
    zThreshold: number;
    minSeparation: number;
    maxPoints: number;

    cusumK: number;
    cusumH: number;

    ewmaAlpha: number;
    ewmaZ: number;

    penalty: number;
    maxChanges: number;

    rowCount: number;
  };
};

function clampInt(v: any, lo: number, hi: number, fallback: number) {
  const n = Number.parseInt(String(v), 10);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
}

function clampFloat(v: any, lo: number, hi: number, fallback: number) {
  const n = Number.parseFloat(String(v));
  if (!Number.isFinite(n)) return fallback;
  return Math.max(lo, Math.min(hi, n));
}

function mean(a: number[]) {
  if (a.length === 0) return 0;
  let s = 0;
  for (const v of a) s += v;
  return s / a.length;
}

function std(a: number[]) {
  if (a.length < 2) return 0;
  const m = mean(a);
  let s = 0;
  for (const v of a) {
    const d = v - m;
    s += d * d;
  }
  return Math.sqrt(s / (a.length - 1));
}

function scoreRollingMeanDiff(values: number[], W: number): number[] {
  const n = values.length;
  const score = new Array(n).fill(0);
  const ps = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) ps[i + 1] = ps[i] + values[i];

  const wMean = (l: number, r: number) => (ps[r] - ps[l]) / Math.max(1, r - l);

  for (let t = W; t <= n - W - 1; t++) {
    const a = wMean(t - W, t);
    const b = wMean(t, t + W);
    score[t] = Math.abs(b - a);
  }
  return score;
}

function scoreFixedWindowMeanShiftZ(values: number[], W: number): number[] {
  const n = values.length;
  const score = new Array(n).fill(0);

  const ps = new Array(n + 1).fill(0);
  const ps2 = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    ps[i + 1] = ps[i] + values[i];
    ps2[i + 1] = ps2[i] + values[i] * values[i];
  }

  const wMean = (l: number, r: number) => (ps[r] - ps[l]) / Math.max(1, r - l);
  const wVar = (l: number, r: number) => {
    const len = Math.max(1, r - l);
    const sum = ps[r] - ps[l];
    const sum2 = ps2[r] - ps2[l];
    const m = sum / len;
    const v = sum2 / len - m * m;
    return v > 0 ? v : 0;
  };

  for (let t = W; t <= n - W - 1; t++) {
    const l0 = t - W, l1 = t;
    const r0 = t, r1 = t + W;
    const mA = wMean(l0, l1);
    const mB = wMean(r0, r1);
    const vA = wVar(l0, l1);
    const vB = wVar(r0, r1);
    const pooled = Math.sqrt((vA + vB) / 2) || 1e-9;
    score[t] = Math.abs(mB - mA) / pooled;
  }

  return score;
}

function pickByThreshold(score: number[], thresh: number, minSeparation: number): number[] {
  const candidates: { i: number; v: number }[] = [];
  for (let i = 0; i < score.length; i++) {
    const v = score[i];
    if (Number.isFinite(v) && v >= thresh) candidates.push({ i, v });
  }
  candidates.sort((a, b) => b.v - a.v);

  const picked: number[] = [];
  for (const c of candidates) {
    let ok = true;
    for (const p of picked) {
      if (Math.abs(c.i - p) < minSeparation) {
        ok = false;
        break;
      }
    }
    if (ok) picked.push(c.i);
  }
  picked.sort((a, b) => a - b);
  return picked;
}

function cusumChangeIdx(values: number[], kStd: number, hStd: number): number[] {
  const n = values.length;
  const mu = mean(values);
  const s = std(values) || 1e-9;

  const k = kStd * s;
  const h = hStd * s;

  let gp = 0;
  let gn = 0;

  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const x = values[i] - mu;

    gp = Math.max(0, gp + x - k);
    gn = Math.min(0, gn + x + k);

    if (gp > h || Math.abs(gn) > h) {
      out.push(i);
      gp = 0;
      gn = 0;
    }
  }
  return out;
}

function ewmaChangeIdx(values: number[], alpha: number, zStd: number): number[] {
  const n = values.length;
  const s = std(values) || 1e-9;
  let e = values[0] ?? 0;
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    const x = values[i];
    e = alpha * x + (1 - alpha) * e;
    if (Math.abs(x - e) >= zStd * s) out.push(i);
  }
  return out;
}

function prefixSums(values: number[]) {
  const n = values.length;
  const ps = new Array(n + 1).fill(0);
  const ps2 = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    ps[i + 1] = ps[i] + values[i];
    ps2[i + 1] = ps2[i] + values[i] * values[i];
  }
  return { ps, ps2 };
}

function segCostSSE(ps: number[], ps2: number[], l: number, r: number) {
  const len = r - l;
  if (len <= 1) return 0;
  const sum = ps[r] - ps[l];
  const sum2 = ps2[r] - ps2[l];
  const m = sum / len;
  const sse = sum2 - 2 * m * sum + len * m * m;
  return sse >= 0 ? sse : 0;
}

function bestSplit(ps: number[], ps2: number[], l: number, r: number, minSegLen: number) {
  let bestT = -1;
  let best = Infinity;
  for (let t = l + minSegLen; t <= r - minSegLen; t++) {
    const c = segCostSSE(ps, ps2, l, t) + segCostSSE(ps, ps2, t, r);
    if (c < best) {
      best = c;
      bestT = t;
    }
  }
  return { t: bestT, cost: best };
}

function binarySegmentationChangePoints(
  values: number[],
  penalty: number,
  maxChanges: number,
  minSegLen: number
): number[] {
  const n = values.length;
  const { ps, ps2 } = prefixSums(values);

  const cps: number[] = [];
  type Seg = { l: number; r: number };
  const stack: Seg[] = [{ l: 0, r: n }];

  while (stack.length > 0 && cps.length < maxChanges) {
    const seg = stack.pop()!;
    if (seg.r - seg.l < 2 * minSegLen) continue;

    const base = segCostSSE(ps, ps2, seg.l, seg.r);
    const { t, cost } = bestSplit(ps, ps2, seg.l, seg.r, minSegLen);
    if (t < 0) continue;

    const improvement = base - cost;
    if (improvement > penalty) {
      cps.push(t);
      stack.push({ l: seg.l, r: t });
      stack.push({ l: t, r: seg.r });
    }
  }

  cps.sort((a, b) => a - b);
  return cps;
}

function peltChangePoints(
  values: number[],
  penalty: number,
  maxChanges: number,
  minSegLen: number
): number[] {
  const n = values.length;
  const { ps, ps2 } = prefixSums(values);

  const F = new Array(n + 1).fill(Infinity);
  const cp = new Array(n + 1).fill(-1);
  F[0] = -penalty;

  let R: number[] = [0];

  for (let t = minSegLen; t <= n; t++) {
    let bestVal = Infinity;
    let bestK = -1;

    for (const k of R) {
      if (t - k < minSegLen) continue;
      const val = F[k] + segCostSSE(ps, ps2, k, t) + penalty;
      if (val < bestVal) {
        bestVal = val;
        bestK = k;
      }
    }

    F[t] = bestVal;
    cp[t] = bestK;

    const newR: number[] = [];
    for (const k of R) {
      if (t - k < minSegLen) {
        newR.push(k);
        continue;
      }
      const val = F[k] + segCostSSE(ps, ps2, k, t) + penalty;
      if (val <= F[t] + penalty) newR.push(k);
    }
    newR.push(t - minSegLen);
    R = Array.from(new Set(newR)).sort((a, b) => a - b);
  }

  const cps: number[] = [];
  let t = n;
  while (t > 0) {
    const k = cp[t];
    if (k <= 0) break;
    cps.push(k);
    t = k;
    if (cps.length > maxChanges) break;
  }

  cps.sort((a, b) => a - b);
  return cps;
}

function debounceIndices(indices: number[], minSeparation: number): number[] {
  if (indices.length === 0) return [];
  indices.sort((a, b) => a - b);
  const out: number[] = [];
  let last = -Infinity;
  for (const i of indices) {
    if (i - last >= minSeparation) {
      out.push(i);
      last = i;
    }
  }
  return out;
}

const NodeChangePointDetection = createNodeComponent<State>({
  label: "Change Point Detection",
  description:
    "Detects change points in a time series and outputs a Plotly payload (data + layout). The plot includes vertical dashed lines at detected change points.",
  width: 410,
  initialInputs: ["dataframe"],
  outputType: "plot",
  initialState: {
    timeCol: null,
    valueCol: null,
    method: "rolling_mean",

    windowSize: 10,
    zThreshold: 3,
    minSeparation: 10,
    maxPoints: 5000,

    cusumK: 0.5,
    cusumH: 5,

    ewmaAlpha: 0.2,
    ewmaZ: 3,

    penalty: 50,
    maxChanges: 25,

    processing: false,
    progress: 0,

    cachedPlot: null,
    cacheMeta: undefined,
  },

  computeOutput: (_inputs, state) => state.cachedPlot,

  renderInputControls: () => null,

  renderControls: ({ inputs, state, setState }) => {
    const df: dfd.DataFrame | null = inputs[0]?.value ?? null;
    const columns = useMemo(() => (df ? (df.columns as string[]) : []), [df]);

    useEffect(() => {
      if (!df || !df.shape || df.shape[0] === 0 || !state.timeCol || !state.valueCol) {
        setState((s) => ({
          ...s,
          processing: false,
          progress: 0,
          cachedPlot: null,
          cacheMeta: undefined,
        }));
        return;
      }

      const rowCount = df.shape[0];

      if (
        state.cachedPlot &&
        state.cacheMeta &&
        state.cacheMeta.rowCount === rowCount &&
        state.cacheMeta.timeCol === state.timeCol &&
        state.cacheMeta.valueCol === state.valueCol &&
        state.cacheMeta.method === state.method &&
        state.cacheMeta.windowSize === state.windowSize &&
        state.cacheMeta.zThreshold === state.zThreshold &&
        state.cacheMeta.minSeparation === state.minSeparation &&
        state.cacheMeta.maxPoints === state.maxPoints &&
        state.cacheMeta.cusumK === state.cusumK &&
        state.cacheMeta.cusumH === state.cusumH &&
        state.cacheMeta.ewmaAlpha === state.ewmaAlpha &&
        state.cacheMeta.ewmaZ === state.ewmaZ &&
        state.cacheMeta.penalty === state.penalty &&
        state.cacheMeta.maxChanges === state.maxChanges
      ) {
        return;
      }

      let cancelled = false;

      setState((s) => ({
        ...s,
        processing: true,
        progress: 0,
        cachedPlot: null,
        cacheMeta: undefined,
      }));

      const handle = window.setTimeout(() => {
        try {
          const cols = df.columns as string[];
          const rows = df.values as any[][];

          const tIdx = cols.indexOf(state.timeCol!);
          const vIdx = cols.indexOf(state.valueCol!);
          if (tIdx < 0 || vIdx < 0) throw new Error("Selected columns not found");

          const timeMs: number[] = [];
          const values: number[] = [];
          const timeDates: Date[] = [];

          for (let i = 0; i < rows.length; i++) {
            const t = parseTimeToMs(rows[i][tIdx]);
            const yRaw = rows[i][vIdx];
            const y = typeof yRaw === "number" ? yRaw : Number.parseFloat(String(yRaw));
            if (!Number.isFinite(t) || !Number.isFinite(y)) continue;
            timeMs.push(t);
            timeDates.push(new Date(t));
            values.push(y);
          }

          if (timeMs.length < 5) {
            const empty: PlotPayload = {
              data: [],
              layout: { autosize: true, title: { text: "Not enough valid points" } },
            };
            if (!cancelled) {
              setState((s) => ({
                ...s,
                processing: false,
                progress: 100,
                cachedPlot: empty,
                cacheMeta: {
                  timeCol: state.timeCol!,
                  valueCol: state.valueCol!,
                  method: state.method,
                  windowSize: state.windowSize,
                  zThreshold: state.zThreshold,
                  minSeparation: state.minSeparation,
                  maxPoints: state.maxPoints,
                  cusumK: state.cusumK,
                  cusumH: state.cusumH,
                  ewmaAlpha: state.ewmaAlpha,
                  ewmaZ: state.ewmaZ,
                  penalty: state.penalty,
                  maxChanges: state.maxChanges,
                  rowCount,
                },
              }));
            }
            return;
          }

          const idx = Array.from({ length: timeMs.length }, (_, i) => i);
          idx.sort((a, b) => timeMs[a] - timeMs[b]);

          const tSorted = idx.map((i) => timeDates[i]);
          const ySorted = idx.map((i) => values[i]);

          const maxP = Math.max(200, clampInt(state.maxPoints, 200, 200000, 5000));
          const start = Math.max(0, tSorted.length - maxP);
          const x = tSorted.slice(start);
          const y = ySorted.slice(start);

          const W = clampInt(state.windowSize, 2, Math.max(2, Math.floor(y.length / 4)), 10);
          const sep = clampInt(state.minSeparation, 1, Math.max(1, Math.floor(y.length / 5)), 10);
          const z = clampFloat(state.zThreshold, 0.5, 50, 3);

          setState((s) => ({ ...s, progress: 25 }));

          let cpIdx: number[] = [];

          if (state.method === "rolling_mean") {
            const score = scoreRollingMeanDiff(y, W);
            const sScore = std(score.filter((v) => Number.isFinite(v) && v > 0));
            const thresh = Number.isFinite(sScore) && sScore > 0 ? z * sScore : Infinity;
            cpIdx = pickByThreshold(score, thresh, sep);
          } else if (state.method === "cusum") {
            const kStd = clampFloat(state.cusumK, 0, 10, 0.5);
            const hStd = clampFloat(state.cusumH, 0.5, 50, 5);
            cpIdx = debounceIndices(cusumChangeIdx(y, kStd, hStd), sep);
          } else if (state.method === "ewma") {
            const alpha = clampFloat(state.ewmaAlpha, 0.01, 0.99, 0.2);
            const zStd = clampFloat(state.ewmaZ, 0.5, 50, 3);
            cpIdx = debounceIndices(ewmaChangeIdx(y, alpha, zStd), sep);
          } else if (state.method === "lrt_mean") {
            const score = scoreFixedWindowMeanShiftZ(y, W);
            cpIdx = pickByThreshold(score, z, sep);
          } else if (state.method === "binary_seg") {
            const pen = clampFloat(state.penalty, 0, 1e12, 50);
            const maxC = clampInt(state.maxChanges, 1, 500, 25);
            const minSegLen = Math.max(2, W);
            cpIdx = debounceIndices(binarySegmentationChangePoints(y, pen, maxC, minSegLen), sep);
          } else if (state.method === "pelt") {
            const pen = clampFloat(state.penalty, 0, 1e12, 50);
            const maxC = clampInt(state.maxChanges, 1, 500, 25);
            const minSegLen = Math.max(2, W);
            cpIdx = debounceIndices(peltChangePoints(y, pen, maxC, minSegLen), sep);
          }

          setState((s) => ({ ...s, progress: 70 }));

          const cpXs = cpIdx.map((i) => x[i]).filter(Boolean);

          const trace: Partial<Data> = {
            type: "scatter",
            mode: "lines",
            x,
            y,
            name: state.valueCol ?? "value",
            hovertemplate: "%{x|%Y-%m-%d %H:%M:%S}<br>%{y}<extra></extra>",
          };

          const shapes =
            cpXs.length > 0
              ? cpXs.map((cx) => ({
                  type: "line",
                  xref: "x",
                  yref: "paper",
                  x0: cx,
                  x1: cx,
                  y0: 0,
                  y1: 1,
                  line: { width: 1, dash: "dash" },
                }))
              : [];

          const payload: PlotPayload = {
            data: [trace],
            layout: {
              autosize: true,
              margin: { l: 50, r: 20, b: 45, t: 20 },
              xaxis: { title: state.timeCol ?? "time", type: "date" },
              yaxis: { title: state.valueCol ?? "value" },
              showlegend: false,
              shapes,
            },
          };

          if (cancelled) return;

          setState((s) => ({
            ...s,
            processing: false,
            progress: 100,
            cachedPlot: payload,
            cacheMeta: {
              timeCol: state.timeCol!,
              valueCol: state.valueCol!,
              method: state.method,
              windowSize: W,
              zThreshold: z,
              minSeparation: sep,
              maxPoints: maxP,
              cusumK: clampFloat(state.cusumK, 0, 10, 0.5),
              cusumH: clampFloat(state.cusumH, 0.5, 50, 5),
              ewmaAlpha: clampFloat(state.ewmaAlpha, 0.01, 0.99, 0.2),
              ewmaZ: clampFloat(state.ewmaZ, 0.5, 50, 3),
              penalty: clampFloat(state.penalty, 0, 1e12, 50),
              maxChanges: clampInt(state.maxChanges, 1, 500, 25),
              rowCount,
            },
          }));
        } catch (e) {
          console.warn("Change point detection error:", e);
          if (cancelled) return;
          setState((s) => ({
            ...s,
            processing: false,
            progress: 0,
            cachedPlot: null,
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
      state.timeCol,
      state.valueCol,
      state.method,
      state.windowSize,
      state.zThreshold,
      state.minSeparation,
      state.maxPoints,
      state.cusumK,
      state.cusumH,
      state.ewmaAlpha,
      state.ewmaZ,
      state.penalty,
      state.maxChanges,
    ]);

    const makeColSelect = (key: "timeCol" | "valueCol", placeholder: string) => (
      <Select
        value={(state as any)[key] ?? ""}
        onValueChange={(value) => setState((s) => ({ ...s, [key]: value || null }))}
      >
        <SelectTrigger className="w-[340px] rounded bg-white !text-black">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeholder}</SelectLabel>
            {columns.map((col) => (
              <SelectItem key={col} value={col}>
                {col}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const methodSelect = (
      <Select
        value={state.method}
        onValueChange={(value) => setState((s) => ({ ...s, method: value as Method }))}
      >
        <SelectTrigger className="w-[340px] rounded bg-white !text-black">
          <SelectValue placeholder="Algorithm" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Algorithm</SelectLabel>
            <SelectItem value="rolling_mean">1) Two-window rolling mean difference</SelectItem>
            <SelectItem value="cusum">2) CUSUM</SelectItem>
            <SelectItem value="ewma">3) EWMA + threshold</SelectItem>
            <SelectItem value="lrt_mean">4) Fixed-window mean shift (z-like)</SelectItem>
            <SelectItem value="binary_seg">5) Binary segmentation (mean-shift SSE)</SelectItem>
            <SelectItem value="pelt">6) PELT (mean-shift SSE)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const windowDisplay = clampInt(state.windowSize, 2, 100000, 10);
    const sepDisplay = clampInt(state.minSeparation, 1, 100000, 10);
    const zDisplay = clampFloat(state.zThreshold, 0.5, 50, 3);
    const maxPointsDisplay = clampInt(state.maxPoints, 200, 200000, 5000);

    const cusumK = clampFloat(state.cusumK, 0, 10, 0.5);
    const cusumH = clampFloat(state.cusumH, 0.5, 50, 5);

    const ewmaAlpha = clampFloat(state.ewmaAlpha, 0.01, 0.99, 0.2);
    const ewmaZ = clampFloat(state.ewmaZ, 0.5, 50, 3);

    const penalty = clampFloat(state.penalty, 0, 1e12, 50);
    const maxChanges = clampInt(state.maxChanges, 1, 500, 25);

    return (
      <div className="flex flex-col gap-3 pl-2 text-white">
        {makeColSelect("timeCol", "Time Column")}
        {makeColSelect("valueCol", "Value Column")}
        {methodSelect}

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[160px]">Window size (samples)</label>
          <Input
            type="number"
            min={2}
            value={windowDisplay}
            onChange={(e) => setState((s) => ({ ...s, windowSize: Number(e.target.value) }))}
            className="w-[160px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[160px]">Z-threshold / sensitivity</label>
          <Input
            type="number"
            step="0.1"
            min={0.5}
            value={zDisplay}
            onChange={(e) => setState((s) => ({ ...s, zThreshold: Number(e.target.value) }))}
            className="w-[160px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[160px]">Min separation (samples)</label>
          <Input
            type="number"
            min={1}
            value={sepDisplay}
            onChange={(e) => setState((s) => ({ ...s, minSeparation: Number(e.target.value) }))}
            className="w-[160px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[160px]">Max points</label>
          <Input
            type="number"
            min={200}
            value={maxPointsDisplay}
            onChange={(e) => setState((s) => ({ ...s, maxPoints: Number(e.target.value) }))}
            className="w-[160px] rounded bg-white text-black"
          />
        </div>

        {state.method === "cusum" && (
          <>
            <div className="flex items-center gap-2">
              <label className="text-xs text-white w-[160px]">CUSUM k (std units)</label>
              <Input
                type="number"
                step="0.1"
                min={0}
                value={cusumK}
                onChange={(e) => setState((s) => ({ ...s, cusumK: Number(e.target.value) }))}
                className="w-[160px] rounded bg-white text-black"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-white w-[160px]">CUSUM h (std units)</label>
              <Input
                type="number"
                step="0.1"
                min={0.5}
                value={cusumH}
                onChange={(e) => setState((s) => ({ ...s, cusumH: Number(e.target.value) }))}
                className="w-[160px] rounded bg-white text-black"
              />
            </div>
          </>
        )}

        {state.method === "ewma" && (
          <>
            <div className="flex items-center gap-2">
              <label className="text-xs text-white w-[160px]">EWMA alpha</label>
              <Input
                type="number"
                step="0.01"
                min={0.01}
                max={0.99}
                value={ewmaAlpha}
                onChange={(e) => setState((s) => ({ ...s, ewmaAlpha: Number(e.target.value) }))}
                className="w-[160px] rounded bg-white text-black"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-white w-[160px]">EWMA threshold (std)</label>
              <Input
                type="number"
                step="0.1"
                min={0.5}
                value={ewmaZ}
                onChange={(e) => setState((s) => ({ ...s, ewmaZ: Number(e.target.value) }))}
                className="w-[160px] rounded bg-white text-black"
              />
            </div>
          </>
        )}

        {(state.method === "binary_seg" || state.method === "pelt") && (
          <>
            <div className="flex items-center gap-2">
              <label className="text-xs text-white w-[160px]">Penalty</label>
              <Input
                type="number"
                step="1"
                min={0}
                value={penalty}
                onChange={(e) => setState((s) => ({ ...s, penalty: Number(e.target.value) }))}
                className="w-[160px] rounded bg-white text-black"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-white w-[160px]">Max change points</label>
              <Input
                type="number"
                min={1}
                value={maxChanges}
                onChange={(e) => setState((s) => ({ ...s, maxChanges: Number(e.target.value) }))}
                className="w-[160px] rounded bg-white text-black"
              />
            </div>
          </>
        )}

        {state.processing ? (
          <div className="flex flex-col gap-1 w-[340px] mt-1">
            <div className="h-2 bg-gray-700 rounded overflow-hidden">
              <div
                className="h-2 bg-blue-500 transition-all duration-200"
                style={{ width: `${state.progress}%` }}
              />
            </div>
            <div className="text-xs text-yellow-400 pl-1">{`Detecting: ${state.progress}%`}</div>
          </div>
        ) : (
          <div className="text-xs text-gray-200">
            Output type: <code>plot</code>
          </div>
        )}

        {state.cachedPlot ? <PlotPreview payload={state.cachedPlot} /> : null}
      </div>
    );
  },

  hideOutputPort: false,
});

function PlotPreview({ payload }: { payload: PlotPayload }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    Plotly.react(
      ref.current,
      payload.data,
      { ...payload.layout, autosize: false, width: 350, height: 260 },
      {
        staticPlot: false,
        displayModeBar: false,
        responsive: false,
      }
    );
    return () => {
      try {
        if (ref.current) Plotly.purge(ref.current);
      } catch {}
    };
  }, [payload]);

  return (
    <div className="nodrag mt-1 bg-white rounded px-0 text-center overflow-hidden">
      <div ref={ref} style={{ width: 350, height: 260 }} />
    </div>
  );
}

export default NodeChangePointDetection;
