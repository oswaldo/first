# Swap Command

Atomically switch from one context to another.

## Usage

```bash
first swap <context-name>
```

## Description

The `swap` command is a convenience workflow that combines saving and loading.

1. **Save Current**: Attempts to save the _currently active_ context state (if one is active and writable).
2. **Load New**: Loads the target `<context-name>`.

_Note: In the current version, `swap` acts primarily as a direct `load` but implies a transition. Future versions will enforce stricter state handling ensuring the previous context is cleanly saved or cleaned up._
