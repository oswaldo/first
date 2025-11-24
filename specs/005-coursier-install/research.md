# Research: Coursier Installation

**Status**: Phase 0 Complete
**Date**: 2025-11-24

## 1. Coursier Descriptor Format

To enable `cs install first`, we need to provide a JSON descriptor.

**Structure:**
```json
{
  "repositories": [
    "central",
    "https://github.com/oswaldo/first/raw/main/repo/"
  ],
  "dependencies": [
    "oswaldo::first:latest.release"
  ],
  "mainClass": "first.Main"
}
```

**Decision**: We will generate this JSON file as part of the build process.
**Rationale**: This allows users to install via `cs install --contrib https://.../first.json first`.

## 2. Artifact Publishing

The project uses `scala-cli` with `native` platform.
`scala-cli publish` typically publishes JVM JARs (and JS/Native intermediate artifacts).

**Challenge**: `cs install` typically installs JVM applications.
**Native Support**: Coursier has experimental support for native launchers, but it requires specific packaging.

**Decision**: For this MVP, we will:
1.  Ensure `scala-cli publish` publishes the necessary artifacts to a local or remote Maven repository.
2.  The descriptor will point to these artifacts.
3.  If `cs install` creates a JVM launcher, that is acceptable for the MVP, provided it works.
4.  *Ideally*, we want the native binary. We will investigate if `launcherType: "scala-native"` works or if we need to publish the native binary as a specific artifact.

**Refined Decision**: We will focus on generating the descriptor. We will assume the standard `scala-cli` publishing workflow.

## 3. Channel Strategy

**User Choice**: Custom Channel.
**Implementation**:
- We will create a `channel/` directory in the repo (or similar).
- We will place `first.json` there.
- Users run: `cs install --contrib https://raw.githubusercontent.com/oswaldo/first/main/channel first`.

## 4. Verification

We can verify locally:
1.  Publish to local Ivy/Maven: `scala-cli --power publish local .`
2.  Generate `first.json` pointing to local repo (or just use the coordinates).
3.  Run `cs install --channel . first`.

## 5. Implementation Details

- **Build Tool**: We will add a script or a `scala-cli` task to generate the JSON.
- **JSON Generation**: Simple string interpolation or using `upickle` (already a dependency).

## 6. Resolved Clarifications

- **Platforms**: We will target Linux/macOS.
- **Channel**: Custom channel.
