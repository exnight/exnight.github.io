---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/sections/Hero.astro","src/components/PostEntry.astro"]
---

# Homepage — Drafting Notebook

Mode: Experience. Audience: professional evaluators and readers. Job: understand Leo’s work/interests and reach recent writing.

## Direction

A factual personal introduction followed by real writing, not a portfolio dashboard. Inherit the accepted visual system from `DESIGN.md`; preserve `Hero.astro` wording and profile facts.

- Desktop hero uses 12 columns: statement in 1–8, detail in 1–7, unboxed profile groups in 9–12.
- At `width <= 56.25rem`, introduction precedes the profile groups; Recent writing follows. Preserve this reading order.
- Show the two latest published posts. Entries lead with title, then date/read time, optional summary, and separate wrapping topics.
- Keep recent article links and All writing as clear destinations. Pen arrows draw on hover/focus and appear completed under reduced motion; touch navigation must not rely on hover.

## Boundaries

Preserve `/`, factual content, title transitions, theme control, and shared accessibility. Do not add claims, decorative post numbering, repeated cards, or inactive controls.

Publishing rules: `README.md#publishing-contracts`. Implementation constraints: `docs/CSS.md`. Verification runs follow `AGENTS.md`; this brief is not verification evidence.
