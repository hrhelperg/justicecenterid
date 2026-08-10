# Police oversight — country evidence matrix

Which country carries which oversight evidence, and what each source actually supports.
Built from the verified corpus before any Wave 5 page was drafted.

## 1. Dedicated external police-investigation / complaints bodies

| Country          | Body                                           | Source                 | What the source supports                                                                                                                                                                                                                              |
| ---------------- | ---------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **New Zealand**  | Independent Police Conduct Authority           | `nz-ipca`              | Set up by Parliament in 1989; "we are not part of the NZ Police"; "under law we are fully independent"; receives and investigates complaints against the Police                                                                                       |
| **South Africa** | Independent Police Investigative Directorate   | `za-ipid`              | IPID Act 1 of 2011 (commenced 1 April 2012); investigates deaths in custody or resulting from police action, discharge of official firearms, and allegations of torture, assault or corruption                                                        |
| **Norway**       | Bureau for the Investigation of Police Affairs | `no-spesialenheten`    | "a national investigation and prosecution agency"; investigates cases where police or prosecuting-authority employees are suspected of criminal offences in the course of duty                                                                        |
| **Czechia**      | General Inspection of Security Forces          | `cz-gibs`              | Act No. 341/2011 Coll.; investigates suspected crimes by officers of the Police, Prison Service and Customs Administration, and opens their criminal prosecutions                                                                                     |
| **Denmark**      | Police Complaints Authority                    | `dk-police-complaints` | Act no. 404 of 21 April 2010, operational 1 January 2012; criminal cases against police and prosecution personnel, conduct complaints, deaths and serious injuries; independent of both police and prosecution; council chaired by a High Court judge |
| **Ireland**      | Fiosrú, Office of the Police Ombudsman         | `ie-fiosru`            | Opened 2 April 2025 on commencement of the Policing, Security and Community Safety Act 2024, replacing GSOC; receives and investigates complaints about Garda personnel                                                                               |

## 2. General-mandate ombuds and rights institutions

| Country     | Body                         | Source                 | What the source supports                                                                                                                                                |
| ----------- | ---------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sweden**  | Parliamentary Ombudsmen (JO) | `se-jo`                | Appointed by the Riksdag to ensure public authorities and their staff comply with the law; constitutional basis Instrument of Government Ch. 13 Art. 6                  |
| **Norway**  | Parliamentary Ombud          | `no-sivilombudet`      | Appointed by the Storting; an independent body; hosts Norway's National Preventive Mechanism under OPCAT, visiting police custody, prisons and psychiatric institutions |
| **Austria** | Volksanwaltschaft            | `at-volksanwaltschaft` | Constitutional body under Art. 148a B-VG; complaints of maladministration in federal administration; NPM under OPCAT with human-rights commissions                      |
| **Czechia** | Public Defender of Rights    | `cz-ochrance`          | Complaints against conduct or inaction of public authorities; inspections of places of deprivation of liberty; national equality body                                   |
| **Kenya**   | Article 59 commissions       | `ke-constitution`      | Art. 59 establishes the human-rights and equality commission with 59(4) permitting a statutory split; the ombudsman-type function under 59(2)(h)                        |

## 3. Counterexamples

| Country          | Source            | What it establishes                                                                                                                                                                                                                                                                                                          |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Nigeria**      | `ng-constitution` | Oversight split between two constitutional bodies under s 153 and the Third Schedule — the Police Service Commission (appointment, promotion, discipline of officers other than the Inspector-General) and the Nigeria Police Council (policy and general supervision). **No separate independent police-complaints board.** |
| **South Africa** | `za-ipid`         | Used as the counterexample on the ombuds page: where a police-specific statutory body exists, a general rights institution is not the complaints route.                                                                                                                                                                      |

## 4. Kenya — an honesty constraint carried forward

Kenya's Independent Policing Oversight Authority is a strong example on its face, and the
Kenya dossier records a limitation that Wave 5 must respect:

> its establishing Act (widely cited as the IPOA Act, No. 35 of 2011) was not re-fetched line
> by line, so it is stated at the level of the body and its function, not its detailed
> statutory mandate.

IPOA is therefore **not** used as a worked example on the Wave 5 institution pages. Doing so
would require asserting mandate detail the corpus explicitly declines to support. Kenya
appears only through its constitutional Article 59 commissions, which `ke-constitution` does
carry.

This is the source registry's `note` field doing exactly what it exists for — preventing a
source being reused for a claim it does not cover.

## 5. Countries the brief expected, and what the corpus actually holds

| Country        | Brief suggested                                                        | Corpus                                                                                      |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| United Kingdom | IOPC                                                                   | **No source**                                                                               |
| France         | IGPN, IGGN, Défenseur des droits                                       | **No source**                                                                               |
| Germany        | Land-level oversight, data protection                                  | **No oversight module at all**                                                              |
| United States  | Internal affairs, civilian review, inspectors general, consent decrees | **No oversight source**                                                                     |
| Canada         | CRCC, provincial bodies                                                | **No oversight source**                                                                     |
| Australia      | Federal and state integrity bodies                                     | **No oversight source**                                                                     |
| Spain          | National / autonomous / local oversight                                | **No oversight source**                                                                     |
| Switzerland    | Cantonal variation                                                     | **No oversight source**                                                                     |
| Japan          | Public safety commissions                                              | Covered by `jp-npa-police-of-japan-2020`, already used on the prefectural and command pages |
| Kenya          | IPOA                                                                   | Constrained — see §4                                                                        |
| Nigeria        | Police Service Commission                                              | **Yes** — used as the counterexample                                                        |
| South Africa   | IPID                                                                   | **Yes** — used as a worked example                                                          |

Nine of the twelve suggested countries have no oversight sourcing in the corpus. The pages
were written from what exists.

## 6. What this matrix implies for a future wave

The highest-value additions are the ones the brief expected and the corpus lacks. In rough
order of how much they would add:

1. **United Kingdom (England and Wales)** — the Independent Office for Police Conduct, scoped
   precisely to the policing jurisdiction it covers rather than to "the UK".
2. **France** — IGPN and IGGN as internal inspectorates, alongside the Défenseur des droits as
   a general rights institution. This pair would finally make an `internal-affairs` /
   `police-inspectorate` page possible, and France is the one system where the internal and
   the external body can be contrasted directly.
3. **Kenya** — re-fetch the IPOA Act to lift the current constraint.
4. **United States** — civilian review boards and inspectors general, with the fragmentation
   already established by `us-bjs-csllea-2018`.
