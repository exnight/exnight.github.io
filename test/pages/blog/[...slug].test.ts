import { expect, it, vi } from 'vitest'
import { getStaticPaths } from '@/pages/blog/[...slug].astro'
import { samplePost } from '../../helpers'

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }))
vi.mock('astro:content', () => ({ getCollection }))

it.each([false, true])('article routes select newest posts (DEV=%s)', async (dev) => {
  vi.stubEnv('DEV', dev)
  getCollection.mockResolvedValue([
    samplePost('2025/old', '2025-01-01'),
    samplePost('draft', '2027-01-01', false),
    samplePost('2026/latest', '2026-08-22'),
  ])
  expect((await getStaticPaths()).map((path) => path.params.slug))
    .toEqual(dev ? ['draft', '2026/latest', '2025/old'] : ['2026/latest', '2025/old'])
})
