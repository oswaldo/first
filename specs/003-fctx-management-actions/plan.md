# Implementation Plan: [FEATURE]

**Branch**: `003-fctx-management-actions` | **Date**: 2025-11-01 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/003-fctx-management-actions/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation of the fctx management actions: `save`, `load`, and `swap`. These actions will allow users to manage their development contexts by saving the current state, loading a previously saved state, and swapping between contexts. The implementation will be a Scala CLI application using the `decline` library for command-line parsing and `scribe` for logging.

## Technical Context

**Language/Version**: Scala 3.3.4
**Primary Dependencies**: decline, sconfig, munit, scribe
**Storage**: files
**Testing**: munit
**Target Platform**: Native executable
**Project Type**: single project (CLI tool)
**Performance Goals**: save < 5s, load < 2s, swap < 1s
**Constraints**: Scala Native compatibility
**Scale/Scope**: 10s of artifacts per fctx

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [X] **Non-Intrusive Tooling**: The plan avoids adding tool-specific configuration files to the repository.
*   [X] **Full Context Swapping**: The plan accounts for the ability to switch development contexts.
*   [X] **Separation of Concerns**: There is a clear separation between the project's source code and development tools.
*   [X] **Developer as Author**: The plan respects the developer as the primary author, using tools as support.
*   [X] **Vision-Driven Development**: The plan is aligned with the project's high-level vision document.

## Project Structure

### Global Options

- `--at <path>`: A global option to specify the working directory for the command. All operations will be performed relative to this path.

### Documentation (this feature)

```text
specs/003-fctx-management-actions/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── main/scala/first/
│   ├── core/          # Core logic for save, load, swap
│   ├── model/         # Data models (FctxDef, Artifact)
│   └── cli/           # Command-line interface
└── tests/scala/first/
    ├── core/
    └── cli/
```

**Structure Decision**: The project will follow a single project structure, with the source code organized into `core`, `model`, and `cli` packages.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
