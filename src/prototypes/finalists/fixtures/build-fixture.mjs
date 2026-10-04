// Generates the review fixture from the real post, preserving its wording exactly.
// Only two prototype figures (real screenshots of the current site) are inserted.
// Run from the repo root:  node src/prototypes/finalists/fixtures/build-fixture.mjs
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const source = path.join(root, 'src/blog/2026/how-I-build-the-site.mdx')
const target = path.join(root, 'src/prototypes/finalists/fixtures/how-i-build-the-site.fixture.mdx')

const raw = fs.readFileSync(source, 'utf8')
const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
if (!match) throw new Error('Could not parse front matter')
const [, frontmatter, body] = match

const figure = (name, alt, caption, shape) =>
  `<Figure src={${name}} alt="${alt}" caption="${caption}" shape="${shape}" />\n\n`

const inserts = [
  {
    // After the first paragraph under "Site Evolution"
    after: /## Site Evolution\n\n[^\n]+\n\n/,
    mdx: figure(
      'homeDesktop',
      'The current homepage at desktop width: a serif statement flanked by Profession and Beyond Work lists, above two latest posts.',
      'Prototype figure — the current homepage (desktop), captured from the production build.',
      'wide',
    ),
  },
  {
    // Before "## Takeaways"
    before: '## Takeaways',
    mdx: figure(
      'postMobile',
      'The current post page on a phone: post title, summary, metadata and a collapsed table of contents.',
      'Prototype figure — the current post page (mobile), captured from the production build.',
      'tall',
    ),
  },
]

let out = body
for (const insert of inserts) {
  if (insert.after) {
    const m = out.match(insert.after)
    if (!m) throw new Error('Anchor not found: ' + insert.after)
    out = out.replace(m[0], m[0] + insert.mdx)
  } else {
    if (!out.includes(insert.before)) throw new Error('Anchor not found: ' + insert.before)
    out = out.replace(insert.before, insert.mdx + insert.before)
  }
}

// Wording check: removing the inserted figures must give back the original body.
const stripped = out.replace(/<Figure [^\n]+\/>\n\n/g, '')
if (stripped !== body) throw new Error('Fixture body differs from the source post')

const header = `---
${frontmatter}
---

import Figure from '../shared/Figure.astro'
import homeDesktop from './images/current-homepage-desktop.png'
import postMobile from './images/current-post-mobile.png'

{/* GENERATED from src/blog/2026/how-I-build-the-site.mdx by build-fixture.mjs — do not edit.
    Post wording is unchanged; only the two prototype figures are inserted. */}

`
fs.writeFileSync(target, header + out)
console.log('Wrote', path.relative(root, target))
