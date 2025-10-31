# Feature Specification: Core CLI and Basic Actions

**Feature Branch**: `001-core-cli-actions`  
**Created**: 2025-10-31  
**Status**: Draft  
**Input**: User description: "Implement core CLI parsing and the 'help' and 'ls' actions"

## Vision Alignment

*This specification is guided by the principles and vision outlined in the [project constitution](/.specify/memory/constitution.md) and the [vision document](/first.md).*

---

## Clarifications

### Session 2025-10-31

- Q: When a user enters an ambiguous command prefix (e.g., 'l' which could match 'ls' and 'load'), how should the tool respond? → A: Fail with an error stating the command is ambiguous and list the possible matches.
- Q: How should the system handle invalid flags passed to a valid command (e.g., `./first ls --nonexistent-flag`)? → A: Fail with an error stating the flag is invalid and show the help output for that specific command.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Help Information (Priority: P1)

A user wants to understand how to use the `first` tool, including what commands are available and what they do.

**Why this priority**: This is the most fundamental form of user support and discoverability. It is essential for a command-line tool.

**Independent Test**: This can be tested independently by running the compiled tool with the `help` command or `--help` flag and verifying the output. It delivers immediate value by making the tool usable.

**Acceptance Scenarios**:

1. **Given** the `first` application is executed with the `help` command, **When** the command runs, **Then** the output MUST display a list of all available commands and their descriptions.
2. **Given** the `first` application is executed with the `--help` flag, **When** the command runs, **Then** the output MUST display a list of all available commands and their descriptions.
3. **Given** the `first` application is executed with an unknown command (e.g., `first foo`), **When** the command fails, **Then** the output MUST show an error message and suggest running the `help` command for usage details.

---

### User Story 2 - List Available Contexts (Priority: P2)

A user wants to see all the "full context" (fctx) definitions that the `first` tool is aware of from the current directory's perspective.

**Why this priority**: This is a primary discovery feature that allows users to see what contexts they can load or interact with. It's core to the tool's purpose.

**Independent Test**: This can be tested by running the `ls` command. It requires a mock or real configuration structure to be in place, but the command's logic is self-contained.

**Acceptance Scenarios**:

1. **Given** there are multiple fctx definition files available in standard locations (`~/.first`, `.then/`), **When** the user runs the `ls` command, **Then** the output MUST list the names and source paths of all discovered fctx definitions.
2. **Given** there are no fctx definition files available, **When** the user runs the `ls` command, **Then** the output MUST be an empty list or a message indicating that no contexts were found.

---

### Edge Cases

- If a user enters an ambiguous command prefix that matches multiple commands, the tool MUST fail with an error and list the possible matching commands.
- If a user provides an invalid flag to a valid command, the tool MUST fail with an error, state that the flag is invalid, and show the help output for that specific command.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide a `help` command that displays usage information, including a list of all available commands and global flags.
- **FR-002**: The system MUST provide an `ls` command that lists all discovered fctx configurations according to the defined cumulative behavior.
- **FR-003**: The system MUST parse command-line arguments to identify the specific action and any associated flags the user intends to execute.
- **FR-004**: The system MUST handle unknown or malformed commands gracefully by displaying a user-friendly error message and a suggestion to consult the `help` command.
- **FR-005**: The command-line interface MUST be implemented using a library compatible with Scala Native to ensure a fast-starting native executable.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Executing the `help` command from a terminal MUST display the help message in under 500 milliseconds.
- **SC-002**: The `ls` command MUST correctly identify and list all fctx definitions from all valid locations (`~/.first`, and the cumulative `.then/` directories).
- **SC-003**: An attempt to run a non-existent command MUST result in a non-zero exit code.