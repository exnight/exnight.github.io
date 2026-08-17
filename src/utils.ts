import { getCollection } from 'astro:content'

export const DATE_FORMAT_DISPLAY: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

export const blogPosts = await getCollection('blog', ({ data }) => {
  return import.meta.env.DEV ? data : data.published == true
})

export function getSortedBlogPosts() {
  return [...blogPosts].sort(
    (a, b) => b.data.publishedOn.valueOf() - a.data.publishedOn.valueOf(),
  )
}
