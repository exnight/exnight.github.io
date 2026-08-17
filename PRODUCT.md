# Product

<!-- impeccable:product-schema 1 -->

## Platform

Static webpages deployed on GitHub pages and/or Cloudflare pages.

## Users

The primary audience is balanced between people evaluating site owner professionally and readers interested in his technical and personal writing. Visitors should be able to understand who Leo is, what he works on, and what he is interested in, then explore relevant posts without the professional profile overwhelming the blog.

## Product Purpose

This is Leo's low-maintenance personal website and blog. It provides a durable home for his professional identity and for writing about software engineering and personal interests. Success means Leo can publish consistently by adding or updating Markdown/MDX files and rebuilding the static site, without interface work becoming a recurring barrier to creating content.

## Positioning

The site is a personally maintained publication rather than a marketing funnel or a feature-heavy portfolio. One lightweight static publishing workflow supports both credible engineering context and personal writing, allowing Leo's interests and perspective to accumulate over time.

## Operating Context

- Author writes posts as MDX files with structured frontmatter, previews them locally, then commits and pushes the site for a static rebuild and deployment.
- The site is intentionally maintained with limited ongoing effort, unless new features are added.
- Current subject matter includes software engineering, web development, photography, basketball, competitive gaming, and traveling.
- Visitors browse a homepage, a blog index, and individual posts in light or dark mode.

## Capabilities and Constraints

- The existing implementation uses Astro, TypeScript, Tailwind CSS, MDX, and static generation.
- Blog content supports summaries, dates, tags, code blocks, and mathematical notation.
- Publishing must remain file-based: adding or updating Markdown/MDX content and rebuilding the site is the core workflow.
- GitHub Pages and Cloudflare Pages are documented deployment targets; GitHub Pages is currently
  paused during the site revamp, and Cloudflare Pages deployment details remain undecided.
- Additional site features are deliberately undecided. New functionality should be added only when it clearly improves reading, discovery, publishing, or professional understanding without creating meaningful maintenance overhead.

## Brand Commitments

- Preserve the Leo Wong identity and the truthful description of him as a software engineer with interests beyond engineering.
- Keep the site broad enough for both professional and personal-interest writing as the topic mix evolves.
- Claims must remain factual. Do not invent testimonials, client or employer endorsements, audience numbers, awards, benchmarks, achievements, or other social proof.

## Evidence on Hand

- The homepage contains an existing professional summary and an overview of Leo's interests in
  `src/sections/Hero.astro`.
- Existing posts demonstrate technical and photography subject matter in `src/blog/`.
- The repository documents the stack, local workflow, and deployment status in `README.md`.
- No project case studies, testimonials, audience metrics, client logos, or other external proof are
  currently present and must not be fabricated.

## Product Principles

1. Protect publishing momentum: content creation must not wait on recurring UI work.
2. Keep maintenance proportional to a personal static site.
3. Balance professional clarity with room for personal curiosity and evolving interests.
4. Let real writing and demonstrated work provide credibility instead of manufactured proof.
5. Add features only when their lasting value exceeds their maintenance cost.
