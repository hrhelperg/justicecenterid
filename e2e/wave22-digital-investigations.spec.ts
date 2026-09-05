import { expect, test } from '@playwright/test';

/**
 * Wave 22: digital investigations, surveillance and investigative authority.
 *
 * Asserted against the exported production artefact. Four things are checked here that the content
 * tests cannot see because they need a rendered page: that the long German and Spanish statutory
 * terms survive a 320px viewport, that no page is modelled as a technology product or a government
 * body, that the boundary links the cannibalization audit relies on actually resolve in the built
 * output, and that the routes the audit rejected really 404 rather than being masked by a fallback.
 */

const WAVE_22 = [
  '/investigations/legal-authority-and-technical-capability',
  '/investigations/device-seizure-and-device-examination',
  '/investigations/interception-and-stored-data',
  '/investigations/content-and-communications-data',
  '/investigations/preserving-data-and-producing-it',
  '/investigations/who-authorises-a-digital-investigative-measure',
  '/investigations/scope-duration-and-notification',
];

test.describe('the seven routes render and are correctly described', () => {
  for (const path of WAVE_22) {
    test(`${path} has a unique canonical and models no product or institution`, async ({
      page,
    }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      /*
       * The temptation on this cluster is different again. These pages are about technology and
       * law enforcement, so the schema types that would misdescribe them are product and agency
       * types a generator reaches for when it sees either vocabulary.
       */
      for (const forbidden of [
        'SoftwareApplication',
        'Product',
        'Service',
        'GovernmentOrganization',
        'GovernmentService',
        'LegalService',
        'Legislation',
        'PoliceStation',
        'FAQPage',
        'HowTo',
        'AggregateRating',
        'Review',
      ]) {
        expect(serialised, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} has exactly one h1 and a sane heading order`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main h1')).toHaveCount(1);
      const levels = await page.evaluate(() =>
        Array.from(document.querySelectorAll('main h1, main h2, main h3, main h4')).map((h) =>
          Number(h.tagName.slice(1)),
        ),
      );
      expect(levels.length).toBeGreaterThan(1);
      for (let i = 1; i < levels.length; i += 1) {
        const step = (levels[i] ?? 0) - (levels[i - 1] ?? 0);
        expect(step, `heading level jumps at index ${i}`).toBeLessThanOrEqual(1);
      }
    });

    test(`${path} has a description that is not the title`, async ({ page }) => {
      await page.goto(path);
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      const title = await page.title();
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(60);
      expect(description).not.toBe(title);
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

    test(`${path} carries its scope callout to the reader`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(/not legal advice/i);
    });
  }
});

test.describe('long statutory terms survive a narrow viewport', () => {
  /*
   * German legal compounds are the longest single tokens the corpus carries — Telekommunikations-
   * überwachung, Bestandsdatenauskunft, Ermittlungsergebnisse, Oberlandesgericht — and Spanish
   * statutory phrases are the longest unbroken clauses. Each is checked on the page that carries it.
   */
  const CASES: [string, string][] = [
    [
      '/investigations/legal-authority-and-technical-capability',
      'despejar sospechas sin base objetiva',
    ],
    ['/investigations/device-seizure-and-device-examination', 'Beschlagnahme'],
    ['/investigations/device-seizure-and-device-examination', 'Durchsicht'],
    ['/investigations/device-seizure-and-device-examination', 'Staatsanwaltschaft'],
    ['/investigations/interception-and-stored-data', 'Telekommunikation'],
    ['/investigations/content-and-communications-data', 'Verkehrsdaten'],
    ['/investigations/content-and-communications-data', 'Bestandsdaten'],
    ['/investigations/who-authorises-a-digital-investigative-measure', 'Oberlandesgericht'],
    ['/investigations/who-authorises-a-digital-investigative-measure', 'Ermittlungsergebnisse'],
    ['/investigations/scope-duration-and-notification', 'erheblich mitbetroffenen Personen'],
    [
      '/investigations/scope-duration-and-notification',
      'cualquier otro afectado por la medida',
    ],
    ['/investigations/scope-duration-and-notification', 'cesará a todos los efectos'],
  ];

  for (const [path, phrase] of CASES) {
    test(`${phrase.slice(0, 34)}… fits at 320px on ${path}`, async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 720 });
      await page.goto(path);
      await expect(page.locator('main')).toContainText(phrase);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `"${phrase}" overflows at 320px`).toBeLessThanOrEqual(1);
    });
  }
});

test.describe('the cluster is joined to the corpus, not bolted onto it', () => {
  test('the investigations hub lists all seven new guides', async ({ page }) => {
    await page.goto('/investigations');
    const main = page.locator('main');
    for (const path of WAVE_22) {
      await expect(main.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('each page links to the layer that owns the question it declines', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/investigations/legal-authority-and-technical-capability',
        '/investigations/what-privacy-protects-in-law',
      ],
      [
        '/investigations/device-seizure-and-device-examination',
        '/forensics/evidence-integrity-and-admissibility',
      ],
      [
        '/investigations/interception-and-stored-data',
        '/investigations/intercepting-communications',
      ],
      [
        '/investigations/scope-duration-and-notification',
        '/justice/what-happens-to-unlawfully-obtained-evidence',
      ],
      [
        '/investigations/who-authorises-a-digital-investigative-measure',
        '/investigations/investigative-jurisdiction',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link to ${to}`,
      ).toBeVisible();
    }
  });

  test('the Wave 21 pages that signposted this layer now link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/investigations/intercepting-communications',
        '/investigations/interception-and-stored-data',
      ],
      [
        '/investigations/searching-a-home',
        '/investigations/device-seizure-and-device-examination',
      ],
      [
        '/investigations/what-privacy-protects-in-law',
        '/investigations/legal-authority-and-technical-capability',
      ],
      [
        '/forensics/evidence-integrity-and-admissibility',
        '/investigations/device-seizure-and-device-examination',
      ],
      [
        '/justice/what-happens-to-unlawfully-obtained-evidence',
        '/investigations/scope-duration-and-notification',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link back to ${to}`,
      ).toBeVisible();
    }
  });

  test('routes the audit rejected really 404, with no fallback masking', async ({ page }) => {
    for (const rejected of [
      '/investigations/search-and-seizure',
      '/investigations/what-is-covert-surveillance',
      '/investigations/cross-border-digital-evidence',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} must not resolve`).toBe(404);
      await expect(page.locator('body')).not.toContainText('Durchsicht');
    }
  });
});
