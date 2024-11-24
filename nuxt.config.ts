// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['vitest/globals'], // TypeScript support for globals
      },
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
        binaryInterval: 1000,
      },
    },
  },
})
