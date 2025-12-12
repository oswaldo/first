# Implementation Plan: Context Migration & Linking

**Branch**: `009-fctx-migration` | **Date**: 2025-12-11 | **Spec**: [Spec](spec.md)
**Input**: Feature specification from `specs/009-fctx-migration/spec.md`

## Summary

Implement `save --to <path>`, `save --link`, and `mv` commands to enable context migration and "dogfooding".
This requires introducing a `GlobalConfig` registry (`~/.first/first.conf`) to track context locations, enabling `first` to find contexts stored outside standard locations.
We will also implement symlink handling for `--link` and `mv`, ensuring workspace integrity.

## Technical Context

**Language/Version**: Scala 3.3.4 (Scala Native 0.5.x)
**Primary Dependencies**:

- `com.lihaoyi::os-lib`: File system operations (move, symlink, copy).
- `org.ekrich::sconfig`: HOCON configuration reading/writing.
- `com.monovore::decline`: CLI argument parsing.
  **Storage**:
- Local Filesystem: `fctx-def.conf` (context definitions), `~/.first/first.conf` (global registry).
  **Testing**: `munit` for unit/integration tests.
  **Target Platform**: Linux/macOS (primary for symlinks), Windows (fallback behavior).
  **Project Type**: CLI Tool.
  **Constraints**:
- **Symlinks**: `os.symlink` behavior on Windows is restrictive. We will implement checks to warn/fallback on Windows.
- **Atomic Operations**: `mv` and `save` should be as atomic as possible.

## Constitution Check

- [x] **Non-Intrusive Tooling**: `first.conf` is in `~/.first`, not the project. `save --link` replaces files with symlinks, which is intrusive but explicit user intent.
- [x] **Full Context Swapping**: Enhances swapping by allowing contexts to live anywhere.
- [x] **Separation of Concerns**: Decouples context storage from project location.
- [x] **Developer as Author**: User explicitly controls locations (`--to`) and linking (`--link`).
- [x] **Vision-Driven**: Aligns with "Context Migration" and "Dogfooding" roadmap items.
- [x] **Type Safety**: Will use `Path` and specific types for config.
- [x] **Safe and Expressive**: specific error handling for IO.
- [x] **Reuse First**: Reusing `ConfigReader`, `ArtifactProcessor`.

## Project Structure

### Documentation

```text
specs/009-fctx-migration/
├── plan.md              # This file
├── research.md          # N/A (Research done inline)
├── data-model.md        # GlobalConfig model
├── quickstart.md        # Usage examples
└── tasks.md             # Task breakdown
```

### Source Code

```text
src/main/scala/first/
├── config/
│   ├── GlobalConfig.scala       # [NEW] Handles ~/.first/first.conf
│   └── ConfigWriter.scala       # [NEW] Helper for writing structured config (extracted from FctxWriter?)
├── core/
│   ├── Mv.scala                 # [NEW] Core logic for mv
│   └── SymlinkManager.scala     # [NEW] Helper for safely managing symlinks
├── cli/
│   ├── MvCommand.scala          # [NEW] CLI entry point
│   └── SaveCommand.scala        # [MODIFY] Add --to and --link args
└── ...
```

## Proposed Changes

### 1. Global Configuration Registry (`GlobalConfig.scala`)

Use `~/.first/first.conf` to track contexts.

```hocon
fctx-files: [
  "/abs/path/to/ctx1/fctx-def.conf",
  "/other/path/ctx2/fctx-def.conf"
]
```

- **[NEW] `src/main/scala/first/config/GlobalConfig.scala`**:
  - `addContext(path: Path): Either[Error, Unit]`
  - `removeContext(path: Path): Either[Error, Unit]`
  - `updateContext(oldPath: Path, newPath: Path): Either[Error, Unit]`
  - `listContextPaths(): List[Path]`
- **[MODIFY] `src/main/scala/first/config/ConfigReader.scala`**:
  - Update `discoverFctxDefPaths` to include paths from `GlobalConfig`.

### 2. Save Command Improvements (`save --to`, `save --link`)

- **[MODIFY] `src/main/scala/first/cli/SaveCommand.scala`**:
  - Add `to: Option[Path]` and `link: Boolean = false` to `SaveOpts`.
- **[MODIFY] `src/main/scala/first/core/Save.scala`**:
  - Logic for `--to`: Use provided path as `fctxConfDir`. Register with `GlobalConfig`.
  - Logic for `--link`: After processing artifacts, replace source files with symlinks to `artifactsDir`.
  - Use `SymlinkManager` helper.

### 3. Move Command (`mv`)

- **[NEW] `src/main/scala/first/cli/MvCommand.scala`**:
  - `first mv <name> <new-path>`
- **[NEW] `src/main/scala/first/core/Mv.scala`**:
  - Resolve current context path.
  - Check destination.
  - `os.move`.
  - Update `GlobalConfig`.
  - Scan CWD for symlinks pointing to old path and update them to new path.

### 4. Symlink Handling (`SymlinkManager`)

- **[NEW] `src/main/scala/first/core/SymlinkManager.scala`**:
  - `createSymlink(source: Path, dest: Path): Either[Error, Unit]`
  - Checks OS (warn if Windows).
  - Handles relative vs absolute linking constraints.

### 5. Update Command Improvements (`update --link`)

- **[MODIFY] `src/main/scala/first/cli/UpdateCommand.scala`**:
  - Add `link: Boolean = false`.
- **[MODIFY] `src/main/scala/first/core/Update.scala`**:
  - When processing added artifacts (`newProcessed`), if `link` is true:
    - Invoke `SymlinkManager.createSymlink(source, dest)` similar to `Save`.

## Verification Plan

### Automated Tests

- **Unit Tests**:
  - `GlobalConfigTests`: Verify reading/writing `first.conf`.
  - `SymlinkManagerTests`: Verify symlink creation (skip on Windows/CI if needed, or use mocks).
  - `MvTests`: Verify logic (mocking file sys or using temp folders).
  - `SaveTests`: Test `--to` and `--link` logic.

### Manual Verification

1.  **Save to Custom Location**:
    - Run `first save test-ctx --to /tmp/test-ctx --files "foo.txt"`.
    - Verify `/tmp/test-ctx/fctx-def.conf` exists.
    - Verify `first ls` shows `test-ctx`.

2.  **Save and Link**:
    - Run `first save link-ctx --files "bar.txt" --link`.
    - Verify `bar.txt` is now a symlink pointing to `.then/link-ctx/artifacts/bar.txt`.

3.  **Move Context**:
    - Run `first mv link-ctx /tmp/moved-ctx`.
    - Verify `.then/link-ctx` is gone.
    - Verify `/tmp/moved-ctx` exists.
    - Verify `bar.txt` symlink now points to `/tmp/moved-ctx/artifacts/bar.txt`.
    - Verify `first load link-ctx` still works.

4.  **Edge Cases**:
    - Try moving to existing path (should fail).
    - Try moving unknown context (should fail).
