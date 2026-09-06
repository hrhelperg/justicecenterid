# Careers commercial opportunity map — INTERNAL

**Internal research document. Nothing in it is published, and a test asserts that.**
`tests/content/wave24-careers-training.test.ts` fails if monetisation vocabulary
— `monetise`, `revenue`, `affiliate`, `sponsorship`, `HIGH/MEDIUM/LOW opportunity` — appears in any
published guide, any profession record, or any source note.

Wave 24 adds **no monetisation code, no product, no listing, no lead form and no paywall.** This
maps future compatibility only.

## The rule that governs everything below

**Commercial opportunity must never determine a factual conclusion.** The clearest test of that in
this wave: the highest-value commercial cluster here is education, and the honest answer to its
central question — do you need a degree — is _no_ in every system researched. A page written for
revenue would have hedged that. The page states it in the official recruitment service's own five
words and cites them.

## Cluster assessment

| Content cluster               | Educational products | Study materials | Books  | Academy prep      | Job listings | Training providers | University discovery | Lawful equipment  | Accessories | Sponsorship       | Affiliate         |
| ----------------------------- | -------------------- | --------------- | ------ | ----------------- | ------------ | ------------------ | -------------------- | ----------------- | ----------- | ----------------- | ----------------- |
| Police academies (#1)         | HIGH                 | MEDIUM          | MEDIUM | HIGH              | LOW          | HIGH               | MEDIUM               | LOW               | LOW         | MEDIUM            | LOW               |
| Degree question (#2)          | HIGH                 | MEDIUM          | MEDIUM | MEDIUM            | LOW          | HIGH               | **HIGH**             | LOW               | LOW         | MEDIUM            | LOW               |
| Training v education (#3)     | MEDIUM               | LOW             | MEDIUM | LOW               | LOW          | MEDIUM             | MEDIUM               | LOW               | LOW         | LOW               | LOW               |
| What recruits are taught (#4) | MEDIUM               | MEDIUM          | MEDIUM | MEDIUM            | LOW          | MEDIUM             | LOW                  | **INAPPROPRIATE** | LOW         | LOW               | LOW               |
| Rank/role/specialisation (#5) | LOW                  | LOW             | LOW    | LOW               | MEDIUM       | LOW                | LOW                  | LOW               | LOW         | LOW               | LOW               |
| Career development (#6)       | MEDIUM               | LOW             | MEDIUM | LOW               | **HIGH**     | MEDIUM             | LOW                  | LOW               | LOW         | MEDIUM            | LOW               |
| Specialist roles (#7)         | LOW                  | LOW             | LOW    | LOW               | HIGH         | LOW                | LOW                  | **INAPPROPRIATE** | LOW         | LOW               | LOW               |
| Civilian roles (#8)           | MEDIUM               | LOW             | LOW    | LOW               | **HIGH**     | MEDIUM             | MEDIUM               | LOW               | LOW         | MEDIUM            | LOW               |
| Skills (#9)                   | HIGH                 | **HIGH**        | HIGH   | MEDIUM            | LOW          | MEDIUM             | LOW                  | LOW               | MEDIUM      | MEDIUM            | LOW               |
| Physical readiness (#10)      | LOW                  | LOW             | LOW    | **INAPPROPRIATE** | LOW          | LOW                | LOW                  | LOW               | MEDIUM      | LOW               | LOW               |
| Working life (#11)            | LOW                  | LOW             | MEDIUM | LOW               | MEDIUM       | LOW                | LOW                  | LOW               | **MEDIUM**  | LOW               | LOW               |
| Professional standards (#12)  | MEDIUM               | LOW             | MEDIUM | LOW               | LOW          | LOW                | LOW                  | LOW               | LOW         | **INAPPROPRIATE** | **INAPPROPRIATE** |
| Profession records            | MEDIUM               | LOW             | MEDIUM | LOW               | HIGH         | MEDIUM             | MEDIUM               | LOW               | LOW         | LOW               | LOW               |

## Why the INAPPROPRIATE cells are inappropriate

- **#4 and #7, lawful equipment.** These describe training subjects and specialist areas. Attaching
  equipment commerce to a page about what recruits are taught, or about what a unit exists for,
  converts institutional description into a shopping context and creates exactly the misuse risk
  Part X and Part AG exclude. This holds even for non-regulated items.
- **#10, academy preparation.** Selling preparation against a fitness standard requires publishing
  a standard, and Part N forbids that for good reason: it invites people to train to a number that
  may not be their employer's, and it means giving physical training advice to strangers whose
  health is unknown. Any future preparation product needs its own evidence and safety review first.
- **#12, sponsorship and affiliate.** A professional-standards page cannot carry paid placement of
  any kind. A page about integrity that is itself sponsored refutes its own subject.

## Where the genuine opportunity is

1. **University and training-provider discovery (#2).** The highest-intent, lowest-risk cluster.
   People reading the degree page are making an expensive decision, and a _neutral, comprehensive_
   directory serves them. It must be comprehensive rather than paid-inclusion, or it becomes the
   "best academy" page Part Y forbids.
2. **Job listings (#6, #8, profession records).** Listings are facts with dates, not editorial
   claims. Civilian roles (#8) are the underserved half and the clearest audience gap.
3. **Study materials and books (#9).** Skills content pairs naturally with reading, and a book
   recommendation is separable from an institutional fact.

## What must never be monetised

- Entry requirements, training durations and official recruitment facts. These come from official
  sources and are the reason the platform is worth reading.
- Any ranking of academies, universities, forces or employers.
- Anything on the professional-standards page.
- Salary, until a dedicated employment-data layer exists with dated official sources.

## Editorial and commercial independence — the standing rules (Part Y)

1. Paid placement is labelled, always and visibly.
2. Sponsorship never alters a factual ranking or conclusion.
3. An affiliate relationship never determines an editorial conclusion.
4. Official sources remain authoritative for recruitment requirements, regardless of any commercial
   relationship with any provider.
5. A commercial partner cannot purchase a factual claim.
6. An education provider cannot buy "best academy" status. No such status exists.
7. Product monetisation stays structurally separate from institutional facts.

These are recorded here and in the roadmap. The corpus-side enforcement already exists: the
commercial-integrity guard in the Wave 24 test suite fails the build if promotional or transactional
language appears in published content, and mutation proof W24M10 confirms it fires.
