/**
 * Production route matrix.
 *
 * Checks every route in the canonical registry against a live origin. The list is
 * DERIVED from `src/content/public-routes.ts` — the same module the sitemap and
 * `verify-output.mjs` read — so it cannot drift from what the site actually publishes,
 * and a hand-maintained list of URLs can never go stale against it.
 *
 *   node scripts/route-matrix.mjs https://justicecenterid.com
 *   node scripts/route-matrix.mjs http://127.0.0.1:4173      # against `npm run serve`
 *
 * For every registered route it asserts:
 *   - HTTP 200
 *   - exactly one <link rel="canonical">, absolute, https, on the expected host,
 *     pointing at this route
 *   - the body is the real page, not a host's 404 shell and not a redirect loop
 *
 * It then asserts that a set of paths which must NOT exist return 404 — deferred country
 * modules, rejected cluster slugs, ISO-code aliases, and arbitrary paths. That is the
 * check that catches an SPA fallback, which turns every 404 into a soft 200.
 *
 * Exits non-zero on any failure, so it can gate a deployment.
 */

import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

/*
 * The same resolution hook `verify-output.mjs` uses: Node strips TypeScript types
 * natively but requires explicit extensions, while the content layer imports
 * extensionlessly. Registering the hook is what lets this script read the real registry
 * instead of a copy of it.
 */
register(new URL('./ts-resolve-hook.mjs', import.meta.url), pathToFileURL('./'));

const { PUBLIC_ROUTES } = await import('../src/content/public-routes.ts');

const origin = (process.argv[2] ?? '').replace(/\/+$/, '');
if (!origin) {
  console.error('Usage: node scripts/route-matrix.mjs <origin>');
  process.exit(2);
}

const expectedHost = new URL(origin).host;
/* Canonicals are always the production apex, even when probing a local server. */
const CANONICAL_ORIGIN = 'https://justicecenterid.com';

/** Paths that must 404. Not a sample — each one is a real failure mode. */
const MUST_404 = [
  // Modules deliberately deferred on a published country.
  '/countries/france/corrections',
  // Cluster candidates the plan rejected or deferred.
  '/law-enforcement/probable-cause',
  '/law-enforcement/reasonable-suspicion',
  '/law-enforcement/stop-and-search',
  '/law-enforcement/gendarmerie',
  '/law-enforcement/what-is-policing',
  '/law-enforcement/arrest',
  '/law-enforcement/detention',
  // Routes assessed and deliberately not created.
  '/ecosystem',
  '/cookie-policy',
  // Wave 2 reference records that are published SUMMARIES but not routed pages: the
  // source registry holds no border, customs, coast-guard or maritime source.
  '/institutions/border-and-customs-authority',
  '/institutions/coast-guard',
  // Wave 2 candidates merged, aliased or rejected by the cannibalization matrix.
  '/institutions/police',
  '/institutions/local-police',
  '/institutions/federal-police',
  '/institutions/highway-patrol',
  '/institutions/marshal-service',
  '/professions/police-officer',
  '/professions/criminal-investigator',
  '/professions/gendarme',
  '/professions/sheriff',
  // Wave 3: glossary terms that are entries, not pages (owned elsewhere or too thin).
  '/glossary/due-process',
  '/glossary/rule-of-law',
  '/glossary/gendarmerie',
  '/glossary/public-safety',
  '/glossary/evidence',
  '/glossary/warrant',
  // Wave 3 sub-national candidates merged, aliased or rejected.
  '/institutions/regional-police',
  '/institutions/territorial-police',
  // Wave 4 relationship candidates merged or rejected.
  '/law-enforcement/overlapping-police-jurisdiction',
  '/law-enforcement/police-agency-coordination',
  '/law-enforcement/shared-policing-services',
  '/law-enforcement/who-controls-local-police',
  '/law-enforcement/county-law-enforcement',
  '/law-enforcement/city-police-and-municipal-government',
  '/law-enforcement/state-police-vs-local-police',
  '/law-enforcement/campus-police-jurisdiction',
  '/law-enforcement/transport-police-jurisdiction',
  '/law-enforcement/special-purpose-police-agencies',
  // ISO codes are not URL segments; the slug is the English name.
  '/countries/fr',
  '/countries/us',
  '/countries/jp',
  // A country that does not exist, and nested nonsense beneath a real one.
  '/countries/atlantis',
  '/countries/france/not-a-module',
  // Arbitrary paths.
  '/definitely-not-a-page',
  '/law-enforcement/police-use-of-force/extra',
];

const results = { pass: 0, fail: 0 };
const failures = [];

function fail(path, message) {
  results.fail += 1;
  failures.push(`${path}: ${message}`);
}

async function fetchPath(path, { redirect = 'follow' } = {}) {
  const response = await fetch(`${origin}${path}`, {
    redirect,
    headers: { 'user-agent': 'justicecenterid-route-matrix' },
  });
  const body = response.headers.get('content-type')?.includes('text/html')
    ? await response.text()
    : '';
  return { response, body };
}

async function checkRoute(route) {
  let res;
  try {
    res = await fetchPath(route.path);
  } catch (error) {
    fail(route.path, `request failed: ${error.message}`);
    return;
  }

  const { response, body } = res;

  if (response.status !== 200) {
    fail(route.path, `expected 200, got ${response.status}`);
    return;
  }

  /* A redirect that landed somewhere else is a silent failure without this. */
  const landedUrl = new URL(response.url);
  const landed = landedUrl.pathname.replace(/\/$/, '') || '/';
  const wanted = route.path.replace(/\/$/, '') || '/';

  /*
   * Host is checked separately from path. If production ever redirected the apex to www,
   * every route would still resolve and every path would still match — the canonical
   * hostname would simply have inverted, sitewide, without a single failure.
   */
  if (landedUrl.host !== expectedHost) {
    fail(route.path, `redirected off-host to ${landedUrl.host} (expected ${expectedHost})`);
    return;
  }
  if (landed !== wanted) {
    fail(route.path, `redirected to ${landed}`);
    return;
  }

  const canonicals = [...body.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(
    (m) => m[1],
  );
  if (canonicals.length !== 1) {
    fail(route.path, `${canonicals.length} canonical tags`);
    return;
  }

  const canonical = canonicals[0];
  const expected = wanted === '/' ? CANONICAL_ORIGIN : `${CANONICAL_ORIGIN}${wanted}`;
  if (canonical !== expected) {
    fail(route.path, `canonical is ${canonical}, expected ${expected}`);
    return;
  }

  /* A host's own 404 shell returns 200 in an SPA-fallback misconfiguration. */
  if (/Page not found|Not Found · Netlify|<title>404/i.test(body)) {
    fail(route.path, 'body looks like a 404 shell served with 200');
    return;
  }

  if (/name="robots"[^>]*content="[^"]*noindex/i.test(body)) {
    fail(route.path, 'indexable route carries noindex');
    return;
  }

  results.pass += 1;
}

async function check404(path) {
  try {
    const { response } = await fetchPath(path);
    if (response.status === 404) {
      results.pass += 1;
    } else {
      fail(path, `expected 404, got ${response.status} — possible SPA fallback`);
    }
  } catch (error) {
    fail(path, `request failed: ${error.message}`);
  }
}

const routes = PUBLIC_ROUTES;
console.log(`Route matrix against ${origin}`);
console.log(`  ${routes.length} registered routes + ${MUST_404.length} must-404 paths\n`);

/* Bounded concurrency: enough to be quick, gentle enough not to look like an attack. */
const CONCURRENCY = 8;
const queue = [
  ...routes.map((route) => () => checkRoute(route)),
  ...MUST_404.map((path) => () => check404(path)),
];

let cursor = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < queue.length) {
      const task = queue[cursor++];
      await task();
    }
  }),
);

console.log(`passed : ${results.pass}`);
console.log(`failed : ${results.fail}`);
if (failures.length > 0) {
  console.log('\nFailures:');
  for (const failure of failures.slice(0, 40)) console.log(`  ${failure}`);
  if (failures.length > 40) console.log(`  … and ${failures.length - 40} more`);
  process.exit(1);
}
console.log('\n✓ Route matrix clean.');
