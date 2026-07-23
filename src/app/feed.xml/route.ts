import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { SITE, absoluteUrl } from '@/lib/site';

/**
 * RSS 2.0 feed of published entities.
 *
 * Exists so librarians, educators, and researchers can follow updates without a platform
 * account, and so changes to a reference site are observable from outside.
 *
 * `force-static` is required: under `output: 'export'` only static GET handlers are
 * supported, and this one is written to a file at build time.
 */
export const dynamic = 'force-static';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET(): Response {
  const items = PUBLISHED_GUIDES.toSorted((a, b) => b.updatedOn.localeCompare(a.updatedOn));

  const latest = items[0]?.updatedOn;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)}</title>
    <link>${SITE.origin}</link>
    <description>${escapeXml(SITE.positioning)}</description>
    <language>${SITE.locale}</language>
    <atom:link href="${SITE.origin}/feed.xml" rel="self" type="application/rss+xml" />
${latest ? `    <lastBuildDate>${new Date(`${latest}T00:00:00Z`).toUTCString()}</lastBuildDate>\n` : ''}${items
    .map((guide) => {
      const url = absoluteUrl(guidePath(guide));
      return `    <item>
      <title>${escapeXml(guide.question)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(guide.summary)}</description>
      <pubDate>${new Date(`${guide.publishedOn ?? guide.updatedOn}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(guide.section)}</category>
    </item>`;
    })
    .join('\n')}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
