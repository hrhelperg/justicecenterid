import { expect, test } from '@playwright/test';

/**
 * Wave 33: police mobility — what the law permits a police driver to do.
 *
 * The rendered page is where the safety boundary actually matters. A guard over content data can
 * be satisfied while a template, a related-links block or a breadcrumb puts something else in front
 * of a reader, and it is the reader — and the search engine reading for them — that the programme's
 * prohibitions are written about. So the performance, pursuit, evasion, tracking, radio and siting
 * checks are repeated here against what a browser paints.
 *
 * The structured-data refusal carries the wave's own risk: a page about police vehicles is exactly
 * the shape a generator models as `Vehicle` or `Car`, which would describe this platform as
 * publishing a vehicle catalogue rather than a legal framework.
 */

const PAGES = [
  '/law-enforcement/when-police-may-depart-from-traffic-rules',
  '/law-enforcement/who-authorises-emergency-signals',
];

async function schemaTypes(page: import('@playwright/test').Page): Promise<string[]> {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
  const types: string[] = [];
  const walk = (node: unknown): void => {
    if (Array.isArray(node)) return node.forEach(walk);
    if (!node || typeof node !== 'object') return;
    for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
      if (key === '@type') {
        if (typeof value === 'string') types.push(value);
        else if (Array.isArray(value))
          types.push(...value.filter((v): v is string => typeof v === 'string'));
      } else walk(value);
    }
  };
  blocks.forEach((b) => walk(JSON.parse(b)));
  return types;
}

const IS_MISCONCEPTION = /^\s*Common belief:/i;
const DENIAL =
  /\b(?:no|not|never|nothing|none|neither|nor|must not|rather than|deliberately|outside|without)\b/i;
/*
 * Wave 29 established that rendered misconceptions are labelled "Common belief:" and must be
 * skipped, because a belief the page exists to correct is not something the page asserts. That fix
 * assumed the label and the claim shared a line. They do not: the template renders
 *
 *   Common belief:
 *   The officer driving decides when to use lights and siren.
 *   In practice:
 *   ...
 *
 * as separate lines, so filtering the label alone leaves the claim behind — and the claim is the
 * part that reads as an assertion. This drops the label AND the line it introduces.
 */
async function assertedSentences(page: import('@playwright/test').Page): Promise<string[]> {
  const text = await page.locator('main').innerText();
  const lines = text.split(/\n+/);
  const kept: string[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = (lines[i] ?? '').trim();
    if (line === '') continue;
    if (IS_MISCONCEPTION.test(line)) {
      /* Skip the label and the belief it introduces. */
      i += 1;
      continue;
    }
    kept.push(line);
  }
  return (
    kept
      .flatMap((line) => line.split(/(?<=[.!?])\s+/))
      /*
       * A question is not an assertion. Every guide opens with the reader's question, and this
       * page's is "Does a police driver decide to switch on the lights and siren?" — which the
       * page exists to answer no. Treating it as a claim inverts the page's meaning.
       */
      .filter((s) => !s.trim().endsWith('?'))
      .filter((s) => !DENIAL.test(s))
  );
}

test.describe('the safety boundary holds in rendered output', () => {
  for (const path of PAGES) {
    test(`${path} renders no performance, pursuit or evasion material`, async ({ page }) => {
      await page.goto(path);
      const asserted = await assertedSentences(page);
      const FORBIDDEN =
        /\b(?:top speed|\d+\s?(?:mph|km\/h|kph)|horsepower|0-60|faster than|outrun|outpace|pursuit tactic|ramming|stinger|spike strip|box(?:ing)? in|evade|evading|shake off)\b/i;
      const offenders = asserted.filter((s) => FORBIDDEN.test(s));
      expect(offenders, `${path} renders performance or pursuit material`).toEqual([]);
    });

    test(`${path} renders no recognition, tracking or radio detail`, async ({ page }) => {
      await page.goto(path);
      const asserted = await assertedSentences(page);
      const FORBIDDEN =
        /\b(?:how to (?:spot|identify|recognise)|telltale|giveaway|ANPR|number plate recognition|tracker|jamming|\d+(?:\.\d+)?\s?(?:MHz|kHz|GHz)|scanner)\b/i;
      const offenders = asserted.filter((s) => FORBIDDEN.test(s));
      expect(offenders, `${path} renders recognition or countermeasure material`).toEqual([]);
    });

    test(`${path} renders no operational siting or shift pattern`, async ({ page }) => {
      await page.goto(path);
      const asserted = await assertedSentences(page);
      const offenders = asserted.filter((s) =>
        /\b(?:based at|stationed at|operates from|patrol route|shift pattern|fleet map)\b/i.test(
          s,
        ),
      );
      expect(offenders, `${path} renders operational siting`).toEqual([]);
    });
  }
});

test.describe('the pages are correctly described to machines', () => {
  for (const path of PAGES) {
    test(`${path} models no vehicle, product or police body`, async ({ page }) => {
      await page.goto(path);
      expect(await page.locator('link[rel="canonical"]').getAttribute('href')).toBe(
        `https://justicecenterid.com${path}`,
      );
      const types = await schemaTypes(page);
      expect(types.length, `${path} emits no structured data`).toBeGreaterThan(0);
      for (const forbidden of [
        'Vehicle',
        'Car',
        'Motorcycle',
        'ProductModel',
        'Product',
        'Offer',
        'GovernmentOrganization',
        'PoliceStation',
        'EmergencyService',
        'HowTo',
        'FAQPage',
      ]) {
        expect(types, `${path} models ${forbidden}`).not.toContain(forbidden);
      }
    });

    test(`${path} renders no C1 control characters`, async ({ page }) => {
      await page.goto(path);
      const body = await page.locator('main').innerText();
      const c1 = [...body]
        .filter((c) => c.charCodeAt(0) >= 0x80 && c.charCodeAt(0) <= 0x9f)
        .map((c) => `U+${c.charCodeAt(0).toString(16).toUpperCase()}`);
      expect(c1, `${path} renders characters left by a decoding error`).toEqual([]);
    });

    test(`${path} loads no third-party image or media`, async ({ page }) => {
      /*
       * The privacy page tells readers this site "loads no fonts, scripts, or images from other
       * companies", and the image policy says no image is loaded from a third-party host at
       * runtime. Wave 33 is the wave that would have broken both if it had shipped pictures.
       */
      await page.goto(path);
      const external = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img, video, audio, iframe, source'))
          .map((el) => el.getAttribute('src') ?? '')
          .filter((src) => /^https?:\/\//i.test(src)),
      );
      expect(external, `${path} loads third-party media`).toEqual([]);
    });

    test(`${path} links out only to official sources`, async ({ page }) => {
      await page.goto(path);
      const hrefs = await page
        .locator('main')
        .locator('a[href^="http"]')
        .evaluateAll((els) => els.map((e) => (e as HTMLAnchorElement).href));
      expect(hrefs.length, 'no source is linked').toBeGreaterThan(0);
      for (const href of hrefs) {
        expect(href, `not https: ${href}`).toMatch(/^https:\/\//);
        expect(href, `links to a commerce host: ${href}`).not.toMatch(
          /\b(?:shop|store|buy|amazon|ebay|dealer|autotrader)\b/i,
        );
      }
    });

    test(`${path} has one h1, ordered headings and a description`, async ({ page }) => {
      await page.goto(path);
      await expect(page.locator('main h1')).toHaveCount(1);
      const levels = await page.evaluate(() =>
        Array.from(document.querySelectorAll('main h1, main h2, main h3, main h4')).map((h) =>
          Number(h.tagName.slice(1)),
        ),
      );
      expect(levels.length).toBeGreaterThan(1);
      for (let i = 1; i < levels.length; i += 1) {
        expect(
          (levels[i] ?? 0) - (levels[i - 1] ?? 0),
          `heading jump at ${i}`,
        ).toBeLessThanOrEqual(1);
      }
      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect(description).toBeTruthy();
      expect(description!.length).toBeGreaterThan(60);
    });

    test(`${path} has no horizontal overflow at 320px or 200% text`, async ({ page }) => {
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

test.describe('the findings survive rendering', () => {
  test('the Dutch exemption renders as a list with its conditions', async ({ page }) => {
    await page.goto('/law-enforcement/when-police-may-depart-from-traffic-rules');
    const main = page.locator('main');
    await expect(main).toContainText('doorrijden bij een rood verkeerslicht');
    await expect(main).toContainText('de verkeersveiligheid mag niet in gevaar komen');
  });

  test('the English section renders with its conditional wording intact', async ({ page }) => {
    await page.goto('/law-enforcement/when-police-may-depart-from-traffic-rules');
    await expect(page.locator('main')).toContainText(
      'would be likely to hinder the use of the vehicle for the purpose for which it is being used on that occasion',
    );
  });

  test('the authorisation rule renders, and the driver is not given the decision', async ({
    page,
  }) => {
    await page.goto('/law-enforcement/who-authorises-emergency-signals');
    await expect(page.locator('main')).toContainText(
      'uitsluitend met toestemming van de meldkamer',
    );
    const asserted = await assertedSentences(page);
    const offenders = asserted.filter(
      (s) =>
        /\b(?:driver|officer|crew)\b/i.test(s) &&
        /\b(?:decides?|chooses?) (?:when )?to (?:use|switch on|activate)\b/i.test(s),
    );
    expect(offenders, 'the page gives the signal decision to the driver').toEqual([]);
  });
});

test.describe('the cluster is joined and claims no new route family', () => {
  test('pages that predate this wave link into it', async ({ page }) => {
    const EDGES: [string, string][] = [
      [
        '/law-enforcement/police-vehicles-and-what-they-are-for',
        '/law-enforcement/when-police-may-depart-from-traffic-rules',
      ],
      [
        '/public-safety/taking-the-call-and-sending-the-unit',
        '/law-enforcement/who-authorises-emergency-signals',
      ],
    ];
    for (const [from, to] of EDGES) {
      await page.goto(from);
      await expect(
        page.locator('main').locator(`a[href="${to}"]`).first(),
        `${from} does not link into the cluster at ${to}`,
      ).toBeVisible();
    }
  });

  test('no vehicles, fleet or aviation route family exists', async ({ page }) => {
    for (const rejected of [
      '/vehicles',
      '/mobility',
      '/fleet',
      '/aviation',
      '/law-enforcement/police-helicopters',
      '/law-enforcement/how-to-spot-an-unmarked-police-car',
    ]) {
      const response = await page.goto(rejected);
      expect(response?.status(), `${rejected} did not 404`).toBe(404);
    }
  });
});
