// src/nodes/Plots/NodeTimeSeries.tsx

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

type State = {
  timeCol: string | null;
  valueCol: string | null;
  groupCol: string | null;
  sortAsc: boolean;
  maxPoints: number;
  data: dfd.DataFrame | null;
};

const NONE_VALUE = "__none__";

const NodeTimeSeries = createNodeComponent<State>({
  label: "Time Series (Line)",
  description:
    "Line chart over time from a dataframe. Supports optional grouping, sorting by time, and point limiting.",
  width: 360,
  initialInputs: ["dataframe"],
  outputType: "plot",
  initialState: {
    timeCol: null,
    valueCol: null,
    groupCol: null,
    sortAsc: true,
    maxPoints: 5000,
    data: null,
  },

  computeOutput: (inputs) => {
    const df = inputs[0]?.value ?? null;
    return df && df.shape ? df : null;
  },

  renderInputControls: () => null,

  renderControls: ({ inputs, state, setState }) => {
    const df: dfd.DataFrame | null = inputs[0]?.value ?? null;
    const columns = useMemo(() => (df ? (df.columns as string[]) : []), [df]);

    useEffect(() => {
      if (df && df.shape) setState((s) => ({ ...s, data: df }));
      else setState((s) => ({ ...s, data: null }));
    }, [df, setState]);

    const plotRef = useRef<HTMLDivElement>(null);

    const { plotData, layout } = useMemo(() => {
      const baseLayout: Partial<Layout> = {
        autosize: true,
        width: 320,
        height: 280,
        margin: { l: 40, r: 10, b: 40, t: 10 },
        showlegend: true,
      };

      if (!state.data || !state.timeCol || !state.valueCol) {
        return { plotData: null as Partial<Data>[] | null, layout: baseLayout };
      }

      const cols = state.data.columns as string[];
      const rows = state.data.values as any[][];

      const tIdx = cols.indexOf(state.timeCol);
      const vIdx = cols.indexOf(state.valueCol);
      const gIdx = state.groupCol ? cols.indexOf(state.groupCol) : -1;

      if (tIdx === -1 || vIdx === -1) {
        return { plotData: null, layout: baseLayout };
      }

      let pts: { t: number; x: Date; y: number; g: string }[] = [];

      for (const row of rows) {
        const rawT = row[tIdx];
        const rawY = row[vIdx];

        const tMs =
          rawT instanceof Date
            ? rawT.getTime()
            : typeof rawT === "number"
              ? rawT > 1e12
                ? rawT
                : rawT * 1000
              : Date.parse(String(rawT));

        const y = typeof rawY === "number" ? rawY : Number.parseFloat(String(rawY));
        if (!Number.isFinite(tMs) || !Number.isFinite(y)) continue;

        const g =
          gIdx !== -1 && row[gIdx] != null && String(row[gIdx]).length > 0
            ? String(row[gIdx])
            : "series";

        pts.push({ t: tMs, x: new Date(tMs), y, g });
      }

      if (pts.length === 0) {
        return { plotData: null, layout: baseLayout };
      }

      pts.sort((a, b) => (state.sortAsc ? a.t - b.t : b.t - a.t));

      const maxP = Math.max(50, Number(state.maxPoints) || 5000);
      if (pts.length > maxP) pts = pts.slice(0, maxP);

      const byGroup = new Map<string, { x: Date[]; y: number[] }>();
      for (const p of pts) {
        if (!byGroup.has(p.g)) byGroup.set(p.g, { x: [], y: [] });
        byGroup.get(p.g)!.x.push(p.x);
        byGroup.get(p.g)!.y.push(p.y);
      }

      const traces: Partial<Data>[] = Array.from(byGroup.entries()).map(
        ([name, s]) => ({
          type: "scatter",
          mode: "lines",
          name,
          x: s.x,
          y: s.y,
          hovertemplate:
            "%{x|%Y-%m-%d %H:%M:%S}<br>%{y}<extra>" + name + "</extra>",
        })
      );

      const finalLayout: Partial<Layout> = {
        ...baseLayout,
        xaxis: { title: state.timeCol ?? "time", type: "date" },
        yaxis: { title: state.valueCol ?? "value" },
        legend:
          traces.length > 1
            ? {
                x: 0.02,
                y: 0.98,
                xanchor: "left",
                yanchor: "top",
                bgcolor: "rgba(255,255,255,0.5)",
                bordercolor: "rgba(0,0,0,0.1)",
                borderwidth: 1,
                orientation: "v",
              }
            : undefined,
      };

      return { plotData: traces, layout: finalLayout };
    }, [
      state.data,
      state.timeCol,
      state.valueCol,
      state.groupCol,
      state.sortAsc,
      state.maxPoints,
    ]);

    useLayoutEffect(() => {
      if (!plotRef.current) return;

      if (!plotData) {
        Plotly.purge(plotRef.current);
        plotRef.current.innerHTML = "";
        return;
      }

      Plotly.react(plotRef.current, plotData, layout, {
        staticPlot: false,
        displayModeBar: false,
        responsive: true,
      });
    }, [plotData, layout]);

    const makeSelect = (
      key: "timeCol" | "valueCol" | "groupCol",
      placeholder: string
    ) => (
      <Select
        value={
          key === "groupCol"
            ? state.groupCol ?? NONE_VALUE
            : (state as any)[key] ?? ""
        }
        onValueChange={(value) => {
          if (key === "groupCol" && value === NONE_VALUE) {
            setState((s) => ({ ...s, groupCol: null }));
            return;
          }
          setState((s) => ({ ...s, [key]: value || null }));
        }}
      >
        <SelectTrigger className="w-[300px] rounded bg-white !text-black">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeholder}</SelectLabel>

            {key === "groupCol" && (
              <SelectItem value={NONE_VALUE}>(none)</SelectItem>
            )}

            {columns.map((col) => (
              <SelectItem key={col} value={col}>
                {col}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    return (
      <div className="flex flex-col gap-3 pl-2">
        {makeSelect("timeCol", "Time Column")}
        {makeSelect("valueCol", "Value Column")}
        {makeSelect("groupCol", "Group Column (optional)")}

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[110px]">Max points</label>
          <Input
            type="number"
            min={50}
            max={200000}
            value={state.maxPoints}
            onChange={(e) =>
              setState((s) => ({ ...s, maxPoints: Number(e.target.value) }))
            }
            className="w-[190px] rounded bg-white text-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs text-white w-[110px]">Sort</label>
          <Select
            value={state.sortAsc ? "asc" : "desc"}
            onValueChange={(v) =>
              setState((s) => ({ ...s, sortAsc: v === "asc" }))
            }
          >
            <SelectTrigger className="w-[190px] rounded bg-white !text-black">
              <SelectValue placeholder="Sort order" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort order</SelectLabel>
                <SelectItem value="asc">Ascending (old → new)</SelectItem>
                <SelectItem value="desc">Descending (new → old)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {plotData ? (
          <div className="nodrag mt-1 bg-white rounded px-0 text-center">
            <div ref={plotRef} style={{ width: 320, height: 280 }} />
          </div>
        ) : (
          <div className="text-xs text-gray-200">
            Select a time column and value column to render.
          </div>
        )}
      </div>
    );
  },

  hideOutputPort: true,
});

export default NodeTimeSeries;
