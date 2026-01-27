import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSshapedPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  tension = 0.5 // 0 = tight, 1 = very loose
): string {
  // Vector from start to end
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  // if (dist < 1e-3) return `M ${x1},${y1} L ${x2},${y2}`;

  // --- direction & orientation ---
  const horizontalBias = Math.abs(dx) / (Math.abs(dx) + Math.abs(dy)); // 1 = mostly horizontal
  const verticalBias = 1 - horizontalBias;

  // --- curvature scaling ---
  // dynamic curvature: tighter for short lines, smoother for long lines
  const baseCurve = Math.min(0.4 + 0.3 * tension, 0.7);
  const curveStrength = baseCurve * dist * (0.5 + 0.5 * horizontalBias);

  // --- angle factor ---
  const angle = Math.atan2(dy, dx);
  const angleSin = Math.sin(angle);
  const angleCos = Math.cos(angle);

  // Control point directions:
  // C1 pulls forward from start, slightly perpendicular to avoid overlaps
  const c1x = x1 + curveStrength * angleCos - verticalBias * dist * 0.1 * angleSin;
  const c1y = y1 + curveStrength * angleSin + verticalBias * dist * 0.1 * angleCos;

  // C2 pulls backward from end, mirrored curvature
  const c2x = x2 - curveStrength * angleCos + verticalBias * dist * 0.1 * angleSin;
  const c2y = y2 - curveStrength * angleSin - verticalBias * dist * 0.1 * angleCos;

  // --- optional near-vertical compensation ---
  // if nodes are stacked vertically, bend less
  const midx = (x1 + x2) / 2;
  return `M ${x1},${y1} C ${midx},${y1} ${midx},${y2} ${x2},${y2}`;
}


export function transformPoint(
  x: number,
  y: number,
  scale: number,
  offsetX: number,
  offsetY: number
): { x: number; y: number } {
  return {
    x: (x - offsetX) / scale,
    y: (y - offsetY) / scale,
  };
}

export function getWindowCenter() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  return { x, y };
}

/**
 * Generates an array of `count` pastel colours in HSL string format.
 * @param count Number of colours to generate
 * @param saturation Saturation percentage (0–100)
 * @param lightness Lightness percentage (0–100)
 */
function generatePastelHSL(
  count: number,
  saturation: number = 70,
  lightness: number = 85
): string[] {
  return Array.from({ length: count }, (_, i) => {
    const hue = Math.round((360 / count) * i);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  });
}

// Export an array of 100 pastel colours:
export const pastelColors: string[] = generatePastelHSL(100);

// Example usage:
// console.log(pastelColors);
// ["hsl(0, 70%, 85%)", "hsl(3, 70%, 85%)", ..., "hsl(357, 70%, 85%)"]

/** Convert an HSL colour to a hex string */
function hslToHex(h: number, s: number, l: number): string {
  // Convert percentages to fractions
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    Math.round(255 * (l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))));
  return `#${[f(0), f(8), f(4)]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`;
}

// Generate 100 pastel hexes:
export const pastelHexColors: string[] = generatePastelHSL(100).map((hsl) => {
  // extract numbers from "hsl(h, s%, l%)"
  const [h, s, l] = hsl.match(/\d+/g)!.map(Number);
  return hslToHex(h, s, l);
});

import * as dfd from "danfojs";

/**
 * Creates a deep, isolated copy of a DataFrame.
 * Uses df.copy({ deep: true }) when available (preserves dtypes and metadata).
 * Falls back to JSON serialization if deep copy fails for any reason.
 */
export function safeCopy(df: dfd.DataFrame | null): dfd.DataFrame | null {
  if (!df) return null;

  try {
    // Preferred method (Danfo.js ≥1.2.0)
    return new dfd.DataFrame(dfd.toJSON(df));
  } catch (err) {
    console.warn("safeCopy(): deep copy failed, falling back to JSON clone:", err);
    try {
      return new dfd.DataFrame(df.toJSON());
    } catch {
      // Final fallback: shallow copy to at least avoid shared reference
      return df.copy();
    }
  }
}

/**
 * Returns a new DataFrame with one column replaced safely.
 * Guarantees that upstream DataFrames remain unmodified.
 */
export function withReplacedColumn(
  df: dfd.DataFrame,
  colName: string,
  newValues: any[]
): dfd.DataFrame {
  const copy = safeCopy(df);
  if (!copy) throw new Error("Invalid DataFrame in withReplacedColumn");
  return copy.addColumn(colName, newValues, { inplace: false });
}

export function toNumericMatrix(df: dfd.DataFrame, cols: string[]): number[][] {
  const data = df.loc({ columns: cols }).values as (string | number | boolean)[][];
  return data.map((row) =>
    row.map((v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    })
  );
}

// - Treats "2020" (string) and 2020 (number) as a YEAR, not "2020 seconds after epoch".
// - Handles common EU formats like "31.12.2024", "31/12/2024", and "31-12-2024".
// - Handles partial dates like "2024-07" (year-month) -> first day of month.
// - Falls back to Date.parse for ISO / RFC formats, with a conservative final fallback.

export function parseTimeToMs(raw: any): number {
  if (raw == null) return NaN;

  // ---------------------------------------------------------------------------
  // Date instance
  // ---------------------------------------------------------------------------
  if (raw instanceof Date) {
    const t = raw.getTime();
    return Number.isFinite(t) ? t : NaN;
  }

  // ---------------------------------------------------------------------------
  // Numbers (avoid misreading a YEAR as unix seconds)
  // ---------------------------------------------------------------------------
  if (typeof raw === "number") {
    if (!Number.isFinite(raw)) return NaN;

    // If it looks like a year, interpret as Jan 1st of that year (UTC).
    // (You can switch to local time by removing Date.UTC.)
    if (Number.isInteger(raw) && raw >= 1000 && raw <= 3000) {
      return Date.UTC(raw, 0, 1);
    }

    // Heuristics:
    // - >= 1e12: almost certainly ms epoch
    // - >= 1e9: plausibly seconds epoch (current seconds ~ 1.7e9)
    if (raw >= 1e12) return raw;
    if (raw >= 1e9) return raw * 1000;

    // Otherwise: ambiguous numeric. Treat as seconds to preserve previous behavior,
    // but at least years are no longer misparsed.
    return raw * 1000;
  }

  // BigInt epoch (rare, but safe)
  if (typeof raw === "bigint") {
    const n = Number(raw);
    if (!Number.isFinite(n)) return NaN;
    if (n >= 1e12) return n;
    if (n >= 1e9) return n * 1000;
    return n * 1000;
  }

  // ---------------------------------------------------------------------------
  // Strings
  // ---------------------------------------------------------------------------
  const s0 = String(raw).trim();
  if (!s0) return NaN;

  // Normalize whitespace
  const s = s0.replace(/\s+/g, " ");

  // 1) Year only: "2020"
  {
    const m = s.match(/^(\d{4})$/);
    if (m) {
      const y = Number(m[1]);
      if (y >= 1000 && y <= 3000) return Date.UTC(y, 0, 1);
    }
  }

  // 2) Year-month: "2020-07" or "2020/07" or "2020.07"
  {
    const m = s.match(/^(\d{4})[-\/.](\d{1,2})$/);
    if (m) {
      const y = Number(m[1]);
      const mo = Number(m[2]);
      if (y >= 1000 && y <= 3000 && mo >= 1 && mo <= 12) return Date.UTC(y, mo - 1, 1);
    }
  }

  // 3) ISO-ish date/time: try native parser first for robust timezone handling.
  //    Works well for:
  //    - "2020-01-01"
  //    - "2020-01-01T12:30:00Z"
  //    - "2020-01-01 12:30:00"
  //    - "Tue, 01 Jan 2020 00:00:00 GMT"
  {
    const t = Date.parse(s);
    if (Number.isFinite(t)) return t;
  }

  // 4) Dotted / slashed / dashed day-first formats common in EU:
  //    "31.12.2024", "31/12/2024", "31-12-2024"
  //    Also supports optional time "31.12.2024 23:59:59"
  {
    const m = s.match(
      /^(\d{1,2})[./-](\d{1,2})[./-](\d{4})(?:[ T](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:\.(\d{1,3}))?)?)?)?$/
    );
    if (m) {
      const d = Number(m[1]);
      const mo = Number(m[2]);
      const y = Number(m[3]);

      const hh = m[4] != null ? Number(m[4]) : 0;
      const mm = m[5] != null ? Number(m[5]) : 0;
      const ss = m[6] != null ? Number(m[6]) : 0;
      const ms = m[7] != null ? Number(m[7].padEnd(3, "0")) : 0;

      if (
        y >= 1000 &&
        y <= 3000 &&
        mo >= 1 &&
        mo <= 12 &&
        d >= 1 &&
        d <= 31 &&
        hh >= 0 &&
        hh <= 23 &&
        mm >= 0 &&
        mm <= 59 &&
        ss >= 0 &&
        ss <= 59 &&
        ms >= 0 &&
        ms <= 999
      ) {
        // Use UTC for deterministic plotting; switch to `new Date(y, mo-1, d, ...)`
        // if you want local-time interpretation.
        return Date.UTC(y, mo - 1, d, hh, mm, ss, ms);
      }
    }
  }

  // 5) Ambiguous "MM/DD/YYYY" vs "DD/MM/YYYY" with optional time:
  //    Heuristic: if first part > 12 -> day-first; else if second part > 12 -> month-first;
  //    else default day-first (EU-friendly).
  {
    const m = s.match(
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ T](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:\.(\d{1,3}))?)?)?)?$/
    );
    if (m) {
      const a = Number(m[1]);
      const b = Number(m[2]);
      const y = Number(m[3]);

      const hh = m[4] != null ? Number(m[4]) : 0;
      const mm = m[5] != null ? Number(m[5]) : 0;
      const ss = m[6] != null ? Number(m[6]) : 0;
      const ms = m[7] != null ? Number(m[7].padEnd(3, "0")) : 0;

      let d = a;
      let mo = b;

      if (a <= 12 && b <= 12) {
        // default day-first (EU)
        d = a;
        mo = b;
      } else if (a > 12 && b <= 12) {
        // must be day/month
        d = a;
        mo = b;
      } else if (b > 12 && a <= 12) {
        // must be month/day
        d = b;
        mo = a;
      }

      if (
        y >= 1000 &&
        y <= 3000 &&
        mo >= 1 &&
        mo <= 12 &&
        d >= 1 &&
        d <= 31 &&
        hh >= 0 &&
        hh <= 23 &&
        mm >= 0 &&
        mm <= 59 &&
        ss >= 0 &&
        ss <= 59 &&
        ms >= 0 &&
        ms <= 999
      ) {
        return Date.UTC(y, mo - 1, d, hh, mm, ss, ms);
      }
    }
  }

  // Final conservative fallback: extract a 4-digit year anywhere ("FY2020", "2020年")
  {
    const m = s.match(/(?:^|[^\d])(\d{4})(?:[^\d]|$)/);
    if (m) {
      const y = Number(m[1]);
      if (y >= 1000 && y <= 3000) return Date.UTC(y, 0, 1);
    }
  }

  return NaN;
}