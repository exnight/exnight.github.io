# CSS architecture and maintenance

Site-specific constraints for the accepted [Drafting Notebook system](../DESIGN.md). General guidance lives in [CSS-GUIDELINES.md](../CSS-GUIDELINES.md) and [RESPONSIVE-GUIDELINES.md](../RESPONSIVE-GUIDELINES.md); component APIs are in [Notebook authoring](design/AUTHORING.md).

## Ownership

| File in `src/styles/`                  | Owns                                                                                               |
| -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `global.css`                           | Tailwind setup, imports/layers, shared frame, responsive variants, document/accessibility defaults |
| `theme.css` / `fonts.css`              | Paired palette, font/radius tokens / self-hosted font imports                                      |
| `article/index.css`                    | Article-only composition                                                                           |
| `article/content.css`                  | Reading grid, Markdown defaults, counters, captions, wide placement, fallbacks                     |
| `article/toc.css` / `article/code.css` | Contents layout / code sheets, labels, Shiki integration                                           |

Pages/components own ordinary appearance through utilities; scoped effects belong in `@layer components`. Callers own sketch placement. Preserve selector/data hooks used by scripts and tests.

Only `src/pages/blog/[...slug].astro` imports `article/index.css`, after Layout's global foundations. Its components-layer imports stay in order: content, contents, code. Home and Writing must not load article CSS.

Keep Markdown defaults prose-scoped: underlined links, decimal/lower-alpha/lower-roman list nesting, heading counters, and local code/math overflow. KaTeX owns math internals; `astro.config.mjs` owns paired Shiki themes with `defaultColor: false`. Do not override syntax with inline colours. Preflight supplies the shared mono family through the font bridge.

Notebook components own appearance; article CSS owns geometry. Preserve:

- Callout direct-child margin resets, intended gaps, and last-child reset; inherited prose typography and reading-track placement.
- Summary's stacking context: negative-z-index paper behind straight text; remove only paper tilt on mobile.
- Labelled, keyboard-focusable table scrolling, `data-notebook-table`, and prop/raw-cell alignment overriding default left alignment.
- Figure counters/labels and distinct figure/table caption line heights. Figure captions follow figure width, not table-caption caps.
- Wide/phone figure placement in article CSS, not grid-column utilities that defeat fallbacks. Use exact alignment values when utilities emit different keywords.

## Cascade policy

Establish `@layer theme, base, components, utilities;` in `global.css` before component styles load. `@theme inline` bridges utilities to semantic tokens; `theme.css` remains palette authority. Preflight owns the reset; site defaults supplement `base`.

Utilities override component defaults. Avoid unlayered visual rules and `!important`; the unlayered reduced-motion guard is the deliberate exception. Keep defaults low-specificity and base rules before responsive/enhancement/fallback overrides. Preserve literal class candidates, especially the Unicode metadata separator. CSS lint is absent; Prettier owns formatting.

## Responsive rules

Use inclusive rem range queries, not Tailwind defaults:

| Rule       | Narrow boundary                                               |
| ---------- | ------------------------------------------------------------- |
| Article    | `width <= 65.5rem`; beside-text layout uses `width > 65.5rem` |
| `stacked:` | `width <= 56.25rem`                                           |
| `compact:` | `width <= 45rem`                                              |
| `narrow:`  | `width <= 23.75rem`                                           |

Keep the single `.notebook .n-wrap` rule in `global.css`'s components layer. Hairlines, radii, dots, and the 320px minimum width use px. Preserve the non-sticky header, unqualified `[&:hover]` behaviour, and global `scroll-padding-top: 1.5rem` without extra heading scroll margins.

## Article width and captions

Article variables: `--reading-base: 42rem`, `--contents-width: 13rem`, `--reading-share: 0.2`, plus `--article-gap` and `--reading-growth`. Above 65.5rem, 20% of the spare track widens reading while both gaps and the left edge stay fixed. Below or at that boundary, heading, contents, and prose share `min(42rem, frame)`. Keep `CONTENTS_BESIDE_TEXT` in `src/scripts/article.ts` aligned with CSS. Exact frame/gap geometry is in [DESIGN.md](../DESIGN.md#layout).

`.n-prose` inherits tracks through subgrid. **Never apply inline-size containment to it**; the outer `.n-article` is the size container.

Enhanced table captions use article `100cqi`:

```text
available = article width - contents width - 2 × gap
reading = min(available, base + max(0, available - base) × share)
```

Narrow captions cap at `min(100%, 100cqi, base)`; percentages alone can resolve against overflowing tables. Without JavaScript, tables stay reading-width and scroll locally. The article script measures the resolved track (parent's second track under subgrid), promotes naturally wide tables after fonts/resize, restores temporary author styles, and cleans up on Astro navigation. Caption sizing remains separate.

## Browser fallbacks and support limits

Preserve `article/content.css` fallback rules, values, and order: conservative caption caps, combined cqi/subgrid support guard, outer article size container, enhanced caps, and no-subgrid prose/placement rules. Conservative narrow caps precede enhanced narrow caps. Keep geometry in the components layer, not overriding width/column utilities.

These fallbacks simplify layout, not certify old-browser support. Guard removal, polyfills, or browser-target changes require separate approval. Unit tests and preview acceptance are not cross-browser evidence.

## Theme initialization and browser metadata

`Layout.astro` owns guarded pre-paint startup and synchronous `astro:after-swap` restoration; `src/scripts/theme.ts` owns interaction, persistence, destination-theme labels, metadata updates, and listener cleanup/rebinding. Preserve the `theme` storage key: valid saved choice wins, otherwise system preference with light fallback. Do not add a second preference reader for tests.

Layout metadata intentionally duplicates paper palette values. Keep `content`, `data-light`, and `data-dark` aligned with `theme.css`; scripts read these attributes. First paint must not wait for computed styles or CSS loading.

## Validation

[AGENTS.md](../AGENTS.md) owns check policy; [README](../README.md#coding) lists commands.

### Unit test layout

Tests follow `src/`; `test/helpers.ts` renders Astro, parses HTML, and compiles Tailwind. Vitest defaults to Node; DOM-script tests use happy-dom and page tests mock `astro:content`. Coverage is opt-in. Unit tests need no server/build/browser and do not verify viewport geometry or cross-browser rendering.

### Local draft-page acceptance

Run `node test/blog/draft-post.browser.mjs` only on request, using the existing port-3000 server and installed Chromium (`BROWSER_PATH` selects it). It needs no build, installs nothing, and takes no screenshots. Four desktop/mobile theme cases cover MDX mappings, figures/captions, table alignment/overflow, callouts, contents, and theme persistence; no no-JavaScript case. It is outside routine tests/build/CI.

Local content is `src/blog/draft-post.mdx` with `src/blog/draft-assets/`. Publication/draft-selection tests keep drafts excluded from production.
