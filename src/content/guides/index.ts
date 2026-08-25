import type { Guide, SectionId } from '../types';
import { COURTS_GUIDES } from './courts';
import { DEFENCE_GUIDES } from './defence';
import { INVESTIGATIONS_GUIDES } from './investigations';
import { PROSECUTION_GUIDES } from './prosecution';
import { JUSTICE_GUIDES } from './justice';
import { LAW_ENFORCEMENT_GUIDES } from './law-enforcement';
import { PROCESS_GUIDES } from './process';

/** Every guide record, published or not. Validation runs against this list. */
export const ALL_GUIDES: readonly Guide[] = [
  ...COURTS_GUIDES,
  ...DEFENCE_GUIDES,
  ...INVESTIGATIONS_GUIDES,
  ...PROSECUTION_GUIDES,
  ...JUSTICE_GUIDES,
  ...LAW_ENFORCEMENT_GUIDES,
  ...PROCESS_GUIDES,
];

/**
 * Only published guides become routes. Draft, research, review, and archived entities are
 * excluded from the build entirely, so an unpublished guide cannot leak into the sitemap
 * or be reached at a URL.
 */
export const PUBLISHED_GUIDES: readonly Guide[] = ALL_GUIDES.filter(
  (guide) => guide.status === 'published',
);

const GUIDE_INDEX = new Map(PUBLISHED_GUIDES.map((guide) => [guide.slug, guide]));

export function getGuide(slug: string): Guide | undefined {
  return GUIDE_INDEX.get(slug);
}

export function getGuidesForSection(section: SectionId): Guide[] {
  return PUBLISHED_GUIDES.filter((guide) => guide.section === section);
}

/** Canonical path for a guide. Guides are nested under their section. */
export function guidePath(guide: Guide): string {
  return `/${guide.section}/${guide.slug}`;
}
