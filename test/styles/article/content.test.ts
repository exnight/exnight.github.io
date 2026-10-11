import { readFileSync } from 'node:fs'
import { parse } from 'postcss'
import { expect, it } from 'vitest'

const source = readFileSync('src/styles/article/content.css', 'utf8')
const css = parse(source)
const base = new Map<string, Record<string, string>>()
const captionCaps: string[] = []
css.walkRules((rule) => {
  const values: Record<string, string> = {}
  rule.walkDecls((decl) => {
    values[decl.prop] = decl.value
  })
  if (rule.parent?.type === 'root') base.set(rule.selector, values)
  if (rule.selector === '.notebook .n-prose caption')
    captionCaps.push(values['max-width'].replace(/\s+/g, ''))
})

it('content CSS uses only the 65.5rem and 45rem breakpoints', () => {
  const queries = [...source.matchAll(/@media \([^)]*\)/g)].map(([query]) => query)
  expect(new Set(queries)).toEqual(new Set(['@media (width <= 65.5rem)', '@media (width <= 45rem)']))
})

it('tables and wide figures keep their grid columns and numbering', () => {
  expect(base.get('.notebook .n-prose')?.['counter-reset']).toBe('sec tbl fig')
  expect(base.get('.notebook .n-prose .notebook-table')).toEqual({
    'counter-increment': 'tbl',
    'grid-column': '1',
  })
  expect(base.get('.notebook .n-prose .notebook-table.is-wide')).toEqual({ 'grid-column': '1 / -1' })
  expect(
    base.get('.notebook .n-prose .notebook-figure--wide,\n.notebook .n-prose .notebook-figure--tall'),
  ).toEqual({ 'grid-column': '1 / -1' })
  expect(base.get('.notebook .n-prose caption::before')?.content).toBe("'Table ' counter(tbl) ' —'")
})

it('table captions keep the four width limits in order', () => {
  expect(captionCaps).toEqual([
    'var(--reading-base)',
    'min(100%,calc(100vw-2*clamp(1.125rem,4vw,3rem)),var(--reading-base))',
    'min(100%,calc(100cqi-var(--contents-width)-2*var(--article-gap)),calc(var(--reading-base)+max(0px,(100cqi-var(--contents-width)-var(--reading-base)-2*var(--article-gap))*var(--reading-share))))',
    'min(100%,100cqi,var(--reading-base))',
  ])
})

it('subgrid support and fallback rules stay in place', () => {
  const support = css.nodes.find((node) => node.type === 'atrule' && node.name === 'supports')!
  expect(support.type === 'atrule' && support.params).toBe(
    '(width: 1cqi) and (grid-template-columns: subgrid)',
  )
  expect(source).toContain('container-type: inline-size')
  expect(source).toMatch(
    /@supports not \(grid-template-columns: subgrid\)[\s\S]*?\.notebook-table,[\s\S]*?\.notebook-figure--wide \{\s*grid-column: 1;/,
  )
})
