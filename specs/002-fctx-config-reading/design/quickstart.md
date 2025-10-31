# Quickstart: Configuration Reading Module

**Created**: 2025-10-31

This guide explains how to use the configuration reading module to load an `fctx` definition.

## Example Usage

The core logic will be exposed through a `ConfigReader` object. The primary method will take the name of a context and the starting path for discovery.

```scala
import first.config._
import java.nio.file.Paths

// Assuming a ConfigReader object is implemented
val configReader = new ConfigReader()

// The path from where the command is run
val currentPath = Paths.get("/path/to/project/subfolder")

// The name of the context to load
val contextName = "my-app-context"

// --- Success Case ---
// The result is an Either, with the FctxDef on the right
val result: Either[ConfigError, FctxDef] = configReader.load(contextName, currentPath)

result match {
  case Right(fctxDef) => 
    println(s"Successfully loaded: ${fctxDef.name}")
    fctxDef.artifacts.foreach(a => println(s"- ${a.path}"))

  case Left(error) =>
    println(s"Failed to load context: $error")
}

// --- Failure Case (Example) ---
val badResult: Either[ConfigError, FctxDef] = configReader.load("bad-context", currentPath)

badResult match {
    // Example: Circular dependency found
  case Left(CircularDependency(path)) =>
    println(s"Error: Circular dependency detected: ${path.mkString(" -> ")}")

  case Left(error) =>
    println(s"An unexpected error occurred: $error")
    
  case Right(_) => // Should not happen
}
```

This interface provides a clear, type-safe way to interact with the module and handle both success and failure scenarios gracefully.