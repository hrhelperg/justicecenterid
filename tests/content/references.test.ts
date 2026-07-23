import { describe, expect, it } from 'vitest';
import { GLOSSARY, PUBLISHED_GLOSSARY, getGlossaryTerm } from '@/content/glossary';
import { ALL_GUIDES, getGuide } from '@/content/guides';
import { PUBLISHED_INSTITUTION_TYPES } from '@/content/institutions';
import { PUBLISHED_PROFESSIONS } from '@/content/professions';
import { SOURCES, getSource } from '@/content/sources';
import { TIMELINE } from '@/content/timeline';

/** Rules 4–6 from docs/architecture/content-model.md. */

const ALL_SOURCE_REFERENCES = [
  ...ALL_GUIDES.flatMap((g) => g.sources),
  ...GLOSSARY.flatMap((t) => t.sources),
  ...PUBLISHED_PROFESSIONS.flatMap((p) => p.sources),
  ...PUBLISHED_INSTITUTION_TYPES.flatMap((i) => i.sources),
  ...TIMELINE.flatMap((t) => t.sources),
];

describe('cross-references resolve', () => {
  it.each(ALL_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'every related slug on guide %s resolves to a published guide',
    (_slug, guide) => {
      for (const related of guide.related) {
        expect(getGuide(related), `unresolved related slug: ${related}`).toBeDefined();
      }
    },
  );

  it.each(ALL_GUIDES.map((guide) => [guide.slug, guide] as const))(
    'every keyTerm on guide %s resolves to a glossary term',
    (_slug, guide) => {
      for (const term of guide.keyTerms ?? []) {
        expect(getGlossaryTerm(term), `unresolved glossary term: ${term}`).toBeDefined();
      }
    },
  );

  it.each(PUBLISHED_GLOSSARY.map((term) => [term.slug, term] as const))(
    'every related slug on glossary term %s resolves',
    (_slug, term) => {
      for (const related of term.related) {
        const resolved = getGlossaryTerm(related) ?? getGuide(related);
        expect(resolved, `unresolved related slug: ${related}`).toBeDefined();
      }
    },
  );

  it('every source reference resolves to a source record', () => {
    for (const id of ALL_SOURCE_REFERENCES) {
      expect(getSource(id), `unresolved source id: ${id}`).toBeDefined();
    }
  });

  it('no guide references itself as related', () => {
    for (const guide of ALL_GUIDES) {
      expect(guide.related).not.toContain(guide.slug);
    }
  });
});

describe('source records are well formed', () => {
  it('source ids are unique', () => {
    const ids = SOURCES.map((source) => source.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(SOURCES.map((source) => [source.id, source] as const))(
    'source %s has a title, publisher, and a verified https URL where a URL is given',
    (_id, source) => {
      expect(source.title.trim().length).toBeGreaterThan(0);
      expect(source.publisher.trim().length).toBeGreaterThan(0);

      if (source.url) {
        expect(source.url.startsWith('https://'), `${source.id} URL must be https`).toBe(true);
        // An unverified URL is never published. See docs/editorial/source-policy.md.
        expect(source.verifiedOn, `${source.id} has a URL but no verifiedOn date`).toMatch(
          /^\d{4}-\d{2}-\d{2}$/,
        );
      }
    },
  );

  it('every source in the registry is actually used somewhere', () => {
    const used = new Set(ALL_SOURCE_REFERENCES);
    const orphans = SOURCES.filter((source) => !used.has(source.id)).map((s) => s.id);
    expect(orphans, 'unused sources should be removed or cited').toEqual([]);
  });
});
