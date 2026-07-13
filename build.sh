#!/usr/bin/env bash
#
# Build the Zola site and inject each page's last-updated date from Git.
# Generated files are written only to the gitignored public/ directory.
#
# Usage: ./build.sh [BASE_URL]
#   Example: ./build.sh https://j-ito0625.github.io
#
set -euo pipefail
cd "$(dirname "$0")"

ZOLA="${ZOLA:-zola}"
BASE_URL="${1:-https://j-ito0625.github.io}"

"$ZOLA" build --base-url "$BASE_URL"

inject() {
  local out="$1"; shift
  local file="public/$out"
  [ -f "$file" ] || return 0

  local date
  date="$(git log -1 --format='%cd' --date=format-local:'%Y-%m-%d' -- "$@" 2>/dev/null || true)"
  [ -n "$date" ] || date="—"
  sed -i "s|<!--LASTMOD-->|${date}|" "$file"
}

inject index.html              templates/index.html content/_index.md
inject cv/index.html           content/cv.md
inject en/index.html           content/en.md
inject projects/index.html     content/projects.md
inject publications/index.html content/publications.md
inject news/index.html         content/news

# News filenames follow YYYY-MM-DD-slug.md, matching /news/slug/.
for source in content/news/*.md; do
  name="${source##*/}"
  [ "$name" = "_index.md" ] && continue
  slug="${name%.md}"
  slug="${slug#????-??-??-}"
  inject "news/$slug/index.html" "$source"
done

# Remove any placeholder left on generated pages without a source mapping.
find public -name '*.html' -exec sed -i 's|<!--LASTMOD-->||' {} +

echo "built + injected last-updated dates into public/"
