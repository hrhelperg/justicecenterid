import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { deferredModules, getDossier, getModule, publishedModules } from '@/content/dossiers';
import { JURISDICTIONS, getJurisdiction, validateJurisdiction } from '@/content/jurisdictions';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { SOURCES, getSource } from '@/content/sources';
import { splitJapaneseRuns } from '@/lib/content';
import type { JurisdictionRecord } from '@/content/types';

const JP = getDossier('japan');

describe('Japan dossier', () => {
  it('exists, is published, and uses the readable slug (never /countries/jp)', () => {
    expect(JP).toBeDefined();
    expect(JP?.status).toBe('published');
    expect(JP?.countryCode).toBe('JP');
    expect(JP?.slug).toBe('japan');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/jp')).toBe(false);
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/japan')).toBe(true);
  });

  it('records a fixed research date rather than following the clock', () => {
    expect(JP?.factsVerifiedOn).toBe('2026-07-25');
  });

  it('publishes exactly the required minimum set — and defers oversight', () => {
    const ids = publishedModules(JP!).map((m) => m.moduleId);
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
    // Unlike Ireland (a recent oversight reform forced it), Japan defers oversight.
    expect(ids).not.toContain('oversight');
    expect(ids).not.toContain('forensics');
    expect(ids).not.toContain('border-and-customs');
    expect(ids).not.toContain('history');
    expect(ids).not.toContain('timeline');
  });

  it('publishes only modules with sources, content and a fact-checked review', () => {
    for (const m of publishedModules(JP!)) {
      expect(m.sources.length, `${m.moduleId} has no source`).toBeGreaterThan(0);
      expect(m.review, `${m.moduleId} published unreviewed`).toBe('fact-checked');
      expect(m.blocks.length, `${m.moduleId} has no content`).toBeGreaterThan(0);
      expect(m.safetyReview, `${m.moduleId} safety review still pending`).not.toBe('pending');
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const deferred = deferredModules(JP!);
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
      expect(routed.has(`/countries/japan/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Japan-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(JP!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['JP', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod, `${id} verification method`).toBe('content-confirmed');
      }
    }
  });
});

/*
 * TRANSLATION INTEGRITY — the defining requirement of the Japan pilot (Part A / A1). The two
 * statute sources must be marked as official-reference translations whose authoritative text is
 * Japanese, and the pages must say so rather than treat the English as authoritative.
 */
describe('Japan translation integrity', () => {
  it('marks the cited statutes as official-reference, Japanese-authoritative translations', () => {
    for (const id of ['jp-constitution', 'jp-code-criminal-procedure']) {
      const s = getSource(id);
      expect(s, `missing source ${id}`).toBeDefined();
      expect(s!.translationStatus).toBe('official-reference');
      expect(s!.authoritativeLanguage).toBe('ja');
    }
  });

  it('records the translation-authority evidence source, which is not itself a translation', () => {
    const policy = getSource('jp-law-translation-policy');
    expect(policy).toBeDefined();
    expect(policy!.translationStatus).toBe('not-a-translation');
    expect(policy!.note).toMatch(/only the original Japanese texts have legal effect/);
  });

  it('never leaves a Japanese legislation source without an authoritative-language marker', () => {
    const jpLegislation = SOURCES.filter(
      (s) => s.jurisdiction === 'JP' && s.type === 'legislation',
    );
    expect(jpLegislation.length).toBeGreaterThan(0);
    for (const s of jpLegislation) {
      expect(s.translationStatus, `${s.id} translationStatus`).toBe('official-reference');
      expect(s.authoritativeLanguage, `${s.id} authoritativeLanguage`).toBe('ja');
    }
  });

  it('states on the pages that the English is reference only, not authoritative', () => {
    const js = JSON.stringify(getModule(JP!, 'justice-system')?.blocks);
    expect(js).toMatch(/reference materials/);
    expect(js).toMatch(/only the original Japanese texts have legal effect/);
    const src = JSON.stringify(getModule(JP!, 'sources')?.blocks);
    expect(src).toMatch(
      /authoritative text is Japanese|original Japanese texts having legal effect/,
    );
  });
});

/*
 * COORDINATION, NOT COMMAND (Part A / A2). The law-enforcement page must state the national
 * bodies coordinate and supervise on matters of national concern, must NOT imply a national
 * operational command, must reject the "Japan's FBI" analogy, and must say the prefectural
 * police are not branches of the NPA.
 */
describe('Japan coordination-vs-command', () => {
  const le = () => JSON.stringify(getModule(JP!, 'law-enforcement')?.blocks);

  it('frames the national bodies as coordinating and supervising on national matters', () => {
    expect(le()).toMatch(/matters of national concern/);
    expect(le()).toMatch(/coordinate|supervise/i);
  });

  it('rejects the "Japan\'s FBI" analogy and the branch-office misreading', () => {
    expect(le()).toMatch(/FBI/);
    expect(le()).toMatch(/not branches of the National Police Agency/);
    // Operational policing sits with the prefectures, explicitly.
    expect(le()).toMatch(/prefectural public safety commission/i);
  });

  it('is expressed structurally by jurisdiction scope, not an invented relationship field', () => {
    // National policing is shared; prefectural policing is own. No "commands" field exists.
    expect(getJurisdiction('jp')!.policingScope).toBe('shared');
    expect(getJurisdiction('jp-tokyo')!.policingScope).toBe('own');
    expect(getJurisdiction('jp-osaka')!.policingScope).toBe('own');
    expect('relationshipType' in getJurisdiction('jp-tokyo')!).toBe(false);
  });
});

describe('Japan jurisdiction records (prefecture level)', () => {
  it('is the national record plus exactly two prefectural samples', () => {
    const ids = JURISDICTIONS.filter((j) => j.countryCode === 'JP').map((j) => j.id);
    expect(ids.sort()).toEqual(['jp', 'jp-osaka', 'jp-tokyo']);
  });

  it('models the national record as unitary with policing shared', () => {
    const jp = getJurisdiction('jp')!;
    expect(jp.level).toBe('country');
    expect(jp.parentJurisdictionId).toBeUndefined();
    expect(jp.policingScope).toBe('shared');
    expect(jp.courtScope).toBe('own');
    expect(jp.prosecutionScope).toBe('own');
    expect(jp.correctionalScope).toBe('own');
  });

  it('models each prefecture as administering police but not courts/prosecution/corrections', () => {
    for (const id of ['jp-tokyo', 'jp-osaka']) {
      const p = getJurisdiction(id)!;
      expect(p.level, `${id} level`).toBe('prefecture');
      expect(p.parentJurisdictionId).toBe('jp');
      expect(p.authorityBasis).toBe('delegated');
      expect(p.policingScope, `${id} policing`).toBe('own');
      expect(p.courtScope, `${id} courts`).toBe('national');
      expect(p.prosecutionScope, `${id} prosecution`).toBe('national');
      expect(p.correctionalScope, `${id} corrections`).toBe('national');
      // The Germany-style split: police administered here, legislated nationally.
      expect(p.legislativeCompetence?.policing).toBe('framework');
    }
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });

  // Non-vacuity: the validator actually bites on a broken prefecture record.
  it('rejects a prefecture record with no parent', () => {
    const orphan = {
      ...getJurisdiction('jp-osaka')!,
      id: 'jp-orphan',
      parentJurisdictionId: undefined,
    } as JurisdictionRecord;
    expect(validateJurisdiction(orphan, JURISDICTIONS).join(' ')).toMatch(
      /requires a parentJurisdictionId/,
    );
  });

  it('rejects an unresearched prefecture that still asserts a researched scope', () => {
    const bogus = {
      ...getJurisdiction('jp-osaka')!,
      id: 'jp-bogus',
      coverage: 'planned',
    } as JurisdictionRecord;
    expect(validateJurisdiction(bogus, JURISDICTIONS).join(' ')).toMatch(/unresearched/);
  });
});

describe('the Japanese lay judge (saiban-in) system, described precisely', () => {
  const courts = () => JSON.stringify(getModule(JP!, 'courts')?.blocks);

  it('names it as the lay judge system and dates it to 2009', () => {
    expect(courts()).toMatch(/lay judge/);
    expect(courts()).toMatch(/saiban-in/);
    expect(courts()).toMatch(/21 May 2009/);
  });

  it('makes clear it is a mixed panel, not a separate jury, and not for all trials', () => {
    expect(courts()).toMatch(/TOGETHER WITH professional judges|together with/i);
    expect(courts()).toMatch(/not a separate jury|not a jury/i);
    expect(courts()).toMatch(/certain serious criminal cases|not to trials in general/i);
  });

  it('includes the family and summary courts, not only the appellate tiers', () => {
    expect(courts()).toMatch(/family courts/);
    expect(courts()).toMatch(/summary courts/);
  });
});

describe('Japan prosecution and corrections restraint', () => {
  it('does not assert a Minister-of-Justice power it could not read', () => {
    const pr = JSON.stringify(getModule(JP!, 'prosecution')?.blocks);
    expect(pr).toMatch(/four types of Public Prosecutors/i);
    expect(pr).toMatch(/not among the statutes available in official English translation/);
    expect(pr).toMatch(/does not assert the content of a law it has not read/);
  });

  it('publishes NO detention-capacity claim for Japan (A4 deferred with a blocker)', () => {
    const corrections = getModule(JP!, 'corrections');
    expect(corrections?.restrictedClaims ?? []).toEqual([]);
    const text = JSON.stringify(corrections?.blocks);
    expect(text).toMatch(/Correction Bureau/);
    expect(text).toMatch(/eight regional correction headquarters/);
    // It says plainly that no figure is published, rather than approximating one.
    expect(text).toMatch(/No prison figure is published here|omits the statistic/);
  });
});

describe('splitJapaneseRuns marks Japanese script for lang="ja" (non-vacuous)', () => {
  it('leaves Latin-only text as a single untagged run', () => {
    const runs = splitJapaneseRuns('the National Police Agency');
    expect(runs).toEqual([{ text: 'the National Police Agency' }]);
  });

  it('tags a Japanese run and leaves the surrounding Latin untagged', () => {
    const runs = splitJapaneseRuns('Keishicho (警視庁)');
    const ja = runs.find((r) => r.lang === 'ja');
    expect(ja?.text).toBe('警視庁');
    expect(
      runs
        .filter((r) => !r.lang)
        .map((r) => r.text)
        .join(''),
    ).toBe('Keishicho ()');
  });

  it('does NOT tag romanized names', () => {
    for (const romaji of ['todofuken', 'saiban-in', 'Chuzaisho', 'Nihon-koku']) {
      expect(splitJapaneseRuns(romaji).some((r) => r.lang === 'ja')).toBe(false);
    }
  });
});

/*
 * Rendered-output checks. These require `npm run build` first (they read out/…), mirroring the
 * Ireland pilot's rendered-date regression test.
 */
describe('rendered Japan HTML', () => {
  async function read(file: string): Promise<string> {
    const { readFileSync, existsSync } = await import('node:fs');
    if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
    return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
  }

  it('renders the correct facts-verified date and names the actual country', async () => {
    const html = await read('out/countries/japan.html');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>25 July 2026<\/time>/);
    expect(html).not.toMatch(/24 July 2026/);
    expect(html).not.toMatch(/not about France/);
    expect(html).toMatch(/not about\s*Japan/);
  });

  it('wraps inline Japanese script in <span lang="ja"> (WCAG 3.1.2)', async () => {
    const hub = await read('out/countries/japan.html');
    expect(hub).toMatch(/lang="ja">都道府県</);
    const courts = await read('out/countries/japan/courts.html');
    expect(courts).toMatch(/lang="ja">裁判員</);
    const le = await read('out/countries/japan/law-enforcement.html');
    expect(le).toMatch(/lang="ja">警視庁</);
    // Statute titles in the source list are Japanese too.
    const sources = await read('out/countries/japan/sources.html');
    expect(sources).toMatch(/lang="ja">刑事訴訟法</);
    expect(sources).toMatch(/lang="ja">日本国憲法</);
  });

  it('keeps the document language English while marking the Japanese parts', async () => {
    const hub = await read('out/countries/japan.html');
    expect(hub).toMatch(/<html lang="en"/);
  });

  it('never emits the /countries/jp path in the sitemap', async () => {
    const sitemap = await read('out/sitemap.xml');
    expect(sitemap).toMatch(/\/countries\/japan</);
    expect(sitemap).not.toMatch(/\/countries\/jp</);
    // Deferred modules must not appear in the sitemap.
    for (const slug of [
      'oversight',
      'forensics',
      'border-and-customs',
      'history',
      'timeline',
    ]) {
      expect(sitemap, `deferred ${slug} leaked into sitemap`).not.toMatch(
        new RegExp(`/countries/japan/${slug}<`),
      );
    }
  });
});
