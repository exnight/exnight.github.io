import { expect, it, vi } from 'vitest'
import Writing from '@/pages/blog/index.astro'
import { render, samplePost } from '../../helpers'

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }))
vi.mock('astro:content', () => ({ getCollection }))

it.each([false, true])('archive selects and groups posts (DEV=%s)', async (dev) => {
  vi.stubEnv('DEV', dev)
  getCollection.mockResolvedValue([
    samplePost('2025/old', '2025-01-01'),
    samplePost('draft', '2027-01-01', false),
    samplePost('2026/latest', '2026-08-22'),
  ])
  const document = await render(Writing, { request: new Request('https://example.com/blog') })
  expect([...document.querySelectorAll('h2[id^="year-"]')].map((h) => h.textContent?.trim()))
    .toEqual(dev ? ['2027', '2026', '2025'] : ['2026', '2025'])
  expect([...document.querySelectorAll('main a[href^="/blog/"]')].map((a) => a.getAttribute('href')))
    .toEqual(dev ? ['/blog/draft', '/blog/2026/latest', '/blog/2025/old'] : ['/blog/2026/latest', '/blog/2025/old'])
})
