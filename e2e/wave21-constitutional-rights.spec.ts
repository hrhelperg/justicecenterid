import { expect, test } from '@playwright/test';

/**
 * Wave 21: constitutional rights, state powers and fundamental safeguards.
 *
 * Asserted against the exported production artefact. Four things are checked here that the
 * content tests cannot see because they need a rendered page: that the constitutional quotations
 * in six languages survive a 320px viewport, that no page is modelled as a legal service or a
 * government body, that the two sections whose character this wave changes still read as one
 * corpus, and that the cross-section links the cannibalization audit relies on actually resolve
 * in the built output rather than only in the registry.
 */

const JUSTICE = [
  '/justice/how-a-right-can-be-limited',
  '/justice/what-proportionality-requires',
  '/justice/who-a-constitutional-right-belongs-to',
  '/justice/who-fundamental-rights-bind',
  '/justice/international-rights-and-domestic-law',
  '/justice/how-soon-a-detained-person-sees-a-judge',
];

const INVESTIGATIONS = [
  '/investigations/what-privacy-protects-in-law',
  '/investigations/searching-a-home',
  '/investigations/intercepting-communications',
];

const DEFENCE = ['/defence/the-right-to-silence', '/defence/equality-of-arms'];
const COURTS = ['/courts/why-hearings-are-public'];

const ALL = [...JUSTICE, ...INVESTIGATIONS, ...DEFENCE, ...COURTS];

test.describe('the twelve routes render and are correctly described', () => {
  for (const path of ALL) {
    test(`${path} has a unique canonical and models no institution`, async ({ page }) => {
      await page.goto(path);
      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(canonical).toBe(`https://justicecenterid.com${path}`);

      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
      const serialised = JSON.stringify(blocks.map((b) => JSON.parse(b)));
      /*
       * The temptation is different here from Wave 20's. These pages are about rights and about
       * legal procedure, so the schema types that would misdescribe them are the ones a generator
       * reaches for when it sees legal vocabulary.
       */
      expect(serialised).not.toContain('LegalService');
      expect(serialised).not.toContain('GovernmentOrganization');
      expect(serialised).not.toContain('Legislation');
      expect(serialised).not.toContain('Courthouse');
      expect(serialised).not.toContain('FAQPage');
      expect(serialised).not.toContain('HowTo');
      expect(serialised).not.toContain('AggregateRating');
      expect(serialised).not.toContain('Review');
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
  }
});

test.describe('constitutional quotations in six languages survive a narrow viewport', () => {
  /*
   * This wave quotes German, Dutch, Spanish, Portuguese, Czech and French-derived legal terms,
   * several inside single unbroken clauses. Dutch and German compounds are the classic cause of a
   * 320px overflow, and `Fernmeldeverkehr`, `brief- en telecommunicatiegeheim` and
   * `Bundesverfassung` are the longest tokens the corpus has ever carried.
   */
  const CASES: [string, string][] = [
    ['/justice/how-a-right-can-be-limited', 'Kerngehalt der Grundrechte'],
    ['/justice/how-a-right-can-be-limited', 'Einschränkungen von Grundrechten'],
    ['/justice/how-a-right-can-be-limited', 'contenido esencial'],
    ['/justice/what-proportionality-requires', 'verhältnismässig'],
    ['/justice/who-a-constitutional-right-belongs-to', 'Alle Deutschen genießen Freizügigkeit'],
    ['/justice/who-a-constitutional-right-belongs-to', 'estrangeiros residentes no País'],
    ['/justice/who-a-constitutional-right-belongs-to', 'Los españoles'],
    ['/justice/international-rights-and-domestic-law', 'vinden geen toepassing'],
    ['/justice/how-soon-a-detained-person-sees-a-judge', 'setenta y dos horas'],
    ['/investigations/what-privacy-protects-in-law', 'Fernmeldeverkehr'],
    ['/investigations/what-privacy-protects-in-law', 'persoonlijke levenssfeer'],
    ['/investigations/searching-a-home', 'Die Wohnung ist unverletzlich'],
    ['/investigations/searching-a-home', 'asilo inviolável do indivíduo'],
    ['/investigations/intercepting-communications', 'brief- en telecommunicatiegeheim'],
    ['/defence/the-right-to-silence', 'permanecer calado'],
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
  test('the investigations hub lists its three new guides', async ({ page }) => {
    await page.goto('/investigations');
    const main = page.locator('main');
    for (const path of INVESTIGATIONS) {
      await expect(main.locator(`a[href="${path}"]`).first()).toBeVisible();
    }
  });

  test('the pages the audit defers to are reachable from the pages that defer', async ({
    page,
  }) => {
    const EDGES: [string, string][] = [
      ['/justice/how-a-right-can-be-limited', '/justice/which-rights-can-never-be-suspended'],
      ['/justice/what-proportionality-requires', '/law-enforcement/police-use-of-force'],
      ['/justice/how-soon-a-detained-person-sees-a-judge', '/justice/reviewing-detention'],
      ['/defence/equality-of-arms', '/justice/equality-before-the-law'],
      [
        '/investigations/searching-a-home',
        '/justice/what-happens-to-unlawfully-obtained-evidence',
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

  test('the backlinks added to existing flagship pages resolve', async ({ page }) => {
    const EDGES: [string, string][] = [
      ['/justice/which-rights-can-never-be-suspended', '/justice/how-a-right-can-be-limited'],
      ['/justice/limits-on-public-power', '/justice/how-a-right-can-be-limited'],
      ['/justice/reviewing-detention', '/justice/how-soon-a-detained-person-sees-a-judge'],
      ['/law-enforcement/police-use-of-force', '/justice/what-proportionality-requires'],
      ['/justice/equality-before-the-law', '/defence/equality-of-arms'],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link back to ${to}`,
      ).toBeVisible();
    }
  });

  test('every new page carries its scope or safety callout to the reader', async ({ page }) => {
    for (const path of [...INVESTIGATIONS, '/defence/the-right-to-silence']) {
      await page.goto(path);
      await expect(page.locator('main')).toContainText(/not legal advice/i);
    }
  });

  test('a route the audit rejected really 404s', async ({ page }) => {
    const response = await page.goto('/investigations/search-and-seizure');
    expect(response?.status(), 'a rejected slug must not resolve').toBe(404);
    await expect(page.locator('body')).not.toContainText('Everyone has the right to privacy');
  });
});
