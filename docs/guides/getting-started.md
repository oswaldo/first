# Getting Started

## Installation

Install `first` with a single command:

```bash
curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh
```

This installs the latest version to `~/.local/bin/first`.

**Custom installation directory:**

```bash
FIRST_INSTALL_DIR=$HOME/bin curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh
```

**Manual installation:**
Download the binary for your platform from the [releases page](https://github.com/oswaldo/first/releases) and place it in your PATH.

## Basic Usage

1. **Verify installation**:

   ```bash
   first --help
   ```

2. **Save your current context**:
   If you have some AI config files in your repo (e.g. `.gemini/`), save them to a context.

   ```bash
   first save gemini-config --artifacts ".gemini/"
   ```

3. **List contexts**:

   ```bash
   first ls
   ```

4. **Load a context**:
   ```bash
   first load gemini-config
   ```

## Next Steps

- Learn about [Full Context Swapping](full-context-swapping.md).
- Explore [Remote Contexts](remote-contexts.md).
