import { expect, it } from 'vitest'
import Header from '@/components/Header.astro'
import { render } from '../helpers'

it.each([
  ['/', '/'],
  ['/blog', '/blog'],
  ['/blog/2026/example', '/blog'],
])('header marks only the current section at %s', async (path, current) => {
  const document = await render(Header, { request: new Request(`https://example.com${path}`) })
  const currentLinks = document.querySelectorAll('[aria-current="page"]')
  expect(currentLinks).toHaveLength(1)
  expect(currentLinks[0].getAttribute('href')).toBe(current)
  expect(document.querySelectorAll('.n-nav__circle')).toHaveLength(1)
})

it('header has the home link and primary navigation', async () => {
  const document = await render(Header, { request: new Request('https://example.com/') })
  expect(document.querySelector('nav')?.getAttribute('aria-label')).toBe('Primary navigation')
  expect(document.querySelector('.n-brand')?.getAttribute('aria-label')).toBe('Leo Wong, home')
  expect([...document.querySelectorAll('.n-nav a')].map((a) => a.getAttribute('href'))).toEqual([
    '/',
    '/blog',
  ])
  expect(document.querySelector('.n-mark svg')?.getAttribute('aria-hidden')).toBe('true')
})
