# Research: Core Libraries

**Created**: 2025-11-01

## `decline` for Command-Line Parsing

**Decision**: We will use `decline` for command-line parsing.

**Rationale**:

- **Functional Approach**: `decline` is a functional command-line parser for Scala, which aligns with the functional programming style of the project.
- **Composability**: It provides a composable and type-safe way to define command-line interfaces.

## `scribe` for Logging

**Decision**: We will use `scribe` for logging.

**Rationale**:

- **Performance**: `scribe` is a high-performance logging library for Scala, with compile-time metadata resolution.
- **Programmatic Configuration**: It allows for programmatic configuration, which provides more flexibility than traditional configuration files.
- **Cross-Platform**: It supports JVM, Scala.js, and Scala Native, which is a requirement for this project.

**Best Practices**:

- Use programmatic configuration for dynamic control over logging.
- Use `FileWriter` for daily rotating log files.
- Use appropriate log levels (TRACE, DEBUG, INFO, WARN, ERROR).
- Avoid logging sensitive information.
