# Data Model: FCTX Configuration

**Created**: 2025-10-31

This document formalizes the data structures required for reading and representing the `fctx` configuration, as defined in the specification.

## Scala Case Classes

These case classes will be manually populated from the parsed `sconfig` object.

```scala
package first.config

// Represents a single file or directory to be managed.
case class Artifact(
  path: String,
  swapAs: String = "symlink", // Defaults to symlink as per spec
  md5: Option[String] = None,
  revision: Option[String] = None
)

// Represents a fully resolved "full context definition".
case class FctxDef(
  name: String, // Inferred from the directory structure, not from the file
  includes: List[String] = Nil,
  artifacts: List[Artifact] = Nil
)

// Represents the main user-level configuration file.
case class FirstConfig(
  fctxFiles: List[String] = Nil,
  lastLoaded: Option[LastLoaded] = None
)

case class LastLoaded(
  name: String,
  at: String
)
```

## Error Types

A sealed trait will be used to model the possible configuration errors, aligning with the functional error handling requirement.

```scala
package first.config

sealed trait ConfigError
case class FileParseError(path: String, message: String) extends ConfigError
case class PathNotFound(path: String) extends ConfigError
case class CircularDependency(path: List[String]) extends ConfigError
```
