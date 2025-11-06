## Example use cases

### Use Case: Creating and Swapping fctx

*   **Actors**: Developer.
*   **Pre-requirements**:
    *   Developer has a project repository.
    *   Developer uses two different AI assistants, "X" and "Y", each with their own configuration files (`X.md`, `.x/` for X; `Y.md`, `.y/` for Y).
    *   There is a shared file, `hints.md`, used by both assistants.
*   **Main Flow**:
    1.  **Save context for Assistant X**: The developer is using Assistant X. They run `first save X --files X.md,.x/,hints.md`. The `first` tool saves the definition for an `fctx` named "X" and copies the specified files to its internal storage (e.g., in `~/.first/`).
    2.  **Setup Assistant Y**: The developer wants to try Assistant Y. They use Y to generate its own configuration files, `Y.md` and `.y/`.
    3.  **Save context for Assistant Y**: The developer saves this new context by running `first save Y --files Y.md,.y/,hints.md`.
    4.  **Swap to Y**: The developer runs `first swap Y`. Since this is the first swap and files from X are present, the `first` tool removes `X.md` and `.x/`, but keeps `hints.md` because it's part of the target `fctx` "Y". The tool then ensures `Y.md` and `.y/` are present.
    5.  **Swap back to X**: After testing, the developer wants to return to Assistant X. They run `first swap X`.
    6.  The `first` tool removes the files exclusive to Y (`Y.md`, `.y/`) and restores the files for X (`X.md`, `.x/`). The common file `hints.md` is kept.
*   **Alternative Flows**:
    *   **Loading instead of swapping**: A developer could use `first load Y`. If no other context is active, it would just place the files for Y in the directory. If a context is active, it might fail or ask for confirmation depending on the implementation, to avoid accidental file mixing.
*   **Post-conditions**:
    *   The developer can seamlessly switch between the tool configurations for Assistant X and Assistant Y, with only the relevant files present in the working directory at any given time.

## Elaborated Use Cases for Missing Features

### Use Case: Securely Managing Symbolic Links

*   **Actors**: Developer.
*   **Pre-requirements**:
    *   The developer has a project with an existing `fctx` setup.
    *   The project contains symbolic links within its directory structure. Some of these symlinks might point to sensitive files or directories outside the project.
*   **Main Flow**:
    1.  The developer is about to save a new `fctx` or update an existing one.
    2.  They are concerned about including symlinks that might expose sensitive data or create security vulnerabilities.
    3.  The developer runs the `first save` command with a `--symlinks=reject` flag.
    4.  The `first` tool analyzes the files to be included in the `fctx`. When it encounters a symbolic link, it rejects the operation and informs the developer about the symlink it found, aborting the process.
    5.  The developer inspects the reported symlink, decides it's not a risk, and wants to include its target content.
    6.  The developer re-runs the `first save` command, this time with `--symlinks=follow`.
    7.  The `first` tool follows the symlink and includes the content of the target file in the `fctx`'s stored files.
    8.  The `fctx` is saved successfully.
*   **Alternative Flows**:
    *   **Ignoring symlinks**: The developer could use a `--symlinks=ignore` flag. In this case, the `first` tool would not follow the symlink and would not include it in the `fctx` files, simply skipping it without error.
*   **Post-conditions**:
    *   The `fctx` is saved according to the developer's desired symlink handling policy, enhancing security and control.

### Use Case: Controlling fctx Configuration Scope

*   **Actors**: Developer.
*   **Pre-requirements**:
    *   The developer has a nested project structure, e.g., `/home/user/company/project/sub-project`.
    *   There are `.first` configuration directories at multiple levels (e.g., in `/home/user/company` and `/home/user/company/project`).
*   **Main Flow**:
    1.  The developer is working inside `sub-project`.
    2.  When running a `first` command (like `load` or `swap`), the tool by default searches upwards for `.first` configuration files, potentially merging configurations from parent directories.
    3.  The developer wants to isolate the `sub-project` and prevent it from inheriting configurations from `/home/user/company`.
    4.  The developer uses a command-line flag like `first load my-fctx --parent-limit=1` (or sets a config property like `parent-limit = 1`).
    5.  The `first` tool executes the command, only considering configurations found in the current directory and its immediate parent, ignoring the one in `/home/user/company`.
*   **Alternative Flows**:
    *   **Absolute path limit**: The developer could specify an absolute path as a limit, e.g., `parent-limit = /home/user/company/project`. The tool would stop searching for configurations once it reaches that directory.
    *   **Unlimited search (default)**: If no limit is set, the tool searches up to a sensible boundary (e.g., home directory).
*   **Post-conditions**:
    *   The `first` command executes using only the intended configuration scope, providing better isolation and preventing unexpected behavior from parent project configurations.

### Use Case: Cleaning up fctx Definitions

*   **Actors**: Developer.
*   **Pre-requirements**:
    *   A project has been configured with one or more `fctx`s using `first`.
    *   The `fctx` definition files and associated file copies are stored centrally (e.g., `~/.first/`).
    *   The project itself contains the files that were put in place by loading an `fctx` (e.g., `X.md`, `.x/`).
*   **Main Flow**:
    1.  The developer decides they no longer want to manage the current project's tool configurations with `first`. They want to "eject" from `first` management for this project but keep the currently active tool files.
    2.  The developer runs `first rm-def --project`.
    3.  The `first` tool identifies the definitions and stored file copies associated with the current project's directory.
    4.  It removes the definition files and the stored file copies from the central storage location.
    5.  The files currently in the project working directory (`X.md`, `.x/`) are **not** touched.
*   **Alternative Flows**:
    *   **Removing a specific fctx definition**: The developer could run `first rm-def X` to only remove the definition for the `fctx` named "X" for the current project.
*   **Post-conditions**:
    *   The `first` tool no longer has any knowledge of or stored files for the specified project (or `fctx`).
    *   The project's working directory is left in its current state.

### Use Case: Temporarily Disabling an fctx

*   **Actors**: Developer.
*   **Pre-requirements**:
    *   An `fctx` named "X" is currently active in the project. The files `X.md` and `.x/` are present in the working directory.
    *   The definition for "X" and its file copies are stored in `~/.first/`.
*   **Main Flow**:
    1.  The developer needs to temporarily work in a "clean" environment without the files from `fctx` "X", for example, to run a build process that is sensitive to extra files.
    2.  The developer runs `first rm-files X`.
    3.  The `first` tool finds all files associated with `fctx` "X" (`X.md`, `.x/`) and removes them from the project's working directory.
    4.  The definition for "X" and the master copies of its files remain in `~/.first/`.
    5.  After completing their task, the developer can run `first load X` to restore the files.
*   **Alternative Flows**:
    *   If the developer runs `first rm-files` without a name, it could remove the files for the currently active `fctx`.
*   **Post-conditions**:
    *   The project directory is cleaned of files associated with the specified `fctx`.
    *   The `fctx` definition and its stored files are preserved, ready to be loaded again.

### Use Case: Complete fctx Cleanup

*   **Actors**: Developer.
*   **Pre-requirements**:
    *   An `fctx` named "Y" is active in the project.
    *   The files `Y.md` and `.y/` are present in the working directory.
    *   The definition for "Y" and its file copies are stored in `~/.first/`.
*   **Main Flow**:
    1.  The developer has decided to permanently remove the "Y" context. They want to delete the definition, the stored files, and the files currently applied to the project.
    2.  The developer runs `first rm-all Y`.
    3.  The command prompts for confirmation due to its destructive nature: "This will remove the fctx 'Y' definition, its stored files, and all associated files from the current project. This cannot be undone. Proceed? (y/N)".
    4.  The developer confirms by typing "y".
    5.  The `first` tool removes the files `Y.md` and `.y/` from the project's working directory.
    6.  The `first` tool then removes the definition for "Y" and its stored file copies from `~/.first/`.
*   **Alternative Flows**:
    *   **Force flag**: The developer could use a `--force` flag to bypass the confirmation prompt for scripted or power-user scenarios.
    *   **User cancels**: The developer does not confirm the action, and the operation is aborted with no changes made.
*   **Post-conditions**:
    *   All traces of the `fctx` "Y" are removed from both the project directory and the `first` tool's storage.

## Notes

The new `rm*` commands are destructive and potentially dangerous. It is critical to discuss their naming for clarity (e.g., `rm-def` vs. `eject`, `rm-all` vs. `purge`) and to establish safe defaults, such as requiring confirmation prompts that can only be bypassed with an explicit `--force` flag. The "extra-force" idea is likely unnecessary if a standard `--force` flag is implemented carefully.

**maybe new requirement: all processes that might be aborted in the middle must be higenic, in the sense that it should be possible to revert the action without left overs or missing files. note sure if should be explicit in use cases**