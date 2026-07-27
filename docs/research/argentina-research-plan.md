# Argentina — research plan

Argentina is country 8 of Batch C — a second federation, modelled a country after Mexico, and the
one whose adversarial verification returned zero corrections.

## Questions the pilot had to answer

1. **Federal or unitary, and which tier runs what?** — a federation on the reserved-powers rule
   (Art. 121); each province guarantees its own justice (Art. 5). The Argentine peculiarity: Congress
   enacts a single national Criminal Code, but "without altering the local jurisdictions", so it is
   applied by the federal OR the provincial courts by subject-matter (Art. 75 inc. 12). All four
   functions are dual, dominated by the provinces for ordinary crime. → a federal record + province
   records.
2. **What is the apex and review model?** — the Supreme Court of Justice of the Nation (Art. 108);
   diffuse review on the US model; no separate constitutional court.
3. **Where does prosecution sit?** — the federal Public Prosecution Service (Ministerio Público
   Fiscal) is a constitutionally autonomous "fourth branch" (Art. 120), and under the accusatory
   Federal Code of Criminal Procedure it directs the investigation.
4. **Police and prisons?** — four federal forces under the Ministry of Security, plus a provincial
   police in every province; the Federal Penitentiary Service (moved to the Ministry of Security by
   Decree 8/2024) plus provincial penitentiary services.
5. **Oversight?** — the Council of the Magistracy (Art. 114) and the National Penitentiary
   Prosecutor; and the constitutional Ombudsman (Art. 86), which has stood vacant since 2009.
6. **Prisons and numbers?** — World Prison Brief: 133,585 in custody at 31 Dec 2024 (including ~12,885
   in police lock-ups), rate 284; the prison system at 122.9% occupancy.

## The model exercise: sub-national records again

Like Mexico, Argentina cannot be captured at country level — the provinces run their own justice.
Modelled as a federal record + two representative Province records (Buenos Aires, Córdoba). The one
schema nuance distinguishing it from Mexico: Argentina's substantive law is _unified_ national (not
split), so `legalSystemScope: 'own'` at the federal level with
`legislativeCompetence.legal-system: 'exclusive-federal'`.

## Honesty points

- The **Ombudsman vacant since 2009** is recorded as the fact it is — a constitutionally mandated
  body with no incumbent for ~17 years.
- The **prison figure caveat**: the custody total includes police lock-ups; the occupancy excludes
  them. Stated on the source's own bases.
- A contested 2026 proposal about the Procurator-General's term is **not** described (proposed, niche).

## Sources targeted

The Constitution (Georgetown PDBA), the federal-forces page, the Federal Code of Criminal Procedure
sources, the Official Gazette, and the World Prison Brief.

## Model discipline

Reuse of the `federal`/`province` levels and the representative-subset pattern — no new schema.
