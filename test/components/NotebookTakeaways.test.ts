import { expect, it } from 'vitest'
import NotebookTakeaways from '@/components/NotebookTakeaways.astro'
import { classesIn, render, renderHTML, uncompiledUtilities } from '../helpers'

it('takeaways wraps the authored blocks without a script', async () => {
  const body = '<p>First paragraph.</p><ul><li>First point</li><li>Second point</li></ul>'
  const html = await renderHTML(NotebookTakeaways, { slots: { default: body } })
  expect(html).toMatch(/class="n-takeaways(?:\s|")/)
  expect(html).toContain(body)
  expect(html).not.toContain('<script')
})

it('takeaways utilities compile and leave reading typography to the article', async () => {
  const classes = classesIn(await render(NotebookTakeaways))
  expect(await uncompiledUtilities(classes)).toEqual([])
  expect(classes.filter((name) => /^(?:font-|leading-|w-|max-w-)/.test(name))).toEqual([])
})
