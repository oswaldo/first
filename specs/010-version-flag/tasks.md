---
description: "Tasks for feature 010-version-flag"
---

# Tasks: Version Flag

**Input**: Design documents from `/specs/010-version-flag/`
**Prerequisites**: plan.md, spec.md, research.md

## Phase 1: Setup

**Purpose**: Project initialization

- [x] T001 Verify `BuildInfo` availability by running `scala-cli compile .`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure

_None required for this feature._

---

## Phase 3: User Story 1 - Checking Installed Version (Priority: P1) 🎯 MVP

**Goal**: Users need to verify which version of the `first` tool is installed.

**Independent Test**: Run `first --version` and verify output.

### Tests for User Story 1

- [x] T002 [US1] (Removed) Add test case for `--version` flag in `src/test/scala/first/cli/VersionTests.scala`

### Implementation for User Story 1

- [x] T003 [US1] Update `src/main/scala/first/Main.scala` to handle `--version` flag using `decline` and `BuildInfo`

**Checkpoint**: `first --version` works as expected.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements

- [x] T004 Code cleanup and refactoring
- [x] T005 Verify `quickstart.md` scenario

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **User Story 1 (Phase 3)**: Depends on Setup
- **Polish (Phase 4)**: Depends on US1

### User Story Dependencies

- **User Story 1 (P1)**: Independent

### Parallel Opportunities

- T002 and T003 targets different files but T003 implements what T002 tests. T002 should ideally fail first.

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 3: User Story 1
3. **STOP and VALIDATE**: Test `first --version`
