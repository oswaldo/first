# Tasks: Enable Coursier Installation

**Input**: Design documents from `/specs/005-coursier-install/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md

**Tests**: Not explicitly requested in the feature specification - focusing on manual verification

**Organization**: Tasks are grouped by phases to enable incremental delivery

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1 for User Story 1)
- Include exact file paths in descriptions

## Path Conventions

- Repository root: `channel/` for Coursier descriptor
- No source code changes required (build artifacts only)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize channel directory structure

- [x] T001 Create `channel/` directory at repository root

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Research and prepare for descriptor generation

- [x] T002 Research `scala-cli publish` artifact paths and Maven coordinates
- [x] T003 Identify the mainClass value from `project.scala`
- [x] T004 Determine repository URLs for artifact hosting

**Checkpoint**: Foundation ready - descriptor generation can begin

---

## Phase 3: User Story 1 - Install Tool via Coursier (Priority: P1) 🎯 MVP

**Goal**: Enable users to install `first` via `cs install --contrib <channel-url> first`

**Independent Test**: Generate descriptor, publish locally, run `cs install` pointing to local channel

### Implementation for User Story 1

- [x] T005 [US1] Create `AppDescriptor` case class in a build utility file (e.g., `scripts/GenerateDescriptor.scala`)
- [x] T006 [US1] Implement JSON serialization for `AppDescriptor` using upickle in the build utility
- [x] T007 [US1] Create descriptor generation script that outputs `channel/first.json` with correct repositories, dependencies, launcherType, and mainClass
- [x] T008 [US1] Test descriptor generation by running the script locally
- [x] T009 [US1] Publish artifacts using `scala-cli --power publish local .` to local Ivy repository
- [x] T010 [US1] Verify local installation with `cs install --channel file://$(pwd)/channel first`
- [x] T011 [US1] Verify installed binary executes correctly with `first --version`

**Checkpoint**: User Story 1 complete - `cs install` works locally

---

## Phase 3.5: Remote Publishing (Enable Remote Installation)

**Goal**: Publish artifacts to Maven Central and enable remote installation from any machine

**Independent Test**: Install from wife's computer using `cs install --contrib https://...`

### Publishing Configuration

- [ ] T012 [US1] Configure publishing settings in `project.scala` (organization, name, version, licenses, developers, SCM info)
- [ ] T013 [US1] Set up PGP key for artifact signing (required for Maven Central)
- [ ] T014 [US1] Create Sonatype account at https://s01.oss.sonatype.org/ and verify ownership of domain/GitHub org
- [ ] T015 [US1] Configure Sonatype credentials using environment variables (`SONATYPE_USER`, `SONATYPE_PASSWORD`)

### Artifact Publishing

- [ ] T016 [US1] Test publishing to Sonatype staging with `scala-cli --power publish . --publish-repository central-s01`
- [ ] T017 [US1] Verify artifacts appear in Sonatype staging repository
- [ ] T018 [US1] Close and release staging repository to sync to Maven Central
- [ ] T019 [US1] Wait for Maven Central sync (can take 10-30 minutes) and verify artifact is available

### Descriptor Update for Remote

- [ ] T020 [US1] Update `channel/first.json` to point to Maven Central repository (`https://repo1.maven.org/maven2`)
- [ ] T021 [US1] Update dependencies in descriptor to use published version coordinates
- [ ] T022 [US1] Commit and push `channel/first.json` to GitHub

### Remote Verification

- [ ] T023 [US1] Test remote installation from a different machine: `cs install --contrib https://raw.githubusercontent.com/oswaldo/first/main/channel/first.json`
- [ ] T024 [US1] Verify installed binary executes correctly with `first --version` on remote machine

**Checkpoint**: Remote installation working - anyone can install `first` via Coursier

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Finalize distribution setup

- [ ] T025 Add instructions to README.md for installing via Coursier (using the remote URL)
- [ ] T026 Update SPEC-ROADMAP.md to mark coursier installation feature as complete
- [ ] T027 Document the publishing and descriptor generation process in a PUBLISHING.md guide

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Story 1 (Phase 3)**: Depends on Foundational completion - **LOCAL VERIFICATION**
- **Remote Publishing (Phase 3.5)**: Depends on Phase 3 completion - **REMOTE SETUP**
- **Polish (Phase 4)**: Depends on Phase 3.5 completion

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within User Story 1

**Phase 3 (Local)**:
- T005 → T006 → T007 (descriptor generation code flow)
- T008 (test generation) after T007
- T009 → T010 → T011 (local verification flow)

**Phase 3.5 (Remote)**:
- T012, T013, T014 [P] (can be done in parallel - Sonatype setup)
- T015 (credentials) after T014
- T016 → T017 → T018 → T019 (publishing flow)
- T020 → T021 → T022 (descriptor update)
- T023 → T024 (remote verification)

### Parallel Opportunities

- T005 and T002-T004 research can partially overlap (research informs implementation)
- T012, T013, T014 (Sonatype/PGP setup) can run in parallel
- T025, T026, T027 in Polish phase can run in parallel

---

## Parallel Example: User Story 1

Since most tasks in US1 are sequential (descriptor → test → publish → verify), parallel opportunities are limited. However, documentation tasks in Phase 4 can run together.

```bash
# Phase 3.5: Sonatype setup can be done in parallel:
Task: "Configure publishing settings in project.scala"
Task: "Set up PGP key for artifact signing"
Task: "Create Sonatype account"

# Phase 4: Documentation updates can run together:
Task: "Add instructions to README.md"
Task: "Update SPEC-ROADMAP.md"
Task: "Document publishing process in PUBLISHING.md"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (`channel/` directory)
2. Complete Phase 2: Foundational (research Maven coordinates and repos)
3. Complete Phase 3: User Story 1 (descriptor generation + local verification)
4. **STOP and VALIDATE**: Test installation with `cs install` locally
5. Complete Phase 3.5: Remote Publishing (Maven Central + remote verification)
6. **STOP and VALIDATE**: Test remote installation from another machine
7. Complete Phase 4: Polish (documentation updates)

### Verification Plan

**Local Verification** (Phase 3):

1. Run descriptor generation script
2. Publish to local Ivy: `scala-cli --power publish local .`
3. Install locally: `cs install --channel file://$(pwd)/channel first`
4. Verify: `first --version` shows correct version

**Local Success Criteria**:
- `channel/first.json` exists and is valid JSON
- Local `cs install` completes without errors
- Installed `first` binary executes successfully

**Remote Verification** (Phase 3.5):

1. Publish to Maven Central: `scala-cli --power publish . --publish-repository central-s01`
2. Close and release via Sonatype UI or API
3. Wait for Maven Central sync (~10-30 minutes)
4. Update `channel/first.json` with Maven Central coordinates
5. Commit and push to GitHub
6. From a different machine: `cs install --contrib https://raw.githubusercontent.com/oswaldo/first/main/channel/first.json`
7. Verify: `first --version` shows correct version on remote machine

**Remote Success Criteria**:
- Artifacts successfully published to Maven Central
- Remote `cs install` completes without errors from any machine
- Installation works without local build artifacts

---

## Notes

- [P] tasks = different files, no dependencies
- [US1] label maps task to User Story 1
- This feature requires NO source code changes - only build configuration and artifacts
- Phase 3 focuses on local verification, Phase 3.5 adds remote publishing
- Sonatype account setup may take 1-2 business days for domain verification
- PGP key generation is required for Maven Central publishing (security requirement)
- Commit after each phase completion
- No tests written as they weren't requested in spec
