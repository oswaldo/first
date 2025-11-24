# Implementation Plan: Enable Coursier Installation

**Branch**: `005-coursier-install` | **Date**: 2025-11-24 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/005-coursier-install/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This feature enables users to install `first` via Coursier using `cs install --contrib <channel-url> first`. We will generate a Coursier application descriptor (JSON) as a build artifact and host it in a `channel/` directory in the repository. The descriptor will reference the published Maven artifacts and enable installation via a custom channel.

## Technical Context

**Language/Version**: Scala 3.3.4 (Scala Native 0.5.9)
**Primary Dependencies**: decline (CLI), os-lib (FS), upickle (JSON), sttp (HTTP)
**Storage**: Filesystem
**Testing**: munit
**Target Platform**: Native (Linux, macOS x64/ARM64)
**Project Type**: CLI Tool
**Performance Goals**: Fast startup (native)
**Constraints**: Must be installable via `cs install`
**Scale/Scope**: Single CLI application

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **Non-Intrusive Tooling**: The descriptor is a build artifact, not a configuration file in the user's source.
*   [x] **Full Context Swapping**: Enables the distribution of the tool that powers this principle.
*   [x] **Separation of Concerns**: Installation logic is decoupled from the application logic.
*   [x] **Developer as Author**: N/A
*   [x] **Vision-Driven Development**: Aligns with the roadmap goal of "MVP installation via coursier".
*   [x] **Type Safety and Specificity**: N/A for the JSON descriptor, but the build logic should be type-safe if possible.

## Project Structure

### Documentation (this feature)

```text
specs/005-coursier-install/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── checklists/
│   └── requirements.md
└── spec.md
```

### Source Code (repository root)

```text
# No changes to source code structure.
# New directory for distribution:
channel/
└── first.json
```

**Structure Decision**: We will add a `channel` directory to the root to host the Coursier descriptor. This keeps the distribution mechanism simple and version-controlled.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
