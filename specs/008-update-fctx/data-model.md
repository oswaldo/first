# Data Model: Update Fctx

**Branch**: `008-update-fctx`

## Entities

### `FctxDef`

Represents the configuration of a Full Context.

| Field       | Type             | Description                         |
| ----------- | ---------------- | ----------------------------------- |
| `name`      | `String`         | Context name (directory name)       |
| `config`    | `Config`         | Underlying HOCON config object      |
| `includes`  | `List[String]`   | List of included context names/URLs |
| `artifacts` | `List[Artifact]` | List of managed files/directories   |

### `Artifact`

Represents a single managed file/directory.

| Field      | Type             | Description                                    |
| ---------- | ---------------- | ---------------------------------------------- |
| `path`     | `String`         | Relative or absolute path to artifact          |
| `swapAs`   | `SwapAs`         | `Symlink` or `Copy`                            |
| `md5`      | `Option[String]` | MD5 hash of the original file (for validation) |
| `sha256`   | `Option[String]` | SHA256 hash (optional)                         |
| `revision` | `Option[String]` | Revision identifier (optional)                 |
