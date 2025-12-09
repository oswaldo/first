# Contract: Update CLI

**Command**: `first update [CONTEXT_NAME]`

## Arguments

| Argument       | Type     | Optional | Description                                                                         |
| -------------- | -------- | -------- | ----------------------------------------------------------------------------------- |
| `CONTEXT_NAME` | `String` | Yes      | Name of the context to update. Defaults to the currently active context if omitted. |

## Options

| Option     | Short | Type                  | Description                                       |
| ---------- | ----- | --------------------- | ------------------------------------------------- |
| `--add`    |       | `String` (Repeatable) | Path to file/directory to add to the context.     |
| `--forget` |       | `String` (Repeatable) | Path/Name of artifact to remove from the context. |
| `--help`   | `-h`  | `Boolean`             | Show help message.                                |

## Behavior

1. **Context Resolution**:
   - If `CONTEXT_NAME` provided: Target that context.
   - If not provided: Check for active context in CWD. If none, error.

2. **Add Operation**:
   - Resolve path relative to CWD.
   - Check file existence.
   - Compute MD5 if local file.
   - Add to `artifacts` list.
   - If artifact already exists (by path), update it.

3. **Forget Operation**:
   - Remove artifact matching the path from `artifacts` list.
   - If not found, ignore (idempotent) or warn (implementation detail: warn).

4. **Persistence**:
   - Rewrite `fctx-def.conf` preserving `includes` and other non-artifact fields.
