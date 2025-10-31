# Project: first

## Project Overview

`first` is a command-line tool designed to streamline developer workflows by enabling "full context swapping" for different development environments and tools, particularly AI coding assistants. The project's core philosophy is to keep the main project repository clean and free from tool-specific configuration files.

The tool aims to provide a simple command, like `first load <context>`, to switch between different "cognition simulations" (cogsims). A cogsim represents a complete development context, including configurations for AI assistants (like Gemini or Claude), linters, and other tools. This approach allows for a clean separation between the project's source code and the developer's choice of tools, making the development environment more modular and less intrusive.

The project is in its conceptual phase, with the foundational ideas and philosophy documented in the `first.md` file.

## Building and Running

TODO: This section will be updated once the project has a build system and source code.

## Development Conventions

*   **Separation of Concerns:** The project's primary convention is to maintain a strict separation between the core project code and the configuration of development tools.
*   **Philosophical Documentation:** The project was initiated with a detailed philosophical document (`first.md`) that outlines the vision and goals. This suggests a preference for clear, high-level documentation to guide development.
*   **Non-Intrusive Tooling:** Any tools or configurations added to the project should be non-intrusive and easily swappable.

## External Contexts

### GitHub Spec Kit

This project utilizes the "GitHub Spec Kit," located in the `.specify/` directory. This kit provides a structured framework for development, including its own set of memories and conventions.

*   **Memories:** The core memories and constitution for the spec kit are located in `.specify/memory/`. These files contain the guiding principles and rules for development within this framework.
*   **Scripts:** The `.specify/scripts/` directory contains shell scripts for automating various development tasks.
*   **Templates:** The `.specify/templates/` directory holds templates for common files like plans, specifications, and checklists.

When working on this project, please be aware of the context provided by the GitHub Spec Kit and adhere to its conventions.

This memories should be immediatelly available to Gemini:

@.specify/memory/constitution.md
@.specify/memory/constitution_update_checklist.md

## Key Files

*   `first.md`: The foundational document of the project. It contains the project's philosophy, goals, and the overall vision. It's a "sincere open letter" to future developers and AI assistants who will work on this project.
*   `README.md`: The main entry point for the project.
*   `LICENSE`: The project's license file.