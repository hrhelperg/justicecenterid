import { describe, expect, it } from 'vitest';
import { ALL_GUIDES } from '@/content/guides';
import type { Block } from '@/content/types';
import { extractInternalLinks } from '@/lib/content';
import { isKnownRoute } from '@/lib/routes';

/** Rule 11: every internal link in content resolves to a route in the registry. */

function allBlocks(): { slug: string; blocks: Block[] }[] {
  return ALL_GUIDES.map((guide) => ({
    slug: guide.slug,
    blocks: [
      ...guide.definition,
      ...guide.whyItExists,
      ...guide.howItWorks,
      ...guide.variation,
      ...guide.rightsAndAccountability,
      ...(guide.furtherReading ?? []),
    ],
  }));
}

describe('internal links', () => {
  it.each(allBlocks().map((entry) => [entry.slug, entry.blocks] as const))(
    'every internal link in guide %s resolves to a known route',
    (slug, blocks) => {
      for (const href of extractInternalLinks(blocks)) {
        const path = href.split('#')[0] ?? href;
        expect(isKnownRoute(path), `${slug} links to unknown route: ${href}`).toBe(true);
      }
    },
  );

  it('guides actually contain internal links', () => {
    const total = allBlocks().reduce(
      (count, entry) => count + extractInternalLinks(entry.blocks).length,
      0,
    );
    expect(total).toBeGreaterThan(0);
  });
});
