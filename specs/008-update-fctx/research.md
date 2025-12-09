# Research: Update Fctx Command

**Feature**: `008-update-fctx`
**Branch**: `008-update-fctx`

## Unknowns & Clarifications

### 1. Persistence Strategy for Updates

**Question**: How to persist changes to `fctx-def.conf` without destroying existing structure (like `includes`)?

**Findings**:

- Current `Save` implementation only writes `artifacts` list, ignoring any `includes` that might be present in the `FctxDef` object (conf logic just overwrites file with new artifacts string).
- `FctxDef` data model supports `includes`.
- `ConfigReader` correctly reads `includes`.

**Decision**:

- The `Update` command will implement a Read-Modify-Write cycle.
- **Read**: Load existing `FctxDef` using `config.load(contextName)`.
- **Modify**: Update the `artifacts` list in memory (add/remove items). Obtain existing `includes` from the loaded `FctxDef`.
- **Write**: Generate HOCON content that includes **both** `includes` (if present) and `artifacts`.
- **Refactoring**: Logic for generating the HOCON string should be centralized or duplicated with improvement to ensure `includes` are written if they exist. For this feature, we will implement the robust writer in `Update` command. Future refactoring can unify `Save` to use this.

**Rationale**:

- Preserves the `includes` feature which is part of the `FctxDef` spec, even if `Save` CLI doesn't currently expose a way to set them. Users might manually add includes to the file.
- Ensures data integrity.

### 2. Handling Relative Paths in "Generic" Contexts

**Question**: How to handle path resolution when updating a `fctx-def.conf` that is NOT the active one (e.g., `first update other-ctx --add ./foo.txt`)?

**Findings**:

- `ActiveFctx` logic resolves paths relative to the current working directory or the specific `.then` directory.
- `Save` logic resolves paths relative to `workingDir`.
- `ConfigReader` resolves paths relative to `baseUri` (if remote) or file location.

**Decision**:

- When adding a file: resolve the source path relative to the **current working directory** where the command is run.
- Convert it to a relative path from the **target workspace root** if possible, or keep as absolute/external if outside.
- This mirrors `Save` behavior.

**Rationale**:

- User expectation is "add this file I'm looking at" to "that context over there".

## Technology Choices

- **Parsing**: `ConfigReader` logic (Typesafe Config + custom mapping).
- **CLI**: `decline` (standard for project).
- **FileSystem**: `os-lib`.

## Best Practices

- **Atomic Write**: Write to a temp file/backup then move, to prevent corruption on crash. (Already in `Save`, will replicate).
- **Validation**: Check file existence before adding.
