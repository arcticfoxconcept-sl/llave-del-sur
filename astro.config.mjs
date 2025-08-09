import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-username.github.io/llave-del-sur',
  integrations: [
    tailwind(),
    sitemap()
  ]
});