import { expect, test } from '@playwright/test';

/**
 * Runs against the exported static output in `out/`, served by the webServer in
 * playwright.config.ts — so these tests exercise the exact artefact that would be published,
 * not a dev server.
 */

const PAGES = [
  { path: '/', h1: 'Understanding justice worldwide' },
  { path: '/justice', h1: 'Justice' },
  { path: '/law-enforcement', h1: 'Law Enforcement' },
  { path: '/courts', h1: 'Courts' },
  { path: '/investigations', h1: 'Investigations' },
  { path: '/forensics', h1: 'Forensics' },
  { path: '/countries', h1: 'Countries' },
  { path: '/history', h1: 'History' },
  { path: '/glossary', h1: 'Glossary' },
  { path: '/about', h1: 'About JusticeCenterID' },
  { path: '/mission', h1: 'Mission' },
  { path: '/editorial-policy', h1: 'Editorial policy' },
  { path: '/methodology', h1: 'Research methodology' },
  { path: '/sources', h1: 'Research and Sources' },
  { path: '/corrections-policy', h1: 'Corrections policy' },
  { path: '/disclaimer', h1: 'Disclaimer' },
  { path: '/privacy', h1: 'Privacy' },
  { path: '/terms', h1: 'Terms of use' },
  { path: '/contact', h1: 'Contact' },
  { path: '/justice/what-is-due-process', h1: 'What is due process?' },
];

test.describe('pages render', () => {
  for (const page of PAGES) {
    test(`${page.path} renders with exactly one h1`, async ({ page: browserPage }) => {
      const response = await browserPage.goto(page.path);
      expect(response?.status()).toBe(200);

      const h1 = browserPage.locator('h1');
      await expect(h1).toHaveCount(1);
      await expect(h1).toHaveText(page.h1);

      await expect(browserPage.locator('main#main')).toHaveCount(1);
      await expect(browserPage.locator('header').first()).toBeVisible();
      await expect(browserPage.locator('footer')).toBeVisible();
    });
  }
});

test.describe('metadata', () => {
  test('home page has canonical, description, and structured data', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://justicecenterid.com',
    );
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description?.length).toBeGreaterThan(50);

    const ldJson = await page
      .locator('script[type="application/ld+json"]')
      .first()
      .textContent();
    const data = JSON.parse(ldJson ?? '{}');
    const types = (data['@graph'] as { '@type': string }[]).map((node) => node['@type']);
    expect(types).toContain('Organization');
    expect(types).toContain('WebSite');
  });

  test('a guide emits Article structured data with citations', async ({ page }) => {
    await page.goto('/forensics/what-is-forensic-science');

    const scripts = await page.locator('script[type="application/ld+json"]').allTextContents();
    const nodes = scripts.flatMap(
      (script) => (JSON.parse(script)['@graph'] ?? []) as Record<string, unknown>[],
    );

    const article = nodes.find((node) => node['@type'] === 'Article');
    expect(article).toBeTruthy();
    expect(Array.isArray(article?.citation)).toBe(true);
    expect((article?.citation as unknown[]).length).toBeGreaterThan(0);

    const breadcrumb = nodes.find((node) => node['@type'] === 'BreadcrumbList');
    expect(breadcrumb).toBeTruthy();
  });

  test('titles follow the brand template', async ({ page }) => {
    await page.goto('/courts');
    await expect(page).toHaveTitle('Courts — JusticeCenterID');
  });
});

test.describe('404', () => {
  test('unknown paths serve the 404 page, which is noindex', async ({ page }) => {
    const response = await page.goto('/this-page-does-not-exist');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText('We could not find that page');

    // Every robots directive on the error page must be noindex — an indexable 404 would
    // create duplicate thin pages in the index.
    const robots = await page
      .locator('meta[name="robots"]')
      .evaluateAll((tags) => tags.map((tag) => tag.getAttribute('content')));
    expect(robots.length).toBeGreaterThan(0);
    for (const directive of robots) {
      expect(directive).toContain('noindex');
    }
  });
});

test.describe('generated endpoints', () => {
  test('robots.txt points at the sitemap', async ({ request }) => {
    const response = await request.get('/robots.txt');
    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('Sitemap: https://justicecenterid.com/sitemap.xml');
  });

  test('sitemap.xml lists the home page and uses only apex, non-slashed URLs', async ({
    request,
  }) => {
    const body = await (await request.get('/sitemap.xml')).text();
    // The sitemaps.org XML namespace legitimately contains "www.", so check the <loc>
    // values rather than the whole document.
    const locations = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((match) => match[1])
      .filter((location): location is string => location !== undefined);

    expect(locations).toContain('https://justicecenterid.com');
    expect(locations.length).toBeGreaterThan(30);
    for (const location of locations) {
      expect(location.startsWith('https://justicecenterid.com')).toBe(true);
      expect(location).not.toContain('://www.');
      expect(location.endsWith('/')).toBe(false);
    }
    expect(new Set(locations).size).toBe(locations.length);
  });

  test('llms.txt states the non-affiliation and no-legal-advice position', async ({
    request,
  }) => {
    const body = await (await request.get('/llms.txt')).text();
    expect(body).toContain('not a government body');
    expect(body).toContain('does not provide legal advice');
  });

  test('feed.xml is valid RSS with permalink guids', async ({ request }) => {
    const body = await (await request.get('/feed.xml')).text();
    expect(body).toContain('<rss version="2.0"');
    expect(body).toContain('isPermaLink="true"');
  });
});

test.describe('editorial surfaces', () => {
  test('a guide shows review state, sources, and the not-legal-advice notice', async ({
    page,
  }) => {
    await page.goto('/prosecution/what-does-a-prosecutor-do');

    await expect(page.getByText('Fact-checked').first()).toBeVisible();
    await expect(page.getByText('Last reviewed').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
    await expect(page.getByText('It does not provide legal advice').first()).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'How this varies between jurisdictions' }),
    ).toBeVisible();
  });

  test('the countries hub reports researched coverage honestly and links to it', async ({
    page,
  }) => {
    await page.goto('/countries');

    // Coverage is derived from the registry. The France pilot made the previous literal
    // "No country has been researched yet" false, so the assertion is now on the behaviour:
    // the researched country is named and linked, and the rest are still marked planned.
    await expect(page.getByRole('link', { name: 'France', exact: true }).first()).toBeVisible();
    await expect(page.getByText(/coverage status/i).first()).toBeVisible();
  });

  test('a deferred France module is not reachable and is disclosed as a gap', async ({
    page,
  }) => {
    const response = await page.goto('/countries/france/corrections');
    expect(response?.status()).toBe(404);

    await page.goto('/countries/france');
    await expect(page.getByText('What has not been researched')).toBeVisible();
    await expect(page.getByText('Corrections and probation').first()).toBeVisible();
  });
});
