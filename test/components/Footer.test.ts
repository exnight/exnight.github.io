import { expect, it } from 'vitest'
import Footer from '@/components/Footer.astro'
import { render } from '../helpers'

it('footer names the owner and lists the social profiles', async () => {
  const document = await render(Footer)
  expect(document.querySelector('footer p')?.textContent).toContain('Leo Wong')
  expect(document.querySelector('nav')?.getAttribute('aria-label')).toBe('Social profiles')
  expect([...document.querySelectorAll('nav a')].map((a) => a.getAttribute('href'))).toEqual([
    'https://github.com/exnight',
    'https://www.linkedin.com/in/jyleowong/',
  ])
})

it('footer links open in a new tab with an accessible label', async () => {
  for (const link of (await render(Footer)).querySelectorAll('nav a')) {
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    expect(link.getAttribute('aria-label')).toContain('opens in a new tab')
  }
})
