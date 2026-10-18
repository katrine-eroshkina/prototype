// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: сайт живёт по адресу https://katrine-eroshkina.github.io/prototype/
// При подключении своего домена: поменять site и убрать base.
export default defineConfig({
  site: 'https://katrine-eroshkina.github.io',
  base: '/prototype',
  trailingSlash: 'always',
  // React — только для интерактивных компонентов shadcn (острова), остальное статика
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
