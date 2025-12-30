import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] })],
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
    host: true,
    port: 3000, // Set dev server port
  }
});
