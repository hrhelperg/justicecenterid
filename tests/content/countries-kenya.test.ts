import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const KE = getDossier('kenya');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Kenya dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/ke)', () => {
    expect(KE?.status).toBe('published');
    expect(KE?.countryCode).toBe('KE');
    expect(KE?.slug).toBe('kenya');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/ke')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/kenya')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(KE?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(KE!).map((m) => m.moduleId);
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
    for (const m of deferredModules(KE!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/kenya/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Kenya-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(KE!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['KE', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Distinctive: constitutional supremacy with diffuse review + a 2010 Supreme Court apex; an
 * independent ODPP that can direct the police to investigate; a police investigation firewall;
 * Kadhis' courts; rich constitutional oversight. */
describe('Kenya — supreme 2010 constitution, diffuse review, independent ODPP', () => {
  it('states constitutional supremacy — inconsistent law is void (Article 2)', () => {
    const js = JSON.stringify(getModule(KE!, 'justice-system')?.blocks);
    expect(js).toMatch(/supreme|supremacy/i);
    expect(js).toMatch(/void|inconsistent/i);
    expect(js).toMatch(/2010/);
  });

  it('states the Supreme Court apex (2010) and diffuse High Court constitutional review', () => {
    const co = JSON.stringify(getModule(KE!, 'courts')?.blocks);
    expect(co).toMatch(/Supreme Court/);
    expect(co).toMatch(/apex|highest|bind/i);
    expect(co).toMatch(/High Court/);
    expect(co).toMatch(/165\(3\)\(d\)|no separate constitutional court/i);
    expect(co).toMatch(/Kadhis/);
  });

  it('states an independent DPP (157(10)) able to direct the police to investigate (157(4))', () => {
    const pr = JSON.stringify(getModule(KE!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Director of Public Prosecutions|ODPP/);
    expect(pr).toMatch(/157/);
    expect(pr).toMatch(
      /not be under the direction or control|not under the direction or control/i,
    );
    expect(pr).toMatch(/direct the Inspector-General/i);
    expect(pr).toMatch(/eight[- ]year/i);
  });

  it('states the police investigation firewall (245(4)) with the DPP the sole exception', () => {
    const le = JSON.stringify(getModule(KE!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/National Police Service/);
    expect(le).toMatch(/independent command/i);
    expect(le).toMatch(/245\(4\)|no person may give a direction/i);
    expect(le).toMatch(/Director of Public Prosecutions/);
  });

  it('states the rich oversight set (Article 59 commissions, JSC, IPOA, NPSC)', () => {
    const ov = JSON.stringify(getModule(KE!, 'oversight')?.blocks);
    expect(ov).toMatch(/Kenya National Commission on Human Rights|KNCHR/);
    expect(ov).toMatch(/Commission on Administrative Justice|Ombudsman/);
    expect(ov).toMatch(/Judicial Service Commission/);
    expect(ov).toMatch(/Independent Policing Oversight Authority|IPOA/);
    expect(ov).toMatch(/National Police Service Commission|NPSC/);
  });
});

/* The model result: devolved unitary but justice national — one country record, no sub-national. */
describe('Kenya — devolved, but all justice national (no sub-national record)', () => {
  it('is a single country-level record with all functions own', () => {
    const keRecords = JURISDICTIONS.filter((j) => j.countryCode === 'KE');
    expect(keRecords.map((j) => j.id)).toEqual(['ke']);
    const record = getJurisdiction('ke')!;
    expect(record.level).toBe('country');
    for (const f of [
      'legalSystemScope',
      'policingScope',
      'courtScope',
      'prosecutionScope',
      'correctionalScope',
    ] as const) {
      expect(record[f], `${f}`).toBe('own');
    }
  });

  it('states devolution to counties, but justice kept national by the Fourth Schedule', () => {
    const text =
      JSON.stringify(KE!.blocks) + JSON.stringify(getModule(KE!, 'justice-system')?.blocks);
    expect(text).toMatch(/47|counties|county/i);
    expect(text).toMatch(/Fourth Schedule/);
    expect(text).toMatch(/national/i);
    expect(text).toMatch(/South Africa/);
  });

  it('creates no accidental county pages', () => {
    for (const slug of ['nairobi', 'mombasa', 'kisumu', 'nakuru']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/kenya/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Kenya restricted claim (overcrowding, dual-dated)', () => {
  const claim = getModule(KE!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('ke-prison-density-2025');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact WPB figures and keeps the two reference dates distinct', () => {
    expect(claim!.metricPeriod).toBe('2025');
    expect(claim!.statement).toMatch(/60,740/);
    expect(claim!.statement).toMatch(/34,000/);
    expect(claim!.statement).toMatch(/176\.5%/);
    expect(claim!.statement).toMatch(/December 2023/);
    expect(claim!.statement).toMatch(/2025 annual average|average over 2025/i);
    expect(claim!.limitation).toMatch(
      /mix reference dates|different dates|two reference dates|not be conflated/i,
    );
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Kenya HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Kenya, and shows the derived demonym', async () => {
    const html = await read('out/countries/kenya.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Kenya/);
    expect(html).toMatch(/not a Kenyan government body/);
  });

  it('never emits /countries/ke in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/kenya</);
    expect(sitemap).not.toMatch(/\/countries\/ke</);
  });
});
