# Load Command

The `load` command activates a saved context, setting up your environment with the defined artifacts.

## Usage

```bash
first load <context-name>
```

## Description

This command:

1. Locates the context definition (local `.fctx` or remote).
2. Resolves all artifacts defined in the context.
3. Downloads remote artifacts to the local cache if necessary.
4. Places artifacts in your current working directory (or specific destinations if configured).
   - If an artifact is a directory, it symlinks or copies the content based on configuration (default is usually copy/link depending on OS/source). _Note: Exact linking behavior details to be refined._

## Options

### `--at <path>`

Perform the load operation in a different directory than the current one.
