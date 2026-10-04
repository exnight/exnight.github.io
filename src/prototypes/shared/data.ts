// Shared, real content for the approved prototype (Drafting Notebook v2).
// Prototypes are exploration only: they never render in a production build unless
// PROTOTYPES=1 is set explicitly (used for local browser inspection).
import type { CollectionEntry } from 'astro:content'

import { DATE_FORMAT_DISPLAY, getSortedBlogPosts } from '@/utils'

export const prototypesEnabled = import.meta.env.DEV || process.env.PROTOTYPES === '1'

export type Post = CollectionEntry<'blog'>

/** Published posts only, newest first — mirrors what visitors actually see. */
export const publishedPosts = (): Post[] =>
  getSortedBlogPosts().filter((post) => post.data.published)

export const formatDate = (date: Date) => date.toLocaleDateString('en-US', DATE_FORMAT_DISPLAY)

/** Copied verbatim from src/sections/Hero.astro — do not edit copy here. */
export const profile = {
  name: 'Leo Wong',
  role: 'Software engineer',
  statement: 'I build software and keep notes on what I learn.',
  detail:
    'I love automation and I create tools for the team to improve the quality of life. I also write about travelling, competitive gaming, photography, and basketball.',
  profession: [
    'Backend applications',
    'Data pipelines',
    'Cloud infrastructure',
    'CI/CD automation',
  ],
  beyondWork: ['Travelling', 'Competitive gaming', 'Photography', 'Basketball'],
  github: 'https://github.com/exnight',
  linkedin: 'https://www.linkedin.com/in/jyleowong/',
}
