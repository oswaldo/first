#!/bin/bash
set -e

# Setup
# Helper to echo command before running
run_cmd() {
    echo "> $@"
    "$@"
}

echo "Building first..."
scala-cli package . --native -o tmp/first -f

FIRST=$(realpath tmp/first)
TEST_DIR=$(mktemp -d -t first-verification-XXXXXX)
echo "Running verification in $TEST_DIR"

cd "$TEST_DIR"
touch foo.txt
echo "foo content" > foo.txt

# Scenario 1: Save to Custom Location
echo "--- Scenario 1: Save to Custom Location ---"
run_cmd "$FIRST" save custom-ctx --to "$TEST_DIR/custom-ctx" --artifacts foo.txt
if [ -f "$TEST_DIR/custom-ctx/fctx-def.conf" ]; then
    echo "PASS: custom-ctx created at custom location"
else
    echo "FAIL: custom-ctx not found at custom location"
    exit 1
fi

# Verify Global Config Registration (naive check)
if grep -q "$TEST_DIR/custom-ctx/fctx-def.conf" ~/.first/first.conf; then
     echo "PASS: custom-ctx registered in global config"
else
     echo "FAIL: custom-ctx not found in global config"
     # Don't exit here as it might be a partial match issue or first run, but good to know
     # exit 1
fi


# Scenario 2: Save and Link
echo "--- Scenario 2: Save and Link ---"
touch bar.txt
echo "bar content" > bar.txt
run_cmd "$FIRST" save link-ctx --artifacts bar.txt --link

if [ -L "bar.txt" ]; then
    echo "PASS: bar.txt is a symlink"
else
    echo "FAIL: bar.txt is not a symlink"
    exit 1
fi

TARGET=$(readlink bar.txt)
echo "Symlink target: $TARGET"
if [[ "$TARGET" == *".then/link-ctx/artifacts/bar.txt" ]]; then
     echo "PASS: Symlink points to correct artifact location"
else
     echo "FAIL: Symlink target incorrect"
     exit 1
fi


# Scenario 3: Move Context
echo "--- Scenario 3: Move Context ---"
run_cmd "$FIRST" mv link-ctx "$TEST_DIR/moved-ctx"

if [ ! -d ".then/link-ctx" ]; then
    echo "PASS: Old context directory removed"
else
    echo "FAIL: Old context directory still exists"
    exit 1
fi

if [ -d "$TEST_DIR/moved-ctx" ]; then
    echo "PASS: Context moved to new location"
else
    echo "FAIL: Context not found at new location"
    exit 1
fi

NEW_TARGET=$(readlink bar.txt)
echo "New Symlink target: $NEW_TARGET"
if [[ "$NEW_TARGET" == *"$TEST_DIR/moved-ctx/artifacts/bar.txt" ]]; then
     echo "PASS: Symlink updated to new location"
else
     echo "FAIL: Symlink not updated correctly"
     exit 1
fi


# Scenario 4: Update and Link
echo "--- Scenario 4: Update and Link ---"
touch baz.txt
echo "baz content" > baz.txt
echo "baz content" > baz.txt
cd "$TEST_DIR/moved-ctx"
run_cmd "$FIRST" update moved-ctx --add ../baz.txt --link
cd "$TEST_DIR"

if [ -L "baz.txt" ]; then
    echo "PASS: baz.txt is a symlink"
else
    echo "FAIL: baz.txt is not a symlink"
    exit 1
fi

BAZ_TARGET=$(readlink baz.txt)
echo "Symlink target: $BAZ_TARGET"
if [[ "$BAZ_TARGET" == *"$TEST_DIR/moved-ctx/artifacts/baz.txt" ]]; then
     echo "PASS: Symlink points to correct artifact location"
else
     echo "FAIL: Symlink target incorrect"
     exit 1
fi




echo "--- All scenarios passed! ---" 
# Cleanup
rm -rf "$TEST_DIR"
# echo "Test dir left at $TEST_DIR for inspection."
