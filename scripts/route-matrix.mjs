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
  // Wave 5 oversight candidates deferred or rejected.
  '/institutions/internal-affairs',
  '/institutions/police-inspectorate',
  '/institutions/police-ombudsman',
  '/institutions/anti-corruption-commission',
  '/institutions/data-protection-authority',
  '/institutions/judicial-oversight',
  // `/law-enforcement/internal-vs-external-police-oversight` was here until Wave 7, which
  // reversed the Wave 5 deferral on new statutory evidence — Sweden's "oberoende avdelning
  // inom Polismyndigheten" and section 87 of Kenya's National Police Service Act. It is now a
  // published route, asserted by tests/content/wave5-oversight.test.ts.
  '/law-enforcement/how-police-complaints-are-investigated',
  // Wave 6: English labels tested against French evidence and rejected. The French
  // inspections générales are INSIDE the forces they examine, so "inspectorate" would
  // invert the fact that matters most, and one country is not recurrence in any case.
  '/institutions/internal-affairs-unit',
  '/institutions/professional-standards-unit',
  '/institutions/police-integrity-commission',
  '/institutions/police-standards-commission',
  '/countries/france/inspections',
  // Wave 7: families assessed against ten jurisdictions and not published. Two were MERGED
  // into pages that already exist (conduct authority, police ombudsman), three failed on
  // recurrence, one is an invented label, and one is a position rather than a family.
  '/institutions/police-conduct-authority',
  '/institutions/police-complaints-commissioner',
  '/institutions/civilian-police-review-board',
  '/institutions/external-police-oversight-authority',
  '/law-enforcement/who-disciplines-police',
  '/law-enforcement/independent-police-investigations',
  // ISO codes are not URL segments; the slug is the English name.
  '/countries/fr',
  '/countries/us',
  '/countries/jp',
  // A country that does not exist, and nested nonsense beneath a real one.
  '/countries/atlantis',
  '/countries/france/not-a-module',
  // Wave 8: investigation candidates that were merged, deferred or rejected in
  // docs/seo/knowledge-expansion-wave-8-cannibalization.md. Chain of custody and warrants are
  // owned by the glossary; interviews and crime-scene work are deferred on safety grounds; the
  // institution candidates failed the recurrence rule that Wave 7 established.
  '/investigations/chain-of-custody',
  '/investigations/crime-scene-investigation',
  '/investigations/suspect-interviews',
  '/investigations/witness-interviews',
  '/investigations/search-warrants',
  '/investigations/arrest-warrants',
  '/investigations/investigative-oversight',
  '/investigations/specialized-investigations',
  '/institutions/criminal-investigation-agency',
  '/institutions/judicial-police',
  '/institutions/national-investigative-agency',
  '/institutions/financial-investigation-unit',
  // Wave 9: court candidates merged, deferred or rejected in
  // docs/seo/knowledge-expansion-wave-9-cannibalization.md. Seven court-related terms are owned
  // by the glossary and the judicial role by /professions/judge; open justice and precedent are
  // deferred for want of sourced material. Only the constitutional court recurs structurally
  // enough to be an institution family.
  '/courts/what-is-a-court',
  '/courts/what-is-an-appeal',
  '/courts/what-is-judicial-independence',
  '/courts/judicial-review-explained',
  '/courts/why-appeals-matter',
  '/courts/judicial-appointments',
  '/courts/judicial-tenure',
  '/courts/court-accountability',
  '/courts/open-justice',
  '/courts/court-decisions-and-precedent',
  '/courts/courts-of-cassation',
  '/courts/constitutional-courts',
  '/institutions/supreme-court',
  '/institutions/trial-court',
  '/institutions/appellate-court',
  '/institutions/court-of-cassation',
  '/institutions/administrative-court',
  // Wave 10: prosecution candidates merged, deferred or rejected in
  // docs/seo/knowledge-expansion-wave-10-cannibalization.md. The profession route and the
  // glossary own the role and the terms; Wave 8 owns investigative control; and no prosecution
  // institution family survived the recurrence test.
  '/prosecution/public-prosecutor-explained',
  '/prosecution/prosecutor-vs-police',
  '/prosecution/prosecutor-vs-judge',
  '/prosecution/prosecution-vs-investigation',
  '/prosecution/federal-vs-state-prosecution',
  '/prosecution/hierarchical-prosecution-systems',
  '/prosecution/prosecutorial-ethics',
  '/prosecution/prosecutorial-immunity',
  '/prosecution/private-prosecution',
  '/prosecution/special-prosecutors',
  '/prosecution/prosecutors-and-plea-agreements',
  '/prosecution/decision-not-to-prosecute',
  '/institutions/public-prosecution-service',
  '/institutions/director-of-public-prosecutions',
  '/institutions/prosecutor-general-office',
  '/institutions/special-prosecutor',
  // Wave 11: the defence hub was chosen on evidence as /defence — the corpus is consistently
  // British English (defence 39 in prose, defense 14 and all French proper nouns), and every
  // section is a bare function noun. Both rejected spellings must stay absent.
  '/defense',
  '/legal-defence',
  '/legal-defense',
  // Candidates merged or deferred in docs/seo/knowledge-expansion-wave-11-cannibalization.md.
  // Nine of these failed only on source feasibility, not on intent.
  '/defence/public-defender',
  '/defence/legal-aid',
  '/defence/court-appointed-counsel',
  '/defence/private-defence-lawyer',
  '/defence/attorney-client-privilege',
  '/defence/equality-of-arms',
  '/defence/self-representation',
  '/defence/right-to-challenge-evidence',
  '/defence/right-to-examine-witnesses',
  '/defence/defence-rights-at-trial',
  '/defence/defence-rights-on-appeal',
  '/defence/effective-assistance-of-counsel',
  '/institutions/public-defender-office',
  '/institutions/legal-aid-authority',
  // Wave 14 removed '/professions/defence-lawyer' from this list. Wave 11 deferred it for want
  // of evidence about the PROFESSION rather than about how defence is funded; Wave 14 obtained
  // that evidence — BRAO §§ 1, 3, 43a, 60, CF Art. 133 with Lei 8.906, and LSA 2007 ss. 12-13 —
  // and routed it. Nothing else came off this list, and one thing was added: Wave 14 examined a
  // bar-association institution record and rejected it, because Germany and Brazil vest
  // admission in a professional body while England and Wales constitutes lawyers as no status
  // at all, leaving no third member of the family to describe.
  '/institutions/bar-association',
  '/professions/public-defender',
  // A parallel prosecution taxonomy was considered and rejected; the existing hub is used.
  '/prosecutors',
  // A parallel courts taxonomy was considered and rejected; the existing hub is used.
  '/judiciary',
  // A parallel investigation taxonomy was considered and rejected; the existing hub is used.
  '/criminal-investigation',
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
