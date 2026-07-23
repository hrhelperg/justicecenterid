import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { SECTIONS } from '@/content/sections';

/**
 * The route registry — the single source of truth for what exists at a URL.
 *
 * The sitemap, breadcrumbs, the internal-link validator, and scripts/verify-output.mjs all
 * read from here. A route that exists as a file but not in the registry fails validation,
 * and so does the reverse.
 */

export type RouteKind = 'home' | 'section' | 'guide' | 'hub' | 'platform';

export interface RouteRecord {
  path: string;
  /** Used for breadcrumbs and for the sitemap's own consistency checks. */
  title: string;
  kind: RouteKind;
  /** Set only where it reflects a real hierarchy. */
  priority: number;
  /** The entity's own updatedOn. Never a build timestamp. */
  lastModified?: string;
  parent?: string;
}

const HUB_ROUTES: readonly RouteRecord[] = [
  { path: '/countries', title: 'Countries', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/history', title: 'History', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/timeline', title: 'Timeline', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/professions', title: 'Professions', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/institutions', title: 'Institutions', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/glossary', title: 'Glossary', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/comparisons', title: 'Comparisons', kind: 'hub', priority: 0.6, parent: '/' },
  { path: '/sources', title: 'Research and Sources', kind: 'hub', priority: 0.6, parent: '/' },
];

const PLATFORM_ROUTES: readonly RouteRecord[] = [
  { path: '/about', title: 'About', kind: 'platform', priority: 0.3, parent: '/' },
  { path: '/mission', title: 'Mission', kind: 'platform', priority: 0.3, parent: '/' },
  {
    path: '/editorial-policy',
    title: 'Editorial Policy',
    kind: 'platform',
    priority: 0.3,
    parent: '/',
  },
  {
    path: '/corrections-policy',
    title: 'Corrections Policy',
    kind: 'platform',
    priority: 0.3,
    parent: '/',
  },
  {
    path: '/methodology',
    title: 'Research Methodology',
    kind: 'platform',
    priority: 0.3,
    parent: '/',
  },
  { path: '/contact', title: 'Contact', kind: 'platform', priority: 0.3, parent: '/' },
  { path: '/privacy', title: 'Privacy', kind: 'platform', priority: 0.3, parent: '/' },
  { path: '/terms', title: 'Terms', kind: 'platform', priority: 0.3, parent: '/' },
  { path: '/disclaimer', title: 'Disclaimer', kind: 'platform', priority: 0.3, parent: '/' },
];

const SECTION_ROUTES: readonly RouteRecord[] = SECTIONS.map((section) => ({
  path: `/${section.id}`,
  title: section.title,
  kind: 'section' as const,
  priority: 0.8,
  parent: '/',
}));

const GUIDE_ROUTES: readonly RouteRecord[] = PUBLISHED_GUIDES.map((guide) => ({
  path: guidePath(guide),
  title: guide.shortTitle ?? guide.title,
  kind: 'guide' as const,
  priority: 0.7,
  lastModified: guide.updatedOn,
  parent: `/${guide.section}`,
}));

export const ROUTES: readonly RouteRecord[] = [
  { path: '/', title: 'Home', kind: 'home', priority: 1 },
  ...SECTION_ROUTES,
  ...GUIDE_ROUTES,
  ...HUB_ROUTES,
  ...PLATFORM_ROUTES,
];

const ROUTE_INDEX = new Map(ROUTES.map((route) => [route.path, route]));

export function getRoute(path: string): RouteRecord | undefined {
  return ROUTE_INDEX.get(path);
}

export function isKnownRoute(path: string): boolean {
  return ROUTE_INDEX.has(path);
}

/**
 * Machine-readable endpoints. Not part of the sitemap (a sitemap does not list itself), but
 * asserted to exist by scripts/verify-output.mjs.
 */
export const GENERATED_FILES: readonly string[] = [
  'sitemap.xml',
  'robots.txt',
  'llms.txt',
  'feed.xml',
  '404.html',
];
