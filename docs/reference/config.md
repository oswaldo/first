# Configuration Format

`first` uses [HOCON (Human-Optimized Config Object Notation)](https://github.com/lightbend/config) for defining contexts in `.fctx` files.

## Context Definition

A context is defined by a JSON-like object with a `name` and a list of `artifacts`.

```hocon
name = "my-context"

artifacts = [
  { path = ".gemini/" }
  { path = "GEMINI.md" }
  { url = "gh://oswaldo/first/common/styleguide.md", destination = "docs/style.md" }
]
```

## Fields

- **name** (required): The unique identifier for the context.
- **artifacts** (required): Array of artifact objects.
  - **path**: Local path (relative to the context file location) to the file or directory.
  - **url**: Remote URL (http/https/gh) to fetch the artifact from.
  - **destination** (optional): path to place the artifact in the workspace. If omitted, uses the basename of the source.
