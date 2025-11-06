# Data Model: FCTX Management

**Created**: 2025-11-01

This document formalizes the data structures required for the FCTX management actions.

## Scala Case Classes

```scala
package first.model

// Represents a single file or directory to be managed.
case class Artifact(
  path: String,
  swapAs: String = "symlink", // Defaults to symlink
  md5: Option[String] = None,
  revision: Option[String] = None
)

// Represents a fully resolved "full context definition".
case class FctxDef(
  name: String,
  includes: List[String] = Nil,
  artifacts: List[Artifact] = Nil
)

// Represents the currently active fctx in a given directory.
case class ActiveFctx(
  name: String,
  path: String // Path to the .then directory where it is active
)
```
