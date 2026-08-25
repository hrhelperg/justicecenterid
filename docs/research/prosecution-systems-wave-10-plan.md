# Wave 10 — prosecution systems: research plan and source feasibility

## What this wave opens, and what it must not consume

| Reserved for | Owned today by | Wave 10's permitted contact |
| --- | --- | --- |
| Defence & legal representation (Wave 11) | nothing yet | Rights are **acknowledged** — the accused may answer the case, test the evidence, and is presumed innocent. No page explains counsel, legal aid, privilege or defence strategy |
| Investigations (Wave 8) | six `/investigations/*` guides | Linked to, never rewritten. Who investigates, who directs, and the handoff are settled there |
| Courts (Wave 9) | ten `/courts/*` guides | Linked to. Prosecution is explained **before** the court; no trial procedure |
| The profession | `/professions/prosecutor` | Owns **who** the prosecutor is. Wave 10 owns prosecution as an institutional **function** |

Wave 9's own boundary test forbids courts pages from discussing charging standards,
prosecutorial discretion, plea bargaining or prosecution independence — all four of which are
this wave's subject. That test must keep passing, so the material lives in `/prosecution`.

## The architecture already exists

`/prosecution/[slug]` is already wired to every guide carrying `section: 'prosecution'`. No route
file, no competing hub. Fourth wave running.

## Source feasibility

**All 32 dossiers already carry a `prosecution` module**, each with country-scoped,
content-confirmed sources. Reuse is again the correct answer.

| Country | Existing sources | Supports |
| --- | --- | --- |
| Germany | `de-gvg-141`, `de-gvg-147`, `de-grundgesetz` | § 141 GVG a prosecution office at every court; § 147 GVG the allocation of supervision and direction; no single national service |
| France | `fr-justice-parquet`, `fr-constitution-1958`, `fr-cpp-art-12` | parquet vs siège; hierarchy; "sous l'autorité du ministre de la Justice"; general but not individual instructions; no *inamovibilité* |
| Spain | `es-constitution` | Art. 124 — mission in defence of legality and the public interest; "unidad de actuación y dependencia jerárquica"; single national body |
| Brazil | `br-cf-1988`, `br-mpu-institucional` | Art. 127 permanent institution outside all three branches; unity, indivisibility, functional independence; Art. 129 exclusive holder of the public criminal action, plus civil and diffuse-interest functions |
| Kenya | `ke-constitution`, `ke-odpp` | Art. 157(4) power to direct the Inspector-General; Art. 157(10) no consent required, not under the direction or control of any person or authority |
| Ireland | `ie-dpp` | The office's own statement of independence; general directions to An Garda Síochána in summary matters |
| United States | `us-attorneys-28usc541-547`, `us-bjs-prosecutors`, `us-const-amend-10` | 28 U.S.C. §§ 541/547 appointment and remit of United States Attorneys; local prosecutors variously titled and mostly elected |
| Nigeria | `ng-constitution` | ss. 150, 174, 195, 211 — prosecution inside the executive, federal and state Attorneys-General |

### Sources added

Three, all German, because no existing record carried the charging provisions:

1. **`de-stpo-152-legalitaetsgrundsatz`** — § 152 StPO, headed *Legalitätsgrundsatz*. § 152(2)
   obliges the prosecution to act "wegen aller verfolgbaren Straftaten … sofern zureichende
   tatsächliche Anhaltspunkte vorliegen".
2. **`de-stpo-170-anklageerhebung`** — § 170 StPO, the decision whether to indict, on whether the
   investigations offer "genügenden Anlaß".
3. **`de-stpo-153-geringfuegigkeit`** — § 153 StPO, the statutory exception permitting the
   prosecution to refrain where guilt would be minor and there is no public interest.

## The accuracy problem this wave inherited

`what-does-a-prosecutor-do` already says prosecution services "typically apply a two-stage test",
with an evidential stage asking whether there is "a realistic prospect of conviction" — resting on
`un-prosecutors-guidelines` and `iccpr` and **no country-scoped source at all**.

That is the England-and-Wales Full Code Test generalised, and § 152(2) StPO contradicts it
directly: German prosecutors are *obliged* to act on sufficient factual indications, and the
statute asks nothing about prospects of conviction. An international instrument can establish a
normative principle; it cannot establish how any country's charging decision works.

Part A therefore resolves to **EXPAND AND CORRECT**: the existing page is corrected in place, and
the comparative charging material gets its own route.

## Method

Function first, label second — the discipline of Waves 7 to 9. For each system: who holds the
power to charge; on what threshold; whether acting is a duty or a choice; who may instruct whom;
and what protects the decision from improper interference. Only then was a comparative label used.

## The independence method, stated in advance

The corpus already refuses to resolve the independence question for France and Germany, and says
so on the page. Wave 10 keeps that discipline and generalises it:

- A constitutional or statutory provision establishes an **arrangement**.
- Whether that arrangement functions is an **empirical** question no text can answer.
- A body's own statement of its independence is evidence of what it **states**, not of what obtains.

Every independence sentence in this wave is written to be true at the level its source supports,
and a test asserts that no country is described as simply *having* an independent prosecution.
