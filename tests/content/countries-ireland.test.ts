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

const IE = getDossier('ireland');
const SOURCE_IDS = SOURCES.map((s) => s.id);

describe('Ireland dossier', () => {
  it('exists, is published, and uses the readable slug', () => {
    expect(IE).toBeDefined();
    expect(IE?.status).toBe('published');
    expect(IE?.countryCode).toBe('IE');
    expect(IE?.slug).toBe('ireland');
    expect(PUBLIC_ROUTES.some((r) => r.path === '/countries/ie')).toBe(false);
  });

  it('records a fixed research date rather than following the clock', () => {
    expect(IE?.factsVerifiedOn).toBe('2026-07-25');
  });

  /*
   * Regression: the hub rendered a hardcoded "24 July 2026" facts-verified date. It was latent
   * because France, Germany and the US all verified on 2026-07-24; Ireland (07-25) exposed it.
   * The rendered date must match the dossier's own factsVerifiedOn.
   */
  it('renders the correct facts-verified date, not a hardcoded one', async () => {
    const { readFileSync, existsSync } = await import('node:fs');
    const file = 'out/countries/ireland.html';
    if (!existsSync(file)) throw new Error('run `npm run build` before this test');
    const html = readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
    expect(html).toMatch(/checked against their sources on\s*<time[^>]*>25 July 2026<\/time>/);
    expect(html).not.toMatch(/24 July 2026/);

    // Regression: the "What has not been researched" note hardcoded "not about France".
    // It rendered on every non-France hub. Must name the actual country.
    expect(html).not.toMatch(/not about France/);
    expect(html).toMatch(/not about the island of Ireland|not about Ireland/);
  });

  it('publishes the modules the phase required, including oversight', () => {
    const ids = publishedModules(IE!).map((m) => m.moduleId);
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
  });

  it('publishes only modules with sources, content and a fact-checked review', () => {
    for (const m of publishedModules(IE!)) {
      expect(m.sources.length, `${m.moduleId} has no source`).toBeGreaterThan(0);
      expect(m.review, `${m.moduleId} published unreviewed`).toBe('fact-checked');
      expect(m.blocks.length, `${m.moduleId} has no content`).toBeGreaterThan(0);
      expect(m.safetyReview, `${m.moduleId} safety review still pending`).not.toBe('pending');
    }
  });

  it('gives every deferred module a stated reason, no content, and no route', () => {
    const deferred = deferredModules(IE!);
    expect(deferred.length).toBeGreaterThan(0);
    const routed = new Set(PUBLIC_ROUTES.map((r) => r.path));
    for (const m of deferred) {
      expect(m.deferredReason, `${m.moduleId} defers without a reason`).toBeTruthy();
      expect(m.blocks).toEqual([]);
      const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId);
      expect(routed.has(`/countries/ireland/${def?.slug}`)).toBe(false);
    }
  });

  it('cites only Ireland-scoped or international sources, each verified', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const m of publishedModules(IE!)) {
      for (const id of m.sources) {
        const s = byId.get(id);
        expect(s, `unresolved source ${id}`).toBeDefined();
        expect(['IE', 'INT']).toContain(s!.jurisdiction);
        expect(s!.verificationMethod, `${id} verification method`).toBe('content-confirmed');
      }
    }
  });

  /*
   * SCOPE INTEGRITY — the defining risk of the Ireland pilot. Every page must scope Ireland as
   * the sovereign state, distinct from the island and from Northern Ireland.
   */
  it('scopes Ireland as the State, distinct from the island and Northern Ireland', () => {
    const hub = JSON.stringify(IE!.blocks);
    expect(hub).toMatch(/not the island/i);
    expect(hub).toMatch(/Northern Ireland/);
    expect(hub).toMatch(/separate jurisdiction|separate police/i);
    // The justice-system and courts modules must also hold the line.
    expect(JSON.stringify(getModule(IE!, 'justice-system')?.blocks)).toMatch(
      /State, not the island|Northern Ireland/i,
    );
  });

  it('states the DPP is independent and separate from both police and government', () => {
    const pr = JSON.stringify(getModule(IE!, 'prosecution')?.blocks);
    expect(pr).toMatch(/Prosecution of Offences Act 1974/);
    expect(pr).toMatch(/independent in the performance of her functions/);
    expect(pr).toMatch(/separate from/i);
    expect(pr).toMatch(/investigat/i); // Garda investigates / DPP decides
  });

  it('uses the Irish name for the national police rather than "the Irish police" alone', () => {
    const le = JSON.stringify(getModule(IE!, 'law-enforcement')?.blocks);
    expect(le).toMatch(/An Garda Síochána/);
    expect(le).toMatch(/Garda Síochána Act 2005/);
    expect(le).toMatch(/security service/i);
  });

  /*
   * Oversight recency — names the CURRENT bodies and marks the historical ones, with the
   * transition date, rather than presenting superseded bodies as current.
   */
  it('names the current oversight bodies and marks the historical ones with a date', () => {
    const ov = getModule(IE!, 'oversight');
    const text = JSON.stringify(ov?.blocks);
    expect(ov?.temporalScope).toBe('mixed');
    // Current bodies:
    expect(text).toMatch(/Fiosrú/);
    expect(text).toMatch(/Policing and Community Safety Authority/);
    // Historical bodies, explicitly marked:
    expect(text).toMatch(/GSOC|Garda Síochána Ombudsman Commission/);
    expect(text).toMatch(/historical|superseded|replaced/i);
    // The transition date must be present, not left vague.
    expect(text).toMatch(/2 April 2025/);
  });
});

describe('Ireland jurisdiction record', () => {
  it('is a single unitary country-level record', () => {
    const us = JURISDICTIONS.filter((j) => j.countryCode === 'IE');
    expect(us.map((j) => j.id)).toEqual(['ie']);
    const ie = getJurisdiction('ie')!;
    expect(ie.level).toBe('country');
    expect(ie.parentJurisdictionId).toBeUndefined();
    expect(ie.legalSystemScope).toBe('own');
    expect(ie.policingScope).toBe('own');
  });

  it('is valid, and does not regress the other countries', () => {
    for (const j of JURISDICTIONS) {
      expect(validateJurisdiction(j), `${j.id} invalid`).toEqual([]);
    }
  });
});

describe('the oversight reform scheduled change (taken-effect path)', () => {
  const change = getScheduledChange('ie-policing-oversight-reform-2025');

  it('exists and is a taken-effect record, not pending', () => {
    expect(change).toBeDefined();
    expect(change!.status).toBe('taken-effect');
    expect(change!.effectiveOn).toBe('2025-04-02');
    expect(change!.changeType).toBe('replacement');
  });

  it('is valid as at today, and its re-review is recorded on or after commencement', () => {
    const opts = { today: '2026-07-25', knownSourceIds: SOURCE_IDS };
    expect(validateScheduledChange(change!, opts)).toEqual([]);
    expect(change!.reviewedAfterEffect).toBeDefined();
    expect(change!.reviewedAfterEffect! >= change!.effectiveOn).toBe(true);
  });

  it('exercises a lifecycle the earlier pilots did not — both statuses now appear', () => {
    const statuses = new Set(SCHEDULED_CHANGES.map((c) => c.status));
    expect(statuses.has('pending')).toBe(true); // France 2029 recodification
    expect(statuses.has('taken-effect')).toBe(true); // Ireland 2025 reform
  });

  it('resolves its sources', () => {
    for (const id of change!.sources) {
      expect(SOURCE_IDS, `unresolved source ${id}`).toContain(id);
    }
  });
});

describe('the published Ireland restricted claim', () => {
  const claim = getModule(IE!, 'corrections')?.restrictedClaims?.[0];

  it('exists and is a fully valid detention-capacity claim', () => {
    expect(claim?.id).toBe('ie-prison-density-2024');
    expect(claim?.category).toBe('detention-capacity');
    expect(validateRestrictedClaim(claim!, SOURCE_IDS)).toEqual([]);
  });

  it('records that it is a national snapshot and supports no comparison', () => {
    expect(claim!.limitation).toMatch(/national aggregate|single.*prison system/i);
    expect(claim!.limitation).toMatch(/snapshot|not an average/i);
    expect(claim!.limitation).toMatch(/comparison|comparab/i);
  });

  it('fails when its reference period is removed', () => {
    const { metricPeriod: _d, ...stripped } = claim!;
    expect(validateRestrictedClaim(stripped as RestrictedClaim, SOURCE_IDS).join(' ')).toMatch(
      /requires metricPeriod/,
    );
  });

  it('fails when its jurisdiction is removed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, jurisdiction: '' }, SOURCE_IDS).join(' '),
    ).toMatch(/ISO 3166-1/);
  });

  it('fails when its limitation note is removed', () => {
    expect(
      validateRestrictedClaim({ ...claim!, limitation: '' }, SOURCE_IDS).join(' '),
    ).toMatch(/limitation is required/);
  });
});
