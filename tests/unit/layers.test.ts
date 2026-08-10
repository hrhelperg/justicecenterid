import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

/**
 * The stacking-layer system.
 *
 * Two global overlay layers were added in the pre-deployment phase — the ecosystem bar
 * and the consent UI — on top of a sticky header and a skip link. That is four things
 * competing for the top of the viewport, which is exactly the situation that produces
 * `z-index: 999999` in a codebase six months later.
 *
 * These tests make the layer names load-bearing: every z-utility in the application must
 * resolve to a declared token, the tokens must be ordered the way the documented overlay
 * hierarchy says they are, and the skip link must outrank everything.
 */

const ROOT = fileURLToPath(new URL('../../', import.meta.url));
const CSS = readFileSync(join(ROOT, 'src/app/globals.css'), 'utf8');

function declaredLayers(): Map<string, number> {
  const layers = new Map<string, number>();
  for (const match of CSS.matchAll(/--z-index-([a-z-]+):\s*(\d+);/g)) {
    layers.set(match[1]!, Number(match[2]!));
  }
  return layers;
}

/** Every .tsx file under src — the only files that carry className strings. */
function componentFiles(dir: string, found: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) componentFiles(path, found);
    else if (entry.endsWith('.tsx')) found.push(path);
  }
  return found;
}

describe('stacking layers are declared, not invented', () => {
  const layers = declaredLayers();

  it('declares the six documented layers', () => {
    expect([...layers.keys()].sort()).toEqual([
      'consent',
      'content',
      'ecosystem',
      'nav',
      'overlay',
      'skip',
    ]);
  });

  it('orders them the way docs/architecture/overlay-hierarchy.md states', () => {
    const order = ['content', 'nav', 'ecosystem', 'consent', 'overlay', 'skip'];
    const values = order.map((name) => layers.get(name)!);
    for (let i = 1; i < values.length; i += 1) {
      expect(
        values[i]! > values[i - 1]!,
        `${order[i]} (${values[i]}) must sit above ${order[i - 1]} (${values[i - 1]})`,
      ).toBe(true);
    }
  });

  it('puts the skip link above every other layer', () => {
    const skip = layers.get('skip')!;
    for (const [name, value] of layers) {
      if (name === 'skip') continue;
      expect(skip, `skip must outrank ${name}`).toBeGreaterThan(value);
    }
  });

  /*
   * The real point of this file. A z-utility that is not a declared layer name — a bare
   * number like z-50, or an arbitrary value like z-[9999] — is a failure, because it
   * silently opts out of the hierarchy the other tests are checking.
   */
  it('uses no z-index utility outside the declared layer names', () => {
    const offenders: string[] = [];
    for (const file of componentFiles(join(ROOT, 'src'))) {
      const source = readFileSync(file, 'utf8');
      for (const match of source.matchAll(/\bz-(\[[^\]]+\]|[a-z0-9-]+)/g)) {
        const token = match[1]!;
        /* `z-index` in prose is the CSS property, not a Tailwind utility. */
        if (token === 'index') continue;
        if (!layers.has(token)) {
          offenders.push(`${file.replace(ROOT, '')}: z-${token}`);
        }
      }
    }
    expect(offenders, `undeclared z-index utilities:\n${offenders.join('\n')}`).toEqual([]);
  });

  it('actually finds z-utilities to check, so the previous test cannot pass vacuously', () => {
    let count = 0;
    for (const file of componentFiles(join(ROOT, 'src'))) {
      count += [...readFileSync(file, 'utf8').matchAll(/\bz-[a-z0-9-]+/g)].length;
    }
    expect(count).toBeGreaterThanOrEqual(4);
  });
});
