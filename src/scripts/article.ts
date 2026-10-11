/** Lifecycle-bound progressive enhancements; all content is server-rendered. */

/** Contents sits beside the text. Keep equal to the article.css media queries. */
export const CONTENTS_BESIDE_TEXT = '(width > 65.5rem)'

export function readingColumnWidth(prose: HTMLElement): number {
  const columns = getComputedStyle(prose).gridTemplateColumns
  // Subgrid serializes as "subgrid [] [] []", not resolved pixel tracks.
  // Resolve the article's second track, not the entire wide prose span.
  const track =
    columns.startsWith('subgrid') && prose.parentElement
      ? getComputedStyle(prose.parentElement).gridTemplateColumns.split(' ')[1]
      : columns.split(' ')[0]
  return (
    parseFloat(track) ||
    Math.min(
      prose.clientWidth,
      42 * parseFloat(getComputedStyle(document.documentElement).fontSize),
    )
  )
}

export function initContents() {
  const nav = document.querySelector<HTMLElement>('[data-toc]')
  const details = nav?.querySelector('details')
  if (!nav || !details) return () => {}
  const media = window.matchMedia(CONTENTS_BESIDE_TEXT)
  const setDisclosure = () => {
    details.open = media.matches
  }
  setDisclosure()
  media.addEventListener('change', setDisclosure)
  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
  const targets = links
    .map((link) => document.getElementById(decodeURIComponent(link.hash.slice(1))))
    .filter((target): target is HTMLElement => Boolean(target))
  let frame = 0
  const setCurrent = () => {
    frame = 0
    // The last heading above the reading threshold stays current between headings.
    const active =
      [...targets].reverse().find((target) => target.getBoundingClientRect().top <= 140) ??
      targets[0]
    links.forEach((link) => {
      if (decodeURIComponent(link.hash.slice(1)) === active?.id)
        link.setAttribute('aria-current', 'location')
      else link.removeAttribute('aria-current')
    })
  }
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(setCurrent)
  }
  window.addEventListener('scroll', schedule, { passive: true })
  window.addEventListener('resize', schedule)
  window.addEventListener('hashchange', schedule)
  setCurrent()
  return () => {
    cancelAnimationFrame(frame)
    media.removeEventListener('change', setDisclosure)
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    window.removeEventListener('hashchange', schedule)
  }
}

export function initTables() {
  const prose = document.querySelector<HTMLElement>('.n-prose')
  if (!prose) return () => {}
  let disposed = false
  let frame = 0
  const snap = () => {
    frame = 0
    if (disposed) return
    // Explicit grid measure: works with a first heading, callout, table or figure.
    const textWidth = readingColumnWidth(prose)
    prose.querySelectorAll<HTMLElement>('[data-notebook-table]').forEach((wrap) => {
      const table = wrap.querySelector('table')
      if (!table) return
      const oldTableWidth = table.style.width
      const oldWrapStyle = wrap.getAttribute('style')
      wrap.style.width = 'max-content'
      wrap.style.maxWidth = 'none'
      table.style.width = 'max-content'
      const natural = table.getBoundingClientRect().width
      table.style.width = oldTableWidth
      if (oldWrapStyle === null) wrap.removeAttribute('style')
      else wrap.setAttribute('style', oldWrapStyle)
      wrap.classList.toggle('is-wide', natural > textWidth + 1)
    })
  }
  const schedule = () => {
    if (!frame && !disposed) frame = requestAnimationFrame(snap)
  }
  const observer = new ResizeObserver(schedule)
  observer.observe(prose)
  window.addEventListener('resize', schedule)
  document.fonts?.ready.then(schedule)
  snap()
  return () => {
    disposed = true
    observer.disconnect()
    cancelAnimationFrame(frame)
    window.removeEventListener('resize', schedule)
  }
}
