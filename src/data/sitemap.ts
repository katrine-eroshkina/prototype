/**
 * Карта услуг по брифу (бриф важнее PDF-схемы).
 * Услуги внутри категорий Digital — черновые примеры, перечень ждём от заказчика.
 */

export type Template = 'home' | 'listing' | 'detail' | 'contacts' | 'text' | 'system';

export interface ServiceNode {
  slug: string;
  title: string;
  /** Узел помечен как «под вопросом» — не согласован с заказчиком */
  draft?: boolean;
  children?: ServiceNode[];
}

export interface Direction {
  slug: string;
  title: string;
  lead: string;
  items: ServiceNode[];
}

export const directions: Direction[] = [
  {
    slug: 'konsalting',
    title: 'Консалтинг',
    lead: 'Маркетинг как управленческая функция: аудит, стратегия, команда.',
    items: [
      { slug: 'marketingovyj-audit', title: 'Маркетинговый аудит' },
      { slug: 'konsultacii', title: 'Маркетинговые консультации' },
      { slug: 'strategiya', title: 'Маркетинговая стратегия' },
      { slug: 'podbor-personala', title: 'Подбор маркетингового персонала' },
      { slug: 'ocenka-podryadchikov', title: 'Оценка подрядчиков' },
      { slug: 'marketolog-pod-klyuch', title: 'Маркетолог под ключ' },
      { slug: 'otdel-marketinga', title: 'Удалённый отдел маркетинга' },
      { slug: 'strategicheskie-sessii', title: 'Стратегические сессии' },
      { slug: 'brending', title: 'Брендинг' },
      { slug: 'prezentacii', title: 'Презентации' },
    ],
  },
  {
    slug: 'digital',
    title: 'Digital',
    lead: 'Трафик и заявки: поиск, реклама, соцсети, площадки, нейросети.',
    items: [
      {
        slug: 'seo',
        title: 'SEO-продвижение',
        children: [
          { slug: 'seo-audit', title: 'SEO-аудит', draft: true },
          { slug: 'prodvizhenie-pod-klyuch', title: 'Продвижение под ключ', draft: true },
          { slug: 'lokalnoe-seo', title: 'Локальное SEO', draft: true },
        ],
      },
      {
        slug: 'kontekst',
        title: 'Контекстная реклама',
        children: [
          { slug: 'yandex-direkt', title: 'Яндекс Директ', draft: true },
          { slug: 'audit-reklamy', title: 'Аудит рекламных кампаний', draft: true },
        ],
      },
      {
        slug: 'avito',
        title: 'Продвижение на Avito',
        children: [{ slug: 'vedenie-avito', title: 'Ведение аккаунта', draft: true }],
      },
      {
        slug: 'smm',
        title: 'SMM',
        children: [{ slug: 'vedenie-socsetej', title: 'Ведение соцсетей', draft: true }],
      },
      {
        slug: 'target',
        title: 'Таргетированная реклама',
        children: [{ slug: 'target-vk', title: 'Таргет ВКонтакте', draft: true }],
      },
      {
        slug: 'nejroseti',
        title: 'Продвижение в нейросетях',
        children: [{ slug: 'geo-optimizaciya', title: 'GEO-оптимизация', draft: true }],
      },
      {
        slug: 'sozdanie-saitov',
        title: 'Разработка сайтов',
        children: [{ slug: 'sajt-pod-klyuch', title: 'Сайт под ключ', draft: true }],
      },
    ],
  },
];

/** Пункты верхнего меню */
export const mainNav = [
  { href: '/uslugi/', title: 'Услуги' },
  { href: '/keisy/', title: 'Кейсы' },
  { href: '/tseny/', title: 'Цены' },
  { href: '/o-kompanii/', title: 'О компании' },
  { href: '/blog/', title: 'Блог', draft: true },
  { href: '/kontakty/', title: 'Контакты' },
];

/** Заглушки кейсов, пока нет контента */
export const cases = [
  { slug: 'primer-seo', title: 'Пример кейса: SEO' },
  { slug: 'primer-konsalting', title: 'Пример кейса: стратегия' },
];
