# Publishing Releases for `first`

## Overview

The `first` tool is distributed as native binaries via GitHub Releases. The `install.sh` script automatically downloads the correct binary for the user's platform.

## Creating a Release

### 1. Build Native Binaries

For each supported platform, build the native binary:

```bash
# Linux x64
scala-cli package . -o first-linux-x86_64 --native

# macOS x64 (if on macOS)
scala-cli package . -o first-macos-x86_64 --native

# macOS ARM64 (if on Apple Silicon)
scala-cli package . -o first-macos-aarch64 --native
```

**Note**: Cross-compilation for different platforms may require additional setup. Start with Linux x64 as the priority platform.

### 2. Create GitHub Release

1. Go to https://github.com/oswaldo/first/releases/new
2. Create a new tag (e.g., `v0.1.0`)
3. Write release notes
4. Upload the binaries with these exact names:
   - `first-linux-x86_64`
   - `first-linux-aarch64` (if available)
   - `first-macos-x86_64` (if available)
   - `first-macos-aarch64` (if available)
   - `first-windows-x86_64.exe` (if available)

### 3. Test Installation

After publishing, test the install script:

```bash
sh install.sh
```

Or test the curl command:

```bash
curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh
```

## Binary Naming Convention

The install script expects binaries to be named: `first-{OS}-{ARCH}`

- **OS**: `linux`, `macos`, `windows`
- **ARCH**: `x86_64`, `aarch64`

Examples:
- `first-linux-x86_64`
- `first-macos-aarch64`

## Supported Platforms

Currently prioritized platforms:
1. **Linux x64** (highest priority)
2. macOS x64
3. macOS ARM64
4. Windows (future)

## Automation (Future)

Consider setting up GitHub Actions to:
- Build binaries for all platforms on push to `main`
- Create releases automatically
- Upload binaries to releases

See `.github/workflows/release.yml` (to be created) for automation.
