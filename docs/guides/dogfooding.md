# Dogfooding

"Dogfooding" (eating your own dog food) is the practice of using your own product.

For `first`, this means we use `first` to manage the development environment of the `first` project itself.

## How we do it

The `first` repository does not contain the configuration files for our AI assistants or development tools (like Spec Kit). Instead, these are stored in a separate repository (`first-fctx`) and loaded dynamically.

### The Setup

1.  **Core Repo**: `first` (contains source code only).
2.  **Context Repo**: `first-fctx` (contains `.fctx` definitions and artifact folders like `.gemini/` and `.specify/`).

### The Workflow

When a developer starts working on `first`:

1.  Clone `first`.
2.  Run `first load first-dev`.
    - This pulls the context configuration.
    - It links (or copies) the `.gemini/` and `.specify/` folders from the context repo into the current workspace.
3.  Develop as usual.
4.  If tool configs change (e.g., updated AI rules), they are committed to `first-fctx`.
5.  If code changes, it is committed to `first`.

This ensures that the `first` repository remains completely clean of tool-specific debris, serving as the ultimate proof of concept for the tool's philosophy.
