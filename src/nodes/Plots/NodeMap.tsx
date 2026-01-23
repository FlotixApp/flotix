// NodeMapLeaflet.tsx
import React, { useEffect, useMemo } from "react";
import { createNodeComponent } from "../createNodeComponent";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// ✅ Leaflet
import { MapContainer, TileLayer, Marker, Tooltip as LeafletTooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ✅ Marker assets (bundler-safe)
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// ✅ Explicit icon (most reliable fix for the "?" marker)
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

const NodeMap = createNodeComponent({
  label: "Map (Leaflet)",
  description: "Plot latitude/longitude points from a dataframe on a Leaflet map with hover tooltips.",
  width: 420,
  initialInputs: ["dataframe"],
  outputType: "plot",
  initialState: {
    latCol: null as string | null,
    lngCol: null as string | null,
    labelCol: null as string | null,
    data: null as any,
  },

  computeOutput: (inputs) => {
    const df = inputs[0]?.value;
    return df && df.shape ? df : null;
  },

  renderInputControls: () => null,

  renderControls: ({ inputs, state, setState }) => {
    const df = inputs[0]?.value ?? null;

    const columns = useMemo(() => (df ? df.columns : []), [df]);
    const rows = useMemo(() => (df ? df.values : []), [df]);

    // Keep df in state if you want it later
    useEffect(() => {
      if (df) setState((prev) => ({ ...prev, data: df }));
    }, [df, setState]);

    const makeSelect = (axisKey: "latCol" | "lngCol" | "labelCol", placeholder: string) => (
      <Select
        value={(state as any)[axisKey] ?? ""}
        onValueChange={(value) => setState((s) => ({ ...s, [axisKey]: value }))}
      >
        <SelectTrigger className="w-[220px] rounded bg-white !text-black">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeholder}</SelectLabel>
            {columns.map((col: string) => (
              <SelectItem key={col} value={col}>
                {col}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const points = useMemo(() => {
      if (!state.latCol || !state.lngCol || !rows?.length) return [];

      const latIdx = columns.indexOf(state.latCol);
      const lngIdx = columns.indexOf(state.lngCol);
      const labelIdx = state.labelCol ? columns.indexOf(state.labelCol) : -1;

      if (latIdx === -1 || lngIdx === -1) return [];

      return rows
        .map((row: any) => {
          const lat = Number.parseFloat(row[latIdx]);
          const lng = Number.parseFloat(row[lngIdx]);
          if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;

          const label =
            labelIdx !== -1 && row[labelIdx] != null ? String(row[labelIdx]) : "";

          return { lat, lng, label };
        })
        .filter(Boolean) as Array<{ lat: number; lng: number; label: string }>;
    }, [rows, columns, state.latCol, state.lngCol, state.labelCol]);

    // Center on first point or fallback
    const center = useMemo<[number, number]>(() => {
      if (points.length > 0) return [points[0].lat, points[0].lng];
      return [0, 0];
    }, [points]);

    const zoom = points.length > 0 ? 4 : 2;

    return (
      <div className="flex flex-col gap-3 pl-2">
        <div className="flex flex-col gap-2">
          {makeSelect("latCol", "Latitude Column")}
          {makeSelect("lngCol", "Longitude Column")}
          {makeSelect("labelCol", "Label Column")}
        </div>

        {/* ✅ IMPORTANT: prevents your node Draggable from stealing map drag */}
        <div
          className="nodrag"
          style={{
            width: 380,
            height: 280,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <MapContainer
            center={center}
            zoom={zoom}
            style={{ width: "100%", height: "100%" }}
            scrollWheelZoom={true}
            dragging={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {points.map((pt, i) => (
              <Marker
                key={`${pt.lat}-${pt.lng}-${i}`}
                position={[pt.lat, pt.lng]}
                icon={defaultMarkerIcon}
              >
                {pt.label ? (
                  <LeafletTooltip direction="top" offset={[0, -10]} opacity={0.95} sticky>
                    {pt.label}
                  </LeafletTooltip>
                ) : null}
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    );
  },

  hideOutputPort: true,
});

export default NodeMap;
