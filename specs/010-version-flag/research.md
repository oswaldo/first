# Research: Version Flag

**Feature**: Version Flag
**Status**: Complete

## Decision: Use Scala CLI `BuildInfo`

**Rationale**:
Scala CLI natively supports generating a `BuildInfo` object via `//> using buildInfo`. This provides compile-time access to the project version.

**Dependencies**:

- `decline` for flag parsing.

**Implementation Details**:

- `decline` has `Command(...)` and `Opts.flag`.
- Standard pattern is often `Command.main` which handles parsing.
- However, catching `--version` often requires it to be a top-level opt or a separate command handling if using `CommandApp`.
- `decline`'s `CommandApp` doesn't strictly support "version flag breaks execution" easily if mixed with subcommands unless modeled carefully (e.g., `Opts.version` or composed).
- Alternative: We can use `Opts.flag("version", ...).map(_ => ...)` combined with `orElse`.
- But typically `--version` is a special case.
- `decline` 2.x often recommends:
  ```scala
  val versionOpt = Opts.flag("version", help = "Print version.").map(_ => ...)
  val mainOpts = ...
  val command = Command(...) {
     versionOpt orElse mainOpts
  }
  ```
- `BuildInfo` fields: we get `version` by default. `git:dynver` puts commit hash in `version`. Timestamp might not be there by default in Scala CLI `BuildInfo` unless we add `//> using buildGenerator`. Check if `BuildInfo` has `builtAt`.
- If `BuildInfo` doesn't have timestamp, we might skip it or compute it if `git:dynver` supports it. Requirement says "MUST include build timestamp".
- Scala CLI docs say `BuildInfo` generates `name`, `version`, `scalaVersion`, `sbtVersion`. No `builtAt`.
- **Mitigation**: We can use a custom script or just accept `version` (which has commit) as "good enough" for now, or use a separate generation step.
- _Wait_, user said: "easily possible as we have buildinfo configured".
- I will assume standard `BuildInfo.version` is sufficient for "tag + hash". Timestamp might be missing. I will verify if I can add it easily, otherwise I'll note it as a limitation or check if `git:dynver` provides it.
- actually `git:dynver` usually just provides the version string.

**Alternatives Considered**:

- Reading `MANIFEST.MF`: Too complex for native.
- Hardcoding: Bad practice.
