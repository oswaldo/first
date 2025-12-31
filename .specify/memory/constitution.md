<!--
- Version: 1.8.0 -> 1.9.0
- Modified Principles: Development Workflow (Clarified Commit Policy)
- Added Principles:
  - Agile Dependency Management
- Removed Principles: None
- Templates Requiring Updates: None
- Follow-up TODOs: None
-->

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

### VI. Type Safety and Specificity

The project must use the most appropriate and specific types available for all properties and data structures. For instance, in Scala, time-related values should be represented using `java.time` types instead of generic types like `Long` or `String`. This enhances type safety, improves clarity, and leverages the type system to prevent common errors.

### VII. Safe and Expressive Coding

Code must be written to be readable and accessible, avoiding pitfalls like `null` references and unchecked exceptions.

- **No Nulls**: Explicit use of `null` is forbidden. Use `Option` to represent optional values.
- **No Exceptions**: Avoid throwing exceptions for flow control or error handling. Use `Either`, `Try`, or other functional error handling mechanisms.
- **Expressive Logic**: Prefer properly named functions and pattern matching (`match`) or monadic chains (`map`, `flatMap`) over excessive nesting of `if/else` blocks.
- **No Var**: Do not use `var`. Design algorithms so intermediate invalid or inconsistent values are not possible. Avoid `java.util.concurrent.atomic` unless absolutely necessary.

### VIII. Agile Dependency Management

Dependencies should be selected with care but kept fresh. We prefer a "Selective but Fresh" approach:

- **Selective**: Only add dependencies when they provide significant value over the standard library or simple custom implementations.
- **Fresh**: When a dependency is accepted, it must be kept up-to-date with its latest stable version to ensure security, performance, and access to the latest features.

### IX. Reuse First Architecture

Before implementing new features, developers MUST analyze existing code for reusable components. If a new feature involves operations similar to existing ones (e.g., file persistence, configuration loading), existing stable implementations MUST be inspected for reuse. Common logic SHOULD be extracted into shared core components to avoid duplication and leverage proven stability.

## Technical Constraints

- **Initial Implementation**: The initial implementation of the `first` command-line tool must be a Scala CLI script that can be compiled to a native executable using Scala Native. This ensures a lightweight, fast-starting tool that is easy to distribute.
- **Distribution**: The project must eventually be packaged and published in a way that allows for installation via the `cs install first` command using Coursier.

## Development Workflow

- **Atomic Features**: Each feature should be developed on a dedicated branch and result in a single, comprehensive commit upon completion.
- **Clean Git History**:
  - **Active Development**: During the implementation of a feature (before merge), developers should amend the existing feature commit rather than creating new "fix" commits. This ensures that the final feature commit is a clean, self-contained unit of work.
  - **Post-Merge**: "Fix" commits are reserved for addressing regressions or bugs discovered after a feature has been merged or released.
- **Linear History**: To maintain a clean and readable revision history, feature branches MUST be rebased onto the main branch before merging. Merge commits are to be avoided in favor of fast-forward merges.
- **Roadmap Tracking**: After a feature branch is merged, the `SPEC-ROADMAP.md` file must be updated to mark the corresponding feature as complete.
- **Specification Gating**: Before implementation can begin, the feature's `requirements.md` checklist MUST be reviewed and marked as complete. This serves as the formal quality gate after the clarification step.

## Release Strategy

- **Versioning**: The project follows Semantic Versioning (SemVer).
- **Initial Release**: The first set of released features will be version 0.1.0.

## Governance

This constitution is the supreme governing document for the `first` project. All development practices, tools, and contributions must align with its principles. Amendments to this constitution require a formal proposal, review, and a clear migration plan for any affected components.

All pull requests and code reviews must include a check for compliance with this constitution. Any deviation from these principles must be explicitly justified and approved.

**Version**: 1.9.0 | **Ratified**: 2025-10-30 | **Last Amended**: 2025-12-31
