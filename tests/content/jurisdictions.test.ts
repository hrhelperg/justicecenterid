import { describe, expect, it } from 'vitest';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { SOURCES } from '@/content/sources';
import type { JurisdictionRecord } from '@/content/types';

/**
 * Precondition A1.
 *
 * The registry tests assert the data we ship is valid. The synthetic tests below assert the
 * validator actually rejects the invalid combinations — without them, `validateJurisdiction`
 * could return an empty array unconditionally and every registry test would still pass.
 */

const base: JurisdictionRecord = {
  id: 'test',
  slug: 'test',
  name: 'Test',
  countryCode: 'FR',
  level: 'region',
  parentJurisdictionId: 'fr',
  legalSystemScope: 'national',
  policingScope: 'none',
  courtScope: 'national',
  prosecutionScope: 'national',
  correctionalScope: 'national',
  temporalScope: 'current',
  coverage: 'partial',
  sources: ['fr-constitution-1958'],
  status: 'published',
};

describe('jurisdiction registry', () => {
  it('is not empty', () => {
    expect(JURISDICTIONS.length).toBeGreaterThan(0);
  });

  it('has unique ids and per-country unique slugs', () => {
    const ids = JURISDICTIONS.map((j) => j.id);
    expect(new Set(ids).size).toBe(ids.length);

    const perCountry = new Map<string, string[]>();
    for (const j of JURISDICTIONS) {
      perCountry.set(j.countryCode, [...(perCountry.get(j.countryCode) ?? []), j.slug]);
    }
    for (const [code, slugs] of perCountry) {
      expect(new Set(slugs).size, `duplicate slug in ${code}`).toBe(slugs.length);
    }
  });

  it.each(JURISDICTIONS.map((j) => [j.id, j] as const))(
    'jurisdiction %s passes every validation rule',
    (_id, jurisdiction) => {
      expect(validateJurisdiction(jurisdiction)).toEqual([]);
    },
  );

  it.each(JURISDICTIONS.map((j) => [j.id, j] as const))(
    'jurisdiction %s references only real sources',
    (_id, jurisdiction) => {
      for (const sourceId of jurisdiction.sources) {
        expect(
          SOURCES.some((s) => s.id === sourceId),
          `unresolved source "${sourceId}"`,
        ).toBe(true);
      }
    },
  );

  /*
   * The substantive France findings, asserted as behaviour rather than prose. If someone
   * later "tidies" these into `own`, the test says why that is wrong.
   */
  it('records French administrative tiers as having no court or prosecution jurisdiction', () => {
    for (const id of ['fr-region', 'fr-departement', 'fr-commune']) {
      const tier = getJurisdiction(id);
      expect(tier?.courtScope, `${id} must not claim its own courts`).toBe('national');
      expect(tier?.prosecutionScope, `${id} must not claim its own prosecution`).toBe(
        'national',
      );
    }
  });

  it('records the commune as the only sub-national tier with its own policing function', () => {
    expect(getJurisdiction('fr-commune')?.policingScope).toBe('own');
    expect(getJurisdiction('fr-region')?.policingScope).toBe('none');
    expect(getJurisdiction('fr-departement')?.policingScope).toBe('none');
  });

  it('never lets an unresearched overseas territory inherit the metropolitan arrangement', () => {
    const overseas = JURISDICTIONS.filter(
      (j) => j.coverage === 'in-research' && j.countryCode === 'FR',
    );
    expect(overseas.length).toBeGreaterThan(0);
    for (const territory of overseas) {
      expect(territory.courtScope, `${territory.id} must not assume a court arrangement`).toBe(
        'unknown',
      );
      expect(territory.prosecutionScope).toBe('unknown');
      expect(territory.correctionalScope).toBe('unknown');
    }
  });

  it('models collectivités territoriales uniques as exercising two tiers', () => {
    for (const id of ['fr-martinique', 'fr-guyane']) {
      const record = getJurisdiction(id);
      expect(record?.alsoExercisesLevels).toContain('department');
      expect(record?.alsoExercisesLevels).toContain('region');
    }
  });

  it('does not group New Caledonia with the Article 74 collectivities', () => {
    expect(getJurisdiction('fr-nouvelle-caledonie')?.level).toBe('special');
    expect(getJurisdiction('fr-polynesie-francaise')?.level).toBe('territory');
  });
});

describe('jurisdiction validation rejects invalid combinations', () => {
  it('accepts the baseline record, so the rejections below mean something', () => {
    expect(validateJurisdiction(base, [...JURISDICTIONS, base])).toEqual([]);
  });

  it('rejects a country record that has a parent', () => {
    const problems = validateJurisdiction(
      { ...base, id: 'x', level: 'country', parentJurisdictionId: 'fr' },
      JURISDICTIONS,
    );
    expect(problems.join(' ')).toMatch(/must not have a parent/);
  });

  it('rejects a sub-national record with no parent', () => {
    const { parentJurisdictionId: _omitted, ...orphan } = base;
    const problems = validateJurisdiction(orphan as JurisdictionRecord, JURISDICTIONS);
    expect(problems.join(' ')).toMatch(/requires a parentJurisdictionId/);
  });

  it('rejects a parent that does not resolve', () => {
    const problems = validateJurisdiction(
      { ...base, parentJurisdictionId: 'does-not-exist' },
      JURISDICTIONS,
    );
    expect(problems.join(' ')).toMatch(/does not resolve/);
  });

  it('rejects a parent in a different country', () => {
    const foreign: JurisdictionRecord = { ...base, id: 'de-root', countryCode: 'DE' };
    const problems = validateJurisdiction(
      { ...base, id: 'child', countryCode: 'FR', parentJurisdictionId: 'de-root' },
      [...JURISDICTIONS, foreign],
    );
    expect(problems.join(' ')).toMatch(/is in country DE/);
  });

  it('detects a parent cycle', () => {
    const a: JurisdictionRecord = { ...base, id: 'a', slug: 'a', parentJurisdictionId: 'b' };
    const b: JurisdictionRecord = { ...base, id: 'b', slug: 'b', parentJurisdictionId: 'a' };
    expect(validateJurisdiction(a, [a, b]).join(' ')).toMatch(/cycle/);
  });

  it('rejects a historical record with no period', () => {
    const problems = validateJurisdiction(
      { ...base, temporalScope: 'historical' },
      JURISDICTIONS,
    );
    expect(problems.join(' ')).toMatch(/requires a historicalPeriod/);
  });

  it('rejects a current record that carries a historical period', () => {
    const problems = validateJurisdiction(
      { ...base, temporalScope: 'current', historicalPeriod: '1800-1900' },
      JURISDICTIONS,
    );
    expect(problems.join(' ')).toMatch(/must not carry a historicalPeriod/);
  });

  it('rejects an unresearched jurisdiction that asserts a functional scope', () => {
    const problems = validateJurisdiction(
      { ...base, coverage: 'planned', courtScope: 'own', sources: [] },
      JURISDICTIONS,
    );
    expect(problems.join(' ')).toMatch(/must record every functional scope as "unknown"/);
  });

  it('rejects a researched jurisdiction with no source', () => {
    const problems = validateJurisdiction({ ...base, sources: [] }, JURISDICTIONS);
    expect(problems.join(' ')).toMatch(/requires at least one source/);
  });

  it('rejects alsoExercisesLevels repeating the record own level', () => {
    const problems = validateJurisdiction(
      { ...base, level: 'region', alsoExercisesLevels: ['region'] },
      JURISDICTIONS,
    );
    expect(problems.join(' ')).toMatch(/repeats the record's own level/);
  });
});
