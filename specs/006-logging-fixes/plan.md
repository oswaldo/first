# Implementation Plan: Logging Standardization
 
**Branch**: `006-logging-fixes` | **Date**: 2025-12-06 | **Spec**: [spec.md](spec.md)
 
## Summary
 
This plan documents the changes made to the `Logging` object to standardize output formats. This was a maintenance/fix iteration.
 
## Technical Context
 
**Language**: Scala 3
**Library**: Scribe (Logging)
 
## Implementation Strategy
 
1.  **Modify `Logging.scala`**:
    *   Update `daily()` to usage explicitly formatted path `year % "-" % month ...`.
    *   Define a custom `FormatBlock` for ISO 8601 dates using `java.time.format.DateTimeFormatter`.
    *   Remove explicit `$newLine` from the formatter string to fix double-newline issues on some platforms.
 
2.  **Verification**:
    *   Use a reproduction script (`tmp/reproduce_logging.scala`) to verify the Scribe configuration behavior in isolation.
    *   Manual verification of the built binary.
