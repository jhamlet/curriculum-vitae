#!/usr/bin/env sh

DIR_NAME=$( dirname "$0" )
# shellcheck source=/dev/null
source "$DIR_NAME/common.sh"

if [ "$NODE_ENV" = "production" ]
then
  node -r babel-register \
    "$PROJECT_DIR/src/cli.js" \
    "build" "markdown" "$PROJECT_DIR/README.md"
fi

