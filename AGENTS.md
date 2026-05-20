# AGENTS.md

This file provides guidance for Codex and other coding agents working in this repository.

## Project Mission

This workspace is a Slidev deck for **JetBrains Rider and related .NET / GameDev products**. The audience is enterprise technical leadership in game studios. The narrative is about how the JetBrains GameDev stack fits existing R&D pipelines and role responsibilities in the agentic-coding era.

The deck should:

- Map game-studio R&D workflows and roles to JetBrains product strengths.
- Emphasize product fit and workflow leverage, not generic feature lists.
- Explain the JetBrains differentiation in agentic coding: Rider shared IDE context, ACP, MCP, Junie, semantic context, Qodana, TeamCity, and dotUltimate.
- Keep framing appropriate for technical management and platform decision makers.

## Source Of Truth

- `docs/` is the authoritative source for slide content. Each numbered brief defines the slide goal, layout intent, copy direction, speaker notes, and fact anchors.
- `slides.md` is the Slidev entry point and imports slide files from `pages/`.
- `pages/` contains one Markdown file per slide after the cover.
- `DESIGN.md` and `styles/rider-theme.css` define the visual system. Follow them before inventing new visual patterns.
- `docs/brand-assets/` contains official JetBrains and ecosystem SVG assets. Prefer these assets over text labels when showing products.

Do not invent unsupported narrative or facts. If a brief does not support a claim, either omit the claim or ask for clarification.

## Language Policy

- Agent replies to the user should be in Chinese (Mandarin).
- The rendered slide deck should be in English.
- Briefs under `docs/` are mostly Chinese. Translate their intent faithfully into English slide copy.
- Speaker-facing slide text, component labels, page headings, and UI strings in the deck should remain English unless the user explicitly requests otherwise.

## Tech Stack

- Slidev v52
- Vue 3 components and custom layouts
- pnpm as the only supported package manager
- Static SPA output for Netlify and Vercel

Use `pnpm`, not `npm` or `yarn`.

Common commands:

```bash
pnpm install
pnpm dev
pnpm build
pnpm export
```

`pnpm dev` starts Slidev on the project dev server, normally `http://localhost:3030`.

## Slidev Workflow

1. Read the matching `docs/NN-*.md` brief first.
2. Use the brief's Slide Goal, Recommended Slidev Layout, Copy Prompt, Speaker Notes, and Fact Anchors as the spec.
3. Edit the matching file in `pages/`, or `slides.md` for deck-level structure and the cover.
4. Use existing Vue components in `components/` before adding new components.
5. Use existing layouts in `layouts/` and Slidev built-ins before custom CSS.
6. Run `pnpm build` for structural verification when practical.
7. For visual work, run `pnpm dev` and inspect the rendered deck.

When changing Slidev syntax, animation behavior, slots, imported slides, code snippets, diagrams, or export behavior, consult the local Slidev skill references under `.agents/skills/slidev/` instead of guessing.

## Visual Rules

The deck is JetBrains-branded and should match the Rider / dotUltimate reference style:

- Near-black canvas, not a generic gradient deck.
- Chapter-colored mandala motif bleeding off the slide edge.
- Bold white typography.
- Rider-red (`#FF0A67`) underlined kickers.
- Magenta Tip chips, Qodana-green status chips, and yellow inline highlighter.
- Rider icon plus "JETBRAINS IDE" corner badge on content slides.
- Quiet italic-serif page number at bottom-right.

Chapter mandala colors:

- Violet / magenta for Unreal, engine, and C++ topics.
- Cyan / teal for Unity and tooling topics.
- Amber / gold for AI, Junie, and agent topics.
- Qodana green for QA and quality-gate topics.

Avoid:

- Generic Slidev default styling.
- Decorative gradient text in body copy.
- New palettes that compete with the JetBrains assets.
- Extra card-heavy layouts when content can sit directly on the canvas.
- Product names rendered only as text when a relevant logo or icon exists.

## Architecture Notes

- Vue components in `components/` are auto-imported by Slidev.
- Custom layouts live in `layouts/`.
- Global theme code lives in `styles/`.
- External snippets live in `snippets/` and can be embedded with Slidev import syntax.
- Static deployment configuration is in `netlify.toml` and `vercel.json`.

Keep edits scoped. Prefer extending the existing component and style vocabulary over adding one-off classes.

## Agent Operating Guidelines

- Respect existing uncommitted user changes. Do not revert unrelated edits.
- Use `rg` / `rg --files` for project searches.
- Use `apply_patch` for manual file edits.
- Keep generated content grounded in the briefs and source references.
- Prefer small, reviewable changes.
- Verify with `pnpm build` or the most relevant narrower check when the change affects rendered slides, components, layouts, or CSS.
- If starting a web preview, start the dev server first and provide the localhost URL.

## Content Quality Bar

For every slide edit, check:

- Does the slide answer the brief's Slide Goal?
- Is the claim supported by the brief or `docs/99-SOURCES.md`?
- Is the slide copy concise enough for a live deck?
- Does it speak to the intended role or business decision?
- Does it use the JetBrains visual system rather than a generic SaaS or startup-deck style?
- Are product logos, chips, kicker, mandala tint, corner badge, and page number consistent with surrounding slides?

