import { beforeEach, expect, it, vi } from 'vitest'
import Writing from '@/pages/blog/index.astro'
import { render, samplePost } from '../../helpers'

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }))
vi.mock('astro:content', () => ({ getCollection }))
const writing = () => render(Writing, { request: new Request('https://example.com/blog') })

beforeEach(() => {
  vi.stubEnv('DEV', false)
  getCollection.mockResolvedValue([
    samplePost('2025/old', '2025-01-01'),
    samplePost('draft', '2027-01-01', false),
    samplePost('2026/first', '2026-01-01'),
    samplePost('2026/latest', '2026-08-22'),
  ])
})

it('archive lists only published posts by year, newest first', async () => {
  const document = await writing()
  expect([...document.querySelectorAll('section h2')].map((h) => h.textContent?.trim())).toEqual([
    '2026',
    '2025',
  ])
  expect([...document.querySelectorAll('.n-entry')].map((a) => a.getAttribute('href'))).toEqual([
    '/blog/2026/latest',
    '/blog/2026/first',
    '/blog/2025/old',
  ])
})

it('archive shows the number of published posts', async () => {
  expect((await writing()).querySelector('.n-archive__count')?.textContent).toContain('3 posts')
})

it('archive shows a message when no post is published', async () => {
  getCollection.mockResolvedValue([samplePost('draft', '2027-01-01', false)])
  const document = await writing()
  expect(document.querySelectorAll('.n-entry')).toHaveLength(0)
  expect(document.querySelector('.n-archive__empty')).not.toBeNull()
})
