# Tasks: Update Fctx Definitions

**Feature**: `008-update-fctx`
**Branch**: `008-update-fctx`
**Status**: In Progress

## Phase 1: Shared Core Components (Refactoring)

- [x] T001 Create `src/main/scala/first/core/ArtifactProcessor.scala` extracting logic from `Save.scala`
- [x] T002 Create `test/scala/first/core/ArtifactProcessorTests.scala`
- [x] T003 Create `src/main/scala/first/core/FctxWriter.scala` for robust HOCON generation (handling `includes`)
- [x] T004 Create `test/scala/first/core/FctxWriterTests.scala`
- [x] T005 Refactor `src/main/scala/first/core/Save.scala` to use `ArtifactProcessor` and `FctxWriter`
- [x] T006 Verify `Save` functionality by running existing `SaveTests`

## Phase 2: Update Setup & Foundation

- [x] T007 Create `src/main/scala/first/cli/UpdateCommand.scala` with `UpdateOpts` definition
- [x] T008 Create `src/main/scala/first/core/Update.scala` skeleton
- [x] T009 Register `updateCmd` in `src/main/scala/first/CliDef.scala`
- [x] T010 Implement context resolution logic (Active vs Named) in `src/main/scala/first/core/Update.scala`
- [x] T011 Implement `FctxDef` loading via `ConfigReader` in `src/main/scala/first/core/Update.scala`

## Phase 3: Add/Remove Artifact to/from Current Context (P1)

_Goal: Enable adding and removing files from the active context._

- [x] T012 Implement `Update.run` logic to process new artifacts using `ArtifactProcessor`
- [x] T013 Wire `--add` option in `UpdateCommand` (already handled by `UpdateOpts`)
- [x] T014 Use `FctxWriter` to persist updated definition to `fctx-def.conf`
- [x] T015 Create `test/scala/first/core/UpdateTests.scala` verifying "add" scenarios
- [x] T016 Implement removal logic by filtering artifacts in `fctxDef.artifacts` based on resolved path
- [x] T017 Create unit test in `UpdateTests.scala` verifying "forget" scenarios

## Phase 4: Update Named Context (P2)

_Goal: Enable updating a specific context by name._

## Phase 4: Update Named Context (P2) & Includes Management (P3)

_Goal: Enable updating context by name and managing includes._

- [x] T019 [US3] Verify/Ensure context resolution logic handles explicit context name argument (Verified via T010 implementation)
- [x] T022 [US5] Add `--includes` option to `SaveCommand`
- [x] T023 [US5] Update `Save` core logic to store provided includes
- [x] T024 [US5] Add `--includes` and `--forget-includes` to `UpdateCommand`
- [x] T025 [US5] Implement add/remove includes logic in `Update.run`
- [x] T026 [US5] Add unit tests for includes management in `Save` and `Update` (Verified via `SaveTests` and `UpdateTests`)

## Phase 6: Polish & Verification

- [x] T020 Run full test suite `scala-cli test .` to ensure no regressions
- [x] T021 Verify `includes` preservation manually (Verified via T018 unit test)

## Dependencies

- Phase 1 blocks all other phases.
- Phase 2 blocks Phase 3, 4, 5.

## Parallel Execution

- T003/T004 (Writer) and T001/T002 (Processor) can be done in parallel.
- Post-Phase 2, T012 (Add) and T016 (Forget) can be implemented independently.

## Implementation Strategy

1. **Refactor First**: Create the shared components and ensure `Save` still works. This validates the reuse hypothesis.
2. **Setup Update**: Build the new command on top of the tested shared components.
