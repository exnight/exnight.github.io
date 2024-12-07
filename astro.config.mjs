import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['theme-toggle'].includes,
      },
    }
  })],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: "github-dark"
      }
    }
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: process.env.IS_CONTAINER == 'true',
      }
    }
  },
  server: {
    port: 3000, // Set dev server port
  }
});
