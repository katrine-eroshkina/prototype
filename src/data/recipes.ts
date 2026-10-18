/**
 * Схемы страниц: порядок блоков сверху вниз. Формат — «блок:вариант»
 * (без варианта берётся основной). Описание блоков — в docs/01, раздел 6.
 *
 * Главная по PDF — «общее предложение и навигация»: вход в каждый раздел
 * верхнего уровня:
 *   Услуги → services · Кейсы → cases · О компании → stats, people, testimonials
 *   Цены → pricing (анонс) · География → geography · Контакты → cta:form + подвал
 */

export const recipes = {
  home: ['hero:main', 'services:groups', 'cases', 'text:statement', 'process', 'pricing', 'people:team', 'testimonials', 'geography', 'cta:form'],
  catalog: ['hero:page', 'services:groups', 'cases', 'cta:form'],
  category: ['hero:page', 'services:children', 'cards:situations', 'pricing', 'cases', 'faq', 'cta:form'],
  service: ['hero:form', 'cards:situations', 'cards:includes', 'process', 'pricing', 'cases:metrics', 'faq', 'cta:form'],
  casesList: ['hero:page', 'cases', 'logos:clients', 'cta:banner'],
  case: ['hero:case', 'cases:problems', 'cases:story', 'cases:metrics', 'cases:grid', 'cta:form'],
  about: ['hero:about', 'text:statement', 'cards:values', 'people:expert', 'process:history', 'people:team', 'logos:documents', 'logos:clients', 'testimonials', 'faq', 'cta:form'],
  prices: ['hero:page', 'pricing', 'table:channels', 'faq', 'cta:form'],
  contacts: ['hero:page', 'contacts', 'cta:form'],
  blog: ['hero:page', 'cases:posts', 'cta:banner'],
  text: ['hero:page', 'text:article'],
  system: ['hero:page', 'cta:banner'],
} as const;

export type RecipeKey = keyof typeof recipes;

/**
 * Библиотека: 16 блоков и их варианты (первый вариант — основной).
 * Используется в каталоге /blocks/ и как подписи на вайрфреймах.
 */
export const library: { id: string; title: string; variants: { id: string; title: string }[] }[] = [
  { id: 'hero', title: 'Первый экран', variants: [
    { id: 'main', title: 'Главная: оффер агентства' },
    { id: 'page', title: 'Внутренняя страница: заголовок, лид, кнопки' },
    { id: 'form', title: 'Посадочная услуги: оффер + форма' },
    { id: 'case', title: 'Кейс: заголовок, результат, паспорт, «Было / Стало»' },
    { id: 'about', title: 'О компании: заголовок, текст, PDF и строка KPI' },
  ] },
  { id: 'services', title: 'Услуги', variants: [
    { id: 'groups', title: 'Все категории, сгруппированные: Консалтинг / Digital' },
    { id: 'children', title: 'Услуги внутри категории' },
  ] },
  { id: 'cards', title: 'Карточки с текстом', variants: [
    { id: 'situations', title: 'Когда это нужно: ситуации и боли' },
    { id: 'includes', title: 'Что входит в работу' },
    { id: 'benefits', title: 'Преимущества' },
    { id: 'audience', title: 'Для кого' },
    { id: 'values', title: 'Принципы работы' },
  ] },
  { id: 'process', title: 'Этапы', variants: [{ id: 'default', title: 'Этапы работы' }, { id: 'history', title: 'История компании по годам' }] },
  { id: 'pricing', title: 'Цены', variants: [{ id: 'default', title: 'Пакеты; на главной — анонс «от …»' }] },
  { id: 'stats', title: 'Цифры', variants: [{ id: 'default', title: 'Ключевые показатели с базой' }] },
  { id: 'cases', title: 'Кейсы', variants: [
    { id: 'grid', title: 'Сетка карточек кейсов' },
    { id: 'metrics', title: 'Результат «было → стало» + абзац (опционально)' },
    { id: 'story', title: 'Что сделали: таймлайн этапов с линией прогресса' },
    { id: 'problems', title: 'Что мы обнаружили: найденные проблемы' },
    { id: 'posts', title: 'Статьи (блог под вопросом)' },
  ] },
  { id: 'people', title: 'Люди', variants: [
    { id: 'team', title: 'Команда' },
    { id: 'expert', title: 'Основатель: фото, слово, регалии' },
  ] },
  { id: 'logos', title: 'Логотипы', variants: [
    { id: 'clients', title: 'Клиенты' },
    { id: 'documents', title: 'Сертификаты и партнёрства' },
  ] },
  { id: 'testimonials', title: 'Отзывы', variants: [{ id: 'default', title: 'Карточки отзывов' }] },
  { id: 'faq', title: 'Вопросы и ответы', variants: [{ id: 'default', title: 'Аккордеон' }] },
  { id: 'cta', title: 'Призыв', variants: [
    { id: 'form', title: 'Форма заявки' },
    { id: 'banner', title: 'Короткий призыв без формы' },
    { id: 'lead', title: 'Лид-магнит (под вопросом)' },
    { id: 'cross', title: 'Переход в другое направление' },
  ] },
  { id: 'text', title: 'Текст', variants: [
    { id: 'media', title: 'Текст + картинка' },
    { id: 'statement', title: 'Манифест: крупное высказывание' },
    { id: 'article', title: 'Статья / юридический текст' },
  ] },
  { id: 'contacts', title: 'Контакты', variants: [{ id: 'default', title: 'Телефон, мессенджеры, адрес, реквизиты, карта' }] },
  { id: 'geography', title: 'География', variants: [{ id: 'default', title: 'Города обслуживания' }] },
  { id: 'table', title: 'Таблица', variants: [{ id: 'channels', title: 'Сравнение каналов / факторы стоимости' }] },
];

/** Подпись для плашки WireBlock (если компонента нет) */
export const blockInfo: Record<string, string> = Object.fromEntries(
  library.flatMap((b) => b.variants.map((v) => [v.id === 'default' ? b.id : `${b.id}:${v.id}`, `${b.title} · ${v.title}`])),
);
