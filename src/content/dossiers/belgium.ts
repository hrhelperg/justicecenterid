import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Belgium dossier — the federal-but-justice-centralised pilot (Batch A).
 *
 * The model question Belgium tests: a federal state (Constitution art. 1) in which the four
 * justice functions are FEDERAL competences, not devolved. It is the inverse of Germany, and it
 * needs no new schema — see docs/research/belgium-model-findings.md.
 *
 * Research date: facts checked against sources on 2026-07-26 and independently re-verified. Two
 * provenance corrections from the verification pass were applied: (1) the official English
 * translation of Constitution art. 147 reads "a Supreme Court for all Belgium" — the institution
 * is the Court of Cassation, so the name is taken from the court's own site, not presented as a
 * verbatim constitutional quote; (2) the direction of criminal investigation is paraphrased from
 * the official sources, not quoted.
 *
 * Source access: the official Federal Police website was unreachable and belgium.be was
 * bot-walled, so the Federal Police's internal directorates are NOT described. The Constitution
 * was read from the House of Representatives' official English PDF; the two-level integrated
 * police from the consolidated Law of 7 December 1998 on Justel; the courts and prosecution from
 * the EU e-Justice Portal and the Court of Cassation's own site.
 */
const BE_PRISON_DENSITY: RestrictedClaim = {
  id: 'be-prison-density-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Belgian prisons held 12,041 people including those on remand, against a total capacity of 10,680 places — a prison density of 112.7 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees) and Table 16 (total capacity and prison density), reference date 31 January 2024. Data supplied by the national prison administration to the University of Lausanne research team.',
  jurisdiction: 'BE',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate for a single, federally administered prison system, at one reference date. A density of 112.7 means the system as a whole held more people than its stated capacity on that day — Belgium is above capacity at the national level. It does not establish the position of any individual prison, nor the position on any other date. SPACE I warns that comparisons of such levels between countries "are always problematic", so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const BELGIUM: CountryDossier = {
  countryCode: 'BE',
  slug: 'belgium',
  name: 'Belgium',
  officialName: 'the Kingdom of Belgium',
  independentBodyNoun: 'a Belgian government body',
  summary:
    'Belgium is a federal state, but — unlike Germany or the United States — its justice functions are federal, not devolved: one Court of Cassation, one Constitutional Court and one High Council of Justice "for all Belgium", a federal prosecution service, federal prisons, and a federal-plus-local integrated police. Its institutions carry Dutch, French and German names.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['be'],
  sources: ['be-constitution', 'be-ejustice-justice'],
  uncertainty: [
    "The internal directorates of the Federal Police were not described: the force's own website was unreachable and belgium.be was bot-walled during research.",
    'Youth-justice competence has partly moved to the Communities under successive state reforms; the current allocation was not researched.',
    'The dedicated police-oversight committee and the federal ombudsman are named in general terms but were not confirmed from a primary source; the forensic system, border and customs, and institutional history were not researched.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Belgium is a federal state with a civil-law legal tradition. Article 1 of the Constitution declares it "a federal State composed of Communities and Regions". But the point that matters most for justice is what the federalism does NOT touch: the courts, the prosecution service, the police and the prisons are all federal matters, not powers of the Communities or Regions.',
      claim: 'fact',
      sources: ['be-constitution'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Federal — but the inverse of Germany',
      text: 'It is tempting to assume that a federal state runs its justice system the way Germany does, with the constituent units administering the courts and prosecution. Belgium is the opposite. Its Constitution establishes single national bodies "for all Belgium" — one Constitutional Court (Article 142), one Court of Cassation (Article 147), one High Council of Justice and a single prosecution service (Article 151). The Communities and Regions hold large competences (education, culture, the economy), but the administration of justice stays federal. In our jurisdiction model this shows up cleanly: where Germany\'s federal record shares the justice functions with its Länder, Belgium\'s holds them all itself.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Three languages, three top courts',
      text: "Belgian institutions carry names in Dutch, French and (for the German-speaking Community) German, and these pages give the Dutch and French names alongside the English. Belgium also has three courts at the top, not one: the Court of Cassation (Hof van Cassatie / Cour de cassation) heads the ordinary judiciary; the Constitutional Court (Grondwettelijk Hof / Cour constitutionnelle) reviews legislation against the Constitution; and the Council of State (Raad van State / Conseil d'État) is the supreme administrative court. The courts module keeps them distinct.",
    },
    {
      kind: 'paragraph',
      text: "The integrated police (Law of 7 December 1998) provide policing at a federal and a local level together; the Public Prosecutor's Office (Openbaar Ministerie / Ministère public) prosecutes and, with the investigating judge, directs criminal investigations; the ordinary courts run from the justices of the peace up to the Court of Cassation; and the federal prison system enforces sentences. Each is national; none is a Community or Region body.",
      claim: 'fact',
      sources: ['be-police-law-1998', 'be-ejustice-justice'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Belgium',
      summary:
        'A federal state whose justice functions are federal — the inverse of Germany. The constitutional basis for single national justice institutions "for all Belgium".',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['be-constitution', 'be-ejustice-justice'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Belgium is a constitutional monarchy and a federal state with a civil-law tradition. Under Article 40 of the Constitution, "judiciary power is exercised by the courts" and court decisions "are executed in the name of the King". The Constitution is the supreme framework; ordinary law is codified and consolidated on the official Moniteur belge / Belgisch Staatsblad.',
          claim: 'fact',
          sources: ['be-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Federal state, federal justice',
          text: 'The defining fact is that Belgium\'s federalism does not divide the administration of justice. The Constitution creates single institutions "for all Belgium": a Constitutional Court (Article 142), a Court of Cassation (Article 147), and — under Article 151 — a High Council of Justice and an independent prosecution service. The Communities and Regions have no courts, no prosecution service, no police force and no prisons of their own for the ordinary criminal-justice system. This is why, in comparative terms, Belgium reads like a unitary justice system inside a federal state — the inverse of Germany, where the Länder administer the courts and prosecution.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A note on translation, and the "Supreme Court"',
          text: 'The official English translation of the Constitution renders Article 147 as "There is a Supreme Court for all Belgium. This Court has no competence over the substance of the case." The institution it names is the Court of Cassation (Hof van Cassatie / Cour de cassation), which reviews the legality of judgments rather than re-deciding the facts — so "Supreme Court" here is a translation of "Cour de cassation", not a differently-named body. These pages use the institution\'s own name, the Court of Cassation, and flag the translation where it matters.',
        },
      ],
      uncertainty: [
        "The constitutional articles are read from the House of Representatives' official English translation; the authoritative texts are Dutch, French and German.",
        'The precise enumerated-versus-residual competence mechanics of the state-reform legislation were not researched; the federal character of the justice functions rests on the "for all Belgium" articles.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Belgium',
      summary:
        'One integrated police service on two levels — federal and local — created by the Law of 7 December 1998 out of the former gendarmerie, municipal and judicial police.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['be-police-law-1998'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Belgium has one integrated police service, structured on two levels. The Law of 7 December 1998 — its official title is "Law organising an integrated police service, structured on two levels" — provides that the police are "structured on two levels: the federal level and the local level, which together provide the integrated police function". The Federal Police operate nationally; the Local Police are organised in police zones covering the municipalities.',
          claim: 'fact',
          sources: ['be-police-law-1998'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'One integrated service, from three former forces',
          text: 'Before 2001 Belgium had three separate police forces — the gendarmerie (a national force with military status), the municipal police, and the judicial police attached to the prosecutors\' offices. The 1998 law merged them into a single integrated service on the federal and local levels, which took effect on 1 January 2001. It is "integrated" precisely because the federal and local levels are designed to work as one function rather than as competing forces.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: "This page describes the legal structure of the integrated police. It does not describe the Federal Police's internal directorates — its own website was unreachable during research — and it does not describe deployment, tactics, surveillance or operational procedure, and it will not.",
        },
      ],
      uncertainty: [
        "The internal organisation of the Federal Police (its directorates) was not verified, because the force's official website was unreachable.",
        'The number and boundaries of the local police zones were not researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Belgium',
      summary:
        'The ordinary hierarchy from the justices of the peace to the Court of Cassation, plus the two separate top courts: the Constitutional Court and the Council of State.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'be-ejustice-justice',
        'be-ejustice-specialised',
        'be-cassation',
        'be-constitution',
      ],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The ordinary courts run from the justices of the peace and police courts, through the courts of first instance in the twelve judicial districts, to five courts of appeal (Brussels, Liège, Mons, Ghent and Antwerp), and finally the Court of Cassation (Hof van Cassatie / Cour de cassation) at the apex. Under Article 147 of the Constitution there is one such court "for all Belgium", and it "has no competence over the substance of the case".',
          claim: 'fact',
          sources: ['be-ejustice-justice', 'be-cassation'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Cassation reviews the law, not the facts',
          text: 'The Court of Cassation is not a third instance. In its own words it "is not a third degree jurisdiction", "does not judge the dispute for a third time", and "analyses the legality of the rulings and does not know of the facts of the case". It checks whether the lower courts applied the law correctly; if they did not, it quashes and sends the case back. This is the civil-law model of a supreme court, and it is why the official English "Supreme Court" for Article 147 can mislead a common-law reader.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Constitutional Court (Grondwettelijk Hof / Cour constitutionnelle)',
              description:
                'A separate court of twelve judges that "examines conformity of acts, decrees and ordinances with the Constitution" and "oversees proper division of powers between the federated entities". It may annul and suspend legislation — the constitutional-review function that the Netherlands, by contrast, does not give any court.',
            },
            {
              term: "Council of State (Raad van State / Conseil d'État)",
              description:
                'The supreme administrative court, "both an advisory and a judicial institution": it may annul and suspend administrative acts and acts as a court of cassation for the inferior administrative courts. Administrative law does not funnel into the ordinary Court of Cassation.',
            },
            {
              term: 'One judiciary, three languages',
              description:
                'The courts operate in Dutch, French and German according to the linguistic area, and the Constitutional Court is composed equally of Dutch-speaking and French-speaking judges — a structural reflection of the federal state within a unitary judiciary.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the labour and business courts, the assize courts for the most serious crimes, and the routes of appeal have not been researched from the primary Judicial Code and are not described.',
        },
      ],
      uncertainty: [
        'The count of five courts of appeal and twelve judicial districts is taken from the EU e-Justice Portal; the underlying Judicial Code was not read in full.',
        "The assize courts (cour d'assises / hof van assisen) for serious crimes are noted as existing but not described.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Belgium',
      summary:
        "The Public Prosecutor's Office (the parquet / parket) — constitutionally independent in individual cases, yet subject to the minister's power to order prosecutions and set criminal policy.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['be-constitution', 'be-ejustice-justice'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Belgium is conducted by the Public Prosecutor\'s Office (Openbaar Ministerie / Ministère public), known as the parket / parquet. Its members are the "standing judges" (staande magistratuur / magistrature debout) — magistrates who bring prosecutions — as distinct from the "sitting judges" (zittende magistratuur / magistrature assise) who adjudicate. The prosecution service is part of the magistracy, not the police.',
          claim: 'fact',
          sources: ['be-ejustice-justice'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independent in the case, but not from criminal policy',
          text: 'Belgium sits between the Irish and Dutch arrangements. Article 151 §1 of the Constitution provides that "the public prosecutor is independent in conducting individual investigations and prosecutions" — so it is constitutionally protected from interference in the individual case. But the same article preserves "the right of the competent minister to order prosecutions and to enact binding directives of criminal policy". So the Belgian prosecutor is independent in deciding the individual case, yet the Minister of Justice may direct that a prosecution be brought and may set the general policy the prosecution follows. That is a different balance from the independent Irish DPP and from the minister-led Dutch OM alike.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: "This page states the constitutional position of the prosecution as the sources describe it. It does not research how the minister's power to order prosecutions or to set criminal policy is used in practice, nor the internal hierarchy of the prosecutors' offices.",
        },
      ],
      uncertainty: [
        "The organisation of the prosecutors' offices (the federal prosecutor, the prosecutors general at the courts of appeal, the King's prosecutors) was not researched in detail.",
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Belgium',
      summary:
        'How the magistracy directs investigation: the public prosecutor leads the ordinary enquiry, and an investigating judge conducts the judicial investigation for more intrusive measures; the police carry it out.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['be-ejustice-justice', 'be-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Criminal investigation in Belgium is directed by the magistracy, not the police. In the ordinary investigation (the information / opsporingsonderzoek) the public prosecutor directs the enquiry; where more intrusive coercive measures are needed, an investigating judge (juge d'instruction / onderzoeksrechter) is appointed to conduct a judicial investigation (the instruction / gerechtelijk onderzoek). The police carry out the investigative acts under that direction.",
          claim: 'fact',
          sources: ['be-ejustice-justice'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The investigating judge',
          text: 'The investigating judge is a distinctively civil-law figure with no clean common-law equivalent: a member of the judiciary who directs the gathering of evidence, both for and against the suspect, and who authorises the most intrusive measures. This page describes that two-track structure — prosecutor-led ordinary investigation, judge-led judicial investigation — as the official sources present it; it is our framing of why the allocation matters, grounded in those sources.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who directs the investigation and who carries it out. It does not describe investigative techniques, surveillance or forensic methods, or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The precise powers of the investigating judge and the judicial controls on coercive measures were not researched from the primary Code of Criminal Procedure.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Belgium',
      summary:
        'Prisons are a federal responsibility — and a properly scoped Council of Europe figure showing the system above capacity at the start of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['be-constitution', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [BE_PRISON_DENSITY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons and the enforcement of custodial sentences in Belgium are a federal responsibility, run by the federal justice administration rather than by the Communities or Regions. Because the system is federal and national, a figure for the whole system describes the whole system, with none of the sub-national aggregation that qualifies a German or United States prison figure.',
          claim: 'fact',
          sources: ['be-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison numbers, stated with their limits',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Belgian prisons held 12,041 people, including those on remand, against a total capacity of 10,680 places — a prison density of 112.7 inmates per 100 places. That density above 100 means the system as a whole held more people than its stated capacity on that day. Three qualifications travel with the figure: it is a single-day snapshot, not an annual average; a national density does not establish the position of any individual prison; and SPACE I warns that its levels are not to be compared between countries, so this supports no comparison with the other country pages.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: "The federal prison administration's internal structure (its Directorate-General of Penitentiary Institutions was not confirmed from a reachable official page), the individual prisons, non-custodial sanctions, and the inspection of prison conditions have not been researched for this pilot and are not described.",
        },
      ],
      uncertainty: [
        'The specific federal directorate that runs the prisons was not confirmed from a reachable official page; only the federal character of the prison system is stated as sourced.',
        'Youth detention, which involves Community competences, and non-custodial sanctions were not researched.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Belgium',
      summary:
        'The High Council of Justice — a constitutional body "for all Belgium" — with an honest note on the police-oversight and ombudsman bodies this pilot could not confirm from primary sources.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['be-constitution'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Belgium has a constitutional judicial council. Article 151 of the Constitution establishes a High Council of Justice (Hoge Raad voor de Justitie / Conseil supérieur de la Justice) "for all Belgium", composed of a Dutch-speaking and a French-speaking college. It provides external oversight of the judiciary — proposing candidates for judicial appointment, handling complaints about the functioning of the courts, and issuing advice — and it was created in the constitutional revision that followed the crisis of the 1990s.',
          claim: 'fact',
          sources: ['be-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Independence guaranteed, appointments constrained',
          text: 'Article 151 does two things at once: it guarantees that judges are independent in their jurisdictional functions and that the prosecutor is independent in individual cases, and it channels judicial appointments through the High Council of Justice, so that appointment to the bench does not rest on political patronage alone. The King appoints judges and the officers of the Court of Cassation under conditions set by law.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'An honest gap',
          text: 'Belgium has a standing external committee that oversees the police and reports to Parliament, and a federal ombudsman, but this pilot did not confirm their mandates from reachable official sources, so they are not described here beyond this note. Their absence from the page is a limit of our research, stated rather than filled.',
        },
      ],
      uncertainty: [
        'The police-oversight committee (Comité P / Comité permanent de contrôle des services de police) and the federal ombudsman are named in general terms but were not confirmed from a primary official source.',
        'The powers and findings of the High Council of Justice were not researched in detail; only its constitutional basis and composition are stated.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Belgium',
      summary:
        'Every source used for the Belgium pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'be-constitution',
        'be-cassation',
        'be-police-law-1998',
        'be-ejustice-justice',
        'be-ejustice-specialised',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Belgium pages rest on six sources: the House of Representatives' official English translation of the Constitution, the Court of Cassation's own site, the consolidated Law of 7 December 1998 on the integrated police (from the official Justel database), two European e-Justice Portal pages (the ordinary courts and prosecution, and the specialised courts), and the Council of Europe's prison statistics. Each was read or retrieved and confirmed on 26 July 2026, and independently re-checked in an adversarial verification pass.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed, and what could not be reached',
          text: "The Constitution was fetched as the House of Representatives' official English PDF and text-extracted; the 1998 police law from the official Justel database; the Court of Cassation and e-Justice pages read directly. Two official sites could not be reached: the Federal Police's own website (unreachable) and the belgium.be portal (bot-walled). Because of that, the Federal Police's internal directorates and the federal prison directorate are not asserted, and the police-oversight and ombudsman bodies are named only in general terms. The source register records the access path for each source.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/belgium-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Belgium',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Belgium (the National Institute for Criminalistics and Criminology and its relationship to the police and the magistracy) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Belgium',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Belgium involve the federal customs administration, the Schengen and EU customs context, and the major port of Antwerp, and could not be researched to the standard required here — particularly given that the Federal Police and belgium.be sources were unreachable.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Belgium',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Belgian institutional history — the 1831 Constitution, the successive state reforms that built the federal structure, the abolition of the gendarmerie and the 1998 police reform, and the post-Dutroux creation of the High Council of Justice — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Belgium',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the Law of 7 December 1998 on the integrated police (operational 1 January 2001) — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
