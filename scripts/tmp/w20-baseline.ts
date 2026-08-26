import { ALL_GUIDES, PUBLISHED_GUIDES, guidePath } from '../../src/content/guides';
import { GLOSSARY, PUBLISHED_GLOSSARY } from '../../src/content/glossary';
import { INSTITUTION_TYPES, PUBLISHED_INSTITUTION_TYPES } from '../../src/content/institutions';
import { PROFESSIONS, PUBLISHED_PROFESSIONS, ROUTED_PROFESSIONS } from '../../src/content/professions';
import { COUNTRY_DOSSIERS, PUBLISHED_DOSSIERS } from '../../src/content/dossiers/index';
import { SOURCES } from '../../src/content/sources';
import { HISTORY_ENTRIES, PUBLISHED_HISTORY } from '../../src/content/history';
import { PUBLIC_ROUTE_PATHS } from '../../src/content/public-routes';

const line = (k: string, v: unknown) => console.log(`${k.padEnd(34)}${v}`);

console.log('== registry counts ==');
line('public route paths', PUBLIC_ROUTE_PATHS.length);
line('guides (all / published)', `${ALL_GUIDES.length} / ${PUBLISHED_GUIDES.length}`);
line('institution types (all / pub)', `${INSTITUTION_TYPES.length} / ${PUBLISHED_INSTITUTION_TYPES.length}`);
line('professions (all/pub/routed)', `${PROFESSIONS.length} / ${PUBLISHED_PROFESSIONS.length} / ${ROUTED_PROFESSIONS.length}`);
line('glossary (all / published)', `${GLOSSARY.length} / ${PUBLISHED_GLOSSARY.length}`);
line('country dossiers (all / pub)', `${COUNTRY_DOSSIERS.length} / ${PUBLISHED_DOSSIERS.length}`);
line('source records', SOURCES.length);
line('history entries (all / pub)', `${HISTORY_ENTRIES.length} / ${PUBLISHED_HISTORY.length}`);

console.log('\n== guides by section ==');
const bySection = new Map<string, string[]>();
for (const g of PUBLISHED_GUIDES) {
  const list = bySection.get(g.section) ?? [];
  list.push(g.slug);
  bySection.set(g.section, list);
}
for (const [section, slugs] of [...bySection].sort()) line('  ' + section, slugs.length);

console.log('\n== /public-safety inventory ==');
const psRoutes = PUBLIC_ROUTE_PATHS.filter((p) => p.startsWith('/public-safety'));
line('routes under /public-safety', psRoutes.length);
for (const r of psRoutes) console.log('    ' + r);
const psGuides = PUBLISHED_GUIDES.filter((g) => g.section === 'public-safety');
line('guides in public-safety', psGuides.length);
for (const g of psGuides) console.log('    ' + guidePath(g));

console.log('\n== glossary terms routed ==');
const routedTerms = GLOSSARY.filter((t) => PUBLIC_ROUTE_PATHS.includes(`/glossary/${t.slug}`));
line('routed glossary terms', routedTerms.length);
console.log('    ' + routedTerms.map((t) => t.slug).join(', '));

console.log('\n== route paths by top segment ==');
const seg = new Map<string, number>();
for (const p of PUBLIC_ROUTE_PATHS) {
  const s = '/' + (p.split('/')[1] ?? '');
  seg.set(s, (seg.get(s) ?? 0) + 1);
}
for (const [s, n] of [...seg].sort((a, b) => b[1] - a[1])) line('  ' + s, n);
