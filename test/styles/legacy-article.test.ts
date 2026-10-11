import { expect, it } from 'vitest'
import { compileCSS, utilityValues } from '../helpers'

it('temporary article bridge retains legacy utilities and Typography', async () => {
  const contracts = [
    ['text-article-title', 'font-size', 'clamp(3.1rem, 6vw, 4.75rem)'],
    ['text-article-body', 'font-size', 'clamp(1.05rem, 1.25vw, 1.17rem)'],
    ['text-vermilion', 'color', 'var(--vermilion)'],
    ['bg-paper-raised', 'background-color', 'var(--paper-raised)'],
    ['border-line', 'border-color', 'var(--line)'],
    ['px-rail', 'padding-inline', 'clamp(1.2rem, 1.8vw, 1.8rem)'],
  ]
  const { root, loaded } = await compileCSS(['prose', ...contracts.map(([utility]) => utility)])
  expect(loaded.some((path) => path.endsWith('/legacy-article.css'))).toBe(true)
  for (const [utility, property, value] of contracts)
    expect(utilityValues(root, utility, property).map((d) => d.value), utility).toContain(value)
  let prose = false
  root.walkRules('.prose', () => { prose = true })
  expect(prose).toBe(true)
})
