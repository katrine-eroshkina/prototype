/**
 * Карта сайта.
 * Источники: бриф (главный) + PDF-схема 12.10.2026 + устройство business-up.org (эталон из брифа).
 *
 * Услуги — по модели business-up и брифа:
 *   /uslugi/                    — каталог (одна корневая страница)
 *   /uslugi/[категория]/        — категория, шаблон «категория» (1-я вложенность)
 *   /uslugi/[категория]/[услуга]/ — услуга, шаблон «услуга» (2-я вложенность)
 * Консалтинг и Digital — не страницы, а подписи групп в меню и каталоге.
 *
 * Группировка консалтинга в 2 категории — предложение, ждёт подтверждения заказчика.
 * Брендинга и презентаций нет (решение 18.10.2026).
 * Услуги внутри категорий Digital: в брифе названа только «SEO-аудит».
 */

export type Template = 'home' | 'listing' | 'detail' | 'contacts' | 'text' | 'system';
export type GroupSlug = 'konsalting' | 'digital';

export interface Service { slug: string; title: string; draft?: boolean }
export interface Category { slug: string; title: string; draft?: boolean; children: Service[] }
export interface Group { slug: GroupSlug; title: string; lead: string; categories: Category[] }

export const groups: Group[] = [
  {
    slug: 'konsalting',
    title: 'Консалтинг',
    lead: 'Маркетинг как управленческая функция: аудит, стратегия, команда.',
    categories: [
      {
        slug: 'konsalting',
        title: 'Маркетинговый консалтинг',
        children: [
          { slug: 'marketingovyj-audit', title: 'Маркетинговый аудит' },
          { slug: 'konsultacii', title: 'Маркетинговые консультации' },
          { slug: 'strategiya', title: 'Маркетинговая стратегия' },
          { slug: 'strategicheskie-sessii', title: 'Стратегические сессии' },
          { slug: 'ocenka-podryadchikov', title: 'Оценка подрядчиков' },
        ],
      },
      {
        slug: 'autsorsing-marketinga',
        title: 'Маркетинг на аутсорсе',
        children: [
          { slug: 'marketolog-pod-klyuch', title: 'Маркетолог под ключ' },
          { slug: 'otdel-marketinga', title: 'Удалённый отдел маркетинга' },
          { slug: 'podbor-personala', title: 'Подбор маркетингового персонала' },
        ],
      },
    ],
  },
  {
    slug: 'digital',
    title: 'Digital',
    lead: 'Трафик и заявки: поиск, реклама, соцсети, площадки, нейросети.',
    categories: [
      { slug: 'seo', title: 'SEO-продвижение', children: [{ slug: 'seo-audit', title: 'SEO-аудит' }] },
      { slug: 'reklama', title: 'Контекстная реклама', children: [] },
      { slug: 'avito', title: 'Продвижение на Avito', children: [] },
      { slug: 'smm', title: 'SMM и соцсети', children: [] },
      { slug: 'target', title: 'Таргетированная реклама', children: [] },
      { slug: 'nejroseti', title: 'Продвижение в нейросетях', children: [] },
      { slug: 'sozdanie-saitov', title: 'Разработка сайтов', children: [] },
    ],
  },
];

export const catUrl = (c: Category) => `/uslugi/${c.slug}/`;
export const serviceUrl = (c: Category, s: Service) => `/uslugi/${c.slug}/${s.slug}/`;

/** Главное меню — разделы и порядок из PDF */
export const mainNav: { href: string; title: string; draft?: boolean }[] = [
  { href: '/uslugi/', title: 'Услуги' },
  { href: '/keisy/', title: 'Кейсы' },
  { href: '/o-kompanii/', title: 'О компании' },
  { href: '/tseny/', title: 'Цены' },
  { href: '/blog/', title: 'Блог', draft: true }, // под вопросом — в меню с пометкой (?)
  { href: '/kontakty/', title: 'Контакты' },
];

/** Заглушки кейсов, пока нет контента */
export const cases = [
  { slug: 'primer-seo', title: 'Пример кейса: SEO' },
  { slug: 'primer-konsalting', title: 'Пример кейса: стратегия' },
];

/**
 * География — блок на главной, не отдельный раздел (решение 18.10.2026; в PDF был раздел /regiony/).
 * Только реальные города — список ждём от заказчика, сейчас примеры.
 */
export const regions = [
  { title: 'Москва', draft: true },
  { title: 'Санкт-Петербург', draft: true },
];
