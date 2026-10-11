import { beforeEach, expect, it, vi } from 'vitest'
import Home from '@/pages/index.astro'
import { render, samplePost } from '../helpers'

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }))
vi.mock('astro:content', () => ({ getCollection }))
const home = () => render(Home, { request: new Request('https://example.com/') })

beforeEach(() => {
  vi.stubEnv('DEV', false)
})

it('home shows the two latest published posts', async () => {
  getCollection.mockResolvedValue([
    samplePost('2025/old', '2025-01-01'),
    samplePost('draft', '2027-01-01', false),
    samplePost('2026/first', '2026-01-01'),
    samplePost('2026/latest', '2026-08-22'),
  ])
  const links = [...(await home()).querySelectorAll('.n-entry')]
  expect(links.map((link) => link.getAttribute('href'))).toEqual([
    '/blog/2026/latest',
    '/blog/2026/first',
  ])
})

it('home shows no entries when no post is published', async () => {
  getCollection.mockResolvedValue([samplePost('draft', '2027-01-01', false)])
  expect((await home()).querySelectorAll('.n-entry')).toHaveLength(0)
})
