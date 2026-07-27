import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Argentina dossier — a federation where the criminal code is national but the courts, police,
 * prosecution and prisons that apply it are largely provincial (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the Constitution (the Georgetown PDBA text), the
 * Government's federal-forces page, the Federal Code of Criminal Procedure sources, the Official
 * Gazette (Decree 8/2024), and the World Prison Brief; independently re-verified in an adversarial
 * pass that found zero corrections. The World Prison Brief figures were re-confirmed by hand.
 *
 * The model result: a federation whose four functions are all dual (federal + provincial), unified
 * by a single national criminal code but administered mostly by the provinces (Art. 75 inc. 12) —
 * modelled as a federal record plus two representative Province records. Distinctive: a
 * constitutionally autonomous "fourth-branch" prosecution, diffuse review with no constitutional
 * court, and a constitutional Ombudsman that has stood vacant since 2009.
 */
const AR_PRISON_DENSITY: RestrictedClaim = {
  id: 'ar-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 December 2024, Argentina held 133,585 people in custody including those on remand — of whom about 12,885 were held in police lock-ups (comisarías) — a rate of 284 per 100,000 inhabitants; the prison system itself stood at an occupancy of 122.9% against its official capacity of 98,199 places.',
  claimType: 'fact',
  sources: ['wpb-argentina'],
  sourceScope:
    'World Prison Brief (ICPR), from the Ministry of Justice SNEEP: total in custody 133,585 including pre-trial detainees at 31 December 2024, of whom 12,885 were held in police lock-ups; rate 284 per 100,000; official prison-system capacity 98,199 (not including police lock-ups) at the same date; occupancy 122.9% for the prison system. Prisons are run at both the federal and provincial levels, so this is a national aggregate.',
  jurisdiction: 'AR',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2024-12-31',
  limitation:
    "A national aggregate across the federal and provincial prison systems, at one reference date. The total in custody includes about 12,885 people held in police lock-ups, whereas the 122.9% occupancy compares the prison system's own population and its capacity, both excluding those lock-ups — so the two figures are measured on slightly different bases, as the source presents them. The aggregate does not establish the position of any one system or prison. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.",
};

export const ARGENTINA: CountryDossier = {
  countryCode: 'AR',
  slug: 'argentina',
  name: 'Argentina',
  officialName: 'the Argentine Republic',
  independentBodyNoun: 'an Argentine government body',
  summary:
    'Argentina is a federation with a distinctive division: the criminal code is national, but the courts, prosecution, police and prisons that apply it to ordinary crime are largely provincial. Its federal prosecution is a constitutionally autonomous "fourth branch", constitutional review is diffuse with no constitutional court, and the constitutional Ombudsman has stood vacant since 2009.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['ar', 'ar-b', 'ar-x'],
  sources: ['ar-constitution', 'wpb-argentina'],
  uncertainty: [
    'The provincial layer is modelled with two illustrative provinces (Buenos Aires, Córdoba); their specific institutional detail is not researched, and the 24 sub-national jurisdictions (23 provinces + the Autonomous City of Buenos Aires) are not all modelled, nor are the per-province procedural codes (some accusatory, some transitioning).',
    "The accusatory Federal Code of Criminal Procedure and the transfer of the Federal Penitentiary Service to the Ministry of Security (Decree 8/2024) are described from official sources confirmed in two passes; the current Procurator-General office-holder is not named, and a contested 2026 proposal about the Procurator-General's term is not described.",
    "A dedicated independent federal police-complaints body was not established from a source; the National Committee for the Prevention of Torture's statute was not fetched.",
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Argentina (the Argentine Republic) is a federation of 23 provinces and the Autonomous City of Buenos Aires, with a civil-law tradition and a United-States-style federal architecture. The provinces "keep all power not delegated by this Constitution to the federal Government" (Article 121), and each must guarantee its own administration of justice (Article 5). Judges hold office "during good behaviour" with irreducible compensation (Article 110).',
      claim: 'fact',
      sources: ['ar-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'One criminal code, twenty-four justice systems',
      text: 'Argentina\'s defining feature is a split between law and its application. Congress enacts the national codes — including a single Criminal Code — "without such codes altering the local jurisdictions" (Article 75 inc. 12). So the substantive law is uniform, but it is applied by the federal courts for federal matters and by each province\'s own courts, prosecution, police and prisons for ordinary crime — which is the bulk of criminal justice. This dossier therefore models a federal record plus representative province records.',
    },
    {
      kind: 'paragraph',
      text: 'At the federal level the Supreme Court of Justice of the Nation sits at the apex, the prosecution is a constitutionally autonomous body, and the four federal police forces and the federal prison service both sit under the Ministry of Security. Alongside them, each province runs its own justice system.',
      claim: 'fact',
      sources: ['ar-constitution', 'ar-forces'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Argentina',
      summary:
        'A federation with a single national criminal code applied by federal and provincial courts, and diffuse constitutional review with no constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Argentina is a federation on the reserved-powers rule: the provinces keep all power not delegated to the federal Government (Article 121), and each guarantees its own administration of justice (Article 5). Congress enacts the national codes, including the Criminal Code, but "without such codes altering the local jurisdictions" — their application corresponding to the federal or the provincial courts by subject-matter (Article 75 inc. 12).',
          claim: 'fact',
          sources: ['ar-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Diffuse review, no constitutional court',
          text: 'Constitutional review in Argentina is diffuse, on the United-States model: any judge, at any level, may decline to apply a norm that is unconstitutional in the case before them. There is no separate constitutional court — the Supreme Court of Justice of the Nation sits at the apex of both ordinary and constitutional review.',
        },
      ],
      uncertainty: [
        'Constitutional articles are cited from the Georgetown PDBA text; the Spanish text is authoritative.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Argentina',
      summary:
        'Four federal forces under the Ministry of Security, and a provincial police in every province — with the prosecutor directing the investigation.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-forces'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Argentina is dual. At the federal level there are four national forces under the Ministry of Security — the Argentine Federal Police, the National Gendarmerie, the Naval Prefecture and the Airport Security Police. Alongside them, each of the 23 provinces and the Autonomous City of Buenos Aires has its own provincial police (a reserved power under Article 121), and those provincial forces handle the bulk of ordinary crime.',
          claim: 'fact',
          sources: ['ar-forces'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Provincial policing, prosecutor-directed investigation',
          text: 'Two things follow. First, "the Argentine police" is not one force but many — four federal plus one per province. Second, in the federal accusatory system the prosecutor directs the investigation and the police act as auxiliaries; in the provinces, whether the investigation is prosecutor-led depends on each province\'s own procedural code, which this pilot did not research province by province.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which forces exist and at which tier. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The provincial police forces and their per-province investigation arrangements were not individually researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Argentina',
      summary:
        'A federal judiciary under the Supreme Court and a full court system in every province, with judges selected through a Council of the Magistracy.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The judicial power of the Nation is exercised by the Supreme Court of Justice of the Nation and the inferior federal tribunals Congress establishes (Article 108); the federal courts handle federal-jurisdiction matters. In parallel, each province has its own full court system, headed by its own superior tribunal, for ordinary civil and criminal cases. Federal judges are selected through the Council of the Magistracy (Consejo de la Magistratura), which also administers the federal judiciary (Article 114).',
          claim: 'fact',
          sources: ['ar-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Two court systems, one apex on federal questions',
          text: 'Because the provinces run their own courts, most criminal cases are decided in provincial systems, each with its own apex tribunal. The Supreme Court of Justice of the Nation is the apex only on federal and constitutional questions, and — since review is diffuse — it is the constitutional apex without being a separate constitutional court.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The per-province court hierarchies and their apex tribunals were not individually researched, and the federal-court map below the Supreme Court was not set out in full.',
        },
      ],
      uncertainty: [
        "The provincial court systems are described from the federal framework; no province's judiciary was individually researched.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Argentina',
      summary:
        'A constitutionally autonomous "fourth-branch" federal prosecution (the Ministerio Público Fiscal) that directs the investigation, alongside a prosecution in every province.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-constitution', 'ar-cppf'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'At the federal level, prosecution is conducted by the Public Prosecution Service (Ministerio Público Fiscal), part of the broader Public Ministry that the Constitution defines as "an independent organ with functional autonomy and financial self-governance" (Article 120) — a body outside the three classic branches, neither part of the judiciary nor under the executive. It is headed by the Procurator-General of the Nation. Each province, in turn, has its own Public Ministry.',
          claim: 'fact',
          sources: ['ar-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A fourth branch that runs the investigation',
          text: 'Two features stand out. First, the federal prosecution is constitutionally autonomous — a "fourth branch" alongside the legislature, executive and judiciary — a stronger constitutional guarantee than most prosecutions on this site. Second, under the accusatory Federal Code of Criminal Procedure the prosecution directs the criminal investigation, with the police acting as its auxiliaries, replacing the older model in which an investigating judge led.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "The current Procurator-General is not named, and the individual provincial prosecutions were not researched. A contested 2026 proposal about the Procurator-General's term is not described here.",
        },
      ],
      uncertainty: [
        "The provincial prosecutions are described from the federal framework; no province's Public Ministry was researched.",
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Argentina',
      summary:
        'In the federal accusatory system the prosecutor directs the investigation and the police are auxiliaries; the provinces follow their own procedural codes.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-cppf'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "At the federal level, Argentina has moved from an inquisitorial to an accusatory criminal process. Under the Federal Code of Criminal Procedure (originally Law 27.063, reformed and renamed by Law 27.482, in force from 2019 and rolled out in phases across the federal jurisdictions), the prosecution directs the criminal investigation and the police act as its auxiliaries — replacing the older model in which an investigating judge led. In the provinces, the direction of investigations follows each province's own procedural code.",
          claim: 'fact',
          sources: ['ar-cppf'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who directs the investigation. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The federal accusatory rollout is described from official sources; the per-province procedural codes were not researched.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Argentina',
      summary:
        "A federal prison service — now under the Ministry of Security — alongside each province's own, and a national custody total that includes people held in police lock-ups.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-spf-decreto', 'wpb-argentina'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [AR_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prisons in Argentina are run at both levels: the Federal Penitentiary Service and each province's own penitentiary service, the provincial systems holding a large share of the total. The Federal Penitentiary Service was transferred from the Ministry of Justice to the Ministry of Security by Decree 8/2024 — so both the federal police forces and the federal prison service now sit under that ministry.",
          claim: 'fact',
          sources: ['ar-spf-decreto'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A custody total that spans prisons and police lock-ups',
          text: 'The World Prison Brief records that on 31 December 2024 Argentina held 133,585 people in custody including those on remand — a rate of 284 per 100,000. That total includes about 12,885 people held in police lock-ups (comisarías), which is why it is stated as a custody total rather than a prison total. The prison system proper stood at an occupancy of 122.9% against its official capacity, both measured excluding the police lock-ups. Because prisons are run federally and provincially, this is a national aggregate, and the figures are not reliably comparable between countries.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual federal and provincial prison systems, the use of police lock-ups for detention in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The custody total and the occupancy figure are measured on slightly different bases (with and without police lock-ups), as the source presents them.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Argentina',
      summary:
        'A penitentiary-rights body and a Council of the Magistracy — and a constitutional Ombudsman that has stood vacant since 2009.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Ombudsman (Defensor del Pueblo)',
              description:
                'A constitutional office within the Legislature (Article 86), appointed and removed by a two-thirds vote of each Chamber. It has, however, stood vacant since 2009 for lack of the required congressional supermajority — a body the Constitution mandates but which has had no incumbent for years, recorded here as the fact it is.',
            },
            {
              term: 'National Penitentiary Prosecutor (Procuración Penitenciaria de la Nación)',
              description:
                'An autonomous body in the Legislature (established by statute in 2003–2004) that protects the human rights of persons deprived of liberty in the federal jurisdiction.',
            },
            {
              term: 'Council of the Magistracy (Consejo de la Magistratura)',
              description:
                'The constitutional body (Article 114) that selects federal judges and administers the federal judiciary.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the principal oversight bodies and their basis. It does not assess how effective any of them is, and it does not claim a dedicated independent federal police-complaints body, which was not established from a source.',
        },
      ],
      uncertainty: [
        "The National Committee for the Prevention of Torture's statute was not fetched; the Ombudsman vacancy and the other bodies are established from the Constitution and their statutes.",
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Argentina',
      summary:
        'Every source used for the Argentina pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['ar-constitution', 'ar-forces', 'ar-cppf', 'ar-spf-decreto', 'wpb-argentina'],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Argentina pages rest on the Constitution (the Georgetown PDBA text), the Government's federal-forces page, the Federal Code of Criminal Procedure sources, the Official Gazette for the transfer of the Federal Penitentiary Service, and the World Prison Brief. Each was confirmed on 27 July 2026 and independently re-checked — the adversarial pass found no corrections — and the World Prison Brief figures were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Access notes and one figure caveat',
          text: "Spanish is the authoritative language. The federalism articles and the autonomy of the prosecution are verbatim from the constitutional text; the accusatory Federal Code of Criminal Procedure and the 2024 transfer of the Federal Penitentiary Service to the Ministry of Security were confirmed in two passes from official sources. One figure caveat: the World Prison Brief's custody total includes people held in police lock-ups, while its occupancy figure and capacity exclude them, so the two are on slightly different bases and are presented as such.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/argentina-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Argentina',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Argentina (the federal and provincial forensic bodies, and the Argentine Forensic Anthropology Team) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Argentina',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Argentina involve the National Gendarmerie, the Naval Prefecture, the migration directorate and the customs agency, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Argentina',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Argentina's institutional history — the 1853 Constitution and its 1994 reform, the adoption of diffuse constitutional review on the United-States model, and the ongoing shift to an accusatory federal criminal process — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Argentina',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1853/1994 Constitution, the 2019 accusatory Federal Code of Criminal Procedure and its phased rollout, and the 2024 transfer of the Federal Penitentiary Service — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
