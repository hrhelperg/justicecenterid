import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Austria dossier — a federation whose justice system is fully federal (Batch B).
 *
 * Research date: facts checked against Austrian primary sources (the RIS official legal database,
 * the OGH, the Ministries of Justice and the Interior, the Ombudsman Board, and the government
 * consultation portal) on 2026-07-26, and independently re-verified in an adversarial pass. Four
 * load-bearing constitutional/statutory passages were additionally re-fetched by hand at authoring
 * time (B-VG Art. 82(1) and Art. 90a, StAG §2(1), and the OGH's "three co-equal courts" statement).
 *
 * The model result: Austria is a federation, but — like Belgium and unlike Germany — the four
 * justice functions are federal competences. So it is one `federal` record with every core
 * competence `exclusive-federal`, and no Land record. Two features it does NOT share with its
 * neighbours: three co-equal apex courts, and a prosecution that is currently subordinate to the
 * Federal Minister of Justice (with a 2026 reform, still only a consultation draft, that would
 * change that).
 */
const AT_PRISON_POPULATION: RestrictedClaim = {
  id: 'at-prison-population-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, Austrian prisons held 9,258 people including those on remand — a prison population rate of 101.1 inmates per 100,000 inhabitants. The Council of Europe survey did not report a total prison capacity for Austria, so no occupancy level or density can be stated.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates including pre-trial detainees, and the rate per 100,000 inhabitants), reference date 31 January 2024. Table 16 recorded no total-capacity figure for Austria, so no density/occupancy value is taken.',
  jurisdiction: 'AT',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2024-01-31',
  limitation:
    'A national count and rate for a single, nationally administered prison system, at one reference date. Because SPACE I reported no capacity figure for Austria, nothing can be said here about whether the system was above or below capacity — no occupancy or density claim is made. The rate per 100,000 uses the population denominator SPACE I applied; SPACE I warns that its levels are not to be compared between countries, so this figure supports no comparison with any other country page. It is a single-day snapshot, not an average over the year.',
};

export const AUSTRIA: CountryDossier = {
  countryCode: 'AT',
  slug: 'austria',
  name: 'Austria',
  officialName: 'the Republic of Austria',
  independentBodyNoun: 'an Austrian government body',
  summary:
    'Austria is a federation of nine Länder, but — like Belgium and unlike Germany — its courts, prosecution, police and prisons are all federal, not run by the Länder. It has three co-equal apex courts, and a public prosecution service that is currently subordinate to the Federal Minister of Justice; a 2026 draft reform, still in consultation, would make that service independent.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['at'],
  sources: ['at-bvg', 'at-stag'],
  uncertainty: [
    'Austria has no single High Council of the Judiciary of the Southern-European type; judicial independence rests with individual judges (Art. 87) and court administration involves judicial staffing senates (Personalsenate) and ultimately the Ministry of Justice. The precise statement "there is no judicial council" was not confirmed from a single dedicated source and is described, not asserted categorically.',
    'A dedicated independent police-complaints authority was not confirmed from a fetched source; complaints run through the security-authority hierarchy under the Interior Ministry and, for criminal conduct, the ordinary prosecution and courts.',
    'The forensic system, border and customs arrangements, and institutional history have not been researched and are not described.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Austria is a federal republic of nine Länder with a civil-law tradition, governed by the Federal Constitutional Law (Bundes-Verfassungsgesetz, B-VG) of 1920/1930. Its distinctive feature for this site is that federalism stops at the courtroom door: the administration of justice, criminal and civil law, the security police and the prison system are all federal competences under Article 10 of the Constitution, and Article 82(1) provides that ordinary jurisdiction "emanates from the Federation".',
      claim: 'fact',
      sources: ['at-bvg'],
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title:
        'A federation, but justice is federal — the Belgium result, not the Germany result',
      text: 'Two federations on this site sit at opposite poles. In Germany, the Länder run the courts, the police and the prisons. In Austria, the Federation does: there are no Land ordinary courts, no Land criminal codes, no Land prosecution services, no Land prisons and no separate Land police forces. The nine Land police directorates are federal authorities under the Interior Minister, not Land institutions. Austria therefore lands in the same box as Belgium — federal in form, centralised for justice — which is why it is modelled as one federal record with every core competence exclusive to the Federation.',
    },
    {
      kind: 'paragraph',
      text: 'The system runs through federal institutions. A single national police under the Federal Ministry of the Interior investigates under the direction of the public prosecution. Three co-equal apex courts sit at the top of the judiciary. The prosecution service is an organ of the ordinary judiciary but answers, through a chain of instruction, to the Federal Minister of Justice. And the prisons are run by the Federal Ministry of Justice.',
      claim: 'fact',
      sources: ['at-bmi', 'at-ogh', 'at-stag', 'at-justiz-strafvollzug'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Austria',
      summary:
        'A federation whose justice functions are all federal: ordinary jurisdiction emanates from the Federation, and three co-equal apex courts sit at the top.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-bvg'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Austria is a parliamentary federal republic with a civil-law tradition. The Constitution assigns civil law, criminal law, the administration of justice and the protective institutions to the Federation (Article 10(1) Z 6), and the security police to the Federation save for the local security police (Z 7). Judges are independent in the exercise of their office (Article 87(1)), and ordinary jurisdiction "emanates from the Federation" (Article 82(1)).',
          claim: 'fact',
          sources: ['at-bvg'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The one thing the Länder do organise',
          text: 'The single devolved element in the judicial architecture is administrative: each Land organises its own administrative court (Article 129), a carve-out from the otherwise-federal scheme (Article 10(1) Z 1). That reform took effect on 1 January 2014 and is also why Article 82 now speaks of "ordinary" jurisdiction rather than "all" jurisdiction. It touches the organisation of administrative courts only — the ordinary courts, the criminal law, the prosecution, the police and the prisons remain wholly federal.',
        },
      ],
      uncertainty: [
        'Constitutional articles are cited from the RIS consolidated German text; there is no single official English constitution.',
        'Austria has no Southern-European-style judicial council; this is described rather than asserted from one dedicated source.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Austria',
      summary:
        'A single national police under the Federal Ministry of the Interior, organised into nine Land directorates that are federal — not Land — authorities.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-bvg', 'at-bmi'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Austria is federal. The Federal Minister of the Interior is the supreme security authority, with the nine Land police directorates (Landespolizeidirektionen) subordinate to that Minister (Article 78a(1)), one for each Land (Article 78b(1)). Those directorates are federal authorities, not police forces run by the Länder. Within the Federal Ministry of the Interior sit the national police (Bundespolizei), the federal criminal police office (Bundeskriminalamt), the state-protection and intelligence directorate, and the special unit Cobra.',
          claim: 'fact',
          sources: ['at-bvg', 'at-bmi'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'One national force, not nine Land forces',
          text: 'The contrast with Germany is exact. Germany has Land police forces (Landespolizei) as well as federal bodies; Austria has a single national police, with the nine directorates being the territorial arms of one federal service. So Austria is modelled as one national police, not as regional forces.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which national bodies exist and their constitutional basis. It does not describe deployment, tactics, surveillance or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        "The internal organisation of the federal police bodies was not researched beyond the Ministry's own listing.",
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Austria',
      summary:
        'Three co-equal apex courts — the Supreme Court of Justice, the Constitutional Court and the Supreme Administrative Court — none superior to the others.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-bvg', 'at-ogh'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The ordinary courts hear civil and criminal cases through four tiers: district courts (Bezirksgerichte), regional courts (Landesgerichte), higher regional courts (Oberlandesgerichte), and at the apex the Supreme Court of Justice (Oberster Gerichtshof), "the highest instance in civil and criminal matters" (Article 92(1)). Lay participation is constitutionally required (Article 91): jurors (Geschworene) for the most serious and political offences, lay assessors (Schöffen) otherwise.',
          claim: 'fact',
          sources: ['at-bvg'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Three top courts, all equal',
          text: 'Austria does not have one supreme court but three, standing side by side. The Supreme Court of Justice describes itself as "one of three judicial bodies charged with final appellate jurisdiction … hierarchically on the same level, there being no superiority or subordination between them". The other two are the Constitutional Court (Verfassungsgerichtshof, Article 144) for constitutional-rights and norm-control matters, and the Supreme Administrative Court (Verwaltungsgerichtshof, Article 133) for administrative matters. Each is final in its own domain.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the two-tier administrative-court system below the Verwaltungsgerichtshof, and the composition rules have not been set out from the primary statutes beyond the constitutional articles cited.',
        },
      ],
      uncertainty: [
        "The court hierarchy is cited from the Constitution and the OGH's own site; the courts-organisation statutes were not read in full.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Austria',
      summary:
        'The Staatsanwaltschaft — an organ of the ordinary judiciary, but subordinate through a chain of instruction to the Federal Minister of Justice, with a 2026 draft reform that would change that.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-bvg', 'at-stag', 'at-bundesstaatsanwaltschaft-draft'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution is conducted by the public prosecution service (Staatsanwaltschaft), whose members are constitutionally "organs of the ordinary judiciary" that exercise investigation and indictment functions, bound by instructions as federal law provides (Article 90a). The service is tiered: prosecutors\' offices (Staatsanwaltschaften) at the regional courts, senior prosecutors\' offices (Oberstaatsanwaltschaften) at the higher regional courts, and the Procurator General (Generalprokuratur) at the Supreme Court.',
          claim: 'fact',
          sources: ['at-bvg', 'at-stag'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Under the Minister — for now',
          text: "Unlike Portugal's autonomous prosecution or Italy's judiciary-internal one, the Austrian service sits at the end of a chain of instruction that terminates in the executive. The Public Prosecution Service Act (§2(1)) makes the prosecutors' offices subordinate and bound by instructions to the senior offices, and those and the Procurator General directly subordinate and bound to the Federal Minister of Justice. So the apex of the prosecution is currently a member of the government.",
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A pending reform, described as a draft — not as law',
          text: 'A government consultation draft published in 2026 (the "Federal Act introducing a Bundesstaatsanwaltschaft") states its purpose as depoliticising the top of the chain of instruction by establishing an independent, instruction-free federal prosecution service to replace the Minister at the apex. As of 26 July 2026 it is a consultation draft only — its public-consultation window ran 30 June to 31 August 2026, it requires a two-thirds parliamentary majority, and it is not enacted. Until it is, §2(1) with the Minister at the apex remains the governing law. This is recorded neutrally and by attribution, not presented as current or certain.',
        },
      ],
      uncertainty: [
        'The advisory council in the ministerial-instruction process (Weisungsrat) and the written-and-reasoned-instruction rule (StAG §29a) are noted in general terms but were not quoted from a fetched provision in this pass.',
        'The specialised economic-and-corruption prosecution (WKStA) is mentioned in research but not separately verified and is not described here.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Austria',
      summary:
        'The prosecution leads the investigation; the criminal police investigate but must follow the orders of the prosecution and the court.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-stpo'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Austria is led by the prosecution. Under the Code of Criminal Procedure, "the public prosecutor leads the investigation and decides on its course and termination" (§101(1)). The criminal police (Kriminalpolizei) investigate ex officio or on report, but must follow the orders of the prosecution and the court (§99(1)). So the police carry out the investigative work under the prosecution\'s direction — the same magistrate-directed pattern found across the civil-law systems on this site.',
          claim: 'fact',
          sources: ['at-stpo'],
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page states who leads the investigation and who carries it out. It does not describe investigative techniques, surveillance, forensic methods or evidential thresholds at an operational level, and nothing here would help a person anticipate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The detailed powers exercised during the investigation, and the judicial authorisations required for coercive measures, were not set out beyond the two cited provisions.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Austria',
      summary:
        'A single federal prison service under the Ministry of Justice — and a Council of Europe figure reported honestly, with no capacity available and so no density claimed.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-justiz-strafvollzug', 'coe-space-i-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [AT_PRISON_POPULATION],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Imprisonment (Strafvollzug) in Austria is a federal function run by the Federal Ministry of Justice through the prison institutions (Justizanstalten), with a central directorate for the execution of sentences and custodial measures. Because the system is national, a figure for the whole system describes the whole system.',
          claim: 'fact',
          sources: ['at-justiz-strafvollzug'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A figure reported only as far as the source allows',
          text: "The Council of Europe's Annual Penal Statistics (SPACE I 2024) record that on 31 January 2024 Austrian prisons held 9,258 people including those on remand — a rate of 101.1 inmates per 100,000 inhabitants. Unlike most countries in the survey, Austria reported no total capacity figure, so no occupancy level or density is stated here: to invent one, or to imply the system was over or under capacity, would go beyond the source. The count is a single-day snapshot, not an annual average, and SPACE I's levels are not to be compared between countries.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual prisons and their regimes, the treatment of custodial measures for dangerous offenders, and the inspection of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'SPACE I reported no capacity for Austria; the corrections page therefore makes no density or overcrowding claim of any kind.',
      ],
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Austria',
      summary:
        "The Ombudsman Board (Volksanwaltschaft), a constitutional body that is also Austria's national torture-prevention mechanism.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['at-bvg', 'at-volksanwaltschaft'],
      relatedGuides: ['why-justice-systems-need-oversight', 'what-is-justice'],
      blocks: [
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Ombudsman Board (Volksanwaltschaft)',
              description:
                "A constitutional body (Article 148a) to which anyone may complain of alleged maladministration in federal administration. It comprises three Ombudspersons and, under the Optional Protocol to the UN Convention against Torture, also serves as Austria's National Preventive Mechanism, with human-rights commissions that visit places of detention.",
            },
            {
              term: 'Judicial administration',
              description:
                'Austria has no single High Council of the Judiciary of the Southern-European type. Judicial independence rests with individual judges (Article 87), and matters such as staffing are handled by judicial staffing senates (Personalsenate) within the courts, with court administration ultimately under the Federal Ministry of Justice. This is described here rather than asserted from a single dedicated source.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not do',
          text: 'It names the constitutional oversight body and its torture-prevention role. It does not assess how effective oversight is, and a dedicated independent police-complaints authority was not confirmed from a fetched source — complaints run through the security-authority hierarchy and, for criminal conduct, the ordinary prosecution and courts.',
        },
      ],
      uncertainty: [
        "The Ombudsman Board's annual complaint volume and the exact amendment history of Article 148a were not relied on.",
        'The absence of a dedicated police-complaints authority is stated as "not confirmed", not as an established fact.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Austria',
      summary:
        'Every source used for the Austria pages, what each supports, how it was accessed, and where its scope ends.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'at-bvg',
        'at-stag',
        'at-stpo',
        'at-ogh',
        'at-justiz-strafvollzug',
        'at-bmi',
        'at-volksanwaltschaft',
        'at-bundesstaatsanwaltschaft-draft',
        'coe-space-i-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Austria pages rest on Austrian primary law and official institutions: the Federal Constitutional Law, the Public Prosecution Service Act and the Code of Criminal Procedure (all from the Federation's official legal-information system, RIS); the Supreme Court, the Federal Ministry of Justice and the Federal Ministry of the Interior; the Ombudsman Board; and the government consultation portal for the pending prosecution reform. The Council of Europe's prison statistics supply the one detention figure. Each was read or retrieved and confirmed on 26 July 2026 and independently re-checked.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: 'The RIS legal database renders statute text in its raw HTML, so the constitutional articles and the two statutes were retrieved directly and text-extracted; four load-bearing passages (B-VG Art. 82(1) and Art. 90a, StAG §2(1), and the Supreme Court\'s "three co-equal courts" statement) were re-fetched by hand at authoring time and matched. There is no single official English translation of the Constitution, so the German text is authoritative. The EU e-Justice Austria page could not be fetched (the portal was restructured); no fact depends on it, because everything is anchored to Austrian primary law and official institutions.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/austria-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Austria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Austria (institutes of forensic medicine and the criminal-police forensic capacity within the Bundeskriminalamt) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Austria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Austria involve the federal police, the tax-and-customs administration, and the Schengen and EU customs context, and could not be researched to the standard required here without risking an inaccurate description of a security-adjacent function.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Austria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Austrian institutional history — the 1920 Kelsen constitution, the interwar and post-1945 reconstructions of the judiciary, and the accession to the EU — cannot be written responsibly from general knowledge and requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Austria',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the 1920/1930 constitution and the 2014 administrative-jurisdiction reform — are a start, but a responsible timeline needs primary sources for each milestone, which were not assembled here.',
    },
  ],
};
