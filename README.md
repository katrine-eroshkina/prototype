# Прототип сайта агентства

Живой прототип: https://katrine-eroshkina.github.io/prototype/

## Запуск

```bash
npm install
npm run dev      # локально: http://localhost:4321/prototype/
npm run build    # сборка в dist/
```

Пуш в `main` автоматически публикует сайт на GitHub Pages.

## Где что

- `docs/` — проектная документация (блочная система, решения)
- `src/data/sitemap.ts` — карта услуг (направления → категории → услуги)
- `src/data/recipes.ts` — схемы страниц (какие блоки и в каком порядке)
- `src/styles/tokens.css` — дизайн-токены
- `src/layouts/` — шаблоны страниц
- `src/pages/blocks.astro` — каталог блоков

Сейчас страницы — вайрфреймы: блоки показаны серыми плашками с ID.
