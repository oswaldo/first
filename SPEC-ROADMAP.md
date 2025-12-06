# Specification Roadmap

This document provides a step-by-step guide for specifying the features of the `first` tool. Follow the tasks in order
by running the specified command for each requirement.

## Feature Specification Plan

1. [x] **Core CLI and Basic Actions** (DONE)
    * **Description**: Integrate a command-line parsing library and implement the basic, independent actions: `help` and
      `ls`. This provides the initial application skeleton.
    * **Command**:
      ```
      /speckit.specify Implement core CLI parsing and the 'help' and 'ls' actions
      ```

2. [x] **Configuration Loading System** (DONE)
    * **Description**: Develop the core logic for reading and processing `.fctx` configurations from HOCON files,
      including the cumulative behavior, default values, and error handling.
    * **Command**:
      ```
      /speckit.specify Develop the fctx configuration reading system from HOCON files
      ```

3. [x] **Context Management Actions** (DONE)
    * **Description**: Implement the primary context-switching actions (`save`, `load`, `swap`) that operate on the
      loaded configurations. This includes support for the `--force`, `--dry-run`, and `--verbose` flags.
    * **Command**:
      ```
      /speckit.specify Implement fctx management actions 'save', 'load', and 'swap' with supporting flags
      ```

4. [x] **Remote artifacts and contexts** (DONE)
    * **Command**:
      ```
      /speckit.specify we should be able to add in a fctx artifacts from http and https sources and
   from github with a simplified string like "gh://group/project" expanding to
   "https://github.com/group/project. also, if a fctx is accessible via http or https (or via
   our gh expansion) we should be able to include it in a fctx-def (only loading should be
   supported and http/https/gh artifacts or fctx are to be considered readonly). we already have
   the dependency to com.softwaremill.sttp.client4::core::4.0.13 for that
     ```

5. [x] **Easy Installation via Install Script** (DONE)
    * **Description**: Implement installation strategy using an install script for native binary distribution. Originally planned for Coursier but pivoted to install script after discovering Coursier is incompatible with Scala Native.
    * **Command**:
      ```
      /speckit.specify Enable installation via coursier so users can run 'cs install first'
      ```

6. [ ] **Context Update Operations**
    * **Description**: Implement an `update` command to modify existing fctx definitions without recreating them. This should support:
      - `first update [context-name]` - Update the current (or specified) context with changes to tracked artifacts
      - `first update [context-name] --add "new-file.txt,another-dir/"` - Add new artifacts to the context
      - `first update [context-name] --forget "old-file.txt"` - Remove artifacts from the context
      - Optional context name parameter (defaults to currently active context if omitted)
      - Support for `--dry-run` and `--verbose` flags
    * **Command**:
      ```
      /speckit.specify Implement 'update' command to modify existing fctx definitions, supporting add/forget operations and defaulting to the current context
      ```

7. [x] **Dogfooding** (DONE)
    * **Description**: Move gemini, spec kit and "pm" files like this one to a separate repository and use `first` to take the fctx from the main branch there and apply to the project here so those things can finally have their own independent lifecycle.
    * **Status**: "External Artifacts" feature implemented in `save` command allows absolute paths, enabling this workflow.
    * **Command**:
      ```
      /speckit.specify Define the workflow for dogfooding 'first' to manage its own development environment from a separate repository
      ```
   
8. [ ] **MVP gh-pages**
    * **Description**: Add gh-pages branch for a simple and elegant static page. Should research what is the current best practice
    * **Command**:
      ```
      /speckit.specify Establish a 'gh-pages' branch for a simple project website
      ```

9. [ ] **Transactional File Operations**
    * **Description**: Specify a transactional approach for all file system operations (`load`, `swap`, `rm*`, etc.).
      Actions should be atomic, ensuring that an interrupted operation can be safely rolled back to leave the project in
      a clean, consistent state.
    * **Command**:
      ```
      /speckit.specify Define a transactional mechanism for file system modifications
      ```

9. [ ] **Destructive Context Cleanup Actions**
    * **Description**: Implement the destructive cleanup commands (`rm-def`, `rm-files`, `rm-all`) as defined in the use
      cases. This includes adding safety features like confirmation prompts and `--force` flags.
    * **Command**:
      ```
      /speckit.specify Implement destructive context cleanup actions 'rm-def', 'rm-files', and 'rm-all'
      ```

10. [ ] **Advanced Configuration and Security**
     * **Description**: Enhance the configuration system with advanced security and scope-control features, including
       symlink handling (`--symlinks` flag) and configuration discovery limits (`--parent-limit`).
     * **Command**:
       ```
       /speckit.specify Implement advanced configuration for security and scope control
       ```

11. [ ] **Interactive TUI Mode**
     * **Description**: Create an interactive terminal UI that allows users to select and execute actions without using
       command-line arguments, building on top of the already specified actions.
     * **Command**:
       ```
       /speckit.specify Create an interactive terminal UI mode for executing actions
       ```
