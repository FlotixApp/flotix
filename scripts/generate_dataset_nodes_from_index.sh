#!/usr/bin/env bash
set -e

# Usage:
#   ./generate_nodes_from_dataset_index.sh dataset_index.csv output_root_dir [--inline-max-kb 450]
#
# dataset_index.csv expected columns:
#   domain,dataset,source,raw_csv,github
#
# Output:
#   output_root_dir/<domain>/<source>/<NodeName>.tsx
#   output_root_dir/<domain>/<source>/<dataset>.csv
#
# Behavior:
# - Small CSVs inline EXACTLY like your original node generator:
#     csvjson -> const dataset = [...] -> new dfd.DataFrame(dataset)
# - If csvjson fails OR CSV too big => generate runtime-load node (still works)
# - Fixes Vite import failures by computing correct relative path to createNodeComponent.tsx
# - Fixes StrictMode "stuck on Loading CSV..." via startedRef (no cancelled flag, no early return on state.loading)
# - Fixes runtime CSV "malformed trailing quote" errors by retrying danfo readCSV with quotes disabled

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 dataset_index.csv output_root_dir [--inline-max-kb 450]"
  exit 1
fi

INDEX_CSV="$1"
OUTPUT_ROOT="$2"

INLINE_MAX_KB=450
shift 2

while [ "$#" -gt 0 ]; do
  case "$1" in
    --inline-max-kb)
      INLINE_MAX_KB="${2:-}"
      if [ -z "$INLINE_MAX_KB" ]; then
        echo "Error: --inline-max-kb requires a number (e.g. --inline-max-kb 450)"
        exit 1
      fi
      shift 2
      ;;
    *)
      echo "Unknown option: $1"
      echo "Usage: $0 dataset_index.csv output_root_dir [--inline-max-kb 450]"
      exit 1
      ;;
  esac
done

if ! command -v csvjson >/dev/null 2>&1; then
  echo "Error: csvjson (from csvkit) is required but not installed."
  echo "Install via: pip install csvkit"
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "Error: curl is required but not installed."
  exit 1
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "Error: python3 is required but not installed."
  exit 1
fi

mkdir -p "$OUTPUT_ROOT"

# ----------------------------
# Locate createNodeComponent.tsx
# ----------------------------
CREATE_NODECOMP_PATH="$(python3 - <<'PY'
import os

start = os.getcwd()
target_rel = os.path.join("src", "nodes", "createNodeComponent.tsx")

cur = start
while True:
  candidate = os.path.join(cur, target_rel)
  if os.path.isfile(candidate):
    print(candidate)
    break
  parent = os.path.dirname(cur)
  if parent == cur:
    print("")
    break
  cur = parent
PY
)"

if [ -z "$CREATE_NODECOMP_PATH" ]; then
  echo "Error: Could not find src/nodes/createNodeComponent.tsx by searching upward from:"
  echo "  $(pwd)"
  echo "Make sure you run this script somewhere inside your project repo."
  exit 1
fi

# ----------------------------
# Helpers
# ----------------------------
slugify() {
  echo "$1" \
    | tr '[:upper:]' '[:lower:]' \
    | sed -E 's/[^a-z0-9]+/_/g; s/^_+|_+$//g; s/_+/_/g'
}

to_pascal_case() {
  echo "$1" \
    | sed -E 's/[^a-zA-Z0-9]+/ /g' \
    | awk '{
        for(i=1;i<=NF;i++){
          $i=toupper(substr($i,1,1)) substr($i,2)
        }
        printf "%s", $0
      }' \
    | tr -d ' '
}

safe_component_name() {
  local base
  base="$(to_pascal_case "$1")"
  if [[ ! "$base" =~ ^[A-Za-z] ]]; then
    base="Dataset${base}"
  fi
  echo "Node${base}"
}

compute_import_path() {
  local target_dir="$1"
  python3 - <<PY
import os
target_dir = os.path.abspath("$target_dir")
node_comp = os.path.abspath("$CREATE_NODECOMP_PATH")
rel = os.path.relpath(node_comp, target_dir)
if rel.endswith(".tsx"):
  rel = rel[:-4]
rel = rel.replace(os.sep, "/")
if not (rel.startswith("./") or rel.startswith("../")):
  rel = "./" + rel
print(rel)
PY
}

# ----------------------------
# Parse dataset_index.csv robustly
# Output TSV: domain \t dataset \t source \t raw_csv
# Handles unquoted commas inside dataset/source fields.
# ----------------------------
echo "Parsing dataset index..."
python3 - <<'PY' "$INDEX_CSV" > /tmp/dataset_index_normalized.tsv
import sys

path = sys.argv[1]
lines = []
with open(path, "r", encoding="utf-8") as f:
  for ln in f:
    ln = ln.strip()
    if ln:
      lines.append(ln)

if not lines:
  sys.exit(0)

if lines[0].lower().startswith("domain,"):
  lines = lines[1:]

for ln in lines:
  parts = [p.strip() for p in ln.split(",")]
  if len(parts) < 3:
    continue

  domain = parts[0].strip()

  # domain,dataset,source,raw_csv,github (dataset/source may contain commas unquoted)
  if len(parts) >= 5:
    raw_csv = parts[-2].strip()
    mid = [p.strip() for p in parts[1:-2]]  # dataset + source-ish

    if len(mid) == 0:
      dataset, source = "dataset", "unknown_source"
    elif len(mid) == 1:
      dataset, source = mid[0], "unknown_source"
    else:
      dataset = ",".join(mid[:-1]).strip()
      source = (mid[-1].strip() or "unknown_source")
  else:
    # minimal fallback: domain,dataset,url
    dataset = parts[1].strip()
    source = "unknown_source"
    raw_csv = parts[-1].strip()

  if raw_csv:
    print(f"{domain}\t{dataset}\t{source}\t{raw_csv}")
PY

TOTAL="$(wc -l < /tmp/dataset_index_normalized.tsv | tr -d ' ')"
echo "Found $TOTAL rows."
echo "Inline max size: ${INLINE_MAX_KB}KB (above this => runtime-load node)"
echo "createNodeComponent: $CREATE_NODECOMP_PATH"
echo

# ----------------------------
# Node templates
# ----------------------------
write_inline_node() {
  local tsx_path="$1"
  local csv_path="$2"
  local dataset_name="$3"
  local component_name="$4"
  local json_data="$5"
  local import_path="$6"

  cat <<EOF > "$tsx_path"
import { createNodeComponent } from "${import_path}";
import * as dfd from "danfojs";

// Auto-generated from: $csv_path
// Generated on: $(date)

const dataset = $json_data;

const ${component_name} = createNodeComponent({
  label: "${dataset_name}",
  description: "Dataset node generated automatically from CSV.",
  width: 260,
  initialInputs: [],
  outputType: "dataframe",
  initialState: {},

  computeOutput: () => new dfd.DataFrame(dataset),

  renderInputControls: () => null,

  renderControls: () => (
    <div className="text-xs text-white font-mono bg-black bg-opacity-30 rounded p-2">
      Rows: {dataset.length}<br />
      Columns: {Object.keys(dataset[0]).length}
    </div>
  ),

  renderOutput: (value) =>
    value instanceof dfd.DataFrame ? (
      <div className="text-white text-xs font-mono pt-1">
        Output: DataFrame [{value.shape[0]}×{value.shape[1]}]
      </div>
    ) : null,
});

export default ${component_name};
EOF
}

# ✅ StrictMode-safe runtime-load node + CSV parse retry for malformed quotes
write_runtime_node() {
  local tsx_path="$1"
  local csv_path="$2"
  local csv_filename="$3"
  local dataset_name="$4"
  local component_name="$5"
  local reason="$6"
  local import_path="$7"

  cat <<EOF > "$tsx_path"
import React, { useEffect, useRef } from "react";
import { createNodeComponent } from "${import_path}";
import * as dfd from "danfojs";

// Auto-generated from: $csv_path
// Generated on: $(date)
//
// NOTE: This dataset is loaded at runtime because:
// ${reason}

const ${component_name} = createNodeComponent({
  label: "${dataset_name}",
  description: "Dataset node generated automatically from CSV.",
  width: 260,
  initialInputs: [],
  outputType: "dataframe",
  initialState: {
    df: null as dfd.DataFrame | null,
    loading: false,
    error: "" as string,
  },

  computeOutput: (_inputs, state) => state.df,

  renderInputControls: () => null,

  renderControls: ({ state, setState }) => {
    const startedRef = useRef(false);

    useEffect(() => {
      // ✅ StrictMode-safe: run once per component lifetime
      if (startedRef.current) return;
      startedRef.current = true;

      const load = async () => {
        try {
          setState((prev) => ({ ...prev, loading: true, error: "" }));

          const csvUrl = new URL("./${csv_filename}", import.meta.url).toString();

          // ✅ Try normal parse first
          // ✅ If it fails (e.g. malformed trailing quote), retry with quotes disabled
          let df: dfd.DataFrame;
          try {
            df = await dfd.readCSV(csvUrl, {
              header: true,
              skipEmptyLines: true,
            } as any);
          } catch (_err) {
            df = await dfd.readCSV(csvUrl, {
              header: true,
              skipEmptyLines: true,
              quotes: false,
            } as any);
          }

          setState((prev) => ({ ...prev, df, loading: false }));
        } catch (e: any) {
          setState((prev) => ({
            ...prev,
            loading: false,
            error: e?.message ? String(e.message) : "Failed to load CSV",
          }));
        }
      };

      load();
    }, [setState]);

    if (state.loading) {
      return (
        <div className="text-xs text-white font-mono bg-black bg-opacity-30 rounded p-2">
          Loading CSV...
        </div>
      );
    }

    if (state.error) {
      return (
        <div className="text-xs text-red-200 font-mono bg-black bg-opacity-30 rounded p-2">
          Error: {state.error}
        </div>
      );
    }

    if (!state.df) {
      return (
        <div className="text-xs text-white font-mono bg-black bg-opacity-30 rounded p-2">
          No DataFrame loaded yet.
        </div>
      );
    }

    return (
      <div className="text-xs text-white font-mono bg-black bg-opacity-30 rounded p-2">
        Rows: {state.df.shape[0]}<br />
        Columns: {state.df.shape[1]}
      </div>
    );
  },

  renderOutput: (value) =>
    value instanceof dfd.DataFrame ? (
      <div className="text-white text-xs font-mono pt-1">
        Output: DataFrame [{value.shape[0]}×{value.shape[1]}]
      </div>
    ) : null,
});

export default ${component_name};
EOF
}

# ----------------------------
# Main loop (domain/source)
# ----------------------------
i=0

while IFS=$'\t' read -r DOMAIN DATASET_NAME SOURCE RAW_URL; do
  i=$((i+1))

  DOMAIN="${DOMAIN:-misc}"
  SOURCE="${SOURCE:-unknown_source}"
  DATASET_NAME="${DATASET_NAME:-dataset}"
  RAW_URL="${RAW_URL:-}"

  if [ -z "$RAW_URL" ]; then
    echo "[$i/$TOTAL] Skipping (no raw_csv URL): $DATASET_NAME"
    continue
  fi

  DOMAIN_DIR="$(slugify "$DOMAIN")"
  SOURCE_DIR="$(slugify "$SOURCE")"
  TARGET_DIR="$OUTPUT_ROOT/$DOMAIN_DIR/$SOURCE_DIR"
  mkdir -p "$TARGET_DIR"

  DATASET_SLUG="$(slugify "$DATASET_NAME")"
  CSV_FILENAME="${DATASET_SLUG}.csv"
  CSV_PATH="$TARGET_DIR/$CSV_FILENAME"

  COMPONENT_NAME="$(safe_component_name "$DATASET_NAME")"
  TSX_PATH="$TARGET_DIR/${COMPONENT_NAME}.tsx"

  IMPORT_PATH="$(compute_import_path "$TARGET_DIR")"

  echo "[$i/$TOTAL] $DOMAIN / $SOURCE :: $DATASET_NAME"
  echo "          Downloading CSV..."
  echo "          Import path: $IMPORT_PATH"

  if ! curl -L --fail --retry 3 --retry-delay 2 -o "$CSV_PATH" "$RAW_URL"; then
    echo "          ❌ Failed download: $RAW_URL"
    echo
    continue
  fi

  CSV_SIZE_BYTES="$(wc -c < "$CSV_PATH" | tr -d ' ')"
  CSV_SIZE_KB=$((CSV_SIZE_BYTES / 1024))

  # Large => runtime-load
  if [ "$CSV_SIZE_KB" -gt "$INLINE_MAX_KB" ]; then
    echo "          Large CSV (${CSV_SIZE_KB}KB) → runtime-load node"
    write_runtime_node "$TSX_PATH" "$CSV_PATH" "$CSV_FILENAME" "$DATASET_NAME" "$COMPONENT_NAME" \
      "File size (${CSV_SIZE_KB}KB) exceeds inline max (${INLINE_MAX_KB}KB)." \
      "$IMPORT_PATH"
    echo "          ✅ Generated: $TSX_PATH"
    echo
    continue
  fi

  # Inline if csvjson succeeds, else runtime-load
  echo "          Converting CSV → JSON rows (inline)... (${CSV_SIZE_KB}KB)"

  set +e
  JSON_DATA="$(csvjson --indent 2 "$CSV_PATH" 2>/tmp/csvjson_err.txt)"
  CSVJSON_EXIT=$?
  set -e

  if [ "$CSVJSON_EXIT" -ne 0 ] || [ -z "$JSON_DATA" ]; then
    ERR_LINE="$(tail -n 1 /tmp/csvjson_err.txt 2>/dev/null || true)"
    echo "          ⚠️ csvjson failed → runtime-load node"
    echo "          Reason: $ERR_LINE"
    write_runtime_node "$TSX_PATH" "$CSV_PATH" "$CSV_FILENAME" "$DATASET_NAME" "$COMPONENT_NAME" \
      "csvjson failed to parse this file (delimiter/format issue)." \
      "$IMPORT_PATH"
    echo "          ✅ Generated: $TSX_PATH"
    echo
    continue
  fi

  # Inline node (EXACT original structure)
  write_inline_node "$TSX_PATH" "$CSV_PATH" "$DATASET_NAME" "$COMPONENT_NAME" "$JSON_DATA" "$IMPORT_PATH"
  echo "          ✅ Generated (inline): $TSX_PATH"
  echo

done < /tmp/dataset_index_normalized.tsv

echo "✔ Done. Nodes generated into: $OUTPUT_ROOT"
