import { expect, test } from '@playwright/test';

/**
 * The Wave 2 reference routes, against the exported static output.
 *
 * The assertions worth having here are the ones a unit test cannot make: that the hub is an
 * index rather than a copy of its children, that an unrouted record is genuinely unreachable
 * at a URL, and that the global chrome added in the previous phase still wraps pages that
 * did not exist when it was built.
 */

const INSTITUTIONS = [
  '/institutions/municipal-police',
  '/institutions/national-police',
  '/institutions/gendarmerie',
  '/institutions/federal-investigative-agency',
  '/institutions/transport-police',
  '/institutions/prosecution-service',
  '/institutions/correctional-service',
];

const PROFESSIONS = [
  '/professions/patrol-officer',
  '/professions/detective',
  '/professions/prosecutor',
  '/professions/judge',
  '/professions/forensic-scientist',
  '/professions/corrections-officer',
];

test.describe('reference pages render', () => {
  for (const path of [...INSTITUTIONS, ...PROFESSIONS]) {
    test(`${path} renders with one h1, breadcrumbs, sources and the global chrome`, async ({
      page,
    }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);

      /* Breadcrumbs are derived from the route registry, so this also checks the parent. */
      const crumbs = page.getByRole('navigation', { name: /breadcrumb/i });
      await expect(crumbs).toBeVisible();

      /* Every routed record must show its sources on the page, not only in markup. */
      await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();

      /* Part J: no new page may bypass SiteShell. */
      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
      await expect(page.locator('main')).toBeVisible();
    });
  }
});

test.describe('the hubs are indexes, not duplicates', () => {
  test('/institutions links to every routed type and does not repeat their detail', async ({
    page,
  }) => {
    await page.goto('/institutions');

    for (const path of INSTITUTIONS) {
      await expect(page.locator(`a[href="${path}"]`)).toHaveCount(1);
    }

    /*
     * The detail sections belong to the detail pages. If the hub still carried them it
     * would compete with all seven — the collision this phase created for itself.
     */
    await expect(page.getByRole('heading', { name: 'How authority reaches it' })).toHaveCount(
      0,
    );
    await expect(page.getByRole('heading', { name: 'What examines it' })).toHaveCount(0);
    await expect(page.getByRole('heading', { name: 'Worked examples' })).toHaveCount(0);
  });

  test('/institutions explains why two types have no page', async ({ page }) => {
    await page.goto('/institutions');
    await expect(page.getByText(/Summaries pending research/i)).toBeVisible();
    await expect(page.getByText(/no border, customs, coast-guard or maritime/i)).toBeVisible();

    /* Named as text, never as a link. */
    await expect(page.locator('a[href="/institutions/coast-guard"]')).toHaveCount(0);
    await expect(
      page.locator('a[href="/institutions/border-and-customs-authority"]'),
    ).toHaveCount(0);
  });

  test('/professions links to every routed role', async ({ page }) => {
    await page.goto('/professions');
    for (const path of PROFESSIONS) {
      await expect(page.locator(`a[href="${path}"]`)).toHaveCount(1);
    }
  });
});

test.describe('unrouted records are unreachable', () => {
  for (const path of [
    '/institutions/coast-guard',
    '/institutions/border-and-customs-authority',
    '/institutions/police',
    '/institutions/highway-patrol',
    '/professions/police-officer',
    '/professions/sheriff',
  ]) {
    test(`${path} returns 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
    });
  }
});

test.describe('the knowledge graph is navigable', () => {
  test('a country example leads from an institution to its dossier', async ({ page }) => {
    await page.goto('/institutions/gendarmerie');

    const franceLink = page.locator('a[href="/countries/france"]').first();
    await expect(franceLink).toBeVisible();
    await franceLink.click();

    await expect(page).toHaveURL(/\/countries\/france$/);
    await expect(page.locator('h1')).toHaveCount(1);
  });

  test('an institution leads to a role and back to an institution', async ({ page }) => {
    await page.goto('/institutions/federal-investigative-agency');

    await page.locator('a[href="/professions/detective"]').first().click();
    await expect(page).toHaveURL(/\/professions\/detective$/);

    await page.locator('a[href="/institutions/national-police"]').first().click();
    await expect(page).toHaveURL(/\/institutions\/national-police$/);
  });
});

test.describe('layout holds', () => {
  test('no horizontal overflow at 320px on a reference page', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    for (const path of [
      '/institutions/transport-police',
      '/professions/judge',
      '/institutions',
    ]) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows at 320px`).toBeLessThanOrEqual(1);
    }
  });

  test('no horizontal overflow at 200% text size', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    for (const path of [
      '/institutions/federal-investigative-agency',
      '/professions/prosecutor',
    ]) {
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows at 200% text`).toBeLessThanOrEqual(1);
    }
  });

  test('a reference page is reachable by keyboard from the skip link', async ({ page }) => {
    await page.goto('/professions/detective');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });
});

test.describe('metadata', () => {
  test('each reference page carries a unique canonical on the apex', async ({ page }) => {
    const seen = new Set<string>();
    for (const path of [...INSTITUTIONS, ...PROFESSIONS]) {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);
      expect(seen.has(canonical!), `duplicate canonical: ${canonical}`).toBe(false);
      seen.add(canonical!);
    }
  });

  test('a reference page emits valid JSON-LD naming the production origin', async ({
    page,
  }) => {
    await page.goto('/institutions/gendarmerie');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(blocks.length).toBeGreaterThan(0);

    const parsed = blocks.map((block) => JSON.parse(block));
    const serialised = JSON.stringify(parsed);
    expect(serialised).toContain('https://justicecenterid.com/institutions/gendarmerie');
    expect(serialised).toContain('BreadcrumbList');
    /* The platform is an independent publisher and must never claim otherwise. */
    expect(serialised).not.toContain('GovernmentOrganization');
  });
});
