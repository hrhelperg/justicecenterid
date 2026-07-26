import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES, getCountryModule } from '@/content/country-modules';
import {
  COUNTRY_DOSSIERS,
  deferredModules,
  getDossier,
  getModule,
  publishedModules,
} from '@/content/dossiers';
import { getGuide } from '@/content/guides';
import { PUBLIC_ROUTES } from '@/content/public-routes';
import { SECTION_IDS } from '@/content/types';
import { SOURCES } from '@/content/sources';

/** Precondition A2 plus the France pilot's own content rules. */

const FRANCE = getDossier('france');

describe('country module registry (A2)', () => {
  it('has unique ids and unique slugs', () => {
    const ids = COUNTRY_MODULES.map((m) => m.id);
    const slugs = COUNTRY_MODULES.map((m) => m.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('keeps slug identical to id, so a route can never drift from its definition', () => {
    for (const moduleEntry of COUNTRY_MODULES) {
      expect(moduleEntry.slug).toBe(moduleEntry.id);
    }
  });

  it('uses URL-safe slugs', () => {
    for (const moduleEntry of COUNTRY_MODULES) {
      expect(moduleEntry.slug).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('does not define an "overview" module, which would compete with the country hub', () => {
    expect(getCountryModule('overview')).toBeUndefined();
  });

  /*
   * Seven module slugs are word-identical to a top-level section. That is intentional and
   * documented in country-modules.ts; this test pins the consequence that matters — the two
   * families must live at different depths so they can never resolve to the same URL.
   */
  it('never produces a country-module route that collides with a section route', () => {
    const sectionPaths = new Set(SECTION_IDS.map((id) => `/${id}`));
    const countryModulePaths = PUBLIC_ROUTES.filter((r) => r.kind === 'country-module');

    expect(countryModulePaths.length).toBeGreaterThan(0);
    for (const route of countryModulePaths) {
      expect(sectionPaths.has(route.path), `${route.path} collides with a section`).toBe(false);
      expect(route.path.split('/').length).toBe(4);
    }
  });

  it('produces no duplicate public route paths anywhere', () => {
    const paths = PUBLIC_ROUTES.map((r) => r.path);
    const duplicates = paths.filter((p, i) => paths.indexOf(p) !== i);
    expect(duplicates).toEqual([]);
  });
});

describe('France dossier', () => {
  it('exists and is published', () => {
    expect(FRANCE).toBeDefined();
    expect(FRANCE?.status).toBe('published');
    expect(FRANCE?.countryCode).toBe('FR');
  });

  it('is one of exactly the dossiers the completed pilots created', () => {
    // Updated per pilot. The guard that matters is that no pilot silently adds a country
    // beyond its scope, so this list grows by exactly one slug per completed country phase.
    expect(COUNTRY_DOSSIERS.map((d) => d.slug).sort()).toEqual([
      'australia',
      'brazil',
      'canada',
      'france',
      'germany',
      'ireland',
      'japan',
      'spain',
      'united-states',
    ]);
  });

  it('records the date its facts were verified, and it is not the build date', () => {
    expect(FRANCE?.factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const today = new Date().toISOString().slice(0, 10);
    // The check that matters: the value is a recorded research date, fixed in the source,
    // not something computed at build time that would silently follow the clock.
    expect(FRANCE?.factsVerifiedOn).toBe('2026-07-24');
    expect(FRANCE?.factsVerifiedOn === today && today !== '2026-07-24').toBe(false);
  });

  it('publishes only modules that carry sources and a fact-checked review', () => {
    const published = publishedModules(FRANCE!);
    expect(published.length).toBeGreaterThan(0);
    for (const moduleEntry of published) {
      expect(
        moduleEntry.sources.length,
        `${moduleEntry.moduleId} has no source`,
      ).toBeGreaterThan(0);
      expect(moduleEntry.review, `${moduleEntry.moduleId} is published unreviewed`).toBe(
        'fact-checked',
      );
      expect(
        moduleEntry.blocks.length,
        `${moduleEntry.moduleId} has no content`,
      ).toBeGreaterThan(0);
      expect(moduleEntry.factsVerifiedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it('gives every deferred module a stated reason and no content', () => {
    const deferred = deferredModules(FRANCE!);
    expect(deferred.length).toBeGreaterThan(0);
    for (const moduleEntry of deferred) {
      expect(
        moduleEntry.deferredReason,
        `${moduleEntry.moduleId} defers without a reason`,
      ).toBeTruthy();
      expect(moduleEntry.deferredReason!.length).toBeGreaterThan(80);
      expect(
        moduleEntry.blocks,
        `${moduleEntry.moduleId} is deferred but carries content`,
      ).toEqual([]);
      expect(moduleEntry.sources).toEqual([]);
    }
  });

  it('never routes a deferred module', () => {
    const routed = new Set(
      PUBLIC_ROUTES.filter((r) => r.kind === 'country-module').map((r) => r.path),
    );
    for (const moduleEntry of deferredModules(FRANCE!)) {
      const definition = COUNTRY_MODULES.find((m) => m.id === moduleEntry.moduleId);
      expect(routed.has(`/countries/france/${definition?.slug}`)).toBe(false);
    }
  });

  it('keeps safety-sensitive modules out of publication unless cleared', () => {
    for (const moduleEntry of publishedModules(FRANCE!)) {
      expect(
        moduleEntry.safetyReview,
        `${moduleEntry.moduleId} published with pending safety review`,
      ).not.toBe('pending');
    }
  });

  it('resolves every source it cites', () => {
    const ids = new Set(SOURCES.map((s) => s.id));
    const cited = [
      ...FRANCE!.sources,
      ...FRANCE!.modules.flatMap((m) => m.sources),
      ...FRANCE!.blocks.flatMap((b) => (b.kind === 'paragraph' ? (b.sources ?? []) : [])),
      ...FRANCE!.modules.flatMap((m) =>
        m.blocks.flatMap((b) => (b.kind === 'paragraph' ? (b.sources ?? []) : [])),
      ),
    ];
    expect(cited.length).toBeGreaterThan(0);
    for (const id of cited) {
      expect(ids.has(id), `unresolved source "${id}"`).toBe(true);
    }
  });

  it('cites only France-scoped or international sources on France pages', () => {
    const byId = new Map(SOURCES.map((s) => [s.id, s]));
    for (const moduleEntry of publishedModules(FRANCE!)) {
      for (const id of moduleEntry.sources) {
        const jurisdiction = byId.get(id)?.jurisdiction;
        expect(['FR', 'INT'], `source ${id} has jurisdiction ${jurisdiction}`).toContain(
          jurisdiction,
        );
      }
    }
  });

  it('records how each French source was verified, not merely that it was', () => {
    const french = SOURCES.filter((s) => s.jurisdiction === 'FR');
    expect(french.length).toBeGreaterThan(0);
    for (const source of french) {
      expect(source.verifiedOn, `${source.id} missing verifiedOn`).toMatch(
        /^\d{4}-\d{2}-\d{2}$/,
      );
      expect(
        source.verificationMethod,
        `${source.id} does not record how it was verified — an HTTP status is not verification`,
      ).toBe('content-confirmed');
    }
  });

  it('links every related guide to one that actually exists', () => {
    for (const moduleEntry of publishedModules(FRANCE!)) {
      for (const slug of moduleEntry.relatedGuides ?? []) {
        expect(
          getGuide(slug),
          `${moduleEntry.moduleId} links to missing guide "${slug}"`,
        ).toBeDefined();
      }
    }
  });

  it('states that overseas arrangements are unresearched rather than implying they match', () => {
    const hubText = JSON.stringify(FRANCE!.blocks) + JSON.stringify(FRANCE!.uncertainty);
    expect(hubText).toMatch(/not been researched/i);
  });

  it('resolves the module lookup used by the route handler', () => {
    expect(getModule(FRANCE!, 'courts')?.status).toBe('published');
    expect(getModule(FRANCE!, 'corrections')?.status).toBe('draft');
    expect(getModule(FRANCE!, 'not-a-module')).toBeUndefined();
  });
});
