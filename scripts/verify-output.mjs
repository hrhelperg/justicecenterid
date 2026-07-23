#!/usr/bin/env node
/**
 * Verifies the exported static output against the route registry.
 *
 * Static-export failures are silent: a route that fails to prerender simply produces no
 * file, and the sitemap happily advertises it anyway. This script turns that into a build
 * failure by asserting, in BOTH directions, that the registry and `out/` agree.
 *
 * Run after `next build`. Reads the registry out of the TypeScript source so it cannot go
 * stale — the route list is small and regular enough to extract reliably.
 */

import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const OUT = join(ROOT, 'out');

const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

if (!existsSync(OUT)) {
  console.error('✖ out/ does not exist. Run `npm run build` first.');
  process.exit(1);
}

/* -------------------------------------------------------------------------- */
/* Expected routes, derived from the same sources as src/lib/routes.ts         */
/* -------------------------------------------------------------------------- */

const read = (p) => readFileSync(join(ROOT, p), 'utf8');

const sectionIds = [
  ...read('src/content/types.ts')
    .split('export const SECTION_IDS')[1]
    .split(']')[0]
    .matchAll(/'([a-z-]+)'/g),
].map((m) => m[1]);

const guideSources = [
  'src/content/guides/justice.ts',
  'src/content/guides/law-enforcement.ts',
  'src/content/guides/process.ts',
];

const guides = [];
for (const file of guideSources) {
  const contents = read(file);
  // Each guide record opens with `slug:` followed later by `section:` and `status:`.
  const records = contents.split(/\n  \{\n/).slice(1);
  for (const record of records) {
    const slug = record.match(/slug: '([a-z0-9-]+)'/)?.[1];
    const section = record.match(/section: '([a-z-]+)'/)?.[1];
    const status = record.match(/status: '([a-z-]+)'/)?.[1];
    if (slug && section && status === 'published') guides.push(`/${section}/${slug}`);
  }
}

const hubs = [
  '/countries',
  '/history',
  '/timeline',
  '/professions',
  '/institutions',
  '/glossary',
  '/comparisons',
  '/sources',
];

const platform = [
  '/about',
  '/mission',
  '/editorial-policy',
  '/corrections-policy',
  '/methodology',
  '/contact',
  '/privacy',
  '/terms',
  '/disclaimer',
];

const expectedRoutes = [
  '/',
  ...sectionIds.map((id) => `/${id}`),
  ...guides,
  ...hubs,
  ...platform,
];

const generatedFiles = ['sitemap.xml', 'robots.txt', 'llms.txt', 'feed.xml', '404.html'];

/* -------------------------------------------------------------------------- */
/* 1. Every registered route produced an HTML file                            */
/* -------------------------------------------------------------------------- */

const routeToFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

for (const route of expectedRoutes) {
  const file = join(OUT, routeToFile(route));
  if (!existsSync(file)) {
    fail(`route ${route} has no exported file (expected ${relative(ROOT, file)})`);
    continue;
  }
  if (statSync(file).size < 1000) {
    fail(`route ${route} exported an implausibly small file (${statSync(file).size} bytes)`);
  }
}

/* -------------------------------------------------------------------------- */
/* 2. Every exported HTML page corresponds to a registered route              */
/* -------------------------------------------------------------------------- */

const ignoredHtml = new Set(['404.html', '_not-found.html']);
const exportedHtml = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '_next') continue;
      walk(full);
    } else if (entry.name.endsWith('.html')) {
      exportedHtml.push(relative(OUT, full));
    }
  }
}
walk(OUT);

const expectedFiles = new Set(expectedRoutes.map(routeToFile));
for (const file of exportedHtml) {
  if (ignoredHtml.has(file)) continue;
  if (!expectedFiles.has(file)) {
    fail(`exported page ${file} is not in the route registry`);
  }
}

/* -------------------------------------------------------------------------- */
/* 3. Generated endpoints exist and are not empty                            */
/* -------------------------------------------------------------------------- */

for (const name of generatedFiles) {
  const file = join(OUT, name);
  if (!existsSync(file)) {
    fail(`generated file ${name} is missing`);
  } else if (statSync(file).size === 0) {
    fail(`generated file ${name} is empty`);
  }
}

/* -------------------------------------------------------------------------- */
/* 4. The sitemap advertises exactly the registered routes                    */
/* -------------------------------------------------------------------------- */

if (existsSync(join(OUT, 'sitemap.xml'))) {
  const sitemap = readFileSync(join(OUT, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const origin = 'https://justicecenterid.com';
  const sitemapPaths = new Set(urls.map((u) => u.replace(origin, '') || '/'));

  for (const route of expectedRoutes) {
    if (!sitemapPaths.has(route)) fail(`sitemap is missing route ${route}`);
  }
  for (const path of sitemapPaths) {
    if (!expectedRoutes.includes(path)) fail(`sitemap advertises unknown route ${path}`);
  }
  if (new Set(urls).size !== urls.length) fail('sitemap contains duplicate URLs');

  notes.push(`sitemap lists ${urls.length} URLs`);
}

/* -------------------------------------------------------------------------- */
/* 5. Canonical hygiene across every exported page                           */
/* -------------------------------------------------------------------------- */

const canonicals = new Map();
for (const file of exportedHtml) {
  if (ignoredHtml.has(file)) continue;
  const html = readFileSync(join(OUT, file), 'utf8');

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) {
    fail(`${file} has no canonical link`);
  } else {
    if (canonical.includes('://www.'))
      fail(`${file} canonical uses the www host: ${canonical}`);
    if (canonical !== 'https://justicecenterid.com' && canonical.endsWith('/')) {
      fail(`${file} canonical has a trailing slash: ${canonical}`);
    }
    const existing = canonicals.get(canonical);
    if (existing) fail(`duplicate canonical ${canonical} on ${existing} and ${file}`);
    canonicals.set(canonical, file);
  }

  const h1Count = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1Count !== 1) fail(`${file} has ${h1Count} <h1> elements (expected exactly 1)`);

  if (!html.includes('Skip to main content')) fail(`${file} has no skip link`);
  if (!html.includes('id="main"')) fail(`${file} has no <main id="main"> landmark`);
  if (!html.includes('application/ld+json')) fail(`${file} has no structured data`);
}

/* -------------------------------------------------------------------------- */
/* 6. No draft or placeholder content leaked into the output                 */
/* -------------------------------------------------------------------------- */

for (const file of exportedHtml) {
  const html = readFileSync(join(OUT, file), 'utf8');
  for (const marker of ['lorem ipsum', 'TODO:', 'FIXME', 'coming soon', 'Placeholder text']) {
    if (html.toLowerCase().includes(marker.toLowerCase())) {
      fail(`${file} contains placeholder marker "${marker}"`);
    }
  }
}

/* -------------------------------------------------------------------------- */

console.log(
  `Checked ${expectedRoutes.length} routes and ${exportedHtml.length} exported pages.`,
);
for (const note of notes) console.log(`  · ${note}`);

if (failures.length > 0) {
  console.error(`\n✖ ${failures.length} problem(s) with the exported output:\n`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log('✓ Exported output matches the route registry.');
