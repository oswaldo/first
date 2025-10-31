# Quickstart: Core CLI and Basic Actions

**Created**: 2025-10-31

This guide explains how to compile and run the initial CLI application to test the `help` and `ls` commands.

## Prerequisites

- `scala-cli` installed
- A source file (e.g., `first.scala`) containing the main application logic.

## Compilation

To compile the application into a native executable, run the following command from the project root:

```bash
scala-cli --power package . --native -o first
```

This will create a native binary named `first` in the current directory.

## Usage

### View Help

To see the list of available commands and options:

```bash
./first --help
```

Alternatively, use the `help` command:

```bash
./first help
```

### List Contexts

To list all fctx definitions discoverable from the current location:

```bash
./first ls
```
