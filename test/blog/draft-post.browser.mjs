import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { setTimeout as delay } from 'node:timers/promises'
import puppeteer from 'puppeteer'

// Local, on demand. No build, generated HTML, screenshots or server startup.
const url = 'http://localhost:3000/blog/draft-post'
const cases = [
  { name: 'desktop/light', width: 1440, height: 900, theme: 'light' },
  { name: 'desktop/dark', width: 1440, height: 900, theme: 'dark' },
  { name: 'mobile/light', width: 390, height: 844, theme: 'light' },
  { name: 'mobile/dark', width: 390, height: 844, theme: 'dark' },
]

async function preflight() {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
  } catch (error) {
    throw new Error(
      `Draft page unavailable: ${error.message}. Start or check the dev server on port 3000.`,
    )
  }
  const installed = '/opt/playwright/chromium-1247/chrome-linux64/chrome'
  const executablePath =
    process.env.BROWSER_PATH || (existsSync(installed) ? installed : puppeteer.executablePath())
  if (!existsSync(executablePath))
    throw new Error('Chromium is unavailable. Set BROWSER_PATH to an installed Chrome/Chromium.')
  return executablePath
}

async function ready(page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    await Promise.all(
      [...document.querySelectorAll('.n-prose img')].map(async (image) => {
        image.loading = 'eager'
        await image.decode()
      }),
    )
  })
  await page.waitForFunction(() =>
    document.querySelector('#wide-table + .notebook-table')?.classList.contains('is-wide'),
  )
}

async function inspect(page, testCase) {
  return page.evaluate(({ width, theme }) => {
    const issues = []
    const check = (condition, label) => {
      if (!condition) issues.push(label)
    }
    const near = (a, b) => Math.abs(a - b) < 2
    const find = (selector) => {
      const element = document.querySelector(selector)
      if (!element) throw new Error(`Missing test case: ${selector}`)
      return element
    }
    const rect = (element) => element.getBoundingClientRect()
    const prose = find('.n-prose')
    const ordinary = find('.n-prose > p')
    const reading = rect(ordinary)
    check(document.documentElement.scrollWidth <= innerWidth, 'Document overflow')
    check(document.documentElement.classList.contains('dark') === (theme === 'dark'), 'Theme')
    const links = [...document.querySelectorAll('[data-toc] a[href^="#"]')]
    check(links.length > 1, 'Contents links are present')
    for (const link of links)
      check(Boolean(document.getElementById(decodeURIComponent(link.hash.slice(1)))), 'Heading target')

    for (const selector of ['.n-summary', '.n-takeaways']) {
      const callout = find(selector)
      check(callout.querySelectorAll(':scope > p').length >= 2, `${selector}: paragraph slots`)
      check(Boolean(callout.querySelector(':scope > ul > li')), `${selector}: list slot`)
      for (const child of callout.children)
        for (const property of ['fontSize', 'fontFamily', 'lineHeight'])
          check(
            getComputedStyle(child)[property] === getComputedStyle(ordinary)[property],
            `${selector}: reading ${property}`,
          )
      check(getComputedStyle(callout.lastElementChild).marginBottom === '0px', `${selector}: last gap`)
    }

    const textFigure = find('.notebook-figure:not(.notebook-figure--wide):not(.notebook-figure--tall)')
    const wideFigure = find('.notebook-figure--wide')
    const phone = find('.notebook-figure--tall')
    check(near(rect(textFigure).width, reading.width), 'Text figure uses reading width')
    check(near(rect(wideFigure).right, rect(prose).right), 'Wide figure uses the wide edge')
    check(near(rect(wideFigure).left, reading.left), 'Wide figure keeps the reading edge')
    for (const figure of [textFigure, wideFigure, phone]) {
      const image = figure.querySelector(':scope > img')
      check(Boolean(image?.complete && image.naturalWidth > 0), 'Figure image loads')
      check(Boolean(image?.alt.trim()), 'Figure alt text')
      check(Boolean(figure.querySelector(':scope > figcaption')?.textContent.trim()), 'Figure caption')
    }
    check(Boolean(wideFigure.querySelector('figcaption em')), 'Inline caption markup')
    const imageBox = rect(phone.querySelector('img'))
    const captionBox = rect(phone.querySelector('figcaption'))
    const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize)
    if (width <= 45 * rootSize) {
      check(captionBox.top >= imageBox.bottom, 'Phone caption stacks below the image')
      check(imageBox.width <= 15 * rootSize + 2, 'Mobile phone image stays narrow')
    } else {
      check(captionBox.left >= imageBox.right, 'Phone caption sits beside the image')
      check(near(captionBox.bottom, imageBox.bottom), 'Phone caption has bottom alignment')
      check(imageBox.width <= 18 * rootSize + 2, 'Desktop phone image stays narrow')
    }

    const structured = find('#structured-table + .notebook-table')
    const wideTable = find('#wide-table + .notebook-table')
    const markdown = find('#markdown-table + .notebook-table')
    for (const wrapper of [structured, markdown])
      for (const row of wrapper.querySelectorAll('tr'))
        [...row.children].forEach((cell, index) =>
          check(getComputedStyle(cell).textAlign === ['left', 'center', 'right'][index], 'Column alignment'),
        )
    check(!structured.classList.contains('is-wide'), 'Compact table stays on the reading track')
    check(wideTable.classList.contains('is-wide'), 'Wide table uses progressive enhancement')
    for (const wrapper of [structured, wideTable, markdown]) {
      const box = rect(wrapper)
      check(near(box.left, reading.left), 'Table keeps the reading edge')
      check(
        near(box.width, wrapper.classList.contains('is-wide') ? rect(prose).width : reading.width),
        'Table selects a reading or wide edge',
      )
      check(getComputedStyle(wrapper).overflowX === 'auto', 'Table scrolls locally')
      check(wrapper.tabIndex === 0 && wrapper.getAttribute('role') === 'region', 'Table focus region')
    }
    for (const wrapper of [structured, wideTable]) {
      const caption = wrapper.querySelector('caption')
      check(caption?.parentElement.tagName === 'TABLE', 'Semantic table caption')
      check(wrapper.getAttribute('aria-label') === caption?.textContent.trim(), 'Caption labels region')
      check(rect(caption).width <= reading.width + 2, 'Caption stays at reading width')
    }
    if (width === 390)
      check(wideTable.scrollWidth > wideTable.clientWidth, 'Wide table has local overflow')

    for (const selector of ['.n-prose pre', '.n-prose .katex-display']) {
      const block = find(selector)
      check(getComputedStyle(block).overflowX === 'auto', `${selector}: local scrolling`)
      check(rect(block).width <= reading.width + 2, `${selector}: reading width`)
      if (width === 390)
        check(block.scrollWidth > block.clientWidth, `${selector}: sample exercises overflow`)
    }
    return issues
  }, testCase)
}

async function interactions(page, testCase) {
  if (testCase.width === 390) {
    const wrapper = '#wide-table + .notebook-table'
    await page.focus(wrapper)
    assert.equal(await page.$eval(wrapper, (el) => document.activeElement === el), true, 'Table focus')
    const start = await page.$eval(wrapper, (el) => el.scrollLeft)
    await page.keyboard.press('ArrowRight')
    // Give native keyboard scrolling a short, bounded wait.
    const deadline = Date.now() + 2000
    let moved = false
    while (Date.now() < deadline) {
      moved = await page.$eval(wrapper, (el, start) => el.scrollLeft > start, start)
      if (moved) break
      await delay(50)
    }
    assert.ok(moved, 'ArrowRight must scroll the focused table within 2 seconds')
    assert.equal(await page.evaluate(() => scrollX), 0, 'Keyboard scrolling stays local')
  }
  const detailsOpen = await page.$eval('[data-toc] details', (el) => el.open)
  if (!detailsOpen) await page.click('[data-toc] summary')
  await page.click('[data-toc] a[href="#wide-table"]')
  await page.waitForFunction(() =>
    location.hash === '#wide-table' &&
    document.querySelector('[data-toc] a[aria-current="location"]')?.hash === '#wide-table',
  )
  await page.click('#theme-toggle')
  const dark = testCase.theme === 'light'
  await page.waitForFunction((dark) => document.documentElement.classList.contains('dark') === dark, {}, dark)
  await page.reload({ waitUntil: 'networkidle0' })
  assert.equal(
    await page.evaluate(() => document.documentElement.classList.contains('dark')),
    dark,
    'Theme preference survives reload',
  )
}

async function main() {
  const executablePath = await preflight()
  const browser = await puppeteer.launch({ executablePath, headless: true, args: ['--no-sandbox'] })
  let failed = 0
  try {
    for (const testCase of cases) {
      const context = await browser.createBrowserContext()
      try {
        const page = await context.newPage()
        const runtime = []
        page.on('pageerror', (error) => runtime.push(error.message))
        page.on('requestfailed', (request) => runtime.push(`${request.url()}: ${request.failure()?.errorText}`))
        await page.setViewport({ width: testCase.width, height: testCase.height })
        await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
        await page.evaluateOnNewDocument((theme) => {
          if (localStorage.getItem('theme') === null) localStorage.setItem('theme', theme)
        }, testCase.theme)
        const response = await page.goto(url, { waitUntil: 'networkidle0' })
        assert.equal(response.status(), 200, 'Draft route response')
        await ready(page)
        assert.deepEqual(await inspect(page, testCase), [], 'Draft layout and semantics')
        await interactions(page, testCase)
        assert.deepEqual(runtime, [], 'Browser runtime/network errors')
        console.log(`PASS ${testCase.name}`)
      } catch (error) {
        failed++
        console.error(`FAIL ${testCase.name}: ${error.stack || error.message}`)
      } finally {
        await context.close()
      }
    }
  } finally {
    await browser.close()
  }
  console.log(`Draft acceptance: ${cases.length - failed}/${cases.length} cases passed.`)
  if (failed) process.exitCode = 1
}

main().catch((error) => {
  console.error(`Draft acceptance could not run: ${error.message}`)
  process.exitCode = 1
})
