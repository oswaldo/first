# Feature Specification: Remote fctx Artifacts

**Branch**: `004-remote-fctx-artifacts`

## 1. Feature Description

As a developer using the `first` CLI, I want to be able to include artifacts from remote sources like HTTP, HTTPS, and GitHub in my fctx definitions. This will allow me to share and reuse common configurations and scripts without having to manually copy them into my project.

I also want to be able to include entire fctx definitions from remote sources, so I can easily compose and extend existing contexts.

## 2. User Scenarios

### Scenario 1: Adding a remote artifact to an fctx

1.  **Given** I have an fctx named `my-context`.
2.  **When** I save a new version of `my-context` with an artifact path pointing to `https://example.com/my-script.sh`.
3.  **And** I load `my-context`.
4.  **Then** the `first` tool should download `my-script.sh` and place it in my working directory.

### Scenario 2: Adding a GitHub artifact using the `gh://` shorthand

1.  **Given** I have an fctx named `my-context`.
2.  **When** I save a new version of `my-context` with an artifact path `gh://my-org/my-repo/my-script.sh` (or `gh://my-org/my-repo/my-branch/my-script.sh`).
3.  **And** I load `my-context`.
4.  **Then** the `first` tool should download `my-script.sh` from `https://github.com/my-org/my-repo/raw/main/my-script.sh` (or the specified branch/tag) and place it in my working directory.

### Scenario 3: Including a remote fctx definition

1.  **Given** I have a local fctx named `my-local-context`.
2.  **And** there is a remote fctx definition at `https://example.com/base-fctx.conf`.
3.  **When** I add `includes = ["https://example.com/base-fctx.conf"]` to my `my-local-context` definition.
4.  **And** I load `my-local-context`.
5.  **Then** the `first` tool should download and merge the artifacts from the remote fctx definition with my local one.

## 3. Functional Requirements

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| FR-1 | Support for HTTP/HTTPS artifact paths | - The `path` field in an artifact definition can be a valid HTTP or HTTPS URL.<br>- When loading an fctx with a remote artifact, the tool downloads the file from the URL. |
| FR-2 | Support for `gh://` shorthand for GitHub artifacts | - The `path` field can be a string starting with `gh://` followed by `org/repo[/branch-or-tag]/path/to/file`.<br>- If no branch or tag is specified, it defaults to `main`.<br>- The `gh://` string is expanded to a full GitHub raw content URL (e.g., `https://github.com/org/repo/raw/branch-or-tag/path/to/file`).<br>- The tool downloads the file from the expanded GitHub URL. |
| FR-3 | Support for remote fctx includes | - The `includes` list in an `fctx-def.conf` file can contain HTTP, HTTPS, or `gh://` URLs pointing to other fctx definitions.<br>- When loading an fctx, the tool downloads and merges the included remote fctx definitions. |
| FR-4 | Read-only remote artifacts | - Remote artifacts are treated as read-only.<br>- The `save` command should not attempt to update the content or checksum of remote artifacts. |
| FR-5 | Read-only remote fctx includes | - Remote fctx definitions are treated as read-only.<br>- Only the `load` and `swap` commands are affected by remote includes. `save` should not be affected. |

## 4. Non-Functional Requirements

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| NFR-1 | Performance | - Loading remote artifacts should not significantly degrade the performance of the `load` and `swap` commands.<br>- Remote artifacts and fctx definitions will be cached using a content-addressable caching mechanism (e.g., based on SHA256 hashes) to improve performance and support offline usage. |
| NFR-2 | Security | - The tool must support authentication for private repositories or other protected resources.<br>- Authentication credentials (e.g., tokens) should be provided via environment variables or a dedicated configuration file. |
| NFR-3 | Error Handling | - The tool should provide clear error messages if a remote resource cannot be downloaded or parsed.<br>- If a remote resource is unavailable during `load` or `swap`, the operation must fail. The tool should ideally check for availability and leverage caching before attempting to load to prevent partial contexts. |

## 5. Assumptions

- The `com.softwaremill.sttp.client4::core::4.0.13` dependency is available and can be used for making HTTP requests.
- The `gh://` shorthand will expand to a public GitHub repository URL.

## 6. Out of Scope

- Support for other remote sources besides HTTP, HTTPS, and GitHub.

## 7. Data Model

- The distinction between a local artifact and a remote artifact will be inferred from the `path` string.
  - If the `path` begins with `http://`, `https://`, or `gh://`, it is treated as a remote artifact.
  - Otherwise, it is treated as a local file path.
- The `includes` field in an `fctx-def.conf` file will contain a list of paths (local or remote) pointing to other fctx definitions. The type (local or remote) will be inferred from the path string, similar to artifact paths.

## Clarifications
### Session 2025-11-09
- Q: How should the data model for an artifact distinguish between a local file and a remote resource? → A: infer from location string.