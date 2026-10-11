import { expect, it } from 'vitest'
import { atRuleAncestors, compileCSS, utilityValues } from '../helpers'

it('project utilities use the theme variables', async () => {
  const contracts = [
    ['text-ink', 'color', 'var(--ink)'],
    ['text-muted', 'color', 'var(--muted)'],
    ['border-pen', 'border-color', 'var(--pen)'],
    ['border-strong-hairline', 'border-color', 'var(--hair-strong)'],
    ['bg-raised-paper', 'background-color', 'var(--raised)'],
    ['rounded-sheet', 'border-radius', 'var(--r-md)'],
    ['font-display', 'font-family', 'var(--display)'],
    ['font-serif', 'font-family', 'var(--serif)'],
    ['font-mono', 'font-family', 'var(--mono)'],
  ]
  const { root } = await compileCSS(contracts.map(([utility]) => utility))
  for (const [utility, property, value] of contracts)
    expect(utilityValues(root, utility, property).map((d) => d.value), utility).toContain(value)
})

it('shared frame keeps its geometry in the components layer', async () => {
  const { root } = await compileCSS([])
  const frames: unknown[] = []
  root.walkRules('.notebook .n-wrap', (rule) => {
    const declarations: Record<string, string> = {}
    rule.walkDecls((declaration) => {
      declarations[declaration.prop] = declaration.value
    })
    const layers = atRuleAncestors(rule).filter((a) => a.name === 'layer').map((a) => a.params)
    frames.push({ declarations, layers })
  })
  expect(frames).toEqual([
    {
      declarations: {
        width: 'min(77.5rem, calc(100% - 2 * clamp(1.125rem, 4vw, 3rem)))',
        'margin-inline': 'auto',
      },
      layers: ['components'],
    },
  ])
})

it.each([
  ['stacked', '(width <= 56.25rem)'],
  ['compact', '(width <= 45rem)'],
  ['narrow', '(width <= 23.75rem)'],
])('%s variant applies at %s', async (variant, media) => {
  const utility = `${variant}:hidden`
  const { root } = await compileCSS([utility])
  expect(utilityValues(root, utility, 'display')).toEqual([{ value: 'none', media: [media] }])
})
