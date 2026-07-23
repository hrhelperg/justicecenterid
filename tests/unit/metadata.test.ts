import { describe, expect, it } from 'vitest';
import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { articleSchema, jsonLdGraph, organizationSchema, webPageSchema } from '@/lib/jsonld';
import { ROOT_METADATA, buildMetadata } from '@/lib/metadata';
import { SITE, absoluteUrl } from '@/lib/site';

describe('metadata builder', () => {
  it('produces exactly one canonical, on the apex origin', () => {
    const meta = buildMetadata({ title: 'Courts', description: 'x', path: '/courts' });
    expect(meta.alternates?.canonical).toBe('https://justicecenterid.com/courts');
  });

  it('uses the entity summary as the description, unchanged', () => {
    const guide = PUBLISHED_GUIDES[0];
    expect(guide).toBeDefined();
    if (!guide) return;
    const meta = buildMetadata({
      title: guide.question,
      description: guide.summary,
      path: guidePath(guide),
    });
    expect(meta.description).toBe(guide.summary);
  });

  it('marks guides as articles with their real dates', () => {
    const meta = buildMetadata({
      title: 'x',
      description: 'y',
      path: '/justice/what-is-justice',
      type: 'article',
      publishedTime: '2026-07-23',
      modifiedTime: '2026-07-23',
    });
    const openGraph = meta.openGraph as Record<string, unknown> | undefined;
    expect(openGraph?.type).toBe('article');
    expect(openGraph?.publishedTime).toBe('2026-07-23');
    expect(openGraph?.modifiedTime).toBe('2026-07-23');
  });

  it('sets metadataBase and a title template on the root', () => {
    expect(ROOT_METADATA.metadataBase?.toString()).toContain('justicecenterid.com');
    expect(ROOT_METADATA.robots).toBeDefined();
  });

  it('every published guide has a description within the meta-description limit', () => {
    for (const guide of PUBLISHED_GUIDES) {
      expect(guide.summary.length, `${guide.slug} summary too long`).toBeLessThanOrEqual(320);
    }
  });
});

describe('structured data', () => {
  it('the Organization node invents no fields we do not have', () => {
    const org = organizationSchema();
    expect(org.name).toBe(SITE.name);
    expect(org.url).toBe(SITE.origin);
    for (const forbidden of [
      'address',
      'telephone',
      'founder',
      'foundingDate',
      'sameAs',
      'email',
    ]) {
      expect(org[forbidden], `Organization must not declare ${forbidden}`).toBeUndefined();
    }
  });

  it('uses no government, legal-service, FAQ, HowTo or rating schema types', () => {
    const guide = PUBLISHED_GUIDES[0];
    expect(guide).toBeDefined();
    if (!guide) return;

    const serialised = JSON.stringify(
      jsonLdGraph([
        organizationSchema(),
        webPageSchema({ path: '/', title: 'x', description: 'y' }),
        articleSchema(guide, guidePath(guide)),
      ]),
    );

    for (const forbidden of [
      'GovernmentOrganization',
      'GovernmentService',
      'LegalService',
      'Attorney',
      'FAQPage',
      'HowTo',
      'AggregateRating',
      'NewsArticle',
      'EducationalOrganization',
    ]) {
      expect(serialised, `must not emit ${forbidden}`).not.toContain(forbidden);
    }
  });

  it('emits each guide’s sources as machine-readable citations', () => {
    for (const guide of PUBLISHED_GUIDES) {
      const article = articleSchema(guide, guidePath(guide));
      const citations = article.citation;
      expect(Array.isArray(citations)).toBe(true);
      expect((citations as unknown[]).length).toBe(guide.sources.length);
      expect(article.url).toBe(absoluteUrl(guidePath(guide)));
      expect(article.dateModified).toBe(guide.updatedOn);
    }
  });
});
