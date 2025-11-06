# Specification Roadmap

This document provides a step-by-step guide for specifying the features of the `first` tool. Follow the tasks in order by running the specified command for each requirement.

## Feature Specification Plan

1.  [x] **Core CLI and Basic Actions** (DONE)
    *   **Description**: Integrate a command-line parsing library and implement the basic, independent actions: `help` and `ls`. This provides the initial application skeleton.
    *   **Command**:
        ```
        /speckit.specify Implement core CLI parsing and the 'help' and 'ls' actions
        ```

2.  [x] **Configuration Loading System** (DONE)
    *   **Description**: Develop the core logic for reading and processing `.fctx` configurations from HOCON files, including the cumulative behavior, default values, and error handling.
    *   **Command**:
        ```
        /speckit.specify Develop the fctx configuration reading system from HOCON files
        ```

3.  [x] **Context Management Actions** (DONE)
    *   **Description**: Implement the primary context-switching actions (`save`, `load`, `swap`) that operate on the loaded configurations. This includes support for the `--force`, `--dry-run`, and `--verbose` flags.
    *   **Command**:
        ```
        /speckit.specify Implement fctx management actions 'save', 'load', and 'swap' with supporting flags
        ```

4.  [ ] **Transactional File Operations**
    *   **Description**: Specify a transactional approach for all file system operations (`load`, `swap`, `rm*`, etc.). Actions should be atomic, ensuring that an interrupted operation can be safely rolled back to leave the project in a clean, consistent state.
    *   **Command**:
        ```
        /speckit.specify Define a transactional mechanism for file system modifications
        ```

5.  [ ] **Destructive Context Cleanup Actions**
    *   **Description**: Implement the destructive cleanup commands (`rm-def`, `rm-files`, `rm-all`) as defined in the use cases. This includes adding safety features like confirmation prompts and `--force` flags.
    *   **Command**:
        ```
        /speckit.specify Implement destructive context cleanup actions 'rm-def', 'rm-files', and 'rm-all'
        ```

6.  [ ] **Advanced Configuration and Security**
    *   **Description**: Enhance the configuration system with advanced security and scope-control features, including symlink handling (`--symlinks` flag) and configuration discovery limits (`--parent-limit`).
    *   **Command**:
        ```
        /speckit.specify Implement advanced configuration for security and scope control
        ```

7.  [ ] **Interactive TUI Mode**
    *   **Description**: Create an interactive terminal UI that allows users to select and execute actions without using command-line arguments, building on top of the already specified actions.
    *   **Command**:
        ```
        /speckit.specify Create an interactive terminal UI mode for executing actions
        ```
