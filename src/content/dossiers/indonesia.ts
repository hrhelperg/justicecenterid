import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Indonesia dossier — a unitary decentralised civil-law republic whose police report to the
 * President (Batch C).
 *
 * Research date: facts checked on 2026-07-27 against the 1945 Constitution, the Police Law (UU
 * 2/2002), the Prosecution Law (UU 11/2021), the State Secretariat (new codes), the Ministry of
 * Immigration and Corrections, the Aceh special-autonomy laws, and the World Prison Brief;
 * independently re-verified in an adversarial pass. The World Prison Brief figures had been updated
 * since the research pass, so the current values (30 June 2026) are used, re-confirmed by hand.
 *
 * The model result: Indonesia is a unitary decentralised state — all four functions national, no
 * federal-style sub-national record. Distinctive: two apex courts (Supreme Court + Constitutional
 * Court); a national police that reports directly to the President rather than a ministry; a
 * prosecution that is within the executive yet functionally independent; new national criminal and
 * procedure codes in force from January 2026; and Aceh's Islamic-criminal-law special autonomy,
 * described in prose because its Sharia courts sit within the national judiciary.
 */
const ID_PRISON_DENSITY: RestrictedClaim = {
  id: 'id-prison-density-2026',
  category: 'detention-capacity',
  statement:
    'On 30 June 2026, Indonesian prisons held 287,571 people including those on remand, against an official capacity of 152,707 places — an occupancy level of 188.3%, that is, severe overcrowding at nearly twice capacity.',
  claimType: 'fact',
  sources: ['wpb-indonesia'],
  sourceScope:
    'World Prison Brief (ICPR), from the national prison administration: total prison population 287,571 including pre-trial detainees at 30 June 2026; official capacity 152,707 at the same date; occupancy level 188.3% at 30 June 2026. Population and capacity carry the same reference date.',
  jurisdiction: 'ID',
  temporalScope: 'current',
  verifiedOn: '2026-07-27',
  metricPeriod: '2026-06-30',
  limitation:
    'A national aggregate for a single, nationally administered prison system, at one reference date. An occupancy of 188.3% means the system as a whole held nearly twice as many people as its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. The World Prison Brief compiles national figures collected under differing definitions, so cross-country comparison of these levels is unreliable; this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const INDONESIA: CountryDossier = {
  countryCode: 'ID',
  slug: 'indonesia',
  name: 'Indonesia',
  officialName: 'the Republic of Indonesia',
  independentBodyNoun: 'an Indonesian government body',
  summary:
    'Indonesia is a unitary, decentralised civil-law republic with all justice functions national. It has two apex courts — a Supreme Court and a Constitutional Court — a national police that reports directly to the President, and a prosecution that is within the executive but functionally independent. New national criminal and procedure codes came into force in January 2026, and the province of Aceh applies Islamic criminal law to Muslims through Sharia courts that remain part of the national judiciary.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-27',
  reviewedOn: '2026-07-27',
  factsVerifiedOn: '2026-07-27',
  jurisdictionIds: ['id'],
  sources: ['id-constitution', 'id-polri-law'],
  uncertainty: [
    "The exact allocation of investigative direction between the police and the prosecution under the new Criminal Procedure Code (KUHAP, Law 20/2025, in force 2 January 2026) was not established from the operative articles; the prosecution's dominus litis role is described from the Prosecution Law, and the post-2026 mechanics are not asserted in detail.",
    'Human-rights assessments of the new Criminal Code are not described — no primary source for them was fetched; any such assessment would need attribution to a named dated body.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Indonesia (Republik Indonesia) is a unitary, decentralised republic with a civil-law tradition of Dutch derivation, layered with customary law (hukum adat) and, in one province, Islamic criminal law. The 1945 Constitution (UUD 1945, as amended 1999–2002) declares "the State of Indonesia is a unitary state in the form of a Republic" (Pasal 1(1)) and makes the judicial power "an independent power to administer justice" (Pasal 24(1)). It is divided into provinces, regencies and cities — but none of the four justice functions is a provincial subject; all are national.',
      claim: 'fact',
      sources: ['id-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'A national police that answers to the President',
      text: 'Indonesia\'s most distinctive institutional feature is where its police sit. The Indonesian National Police (POLRI) is a single national force that, by law, "is under the President" and whose Chief is responsible directly to the President (Law No. 2 of 2002, Pasal 8) — not to a Minister of the Interior or of Justice. Its provincial and district commands are field units of the one national force, not provincial police. The law-enforcement page sets this out.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions: two apex courts (the Supreme Court and the Constitutional Court), the single national Prosecution Service, POLRI, and a national prison service. New national criminal and procedure codes came into force on 2 January 2026, replacing the Dutch-colonial penal code.',
      claim: 'fact',
      sources: ['id-constitution', 'id-setneg-new-codes'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Indonesia',
      summary:
        'A unitary decentralised republic under the 1945 Constitution, with new national codes from 2026 and one bounded Islamic-criminal-law autonomy in Aceh.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-constitution', 'id-setneg-new-codes', 'id-aceh-law'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Indonesia is a unitary decentralised state (Pasal 1(1) and Pasal 18): the provinces and their regional governments handle local administration, but the courts, prosecution, police and prisons are all national. New national codes are now in force — the State Secretariat records that the Criminal Code (KUHP, Law 1/2023) and a new Criminal Procedure Code (KUHAP, Law 20/2025) both took effect on 2 January 2026, replacing the Dutch-colonial Wetboek van Strafrecht.',
          claim: 'fact',
          sources: ['id-constitution', 'id-setneg-new-codes'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Aceh: Islamic criminal law within the national judiciary',
          text: "The province of Aceh holds a bounded special-autonomy grant (Law No. 11 of 2006, after the 2005 peace agreement) to apply Islamic criminal law — the qanun jinayat, such as Qanun Aceh No. 6 of 2014 — to Muslims in Aceh, through Sharia courts (Mahkamah Syar'iyah). This is a special-autonomy feature within the unitary state, not a federal transfer: the Sharia courts sit within the national religious-court environment under the Supreme Court, and Aceh's police, prosecution and prisons remain national. It is described here, not modelled as a separate justice jurisdiction.",
        },
      ],
      uncertainty: [
        'Constitutional articles are cited from official Indonesian hosts; the Indonesian text is authoritative.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Indonesia',
      summary:
        'A single national police force, POLRI, that reports directly to the President rather than to a ministry.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-polri-law'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing is a single national function. The Indonesian National Police (Kepolisian Negara Republik Indonesia, POLRI) is one national force; its provincial commands (Polda) and district commands (Polres, Polsek) are subordinate units of it, not provincial police. By law, "the Indonesian National Police is under the President" (Law No. 2 of 2002, Pasal 8(1)), and its Chief (Kapolri) "is responsible to the President" (Pasal 8(2)).',
          claim: 'fact',
          sources: ['id-polri-law'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A direct line to the President',
          text: 'Most countries on this site place the police under a ministry — of the interior, of home affairs, or of justice. Indonesia does not: POLRI reports directly to the head of state. That reporting line is itself a distinctive institutional fact, and it is why the police page names the President rather than a ministry.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the force's national structure and reporting line. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        'The internal command structure of POLRI was not researched beyond the statutory reporting line.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Indonesia',
      summary:
        'Two apex courts — the Supreme Court over four court environments, and a separate Constitutional Court with concentrated review of statutes.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Judicial power is exercised by a Supreme Court (Mahkamah Agung) and a Constitutional Court (Mahkamah Konstitusi) (Pasal 24(2)). The Supreme Court is the court of cassation at the head of four court environments — the general courts, the religious courts, the military courts and the administrative courts — while the Constitutional Court, created in 2003, is a separate, dedicated court.',
          claim: 'fact',
          sources: ['id-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Two apex courts, a divided review',
          text: 'Constitutional review is concentrated in the Constitutional Court: it reviews the constitutionality of statutes against the Constitution at first and final instance, and also decides disputes over the powers of state institutions, the dissolution of political parties and election results (Pasal 24C). The Supreme Court, by contrast, reviews sub-statutory regulations against statutes. So the two apex courts divide the work of review between them, each final in its own sphere.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: "The four court environments' internal structures, and the place of the Aceh Sharia courts within the religious-court environment, were not set out beyond the constitutional articles and the Aceh note.",
        },
      ],
      uncertainty: [
        'The court structure is cited from the Constitution; the Judicial Power and court-environment statutes were not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Indonesia',
      summary:
        'The Kejaksaan — within the executive but functionally independent — is master of the case (dominus litis), directing the prosecution while the police investigate.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-kejaksaan-law'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution is conducted by the Prosecution Service (Kejaksaan Republik Indonesia), headed by the Attorney-General (Jaksa Agung). On its enabling law, it is "a government institution exercising state power in the field of prosecution … independently, free from the influence of governmental power and other powers" (Law No. 11 of 2021) — that is, within the executive branch but functionally independent in prosecutorial decisions, not part of the judiciary.',
          claim: 'fact',
          sources: ['id-kejaksaan-law'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Master of the case',
          text: 'The Indonesian prosecutor is dominus litis — "master of the case" — controlling the direction of the prosecution. In the ordinary model the police conduct the investigation and the prosecutor controls the prosecution and case direction; for certain special crimes, such as corruption, prosecutors may themselves investigate. The exact allocation of investigative direction under the new 2026 Criminal Procedure Code was not established from its operative articles and is not asserted here.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The precise post-2026 division of investigative authority between the police and the prosecution is left open, pending the operative articles of the new Criminal Procedure Code.',
        },
      ],
      uncertainty: [
        'The new-KUHAP (Law 20/2025) mechanics of investigative direction were not fetched; only the dominus litis role from the Prosecution Law is stated.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Indonesia',
      summary:
        'The police investigate; the prosecution, as master of the case, directs the prosecution; and a national commission independently investigates corruption.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-polri-law', 'id-kejaksaan-law'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'In the ordinary criminal process the police (POLRI) are the general investigating authority, conducting the preliminary inquiry and the investigation, while the prosecution — as dominus litis — controls the prosecution and the direction of the case. In addition, the Corruption Eradication Commission (KPK) independently investigates and prosecutes corruption cases.',
          claim: 'fact',
          sources: ['id-polri-law', 'id-kejaksaan-law'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who investigates and who prosecutes. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        "The precise post-2026 KUHAP allocation of investigative direction is not asserted; the KPK's corruption remit is described in general terms.",
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Indonesia',
      summary:
        'A national prison service under the new Ministry of Immigration and Corrections — and one of the most overcrowded systems on this site.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-kemenimipas', 'wpb-indonesia'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [ID_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Indonesia are run nationally, through the Directorate-General of Corrections. Since a 2024 machinery-of-government reform (Presidential Regulation 157/2024), that directorate sits under a new Ministry of Immigration and Corrections (Kementerian Imigrasi dan Pemasyarakatan), created out of the former Ministry of Law and Human Rights. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['id-kemenimipas'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Severe overcrowding, stated with its limits',
          text: "The World Prison Brief records that on 30 June 2026 Indonesian prisons held 287,571 people including those on remand, against an official capacity of 152,707 — an occupancy of 188.3%, nearly twice capacity, among the most overcrowded systems on this site. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national occupancy does not establish the position of any individual prison; and because the World Prison Brief compiles national figures collected under differing definitions, these levels are not reliably comparable between countries. (The World Prison Brief\'s own ministry label is out of date; the current ministry is the one named above.)",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons and detention centres, the treatment of detainees, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The World Prison Brief figures were updated between the research pass and authoring; the current (30 June 2026) values are used and were re-confirmed by hand.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Indonesia',
      summary:
        'A human-rights commission, an ombudsman, a constitutional judicial commission, a police commission reporting to the President, and a contested anti-corruption commission.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: ['id-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'National Commission on Human Rights (Komnas HAM)',
              description:
                'An independent national human-rights commission (Law No. 39 of 1999) that studies, monitors and mediates human-rights matters.',
            },
            {
              term: 'Ombudsman of the Republic of Indonesia',
              description:
                'The national body (Law No. 37 of 2008) that oversees maladministration in public services by state administrators.',
            },
            {
              term: 'Judicial Commission (Komisi Yudisial)',
              description:
                'A constitutional body (Pasal 24B) that proposes candidates for Supreme Court justice and guards the conduct, honour and dignity of judges.',
            },
            {
              term: 'National Police Commission (Kompolnas)',
              description:
                "A body under and reporting to the President (Presidential Regulation 17/2005) that advises on police policy and on the appointment and dismissal of the Chief of Police, and receives public complaints — an advisory oversight body, not an independent complaints tribunal; internal police discipline runs through POLRI's own division.",
            },
            {
              term: 'Corruption Eradication Commission (KPK)',
              description:
                'The anti-corruption commission (Law No. 30 of 2002, amended by Law No. 19 of 2019). The 2019 amendment reclassified it as a body within the executive branch and added a Supervisory Board; whether this narrowed its independence is assessed differently by different sources, and this site records the change by attribution rather than taking a view.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: "It names the oversight bodies and their basis. It does not assess how effective any of them is; the contested effect of the 2019 KPK amendment is attributed to its sources, not stated in this site's voice.",
        },
      ],
      uncertainty: [
        'The oversight bodies are named from official Indonesian hosts; their detailed powers and the effect of the 2019 KPK amendment are described by attribution.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Indonesia',
      summary:
        'Every source used for the Indonesia pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      reviewedOn: '2026-07-27',
      factsVerifiedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [
        'id-constitution',
        'id-polri-law',
        'id-kejaksaan-law',
        'id-setneg-new-codes',
        'id-kemenimipas',
        'id-aceh-law',
        'wpb-indonesia',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Indonesia pages rest on the 1945 Constitution, the Police Law (UU 2/2002) and the Prosecution Law (UU 11/2021), the State Secretariat for the new codes, the Ministry of Immigration and Corrections, the Aceh special-autonomy laws, and the World Prison Brief. Each was confirmed on 27 July 2026 and independently re-checked; the load-bearing constitutional and statutory passages were confirmed verbatim against official Indonesian hosts, and the World Prison Brief figures re-confirmed by hand.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Access notes and two currency points',
          text: 'Indonesian is the authoritative language of the statutes. Two currency points: the corrections ministry changed in 2024 (Presidential Regulation 157/2024), so the World Prison Brief\'s "Ministry of Justice and Human Rights" label is out of date and the current Ministry of Immigration and Corrections is used; and the World Prison Brief prison figures had been updated to 30 June 2026 by the time of authoring, so the current values are used. The exact investigative-direction mechanics of the new 2026 Criminal Procedure Code, and any human-rights assessment of the new Criminal Code, are not asserted.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/indonesia-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Indonesia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Indonesia (the police forensic laboratory and the forensic-medicine services) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Indonesia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-27',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Indonesia involve the Directorate-General of Immigration (now within the Ministry of Immigration and Corrections), the customs administration and the maritime security agency, and could not be researched to the standard required here without risking an inaccurate description of a security-adjacent function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Indonesia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Indonesia's institutional history — the 1945 Constitution and its four rounds of amendment, the 1999 decentralisation, the creation of the Constitutional Court in 2003, the Aceh peace agreement, and the 2026 replacement of the Dutch-colonial penal code — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Indonesia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-27',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1945 Constitution and its 1999–2002 amendments, the 2006 Aceh law, and the 2 January 2026 commencement of the new KUHP and KUHAP — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
