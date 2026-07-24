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

  /*
   * Block-level citations.
   *
   * `Block` lets a paragraph carry its own `sources`, and 28 paragraphs across the guides
   * use it. Nothing validated them. The renderer ignores the field, so a paragraph could
   * cite an id resolving to nothing, or an id absent from the guide's own source list — in
   * which case the reader would never see it, because the rendered SourceList is built from
   * the entity-level array.
   *
   * Both invariants hold today. These tests keep them holding instead of leaving it to luck.
   */
  const BLOCK_CITATIONS: (readonly [string, string])[] = ALL_GUIDES.flatMap((guide) =>
    [
      ...guide.definition,
      ...guide.whyItExists,
      ...guide.howItWorks,
      ...guide.variation,
      ...guide.rightsAndAccountability,
      ...(guide.furtherReading ?? []),
    ].flatMap((block) =>
      block.kind === 'paragraph' && block.sources
        ? block.sources.map((id) => [guide.slug, id] as const)
        : [],
    ),
  );

  it('the guides actually use block-level citations', () => {
    // Guards the two tests below against silently becoming vacuous.
    expect(BLOCK_CITATIONS.length).toBeGreaterThan(0);
  });

  it.each(BLOCK_CITATIONS)('block citation %s -> %s resolves to a real source', (_slug, id) => {
    expect(getSource(id), `no source record with id "${id}"`).toBeDefined();
  });

  it.each(BLOCK_CITATIONS)(
    'block citation %s -> %s is also in the guide source list, so a reader can see it',
    (slug, id) => {
      const guide = getGuide(slug);
      expect(
        guide?.sources.includes(id),
        `guide "${slug}" cites "${id}" on a paragraph but omits it from its own sources ` +
          `array, so it never reaches the rendered source list`,
      ).toBe(true);
    },
  );
});
