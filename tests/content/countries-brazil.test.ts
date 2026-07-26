import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { JurisdictionRecord, RestrictedClaim } from '@/content/types';

const BR = getDossier('brazil');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Brazil dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/br)', () => {
    expect(BR).toBeDefined();
    expect(BR?.status).toBe('published');
    expect(BR?.countryCode).toBe('BR');
    expect(BR?.slug).toBe('brazil');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/br')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/brazil')).toBe(true);
  });

  it('records a fixed research date rather than following the clock', () => {
    expect(BR?.factsVerifiedOn).toBe('2026-07-25');
  });

  it('publishes exactly the required minimum set and defers the rest', () => {
    const ids = publishedModules(BR!).map((m) => m.moduleId);
    for (const required of [
      'justice-system',
      'law-enforcement',
      'courts',
      'prosecution',
      'investigations',
      'corrections',
      'sources',
    ]) {
      expect(ids, `required module "${required}" not published`).toContain(required);
    }
    for (const deferred of [
      'forensics',
      'border-and-customs',
      'oversight',
      'history',
      'timeline',
    ]) {
      expect(ids).not.toContain(deferred);
    }
  });

  it('publishes only modules with sources, content and a fact-checked review', () => {
    for (const m of publishedModules(BR!)) {
      expect(m.sources.length, `${m.moduleId} has no source`).toBeGreaterThan(0);
      expect(m.review, `${m.moduleId} published unreviewed`).toBe('fact-checked');
      expect(m.blocks.length, `${m.moduleId} has no content`).toBeGreaterThan(0);
      expect(m.safetyReview, `${m.moduleId} safety review still pending`).not.toBe('pending');
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const deferred = deferredModules(BR!);
    expect(deferred.map((m) => m.moduleId).sort()).toEqual([
      'border-and-customs',
      'forensics',
      'history',
      'oversight',
      'timeline',
    ]);
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferred) {
      expect(m.deferredReason, `${m.moduleId} defers without a reason`).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/brazil/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Brazil-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(BR!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['BR', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod, `${id} verification method`).toBe('content-confirmed');
      }
    }
  });
});

/*
 * FEDERAL LAW, DECENTRALISED INSTITUTIONS — the defining thesis. Every state administers justice
 * but does NOT write the criminal law (CF Art. 22 I). This is the sharp contrast with the US.
 */
describe('Brazil federal-law / decentralised-institutions model', () => {
  it('models the federation with shared functions but a unified (own) legal system', () => {
    const br = getJurisdiction('br')!;
    expect(br.level).toBe('federal');
    expect(br.parentJurisdictionId).toBeUndefined();
    // The criminal law is federal and unified, so the legal system is `own`, not `shared`
    // (contrast the US federal record, whose legalSystemScope is `shared`).
    expect(br.legalSystemScope).toBe('own');
    for (const f of [
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(br[f], `br.${f}`).toBe('shared');
    }
    expect(br.legislativeCompetence?.['legal-system']).toBe('exclusive-federal');
  });

  it('gives each state its own institutions but a NATIONAL legal system', () => {
    for (const id of ['br-sp', 'br-df']) {
      const s = getJurisdiction(id)!;
      // The state does not write the criminal law — legal system is national, not the state's own.
      expect(s.legalSystemScope, `${id} legalSystemScope`).toBe('national');
      expect(s.legislativeCompetence?.['legal-system'], `${id} legal-system competence`).toBe(
        'exclusive-federal',
      );
      expect(s.parentJurisdictionId).toBe('br');
    }
  });

  it('records the São Paulo state as reserved-powers, administering its own police/courts/prosecution/prisons', () => {
    const sp = getJurisdiction('br-sp')!;
    expect(sp.level).toBe('state');
    expect(sp.authorityBasis).toBe('reserved-powers');
    for (const f of [
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(sp[f], `br-sp.${f}`).toBe('own');
    }
  });

  it('models the sui-generis Federal District: reuses alsoExercisesLevels, Union-shared institutions', () => {
    const df = getJurisdiction('br-df')!;
    expect(df.level).toBe('special');
    // Art. 32 §1 — accumulates state AND municipal competences (France's alsoExercisesLevels).
    expect(df.alsoExercisesLevels).toEqual(['state', 'municipality']);
    // Art. 21 XIII–XIV — the Union organises the DF's police, courts and MP → shared, not own.
    expect(df.policingScope).toBe('shared');
    expect(df.courtScope).toBe('shared');
    expect(df.prosecutionScope).toBe('shared');
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  // Non-vacuity: the state records genuinely declare legislativeCompetence (federal-parent rule).
  it('rejects a researched state under the federal parent that omits legislativeCompetence', () => {
    const { legislativeCompetence: _drop, ...bare } = getJurisdiction('br-sp')!;
    expect(validateJurisdiction(bare as JurisdictionRecord, JURISDICTIONS).join(' ')).toMatch(
      /must declare legislativeCompetence/,
    );
  });
});

/*
 * FUNCTION-SPLIT POLICING (A-question a): a single state runs an investigative Polícia Civil AND
 * a preventive Polícia Militar. This is expressed in PROSE, not a new schema field.
 */
describe('Brazil function-split policing, described in prose', () => {
  const le = () => JSON.stringify(getModule(BR!, 'law-enforcement')?.blocks);

  it('names the six Article 144 forces and the two-force state split', () => {
    expect(le()).toMatch(/Article 144/);
    expect(le()).toMatch(/Pol[íi]cia Civil/);
    expect(le()).toMatch(/Pol[íi]cia Militar/);
    expect(le()).toMatch(/investigative|pol[íi]cia judici[áa]ria|investigat/i);
    expect(le()).toMatch(/ostensiv|preventive|preserva[çc][ãa]o da ordem/i);
  });

  it('states federal and state forces coexist without a command line', () => {
    expect(le()).toMatch(/not a national police force|not branches of it|do not command/i);
    expect(le()).toMatch(/Governor/);
  });

  it("expresses the state's policing as its own arrangement (scope), not a force enum", () => {
    expect(getJurisdiction('br-sp')!.policingScope).toBe('own');
    // No invented force/relationship field.
    expect('policeForces' in getJurisdiction('br-sp')!).toBe(false);
  });
});

/*
 * THE MINISTÉRIO PÚBLICO (A-question b): an autonomous institution, not a court-attached
 * prosecutor's office — described in prose in the prosecution module.
 */
describe('Brazil Ministério Público, described as autonomous', () => {
  const pr = () => JSON.stringify(getModule(BR!, 'prosecution')?.blocks);

  it('states it is independent of all three branches and permanent', () => {
    expect(pr()).toMatch(/institui[çc][ãa]o permanente|permanent institution/i);
    expect(pr()).toMatch(/not part of the executive|independent of all three|its own footing/i);
  });

  it('states both its roles: exclusive criminal prosecution and guardian of the legal order', () => {
    expect(pr()).toMatch(/privativamente|exclusive holder/i);
    expect(pr()).toMatch(/a[çc][ãa]o penal p[úu]blica/);
    expect(pr()).toMatch(/ordem jur[íi]dica|guardian of the legal order|interesses difusos/i);
  });

  it('names its federative structure (MPU ramos + state MPs) and the CNMP', () => {
    expect(pr()).toMatch(/Minist[ée]rio P[úu]blico da Uni[ãa]o|MPU/);
    expect(pr()).toMatch(/MPF/);
    expect(pr()).toMatch(/Minist[ée]rios P[úu]blicos dos Estados|state/i);
    expect(pr()).toMatch(/CNMP|Conselho Nacional do Minist[ée]rio P[úu]blico/);
  });
});

describe('the published Brazil restricted claim (prison occupancy)', () => {
  const claim = getModule(BR!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('br-prison-occupancy-2024');
    expect(claim?.category).toBe('detention-capacity');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact 31-12-2024 figures with their scope', () => {
    expect(claim!.metricPeriod).toBe('2024-12-31');
    expect(claim!.statement).toMatch(/670,265/);
    expect(claim!.statement).toMatch(/494,379/);
    expect(claim!.sourceScope).toMatch(/cela f[íi]sica/);
  });

  it('records that it aggregates systems, excludes home detention, and supports no comparison', () => {
    expect(claim!.limitation).toMatch(/aggregates|separately administered/i);
    expect(claim!.limitation).toMatch(/home.detention|cela f[íi]sica|physical cells/i);
    expect(claim!.limitation).toMatch(/comparison|comparab/i);
    expect(claim!.limitation).toMatch(/snapshot|not an annual average/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/*
 * Rendered-output checks. These require `npm run build` first (they read out/…), mirroring the
 * Ireland and Japan pilots.
 */
describe('rendered Brazil HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the correct facts-verified date and names the actual country', async () => {
    const html = await read('out/countries/brazil.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>25 July 2026<\/time>/);
    expect(html).not.toMatch(/24 July 2026/);
    expect(html).not.toMatch(/not about France/);
    expect(html).toMatch(/not about\s*Brazil/);
    expect(html).toMatch(/<html lang="en"/);
  });

  it('never emits /countries/br in the sitemap, and no deferred module route', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/brazil</);
    expect(sitemap).not.toMatch(/\/countries\/br</);
    for (const slug of [
      'oversight',
      'forensics',
      'border-and-customs',
      'history',
      'timeline',
    ]) {
      expect(sitemap, `deferred ${slug} leaked into sitemap`).not.toMatch(
        new RegExp(`/countries/brazil/${slug}<`),
      );
    }
  });

  it('renders the prison figure with its scope on the corrections page', async () => {
    const html = await read('out/countries/brazil/corrections.html');
    expect(html).toMatch(/670,265/);
    expect(html).toMatch(/494,379/);
    expect(html).toMatch(/cela f[íi]sica|physical cells/);
  });
});
