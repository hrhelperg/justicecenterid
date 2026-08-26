# Wave 17 — Sentencing Institutions & Community Corrections

Branch `feat/knowledge-expansion-waves-16-18`. Researched and written 2026-08-26. No push.

## 1. The finding that shaped the wave: Wave 13 owns most of the candidate list

`/corrections` holds twelve guides from Wave 13. Reading them before writing anything produced
a cannibalization matrix in which most of the brief's candidates are already answered.

| Brief candidate                                                           | Status                                                                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| sentencing-purposes, sentencing-principles, proportionality-in-sentencing | **Owned** by `what-sentencing-is-for` — four legislatures, including CC s. 718.1 proportionality |
| what-is-sentencing, why-sentencing-exists                                 | **Owned** by `conviction-sentence-and-execution` and `why-correctional-systems-exist`            |
| custodial-vs-non-custodial-sentences, alternatives-to-imprisonment        | **Owned** by `custodial-and-non-custodial-sentences`                                             |
| suspended-sentences                                                       | **Owned** by `what-a-suspended-sentence-is`                                                      |
| what-is-probation, community-supervision                                  | **Owned** by `probation-is-three-different-things`                                               |
| conditional-release, parole, supervised-release                           | **Owned** by `release-before-the-end-of-a-sentence`                                              |
| reintegration, rehabilitation-and-reintegration, reentry                  | **Owned** by `what-reintegration-means`                                                          |
| prison-administration, corrections-agency                                 | **Owned** by `who-runs-prisons` and `/institutions/correctional-service`                         |

Restating any of them would be the thin pages the programme constraints forbid.

**What is genuinely absent.** Four things, and each is institutionally central:

1. **Fines.** The most frequently imposed criminal sanction in many systems, and the corpus says
   nothing about how one is calculated.
2. **Thresholds.** Wave 13 establishes that law steers courts _away_ from custody. Nothing states
   what must be true before each kind of sentence becomes available at all.
3. **Guidelines and who writes them.** No page anywhere on sentencing guidelines, sentencing
   councils, or how binding a guideline is.
4. **Prison inspection and complaints.** `/institutions/correctional-service` states that
   independent inspection is a standing function. Nothing sets out the twofold system, the
   powers inspectors need for it to mean anything, or how a prisoner raises a complaint.

## 2. Route plan

Seven routes. Target was 8–16; the brief is explicit that it is not a quota and that a smaller
sourced cluster beats a larger weak one.

| Slug                                        | Load-bearing evidence                         |
| ------------------------------------------- | --------------------------------------------- |
| `how-fines-are-calculated`                  | StGB §§ 40, 43; Sentencing Act 2020 s. 125    |
| `when-a-court-may-imprison`                 | Sentencing Act 2020 ss. 204, 230, 231         |
| `sentencing-guidelines-and-who-writes-them` | CJA 2009 s. 118; Sentencing Act 2020 s. 59    |
| `what-a-community-order-requires`           | Sentencing Act 2020 s. 201 requirements table |
| `what-a-pre-sentence-report-is`             | Sentencing Act 2020 ss. 30, 31                |
| `who-inspects-a-prison`                     | Mandela Rules 83–85; Prison Act 1952 s. 5A    |
| `how-a-prisoner-raises-a-complaint`         | Mandela Rules 54–57                           |

## 3. Evidence obtained

Five new source records; one existing record extended.

| Source id                                   | Instrument                                 | Establishes                                                                               |
| ------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `de-stgb-40-43-geldstrafe`                  | StGB §§ 40, 43                             | The day-fine system; number of units, value of a unit, and the default-custody conversion |
| `uk-sentencing-act-2020-thresholds`         | Sentencing Act 2020 ss. 125, 204, 230, 231 | The fine/community/custody ladder and the shortest-term rule                              |
| `uk-sentencing-act-2020-reports-guidelines` | Sentencing Act 2020 ss. 30, 31, 59, 201    | Guidelines duty; pre-sentence reports; the fifteen community-order requirement types      |
| `uk-cja-2009-sentencing-council`            | CJA 2009 s. 118                            | The Sentencing Council for England and Wales                                              |
| `uk-prison-act-1952-s5a`                    | Prison Act 1952 s. 5A                      | A statutory Chief Inspector; annual report laid before Parliament                         |
| `mandela-rules` _(extended)_                | Rules 54–57, 83–85                         | The twofold inspection system, inspectors' powers, and the complaints route               |

### 3.1 Source-currency decisions

**CJA 2009 s. 125 is repealed.** The duty to follow sentencing guidelines was fetched first at
CJA 2009 s. 125, and legislation.gov.uk records it repealed on 1 December 2020 by the Sentencing
Act 2020, Sch. 28. The current duty is Sentencing Act 2020 s. 59, which was fetched and used.
This is the second currency trap in this programme, after the revoked Criminal Procedure Rules
2020 in Wave 16 — both found by reading the revised text rather than assuming.

**OHCHR could not be reached.** The Optional Protocol to the Convention against Torture and the
Subcommittee's national-preventive-mechanism pages both returned HTTP 403 behind a JavaScript
challenge. This is an access limitation, never evidence about the instrument. Nothing is quoted
from OPCAT and no claim is made about national preventive mechanisms. The inspection page rests
instead on the Nelson Mandela Rules, already a verified corpus source, whose text was retrieved
from the primary UNODC PDF and extracted locally.

## 4. Comparative questions, and the answers the evidence supports

| Question                    | Answer, and its limits                                                                                                                                                                                                                                                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Who sentences?              | The court, in every system described. Not a point of variation here.                                                                                                                                                                                                                                                                                                  |
| Who informs the sentence?   | England and Wales: an officer of a provider of probation services, through a pre-sentence report the court must obtain and consider unless it considers it unnecessary (ss. 30, 31).                                                                                                                                                                                  |
| How binding are guidelines? | England and Wales: a court **must follow** relevant guidelines **unless satisfied it would be contrary to the interests of justice** — neither advisory nor absolute, and expressly subject to a list of statutory provisions including the custody threshold. Germany has no equivalent council; StGB § 46 leaves measurement to culpability and enumerated factors. |
| Is a fine a fixed amount?   | Not in Germany: it is a number of daily units, each valued on the offender's circumstances. England and Wales fixes an amount that must reflect seriousness and take account of financial circumstances, increasing or reducing.                                                                                                                                      |
| Who inspects a prison?      | Two different bodies, by design: internal inspection by the central prison administration, external inspection by a body **independent of** it (Mandela Rule 83). England and Wales instantiates the external limb in statute.                                                                                                                                        |
| Who decides release?        | **Deferred.** Wave 13 already sets out judicial release under StGB § 57. The English life-sentence provisions (Crime (Sentences) Act 1997 s. 28) are heavily amended and would need care this wave could not give them.                                                                                                                                               |

## 5. Restricted claims

No page in this wave carries a prison population, capacity, occupancy or caseload figure. The
`detention-capacity` safeguard and the architectural finding behind it — that `Guide` has no
`restrictedClaims` channel and the guide scan hard-codes the declared list to `[]` — are
unchanged from Wave 13 and were not worked around. No hand-written floating prison numbers were
added anywhere, and a test asserts that every Wave 17 page trips no restricted-phrasing pattern.

## 6. Normative balance

The wave describes what statutes and agreed standards say. It does not present imprisonment as
inherently illegitimate or inherently desirable, does not present rehabilitation as guaranteed,
does not treat punishment and rehabilitation as mutually exclusive, and does not present a
community sentence as freedom without consequence — the fifteen named requirement types in
Sentencing Act 2020 s. 201 are the answer to that last one, and they are quoted rather than
characterised. Where systems state multiple purposes, the plurality established in Wave 13 is
preserved and not collapsed.

## 7. Institution and profession records

**None created.** Considered and rejected:

- **Parole board.** The brief warns specifically against creating this as a universal family.
  The evidence supports the warning: Wave 13 established that German release is a judicial
  decision under StGB § 57, so a "parole board" family would have no German member. Deferred
  with the release question in §4.
- **Probation service.** England and Wales refers in statute to "a provider of probation
  services" — a formulation that presupposes plural providers rather than one institution. That
  is a genuine finding and it argues against, not for, an institution record.
- **Prison inspectorate.** One statutory instantiation was obtained. One is not a family.

This is the **ninth consecutive wave** without a new institution record.
