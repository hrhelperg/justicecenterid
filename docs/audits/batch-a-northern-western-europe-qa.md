# Batch A — Northern & Western Europe: QA and summary

The first authored country batch on the scaling framework: the Netherlands, Belgium, Denmark,
Norway, Sweden and Finland. Branch `feat/batch-a-northern-western-europe`, stacked on
`feat/country-scaling-framework`.

## Verdict: ready

Six countries published, each through the publication gate, verified from primary sources and an
independent adversarial fact-check pass. Two evidence-driven schema outcomes, both reuse-validating;
no fabrication.

## What was built

| Country     | Slug          | Published modules | Restricted claim (SPACE I 2024 density) | Distinctive feature                                                                                |
| ----------- | ------------- | ----------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Netherlands | `netherlands` | 8                 | 93.6 (under)                            | OM inside the judiciary but under the minister; no judicial review of statutes (art. 120)          |
| Belgium     | `belgium`     | 8                 | 112.7 (over)                            | Federal state, but justice is a **federal** competence — the inverse of Germany                    |
| Denmark     | `denmark`     | 8                 | 93.9 (under)                            | **Integrated** police + prosecution (the district Police Commissioner is both)                     |
| Norway      | `norway`      | 8                 | 83.1 (under)                            | Prosecution only the **King in Council** may instruct; police-integrated investigation             |
| Sweden      | `sweden`      | 8                 | 104.9 (over)                            | Constitutional prohibition on **ministerstyre** (no case-level ministerial direction)              |
| Finland     | `finland`     | 8                 | 102.8 (over)                            | Twin apex courts; two guardians of legality; **Åland** autonomy (validates `autonomous-community`) |

Each country: 8 published modules (justice-system, law-enforcement, courts, prosecution,
investigations, corrections, oversight, sources) + 4 deferred (forensics, border-and-customs,
history, timeline). No public sub-national page (Åland is a jurisdiction record only).

## Model findings — two evidence-driven schema outcomes, both reuse

Batch A added **no new field, level, or scope value.** The two model-pressure countries both
_validated_ existing abstractions by repetition:

1. **Belgium — the inverse of Germany.** A federal state (Constitution art. 1) whose justice
   functions are federal competences. Modelled as one `federal` record with every function `own` and
   every `legislativeCompetence` `exclusive-federal` — the mirror image of Germany's `shared`. The
   distinction between "federal and justice-devolved" and "federal but justice-centralised" is
   carried entirely by the scope values. No Community/Region record (none does justice work).
2. **Finland — Åland validates `autonomous-community`.** Åland is an autonomous, legislature-bearing
   region that holds policing competence (Autonomy Act s. 18(6)) while courts, prosecution and
   corrections stay with the State (s. 27). Modelled as `fi-aland` at the `autonomous-community` level
   the Spain pilot minted — the same category as a comunidad autónoma, not a French administrative
   `region`. Two countries now use the level, which is what earns it.

Everything else stayed in prose, as the model requires: institution names (in Dutch/French/German,
Danish, Norwegian, Swedish, Finnish/Swedish); the spread of prosecution-independence arrangements
(minister-responsible NL, integrated-under-ministry DK, King-in-Council NO, ministerstyre-barred SE,
decisionally-independent-within-ministry FI); the integrated and prosecutor-led investigation
models; the twin-apex / diffuse-review court structures; and Finland's police-under-a-different-
ministry split.

## Sources and honesty

Load-bearing constitutional/statutory facts were verified from official primary sources, several
fetched and text-extracted by hand: the **Belgian Constitution** (dekamer.be PDF — resolving the
"Supreme Court"/Court of Cassation translation), the **Belgian integrated-police Law of 7 December
1998** (Justel), the **Swedish Instrument of Government** (riksdagen.se — Ch. 12 Art. 2 ministerstyre),
the **Norwegian Constitution** (Lovdata), and the **Finnish Constitution** (MoJ FAOLEX PDF — twin
apex, Åland). Prison figures come from the **Council of Europe SPACE I 2024** report, extracted from
the primary PDF and validated against the Ireland row already in the registry.

Access failures were recorded, not papered over: the Danish and Finnish official constitution PDFs
were Cloudflare-walled (cited from official-translation reproductions), belgium.be and the Belgian
and Norwegian police sites were bot-walled or client-side rendered (police facts sourced from
statute and intergovernmental portals), and the Swedish Chancellor of Justice's site refused
connections (described only from the Constitution). Every such gap is stated in the country's source
register and uncertainty list. Deferrals are honest: no country claims a police-complaints body it
could not source, and the one unconfirmed administrative detail (a distinct Åland police
organisation) is flagged.

## Validation

| Check              | Result                                                                                                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run validate` | exit 0 (format, lint, typecheck, test, build, verify:output)                                                                                                                       |
| Unit tests         | **1340 passed / 32 files** (was 972 / 22 at the framework baseline)                                                                                                                |
| Build              | 174 exported pages                                                                                                                                                                 |
| verify:output      | **172 routes / 172 sitemap / 174 pages**                                                                                                                                           |
| `npm run test:e2e` | **98 passed, 4 skipped** (smoke + accessibility, desktop + mobile)                                                                                                                 |
| Static HTTP matrix | 6 new hubs + modules 200; deferred, two-letter aliases (`/countries/nl` …), Åland (`/countries/aland`, `/countries/finland/aland`) and sub-national slugs all 404; no SPA fallback |

Census after Batch A: 16 published dossiers, 118 country-module routes, **13 restricted claims**
(+6), **56 jurisdiction records** (+7, including `fi-aland`), 3 scheduled changes (unchanged — every
Batch A reform was already completed and is recorded in prose, not as a pending change), 128 source
records. Each new country has a per-country test (`tests/content/countries-<slug>.test.ts`), and the
ten-country semantic regression automatically extended to all sixteen.

## Accessibility

The framework's WCAG 2.2 AA guards held for the new pages: the jurisdiction-table caption and region
label derive from the country name (e.g. "modelled Finland jurisdiction", not a leaked country),
single `h1`, skip link and landmark present, and non-Latin names (Å, ø, ö, ä, é) render in the
table. The e2e accessibility suite (heading structure, landmarks, 320px reflow, 200% zoom, mobile
nav) passes for the whole site.

## Not done (per instruction)

No PR opened, nothing merged, no deployment, no Netlify connection, no DNS change. The branch is
stacked on `feat/country-scaling-framework`, which is itself unmerged — so a PR would target that
branch (or `main` once the framework merges), not `main` directly.
