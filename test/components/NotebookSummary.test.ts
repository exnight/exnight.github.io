import { expect, it } from 'vitest'
import NotebookSummary from '@/components/NotebookSummary.astro'
import { classesIn, render, renderHTML, scopedRules, uncompiledUtilities } from '../helpers'

it('summary wraps the authored blocks without a script', async () => {
  const body = '<p>First paragraph.</p><ul><li>First point</li><li>Second point</li></ul>'
  const html = await renderHTML(NotebookSummary, { slots: { default: body } })
  expect(html).toMatch(/class="n-summary(?:\s|")/)
  expect(html).toContain(body)
  expect(html).not.toContain('<script')
})

it('summary utilities compile and leave reading typography to the article', async () => {
  const classes = classesIn(await render(NotebookSummary))
  expect(await uncompiledUtilities(classes)).toEqual([])
  expect(classes.filter((name) => /^(?:font-|leading-|w-|max-w-)/.test(name))).toEqual([])
})

it('summary paper and tape effects are scoped in the components layer', async () => {
  const rules = await scopedRules('src/components/NotebookSummary.astro')
  expect(rules).toHaveLength(3)
  for (const rule of rules) {
    expect(rule.selector).toContain('.astro-')
    expect(rule.layer).toBe('components')
  }
  expect(rules.find((r) => r.selector.endsWith('::after') && !r.media)?.values).toMatchObject({
    position: 'absolute',
    'z-index': '-1',
    inset: '0',
    border: '1px solid var(--hair-strong)',
    'border-radius': 'var(--r-md)',
    background: 'var(--raised)',
    transform: 'rotate(-0.5deg)',
  })
  expect(rules.find((r) => r.selector.endsWith('::before'))?.values).toMatchObject({
    top: '-0.65rem',
    left: '50%',
    width: '4.5rem',
    height: '1.15rem',
    'border-radius': '2px',
    background: 'color-mix(in srgb,var(--marker) 55%,transparent)',
    transform: 'translateX(-50%) rotate(-3deg)',
  })
})

it('mobile removes only the paper tilt', async () => {
  const mobile = (await scopedRules('src/components/NotebookSummary.astro')).filter((r) => r.media)
  expect(mobile).toHaveLength(1)
  expect(mobile[0].selector).toMatch(/::after$/)
  expect(mobile[0].media).toBe('(width <= 45rem)')
  expect(mobile[0].values).toEqual({ transform: 'none' })
})
