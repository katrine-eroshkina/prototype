/** Ссылка с учётом base (на GitHub Pages сайт живёт в /prototype/). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\/+/, '').replace(/\/?$/, '/');
  return clean === '/' ? `${base}/` : `${base}/${clean}`;
}
