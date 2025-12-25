/// <reference types="vitest/config"  />
import { getViteConfig } from 'astro/config'

export default getViteConfig({
  test: {
    coverage: {
      enabled: true,
      include: ['src/**/*.{ts,tsx,astro}'],
    },
    environment: 'happy-dom',
  },
})
