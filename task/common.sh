#!/usr/bin/env sh

DIR_NAME=$( dirname "$0" );
SCRIPT_DIR=$( cd "$DIR_NAME" && pwd);
export SCRIPT_DIR;

PROJECT_DIR=$( dirname "$SCRIPT_DIR" );
export PROJECT_DIR;

export DATA_DIR="$PROJECT_DIR/data";
export SRC_DIR="$PROJECT_DIR/src"
export TEST_DIR="$PROJECT_DIR/test"
export DIST_DIR="$PROJECT_DIR/docs"
export NODE_MODULES="$PROJECT_DIR/node_modules"
export NODE_BIN="$NODE_MODULES/.bin"
# Allows for project/src relative imports and require statements
export NODE_PATH=$PROJECT_DIR/src:$PROJECT_DIR/test

export HOST=${HOST:-$( hostname )}
export PORT=${PORT:-"8888"}

if [ "$NODE_ENV" = "development" ]
then
  export PUBLIC_URL="http://$HOST:$PORT/";
  export DEBUG=${DEBUG:-"app:*,server:*"};
elif [ "$NODE_ENV" = "test" ]
then
  export PUBLIC_URL="http://$HOST:$PORT/";
  export DEBUG=${DEBUG:-"app:*,server:*,test:*"};
else
  export PUBLIC_URL="/";
fi

