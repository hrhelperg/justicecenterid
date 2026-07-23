import { getRoute } from './routes';

export interface Crumb {
  href: string;
  label: string;
}

/**
 * Breadcrumb trails are derived from the route registry, never hand-written, so they cannot
 * drift from the URL structure.
 */
export function buildBreadcrumbs(path: string): Crumb[] {
  if (path === '/') return [];

  const trail: Crumb[] = [];
  let current: string | undefined = path;
  const seen = new Set<string>();

  while (current && !seen.has(current)) {
    seen.add(current);
    const route = getRoute(current);
    if (!route) break;
    trail.unshift({ href: route.path, label: route.title });
    current = route.parent;
  }

  if (trail[0]?.href !== '/') trail.unshift({ href: '/', label: 'Home' });
  return trail;
}
