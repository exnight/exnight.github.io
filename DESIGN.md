---
name: 'Drafting Notebook'
description: 'An engineer’s personal publication: precise structure, blue pen, and a restrained highlighter layer.'
colors:
  paper: '#f2f1ec'
  raised-paper: '#fbfaf6'
  tint: '#ebeae3'
  ink: '#1d1f22'
  soft-ink: '#2d3035'
  muted: '#5c5f64'
  hairline: 'rgb(29 31 34 / 0.12)'
  strong-hairline: 'rgb(29 31 34 / 0.22)'
  pen: '#33507e'
  highlighter: '#f1d24a'
  dots: 'rgb(29 31 34 / 0.09)'
  dark-paper: '#20211f'
  dark-raised-paper: '#292b28'
  dark-tint: '#343731'
  dark-ink: '#eeeee5'
  dark-soft-ink: '#d8dbd2'
  dark-muted: '#afb5aa'
  dark-hairline: 'rgb(238 238 229 / 0.12)'
  dark-strong-hairline: 'rgb(238 238 229 / 0.25)'
  dark-pen: '#a2bfe8'
  dark-highlighter: '#c5aa45'
  dark-dots: 'rgb(238 238 229 / 0.065)'
typography:
  hero:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(2.7rem, 5.6vw, 5.2rem)'
    fontWeight: 650
    lineHeight: 1
    letterSpacing: '-0.028em'
  article-title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(2.5rem, 5.4vw, 4.6rem)'
    fontWeight: 650
    lineHeight: 1
    letterSpacing: '-0.035em'
  page-title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(3rem, 5.4vw, 4.6rem)'
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: '-0.035em'
  entry-title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(1.45rem, 2.4vw, 2.1rem)'
    fontWeight: 620
    lineHeight: 1.08
    letterSpacing: '-0.025em'
  section-title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: 'clamp(1.55rem, 2.3vw, 1.95rem)'
    fontWeight: 620
    lineHeight: 1.15
    letterSpacing: '-0.022em'
  subsection-title:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '1.3rem'
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: '-0.015em'
  body:
    fontFamily: "'Source Serif 4 Variable', ui-serif, Georgia, serif"
    fontSize: '1.1875rem'
    fontWeight: 400
    lineHeight: 1.7
  body-mobile:
    fontFamily: "'Source Serif 4 Variable', ui-serif, Georgia, serif"
    fontSize: '1.0625rem'
    fontWeight: 400
    lineHeight: 1.7
  summary:
    fontFamily: "'Source Serif 4 Variable', ui-serif, Georgia, serif"
    fontSize: '1.05rem'
    fontWeight: 400
    lineHeight: 1.5
  metadata:
    fontFamily: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: '0.74rem'
    fontWeight: 400
    letterSpacing: '0.06em'
  tags:
    fontFamily: "'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif"
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.5
rounded:
  compact: '8px'
  sheet: '14px'
  entry-hover: '18px'
spacing:
  compact: '0.75rem'
  standard: '1rem'
  roomy: '1.5rem'
  section: '2.25rem'
components:
  theme-toggle:
    backgroundColor: '{colors.raised-paper}'
    textColor: '{colors.pen}'
    rounded: '{rounded.compact}'
    width: '44px'
    height: '44px'
  summary-card:
    backgroundColor: '{colors.raised-paper}'
    textColor: '{colors.ink}'
    typography: '{typography.body}'
    rounded: '{rounded.sheet}'
    padding: '1.15rem 1rem'
  code-sheet:
    backgroundColor: '{colors.raised-paper}'
    rounded: '{rounded.sheet}'
    padding: '2rem 1.25rem 1.1rem'
---

# Design System: Drafting Notebook

## Overview

**Status: approved for migration; not yet implemented in production.** The final prototype, including graphite mode and the latest detail refinements, is approved. Production still uses Open Field Folio. Its historical specification is archived at `docs/design/archive/open-field-folio.md`; it is not authority for the new design.

**Creative North Star: “Drafting Notebook”**

An engineer’s personal publication with precise drawing conventions and a light pen-and-highlighter layer. The interface balances professional clarity with personal writing, without becoming a portfolio dashboard or a technical costume. Existing LW identity and factual copy remain intact.

Light paper supports everyday browsing; graphite supports reading in low ambient light. Both use the same hierarchy and geometry, with paired semantic colours rather than unrelated skins.

**Key Characteristics:**
- Bricolage headings/interface, Source Serif reading text, Plex Mono records/code.
- Blue pen, restrained yellow, subtle dot paper, no shadows.
- Open writing rows and unboxed profile facts.
- Drawing conventions only where they provide orientation: article section references and numbered figures/tables, not arbitrary post numbers.

Approved source: `src/prototypes/finalists/notebook-v2/`. Durable review captures: `docs/design/reference/`. Implementation contracts and checks: `docs/design/MIGRATION.md` and the Impeccable surface briefs. YAML describes the approved prototype target, not the current production CSS. Reconcile it with shipped code at migration completion.

## Colors

### Primary

**Pen blue** owns editorial links, current state, sketch marks and focus. Its graphite counterpart has enough lightness to remain legible on dark paper. Keep the LW identity in this family.

**The One-Pen Rule.** Blue is the only interface accent; syntax colours and authored images may retain meaningful colour.

### Secondary

**Highlighter yellow** is reserved for the hero’s “notes”, TL;DR tape, selection and explicit text highlights. Ordinary bold text uses weight, not yellow fill.

### Neutral

Paper is the continuous viewport ground. Raised paper belongs to real reading objects and controls; tint supports inline code. Ink, soft ink and muted text establish hierarchy. Hairlines separate structural regions without boxing every element. Dot paper repeats every 24px and stays subordinate to text.

**The Paired-Theme Rule.** Map every role to its light or graphite counterpart. Do not mix surfaces from opposite themes. No neon, glow or sage-tinted dark field.

## Typography

**Headings/interface:** Bricolage Grotesque Variable, generally 90–92% width for larger headings, weights 550–650. Hierarchy comes from scale, weight and space; no handwriting fonts.

**Reading text:** Source Serif 4 Variable with optical sizing and real italic. Main prose is 19px desktop / 17px mobile at 1.7 line height. Article decks and captions use italic; post-list summaries are roman.

**Records/code:** IBM Plex Mono. Short publication details use uppercase and measured tracking. Tags use normally cased Bricolage, wrap separately, and are not controls or pills. Dates and numeric tables use lining tabular numerals.

Mobile hero uses `clamp(2.35rem, 11vw, 3rem)`; mobile entry titles use 1.45rem. Article titles cap at 22ch. Prose headings keep readable hierarchy without shrinking to fit long words. Metadata wraps without leading separators.

**The Reading-Measure Rule.** Main article text remains 42rem, with full desktop lines approximately 72–76 characters. Short scanning summaries may reach 85ch within the available row; this does not authorize widening article prose.

## Layout

The paper field reaches every viewport edge. Shared frame: `min(1240px, calc(100% - 2 * clamp(1.125rem, 4vw, 3rem)))`. Keep header, main and footer on this frame.

Article grid: 13rem contents, `minmax(0, 42rem)` reading column, and flexible room for wide content; gaps `clamp(2rem, 4vw, 4rem)`. Article heading begins on the reading column; desktop contents begins beside the first section. Page-specific composition and reading order live in the surface briefs.

**The Two-Edges Rule.** Normal article content uses the text edge; wide tables/figures extend to the frame’s right edge. Tables snap to one or the other, never an incidental intermediate edge. Without JavaScript, wide tables remain text-width and scroll locally. Intentionally narrow phone figures with adjacent captions are an explicit exception.

Responsive thresholds:
- At 1000px and below, article becomes one column and contents becomes a disclosure.
- At 900px and below, homepage profile groups move below the introduction.
- At 720px and below, mobile typography and list layouts apply.
- At very narrow widths, the name may yield to the LW mark so navigation and theme control remain usable; do not wrap the name awkwardly.

Use more space above sections than within related content. Post lists use whitespace, not row dividers. Year grouping supports a growing archive without search/filter features.

## Elevation & Depth

**No shadows.** Raised paper, faint strokes and slight paper rotation provide bounded depth. The page itself stays flat. TL;DR paper may tilt slightly while its text stays straight; remove tilt on mobile.

Sketch paths use subtle SVG displacement (approximately 2.4), never distorted text. Hover tint and arrow drawing clarify links. Durations range 120–380ms ease-out; reduced motion disables transitions and presents drawing strokes completed. Content is visible without entrance animation.

**The Two-Marks Rule.** At most two decorative marks per section. Hero underline and highlight count as two; a writing heading underline counts as one. Current-navigation circles and link arrows are functional state marks, not extra decoration.

## Shapes

Compact controls use 8px corners, reading sheets/figures/mobile contents use 14px, and post hover regions use 18px. Minor inline-code/tape details may use smaller corners. Circles are reserved for section cross-references, not post-list numbering or profile labels.

One header hairline and one footer hairline. Tables have one stronger rule beneath headers and faint row rules. No double rules or dividers between posts.

**The Fewer-Boxes Rule.** Use whitespace first. Boxes belong to TL;DR, code, figures, compact controls and mobile contents—not homepage profile facts, article headings or recurring post cards.

## Components

### Shared navigation and theme control

LW mark, name and mono role; Home and Writing destinations. A sketched circle marks the current page, backed by `aria-current="page"`. Keep visible hover/focus states. Theme toggle is a labelled sun/moon control with a 44px target and a destination-theme label. Production theme persistence and initialization remain protected contracts.

### Writing entries and tags

Open linked rows: title → short date/read-time line → optional summary → separate wrapping topics. No post circles or entry numbers. Hover/focus reveals a drawn arrow and soft tonal feedback; touch users must not depend on hover. Tags are quiet text, not invented filtering controls. Summaries cap at 85ch, bounded by row width.

### Article contents and headings

“Sheet index” uses section circles matching H2 numbers. Desktop is sticky and unboxed; mobile uses a native disclosure. Track current section with `aria-current="location"` and a filled circle. Nested H3 links stay subordinate. Preserve heading IDs and native fragment navigation.

### TL;DR and Takeaways

TL;DR is a raised sheet with a soft border and small highlighter tape. It inherits body font size/line height with 1rem horizontal padding and supports paragraphs/lists. Takeaways uses a quiet blue vertical pen rule. Production needs explicit, server-rendered content boundaries rather than incidental sibling selectors or client DOM reconstruction; plain Markdown must remain usable.

### Code, tables and figures

Code is a raised sheet with a mono language label and local horizontal scrolling. Use the matching Shiki light/dark variables.

Table headers are mono uppercase with a 1.5px ink rule; rows use faint strokes. First-column text uses Bricolage at 550; data columns may use mono. Respect Markdown’s per-column alignment; unspecified columns align left. Captions are semantic and numbered “Table N —”.

Figures have softly rounded images, numbered “fig. N” labels and italic captions. Wide figures reach the wide edge; phone captures stay about 18rem with captions alongside, stacking below on mobile.

### Footer and accessibility

Footer reads “© year Leo Wong”. GitHub and LinkedIn open new tabs with `rel="noopener noreferrer"` and accessible new-tab labels. Keep one structural hairline, no deep-colour footer block.

Provide a skip link, visible 3px pen-blue focus outline, semantic headings and labelled navigation. Preserve reduced-motion support and sufficient contrast in both themes. Theme selection, text selection and scrollbars belong to the same material world.

## Do's and Don'ts

### Do
- **Do** preserve the approved Notebook identity and factual content.
- **Do** pair light/graphite roles and render the correct code syntax theme.
- **Do** separate tags from short publication details.
- **Do** preserve 42rem sustained reading and allow 85ch scanning summaries.
- **Do** retain article section circles where they provide cross-reference.
- **Do** keep layouts legible with long titles, many tags, no summary and narrow viewports.

### Don't
- **Don't** restore the logo node, connectors, A/B profile labels or post-number circles.
- **Don't** highlight all bold text or add handwriting fonts, glow or shadows.
- **Don't** box profile facts, article headings or post rows as repeated cards.
- **Don't** add inactive search, filters or other nonexistent features.
- **Don't** replace factual copy, invent proof, or treat archived Folio rules as the migration target.
