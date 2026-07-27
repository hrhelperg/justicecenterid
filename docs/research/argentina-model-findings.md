# Argentina — model findings

What Argentina added to the comparative picture, and what it reused.

## 1. National law, provincial institutions — a distinct federal shape

Argentina refines the federal picture again. Where Mexico _splits_ substantive criminal law between
the federation and the states, Argentina _unifies_ it: Congress enacts a single national Criminal
Code, but "without altering the local jurisdictions", so it is applied by the federal or the
provincial courts by subject-matter (Art. 75 inc. 12). The institutions — courts, prosecution, police,
prisons — are dual and dominated by the provinces for ordinary crime, but the _law_ they apply is one.
This is captured with the existing scope values: at the federal level `legalSystemScope: 'own'` with
`legislativeCompetence.legal-system: 'exclusive-federal'` (the codes are national), while every other
function is `shared`, and the province records carry those functions as `own`. The site now shows two
kinds of federal criminal-law arrangement — split (Mexico) and unified-but-locally-applied (Argentina)
— using the same schema.

## 2. A "fourth-branch" prosecution

Argentina's federal prosecution is a constitutionally autonomous body **outside the three classic
branches** — "an independent organ with functional autonomy and financial self-governance"
(Art. 120). That is a stronger constitutional guarantee than the autonomous prosecutions already on
the site (Portugal's, Mexico's), and, combined with the accusatory Federal Code of Criminal Procedure
under which the prosecutor _directs_ the investigation, it gives Argentina a distinctive position:
constitutionally a fourth branch, and operationally the master of the investigation.

## 3. Recording a body that exists on paper but not in fact

The constitutional Ombudsman (Defensor del Pueblo, Art. 86) has stood **vacant since 2009** for lack
of the required congressional supermajority. The dossier records this as the fact it is — a body the
Constitution mandates but which has had no incumbent for years — rather than either omitting it or
implying it functions. This is the presence-state honesty rule applied to a temporal gap: the office
exists, the incumbent does not.

## 4. A prison figure that spans prisons and police lock-ups

Argentina's World Prison Brief custody total (133,585) includes about 12,885 people held in police
lock-ups, while its occupancy figure (122.9%) and capacity exclude them. Rather than flatten the two
into a single misleading ratio, the restricted claim states the custody total _with the lock-up count
named_, and the occupancy as the prison system's own — on the source's own bases. It is the same
principle as India's aggregate-across-systems handling, applied to a with/without-lock-ups nuance.

## 5. Zero-correction research

Argentina is the batch's one country whose adversarial verification returned **no corrections** —
every load-bearing quotation, statistic, date and tier allocation re-verified true. It is a useful
datapoint that the research-then-adversarially-verify pipeline can land a complex federal system
cleanly.

## Net schema change

**None.** Argentina reused the `federal`/`province` levels and the representative-subset pattern; the
unified-national-law finding is expressed by pairing `legalSystemScope: 'own'` /
`legislativeCompetence.legal-system: 'exclusive-federal'` with prose, and the fourth-branch
prosecution, the vacant Ombudsman and the prison caveat live in prose and the tests.
