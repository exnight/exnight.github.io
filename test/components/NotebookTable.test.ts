import { expect, it } from 'vitest'
import NotebookTable from '@/components/NotebookTable.astro'
import { classesIn, compileCSS, parseHTML, renderHTML, uncompiledUtilities } from '../helpers'

const structured = () =>
  renderHTML(NotebookTable, {
    props: {
      headers: ['Route', 'Distance', 'Cost'],
      rows: [['HKG', '100', '200']],
      align: ['left', 'center', 'right'],
      caption: 'Structured caption.',
    },
  })
const slotted = () =>
  renderHTML(NotebookTable, {
    slots: {
      default:
        '<caption>Slotted caption.</caption><thead><tr><th>Route</th><th align="center">Distance</th><th align="right">Cost</th></tr></thead><tbody><tr><td>HKG</td><td align="center">100</td><td align="right">200</td></tr></tbody>',
    },
  })

it('structured table has a caption, column alignment and a scroll region', async () => {
  const html = await structured()
  expect(html).toContain('<caption>Structured caption.</caption>')
  expect(html).toContain('text-align:right')
  expect(html).toContain('data-notebook-table')
  expect(html).toContain('tabindex="0"')
})

it('slotted Markdown table keeps its caption and align attributes', async () => {
  const table = parseHTML(await slotted()).querySelector('table')!
  expect(table.querySelector('caption')?.textContent).toBe('Slotted caption.')
  expect(table.querySelectorAll('[align="right"]')).toHaveLength(2)
  expect(table.querySelectorAll('[align="center"]')).toHaveLength(2)
})

it('structured and slotted tables share one class list that compiles', async () => {
  const document = parseHTML((await structured()) + (await slotted()))
  const [first, second] = [...document.querySelectorAll('table')]
  expect([...second.classList]).toEqual([...first.classList])
  expect(await uncompiledUtilities(classesIn(document))).toEqual([])
})

it('table wrapper does not set grid columns', async () => {
  const wrapper = parseHTML(await structured()).querySelector('.notebook-table')!
  expect([...wrapper.classList].filter((name) => name.startsWith('col-'))).toEqual([])
})

it('table tokens keep 500 header weight, 0.05em tracking and 1.5 caption line height', async () => {
  const table = parseHTML(await structured()).querySelector('table')!
  const { root } = await compileCSS([...table.classList])
  for (const [token, value] of [
    ['--font-weight-medium', '500'],
    ['--tracking-wider', '0.05em'],
    ['--leading-normal', '1.5'],
  ]) {
    const values: string[] = []
    root.walkDecls(token, (decl) => {
      values.push(decl.value)
    })
    expect(values, token).toContain(value)
  }
})

it('table utilities do not override the article caption width or numbering', async () => {
  const table = parseHTML(await structured()).querySelector('table')!
  const { root } = await compileCSS([...table.classList])
  root.walkRules((rule) => {
    if (!rule.toString().includes('caption')) return
    rule.walkDecls((decl) => {
      expect(['max-width', 'counter-increment', 'content']).not.toContain(decl.prop)
    })
  })
})
