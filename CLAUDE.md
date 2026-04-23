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
2. **`temp/Rider 功能速览 2026.1 Promo (1).pdf` is the visual ground truth.** It is JetBrains' own 2026.1 Rider promo deck and defines the exact visual language this deck must match: near-black canvas, chapter-tinted concentric-arc **mandala** motif bleeding off one edge, bold white typography with a **Rider-red (`#FF0A67`) underlined kicker** as the primary section label, **magenta "Tip" chips**, **Qodana-green "Beta/New" chips**, **yellow inline highlighter**, Rider-icon + "JETBRAINS IDE" **corner badge top-right**, and a quiet **italic-serif page number bottom-right**. When in doubt about visual treatment, open that PDF and match the page of the same content type. Full specification lives in [DESIGN.md](./DESIGN.md).
3. **Visual style must follow the JetBrains .NET / GameDev design theme.** Colors, chips, underlines, and iconography echo the Rider / GameDev brand system. Chapter color flows through the mandala: **violet/magenta** for Unreal/engine/C++ chapters, **cyan/teal** for Unity/tooling, **amber/gold** for AI/Junie/agents, **Qodana green** for QA. Avoid defaulting to generic Slidev theme looks, and avoid gradient-text under body copy — the reference deck uses bold white text and lets color live in the mandala, chips, and red kicker underline.
4. **Use brand assets from `docs/brand-assets/` wherever a product name appears.** This directory contains official SVG logos and icons for all relevant JetBrains products (Rider, Junie, Qodana, ReSharper, TeamCity, dotCover, dotMemory, dotPeek, dotTrace, Toolbox, AI). Each product folder typically has a full logo (`ProductName.svg`), a white variant (`ProductName-white.svg`), and/or an icon (`ProductName_icon.svg`). **Prefer the logo/icon `<img>` over text labels** whenever a product is referenced on a slide — do not describe products with verbose text where a logo conveys the same meaning. Reference them in slides via relative paths, e.g. `<img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-8 inline" />`.

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
2. Open [`temp/Rider 功能速览 2026.1 Promo (1).pdf`](./temp) and find the reference page that matches the slide's content type (cover, TOC, content-with-screenshot, spec table, closing) — mandala color, kicker style, chip usage, and page-chrome follow that reference.
3. Take the **可直接改写的 Slidev 草图** block from the brief as a starting point, translating copy into English.
4. Pick the chapter mandala color first (violet / cyan / amber / green) per [DESIGN.md §2](./DESIGN.md). This choice cascades to chip and accent treatment.
5. Write/edit the corresponding slide content in `slides.md` (or a file under `pages/`), applying the JetBrains .NET / GameDev visual theme.
6. Consult the `slidev` skill for layout/animation/component choices rather than guessing Slidev syntax.
7. Run `pnpm dev` and side-by-side against the reference PDF page — verify mandala color matches chapter, kicker underline is Rider-red, corner badge is present, italic-serif page number is visible, and body text is bold white (not gradient).
