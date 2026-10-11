---
version: 1
slug: "src-pages-blog-slug-astro"
primary_target: "src/pages/blog/[...slug].astro"
related_targets: ["src/components/TableOfContents.astro","src/components/NotebookSummary.astro","src/components/NotebookTakeaways.astro","src/components/NotebookTable.astro","src/components/NotebookFigure.astro","src/scripts/article.ts"]
---

# Article — Drafting Notebook

Mode: Read. Audience: readers of sustained technical/personal writing. Job: understand the article and navigate sections comfortably.

## Direction

The subject leads; records and topics support it. Inherit the accepted visual system from `DESIGN.md`.

- Unboxed heading begins on the reading column: Back to Writing → title → italic summary → date/read time/update → wrapping topics.
- Above `65.5rem`, contents begins beside the first section, not the title. At `width <= 65.5rem`, it becomes a native disclosure above the body.
- Preserve the Reading-Measure and Two-Edges rules in `DESIGN.md`: 42rem baseline, 20% spare-track growth on desktop, unchanged gaps/edges, and a centered fluid column capped at 42rem when collapsed.
- Section circles support contents cross-reference and current-section state; nested links stay subordinate. Native fragment navigation remains intact.
- Keep explicit Summary/Takeaways boundaries and semantic table/figure captions. Plain Markdown remains usable; wide content and narrow-phone figures retain their established placement.

## Boundaries

Preserve `/blog/[...slug]`, authored wording/data, heading anchors, title transitions, KaTeX, paired Shiki themes, safe external links, and no-JavaScript reading. Do not add slug trails, pre-title metadata walls, boxed headings, client-created callout boundaries, or inferred captions.

Publishing rules: `README.md#publishing-contracts`. Component APIs: `docs/design/AUTHORING.md`. Article geometry, support guards, fallback values/order, and Astro lifecycle cleanup: `docs/CSS.md`. Keep long titles, missing summaries, many tags, nested contents, and overflowing content usable. Verification runs follow `AGENTS.md`; this brief is not verification evidence.
