import { readFileSync } from 'node:fs'
import { expect, it } from 'vitest'
import { CONTENTS_BESIDE_TEXT } from '@/scripts/article'

it('contents CSS switches at the same breakpoint as the article script', () => {
  const toc = readFileSync('src/styles/article/toc.css', 'utf8')
  const queries = [...toc.matchAll(/@media \([^)]*\)/g)].map(([query]) => query)
  // 13rem contents + 42rem reading + two gaps fit in the frame at 65.5rem.
  expect(CONTENTS_BESIDE_TEXT).toBe('(width > 65.5rem)')
  expect(new Set(queries)).toEqual(
    new Set(['@media (width <= 65.5rem)', `@media ${CONTENTS_BESIDE_TEXT}`]),
  )
})
