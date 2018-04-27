#!/usr/bin/env sh

DIR_NAME=$( dirname "$0" )
# shellcheck source=/dev/null
source "$DIR_NAME/common.sh"

node -r babel-register \
  "$NODE_BIN/webpack" \
  --config "$PROJECT_DIR/webpack.config.js" \
  --progress;

