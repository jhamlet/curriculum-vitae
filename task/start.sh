#!/usr/bin/env bash

DIR_NAME=$( dirname "$0" )
# shellcheck source=/dev/null
source "$DIR_NAME/common.sh"

if [ "$NODE_ENV" = "development" ]
then
  nodemon \
    -w "$PROJECT_DIR/webpack.site.config.js" \
    -w "$SITE_DIR" \
    -w "$ENTRY_DIR" \
    -w "$SRC_DIR/server" \
    -w "$SRC_DIR/site" \
    -w "$SRC_DIR/config" \
    -w "$ENTRY_DIR" \
    --ext "js,gql,md" \
    -- \
    -r babel-register "$PROJECT_DIR/src/server/dev.js"
else
  nodemon "$DIST_DIR/server.js"
fi
