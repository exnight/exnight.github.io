import { expect, it, vi } from 'vitest'
import { getBlogPosts, groupPostsByYear, selectPosts } from '@/lib/posts'

const { getCollection } = vi.hoisted(() => ({ getCollection: vi.fn() }))
vi.mock('astro:content', () => ({ getCollection }))

const post = (id: string, date: string, published = true) => ({
  id,
  data: { publishedOn: new Date(date), published },
})
const ids = (posts: { id: string }[]) => posts.map((p) => p.id)
const posts = () => [
  post('old', '2024-12-01'),
  post('draft', '2027-01-01', false),
  post('first', '2026-01-01'),
  post('latest', '2026-08-22'),
]

it('production list does not include drafts', () => {
  expect(ids(selectPosts(posts()))).toEqual(['latest', 'first', 'old'])
})

it('development list includes drafts', () => {
  expect(ids(selectPosts(posts(), true))).toEqual(['draft', 'latest', 'first', 'old'])
})

it('selection and grouping do not change the input array', () => {
  const input = posts()
  selectPosts(input, true)
  groupPostsByYear(input)
  expect(ids(input)).toEqual(['old', 'draft', 'first', 'latest'])
})

it('groups posts by year, latest first', () => {
  const grouped = groupPostsByYear(selectPosts(posts()))
  expect(grouped.map(([year, entries]) => [year, ids(entries)])).toEqual([
    [2026, ['latest', 'first']],
    [2024, ['old']],
  ])
  expect(groupPostsByYear([])).toEqual([])
})

it.each([false, true])('getBlogPosts loads the collection only when called (DEV=%s)', async (dev) => {
  vi.stubEnv('DEV', dev)
  getCollection.mockResolvedValue(posts())
  expect(getCollection).not.toHaveBeenCalled()
  const selected = await getBlogPosts()
  expect(getCollection).toHaveBeenCalledExactlyOnceWith('blog')
  expect(ids(selected)).toEqual(
    dev ? ['draft', 'latest', 'first', 'old'] : ['latest', 'first', 'old'],
  )
})
