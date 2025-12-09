# Feature Specification: Update Fctx Definitions

**Feature Branch**: `008-update-fctx`
**Created**: 2025-12-09
**Status**: Draft
**Input**: User description: "Implement 'update' command to modify existing fctx definitions, supporting add/forget operations and defaulting to the current context"

## Vision Alignment

_This specification is guided by the principles and vision outlined in the [project constitution](/.specify/memory/constitution.md) and the [vision document](/first.md)._

---

## User Scenarios & Testing _(mandatory)_

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
-->

### User Story 1 - Add Artifact to Current Context (Priority: P1)

As a developer working in an active context, I want to add a new configuration file to the current context definition so that it is tracked and swapped in future sessions.

**Why this priority**: Modifying the current working context is the most frequent operation when iterating on a setup.

**Independent Test**: Can be tested by loading a context, creating a new file, running `first update --add newfile`, and verifying `fctx-def.conf` contains the new file.

**Acceptance Scenarios**:

1. **Given** an active context "dev" and a new file `local.conf`, **When** I Run `first update --add local.conf`, **Then** `local.conf` is added to the "dev" context definition and artifacts directory.
2. **Given** an active context "dev", **When** I Run `first update --add non-existent.conf`, **Then** the command fails with a helpful error message.

---

### User Story 2 - Remove Artifact from Current Context (Priority: P1)

As a developer, I want to stop tracking a file in the current context without deleting the original source file, so I can clean up my context definition.

**Why this priority**: Keeping context definitions clean is essential for the "full context swapping" philosophy.

**Independent Test**: Can be tested by having a context with `fileA`, running `first update --forget fileA`, and verifying `fctx-def.conf` no longer lists `fileA`.

**Acceptance Scenarios**:

1. **Given** an active context "dev" containing `config.json`, **When** I run `first update --forget config.json`, **Then** `config.json` is removed from the "dev" context definition.

---

### User Story 3 - Update Named Context (Priority: P2)

As a developer, I want to modify a context that is not currently active, so I can manage other environments without switching to them.

**Why this priority**: Allows for remote management of contexts, useful for CI/CD or preparing environments for others.

**Independent Test**: Can be tested by specifying a context name different from the active one.

**Acceptance Scenarios**:

1. **Given** available context "prod" (inactive), **When** I run `first update prod --add deploy.sh`, **Then** `deploy.sh` is added to the "prod" context definition.

---

### Edge Cases

- What happens when adding a file that is already in the context? (Should likely update its hash/revision or do nothing).
- What happens when forgetting a file that isn't in the context? (Should warn or fail gracefully).
- How does it handle relative paths when updating a non-active context? (Paths should be resolved relative to CWD or correctly mapped).

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST provide an `update` command.
- **FR-002**: System MUST accept an optional `[context]` argument. If omitted, it MUST default to the currently active context.
- **FR-003**: System MUST support an `--add` flag (repeatable or list) to specify files/directories to add.
- **FR-004**: System MUST support a `--forget` flag (repeatable or list) to specify paths to remove.
- **FR-005**: When adding a file, the system MUST perform the same artifact persistence logic (copy/hash) as the `save` command.
- **FR-006**: When forgetting a file, the system MUST remove it from `fctx-def.conf` AND remove the backup copy in the `artifacts/` directory (to save space/cleanup).
- **FR-007**: System MUST fail if no active context is found and no context argument is provided.
- **FR-008**: System MUST persist the changes to `fctx-def.conf` in HOCON format, preserving the overall structure (though comments might be lost if rewriting entire file is the only option, consistent with `save` command).

### Key Entities _(include if feature involves data)_

- **FctxDef**: The definition object containing the list of artifacts.
- **ActiveFctx**: The runtime state indicating the current context.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can add a new file to an existing context in under 1 second (excluding large file copy time).
- **SC-002**: `fctx-def.conf` is valid HOCON after update.
- **SC-003**: Updating a context does not corrupt other existing artifacts in the definition.
