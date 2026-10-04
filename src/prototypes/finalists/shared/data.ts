// Data for the approved prototype (Drafting Notebook v2): real posts plus the review fixture.
import { render } from 'astro:content'
import type { MarkdownHeading } from 'astro'

import * as fixture from '../fixtures/how-i-build-the-site.fixture.mdx'
import { prototypesEnabled, publishedPosts, type Post } from '@/prototypes/shared/data'

export const finalists = [
  {
    id: 'notebook-v2',
    label: 'Drafting Notebook v2 (approved direction)',
    short: 'Notebook v2',
    from: 'see finalists/notebook-v2/README.md',
  },
] as const

export type FinalistId = (typeof finalists)[number]['id']

export const FIXTURE_SLUG = 'review-fixture/how-i-build-the-site'

export interface Article {
  id: string
  title: string
  summary?: string
  publishedOn: Date
  updatedOn?: Date
  tags: string[]
  readTime: number
  headings: MarkdownHeading[]
  Content: any
  isFixture: boolean
}

export async function articleFromPost(post: Post): Promise<Article> {
  const { Content, headings } = await render(post)
  return { id: post.id, ...post.data, Content, headings, isFixture: false }
}

export function fixtureArticle(): Article {
  const fm = fixture.frontmatter as Record<string, any>
  return {
    id: FIXTURE_SLUG,
    title: fm.title,
    summary: fm.summary,
    publishedOn: new Date(fm.publishedOn),
    updatedOn: fm.updatedOn ? new Date(fm.updatedOn) : undefined,
    tags: fm.tags ?? [],
    readTime: fm.readTime ?? 5, // same default as the content collection schema
    headings: fixture.getHeadings(),
    Content: fixture.Content,
    isFixture: true,
  }
}

/** Pages shown in the finalist switcher. */
export const reviewPages = [
  { id: 'home', label: 'Home', path: '' },
  { id: 'writing', label: 'Writing', path: 'writing' },
  {
    id: '2026/flight-ticket-redemption',
    label: 'Post: Flight (lists, tables)',
    path: 'blog/2026/flight-ticket-redemption',
  },
  {
    id: FIXTURE_SLUG,
    label: 'Post: How I build + figures (code, maths, images)',
    path: `blog/${FIXTURE_SLUG}`,
  },
]

/** Static paths served by the existing /prototypes/[...path] route (no config change). */
export function finalistPaths() {
  if (!prototypesEnabled) return []
  return finalists.flatMap(({ id }) => [
    { params: { path: id }, props: { view: 'home', finalist: id } },
    { params: { path: `${id}/writing` }, props: { view: 'writing', finalist: id } },
    ...publishedPosts().map((post) => ({
      params: { path: `${id}/blog/${post.id}` },
      props: { view: 'post', finalist: id, post },
    })),
    { params: { path: `${id}/blog/${FIXTURE_SLUG}` }, props: { view: 'fixture', finalist: id } },
  ])
}
