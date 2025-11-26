---
trigger: always_on
---

# Project Memory: first-gh-pages

## Project Structure
- **site/**: Contains the Scala.js frontend code.
  - `site/first/Main.scala`: Main entry point and UI logic (Laminar).
  - `site/project.scala`: Scala CLI configuration for the frontend.
- **preview/**: Contains a simple Cask server for local preview.
  - `preview/serve.scala`: Server implementation.
- **scripts/**: Helper scripts (e.g., linting).
- **index.html**: The HTML entry point that loads `main.js`.
- **styles.css**: Global styles.

## Build Instructions
To build the production `main.js`:
```bash
/usr/local/bin/scala-cli package site --js-mode release -o main.js -f
```

## Local Preview
To run the local preview server:
```bash
/usr/local/bin/scala-cli run preview
```
Then access http://localhost:8080.

## Development Notes
- The root `src/` directory is deprecated and should not be used.
- The project uses **Laminar 17**.
- `unsafeInnerHtml` is not available in Laminar 17. Use `inContext { el => signal --> { html => el.ref.innerHTML = html } }` instead.
