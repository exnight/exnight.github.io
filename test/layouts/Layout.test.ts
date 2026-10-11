import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import { Storage } from 'happy-dom'
import { expect, it, vi } from 'vitest'
import Layout from '@/layouts/Layout.astro'
import { createWindow, render } from '../helpers'

// Run the production pre-paint script, not a copy of its preference logic.
const layout = readFileSync('src/layouts/Layout.astro', 'utf8')
const initializer = layout.match(/<script is:inline>([\s\S]*?)<\/script>/)?.[1] ?? ''
const themeMeta = layout.match(/<meta\s+name="theme-color"[\s\S]*?\/>/)?.[0] ?? ''

function startup(storage = new Storage(), prefersDark = true) {
  const browser = createWindow()
  browser.document.head.innerHTML = themeMeta
  const context = {
    window: { matchMedia: () => ({ matches: prefersDark }) },
    document: browser.document,
    localStorage: storage,
  }
  const isDark = () => browser.document.documentElement.classList.contains('dark')
  const meta = () => browser.document.querySelector('meta')!
  return { browser, isDark, meta, initialize: () => runInNewContext(initializer, context) }
}
const saved = (theme: string, key = 'theme') => {
  const storage = new Storage()
  storage.setItem(key, theme)
  return storage
}

it('page shell has the theme class, skip link, one toggle and light theme-color', async () => {
  const document = await render(Layout, { request: new Request('https://example.com/blog') })
  expect(document.documentElement.className).toBe('notebook')
  expect(document.querySelector('.skip-link')).not.toBeNull()
  expect(document.querySelectorAll('#theme-toggle')).toHaveLength(1)
  expect(document.querySelector('[aria-current="page"]')?.getAttribute('href')).toBe('/blog')
  const meta = document.querySelector('meta[name="theme-color"]')!
  expect(meta.getAttribute('content')).toBe(meta.getAttribute('data-light'))
  expect(initializer).not.toBe('')
})

it.each(['light', 'dark'])('saved %s theme has priority over the system setting', (theme) => {
  const { isDark, meta, initialize } = startup(saved(theme), theme === 'light')
  initialize()
  expect(isDark()).toBe(theme === 'dark')
  expect(meta().getAttribute('content')).toBe(meta().getAttribute(`data-${theme}`))
})

it.each([false, true])('system setting (dark=%s) applies when no theme is saved', (dark) => {
  // A value under the old prototype key is not a saved choice.
  const { isDark, initialize } = startup(saved('light', 'notebook-prototype-theme'), dark)
  initialize()
  expect(isDark()).toBe(dark)
})

it.each([false, true])('system setting (dark=%s) applies when the saved theme is invalid', (dark) => {
  const { isDark, initialize } = startup(saved('invalid'), dark)
  initialize()
  expect(isDark()).toBe(dark)
})

it('system setting applies when storage cannot be read', () => {
  const storage = new Storage()
  vi.spyOn(storage, 'getItem').mockImplementation(() => {
    throw new Error('denied')
  })
  const { isDark, meta, initialize } = startup(storage)
  expect(initialize).not.toThrow()
  expect(isDark()).toBe(true)
  expect(meta().getAttribute('content')).toBe(meta().getAttribute('data-dark'))
})

it('page swap applies the saved theme and new metadata with one listener', () => {
  const storage = saved('light')
  const { browser, isDark, meta, initialize } = startup(storage)
  const listen = vi.spyOn(browser.document, 'addEventListener')
  initialize()
  initialize()
  expect(listen.mock.calls.filter(([event]) => event === 'astro:after-swap')).toHaveLength(1)

  storage.setItem('theme', 'dark')
  browser.document.documentElement.className = 'notebook'
  browser.document.head.innerHTML = themeMeta
  meta().setAttribute('data-dark', '#123456')
  browser.document.dispatchEvent(new browser.Event('astro:after-swap'))
  expect(isDark()).toBe(true)
  expect(meta().getAttribute('content')).toBe('#123456')
})
