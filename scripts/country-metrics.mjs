/**
 * Country-scaling metrics — a reproducible, registry-derived census of the content layer.
 *
 * Same design constraint as scripts/verify-output.mjs: it imports the TypeScript content
 * registry directly under Node's native type stripping (via ts-resolve-hook.mjs), so the
 * numbers are computed from the real source of truth, never hand-copied or regex-scraped.
 * Nothing here touches React, Next, or a browser API — the content layer is Node-safe.
 *
 * Usage:
 *   node scripts/country-metrics.mjs            human-readable census
 *   node scripts/country-metrics.mjs --json     machine-readable, for docs/CI diffing
 *
 * This is the tool that produces docs/audits/country-scaling-baseline.md. Re-run it on any
 * branch to see what changed; the baseline doc records one dated snapshot.
 */
import { register } from 'node:module';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
register('./ts-resolve-hook.mjs', pathToFileURL(join(ROOT, 'scripts/')));

const load = (rel) => import(pathToFileURL(join(ROOT, rel)).href);

const [
  { COUNTRY_DOSSIERS, publishedModules, deferredModules },
  { PUBLIC_ROUTES },
  { SOURCES },
  { JURISDICTIONS },
  { SCHEDULED_CHANGES },
  { COUNTRIES },
] = await Promise.all([
  load('src/content/dossiers/index.ts'),
  load('src/content/public-routes.ts'),
  load('src/content/sources.ts'),
  load('src/content/jurisdictions.ts'),
  load('src/content/scheduled-changes.ts'),
  load('src/content/countries.ts'),
]);

const tally = (arr, key) => {
  const out = {};
  for (const item of arr) {
    const k = key(item) ?? 'UNSET';
    out[k] = (out[k] ?? 0) + 1;
  }
  return out;
};

const publishedDossiers = COUNTRY_DOSSIERS.filter((d) => d.status === 'published');
const publishedCodes = new Set(publishedDossiers.map((d) => d.countryCode));

const perCountry = COUNTRY_DOSSIERS.map((d) => {
  const cited = new Set([...d.sources, ...d.modules.flatMap((m) => m.sources)]);
  return {
    slug: d.slug,
    code: d.countryCode,
    status: d.status,
    publishedModules: publishedModules(d).length,
    deferredModules: deferredModules(d).length,
    totalModules: d.modules.length,
    distinctSources: cited.size,
    restrictedClaims: d.modules.reduce((n, m) => n + (m.restrictedClaims?.length ?? 0), 0),
    factsVerifiedOn: d.factsVerifiedOn,
  };
});

const metrics = {
  routes: {
    total: PUBLIC_ROUTES.length,
    byKind: tally(PUBLIC_ROUTES, (r) => r.kind),
  },
  dossiers: {
    total: COUNTRY_DOSSIERS.length,
    published: publishedDossiers.length,
    perCountry,
  },
  sources: {
    total: SOURCES.length,
    byJurisdiction: tally(SOURCES, (s) => s.jurisdiction),
  },
  jurisdictionRecords: {
    total: JURISDICTIONS.length,
    byCountry: tally(JURISDICTIONS, (j) => j.countryCode),
  },
  scheduledChanges: {
    total: SCHEDULED_CHANGES.length,
    ids: SCHEDULED_CHANGES.map((c) => c.id),
  },
  restrictedClaims: {
    total: perCountry.reduce((n, c) => n + c.restrictedClaims, 0),
  },
  planningRegistry: {
    total: COUNTRIES.length,
    alreadyPublished: COUNTRIES.filter((c) => publishedCodes.has(c.code)).map((c) => c.code),
    publishedButAbsent: [...publishedCodes].filter((c) => !COUNTRIES.some((x) => x.code === c)),
    awaitingResearch: COUNTRIES.filter((c) => !publishedCodes.has(c.code)).map((c) => c.code),
  },
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(metrics, null, 2));
} else {
  console.log('Routes:', metrics.routes.total, JSON.stringify(metrics.routes.byKind));
  console.log('Dossiers:', metrics.dossiers.total, `(published ${metrics.dossiers.published})`);
  console.table(perCountry);
  console.log('Restricted claims:', metrics.restrictedClaims.total);
  console.log(
    'Scheduled changes:',
    metrics.scheduledChanges.total,
    metrics.scheduledChanges.ids.join(', '),
  );
  console.log(
    'Source records:',
    metrics.sources.total,
    JSON.stringify(metrics.sources.byJurisdiction),
  );
  console.log(
    'Jurisdiction records:',
    metrics.jurisdictionRecords.total,
    JSON.stringify(metrics.jurisdictionRecords.byCountry),
  );
  console.log(
    'Planning registry:',
    metrics.planningRegistry.total,
    '| already-published-and-still-listed:',
    metrics.planningRegistry.alreadyPublished.join(',') || 'none',
    '| published-but-absent:',
    metrics.planningRegistry.publishedButAbsent.join(',') || 'none',
  );
}
