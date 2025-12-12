# Tasks: Context Migration & Linking

**Feature**: `009-fctx-migration`
**Spec**: [Spec](spec.md) | **Plan**: [Plan](plan.md)

## Phase 1: Core Infrastructure (Global Config)

Establish the `GlobalConfig` registry to track context locations, which is the foundation for `save --to` and `mv`.

- [x] T001 [P] Create `src/main/scala/first/config/GlobalConfig.scala` to manage `~/.first/first.conf` registry
- [x] T002 [P] Create `src/main/scala/first/config/ConfigWriter.scala` for robust config writing
- [x] T003 Modify `src/main/scala/first/config/ConfigReader.scala` to discover contexts from `GlobalConfig`
- [x] T004 Create `src/test/scala/first/config/GlobalConfigTests.scala` to verify registry operations

## Phase 2: User Story 1 - Save to Custom Location (P1)

Implement the ability to save contexts to arbitrary paths using `save --to`.

- [x] T005 [US1] Modify `src/main/scala/first/cli/SaveCommand.scala` to add `--to` option
- [x] T006 [US1] Modify `src/main/scala/first/core/Save.scala` to handle custom paths and register with GlobalConfig
- [x] T007 [US1] Update `src/test/scala/first/core/SaveTests.scala` to verify `--to` functionality
- [x] T008 [P] [US2] Create `src/main/scala/first/core/SymlinkManager.scala` for safe symlink operations
- [x] T009 [P] [US2] Create `src/test/scala/first/core/SymlinkManagerTests.scala`
- [x] T010 [US2] Modify `src/main/scala/first/cli/SaveCommand.scala` to add `--link` flag
- [x] T011 [US2] Modify `src/main/scala/first/core/Save.scala` to implement linking logic (replace files with symlinks)
- [x] T012 [US2] Update `src/test/scala/first/core/SaveTests.scala` to verify `--link` functionality

## Phase 4: User Story 3 - Move Context (P2)

Implement the `mv` command to relocate contexts and update references.

- [x] T013 [P] [US3] Create `src/main/scala/first/cli/MvCommand.scala` for `mv` command parsing
- [x] T014 [US3] Create `src/main/scala/first/core/Mv.scala` implementing move logic and GlobalConfig updates
- [x] T015 [US3] Implement workspace symlink scanning and updating in `src/main/scala/first/core/Mv.scala`
- [x] T016 [US3] Integrate `MvCommand` into `src/main/scala/first/AppRunner.scala` and `src/main/scala/first/Main.scala`
- [x] T017 [US3] Create `src/test/scala/first/core/MvTests.scala` covering move and relinking scenarios

## Phase 5: Polish & Documentation

- [x] T018 Verify all commands with `--dry-run` and `--verbose`
- [x] T019 Update `src/main/scala/first/CliDef.scala` to include `mv` command help
- [x] T020 Run full end-to-end verification (Quickstart scenarios)
- [x] T021 Update `walkthrough.md` with new features and scenarios

## Phase 6: Update --link support (P2)

Allow converting new artifacts to symlinks during update.

- [x] T022 [US4] Modify `src/main/scala/first/cli/UpdateCommand.scala` to add `--link` flag
- [x] T023 [US4] Modify `src/main/scala/first/core/Update.scala` to handle optional linking for added artifacts
- [x] T024 [US4] Update `src/test/scala/first/core/UpdateTests.scala` to verify `update --link` functionality
- [x] T025 [US4] Update `walkthrough.md` with update scenario

## Dependencies & Strategy

- **Strategy**: MVP first. Phase 1 enables Phase 2 & 4. Phase 2 (custom location) is required for Phase 4 (Move) to make sense globally.
- **Dependencies**:
  - T001 (GlobalConfig) -> T003, T006, T014
  - T008 (SymlinkManager) -> T011, T015
  - T013 (MvCommand) -> T016

## Parallel Execution Opportunities

- T001, T002, T008, T013 can be started in parallel.
- Phase 2 (Save improvements) and Phase 4 (Mv logic) can overlap once Phase 1 is stable.
