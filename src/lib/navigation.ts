import { SECTIONS } from '@/content/sections';

export interface NavItem {
  href: string;
  label: string;
  /** Shown in the mobile panel and in the footer, where space allows. */
  description?: string;
}

export interface NavGroup {
  heading: string;
  items: NavItem[];
}

/**
 * Primary navigation — six items.
 *
 * The header is a wayfinding device, not a site map. The four topical entries are the
 * highest-intent entry points; Countries signals the international frame; About carries the
 * independence message a first-time visitor needs. Everything else is one click from a hub.
 */
export const PRIMARY_NAV: readonly NavItem[] = [
  { href: '/justice', label: 'Justice' },
  { href: '/law-enforcement', label: 'Law Enforcement' },
  { href: '/courts', label: 'Courts' },
  { href: '/investigations', label: 'Investigations' },
  { href: '/countries', label: 'Countries' },
  { href: '/about', label: 'About' },
];

export const FOOTER_NAV: readonly NavGroup[] = [
  {
    heading: 'Knowledge',
    items: SECTIONS.map((section) => ({ href: `/${section.id}`, label: section.title })),
  },
  {
    heading: 'Reference',
    items: [
      { href: '/countries', label: 'Countries' },
      { href: '/institutions', label: 'Institutions' },
      { href: '/professions', label: 'Professions' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/history', label: 'History' },
      { href: '/timeline', label: 'Timeline' },
      { href: '/comparisons', label: 'Comparisons' },
      { href: '/sources', label: 'Research and Sources' },
    ],
  },
  {
    heading: 'Editorial',
    items: [
      { href: '/about', label: 'About' },
      { href: '/mission', label: 'Mission' },
      { href: '/methodology', label: 'Research Methodology' },
      { href: '/editorial-policy', label: 'Editorial Policy' },
      { href: '/corrections-policy', label: 'Corrections Policy' },
      { href: '/sources', label: 'Sources' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { href: '/disclaimer', label: 'Disclaimer' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
      { href: '/contact', label: 'Contact' },
    ],
  },
];

/**
 * A nav item is active when the current path is the item or sits beneath it.
 * `/justice` is active on `/justice/what-is-justice`; `/` is only active on `/`.
 *
 * The implementation lives in `./active-path` so the site's one client component can import
 * it without dragging this module — and therefore `content/sections` — into the client
 * bundle. Re-exported here for server-side consumers.
 */
export { isActivePath } from './active-path';
