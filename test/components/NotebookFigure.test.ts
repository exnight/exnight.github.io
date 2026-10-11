import { expect, it } from 'vitest'
import NotebookFigure from '@/components/NotebookFigure.astro'
import { classesIn, parseHTML, renderHTML, scopedRules, uncompiledUtilities } from '../helpers'

const props = { src: '/image.png', alt: 'Reading layout' }
const figure = (kind: string) =>
  renderHTML(NotebookFigure, {
    props: { ...props, kind, width: 480, height: 720, caption: 'A real capture.' },
  })

it.each([
  ['text', null],
  ['wide', 'notebook-figure--wide'],
  ['phone', 'notebook-figure--tall'],
])('%s figure keeps image attributes and the caption', async (kind, modifier) => {
  const html = await figure(kind)
  expect(html).toContain('<figure')
  expect(html).toMatch(/<figcaption[^>]*>A real capture\.<\/figcaption>/)
  for (const attr of [
    'alt="Reading layout"',
    'width="480"',
    'height="720"',
    'loading="lazy"',
    'decoding="async"',
  ])
    expect(html).toContain(attr)
  if (modifier) expect(html).toContain(modifier)
  else expect(html).not.toMatch(/notebook-figure--(?:wide|tall)/)
})

it('figure caption is optional and can come from the slot', async () => {
  expect(await renderHTML(NotebookFigure, { props })).not.toContain('<figcaption')
  expect(
    await renderHTML(NotebookFigure, { props, slots: { default: '<p>Slot caption.</p>' } }),
  ).toContain('<p>Slot caption.</p>')
})

it('figure utilities compile and do not set grid columns', async () => {
  const document = parseHTML(
    (await figure('text')) + (await figure('wide')) + (await figure('phone')),
  )
  expect(await uncompiledUtilities(classesIn(document))).toEqual([])
  for (const el of document.querySelectorAll('figure'))
    expect([...el.classList].filter((name) => name.startsWith('col-'))).toEqual([])
})

it('figure counter and label are scoped in the components layer', async () => {
  const rules = await scopedRules('src/components/NotebookFigure.astro')
  for (const rule of rules) {
    expect(rule.selector).toContain('.astro-')
    expect(rule.layer).toBe('components')
  }
  expect(rules.map((rule) => rule.values)).toEqual([
    { 'counter-increment': 'fig' },
    {
      display: 'block',
      'margin-bottom': '0.15rem',
      color: 'var(--pen)',
      content: expect.stringMatching(/^['"]fig\. ['"]\s*counter\(fig\)$/),
      'font-family': 'var(--mono)',
      'font-size': '0.72rem',
      'font-style': 'normal',
    },
  ])
})
