# Implementation Plan: Remote fctx Artifacts

**Branch**: `004-remote-fctx-artifacts` | **Date**: 2025-11-09 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-remote-fctx-artifacts/spec.md`

## Summary

This feature enables the `first` CLI to include artifacts and fctx definitions from remote sources (HTTP, HTTPS, GitHub). The technical approach involves using the `sttp` HTTP client to download resources, implementing a content-addressable cache in `~/.first/cache/` to support offline usage and improve performance, and inferring the resource type (local vs. remote) from the path string. Authentication will be supported via `GITHUB_TOKEN` and `FIRST_AUTH_TOKEN` environment variables.

## Technical Context

**Language/Version**: Scala 3.3.4
**Primary Dependencies**: `com.softwaremill.sttp.client4::core` (HTTP), `com.monovore::decline` (CLI), `com.lihaoyi::upickle` (Config), `com.lihaoyi::os-lib` (Filesystem), `org.ekrich::sconfig` (Config), `com.outr::scribe` (Logging), `org.scalameta::munit` (Testing)
**Storage**: Local filesystem at `~/.first/cache/` for content-addressable caching.
**Testing**: `munit` 1.2.1
**Target Platform**: Scala Native 0.5.9 (cross-platform native executable)
**Project Type**: Single project (CLI tool)
**Performance Goals**: Downloads should time out after 10 seconds to avoid indefinite hangs.
**Constraints**: Must support offline usage via a persistent cache. Must fail operations cleanly if a remote resource is unavailable.
**Scale/Scope**: The feature is scoped to individual developer workflows; large-scale concurrent use is not a primary driver.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

*   [x] **Non-Intrusive Tooling**: The plan uses a cache in the user's home directory, keeping the project repository clean.
*   [x] **Full Context Swapping**: The feature enhances context swapping by allowing remote and shared configurations.
*   [x] **Separation of Concerns**: Fetching and caching logic is separate from the core fctx state management.
*   [x] **Developer as Author**: The tool automates fetching, but the developer authors the fctx definitions.
*   [x] **Vision-Driven Development**: The plan aligns with the vision of a flexible and powerful context management tool.

## Project Structure

### Documentation (this feature)

```text
specs/004-remote-fctx-artifacts/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command) - NOT USED
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
```text
# Option 1: Single project (DEFAULT)
src/
├── main/
│   └── scala/
│       └── first/
│           ├── remote/  # New package for remote logic
│           │   ├── Downloader.scala
│           │   ├── Cache.scala
│           │   └── UrlResolver.scala
│           ├── core/
│           └── ...
└── test/
    └── scala/
        └── first/
            └── remote/ # New package for remote tests
                ├── DownloaderTests.scala
                ├── CacheTests.scala
                └── UrlResolverTests.scala
```

**Structure Decision**: The existing **Single project** structure is appropriate. New logic for handling remote artifacts will be encapsulated in a new `first.remote` package to maintain separation of concerns.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| *N/A*     |            |                                     |
