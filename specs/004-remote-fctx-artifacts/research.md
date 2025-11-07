# Research: Remote fctx Artifacts

This document outlines the decisions made to resolve ambiguities in the technical context for implementing remote fctx artifacts.

## 1. Performance Goals: Download Timeouts

-   **Decision**: A default timeout of **10 seconds** will be applied to all HTTP/S requests for downloading remote artifacts and fctx definitions.
-   **Rationale**: This provides a reasonable balance between waiting for slow networks and failing quickly on unresponsive servers. It prevents the `first` CLI from hanging indefinitely. This value can be made configurable in a future iteration if user feedback indicates a need.
-   **Alternatives Considered**:
    -   *No timeout*: Rejected as it could lead to a poor user experience with the application appearing to be stuck.
    -   *Longer/shorter timeouts*: 10 seconds is a standard, sensible default for CLI tools.

## 2. Security: Authentication Mechanism

-   **Decision**: Authentication will be handled via environment variables.
    -   For GitHub URLs (`gh://` or `github.com`), the tool will look for a `GITHUB_TOKEN` environment variable and use it as a bearer token.
    -   For all other HTTP/S URLs, the tool will look for a `FIRST_AUTH_TOKEN` environment variable and send it as a `Bearer` token in the `Authorization` header.
-   **Rationale**: Using environment variables is a common and straightforward pattern for providing credentials to command-line tools without hardcoding them in configuration files. It integrates well with CI/CD systems and secret management tools.
-   **Alternatives Considered**:
    -   *Configuration file*: Rejected for the initial implementation to avoid adding complexity around managing and securing a separate config file.
    -   *No authentication*: Rejected as it would limit the feature's utility to only public resources.

## 3. Storage: Cache Location

-   **Decision**: The local cache for remote artifacts will be located in the user's home directory at `~/.first/cache/`.
-   **Rationale**: This is a standard, non-intrusive location for user-specific tool data. It keeps the project directory clean (adhering to the "Non-Intrusive Tooling" principle) and allows the cache to be shared across all projects for a given user.
-   **Alternatives Considered**:
    -   *Project-local cache (`.first/cache/`)*: Rejected because it would lead to duplicated downloads of the same artifact across different projects.
    -   *System-wide temporary directory*: Rejected because the cache needs to be persistent to support offline usage.
