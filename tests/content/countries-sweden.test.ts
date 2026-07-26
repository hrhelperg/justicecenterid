import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const SE = getDossier('sweden');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Sweden dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/se)', () => {
    expect(SE?.status).toBe('published');
    expect(SE?.countryCode).toBe('SE');
    expect(SE?.slug).toBe('sweden');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/se')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/sweden')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(SE?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(SE!).map((m) => m.moduleId);
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
    for (const m of deferredModules(SE!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/sweden/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Sweden-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(SE!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['SE', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Sweden's defining features: the ministerstyre prohibition; two apex courts; diffuse review. */
describe('Sweden — constitutional agency autonomy and the dual court structure', () => {
  it('states the ministerstyre prohibition (Ch. 12 Art. 2) applies to the agencies', () => {
    const js = JSON.stringify(getModule(SE!, 'justice-system')?.blocks);
    expect(js).toMatch(/ministerstyre/);
    expect(js).toMatch(/12,? Article 2|Chapter 12/);
    expect(js).toMatch(/particular case|individual case/i);
    const pr = JSON.stringify(getModule(SE!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Åklagarmyndigheten|Prosecution Authority/);
    expect(pr).toMatch(/no powers to intervene|independent/i);
    expect(pr).toMatch(/ministerstyre|Chapter 12/);
  });

  it('states two branches of courts and two apex courts, no constitutional court', () => {
    const co = JSON.stringify(getModule(SE!, 'courts')?.blocks);
    expect(co).toMatch(/Högsta domstolen|Supreme Court/);
    expect(co).toMatch(/Supreme Administrative Court|Högsta förvaltningsdomstolen/);
    expect(co).toMatch(/two (branches|apex|supreme)/i);
    expect(co).toMatch(/no (separate )?constitutional court/i);
    expect(co).toMatch(/14|diffuse/i);
  });

  it('names the JO (under the Riksdag) and the JK (under the Government) in oversight', () => {
    const ov = JSON.stringify(getModule(SE!, 'oversight')?.blocks);
    expect(ov).toMatch(/Justitieombudsmannen|Parliamentary Ombudsmen|JO/);
    expect(ov).toMatch(/Riksdag/);
    expect(ov).toMatch(/Justitiekanslern|Chancellor of Justice/);
  });
});

describe('Sweden jurisdiction record', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const seRecords = JURISDICTIONS.filter((j) => j.countryCode === 'SE');
    expect(seRecords.map((j) => j.id)).toEqual(['se']);
    const se = getJurisdiction('se')!;
    expect(se.level).toBe('country');
    expect(se.parentJurisdictionId).toBeUndefined();
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(se[f], `${f}`).toBe('own');
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Sweden restricted claim (over capacity)', () => {
  const claim = getModule(SE!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('se-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is above capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/9,748/);
    expect(claim!.statement).toMatch(/9,295/);
    expect(claim!.statement).toMatch(/104\.9/);
    expect(claim!.limitation).toMatch(/above capacity/i);
    expect(claim!.limitation).toMatch(/snapshot|not an average/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Sweden HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Sweden, and shows the derived demonym and accents', async () => {
    const html = await read('out/countries/sweden.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Sweden/);
    expect(html).toMatch(/not a Swedish government body/);
    const co = await read('out/countries/sweden/courts.html');
    expect(co).toMatch(/Högsta/);
  });

  it('never emits /countries/se in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/sweden</);
    expect(sitemap).not.toMatch(/\/countries\/se</);
  });
});
