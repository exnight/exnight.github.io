# Review fixture

No published post has headings, images, lists and code blocks together, so the finalists use:

- **`how-i-build-the-site.fixture.mdx`**: generated from `src/blog/2026/how-I-build-the-site.mdx`
  by `build-fixture.mjs`. The post's wording is copied exactly. The script fails if anything
  other than the two inserted figures differs. The figures are real screenshots of the current
  site, taken from the production build (published posts only), in `images/`.
- **The real Flight Ticket Redemption post**: for lists, tables and captions.

Regenerate after editing the source post:

    node src/prototypes/finalists/fixtures/build-fixture.mjs

Don't run Prettier on the `.mdx` fixture: it rewrites MDX comments and breaks the file.
