# Quickstart: Context Migration & Linking

## Saving to a Custom Location

Save a context to a specific directory (e.g., for sharing via git):

```bash
first save my-shared-ctx --to ~/git/shared-contexts --files "style.conf,rules.xml"
```

## Linking Local Files

Move local files to the context and replace them with symlinks:

```bash
first save local-dev --files "local.properties" --link
```

## Moving a Context

Move an existing context to a new location:

```bash
first mv my-shared-ctx ~/new-location/my-shared-ctx
```

The tool will automatically:

1. Move the context definition.
2. Update the global registry.
3. Update any active symlinks in your current workspace to point to the new location.
