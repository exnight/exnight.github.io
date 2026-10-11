// @vitest-environment happy-dom
import { beforeEach, expect, it, vi } from 'vitest'
import { initContents, initTables, readingColumnWidth } from '@/scripts/article'

beforeEach(() => {
  document.documentElement.style.fontSize = '16px'
  document.body.innerHTML = ''
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
    cb(0)
    return 1
  })
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
})

it('reading column width comes from the subgrid track', () => {
  document.body.innerHTML =
    '<article style="grid-template-columns:208px 672px 244px"><div class="n-prose" style="grid-template-columns:subgrid"><h2>First section</h2></div></article>'
  const prose = document.querySelector<HTMLElement>('.n-prose')!
  expect(readingColumnWidth(prose)).toBe(672)
  // The desktop reading track can grow without widening to the whole prose span.
  prose.parentElement!.style.gridTemplateColumns = '208px 720.96px 195.84px'
  expect(readingColumnWidth(prose)).toBe(720.96)
  prose.style.gridTemplateColumns = '354px'
  expect(readingColumnWidth(prose)).toBe(354)
})

it('wide table gets the is-wide class; cleanup stops the observer', () => {
  document.body.innerHTML =
    '<article style="grid-template-columns:208px 672px 244px"><div class="n-prose" style="grid-template-columns:subgrid"><div data-notebook-table style="color:red"><table style="width:100%"></table></div></div></article>'
  const disconnect = vi.fn()
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect = disconnect
    },
  )
  const table = document.querySelector('table')!
  vi.spyOn(table, 'getBoundingClientRect').mockReturnValue({ width: 789 } as DOMRect)
  const cleanup = initTables()
  const wrapper = document.querySelector<HTMLElement>('[data-notebook-table]')!
  expect(wrapper.classList.contains('is-wide')).toBe(true)
  expect(wrapper.getAttribute('style')).toBe('color:red')
  expect(table.style.width).toBe('100%')
  cleanup()
  expect(disconnect).toHaveBeenCalledOnce()
})

it('narrow contents closes, marks the current heading and cleans up', () => {
  const change = vi.fn(),
    remove = vi.fn()
  vi.stubGlobal('matchMedia', () => ({
    matches: false,
    addEventListener: change,
    removeEventListener: remove,
  }))
  document.body.innerHTML =
    '<nav data-toc><details open><summary>Index</summary><a href="#one">One</a><a href="#nested">Nested</a></details></nav><div class="n-prose"><h2 id="one">One</h2><h3 id="nested">Nested</h3></div>'
  vi.spyOn(document.getElementById('one')!, 'getBoundingClientRect').mockReturnValue({
    top: -500,
  } as DOMRect)
  vi.spyOn(document.getElementById('nested')!, 'getBoundingClientRect').mockReturnValue({
    top: 48,
  } as DOMRect)
  const cleanup = initContents()
  expect(document.querySelector('details')?.open).toBe(false)
  expect(document.querySelector('a[aria-current="location"]')?.getAttribute('href')).toBe('#nested')
  cleanup()
  expect(remove).toHaveBeenCalledWith('change', expect.any(Function))
})
