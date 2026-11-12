#!/usr/bin/env bash
# Usage: preview.sh [dev|build]   (à lancer depuis la racine du wiki)
#  dev   : serveur live-reload sur http://localhost:3000 (défaut, à lancer en arrière-plan)
#  build : compile (échoue sur lien cassé, onBrokenLinks=throw) puis sert le build sur http://localhost:3000
set -euo pipefail
[ -d node_modules ] || npm ci
case "${1:-dev}" in
  dev)   exec npm run start -- --no-open ;;
  build) npm run build && exec npm run serve -- --no-open ;;
  *) echo "usage: preview.sh [dev|build]" >&2; exit 2 ;;
esac
