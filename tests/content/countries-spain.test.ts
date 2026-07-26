import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { SOURCES } from '@/content/sources';
import { JURISDICTION_LEVELS } from '@/content/types';
import type { JurisdictionRecord } from '@/content/types';

const ES = getDossier('spain');

describe('Spain dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/es)', () => {
    expect(ES?.status).toBe('published');
    expect(ES?.countryCode).toBe('ES');
    expect(ES?.slug).toBe('spain');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/es')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/spain')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(ES?.factsVerifiedOn).toBe('2026-07-26');
  });

  it('publishes the required minimum set and defers the rest', () => {
    const ids = publishedModules(ES!).map((m) => m.moduleId);
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
    for (const d of ['forensics', 'border-and-customs', 'oversight', 'history', 'timeline']) {
      expect(ids).not.toContain(d);
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferredModules(ES!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/spain/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Spain-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(ES!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['ES', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/*
 * ASYMMETRIC DECENTRALISATION — the defining test. The asymmetry is a set of divergent per-function
 * scope values across sibling autonomous-community records; no new field beyond the level.
 */
describe('Spain asymmetric decentralisation', () => {
  it('added the `autonomous-community` level', () => {
    expect(JURISDICTION_LEVELS).toContain('autonomous-community');
    for (const id of ['es-catalonia', 'es-basque', 'es-navarre', 'es-andalusia']) {
      expect(getJurisdiction(id)!.level).toBe('autonomous-community');
    }
  });

  it('records the policing/corrections asymmetry community by community', () => {
    // Catalonia & Basque: own police AND own prisons.
    for (const id of ['es-catalonia', 'es-basque']) {
      expect(getJurisdiction(id)!.policingScope, `${id} policing`).toBe('own');
      expect(getJurisdiction(id)!.correctionalScope, `${id} corrections`).toBe('own');
    }
    // Navarre: own police corps but NOT integral — shares policing with the national forces.
    expect(getJurisdiction('es-navarre')!.policingScope).toBe('shared');
    expect(getJurisdiction('es-navarre')!.correctionalScope).toBe('national');
    // Andalusia: neither.
    expect(getJurisdiction('es-andalusia')!.policingScope).toBe('national');
    expect(getJurisdiction('es-andalusia')!.correctionalScope).toBe('national');
  });

  it('keeps courts and prosecution national for EVERY community (judicial unity + national fiscal)', () => {
    for (const id of ['es-catalonia', 'es-basque', 'es-navarre', 'es-andalusia']) {
      expect(getJurisdiction(id)!.courtScope, `${id} courts`).toBe('national');
      expect(getJurisdiction(id)!.prosecutionScope, `${id} prosecution`).toBe('national');
    }
  });

  it('leaves authorityBasis unset on every community (competences assumed via Statute)', () => {
    for (const id of ['es-catalonia', 'es-basque', 'es-navarre', 'es-andalusia']) {
      expect(getJurisdiction(id)!.authorityBasis).toBeUndefined();
    }
  });

  it('models the national level as unitary with policing/corrections shared', () => {
    const es = getJurisdiction('es')!;
    expect(es.level).toBe('country');
    expect(es.courtScope).toBe('own');
    expect(es.prosecutionScope).toBe('own');
    expect(es.policingScope).toBe('shared');
    expect(es.correctionalScope).toBe('shared');
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  it('creates no accidental autonomous-community pages', () => {
    for (const slug of ['catalonia', 'basque-country', 'navarre', 'andalusia']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/spain/${slug}`)).toBe(false);
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  // Non-vacuity: an unresearched autonomous community may not assert a researched scope.
  it('rejects an unresearched community that claims a researched scope', () => {
    const bogus = {
      ...getJurisdiction('es-catalonia')!,
      id: 'es-bogus',
      coverage: 'planned',
    } as JurisdictionRecord;
    expect(validateJurisdiction(bogus, JURISDICTIONS).join(' ')).toMatch(/unresearched/);
  });
});

describe('Spain content — the law/administration split and the distinct courts', () => {
  it('states legislation is national while administration is devolved', () => {
    const js = JSON.stringify(getModule(ES!, 'justice-system')?.blocks);
    expect(js).toMatch(/149\.1\.6/);
    expect(js).toMatch(/145\.1|no federation|not a federation|forbids the federation/i);
    expect(js).toMatch(/117\.5|jurisdictional unity|unidad jurisdiccional/i);
  });

  it('names the autonomous police and states the national forces do not command them', () => {
    const le = JSON.stringify(getModule(ES!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/Mossos d/);
    expect(le).toMatch(/Ertzaintza/);
    expect(le).toMatch(/Polic[íi]a Foral/);
    expect(le).toMatch(/Guardia Civil/);
    expect(le).toMatch(/do NOT command|not command|Junta de Seguridad/);
  });

  it('distinguishes the Constitutional Court, Supreme Court and CGPJ', () => {
    const co = JSON.stringify(getModule(ES!, 'courts')?.blocks);
    expect(co).toMatch(/Tribunal Constitucional/);
    expect(co).toMatch(/Tribunal Supremo/);
    expect(co).toMatch(/Consejo General del Poder Judicial|CGPJ/);
    expect(co).toMatch(/not a court|governing body/i);
  });

  it('states prosecution is a single national institution', () => {
    const pr = JSON.stringify(getModule(ES!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Ministerio Fiscal/);
    expect(pr).toMatch(/national|unitary|unidad de actuaci/i);
  });
});

describe('Spain corrections — split administration, no manufactured statistic', () => {
  const corrections = () => getModule(ES!, 'corrections');

  it('publishes NO restricted claim, and says why', () => {
    expect(corrections()?.restrictedClaims ?? []).toEqual([]);
    const text = JSON.stringify(corrections()?.blocks);
    expect(text).toMatch(/no prison figure|publishes none|publishes no prison/i);
    expect(text).toMatch(/EXCLUDES Catalonia|excludes Catalonia/i);
  });

  it('records the transferred administration to Catalonia and the Basque Country', () => {
    const text = JSON.stringify(corrections()?.blocks);
    expect(text).toMatch(/Real Decreto 3482\/1983|3482\/1983/);
    expect(text).toMatch(/Real Decreto 474\/2021|474\/2021/);
    expect(text).toMatch(
      /legislaci[óo]n del Estado en materia penitenciaria|penitentiary law remains/i,
    );
  });
});

/* Rendered-output checks — require `npm run build` first. */
describe('rendered Spain HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the correct facts date, names the actual country, and shows accents', async () => {
    const html = await read('out/countries/spain.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>26 July 2026<\/time>/);
    expect(html).not.toMatch(/not about Australia/);
    expect(html).toMatch(/not about\s*Spain/);
    expect(html).toMatch(/<html lang="en"/);
    const le = await read('out/countries/spain/law-enforcement.html');
    expect(le).toMatch(/Mossos d’Esquadra|Mossos d'Esquadra/);
  });

  it('never emits /countries/es or a community route in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/spain</);
    expect(sitemap).not.toMatch(/\/countries\/es</);
    for (const slug of ['catalonia', 'basque-country', 'navarre', 'andalusia']) {
      expect(sitemap).not.toMatch(new RegExp(`/countries/spain/${slug}<`));
    }
  });
});
