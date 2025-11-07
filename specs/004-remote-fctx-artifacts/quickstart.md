# Quickstart: Using Remote Artifacts

This guide provides practical examples of how to use remote artifacts and includes in your `fctx-def.conf` files.

## 1. Including a Remote Artifact via HTTPS

To include a file from a URL, simply use the full HTTPS path as the `path` for an artifact.

```hocon
# fctx-def.conf
fctx.my-context {
  artifacts = [
    {
      path = "https://raw.githubusercontent.com/user/repo/main/scripts/my-script.sh"
      sha256 = "a1b2c3d4..." # Optional, but recommended for integrity
    }
  ]
}
```

When you run `first load my-context`, the tool will download `my-script.sh` into your current directory.

## 2. Including a GitHub Artifact with `gh://`

The `gh://` shorthand simplifies linking to GitHub files.

### Basic Usage (default branch)

This will pull the file from the `main` branch.

```hocon
# fctx-def.conf
fctx.my-context {
  artifacts = [
    {
      path = "gh://oswaldo/first/main/scripts/common.sh"
    }
  ]
}
```

### Specifying a Branch or Tag

You can specify a branch, tag, or commit hash.

```hocon
# fctx-def.conf
fctx.my-context {
  artifacts = [
    {
      path = "gh://oswaldo/first/001-core-cli-actions/scripts/common.sh"
      # This pulls the script from the '001-core-cli-actions' branch
    }
  ]
}
```

## 3. Including a Remote fctx Definition

You can compose contexts by including a remote `fctx-def.conf` file. Its artifacts will be merged with the local definition.

```hocon
# fctx-def.conf
includes = ["https://example.com/base-fctx.conf"]

fctx.my-context {
  # This context will inherit all artifacts from base-fctx.conf
  artifacts = [
    { path = "./local-script.sh" } # You can add local artifacts too
  ]
}
```

## 4. Using Authentication

To access files from private repositories, the tool uses environment variables for authentication.

-   **For GitHub (`github.com`, `gh://`)**: Export a `GITHUB_TOKEN`.
    ```bash
    export GITHUB_TOKEN="ghp_..."
    first load my-private-context
    ```

-   **For other hosts**: Export a `FIRST_AUTH_TOKEN`.
    ```bash
    export FIRST_AUTH_TOKEN="my-secret-token"
    first load my-company-context
    ```

The tool will automatically use these tokens when making requests to the corresponding hosts.
