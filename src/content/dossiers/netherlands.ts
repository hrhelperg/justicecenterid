import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Netherlands dossier — a decentralised-unitary civil-law state (Batch A).
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-26,
 * and independently re-verified by an adversarial fact-check pass (all six load-bearing facts
 * confirmed, no corrections).
 *
 * Source access: the official consolidated-legislation site wetten.overheid.nl was unreachable
 * from the research environment, so the exact statutory text of the Politiewet 2012 and the Wet
 * op de rechterlijke organisatie is NOT quoted. The Constitution is cited from the government's
 * official English translation (fetched and text-extracted); the institutional facts rest on the
 * Public Prosecution Service's own site, the Government of the Netherlands, the Custodial
 * Institutions Agency, the judiciary's portal, and the EU e-Justice Portal. The source register
 * records the access path for each.
 *
 * Two facts distinguish the Netherlands from the common-law pilots and are held in prose rather
 * than the schema: the Public Prosecution Service (Openbaar Ministerie) is part of the judiciary
 * but under the political responsibility of the Minister of Justice and Security — it is NOT an
 * independent prosecutor like the Irish DPP — and Article 120 of the Constitution forbids the
 * courts from reviewing the constitutionality of Acts of Parliament, so there is no
 * constitutional court.
 */
const NL_PRISON_DENSITY: RestrictedClaim = {
  id: 'nl-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, prisons in the Netherlands held 9,683 people including those on remand, against a total capacity of 10,344 places — a prison density of 93.6 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'NL',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Custodial Institutions Agency, DJI), at one reference date. A density of 93.6 means the system as a whole held fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with the Ireland, Germany or any other country page. It is a single-day snapshot, not an average over the year.',
};

export const NETHERLANDS: CountryDossier = {
  countryCode: 'NL',
  slug: 'netherlands',
  name: 'Netherlands',
  articleName: 'the Netherlands',
  officialName: 'the Netherlands — the European country within the Kingdom of the Netherlands',
  independentBodyNoun: 'a Dutch government body',
  summary:
    'The Netherlands is a decentralised unitary, civil-law state with national justice institutions: one national police force, one Public Prosecution Service (the Openbaar Ministerie, which is part of the judiciary but under the Minister of Justice), one court system culminating in the Hoge Raad, and one prison agency. There is no constitutional court — Article 120 of the Constitution forbids judicial review of the constitutionality of statutes.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['nl'],
  sources: ['nl-constitution', 'nl-ejustice-courts'],
  uncertainty: [
    'This describes the European country of the Netherlands. Aruba, Curaçao and Sint Maarten are separate countries of the Kingdom of the Netherlands with their own justice systems (sharing the Hoge Raad as court of cassation), and the Caribbean Netherlands have their own arrangements; none of that is described here.',
    'The exact statutory text of the Police Act 2012 and the Judiciary (Organisation) Act was not quoted, because the official consolidated-legislation site was unreachable; the substance rests on other official sources.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'The country, not the Kingdom',
      text: 'These pages describe the European country of the Netherlands. The Kingdom of the Netherlands also comprises Aruba, Curaçao and Sint Maarten — each a separate country with its own justice system — and the Caribbean Netherlands (the BES islands). Those systems are not described here. The Hoge Raad der Nederlanden sits as the court of cassation for the whole Kingdom, but everything else on these pages is the institutions of the European Netherlands.',
    },
    {
      kind: 'paragraph',
      text: 'The Netherlands is a decentralised unitary state with a civil-law legal tradition. Provinces and municipalities have real autonomy over their own administrative affairs, but the four justice functions are national: there is no provincial or municipal police force, court system, prosecution service or prison authority. One description of the justice system is therefore an accurate description of the whole country.',
      claim: 'fact',
      sources: ['nl-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Two things that surprise readers from common-law systems',
      text: 'Dutch institutions carry familiar-sounding names but two features cut against the common-law default. First, the public prosecutor is not independent of the government: the Openbaar Ministerie is part of the judiciary, but the Minister of Justice and Security carries political responsibility for it and, with the Board of Prosecutors General, sets its priorities — the opposite of the deliberately independent prosecutor described on the Ireland pages. Second, there is no constitutional court and the courts may not test an Act of Parliament against the Constitution: Article 120 states that "the constitutionality of Acts of Parliament and treaties shall not be reviewed by the courts". These are the two things worth carrying into the module pages.',
    },
    {
      kind: 'paragraph',
      text: 'Four institutions carry most of the system. The national police (Politie) is a single force under the Police Act 2012. The Openbaar Ministerie (Public Prosecution Service) decides on and conducts prosecutions and directs criminal investigations. The courts — district courts, courts of appeal, and the Hoge Raad — form one national hierarchy. The Custodial Institutions Agency (Dienst Justitiële Inrichtingen, DJI) runs the prisons. Each is national; none is duplicated at a provincial or municipal level.',
      claim: 'fact',
      sources: ['nl-gov-police', 'nl-om', 'nl-ejustice-courts', 'nl-dji'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of the Netherlands',
      summary:
        'A decentralised-unitary, civil-law system under a codified constitution — with two features that surprise common-law readers: a prosecution service inside the judiciary but under the minister, and no judicial review of statutes.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-constitution', 'nl-ejustice-courts', 'nl-gov-ccp-2029'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Netherlands is a constitutional monarchy with a civil-law legal tradition. Its justice system rests on the Constitution of the Kingdom of the Netherlands (the Grondwet), whose Chapter 6 governs the administration of justice, and on codes and Acts of Parliament. Under Article 113, the trial of offences is the responsibility of the judiciary, and a sentence depriving a person of liberty may be imposed only by the judiciary.',
          claim: 'fact',
          sources: ['nl-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'No constitutional court, by constitutional command',
          text: 'Unlike Germany or many civil-law states, the Netherlands has no constitutional court and no judicial review of primary legislation. Article 120 of the Constitution provides that "the constitutionality of Acts of Parliament and treaties shall not be reviewed by the courts". Dutch courts may still set aside a statute that conflicts with a directly-effective treaty provision (for example the European Convention on Human Rights), but they may not strike down an Act of Parliament for unconstitutionality. This is a defining structural fact of the system.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Courts specified by statute',
              description:
                'Article 116 provides that the courts forming part of the judiciary are specified by Act of Parliament, and that their organisation, composition and powers are regulated by statute. There is one national court system, not a provincial or municipal one.',
            },
            {
              term: 'Judicial independence',
              description:
                'Article 117 provides that judges responsible for the administration of justice, and the Procurator General at the Supreme Court, are appointed for life by Royal Decree and may be suspended or dismissed only by a court designated by law — the constitutional guarantee of judicial independence.',
            },
            {
              term: 'Prosecution inside the judiciary',
              description:
                'The Public Prosecution Service is part of the judiciary, but — unlike the courts — it is under the political responsibility of the Minister of Justice and Security. The prosecution module explains why this makes the Dutch prosecutor a different kind of office from an independent Director of Public Prosecutions.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A new Code of Criminal Procedure is in the legislative pipeline',
          text: 'The Netherlands is replacing its 1926 Code of Criminal Procedure. The government has stated that the new Code is planned to enter into force on 1 April 2029, with the first enactment act (Books 1–6) submitted to the House of Representatives in 2023 and further books to follow. Because it is procedural reform still in the legislative process — not an enacted-with-date restructuring of the courts, prosecution, police or prisons — it is noted here rather than recorded as a scheduled institutional change.',
        },
      ],
      uncertainty: [
        "The constitutional articles are cited from the government's official English translation; the authoritative text is the Dutch original.",
        'The relationship between directly-effective treaty review (Articles 93–94) and the Article 120 bar is noted but not researched in detail.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in the Netherlands',
      summary:
        'One national police force under the Police Act 2012 — its structure, the Commissioner, and the dual authority under which it acts: the public prosecutor for criminal enforcement, the mayor for public order.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-gov-police', 'nl-ejustice-professions'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Netherlands has one national police force (the Politie), established in its current form by the Police Act 2012 (Politiewet 2012). It is headed by a single Commissioner and consists of ten Regional Units, a Central Unit, and a Police Services Centre. The Minister of Justice and Security has full ministerial accountability for the proper functioning of the police.',
          claim: 'fact',
          sources: ['nl-gov-police'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'One force, two authorities',
          text: 'A distinctive feature of Dutch policing is that the single national force acts under two separate authorities depending on the task. For the enforcement of the criminal law it acts under the authority (gezag) of the public prosecutor; for the maintenance of public order it acts under the authority of the mayor (burgemeester) of the municipality. This split of authority over one force is the Dutch answer to a question other systems answer by having separate forces.',
        },
        {
          kind: 'paragraph',
          text: 'Before 2013 the Netherlands had 25 regional police forces and a national force; the Police Act 2012 merged them into the single national police. The force is national and unitary — there is no separate provincial or municipal police in the Netherlands.',
          claim: 'fact',
          sources: ['nl-gov-police'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the legal status and national structure of the police. It does not describe deployment, tactics, surveillance, intelligence capability or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The exact statutory text of the Police Act 2012, including the articles establishing the dual authority (gezag), was not quoted because the official legislation site was unreachable; the substance rests on the Government of the Netherlands and e-Justice pages.',
        'The internal organisation, ranks and specialist units of the national police have not been researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in the Netherlands',
      summary:
        'One national hierarchy — district courts, courts of appeal, and the Hoge Raad as court of cassation — plus the separate highest administrative courts, and why there is no constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-ejustice-courts', 'nl-constitution', 'nl-rechtspraak'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Netherlands has a single national court system. Ordinary cases begin in one of eleven district courts (rechtbanken), which also hear minor matters through their sub-district (kanton) sections; appeals go to one of four courts of appeal (gerechtshoven); and the court of final appeal is the Hoge Raad der Nederlanden (the Supreme Court of the Netherlands), the highest court in civil, criminal and tax matters.',
          claim: 'fact',
          sources: ['nl-ejustice-courts'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Cassation, not a general re-hearing',
          text: 'The Hoge Raad is a court of cassation: under Article 118 of the Constitution it is responsible for annulling judgments that infringe the law. It reviews the application of the law rather than re-trying the facts — a civil-law model of a supreme court that differs from an appeal court hearing a case afresh.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The ordinary courts',
              description:
                'Eleven district courts (rechtbanken) at first instance, four courts of appeal (gerechtshoven), and the Hoge Raad at the apex for civil, criminal and tax law.',
            },
            {
              term: 'Separate highest administrative courts',
              description:
                'Administrative law does not funnel into the Hoge Raad. Its highest courts are separate: the Administrative Jurisdiction Division of the Council of State (Raad van State) for general administrative law, the Central Appeals Tribunal (Centrale Raad van Beroep) for social-security and civil-service matters, and the Trade and Industry Appeals Tribunal (College van Beroep voor het bedrijfsleven) for economic regulation. There is no single unified apex court.',
            },
            {
              term: 'No constitutional court',
              description:
                'There is no constitutional court, because Article 120 forbids the courts from reviewing the constitutionality of Acts of Parliament. The place a constitutional court would occupy in other systems is, in the Netherlands, deliberately empty.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction and thresholds of each court, the specialised chambers, and the routes of appeal have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        "The number of district and appeal courts and the apex arrangement are cited from the e-Justice Portal and the judiciary's own portal; the underlying Judiciary (Organisation) Act was not read in full.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in the Netherlands',
      summary:
        'The Openbaar Ministerie — part of the judiciary, governed by the Board of Prosecutors General, and under the political responsibility of the Minister of Justice. Why that makes it a different office from an independent prosecutor.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-om', 'nl-ejustice-professions'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in the Netherlands is conducted by the Openbaar Ministerie (OM), the Public Prosecution Service. Its tasks are supervising the police in the investigation of criminal offences, prosecuting offences, and bringing suspects before the courts. Nationally it is governed by the Board of Prosecutors General (College van procureurs-generaal) in The Hague.',
          claim: 'fact',
          sources: ['nl-om'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Inside the judiciary, but answerable to a minister',
          text: 'Two facts about the OM must be held together. It states that "the Public Prosecution Service and the courts together make up the judiciary" — so it is not part of the police, and Dutch prosecutors are magistrates. But political responsibility for the OM lies with the Minister of Justice and Security, who together with the Board of Prosecutors General decides on priorities for investigation and prosecution. So the Dutch prosecutor is not the independent office described on the Ireland pages: it sits within the judiciary yet under ministerial political responsibility. That combination is the single most important thing to understand about prosecution in the Netherlands.',
        },
        {
          kind: 'paragraph',
          text: 'In criminal investigations the prosecutor is in charge: the public prosecutor directs the investigation carried out by the police. The decision whether and what to prosecute rests with the OM, not with the investigating officers.',
          claim: 'fact',
          sources: ['nl-ejustice-professions'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "This page states the OM's place in the judiciary and its relationship to the minister as the official sources describe them. It does not research how ministerial responsibility operates in any individual case, nor the separate office of the Procurator General at the Supreme Court, which is a distinct role not examined here.",
        },
      ],
      uncertainty: [
        "The Minister's statutory power to give instructions to the OM (the aanwijzingsbevoegdheid) rests in the Judiciary (Organisation) Act, whose exact text was not quoted; the political-responsibility relationship is established by the e-Justice Portal.",
        'The distinct office of the Procurator General at the Hoge Raad has not been researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in the Netherlands',
      summary:
        'How investigation and charging fit together: the national police investigate under the direction of the public prosecutor, who decides whether to prosecute.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-ejustice-professions', 'nl-gov-police'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in the Netherlands is carried out by the national police, but it is directed by the public prosecutor: the Openbaar Ministerie is in charge of investigations and works with the police and other investigation services. This is a different arrangement from systems where the police both investigate and decide whether to charge.',
          claim: 'fact',
          sources: ['nl-ejustice-professions'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prosecutor-led investigation',
          text: 'In the Dutch model the prosecutor leads the investigation from the outset, rather than reviewing a completed file at the end. Because the same office that directs the investigation also decides whether to prosecute, the check here is different from the Irish separation of investigator and charging authority: it comes from the prosecutor being a magistrate within the judiciary, and from judicial control of coercive measures, rather than from splitting the two decisions between two bodies. This page describes that allocation; it is our framing, grounded in the official description of who is in charge.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who directs the investigation. It does not describe investigative techniques, surveillance or forensic methods, or the evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The role of the investigating judge (rechter-commissaris) and judicial authorisation of coercive measures is noted as existing but has not been researched from the primary statutes.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in the Netherlands',
      summary:
        'Prisons run by a single national agency (DJI) — and a properly scoped Council of Europe figure showing the system below capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-dji', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [NL_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in the Netherlands are run by a single national body, the Custodial Institutions Agency (Dienst Justitiële Inrichtingen, DJI), an agency of the Ministry of Justice and Security. After a court imposes a custodial sentence or measure, the ministry is responsible for its enforcement, which is delegated to DJI. Because the system is national, a figure for the whole system describes the whole system, with none of the sub-national aggregation that qualifies a German or United States prison figure.',
          claim: 'fact',
          sources: ['nl-dji'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 prisons in the Netherlands held 9,683 people, including those on remand, against a total capacity of 10,344 places — a prison density of 93.6 inmates per 100 places. That density below 100 means the system as a whole held fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the Ireland or Germany pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual institutions, the distinct regimes (including the TBS forensic-psychiatric measure and youth detention), non-custodial sanctions, probation, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of DJI and the individual institutions have not been researched.',
        'Non-custodial sanctions, probation, and the inspection of detention conditions have not been researched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in the Netherlands',
      summary:
        'The National Ombudsman — a constitutional office — and the Council for the Judiciary, with an honest note on what this pilot could not establish about a dedicated police-complaints body.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['nl-constitution', 'nl-rechtspraak'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Netherlands has a constitutional ombudsman. Article 78a of the Constitution provides that the National Ombudsman (Nationale ombudsman) investigates, on request or of its own accord, the actions of administrative authorities of the State and other administrative authorities, and is appointed by the House of Representatives. As a constitutionally entrenched office answerable to Parliament rather than the government, it is a general oversight body over the administration, including the police.',
          claim: 'fact',
          sources: ['nl-constitution'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'National Ombudsman (Nationale ombudsman)',
              description:
                'A constitutional office (Article 78a) that investigates the conduct of administrative authorities, appointed by the House of Representatives. It is the general external avenue for complaints about administrative action, including by the police.',
            },
            {
              term: 'Council for the Judiciary (Raad voor de rechtspraak)',
              description:
                "Part of the judiciary but not itself a court: it supports the budget, operations and administration of the courts (other than the Hoge Raad). It safeguards the courts' functioning without adjudicating cases.",
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'An honest gap',
          text: "This pilot did not establish, from an official source, a dedicated independent police-complaints authority of the kind Ireland has in Fiosrú. In practice complaints about police conduct run through the force's internal procedure with recourse to the National Ombudsman. Any separate statutory complaints commission is not described here because it was not confirmed from a primary source — an absence in our research, stated rather than filled.",
        },
      ],
      uncertainty: [
        'Whether a dedicated statutory police-complaints body exists separately from the National Ombudsman was not established from an official source.',
        'The powers and findings of the National Ombudsman and the Council for the Judiciary have not been researched in detail; only their identity and constitutional or statutory basis are stated.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for the Netherlands',
      summary:
        'Every source used for the Netherlands pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'nl-constitution',
        'nl-om',
        'nl-ejustice-professions',
        'nl-ejustice-courts',
        'nl-gov-police',
        'nl-dji',
        'nl-rechtspraak',
        'nl-gov-ccp-2029',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Netherlands pages rest on nine sources: the official English translation of the Constitution, the Public Prosecution Service's own site, two European e-Justice Portal pages (legal professions and the courts), the Government of the Netherlands on the police, the Custodial Institutions Agency, the judiciary's portal, a government news item on the new Code of Criminal Procedure, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "The Constitution was fetched as the government's official English-translation PDF and text-extracted. The Public Prosecution Service, Government of the Netherlands, Custodial Institutions Agency, judiciary portal and e-Justice pages were read directly. The one gap: the official consolidated-legislation site (wetten.overheid.nl) was unreachable, so the exact article text of the Police Act 2012 and the Judiciary (Organisation) Act is not quoted — the substance is confirmed from the official pages above, and the source register records this.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/netherlands-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in the Netherlands',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in the Netherlands (the Netherlands Forensic Institute and its relationship to the police and prosecution) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in the Netherlands',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in the Netherlands involve the Royal Netherlands Marechaussee, the Customs administration, the Schengen and EU customs context, and the major port and airport at Rotterdam and Schiphol — a combination that must be distinguished carefully and could not be researched to that standard here.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of the Netherlands',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'The development of Dutch justice institutions — the Napoleonic codification, the 1926 Code of Criminal Procedure now being replaced, and the 2013 creation of the single national police — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for the Netherlands',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the Police Act 2012 and the 2013 national-police merger, and the planned 2029 Code of Criminal Procedure — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
