# Feature Numbering Convention

**Created**: 2025-11-24

## Rule

Feature numbers MUST be globally unique and incrementing across the entire project.

When creating a new feature:
1. Check ALL existing feature numbers in `specs/`, local branches, and remote branches.
2. Find the absolute highest number used by ANY feature.
3. Increment that number by 1.

**Do NOT** restart numbering for different feature names or types.
**Do NOT** rely solely on `grep <short-name>` to find the next number.

## Example

If existing features are:
- `001-foo`
- `004-bar`

The next feature MUST be `005-baz`, NOT `001-baz` or `002-baz`.
