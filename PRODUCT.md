# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People evaluating Leo professionally and readers of his technical and personal writing. Visitors should understand who he is and explore relevant posts without the professional profile overwhelming the blog.

## Product Purpose

Leo Wong’s low-maintenance personal website and blog: a durable home for his professional identity, software-engineering writing, and personal interests. Success means publishing consistently without recurring interface work.

## Operating Context

Leo writes MDX posts with structured frontmatter, previews locally, then commits and pushes for static rebuild and deployment. Visitors browse the homepage, archive, and articles in light or dark mode. Interests include software engineering, web development, photography, basketball, competitive gaming, and travel.

## Capabilities and Constraints

- Astro, TypeScript, Tailwind CSS, MDX, and static generation; posts support summaries, dates, tags, code, and mathematics.
- Publishing remains file-based. Preserve existing routes, post IDs/slugs, authored content, and heading anchors; see [publishing contracts](README.md#publishing-contracts) and [authoring APIs](docs/design/AUTHORING.md).
- Cloudflare Pages is deployed; GitHub Pages is paused. Deployment configuration belongs in repository documentation, not the product brief.
- Additional features remain undecided. Add them only when lasting value for reading, discovery, publishing, or professional understanding outweighs maintenance cost.

## Brand Commitments

- Preserve Leo Wong’s identity as a software engineer with interests beyond engineering, the LW mark, and blue pen identity. See [DESIGN.md](DESIGN.md) for the visual system.
- Keep this a personal publication, not a marketing funnel or feature-heavy portfolio; allow professional and personal topics to evolve.
- Keep claims factual. Do not invent testimonials, endorsements, audience metrics, awards, benchmarks, achievements, or other proof.

## Evidence on Hand

The professional summary and interests are in `src/sections/Hero.astro`; technical and photography writing is in `src/blog/`. No project case studies, testimonials, audience metrics, client logos, or other external proof are currently present.
