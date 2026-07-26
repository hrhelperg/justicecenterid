import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Czechia dossier — a unitary civil-law republic whose prosecution sits inside the Ministry of
 * Justice (Batch B).
 *
 * Research date: facts checked against primary and intergovernmental sources on 2026-07-26 (the
 * Constitutional Court's official English text of the Constitution; the EU e-Justice portal; the
 * prosecution, prison-service, police, ombudsman and GIBS official sites; and the European
 * Commission's Rule of Law report), and independently re-verified in an adversarial pass.
 *
 * The model result: Czechia is unitary — all four justice functions are national, no region record.
 * Its distinctive features are a tri-apex court structure (Supreme Court + a separate Supreme
 * Administrative Court + a separate Constitutional Court), a prosecution that is "a component of the
 * executive power … part of the Ministry of Justice" (recently reformed, by an enacted 2024 law, to
 * insulate the Prosecutor General), and the absence of any national judicial council.
 *
 * Translation note: the Constitutional Court's official English text renders "státní zastupitelství"
 * as "State Attorney's Office" (Art. 80); the service itself brands in English as the "Public
 * Prosecutor's Office", headed by the "Prosecutor General's Office" (Nejvyšší státní zastupitelství).
 * Both denote the same institution; this dossier uses "Public Prosecutor's Office" and notes the
 * constitutional rendering.
 */
const CZ_PRISON_DENSITY: RestrictedClaim = {
  id: 'cz-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Czech prisons held 19,569 people including those on remand, against a total capacity of 20,301 places — a prison density of 96.4 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024.',
  jurisdiction: 'CZ',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Prison Service of the Czech Republic), at one reference date. A density of 96.4 means the system as a whole held slightly fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const CZECHIA: CountryDossier = {
  countryCode: 'CZ',
  slug: 'czechia',
  name: 'Czechia',
  officialName: 'the Czech Republic',
  independentBodyNoun: 'a Czech government body',
  summary:
    'Czechia is a unitary, civil-law republic under its 1993 Constitution, with all justice functions national. It has three apex courts — a Supreme Court, a separate Supreme Administrative Court, and a separate Constitutional Court — a public prosecution service that is part of the Ministry of Justice, and no national judicial council.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['cz'],
  sources: ['cz-constitution', 'cz-ejustice'],
  uncertainty: [
    "The exact Criminal Procedure Code provision under which the prosecutor supervises the legality of pre-trial proceedings was not fetched from primary statutory text; the prosecutor's direction of the pre-trial phase rests here on the Constitution (Art. 80) and the prosecution service's own account.",
    "The Police Act (No. 273/2008) and the Prison Service Act (No. 555/1992) are named from the institutions' own references; the primary statutory texts were not separately fetched.",
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Czechia is a unitary parliamentary republic with a civil-law tradition, governed by the Constitution of the Czech Republic (constitutional Act No. 1/1993), in force since 1 January 1993, together with the Charter of Fundamental Rights and Freedoms. Judicial power is exercised "in the name of the Republic by independent courts" (Article 81), and only a court may decide on guilt and punishment (Article 90).',
      claim: 'fact',
      sources: ['cz-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'A prosecution inside the justice ministry',
      text: 'The most distinctive feature of the Czech system is where its prosecution sits. The Public Prosecutor\'s Office is not an independent branch: on its own account it "is conceived as a component of the executive power … part of the Ministry of Justice". That places Czechia at the executive-attached end of the spectrum — further even than Austria, whose prosecution is a separate service answering to the Minister. A 2024 reform, described on the prosecution page, has since added protections for the Prosecutor General\'s tenure.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions. A single national police force under the Ministry of the Interior investigates, supervised by the public prosecution. Three apex courts sit at the top: the Supreme Court, a separate Supreme Administrative Court, and a separate Constitutional Court. The prisons are run by a national Prison Service under the Ministry of Justice. And oversight runs through the Ombudsman and an independent inspectorate of the security forces.',
      claim: 'fact',
      sources: ['cz-ejustice', 'cz-police', 'cz-vezenska-sluzba'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Czechia',
      summary:
        'A unitary republic under the 1993 Constitution, with independent courts, a tri-apex structure, and a separate Constitutional Court to protect constitutionality.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-constitution', 'cz-ejustice'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Czechia became an independent state on 1 January 1993, and its Constitution took effect the same day. It is a unitary state: it has self-governing regions (kraje) and municipalities, but all four justice functions are national. The central administrative authority for the courts is the Ministry of Justice (Article 91 organises the courts; the e-Justice portal confirms the ministerial administration).',
          claim: 'fact',
          sources: ['cz-constitution', 'cz-ejustice'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Constitutional Court protects constitutionality',
          text: 'The Constitution establishes a separate Constitutional Court (Ústavní soud, in Brno) as "the judicial body responsible for the protection of constitutionality" (Article 83). It has fifteen Justices appointed for ten-year terms by the President with the Senate\'s consent (Article 84), and its jurisdiction (Article 87) includes annulling statutes that conflict with the constitutional order and deciding individual constitutional complaints. It sits outside the ordinary court hierarchy — the e-Justice portal notes that "the special court system consists only of the Constitutional Court".',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'No national judicial council',
          text: 'Unlike many European states, Czechia has no national self-governing council of the judiciary. Court administration is exercised by the Ministry of Justice (directly and through court presidents); the only judicial councils are advisory bodies established within individual courts. Creating a national judicial council has been a recurring reform debate but is not enacted, and this dossier does not imply one exists.',
        },
      ],
      uncertainty: [
        "Constitutional articles are cited from the Constitutional Court's official English translation; the authoritative text is Czech.",
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Czechia',
      summary:
        'A single national police force under the Ministry of the Interior, organised into a Presidium, central units and fourteen regional directorates that are units of the national force.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-police'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Czechia is national. The Police of the Czech Republic (Policie České republiky) is a single national force under the Ministry of the Interior, governed by Act No. 273/2008. It is organised as the Police Presidium (Policejní prezidium), nationwide central units (celostátní útvary), and fourteen Regional Police Directorates (Krajská ředitelství policie).',
          claim: 'fact',
          sources: ['cz-police'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Regional in name, national in fact',
          text: 'The fourteen regional directorates share their boundaries with the self-governing regions, but they are internal territorial units of the national police force — not police services run by the regions. Czechia has one police corps, not a set of regional or federal forces.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and statutory basis. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        "The Police Act (No. 273/2008) is named from the force's own references; the primary statute was not separately fetched.",
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Czechia',
      summary:
        'District, regional and high courts under the Supreme Court, a separate Supreme Administrative Court, and a separate Constitutional Court — three apex bodies.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-constitution', 'cz-ejustice'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Constitution sets the court system: "The court system comprises the Supreme Court, the Supreme Administrative Court, superior, regional, and district courts" (Article 91(1)). The ordinary hierarchy runs from district courts (okresní soudy) through regional courts (krajské soudy) and two high courts (vrchní soudy, in Prague and Olomouc) up to the Supreme Court (Nejvyšší soud, in Brno), the highest court save for matters reserved to the Constitutional or Supreme Administrative Court (Article 92).',
          claim: 'fact',
          sources: ['cz-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Three apex courts',
          text: 'Czechia has three courts of last resort in their own domains: the Supreme Court for ordinary civil and criminal matters, a separate Supreme Administrative Court (Nejvyšší správní soud, in Brno) as the administrative court of last instance, and a separate Constitutional Court for constitutional matters. This tri-apex shape — two apex ordinary courts plus a constitutional court — is the same structural family as Austria, and the dossier records it as a fact rather than assuming a single supreme court.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court and the specialised competences of the high and regional courts have not been set out from the procedural statutes beyond the constitutional articles cited and the e-Justice overview.',
        },
      ],
      uncertainty: [
        'The court hierarchy is cited from the Constitution and the e-Justice portal; the courts-organisation statute (Act No. 6/2002) was not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Czechia',
      summary:
        'The Public Prosecutor\'s Office — "a component of the executive power … part of the Ministry of Justice" — headed by the Prosecutor General\'s Office, with an enacted 2024 reform insulating the Prosecutor General.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-constitution', 'cz-verejnazaloba', 'cz-ec-rol-2024'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution is conducted by the Public Prosecutor\'s Office (státní zastupitelství — rendered "State Attorney\'s Office" in the constitutional English text). The Constitution places it in executive power: it "shall issue and argue public indictments in criminal proceedings" and performs other statutory functions (Article 80), with its status set by Act No. 283/1993 (effective 1 January 1994). The system is hierarchical, headed by the Prosecutor General\'s Office (Nejvyšší státní zastupitelství, in Brno) above high, regional and district offices.',
          claim: 'fact',
          sources: ['cz-constitution', 'cz-verejnazaloba'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Part of the ministry, not merely under it',
          text: "Czechia's prosecution is at the executive-attached end of the range on this site. On the service's own account it \"is conceived as a component of the executive power. It is part of the Ministry of Justice, and it has no independent relations with constitutional authorities such as the Parliament and the President.\" Where Austria's prosecution is a separate service answering to the Minister, and Portugal's is constitutionally autonomous, Czechia's is embedded within the justice ministry.",
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A 2024 reform, recorded with its dates',
          text: "The European Commission's 2024 Rule of Law Report records that an amendment to Act No. 283/1993 was adopted by Parliament on 7 March 2024 and entered into force on 1 July 2024, introducing a seven-year, non-renewable term for the Prosecutor General and providing that chief prosecutors may be dismissed only through disciplinary proceedings. This is stated as enacted law, with its dates, attributed to the Commission — not characterised beyond what that source records.",
        },
      ],
      uncertainty: [
        "The prosecution's day-to-day supervision of pre-trial proceedings rests on the Constitution and the service's own account; the exact Criminal Procedure Code section was not fetched from primary text.",
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Czechia',
      summary:
        'The police conduct investigations, but the pre-trial phase is supervised and directed by the public prosecution.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-constitution', 'cz-verejnazaloba'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Criminal investigation in Czechia follows the civil-law pattern: the police carry out the investigative work, but the pre-trial phase is supervised and directed by the public prosecution. The Constitution makes the prosecution responsible for issuing and arguing public indictments (Article 80), and the criminal-police service investigates under the prosecutor's supervision of the legality of the preparatory proceedings.",
          claim: 'fact',
          sources: ['cz-constitution', 'cz-verejnazaloba'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who supervises. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        "The exact statutory provision governing prosecutorial supervision of pre-trial proceedings was not fetched from the primary Criminal Procedure Code text; the role is established from the Constitution and the prosecution's own account.",
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Czechia',
      summary:
        'The Prison Service of the Czech Republic under the Ministry of Justice — and a properly scoped Council of Europe figure showing the system just under capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-vezenska-sluzba', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [CZ_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Czechia are run by a single national service, the Prison Service of the Czech Republic (Vězeňská služba České republiky), under the Ministry of Justice and governed by Act No. 555/1992. It manages the remand prisons, prisons and forensic-detention facilities through a Directorate General, and also operates the Judicial Guard (justiční stráž) that secures courts and prosecution premises. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['cz-vezenska-sluzba'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Czech prisons held 19,569 people, including those on remand, against a total capacity of 20,301 places — a prison density of 96.4 inmates per 100 places. That density below 100 means the system as a whole held slightly fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons and their regimes, forensic detention, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        "The Prison Service Act (No. 555/1992) is named from the service's own account; the primary statute was not separately fetched.",
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Czechia',
      summary:
        'The Ombudsman, an independent inspectorate that investigates crimes by security-force officers, and ministerial court administration in the absence of a judicial council.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['cz-ochrance', 'cz-gibs', 'cz-ejustice'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Public Defender of Rights (Veřejný ochránce práv)',
              description:
                'The Ombudsman, based in Brno, handles complaints against the conduct or inaction of public authorities, conducts inspections of places where persons are deprived of liberty (prisons, detention, psychiatric hospitals and social-care homes), and acts as the national equality and anti-discrimination body.',
            },
            {
              term: 'General Inspection of Security Forces (GIBS)',
              description:
                'An independent body (governed by Act No. 341/2011) that searches for, detects and investigates suspected crimes by officers of the Police of the Czech Republic, the Prison Service and the Customs Administration, and opens their criminal prosecutions.',
            },
            {
              term: 'Court administration (no national judicial council)',
              description:
                'Czechia has no national self-governing judicial council. The administration of the courts is exercised by the Ministry of Justice, directly and through court presidents; only advisory councils exist within individual courts.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the bodies that oversee the courts, the prosecution and the security forces, and their basis. It does not assess how effective any of them is.',
        },
      ],
      uncertainty: [
        'The detailed powers and findings of these bodies were not researched beyond their remits.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Czechia',
      summary:
        'Every source used for the Czechia pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'cz-constitution',
        'cz-ejustice',
        'cz-verejnazaloba',
        'cz-police',
        'cz-vezenska-sluzba',
        'cz-ochrance',
        'cz-gibs',
        'cz-ec-rol-2024',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Czechia pages rest on the Constitution (the Constitutional Court's official English text), the EU e-Justice portal, the official sites of the Public Prosecutor's Office, the Police, the Prison Service, the Ombudsman and the General Inspection of Security Forces, the European Commission's 2024 Rule of Law Report for the prosecution reform, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026 and independently re-checked.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed, and one flagged limit',
          text: 'The Constitution and the Commission report were fetched as PDFs and text-extracted; the institutional pages were read directly. Institution names carry a Czech/English rendering caveat (the constitutional "State Attorney\'s Office" versus the service\'s own "Public Prosecutor\'s Office"). One deliberate limit: the exact Criminal Procedure Code section for prosecutorial supervision of pre-trial proceedings was not fetched from primary text, so the investigations page anchors that role to the Constitution and the prosecution\'s own account rather than to a section number.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/czechia-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Czechia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Czechia (the Institute of Criminalistics and the forensic-expertise institutes) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Czechia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Czechia involve the national police, the Customs Administration, and the Schengen and EU customs context, and could not be researched to the standard required here without risking an inaccurate description of a security-adjacent function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Czechia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Czech institutional history — the 1993 dissolution of Czechoslovakia and the building of the new state's courts and prosecution, and the post-1989 transition — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Czechia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1993 Constitution, Act No. 283/1993 on the prosecution, and the 2024 prosecution reform — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
