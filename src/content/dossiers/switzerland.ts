import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Switzerland dossier — the cantonal-federalism pilot, and the final country of the program.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-26.
 *
 * Source access: the Federal Constitution and the Criminal Procedure Code were read from the
 * official fedlex texts; the prisoner figure from the Federal Statistical Office release; the
 * fedpol and Justitia 4.0 facts from the agencies' own pages (some via search retrieval, since
 * fedlex and some federal sites serve their text through a single-page application). Swiss federal
 * law is equally authentic in German, French and Italian; the English is a reference translation.
 *
 * Two things define this dossier:
 *
 *  1. FEDERAL LAW, CANTONAL ADMINISTRATION, CANTONAL SOVEREIGNTY. The Confederation legislates the
 *     civil and criminal law (one set of codes), but the cantons — which are sovereign in all
 *     powers not vested in the Confederation (art. 3) — administer the police, courts, prosecutors
 *     and prisons. There is no national police force and no federal prison system.
 *
 *  2. POOLING, NOT COMMAND. The cantons cooperate through inter-cantonal concordats — for prisons,
 *     three of them — that pool institutions as peers, not through any federal chain of command.
 */

/**
 * The pilot's restricted claim — a national reference-day detainee count.
 *
 * Corrections in Switzerland are entirely cantonal (pooled through concordats), so the national
 * figure aggregates the cantonal systems. The Federal Statistical Office publishes a clean
 * single-reference-day census with the detention-type split.
 */
const SWITZERLAND_DETAINEES: RestrictedClaim = {
  id: 'ch-detainees-2026',
  category: 'detention-capacity',
  statement:
    'On 31 January 2026, 7,119 people were held in detention in Switzerland — the highest number since the survey began in 1988. About 63% were serving a sentence or a measure and about 31% were in pre-trial or security detention.',
  claimType: 'fact',
  sources: ['ch-fso-prisons'],
  sourceScope:
    'Swiss Federal Statistical Office (FSO), Imprisonment statistics (FHE survey), reference day 31 January 2026: 7,119 adults in detention, the highest since the survey began in 1988; by type of detention approximately 63% in sentence/measure execution and approximately 31% in pre-trial or security detention, against about 7,373 places in some 90 adult facilities.',
  jurisdiction: 'CH',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2026-01-31',
  limitation:
    'A single-reference-day census (31 January 2026), not an average over the year, and a national aggregate of the cantonal systems — there is no federal prison system, and corrections are administered by the cantons, pooled through inter-cantonal concordats — so it describes no canton individually. It counts adults in custody. The type-of-detention shares are approximate figures from the FSO. The figure supports no comparison with any other country and no inference about crime, effectiveness or conditions.',
};

export const SWITZERLAND: CountryDossier = {
  countryCode: 'CH',
  slug: 'switzerland',
  name: 'Switzerland',
  officialName: 'Swiss Confederation',
  summary:
    'Switzerland is a federation of 26 sovereign cantons in which the civil and criminal law is federal and unified but the administration of justice — police, courts, prosecutors and prisons — is cantonal. There is no national police force and no federal prison system; the cantons pool their prisons through inter-cantonal concordats, and federal law is equally authentic in German, French and Italian.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['ch', 'ch-zurich', 'ch-geneva', 'ch-ticino'],
  sources: ['ch-constitution'],
  uncertainty: [
    'Swiss federal law is equally authentic in German, French and Italian (Romansh is a national language, official when dealing with Romansh speakers); the English texts are non-authoritative reference translations, and institutions are cited by their English name for readability with the original kept where it matters.',
    'The forensic system, border and customs arrangements, external oversight machinery and institutional history have not been researched to the required standard and are not described. No individual canton has been researched beyond the constitutional structure.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'Federal law, cantonal administration — and sovereign cantons',
      text: 'Switzerland is a federation of 26 cantons, and the balance it strikes is distinctive. The substantive LAW is federal and unified: under the Federal Constitution the Confederation legislates civil law (art. 122) and criminal law and procedure (art. 123), so there is one Civil Code, one Criminal Code and — since 2011 — one Criminal Procedure Code for the whole country. But the cantons ADMINISTER justice, and they do so from a position of sovereignty: article 3 provides that "the Cantons are sovereign except to the extent that their sovereignty is limited by the Federal Constitution", exercising all rights not vested in the Confederation. So the residual power is the cantons\', as in the United States — but the codes are federal, as in Brazil.',
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'No national police, no federal prisons',
      text: 'Two consequences are worth stating plainly. There is no national general police force: policing is a cantonal task, and the federal police office (fedpol) is a narrow federal body, not a force sitting above the cantonal police. And there is no federal prison system at all: the execution of penalties is a cantonal responsibility. What holds the prison system together is not a federal administration but cooperation between the cantons — three inter-cantonal concordats through which the cantons pool their correctional institutions. The module pages take each in turn.',
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Three languages, equally authentic',
      text: "Federal law is enacted and published in German, French and Italian, and the three versions are equally authoritative (art. 70); Romansh is a national language, official when dealing with Romansh speakers. So Switzerland's institutions carry different names in different cantons — the supreme court is the Bundesgericht, the Tribunal fédéral and the Tribunale federale — and these pages keep those names while citing the reference English translation, which has no legal force. The three cantons described here, Zürich, Geneva and Ticino, are one per official language.",
    },
    {
      kind: 'paragraph',
      text: 'Switzerland also makes law by direct democracy — federal acts are subject to an optional referendum, and constitutional changes to a mandatory one — which occasionally changes the justice system itself; the courts and justice-system pages note one such change now under way. The module pages take the institutions in turn.',
      claim: 'fact',
      sources: ['ch-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Switzerland',
      summary:
        'A federation of sovereign cantons under one federal set of codes — the cantons administering justice, federal law made in three languages and changed by direct democracy.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-constitution', 'ch-crimpc', 'ch-bekj'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Switzerland is a federal state under the Federal Constitution of 18 April 1999, built — in the words of article 1 — on "the People and the Cantons". Its 26 cantons are sovereign: article 3 provides that they "are sovereign except to the extent that their sovereignty is limited by the Federal Constitution", exercising all rights not vested in the Confederation. The Confederation performs only the tasks the Constitution assigns to it, and — article 46 — the cantons implement federal law.',
          claim: 'fact',
          sources: ['ch-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'One set of codes, twenty-six administrations',
          text: 'The Confederation legislates the substantive law: civil law and civil procedure (article 122) and criminal law and criminal procedure (article 123). So there is one Civil Code, one Criminal Code, and — since it came into force on 1 January 2011, replacing the former 26 cantonal codes — one Swiss Criminal Procedure Code. But articles 122 and 123 also provide that "the Cantons are responsible for the organisation of the courts, the administration of justice ... as well as for the execution of penalties and measures". Federal law, cantonal administration: the same pattern as Germany and Brazil, here combined with cantonal sovereignty over everything the Constitution does not federalise.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Sovereign cantons',
              description:
                "The cantons hold the residual power (article 3), like United States or Australian states — the opposite of Canada, where the residue is federal. What they do not have is their own criminal law: that is the Confederation's.",
            },
            {
              term: 'Three official languages',
              description:
                'Federal law is equally authentic in German, French and Italian (article 70); institutions carry different names in different cantons. Romansh is a national language, official when dealing with Romansh speakers.',
            },
            {
              term: 'Direct democracy',
              description:
                'Federal acts are subject to an optional referendum (50,000 voters or eight cantons can force a popular vote), constitutional changes to a mandatory referendum, and citizens may launch popular initiatives — so the justice system can be changed, or a change blocked, by the electorate.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A change now under way — by direct democracy',
          text: 'One institutional change is enacted and partly in force. The Federal Act on Platforms for Electronic Communication in the Judiciary (the legal basis of the "Justitia 4.0" project) was adopted by the Federal Assembly on 20 December 2024; its optional referendum lapsed unused, so it was enacted rather than put to a vote. It creates a new joint Confederation–cantons public-law corporation (justitia.swiss) to run a national electronic platform for communicating with the courts. The corporation\'s founding provision came into force on 1 October 2025, and full entry into force is planned for 1 July 2027, with each canton then setting its own date for mandatory use. This site records that as a scheduled change so the pages do not silently go out of date.',
        },
      ],
      uncertainty: [
        'Constitutional provisions are cited from the official English translation, which has no legal force; the authoritative versions are German, French and Italian.',
        'The detailed operation of Swiss direct democracy and the case law on federal-versus-cantonal competence have not been researched and are not described.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Switzerland',
      summary:
        'Policing as a cantonal task — each canton with its own force — and why the federal police office is a narrow body, not a national police force sitting above the cantons.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-fedpol', 'ch-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Switzerland has no national general police force. As the Federal Office of Police (fedpol) puts it, "Switzerland does not have a national police force": policing is a cantonal task, and each of the 26 cantons is responsible for policing its own territory and has its own police law and its own force — the Kantonspolizei, the police cantonale, the polizia cantonale. Some cities also have their own municipal police.',
          claim: 'fact',
          sources: ['ch-fedpol'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'fedpol is not a national police force',
          text: 'It is easy to assume that the Federal Office of Police sits above the cantonal forces as a national police. It does not. fedpol states that it "is not a superordinate authority, but works alongside these police forces". Its role is limited and federal: investigating crimes within federal jurisdiction, protective and security duties, and national and international coordination. It does not command or direct the cantonal police. The federal level coordinates; the cantons police.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the constitutional and organisational structure of Swiss policing. It does not describe deployment, tactics, surveillance capability, operational procedure, or anything that would help a person anticipate, frustrate or evade the police, and it will not.',
        },
      ],
      uncertainty: [
        "The individual cantonal police forces and the precise scope of fedpol's federal competences have not been researched in detail.",
        'The coordination bodies between the cantonal forces and fedpol are named only in general terms.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Switzerland',
      summary:
        'Cantonal courts applying one federal procedure code, under a single Federal Supreme Court — federal law tried in cantonal courtrooms.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-constitution', 'ch-crimpc'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'At the top of the Swiss court system is the Federal Supreme Court (Bundesgericht / Tribunal fédéral / Tribunale federale), seated in Lausanne, which article 188 of the Constitution makes "the supreme judicial authority of the Confederation". Below it, the courts are the cantons\': each canton organises and runs its own trial and appeal courts (articles 122 and 123).',
          claim: 'fact',
          sources: ['ch-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Cantonal courts, one federal procedure',
          text: 'The distinctively Swiss point is that the cantonal courts apply FEDERAL procedure. Until 2011 each canton had its own code of criminal procedure — 26 of them; since 1 January 2011 the unified Swiss Criminal Procedure Code applies across the country, so a criminal trial in a cantonal court in Geneva and one in Zürich follow the same national rules. The Federal Supreme Court then ensures the uniform application of federal law across the cantons. The institutions are cantonal; the law they apply is federal.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The federal courts below the Federal Supreme Court (such as the Federal Criminal Court), the detailed structure of each cantonal court system, and the appeal routes have not been researched from the primary sources beyond the constitutional outline and are not described.',
        },
      ],
      uncertainty: [
        'No individual cantonal court system has been researched; the description is at the level of the constitutional allocation.',
        'The federal courts other than the Federal Supreme Court are named but not described.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Switzerland',
      summary:
        'Prosecution as a cantonal task by default — each canton with its own public prosecutor — with a narrow federal Office of the Attorney General for federal matters.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-crimpc', 'ch-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Switzerland is, by default, a cantonal task. The Swiss Criminal Procedure Code (article 22) provides that the cantonal criminal-justice authorities prosecute and judge federal criminal offences, subject to the legal exceptions — so each canton has its own public prosecution service (Staatsanwaltschaft / ministère public / ministero pubblico) that handles the great majority of crime.',
          claim: 'fact',
          sources: ['ch-crimpc'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A narrow federal exception',
          text: "Federal prosecution is the exception, not the rule. The Office of the Attorney General of Switzerland (Bundesanwaltschaft / Ministère public de la Confédération) prosecutes a defined and narrow set of federal matters — state-security offences, certain complex cross-cantonal and international crimes, and the like. Everything else is the cantons'. So, as with the police and the courts, the ordinary work is cantonal and the federal role is limited and specific. This page states that allocation; it does not characterise the independence of any of these offices.",
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states which prosecutor handles which matters. It does not describe the internal organisation or independence of the cantonal prosecution services or of the federal Office of the Attorney General, which were not researched from primary sources.',
        },
      ],
      uncertainty: [
        'The precise list of matters reserved to the federal Office of the Attorney General is stated only in general terms.',
        'No individual cantonal prosecution service has been researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Switzerland',
      summary:
        'Cantonal police and cantonal prosecutors investigating under one federal Criminal Procedure Code — the same rules in every canton.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-crimpc', 'ch-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Switzerland is conducted by the cantonal police and directed by the cantonal public prosecutor, under the unified federal Criminal Procedure Code that has applied since 2011. Because the code is national, the rules of investigation are the same in every canton, even though the police and prosecutors carrying them out are cantonal. Federal-jurisdiction matters are investigated at the federal level, by fedpol and the Office of the Attorney General.',
          claim: 'fact',
          sources: ['ch-crimpc'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'One procedure, cantonal hands',
          text: 'The unification of criminal procedure in 2011 is what makes the Swiss system coherent despite its decentralisation: 26 cantonal police forces and prosecution services investigate and charge under a single set of national rules, with the Federal Supreme Court above them ensuring those rules are applied uniformly. This page describes that allocation at a structural level; it does not describe investigative technique.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and under what national framework. It does not describe investigative techniques, surveillance, or detention practice, and nothing here would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The powers of the police and prosecutor under the Criminal Procedure Code are stated only structurally and were not researched from the code in detail.',
        'The coordination between cantonal and federal investigators is not described.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Switzerland',
      summary:
        'A prison system with no federal administration — the cantons run it, pooling their institutions through three inter-cantonal concordats — and a national reference-day count.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-constitution', 'ch-fso-prisons'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [SWITZERLAND_DETAINEES],
      blocks: [
        {
          kind: 'paragraph',
          text: "Switzerland has no federal prison system. The execution of penalties and measures is, under article 123 of the Constitution, a cantonal responsibility. What makes the system work at national scale is not a federal administration but cooperation between the cantons: they pool their correctional institutions through inter-cantonal concordats, agreements grounded in the Constitution's provision for treaties between cantons (article 48).",
          claim: 'fact',
          sources: ['ch-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Three concordats — pooling, not command',
          text: 'The cantons are grouped into three correctional concordats: one for Latin (French- and Italian-speaking) Switzerland, which includes Ticino, and two for German-speaking Switzerland (a Northwest-and-Central concordat and an Eastern one). Through them the cantons jointly plan and run correctional institutions — sharing specialised facilities that no single small canton could maintain. This is a PEER arrangement: the cantons pool their own competence, none of them procuring the service from another order of government. That is why this site records cantonal corrections as "shared" rather than as delivered by anyone else.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The detainee count, stated with its limits',
          text: 'The Federal Statistical Office records that on 31 January 2026 there were 7,119 people in detention in Switzerland — the highest number since the survey began in 1988 — of whom about 63% were serving a sentence or a measure and about 31% were in pre-trial or security detention. Three qualifications travel with the figure: it is a single-reference-day census, not an average; it aggregates the cantonal systems (there is no federal prison system), describing no canton individually; and it counts adults in custody. It supports no comparison with any other country.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual concordats and their institutions, the regimes and re-integration programmes, non-custodial measures, and the oversight of prison conditions have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No individual canton or concordat prison system is described; the figure is a national aggregate.',
        'The membership and governance of the three concordats are stated in general terms, from the constitutional basis, not researched institution by institution.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Switzerland',
      summary:
        'Every source used for the Switzerland pages, what each supports, and the note that federal law is equally authentic in German, French and Italian.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['ch-constitution', 'ch-crimpc', 'ch-fedpol', 'ch-fso-prisons', 'ch-bekj'],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Switzerland pages rest on five sources: the Federal Constitution and the Swiss Criminal Procedure Code (from fedlex); the Federal Office of Police on national policing; the Federal Statistical Office's imprisonment statistics; and the Federal Office of Justice on the Justitia 4.0 electronic-communication act. Each was read or retrieved and confirmed on 26 July 2026.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'German, French and Italian are equally authentic',
          text: 'Swiss federal law is enacted and published in three official languages, and the German, French and Italian versions are equally authoritative (article 70); Romansh is a national language, official when dealing with Romansh speakers. These pages cite the reference English translation, which has no legal force, and keep the original-language names of the institutions. Where a fact rests on a page that a browser renders through a single-page application, it was obtained by search retrieval of the official page and is stated as sourced.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/switzerland-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Switzerland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Forensic science in Switzerland is delivered through cantonal and university forensic institutes, and has not been read to the standard required. Forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Switzerland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs in Switzerland are handled by the Federal Office for Customs and Border Security within a distinctive relationship to the European Schengen area (Switzerland is in Schengen but not the EU), and could not be distinguished to the required standard here. It is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Switzerland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Oversight of the police and justice system in Switzerland is overwhelmingly cantonal — each canton has its own arrangements — with parliamentary and judicial oversight at the federal level for federal bodies. Presenting a national oversight picture would imply a uniformity that does not exist, and the cantonal bodies were not researched to the required standard, so the module is deferred. Direct-democratic control (referendums and initiatives) is noted on the justice-system page.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Switzerland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Swiss institutional history — the old Confederation, the 1848 federal state, and above all the very recent unification of civil and criminal procedure (2011) that ended more than a century of cantonal procedural codes — cannot be written responsibly from general knowledge and requires careful, well-sourced treatment not undertaken here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Switzerland',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established here — the 1999 Federal Constitution, the unified Criminal Procedure Code in force in 2011, and the Justitia 4.0 act of 2024 taking effect in 2027 — are only a beginning; a responsible timeline needs primary sources for each entry, which were not gathered.',
    },
  ],
};
