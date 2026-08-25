import { expect, test } from '@playwright/test';

/** Wave 11: the defence section, against the exported output. */

const HUB = '/defence';
const PAGES = [
  '/defence/why-the-right-to-defence-matters',
  '/defence/right-to-counsel',
  '/defence/how-defence-is-funded',
  '/defence/what-defence-counsel-does',
  '/defence/defence-counsel-and-prosecutor',
  '/defence/access-to-the-case-file',
  '/defence/lawyer-client-confidentiality',
];

test.describe('the new section renders and lists its guides', () => {
  test('the hub renders and links to all seven guides', async ({ page }) => {
    const response = await page.goto(HUB);
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveCount(1);
    for (const path of PAGES) {
      await expect(page.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('the rejected hub spellings are not reachable', async ({ page }) => {
    for (const path of ['/defense', '/legal-defence', '/legal-defense']) {
      const response = await page.goto(path);
      expect(response?.status(), `${path} should not exist`).toBe(404);
    }
  });

  for (const path of PAGES) {
    test(`${path} renders with one h1, sources and the global chrome`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);

      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.getByRole('heading', { name: 'Sources' }).first()).toBeVisible();
      await expect(page.getByRole('navigation', { name: /breadcrumb/i })).toBeVisible();

      /* Global-layer regression. */
      await expect(page.getByText('HELPERG', { exact: true }).first()).toBeVisible();
      await expect(page.getByRole('button', { name: 'Cookie settings' })).toBeVisible();
    });
  }
});

test.describe('the findings survive rendering', () => {
  test('the three rights are distinguished on the page', async ({ page }) => {
    await page.goto('/defence/right-to-counsel');
    const main = page.locator('main');
    await expect(main).toContainText('right to consult a lawyer');
    await expect(main).toContainText('right to have counsel appointed');
    await expect(main).toContainText('right to have the state pay');
  });

  test('the German provision renders in the original', async ({ page }) => {
    await page.goto('/defence/right-to-counsel');
    await expect(page.locator('main')).toContainText(
      'in jeder Lage des Verfahrens des Beistandes eines Verteidigers bedienen',
    );
  });

  test('court appointment is not rendered as state employment', async ({ page }) => {
    await page.goto('/defence/how-defence-is-funded');
    const main = page.locator('main');
    await expect(main).toContainText('Court-appointed does not mean government-employed');
    await expect(main).toContainText('Rechtsanwalt');
    await expect(main).toContainText('avocat');
  });

  test('the Defensoria Pública keeps its constitutional standing', async ({ page }) => {
    await page.goto('/defence/how-defence-is-funded');
    const main = page.locator('main');
    await expect(main).toContainText('inamovibilidade');
    await expect(main).toContainText('permanent institution essential to the jurisdictional');
    await expect(main).not.toContainText('Brazilian public defenders');
  });

  test('file access renders the right, the limit and the floor', async ({ page }) => {
    await page.goto('/defence/access-to-the-case-file');
    const main = page.locator('main');
    await expect(main).toContainText('endanger the purpose of the investigation');
    await expect(main).toContainText('in der Regel ist insoweit Akteneinsicht zu gewähren');
  });

  test('confidentiality renders as bounded, not absolute', async ({ page }) => {
    await page.goto('/defence/lawyer-client-confidentiality');
    const main = page.locator('main');
    await expect(main).toContainText('auch wenn er sich nicht auf freiem Fuß befindet');
    await expect(main).toContainText('confined to named offences');
  });

  test('the cluster links out to prosecution and the glossary', async ({ page }) => {
    await page.goto('/defence/access-to-the-case-file');
    await expect(page.locator('a[href="/glossary/disclosure"]').first()).toBeVisible();
    await page.goto('/defence/why-the-right-to-defence-matters');
    await expect(
      page.locator('a[href="/prosecution/prosecution-and-presumption-of-innocence"]').first(),
    ).toBeVisible();
  });
});

test.describe('metadata, structured data, layout and keyboard', () => {
  for (const path of [HUB, ...PAGES]) {
    test(`${path} has a unique canonical and models no legal service`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      expect(serialised).not.toContain('LegalService');
      expect(serialised).not.toContain('"@type":"Attorney"');
      expect(serialised).not.toContain('GovernmentOrganization');
    });

    test(`${path} has no horizontal overflow at 320px or at 200% text`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 720 });
      await page.goto(path);
      let overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, 'overflows at 320px').toBeLessThanOrEqual(1);

      await page.setViewportSize({ width: 1280, height: 900 });
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
      overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, 'overflows at 200% text').toBeLessThanOrEqual(1);
    });

    test(`${path} is reachable by keyboard from the skip link`, async ({ page }) => {
      await page.goto(path);
      await page.keyboard.press('Tab');
      await expect(page.getByRole('link', { name: /Skip to main content/i })).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page.locator('main')).toBeFocused();
    });
  }

  test('long German statutory quotations fit at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/defence/access-to-the-case-file');
    await expect(page.locator('main')).toContainText(
      'in der Regel ist insoweit Akteneinsicht zu gewähren',
    );
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow, 'German quotation overflows at 320px').toBeLessThanOrEqual(1);
  });

  test('Portuguese constitutional terms fit at 320px', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/defence/how-defence-is-funded');
    await expect(page.locator('main')).toContainText('inamovibilidade');
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(1);
  });

  test('the section appears in the sitemap', async ({ page }) => {
    const response = await page.goto('/sitemap.xml');
    expect(response?.status()).toBe(200);
    const body = (await response?.text()) ?? '';
    expect(body).toContain('https://justicecenterid.com/defence');
    for (const path of PAGES) {
      expect(body, `${path} missing from sitemap`).toContain(
        `https://justicecenterid.com${path}`,
      );
    }
  });
});
