# Corrections policy

Published to readers at `/corrections-policy`.

## Principle

We will get things wrong. A platform about institutional accountability that handles its own
errors badly has failed at the thing it claims to explain.

Errors are fixed promptly, visibly where they changed meaning, and without quietly editing
history.

## What counts as an error

| Class | Examples | Handling |
| --- | --- | --- |
| **Factual error** | Wrong date, wrong institutional name, wrong legal provision, a claim the cited source does not support, a structure described as current that has changed. | Corrected and logged. Correction notice on the page. |
| **Sourcing error** | A citation that does not exist, points to the wrong document, or has been misattributed. | Corrected and logged. Treated as severe — see below. |
| **Scope error** | A claim stated more broadly than its sources support; one jurisdiction's rule presented as general. | Rescoped and logged. |
| **Framing error** | Loss of neutrality; analysis presented as fact; an institution described only by its powers or only by its failures. | Rewritten and logged. |
| **Omission** | A material qualification, limitation, or oversight mechanism left out such that the page misleads. | Added and logged. |
| **Staleness** | Accurate when written, no longer accurate. | Updated; page carries a dated update note. Logged if the change alters meaning. |
| **Presentation defect** | Typography, formatting, broken layout, dead internal link. | Fixed. Not logged. |

## Severity and response time

| Severity | Definition | Target |
| --- | --- | --- |
| **Critical** | The error could mislead a reader about their rights, about what the law requires, or about whether we are an official body; or a fabricated or misattributed citation. | Page set to `needs-update` or unpublished the same day the error is confirmed; corrected within 3 working days. |
| **Substantive** | Changes the meaning of a claim but does not meet the critical threshold. | Corrected within 10 working days. |
| **Minor** | Does not change meaning. | Corrected at the next scheduled review of the entity. |

A fabricated or misattributed citation is always critical, regardless of how minor the
underlying claim is, because it undermines every other citation on the site.

## How to report an error

Reports are welcome from anyone — readers, researchers, and the institutions we describe. An
institution reporting an error about itself is treated exactly like any other reporter: the
report is assessed against sources, not accepted or rejected on the basis of who sent it.

A useful report includes:

1. The page URL.
2. The specific sentence or claim.
3. What is wrong with it.
4. A source supporting the correction, where available.

Reports without a source are still assessed; they simply take longer, because we have to do
the sourcing.

The reporting channel is published on `/contact` and `/corrections-policy`.

## What we do with a report

1. **Acknowledge** receipt.
2. **Assess** against the source records — reopen the cited sources and check what they
   actually support.
3. **Decide** one of four outcomes:
   - *Correction* — we were wrong. Fix, log, and notify the reporter.
   - *Clarification* — we were not wrong but were unclear or under-scoped. Rewrite and log.
   - *No change* — the claim is supported. Explain to the reporter which source supports it.
   - *Under investigation* — we cannot yet establish who is right. The claim is marked as
     uncertain on the page while the question is open.
4. **Record** the outcome in the corrections log.

We do not decline a report because it is inconvenient, because it comes from an interested
party, or because the error is embarrassing.

## Correction notices

Where a correction changes meaning, the page carries a dated correction notice stating what
was previously said, what it now says, and why it changed. The notice stays on the page; it is
not removed after a period.

Where a correction does not change meaning, the entity's `updatedOn` date changes and nothing
else.

We do not:

- Silently edit a substantive error out of existence.
- Delete a page to make an error disappear. If a page must be withdrawn, the URL states that
  it was withdrawn and why.
- Backdate `updatedOn` or `reviewedOn`.

## Corrections log

A dated log of substantive corrections is maintained. Each entry records: date, page,
what was wrong, what it now says, and the source of the correction. The log is published once
there is anything to publish in it — an empty "corrections" page on a site with no publication
history would be a trust signal that has not been earned.

## Self-initiated corrections

Most errors will be found by us, during scheduled re-review, not reported by readers. Those
are logged identically. There is no distinction between an error we found and an error we were
told about.

## Systemic response

If the same class of error occurs more than twice, the response is not another correction. It
is a change to the process or to the validation suite so that the class of error cannot recur.
Examples of checks that exist for exactly this reason: mandatory `verifiedOn` on every source
URL, the country content ceiling, and the required jurisdictional-variation block on guides.
