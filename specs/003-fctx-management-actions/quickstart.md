# Quickstart: FCTX Management

**Created**: 2025-11-01

This guide explains how to use the `save`, `load`, and `swap` commands to manage your fctxs.

## Saving a new fctx

To save the current state of your environment as a new fctx, use the `save` command:

```bash
first save my-context --file ./path/to/file1.txt --dir ./path/to/dir
```

This will create a new `fctx-def.conf` file for `my-context`.

## Loading an fctx

To load an existing fctx, use the `load` command:

```bash
first load my-context
```

This will apply the fctx to your current directory, creating symlinks or copying files as defined in the fctx.

## Swapping between fctxs

To swap from the currently active fctx to a new one, use the `swap` command:

```bash
first swap another-context
```

This will efficiently transition your environment from the current fctx to the new one.
