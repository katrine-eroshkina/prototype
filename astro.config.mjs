// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages: сайт живёт по адресу https://katrine-eroshkina.github.io/prototype/
// При подключении своего домена: поменять site и убрать base.
export default defineConfig({
  site: 'https://katrine-eroshkina.github.io',
  base: '/prototype',
  trailingSlash: 'always',
});
