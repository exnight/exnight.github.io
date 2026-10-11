# Personal Website [![Node.js CI](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml/badge.svg)](https://github.com/exnight/exnight.github.io/actions/workflows/node.js.yml)

Leo’s personal website and blog, built with Astro, TypeScript, Tailwind CSS, and MDX. The site is statically generated and supports light and dark themes.

## Getting started

Requires Node.js 24 or later. An optional VS Code Dev Container configuration is included in `.devcontainer/`; see [sharing Git credentials](https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials) for container setup.

### Coding

```sh
npm ci          # Install dependencies
npm run dev     # Start the development server
npm run test    # Run unit tests
npm run build   # Generate the static production site
```

Coding-agent workflow and check policy live in [AGENTS.md](AGENTS.md). These commands are available tools, not a mandatory sequence after each edit.

Unit tests need no server, browser, or build. Optional local draft-page acceptance uses `node test/blog/draft-post.browser.mjs` and requires the port-3000 dev server and an installed Chrome/Chromium; run it only on request. See [draft-page acceptance](docs/CSS.md#local-draft-page-acceptance).

## Publishing contracts

- Posts live in `src/blog/` as MDX files. Preserve existing post IDs/slugs, authored wording/data, and native heading anchors. Public routes are `/`, `/blog`, and `/blog/[...slug]`.
- Frontmatter fields are `title`, `publishedOn`, `updatedOn`, `summary`, `published`, `tags`, and `readTime`. Do not add `createdOn` merely for sorting.
- `src/lib/posts.ts` owns publication filtering, newest-first sorting, and year grouping. Home shows the two latest published posts, including in development; archive and article routes allow drafts only in development.
- Preserve article-title view transitions, Astro navigation cleanup, native contents links, theme persistence, reduced-motion support, KaTeX, paired Shiki themes, and safe external links.

The unpublished `src/blog/draft-post.mdx` and its artwork in `src/blog/draft-assets/` provide local test content.

## Deployment

- **Cloudflare Pages:** deployed; the owner previewed and accepted the appearance. Deployment settings are not documented here.
- **GitHub Pages:** currently paused. The documented deployment branch is `master`, not `gh-page`; see `.github/workflows/` for configuration.

## Documentation

- [Product context](PRODUCT.md)
- [Drafting Notebook visual system](DESIGN.md)
- [MDX component authoring and APIs](docs/design/AUTHORING.md)
- [CSS architecture, theme startup, and article fallback constraints](docs/CSS.md)

Page-specific design briefs live in `.impeccable/surfaces/`; `.impeccable/design.json` holds visual-system extensions.
