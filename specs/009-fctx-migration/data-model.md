# Data Model

## Global Configuration (`~/.first/first.conf`)

The global configuration file acts as a central registry for known context definitions. This enables the tool to locate contexts that are not in standard project locations (e.g., when using `save --to` or `mv`).

```hocon
// List of absolute paths to known fctx definition files (fctx-def.conf)
fctx-files: [
  "/home/user/.first/default/fctx-def.conf",
  "/home/user/projects/my-context-repo/fctx-def.conf"
]

// [Existing field, may remain]
last-loaded {
  name: "default",
  at: "/home/user/projects/current"
}
```

## Context Definition (`fctx-def.conf`)

No changes to the data model itself, but `swapAs` field will be actively used and validated.

```hocon
artifacts: [
  {
    path: "config/app.conf"
    swapAs: "symlink" // or "copy"
    md5: "..."
  }
]
```
