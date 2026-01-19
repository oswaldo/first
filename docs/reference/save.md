# Save Command

The `save` command is used to persist your current development context into a named configuration.

## Usage

```bash
first save <context-name> [options]
```

## Options

### `--artifacts <list>`

Specifies the files and directories to include in the context.

- Format: Comma-separated list of paths.
- Directories should end with `/`.
- Paths are relative to the current working directory (or the one specified by `--at`).

### `--to <path>`

Specifies the target location for the `.fctx` file.

> [!NOTE]
> **Migration Mode**: When combined with `--artifacts` and `--to`, `first` acts like a "smart move" tool. It effectively moves the specified artifacts to the target location's directory structure and updates the context file.

### `--link`

Replace original files with symlinks.

- When saving, if you use `--link`, `first` will move the artifacts to the context location (if `--to` implies a different location or if they aren't there) and replace the original files in your working directory with symlinks pointing to the artifacts in the context.
- **Why?**: This allows you to keep the actual files in a separate "context repo" while having them accessible in your project logic, achieving "zero-clutter" via symlinks (or just clean swapping if you don't link).

### `--force`

Overwrite existing files or contexts without prompting.

## Examples

### Basic Save

Save the current `.gemini/` folder and `GEMINI.md` to a context named `gemini-config`.

```bash
first save gemini-config --artifacts ".gemini/,GEMINI.md"
```

### Context Migration & Linking (The "Move" equivalent)

This is a powerful pattern to move your existing configuration files out of your repo and into a separate context repository, replacing them with symlinks.

```bash
first save first-dev \
  --to ../first-fctx/first-dev.fctx \
  --artifacts ".specify/,.gemini/,GEMINI.md" \
  --link \
  --force
```

**What this does:**

1. Creates `../first-fctx/first-dev.fctx`.
2. Moves `.specify/`, `.gemini/`, and `GEMINI.md` to the directory where the `.fctx` is saved (e.g. `../first-fctx/`).
3. Creates symlinks in your current directory pointing to the new locations.
