import { expect, it } from 'vitest'
import PostMeta from '@/components/PostMeta.astro'
import { classesIn, compileCSS, render, renderHTML, uncompiledUtilities } from '../helpers'

const data = {
  publishedOn: new Date('2026-01-04'),
  updatedOn: new Date('2026-08-14'),
  readTime: 5,
  tags: ['Web Dev', 'Astro'],
}

it('article record shows the updated date before the topics', async () => {
  const html = await renderHTML(PostMeta, { props: { data, article: true } })
  expect(html).toContain('Aug 14, 2026')
  expect(html).toContain('2026-08-14T00:00:00.000Z')
  expect(html.indexOf('Updated')).toBeGreaterThan(-1)
  expect(html.indexOf('Updated')).toBeLessThan(html.indexOf('aria-label="Topics"'))
})

it.each([false, true])('record spacing belongs to the article CSS (article=%s)', async (article) => {
  const record = (await render(PostMeta, { props: { data, article } })).querySelector('.n-meta')!
  expect(record.classList.contains('m-0')).toBe(!article)
  expect(record.classList.contains('n-article__meta')).toBe(article)
})

it('record separator compiles to a middle dot with compact spacing', async () => {
  // Escaped JSX source can make Tailwind generate a class that Astro does not render.
  const { css } = await compileCSS(classesIn(await render(PostMeta, { props: { data } })))
  expect(css).toContain("--tw-content: '·'")
  expect(css).not.toContain("--tw-content: 'xB7'")
  expect(css).toContain('@media (width <= 45rem)')
  expect(css).toContain('margin-inline: calc(var(--spacing) * 2)')
})

it('every article record utility class compiles', async () => {
  const document = await render(PostMeta, { props: { data, article: true } })
  expect(await uncompiledUtilities(classesIn(document))).toEqual([])
})
