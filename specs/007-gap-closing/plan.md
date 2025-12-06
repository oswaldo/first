# Gap Closing Plan: External Artifacts & Import Workflows

**Goal**: Enable referencing and importing files located outside the project root or validation workspace, as required by the "Dogfooding" and "External Context" user scenarios.

## 1. Problem Statement

The current implementation of `first save` strictly validates that all artifacts are within the current working directory (project root). 
- **Limitation**: Users cannot include files from other repositories (e.g., `~/git/other-repo/GEMINI.md`) or system paths (`/tmp/file`).
- **Impact**: This blocks the "Dogfooding" scenario where a user wants to "extract" files from one repo into a new context in another repo without manual copying.

## 2. Proposed Solution

We will enhance the `first save` command (and potentially introduce a `first import` helper) to support **External Artifacts**.

### 2.1. Absolute Paths in `save`

Allow the `--artifacts` flag to accept absolute paths.

**Behavior Change**:
- When `save` encounters an absolute path:
  1. **Validation**: Check if the file exists.
  2. **Ingestion**: Instead of symlinking or referencing it in place, `first` **MUST copy** the file into the context's artifact storage (`.then/<context>/artifacts/`).
  3. **Mapping**: 
     - Determine the destination relative path.
     - By default, map it to the root of the workspace using its filename (flat mapping) OR preserve its structure if user specifies a mapping syntax (TBD). 
     - *Simple Approach*: Map to root. If collision, error or prompt.
  4. **Config**: Write the artifact entry in `fctx-def.conf` with `path = "filename"` (relative to workspace).

**Example**:
```bash
cd ~/git/tictactoe-fctx
first save my-context --artifacts ~/git/tictactoe/GEMINI.md
```
Result:
- `.then/my-context/artifacts/GEMINI.md` is created (copy of original).
- `fctx-def.conf`: `artifacts = [{ path = "GEMINI.md", ... }]`
- `GEMINI.md` is present in `~/git/tictactoe-fctx` after load.

### 2.2. Dedicated `import` Command (Optional but Recommended)

To make it explicit, we could add:
```bash
first context import <context-name> --file /abs/path/to/file [--as relative/path]
```
However for the specific user scenario "save the ... file ... in a newly created repo", extending `save` is more direct.

## 3. Implementation Plan

### Phase 1: Update `Save.scala`
- **Modify Argument Parsing**: Allow absolute paths in `SaveOpts.artifacts`.
- **Logic Update**:
  - Iterate through artifacts.
  - If path is absolute:
    - **Mark as External**.
    - **Copy strategy**: Always copy to `artifactsDir` (flattened filename by default).
    - **Path normalization**: The `Artifact` object in `fctx-def` should store the **relative path** (filename) that will be used during `load`.
  - If path is relative:
    - Existing logic (copy or symlink based on `swapAs`).

### Phase 2: Path Collision Handling
- If `first save` is called with multiple files having same filename (e.g. `/tmp/foo/bar.txt` and `/var/bar.txt`), fail or prompt.
- For MVP: Fail on collision.

### Phase 3: "Ghost" Artifacts (Refinement)
- If the user wants to *link* to a file that stays external (not copied into context, but effective in workspace), we might want `symlink-external`.
- *Decision*: For the "Dogfooding" scenario, the goal is to **move** or **copy** the file into the new repo's context. So "Copy on Ingestion" is the correct default for absolute paths.

## 4. Risks & Considerations

- **Path Traversal checks**: Ensure we don't accidentally write outside the `artifactsDir` when flattening.
- **Large Files**: Copying large external files will duplicate them. (Acceptable for config files).

## 5. Verification
- Test case: Save a context with `/tmp/test-file`.
- Verify `fctx-def.conf` has relative path `test-file`.
- Verify `.then/.../artifacts/test-file` exists.
- Verify `load` works.
