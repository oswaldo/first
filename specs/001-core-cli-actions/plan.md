# Implementation Plan: Core CLI and Basic Actions

**Branch**: `001-core-cli-actions` | **Date**: 2025-10-31 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-core-cli-actions/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation of a basic command-line interface for the `first` tool. It will include argument parsing and two primary commands: `help` and `ls`. The implementation will be a native executable built with Scala CLI and Scala Native, using the `decline` library for parsing, as determined in the [research phase](design/research.md).

## Technical Context

**Language/Version**: Scala 3
**Primary Dependencies**: `decline` (for CLI parsing)
**Storage**: N/A (The `ls` command reads files, but this feature introduces no new persistent storage).
**Testing**: ScalaTest (for unit and integration tests)
**Target Platform**: Linux / macOS (as a native executable)
**Project Type**: Single project (CLI Tool)
**Performance Goals**: CLI commands should respond in under 500ms.
**Constraints**: Must be a native executable compiled with Scala Native.
**Scale/Scope**: This feature covers the initial CLI skeleton and two read-only commands.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **Non-Intrusive Tooling**: The plan produces a self-contained executable, which is the tool itself. It does not add configuration to other repositories.
*   [x] **Full Context Swapping**: This feature is a foundational step for context swapping by providing the means to list available contexts.
*   [x] **Separation of Concerns**: The CLI logic is separate from the core context-switching logic (to be developed later).
*   [x] **Developer as Author**: The plan is a direct translation of the user-authored specification.
*   [x] **Vision-Driven Development**: The plan is aligned with the project's high-level vision and technical constraints.

## Project Structure

### Documentation (this feature)

```text
specs/001-core-cli-actions/
├── plan.md              # This file (/speckit.plan command output)
├── checklists/
│   └── requirements.md
└── design/
    ├── research.md          # Phase 0 output (/speckit.plan command)
    ├── data-model.md        # Phase 1 output (/speckit.plan command)
    └── quickstart.md        # Phase 1 output (/speckit.plan command)
```

### Source Code (repository root)

```text
# Single project (DEFAULT)
src/
└── main/
    └── scala/
        └── first/
            └── Main.scala      # Main entry point with command definitions

tests/
└── src/
    └── main/
        └── scala/
            └── first/
                └── MainTests.scala # Unit tests for CLI commands
```

**Structure Decision**: A simple, single-project structure is sufficient for this initial CLI application, following standard Scala conventions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
|           |            |                                     |