import { beforeEach, expect, it, vi } from 'vitest'
import PostEntry from '@/components/PostEntry.astro'
import Sketch from '@/components/Sketch.astro'
import Article, { getStaticPaths } from '@/pages/blog/[...slug].astro'
import Writing from '@/pages/blog/index.astro'
import { render, samplePost } from '../../helpers'

const { getCollection, transitionNames } = vi.hoisted(() => ({
  getCollection: vi.fn(),
  transitionNames: [] as string[],
}))
// Any component can stand in for the rendered MDX body.
vi.mock('astro:content', () => ({
  getCollection,
  render: async () => ({ Content: Sketch, headings: [{ depth: 2, slug: 'one', text: 'One' }] }),
}))
// Record the transition:name values that Astro passes at render time.
vi.mock('astro/runtime/server/index.js', async (importOriginal) => {
  const original = await importOriginal<Record<string, (...args: unknown[]) => unknown>>()
  return {
    ...original,
    renderTransition: (...args: unknown[]) => {
      transitionNames.push(String(args[3]))
      return original.renderTransition(...args)
    },
  }
})

const posts = [
  samplePost('2025/old', '2025-01-01'),
  samplePost('draft', '2027-01-01', false),
  samplePost('2026/latest', '2026-08-22'),
]
beforeEach(() => {
  vi.stubEnv('DEV', false)
  getCollection.mockResolvedValue(posts)
  transitionNames.length = 0
})

it('production article routes are the published posts', async () => {
  const paths = await getStaticPaths()
  expect(paths.map((path) => path.params.slug)).toEqual(['2026/latest', '2025/old'])
})

it('archive links and article routes agree', async () => {
  const archive = await render(Writing, { request: new Request('https://example.com/blog') })
  const links = [...archive.querySelectorAll('.n-entry')].map((a) => a.getAttribute('href'))
  const routes = (await getStaticPaths()).map((path) => `/blog/${path.params.slug}`)
  expect(links).toEqual(routes)
})

it('article shows the title, back link and contents', async () => {
  const [{ props }] = await getStaticPaths()
  const document = await render(Article, { props, request: new Request('https://example.com/') })
  expect(document.querySelector('h1')?.textContent?.trim()).toBe('Title 2026/latest')
  expect(document.querySelector('h1')?.hasAttribute('data-astro-transition-scope')).toBe(true)
  expect(document.querySelector('.n-crumbs a')?.getAttribute('href')).toBe('/blog')
  expect(document.querySelector('[data-toc] a')?.getAttribute('href')).toBe('#one')
})

it('entry title and article title use the same transition name', async () => {
  const [{ props }] = await getStaticPaths()
  await render(PostEntry, { props })
  await render(Article, { props, request: new Request('https://example.com/') })
  expect(transitionNames).toEqual(['2026/latest-title', '2026/latest-title'])
})
