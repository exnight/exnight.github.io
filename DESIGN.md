---
name: 'Open Field Folio'
description: 'A full-viewport living index on warm paper, connecting dependable systems to chronological writing.'
colors:
  warm-paper: '#f6f2e7'
  raised-paper: '#fcfaf2'
  sage-paper: '#dfe3d8'
  green-black-folio: '#1a2a23'
  folio-ivory: '#f8f3e6'
  editorial-ink: '#17211d'
  softened-ink: '#34423b'
  muted-sage-copy: '#637169'
  structural-rule: '#98a198'
  soft-rule: '#c4c9c1'
  vermilion: '#a94331'
  field-sage: '#819184'
  muted-brass: '#c8a748'
  focus-vermilion: '#b34734'
  shadow-ink: 'rgb(13 23 17 / 0.14)'
  dark-paper: '#181817'
  dark-raised-paper: '#232321'
  dark-secondary-paper: '#2b2b27'
  dark-deepest-surface: '#10100f'
  dark-folio-ivory: '#f3eee3'
  dark-editorial-ink: '#eee9de'
  dark-softened-ink: '#d5d0c7'
  dark-muted-copy: '#aaa69d'
  dark-structural-rule: '#6b6962'
  dark-soft-rule: '#3e3d39'
  dark-vermilion: '#ea8069'
  dark-sage-accent: '#9eaa9f'
  dark-muted-brass: '#d4b75f'
  dark-focus-vermilion: '#ef8a72'
  dark-shadow-ink: 'rgb(0 0 0 / 0.3)'
typography:
  display:
    fontFamily: "'Source Serif 4 Variable', ui-serif, Georgia, serif"
    fontSize: 'clamp(3.5rem, 7vw, 6rem)'
    fontWeight: 510
    lineHeight: 0.96
    letterSpacing: '-0.035em'
    fontVariation: "'wght' 510"
  headline:
    fontFamily: "'Source Serif 4 Variable', ui-serif, Georgia, serif"
    fontSize: 'clamp(3.2rem, 4.7vw, 4.6rem)'
    fontWeight: 510
    lineHeight: 1
    letterSpacing: '-0.035em'
    fontVariation: "'wght' 510"
  title:
    fontFamily: "'Source Serif 4 Variable', ui-serif, Georgia, serif"
    fontSize: 'clamp(1.55rem, 2.6vw, 2.35rem)'
    fontWeight: 560
    lineHeight: 1.08
    letterSpacing: '-0.022em'
    fontVariation: "'wght' 560"
  body:
    fontFamily: "'Lato', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 'normal'
  label:
    fontFamily: "'Lato', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.72rem'
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: '0.14em'
rounded:
  compact-control: '7px'
  bounded-panel: '11px'
  capsule-control: '1.2rem'
spacing:
  compact: '0.75rem'
  standard: '1rem'
  roomy: '1.5rem'
  section: '2rem'
components:
  header-navigation:
    backgroundColor: '{colors.warm-paper}'
    textColor: '{colors.editorial-ink}'
    height: '68px'
    padding: '0'
  homepage-introduction:
    backgroundColor: '{colors.warm-paper}'
    textColor: '{colors.editorial-ink}'
    typography: '{typography.headline}'
    padding: 'clamp(3.25rem, 5vw, 5rem) 0 clamp(0.75rem, 1.5vw, 1.5rem)'
  theme-toggle:
    backgroundColor: '{colors.raised-paper}'
    textColor: '{colors.editorial-ink}'
    rounded: '{rounded.capsule-control}'
    width: '3.8rem'
    height: '2.35rem'
  annotation-thread:
    backgroundColor: '{colors.warm-paper}'
    textColor: '{colors.editorial-ink}'
    width: '100%'
    height: 'clamp(3.5rem, 4.5vw, 4.5rem)'
  chronological-row:
    backgroundColor: '{colors.warm-paper}'
    textColor: '{colors.editorial-ink}'
    typography: '{typography.title}'
    padding: '1.6rem 0 1.6rem clamp(1.4rem, 3vw, 3rem)'
  writing-index-continuation:
    backgroundColor: '{colors.warm-paper}'
    textColor: '{colors.editorial-ink}'
    padding: '0.75rem 0.25rem'
    width: 'clamp(18rem, 25%, 22rem)'
    desktopMarginInlineEnd: 'clamp(1.2rem, 1.8vw, 1.8rem)'
  table-of-contents:
    backgroundColor: '{colors.raised-paper}'
    textColor: '{colors.editorial-ink}'
    rounded: '{rounded.bounded-panel}'
    padding: '1.25rem'
  article-prose:
    textColor: '{colors.softened-ink}'
    typography: '{typography.body}'
    width: '72ch'
---


> **Status — two systems are documented here.**
> **Drafting Notebook** (next section) is the **approved target direction**. It exists as a prototype only and is **not yet implemented**.
> **Open Field Folio** (further below), together with the YAML front matter above, describes the **live site** and stays authoritative for production code until the migration is requested and completed.

# Approved Target Direction — Drafting Notebook (not yet implemented)

## Status and Prototype References

- **Decision:** Drafting Notebook chosen over Folio Editorial after prototype review. It keeps two elements from Folio Editorial: the post heading layout (no box, on the reading column) and the homepage tag line.
- **Approved prototype:** Finalist 1 v2: `src/prototypes/finalists/notebook-v2/`. Read its `README.md` for changes, measurements and remaining issues.
  - Home: `/prototypes/notebook-v2/`
  - Post with lists and tables: `/prototypes/notebook-v2/blog/2026/flight-ticket-redemption`
  - Post with code, maths and images (review fixture, same wording as the published post): `/prototypes/notebook-v2/blog/review-fixture/how-i-build-the-site`
  - Screenshots: `src/prototypes/finalists/notebook-v2/screenshots/` (1440×900 and 390×844, viewport + full page + details).
- **Earlier references (preserved):**
  - `finalists/notebook/` (v1)
  - `finalists/editorial/` (Folio Editorial, source of the borrowed elements)
  - `workbook/` (original D)
  - originals A–F at `/prototypes`
- **Preview:** prototype routes exist only in `npm run dev` or a `PROTOTYPES=1` build. Production builds contain no prototype code.

## Design Read

- **Positioning:** an engineer's drafting notebook. Precise drawing conventions (numbered circles, figure numbers, a sheet index, hairlines) with a light pen-and-highlighter layer. Character: "engineering, but also a little sketchy".
- **Mode:** light-first (most readers use light mode). A dark theme is still to be designed.
- **Dials:** visual variance 5, motion 3, information density 5, asset dependence 2 (works without photos), brand fidelity: the LW mark (`NavIcon`) and the blue `#33507e` are fixed.

## Colors

| Role | Value | Use |
| --- | --- | --- |
| Paper | `#f2f1ec` | Page background, with a dot grid: `rgb(29 31 34 / 0.09)` dots every 24px |
| Raised paper | `#fbfaf6` | Cards, TL;DR card, code blocks, mobile contents panel |
| Tint | `#ebeae3` | Inline code background |
| Ink | `#1d1f22` | Headings, primary text |
| Soft ink | `#2d3035` | Article body text |
| Muted | `#5c5f64` | Details lines, captions, secondary labels |
| Hairline / strong hairline | `rgb(29 31 34 / 0.12)` / `0.22` | Row lines, container borders, header and footer rules |
| Pen (accent) | `#33507e` | Links, current state, sketch marks, numbered circles, focus ring |
| Highlighter | `#f1d24a` | **Small, occasional use only:** one highlight in the hero statement, bold text, the TL;DR tape, text selection |

**The One-Pen Rule.** Blue is the only accent colour. Yellow appears only as a highlighter in small amounts. No other hues.

## Typography

- **Headings and interface:** Bricolage Grotesque Variable at 90–92% width, weights 550–650, tight tracking.
  - Hero statement: `clamp(2.7rem, 5.6vw, 5.2rem)` / 650 / line height 1.
  - Post title: `clamp(2.5rem, 5.4vw, 4.6rem)` / 650, max 22ch.
  - H2: `clamp(1.55rem, 2.3vw, 1.95rem)` / 620.
  - H3: 1.3rem / 600.
- **Reading text:** Source Serif 4 Variable with optical sizing and real italic. 19px / 1.7 on desktop, 17px on mobile. Summaries (decks) and captions use the italic.
- **Labels, details lines and code:** IBM Plex Mono, about 0.64–0.8rem. Details lines are uppercase with 0.06em letter-spacing.
- **No handwriting fonts.** The sketchiness comes only from drawn marks.

## Layout and Measures

- **Frame:** `min(1240px, 100% − 2 × clamp(1.125rem, 4vw, 3rem))`.
- **Post grid:** `13rem` contents | `minmax(0, 42rem)` text | `minmax(0, 1fr)` room for wide content, gap `clamp(2rem, 4vw, 4rem)`.
- **The Two-Edges Rule.** A post page has exactly two right-hand edges:
  - **Text edge (42rem, full lines about 72–76 characters):** text, captions, and tables that fit.
  - **Wide edge (the page's right edge, lined up with the nav):** wide figures, and tables whose natural width is wider than the text. Tables snap to one edge or the other, never in between (a small script measures them; without JavaScript they stay at the text edge and scroll).
- **Post heading:** sits over the text column with no box. Order: breadcrumb, details line (entry # · tags · date · read time · updated), title, italic summary. The contents list starts next to the first section.
- **Homepage:** 12 columns. Statement in columns 1–8 and paragraph in columns 1–7 (max 64ch); the system diagram sits in columns 9–12. Below that, "Recent writing" shows recent posts only.
- **Breakpoints:**
  - **1000px:** post becomes one column and the contents list collapses into a panel.
  - **900px:** hero stacks and the diagram moves below the paragraph.
  - **720px:** mobile type and list layouts.

## Shapes, Lines and Elevation

- **The Fewer-Boxes Rule.** Use whitespace and hairlines first. Boxes are kept only for real objects: system cards, the TL;DR card, code blocks, figures, and the mobile contents panel.
- **Corner radii:** 8 / 14 / 18px. Circles are kept for numbered circles and the logo node.
- **Rules:** one hairline under the header and over the footer. One rule under table headers, with faint row lines below. No dividers between posts and no double rules.
- **Elevation:** none (no shadows).

## Sketch Layer

- Pen marks are precise SVG paths roughened by an SVG displacement filter (`feTurbulence` + `feDisplacementMap`, scale about 2.4).
- **The Two-Marks Rule.** At most two decorative marks per view: in the hero, an underline under "build software" and a highlight on "notes". Interaction marks are extra: a circle around the current nav item and an arrow that draws itself when hovering over a post.
- **Connector lines:** draw them as gradients inside boxes wider than the line, so the filter never clips them. The diagram's spine is one continuous element, so there are no kinks at joints.

## Components

- **Header:** LW mark in pen blue, name, mono role. Nav: Home, Writing, with a sketched circle around the current item. One hairline below.
- **System diagram:** LW node, then one pen line, then two soft cards (A · Profession, B · Beyond work) with numbered circles. No extra captions or item codes.
- **Recent writing:**
  - heading with a pen underline
  - each post: number circle (fills blue on hover), mono details line "date · tags", title, summary (max 72ch), and an arrow that draws on hover
  - no dividers between posts
- **Contents ("Sheet index"):** numbered circles that match the numbered circles on H2 headings. The current section is marked (`aria-current="location"`), shown as a filled circle. Sticky on desktop, a collapsible disclosure below 1000px.
- **TL;DR:** a raised card with a soft border, a slightly tilted paper layer (the text stays straight) and highlighter tape.
- **Takeaways:** a pen line down the left side until the next section.
- **Code:** a raised sheet with a soft border, radius 14px, a mono language label from `data-language`, and the light syntax theme.
- **Tables:**
  - mono uppercase headers with a 1.5px ink rule underneath
  - faint row lines
  - first column in the heading font at 550 weight; numbers in mono, right-aligned
  - caption labelled "Table N —"
- **Figures:**
  - "fig. N" label with an italic caption, radius 14px
  - wide images span to the wide edge
  - phone screenshots stay narrow (about 18rem) with the caption beside them; on mobile the caption goes below
- **Footer:** one plain line with "drawn by Leo Wong · year" and GitHub and LinkedIn links.

## Motion and Accessibility

- **Motion:** 120–380ms ease-out (hover tint, arrow drawing, current-section changes). With reduced motion, transitions are switched off and arrows appear already drawn.
- **Focus:** a visible 3px blue focus ring. A skip link. The current page is marked in the nav and the current section in the contents.

## Do's and Don'ts

- **Do:**
  - keep exactly two right edges (text and wide)
  - keep the reading column at 42rem
  - keep labels and details lines in mono and reading text in serif
- **Don't:**
  - add boxes, double rules or dividers to separate content
  - use more than two decorative sketch marks per view
  - use handwriting fonts, fake photos, or yellow beyond small highlights
- **Don't** add controls for features that don't exist (search, filters). The Honest-Wayfinding rule carries over.

## Migration Notes (hand-off)

**Preserve (protected contracts):**
- **Routes:** `/`, `/blog`, `/blog/[...slug]`; post ids and slugs; heading anchor ids.
- **Content:** file-based MDX publishing and the content-collection schema (`title`, `publishedOn`, `updatedOn`, `summary`, `published`, `tags`, `readTime`). Drafts appear only in dev.
- **Homepage copy:** keep the wording in `src/sections/Hero.astro` (the prototype copied it verbatim).
- **Behaviour:**
  - title view transitions (`transition:name`)
  - the theme script and the `localStorage` key `theme` (no flash of the wrong theme on load)
  - skip link, visible focus, `aria-current`
  - reduced-motion handling
  - KaTeX, the Shiki dual themes (`defaultColor: false`), and external-link handling (`ExternalLink`)
  - contents tracking of the current section
- **Theme toggle:** keep it, even though the prototype has none. Dark mode needs its own design pass first.

**Suggested order:**
1. Tokens and fonts in Tailwind `@theme`. Rename `--vermilion` to a role name such as `--pen`.
2. Shared frame: header, footer, dot paper, sketch filter.
3. Post page: heading layout, contents list, prose, the two-edges table snap, figures, code.
4. Homepage: hero marks, system diagram, recent writing.
5. Writing index page: needs its own design (title naming below).
6. Dark theme.
7. Clean-up (listed under Open Items).

**Known production issues to fix during the migration:**
- the disabled search and filter controls in `PageHeading`
- the same page is named "Writing", "My Posts", "All writing" and "Latest writing"; pick one name (suggested: "Writing")
- ten Lato TTF files are shipped from `public/fonts/` but only four are used; drop Lato
- the favicon is Astro's logo; the LW mark (`NavIcon`) is the identity
- there are no tests beyond a placeholder

**Prototype hand-off:** `src/prototypes/README.md` lists which prototype files the approved prototype depends on, what is safe to delete, and tooling notes.

## Open Items Before or During Implementation

- **Dark theme:** design it and pair the tokens by role.
- **Browsers:** test in Safari and Firefox, especially the SVG filter rendering.
- **TL;DR and Takeaways:** the styling depends on those exact heading names. Decide between keeping the convention or adding an MDX component or remark plugin.
- **Table alignment:** right-aligning every column but the first is a rule of thumb. Consider per-column alignment in Markdown.
- **Writing page:** design the full post list; the homepage shows recent posts only.
- **Homepage gap:** on wide screens the diagram is taller than the intro text. Revisit if photos are added.
- **Clean-up after migration:**
  - remove prototype-only dependencies (`@fontsource-variable/archivo`, `@fontsource-variable/jost`, `@fontsource-variable/schibsted-grotesk`) and Lato
  - remove the prototype hook in `astro.config.mjs` and the `src/prototypes/` folder

---

# Current Implementation — Open Field Folio (live until migration)

> This section and the YAML front matter describe the site as it runs today. Known differences between this description and the code:
> - The accent token is still named `--vermilion` but holds blue `#33507e` (`#8fb0e0` in dark mode). The switch to blue was intentional.
> - The dark paper is warm brown `#1c1712`, not neutral graphite.
> - `PageHeading` shows disabled search and filter controls, which breaks the Honest-Wayfinding rule. They're due to be removed in the migration.

Design System: Open Field Folio

## Overview

Creative North Star: "Open Field Folio / Living Index"

Open Field Folio treats the site as a living personal publication rather than a developer-portfolio hero or an archive costume. Warm uncoated paper reaches every viewport edge, while deep green-black is reserved for closure, code, and skip-link surfaces. Restrained vermilion, sage, and muted brass orient the reader without turning the publication into a dashboard.

The system is editorial but not precious. Source Serif 4 gives statements and headings gentle authority; self-hosted Lato keeps body copy, metadata, navigation, and controls factual. Open space, fine rules, chronological accumulation, and a loose annotation thread connect engineering practice, interests, and writing.

The shipped homepage is an open annotation field. Practice and Curiosity facts flank the factual statement on desktop, then become separated rows below its detail copy on mobile. A restrained structural curve closes the field before two recent-writing rows and a compact, right-aligned All writing continuation.

**Key Characteristics:**

- A full-viewport paper field at every width, with centered max-width content columns rather than an inset desktop object.
- An open, unboxed homepage introduction with stable facts annotated around the central statement.
- Serif-led editorial hierarchy paired with compact humanist-sans metadata.
- Warm botanical neutrals in light mode and neutral warm graphite surfaces in dark mode.
- Deep folio anchors with vermilion, sage, and muted-brass orientation accents.
- Open chronological rows instead of generic card grids.
- A quiet annotation thread with structural, brass, and vermilion marks.
- A subtly crosshatched `.site-sheet` material that remains paper-like rather than decorative.
- Compact responsive stacking, visible focus, paired themes, and reduced-motion support.

## Colors

The light palette combines warm paper with botanical ink and restrained accents. Dark mode shifts the surfaces to neutral warm graphite while preserving sage only as an accent and structural note.

### Primary

- **Folio Vermilion:** Marks current navigation, dates, primary note emphasis, editorial links, and visible focus in a deliberately limited share of the page.
- **Night Vermilion:** Preserves those roles with enough brightness for the graphite reading field.

### Secondary

- **Muted Brass:** Marks secondary entry actions, the Software engineer role line, thread orientation, and selection.
- **Night Brass:** The brighter dark-theme counterpart, never a general background color.

### Tertiary

- **Field Sage:** Supports the Curiosity annotation, scrollbars, softened detail, and restrained tonal hover.
- **Night Sage Accent:** Keeps that orienting role in dark mode; it does not become a dark surface.

### Neutral

- **Warm Paper:** The default light reading field and dominant viewport surface.
- **Raised Paper:** A quiet bounded surface for the theme control and table of contents.
- **Sage Paper:** A secondary light tonal field for restrained hover states and inline code.
- **Green-Black Folio:** The footer, code surface, and skip link.
- **Folio Ivory:** Text placed on the green-black folio.
- **Editorial Ink:** Primary light-theme text, strong rules, and directional icons.
- **Softened Ink / Muted Sage Copy:** Long-form reading and supporting metadata.
- **Structural Rule / Soft Rule:** Strong and quiet dividers that organize the open field without enclosing every region.
- **Dark Paper / Dark Raised Paper / Dark Secondary Paper / Dark Deepest Surface:** The four neutral graphite layers used for the page, raised controls, secondary tonal fields, and deepest bounded surfaces.
- **Dark Folio Ivory / Dark Editorial Ink / Dark Softened Ink / Dark Muted Copy:** The dark-theme text hierarchy.
- **Dark Structural Rule / Dark Soft Rule:** The dark-theme divider pair.
- **Shadow Ink / Dark Shadow Ink:** Theme-specific shadow colors used only by bounded lift.

### Named Rules

**The Full-Field Material Rule.** The paper or graphite page surface reaches every viewport edge; deep folio color belongs to bounded functional surfaces and the footer, not to an outer environment.

**The Restrained-Accent Rule.** Vermilion signals current, editorial, and primary-action emphasis; brass signals secondary action and identity; sage signals structure. None becomes a general-purpose fill.

**The Neutral-Night Rule.** Dark-mode surfaces use the neutral graphite family; sage remains an accent and must not tint the primary dark reading field.

**The Paired-Theme Rule.** Light and dark tokens stay paired by semantic role, and a surface never mixes values from opposite theme sets.

## Typography

**Display Font:** Source Serif 4 Variable (with `ui-serif`, Georgia, serif fallbacks)
**Body Font:** Self-hosted Lato (with `ui-sans-serif`, system-ui, sans-serif fallbacks)

**Character:** The serif is soft-edged, editorial, and gently weighted rather than monumental. Lato supplies plainspoken body copy and compact record-like metadata, keeping the system contemporary and factual.

### Hierarchy

- **Display** (variable weight `510`, up to `6rem`, with tight line-height): Page headings retain the broad display range. Article headings use `clamp(3.1rem, 6vw, 4.75rem)` across the full article-header measure so ordinary post titles remain on one line at desktop widths.
- **Headline** (variable weight `510`, `clamp(3.2rem, 4.7vw, 4.6rem)`, `1` line-height; `clamp(2.65rem, 12vw, 3.25rem)` at mobile): The homepage factual statement; it remains a statement, not an oversized name treatment.
- **Title** (variable weight around `560`, approximately `1.08` line-height): Recent-writing titles use a long-title-safe `clamp(1.25rem, 2.35vw, 2.25rem)`, allowing the narrow two-column range to fit ordinary titles on one line without changing wide-desktop scale; mobile remains `1.25rem`. Chronological-index titles use `clamp(1.55rem, 2.6vw, 2.35rem)` and `clamp(1.4rem, 5.5vw, 1.55rem)` on mobile. All mobile article titles use the same `clamp(2rem, 9vw, 2.7rem)` scale with safe word wrapping and a two-line target for ordinary titles at the narrowest supported width.
- **Body** (weight `400`, generally `1rem`, `1.65–1.82` line-height): Interface descriptions and long-form reading. Article prose is capped at `72ch`.
- **Label** (weight `700`, usually `0.72rem`, `0.14em` tracking, uppercase): Navigation, dates, topics, role text, and compact wayfinding.

### Named Rules - Typography

**The Two-Voice Rule.** Source Serif 4 owns editorial display and headings; Lato owns body copy, metadata, navigation, and controls.

**The Lining-Record Rule.** Dates, tables, and mixed letter-number titles such as M43 use lining tabular numerals so records align and numerals sit naturally beside capitals.

**The Gentle-Weight Rule.** Create hierarchy through scale, measure, and spacing before pushing Source Serif into heavy display weights.

## Layout

The page is a full-width, full-height paper or graphite field at every viewport size. Content aligns to a centered frame capped at `1452px`, with `1.5rem` side insets and `1.125rem` on screens at or below `720px`. Conventional pages, navigation, and footer use the shared `PageFrame` primitive, which adds the `clamp(1.2rem, 1.8vw, 1.8rem)` desktop alignment rail and resets that inner padding on mobile. The body and `.site-sheet` repeat two low-contrast `25px` linear gradients to give the field a quiet paper fiber without creating a dominant grid. Dark mobile strengthens this fiber slightly so it remains perceptible on the compact graphite field.

Vertical sections use viewport-aware spacing (`clamp(3.5rem, 7vw, 7rem)`) and a header-aware minimum height. The homepage remains deliberately compact. Above `980px`, Practice, the statement, and Curiosity form a three-column field; below `980px`, the statement leads and the annotations share the next row. At `720px`, the order becomes statement, Practice, Curiosity, then the closing thread; both annotation lists use the same natural flex wrapping, with Practice aligned left and Curiosity aligned right. The side curves disappear, and their opposed straight rule-and-dot directions remain intact. The main thread swaps between separate authored desktop and mobile SVG drawings rather than stretching one path across both compositions.

Blog entries accumulate inside year groups with dates, titles, summaries, and topic cues aligned in open rows. Recent notes shift from two columns to one at `720px`. Article layouts use a measured reading column plus a `250px` sticky table of contents, collapsing to one column with a native `details` disclosure at `980px`.

**The Full-Viewport Field Rule.** Keep the page surface edge-to-edge at every width and constrain content with inner max-width frames.

**The Homepage Alignment-Rail Rule.** At desktop widths, navigation contents, the Practice annotation, the Latest writing heading and divider, the first recent-post title, the annotation-thread right edge, the All writing continuation's right edge, and the footer contents share the `clamp(1.2rem, 1.8vw, 1.8rem)` inner inset; Curiosity mirrors it from the right. At `980px` and below, annotation inline padding resets; at `720px` and below, navigation inline padding, the Latest writing heading's inline margins, the thread's inline-end margin, and footer inline padding reset to zero so mobile alignment returns to the site frame.

**The Open-Field Rule.** Use width, whitespace, and fine rules to organize information; do not replace the publication field with a grid of boxed cards.

**The Chronological-Accumulation Rule.** Writing surfaces grow as dated rows grouped by year, preserving direct scan order from newest to oldest.

**The Responsive-Continuity Rule.** Narrow layouts simplify and stack the same hierarchy; they do not become a separate mobile visual world.

## Elevation & Depth

The system is flat at page scale. Tonal surfaces, one-pixel rules, subtle paper fiber, and the contrast between paper and deep folio materials establish depth; the viewport field itself has no ambient lift. The only recurring shadow is bounded lift for dark code blocks.

### Shadow Vocabulary

- **Bounded lift** (`0 10px 24px var(--shadow)`): Used by code blocks at rest.

State motion is quiet: most hover, underline, and arrow changes use `180ms ease-out`; theme surface transitions use `300ms ease`. The homepage annotation geometry is static and fully legible without motion. Reduced-motion mode removes practical animation and smooth scrolling.

### Named Rules - Layout

**The Flat-Field Rule.** Do not lift or shadow the viewport field; use rules and tonal contrast for page-scale structure.

**The Bounded-Lift Rule.** Shadow belongs only to materially bounded code surfaces, never to ordinary rows or continuation links.

**The Orientation-Motion Rule.** Motion may clarify path or state, but no meaning depends on it and reduced-motion preference takes precedence.

## Shapes

The form language combines open rectangular fields with a small durable radius family. Compact links inside bounded panels use gently curved `7px` corners; table-of-contents panels and code blocks use `11px`. The viewport field, header, introduction, chronological rows, All writing continuation, and footer remain structurally square and open.

Circular filled arrow controls punctuate desktop recent-note rows, then open into unbounded vermilion and brass arrows on mobile. The theme toggle uses a capsule because it is a binary control. Content labels, topics, and metadata remain unpilled. Fine one-pixel rules provide most structure, with a stronger `1.5px` line only at the start of major indices.

**The Bounded-Surface Rule.** Rounded corners belong to compact controls and genuinely bounded panels, not to the page field or open content regions.

**The Control-Capsule Rule.** Capsule and circle silhouettes are reserved for controls and directional affordances, not for content chips or decorative badges.

## Components

Components behave like parts of one open publication: compact controls, bounded utility surfaces, and rows that stay visually connected to the full-viewport field.

### Header Navigation

- **Structure:** Sticky and paper-toned across the viewport, with navigation content aligned to the shared max-width frame.
- **Typography:** Compact uppercase Lato labels; desktop pairs vermilion `LW` with `/ Leo Wong`, while mobile keeps only the initials.
- **State:** Hover and current-page links reveal a `2px` vermilion underline. The navigation remains visible and simple on mobile.

### Homepage Introduction

- **Structure:** Open and unboxed. Practice occupies the left gutter, the statement and detail copy occupy the center, and Curiosity occupies the right gutter. Opposed straight rules and dots pair with authored desktop callouts: a `116 × 24` Practice SVG curve and a `138 × 20` Curiosity SVG curve, both pointing inward without touching the statement.
- **Copy:** The statement is “I build software and keep notes on what I learn.” The detail copy carries the backend, API, data-pipeline, cloud-infrastructure, basketball, competitive-gaming, travelling, and photography context. The identity line is role-only: a soft structural rule, a short brass rule segment, then “Software engineer.” Leo Wong does not appear on this line.
- **Responsive:** Below `980px`, the statement leads a two-column annotation row. Below `720px`, Practice and Curiosity become separated rows after the detail and identity copy, their lists wrap horizontally, the authored side curves are hidden while the straight rules and dots remain, and the loose thread closes the field below them.
- **Restraint:** Facts remain stable semantic content; no post titles or other mutable content enter the annotation geometry.

### Theme Toggle

- **Shape:** A compact capsule (`3.8rem × 2.35rem`, reduced to `3rem × 2rem` on mobile) with a one-pixel rule.
- **Surface:** Raised paper with editorial ink; it inherits the equivalent graphite roles in dark mode.
- **State:** Border shifts to vermilion on hover; moon and sun SVGs rotate and fade over `180ms`.
- **Accessibility:** The label states the destination theme and updates after every change.

### Annotation Thread

- **Structure:** One loose baseline with a soft structural stroke, a short vermilion segment, and brass/vermilion endpoint markers. The paths live in separate desktop and mobile SVG drawings; the markers are CSS circles outside the SVGs.
- **Geometry:** The desktop drawing uses the approved `viewBox="278 340 1112 110"` geometry across the statement-side field. The mobile drawing uses the approved `viewBox="20 550 350 70"` geometry across the single column. The container compresses from `clamp(3.5rem, 4.5vw, 4.5rem)` to `1.75rem`.
- **Behavior:** Static and decorative (`aria-hidden`). The responsive breakpoint swaps drawings instead of non-uniformly scaling one shared path, and each CSS marker uses `aspect-ratio: 1` so it remains circular.
- **Purpose:** Close the factual annotation field and hand the page into recent writing without becoming a timeline.

### Recent Note Rows

- **Structure:** The two newest notes share one ruled field on desktop and stack into a single chronological column on mobile.
- **Content:** Date, up to three topic cues, a long-title-safe Source Serif title, optional summary, and a directional action.
- **Action:** The first entry uses vermilion and the second uses brass. Desktop actions are filled circles; below `720px` they become open arrows, while summaries disappear and title scale tightens to preserve first-viewport rhythm.
- **State:** A sage-paper tonal hover and a small rightward arrow shift provide feedback without lifting the row.

### Chronological Writing Index

- **Structure:** Years occupy a dedicated leading column; entries remain open rows divided by rules rather than cards.
- **Content:** Date and read time, title and optional summary, then non-interactive topic cues and direction.
- **Responsive:** The year header becomes a horizontal lead-in and every entry becomes linear below `720px`.
- **Capacity:** The year grouping is the durable structure for a growing publication, not a layout tuned only to the current post count.

### All Writing Continuation

- **Material:** Open paper with top and bottom rules; no fill, radius, or shadow.
- **Layout:** The link is full width below desktop and becomes a compact right-aligned region (`clamp(18rem, 25%, 22rem)`) at `1000px`, roughly half a recent-post tile, with its right edge held to the shared homepage inset.
- **Content:** “All writing,” a plain newest-first explanation, and a vermilion continuation cue. On mobile the word “Continue” is visually omitted, leaving the open arrow.
- **State:** Hover shifts the rules to vermilion without lifting the link.

### Table of Contents

- **Desktop:** A `250px` sticky raised-paper panel with nested indentation and a visible current-location state.
- **Mobile:** A compact native `details` disclosure above the article body.
- **State:** Hovered and current links use the secondary paper tone; the current item also gains weight and `aria-current="location"`.

### Article Prose

- **Measure:** Maximum `72ch`, with a quiet Lato reading color and `1.75–1.82` line-height.
- **Headings:** Source Serif at variable weight around `570`, balanced wrapping, and header-aware scroll offsets.
- **Editorial details:** Vermilion links, a thin vermilion blockquote rule, deep-surface code blocks, and lining tabular numerals in tables.

### Footer

- **Material:** The deepest folio surface closes the full-width publication field.
- **Structure:** A compact single row keeps copyright on the shared left rail and icon-only GitHub and LinkedIn links on the shared right rail at every width.
- **State:** Each circular social control shifts its rule and icon to brass on hover while retaining a visible keyboard focus ring.

**The Integrated-Publication Rule.** Header, main field, article, and footer read as one continuous full-viewport publication rather than detached app-shell panels.

**The Row-Not-Card Rule.** Notes use open chronological rows with rules and tonal hover, not repeated rounded cards with individual shadows.

**The Honest-Wayfinding Rule.** Controls and labels describe real destinations or current location; do not render inactive search, filter, or archive controls.

## Do's and Don'ts

### Do's

- **Do** keep the paper or graphite page field full-viewport at every width and constrain only the inner content columns.
- **Do** keep the homepage introduction open, unboxed, factual, and arranged as the shipped desktop/mobile annotation topology.
- **Do** preserve the warm light palette, deep folio anchors, and neutral warm graphite dark surfaces.
- **Do** reserve sage for accent, structure, and restrained tonal feedback in dark mode.
- **Do** pair Source Serif 4 headings with self-hosted Lato body and metadata.
- **Do** use lining tabular numerals for dates, tables, and mixed titles such as M43.
- **Do** organize growing writing collections as chronological year groups and open rows.
- **Do** keep the `.site-sheet` fiber extremely restrained and repeat the same material in light and dark page fields.
- **Do** keep recent-writing titles long-title-safe, preserve the vermilion/brass action sequence, and open the arrows on mobile.
- **Do** keep All writing as a compact open continuation rather than a promotional banner.
- **Do** provide visible focus, light and dark themes, reduced-motion behavior, and compact mobile article wayfinding.

### Don'ts

- **Don't** reintroduce an outer desktop environment, inset page treatment, large page corner, or page-scale shadow.
- **Don't** rebuild the homepage introduction as a bounded personal record or add institutional labels.
- **Don't** use sage-tinted surfaces as the dark-mode page foundation.
- **Don't** turn the homepage annotation thread into a timeline, label it with mutable post content, or let its callouts touch the statement.
- **Don't** turn the publication into a generic developer-portfolio hero, bento grid, dashboard, or decorative archive.
- **Don't** apply vermilion, brass, sage, shadows, capsules, or circles outside their documented orientation, action, and control roles.
- **Don't** introduce oversized name treatments, heavy serif display weights, glyph icons, or system display faces.
- **Don't** imply unavailable search, filtering, portfolio, timeline, contact, or social-proof features through inactive UI.
