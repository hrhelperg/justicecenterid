/**
 * A minimal Node module-resolution hook so build tooling can import the TypeScript content
 * registry directly.
 *
 * Node 22.6+ strips TypeScript types natively, so `import('../src/content/public-routes.ts')`
 * executes — but Node's ESM resolver requires explicit file extensions, while the application
 * (bundled by Turbopack) imports extensionlessly. This hook bridges that one gap by trying
 * `.ts` and `/index.ts` for relative specifiers that have no extension.
 *
 * The alternative was to add `.ts` to every relative import across the content layer purely to
 * satisfy a validation script, which would have let tooling dictate application style. This
 * keeps the cost in the tooling, where it belongs.
 *
 * Deliberately narrow: only relative specifiers, only when the file actually exists, and it
 * defers to the default resolver in every other case.
 */
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const HAS_EXTENSION = /\.[cm]?[jt]sx?$|\.json$/;

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !HAS_EXTENSION.test(specifier) && context.parentURL) {
    const base = new URL(specifier, context.parentURL);
    for (const candidate of ['.ts', '/index.ts', '.tsx']) {
      const url = new URL(base.href + candidate);
      if (existsSync(fileURLToPath(url))) {
        return nextResolve(url.href, context);
      }
    }
  }
  return nextResolve(specifier, context);
}
