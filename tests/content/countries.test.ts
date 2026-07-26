import { describe, expect, it } from 'vitest';
import { COUNTRIES } from '@/content/countries';
import { PUBLISHED_DOSSIERS } from '@/content/dossiers';
import { SITE_STATS } from '@/lib/content';

/**
 * Rule 14: a country's rendered content may not exceed its coverage state.
 *
 * A country at `none`, `planned`, or `in-research` may carry its name, region, and planned
 * modules — nothing else. Legal-system family and institution presence are research outputs
 * requiring sources; populating them from general impression is exactly the failure this
 * check exists to prevent.
 */

const BELOW_PARTIAL = ['none', 'planned', 'in-research'];

describe('country coverage ceiling', () => {
  it('country codes are unique ISO 3166-1 alpha-2 codes', () => {
    const codes = COUNTRIES.map((country) => country.code);
    expect(new Set(codes).size).toBe(codes.length);
    for (const code of codes) {
      expect(code, `${code} is not a two-letter uppercase code`).toMatch(/^[A-Z]{2}$/);
    }
  });

  it.each(COUNTRIES.map((country) => [country.code, country] as const))(
    'country %s does not carry claims beyond its coverage state',
    (_code, country) => {
      if (!BELOW_PARTIAL.includes(country.coverage)) return;

      expect(
        country.legalSystemFamilies,
        `${country.code} is below partial coverage and may not classify its legal system`,
      ).toEqual([]);

      expect(
        country.institutionPresence ?? {},
        `${country.code} is below partial coverage and may not record institution presence`,
      ).toEqual({});

      expect(
        country.note ?? '',
        `${country.code} is below partial coverage and may not carry narrative content`,
      ).toBe('');
    },
  );

  it.each(COUNTRIES.map((country) => [country.code, country] as const))(
    'country %s with sourced claims cites its sources',
    (_code, country) => {
      if (country.legalSystemFamilies.length > 0) {
        expect(
          country.sources.length,
          `${country.code} classifies its legal system and must cite a source`,
        ).toBeGreaterThan(0);
      }
    },
  );

  it('holds only unpublished, still-planned countries (no published-dossier drift)', () => {
    // The registry is the NOT-YET-PUBLISHED queue. A published dossier's code must never linger
    // here: that drift is what once made /about derive and announce "0 countries researched".
    const publishedCodes = new Set(PUBLISHED_DOSSIERS.map((dossier) => dossier.countryCode));
    const stillListed = COUNTRIES.filter((country) => publishedCodes.has(country.code)).map(
      (country) => country.code,
    );
    expect(stillListed, 'published country codes still in the planning registry').toEqual([]);
    for (const country of COUNTRIES) expect(country.coverage).toBe('planned');
  });

  it('reports the researched-country count as the number of published dossiers', () => {
    // Guards the exact figure /about renders. It must track the published dossiers, not the
    // planning registry — deriving it from the registry silently under-reported it to zero.
    expect(SITE_STATS.countriesResearched).toBe(PUBLISHED_DOSSIERS.length);
    expect(SITE_STATS.countriesResearched).toBeGreaterThan(0);
  });
});
