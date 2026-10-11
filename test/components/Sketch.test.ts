import { expect, it } from 'vitest'
import Sketch from '@/components/Sketch.astro'
import { render } from '../helpers'

it.each([
  ['underline', 2],
  ['circle', 1],
  ['arrow', 2],
  ['highlight', 1],
] as const)('%s sketch is decorative and keeps the caller class', async (kind, paths) => {
  const svg = (await render(Sketch, { props: { kind, class: 'placement-hook' } })).querySelector(
    'svg',
  )!
  expect(svg.classList.contains('placement-hook')).toBe(true)
  expect(svg.classList.contains(`n-sketch--${kind}`)).toBe(true)
  expect(svg.getAttribute('aria-hidden')).toBe('true')
  expect(svg.getAttribute('focusable')).toBe('false')
  expect(svg.querySelectorAll('path')).toHaveLength(paths)
})
