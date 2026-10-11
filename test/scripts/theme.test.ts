// @vitest-environment happy-dom
import { readFileSync } from 'node:fs'
import { Storage } from 'happy-dom'
import { beforeEach, expect, it, vi } from 'vitest'
import { applyTheme, bindThemeToggle } from '@/scripts/theme'

const layout = readFileSync('src/layouts/Layout.astro', 'utf8')
const themeMeta = layout.match(/<meta\s+name="theme-color"[\s\S]*?\/>/)?.[0] ?? ''
const button = () => document.getElementById('theme-toggle')!
const meta = () => document.querySelector('meta')!

beforeEach(() => {
  vi.stubGlobal('localStorage', new Storage())
  document.documentElement.className = 'notebook'
  document.head.innerHTML = themeMeta
  document.body.innerHTML = '<button id="theme-toggle" hidden></button>'
})

it('applyTheme updates the class, button label and theme-color', () => {
  applyTheme('dark')
  expect(document.documentElement.classList.contains('dark')).toBe(true)
  expect(button().getAttribute('aria-label')).toBe('Switch to light theme')
  expect(meta().getAttribute('content')).toBe(meta().getAttribute('data-dark'))
  applyTheme('light')
  expect(button().getAttribute('title')).toBe('Switch to dark theme')
  expect(meta().getAttribute('content')).toBe(meta().getAttribute('data-light'))
})

it('applyTheme reads theme-color values from the metadata', () => {
  meta().setAttribute('data-dark', '#123456')
  applyTheme('dark')
  expect(meta().getAttribute('content')).toBe('#123456')
})

it('toggle binds once per button and saves each change', () => {
  bindThemeToggle()
  bindThemeToggle()
  expect(button().hidden).toBe(false)
  button().click()
  expect(localStorage.getItem('theme')).toBe('dark')

  document.body.innerHTML = '<button id="theme-toggle" hidden></button>'
  bindThemeToggle()
  expect(button().getAttribute('aria-label')).toBe('Switch to light theme')
  button().click()
  expect(localStorage.getItem('theme')).toBe('light')
})

it('toggle changes the theme when storage cannot be written', () => {
  vi.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(() => {
    throw new Error('denied')
  })
  bindThemeToggle()
  expect(() => button().click()).not.toThrow()
  expect(document.documentElement.classList.contains('dark')).toBe(true)
})
