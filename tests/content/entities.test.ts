import { describe, expect, it } from 'vitest';
import { PUBLISHED_GLOSSARY, GLOSSARY } from '@/content/glossary';
import { ALL_GUIDES, PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { PUBLISHED_INSTITUTION_TYPES } from '@/content/institutions';
import { PUBLISHED_PROFESSIONS } from '@/content/professions';
import { ENTITY_TYPES, SECTION_IDS } from '@/content/types';

/** Rules 1–3 and 8 from docs/architecture/content-model.md. */

describe('slug uniqueness', () => {
  it('guide slugs are unique', () => {
    const slugs = ALL_GUIDES.map((guide) => guide.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('glossary slugs are unique', () => {
    const slugs = GLOSSARY.map((term) => term.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('routable entity slugs do not collide across families', () => {
    const paths = PUBLISHED_GUIDES.map((guide) => guidePath(guide));
    expect(new Set(paths).size).toBe(paths.length);
  });
});

describe('required entity fields', () => {
  it.each(ALL_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'guide %s has a title, summary, valid type and section',
    (_slug, guide) => {
      expect(guide.title.trim().length).toBeGreaterThan(0);
      expect(guide.question.trim().length).toBeGreaterThan(0);
      expect(guide.summary.trim().length).toBeGreaterThan(0);
      expect(guide.summary.length).toBeLessThanOrEqual(320);
      expect(ENTITY_TYPES).toContain(guide.entityType);
      expect(SECTION_IDS).toContain(guide.section);
    },
  );

  it.each(PUBLISHED_GLOSSARY.map((term) => [term.slug, term] as const))(
    'glossary term %s has a term, definition and section',
    (_slug, term) => {
      expect(term.term.trim().length).toBeGreaterThan(0);
      expect(term.definition.trim().length).toBeGreaterThan(0);
      expect(SECTION_IDS).toContain(term.section);
    },
  );

  it.each(PUBLISHED_PROFESSIONS.map((p) => [p.slug, p] as const))(
    'profession %s has a required jurisdiction note and no invented figures',
    (_slug, profession) => {
      expect(profession.jurisdictionNote.trim().length).toBeGreaterThan(0);
      expect(profession.responsibilities.length).toBeGreaterThan(0);
      expect(profession.oversight.length).toBeGreaterThan(0);
      expect(profession.constraints.length).toBeGreaterThan(0);
      // Guards the "no salary / staffing / mortality figures at profession level" rule.
      const text = JSON.stringify(profession);
      expect(text).not.toMatch(/\b(salary|salaries|per annum|per year|USD|EUR|GBP)\b/i);
    },
  );

  it.each(PUBLISHED_INSTITUTION_TYPES.map((i) => [i.slug, i] as const))(
    'institution type %s records where it does and does not exist',
    (_slug, institution) => {
      expect(institution.presenceNote.trim().length).toBeGreaterThan(0);
      expect(institution.commonConfusions.length).toBeGreaterThan(0);
    },
  );
});

describe('temporal scope', () => {
  it.each(ALL_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'guide %s carries a historical period when it is not describing a current arrangement',
    (_slug, guide) => {
      if (guide.temporalScope !== 'current') {
        expect(guide.historicalPeriod).toBeTruthy();
      }
    },
  );
});
