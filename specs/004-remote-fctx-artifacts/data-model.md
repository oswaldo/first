# Data Model: Remote fctx Artifacts

This document describes the data structures related to fetching, caching, and including remote artifacts and fctx definitions.

## 1. Core Concepts

The primary change is the interpretation of the `path` string within an artifact definition and the `includes` list in the main `fctx-def.conf`.

-   **Path Inference**: The type of an artifact or include (local vs. remote) is inferred from its path string. If the path starts with `http://`, `https://`, or `gh://`, it is considered **remote**. Otherwise, it is **local**.

## 2. In-Memory Data Structures

These structures will be used internally by the `first` tool during the `load` and `swap` operations.

### RemoteArtifact

Represents a remote artifact that needs to be processed.

-   **`sourceUrl: String`**: The original, unresolved URL or `gh://` path from the fctx definition.
-   **`resolvedUrl: String`**: The final, downloadable URL after resolving any shorthands (e.g., `gh://`).
-   **`destination: os.Path`**: The absolute local path where the artifact should be placed in the working directory.
-   **`sha256: Option[String]`**: The expected SHA256 checksum of the file, if provided in the fctx definition. Used to validate the downloaded content and for cache lookups.

### CachedArtifact

Represents a file stored in the local content-addressable cache.

-   **`hash: String`**: The SHA256 hash of the file content, used as the primary key in the cache. The cached file itself will be named after this hash.
-   **`filePath: os.Path`**: The absolute path to the artifact within the cache (e.g., `~/.first/cache/a1b2c3...`).
-   **`lastAccessed: Long`**: Timestamp of the last access. Can be used for future cache eviction policies.

### FctxInclude

Represents a remote fctx definition to be merged.

-   **`sourceUrl: String`**: The original, unresolved URL or `gh://` path from the `includes` list.
-   **`resolvedUrl: String`**: The final, downloadable URL of the remote `.conf` file.

## 3. State Transitions (for a single remote artifact)

The process of handling a remote artifact follows a clear lifecycle.

1.  **Resolution**: The `sourceUrl` is parsed. If it's a `gh://` path, it's resolved to a full `https://` URL.
2.  **Cache Check**: The tool checks if a file with the given `sha256` (if provided) or a hash of the `resolvedUrl` exists in the cache.
    -   **Cache Hit**: If found, the cached file is used.
    -   **Cache Miss**: If not found, proceed to download.
3.  **Download**: The file is downloaded from the `resolvedUrl`.
4.  **Validation & Caching**:
    -   The SHA256 hash of the downloaded content is calculated.
    -   If an expected `sha256` was provided, it's compared against the calculated hash. The operation fails on mismatch.
    -   The downloaded file is saved to the cache, named after its content hash.
5.  **Placement**: The file from the cache is copied or linked to its final `destination` in the project's working directory.
6.  **Failure**: If any step (download, validation) fails, the entire `load` or `swap` operation is aborted to prevent a partial context.
