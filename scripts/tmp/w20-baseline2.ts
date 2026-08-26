import { RESTRICTED_PATTERNS } from '../../src/content/restricted-claims';
import { SCHEDULED_CHANGES } from '../../src/content/scheduled-changes';
import { ALL_GUIDES, PUBLISHED_GUIDES, guidePath } from '../../src/content/guides';
import { SOURCES } from '../../src/content/sources';
import type { Block, Guide } from '../../src/content/types';

console.log('restricted patterns  :', RESTRICTED_PATTERNS.length);
console.log('scheduled changes    :', SCHEDULED_CHANGES.length);
for (const s of SCHEDULED_CHANGES) console.log('   ', JSON.stringify(s).slice(0, 150));

console.log('\n== sources by jurisdiction ==');
const byJur = new Map<string, number>();
for (const s of SOURCES) byJur.set(s.jurisdiction ?? '(none)', (byJur.get(s.jurisdiction ?? '(none)') ?? 0) + 1);
console.log([...byJur].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join('  '));

console.log('\n== existing emergency / public-safety references across the corpus ==');
const pb = (g: Guide): Block[] => [...(g.definition ?? []), ...(g.whyItExists ?? []), ...(g.howItWorks ?? []), ...(g.variation ?? []), ...(g.rightsAndAccountability ?? []), ...(g.furtherReading ?? [])];
const tx = (l: readonly Block[]) => l.flatMap((b) => b.kind === 'paragraph' ? [b.text] : b.kind === 'list' ? b.items : b.kind === 'callout' ? [b.title, b.text] : b.items.flatMap((i) => [i.term, i.description]));
const TERMS = [/\bstate of emergency\b/i, /\bemergency power/i, /\bcivil protection\b/i, /\bcivil defence\b/i, /\bemergency management\b/i, /\bdisaster\b/i, /\bderogat/i, /\bcurfew\b/i, /\bmartial law\b/i, /\bpublic safety\b/i, /\bpublic order\b/i, /\bfire (?:and rescue|service|brigade)\b/i, /\bmilitary\b/i, /\barmed forces\b/i, /\bproportionalit/i, /\bnecessity\b/i];
for (const t of TERMS) {
  const hits: string[] = [];
  for (const g of PUBLISHED_GUIDES) {
    const all = [g.title, g.summary, g.question, ...tx(pb(g)), ...g.misconceptions.flatMap((m) => `${m.claim} ${m.reality}`), ...(g.uncertainty ?? [])].join('\n');
    if (t.test(all)) hits.push(guidePath(g));
  }
  console.log(String(t).padEnd(34), hits.length, hits.length && hits.length <= 6 ? hits.join(' ') : hits.slice(0, 5).join(' ') + (hits.length > 5 ? ' …' : ''));
}
