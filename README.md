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

- `src/data/sitemap.ts` — карта сайта: группы, категории, услуги
- `src/data/recipes.ts` — схемы страниц (какие блоки и в каком порядке) и библиотека блоков
- `src/data/content.ts` — тексты прототипа (цифры и цены — заглушки)
- `src/blocks/<блок>/<Вариант>.astro` — 16 блоков с вариантами
- `src/styles/global.css` — Tailwind и токены (тема shadcn/ui)
- `src/pages/blocks.astro` — каталог блоков

Стек: Astro, Tailwind CSS v4, shadcn/ui (React — только для интерактивных элементов).
