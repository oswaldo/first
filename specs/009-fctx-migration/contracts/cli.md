# CLI Contracts

## Save Command

### `save`

Extended arguments:

- `--to <path>` (Optional): Specifies the target directory for the context definition. If provided, the context is saved to this directory instead of `.then/<name>`.
- `--link` (Flag): If set, after saving, the source files in the workspace are replaced with symbolic links pointing to the saved artifacts.

```bash
first save <context-name> --files <list> [--to <path>] [--link]
```

## Move Command

### `mv`

Moves a context definition to a new location.

- Argument 1: `context-name` (Required) - Name of the context to move.
- Argument 2: `new-path` (Required) - Destination directory path.

```bash
first mv <context-name> <new-path>
```

**Constraints**:

- `new-path` must not exist.
- `context-name` must be a known context.
