import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const IN = getDossier('india');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('India dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/in)', () => {
    expect(IN?.status).toBe('published');
    expect(IN?.countryCode).toBe('IN');
    expect(IN?.slug).toBe('india');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/in')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/india')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(IN?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(IN!).map((m) => m.moduleId);
    for (const required of [
      'justice-system',
      'law-enforcement',
      'courts',
      'prosecution',
      'investigations',
      'corrections',
      'oversight',
      'sources',
    ]) {
      expect(ids, `required module "${required}" not published`).toContain(required);
    }
    for (const d of ['forensics', 'border-and-customs', 'history', 'timeline']) {
      expect(ids).not.toContain(d);
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferredModules(IN!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/india/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only India-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(IN!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['IN', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* The flagship federal case: police/prosecution/prisons are STATE subjects; codes are national;
 * the judiciary is integrated. Modelled as a Union record + representative State records. */
describe('India — federal: Union record + State records for police/prosecution/prisons', () => {
  it('models a federal Union record with correctionalScope none and shared policing', () => {
    const union = getJurisdiction('in')!;
    expect(union.level).toBe('federal');
    expect(union.correctionalScope).toBe('none'); // no Union prison administration
    expect(union.policingScope).toBe('shared'); // federal agencies alongside State police
    expect(union.courtScope).toBe('own'); // integrated national judiciary
    expect(union.legislativeCompetence?.policing).toBe('exclusive-subnational');
    expect(union.legislativeCompetence?.corrections).toBe('exclusive-subnational');
  });

  it('models State records that own police, prosecution and prisons', () => {
    const states = JURISDICTIONS.filter((j) => j.countryCode === 'IN' && j.level === 'state');
    expect(states.map((s) => s.id).sort()).toEqual(['in-mh', 'in-tn', 'in-up']);
    for (const s of states) {
      expect(s.parentJurisdictionId, `${s.id} parent`).toBe('in');
      expect(s.policingScope, `${s.id} policing`).toBe('own');
      expect(s.prosecutionScope, `${s.id} prosecution`).toBe('own');
      expect(s.correctionalScope, `${s.id} corrections`).toBe('own');
      // integrated judiciary: the State does not own a separate court system
      expect(s.courtScope, `${s.id} courts`).toBe('shared');
    }
  });

  it('states the Seventh Schedule split in prose (police/prisons State; codes national)', () => {
    const js =
      JSON.stringify(getModule(IN!, 'justice-system')?.blocks) + JSON.stringify(IN!.blocks);
    expect(js).toMatch(/Seventh Schedule/);
    expect(js).toMatch(/State List|State subject/);
    expect(js).toMatch(/Concurrent/);
    expect(js).toMatch(/Bharatiya Nyaya Sanhita|BNS/);
    expect(js).toMatch(/1 July 2024|2024/);
  });

  it('states an integrated judiciary with no separate constitutional court', () => {
    const co = JSON.stringify(getModule(IN!, 'courts')?.blocks);
    expect(co).toMatch(/Supreme Court of India|Supreme Court/);
    expect(co).toMatch(/High Court for each State|High Court/);
    expect(co).toMatch(/integrated/i);
    expect(co).toMatch(/no separate constitutional court|no.*constitutional court/i);
    expect(co).toMatch(/141|214|235/);
  });
});

describe('India — jurisdiction records are all valid', () => {
  it('validates the Union and every State record without regressing others', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no public sub-national pages (States are records, not routes)', () => {
    for (const slug of ['maharashtra', 'tamil-nadu', 'uttar-pradesh', 'mumbai', 'delhi']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/india/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });
});

describe('the published India restricted claim (above capacity, national aggregate)', () => {
  const claim = getModule(IN!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('in-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact WPB figure and that it is a State-aggregated national total', () => {
    expect(claim!.metricPeriod).toBe('2024-12-31');
    expect(claim!.statement).toMatch(/511,542/);
    expect(claim!.statement).toMatch(/453,769/);
    expect(claim!.statement).toMatch(/112\.7%/);
    expect(claim!.statement).toMatch(/above capacity/i);
    expect(claim!.limitation).toMatch(/aggregat|across the separately administered/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered India HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names India, and shows the derived demonym', async () => {
    const html = await read('out/countries/india.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in India/);
    expect(html).toMatch(/not an Indian government body/);
  });

  it('never emits /countries/in in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/india</);
    expect(sitemap).not.toMatch(/\/countries\/in</);
  });
});
