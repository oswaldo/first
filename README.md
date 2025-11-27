# first

### Full Context Swapping for Developer Workflows

A command-line tool that enables seamless switching between different development contexts and AI assistant configurations, keeping your projects clean from tool-specific clutter.

```bash
# Save your current development context
first save gemini-config --artifacts ".gemini/,GEMINI.md"

# Switch to a different AI assistant setup
first swap claude-config

# Load a context that includes remote artifacts
first load shared-team-config
```

`first` helps you maintain multiple "cognition simulation" (cogsim) environments—complete sets of configurations for AI coding assistants, linters, and other development tools—without polluting your project repository with tool-specific files.

## Why first?

**Your repository is for *your* code, not your tools' config files.**

Modern development has normalized an uncomfortable reality: every tool we adopt—IDEs, linters, CI systems, and now AI coding assistants—leaves its own debris in our repositories. Configuration files accumulate like barnacles, each with its own lifecycle completely independent of your actual code.

When you want to try a different AI assistant, you shouldn't need to commit new config files to your repository. When you switch from one development tool to another, your project shouldn't change. *Your code is your code.* The tools are just tools.

**But this tool doesn't exist...** so we built it.

`first` enables what should have been obvious from the start:

- **Non-invasive tooling**: AI assistants, linters, and other tools store their configs outside your repo
- **Full context swapping**: Switch entire development environments with one command
- **Independent lifecycles**: Your project's lifecycle is separate from your tools' lifecycles  
- **Remote contexts**: Share team configurations via HTTP/HTTPS or GitHub without polluting repos
- **True flexibility**: Experiment with different tools without leaving permanent traces

Think of it like a painter trying a new brush—they don't redesign their studio. Or a musician playing a different guitar—they don't rewrite their songs. Developers should have the same freedom.

Read the full philosophy and origin story in [`first.md`](first.md).

## Quick Start

### Installation

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

> **Note on Windows Support:** Windows is currently not supported due to dependency issues with the native build. We are working on fixing this and expect to have Windows support in an upcoming release.


### Basic Usage

```bash
# List all saved contexts
first ls

# Save your current development setup
first save my-context --artifacts ".gemini/,project-config.md"

# Load a saved context
first load my-context

# Swap to a different context (load + save current state)
first swap another-context

# Use --at to specify a different working directory
first --at /path/to/project load my-context

# View help and available commands
first --help
```

## Features

### 🎯 Context Management

Save, load, and swap between complete development environments:
- Save current configurations as named contexts
- Load contexts from local storage or remote sources
- Atomic swap operations to seamlessly switch environments

### 🌐 Remote Contexts & Artifacts

Access configurations from anywhere:
- HTTP/HTTPS URLs for direct artifact access
- GitHub shorthand: `gh://org/repo` expands automatically
- Remote contexts are read-only and cached locally
- Share team configurations via version control

### 📝 HOCON Configuration

Contexts are defined in `.fctx` files using [HOCON](https://github.com/lightbend/config/blob/main/HOCON.md) format:
- Human-readable and git-friendly
- Supports includes and composition
- Type-safe configuration with defaults

### ⚡ Fast & Lightweight

Built with Scala Native for:
- Near-instant startup times
- Small binary size (~10MB)
- Zero JVM overhead
- Native performance

## Configuration

Contexts are stored in `~/.first/` and defined using `.fctx` configuration files. Here's an example:

```hocon
{
  name = "gemini-config"
  artifacts = [
    { path = ".gemini/" },
    { path = "GEMINI.md" },
    { url = "gh://myorg/shared-configs/common.md" }
  ]
}
```

Contexts can include local files or remote resources. Remote artifacts from HTTP/HTTPS sources are automatically cached and treated as read-only.

## Development

### Building from Source

This project uses [scala-cli](https://scala-cli.virtuslab.org/) for building and testing.

**Run without compiling:**
```bash
scala-cli run . -- ls
```

**Run tests:**
```bash
scala-cli test .
```

**Compile to native binary:**
```bash
scala-cli package . --native -o tmp/first -f
```

> **Note:** The `tmp` directory is used to store the binary for testing purposes. You can replace it with any other directory of your choice. Also, this is a scala-native binary, so it will only work on the same platform as the one you compiled it on.

**Code quality:**
```bash
.specify/scripts/bash/lint.sh
```

### Tech Stack

- **Language**: Scala 3.3.4 with Scala Native 0.5.9
- **CLI**: [decline](https://github.com/bkirwi/decline) for command parsing
- **HTTP**: [sttp](https://github.com/softwaremill/sttp) for remote artifact fetching
- **Config**: [sconfig](https://github.com/ekrich/sconfig) for HOCON parsing
- **Filesystem**: [os-lib](https://github.com/com-lihaoyi/os-lib) for file operations
- **Testing**: [MUnit](https://scalameta.org/munit/) for unit testing

## Project Status

`first` is currently in **prototype stage** with active development. Features implemented so far:

- ✅ Core CLI and basic actions
- ✅ Configuration loading system
- ✅ Context management (save/load/swap)
- ✅ Remote artifacts and contexts
- ✅ Installation via install script

See [`SPEC-ROADMAP.md`](SPEC-ROADMAP.md) for the complete roadmap and upcoming features.

> **Note**: This project is developed with extensive use of AI coding assistants as a learning and productivity tool. See [AI Development Disclosure](AI-DISCLOSURE.md) for full transparency about our development approach.

## Documentation

- [`first.md`](first.md) - Project philosophy and vision
- [`SPEC-ROADMAP.md`](SPEC-ROADMAP.md) - Feature roadmap and development plan
- [AI Development Disclosure](AI-DISCLOSURE.md) - Transparency about AI-assisted development

## Contributing

Contributions are welcome! This project follows spec-driven development practices using the [GitHub Spec Kit](https://github.com/github/spec-kit).

## License

This project is open source. See [`LICENSE`](LICENSE) for details.

---

Built with ❤️ using Scala Native and late-night coding sessions.
