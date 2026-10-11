import { expect, it } from 'vitest'
import ThemeToggle from '@/components/ThemeToggle.astro'
import { render } from '../helpers'

it('theme button is hidden and labelled before the script starts', async () => {
  const button = (await render(ThemeToggle)).querySelector('button')!
  expect(button.id).toBe('theme-toggle')
  expect(button.hidden).toBe(true)
  expect(button.type).toBe('button')
  expect(button.getAttribute('aria-label')).toBe('Switch to dark theme')
})

it('theme button artwork is decorative and has both icons', async () => {
  const button = (await render(ThemeToggle)).querySelector('button')!
  expect(button.querySelector('svg')?.getAttribute('aria-hidden')).toBe('true')
  expect(button.querySelector('.n-theme__moon')).not.toBeNull()
  expect(button.querySelector('.n-theme__sun')).not.toBeNull()
})
