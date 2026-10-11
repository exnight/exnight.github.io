---
version: 1
slug: "src-pages-blog-index-astro"
primary_target: "src/pages/blog/index.astro"
related_targets: ["src/components/PostEntry.astro","src/components/PostMeta.astro","src/lib/posts.ts"]
---

# Writing Index — Drafting Notebook

Mode: Read. Audience: readers finding technical or personal-interest articles. Job: scan newest-first by year and select a post.

## Direction

A chronological reading index, not a numbered log or metadata wall. Inherit the accepted visual system from `DESIGN.md`.

- Keep Writing as the page/navigation name and `/blog` as the route.
- Preserve the title’s pen underline, authored introduction, and real post count.
- Desktop years occupy an 8rem leading column; mobile years stack above entries.
- Each row: title → date/read time → optional summary → normally cased wrapping topics. Keep tags subordinate and summaries within the available row.
- Preserve soft tonal hover/focus and drawn pen arrows; reduced motion shows completed strokes.

## Boundaries

Keep real post destinations, title transitions, descending year/post order, and development-only drafts. No search or tag filtering exists; do not turn topics into controls or invent production posts.

Keep layouts usable with many years/tags, long titles, missing summaries, and an empty collection. Publishing rules: `README.md#publishing-contracts`. Implementation constraints: `docs/CSS.md`. Verification runs follow `AGENTS.md`; this brief is not verification evidence.
