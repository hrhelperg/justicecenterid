import { expect, test } from '@playwright/test';

/**
 * Wave 3: glossary detail routes and the sub-national policing tier.
 */

const GLOSSARY = [
  '/glossary/judicial-independence',
  '/glossary/appeal',
  '/glossary/judicial-review',
  '/glossary/chain-of-custody',
  '/glossary/disclosure',
];

const SUBNATIONAL = [
  '/institutions/state-police',
  '/institutions/provincial-police',
  '/institutions/prefectural-police',
  '/institutions/autonomous-community-police',
];

test.describe('Wave 3 pages render inside the global shell', () => {
  for (const path of [...GLOSSARY, ...SUBNATIONAL]) {
    test(`${path} renders with one h1, sources and the global chrome`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.getByRole('heading', { name: 'Sources' })).toBeVisible();
      await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();

      /* Part J regression: no new page may bypass SiteShell. */
      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
    });
  }
});

test.describe('sub-national pages refuse false universalisation', () => {
  for (const path of SUBNATIONAL) {
    test(`${path} shows where the pattern does not hold`, async ({ page }) => {
      await page.goto(path);
      await expect(
        page.getByRole('heading', { name: 'Where the pattern does not hold' }),
      ).toBeVisible();
    });
  }

  test('state police names Nigeria as the counterexample and quotes the prohibition', async ({
    page,
  }) => {
    await page.goto('/institutions/state-police');
    const section = page.locator('section', {
      has: page.getByRole('heading', { name: 'Where the pattern does not hold' }),
    });
    await expect(section).toContainText(/Nigeria/);
    await expect(section).toContainText(/no other police force shall be established/i);
    await expect(section.locator('a[href="/countries/nigeria"]')).toHaveCount(1);
  });

  test('prefectural police denies equivalence with federal state police', async ({ page }) => {
    await page.goto('/institutions/prefectural-police');
    await expect(page.locator('main')).toContainText(/not sovereign/i);
  });
});

test.describe('the glossary hub links routed terms and not the rest', () => {
  test('links exactly the five routed terms', async ({ page }) => {
    await page.goto('/glossary');
    for (const path of GLOSSARY) {
      await expect(page.locator(`a[href="${path}"]`)).toHaveCount(1);
    }
    /* Terms owned by an existing guide must not gain a competing link. */
    for (const slug of ['due-process', 'rule-of-law', 'gendarmerie', 'public-safety']) {
      await expect(page.locator(`a[href="/glossary/${slug}"]`)).toHaveCount(0);
    }
  });

  test('explains why most terms are entries rather than pages', async ({ page }) => {
    await page.goto('/glossary');
    await expect(page.locator('main')).toContainText(
      /entries rather than pages|already answers the same question/i,
    );
  });

  test('still shows definitions for hub-only terms', async ({ page }) => {
    await page.goto('/glossary');
    await expect(page.locator('#due-process')).toBeVisible();
    await expect(page.locator('#due-process')).toContainText(
      /fair and established procedures/i,
    );
  });
});

test.describe('hub-only and rejected slugs 404', () => {
  for (const path of [
    '/glossary/due-process',
    '/glossary/rule-of-law',
    '/glossary/gendarmerie',
    '/glossary/public-safety',
    '/glossary/evidence',
    '/institutions/highway-patrol',
    '/institutions/regional-police',
  ]) {
    test(`${path} returns 404`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(404);
    });
  }
});

test.describe('structured data and canonicals', () => {
  test('a glossary page emits a DefinedTerm bound to the glossary set', async ({ page }) => {
    await page.goto('/glossary/judicial-review');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsed = blocks.map((b) => JSON.parse(b));
    const serialised = JSON.stringify(parsed);

    expect(serialised).toContain('DefinedTerm');
    expect(serialised).toContain('https://justicecenterid.com/glossary/judicial-review');
    expect(serialised).toContain('inDefinedTermSet');
    expect(serialised).not.toContain('GovernmentOrganization');
  });

  test('every Wave 3 page has a unique apex canonical', async ({ page }) => {
    const seen = new Set<string>();
    for (const path of [...GLOSSARY, ...SUBNATIONAL]) {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);
      expect(seen.has(canonical!)).toBe(false);
      seen.add(canonical!);
    }
  });
});

test.describe('layout and keyboard', () => {
  test('no horizontal overflow at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    for (const path of ['/glossary/disclosure', '/institutions/state-police', '/glossary']) {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows at 320px`).toBeLessThanOrEqual(1);
    }
  });

  test('no horizontal overflow at 200% text size', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    for (const path of ['/institutions/autonomous-community-police', '/glossary/appeal']) {
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${path} overflows at 200% text`).toBeLessThanOrEqual(1);
    }
  });

  test('a Wave 3 page is reachable by keyboard from the skip link', async ({ page }) => {
    await page.goto('/institutions/provincial-police');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
  });
});

test.describe('the knowledge graph connects', () => {
  test('a sub-national page leads to its country dossier', async ({ page }) => {
    await page.goto('/institutions/provincial-police');
    await page.locator('a[href="/countries/canada"]').first().click();
    await expect(page).toHaveURL(/\/countries\/canada$/);
  });

  test('a glossary page leads to a profession page', async ({ page }) => {
    await page.goto('/glossary/judicial-independence');
    await page.locator('a[href="/professions/judge"]').first().click();
    await expect(page).toHaveURL(/\/professions\/judge$/);
  });
});
