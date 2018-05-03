#!/usr/bin/env sh

DIR_NAME=$( dirname "$0" )
# shellcheck source=/dev/null
source "$DIR_NAME/common.sh"

node -r babel-register \
  "$PROJECT_DIR/src/cli.js" \
  "build" "markdown" "$PROJECT_DIR/README.md";

