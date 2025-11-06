# Feature Specification: FCTX Management Actions

**Feature Branch**: `003-fctx-management-actions`  
**Created**: 2025-11-01  
**Status**: Draft  
**Input**: User description: "Implement fctx management actions 'save', 'load', and 'swap' with supporting flags"

## Vision Alignment

*This specification is guided by the principles and vision outlined in the [project constitution](/.specify/memory/constitution.md) and the [vision document](/first.md). This feature directly supports the core principles of **Full Context Swapping** and **Non-Intrusive Tooling** by providing the core actions to manage fctx.

---

## Clarifications

### Session 2025-11-01

- Q: How should the `save` command determine which files to include in the fctx? → A: Only include files and directories explicitly passed as arguments (e.g., `--file`, `--dir`).
- Q: How should the `load` command handle conflicts with existing files? → A: If checksums match, ignore. Otherwise, prompt the user to (O)verwrite, (S)kip, (R)ename, or (A)bort. On overwrite, create a `.bak` file and restore it on abort. A `--force` flag will overwrite all conflicts.
- Q: What is the expected behavior of the `swap` command? → A: The `swap` command transitions from the current active fctx to a new one. It calculates the diff between the two contexts, removes the old files, adds the new files, and skips the common ones.
- Q: How should the `save` command handle conflicts with an existing fctx? → A: First, ask the user if the save should be (A)dditive (updating or adding files) or a (R)eplacement (removing previous files and adding new ones). Then, for any conflicting files, prompt the user to (O)verwrite, (S)kip, (R)ename, or (A)bort. On overwrite, create a `.bak` file and restore it on abort. The `--force` flag will overwrite all conflicts without prompting.

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Save a new fctx (Priority: P1)

As a developer, I want to be able to save the current state of my development environment as a new fctx, so that I can easily switch back to it later.

**Why this priority**: This is the foundational step for creating and managing fctxs.

**Independent Test**: Can be tested by creating a new fctx from a set of files and verifying that the `fctx-def.conf` is created correctly.

**Acceptance Scenarios**:

1. **Given** a set of files and directories, **When** I run `first save <context-name> --file path/to/file1 --dir path/to/dir1`, **Then** a new `fctx-def.conf` is created for `<context-name>` with the specified files and directories as artifacts.
2. **Given** an existing fctx with the same name, **When** I run `first save <context-name> --force`, **Then** the existing fctx is overwritten with the new one.
3. **Given** an existing fctx with the same name, **When** I run `first save <context-name>`, **Then** the system prompts me to choose between an additive or replacement save, and then prompts for each conflicting file.

---

### User Story 2 - Load an fctx (Priority: P2)

As a developer, I want to be able to load an existing fctx, so that I can restore my development environment to a previously saved state.

**Why this priority**: This is the core value proposition of the `first` tool.

**Independent Test**: Can be tested by loading an fctx and verifying that the files and directories are correctly linked or copied to their target locations.

**Acceptance Scenarios**:

1. **Given** an existing fctx, **When** I run `first load <context-name>`, **Then** the artifacts defined in the fctx are created in the current directory (e.g., symlinked).
2. **Given** an fctx is already loaded, **When** I run `first load <another-context-name>`, **Then** the currently loaded fctx is unloaded and the new one is loaded.

---

### User Story 3 - Swap between two fctxs (Priority: P3)

As a developer, I want to be able to swap from the currently active fctx to a new fctx, so that I can efficiently transition my development environment between two contexts.

**Why this priority**: This provides a more efficient way to switch between contexts than a full `load` operation.

**Independent Test**: Can be tested by loading one fctx, then swapping to another, and verifying that the correct files are added, removed, and skipped.

**Acceptance Scenarios**:

1. **Given** `fctx-A` is loaded, **When** I run `first swap fctx-B`, **Then** the artifacts exclusive to `fctx-A` are removed, the artifacts exclusive to `fctx-B` are added, and the common artifacts are left untouched.

---

### Edge Cases

- What happens when an artifact path in an fctx points to a non-existent file or directory during a `load` or `swap` operation?
- How does the system handle conflicts if an artifact to be loaded already exists in the target location and is not a symlink from a previous `first` operation? The system will check checksums, and if they differ, prompt the user for action (Overwrite, Skip, Rename, Abort).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a `save` command to create a new fctx from a set of explicitly specified files and directories.
- **FR-002**: The `save` command MUST support a `--force` flag to overwrite an existing fctx and all its conflicting files without prompting.
- **FR-017**: When saving to an existing fctx without the `--force` flag, the system MUST first ask the user if the save should be (A)dditive or a (R)eplacement.
- **FR-018**: During a `save` operation, if an artifact conflicts with an existing file, the system MUST prompt the user to (O)verwrite, (S)kip, (R)ename, or (A)bort.
- **FR-019**: When overwriting a file during a `save` operation, the system MUST create a backup of the original file (e.g., `[original-name.original-ext].bak`).
- **FR-020**: If the user aborts a `save` operation, the system MUST restore any backed-up files.
- **FR-003**: The system MUST provide a `load` command to apply an fctx to the current directory.
- **FR-004**: The `load` command MUST support a `--dry-run` flag to show what changes would be made without actually applying them.
- **FR-008**: During a `load` operation, if an artifact's checksum matches an existing file's checksum, the system MUST skip that artifact.
- **FR-009**: During a `load` operation, if an artifact conflicts with an existing file (and checksums don't match), the system MUST prompt the user to (O)verwrite, (S)kip, (R)ename, or (A)bort.
- **FR-010**: When overwriting a file during a `load` operation, the system MUST create a backup of the original file (e.g., `[original-name.original-ext].bak`).
- **FR-011**: If the user aborts a `load` operation, the system MUST restore any backed-up files.
- **FR-012**: The `load` command MUST support a `--force` flag to overwrite all conflicting files without prompting.
- **FR-005**: The system MUST provide a `swap` command to transition from the current active fctx to a new fctx.
- **FR-006**: The `swap` command MUST support a `--dry-run` flag to show what changes would be made without actually applying them.
- **FR-013**: The `swap` command MUST identify common artifacts between the current and the new fctx and skip them.
- **FR-014**: The `swap` command MUST remove artifacts that are exclusive to the current fctx.
- **FR-015**: The `swap` command MUST add artifacts that are exclusive to the new fctx.
- **FR-016**: Before removing any artifact, the `swap` command MUST verify that the source file still exists.
- **FR-007**: The system MUST track the currently loaded fctx by creating a file within the `.then` directory where the fctx is loaded.

### Key Entities *(include if feature involves data)*

- **FctxDef**: A case class representing a fully resolved "full context definition".
  - `name: String`
  - `includes: List[String]`
  - `artifacts: List[Artifact]`
- **Artifact**: A case class representing a single file or directory to be managed.
  - `path: String` (absolute path after resolution)
  - `swapAs: String` (e.g., "symlink" or "copy")
  - `md5: Option[String]`
  - `revision: Option[String]`

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A user can save a new fctx with 10 artifacts in under 5 seconds.
- **SC-002**: A user can load an fctx with 10 artifacts in under 2 seconds.
- **SC-003**: The `swap` command can update a modified artifact in under 1 second.
- **SC-004**: The `--dry-run` flag for `load` and `swap` commands provides a clear and accurate preview of the changes to be made.