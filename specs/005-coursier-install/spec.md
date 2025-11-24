# Feature Specification: Easy Installation via Install Script

**Feature Branch**: `005-coursier-install`
**Created**: 2025-11-24
**Updated**: 2025-11-25 (Pivoted from Coursier to install script)
**Status**: Draft
**Input**: User description: "Enable installation via coursier so users can run 'cs install first'"

**Note**: After implementation research, we discovered that Coursier's `cs install` is incompatible with Scala Native binaries. We pivoted to an install script approach, which is more appropriate for native binary distribution and follows industry standards (rustup, nvm, etc.).

## Vision Alignment

*This specification is guided by the principles and vision outlined in the [project constitution](/.specify/memory/constitution.md) and the [vision document](/first.md).*

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Install Tool via Install Script (Priority: P1)

As a developer, I want to install the `first` tool using a simple curl command so that I can easily add it to my development environment.

**Why this priority**: This is the primary distribution method, enabling easy adoption across all platforms.

**Independent Test**: Can be tested by running the install script on a clean system and verifying the binary is installed and works.

**Acceptance Scenarios**:

1. **Given** a user has curl installed, **When** they run `curl -fsSL https://raw.githubusercontent.com/oswaldo/first/main/install.sh | sh`, **Then** the `first` binary is installed to `~/.local/bin/first`.
2. **Given** `first` is installed, **When** the user runs `first help`, **Then** the help message is displayed.
3. **Given** the user's platform is detected as Linux x64, **When** the install script runs, **Then** it downloads the correct Linux x64 binary from GitHub Releases.

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The project MUST provide an install script (`install.sh`) that can be piped from curl.
- **FR-002**: The install script MUST detect the user's OS (Linux/macOS) and architecture (x64/ARM64).
- **FR-003**: The install script MUST download the appropriate native binary from GitHub Releases.
- **FR-004**: The binary MUST be installed to `~/.local/bin/first` by default (configurable via env var).
- **FR-005**: The install script MUST support Windows, Linux, and macOS (x64/ARM64). *Note: Linux is the highest priority if cross-compilation issues arise.*
- **FR-006**: The install script MUST verify the installation by running `first help`.

### Key Entities

- **Install Script**: The shell script that handles OS detection, download, and installation.
- **GitHub Release**: The release artifact containing platform-specific native binaries.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: An `install.sh` script is available in the repository root that can be piped from curl.
- **SC-002**: The install script successfully installs `first` on Linux and macOS systems (verified via manual testing).
- **SC-003**: The installed tool executes correctly on the host system and displays help when run with `first help`.
