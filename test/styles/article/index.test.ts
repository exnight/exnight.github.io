import { readFileSync } from 'node:fs'
import { parse } from 'postcss'
import { expect, it } from 'vitest'

it('only the blog post page loads the article CSS, after the layout', () => {
  const page = readFileSync('src/pages/blog/[...slug].astro', 'utf8')
  const entry = "import '@/styles/article/index.css'"
  expect(page).toContain(entry)
  expect(page.indexOf("import Layout from '@/layouts/Layout.astro'")).toBeLessThan(
    page.indexOf(entry),
  )
  for (const path of ['src/styles/global.css', 'src/pages/index.astro', 'src/pages/blog/index.astro'])
    expect(readFileSync(path, 'utf8'), path).not.toMatch(
      /(?:import|@import)[^\n]*styles\/article|@import[^\n]*article/,
    )
})

it('article entry imports content, contents and code CSS into the components layer', () => {
  const imports: string[] = []
  parse(readFileSync('src/styles/article/index.css', 'utf8')).walkAtRules('import', (rule) => {
    imports.push(rule.params)
  })
  expect(imports).toEqual([
    "'./content.css' layer(components)",
    "'./toc.css' layer(components)",
    "'./code.css' layer(components)",
  ])
})
