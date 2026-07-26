import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { COUNTRIES } from '@/content/countries';
import { COUNTRY_DOSSIERS } from '@/content/dossiers';
import { JURISDICTIONS } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { findPlaceholderResidue } from '@/content/placeholders';
// The scaffold planner is plain Node ESM; vitest imports it directly.
import { planScaffold, validateScaffoldInput } from '../../scripts/scaffold-country.mjs';

/**
 * The real registries, assembled exactly as the scaffold CLI assembles them. Passing them in
 * keeps `planScaffold` pure and lets these tests exercise real collision detection.
 */
const EXISTING = {
  slugs: new Set(COUNTRY_DOSSIERS.map((d) => d.slug)),
  codes: new Set([
    ...COUNTRY_DOSSIERS.map((d) => d.countryCode),
    ...COUNTRIES.map((c) => c.code),
  ]),
  routePaths: new Set([...PUBLIC_ROUTES.map((r) => r.path), ...JURISDICTIONS.map((j) => j.id)]),
  moduleDefs: COUNTRY_MODULES.map((m) => ({ id: m.id, slug: m.slug, title: m.title })),
};

// Fictional fixture — never a real jurisdiction, so a generated skeleton can never be mistaken
// for research. XZ is a user-assigned ISO 3166-1 code space; the scaffold checks format only.
const FIXTURE = { slug: 'exampleland', name: 'Exampleland', code: 'XZ' };

describe('scaffold input validation (format only)', () => {
  it('accepts a well-formed fixture', () => {
    expect(validateScaffoldInput(FIXTURE)).toEqual([]);
  });

  it.each([
    [{ slug: 'Exampleland', name: 'Exampleland', code: 'XZ' }, /kebab-case/],
    [{ slug: 'example_land', name: 'Exampleland', code: 'XZ' }, /kebab-case/],
    [{ slug: 'exampleland', name: 'exampleland', code: 'XZ' }, /plain country name/],
    [{ slug: 'exampleland', name: 'Exampleland', code: 'xz' }, /two uppercase letters/],
    [{ slug: 'exampleland', name: 'Exampleland', code: 'XZZ' }, /two uppercase letters/],
  ])('rejects malformed input %o', (input, re) => {
    expect(validateScaffoldInput(input).join(' ')).toMatch(re);
  });
});

describe('scaffold planner', () => {
  it('plans exactly the five skeleton/document files and a checklist', () => {
    const plan = planScaffold(FIXTURE, EXISTING);
    expect(plan.ok).toBe(true);
    expect(plan.files.map((f) => f.path)).toEqual([
      'src/content/dossiers/exampleland.ts',
      'docs/research/exampleland-research-plan.md',
      'docs/research/exampleland-source-register.md',
      'docs/research/exampleland-model-findings.md',
      'docs/audits/exampleland-country-pilot-qa.md',
    ]);
    expect(plan.checklist.length).toBeGreaterThan(0);
  });

  it('is deterministic (no dates, no randomness)', () => {
    expect(JSON.stringify(planScaffold(FIXTURE, EXISTING))).toBe(
      JSON.stringify(planScaffold(FIXTURE, EXISTING)),
    );
  });

  it('touches no existing file — it only plans new dossier and doc files', () => {
    const plan = planScaffold(FIXTURE, EXISTING);
    for (const f of plan.files) {
      expect(f.path).not.toContain('index.ts'); // never edits the dossier registry
      expect(f.path).not.toContain('public-routes'); // never edits the route registry
      expect(f.path).not.toContain('sitemap');
    }
  });

  describe('the generated skeleton is unmistakably unpublished', () => {
    const dossierFile = planScaffold(FIXTURE, EXISTING).files.find((f) =>
      f.path.endsWith('exampleland.ts'),
    )!.contents;

    it('is status research, unreviewed, with no sources', () => {
      expect(dossierFile).toMatch(/status: 'research'/);
      expect(dossierFile).toMatch(/review: 'unreviewed'/);
      expect(dossierFile).toMatch(/sources: \[\]/);
    });

    it('carries no verification date and no source URL', () => {
      expect(dossierFile).not.toMatch(/factsVerifiedOn/);
      expect(dossierFile).not.toMatch(/https?:\/\//);
    });

    it('carries placeholder residue so the publication gate rejects it', () => {
      expect(findPlaceholderResidue(dossierFile)).not.toEqual([]);
    });
  });
});

describe('scaffold collision + duplicate rejection', () => {
  it('rejects a duplicate slug', () => {
    const plan = planScaffold({ slug: 'france', name: 'France', code: 'FR' }, EXISTING);
    expect(plan.ok).toBe(false);
    expect(plan.errors.join(' ')).toMatch(/already exists/);
    expect(plan.files).toEqual([]); // no partial plan on failure
  });

  it('rejects a duplicate code (including planning-registry codes)', () => {
    // NL is in this fixture's existing-codes set — a collision, whether it comes from a
    // published dossier or a planning-registry entry. planScaffold takes the set as input.
    const plan = planScaffold({ slug: 'holland', name: 'Holland', code: 'NL' }, EXISTING);
    expect(plan.ok).toBe(false);
    expect(plan.errors.join(' ')).toMatch(/code "NL" already exists/);
  });

  it('rejects a route collision', () => {
    const plan = planScaffold({ slug: 'japan', name: 'Nippon', code: 'ZZ' }, EXISTING);
    expect(plan.errors.join(' ')).toMatch(
      /route \/countries\/japan already exists|slug "japan"/,
    );
  });

  it('rejects a slug that collides with a module slug', () => {
    const plan = planScaffold({ slug: 'courts', name: 'Courts', code: 'ZZ' }, EXISTING);
    expect(plan.ok).toBe(false);
    expect(plan.errors.join(' ')).toMatch(/reserved module slug/);
  });
});

describe('the Exampleland fixture stays out of the production tree (Part O)', () => {
  it('is not a real dossier, route, or planning-registry country', () => {
    expect(COUNTRY_DOSSIERS.some((d) => d.slug === 'exampleland')).toBe(false);
    expect(COUNTRY_DOSSIERS.some((d) => d.countryCode === 'XZ')).toBe(false);
    expect(COUNTRIES.some((c) => c.code === 'XZ')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path.includes('exampleland'))).toBe(false);
  });
});
