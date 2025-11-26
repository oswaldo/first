# `first` Project - GitHub Pages

This worktree contains the source code for the `first` projects GitHub Pages website. It is managed in the `gh-pages` branch and is separate from the main applications source code.

## Purpose

The goal of this website is to provide a modern and attractive landing page for the `first` project, reflecting its core philosophy with a "modern-retro" design.

The frontend is built entirely in Scala using [Scala.js](https://www.scala-js.org/) and the [Laminar](https://laminar.dev/) library for reactive UI components.

## Development

### Prerequisites

- [Scala CLI](https://scala-cli.virtuslab.org/) must be installed.

### Building the Website

To build the website from the source files, run the following command from this branch root:

```bash
scala-cli package site --js-mode release -o main.js --force
```

This command compiles the Scala.js code located in `site` and packages it into a single `main.js` file in the same directory.

### Local Preview

This project includes a simple web server written in Scala using [Cask](https://com-lihaoyi.github.io/cask/). To preview the website locally, run the server:

```bash
scala-cli run preview
```

Then, open your browser and go to `http://localhost:8080`.

The server will serve all files from the current directory. If you make changes to the Scala.js source code, you will need to stop the server, re-run the build command, and then restart the server.
