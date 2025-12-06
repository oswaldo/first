# Decoupling AI Contexts: A Story of Two Developers

This tutorial demonstrates how `first` enables "Full Context Swapping," allowing developers to use different tools and AI assistants on the same project without polluting the repository or stepping on each other's toes.

## The Scenario

**Anne** and **Bob** are collaborating on a simple Python **Tic-Tac-Toe** project.
- **Anne** uses **Google Gemini** to help with development.
- **Bob** prefers **Antigravity**, another AI tool with a different workflow.

They want to collaborate on the code, but they don't want to force their specific AI tools and configuration files on each other.

---

## Act 1: The Problem

Anne starts developing. She creates a `GEMINI.md` file to store project memories and preferred Python versions.

```bash
# Anne's workspace: ~/git/tictactoe
echo "Project: TicTacToe\nStack: Python 3.10" > GEMINI.md
```

As the project grows, this file becomes coupled to her branches. When she switches to an experimental branch or when Bob pulls her changes, this file tags along, even though it's irrelevant to the code functionality and useless to Bob.

Bob joins. He starts using Antigravity, which creates an `.agent/workflows` directory. Now the repo is cluttered with `.gemini/`, `GEMINI.md`, and `.agent/`.

Anne and Bob are facing a common problem: **Tool coupling**.

---

## Act 2: The Solution with `first`

Anne decides to use `first` to decouple her AI context from the project codebase.

### Step 1: Create a Context Repository

Anne creates a separate repository to hold her personal "Cognition Simulation" (context) for this project.

```bash
mkdir -p ~/git/tictactoe-fctx
cd ~/git/tictactoe-fctx
git init
```

### Step 2: "Import" the Context

Anne uses the **External Artifacts** feature of `first` to ingest her existing `GEMINI.md` into this new context without manually copying and pasting.

```bash
# She is in her context repo
cd ~/git/tictactoe-fctx

# She saves a new context 'gemini-tictactoe', pulling the file from the project repo
first save gemini-tictactoe --artifacts ~/git/tictactoe/GEMINI.md
```

`first` magically copies `GEMINI.md` into the context storage (`.then/gemini-tictactoe/artifacts/GEMINI.md`).

### Step 3: Clean the Project Repo

Now that her context is safe, Anne removes the file from the actual project.

```bash
cd ~/git/tictactoe
rm GEMINI.md
echo "GEMINI.md" >> .gitignore
```

### Step 4: Full Context Swapping

Whenever Anne works on Tic-Tac-Toe, she simply loads her context:

```bash
cd ~/git/tictactoe
first load gemini-tictactoe
```

The `GEMINI.md` file appears! She works, commits her python code (clean of AI files), and when she's done (or switches tasks), she can unload it or just let it vanish when she cleans her workspace.

---

## Act 3: Bob's Turn

Bob pulls the latest code. He sees a clean Python project. No `GEMINI.md`.

He wants to use Antigravity. He creates his own context repo (or uses a folder in his dotfiles).

```bash
cd ~/git/my-contexts
first save antigravity-tictactoe --artifacts ~/git/tictactoe/.agent/
```

Now Bob loads *his* context:

```bash
cd ~/git/tictactoe
first load antigravity-tictactoe
```

Bob sees `.agent/`. Anne sees `GEMINI.md`. **Neither sees the other's tools.**

---

## Act 4: Shared Memories

Anne and Bob realize there are some project facts *both* AIs need (e.g., "The board is 3x3").

They agree to establish a `shared-memories.md` file in the main repository. This file is version-controlled and visible to everyone.

```bash
# ~/git/tictactoe
echo "Board: 3x3 Grid\nWin: 3 in a row" > shared-memories.md
```

### Extending Contexts

Anne updates her `GEMINI.md` (which lives in her context) to cross-reference this shared file.

Bob instructs his Antigravity agent to read `shared-memories.md`.

They have achieved **Separation of Concerns**:
- **Shared Context**: `shared-memories.md` (Repo)
- **Private Context**: `GEMINI.md`, `.agent/` (Managed by `first`)

## Conclusion

Everyone wins:
- **Project**: Remains clean and tool-agnostic.
- **Anne**: Keep her Gemini memories across all branches.
- **Bob**: Uses his preferred tool without clutter.
- **AIs**: Only see the context relevant to them, "saving tokens" and reducing confusion.
