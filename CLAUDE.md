# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Mission

This workspace is a slide deck that showcases **JetBrains Rider and related .NET / GameDev products** for an enterprise technical-leadership audience. The narrative angle is how the JetBrains GameDev stack fits into game studios' existing R&D pipelines and roles in the **agentic-coding era**.

Goals the deck must serve:
- Walk through the game-studio R&D pipeline and the distinct business roles within it (gameplay programmer, tech artist, engine/framework engineer, studio tools / AI platform / QA / build, R&D management / CTO, etc.), and show where JetBrains products plug in at each stage.
- Emphasize **product strengths and the degree of fit** with existing workflows and responsibilities — not generic feature lists.
- Highlight what makes the JetBrains stack differentiated in an agentic-coding world (MCP, ACP, Junie, semantic context moat, shared IDE, etc.).
- Target audience: enterprise technical management — framing and evidence should match that altitude.

## Content & Design Principles

1. **`docs/` is the source of truth for slide content.** Each slide in the deck corresponds to a numbered brief in [docs/](air-file://lkccn9uv6uc8u359vjmj/Users/suntao/Projects/presentations/rider-agentic-gamedev/docs?type=folder&root=%252F). Slide copy, structure, and intent must be derived from the matching `docs/NN-*.md` brief. Do not invent narrative that is not grounded in those briefs — if something is missing, ask rather than fabricate.
2. **Visual style must follow the JetBrains .NET / GameDev design theme.** Colors, gradients, typography accents, and iconography should echo the JetBrains Rider / GameDev brand system (deep purples/indigos, magenta→orange gradients characteristic of Rider, clean geometric layouts). Avoid defaulting to generic Slidev theme looks.

## Tech Stack & Operations

1. **Slidev + pnpm** is the only supported toolchain. Always use `pnpm` (not `npm`/`yarn`) and Slidev's standard commands for dev, preview, build, and export.
2. **MCP and agent skills configured in this workspace should be used actively.** Before solving a task, check whether an available skill or MCP tool fits — in particular the **`slidev` skill** (mirrored under `.agents/skills/slidev/` and `.claude/skills/slidev/`) for Slidev syntax, layouts, animations, components, exporting, and diagrams. Other agent configs live under `.junie/`, `.qoder/`, `.qwen/`, `.trae/`, `.windsurf/` — respect them if a task touches those tool surfaces.

### Commands

```bash
pnpm install       # install dependencies
pnpm dev           # start dev server at http://localhost:3030
pnpm build         # build SPA to dist/
pnpm export        # export slides to PDF/PPTX/PNG
```

## Human–Agent Collaboration

- **Agent replies to the user are in Chinese (中文).** Project briefs under `docs/` are also written in Chinese.
- **The rendered slide deck itself is in English.** All slide copy, headings, body text, speaker-facing UI strings, and component labels written into `slides.md` / `pages/**` must be English, even when the sourcing brief in `docs/` is Chinese. Translate faithfully from the brief's intent rather than paraphrasing loosely.

## Architecture

This is a [Slidev](https://sli.dev) presentation — Markdown-driven slides rendered as a Vue/Vite SPA.

**Entry point**: `slides.md` — the main slide deck. Slides are separated by `---` and each slide can have a YAML frontmatter block (`layout:`, `transition:`, `class:`, etc.).

**Slide importing**: A slide file can import another markdown file via `src:` frontmatter:
```yaml
---
src: ./pages/imported-slides.md
---
```

**Content source (`docs/`)**: The `docs/` folder contains the substantive content for the "JetBrains Rider for Agentic Game Development" talk, split into numbered files `01`–`26`. Each file is a structured creative brief with these sections:
- **页面目标** — slide goal and narrative intent
- **建议 Slidev 布局** — recommended Slidev layout and style
- **主视觉 / 信息图提示词** — image/diagram generation prompts
- **页面文案提示词** — copy prompts for headings and body text
- **可直接改写的 Slidev 草图** — a ready-to-paste Slidev markdown draft
- **讲者备注** — speaker notes
- **事实锚点** — fact anchors (off-screen; used to verify copy accuracy)

`docs/98-ALL-PAGES.md` is a concatenation of all 01–26 pages. `docs/99-SOURCES.md` holds source references.

**Vue components**: Files placed in `components/` are auto-imported into slides with no import statement needed (e.g., `<Counter :count="10" />`).

**Code snippets**: External code files in `snippets/` can be embedded via `<<< @/snippets/file.ts#snippet`.

**Deployment**: Builds to `dist/` as a SPA. Both `netlify.toml` and `vercel.json` are configured with catch-all rewrites to `index.html`.

## Workflow: docs → slides

The typical workflow is:
1. Use the `docs/NN-*.md` brief as the spec for a slide — goals, fact anchors, and recommended layout are authoritative.
2. Take the **可直接改写的 Slidev 草图** block from that brief as a starting point, translating copy into English.
3. Write/edit the corresponding slide content in `slides.md` (or a file under `pages/`), applying the JetBrains .NET / GameDev visual theme.
4. Consult the `slidev` skill for layout/animation/component choices rather than guessing Slidev syntax.
5. Run `pnpm dev` to verify the slide renders correctly before reporting the task done.
