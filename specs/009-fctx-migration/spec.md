# Feature Specification: Context Migration & Linking

**Feature Branch**: `009-fctx-migration`
**Created**: 2025-12-11
**Status**: Draft
**Input**: User description: "Implement context migration and linking capabilities including 'save --to', 'save --link', and 'mv'"

## Vision Alignment

This specification expands the `first` tool's flexibility by allowing users to control _where_ contexts are stored and _how_ they integrate with the workspace. It fulfills the roadmap goal of enabling "Context Migration & Linking," which is essential for advanced workflows like dogfooding (where the tool manages its own development environment from a separate repository) and team sharing.

---

## User Scenarios & Testing

### User Story 1 - Save to Custom Location (Priority: P1)

As a developer, I want to save a context definition to a specific directory (e.g., a shared git repository or a backup folder) instead of the default location, so I can share it with my team or organize it my way.

**Why this priority**: Essential for the "dogfooding" goal and shared workflows.

**Independent Test**: Can be tested by saving a context to a temp dir and verifying the files exist there and are registered in `first.conf`.

**Acceptance Scenarios**:

1. **Given** a set of local files and an empty target directory, **When** I run `first save my-ctx --to /tmp/my-ctx --files "config.txt"`, **Then** the context definition is created in `/tmp/my-ctx` and registered in `first.conf`.
2. **Given** an existing context, **When** I run `first save existing-ctx --to /new/path`, **Then** the context is saved to the new path (effectively a "Save As" if the name is different, or a move/update if the name is the same? _Clarification: `save` usually creates/updates. If I use `--to`, I am defining where that creation acts._).
   - _Refinement_: `save` defines a context. If I say `save my-ctx --to X`, I am saying "The context 'my-ctx' is located at X".

---

### User Story 2 - Centralize and Link (Priority: P1)

As a developer, I want to move my local configuration files into a managed context and replace the local copies with symlinks pointing to that context, so I can centralize management without breaking my local setup.

**Why this priority**: Core "setup" workflow. Allows users to "adopt" existing configurations into `first`.

**Independent Test**: Create a file, run `save --link`, verify file is replaced by symlink pointing to the context artifact.

**Acceptance Scenarios**:

1. **Given** a local file `app.conf`, **When** I run `first save my-ctx --files "app.conf" --link`, **Then** `app.conf` is moved to the context storage, and `app.conf` in the current directory becomes a symlink to the stored file.
2. **Given** a directory to include, **When** I run `first save my-ctx --files "config/" --link`, **Then** the directory and its contents are handled (files inside linked or directory linked?), and local paths become symlinks.

---

### User Story 3 - Move Context (`mv`) (Priority: P2)

As a developer, I want to move an implementation context definition to a new location on my disk and have `first` remember where it is, so I can reorganize my file system without breaking the tool's awareness of the context.

**Why this priority**: Keeps the environment clean and adaptable.

**Independent Test**: Create a context, move it with `first mv`, check `first ls` shows new path, check `first load` still works.

**Acceptance Scenarios**:

1. **Given** a known context `my-ctx` at path A, **When** I run `first mv my-ctx /path/to/B`, **Then** the directory A is moved to B, and `first.conf` updates the record for `my-ctx` to point to B.
2. **Given** a context name that doesn't exist, **When** I run `first mv unknown-ctx /path`, **Then** it fails with a clear error.
3. **Given** a context `my-ctx` that has active symlinks in the workspace, **When** I run `first mv my-ctx /new/path`, **Then** the context files are moved AND the symlinks in the workspace are updated to point to `/new/path`.

---

### Edge Cases

- **Windows Symlinks**: On Windows, `--link` should likely fall back to copy or warn, as per roadmap ("on windows... always be copy").
- **Target Exists**: If `--to` target exists, `save` should prompt to overwrite/merge (standard `save` behavior).
- **Move to Existing**: `mv` should fail if destination exists.
- **Update Links**: When moving a context, `mv` MUST attempt to identify and update any symbolic links in the current workspace that point to artifacts within the moving context, ensuring they point to the new location.

## Requirements

### Functional Requirements

- **FR-001**: `save` command MUST support a `--to <path>` argument to specify the absolute or relative path for the context definition directory.
- **FR-002**: `save` command MUST support a `--link` boolean flag.
- **FR-003**: When `--link` is used, successful artifact saving MUST be followed by replacing the source file in the workspace with a symbolic link to the saved artifact.
- **FR-004**: `first mv <context-name> <new-path>` command MUST move the context definition directory from its current resolved path to the `<new-path>`.
- **FR-005**: `first mv` MUST update the `fctx-files` registry in `first.conf` to reflect the new absolute path of the moved context.
- **FR-006**: `first mv` MUST fail if the destination directory already exists.
- **FR-007**: `first mv` MUST fail if the `<context-name>` is not found in the loaded configuration.
- **FR-008**: `save --to` result MUST be registered in `first.conf` as a known context location.
- **FR-009**: `first mv` MUST iterate through files tracked in the context's `fctx-def.conf` (if easy to resolve) or scan the workspace to find and update symlinks pointing to the old context location.

### Key Entities

- **Context Definition (FctxDef)**: The directory containing `fctx-def.conf` and artifacts.
- **Global Config (`first.conf`)**: The central registry tracking known contexts.

## Success Criteria

### Measurable Outcomes

- **SC-001**: A user can relocate a context using `mv` and immediately `load` it without manual config editing.
- **SC-002**: A user can "install" a local config file into a context using `save --link` and have it replaced by a working symlink.
- **SC-003**: A user can create a context in a completely separate directory (e.g. `../my-contexts/`) using `save --to` and have it recognized by `first`.
- **SC-004**: When moving a context with `mv`, existing symlinks in the workspace are correctly updated to the new location.
