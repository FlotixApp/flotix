// src/BottomPanel.tsx

import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Button } from "./components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { useNodeEngine } from "./NodeEngineContext";
import * as dfd from "danfojs";
import { DataFrameViewer } from "./components/ui/DataFrameViewer";

import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip as LeafletTooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import Plotly, { Data, Layout } from "plotly.js-dist-min";

type MapPoint = { lat: number; lng: number; label: string };
type MapPayload = { points: MapPoint[]; center: [number, number]; zoom: number };
type PlotPayload = { data: Partial<Data>[]; layout: Partial<Layout> };

const defaultMarkerIcon = L.icon({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

interface BottomPanelProps {
  sidebarWidth: number;
}

const MIN_HEIGHT = 100;
const MAX_HEIGHT = 500;

export function BottomPanel({ sidebarWidth }: BottomPanelProps) {
  const [height, setHeight] = useState(250);
  const [isDragging, setIsDragging] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const { selectedNode } = useNodeEngine();

  const df =
    selectedNode?.outputType === "dataframe"
      ? (selectedNode.outputValue as dfd.DataFrame)
      : null;

  const mapPayload =
    selectedNode?.outputType === "map"
      ? (selectedNode.outputValue as MapPayload)
      : null;

  const plotPayload =
    selectedNode?.outputType === "plot"
      ? (selectedNode.outputValue as PlotPayload)
      : null;

  const plotHostRef = useRef<HTMLDivElement>(null); // white container that fills panel content
  const plotDivRef = useRef<HTMLDivElement>(null); // plotly root div

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const stopDrag = () => setIsDragging(false);

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging) return;
    const newHeight = window.innerHeight - e.clientY;
    setHeight(Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, newHeight)));
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDrag);
      window.addEventListener("mouseup", stopDrag);
      document.body.style.cursor = "ns-resize";
    } else {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", stopDrag);
      document.body.style.cursor = "default";
    }
    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", stopDrag);
      document.body.style.cursor = "default";
    };
  }, [isDragging]);

  useEffect(() => {
    if ((df || mapPayload || plotPayload) && isCollapsed) setIsCollapsed(false);
  }, [df, mapPayload, plotPayload, isCollapsed]);

  // Create/update the plot when payload changes.
  useEffect(() => {
    if (!plotPayload || !plotDivRef.current) return;

    Plotly.react(plotDivRef.current, plotPayload.data, plotPayload.layout, {
      staticPlot: false,
      displayModeBar: false,
      responsive: true,

      // ✅ make default dblclick behaviour explicit
      doubleClick: "reset+autosize",
      doubleClickDelay: 300,
    });

    return () => {
      try {
        if (plotDivRef.current) Plotly.purge(plotDivRef.current);
      } catch {}
    };
  }, [plotPayload]);

  // ✅ Fallback: if Plotly doesn't receive dblclick (overlay/event capture),
  // force a reset anyway.
  useEffect(() => {
    if (!plotPayload) return;

    const host = plotHostRef.current;
    const plotDiv = plotDivRef.current;
    if (!host || !plotDiv) return;

    const forceReset = () => {
      try {
        // reset primary axes; this covers the common case
        Plotly.relayout(plotDiv, {
          "xaxis.autorange": true,
          "yaxis.autorange": true,
        });
      } catch {}
    };

    const onDblClickCapture = (_e: MouseEvent) => {
      // capture-phase: runs even if something above Plotly is interfering
      forceReset();
    };

    host.addEventListener("dblclick", onDblClickCapture, true);
    return () => host.removeEventListener("dblclick", onDblClickCapture, true);
  }, [plotPayload]);

  // Make Plotly resize to fill BOTH width + height of the BottomPanel content.
  useLayoutEffect(() => {
    if (!plotPayload) return;
    const host = plotHostRef.current;
    const plotDiv = plotDivRef.current;
    if (!host || !plotDiv) return;

    const resize = () => {
      try {
        Plotly.Plots.resize(plotDiv);
      } catch {}
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(host);

    window.addEventListener("resize", resize);

    // If panel just expanded, give layout a frame to settle then resize.
    requestAnimationFrame(() => resize());
    requestAnimationFrame(() => resize());

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [plotPayload, isCollapsed]);

  return (
    <div
      ref={panelRef}
      className={`select-none fixed bottom-0 right-0 bg-zinc-900 text-white border-t border-gray-700 transition-all ${
        isCollapsed ? "h-8" : ""
      }`}
      style={{
        height: isCollapsed ? "32px" : `${height}px`,
        left: `${sidebarWidth}px`,
      }}
    >
      {/* Drag Handle */}
      <div
        onMouseDown={startDrag}
        className="h-2 cursor-ns-resize bg-gray-600 hover:bg-gray-400"
      />

      {/* Header / Collapse toggle */}
      <div className="flex items-center justify-between text-gray-200 border-none px-3 h-8">
        <div />
        <Button
          className="
            !bg-transparent
            !hover:!bg-transparent
            !ring-0
            !hover:!ring-0
            !border-0
            !hover:!border-0
            !hover:text-gray-200
            !text-gray-200
          "
          variant="outline"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform duration-200 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {!isCollapsed && (
        <div className="p-2 h-[calc(100%-32px)] overflow-hidden">
          {df ? (
            <div className="h-full w-full draggable-item">
              <DataFrameViewer df={df} />
            </div>
          ) : mapPayload ? (
            <div className="h-full w-full">
              <div className="nodrag w-full h-full overflow-hidden rounded">
                <MapContainer
                  center={mapPayload.center}
                  zoom={mapPayload.zoom}
                  style={{ width: "100%", height: "100%" }}
                  scrollWheelZoom={true}
                  dragging={true}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  />
                  {mapPayload.points.map((pt, i) => (
                    <Marker
                      key={`${pt.lat}-${pt.lng}-${i}`}
                      position={[pt.lat, pt.lng]}
                      icon={defaultMarkerIcon}
                    >
                      {pt.label ? (
                        <LeafletTooltip
                          direction="top"
                          offset={[0, -10]}
                          opacity={0.95}
                          sticky
                        >
                          {pt.label}
                        </LeafletTooltip>
                      ) : null}
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          ) : plotPayload ? (
            <div className="h-full w-full">
              <div
                ref={plotHostRef}
                className="nodrag w-full h-full overflow-hidden rounded bg-white"
              >
                {/* ensure Plotly can receive pointer events */}
                <div
                  ref={plotDivRef}
                  className="w-full h-full"
                  style={{ pointerEvents: "auto" }}
                />
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-sm italic">
              No DataFrame, Map, or Plot selected
            </div>
          )}
        </div>
      )}
    </div>
  );
}
