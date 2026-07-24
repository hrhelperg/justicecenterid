# Scheduled-change model

Implementation: `src/content/types.ts` (`ScheduledChange`) and
`src/content/scheduled-changes.ts` (registry + `validateScheduledChange`).

## The one failure this exists to prevent

A page states current law correctly. A repeal date was already known when it was written. Time
passes. The page is now wrong, and nothing in the system noticed.

That is the whole scope. This is **not** a legislative-tracking system, and deliberately does
not model conditional commencement, partial commencement, or amendments that alter a provision
without repealing it.

## Why it was added when it was

France finding F3 identified the need and explicitly deferred the field: one country producing a
pattern is not evidence that the pattern generalises. Germany produced it again — the Basic Law
translation carries a stated amendment ceiling, German codes are amended continuously — so the
field became earned rather than speculative.

## The staleness gate

The load-bearing rule. Once `effectiveOn` has passed and `status` is still `pending`, validation
**fails** until `reviewedAfterEffect` is recorded on or after the effective date. The build
breaks rather than the site quietly describing superseded law as current.

`today` is **injected**, never read from the clock. A validator that reads the wall clock passes
in CI today and fails silently on some future date nobody is watching — and this validator's
entire purpose is to fire on a date in the future.

## Certainty is not status

`certainty` — `enacted-with-date` · `announced` · `proposed` · `uncertain` — is separate from
`status` — `pending` · `taken-effect` · `superseded` · `cancelled`.

Only `enacted-with-date` may sit in the `pending` pipeline. A proposal may be tracked; it may
not be presented to a reader as something that will happen. The model does not assume every
announced reform takes effect.

`cancelled` and `superseded` are exempt from the staleness gate and require `notes` explaining
why the change will not happen — so an abandoned reform is distinguishable from an active one at
a glance rather than by inference.

## Fields

| Field                                                    | Required                                | Note                                                                                                                                                             |
| -------------------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`, `changeType`, `effectiveOn`, `description`         | yes                                     | `changeType` covers amendment, repeal, replacement, reorganization, transfer-of-competence, merger, dissolution, renaming, jurisdiction-change, planned, unknown |
| `sources`                                                | yes, ≥ 1                                | A scheduled change without authoritative support is not published                                                                                                |
| `affectedEntityIds`                                      | yes, ≥ 1                                | Optionally validated against a supplied id list                                                                                                                  |
| `certainty`, `status`                                    | yes                                     | See above                                                                                                                                                        |
| `enactedOn`                                              | when `certainty` is `enacted-with-date` |                                                                                                                                                                  |
| `reviewedAfterEffect`                                    | once `effectiveOn` has passed           | The staleness gate                                                                                                                                               |
| `announcedOn`, `supersedes`, `affectedClaimIds`, `notes` | optional                                | `notes` required for `cancelled`/`superseded`                                                                                                                    |

## Current registry

One record: `fr-recodification-2029`. Ordonnance n° 2025-1091 of 19 November 2025 repeals
Article 12 of the Code de procédure pénale from 1 January 2029, and Légifrance records Article
L511-1 of the Code de la sécurité intérieure as in force only to the same date. Both are cited
as current law on the France pages.

The practical consequence: on 1 January 2029 the France pages stop passing validation until
someone re-reads the replacement text. That is the intended behaviour.
