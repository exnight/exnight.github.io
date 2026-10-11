import { readFileSync } from 'node:fs'
import { expect, it } from 'vitest'
import { createWindow } from '../helpers'

it('layout theme-color metadata matches the paper colour in theme.css', () => {
  const layout = readFileSync('src/layouts/Layout.astro', 'utf8')
  const { document, getComputedStyle } = createWindow()
  document.head.innerHTML = layout.match(/<meta\s+name="theme-color"[\s\S]*?\/>/)?.[0] ?? ''
  const style = document.createElement('style')
  style.textContent = readFileSync('src/styles/theme.css', 'utf8')
  document.head.append(style)
  const root = document.documentElement
  const meta = document.querySelector('meta')!

  for (const theme of ['light', 'dark']) {
    root.classList.toggle('dark', theme === 'dark')
    const paper = getComputedStyle(root).getPropertyValue('--paper').trim()
    expect(paper).not.toBe('')
    expect(meta.getAttribute(`data-${theme}`)).toBe(paper)
  }
  expect(meta.getAttribute('content')).toBe(meta.getAttribute('data-light'))
})
