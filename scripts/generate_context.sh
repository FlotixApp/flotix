#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="../src/nodes"
FIRST_FILE="../src/nodes/createNodeComponent.tsx"
RANDOM_COUNT=5

[ -f "$FIRST_FILE" ] || { echo "Error: missing $FIRST_FILE" >&2; exit 1; }
[ -d "$BASE_DIR" ] || { echo "Error: missing dir $BASE_DIR" >&2; exit 1; }

# Clipboard sink (no eval)
copy_to_clipboard() {
  if command -v pbcopy >/dev/null 2>&1; then
    pbcopy
  elif command -v wl-copy >/dev/null 2>&1; then
    wl-copy
  elif command -v xclip >/dev/null 2>&1; then
    xclip -selection clipboard -in
  elif command -v xsel >/dev/null 2>&1; then
    xsel --clipboard --input
  else
    echo "Error: no clipboard tool found (pbcopy/wl-copy/xclip/xsel)." >&2
    exit 1
  fi
}

# Need shuf with -z support for NUL-safe random selection
if command -v shuf >/dev/null 2>&1; then
  SHUF="shuf"
elif command -v gshuf >/dev/null 2>&1; then
  SHUF="gshuf"
else
  echo "Error: shuf not found. On macOS: brew install coreutils" >&2
  exit 1
fi

# Verify -z support (GNU shuf/gshuf has it)
if ! $SHUF --help 2>/dev/null | grep -q -- ' -z'; then
  echo "Error: this shuf does not support -z (NUL-delimited). Install GNU coreutils." >&2
  echo "macOS: brew install coreutils (use gshuf)" >&2
  exit 1
fi

# Temp files
TMP_ALL="$(mktemp)"
TMP_PICK="$(mktemp)"
trap 'rm -f "$TMP_ALL" "$TMP_PICK"' EXIT

# Build NUL-delimited candidate list excluding FIRST_FILE
find "$BASE_DIR" -type f ! -path "$FIRST_FILE" -print0 > "$TMP_ALL"

# Count candidates (count NULs). Works on macOS + Linux.
CAND_COUNT="$(tr -cd '\000' < "$TMP_ALL" | wc -c | tr -d ' ')"
if [ "$CAND_COUNT" -lt "$RANDOM_COUNT" ]; then
  echo "Error: not enough files under $BASE_DIR to pick $RANDOM_COUNT (found $CAND_COUNT)." >&2
  exit 1
fi

# Pick 10 random files, keep NUL-delimited output
$SHUF -z -n "$RANDOM_COUNT" < "$TMP_ALL" > "$TMP_PICK"

# Concatenate and copy
{
  echo "===== FILE: $FIRST_FILE ====="
  echo
  cat "$FIRST_FILE"
  echo; echo

  # Read NUL-delimited picked files safely
  while IFS= read -r -d '' f; do
    echo "===== FILE: $f ====="
    echo
    cat "$f"
    echo; echo
  done < "$TMP_PICK"
} | copy_to_clipboard

echo "Copied contents of 6 files to clipboard."
