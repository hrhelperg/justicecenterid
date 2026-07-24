/**
 * Active-navigation matching.
 *
 * Deliberately kept in its own module with NO content imports. `SiteNav` is the site's only
 * client component, and anything it imports is pulled into the client bundle along with that
 * module's entire import graph.
 *
 * This function previously lived in `lib/navigation.ts`, which imports `SECTIONS` from
 * `content/sections`. Importing it from the client therefore dragged the whole section
 * registry — every section summary, intro, and keyIdeas block — into a 30 KB JavaScript
 * chunk downloaded on every page, despite the architecture rule that no client component may
 * pull in a content module. Keeping the helper content-free is what makes that rule hold.
 */
export function isActivePath(currentPath: string, href: string): boolean {
  if (href === '/') return currentPath === '/';
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
