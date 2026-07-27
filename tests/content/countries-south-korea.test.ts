import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { validateRestrictedClaim } from '@/content/restricted-claims';
import {
  SCHEDULED_CHANGES,
  getScheduledChange,
  validateScheduledChange,
} from '@/content/scheduled-changes';
import { SOURCES } from '@/content/sources';
import type { RestrictedClaim } from '@/content/types';

const KR = getDossier('south-korea');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('South Korea dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/kr)', () => {
    expect(KR?.status).toBe('published');
    expect(KR?.countryCode).toBe('KR');
    expect(KR?.slug).toBe('south-korea');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/kr')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/south-korea')).toBe(true);
  });

  it('records a fixed research date', () => {
    expect(KR?.factsVerifiedOn).toBe('2026-07-27');
  });

  it('publishes the required minimum set plus corrections and oversight', () => {
    const ids = publishedModules(KR!).map((m) => m.moduleId);
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
    for (const m of deferredModules(KR!)) {
      expect(m.deferredReason).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/south-korea/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only South Korea-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(KR!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['KR', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod).toBe('content-confirmed');
      }
    }
  });
});

/* Distinctive: two apex courts + concentrated review; prosecution under the executive; the
 * enacted 2025 restructuring recorded neutrally + as a scheduled change. */
describe('South Korea — dual apex, prosecution under the executive, an enacted restructuring', () => {
  it('states two apex courts incl. a separate Constitutional Court, concentrated review', () => {
    const co = JSON.stringify(getModule(KR!, 'courts')?.blocks);
    const js = JSON.stringify(getModule(KR!, 'justice-system')?.blocks);
    expect(co).toMatch(/대법원|Supreme Court/);
    expect(co).toMatch(/헌법재판소|Constitutional Court/);
    expect(js).toMatch(/concentrated/i);
    expect(js).toMatch(/107/);
  });

  it('states the prosecution is under the Ministry of Justice (Prosecutor General)', () => {
    const pr = JSON.stringify(getModule(KR!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Prosecution Service|검찰청/);
    expect(pr).toMatch(/Prosecutor General/);
    expect(pr).toMatch(/Ministry of Justice/);
  });

  it('records the enacted 2025 restructuring neutrally and by dated attribution', () => {
    const pr = JSON.stringify(getModule(KR!, 'prosecution')?.blocks);
    expect(pr).toMatch(/30 September 2025|2025/);
    expect(pr).toMatch(/1 October 2026|October 2026/);
    expect(pr).toMatch(/Korea Herald|attribution/i);
    expect(pr).toMatch(/not yet (in force|effective)|remains in force until/i);
  });
});

/* The scheduled change is a genuine, valid, enacted-with-date pending change. */
describe('South Korea — the prosecution-restructuring scheduled change', () => {
  const change = getScheduledChange('kr-prosecution-restructuring-2026');

  it('exists and is valid (enacted-with-date, pending, future effective date)', () => {
    expect(change).toBeDefined();
    expect(change!.status).toBe('pending');
    expect(change!.certainty).toBe('enacted-with-date');
    expect(change!.effectiveOn).toBe('2026-10-02');
    const problems = validateScheduledChange(change!, {
      today: '2026-07-24',
      knownSourceIds: SOURCE_IDS,
    });
    expect(problems).toEqual([]);
  });

  it('is one of the site scheduled changes and names the KR jurisdiction', () => {
    expect(SCHEDULED_CHANGES.some((c) => c.id === 'kr-prosecution-restructuring-2026')).toBe(
      true,
    );
    expect(change!.affectedEntityIds).toContain('kr');
  });
});

/* Model result: unitary, single national bodies, no sub-national record. */
describe('South Korea — unitary, all justice national', () => {
  it('is a single country-level record with all functions own', () => {
    const krRecords = JURISDICTIONS.filter((j) => j.countryCode === 'KR');
    expect(krRecords.map((j) => j.id)).toEqual(['kr']);
    const record = getJurisdiction('kr')!;
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

  it('creates no accidental sub-national pages', () => {
    for (const slug of ['seoul', 'busan', 'gyeonggi', 'jeju']) {
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/south-korea/${slug}`)).toBe(
        false,
      );
      expect(PUBLIC_ROUTES.some((r) => r.path === `/countries/${slug}`)).toBe(false);
    }
  });

  it('is valid and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the published South Korea restricted claim (above capacity)', () => {
  const claim = getModule(KR!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('kr-prison-density-2026');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records the exact WPB figure and that the system is above capacity', () => {
    expect(claim!.metricPeriod).toBe('2026-01-29');
    expect(claim!.statement).toMatch(/65,279/);
    expect(claim!.statement).toMatch(/50,614/);
    expect(claim!.statement).toMatch(/129\.0%/);
    expect(claim!.statement).toMatch(/above capacity/i);
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
describe('rendered South Korea HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the facts date, names South Korea, and shows the derived demonym', async () => {
    const html = await read('out/countries/south-korea.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>27 July 2026<\/time>/);
    expect(html).toMatch(/<h1[^>]*>Justice and public safety in South Korea/);
    expect(html).toMatch(/not a South Korean government body/);
  });

  it('renders a Hangul institution name', async () => {
    const html = await read('out/countries/south-korea/courts.html');
    expect(html).toMatch(/헌법재판소|대법원/);
  });

  it('never emits /countries/kr in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/south-korea</);
    expect(sitemap).not.toMatch(/\/countries\/kr</);
  });
});
