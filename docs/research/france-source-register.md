# France source register

**Research date:** all sources read and confirmed on **2026-07-24**.
**Registry:** `src/content/sources.ts`, ids prefixed `fr-`.

## Verification standard

A source is `content-confirmed` only where the document was actually retrieved and read, and
confirmed to contain the text it is cited for. Nothing here is marked verified on the strength
of an HTTP status.

That distinction is not theoretical. `legifrance.gouv.fr` and `interieur.gouv.fr` return
**HTTP 403 to an automated request** while serving the same documents normally to a reader:

```
403  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006574849
403  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037201047
403  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041587492
403  https://www.legifrance.gouv.fr/loda/id/JORFTEXT000020954146/
403  https://www.interieur.gouv.fr/
200  https://www.conseil-constitutionnel.fr/...
200  https://www.justice.gouv.fr/justice-france/lorganisation-cours-tribunaux
```

A status-probe check would have rejected the authentic text of French legislation. The rule
"HTTP 200 does not mean verified" has an inverse — "HTTP 403 does not mean unavailable" — and
both are now recorded per source via `verificationMethod`.

One URL was also corrected during research: an initial guess at the Gendarmerie law
(`JORFTEXT000020850173`) was wrong; the real identifier is `JORFTEXT000020954146`. It is not
cited, because Code de la défense L3211-3 supports the claim directly. Recorded because it is a
concrete instance of why URLs are never constructed by pattern.

## Register

| ID                        | Title                                                      | Issuing body                      | Type        | Language | Published / in force                                                           | Verified   | Method            | Supports                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Limitations                                                                                                                                                                                                               |
| ------------------------- | ---------------------------------------------------------- | --------------------------------- | ----------- | -------- | ------------------------------------------------------------------------------ | ---------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fr-constitution-1958`    | Constitution du 4 octobre 1958 (texte intégral en vigueur) | Conseil constitutionnel           | legislation | fr       | 4 Oct 1958                                                                     | 2026-07-24 | content-confirmed | Art. 1 (indivisible Republic; decentralised organisation); Art. 64 (President guarantor of judicial independence, assisted by the CSM); Art. 66 (judicial authority guardian of individual liberty); Art. 72 (categories of territorial collectivity); Art. 72-3 (the ten named overseas territories); Arts. 73 and 74 (the two overseas regimes); Title VIII heading; Title XIII (New Caledonia)                                                         | Constitutional text only. Supports nothing about how provisions are applied, nor about any institution's internal organisation.                                                                                           |
| `fr-cpp-art-12`           | Article 12 du Code de procédure pénale                     | République française (Légifrance) | legislation | fr       | In force 8 Apr 1958 → **1 Jan 2029**                                           | 2026-07-24 | content-confirmed | That the police judiciaire is exercised "sous la direction du procureur de la République" by designated officers, officials and agents                                                                                                                                                                                                                                                                                                                    | Scheduled for repeal by Ordonnance n° 2025-1091 of 19 Nov 2025 effective 1 Jan 2029; any citation must say so. Does not identify which bodies those officers belong to, nor describe practice.                            |
| `fr-code-defense-l3211-3` | Article L3211-3 du Code de la défense                      | République française (Légifrance) | legislation | fr       | In force 15 Jul 2018; last modified by Loi n° 2018-607 of 13 Jul 2018, art. 42 | 2026-07-24 | content-confirmed | "La gendarmerie nationale est une force armée instituée pour veiller à l'exécution des lois"; military missions executed throughout national territory                                                                                                                                                                                                                                                                                                    | Legal character only. Does **not** support any claim about territorial allocation between gendarmerie and police nationale, nor about equipment, tactics or deployment.                                                   |
| `fr-csi-l511-1`           | Article L511-1 du Code de la sécurité intérieure           | République française (Légifrance) | legislation | fr       | In force 1 Jul 2021 → **1 Jan 2029**                                           | 2026-07-24 | content-confirmed | Agents de police municipale act under the mayor's authority on tasks within the mayor's competence; opening clause "Sans préjudice de la compétence générale de la police nationale et de la gendarmerie nationale"                                                                                                                                                                                                                                       | Scheduled end date 1 Jan 2029. Does not support any figure for how many communes maintain a force, nor powers beyond the cited wording.                                                                                   |
| `fr-justice-courts`       | L'organisation des cours et tribunaux                      | Ministère de la justice (France)  | government  | fr       | Undated on page                                                                | 2026-07-24 | content-confirmed | The two court orders; the named courts in each (tribunal judiciaire, tribunal de proximité, conseil de prud'hommes, tribunal de commerce, tribunal paritaire des baux ruraux, tribunal de police, tribunal correctionnel, cour criminelle départementale, cour d'assises, cour d'appel, Cour de cassation; tribunal administratif, cour administrative d'appel, Conseil d'État); the Tribunal des conflits                                                | Institutional self-description of structure. Undated, so it supports current structure **as at the verification date only**. Does not support caseload, effectiveness, or the thresholds allocating cases between courts. |
| `fr-justice-parquet`      | Les magistrats du parquet                                  | Ministère de la justice (France)  | government  | fr       | Undated on page                                                                | 2026-07-24 | content-confirmed | Definition of parquet / ministère public; "magistrature debout" and the siège/parquet distinction; hierarchy procureur général → procureur de la République; that parquet magistrates act "sous l'autorité du ministre de la Justice" and receive "des instructions générales … mais en aucun cas dans les dossiers judiciaires"; that they lack the guarantee of inamovibilité; the prosecutor's direction of investigation and discretion over outcomes | An official statement of the **formal rule**. It does not establish that the rule is observed in practice, and cannot settle the contested question of prosecutorial independence in either direction.                    |

## Sources deliberately not used

| Candidate                                                             | Why not                                                                                                                         |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `conseil-superieur-magistrature.fr/le-csm/presentation`               | URL constructed rather than found; returned 404. The CSM is referred to only where the Constitution names it.                   |
| `cglpl.fr`                                                            | Resolves, but the page read did not state the body's legal basis or mandate scope. Insufficient to publish an oversight module. |
| `police-nationale.interieur.gouv.fr`, `gendarmerie.interieur.gouv.fr` | Bot-walled (403) and not retrieved by content. No claim rests on them.                                                          |
| Wikipedia, legal blogs, news summaries                                | Excluded by the source policy.                                                                                                  |

## Outstanding

- No source yet supports the **internal organisation** of the Police nationale or the
  Gendarmerie nationale, or the current territorial allocation between them. The
  law-enforcement module says so rather than repeating the common shorthand.
- No source supports French forensic, prison, border or oversight institutions. Those four
  modules are unpublished.
