# Implementation Plan: Update Fctx Definitions

**Branch**: `008-update-fctx` | **Date**: 2025-12-09 | **Spec**: [specs/008-update-fctx/spec.md](file:///home/oswaldo/git/first/specs/008-update-fctx/spec.md)
**Input**: Feature specification from `/specs/008-update-fctx/spec.md`

## Summary

Implement `first update [context]` command to allow modifying existing context definitions by adding or forgetting artifacts. This feature enables iterative context management without manually editing HOCON files.

## Technical Context

**Language/Version**: Scala 3.3.4
**Primary Dependencies**: `com.monovore::decline` (CLI), `com.lihaoyi::os-lib` (File Ops), `org.ekrich::sconfig` (HOCON)
**Storage**: Filesystem (HOCON config files)
**Testing**: `munit`
**Target Platform**: Native (Linux/macOS)
**Project Type**: CLI Tool
**Performance Goals**: Instant feedback (<200ms) for local operations.
**Constraints**: Must run as native binary.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- [x] **Non-Intrusive Tooling**: Updates `fctx-def.conf` which is already part of the tool's isolated config.
- [x] **Full Context Swapping**: Directly supports this principle by making it easier to manage contexts.
- [x] **Separation of Concerns**: Maintains separation.
- [x] **Developer as Author**: Automation of manual tasks, fully under developer control.
- [x] **Vision-Driven Development**: Aligned with "Full Context Swapping" vision.
- [x] **Type Safety and Specificity**: Using `Artifact` types and `Either` for errors.
- [x] **Safe and Expressive Coding**: No nulls, functional error handling.

## Project Structure

### Documentation (this feature)

```text
specs/008-update-fctx/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
src/
└── main/
    └── scala/
        └── first/
            ├── cli/
            │   └── UpdateCommand.scala    # [NEW] Command implementation
            └── core/
                └── Update.scala           # [NEW] Core logic
```

**Structure Decision**: Standard CLI structure for this project.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --------- | ---------- | ------------------------------------ |
| None      |            |                                      |

## Proposed Changes

## Proposed Changes

### CLI Layer

#### [NEW] [UpdateCommand.scala](file:///home/oswaldo/git/first/src/main/scala/first/cli/UpdateCommand.scala)

- Define `UpdateOpts` case class.
- Implement `updateCmd` Val in `CliDef`.

### Core Layer

#### [NEW] [Update.scala](file:///home/oswaldo/git/first/src/main/scala/first/core/Update.scala)

- Implement `run` using shared components.

#### [NEW] [FctxWriter.scala](file:///home/oswaldo/git/first/src/main/scala/first/core/FctxWriter.scala)

- `toHocon(fctxDef: FctxDef): String`: Generates HOCON string, preserving `includes`.
- Centralizes config writing logic previously in `Save.scala`.

#### [NEW] [ArtifactProcessor.scala](file:///home/oswaldo/git/first/src/main/scala/first/core/ArtifactProcessor.scala)

- `process(paths: List[String], workingDir: Path, swapAs: SwapAs): List[(Artifact, Option[Path])]`:
  - Handles remote vs local detection.
  - Resolves relative paths.
  - Calculates MD5.
- Extracted from `Save.scala`.

#### [MODIFY] [Save.scala](file:///home/oswaldo/git/first/src/main/scala/first/core/Save.scala)

- Refactor to use `ArtifactProcessor` and `FctxWriter`.

### Configuration Layer

#### [MODIFY] [FctxDef.scala](file:///home/oswaldo/git/first/src/main/scala/first/config/FctxDef.scala)

- Check if `name` field needs to be mutable or if we just create new instances.

## Verification Plan

### Automated Tests

- **Unit Tests**:
  - `UpdateTests.scala`: Test `Update.run`.
  - `FctxWriterTests.scala`: Verify HOCON output includes `includes` and `artifacts` correctly formatted.
  - `ArtifactProcessorTests.scala`: Verify path resolution and MD5 logic.
- **Refactoring Verification**:
  - Run `SaveTests` to ensure refactoring didn't break `Save`.

### Manual Verification

1. **Refactor Check**: Run `first save ...` (e.g., `first save check-ctx`) and verify the output `fctx-def.conf` is valid and identical to previous behavior.
2. **Setup Verification**: Create a fresh context `first save test-ctx --add README.md`.
3. **Add Operation**: `first update test-ctx --add LICENSE`. Verify `fctx-def.conf` has both artifacts.
4. **Forget Operation**: `first update test-ctx --forget README.md`. Verify only `LICENSE` remains.
5. **Default Context**: `first load test-ctx`, then `first update --add build.sbt` (no context arg). Verify `test-ctx` updated.
6. **Includes Preservation**: Add an `includes = ["other"]` line manually to `fctx-def.conf`, run an update, verify the include is persisted.
