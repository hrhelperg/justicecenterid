import { describe, expect, it } from 'vitest';
import { GLOSSARY } from '@/content/glossary';
import { ALL_GUIDES, PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { isSafetySensitive } from '@/content/types';
import { ROUTES } from '@/lib/routes';

/** Rules 7, 9, 10, 12 and 15 from docs/architecture/content-model.md. */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

describe('publication gate', () => {
  it.each(PUBLISHED_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'published guide %s satisfies the gate',
    (_slug, guide) => {
      expect(guide.review, 'a published page may not be unreviewed').not.toBe('unreviewed');
      expect(guide.reviewedOn, 'a reviewed page must carry a review date').toMatch(ISO_DATE);
      expect(guide.updatedOn).toMatch(ISO_DATE);
      expect(guide.publishedOn).toMatch(ISO_DATE);
      expect(
        guide.sources.length,
        'published guides need at least one source',
      ).toBeGreaterThanOrEqual(1);
      expect(
        guide.related.length,
        'published guides need at least two related topics',
      ).toBeGreaterThanOrEqual(2);
    },
  );

  it.each(GLOSSARY.filter((t) => t.status === 'published').map((t) => [t.slug, t] as const))(
    'published glossary term %s satisfies the gate',
    (_slug, term) => {
      expect(term.review).not.toBe('unreviewed');
      expect(term.reviewedOn).toMatch(ISO_DATE);
      expect(term.sources.length).toBeGreaterThanOrEqual(1);
    },
  );

  it('no unpublished entity appears in the route registry', () => {
    const unpublished = ALL_GUIDES.filter((guide) => guide.status !== 'published');
    const routePaths = new Set(ROUTES.map((route) => route.path));
    for (const guide of unpublished) {
      expect(routePaths.has(guidePath(guide))).toBe(false);
    }
  });
});

describe('guide structure', () => {
  it.each(PUBLISHED_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'guide %s has every required editorial block',
    (_slug, guide) => {
      expect(guide.definition.length, 'missing definition block').toBeGreaterThan(0);
      expect(guide.whyItExists.length, 'missing why-it-exists block').toBeGreaterThan(0);
      expect(guide.howItWorks.length, 'missing how-it-works block').toBeGreaterThan(0);
      expect(guide.variation.length, 'missing jurisdictional-variation block').toBeGreaterThan(
        0,
      );
      expect(
        guide.rightsAndAccountability.length,
        'missing rights-and-accountability block',
      ).toBeGreaterThan(0);
      expect(
        guide.misconceptions.length,
        'at least two misconceptions required',
      ).toBeGreaterThanOrEqual(2);
      expect(guide.readingTimeMinutes).toBeGreaterThan(0);
    },
  );

  it.each(PUBLISHED_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'guide %s misconceptions each state a claim and a reality',
    (_slug, guide) => {
      for (const misconception of guide.misconceptions) {
        expect(misconception.claim.trim().length).toBeGreaterThan(0);
        expect(misconception.reality.trim().length).toBeGreaterThan(0);
      }
    },
  );
});

describe('safety review', () => {
  it.each(PUBLISHED_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'guide %s in a safety-sensitive section has a cleared safety review',
    (_slug, guide) => {
      if (isSafetySensitive(guide.section)) {
        expect(
          guide.safetyReview,
          `${guide.slug} is in a safety-sensitive section and must not be published with a pending safety review`,
        ).toBe('cleared');
      }
    },
  );
});
