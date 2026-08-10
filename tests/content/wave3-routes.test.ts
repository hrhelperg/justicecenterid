import { describe, expect, it } from 'vitest';
import {
  GLOSSARY,
  GLOSSARY_OWNED_ELSEWHERE,
  PUBLISHED_GLOSSARY,
  getGlossaryTerm,
  glossaryPath,
} from '@/content/glossary';
import {
  HUB_ONLY_GLOSSARY,
  ROUTED_GLOSSARY,
  getRoutedGlossaryTerm,
  glossaryRoutingContext,
} from '@/content/glossary-routes';
import { validateGlossaryPublication } from '@/content/reference-publication-gate';
import {
  ROUTED_INSTITUTION_TYPES,
  getInstitutionType,
  institutionPath,
} from '@/content/institutions';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { getSource } from '@/content/sources';
import { PUBLIC_ROUTES, PUBLIC_ROUTE_PATHS } from '@/content/public-routes';
import type { GlossaryTerm } from '@/content/types';

/**
 * Wave 3: glossary detail routes and the sub-national policing tier.
 */

const ROUTED_GLOSSARY_SLUGS = [
  'judicial-independence',
  'appeal',
  'judicial-review',
  'chain-of-custody',
  'disclosure',
];

const SUBNATIONAL = [
  'state-police',
  'provincial-police',
  'prefectural-police',
  'autonomous-community-police',
];

const ctx = glossaryRoutingContext();

/* -------------------------------------------------------------------------- */
/* Glossary routing                                                           */
/* -------------------------------------------------------------------------- */

describe('glossary routing is derived from the gate', () => {
  it('routes exactly the terms that satisfy the gate', () => {
    expect(ROUTED_GLOSSARY.map((t) => t.slug).toSorted()).toEqual(
      [...ROUTED_GLOSSARY_SLUGS].toSorted(),
    );
  });

  it('leaves the large majority of terms as hub entries', () => {
    expect(ROUTED_GLOSSARY.length + HUB_ONLY_GLOSSARY.length).toBe(PUBLISHED_GLOSSARY.length);
    expect(HUB_ONLY_GLOSSARY.length).toBeGreaterThan(ROUTED_GLOSSARY.length);
  });

  it('registers a route for every routed term and none for hub-only terms', () => {
    for (const term of ROUTED_GLOSSARY) {
      expect(PUBLIC_ROUTE_PATHS).toContain(glossaryPath(term));
    }
    for (const term of HUB_ONLY_GLOSSARY) {
      expect(PUBLIC_ROUTE_PATHS).not.toContain(glossaryPath(term));
      expect(getRoutedGlossaryTerm(term.slug)).toBeUndefined();
    }
  });

  it('still resolves hub-only terms from the glossary itself', () => {
    /* They remain real entries — they simply have no page. */
    for (const term of HUB_ONLY_GLOSSARY.slice(0, 5)) {
      expect(getGlossaryTerm(term.slug)).toBeDefined();
    }
  });

  it('files glossary routes under the glossary hub', () => {
    for (const route of PUBLIC_ROUTES) {
      if (route.kind === 'glossary-term') expect(route.parent).toBe('/glossary');
    }
  });
});

/*
 * NON-VACUITY. Every condition is driven with a broken record and asserted to fail. The
 * "owned elsewhere" case is the one that matters most, because it is the difference
 * between a glossary and a second copy of the guide corpus.
 */
describe('the glossary gate rejects what it claims to reject', () => {
  const base = ROUTED_GLOSSARY[0]!;

  const broken: [string, GlossaryTerm][] = [
    ['no context', { ...base, context: '' }],
    ['no purpose', { ...base, purpose: '' }],
    ['no reader question', { ...base, question: '' }],
    ['no jurisdiction note', { ...base, jurisdictionNote: '' }],
    ['a single source', { ...base, sources: ['iccpr'] }],
    ['an unknown source', { ...base, sources: ['iccpr', 'does-not-exist'] }],
    ['no country example', { ...base, countryExamples: [] }],
    [
      'an unresearched country example',
      { ...base, countryExamples: [{ countrySlug: 'atlantis', note: 'x' }] },
    ],
    ['fewer than two related concepts', { ...base, related: ['court'] }],
    ['no factsVerifiedOn', { ...base, factsVerifiedOn: undefined }],
    ['a malformed date', { ...base, reviewedOn: '10-08-2026' }],
    ['a non-fact-checked review state', { ...base, review: 'editorial-review' as const }],
  ];

  it.each(broken)('rejects a term with %s', (_label, term) => {
    expect(validateGlossaryPublication(term, ctx).length).toBeGreaterThan(0);
  });

  it('rejects a term whose intent is owned by an existing route', () => {
    const owned = { ...base, slug: GLOSSARY_OWNED_ELSEWHERE[0]! };
    const problems = validateGlossaryPublication(owned, ctx);
    expect(problems.some((p) => p.includes('already owned'))).toBe(true);
  });

  it('accepts the unmodified routed terms, so the rejections above are meaningful', () => {
    for (const term of ROUTED_GLOSSARY) {
      expect(validateGlossaryPublication(term, ctx)).toEqual([]);
    }
  });
});

describe('the ownership map is real, not decorative', () => {
  it('names only terms that exist in the glossary', () => {
    for (const slug of GLOSSARY_OWNED_ELSEWHERE) {
      expect(getGlossaryTerm(slug), `unknown term: ${slug}`).toBeDefined();
    }
  });

  it('never routes a term it names', () => {
    for (const slug of GLOSSARY_OWNED_ELSEWHERE) {
      expect(ROUTED_GLOSSARY.map((t) => t.slug)).not.toContain(slug);
      expect(PUBLIC_ROUTE_PATHS).not.toContain(`/glossary/${slug}`);
    }
  });

  /*
   * The claim "owned elsewhere" has to be true. For the terms owned by a GUIDE, the guide
   * must actually exist — otherwise the map is suppressing a page for no reason.
   */
  it('points at guides that actually exist', () => {
    const guidePaths = PUBLISHED_GUIDES.map(guidePath);
    const byGuide: Record<string, string> = {
      justice: '/justice/what-is-justice',
      'rule-of-law': '/justice/what-is-the-rule-of-law',
      'due-process': '/justice/what-is-due-process',
      'presumption-of-innocence': '/justice/what-is-the-presumption-of-innocence',
      court: '/courts/what-do-courts-do',
      prosecutor: '/prosecution/what-does-a-prosecutor-do',
      'criminal-investigation': '/investigations/what-is-a-criminal-investigation',
      'forensic-science': '/forensics/what-is-forensic-science',
    };
    for (const [slug, path] of Object.entries(byGuide)) {
      expect(GLOSSARY_OWNED_ELSEWHERE).toContain(slug);
      expect(guidePaths, `${slug} claims ${path}`).toContain(path);
    }
  });

  it('points at institution and section routes that actually exist', () => {
    expect(PUBLIC_ROUTE_PATHS).toContain('/institutions/gendarmerie');
    expect(PUBLIC_ROUTE_PATHS).toContain('/public-safety');
  });
});

/* -------------------------------------------------------------------------- */
/* Sub-national policing                                                      */
/* -------------------------------------------------------------------------- */

describe('the sub-national policing tier', () => {
  it('routes all four types', () => {
    for (const slug of SUBNATIONAL) {
      expect(getInstitutionType(slug), slug).toBeDefined();
      expect(PUBLIC_ROUTE_PATHS).toContain(`/institutions/${slug}`);
    }
  });

  /*
   * The requirement that makes this cluster honest. Without a counterexample, a reader who
   * sees state police explained with American, Brazilian and Australian cases concludes
   * that having states implies having state police.
   */
  it.each(SUBNATIONAL)('%s carries at least one counterexample', (slug) => {
    const institution = getInstitutionType(slug)!;
    expect((institution.counterExamples ?? []).length).toBeGreaterThan(0);
  });

  it.each(SUBNATIONAL)('%s draws its counterexample from a published dossier', (slug) => {
    const published = PUBLISHED_DOSSIERS.map((d) => d.slug);
    for (const example of getInstitutionType(slug)!.counterExamples ?? []) {
      expect(published, `${slug} -> ${example.countrySlug}`).toContain(example.countrySlug);
      expect(example.note.length).toBeGreaterThan(60);
    }
  });

  /*
   * The Wave 2 invariant, extended to counterexamples. A counterexample makes a factual
   * claim about a named country just as an example does, and needs the same backing.
   */
  it.each(SUBNATIONAL)('%s backs its counterexample with a country-scoped source', (slug) => {
    const institution = getInstitutionType(slug)!;
    const scopes = new Set(institution.sources.map((id) => getSource(id)!.jurisdiction));
    for (const example of institution.counterExamples ?? []) {
      const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
      expect(
        scopes.has(dossier.countryCode),
        `${slug} counterexample ${example.countrySlug} lacks a ${dossier.countryCode} source`,
      ).toBe(true);
    }
  });

  it('never names the same country as both example and counterexample', () => {
    for (const slug of SUBNATIONAL) {
      const institution = getInstitutionType(slug)!;
      const examples = (institution.countryExamples ?? []).map((e) => e.countrySlug);
      for (const counter of institution.counterExamples ?? []) {
        expect(examples, `${slug}: ${counter.countrySlug} is on both sides`).not.toContain(
          counter.countrySlug,
        );
      }
    }
  });

  /*
   * Anti-equivalence. Each page must actively refuse the conflation the brief names,
   * rather than merely avoiding the words.
   */
  it('prefectural police refuses equivalence with federal state police', () => {
    const text = JSON.stringify(getInstitutionType('prefectural-police'));
    expect(text).toMatch(/not sovereign/i);
    expect(text).toMatch(/no legislative power over criminal law|hold no legislative power/i);
  });

  it('state police warns that highway patrol is not a synonym', () => {
    const text = JSON.stringify(getInstitutionType('state-police'));
    expect(text).toMatch(/highway patrol/i);
  });

  it('autonomous-community police states the asymmetry', () => {
    const text = JSON.stringify(getInstitutionType('autonomous-community-police'));
    expect(text).toMatch(/asymmetr/i);
    expect(text).toMatch(/not every autonomous community|does not|conditional/i);
  });

  it('provincial police separates holding the competence from owning the force', () => {
    const text = JSON.stringify(getInstitutionType('provincial-police'));
    expect(text).toMatch(/contract/i);
    expect(text).toMatch(/competence/i);
  });

  it('creates no route for a candidate the matrix rejected or merged', () => {
    for (const path of [
      '/institutions/highway-patrol',
      '/institutions/regional-police',
      '/institutions/territorial-police',
      '/institutions/local-police',
    ]) {
      expect(PUBLIC_ROUTE_PATHS, path).not.toContain(path);
    }
  });
});

/* -------------------------------------------------------------------------- */
/* Global hygiene                                                             */
/* -------------------------------------------------------------------------- */

describe('global hygiene', () => {
  it('keeps every route path unique', () => {
    expect(new Set(PUBLIC_ROUTE_PATHS).size).toBe(PUBLIC_ROUTE_PATHS.length);
  });

  it('gives every routed glossary term at least two resolvable sources', () => {
    for (const term of ROUTED_GLOSSARY) {
      expect(term.sources.length).toBeGreaterThanOrEqual(2);
      for (const id of term.sources) expect(getSource(id), id).toBeDefined();
    }
  });

  it('backs every routed glossary country example with a country-scoped source', () => {
    for (const term of ROUTED_GLOSSARY) {
      const scopes = new Set(term.sources.map((id) => getSource(id)!.jurisdiction));
      for (const example of term.countryExamples ?? []) {
        const dossier = PUBLISHED_DOSSIERS.find((d) => d.slug === example.countrySlug)!;
        expect(
          scopes.has(dossier.countryCode),
          `${term.slug} cites ${example.countrySlug} without a ${dossier.countryCode} source`,
        ).toBe(true);
      }
    }
  });

  it('leaves no glossary term unaccounted for', () => {
    const accounted = new Set([
      ...ROUTED_GLOSSARY.map((t) => t.slug),
      ...HUB_ONLY_GLOSSARY.map((t) => t.slug),
    ]);
    for (const term of GLOSSARY) {
      if (term.status === 'published') expect(accounted).toContain(term.slug);
    }
  });
});
