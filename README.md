<h1 align="center">KonradOS CLI — Interactive Developer Portfolio</h1>
<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8">
  <img src="https://img.shields.io/badge/GitHub_Pages-deployed-181717?logo=github&logoColor=white" alt="GitHub Pages">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License MIT">
</p>
<p align="center">
  An interactive portfolio built as a terminal emulator — visitors type commands and receive structured JSON responses, the same way a developer talks to an API.
</p>
<p align="center">
  <strong>Live demo:</strong> <a href="https://konradxmalinowski.github.io/Portfolio/">konradxmalinowski.github.io/Portfolio</a>
</p>

```
$ whoami
{
  "name": "Konrad Malinowski",
  "role": "Full-Stack Engineer & Technical Consultant",
  "location": "Zduńska Wola, Poland",
  ...
}
```

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Command Reference](#command-reference)
- [Documentation](#documentation)
- [License](#license)

---

## Overview

KonradOS replaces the conventional portfolio page with a fully functional terminal UI. Instead of scrolling through sections, visitors explore the portfolio by typing commands. All responses are structured as JSON, GitHub data is fetched live from the REST API, and the entire experience runs as a static site with zero backend.

The project has no UI library, no state management library, and no CSS framework — only React 19, TypeScript, and plain CSS custom properties.

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI framework | React 19 |
| Language | TypeScript |
| Bundler | Vite 8 |
| Styling | Plain CSS with custom properties |
| Compiler | React Compiler (Babel plugin) |
| External data | GitHub REST API |
| Deploy | GitHub Pages (`gh-pages`) |

---

## Getting Started

**Requirements:** Node 18+

```bash
git clone https://github.com/konradxmalinowski/Portfolio.git
cd Portfolio
npm install
```

```bash
npm run dev      # development server → http://localhost:5173
npm run build    # production build → dist/
npm run deploy   # build + push to GitHub Pages
```

---

## Command Reference

Type any command and press **Enter**. Press **Tab** to autocomplete. Use **↑ / ↓** to navigate history.

| Command | Response |
|---|---|
| `help` | All available commands |
| `whoami` | Developer profile |
| `skills` | Tech stack grouped by category |
| `projects` | GitHub repositories (live data) |
| `get /projects/{name}` | Single project details |
| `get /projects/{name} --open` | Single project details + opens repo in browser |
| `experience` | Work history |
| `education` | Education |
| `awards` | Awards & recognitions |
| `contact` | Contact info |
| `stats` | GitHub aggregate stats (repos, languages, stars) |
| `health` | Application and GitHub API status check |
| `theme` | List available themes |
| `theme <name>` | Switch appearance |
| `clear` | Clear the terminal |

**Available themes:** `dark` · `light` · `matrix` · `dracula` · `nord`

---

## Documentation

| File | Contents |
|---|---|
| [`docs/COMMANDS.md`](docs/COMMANDS.md) | Every command with full sample output |
| [`docs/THEMES.md`](docs/THEMES.md) | Theme guide with color palettes |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | File structure and data flow |
| [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) | How to add commands, themes, and run locally |

---

## License

MIT — free to use as a template or inspiration.

---

**Author:** Konrad Malinowski — Full-Stack Engineer & Technical Consultant  
[github.com/konradxmalinowski](https://github.com/konradxmalinowski) · [linkedin.com/in/konradxmalinowski](https://linkedin.com/in/konradxmalinowski) · malinowski.konrad45@gmail.com
