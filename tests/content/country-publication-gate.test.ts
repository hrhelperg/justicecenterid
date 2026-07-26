import { describe, expect, it } from 'vitest';
import { COUNTRY_DOSSIERS, getDossier } from '@/content/dossiers';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { SOURCES } from '@/content/sources';
import {
  REQUIRED_PUBLISHED_MODULES,
  isPublicationReady,
  validateCountryPublication,
} from '@/content/publication-gate';
import type { CountryDossier } from '@/content/types';

const ctx = {
  knownSourceIds: SOURCES.map((s) => s.id),
  routePaths: PUBLIC_ROUTES.map((r) => r.path),
};

/** A deep, mutable copy so a controlled defect can be injected without touching the registry. */
const clone = (d: CountryDossier): CountryDossier => structuredClone(d);

describe('country publication gate — the ten pass', () => {
  it.each(COUNTRY_DOSSIERS.map((d) => [d.slug, d] as const))(
    'published dossier %s satisfies every publication condition',
    (_slug, dossier) => {
      expect(validateCountryPublication(dossier, ctx)).toEqual([]);
      expect(isPublicationReady(dossier, ctx)).toBe(true);
    },
  );

  it('requires the module set actually published by all ten (corrections excluded — France defers it)', () => {
    expect([...REQUIRED_PUBLISHED_MODULES].sort()).toEqual(
      [
        'courts',
        'investigations',
        'justice-system',
        'law-enforcement',
        'prosecution',
        'sources',
      ].sort(),
    );
    expect(REQUIRED_PUBLISHED_MODULES).not.toContain('corrections');
  });
});

/*
 * Non-vacuity: a gate that never fails proves nothing. Each case injects one controlled defect
 * into a clone of a real dossier and asserts the gate catches it. The registry is untouched.
 */
describe('country publication gate — non-vacuity (controlled defects)', () => {
  it('fails when a required module is unpublished', () => {
    const d = clone(getDossier('germany')!);
    const js = d.modules.find((m) => m.moduleId === 'justice-system')!;
    js.status = 'draft';
    js.deferredReason = 'temporarily withdrawn for this test';
    js.blocks = [];
    js.sources = [];
    expect(validateCountryPublication(d, ctx).join(' ')).toMatch(
      /required module "justice-system" is not published/,
    );
  });

  it('fails when the hub cites no source', () => {
    const d = clone(getDossier('germany')!);
    d.sources = [];
    expect(validateCountryPublication(d, ctx).join(' ')).toMatch(/hub cites no source/);
  });

  it('fails when placeholder residue is present in published prose', () => {
    const d = clone(getDossier('germany')!);
    d.blocks.push({ kind: 'paragraph', text: 'TODO: finish this section {{later}}.' });
    const problems = validateCountryPublication(d, ctx).join(' ');
    expect(problems).toMatch(/placeholder residue/);
  });

  it('fails when a restricted claim is malformed', () => {
    const d = clone(getDossier('germany')!);
    const claim = d.modules.flatMap((m) => m.restrictedClaims ?? [])[0];
    expect(claim, 'germany has a restricted claim to break').toBeDefined();
    // Break it in place by clearing its sources.
    for (const m of d.modules) for (const rc of m.restrictedClaims ?? []) rc.sources = [];
    expect(validateCountryPublication(d, ctx).join(' ')).toMatch(/restricted claim/);
  });

  it('fails when a deferred module carries content', () => {
    const d = clone(getDossier('germany')!);
    const deferred = d.modules.find((m) => m.status !== 'published')!;
    deferred.blocks = [{ kind: 'paragraph', text: 'leaked content' }];
    expect(validateCountryPublication(d, ctx).join(' ')).toMatch(
      /deferred module .* carries content/,
    );
  });

  it('fails when a published module route is not registered', () => {
    const d = clone(getDossier('germany')!);
    // Same data, but pretend courts has no route.
    const noCourts = {
      ...ctx,
      routePaths: ctx.routePaths.filter((p) => p !== '/countries/germany/courts'),
    };
    expect(validateCountryPublication(d, noCourts).join(' ')).toMatch(
      /module "courts" has no registered route/,
    );
  });
});

/*
 * A freshly scaffolded country must be impossible to publish. This mirrors what
 * scripts/scaffold-country.mjs emits: research status, no sources, empty modules, residue prose.
 */
describe('a scaffold skeleton cannot pass the gate', () => {
  const skeleton: CountryDossier = {
    countryCode: 'XZ',
    slug: 'exampleland',
    name: 'Exampleland',
    summary: 'SCAFFOLD: Exampleland has not been researched. TODO replace before publication.',
    blocks: [
      {
        kind: 'callout',
        variant: 'note',
        title: 'Unresearched scaffold',
        text: 'TODO research from primary sources {{remove-before-publishing}}.',
      },
    ],
    sources: [],
    status: 'research',
    review: 'unreviewed',
    safetyReview: 'not-required',
    updatedOn: 'REPLACE-WITH-ISO-DATE',
    jurisdictionIds: [],
    modules: [],
  };

  it('reports many blocking problems (residue, missing modules, no sources, no facts date)', () => {
    const problems = validateCountryPublication(skeleton, ctx);
    expect(problems.length).toBeGreaterThan(5);
    const joined = problems.join(' ');
    expect(joined).toMatch(/placeholder residue/);
    expect(joined).toMatch(/required module/);
    expect(joined).toMatch(/hub cites no source/);
    expect(joined).toMatch(/factsVerifiedOn/);
    expect(isPublicationReady(skeleton, ctx)).toBe(false);
  });
});
