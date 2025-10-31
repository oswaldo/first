# Constitution Update Checklist

This checklist ensures that any changes to the project constitution are made in a consistent and safe manner.

## Preparation

*   [ ] 1. **Load the Constitution**: Load the existing constitution from `.specify/memory/constitution.md`.
*   [ ] 2. **Identify Placeholders**: Identify all placeholders in the format `[ALL_CAPS_IDENTIFIER]`.

## Value Collection

*   [ ] 3. **Gather Input**: Collect new values for placeholders from user input or by inferring from the repository context.
*   [ ] 4. **Determine Version**: Decide on the new version number based on semantic versioning rules (MAJOR, MINOR, PATCH).
*   [ ] 5. **Update Dates**: Set the `LAST_AMENDED_DATE` to the current date.

## Content Drafting

*   [ ] 6. **Draft New Constitution**: Create the new content with all placeholders filled.
*   [ ] 7. **Preserve Structure**: Ensure the heading hierarchy and formatting are preserved.

## Consistency Propagation

*   [ ] 8. **Check `plan-template.md`**: Ensure the "Constitution Check" section is aligned with the new principles.
*   [ ] 9. **Check `spec-template.md`**: Ensure the template is aligned with any new constraints or requirements.
*   [ ] 10. **Check `tasks-template.md`**: Ensure task categorization reflects any new principles.
*   [ ] 11. **Check Command Files**: Verify that no command files in `.gemini/commands/` have outdated references.
*   [ ] 12. **Check `README.md`**: Update any references to the constitution.

## Reporting and Validation

*   [ ] 13. **Create Sync Impact Report**: Generate a report detailing the changes and prepend it to the constitution file.
*   [ ] 14. **Validate Content**:
    *   [ ] No unexplained placeholders remain.
    *   [ ] Version number is correct.
    *   [ ] Dates are in `YYYY-MM-DD` format.
    *   [ ] Principles are clear and testable.

## Finalization

*   [ ] 15. **Write the Constitution**: Write the new content back to `.specify/memory/constitution.md`.
*   [ ] 16. **Summarize Changes**: Provide a summary of the changes to the user, including the new version, rationale, and a suggested commit message.
