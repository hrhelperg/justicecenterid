/**
 * Internal-link graph audit.
 *
 * Wave 15 needs to know what the corpus actually looks like as a graph before adding to it, so
 * this reads the EXPORTED HTML rather than the content modules. The rendered page is what a
 * reader and a crawler traverse: it includes links produced by `related`, `relatedInstitutions`,
 * navigation and cross-references that no single content field holds.
 *
 * Reports orphans, weakly linked pages, one-directional pairs and repeated anchor text.
 * Read-only. Run after `npm run build`.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const OUT = 'out';

function htmlFiles(dir) {
  const found = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) found.push(...htmlFiles(full));
    else if (entry.endsWith('.html')) found.push(full);
  }
  return found;
}

function routeOf(file) {
  const rel = '/' + relative(OUT, file).replace(/\.html$/, '');
  return rel === '/index' ? '/' : rel.replace(/\/index$/, '');
}

/**
 * Links inside <main> only.
 *
 * Site chrome — header, footer, the section nav — links every page to a dozen others, so
 * counting it would report every page as well connected and the audit would find nothing. What
 * matters here is editorial linking, which is what sits in main.
 */
function mainLinks(html) {
  const main = /<main[^>]*>([\s\S]*?)<\/main>/i.exec(html);
  const scope = main ? main[1] : '';
  const links = [];
  const re = /<a\s+[^>]*href="(\/[^"#?]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(scope))) {
    const href = m[1].replace(/\/$/, '') || '/';
    const text = m[2]
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    links.push({ href, text });
  }
  return links;
}

const files = htmlFiles(OUT);
const pages = new Map();
for (const file of files) {
  const route = routeOf(file);
  pages.set(route, mainLinks(readFileSync(file, 'utf8')));
}

const inbound = new Map([...pages.keys()].map((r) => [r, new Set()]));
const anchorsTo = new Map();
for (const [from, links] of pages) {
  for (const { href, text } of links) {
    if (href === from) continue;
    if (!inbound.has(href)) continue;
    inbound.get(href).add(from);
    if (!anchorsTo.has(href)) anchorsTo.set(href, []);
    anchorsTo.get(href).push({ from, text });
  }
}

/*
 * Wave 18 added /history/{slug}. It was omitted from this list on the first run after that wave,
 * which meant seven new pages were audited as though they did not exist — the same failure mode
 * the source-usage test had, where a check that does not know about a content family reports the
 * content as fine rather than reporting itself as incomplete.
 */
const CONTENT =
  /^\/(justice|courts|law-enforcement|investigations|prosecution|defence|corrections|forensics|public-safety|institutions|professions|glossary|countries|history)\//;
const contentRoutes = [...pages.keys()].filter((r) => CONTENT.test(r)).sort();

const orphans = contentRoutes.filter((r) => inbound.get(r).size === 0);
const weak = contentRoutes.filter((r) => {
  const n = inbound.get(r).size;
  return n > 0 && n < 2;
});

const outDegree = new Map(
  contentRoutes.map((r) => [
    r,
    new Set(
      pages
        .get(r)
        .map((l) => l.href)
        .filter((h) => h !== r && pages.has(h)),
    ).size,
  ]),
);
const deadEnds = contentRoutes.filter((r) => outDegree.get(r) === 0);

const oneWay = [];
for (const from of contentRoutes) {
  for (const to of new Set(pages.get(from).map((l) => l.href))) {
    if (!CONTENT.test(to) || to === from) continue;
    const back = pages.get(to);
    if (back && !back.some((l) => l.href === from)) oneWay.push(`${from} -> ${to}`);
  }
}

const repeatedAnchor = [];
for (const [target, list] of anchorsTo) {
  if (!CONTENT.test(target)) continue;
  const counts = new Map();
  for (const { text } of list) counts.set(text, (counts.get(text) ?? 0) + 1);
  for (const [text, n] of counts) {
    if (n >= 8 && text.length > 0) repeatedAnchor.push(`${n}x "${text}" -> ${target}`);
  }
}

const report = {
  pages: pages.size,
  contentRoutes: contentRoutes.length,
  orphans,
  weaklyLinked: weak,
  deadEnds,
  oneWayCount: oneWay.length,
  repeatedAnchor: repeatedAnchor.sort(),
  mostLinked: contentRoutes
    .map((r) => [r, inbound.get(r).size])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15),
};

console.log(JSON.stringify(report, null, 2));
