# Wave 14 — Access to Justice & Legal Institutions

Branch `feat/knowledge-expansion-waves-12-15`. Researched and written 2026-08-26. No push.

## 1. The finding that reshaped the wave

The brief's candidate list for Wave 14 is largely **already delivered**, and by Wave 11 rather
than by an earlier version of this wave. Reading the corpus before writing anything produced:

| Brief candidate                                 | Status                                                                           |
| ----------------------------------------------- | -------------------------------------------------------------------------------- |
| `/justice/access-to-justice`                    | **Exists** (Wave 12). Already carries the access ≠ outcome distinction in terms. |
| `/justice/effective-remedies`                   | **Exists** as `/justice/effective-remedy` (Wave 12).                             |
| `/defence/right-to-counsel`                     | **Exists** (Wave 11).                                                            |
| `/defence/how-legal-aid-works`                  | **Covered** by `/defence/how-defence-is-funded` (Wave 11).                       |
| `/defence/publicly-funded-legal-representation` | **Covered** by the same page.                                                    |
| `/defence/court-appointed-counsel`              | **Covered** by the same page.                                                    |
| `/defence/private-vs-publicly-funded-defence`   | **Covered** by the same page.                                                    |

`/defence/how-defence-is-funded` asks, in terms, "What is the difference between legal aid, a
public defender and court-appointed counsel?" and answers it across Germany, France and Brazil.
It already establishes publicly funded ≠ publicly employed, already contains the Czech
Veřejný ochránce práv false-friend warning, and already carries the Defensoria Pública finding
that brief section 23 asks to be preserved.

So brief sections **23 (public defender taxonomy)** and **24 (legal aid distinctions)** describe
work that exists. Wave 14 preserves and tests them rather than restating them. Restating would
be the "mass-produced thin pages" the programme constraints forbid.

`/justice/access-to-justice` also states explicitly: _"How states provide and pay for
representation is covered in the defence cluster, and this page does not restate it."_ The
cluster boundary is already drawn and this wave respects it.

**Where the actual gap is.** The concept of access is covered; the _mechanics_ are not. Nothing
in the corpus addresses the language of proceedings, the cost of using a court, participation by
people who cannot follow proceedings in the ordinary way, who administers courts as distinct
from who judges in them, who is permitted to act as a lawyer at all, whether a person may act
without one, or where victims stand in a criminal process. Each of those is an arrangement that
determines whether a forum can actually be used, and each is sourceable from primary text.

## 2. Evidence obtained

Five new source records (`src/content/sources.ts` 263 → 268), all read at the authoritative
publisher in the authoritative language, none a translation.

| Source id                    | Instrument            | Establishes                                                                                                                                                                  |
| ---------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `de-gvg-gerichtssprache`     | GVG §§ 184, 187       | Court language is German, with the Sorbian guarantee; free interpretation; written translation of named documents; the waiver rule                                           |
| `de-brao-anwaltschaft`       | BRAO §§ 1, 3, 43a, 60 | The Rechtsanwalt as independent organ of the administration of justice; right to counsel of choice; basic duties; the Kammer per Oberlandesgericht district                  |
| `br-lei-8906-1994-oab`       | Lei 8.906/1994        | Exclusive activities of advocacia with the habeas corpus carve-out; the advogado as indispensable; OAB as serviço público with no hierarchical link to public administration |
| `uk-legal-services-act-2007` | LSA 2007 ss. 12, 13   | Six reserved legal activities; entitlement solely by authorisation or exemption; mediation excluded from "legal activity"                                                    |
| `de-stpo-395-nebenklage`     | StPO § 395            | Accessory prosecution — which victims may join a public prosecution, and at what stage                                                                                       |

Four existing constitutional notes were extended with provisions verified this wave:
`ke-constitution` (Arts 48, 50(1)–(9), 172, 173), `za-constitution` (s 35(3)(f),(g),(k), 35(4)),
`ca-charter-1982` (s. 14), `br-cf-1988` (Art. 5º LXXIV, LXXVI, LXXVII; Art. 103-B § 4º; Art.
133; Art. 134).

### 2.1 The structural finding on language

Four systems, and the difference is not the level of protection but **whose language the
proceedings are conducted in**.

- **South Africa** s 35(3)(k) gives the accused the right _to be tried in a language that the
  accused person understands_, and interpretation only _if that is not practicable_. The
  proceedings are supposed to move to the person.
- **Germany** GVG § 184 fixes the court language absolutely — _"Die Gerichtssprache ist
  deutsch"_ — with one named exception, the guaranteed right of the Sorbs to speak Sorbian
  before a court in the home districts of the Sorbian population. The person is translated into
  the proceedings; § 187 is the whole of the mechanism.
- **Canada** Charter s. 14 gives an interpreter to _a party or witness in any proceedings_ — not
  criminal proceedings only, not the accused only — and treats **deafness** in the same clause.
- **Kenya** Art. 50(2)(m) gives an interpreter _without payment_, and Art. 50(3) requires any
  information the Article mandates to be given in a language the person understands.

A page that reported all four as "the right to an interpreter" would erase the difference
between a system that moves the trial and a system that translates the defendant.

### 2.2 The interaction nobody expects

GVG § 187(2) requires written translation of custodial orders, indictments, penal orders and
non-final judgments — and then provides that an oral translation or oral summary may take its
place where that preserves the accused's procedural rights, which is **as a rule to be assumed
where the accused has defence counsel**. One access mechanism changes the content of another.
This is recorded on the participation page.

### 2.3 The profession, and why no institution record follows

Three systems constitute the lawyer in law, and all three do it differently:

- **Germany**, BRAO § 1: _"Der Rechtsanwalt ist ein unabhängiges Organ der Rechtspflege."_
  Admission and discipline sit with a Rechtsanwaltskammer formed for each Oberlandesgericht
  district — the professional body is mapped onto the court structure.
- **Brazil**, CF Art. 133 and Lei 8.906 Art. 2: the advogado is indispensable to the
  administration of justice. Art. 44 makes the OAB a _serviço público_ holding exclusively the
  representation, defence, selection and discipline of advogados nationwide, and § 1 states that
  it maintains **no functional or hierarchical link with organs of public administration**.
- **England and Wales**, LSA 2007 ss. 12–13: no constitutive statement about lawyers at all.
  Six _activities_ are reserved, and entitlement to carry one on is determined solely by the Act
  — a person qualifies by being an authorised person or an exempt person for that activity.

These are not three designs of one institution. Germany and Brazil vest admission in a
professional body; England and Wales regulates activities and authorisation rather than status.
Per the brief — _"If examples demonstrate fundamentally different institutional designs, keep
them in comparative prose instead of forcing a false taxonomy"_ — **no `/institutions/bar-association`
record is created**, and the comparison lives in `/defence/who-may-act-as-a-lawyer`. This is the
seventh consecutive wave in which the recurring thing is a function whose institutional
embodiments differ in kind.

`/institutions/legal-aid-authority` and `/institutions/public-defender-institution` are likewise
not created: Wave 11 already established that France has a funding scheme with no defence
institution and Germany an appointment scheme that is neither, so a single institution family
would be false.

## 3. The `/professions/defence-lawyer` evidence gate

The brief requires this be researched properly and routed **only if** the evidence supports
what a profession record must carry. Assessed field by field against the `Profession` schema:

| Field                         | Evidence                                                                  |
| ----------------------------- | ------------------------------------------------------------------------- |
| `purpose`, `responsibilities` | StPO §§ 137, 147, 148 (Wave 11 sources); BRAO § 3(1)                      |
| `institutionalContext`        | BRAO § 1 and § 60; CF Art. 133; Lei 8.906 Arts. 2, 3, 44                  |
| `ethicsNote`, `constraints`   | BRAO § 43a(1)–(4) — independence, confidentiality, objectivity, conflicts |
| `decisionAuthority`           | BRAO § 3(1)–(3); StPO § 137                                               |
| `oversight`                   | BRAO § 60; Lei 8.906 Art. 44 II and Art. 45                               |
| `trainingRouteShape`          | **Weak.** No qualification-route source was obtained for any system.      |
| `countryExamples`             | Germany and Brazil, both primary-sourced                                  |

Verdict: **routed**, with `trainingRouteShape` described at the level the evidence supports —
that admission is controlled by a professional body rather than by the state directly, and that
the qualification route itself is not described — and the gap stated in `uncertainty`. Publishing
a plausible-sounding training pipeline for either country would be invention.

## 4. Route plan

Eight routes. Target was 7–13.

| Route                                       | Load-bearing evidence                                                            |
| ------------------------------------------- | -------------------------------------------------------------------------------- |
| `/courts/court-language-and-interpretation` | GVG §§ 184, 187; ZA s 35(3)(k); CA Charter s. 14; KE Art. 50(2)(m), (3)          |
| `/courts/taking-part-in-your-own-case`      | CA s. 14 (deafness); KE Art. 50(7) intermediary; GVG § 187(2)–(3); ZA s 35(3)(e) |
| `/courts/the-cost-of-going-to-court`        | KE Art. 48, 50(5)(b); BR Art. 5º LXXIV, LXXVI, LXXVII                            |
| `/courts/who-runs-the-courts`               | KE Arts. 172, 173; BR Art. 103-B § 4º                                            |
| `/defence/who-may-act-as-a-lawyer`          | LSA 2007 ss. 12–13; Lei 8.906 Arts. 1, 2, 3; BRAO §§ 1, 3                        |
| `/defence/representing-yourself`            | KE Art. 50(2)(g); ZA s 35(3)(f); Lei 8.906 Art. 1 § 1; LSA s. 13(2)(b)           |
| `/justice/victims-in-the-justice-process`   | StPO § 395; GVG § 187(4); KE Art. 50(9)                                          |
| `/professions/defence-lawyer`               | BRAO §§ 1, 3, 43a, 60; CF Art. 133; Lei 8.906; StPO §§ 137, 147, 148             |

## 5. Access is not outcome

Brief section 26. `/justice/access-to-justice` already states this and it is not restated as a
page. It is instead **enforced across the new pages by test**: no page may assert that access
implies a result, that representation is free everywhere, that any procedure is costless, or
that assistance is identical across jurisdictions. Every page states its jurisdictional limits.

## 6. Deferred

- **Equality of arms.** Wave 11 deferred it because the ECHR could not be read from an
  authoritative source. That has not changed and nothing is quoted from it. The underlying
  constitutional equality provisions are covered by Wave 12's `/justice/equality-before-the-law`.
- **Mediation and alternative dispute resolution.** The only primary text obtained is Kenya
  Art. 159(2), which Wave 12 already cites, and LSA s. 12(4) excluding mediation from "legal
  activity" — a definitional exclusion, not a description of ADR. Not enough for a page.
- **A French bar source.** legifrance.gouv.fr returned HTTP 403 on the loi of 31 December 1971.
  An access limitation, not evidence against the source; nothing is claimed about France's bar.
- **Court fees in any named amount.** No fee schedule was obtained anywhere, and none is quoted.
  The cost page describes constitutional treatment of cost, not prices.
