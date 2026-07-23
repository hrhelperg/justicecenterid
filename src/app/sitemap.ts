import type { MetadataRoute } from 'next';
import { ROUTES } from '@/lib/routes';
import { absoluteUrl } from '@/lib/site';

/** Required under `output: 'export'` — metadata routes must opt in to static generation. */
export const dynamic = 'force-static';

/**
 * Generated from the route registry. Only published entities produce routes, so a draft
 * cannot appear here.
 *
 * `changeFrequency` is deliberately omitted: it is advisory, widely ignored, and inviting a
 * guess is inviting a fabrication. `lastModified` is the entity's own updatedOn — never a
 * build timestamp, because a page whose content did not change must not claim a new
 * modification date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    priority: route.priority,
    ...(route.lastModified ? { lastModified: route.lastModified } : {}),
  }));
}
