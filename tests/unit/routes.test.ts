import { describe, expect, it } from 'vitest';
import { PUBLISHED_GUIDES, guidePath } from '@/content/guides';
import { SECTIONS } from '@/content/sections';
import { buildBreadcrumbs } from '@/lib/breadcrumbs';
import { ROUTES, getRoute } from '@/lib/routes';
import { absoluteUrl } from '@/lib/site';

/** Rule 13, plus route-registry integrity. */

describe('route registry', () => {
  it('every route path is unique', () => {
    const paths = ROUTES.map((route) => route.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('no two routes produce the same canonical URL', () => {
    const canonicals = ROUTES.map((route) => absoluteUrl(route.path));
    expect(new Set(canonicals).size).toBe(canonicals.length);
  });

  it('every route path is lowercase, hyphenated, and has no trailing slash', () => {
    for (const route of ROUTES) {
      if (route.path === '/') continue;
      expect(route.path, `${route.path} must start with /`).toMatch(/^\//);
      expect(route.path, `${route.path} must not end with /`).not.toMatch(/\/$/);
      expect(route.path, `${route.path} must be lowercase ASCII with hyphens`).toMatch(
        /^\/[a-z0-9-]+(\/[a-z0-9-]+)*$/,
      );
    }
  });

  it('every non-home route resolves its parent chain to the home page', () => {
    for (const route of ROUTES) {
      if (route.path === '/') continue;
      const crumbs = buildBreadcrumbs(route.path);
      expect(crumbs[0]?.href, `${route.path} breadcrumb does not start at home`).toBe('/');
      expect(crumbs.at(-1)?.href, `${route.path} breadcrumb does not end at itself`).toBe(
        route.path,
      );
    }
  });

  it('every section has a route', () => {
    for (const section of SECTIONS) {
      expect(
        getRoute(`/${section.id}`),
        `missing route for section ${section.id}`,
      ).toBeDefined();
    }
  });

  it('every published guide has a route nested under its section', () => {
    for (const guide of PUBLISHED_GUIDES) {
      const route = getRoute(guidePath(guide));
      expect(route, `missing route for guide ${guide.slug}`).toBeDefined();
      expect(route?.parent).toBe(`/${guide.section}`);
      expect(route?.lastModified).toBe(guide.updatedOn);
    }
  });

  it('canonical URLs use the apex origin with no trailing slash', () => {
    expect(absoluteUrl('/')).toBe('https://justicecenterid.com');
    expect(absoluteUrl('/justice')).toBe('https://justicecenterid.com/justice');
    expect(absoluteUrl('/justice/')).toBe('https://justicecenterid.com/justice');
  });
});
