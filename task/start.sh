#!/usr/bin/env bash

DIR_NAME=$( dirname "$0" )
# shellcheck source=/dev/null
source "$DIR_NAME/common.sh"

if [ "$NODE_ENV" = "development" ]
then
  nodemon \
    -w "$DATA_DIR" \
    -w "$SRC_DIR" \
    --ext "js,md" \
    -- \
    -r babel-register \
    "$PROJECT_DIR/src/cli.js" \
    "build" "markdown" "$PROJECT_DIR/README.md" &
fi

wait

