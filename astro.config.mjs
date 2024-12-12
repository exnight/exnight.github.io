import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['theme-toggle'].includes,
      },
    }
  }), mdx()],
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