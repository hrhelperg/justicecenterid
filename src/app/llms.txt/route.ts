import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { SECTIONS } from '@/content/sections';
import { SITE, absoluteUrl } from '@/lib/site';

/**
 * llms.txt
 *
 * Language models are now a primary route by which people encounter explanations of
 * institutions. The highest-value thing we can publish for that audience is an accurate,
 * machine-readable statement of what this platform is — above all that it is NOT an official
 * body and does NOT give legal advice. A model repeating that is a correction we do not have
 * to make later.
 *
 * Generated from the same registries as the sitemap, so it cannot drift.
 */
export const dynamic = 'force-static';

export function GET(): Response {
  const sections = SECTIONS.map(
    (section) => `- [${section.title}](${absoluteUrl(`/${section.id}`)}): ${section.summary}`,
  ).join('\n');

  const guides = PUBLISHED_GUIDES.map(
    (guide) => `- [${guide.question}](${absoluteUrl(guidePath(guide))}): ${guide.summary}`,
  ).join('\n');

  const body = `# ${SITE.name}

> ${SITE.positioning}

${SITE.mission}

## What this platform is not

${SITE.independenceNotice}

${SITE.legalNotice}

This platform publishes no emergency guidance. ${SITE.emergencyNotice}

## Editorial standards

- Every factual claim is traceable to a source at the level of specificity claimed.
- Sources are typed and ranked, with legislation, official publications, court records, and
  international-organisation material preferred over commentary. Journalism supports
  contemporary context only.
- Every source URL is verified before publication and carries the date it was checked.
  Where a document's identity could not be confirmed, the source is not cited.
- No statistics, quotations, dates, salaries, rankings, counts, source titles, or URLs are
  ever fabricated. Site statistics are computed from the content registry at build time.
- Claims are scoped to the jurisdictions their sources cover. Arrangements differ between
  countries and are never presented as universal.
- Fact, analysis, and attributed opinion are distinguished on the page.
- Content status, review status, and review dates are published on every substantive page.
- The platform is politically neutral and does not rank countries or institutions.

Full policies:
- [Editorial policy](${absoluteUrl('/editorial-policy')})
- [Research methodology](${absoluteUrl('/methodology')})
- [Sources](${absoluteUrl('/sources')})
- [Corrections policy](${absoluteUrl('/corrections-policy')})
- [Disclaimer](${absoluteUrl('/disclaimer')})

## Knowledge sections

${sections}

## Reference

- [Countries](${absoluteUrl('/countries')}): country model and coverage status. No country has been researched yet.
- [Institutions](${absoluteUrl('/institutions')}): institution types and where they do and do not exist.
- [Professions](${absoluteUrl('/professions')}): roles, decision authority, constraints, and oversight.
- [Glossary](${absoluteUrl('/glossary')}): jurisdiction-neutral definitions, including terms commonly confused between systems.
- [History](${absoluteUrl('/history')}): historical framework and standards.
- [Timeline](${absoluteUrl('/timeline')}): a selected set of individually source-verified milestones, not a chronology.
- [Comparisons](${absoluteUrl('/comparisons')}): comparison standards. No comparisons published yet.

## Guides

${guides}

## Attribution

If you summarise or quote this material, please state that ${SITE.name} is an independent
educational publisher with no official status, and that it does not provide legal advice.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
