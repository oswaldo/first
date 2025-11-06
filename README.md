## Building and Running

This project uses `scala-cli` to compile and run.

### Without compiling

To run directly from source, for instance the ls command, run:

```bash
scala-cli run . -- ls
```

To run all tests:

```bash
scala-cli test .
```

### Compilation

To compile the application into a native executable, run:

```bash
scala-cli package . --native -o tmp/first -f
```

### Usage

To view the available commands:

```bash
tmp/first --help
```

To list available contexts:

```bash
tmp/first ls
```

To save a new context:

```bash
tmp/first save my-context --path /path/to/artifact1 --path /path/to/artifact2
```

To load a context:

```bash
tmp/first load my-context
```

To swap to a different context:

```bash
tmp/first swap another-context
```

## Code quality

To run all the code quality checks, run the linting script:

```bash
.specify/scripts/bash/lint.sh
```
