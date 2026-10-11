import { resolve } from 'node:path'
import type { Root } from 'postcss'
import { beforeAll, expect, it } from 'vitest'
import { atRuleAncestors, compileCSS } from '../../helpers'

// Compile the Layout foundations followed by the page's actual article entry.
let css: Root
let loaded: string[]
const rules = new Map<string, Record<string, string>>()
beforeAll(async () => {
  ;({ root: css, loaded } = await compileCSS([], "\n@import './article/index.css';"))
  css.walkRules((rule) => {
    if (!rule.selector.startsWith('.notebook')) return
    const values: Record<string, string> = {}
    rule.walkDecls((decl) => {
      values[decl.prop] = decl.value
    })
    rules.set(rule.selector, values)
  })
})

it('article entry loads all four article stylesheets', () => {
  for (const name of ['index', 'content', 'toc', 'code'])
    expect(loaded).toContain(resolve(`src/styles/article/${name}.css`))
})

it('article, contents and code block rules are in the components layer', () => {
  const targets = ['.notebook .n-article', '.notebook .n-toc', '.notebook .n-prose pre']
  css.walkRules((rule) => {
    if (!targets.includes(rule.selector)) return
    const layer = atRuleAncestors(rule).find((parent) => parent.name === 'layer')
    expect(layer?.params, rule.selector).toBe('components')
  })
})

it('code uses the shared Preflight mono font and does not set its own', () => {
  const mono: string[] = []
  css.walkDecls('--default-mono-font-family', (decl) => {
    mono.push(decl.value)
  })
  expect(mono).toEqual(['var(--mono)'])
  let resetFamily = ''
  css.walkRules((rule) => {
    const selectors = rule.selector.split(',').map((selector) => selector.trim())
    if (selectors.includes('code') && selectors.includes('pre'))
      rule.walkDecls('font-family', (decl) => {
        resetFamily = decl.value
      })
  })
  expect(resetFamily).toMatch(/^var\(--default-mono-font-family,/)
  for (const selector of ['.notebook .n-prose pre', '.notebook .n-prose code:not(pre code)'])
    expect(rules.get(selector)).not.toHaveProperty('font-family')
  expect(rules.has('.notebook .n-prose pre code')).toBe(false)
})

it('code block keeps its box, language label and scrolling', () => {
  expect(rules.get('.notebook .n-prose pre')).toMatchObject({
    padding: '2rem 1.25rem 1.1rem',
    background: 'var(--raised)',
    'overflow-x': 'auto',
    'font-size': '0.86rem',
    'line-height': '1.6',
  })
  expect(rules.get('.notebook .n-prose pre[data-language]::before')?.content).toBe(
    'attr(data-language)',
  )
})

it.each(['light', 'dark'])('code highlighting uses the Shiki %s variables', (mode) => {
  const selector = `.notebook${mode === 'dark' ? '.dark' : ''} .n-prose .astro-code`
  expect(rules.get(selector)?.color).toBe(`var(--shiki-${mode})`)
  expect(rules.get(`${selector} span`)).toMatchObject({
    color: `var(--shiki-${mode})`,
    'font-style': `var(--shiki-${mode}-font-style)`,
    'font-weight': `var(--shiki-${mode}-font-weight)`,
    'text-decoration': `var(--shiki-${mode}-text-decoration)`,
  })
})

it('display math scrolls horizontally', () => {
  expect(rules.get('.notebook .n-prose .katex-display')).toEqual({
    'overflow-x': 'auto',
    'overflow-y': 'hidden',
  })
})
