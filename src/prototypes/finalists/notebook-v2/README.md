# Drafting Notebook — Approved Prototype

**Approved for production migration.** The user approved the final detail pass as well as the graphite reading experience and reading-led Writing page. Production is still Open Field Folio; no migration has happened.

Root `DESIGN.md` is the consolidated visual authority. Read `docs/design/MIGRATION.md` and `.impeccable/surfaces/` before porting. The prototype is a visual reference, not production architecture.

## Preview

Use the user-started dev server on port 3000; do not start a second instance.

| Page | URL |
| --- | --- |
| Home | http://localhost:3000/prototypes/notebook-v2/ |
| Writing | http://localhost:3000/prototypes/notebook-v2/writing/ |
| Flight: lists and tables | http://localhost:3000/prototypes/notebook-v2/blog/2026/flight-ticket-redemption |
| Review fixture: code, maths, figures | http://localhost:3000/prototypes/notebook-v2/blog/review-fixture/how-i-build-the-site |

The sun/moon button persists an explicit preview choice under `notebook-prototype-theme`, independent from production's `theme` key. Light is the preview default.

Prototype routes exist only in dev or with `PROTOTYPES=1`. For a static preview: `PROTOTYPES=1 npx astro build --outDir .astro/proto-dist`, then serve that folder. Normal production builds exclude preview routes.

## Final approved details

- Home uses unchanged factual profile copy, unboxed Profession/Beyond work groups and no logo node, connectors or A/B labels. The introduction/profile/recent-writing order stays intact. Two recent posts by default, four maximum.
- No circles in post lists. Entries read title → date/read time → summary → separate normally cased wrapping tags. Archive summary cap is 85ch within available width.
- Writing groups by year and sorts descending by `publishedOn`, not a nonexistent `createdOn` field.
- Article heading: “← Back to Writing” → title → italic summary → date/read time/updated → tags. No visible slug trail or entry number.
- Prose stays at 42rem, 19px/1.7 desktop and 17px/1.7 mobile. TL;DR inherits prose typography with 1rem horizontal padding. Contents and H2 retain matching section circles.
- Footer is © year Leo Wong; GitHub/LinkedIn open new tabs with safe rel attributes and accessible labels.
- Graphite is paired by semantic role, without glow/shadows. Bold text is not automatically yellow. Markdown table alignment is respected.

## Screenshot authority

The final desktop/mobile captures in both themes are preserved at **`docs/design/reference/`**. See its README for provenance and limits. Local `.impeccable/review/notebook-details/` contains the original capture outputs but is ignored and not required by the next session.

The `screenshots/` folder here predates graphite, the Writing page and final detail changes. It is historical, **not** the approved migration reference. Earlier removed prototype history is described in `src/prototypes/README.md`; do not restore it for migration.

## Implementation shortcuts and verification limits

- TL;DR is grouped by a client script using `h2#tldr` through the next H2. It supports block content visually; without JavaScript the content remains plain Markdown. Production needs an explicit server-rendered callout boundary.
- Takeaways and inferred table captions use heading/sibling conventions. Replace these with deliberate content boundaries and semantic captions; preserve wording and anchor IDs.
- Table snapping script is reference only. Integrate font readiness, resize, no-paragraph cases and Astro navigation cleanup in production.
- Fixture images are acceptance material, not additions to published articles.
- Final prototype was checked in Chromium at 1440×900 and 390×844 in both themes, including real four-tag content. No document-level horizontal overflow or script errors were found in those pages.
- Tests and production/prototype builds passed; tests are still only a placeholder. Safari/Firefox, zoom, no-JS and production navigation lifecycle remain to verify.

## Porting and clean-up

Keep Bricolage Grotesque Variable, Source Serif 4 Variable (optical/italic) and IBM Plex Mono. Remove Lato only after migrating its consumers. Rebuild on production components rather than copying preview CSS/shell wholesale. Preserve protected behavior listed in `docs/design/MIGRATION.md`.

Do not remove the preview until production verification passes. Then remove `src/prototypes/` and its Astro integration, update documentation paths, run tests/build again, and ensure no preview routes/fixtures/drafts ship.
