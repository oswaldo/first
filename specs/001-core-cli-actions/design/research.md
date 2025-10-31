# Research: CLI Parsing Library

**Created**: 2025-10-31

## Decision

We will use the **`decline`** library for command-line argument parsing.

## Rationale

- **Type-Safety**: `decline` provides a powerful, type-safe, and composable approach to defining command-line interfaces. This reduces runtime errors and improves developer confidence.
- **Scala Native Compatibility**: It is fully compatible with Scala Native, which is a core technical constraint of this project.
- **Functional Approach**: Its design aligns well with modern functional programming principles in Scala.
- **Excellent Documentation**: The library is well-documented, which will speed up development.

## Alternatives Considered

- **`scopt`**: A popular and mature library. However, it is less type-safe than `decline` and relies on a more traditional builder pattern.
- **`mainargs`**: Another lightweight option, but `decline` offers a more expressive and powerful API for defining complex command structures.
