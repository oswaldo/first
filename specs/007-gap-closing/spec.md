# Feature Specification: External Artifacts (Gap Closing)

**Branch**: `007-gap-closing` | **Status**: Draft

## 1. Feature Description

Enable the `save` command to accept absolute paths for artifacts. When an absolute path is provided, the file should be treated as an "External Artifact".

External Artifacts MUST be:
1.  **Copied** into the context's artifact storage (`.then/<context>/artifacts/`) during `save`.
2.  **Mapped** to a relative path (filename) in the `fctx-def.conf`.
3.  **Restored** to the workspace root (or specified relative path) during `load`.

This effectively allows "importing" files from other repositories or locations into a `first` context.

## 2. Requirements

- **FR-01**: `save --artifacts` MUST accept absolute paths.
- **FR-02**: When an absolute path is provided, the file MUST be copied to the `artifacts` directory of the context context, regardless of `swapAs` setting (External artifacts are always copied *into* the context).
- **FR-03**: The entry in `fctx-def.conf` for an external artifact MUST use the file's basename as the `path`.
- **FR-04**: If multiple artifacts (local or external) map to the same relative path (name collision), the operation MUST fail with a clear error.

## 3. User Scenarios

### Scenario 1: Dogfooding Import
1.  User is in `~/git/new-repo`.
2.  User runs `first save my-ctx --artifacts ~/git/old-repo/CONFIG.md`.
3.  `first` copies `~/git/old-repo/CONFIG.md` to `.then/my-ctx/artifacts/CONFIG.md`.
4.  `fctx-def.conf` contains `{ path = "CONFIG.md", ... }`.
5.  User runs `first load my-ctx`.
6.  `CONFIG.md` appears in `~/git/new-repo/CONFIG.md`.

## 4. Considerations

- **Path Traversal**: N/A, we are flattening to filename.
- **Large Files**: Document that they are duplicated.
