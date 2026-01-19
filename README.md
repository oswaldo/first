# first

[![Website](https://img.shields.io/badge/website-live-brightgreen)](https://oswaldo.github.io/first/)

### Full Context Swapping for Developer Workflows

A command-line tool that enables seamless switching between different development contexts and AI assistant configurations, keeping your projects clean from tool-specific clutter.

> **Your repository is for _your_ code, not your tools' config files.**

## Quick Start

### Installation

```bash
curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh
```

### Usage

```bash
# Save your current development context
first save gemini-config --artifacts ".gemini/,GEMINI.md"

# Load a context
first load gemini-config

# Swap to a different setup
first swap claude-config
```

## 📚 Documentation

**[Read the full documentation](./docs/README.md)**

- **[Getting Started](./docs/guides/getting-started.md)**
- **[Command Reference](./docs/reference/README.md)**
- **[Architecture](./docs/concepts/architecture.md)**
- **[Guides](./docs/guides/README.md)** (Remote contexts, Dogfooding, etc.)
- [`first.md`](first.md) - Project origin story (Historical)
- [`SPEC-ROADMAP.md`](SPEC-ROADMAP.md) - Feature roadmap and development plan

## Features

- **Non-invasive tooling**: Store AI/linter configs outside your repo.
- **Full context swapping**: Switch environments with one command.
- **Remote contexts**: Share team configurations via GitHub URLs (`gh://...`).
- **Native Performance**: Built with Scala Native, zero JVM overhead.

## Contributing

Contributions are welcome! This project follows spec-driven development practices using the [GitHub Spec Kit](https://github.com/github/spec-kit).

## License

MIT Licensed. See [LICENSE](LICENSE).
