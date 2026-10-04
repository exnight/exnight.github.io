# Prototypes: hand-off notes

Prototype routes only exist in `npm run dev` or a `PROTOTYPES=1` build (hook in `astro.config.mjs`).
Production builds contain no prototype code. The **approved direction is Finalist 1 v2 · Drafting
Notebook** (`finalists/notebook-v2/`), referenced from `DESIGN.md`.

## What's here

Only the approved prototype remains. Originals A–F, Finalist 1 v1 and Folio Editorial were removed
after the decision. They were never committed; a local, git-ignored backup is at
`.astro/prototypes-archive-before-cleanup.tar.gz` (extract it with `tar -xzf` from the repo root).

| Path | Purpose |
| --- | --- |
| `finalists/notebook-v2/` | The approved prototype: code, README, screenshots |
| `finalists/shared/` | Shell, switcher bar, `data.ts`, `ProtoTable`, `Figure`, `base.css` |
| `finalists/fixtures/` | Review-fixture post (same wording as the published post), two screenshots, generator script |
| `shared/data.ts` | `prototypesEnabled`, `publishedPosts`, `profile` (homepage copy from `Hero.astro`), `formatDate` |
| `routes/Chooser.astro`, `routes/ChooserIndex.astro` | The `/prototypes/[...path]` route and the index page |

It also uses two production components (`NavIcon`, `ExternalLink`) and the fonts
`@fontsource-variable/bricolage-grotesque`, `@fontsource/ibm-plex-mono` and
`@fontsource-variable/source-serif-4`. Those fonts belong to the target design, so keep them after migration.

## Removing the prototype after migration

1. Delete `src/prototypes/`.
2. Remove the `prototypes` integration from `astro.config.mjs` (the `const prototypes = …` block and its entry in `integrations`).
3. Run `npm run build` and `npm run test`.

## Tooling notes

- **Playwright CLI:** the default `chrome` channel isn't installed. Use a config with
  `{"browser":{"browserName":"chromium","launchOptions":{"channel":"chromium","headless":true}}}`
  (browsers live in `PLAYWRIGHT_BROWSERS_PATH=/opt/playwright`). The CLI looks for
  `.playwright/cli.config.json` (now present in the repo).
- **Static preview builds** must write inside the repo, e.g. `--outDir .astro/proto-dist`. Writing to `/tmp` fails with `EXDEV` (cross-device rename).
- **Dev server:** editing `astro.config.mjs` restarts it. Several edits in quick succession can leave it on an old config (prototype routes 404). Touch the file once more or restart `npm run dev`.
- **Drafts:** the dev server lists unpublished posts. Take screenshots of the live site from the production build (`npm run build`, then serve `dist/`) so drafts don't leak.
- **Don't run Prettier on `*.mdx` fixtures:** it rewrites `{/* … */}` comments and breaks the file. Format with
  `npx prettier --write "src/prototypes/**/*.{astro,ts,css,mjs}"`.
- **One shared route means one stylesheet:** every page under `/prototypes/[...path]` loads the scoped CSS of every finalist. Scope new prototype styles to an `html` class, and never write bare `body {}` rules (that leak shrank the finalists' text column).
