export type Theme = 'light' | 'dark'

// Layout.astro initializes the preference before paint and after client swaps.
// This module owns only the interactive toggle and its destination-theme label.
export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  const meta = document.querySelector('meta[name="theme-color"]')
  const color = meta?.getAttribute(`data-${theme}`)
  if (color) meta?.setAttribute('content', color)
  const button = document.getElementById('theme-toggle')
  if (button) {
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
    button.setAttribute('aria-label', label)
    button.setAttribute('title', label)
  }
}

export function bindThemeToggle() {
  const button = document.getElementById('theme-toggle') as HTMLButtonElement | null
  if (!button) return
  applyTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
  button.hidden = false
  if (button.dataset.bound) return
  button.dataset.bound = 'true'
  button.addEventListener('click', () => {
    const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    applyTheme(theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* In-memory switching remains available. */
    }
  })
}
