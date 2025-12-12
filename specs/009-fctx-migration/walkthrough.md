# Walkthrough: Context Migration & Linking

## Overview

This feature enables:

1.  **Saving to custom locations**: `first save my-ctx --to /path/to/my-ctx`
2.  **Linking contexts**: `first save my-ctx --link` replaces artifacts with symlinks.
3.  **Moving contexts**: `first mv my-ctx /new/path` moves the definition and updates symlinks.

## Verification

### Automated Tests

- `GlobalConfigTests`: Verified registry operations (add, remove, update, list).
- `SaveTests`: Verified `--to` (saves to custom path, registers config) and `--link` (creates symlinks).
- `MvTests`: Verified context moving, global config update, and symlink repairing.

### Manual Scenarios

#### 1. Save to Custom Location

```bash
first save custom-ctx --to /tmp/custom-ctx --artifacts foo.txt
```

Result:

- `/tmp/custom-ctx/fctx-def.conf` created.
- Context registered in `~/.first/first.conf`.

#### 2. Save and Link

```bash
first save link-ctx --artifacts bar.txt --link
```

Result:

- `bar.txt` replaced by symlink to `.then/link-ctx/artifacts/bar.txt`.

#### 3. Move Context

```bash
first mv link-ctx /tmp/moved-ctx
```

Result:

- Context moved to `/tmp/moved-ctx`.
- `bar.txt` symlink updated to point to `/tmp/moved-ctx/artifacts/bar.txt`.

#### 4. Update and Link

```bash
first update link-ctx --add baz.txt --link
```

Result:

- `baz.txt` added to `.then/link-ctx/artifacts/`.
- Local `baz.txt` replaced by symlink.
