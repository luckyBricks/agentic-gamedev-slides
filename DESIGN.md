# Design System — JetBrains .NET / GameDev

This deck is a **JetBrains-branded** artefact. Its visual system must read immediately as "JetBrains" to anyone who has seen a Rider splash screen, a Junie demo, or a dotUltimate product page. Not a generic dark deck, not a Slidev default, not a startup pitch template.

Authoritative references:

- **Visual ground truth** — [`temp/Rider 功能速览 2026.1 Promo (1).pdf`](./temp) is the canonical JetBrains reference deck this system targets. When in doubt, match that artefact: canvas, mandala placement, type weight, chip styling, corner badging, page-number treatment.
- **Logos & product marks** — [`docs/brand-assets/`](./docs/brand-assets) (Rider, Junie, Qodana, ReSharper, TeamCity, AI, dotCover/Memory/Peek/Trace, Toolbox, JetBrains wordmark). All color values below are lifted from those SVGs or from the reference PDF.
- **Runtime implementation** — [`styles/rider-theme.css`](./styles/rider-theme.css).

## 1. Visual Theme & Atmosphere

JetBrains' 2026 marketing surfaces center on one signature device: **a luminous, geometric "mandala" — a dense circular spirograph of concentric arcs, bleeding off one side of the canvas against a near-black background**. It reads simultaneously as a torus, a wireframe sphere, and an IDE ornament. Every slide in the reference deck carries that mandala; every chapter changes its **color temperature**. That single motif does all the atmospheric work.

The deck adopts that language directly. The canvas is **near-black** (`#050510`), not plum or indigo — the mandala provides the color; the canvas must not compete with it. Typography is **white on black, confident and bold**, with brand voice surfacing through three very specific primitives: a **red-pink underline kicker** for section labels, a **solid magenta Tip chip**, and a **yellow highlighter strip** for inline emphasis. Gradient text is used sparingly — at most on the cover and on act-opener headings — never under body copy.

**Key Characteristics:**
- Near-black canvas (`#050510`) — flat, not gradient-washed. The mandala supplies all ambient color.
- **Mandala motif**: a dense concentric-arc spirograph, positioned 55–75% off the right edge, bleeding roughly one-third into the canvas. Chapter-tinted.
- JetBrains palette survives — cyan → violet → magenta → pink → amber — but is delivered through the **mandala color**, **chip fills**, and **underline accents**, not through washed gradient text.
- Sharp-cornered tiles, 12–14px radius. Rounded consumer radii (20–40px) actively misrepresent the brand.
- Inter sans for display/body; **JetBrains Mono** reserved for code, kickers, bracket marks, KBD hints, numeric metric values.
- **Corner badge**: Rider `_icon.svg` + "JETBRAINS IDE" lockup at top-right of every content slide. Consistent across the deck — not a chapter badge.
- **Italic serif page number** (small, quiet, bottom-right). The only serif in the deck — a deliberate editorial touch that separates the page chrome from the content.

## 2. Color Palette & Roles

### Primary Brand Palette — "Rider Spectrum"

Sourced from [`docs/brand-assets/Rider/Rider_icon.svg`](./docs/brand-assets/Rider/Rider_icon.svg) and [`docs/brand-assets/Junie/Junie.svg`](./docs/brand-assets/Junie/Junie.svg).

| Token | Hex | Source | Deck role |
|---|---|---|---|
| `--rider-blue` | `#007DFE` | Rider logo stop 1 | Cool anchor, logo proof |
| `--rider-amber` | `#FFB700` | Rider logo stop 2 | Warm mid (authoritative Rider yellow) |
| `--rider-red` | `#FF0A67` | Rider logo stop 3 | **Underline kicker color** — the single most load-bearing accent in the deck |
| `--junie-violet` | `#7256FF` | Junie logo stop 1 | Agent / plan tone |
| `--junie-pink` | `#FF2D90` | Junie logo stop 2 | Tip chip fill; agent action tone |
| `--junie-orange` | `#FF8200` | Junie logo stop 3 | Agent heat |
| `--ai-orange` | `#FF9419` | AI wordmark stop 1 | AI-chapter mandala warm end |
| `--ai-red` | `#FF021D` | AI wordmark stop 2 | AI-chapter mandala hot anchor |
| `--ai-magenta` | `#E600FF` | AI wordmark stop 3 | AI semantic |
| `--qodana-green` | `#48E054` | Qodana mark | **Beta chip fill** / "passed" status |
| `--jb-violet` | `#955AE0` | JetBrains wordmark stop 1 | Umbrella brand tone |
| `--jb-blue` | `#4D67F0` | JetBrains wordmark stop 2 | Umbrella brand tone |

### Deck Working Palette (maps to `styles/rider-theme.css`)

| Token | Hex | Role |
|---|---|---|
| `--rider-bg` | `#050510` | Canvas base (near-black, flat) |
| `--rider-bg-2` | `#0b0616` | Deep-panel variant, used rarely (inside hero mockups) |
| `--rider-ink` | `#ffffff` | Primary text on canvas — pure white, no plum tint |
| `--rider-ink-dim` | `rgba(255,255,255,0.72)` | Secondary body |
| `--rider-ink-muted` | `rgba(255,255,255,0.5)` | Captions, footer |
| `--rider-indigo` | `#6c3bff` | Cool action |
| `--rider-violet` | `#9a4bff` | Engine-chapter mandala cool stop |
| `--rider-magenta` | `#e73cff` | Engine-chapter mandala hot stop |
| `--rider-pink` | `#ff3aa8` | Accent heat |
| `--rider-orange` | `#ff7a3c` | Heat mid |
| `--rider-amber` | `#ffb547` | AI-chapter mandala warm end |
| `--rider-cyan` | `#3ad9ff` | Unity-chapter mandala cool end |
| `--rider-teal` | `#22b8c0` | Unity-chapter mandala mid |
| `--rider-highlight` | `#FFE55E` | Yellow inline highlighter fill |

### Chapter Color System — the mandala IS the chapter marker

Instead of per-slide chapter badges, the deck signals the current act by **retinting the mandala**. The chip, underline, and corner-badge colors follow the mandala.

| Act / Chapter | Mandala palette | Kicker underline | Notes |
|---|---|---|---|
| Cover / Closing | Violet→magenta (`#7256FF → #e73cff → #ff3aa8`) | Rider red `#FF0A67` | Widest spectrum, used for openings |
| Game engines / Unreal / C++ | **Violet/magenta** (`#6c3bff → #9a4bff → #e73cff`) | Rider red `#FF0A67` | Engine power, Rider core |
| Unity / .NET tooling | **Cyan/teal** (`#3ad9ff → #22b8c0 → #2d6ef0`) | Rider red `#FF0A67` | Unity-voice chapters |
| AI / Junie / Agents | **Amber/gold** (`#FFB700 → #FF9419 → #FF0A67`) | Rider red `#FF0A67` | Warm — the "frontier" act |
| Quality / Qodana / QA | Qodana green (`#48E054 → #22b8c0`) | Rider red `#FF0A67` | Used sparingly; green is strong |

The **kicker underline color stays constant** (Rider red `#FF0A67`) across all chapters — it is the deck's global "section label" color, independent of chapter tint.

### Semantic Accents

| Role | Token | Use |
|---|---|---|
| Human workspace | `--rider-indigo` / `--rider-violet` | Humans, personal IDE, dotUltimate tones |
| Agent runtime | `--rider-magenta` / `--junie-pink` | Junie, MCP, ACP, agent execution |
| Quality & delivery | `--rider-orange` / `--rider-amber` | Qodana, TeamCity, gates |
| Insight / data | `--rider-cyan` | Flow analysis, profiling, inspection surfaces |
| Passed quality gate | `--qodana-green` (`#48E054`) | Beta chip; explicit "green" status moments |

### Do not introduce
- Safe corporate blues (`#1f6feb`, `#0866ff`) — they read as GitHub or Facebook, not JetBrains.
- Plum/indigo tinted canvases — the reference deck is flat near-black. A plum canvas competes with the mandala for color authority.
- A second teal/seafoam — `#3ad9ff` and `#22b8c0` already span the Unity cool register.
- Red-only error tones — the pink handles heat; a separate `#ff0000` clashes.
- White-on-white page chrome — the footer page number must be muted italic serif at ~50% white.

## 3. Typography Rules

### Font Family

- **Sans (display + body):** `Inter`, fallback `-apple-system, system-ui, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Helvetica, Arial`.
- **Mono (signature):** `"JetBrains Mono"`, fallback `"Fira Code", Consolas, "Liberation Mono", monospace`. This is **not** optional — JetBrains Mono is a brand-owned typeface and its presence is part of the identity.
- **Serif (single duty only):** a minimal italic serif (e.g. Crimson Pro, Lora, or system Georgia) is reserved for the **bottom-right page number** and nothing else. It is an editorial touch that separates the page chrome from the content.
- Loaded via Slidev's `fonts:` headmatter (Google Fonts).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|---|---|---|---|---|---|---|
| Cover hero | Inter | 72–84px | 800 | 1.02 | −0.02em | Pure white; no gradient fill. Reference PDF cover is plain white. |
| Cover subtitle | Inter | 18–20px | 400 | 1.35 | normal | Muted white (72%), italic optional |
| Slide H1 | Inter | 40–48px | 800 | 1.08 | −0.015em | Pure white; no gradient. One word may carry inline color (e.g. a Beta chip appended). |
| Kicker / section label | Inter | 16–20px | 700 | 1.15 | normal | **Underlined in `--rider-red` (`#FF0A67`)**. This is the primary section signal. |
| Body | Inter | 15–17px | 400 | 1.45 | normal | White / `--rider-ink` |
| Body strong | Inter | 15–17px | 700 | 1.45 | normal | For key phrases inside a paragraph |
| Tip chip | Inter | 12–13px | 700 | 1.0 | normal | White on `--junie-pink` solid fill |
| Beta chip | Inter | 12–13px | 700 | 1.0 | normal | Black on `--qodana-green` solid fill |
| Caption / footer | Inter | 11–12px | 500 | 1.0 | 0.18–0.3em UPPER | Muted 50% white |
| Page number | **Italic serif** | 14–16px | 400 italic | 1.0 | normal | 50% white, bottom-right |
| Code / literal | **JetBrains Mono** | 12–14px | 400 | 1.5 | normal | Inline and in mockups |

### Principles

- **White-first typography.** The reference deck relies on bold white text for nearly all copy. Gradient fills are rare — reserved for the cover and, at most, one act-opener. On content slides, color lives in the **kicker underline, the chip, the highlighter, and the mandala** — not in the letterforms of the body.
- **Underlined red-pink kicker = the JetBrains section label.** Do not substitute tracked uppercase kickers for this when marking a sub-section on a slide. The red underline is unmistakable and replaces a heading hierarchy one level below H1.
- **UPPER + wide tracking is reserved for footer chrome and card labels** — not section labels. The reference deck's section labels are sentence-case, bold, underlined.
- **JetBrains Mono earns its space.** Reserve it for: (a) code inside mockups, (b) `.rider-kbd` key hints, (c) numeric metric values in KPI cards, (d) short technical literals inline. Do not use it for running body.
- **Italic serif is a one-shot tool.** Page number only. A second serif appearance dilutes the editorial signal.
- **No ultra-light weights.** Lightest weight is 400. JetBrains product UI always feels substantial; 300 and below read as Apple-like.
- **Cover title may be very large** (72–84px). The reference cover uses an extra-bold, tight H1 that dominates the left half of the canvas; match that scale on the cover specifically.

## 4. Component Stylings

All component primitives are defined in [`styles/rider-theme.css`](./styles/rider-theme.css) and used across `components/*.vue`. The component set below is the **minimum** — only add more primitives when the reference deck clearly uses a pattern that cannot be expressed with these.

### Mandala — `.rider-mandala`

**The deck's central brand device.** A dense concentric-arc spirograph (torus/sphere-like), absolutely positioned bleeding off the right 55–75% of the slide. Delivered as an SVG asset so its chapter color can be recolored via a CSS variable (`--mandala-color`).

- Size: ~110–130vh diameter, positioned `top: 50%; right: -30%; transform: translateY(-50%)`.
- Color: set per-chapter via `--mandala-color` (see Chapter Color System).
- Opacity: 0.75–0.95 depending on the slide's information density — lower opacity when a dense mockup sits on top; full opacity on divider/act slides.
- Do not blur it. The mandala's value is its sharpness — a blurred version reads as a generic glow and loses the brand signature. If contrast against a screenshot becomes an issue, lower opacity, do not blur.
- One mandala per slide. Never stack two.

### Corner Badge — `.rider-corner-badge`

Rider `_icon.svg` + the words "JETBRAINS IDE" in small tracked uppercase, pinned to `top-right`. Consistent on **every content slide** (cover is the sole exception — it additionally shows the JetBrains umbrella wordmark top-left).

- Icon: 36–40px square.
- Label: Inter 11px, 700, 0.12em tracking, uppercase, white.
- 16px padding from the slide edges.

### Kicker — `.rider-kicker`

The deck's primary section label. Inter 16–20px bold white, with a **2px solid Rider-red (`#FF0A67`) underline** running the full text width plus ~4px tail. Text-underline-offset ~6px so the underline sits below the baseline, not on it.

- Do not stack two kickers in the same column.
- Do not apply to paragraphs — it is a single-line label only.
- When the label contains a product name, use the SVG logo inline instead: `<img src="/docs/brand-assets/Rider/Rider.svg" class="h-5 inline" />`.

### Tip Chip — `.rider-chip--tip`

A small pill labelled "Tip:", in white 12–13px bold, on solid `--junie-pink` (`#FF2D90`). Appears inline at the start of a paragraph of actionable advice. 4–6px radius (chip is narrow, near-rectangular).

- Padding: 2px 6px.
- The Tip label is **separate from its body copy** — a solid pink "Tip:" block, then a space, then the advice in normal body text.
- Never use the Tip chip to carry the advice itself — only the label.

### Beta / Status Chip — `.rider-chip--status`

Same geometry as Tip chip, but solid `--qodana-green` (`#48E054`) fill, black text. Labels: `Beta`, `New`, `Preview`, etc. Pairs with a feature name in a H1 or kicker.

- When placed next to an H1, size up to match the H1's x-height — keep the chip visually anchored to the text, not floating.

### Highlighter — `.rider-highlight`

A yellow marker-style highlight (`#FFE55E` background, ~0.9 opacity, 2–4px padding) applied inline to a short phrase (2–6 words). Used **≤ 2 times per slide**. Purpose: draw the eye to the single most important technical term in the copy.

- Do not apply to headings — headings are already emphasis.
- Do not apply to punctuation-heavy code literals — the highlight will clash with inline-code rendering.

### Cards — `.rider-card` (de-emphasized)

The reference deck **rarely uses card surfaces**. Most content sits directly on the black canvas with the mandala as ambient visual. A card is used only when:

- Multiple small items need to be grouped (KPI cluster, metric trio).
- A dense summary table (like page 13's "Key Features / Highlights") needs panel separation — in that case, pastel-toned colored panels (like the reference page 13's teal/peach panel headers) are acceptable, against the black canvas.

When a card is warranted, use a glass surface (`rgba(255,255,255,0.04)`) with 1px neutral border, 14px radius, no drop shadow. The old violet-tinted drop shadow is deprecated — the mandala provides ambient depth.

### Accent Card — `.rider-card--accent` (rare)

A `.rider-card` with a 1px gradient border drawn via `mask-composite`. Reserve for:

- The cover's single "thesis" card, when one is present.
- Section-divider/act-opener moments.

Never on content slides that already have a mandala and a kicker — the accent card adds a third signal and overloads the slide.

### Pipeline Nodes — `.rider-pipeline__node`

Horizontal N-column grid with tinted fill matching the current chapter color (not always violet). The **gate** variant swaps to Rider-red for the critical-risk step. Used in `QualityGate` and any "stage → stage → stage" workflow.

### Keyboard Hints — `.rider-kbd`

JetBrains Mono, 0.78rem, 1px white border at 12% opacity, 6px radius. Used only on demo pages.

### Scanline / Grid Lines — Deprecated for content slides

Canvas scanlines and the 48×48 grid overlay are removed from the default canvas. The mandala carries the texture load. Grid lines may still be used **inside** hero mockups (e.g. the IDE chrome inside `HeroVisual`), but not behind the slide body.

### Footer Bracket — deprecated

The `[ JetBrains Rider / Agentic GameDev ]` bracket footer is dropped. It is replaced by (a) the top-right corner badge and (b) the italic-serif page number bottom-right. The reference deck has no tracked bracket footer, and keeping one makes the deck feel pre-2026.

## 5. Layout Principles

### Canvas

- Aspect: 16:9. Canvas width: 1280px (locked via `canvasWidth: 1280` in slides.md headmatter).
- Canvas fill: flat `--rider-bg` (`#050510`). The mandala overlays it as an absolutely-positioned SVG. Never override the canvas per slide.

### Grid

- 12-column base. Typical content split: **5/7** (text left, mockup-over-mandala right) — this matches virtually every content slide in the reference PDF.
- When a slide has no screenshot, the mandala alone occupies cols 7–12 and text takes cols 1–6.
- Wide editorial layouts (cover, act opener, closing): single column, mandala positioned to bleed off one edge.

### Spacing

- Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- Slide padding: 48–64px horizontal, 40–56px vertical.
- Intra-text vertical rhythm: H1 → kicker = 24px; kicker → body = 16px; paragraph gap = 12–16px.
- Bullet items: 12px between items; 8px between bullet glyph and text.

### Radius Scale

- Chip / pill: 4–6px (nearly rectangular — match the reference, not rounded pills).
- Card: 14px.
- Mockup inner chrome: 10–12px (matches IDE window rendering).
- Never exceed 16px on rectangular surfaces. The deck is square-biased.

### Corner Badge & Page Number

Every content slide carries:

- **Top-right**: `<CornerBadge />` — Rider icon + "JETBRAINS IDE" lockup.
- **Bottom-right**: `<PageNumber />` — italic serif page index, e.g. `1`, `2`, ... Small, quiet, right-aligned against the 48px margin.

Cover adds the JetBrains umbrella wordmark top-left; otherwise top-left is free for H1.

### Whitespace Philosophy

The reference deck is denser than a marketing landing page but **lighter than the previous version of this deck**. Left-side content columns breathe more: a kicker, 3 bullets, one Tip chip, plenty of air. The mandala fills the right side so the left does not need to be packed. Resist filling empty canvas — that empty space carries the mandala's color, which is the slide's atmospheric work.

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Canvas | Flat `#050510` | Base |
| 1 — Mandala | Absolutely-positioned recoloured SVG | Ambient chapter color, bleeds off one edge |
| 2 — Content text | White, no background | Kicker + bullets + tip line |
| 3 — Mockup / screenshot | Drops on top of mandala, 10–12px radius | The hero visual — IDE chrome, metric tile, etc. |
| 4 — Chips | Solid-fill over content | Tip, Beta, New — the deck's small accents |

### Shadow philosophy

JetBrains product surfaces are **flat + luminous**, not skeuomorphic. The reference deck has essentially no traditional drop shadows; depth comes from:

1. The mandala's own gradient vs the flat canvas.
2. Screenshots landing on top of the mandala (their hard-edged IDE chrome provides depth contrast against the soft mandala).
3. Solid-filled chips that pop forward because of color contrast, not shadow.

Never use a soft-gray drop shadow. If a card must lift, put it over a denser mandala region.

## 7. Do's and Don'ts

### Do
- **Place the mandala on every content slide.** Pick the chapter color. Bleed it off the right edge. Do not blur it.
- **Use the Rider-red underline kicker** as the primary section label on content slides — it is the deck's most load-bearing small primitive.
- **Pin every product reference to its authoritative color** from `docs/brand-assets/` and replace text with SVG logo inline where possible.
- **Keep the top-right corner badge consistent** on every content slide. It is the constant thread, not a chapter badge.
- **Use italic serif for the page number** — it is the one allowed serif moment.
- **Reserve gradient text** for the cover and at most one act opener.
- **Use the Tip chip and Beta chip** in their exact brand colors — magenta and Qodana green — and keep them small and inline.
- **Use the yellow highlighter** ≤ 2× per slide, on technical terms only.
- **Keep cards at 14px radius.** Square geometry is the JetBrains tell.

### Don't
- **Don't wash body text in a gradient fill.** The reference deck uses bold white text. A gradient heading over gradient body destroys both.
- **Don't rely on grid lines or scanlines** on content slides. The mandala is the texture.
- **Don't use a tracked-uppercase chapter kicker** in place of the red-underline kicker — the former is for footer/card labels only.
- **Don't use plum or indigo canvases.** The reference canvas is near-black; a tinted canvas muddies the mandala.
- **Don't introduce a `[ … ]` bracket footer.** That pattern is deprecated in favor of corner badge + serif page number.
- **Don't blur the mandala.** Sharpness is its signature.
- **Don't introduce a second serif typeface.** The italic-serif page number is the only serif appearance.
- **Don't stack two chips of the same type on one slide.** A Tip chip and a Beta chip can coexist, but two Tips implies the single-paragraph-of-advice rule is being violated.
- **Don't soften corners to 20–40px.** Consumer radii misrepresent the brand.

## 8. Responsive Behavior

The deck is authored for a fixed 1280×720 canvas (Slidev scales it). Responsive considerations apply to **export targets**, not device widths:

| Target | Behavior |
|---|---|
| Slidev dev / present (1920×1080, 2560×1440) | Canvas letterboxes; the black canvas extends naturally. Mandala stays pinned to the 1280×720 virtual frame — do not scale it independently. |
| PDF export | SVG mandala exports cleanly; verify `pnpm export` preserves chapter color at full fidelity. |
| PPTX export | Mandala SVG embeds as a single vector; chips flatten to their fill color (acceptable). |
| PNG thumbnail | Text should be legible at 640×360 — keep H1 ≥ 40px, body ≥ 15px, page number ≥ 12px. |

When a component must react to narrower widths (rare — printed handout only), collapse the 5/7 split into stacked blocks and reduce the mandala to a 40% decorative strip at the top.

## 9. Agent Prompt Guide

### Quick Color Reference

- Canvas: `#050510` (flat near-black)
- Text: white primary / 72% / 50%
- Kicker underline: `--rider-red` (`#FF0A67`)
- Tip chip: `--junie-pink` (`#FF2D90`) with white text
- Beta chip: `--qodana-green` (`#48E054`) with black text
- Highlighter: `#FFE55E`
- Mandala (engine chapter): violet `#6c3bff → #9a4bff → #e73cff`
- Mandala (Unity chapter): cyan `#3ad9ff → #22b8c0 → #2d6ef0`
- Mandala (AI chapter): amber `#FFB700 → #FF9419 → #FF0A67`
- Mandala (Qodana chapter): green `#48E054 → #22b8c0`
- Authoritative anchors: Rider `#007DFE / #FFB700 / #FF0A67` · Junie `#7256FF / #FF2D90 / #FF8200` · Qodana `#48E054`

### Example Component Prompts

- *"Build a content slide: 5/7 layout. Left — H1 40px white bold, kicker 18px white bold underlined in `--rider-red`, 3 bullets with `❏` glyph, one `<TipChip>…</TipChip>`. Right — `<Mandala color='violet' />` absolute-positioned, a screenshot card at 12px radius floating over cols 7–12."*
- *"Compose a cover slide: JetBrains umbrella wordmark top-left, `<CornerBadge />` top-right. H1 in two lines, 80px white extra-bold, subtitle 20px white 72% italic. `<Mandala color='violet' />` bleeding off the right edge, no screenshot over it. Date bottom-right in italic serif."*
- *"Add a Beta chip next to an H1: `<StatusChip label='Beta' />` inline, solid `--qodana-green`, black text, 6px radius."*
- *"Highlight a term: wrap `ShaderLab source` in `<Highlight>` — yellow `#FFE55E` background, 2px padding, inline."*
- *"Whenever the slide mentions 'Rider', replace the word with `<img src='/docs/brand-assets/Rider/Rider_icon.svg' class='h-8 inline' />`; reserve `Rider.svg` wordmark for headings and `<CornerBadge />` lockups."*

### Iteration Guide

1. **Open the reference PDF** ([`temp/Rider 功能速览 2026.1 Promo (1).pdf`](./temp)) alongside the brief. Match the layout of whichever reference page most closely mirrors the slide's content type (cover, TOC, content-with-screenshot, spec table, closing).
2. **Start from a brief.** Every slide maps to a `docs/NN-*.md` file. Copy the 可直接改写的 Slidev 草图, translate to English, drop it in `slides.md`.
3. **Set the chapter color first.** Before touching copy, pick the mandala color from the Chapter Color System. That choice implies the chip tint and card highlights for the rest of the slide.
4. **Impose the type system.** H1 white bold, kicker with red underline, `<CornerBadge />` top-right, `<PageNumber />` bottom-right — now the slide already looks JetBrains, before any hero visual lands.
5. **Place the mandala and one hero visual.** Mandala bleeds off the right; screenshot/mockup card sits over it. Text column takes cols 1–5.
6. **Insert brand logos.** Any product name → SVG from `docs/brand-assets/`. `_icon.svg` inline with text, `-white.svg` full wordmark only on section dividers.
7. **Run `pnpm dev`** and cross-check against the reference PDF page of the same type. Verify: mandala color matches chapter, kicker underline is Rider-red, corner badge is present, serif page number visible, no gradient washing body text.
