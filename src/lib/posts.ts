export const DATE_FORMAT_DISPLAY: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}

/** Load Astro content only when a page requests posts. */
export async function getBlogPosts() {
  const { getCollection } = await import('astro:content')
  return selectPosts(await getCollection('blog'), import.meta.env.DEV)
}

interface DatedPost {
  data: { publishedOn: Date; published: boolean }
}

/** Never mutates collection order; drafts are an explicit development-only option. */
export function selectPosts<T extends DatedPost>(posts: T[], dev = false): T[] {
  return posts
    .filter((post) => dev || post.data.published)
    .sort((a, b) => b.data.publishedOn.valueOf() - a.data.publishedOn.valueOf())
}

export function groupPostsByYear<T extends DatedPost>(posts: T[]) {
  const years = new Map<number, T[]>()
  for (const post of [...posts].sort(
    (a, b) => b.data.publishedOn.valueOf() - a.data.publishedOn.valueOf(),
  )) {
    const year = post.data.publishedOn.getFullYear()
    years.set(year, [...(years.get(year) || []), post])
  }
  return [...years].sort(([a], [b]) => b - a)
}
