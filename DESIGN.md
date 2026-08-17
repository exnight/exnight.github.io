---
name: 'The Plain & Simple Journal'
description: 'Quiet personal publication — straightforward hierarchy, generous space, and restrained interaction keep attention on the writing.'
colors:
  deep-ink-blue: 'oklch(0.4 0.1 256)'
  open-sky-blue: 'oklch(0.76 0.1 256)'
  burnished-umber: 'oklch(0.4 0.1 76)'
  soft-amber: 'oklch(0.76 0.1 76)'
  blue-mist-ground: 'oklch(0.92 0.02 256)'
  cloud-paper: 'oklch(0.96 0.02 256)'
  porcelain-surface: 'oklch(1 0.02 256)'
  midnight-ink: 'oklch(0.15 0.04 256)'
  slate-copy: 'oklch(0.4 0.04 256)'
  slate-rule: 'oklch(0.6 0.04 256)'
  mist-rule: 'oklch(0.7 0.04 256)'
  midnight-ground: 'oklch(0.1 0.02 256)'
  deep-navy-canvas: 'oklch(0.15 0.02 256)'
  raised-navy: 'oklch(0.2 0.02 256)'
  frosted-ink: 'oklch(0.96 0.04 256)'
  blue-gray-copy: 'oklch(0.76 0.04 256)'
  blue-gray-rule: 'oklch(0.4 0.04 256)'
  night-rule: 'oklch(0.3 0.04 256)'
typography:
  display:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '3.75rem'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 'normal'
  headline:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: '2.5rem'
    letterSpacing: 'normal'
  title:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '1.25rem'
    fontWeight: 600
    lineHeight: '1.75rem'
    letterSpacing: 'normal'
  body:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: '1.5rem'
    letterSpacing: 'normal'
  label:
    fontFamily: 'ui-sans-serif, system-ui, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: '1rem'
    letterSpacing: '0.1em'
rounded:
  subtle-corner: '0.25rem'
  soft-corner: '0.5rem'
spacing:
  micro-space: '0.25rem'
  compact-space: '0.5rem'
  standard-space: '1rem'
  roomy-space: '1.5rem'
  section-space: '2rem'
components:
  theme-toggle:
    rounded: '{rounded.soft-corner}'
    padding: '{spacing.compact-space}'
    size: '2.5rem'
  post-card:
    rounded: '{rounded.soft-corner}'
    padding: '{spacing.roomy-space}'
  tag-chip-light:
    backgroundColor: '{colors.blue-mist-ground}'
    textColor: '{colors.deep-ink-blue}'
    rounded: '{rounded.subtle-corner}'
    padding: '0.25rem 0.5rem'
  tag-chip-dark:
    backgroundColor: '{colors.midnight-ground}'
    textColor: '{colors.open-sky-blue}'
    rounded: '{rounded.subtle-corner}'
    padding: '0.25rem 0.5rem'
  table-of-contents-light:
    backgroundColor: '{colors.porcelain-surface}'
    textColor: '{colors.midnight-ink}'
    rounded: '{rounded.soft-corner}'
    padding: '{spacing.standard-space}'
  table-of-contents-dark:
    backgroundColor: '{colors.raised-navy}'
    textColor: '{colors.frosted-ink}'
    rounded: '{rounded.soft-corner}'
    padding: '{spacing.standard-space}'
  article-prose:
    width: '65ch'
---

# Design System: The Plain & Simple Journal

## Overview

**Creative North Star: "The Plain & Simple Journal"**

The Plain & Simple Journal is the incumbent visual baseline captured before a future redesign. It records what the shipped site does now; it is historical evidence, not a requirement that the next visual direction preserve this world.

Quiet personal publication — straightforward hierarchy, generous space, and restrained interaction keep attention on the writing. Broad editorial layouts, paired light and dark tonal surfaces, and compact metadata frame the content without turning the publication into a dense interface. Avoid dense layouts and compact information presentation.

**Key Characteristics:**

- Generous broad editorial widths that open into multi-column layouts only when space supports them.
- Tonal hierarchy across paired light and dark surfaces, with two restrained accents.
- System-sans typography with a compact five-role hierarchy and a relaxed article measure.
- Flat reading surfaces, selective ambient lift, and tactile movement reserved for post cards.
- Compact bordered metadata and restrained navigation around the writing.

## Colors

The palette is a cool blue-neutral publication field with an ink-blue primary and a restrained earth-warm secondary, mirrored into brighter dark-theme counterparts.

### Primary

- **Deep Ink Blue:** Carries light-theme links, the navigation mark, and small informational icons.
- **Open-Sky Blue:** Preserves the same role with higher lightness on dark surfaces.

### Secondary

- **Burnished Umber:** Marks light-theme metadata and secondary editorial navigation without competing with titles.
- **Soft Amber:** Provides the dark-theme counterpart for the same supporting emphasis.

### Neutral

- **Blue Mist Ground:** The deeper light-theme ground used for quiet tonal contrast and tag fills.
- **Cloud Paper:** The default light reading canvas.
- **Porcelain Surface:** The highest light-theme surface used by contained reading aids.
- **Midnight Ink:** The primary light-theme text color.
- **Slate Copy:** The subdued light-theme copy color for summaries and metadata.
- **Slate Rule:** The stronger light-theme line color.
- **Mist Rule:** The softer light-theme border and divider color.
- **Midnight Ground:** The deepest dark-theme ground.
- **Deep Navy Canvas:** The default dark reading canvas.
- **Raised Navy:** The higher dark-theme surface used by contained reading aids.
- **Frosted Ink:** The primary dark-theme text color.
- **Blue-Gray Copy:** The subdued dark-theme copy color.
- **Blue-Gray Rule:** The stronger dark-theme line color.
- **Night Rule:** The softer dark-theme border and divider color.

### Named Rules

**The Tonal-First Rule.** Establish hierarchy with ground, canvas, surface, copy, and rule roles before adding either accent.

**The Paired-Theme Rule.** Treat light and dark values as semantic pairs; never mix tokens from opposite theme sets on one surface.

## Typography

**Display Font:** System sans (`ui-sans-serif, system-ui, sans-serif`)
**Body Font:** System sans (`ui-sans-serif, system-ui, sans-serif`)

**Character:** One familiar sans-serif stack keeps the hierarchy plainspoken and low-maintenance. Scale, weight, spacing, and measure create distinction rather than a decorative type pairing.

### Hierarchy

- **Display:** Reserved for the largest first-view headline.
- **Headline:** Used for page and major article headings.
- **Title:** Used for post-card titles and compact section headings.
- **Body:** Used for interface and editorial copy.
- **Label:** Used for small tracked cues and terse metadata.
- **Article prose:** Uses a relaxed `1.75rem` line-height and a maximum measure of `65ch`.

### Named Rules

**The Rendered-Stack Rule.** Use the system sans stack that the shipped pages actually render; the present but unused Lato files are not part of this baseline.

**The Reading-Measure Rule.** Keep long-form prose at or below `65ch`; added width belongs to surrounding layout, not to the text line.

## Layout

The default content frame is `10/12` of the viewport and narrows to `3/4` at the `64rem` large breakpoint. The observed breakpoints are medium at `48rem`, large at `64rem`, and extra large at `80rem`. Reused spacing follows the five-step rhythm in the frontmatter, favoring open sections over compressed stacks.

Post grids progress from one column to two at `48rem`. Article pages remain single-column until `64rem`, then use a `2fr / 1fr` content-to-sidebar split and widen that relationship to `3fr / 1fr` at `80rem`. Sections use a minimum height of `100dvh` with `2rem` bottom padding. The header is sticky at the top of the viewport; the desktop table of contents is sticky within the article sidebar.

**The Broad-Editorial Rule.** Preserve generous outer width and vertical space; do not trade reading calm for denser information presentation.

**The Progressive-Split Rule.** Add columns only at the observed breakpoints, keeping post and article content linear on smaller screens.

## Elevation & Depth

The elevation philosophy is flat reading surfaces with selective ambient lift. Tonal separation handles most hierarchy; shadows are reserved for sticky navigation and interactive post cards.

### Shadow Vocabulary

- **Sticky navigation:** `0 1px 2px 0 rgb(0 0 0 / 0.05)` with `8px` backdrop blur. This separates the persistent header without making it feel like a floating panel.
- **Card rest:** `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`. This gives post cards a quiet tactile edge.
- **Card hover:** `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` plus `translateY(-4px)`. This is the only pronounced lift response.

State transitions use `150ms cubic-bezier(0.4, 0, 0.2, 1)`. Theme color changes use `500ms`; the hero scroll cue bounces on a `1s infinite` loop. View transitions are gated by `prefers-reduced-motion: no-preference`, while smooth scrolling and the current bounce are not.

### Named Rules

**The Flat-by-Default Rule.** Keep reading surfaces flat and let tonal contrast do the structural work.

**The Selective-Lift Rule.** Reserve pronounced shadow and vertical movement for interactive post-card hover; do not distribute tactile lift across ordinary containers.

## Shapes

The form language uses two gently curved corner sizes: a subtle radius for compact chips and a soft radius for cards, panels, and icon controls. Thin borders provide most enclosure, while content sections and reading surfaces remain visually open.

**The Two-Corner Rule.** Reuse the subtle and soft corner tokens; do not introduce extra radii for neighboring editorial components.

## Components

The component philosophy is restrained, readable, and lightly responsive. Compact controls and bordered metadata support broad editorial layouts, while cards receive the only pronounced tactile hover response.

### Header Navigation

- **Structure:** A sticky, blurred header contains the broad editorial width and a small right-aligned navigation cluster.
- **State:** Navigation links fade to `60%` opacity on hover with the standard state transition.
- **Behavior:** The header remains fixed in reading context without adding a heavy filled bar.

### Nav Mark

- **Style:** A compact custom SVG mark uses the primary accent and acts as the home link.
- **State:** The home link shares the navigation opacity response.

### Theme Toggle

- **Shape:** A compact soft-corner icon control with balanced internal padding.
- **State:** Theme-specific neutral hover fills are local implementation details, not reusable palette tokens.
- **Iconography:** Inline moon and sun silhouettes indicate the destination theme.

### Footer Social Link

- **Shape:** A compact soft-corner icon link.
- **State:** The shipped footer-specific blue hover colors remain local to the component and are not a general interaction palette.

### Post Card

- **Shape:** A soft-corner bordered article container with roomy internal padding.
- **Content:** Title, subdued summary, tag row, and compact date/read-time metadata form a consistent vertical stack.
- **State:** The rest and hover shadows follow the selective-lift vocabulary; hover also moves the card upward by `4px`.

### Tag Chip

- **Style:** A subtle-corner bordered chip uses the deeper ground tone and primary accent text.
- **Density:** Compact horizontal and vertical padding keeps metadata secondary without collapsing the surrounding card.

### Post Grid

- **Behavior:** One column by default and two columns from the medium breakpoint.
- **Rhythm:** Uses the roomy spacing token between cards.

### Table of Contents

- **Style:** A soft-corner bordered panel on the raised surface, with muted links and nested indentation for deeper headings.
- **State:** Links receive a tonal background and secondary accent on hover.
- **Behavior:** The panel is desktop-only and sticky inside the article sidebar. The script applies a current-item hook, but the build has no durable active visual style to record.

### Article Typography

- **Style:** Relaxed long-form leading within a `65ch` maximum measure.
- **Structure:** Headings receive deliberate vertical spacing; code blocks retain bordered treatment through the prose integration.

### Section

- **Behavior:** Full-viewport-minimum editorial sections with bottom breathing room and header-aware scroll offset.

### Hero Scroll Cue

- **Style:** A small tracked uppercase label and downward arrow use the secondary accent.
- **Motion:** The arrow uses the existing continuous bounce.

**The Writing-First Component Rule.** Controls and metadata stay compact so cards, navigation, and reading aids support rather than dominate the editorial field.

**The Existing-Patterns Rule.** Extend only the documented incumbent patterns; do not infer buttons, fields, dialogs, tooltips, active table-of-contents styling, or a custom focus-visible treatment from this baseline.

## Do's and Don'ts

### Do:

- **Do** preserve broad editorial width, generous section height, and a relaxed article measure.
- **Do** use tonal surface steps for hierarchy before reaching for shadows.
- **Do** keep light and dark theme roles paired by meaning.
- **Do** reserve the primary accent for links, the nav mark, and compact informational emphasis.
- **Do** keep metadata compact, bordered, and subordinate to titles and prose.
- **Do** use the observed breakpoint progression when a post or article layout gains columns.

### Don't:

- **Don't** compress the publication into dense layouts or compact information presentation.
- **Don't** spread strong hover lift to static panels, article surfaces, or ordinary navigation.
- **Don't** introduce decorative font families on the basis of unused font files.
- **Don't** invent form controls, primary CTA buttons, dialogs, tooltips, active table-of-contents styling, or custom focus-visible styling.
- **Don't** promote one-off hero, footer, theme-toggle, or positioning values into durable system tokens.
- **Don't** treat this incumbent historical baseline as a constraint that the future redesign must preserve.
