import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { COUNTRY_MODULES } from '@/content/country-modules';
import { COUNTRY_DOSSIERS, deferredModules, publishedModules } from '@/content/dossiers';
import { formatDate } from '@/lib/content';

/**
 * Ten-country semantic regression.
 *
 * Not a brittle full-HTML snapshot — it extracts the properties that matter (canonical, title,
 * single h1, facts date, published/deferred modules, the independence disclosure, the
 * jurisdiction-table caption, the JSON-LD subject) and checks each against values DERIVED from
 * the registry, so it survives copy edits but fails on drift, leakage, or a wrong country name.
 * It is the standing guard for audit findings F1 (caption leak) and F2/F3 (module drift).
 */

const ORIGIN = 'https://justicecenterid.com';
const HUB = (slug: string) => `out/countries/${slug}.html`;

function html(file: string): string {
  if (!existsSync(file)) throw new Error(`run \`npm run build\` before this test (${file})`);
  return readFileSync(file, 'utf8').replaceAll('<!-- -->', '');
}

const ALL_NAMES = COUNTRY_DOSSIERS.map((d) => d.name);

describe.each(COUNTRY_DOSSIERS.map((d) => [d.slug, d] as const))(
  'country hub regression: %s',
  (slug, dossier) => {
    const page = () => html(HUB(slug));
    const inName = dossier.articleName ?? dossier.name;

    it('has the canonical for its own route and a single h1 naming the country', () => {
      const h = page();
      expect(h).toContain(`<link rel="canonical" href="${ORIGIN}/countries/${slug}"`);
      expect((h.match(/<h1[\s>]/g) ?? []).length).toBe(1);
      expect(h).toMatch(new RegExp(`<h1[^>]*>Justice and public safety in ${inName}`));
    });

    it('titles the page with the country, not another', () => {
      const title = page().match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
      expect(title).toContain(dossier.name);
    });

    it('renders the recorded facts-verified date', () => {
      if (!dossier.factsVerifiedOn) return;
      expect(page()).toContain(formatDate(dossier.factsVerifiedOn));
    });

    it('captions the jurisdiction table with ITS OWN country (F1 regression)', () => {
      const captions = [...page().matchAll(/modelled ([A-Za-z. '’-]+?) jurisdiction/g)].map(
        (m) => m[1],
      );
      expect(captions.length, 'jurisdiction-table caption present').toBeGreaterThan(0);
      for (const named of captions) {
        expect(named, `caption names ${named}, expected ${dossier.name}`).toBe(dossier.name);
      }
    });

    it('shows the independence disclosure and leaks no other country into it', () => {
      const h = page();
      expect(h).toMatch(/is not .*?(?:public|government) body/);
      // No OTHER country's name appears in a "modelled X jurisdiction" caption.
      for (const other of ALL_NAMES) {
        if (other === dossier.name) continue;
        expect(h.includes(`modelled ${other} jurisdiction`)).toBe(false);
      }
    });

    it('links exactly its published modules and lists its deferred ones as gaps', () => {
      const h = page();
      for (const m of publishedModules(dossier)) {
        const def = COUNTRY_MODULES.find((d) => d.id === m.moduleId)!;
        expect(h, `missing module link ${def.slug}`).toContain(
          `/countries/${slug}/${def.slug}`,
        );
      }
      if (deferredModules(dossier).length > 0) {
        expect(h).toContain('Not researched');
      }
    });

    it('names itself as the JSON-LD CollectionPage subject', () => {
      const blocks = [
        ...page().matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
      ];
      const graphs = blocks.map((b) => JSON.parse(b[1] ?? '{}'));
      const nodes = graphs.flatMap((g) => g['@graph'] ?? [g]);
      const collection = nodes.find((n) => n['@type'] === 'CollectionPage');
      expect(collection, 'a CollectionPage node').toBeDefined();
      expect(collection.name).toBe(`Justice and public safety in ${inName}`);
      expect(collection.url).toBe(`${ORIGIN}/countries/${slug}`);
    });
  },
);
