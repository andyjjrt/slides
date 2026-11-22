# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A collection of [Slidev](https://sli.dev) presentations published as one site (base URL `https://slidev.andyjjrt.cc`) using the [slidev-workspace](https://github.com/leochiu-a/slidev-workspace) npm package (root dependency). The root `README.md` is a leftover Vite template and not relevant.

## Setup and commands

```bash
pnpm install
pnpm preview                      # workspace index UI (lists all decks)
pnpm build                        # build every deck in slides/ + index into dist/
pnpm build long-spec eagle3       # build only the named decks (space-separated)
pnpm export-og                    # export slide 1 of each deck to <deck>/og-image.png
pnpm --filter ./slides/<deck> dev # live-edit a single deck
```

`pnpm build` runs `pnpm --filter ./slides/<name> run build --base /<name>/` for each deck, then copies each `slides/<name>/dist` into root `dist/<name>/`. Decks are discovered by `slides.md` (recursively, `node_modules` excluded) and skipped if they lack a `package.json`. CI additionally copies `.github/pages-404.html` to `dist/404.html` so deep links like `/<deck>/21` work on GitHub Pages. There are no tests or linters.

## Layout

- `slides/<deck>/` — one pnpm workspace package per deck: `slides.md`, `package.json` (scripts `build`/`dev`/`export` calling `slidev`), images alongside. Only `slides/` is discovered by the workspace (`slidesDir` default); `old_slides/` and `close_slides/` are archived/private decks that are **not** built or deployed.
- `theme/` — shared local theme (`slidev-theme-theme`). Its `package.json` `slidev.defaults` sets site-wide frontmatter defaults (fonts, author, transition, baseUrl, `mdc`, OG image). Custom layouts: `cover`, `intro`.
- `addons/` — local Slidev addons: `back-to-home` (nav control), `background-animation` (global-bottom, uses `seedrandom`), `page-number` (slide-top).
- `template/` — shared `setup/` and `styles/` (shiki config, code/layout CSS).
- `slidev-workspace.yaml` — workspace index hero text and `baseUrl`.

## Writing a new deck

Copy an existing deck folder (e.g. `slides/long-spec`), rename the `name` in `package.json`, and use headmatter like:

```yaml
---
theme: ../../theme
title: "..."
name: <deck-folder-name>
themeConfig:
  glowHue: 100        # per-deck accent hue for the theme
addons:
  - ../addons/back-to-home
  - ../addons/background-animation
  - ../addons/page-number
---
```

Then run `pnpm install` so the new package joins the workspace.

## Deployment

CI (`deploy.yml`) runs a full `pnpm build` on every push/PR and, for non-PR runs, deploys `dist/` via `actions/deploy-pages` (Pages source must be "GitHub Actions"; custom domain `slidev.andyjjrt.cc` is set in repo settings, no CNAME file). Decks without a `package.json` are skipped by the build. The index's thumbnail for a deck uses `slides/<deck>/og-image.png` if it exists at index-build time — Slidev generates it during the deck build (`seoMeta.ogImage: auto` in the theme), otherwise it falls back to a random `cover.sli.dev` image.

## Conventions

Commit messages follow conventional commits with the deck name as scope, e.g. `feat(itsc-1141-final): init`, `fix(eagle3): title column`, `ci: ...`.
