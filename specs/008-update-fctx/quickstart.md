# Quickstart: Update Command

## Prerequisite

Assume you have a context named `dev`.

## Usage

### Add a file to the current context

1. Ensure you are in a directory with an active context (or pass the name).
2. Run:
   ```bash
   first update --add config/local.yaml
   ```
3. `config/local.yaml` is now a tracked artifact.

### Remove a file

1. Run:
   ```bash
   first update --forget config/local.yaml
   ```
2. The file is no longer tracked.

### Update a specific context

1. Run:
   ```bash
   first update prod --add scripts/deploy.sh
   ```
2. The `prod` context now includes `scripts/deploy.sh`.
