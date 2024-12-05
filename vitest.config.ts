/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'
import { coverageConfigDefaults } from 'vitest/config'

export default getViteConfig({
  test: {
    coverage: {
      exclude: ['**/*.config.mjs', ...coverageConfigDefaults.exclude],
    },
    environment: 'happy-dom',
  },
})
