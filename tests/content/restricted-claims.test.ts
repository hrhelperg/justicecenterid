import { describe, expect, it } from 'vitest';
import { COUNTRY_DOSSIERS } from '@/content/dossiers';
import { ALL_GUIDES } from '@/content/guides';
import {
  RESTRICTED_PATTERNS,
  findRestrictedPhrasing,
  validateRestrictedClaim,
} from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import { RESTRICTED_CLAIM_CATEGORIES } from '@/content/types';
import type { Block, RestrictedClaim, RestrictedClaimCategory } from '@/content/types';

/** Precondition A4. */

const SOURCE_IDS = SOURCES.map((s) => s.id);

const valid: RestrictedClaim = {
  id: 'example',
  category: 'staffing',
  statement: 'Example measured staffing claim.',
  claimType: 'fact',
  sources: ['fr-constitution-1958'],
  sourceScope: 'What the source actually establishes.',
  jurisdiction: 'FR',
  temporalScope: 'current',
  verifiedOn: '2026-07-24',
  metricPeriod: '2025',
  limitation: 'Does not establish anything beyond the cited figure.',
};

function blockText(blocks: readonly Block[]): string {
  return blocks
    .map((block) => {
      switch (block.kind) {
        case 'paragraph':
          return block.text;
        case 'list':
          return block.items.join(' ');
        case 'definitionList':
          return block.items.map((i) => `${i.term} ${i.description}`).join(' ');
        case 'callout':
          return `${block.title} ${block.text}`;
        default:
          return '';
      }
    })
    .join('\n');
}

describe('restricted-claim schema enforcement', () => {
  it('accepts a fully specified claim, so the rejections below mean something', () => {
    expect(validateRestrictedClaim(valid, SOURCE_IDS)).toEqual([]);
  });

  it.each(RESTRICTED_CLAIM_CATEGORIES)(
    'category %s has at least one lexical pattern',
    (category) => {
      expect(
        RESTRICTED_PATTERNS.some((p) => p.category === category),
        `no pattern guards the "${category}" category`,
      ).toBe(true);
    },
  );

  it('rejects a claim with no source', () => {
    expect(validateRestrictedClaim({ ...valid, sources: [] }, SOURCE_IDS).join(' ')).toMatch(
      /requires at least one source/,
    );
  });

  it('rejects a claim citing a source that does not exist', () => {
    expect(
      validateRestrictedClaim({ ...valid, sources: ['nope'] }, SOURCE_IDS).join(' '),
    ).toMatch(/does not resolve/);
  });

  it('rejects a claim with no source scope', () => {
    expect(
      validateRestrictedClaim({ ...valid, sourceScope: '  ' }, SOURCE_IDS).join(' '),
    ).toMatch(/sourceScope must state/);
  });

  it('rejects a claim with no limitation', () => {
    expect(validateRestrictedClaim({ ...valid, limitation: '' }, SOURCE_IDS).join(' ')).toMatch(
      /limitation is required/,
    );
  });

  it('rejects a malformed jurisdiction', () => {
    expect(
      validateRestrictedClaim({ ...valid, jurisdiction: 'France' }, SOURCE_IDS).join(' '),
    ).toMatch(/ISO 3166-1/);
  });

  it('rejects a missing or malformed verification date', () => {
    expect(
      validateRestrictedClaim({ ...valid, verifiedOn: 'July 2026' }, SOURCE_IDS).join(' '),
    ).toMatch(/must be an ISO date/);
  });

  it('rejects a measured claim with no metric period', () => {
    const { metricPeriod: _omitted, ...withoutPeriod } = valid;
    expect(
      validateRestrictedClaim(withoutPeriod as RestrictedClaim, SOURCE_IDS).join(' '),
    ).toMatch(/requires metricPeriod/);
  });
});

describe('restricted-claim lexical enforcement', () => {
  /*
   * The evasion this guards against: drop the number, keep the assertion. Each phrase below
   * makes a restricted claim with no evidence attached, and each must be caught.
   */
  const evasions: [RestrictedClaimCategory, string][] = [
    ['corruption', 'The service suffers from widespread corruption at every level.'],
    ['public-trust', 'The institution is highly trusted across the country.'],
    ['staffing', 'Courts are chronically understaffed.'],
    ['institutional-effectiveness', 'The system is very effective by any measure.'],
    ['political-control', 'Prosecutors are politically controlled in practice.'],
    ['crime-levels', 'The country has high crime in its largest cities.'],
    ['occupational-harm', 'Policing is a dangerous profession.'],
    ['compensation', 'Officers are poorly paid compared with other professions.'],
    ['human-rights-performance', 'The state has a poor human-rights record.'],
  ];

  it.each(evasions)('catches an undeclared %s claim made qualitatively', (category, text) => {
    const violations = findRestrictedPhrasing(text);
    expect(
      violations.map((v) => v.category),
      `"${text}" should trip the ${category} guard`,
    ).toContain(category);
  });

  it('allows the phrasing when the entity has declared a claim in that category', () => {
    const [category, text] = evasions[0]!;
    expect(findRestrictedPhrasing(text, [category])).toEqual([]);
  });

  it('does not fire on ordinary institutional prose', () => {
    const text =
      'The parquet is hierarchical, running from the procureur général to the procureur de la République. Magistrats du parquet do not benefit from the guarantee of irremovability.';
    expect(findRestrictedPhrasing(text)).toEqual([]);
  });
});

describe('published content makes no undeclared restricted claim', () => {
  const surfaces: [string, string, RestrictedClaimCategory[]][] = [
    ...ALL_GUIDES.filter((g) => g.status === 'published').map(
      (guide) =>
        [
          `guide:${guide.slug}`,
          blockText([
            ...guide.definition,
            ...guide.whyItExists,
            ...guide.howItWorks,
            ...guide.variation,
            ...guide.rightsAndAccountability,
          ]),
          [] as RestrictedClaimCategory[],
        ] as [string, string, RestrictedClaimCategory[]],
    ),
    ...COUNTRY_DOSSIERS.flatMap((dossier) => [
      [`country:${dossier.slug}`, blockText(dossier.blocks), []] as [
        string,
        string,
        RestrictedClaimCategory[],
      ],
      ...dossier.modules
        .filter((m) => m.status === 'published')
        .map(
          (moduleEntry) =>
            [
              `country:${dossier.slug}/${moduleEntry.moduleId}`,
              blockText(moduleEntry.blocks),
              (moduleEntry.restrictedClaims ?? []).map((c) => c.category),
            ] as [string, string, RestrictedClaimCategory[]],
        ),
    ]),
  ];

  it('has surfaces to scan, so the assertions below are not vacuous', () => {
    expect(surfaces.length).toBeGreaterThan(10);
  });

  it.each(surfaces)('%s makes no undeclared restricted claim', (_id, text, declared) => {
    const violations = findRestrictedPhrasing(text, declared);
    expect(
      violations.map((v) => `${v.category}: "${v.match}" — ${v.reason}`),
      'restricted phrasing without a declared, sourced claim',
    ).toEqual([]);
  });

  it('validates every declared restricted claim on published country modules', () => {
    for (const dossier of COUNTRY_DOSSIERS) {
      for (const moduleEntry of dossier.modules) {
        if (moduleEntry.status !== 'published') continue;
        for (const claim of moduleEntry.restrictedClaims ?? []) {
          expect(
            validateRestrictedClaim(claim, SOURCE_IDS),
            `${dossier.slug}/${moduleEntry.moduleId} claim "${claim.id}"`,
          ).toEqual([]);
        }
      }
    }
  });
});
