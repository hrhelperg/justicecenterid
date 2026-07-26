import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Greece dossier — a unitary civil-law republic with three co-equal supreme courts and no
 * constitutional court (Batch B; the final country of the batch).
 *
 * Research date: facts checked on 2026-07-26 against the Greek Constitution (the Comparative
 * Constitutions Project / Constitute English translation, the Hellenic Parliament's own English PDF
 * being bot-walled), the EU e-Justice portal (current, updated 14 June 2024), and — for the
 * ministerial placement of the police and prisons, because the Greek official sites returned HTTP
 * 403 — the U.S. Department of State's 2022 Country Report on Greece. Independently re-verified in
 * an adversarial pass; Art. 93§4 and Art. 105 were additionally re-confirmed by hand at authoring
 * time. Institution names are given in Greek with a transliteration and an English rendering.
 *
 * The model result: Greece is unitary — all justice national, no region record. Its distinctive
 * combination: three co-equal supreme courts (civil/criminal, administrative, audit) with NO
 * dedicated constitutional court (diffuse review, plus a conflict-resolving special court); a
 * prosecution that is an independent part of the judiciary; and police and prisons both under the
 * Ministry of Citizen Protection, with the courts and prosecution under the Ministry of Justice for
 * service conditions.
 */
const GR_PRISON_DENSITY: RestrictedClaim = {
  id: 'gr-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Greek prisons held 10,203 people including those on remand, against a total capacity of 10,775 places — a prison density of 94.7 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024.',
  jurisdiction: 'GR',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, nationally administered prison system, at one reference date. A density of 94.7 means the system as a whole held fewer people than its stated capacity on that day; it does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const GREECE: CountryDossier = {
  countryCode: 'GR',
  slug: 'greece',
  name: 'Greece',
  officialName: 'the Hellenic Republic',
  independentBodyNoun: 'a Greek government body',
  summary:
    'Greece is a unitary, civil-law republic with all justice functions national. It has three co-equal supreme courts — for civil and criminal, administrative, and financial-audit matters — and no dedicated constitutional court: every court reviews constitutionality itself. Its prosecution is an independent part of the judiciary, and its police and prisons sit under the same ministry.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['gr'],
  sources: ['gr-constitution', 'gr-ejustice-courts'],
  uncertainty: [
    "The ministerial placement of the police and the prisons (both under the Ministry of Citizen Protection) rests on the U.S. Department of State's 2022 report, a foreign-government secondary source used because the Greek official sites returned HTTP 403; the exact instrument and date transferring corrections to that ministry are not established from a primary source.",
    'The Code of Criminal Procedure article numbers governing the police as preliminary investigators were not fetched; the prosecutor-led, examining-magistrate model is established from the Constitution and the EU e-Justice portal.',
    'The Constitution is cited from an unofficial (Constitute) English translation, cross-checked against the current e-Justice portal; the Greek text is authoritative and the 2019 revision is understood not to have altered the judicial articles, but no post-2019 official consolidated diff was fetched.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Greece is a unitary, decentralised parliamentary republic with a civil-law tradition, governed by the Constitution of 1975 (revised through 2019). Judicial power is exercised by the courts, whose decisions are executed "in the name of the Greek People" (Article 26), and justice is administered by judges who enjoy "functional and personal independence" (Article 87). The State is organised on the principle of decentralisation (Article 101), but no subnational tier holds any justice competence.',
      claim: 'fact',
      sources: ['gr-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Three top courts, and no constitutional court',
      text: 'Greece has three co-equal supreme courts, each final in its own branch — and, unusually, no dedicated constitutional court. Instead, every court reviews constitutionality itself: Article 93§4 binds the courts "not to apply a statute whose content is contrary to the Constitution". The courts page sets out the three apexes and this diffuse review.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through national institutions, split across two ministries. A single national police force and the prison system both sit under the Ministry of Citizen Protection; the courts and the prosecution fall under the Ministry of Justice for their service conditions. The prosecution is itself part of the independent judiciary, and it directs and supervises criminal investigations.',
      claim: 'fact',
      sources: ['gr-ejustice-professions', 'gr-state-dept-2022'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Greece',
      summary:
        'A unitary republic under the 1975 Constitution, with independent judges, diffuse constitutional review, and one narrow ecclesiastical autonomy (Mount Athos) that does not touch the national justice system.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Greece is a unitary state organised on the principle of decentralisation (Article 101): it has first- and second-level local government (municipalities and regions) with independence for local affairs (Article 102), but the Constitution assigns no justice competence to any subnational tier. The courts are established by statute (Article 93), and judges are appointed for life by presidential decree (Article 88), subject "only to the Constitution and the laws" (Article 87§2).',
          claim: 'fact',
          sources: ['gr-constitution'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Mount Athos — a narrow ecclesiastical autonomy',
          text: 'The one special-autonomy feature is Mount Athos (Άγιον Όρος, Ághion Óros), "a self-governed part of the Greek State, whose sovereignty thereon shall remain intact" (Article 105). Even there the State remains "exclusively responsible for safeguarding public order and security", and any judicial power of the monastic authorities is defined by statute. It is an ecclesiastical-territorial self-government, not a general devolved justice tier, and so it is described here rather than modelled as a region.',
        },
      ],
      uncertainty: [
        'The Constitution is cited from an unofficial English translation (Constitute), cross-checked against the current e-Justice portal; the Greek text is authoritative.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Greece',
      summary:
        'A single national force, the Hellenic Police, under the Ministry of Citizen Protection.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-state-dept-2022'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Greece is national. The Hellenic Police (Ελληνική Αστυνομία, Ellinikí Astynomía) is a single national force; there are no separate regional or municipal police forces of general competence. It sits under the Ministry of Citizen Protection (Υπουργείο Προστασίας του Πολίτη). Maritime enforcement is separate — the Coast Guard reports to the Ministry of Shipping — as are the armed forces under the Ministry of National Defence.',
          claim: 'fact',
          sources: ['gr-state-dept-2022'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: "A note on this page's source",
          text: "The ministerial placement of the Hellenic Police is taken from the U.S. Department of State's 2022 report on Greece — a foreign-government secondary source — because the Greek official sites (the Hellenic Police and the Ministry of Citizen Protection) returned HTTP 403 to every fetch method. The source is named openly; the underlying facts are stated no more firmly than that source supports.",
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which national force exists and which ministry oversees it. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        "The Hellenic Police's own establishment law was not fetched (astynomia.gr and minocp.gov.gr were bot-walled); the national-force and ministry attribution rests on the U.S. State Department report.",
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Greece',
      summary:
        'Three co-equal supreme courts — Areios Pagos, the Council of State, and the Court of Audit — with diffuse constitutional review and a conflict-resolving special court, and no dedicated constitutional court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-constitution', 'gr-ejustice-courts'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Greece has three co-equal supreme courts, each final in its own domain. The e-Justice portal states that the Council of State "is one of the three highest courts in Greece (together with the Supreme Court and the Hellenic Court of Auditors)".',
          claim: 'fact',
          sources: ['gr-ejustice-courts'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Άρειος Πάγος (Áreios Págos, "Areios Pagos")',
              description:
                'The Supreme Civil and Criminal Court — the court of cassation for civil and criminal matters, at the apex of the ordinary courts (courts of appeal, courts of first instance, and the constitutionally required mixed jury courts for felonies).',
            },
            {
              term: 'Συμβούλιο της Επικρατείας (Symvoúlio tis Epikrateías, "Council of State")',
              description:
                'The Supreme Administrative Court (Article 95) — the apex of the administrative courts, with jurisdiction over the annulment of unlawful administrative acts.',
            },
            {
              term: 'Ελεγκτικό Συνέδριο (Elegktikó Synédrio, "Court of Audit")',
              description:
                'The court for public finance (Article 98) — auditing State expenditure and accountable officials, and deciding related disputes. Its judgments in those matters are not subject to the Council of State (Article 98§3), so it is a genuine co-equal apex, not a subordinate court.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Constitutional review without a constitutional court',
          text: 'Greece has no Kelsenian constitutional court. Review is diffuse and incidental: Article 93§4 binds every court "not to apply a statute whose content is contrary to the Constitution", so constitutionality is decided case by case at every level. The only body sitting above the three supreme courts is the Special Highest Court (Ανώτατο Ειδικό Δικαστήριο, Article 100) — but it is a conflict-resolver, convened to settle disputes where the supreme courts have handed down conflicting judgments (including on a statute\'s constitutionality), not a standing court of abstract constitutional review.',
        },
      ],
      uncertainty: [
        'The court hierarchy is cited from the Constitution and the e-Justice portal; the courts-organisation statutes and the ordinary-court tiers were not read in full.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Greece',
      summary:
        'The public prosecution (eisangelía) — an independent part of the judiciary staffed by magistrates, not an executive agency; the Ministry of Justice sets only its general service conditions.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-constitution', 'gr-ejustice-professions'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution is conducted by the public prosecutor's offices (εισαγγελίες, eisangelíes), headed by the Prosecutor's Office of Areios Pagos. On the e-Justice portal's account, these offices \"belong to the 'judicial branch' of government and participate in the administration of justice\", and public prosecutors \"enjoy operational and personal independence\". Prosecutors are magistrates appointed for life by presidential decree (Article 88), with the functional and personal independence of Article 87.",
          claim: 'fact',
          sources: ['gr-constitution', 'gr-ejustice-professions'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Inside the judiciary, and independent of the minister',
          text: 'Like Italy\'s magistrate-prosecutors, the Greek prosecution is part of the independent judiciary rather than a service under a minister. The Ministry of Justice "is responsible for public prosecutors\' general conditions of service" — administrative matters only, not the direction of prosecutorial decisions, which the prosecutors take independently. This is the opposite end of the spectrum from Poland, where the head of the prosecution is the justice minister.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "This page establishes the prosecution's place in the judiciary and its independence. It does not set out the internal hierarchy of the prosecution offices or the Organisation of Courts statute, which were not fetched.",
        },
      ],
      uncertainty: [
        'The statute organising the courts and the prosecution was not directly fetched; the independence and judicial-branch placement are established from the Constitution and the e-Justice portal.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Greece',
      summary:
        'The prosecutor directs and supervises the investigation; an examining magistrate conducts the judicial investigation of felonies; the police investigate under that supervision.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-constitution', 'gr-ejustice-professions'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Greece is directed by the magistracy. The prosecutor\'s duties include initiating criminal proceedings, carrying out preliminary investigations, and supervising the law-enforcement authorities (e-Justice); the police act as investigative organs under that supervision. For felonies, the judicial investigation is conducted by an examining magistrate (ανακριτής), the "competent examining magistrate" the Constitution refers to among the guarantees on arrest and detention (Article 6).',
          claim: 'fact',
          sources: ['gr-ejustice-professions', 'gr-constitution'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who directs and supervises the investigation and who carries it out. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The Code of Criminal Procedure article numbers for the police as preliminary investigators were not fetched; the prosecutor-led, examining-magistrate model rests on the Constitution and the e-Justice portal.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Greece',
      summary:
        'The prison system under the Ministry of Citizen Protection — the same ministry as the police — and a properly scoped Council of Europe figure showing the system under capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-state-dept-2022', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [GR_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prisons in Greece are run nationally by the Ministry of Citizen Protection — the same ministry that oversees the police — through its General Secretariat for Anti-crime Policy (Γενική Γραμματεία Αντεγκληματικής Πολιτικής). This ministerial placement is taken from the U.S. State Department's 2022 report, because the Greek official sites were not reachable; the exact instrument transferring corrections to this ministry (it previously sat under the Ministry of Justice) is not established from a primary source.",
          claim: 'fact',
          sources: ['gr-state-dept-2022'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Greek prisons held 10,203 people, including those on remand, against a total capacity of 10,775 places — a prison density of 94.7 inmates per 100 places. That density below 100 means the system as a whole held fewer people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons and their regimes, the treatment of detainees, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'The ministerial placement of the prisons rests on a foreign-government secondary source; the transfer instrument and date are not established.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Greece',
      summary:
        'The constitutionally entrenched Ombudsman, which also runs the national torture-prevention mechanism, and the self-governing councils of the judiciary.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['gr-constitution', 'gr-state-dept-2022'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Ombudsman (Συνήγορος του Πολίτη, Synígoros tou Políti)',
              description:
                "A constitutionally entrenched independent authority (Article 103§9) that investigates complaints against public authorities. It also operates Greece's National Preventive Mechanism against ill-treatment, and — per the U.S. State Department report — a large share of the complaints it handles relate to the police.",
            },
            {
              term: 'Councils of the judiciary',
              description:
                'The supreme judicial councils (Article 90) decide promotions and transfers of magistrates, and a Supreme Disciplinary Council (Article 91) exercises discipline over senior magistrates, with disciplinary action initiated by the Minister of Justice. These are the self-governing organs of the judiciary.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: "It names the constitutional oversight body and the judicial councils, and their basis. It does not assess how effective oversight is, and whether a dedicated independent external police-complaints body (separate from the Ombudsman and the police's internal-affairs division) exists was not established from a source read.",
        },
      ],
      uncertainty: [
        'Whether an independent external police-complaints authority exists separate from the Ombudsman and internal affairs was not established from a fetched source.',
        "The Ombudsman's complaint figures are taken from the U.S. State Department report and are not relied on beyond illustrating the mandate.",
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Greece',
      summary:
        'Every source used for the Greece pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'gr-constitution',
        'gr-ejustice-courts',
        'gr-ejustice-professions',
        'gr-state-dept-2022',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Greece pages rest on the Constitution (an unofficial English translation from the Comparative Constitutions Project, cross-checked against the current EU e-Justice portal), two e-Justice pages (the court hierarchy and the legal professions), the U.S. State Department's 2022 report (for the ministerial placement of the police and prisons), and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026 and independently re-checked; Articles 93§4 and 105 of the Constitution were re-confirmed by hand.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Two honest limits on the Greek sources',
          text: "First, the Hellenic Parliament's own official English Constitution and the Greek government sites (the Hellenic Police, the Ministry of Citizen Protection) were bot-walled (HTTP 403); the Constitution is therefore quoted from an unofficial translation, and the ministerial placement of the police and prisons from the U.S. State Department report, each named as such. Second, the exact Code of Criminal Procedure article numbers for the police as investigators, and the instrument transferring corrections to the Ministry of Citizen Protection, were not fetched from primary text and are not asserted.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/greece-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Greece',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "The organisation of forensic science in Greece (the forensic-medicine services and the Hellenic Police's forensic capacity) has not been read to the standard required — and the Greek official sites were bot-walled — and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.",
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Greece',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        "Border and customs in Greece involve the Hellenic Police, the Coast Guard, the customs administration, and Greece's position on the EU external border, and could not be researched to the standard required here without risking an inaccurate description of a security-sensitive function.",
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Greece',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Greek institutional history — the 1975 Constitution after the restoration of democracy, and the successive revisions of 1986, 2001, 2008 and 2019 — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Greece',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1975 Constitution and its revisions — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here, and several Greek official sources were bot-walled during research.',
    },
  ],
};
