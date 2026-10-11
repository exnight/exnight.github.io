/// <reference types="vitest/config"  />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    // Astro components render only in Node. DOM-script tests opt in to happy-dom per file.
    environment: 'node',
    clearMocks: true,
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    // Coverage runs on request: npx vitest run --coverage
    coverage: {
      include: ['src/**/*.{ts,astro}'],
    },
  },
})
