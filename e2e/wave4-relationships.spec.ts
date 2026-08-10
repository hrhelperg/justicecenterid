import { expect, test } from '@playwright/test';

/** Wave 4: the jurisdiction relationship cluster, against the exported output. */

const WAVE_4 = [
  '/law-enforcement/police-jurisdiction',
  '/law-enforcement/how-policing-is-divided-between-levels',
  '/law-enforcement/contract-policing',
  '/law-enforcement/police-command-and-coordination',
  '/law-enforcement/municipal-and-national-police',
  '/law-enforcement/local-police-governance',
  '/law-enforcement/sheriffs-and-city-police',
];

const COMPARATIVE = WAVE_4.filter((p) => !p.endsWith('police-jurisdiction'));

test.describe('pages render inside the global shell', () => {
  for (const path of WAVE_4) {
    test(`${path} renders with one h1, sources and the global chrome`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
      await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();

      /* Global-layer regression. */
      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
    });
  }
});

test.describe('comparative pages show where the pattern does not hold', () => {
  for (const path of COMPARATIVE) {
    test(`${path} renders a counterexample section`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page.getByRole('heading', { name: 'Where the pattern does not hold' }),
      ).toBeVisible();
    });
  }

  test('the levels page names Nigeria and quotes the constitutional prohibition', async ({
    page,
  }) => {
    await page.goto('/law-enforcement/how-policing-is-divided-between-levels');
    const section = page.locator('section', {
      has: page.getByRole('heading', { name: 'Where the pattern does not hold' }),
    });
    await expect(section).toContainText(/Nigeria/);
    await expect(section).toContainText(/no other police force shall be established/i);
    await expect(section.locator('a[href="/countries/nigeria"]')).toHaveCount(1);
  });

  test('contract policing uses Switzerland as the shared-service contrast', async ({
    page,
  }) => {
    await page.goto('/law-enforcement/contract-policing');
    const section = page.locator('section', {
      has: page.getByRole('heading', { name: 'Where the pattern does not hold' }),
    });
    await expect(section).toContainText(/Switzerland/);
    await expect(section.locator('a[href="/countries/switzerland"]')).toHaveCount(1);
  });
});

test.describe('scope is visible to a reader, not only in the data', () => {
  test('the sheriff page says on the page that it is US-scoped', async ({ page }) => {
    await page.goto('/law-enforcement/sheriffs-and-city-police');
    await expect(page.locator('main')).toContainText(/United States page/i);
    await expect(page.locator('main')).toContainText(/does not travel/i);
  });

  test('the jurisdiction page states it is not guidance for an encounter', async ({ page }) => {
    await page.goto('/law-enforcement/police-jurisdiction');
    await expect(page.locator('main')).toContainText(/not guidance for any encounter/i);
  });

  test('every page shows its review state and jurisdictional-variation section', async ({
    page,
  }) => {
    for (const path of WAVE_4) {
      await page.goto(path);
      await expect(
        page.getByRole('heading', { name: /How this varies between jurisdictions/i }),
      ).toBeVisible();
    }
  });
});

test.describe('the knowledge graph connects', () => {
  test('contract policing leads to Canada and to provincial police', async ({ page }) => {
    await page.goto('/law-enforcement/contract-policing');
    await expect(page.locator('a[href="/countries/canada"]').first()).toBeVisible();
    await page.locator('a[href="/institutions/provincial-police"]').first().click();
    await expect(page).toHaveURL(/\/institutions\/provincial-police$/);
  });

  test('the jurisdiction page leads to the levels page', async ({ page }) => {
    await page.goto('/law-enforcement/police-jurisdiction');
    await page
      .locator('a[href="/law-enforcement/how-policing-is-divided-between-levels"]')
      .first()
      .click();
    await expect(page).toHaveURL(/how-policing-is-divided-between-levels$/);
  });
});

test.describe('merged and rejected candidates 404', () => {
  for (const path of [
    '/law-enforcement/overlapping-police-jurisdiction',
    '/law-enforcement/police-agency-coordination',
    '/law-enforcement/shared-policing-services',
    '/law-enforcement/who-controls-local-police',
    '/law-enforcement/county-law-enforcement',
    '/law-enforcement/campus-police-jurisdiction',
  ]) {
    test(`${path} returns 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
    });
  }
});

test.describe('metadata', () => {
  test('each page has a unique apex canonical', async ({ page }) => {
    const seen = new Set<string>();
    for (const path of WAVE_4) {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);
      expect(seen.has(canonical!)).toBe(false);
      seen.add(canonical!);
    }
  });

  test('a relationship page emits valid Article JSON-LD with no government claim', async ({
    page,
  }) => {
    await page.goto('/law-enforcement/contract-policing');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
    expect(serialised).toContain(
      'https://justicecenterid.com/law-enforcement/contract-policing',
    );
    expect(serialised).not.toContain('GovernmentOrganization');
    expect(serialised).not.toContain('PoliceStation');
    expect(serialised).not.toContain('GovernmentService');
  });
});

test.describe('layout and keyboard', () => {
  test('no horizontal overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    for (const path of [
      '/law-enforcement/contract-policing',
      '/law-enforcement/sheriffs-and-city-police',
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
      '/law-enforcement/how-policing-is-divided-between-levels',
      '/law-enforcement/police-jurisdiction',
    ]) {
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows at 200% text`).toBeLessThanOrEqual(1);
    }
  });

  test('a Wave 4 page is reachable by keyboard from the skip link', async ({ page }) => {
    await page.goto('/law-enforcement/local-police-governance');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });
});
