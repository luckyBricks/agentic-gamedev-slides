# JetBrains for Agentic-Driven Game Development

A [Slidev](https://sli.dev) presentation targeting enterprise technical leadership in game studios. The deck makes the case for the JetBrains GameDev stack (Rider, Junie, Qodana, dotUltimate) as a production-ready platform for agentic coding workflows — where IDE, AI agents, and human engineers share a single context layer.

## Narrative arc

| # | Section | Theme |
|---|---------|-------|
| 01–04 | Problem & Stack | Why generic AI breaks in GameDev; the JetBrains answer |
| 05–07 | Architecture | Rider as shared IDE; ACP/MCP/Junie; MCP Steroid skill factory |
| 08–13 | Workflows | Five end-to-end agent workflows (issue → plan → ship → gate) |
| 14–18 | Role fit | Gameplay programmer, engine engineer, studio tools, CTO |
| 19–22 | Moat & Close | Semantic context moat; integration proof; adoption roadmap |
| A1–A4 | Appendix | Product map, MCP deep-dive, demo menu, KPI framework |

## Getting started

```bash
pnpm install   # install dependencies
pnpm dev       # dev server → http://localhost:3030
pnpm build     # build SPA to dist/
pnpm export    # export to PDF / PPTX / PNG
```

## Project layout

```
slides.md          # entry point — imports pages via src:
pages/             # one .md file per slide (02–A4)
components/        # auto-imported Vue components (CornerBadge, etc.)
layouts/           # custom Slidev layouts (rider-cover, rider-section, …)
styles/            # global CSS — Rider visual theme
docs/              # content briefs (01–26) — source of truth for copy
docs/brand-assets/ # official JetBrains SVG logos and icons
snippets/          # embeddable code examples
public/            # static assets served at /
```

## Visual design

Near-black canvas, concentric-arc mandala motif, bold white typography with a Rider-red (`#FF0A67`) kicker underline. Chapter color flows through the mandala:

- **Violet / magenta** — Unreal / engine / C++ chapters
- **Cyan / teal** — Unity / tooling chapters
- **Amber / gold** — AI / Junie / agents chapters
- **Qodana green** — QA / quality-gate chapters

See [DESIGN.md](./DESIGN.md) for the full specification.

## Language policy

Agent replies (Claude Code, Junie, etc.) are in **Chinese (Mandarin)**; all rendered slide content is in **English**.

This rule is set in [`CLAUDE.md`](./CLAUDE.md) under the *Human–Agent Collaboration* section — edit that file to change the language policy for either surface.

## Content workflow

1. Read the matching `docs/NN-*.md` brief — slide goal, fact anchors, and recommended layout are authoritative.
2. Draft slide copy in English (briefs are written in Chinese — translate intent faithfully).
3. Pick chapter mandala color per DESIGN.md; edit or create the corresponding file under `pages/`.
4. Run `pnpm dev` and verify: mandala color, red kicker underline, corner badge, italic-serif page number.

## Tech stack

- [Slidev](https://sli.dev) v52 — Markdown-driven slides as a Vue/Vite SPA
- [Vue 3](https://vuejs.org) — custom components and layouts
- [pnpm](https://pnpm.io) — package manager
- Deployed as a static SPA via Netlify or Vercel (catch-all rewrites configured)
