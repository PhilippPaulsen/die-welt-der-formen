#!/usr/bin/env bash
# Task 132: copy the RUNTIME files of world_of_forms_generator into studio/ (reproducible, idempotent).
#
#   tools/sync-studio.sh [<generator-commit-ish>] [--dry-run] [--gen <path-to-generator-repo>]
#
# - Reads from a COMMIT (git ls-tree / git archive), never from the working tree: untracked or ignored
#   files (docs/quellen, reports/*-bilder, fonts) can not end up in studio/.
# - ALLOWLIST, not a blocklist. Not copied: .git, tasks/, reports/, docs/, tools/ (except
#   tools/gallery/combinations.js, needed by gallery.html), tests, assets/ (fonts!), Claude.md, .claude/, usage.csv.
# - Guard: aborts if a font file or assets/fonts is in the copy. Fonts are served from https://bachmann-paulsen.de/fonts/.
# - Check: every local script/link/import-map target of the pages in studio/ must exist.
# - rsync --delete acts ONLY inside studio/. Run --dry-run first.
# - Writes studio/SYNC.md (source SHA, date, file count, size); left untouched if nothing else changed.
set -euo pipefail

SCRIPT_VERSION=1
REPO="$(cd "$(dirname "$0")/.." && pwd)"
GEN="$(cd "$REPO/.." && pwd)/world_of_forms_generator"
REF=main
DRY=0
while [ $# -gt 0 ]; do
  case "$1" in
    --dry-run) DRY=1 ;;
    --gen) shift; GEN="$1" ;;
    -h|--help) sed -n 2,15p "$0"; exit 0 ;;
    -*) echo "unknown option: $1" >&2; exit 2 ;;
    *) REF="$1" ;;
  esac
  shift
done

SHA="$(git -C "$GEN" rev-parse --verify "${REF}^{commit}")" || { echo "no such commit: $REF in $GEN" >&2; exit 1; }
REMOTE_NOTE="$(git -C "$GEN" remote get-url origin 2>/dev/null || echo 'https://github.com/PhilippPaulsen/world_of_forms_generator')"

INCLUDE='^(index\.html|style\.css|nav\.js|sketch\.js|ui[^/]*\.js|gallery\.html|gallery[^/]*\.js)$
^vendor/(p5-1\.9\.0\.js|p5-LICENSE\.txt|VERSIONS\.md)$
^core/[^/]+\.m?js$
^color-harmony/(ColorSpace|HarmonyGrammar|CompoundHarmony|ColorHarmonyEngine)\.js$
^color-harmony/ui/.+\.(mjs|css|html)$
^gallery/.+
^tools/gallery/combinations\.js$'
EXCLUDE='(^|/)(test[^/]*|[^/]*\.test\.m?js)$|(^|/)(build|serve)\.js$|\.(woff2?|otf|ttf)$|(^|/)assets/'

TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
LIST="$TMP/files.txt"
git -C "$GEN" ls-tree -r --name-only "$SHA" | grep -E "$(printf '%s' "$INCLUDE" | paste -sd'|' -)" | grep -vE "$EXCLUDE" > "$LIST" || true
N="$(wc -l < "$LIST" | tr -d ' ')"
[ "$N" -gt 0 ] || { echo "empty file list" >&2; exit 1; }

mkdir "$TMP/out"
# shellcheck disable=SC2046
git -C "$GEN" archive "$SHA" -- $(tr '\n' ' ' < "$LIST") | tar -x -C "$TMP/out"

# Guard: no fonts
BAD="$(cd "$TMP/out" && find . \( -iname '*.woff' -o -iname '*.woff2' -o -iname '*.otf' -o -iname '*.ttf' -o -iname '*suisse*' -o -path '*/assets/*' \) -print)"
[ -z "$BAD" ] || { echo "GUARD: font or assets file in the copy:"; echo "$BAD"; exit 1; }

# Check: local references of the pages resolve inside the copy
MISSING=0
for page in index.html color-harmony/ui/index.html gallery.html; do
  base="$(dirname "$page")"
  refs="$(grep -oE '(src|href)="[^"#]+"|"\./[^"]+": "[^"]+"' "$TMP/out/$page" | sed -E 's/^(src|href)="//; s/"$//; s/.*": "//' | grep -vE '^(https?:|data:|mailto:)' | sed -E 's/\?.*$//' | sort -u)"
  while IFS= read -r r; do
    [ -n "$r" ] || continue
    [ -e "$TMP/out/$base/$r" ] || { echo "MISSING in copy: $page -> $r"; MISSING=1; }
  done <<< "$refs"
done
[ "$MISSING" -eq 0 ] || { echo "reference check failed (extend the allowlist)"; exit 1; }

SIZE_KB="$(du -sk "$TMP/out" | cut -f1)"
echo "source: $GEN @ $SHA"
echo "files:  $N   size: $((SIZE_KB / 1024)).$(( (SIZE_KB % 1024) * 10 / 1024 )) MB   guard: ok   reference check: ok"

mkdir -p "$REPO/studio"
if [ "$DRY" -eq 1 ]; then
  echo "--- dry run: rsync -a --delete --exclude SYNC.md (nothing written)"
  rsync -a --delete --dry-run --itemize-changes --exclude SYNC.md "$TMP/out/" "$REPO/studio/" | grep -v '^\.d' | head -40 || true
  rmdir "$REPO/studio" 2>/dev/null || true
  exit 0
fi

rsync -a --delete --exclude SYNC.md "$TMP/out/" "$REPO/studio/"

NEW="$TMP/SYNC.md"
cat > "$NEW" <<EOF
# studio/ is a generated copy. Do not edit here.

Regenerate with \`tools/sync-studio.sh [commit]\` (run \`--dry-run\` first). Changes belong in the generator repository.

- Source: $REMOTE_NOTE
- Commit: $SHA
- Files: $N (without this file)
- Size: ${SIZE_KB} KB
- Script version: $SCRIPT_VERSION
- Synced (UTC): $(date -u +%Y-%m-%dT%H:%M:%SZ)
- Fonts: none. SuisseIntl is served from https://bachmann-paulsen.de/fonts/ (see style.css).
EOF
if [ -f "$REPO/studio/SYNC.md" ] && diff -q <(grep -v 'Synced (UTC)' "$NEW") <(grep -v 'Synced (UTC)' "$REPO/studio/SYNC.md") >/dev/null; then
  echo "SYNC.md unchanged (same commit, same files)"
else
  cp "$NEW" "$REPO/studio/SYNC.md"; echo "SYNC.md written"
fi
