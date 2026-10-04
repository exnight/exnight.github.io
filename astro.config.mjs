import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';

// Design prototype of the approved direction (src/prototypes). The route is only registered in
// `astro dev` or when PROTOTYPES=1, so production builds never include it.
const prototypes = {
    name: 'design-prototypes',
    hooks: {
        'astro:config:setup': ({ command, injectRoute }) => {
            if (command !== 'dev' && process.env.PROTOTYPES !== '1') return;
            injectRoute({ pattern: '/prototypes/[...path]', entrypoint: './src/prototypes/routes/Chooser.astro' });
        }
    }
};

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    integrations: [mdx(), prototypes],
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex]
        }),
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: "github-dark"
            },
            defaultColor: false
        }
    },
    vite: {
        plugins: [tailwindcss()],
    },
    server: {
        host: true,
        port: 3000, // Set dev server port
    }
});
