import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx()
  ],
  site: 'https://pertwin.ai',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
