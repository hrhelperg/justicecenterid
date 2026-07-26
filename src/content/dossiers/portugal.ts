import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Portugal dossier — a unitary civil-law republic with a constitutionally autonomous
 * prosecution (Batch B).
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified. One
 * sourcing correction from the verification pass was applied: the autonomy of the Public
 * Prosecution Service is anchored to Constitution Art. 219(2) ("its own statute and autonomy"),
 * not to the EU e-Justice page (which carries no prosecution content).
 *
 * Two things frame this dossier. First, the anti-conflation rule: this is the Portuguese system of
 * the República Portuguesa, NOT Brazil — the terminology overlaps (both use "Ministério Público"
 * and the Portuguese language) but the institutions and the 1976 Constitution are Portugal's alone.
 * Second, the model result: Portugal is unitary with two autonomous regions (the Azores and
 * Madeira) that hold no justice competence — the same result as Italy, the opposite of Finland's
 * Åland.
 */
const PT_PRISON_DENSITY: RestrictedClaim = {
  id: 'pt-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Portuguese prisons held 12,193 people including those on remand, against a total capacity of 12,663 places — a prison density of 96.3 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'PT',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system (the Directorate-General for Reintegration and Prison Services, DGRSP), at one reference date. A density of 96.3 means the system as a whole held slightly fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const PORTUGAL: CountryDossier = {
  countryCode: 'PT',
  slug: 'portugal',
  name: 'Portugal',
  officialName: 'the Portuguese Republic',
  independentBodyNoun: 'a Portuguese government body',
  summary:
    "Portugal is a unitary, civil-law republic with two autonomous regions (the Azores and Madeira) that hold no competence over the justice system. Its Public Prosecution Service is constitutionally autonomous — independent of both the judiciary and the executive — and it has four top courts alongside constitutional review by every court. This is the Portuguese system, not Brazil's, despite the shared language and terminology.",
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['pt'],
  sources: ['pt-constitution', 'pt-loic'],
  uncertainty: [
    'The ministerial placement of the police forces (the Polícia Judiciária under the Ministry of Justice; the Guarda Nacional Republicana and the Polícia de Segurança Pública under the Ministry of Internal Administration) is stated from general knowledge; the exact organic-law tutelage articles were not fetched.',
    'The statutes of the Public Prosecution Service, the courts organisation, the Ombudsman and the police inspectorate are named where relevant but were not directly fetched; the constitutional bases are.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'Portugal, not Brazil',
      text: "These pages describe the justice system of the Portuguese Republic. Portugal and Brazil share the Portuguese language and some institution names — both call their prosecution service the Ministério Público — but they are different states with different constitutions and different institutions. Everything here is grounded in Portugal's 1976 Constitution and its own statutes, and nothing on these pages describes Brazil, which has its own separate coverage on this site.",
    },
    {
      kind: 'paragraph',
      text: 'Portugal is a unitary state with a civil-law legal tradition, governed by the Constitution of the Portuguese Republic of 1976 (in its 2005 revision). Article 6 provides that "the state is unitary" while establishing the Azores and Madeira as autonomous regions with their own self-government. The four justice functions, however, are all national: the autonomous regions hold no competence over the courts, the prosecution, the police or the prisons.',
      claim: 'fact',
      sources: ['pt-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'A prosecution that answers to neither the courts nor the government',
      text: 'The most distinctive feature of the Portuguese system is the constitutional autonomy of its Public Prosecution Service (Ministério Público). Article 219 gives it "its own statute and autonomy" and requires it to exercise penal action governed by the principle of legality. It is not part of the judiciary (unlike Italy\'s magistrate-prosecutors) and not under a minister (unlike the Danish or Dutch services): it is a self-standing autonomous body, governed by its own Prosecutor General\'s Office and High Council. The prosecution page sets this out.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions. Three national police forces — the Polícia Judiciária, the Guarda Nacional Republicana and the Polícia de Segurança Pública — police the country and carry out investigations. The Ministério Público directs the investigation. The judicial courts run up to the Supreme Court of Justice, alongside a Supreme Administrative Court, a Constitutional Court and a Court of Auditors. And the Directorate-General for Reintegration and Prison Services runs the prisons.',
      claim: 'fact',
      sources: ['pt-loic', 'pt-ejustice-justice', 'pt-dgrsp'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Portugal',
      summary:
        'A unitary republic under the 1976 Constitution: courts that are organs of sovereignty, an autonomous prosecution, and constitutional review done both by every court and by a dedicated Constitutional Court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Portugal is a semi-presidential parliamentary republic with a civil-law tradition, governed by the Constitution of 1976. The courts are constitutionally defined as organs of sovereignty "with the competence to administer justice in the name of the people" (Article 202), and Article 203 provides that "the courts are independent and subject only to the law".',
          claim: 'fact',
          sources: ['pt-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Constitutional review, twice over',
          text: 'Portugal reviews the constitutionality of laws in two ways at once. Every court, deciding an ordinary case, must refuse to apply a norm that infringes the Constitution (Article 204) — diffuse review, as in the Nordic systems. And on top of that there is a dedicated Constitutional Court (Article 221) "with the specific competence to administer justice in matters of a constitutional-law nature". Having both a concentrated constitutional court and diffuse review is a distinctive combination.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Unitary, with autonomous islands — but not for justice',
          text: 'Article 6 makes Portugal a unitary state, while giving the Azores and Madeira archipelagos autonomous-region status with their own statutes and self-government. That autonomy does not reach the justice system: criminal law and the organisation of the courts and the prosecution are matters reserved to the national Parliament and expressly excluded from regional legislation, and each police force has a single national organisation. The result is the same as Italy — a decentralised state that is centralised for justice.',
        },
      ],
      uncertainty: [
        "The constitutional articles are cited from the Assembly of the Republic's official English translation; the authoritative text is Portuguese.",
        'The organisation-of-the-judiciary statute (LOSJ) reorganising the district courts is named but was not directly fetched.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Portugal',
      summary:
        'Three national police forces — the Polícia Judiciária, the militarised Guarda Nacional Republicana, and the civilian Polícia de Segurança Pública — each with a single organisation for the whole country.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-loic', 'pt-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Portugal is a national function — Article 272(4) of the Constitution requires that each police force "have a sole organisational structure for the whole of Portuguese territory". The Law on the Organisation of Criminal Investigation (Law 49/2008) names three general-competence criminal-police bodies: the Polícia Judiciária (Criminal Investigation Police), the Guarda Nacional Republicana (a militarised gendarmerie), and the Polícia de Segurança Pública (a civilian urban police).',
          claim: 'fact',
          sources: ['pt-loic', 'pt-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Three forces, and a reserved role for the Polícia Judiciária',
          text: 'The Polícia Judiciária is the specialist criminal-investigation force, and the most serious crimes — homicide, kidnapping, trafficking, currency counterfeiting and the like — are reserved to it and cannot be assigned to the other forces (Law 49/2008, Article 7(2)). The Guarda Nacional Republicana and the Polícia de Segurança Pública provide general policing, the former with military status. The Polícia Judiciária is placed under the Ministry of Justice and the other two under the Ministry of Internal Administration, so — as in Finland — policing and the courts do not all sit under one ministry; the exact tutelage is stated here from general knowledge, the forces themselves from the statute.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which national forces exist and their statutory basis. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The ministerial placement of the forces is stated from general knowledge; the organic-law tutelage articles were not fetched.',
        'The internal organisation of the three forces was not researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Portugal',
      summary:
        'The judicial courts up to the Supreme Court of Justice, a separate Supreme Administrative Court, a Constitutional Court, and a Court of Auditors — four top courts.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-constitution', 'pt-ejustice-justice'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Article 209 of the Constitution fixes the categories of courts. The judicial courts hear civil and criminal cases: district courts (tribunais de comarca), courts of appeal (tribunais da relação), and at the apex the Supreme Court of Justice (Supremo Tribunal de Justiça). Separately, the administrative and tax courts culminate in the Supreme Administrative Court (Supremo Tribunal Administrativo), and there is a Court of Auditors (Tribunal de Contas) for public finances.',
          claim: 'fact',
          sources: ['pt-constitution', 'pt-ejustice-justice'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A dedicated Constitutional Court',
          text: 'Standing outside those categories is the Constitutional Court (Tribunal Constitucional), "the court with the specific competence to administer justice in matters of a constitutional-law nature" (Article 221). It has thirteen judges — ten designated by Parliament and three co-opted — serving single nine-year terms. So Portugal has four top courts in all, plus the diffuse review every court exercises.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: "The detailed jurisdiction of each court, the specialised sections of the district courts, and the Court of Auditors' functions have not been researched from the primary statutes and are not described.",
        },
      ],
      uncertainty: [
        'The court structure is cited from the Constitution and the EU e-Justice Portal; the judiciary-organisation statute was not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Portugal',
      summary:
        "The Ministério Público — constitutionally autonomous, answering to neither the courts nor the government — governed by its own Prosecutor General's Office and High Council.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Portugal is conducted by the Public Prosecution Service (Ministério Público). Article 219 gives it the competence to represent the State, to take part in implementing the criminal policy defined by the sovereignty organs, and to "exercise penal action governed by the principle of legality" — and provides that it "shall have its own statute and autonomy, as laid down by law". It is headed by the Prosecutor General\'s Office (Procuradoria-Geral da República), whose Prosecutor General serves a six-year term, and includes a High Council of the Public Prosecution Service.',
          claim: 'fact',
          sources: ['pt-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Autonomous from both directions',
          text: 'What makes the Portuguese prosecutor distinctive is that its autonomy runs in two directions at once. It is not part of the judiciary — unlike the Italian magistrate-prosecutor, it is a separate service — and it is not under a minister — unlike the Danish, Dutch or (until instruction) other ministry-attached services. Its magistrates are internally organised in a hierarchy, but the service as a whole answers to its own governing council rather than to a court or a government. The principle of legality (Article 219) then constrains the discretion that autonomy might otherwise create.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the constitutional autonomy and structure. It does not research the Estatuto do Ministério Público or how the criminal policy defined by the sovereignty organs is translated into prosecutorial priorities.',
        },
      ],
      uncertainty: [
        'The Estatuto do Ministério Público (the prosecution statute) is named but was not directly fetched; the autonomy is established from Constitution Article 219.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Portugal',
      summary:
        'A two-phase, magistrate-directed model: the prosecution directs the investigation (inquérito), and an investigating judge conducts the optional judicial-investigation phase (instrução).',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-cpp', 'pt-loic'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Portugal is directed by the magistracy, not the police. The direction of the investigation "belongs to the competent judicial authority at each stage of the proceedings" (Law 49/2008, Article 2), and in the investigation phase (the inquérito) that authority is the Public Prosecution Service, which the criminal-police bodies assist and act under (Code of Criminal Procedure, Article 263). The police carry out the investigative acts under the prosecution\'s direction.',
          claim: 'fact',
          sources: ['pt-loic', 'pt-cpp'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The investigating judge and the two phases',
          text: "Portuguese criminal procedure has two investigative phases. The inquérito is directed by the prosecution. After it, an optional instrução — a judicial-investigation phase — may be requested, conducted by an investigating judge (juiz de instrução), who scrutinises the prosecution's decision to charge or to close the case and acts as guarantor of rights during the inquiry (Article 17). This division — prosecution-led investigation, judge-led review — is Portugal's own; it should not be described in Brazilian terms even though the two systems share vocabulary.",
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who directs the investigation and the role of the investigating judge. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The detailed powers of the investigating judge and the reserved-competence allocation among the forces rest in statutes read only in part.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Portugal',
      summary:
        'The Directorate-General for Reintegration and Prison Services under the Ministry of Justice — and a properly scoped Council of Europe figure showing the system just under capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-dgrsp', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [PT_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Portugal are run by a single national service, the Directorate-General for Reintegration and Prison Services (Direção-Geral de Reinserção e Serviços Prisionais, DGRSP), under the Ministry of Justice. It is responsible for the prison establishments, the execution of custodial and community sentences, electronic monitoring, and the juvenile educational-guardianship system. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['pt-dgrsp'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Portuguese prisons held 12,193 people, including those on remand, against a total capacity of 12,663 places — a prison density of 96.3 inmates per 100 places. That density below 100 means the system as a whole held slightly fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons and their regimes, community sanctions and the juvenile system in detail, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The internal structure of the DGRSP and the individual prisons were not researched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Portugal',
      summary:
        'The Ombudsman (Provedor de Justiça), the two councils of the magistracy, and a dedicated inspectorate that externally controls the security forces.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['pt-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Ombudsman (Provedor de Justiça)',
              description:
                "A constitutional office (Article 23) to which citizens may complain of acts or omissions of the public authorities; the Ombudsman assesses them without decision-making power and issues recommendations, independently of the ordinary remedies. It is Portugal's national human-rights institution.",
            },
            {
              term: 'High Council for the Judiciary (Conselho Superior da Magistratura)',
              description:
                'The council that appoints, places, transfers, promotes and disciplines the judges of the judicial courts (Article 217), chaired by the President of the Supreme Court of Justice, with members appointed by the President of the Republic, elected by Parliament, and elected by judges. A separate council exists for the administrative and tax judges, and the prosecution has its own High Council.',
            },
            {
              term: 'Inspectorate of Internal Administration (IGAI)',
              description:
                'The external-control service of the security forces under the Ministry of Internal Administration — the Guarda Nacional Republicana and the Polícia de Segurança Pública — with an emphasis on rights protection. It is named here as the police-oversight body; its detail was reached through a search rather than a fetched official page.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: "It states which bodies oversee the courts, the prosecution and the police, and their basis. It does not assess how effective any of them is, and the police inspectorate (IGAI) and the councils' statutes were not fetched in full.",
        },
      ],
      uncertainty: [
        "The IGAI's mandate was reached through a search, not a fetched official page; the Ombudsman and the councils are established from the Constitution.",
        'The detailed powers and findings of these bodies were not researched.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Portugal',
      summary:
        'Every source used for the Portugal pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'pt-constitution',
        'pt-loic',
        'pt-cpp',
        'pt-ejustice-justice',
        'pt-dgrsp',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Portugal pages rest on six sources: the Constitution (the Assembly of the Republic's official English translation), the Law on the Organisation of Criminal Investigation (LOIC), the Code of Criminal Procedure, the European e-Justice Portal (for the court hierarchy), the Directorate-General for Reintegration and Prison Services, and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "The Constitution was fetched as the Assembly of the Republic's official English PDF (the Portuguese text was also read), and the LOIC and Code of Criminal Procedure as official-origin PDFs, all text-extracted; the e-Justice and DGRSP pages were read directly. The official consolidated-legislation portal (diariodarepublica.pt) is a client-side application that did not serve text to an automated request, so the statutes were read from official-origin PDFs instead. One correction from verification: the prosecution's autonomy is anchored to Constitution Article 219, not to the e-Justice page. The source register records the access path for each.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/portugal-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Portugal',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "The organisation of forensic science in Portugal (the National Institute of Legal Medicine and Forensic Sciences, and the Polícia Judiciária's forensic laboratory) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.",
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Portugal',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Portugal involve the security forces, the tax-and-customs authority, and the Schengen and EU customs context, and were reorganised when the former immigration service (SEF) was restructured; this could not be researched to the standard required here.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Portugal',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Portuguese institutional history — the 1974 Carnation Revolution, the 1976 Constitution and its seven revisions, and the building of the autonomous regions — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Portugal',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1976 Constitution, its 2005 seventh revision, and Law 49/2008 on criminal investigation — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
