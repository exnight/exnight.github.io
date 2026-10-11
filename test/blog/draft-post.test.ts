import { readFileSync } from 'node:fs'
import { parseFrontmatter } from '@astrojs/markdown-remark'
import { expect, it } from 'vitest'

it('draft sample post is not published', () => {
  const { frontmatter } = parseFrontmatter(readFileSync('src/blog/draft-post.mdx', 'utf8'))
  expect(frontmatter.published).toBe(false)
})
