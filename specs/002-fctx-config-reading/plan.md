# Implementation Plan: FCTX Configuration Reading

**Branch**: `002-fctx-config-reading` | **Date**: 2025-10-31 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/002-fctx-config-reading/spec.md`

## Summary

This plan outlines the implementation of the core configuration reading module for the `first` tool. This module will be responsible for finding, parsing, and merging HOCON-based `fctx-def.conf` files from multiple locations, handling includes, and resolving artifact paths. The implementation will use the `sconfig` library, a Scala Native compatible fork of Lightbend Config, as detailed in the [research document](design/research.md).

## Technical Context

**Language/Version**: Scala 3.3.4
**Primary Dependencies**: `sconfig` (for HOCON parsing), `munit` (for testing).
**Storage**: N/A (This module reads from the filesystem but does not introduce its own persistent storage).
**Testing**: `munit` (for unit and integration tests of the loading logic).
**Target Platform**: Native executable (the module will be part of the main CLI).
**Project Type**: Core library module within the existing single-project CLI tool.
**Performance Goals**: A complex configuration with 5 levels of includes should load in under 500ms.
**Constraints**: Must be compatible with Scala Native. Error handling must be functional (using `Either`) and not rely on exceptions.
**Scale/Scope**: This feature covers the complete config reading logic as defined in the spec.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **Non-Intrusive Tooling**: This feature is the engine for non-intrusive configuration.
*   [x] **Full Context Swapping**: This is a primary enabler for the context swapping mechanism.
*   [x] **Separation of Concerns**: The configuration logic will be developed in a separate package (`first.config`) from the CLI command handling.
*   [x] **Developer as Author**: N/A.
*   [x] **Vision-Driven Development**: This plan directly implements the configuration strategy outlined in the project's foundational documents.

## Project Structure

### Documentation (this feature)

```text
specs/002-fctx-config-reading/
├── plan.md              # This file
└── design/
    ├── research.md
    ├── data-model.md
    └── quickstart.md
```

### Source Code (repository root)

This feature will add a new package to the existing source structure.

```text
src/
└── main/
    └── scala/
        └── first/
            ├── Main.scala
            └── config/          # NEW: Core configuration logic
                ├── package.scala
                ├── ConfigReader.scala
                ├── FctxDef.scala
                └── ConfigError.scala

tests/
└── src/
    └── main/
        └── scala/
            └── first/
                ├── MainTests.scala
                └── config/      # NEW: Tests for config logic
                    └── ConfigReaderTests.scala
```

**Structure Decision**: The new configuration logic will be encapsulated within a `first.config` package, maintaining a clean separation from the existing CLI parsing code.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
|           |            |                                     |
