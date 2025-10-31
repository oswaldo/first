# Research: HOCON Parsing Library

**Created**: 2025-10-31

## Decision

We will use **`sconfig`** (`org.ekrich::sconfig`) for HOCON configuration parsing.

## Rationale

- **Scala Native Compatibility**: `sconfig` is a fork of the standard `lightbend/config` library that is specifically cross-published for Scala.js and Scala Native, making it the correct choice for this project's technical constraints.
- **Standard API**: It maintains the well-known API of the original Lightbend Config library, making it familiar to many developers.
- **Direct Control**: It provides direct, path-based access to configuration values, giving us precise control over how the configuration is read and mapped to our case classes.

## Alternatives Considered

- **`pureconfig`**: Initially considered for its automatic case class decoding. However, as correctly pointed out, it does not have robust support for Scala Native, making it unsuitable for this project.
