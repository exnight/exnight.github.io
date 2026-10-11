import { expect, it, vi } from 'vitest'
import Home from '@/pages/index.astro'
import { render, samplePost } from '../helpers'

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }))
vi.mock('astro:content', () => ({ getCollection }))

it.each([false, true])('home shows two latest published posts (DEV=%s)', async (dev) => {
  vi.stubEnv('DEV', dev)
  getCollection.mockResolvedValue([
    samplePost('2025/old', '2025-01-01'),
    samplePost('draft', '2027-01-01', false),
    samplePost('2026/first', '2026-01-01'),
    samplePost('2026/latest', '2026-08-22'),
  ])
  const document = await render(Home, { request: new Request('https://example.com/') })
  const links = [...document.querySelectorAll('[aria-labelledby="recent-writing-heading"] a[href^="/blog/"]')]
  expect(links.map((link) => link.getAttribute('href'))).toEqual([
    '/blog/2026/latest', '/blog/2026/first',
  ])
})
