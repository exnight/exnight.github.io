import { expect, it } from 'vitest'
import PostEntry from '@/components/PostEntry.astro'
import { classesIn, parseHTML, renderHTML, uncompiledUtilities } from '../helpers'

const data = {
  title: 'An unusually long title about building a small personal publication',
  publishedOn: new Date('2026-01-04'),
  updatedOn: new Date('2026-08-14'),
  readTime: 5,
  tags: ['Web Dev', 'Astro', 'Tailwind CSS', 'A-long-topic-without-breaks'],
  published: true,
}
const entry = (overrides = {}) =>
  renderHTML(PostEntry, {
    props: { post: { id: '2026/how-i-build-the-site', data: { ...data, ...overrides } } },
  })

it('entry shows title, date, read time, summary and topics in that order', async () => {
  const html = await entry({ summary: 'A short summary.' })
  expect(html).toContain('href="/blog/2026/how-i-build-the-site"')
  const order = [data.title, 'Jan 4, 2026', '5 min read', 'A short summary.', 'aria-label="Topics"']
  const positions = order.map((text) => html.indexOf(text))
  expect(positions.every((position) => position >= 0)).toBe(true)
  expect(positions).toEqual([...positions].sort((a, b) => a - b))
  for (const tag of data.tags) expect(html).toContain(`<li>${tag}</li>`)
})

it('entry does not show the updated date or extra controls', async () => {
  const html = await entry({ summary: 'A short summary.' })
  expect(html).not.toContain('Updated')
  expect(html).not.toContain('n-balloon')
  expect(html).not.toContain('<button')
})

it('entry omits an absent summary and empty topics', async () => {
  const html = await entry({ tags: [] })
  expect(html).not.toContain('n-entry__summary')
  expect(html).not.toContain('aria-label="Topics"')
})

it('entry uses the CSS ease-out keyword, not the Tailwind curve', async () => {
  expect((await entry()).match(/ease-\[ease-out\]/g)).toHaveLength(2)
})

it('every entry utility class compiles', async () => {
  const document = parseHTML(await entry({ summary: 'A short summary.' }))
  expect(await uncompiledUtilities(classesIn(document))).toEqual([])
})
