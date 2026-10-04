# Finalist 1 v2 · Drafting Notebook (revised)

Your chosen direction, revised from your feedback. The earlier prototypes (v1, Folio Editorial,
originals A–F) were removed after the decision; a local backup is described in `DESIGN.md`.

## Preview

| Page | URL (dev server, `npm run dev`) |
| --- | --- |
| Home | http://localhost:3000/prototypes/notebook-v2/ |
| Post: Flight (lists, tables) | http://localhost:3000/prototypes/notebook-v2/blog/2026/flight-ticket-redemption |
| Post: How I build + figures (code, maths, images) | http://localhost:3000/prototypes/notebook-v2/blog/review-fixture/how-i-build-the-site |

Static preview: `PROTOTYPES=1 npx astro build --outDir .astro/proto-dist`, then serve the folder.
Screenshots (Playwright, Chromium, 1440×900 and 390×844) are in `screenshots/`:
`*-viewport.png`, `*-full.jpg` and `detail-*.png`.

## Changes from v1

| Your feedback | Change |
| --- | --- |
| Tags on the homepage, as in Folio Editorial | Each post shows one quiet line above its title: date · tags. It replaces the separate date column and the blue `[bracket]` tags. The post number is now a numbered circle, which fills with blue on hover. |
| Post heading layout and position from Folio Editorial; no box | The details box is gone. The heading now sits over the reading column: breadcrumb, then one line (entry # · tags · date · read time · updated), then the title and an italic summary. The contents list starts next to the first section. |
| Sentences wrap too early | Post text column widened from 38rem to **42rem**: full lines now run about 72–76 characters (average 63–65), up from about 61. The homepage paragraph widened (6 → 7 columns, 64ch) and post summaries can reach 72ch, so they mostly fit on one line. The space to the right wasn't reserved for photos; wide tables and figures still use it. |
| Homepage a little texty; remove the name on the right | Removed: "fig. 01 — about", "fig. 02 — system", the "leo wong" label next to the logo circle, the A.1–B.4 item codes, and "log · newest first". The diagram now carries the structure on its own. |

### Follow-up: table width vs. text width

Wide tables used to take whatever width they needed, which produced in-between right edges. Table 2 overhung the text by only 21px and looked like a mistake. Now there are **exactly two edges**:
- **Text edge (42rem):** text, captions, and any table that fits.
- **Wide edge (the page's right edge, lined up with the nav):** wide figures, and tables whose natural width is wider than the text.

A small script in `Post.astro` measures each table's natural width and snaps it to one edge. Without JavaScript, tables stay at the text edge and scroll inside their own box. On mobile both edges are the same. Checked at 1440, 1100 and 390px: the real tables snap to the page edge, a test-only two-column table lines up with the text edge, and nothing scrolls sideways.

**Judgement call on width:** I stopped at 42rem. I tried 44rem first and it gave about 73–76 characters on average with long lines over 90, which is past the point where reading gets tiring. 42rem keeps full lines in the low-to-mid 70s.

## Measured (Playwright)
- **Overflow:** no page scrolls sideways at either width.
- **Reading text:** 19px with 1.7 line height on desktop (17px on mobile). On mobile, lines average about 39 characters.
- **Contents links:** each jump lands the heading 24px below the top of the window, and the current-section highlight follows.
- **Details line:** wraps cleanly on mobile; separators trail the previous item, so no line starts with "·".

## Remaining issues
- **No dark theme yet** (light first, as agreed). **Browsers:** only tested in Chromium.
- **Homepage gap:** on wide screens the diagram is taller than the intro text, which leaves a gap before "Recent writing". That's acceptable at two posts, but worth revisiting once there's a photo or more content.
- **Diagram:** the connecting line assumes exactly two cards.
- **TL;DR and Takeaways styling** depends on the headings being named `TL;DR` and `Takeaways`.
- **Tables** right-align every column except the first as a rule of thumb.
- **"All writing"** links to the current site's `/blog`, which wasn't prototyped.

## Implementation notes (for later, in Astro)
- **Fonts:** Bricolage Grotesque Variable (headings and interface), Source Serif 4 opsz + italic (reading), IBM Plex Mono (labels and code). Lato can be removed.
- **Styles:** move the tokens into Tailwind `@theme`. Rebuild on the existing article, contents and post-list components; the prototype CSS is reference only.
- **Prototype route:** all finalists share one prototype route, so each prototype page loads all finalists' scoped CSS. Production would ship only one.
