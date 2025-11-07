# Tasks: Remote fctx Artifacts

**Input**: Design documents from `/specs/004-remote-fctx-artifacts/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md

**Tests**: The tasks below include tests as specified in the implementation plan.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Paths assume the single project structure defined in `plan.md`.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add new project dependencies.

- [x] T001 Add `sttp` client dependency to `project.scala` for HTTP operations.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Implement core caching and URL resolution logic that all remote features will depend on.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [x] T002 [P] Define data structures for remote artifacts (`RemoteArtifact`, `CachedArtifact`) in `src/main/scala/first/remote/DataModel.scala` based on `data-model.md`.
- [x] T003 [P] Implement the content-addressable cache logic in `src/main/scala/first/remote/Cache.scala`. This includes saving, retrieving, and checking for artifacts in `~/.first/cache/`.
- [x] T004 [P] Create unit tests for the cache logic in `src/test/scala/first/remote/CacheTests.scala`.
- [x] T005 Implement the basic URL resolver in `src/main/scala/first/remote/UrlResolver.scala` to distinguish between local and remote paths.
- [x] T006 Create unit tests for the URL resolver in `src/test/scala/first/remote/UrlResolverTests.scala`.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Remote Artifacts via HTTP/S (Priority: P1) 🎯 MVP

**Goal**: The `load` command can download and place artifacts from standard HTTP/S URLs.

**Independent Test**: Create an fctx with an artifact pointing to a public HTTP/S URL. Run `first load <context>` and verify the file is downloaded to the working directory.

### Implementation for User Story 1

- [x] T007 [US1] Implement the `Downloader` object in `src/main/scala/first/remote/Downloader.scala` to fetch files from HTTP/S URLs using `sttp`.
- [x] T008 [US1] Implement authentication for non-GitHub URLs using the `FIRST_AUTH_TOKEN` environment variable in `Downloader.scala`.
- [x] T009 [US1] Add a 10-second download timeout to the HTTP client in `Downloader.scala`.
- [x] T010 [P] [US1] Create unit tests for the downloader in `src/test/scala/first/remote/DownloaderTests.scala`, covering success, timeout, and auth cases.
- [x] T011 [US1] Modify the `Load.scala` logic in `src/main/scala/first/core/Load.scala` to use the `UrlResolver`, `Downloader`, and `Cache` for remote artifacts.
- [x] T012 [US1] Add integration tests in `src/it/scala/first/cli/CliTests.scala` for loading an fctx with an HTTP/S artifact.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - GitHub Artifacts with `gh://` (Priority: P2)

**Goal**: The `load` command can resolve `gh://` shorthand URLs and download artifacts from GitHub.

**Independent Test**: Create an fctx with an artifact using a `gh://` path. Run `first load <context>` and verify the file is downloaded from the correct GitHub URL.

### Implementation for User Story 2

- [ ] T013 [US2] Extend `UrlResolver.scala` to parse `gh://` paths and resolve them into full GitHub raw content URLs.
- [ ] T014 [P] [US2] Update `UrlResolverTests.scala` to include tests for `gh://` path resolution (with and without branches/tags).
- [ ] T015 [US2] Extend `Downloader.scala` to use the `GITHUB_TOKEN` environment variable for authenticating with GitHub.
- [ ] T016 [P] [US2] Update `DownloaderTests.scala` to include tests for GitHub authentication.
- [ ] T017 [US2] Add integration tests in `src/it/scala/first/cli/CliTests.scala` for loading an fctx with a `gh://` artifact from both a public and a (mocked) private repository.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Remote fctx Includes (Priority: P3)

**Goal**: The `load` and `swap` commands can fetch, merge, and process fctx definitions from remote URLs.

**Independent Test**: Create a local `fctx-def.conf` that includes a remote one. Run `first load <context>` and verify that artifacts from both the local and remote definitions are loaded.

### Implementation for User Story 3

- [ ] T018 [US3] Define the `FctxInclude` data structure in `src/main/scala/first/remote/DataModel.scala`.
- [ ] T019 [US3] Modify the config reading logic in `src/main/scala/first/config/ConfigReader.scala` to detect remote includes.
- [ ] T020 [US3] In `ConfigReader.scala`, use the `Downloader` and `Cache` to fetch and cache remote `.conf` files before parsing.
- [ ] T021 [US3] Implement the logic to merge artifacts from included remote fctx definitions with the primary one in `ConfigReader.scala`.
- [ ] T022 [P] [US3] Add unit tests to `src/test/scala/first/config/ConfigReaderTests.scala` for merging remote and local configurations.

**Checkpoint**: All core remote functionalities should now be implemented.

---

## Phase 6: User Story 4 - Read-Only Remote Artifacts (Priority: P4)

**Goal**: Ensure that the `save` command does not attempt to modify remote artifacts or remote fctx definitions.

**Independent Test**: Load a context with a remote artifact, modify the local copy of that artifact, and run `first save <context>`. Verify that the `save` operation does not attempt to update the remote artifact's content or checksum.

### Implementation for User Story 4

- [ ] T023 [US4] Modify the `Save.scala` logic in `src/main/scala/first/core/Save.scala` to identify and skip remote artifacts during the save process.
- [ ] T024 [US4] Ensure that the `save` command does not try to update fctx definitions that were included remotely.
- [ ] T025 [P] [US4] Add unit tests to `src/test/scala/first/core/SaveTests.scala` to verify that remote artifacts are ignored on save.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final improvements, error handling, and validation.

- [ ] T026 [P] Review and enhance error handling in all new modules (`Downloader`, `Cache`, `UrlResolver`) to provide clear messages on failure (e.g., download failed, checksum mismatch).
- [ ] T027 [P] Add logging statements using `scribe` across the new `first.remote` package for better traceability.
- [ ] T028 Run `scala-cli fmt .` and `scala-cli -indent -rewrite .` to ensure code is formatted correctly.
- [ ] T029 Run all tests via `scala-cli test .` to confirm no regressions were introduced.
- [ ] T030 Validate the feature by running through all scenarios in `quickstart.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies.
- **Foundational (Phase 2)**: Depends on Setup. Blocks all user stories.
- **User Stories (Phase 3-6)**: Depend on Foundational.
- **Polish (Phase 7)**: Depends on all user stories being complete.

### User Story Dependencies

- **US1 (HTTP/S Artifacts)**: Depends on Foundational.
- **US2 (`gh://` Artifacts)**: Depends on US1.
- **US3 (Remote Includes)**: Depends on US1.
- **US4 (Read-Only Save)**: Can be implemented after US1, but logically follows the other implementation stories.

### Parallel Opportunities

- **Phase 2**: `Cache.scala` (T003) and `UrlResolver.scala` (T005) and their tests can be developed in parallel.
- **Post-Foundation**: Once Phase 2 is complete, work on US1, US2, and US3 could be parallelized, although there are dependencies between them. A better approach is to do them sequentially.
- **Testing**: Most unit test tasks (`[P]`) can be written in parallel with their corresponding implementation task.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1.  Complete Phase 1: Setup
2.  Complete Phase 2: Foundational
3.  Complete Phase 3: User Story 1
4.  **STOP and VALIDATE**: Test US1 independently. This provides the core value of downloading a remote file.

### Incremental Delivery

1.  Complete MVP (US1).
2.  Add User Story 2 (`gh://` support).
3.  Add User Story 3 (remote includes).
4.  Add User Story 4 (read-only logic).
5.  Complete Polish phase.
