# Poland — source register

Research date: **2026-07-26**. Every source below was read or retrieved on that date, confirmed to
contain the facts attributed to it, and independently re-checked in an adversarial verification
pass. Four load-bearing Polish statutory passages were additionally re-confirmed by hand at
authoring time (the prosecution personal union, the police central organ, the KRS Art. 9a, the
Prison Service subordination).

**Neutrality is load-bearing here.** Enacted measures are stated as facts with statutory citations;
contested assessments are carried only by attribution to a named, dated official/EU source; and the
site adds no characterisation of its own. Developments reported only by news media are excluded.

| id                    | what it is                                                                    | how accessed                                          | supports                                                                                                                                                                                                          | scope limit                                                                           |
| --------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `pl-constitution`     | Constitution of the Republic of Poland 1997, official EN                      | Constitutional Tribunal site, read directly           | Art. 3 (unitary); 10, 173 (separation of powers); 175 (courts); 178–179 (independence, appointment); 183–184 (Supreme Court, admin courts); 186–187 (KRS); 188–190 (Constitutional Tribunal); 208–210 (ombudsman) | a constitutional text; Polish authoritative; renders NSA "Chief Administrative Court" |
| `pl-prokuratura`      | Law on the Prosecutor's Office 2016 (Dz.U. 2016 poz. 177), consolidated       | Sejm ELI API, fetched & confirmed verbatim            | Art. 1 § 2 — the Prosecutor-General is the supreme organ of the prosecution and the office is held by the Minister of Justice (personal union); statutory (not constitutional) basis                              | the prosecution's status and head; statutory only                                     |
| `pl-police`           | Law on the Police 1990 (Dz.U. 1990/179), consolidated                         | Sejm ELI API, fetched & confirmed verbatim            | Art. 1(1) (single national force); Art. 5(1) (Chief Commissioner subordinate to the Minister of Internal Affairs)                                                                                                 | the force's structure and central organ                                               |
| `pl-kpk`              | Code of Criminal Procedure 1997 (Dz.U. 1997/555), consolidated                | Sejm ELI API, fetched & confirmed verbatim            | Art. 298 § 1, 311 § 1–3 (śledztwo by prosecutor, dochodzenie by police), 326 § 1 (prosecutor supervises pre-trial)                                                                                                | who directs/supervises the investigation; not technique                               |
| `pl-sluzba-wiezienna` | Law on the Prison Service 2010 (Dz.U. 2010/523), consolidated                 | Sejm ELI API, fetched & confirmed verbatim            | Art. 1 — the Prison Service is subordinate to the Minister of Justice                                                                                                                                             | the prison authority; no statistics taken from here                                   |
| `pl-krs-2017`         | Law of 8 Dec 2017 amending the KRS Law (Dz.U. 2018 poz. 3), consolidated      | Sejm ELI API, fetched & confirmed verbatim (in force) | Art. 9a — the Sejm elects the fifteen judicial members of the KRS (previously elected by assemblies of judges under the 2011 law)                                                                                 | the enacted change to the selection method; stated factually                          |
| `pl-cjeu-c204-21`     | CJEU Case C-204/21, Commission v Poland, judgment 5 June 2023 (FRA reference) | FRA case-law reference, read directly                 | the Court's holding that Poland failed Art. 19(1) TEU obligations re the Disciplinary Chamber "whose independence and impartiality are not guaranteed"                                                            | an attributed, dated judicial finding; not the site's own view                        |
| `pl-ec-rol-2025`      | 2025 Rule of Law Report — Country Chapter Poland (SWD(2025) 921), 8 Jul 2025  | European Commission PDF                               | separation of Prosecutor-General from Minister of Justice "yet to be adopted"; certain judiciary laws not in force due to presidential referral to the Constitutional Tribunal                                    | attributed, dated; distinguishes proposed from enacted                                |
| `coe-space-i-2024`    | Council of Europe Annual Penal Statistics — SPACE I 2024 (shared)             | Lausanne PDF, `pypdf`                                 | 73,822 inmates / 86,109 places / density 85.7, reference 31 Jan 2024 (Tables 3 & 16)                                                                                                                              | a single-day snapshot; not comparable between countries                               |

## How the contested material is handled

- **Enacted, stated as fact with a citation:** the 2016 personal union of Prosecutor-General and
  Minister of Justice (`pl-prokuratura`, Art. 1 § 2); the 2017 change to the KRS judicial-member
  selection (`pl-krs-2017`, Art. 9a).
- **Contested, stated only by dated attribution:** the CJEU's C-204/21 finding (`pl-cjeu-c204-21`)
  and the Commission's 2025 report (`pl-ec-rol-2025`). The pages add no view of their own; a test
  scans all reader-facing Poland prose and fails on partisan or characterising terms.
- **Excluded:** post-report developments reported only by news media (no primary/official source).

## Access notes and flagged limits

- The Sejm's **official English Constitution** page was bot-walled; the Constitutional Tribunal's
  English text was used instead. The **EUR-Lex/InfoCuria full text of C-204/21** was bot-walled; the
  **FRA** official reference was used. Polish statutes were fetched from the Sejm's official **ELI**
  legal-acts service.
- **NSA naming:** the official constitutional translation renders the Naczelny Sąd Administracyjny
  as "Chief Administrative Court"; the conventional "Supreme Administrative Court" was not
  independently verified, so both are shown.
- **Common-court tier names** (district/regional/appellate) were not fetched from a primary source
  and are not asserted.

## Deferrals

`forensics`, `border-and-customs`, `history`, `timeline` — deferred with reasons, no content, no
routes.
