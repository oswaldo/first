# first Constitution
<!-- This constitution outlines the guiding principles and governance for the 'first' project. -->

## Core Principles

### I. Non-Intrusive Tooling
Project repositories must remain clean and focused on the source code. Tool-specific configurations are considered external to the project's core and must be loaded on-demand. Any such files, if they must reside within the project directory, must be added to `.gitignore` to ensure they are not committed to the repository.

### II. Full Context Swapping
The development environment must support the ability to switch the entire context of tooling and configuration with a simple, unified command. This allows for seamless transitions between different "cognition simulations" (cogsims), such as different AI assistants or development environments, without altering the project's source code.

### III. Separation of Concerns
A strict separation must be maintained between the project's source code and the tools used for its development. The lifecycle of the project and the lifecycle of its development tools are independent. This principle ensures that the project is not tightly coupled to any specific toolchain.

### IV. Developer as Author
The developer is the ultimate author of the code. AI assistants and other tools are instruments to be used by the developer. The output of these tools is a product of the developer's direction and intent. Credit and ownership of the code remain with the developer.

### V. Vision-Driven Development
Development must be guided by a clear, high-level vision document that precedes detailed technical specifications. This "sincere open letter" serves as the foundational context to ensure that all development efforts are aligned with the project's core goals and philosophy, preventing deviation into unproductive paths.

## Technical Constraints

- **Initial Implementation**: The initial implementation of the `first` command-line tool must be a Scala CLI script that can be compiled to a native executable using Scala Native. This ensures a lightweight, fast-starting tool that is easy to distribute.
- **Distribution**: The project must eventually be packaged and published in a way that allows for installation via the `cs install first` command using Coursier.

## Development Workflow

- **Atomic Features**: Each feature should be developed on a dedicated branch and result in a single, comprehensive commit upon completion.
- **Linear History**: To maintain a clean and readable revision history, feature branches MUST be rebased onto the main branch before merging. Merge commits are to be avoided in favor of fast-forward merges.

## Governance
This constitution is the supreme governing document for the `first` project. All development practices, tools, and contributions must align with its principles. Amendments to this constitution require a formal proposal, review, and a clear migration plan for any affected components.

All pull requests and code reviews must include a check for compliance with this constitution. Any deviation from these principles must be explicitly justified and approved.

**Version**: 1.2.0 | **Ratified**: 2025-10-30 | **Last Amended**: 2025-10-31
