import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { purgeCss } from 'vite-plugin-tailwind-purgecss'
import { analyzer } from 'vite-bundle-analyzer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    purgeCss(),
    analyzer({
      analyzerMode: 'static',
      defaultSizes: 'gzip',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    host: '127.0.0.1',
    watch: {
      usePolling: true,
      interval: 3000,
      binaryInterval: 3000,
    },
  },
})
