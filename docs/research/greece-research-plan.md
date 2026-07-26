# Greece — research plan

Greece is the sixth and final country of Batch B. Its research had to combine a distinctive
court structure with real sourcing friction — several Greek official sites were bot-walled — and
handle both honestly.

## Questions the pilot had to answer

1. **Unitary or federal?** — Constitution Art. 101–102: unitary, decentralised. No subnational
   justice tier. The one special feature, Mount Athos (Art. 105), is a narrow ecclesiastical
   autonomy where the State keeps exclusive responsibility for public order and security. → one `gr`
   record, all functions `own`, no region record; Mount Athos in prose only.
2. **How many apex courts, and is there a constitutional court?** — three co-equal supreme courts
   (Areios Pagos, the Council of State, the Court of Audit), confirmed by e-Justice; and **no**
   dedicated constitutional court — review is diffuse (Art. 93§4, every court), with a
   conflict-resolving Special Highest Court (Art. 100).
3. **Where does the prosecution sit?** — inside the judiciary, as independent magistrates (Arts.
   87–88; e-Justice), with the Ministry of Justice responsible only for general service conditions.
   The Italy end of the spectrum, opposite Poland.
4. **Police, investigation, prisons?** — the Hellenic Police is a single national force under the
   Ministry of Citizen Protection; the prosecutor directs investigations and an examining magistrate
   conducts the judicial investigation of felonies; prisons are run by the **same** Ministry of
   Citizen Protection via the General Secretariat for Anti-crime Policy.
5. **Prison numbers?** — SPACE I 2024: 10,203 / 10,775 / density 94.7 (under capacity).

## Sources targeted, and the substitutions forced by bot walls

- Constitution: the Hellenic Parliament's official English PDF was HTTP 403, so the **Constitute**
  unofficial translation was used, cross-checked against the current e-Justice portal.
- Police & prisons ministry placement: the Greek official sites (`astynomia.gr`, `minocp.gov.gr`)
  were HTTP 403, so the **U.S. State Department 2022 report** was used and named as a
  foreign-government secondary source.
- Court structure and prosecution status: EU **e-Justice** (current).
- Prison figure: shared **CoE SPACE I 2024**.

## What was left flagged or deferred

- The **CPC article numbers** for police-as-investigators, and the **instrument/date** transferring
  corrections to the Ministry of Citizen Protection, were not fetched — flagged, not asserted.
- **Forensics, border/customs, history, timeline** deferred (forensics/border additionally
  constrained by the bot-walled Greek sites).

## Model discipline

No new schema. Greece reuses unitary/national values, the multi-apex prose pattern, the
prosecution-inside-the-judiciary description, and the diffuse-review-no-constitutional-court
handling. Its distinctiveness — and its sourcing caveats — live in prose and in the tests. Greek
script is given with transliteration and an English rendering throughout, and a rendered-HTML test
asserts the Greek-script court names survive to the page.
