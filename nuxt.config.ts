// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/test-utils/module', '@nuxtjs/tailwindcss'],
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ['vitest/globals'], // TypeScript support for globals
      },
    },
  },
  vite: {
    server: {
      // Required for HMR on WSL or other DEV containers
      watch: {
        usePolling: process.env.IS_CONTAINER == 'true',
        interval: 1000, // Optional
        binaryInterval: 1000, // Optional
      },
    },
  },
})
