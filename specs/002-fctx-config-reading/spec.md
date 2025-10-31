# Feature Specification: FCTX Configuration Reading

**Feature Branch**: `002-fctx-config-reading`  
**Created**: 2025-10-31  
**Status**: Draft  
**Input**: User description: "Develop the fctx configuration reading system from HOCON files"

## Vision Alignment

*This specification is guided by the principles and vision outlined in the [project constitution](/.specify/memory/constitution.md) and the [vision document](/first.md). This feature directly supports the core principles of **Full Context Swapping** and **Non-Intrusive Tooling** by defining the mechanism for loading context definitions.*

---

## Clarifications

### Session 2025-10-31

- Q: If an artifact path in a configuration file points to a non-existent file or directory during the loading process, how should the system react? → A: Fail the entire context loading operation immediately with a `PathNotFound` error.
- Q: How should the system handle `fctx-def.conf` files that are empty or contain only comments? → A: Treat it as a valid, empty configuration that contributes no values.
- Q: How should the system behave if the main configuration file (`~/.first/first.conf`) is malformed or missing entirely? → A: Proceed gracefully, assuming an empty list of known fctx definition paths.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Basic Configuration Loading (Priority: P1)

As a user, I want the `first` tool to read a single `fctx-def.conf` file so that a simple context can be understood by the system.

**Why this priority**: This is the foundational step for all other configuration-related logic.

**Independent Test**: Can be tested by placing a single `fctx-def.conf` file in a known location and verifying that an internal function can parse it into a valid data structure.

**Acceptance Scenarios**:

1. **Given** a valid `fctx-def.conf` file exists in the current directory's `.then/my-context/` folder, **When** the config reading logic is triggered for "my-context", **Then** the system successfully parses the file into an `FctxDef` object.
2. **Given** a `fctx-def.conf` file contains invalid HOCON syntax, **When** the config reading logic is triggered, **Then** the system returns a configuration parsing error.

---

### User Story 2 - Cumulative Configuration Loading (Priority: P2)

As a user, I want the system to discover and merge configurations from multiple locations (`~/.first`, and the `.then/` hierarchy) so that I can define global, project-level, and local contexts.

**Why this priority**: This enables the powerful and flexible layering of contexts as described in the project vision.

**Independent Test**: Can be tested by creating mock `fctx-def.conf` files in a simulated home directory, project root, and a nested directory, then verifying that the final merged configuration object has the correct values based on the defined precedence rules.

**Acceptance Scenarios**:

1. **Given** a key `my-key` is `A` in `~/.first/my-context/fctx-def.conf` and `B` in `./.then/my-context/fctx-def.conf`, **When** the configuration for "my-context" is loaded from the project directory, **Then** the final value for `my-key` MUST be `B`.
2. **Given** configuration files for "my-context" exist in `~/.first`, a parent directory's `.then/`, and the current directory's `.then/`, **When** the configuration is loaded, **Then** all three files are read and merged in the correct order of precedence.

---

### User Story 3 - Include Resolution and Circular Dependency Detection (Priority: P3)

As a user, I want to be able to `include` other fctx definitions within a `fctx-def.conf` file so that I can compose complex contexts from simpler ones.

**Why this priority**: Composition is key to making contexts reusable and manageable.

**Independent Test**: Can be tested by creating multiple `fctx-def.conf` files where one includes another, and verifying the final merged object. A separate test can create a circular include chain to verify the error detection.

**Acceptance Scenarios**:

1. **Given** `a/fctx-def.conf` includes `b`, **When** `a` is loaded, **Then** the contents of `b/fctx-def.conf` are loaded first, followed by the contents of `a/fctx-def.conf`.
2. **Given** `a/fctx-def.conf` includes `b`, and `b/fctx-def.conf` includes `a`, **When** either `a` or `b` is loaded, **Then** the system MUST fail with a `CircularDependency` error that indicates the path of the circular reference.

---

### Edge Cases

- Empty or commented-out `fctx-def.conf` files are treated as valid, empty configurations and do not cause an error.
- If an artifact path resolves to a non-existent file or directory, the entire loading operation MUST fail with a `PathNotFound` error.
- If the main configuration file `~/.first/first.conf` is missing or malformed, the system MUST proceed gracefully with an empty list of globally-known contexts.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST parse files written in HOCON format.
- **FR-002**: The system MUST support a cumulative loading strategy, merging configurations from `~/.first`, and any `.then/` directories from the filesystem root down to the current working directory.
- **FR-003**: The system MUST support an `includes` key within a configuration file to allow for the composition of other configurations.
- **FR-004**: The system MUST detect and fail with a clear error message if a circular dependency is found in the `includes` chain.
- **FR-005**: The system MUST resolve all artifact paths relative to their containing `fctx-def.conf` file into absolute paths.
- **FR-006**: A successful configuration load MUST result in an immutable `FctxDef` data structure.
- **FR-007**: Any failure in loading, parsing, or resolving the configuration MUST result in a descriptive error type, not an exception.

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
- **first.conf**: A configuration file in `~/.first/` containing a list of known fctx definition paths.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A set of 5 nested HOCON files with `includes` and path overrides can be correctly parsed into a single, final `FctxDef` object in under 500ms.
- **SC-002**: A configuration with a circular dependency (A -> B -> C -> A) is detected, and the operation fails immediately with an error message showing the dependency chain.
- **SC-003**: An attempt to load a context that references a non-existent artifact path fails with a `PathNotFound` error.