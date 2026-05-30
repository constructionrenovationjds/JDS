// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://constructionrenovationjds.ca/',
    }),
  ],
  output: 'static',
  site: 'https://constructionrenovationjds.ca'
});