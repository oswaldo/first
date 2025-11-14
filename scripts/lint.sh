#!/usr/bin/env bash

set -e

echo "> Linting project..."

echo "Linting JS project..."
(
  cd js
  echo "Cleaning..."
  scala-cli clean .
  echo "> Compiling with SemanticDB for Scalafix..."
  scala-cli compile . --semantic-db
  echo "> Running Scalafix..."
  scala-cli fix .
  echo "> Rewriting to new Scala 3 syntax..."
  scala-cli -new-syntax -rewrite .
  echo "> Rewriting to indentation-based syntax..."
  scala-cli -indent -rewrite .
  echo "> Formatting the code..."
  scala-cli fmt .
)

echo "Linting JVM project..."
(
  cd jvm
  echo "Cleaning..."
  scala-cli clean .
  echo "> Compiling with SemanticDB for Scalafix..."
  scala-cli compile . --semantic-db
  echo "> Running Scalafix..."
  scala-cli fix .
  echo "> Rewriting to new Scala 3 syntax..."
  scala-cli -new-syntax -rewrite .
  echo "> Rewriting to indentation-based syntax..."
  scala-cli -indent -rewrite .
  echo "> Formatting the code..."
  scala-cli fmt .
)

echo "Linting complete."
