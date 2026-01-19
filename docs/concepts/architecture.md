# Architecture & Tech Stack

`first` is built with a philosophy of minimal runtime overhead and maximum developer ergonomics. This document outlines the technical choices and architectural design.

## Technology Stack

We chose **Scala Native** to combine the expressiveness and safety of Scala with the instant startup time of a native binary.

- **Language**: Scala 3 (latest)
- **Runtime**: Scala Native (0.5.x)
- **CLI Framework**: [decline](https://github.com/bkirwi/decline) - Composable, functional command-line parsing.
- **Configuration**: [HOCON (sconfig)](https://github.com/ekrich/sconfig) - Human-friendly JSON superset.
- **I/O**: [os-lib](https://github.com/com-lihaoyi/os-lib) - Simple, distinct file system operations.
- **Networking**: [sttp](https://github.com/softwaremill/sttp) - Type-safe HTTP client.

### Why Scala Native?

Traditional JVM-based CLI tools suffer from "warm-up" latency. By compiling to native machine code (using LLVM), `first` achieves:

1.  **Instant Startup**: Crucial for a tool meant to be run frequently in terminals.
2.  **No JVM Dependency**: Users don't need a JDK installed.
3.  **Low Memory Footprint**: Respectful of system resources.

## Architectural Concepts

### The "Cogsim" (Cognition Simulation)

The core abstraction in `first` is the Context (or "cogsim"). A Context is a self-contained definition of a development environment state. It allows switching "brains" (AI configs) as easily as switching git branches.

### Content-Addressable Storage

`first` caches remote artifacts in `~/.first/cache/`. We use a content-addressable strategy (hashing contents) to:

- De-duplicate artifacts across different contexts.
- Verify integrity of downloaded files.
- Enable offline usage for previously fetched contexts.

### Symlink Strategy

When using `save --link` or `move` operations, `first` prefers **symbolic links** over copying where possible (and requested).

- **Goal**: Keep the single source of truth in the Context definition (or repository), while making files available to the toolchain (IDEs, Linters) in the standard locations.
- **Handling**: The system intelligently manages link targets to ensure they are relative where appropriate, making the context portable.

## Code Style & Principles

We follow a strict set of functional programming principles to ensure reliability:

- **No Nulls**: `Option` is used exclusively.
- **No Exceptions**: Error handling is done via `Either` or specific return types. Control flow never uses try/catch for business logic.
- **Immutability**: Data structures are immutable by default.
- **Type Safety**: We use strong typing (e.g., `java.time` over raw `Long`) to prevent logic errors.
