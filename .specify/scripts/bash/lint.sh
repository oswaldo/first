#!/usr/bin/env bash

set -e

echo "> Linting project..."

echo "Cleaning..."
rm -rf .scala-build
scala-cli clean .

echo "> Compiling with SemanticDB for Scalafix..."
scala-cli compile . --semantic-db

echo "> Running Scalafix..."
# We ignore the exit code of scalafix because it might fail on generated files (BuildInfo)
# even if it successfully fixes the source code.
scala-cli fix . || true

echo "> Rewriting to new Scala 3 syntax..."
scala-cli -new-syntax -rewrite .

echo "> Rewriting to indentation-based syntax..."
scala-cli -indent -rewrite .

echo "> Formatting the code..."
scala-cli fmt .

echo "Linting complete."
