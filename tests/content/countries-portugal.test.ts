import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const PT = getDossier('portugal');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Portugal dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/pt)', () => {
    expect(PT?.status).toBe('published');
    expect(PT?.countryCode).toBe('PT');
    expect(PT?.slug).toBe('portugal');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/pt')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/portugal')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(PT?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(PT!).map((m) => m.moduleId);
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
    for (const m of deferredModules(PT!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/portugal/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Portugal-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(PT!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['PT', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Portugal's distinctive features: a constitutionally autonomous prosecution; four top courts +
 * diffuse review; a two-phase, magistrate-directed investigation. */
describe('Portugal — autonomous prosecution, four top courts, two-phase investigation', () => {
  it('states the prosecution is autonomous (Art. 219) — not judiciary, not executive', () => {
    const pr = JSON.stringify(getModule(PT!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Ministério Público|Public Prosecution Service/);
    expect(pr).toMatch(/219/);
    expect(pr).toMatch(/autonom/i);
    // must state the two-directional independence
    expect(pr).toMatch(/not part of the judiciary|not under a minister|both/i);
  });

  it('states four top courts and diffuse constitutional review (Art. 204)', () => {
    const co = JSON.stringify(getModule(PT!, 'courts')?.blocks);
    expect(co).toMatch(/Supremo Tribunal de Justiça|Supreme Court of Justice/);
    expect(co).toMatch(/Supremo Tribunal Administrativo|Supreme Administrative Court/);
    expect(co).toMatch(/Tribunal Constitucional|Constitutional Court/);
    expect(co).toMatch(/Tribunal de Contas|Court of Auditors/);
  });

  it('states the two-phase, magistrate-directed investigation (inquérito + instrução)', () => {
    const inv = JSON.stringify(getModule(PT!, 'investigations')?.blocks);
    expect(inv).toMatch(/inquérito/);
    expect(inv).toMatch(/instrução/);
    expect(inv).toMatch(/juiz de instrução|investigating judge/);
    expect(inv).toMatch(/263/);
  });

  it('states multiple national police forces in prose', () => {
    const le = JSON.stringify(getModule(PT!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Polícia Judiciária/);
    expect(le).toMatch(/Guarda Nacional Republicana/);
    expect(le).toMatch(/Polícia de Segurança Pública/);
    expect(le).toMatch(/272|49\/2008/);
  });
});

/* The model result: Portugal is unitary with two autonomous regions that hold no justice
 * competence — the same result as Italy, the opposite of Åland. And it is not Brazil. */
describe('Portugal — unitary, autonomous regions without justice competence, not Brazil', () => {
  it('is a single unitary country-level record with all functions own', () => {
    const ptRecords = JURISDICTIONS.filter((j) => j.countryCode === 'PT');
    expect(ptRecords.map((j) => j.id)).toEqual(['pt']);
    const record = getJurisdiction('pt')!;
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

  it('states in prose that the autonomous regions hold no justice competence', () => {
    const hub =
      JSON.stringify(PT!.blocks) + JSON.stringify(getModule(PT!, 'justice-system')?.blocks);
    expect(hub).toMatch(/Azores|Madeira|autonomous region/i);
    expect(hub).toMatch(/unitary/i);
    expect(hub).toMatch(/no.*competence|not.*for justice|reserved/i);
  });

  it('carries a scope note distinguishing Portugal from Brazil', () => {
    const hub = JSON.stringify(PT!.blocks);
    expect(hub).toMatch(/Brazil/);
    expect(hub).toMatch(/not Brazil|different states|Portuguese Republic/i);
  });

  it('creates no accidental region pages', () => {
    for (const slug of ['azores', 'madeira', 'lisbon', 'porto']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/portugal/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published Portugal restricted claim (just under capacity)', () => {
  const claim = getModule(PT!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('pt-prison-density-2024');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact SPACE I figure and that the system is under capacity', () => {
    expect(claim!.metricPeriod).toBe('2024-01-31');
    expect(claim!.statement).toMatch(/12,193/);
    expect(claim!.statement).toMatch(/12,663/);
    expect(claim!.statement).toMatch(/96\.3/);
    expect(claim!.limitation).toMatch(/fewer people than its stated capacity/i);
    expect(claim!.limitation).toMatch(/snapshot|not an? .*average/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Portugal HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names Portugal, and shows the derived demonym', async () => {
    const html = await read('out/countries/portugal.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in Portugal/);
    expect(html).toMatch(/not a Portuguese government body/);
  });

  it('never emits /countries/pt in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/portugal</);
    expect(sitemap).not.toMatch(/\/countries\/pt</);
  });
});
