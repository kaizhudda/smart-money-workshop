/**
 * Builds a path that respects Astro's `base` setting.
 *
 * On GitHub Pages the site is served from /smart-money-workshop/, but once a
 * custom domain is connected it moves to /. Using this helper everywhere means
 * that switch is a one-line change in astro.config.mjs and nothing breaks.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}
