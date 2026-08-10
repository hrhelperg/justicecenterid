import { expect, test } from '@playwright/test';

/** Wave 5: police oversight institutions, against the exported output. */

const PAGES = [
  '/institutions/independent-police-complaints-body',
  '/institutions/ombuds-and-rights-institution',
  '/law-enforcement/who-investigates-police',
];

test.describe('Wave 5 pages render inside the global shell', () => {
  for (const path of PAGES) {
    test(`${path} renders with one h1, sources and global chrome`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
      await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();
      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
    });
  }

  test('each carries a counterexample section', async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(path);
      await expect(
        page.getByRole('heading', { name: 'Where the pattern does not hold' }),
      ).toBeVisible();
    }
  });
});

test.describe('temporal integrity is visible to a reader', () => {
  test('the complaints-body page names Fiosru as current and GSOC as replaced', async ({
    page,
  }) => {
    await page.goto('/institutions/independent-police-complaints-body');
    const main = page.locator('main');
    await expect(main).toContainText(/Fiosrú/);
    await expect(main).toContainText(/2 April 2025/);
    await expect(main).toContainText(
      /replaced the Garda Síochána Ombudsman Commission|became Fiosrú/,
    );
  });

  test('the ombuds page states its mandate is general, not police-specific', async ({
    page,
  }) => {
    await page.goto('/institutions/ombuds-and-rights-institution');
    await expect(page.locator('main')).toContainText(/general mandate/i);
  });
});

test.describe('the knowledge graph connects', () => {
  test('the accountability guide links to the new family', async ({ page }) => {
    await page.goto('/law-enforcement/how-police-are-held-to-account');
    await page
      .locator('a[href="/institutions/independent-police-complaints-body"]')
      .first()
      .click();
    await expect(page).toHaveURL(/independent-police-complaints-body$/);
  });

  test('an oversight page leads to its country dossier', async ({ page }) => {
    await page.goto('/institutions/independent-police-complaints-body');
    await page.locator('a[href="/countries/new-zealand"]').first().click();
    await expect(page).toHaveURL(/\/countries\/new-zealand$/);
  });
});

test.describe('deferred candidates 404', () => {
  for (const path of [
    '/institutions/internal-affairs',
    '/institutions/police-inspectorate',
    '/institutions/police-ombudsman',
    '/institutions/anti-corruption-commission',
  ]) {
    test(`${path} returns 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
    });
  }
});

test.describe('metadata and layout', () => {
  test('unique apex canonicals, no government schema', async ({ page }) => {
    const seen = new Set<string>();
    for (const path of PAGES) {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);
      expect(seen.has(canonical!)).toBe(false);
      seen.add(canonical!);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      expect(serialised).not.toContain('GovernmentOrganization');
      expect(serialised).not.toContain('GovernmentService');
      expect(serialised).not.toContain('PoliceStation');
    }
  });

  test('no horizontal overflow at 320px and at 200% text', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/institutions/independent-police-complaints-body');
    let overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);

    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/law-enforcement/who-investigates-police');
    await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
    overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('reachable by keyboard from the skip link', async ({ page }) => {
    await page.goto('/institutions/ombuds-and-rights-institution');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });
});
