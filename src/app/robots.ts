import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

/** Required under `output: 'export'` — metadata routes must opt in to static generation. */
export const dynamic = 'force-static';

/**
 * No crawler is blocked, including AI crawlers. The content is educational and published to
 * be read. Recorded as a decision rather than an oversight in docs/seo/seo-architecture.md,
 * and revisited only if crawl load becomes a hosting problem.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE.origin}/sitemap.xml`,
  };
}
