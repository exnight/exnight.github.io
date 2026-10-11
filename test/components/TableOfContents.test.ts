import { expect, it } from 'vitest'
import TableOfContents from '@/components/TableOfContents.astro'
import { classesIn, compileCSS, render, uncompiledUtilities } from '../helpers'

const contents = () =>
  render(TableOfContents, {
    props: {
      headings: [
        { depth: 2, slug: 'one', text: 'One' },
        { depth: 3, slug: 'nested', text: 'Nested' },
        { depth: 4, slug: 'skipped', text: 'Skipped' },
        { depth: 2, slug: 'two', text: 'Two' },
      ],
    },
  })

it('contents numbers h2 sections, indents h3 and skips deeper headings', async () => {
  const links = [...(await contents()).querySelectorAll('[data-toc] a')]
  expect(links.map((link) => link.getAttribute('href'))).toEqual(['#one', '#nested', '#two'])
  expect(links.map((link) => link.querySelector('[aria-hidden]')?.textContent?.trim())).toEqual([
    '1',
    undefined,
    '2',
  ])
  expect(links.map((link) => link.classList.contains('pl-[1.95rem]'))).toEqual([false, true, false])
})

it('contents is empty when the article has no h2 or h3', async () => {
  const document = await render(TableOfContents, {
    props: { headings: [{ depth: 4, slug: 'deep', text: 'Deep' }] },
  })
  expect(document.querySelector('[data-toc]')).toBeNull()
})

it('contents utilities compile, including the current-location state', async () => {
  const classes = classesIn(await contents())
  expect(await uncompiledUtilities(classes)).toEqual([])
  expect((await compileCSS(classes)).css).toContain('[aria-current="location"]')
})
