/**
 * Черновые схемы страниц: порядок блоков сверху вниз.
 * Источник — docs/01-блочная-система-и-технологии.md, раздел 7.
 * Пока блоки не свёрстаны, страницы показывают их как вайрфрейм-плашки.
 */

export const recipes = {
  home: ['hero-main', 'directions', 'manifesto', 'stats', 'cases', 'process', 'expert', 'clients', 'testimonials', 'cta-form'],
  catalog: ['hero-page', 'directions', 'services-grid', 'cases', 'cta-form'],
  direction: ['hero-page', 'services-grid', 'situations', 'comparison', 'cases', 'lead-magnet', 'faq', 'cta-form'],
  category: ['hero-page', 'services-grid', 'situations', 'process', 'pricing', 'cases', 'cross-sell', 'faq', 'cta-form'],
  service: ['hero-split', 'situations', 'includes', 'process', 'pricing', 'case-metrics', 'cross-sell', 'faq', 'cta-form'],
  casesList: ['hero-page', 'cases', 'clients', 'cta-banner'],
  case: ['hero-page', 'case-story', 'case-metrics', 'text-media', 'testimonials', 'cases', 'cta-banner'],
  about: ['hero-page', 'manifesto', 'stats', 'team', 'documents', 'testimonials', 'cta-form'],
  prices: ['hero-page', 'pricing', 'comparison', 'faq', 'cta-form'],
  contacts: ['hero-page', 'contacts', 'cta-form'],
  blog: ['hero-page', 'blog-preview', 'cta-banner'],
  text: ['hero-page', 'rich-text'],
} as const;

export type RecipeKey = keyof typeof recipes;

/** Краткое назначение блока — подпись на вайрфрейме */
export const blockInfo: Record<string, string> = {
  'hero-main': 'Главный экран · манифест агентства',
  'hero-page': 'Экран внутренней страницы · заголовок, CTA',
  'hero-split': 'Экран с формой · оффер + заявка',
  manifesto: 'Манифест · крупное высказывание',
  directions: 'Два направления · Консалтинг / Digital',
  'services-grid': 'Карточки услуг',
  audience: 'Для кого',
  situations: 'Когда это нужно · ситуации и боли, самоквалификация',
  'cross-sell': 'Связанная услуга из другого направления',
  'lead-magnet': 'Бесплатный аудит / чек-лист',
  expert: 'Эксперт · фото и цитата',
  benefits: 'Преимущества',
  stats: 'Цифры',
  includes: 'Что входит',
  process: 'Этапы работы',
  comparison: 'Сравнение',
  'text-media': 'Текст + медиа',
  cases: 'Кейсы',
  'case-metrics': 'Результаты кейса · было → стало',
  'case-story': 'История · задача → решение → результат',
  testimonials: 'Отзывы',
  clients: 'Логотипы клиентов',
  team: 'Команда',
  documents: 'Документы и сертификаты',
  pricing: 'Пакеты',
  faq: 'FAQ',
  'cta-form': 'Заявка · форма',
  'cta-banner': 'Призыв без формы',
  'blog-preview': 'Статьи (блог под вопросом)',
  geography: 'География (под вопросом)',
  contacts: 'Контакты',
  'rich-text': 'Текст',
};
