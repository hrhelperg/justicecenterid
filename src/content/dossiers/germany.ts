import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Germany dossier — the federal pilot.
 *
 * Research date: every institutional fact below was checked against its cited source on
 * 2026-07-24, recorded as `factsVerifiedOn`. Not a build date.
 *
 * Translation discipline: the Basic Law is cited from the English translation published on
 * Gesetze im Internet, which states it reflects amendments up to 22 March 2025 and is offered
 * under conditions of use. The GVG and StPO provisions are cited from the AUTHORITATIVE GERMAN
 * text, because the official English translations of those codes truncate before the relevant
 * sections and, in any case, the German text governs.
 *
 * Structural discipline: this dossier does not reuse the France page shape. France is unitary,
 * so a single national description is accurate there. Germany is not, so every module states
 * the federal/Land split explicitly and refuses national-uniformity claims the sources do not
 * support.
 */

/**
 * The pilot's real restricted claim.
 *
 * Chosen deliberately: prison occupancy is one of the most frequently asserted and most
 * frequently mis-sourced figures in this field, and it is exactly the kind of number that
 * normally appears as "German prisons are overcrowded" with no reference date, no counting
 * definition and no acknowledgement that sixteen separate Land administrations are being
 * summed.
 *
 * Note what is NOT done here: no count is converted into a rate. Both the rate (71.2 per
 * 100,000) and the density (82.2 per 100 places) are computed and published by the source
 * itself. Deriving either independently would require a denominator and methodology this
 * platform has not established.
 */
const GERMANY_PRISON_OCCUPANCY: RestrictedClaim = {
  id: 'de-prison-occupancy-2024',
  category: 'detention-capacity',
  statement:
    'On 31 January 2024, penal institutions in Germany held 59,413 inmates including pre-trial detainees, against a reported total capacity of 72,258 places — a prison density of 82.2 inmates per 100 places.',
  claimType: 'fact',
  sources: ['coe-space-i-2024'],
  sourceScope:
    'Council of Europe Annual Penal Statistics SPACE I 2024, Table 3 (total inmates and prison population rate) and Table 16 (total capacity and prison density), reference date 31 January 2024. Figures are supplied by the national prison administration to the University of Lausanne research team through a questionnaire agreed by the Council for Penological Co-operation.',
  jurisdiction: 'DE',
  temporalScope: 'current',
  verifiedOn: '2026-07-24',
  metricPeriod: '2024-01-31',
  limitation:
    'A national aggregate. Prisons in Germany are administered by the Länder, so this figure sums sixteen separately administered systems and describes none of them individually; it must not be read as a statement about any particular Land. SPACE I publishes an "adjusted" alternative of 55,916 inmates (rate 67.0) that excludes certain categories, so the headline count is definition-dependent. The report states that its aim is comparable data but that "any comparisons of the levels (in rates, ratios and percentages) shown by the countries according to different indicators are always problematic", so this figure supports no comparison with France or any other country. A density below 100 does not establish that no individual institution is above capacity.',
};

export const GERMANY: CountryDossier = {
  countryCode: 'DE',
  slug: 'germany',
  name: 'Germany',
  officialName: 'Federal Republic of Germany (Bundesrepublik Deutschland)',
  summary:
    'Germany is a federal state in which most policing, court administration, prosecution and prison administration are matters for the sixteen Länder, while legislative competence over criminal law and court organisation sits largely with the federation.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-24',
  reviewedOn: '2026-07-24',
  factsVerifiedOn: '2026-07-24',
  jurisdictionIds: ['de', 'de-by', 'de-be', 'de-nw'],
  sources: ['de-grundgesetz'],
  uncertainty: [
    'Only three Länder are modelled, as samples chosen to test the model: Bavaria, Berlin and North Rhine-Westphalia. Nothing here describes the other thirteen, and no sample should be read as representative of them.',
    'No Land-specific institutional detail has been researched. Where a page describes a Land function, it describes who holds it constitutionally, not how any particular Land organises it.',
  ],
  blocks: [
    {
      kind: 'paragraph',
      text: 'Germany is a federal state. Article 20(1) of the Basic Law describes the Federal Republic as "a democratic and social federal state", and that federal structure is not a detail of administration — it determines who polices, who prosecutes, who runs the courts and who runs the prisons.',
      claim: 'fact',
      sources: ['de-grundgesetz'],
    },
    {
      kind: 'callout',
      variant: 'scope',
      title: 'The single most important thing to understand first',
      text: 'Germany has no national police force in the sense that phrase usually carries. Ordinary policing is a matter for each of the sixteen Länder, each with its own police. Federal police bodies exist, but with defined competences rather than general nationwide jurisdiction — and they do not supervise Land police. Any sentence beginning "the German police…" is almost certainly wrong.',
    },
    {
      kind: 'paragraph',
      text: 'Two articles of the Basic Law set the default. Article 30 provides that "the exercise of state powers and the discharge of state functions is a matter for the Länder" except as otherwise provided or permitted. Article 83 adds that "the Länder shall execute federal laws in their own right insofar as this Basic Law does not otherwise provide or permit".',
      claim: 'fact',
      sources: ['de-grundgesetz'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Who legislates and who administers are different questions',
      text: 'This is the distinction that makes German federalism confusing from outside, and it is worth holding onto. Article 74(1) no. 1 places criminal law and court organisation and procedure under concurrent legislative power — largely exercised by the federation. Article 83 then has the Länder execute that law themselves. So a German criminal court applies federal law in a court the Land administers. Federal statute, Land administration, in the same case.',
    },
    {
      kind: 'paragraph',
      text: 'Article 74(1) no. 1 also contains an exception worth noticing: concurrent legislative power covers "civil law, criminal law, court organisation and procedure (except for the law on pre-trial detention)". The parenthesis is not a technicality — it is a competence carved back out to the Länder inside the very provision that gives it to the federation.',
      claim: 'fact',
      sources: ['de-grundgesetz'],
    },
    {
      kind: 'paragraph',
      text: 'Courts follow the same divided pattern. Article 92 vests judicial power "in the Federal Constitutional Court, in the federal courts provided for in this Basic Law, and in the courts of the Länder" — three categories in one sentence, not one hierarchy.',
      claim: 'fact',
      sources: ['de-grundgesetz'],
    },
    {
      kind: 'callout',
      variant: 'uncertainty',
      title: 'What this dossier does not tell you',
      text: 'It describes the constitutional allocation of functions. It does not describe how any individual Land organises its police, courts, prosecution service or prisons, because that has not been researched. Three Länder are modelled as samples to test whether the model can represent variation at all — Bavaria, Berlin and North Rhine-Westphalia — and even for those, no organisational detail is asserted.',
    },
    {
      kind: 'paragraph',
      text: 'The Länder are also not interchangeable with one another. Berlin is a city-state: a Land that is simultaneously a single municipality, so statements about how municipalities relate to Land authorities mean something different there. North Rhine-Westphalia maintains an intermediate administrative tier that the city-states do not have at all. A description that fits one Land may be structurally inapplicable to another.',
      claim: 'analysis',
      sources: ['de-grundgesetz'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Germany',
      summary:
        'How federalism divides the German justice system: who legislates, who administers, and why those are not the same question.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['de-grundgesetz'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The German justice system is not a single vertical chain. It is a division of labour between the federation and the Länder that runs along two independent axes: who may legislate, and who administers.',
          claim: 'analysis',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Legislative competence',
              description:
                'Article 70(1) provides that "the Länder shall have the right to legislate insofar as this Basic Law does not confer legislative power on the Federation", and Article 70(2) divides that authority into exclusive and concurrent powers. Criminal law and court organisation and procedure fall under concurrent legislative power by Article 74(1) no. 1 — except the law on pre-trial detention.',
            },
            {
              term: 'Administrative execution',
              description:
                'Article 83 provides that the Länder execute federal laws in their own right unless the Basic Law provides otherwise. Courts, prosecution offices and prisons are therefore run by the Länder even where the law being applied is federal.',
            },
            {
              term: 'Residual competence',
              description:
                'Article 30 makes the Länder the default holder of state powers and functions, except as otherwise provided or permitted by the Basic Law. Federal competences are the carve-outs, not the baseline.',
            },
          ],
        },
        {
          kind: 'paragraph',
          text: 'Judicial independence is stated in Article 97: "Judges shall be independent and subject only to the law." The same article provides that permanently appointed full-time judges may not, without their consent, be dismissed, suspended, transferred, retired or put on leave.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why "administration of justice" is a live question here',
          text: 'Because the Länder administer the courts while the federation largely writes the law they apply, the boundary between administering a court system and influencing it matters more visibly in Germany than in a unitary state. This paragraph is our framing; the constitutional provisions above are what the sources establish.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The five branches of jurisdiction — ordinary, administrative, labour, social and fiscal — are named in Article 95(1) through their federal supreme courts and are set out on the courts page. How each branch is structured below federal level, and how the Land constitutional courts relate to the Federal Constitutional Court, have not been researched.',
        },
      ],
      uncertainty: [
        'The internal structure of each branch of jurisdiction below federal level has not been researched.',
        'The relationship between Land constitutional courts and the Federal Constitutional Court has not been researched and is not described.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Germany',
      summary:
        'The three categories of German court named in the Basic Law, the five federal supreme courts, and why the Federal Constitutional Court is not the top of an appeal ladder.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['de-grundgesetz'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Article 92 of the Basic Law vests judicial power "in the Federal Constitutional Court, in the federal courts provided for in this Basic Law, and in the courts of the Länder". Those are three distinct categories, and treating them as one hierarchy is the commonest structural error made about German courts.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'paragraph',
          text: 'Article 95(1) names five federal supreme courts, each at the head of a separate branch of jurisdiction: the Federal Court of Justice (Bundesgerichtshof, BGH), the Federal Administrative Court, the Federal Labour Court, the Federal Social Court and the Federal Finance Court.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Bundesverfassungsgericht is not "the German supreme court"',
          text: 'The Federal Constitutional Court (Bundesverfassungsgericht, BVerfG) is named separately from the federal courts in Article 92 and is not listed among the five supreme courts in Article 95(1). It exercises constitutional jurisdiction. The Federal Court of Justice (BGH) heads the ordinary branch, which includes criminal cases. Collapsing the two — or calling either one "the German supreme court" — misdescribes the system.',
        },
        {
          kind: 'paragraph',
          text: 'Article 96 permits the federation to establish further federal courts: a Federal Patent Court, and military courts for defence matters whose members administering military penal law must be judges.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Land courts, and what is not stated here',
          text: 'The courts that hear most cases are courts of the Länder, administered by the Länder. The familiar tiers — Amtsgericht, Landgericht, Oberlandesgericht — sit within that Land-administered structure. Their competences, the thresholds allocating cases between them, and the routes of appeal have NOT been researched from the Courts Constitution Act for this pilot, so they are named here only as the Land-level tiers and are not described.',
        },
        {
          kind: 'paragraph',
          text: 'The practical consequence of Article 83 is worth restating in the courts context: a Land court applying federal criminal law is administered by the Land, not by the federation whose statute it applies. Court administration and adjudicative hierarchy are separate things in Germany, and a diagram showing one will not show the other.',
          claim: 'analysis',
          sources: ['de-grundgesetz'],
        },
      ],
      uncertainty: [
        'The competences of the Amtsgerichte, Landgerichte and Oberlandesgerichte, and the thresholds allocating cases between them, have not been researched from the Courts Constitution Act.',
        'Land constitutional courts exist but have not been researched.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Germany',
      summary:
        'Why Germany has no national police force in the usual sense: Land police, the defined competences of federal bodies, and why the familiar foreign analogies fail.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['de-grundgesetz'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Germany is primarily a Land matter. That follows from Article 30 of the Basic Law, under which the exercise of state powers is a matter for the Länder except as otherwise provided, combined with the absence of any general federal police competence in the Basic Law.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'paragraph',
          text: 'Federal police bodies exist, but they are constitutional carve-outs with defined subject matter rather than a national force with general jurisdiction. Article 73(1) no. 10 gives the federation exclusive legislative power over cooperation between the federation and the Länder in criminal police work and over the establishment of a Federal Criminal Police Office. Article 87(1) permits a federal law to establish Federal Border Police authorities and central offices for police information and communications and for the criminal police.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why the usual foreign analogies mislead',
          text: 'The Bundeskriminalamt (BKA, Federal Criminal Police Office) is often introduced to English-speaking readers as "Germany’s FBI". The shorthand fails in a specific and important way: the constitutional basis in Article 73(1) no. 10 is framed around COOPERATION between the federation and the Länder in criminal police work and the establishment of a central office. That is a different constitutional idea from a federal investigative agency with broad primary jurisdiction. Similarly, calling the Bundespolizei (BPOL, Federal Police) "Germany’s national police" imports a generality the Basic Law does not grant it — Article 87(1) speaks of Federal Border Police authorities and central offices. Neither body supervises Land police.',
        },
        {
          kind: 'paragraph',
          text: 'Cooperation between levels is itself constitutionally provided rather than assumed. Article 35 states that "all federal and Land authorities shall render legal and administrative assistance to one another". Mutual assistance is not the same as a chain of command, and no source read for this pilot establishes any federal power of direction over Land police.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Local public-order authorities',
          text: 'Municipalities and local administrative bodies hold public-order responsibilities in Germany, but their powers derive from Land law and vary between Länder — and in a city-state such as Berlin the municipal level IS the Land level. There is no single nationwide municipal-police model to describe, and this pilot does not describe one, because the relevant Land legislation has not been researched.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes constitutional allocation and institutional status. It does not describe deployment, patrol practice, surveillance capability, tactics, border procedure, facility arrangements or investigative countermeasures, and it will not.',
        },
      ],
      uncertainty: [
        'The statutory competences of the Bundeskriminalamt and the Bundespolizei have not been researched from the BKA-Gesetz or the Bundespolizeigesetz. Only their constitutional basis is stated.',
        'No Land police organisation has been researched. Nothing here describes how any Land structures its police.',
        'Customs enforcement functions have not been researched and are not described.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Germany',
      summary:
        'How the Staatsanwaltschaft is organised across federal and Land levels, and what § 147 of the Courts Constitution Act actually says about supervision and direction.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['de-gvg-141', 'de-gvg-147', 'de-grundgesetz'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'German prosecution is organised around the courts. § 141 of the Courts Constitution Act (Gerichtsverfassungsgesetz, GVG) states the arrangement in a single sentence: "Bei jedem Gericht soll eine Staatsanwaltschaft bestehen" — a public prosecution office shall exist at every court.',
          claim: 'fact',
          sources: ['de-gvg-141'],
        },
        {
          kind: 'paragraph',
          text: 'Because the courts are overwhelmingly Land courts, the prosecution offices attached to them are overwhelmingly Land institutions. There is no single national prosecution service in Germany. The Generalbundesanwalt (GBA, Federal Prosecutor General) sits at federal level with defined competences; the great majority of criminal prosecution is conducted by Land prosecution offices.',
          claim: 'analysis',
          sources: ['de-gvg-141', 'de-grundgesetz'],
        },
        {
          kind: 'paragraph',
          text: '§ 147 GVG allocates the right of supervision and direction (das Recht der Aufsicht und Leitung) explicitly, and the allocation follows the federal structure exactly. It belongs to: the Federal Minister of Justice regarding the Generalbundesanwalt and the Bundesanwälte; the Landesjustizverwaltung — the Land justice administration — regarding all prosecution officials of that Land; and the senior official of the prosecution office at the Oberlandesgerichte and Landgerichte regarding all prosecution officials in their district.',
          claim: 'fact',
          sources: ['de-gvg-147'],
        },
        {
          kind: 'callout',
          variant: 'disputed',
          title: 'What that provision does and does not settle',
          text: '§ 147 GVG establishes that a formal power of supervision and direction exists and identifies who holds it. It does not establish how, or how often, that power is exercised, and it does not by itself answer whether German prosecutors are sufficiently insulated from executive influence — a question that is genuinely contested in German legal debate and has been examined by European courts and bodies. This page states the provision and records the dispute. It does not resolve it, and no page on this platform should describe German prosecutors as either wholly independent of government, or as taking ministerial instruction in individual cases, without a source that establishes the specific proposition.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A federal point that is easy to miss',
          text: 'Read § 147 alongside the federal structure and something becomes clear: the Federal Minister of Justice’s supervisory power reaches the federal prosecutors and stops there. Supervision of a Land prosecutor is a matter for that Land’s justice administration. There is no single ministry supervising prosecution across Germany.',
        },
      ],
      uncertainty: [
        'The competences of the Generalbundesanwalt have not been researched from the relevant provisions and are not enumerated here.',
        '§§ 142 and 146 GVG, which concern the allocation of prosecution offices to court levels and compliance with official instructions, were not retrieved for this pilot and are not cited.',
        'Findings of European courts or bodies on prosecutorial independence in Germany are referred to as existing but are not summarised, because they have not been read in the original.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Germany',
      summary:
        'Who investigates crime in Germany: the prosecution’s statutory duty to establish the facts, the police’s own first-access duty, and the objectivity obligation that binds both.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['de-stpo-160', 'de-stpo-163'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Responsibility for a German criminal investigation rests with the prosecution. § 160(1) of the Code of Criminal Procedure (Strafprozessordnung, StPO) provides that as soon as the Staatsanwaltschaft learns of a suspected offence, whether by report or otherwise, it must investigate the facts in order to decide whether to bring a public charge.',
          claim: 'fact',
          sources: ['de-stpo-160'],
        },
        {
          kind: 'paragraph',
          text: 'That duty is expressly two-sided. § 160(2) StPO requires the prosecution to investigate not only incriminating circumstances but exculpatory ones as well, and to secure evidence. The obligation to look for what exonerates is written into the same provision that requires the investigation.',
          claim: 'fact',
          sources: ['de-stpo-160'],
        },
        {
          kind: 'paragraph',
          text: 'The police are not merely instructed. § 163(1) StPO imposes a duty of their own: the authorities and officials of the police service must investigate offences and take all measures that permit no delay, in order to prevent the matter being obscured. In practice the great bulk of investigative work is done by Land police under this provision, while the prosecution carries the legal responsibility for the investigation and the charging decision.',
          claim: 'fact',
          sources: ['de-stpo-163'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Federal structure inside a federal statute',
          text: 'The StPO is federal law, and it applies throughout Germany. The police who carry out § 163 duties are, in the ordinary case, Land police answerable within their own Land. This is the pattern the hub describes: a federal statute administered by Land institutions, with no federal supervisory chain over the officers applying it.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who holds legal responsibility for investigating and the safeguards written into that responsibility. It does not describe investigative technique, surveillance capability, evidential thresholds at an operational level, or anything that would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The role of the Ermittlungsrichter and the categories of measure requiring judicial authorisation have not been researched from the StPO and are not described.',
        'The division of investigative work between Land police, the Bundeskriminalamt and the Bundespolizei has not been established from statute.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Germany',
      summary:
        'Why German prisons are sixteen systems rather than one, what that means for any national figure, and a properly scoped statistic on prison occupancy.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: ['de-grundgesetz', 'coe-space-i-2024', 'de-destatis-strafvollzug-2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [GERMANY_PRISON_OCCUPANCY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prisons in Germany are administered by the Länder. That follows the general rule of Article 83 of the Basic Law, under which the Länder execute federal laws in their own right, and it has a consequence that shapes every number you will read about German imprisonment: there is no single national prison system to measure.',
          claim: 'fact',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'A statistic assembled from sixteen systems',
          text: 'The Federal Statistical Office is explicit about this. Of its prison statistics it states: "Die Daten der Strafvollzugsstatistik werden von den Statistischen Ämtern der Länder übermittelt" — the data are transmitted by the statistical offices of the Länder. A German national prison figure is an aggregation of Land systems, not a measurement of one system, and anything derived from it inherits that.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Prison occupancy, stated with its limits',
          text: 'On 31 January 2024, penal institutions in Germany held 59,413 inmates including pre-trial detainees, against a reported total capacity of 72,258 places — a prison density of 82.2 inmates per 100 places (Council of Europe Annual Penal Statistics, SPACE I 2024, Tables 3 and 16). Four qualifications travel with that figure and none is optional. It is a national aggregate of sixteen separately administered systems and describes none of them individually. SPACE I also publishes an adjusted alternative of 55,916 inmates, excluding certain categories, so the headline count depends on the counting definition. The report warns that comparisons of such levels between countries "are always problematic", so this supports no comparison with France or anywhere else. And a national density below 100 does not establish that no individual institution is above its capacity.',
        },
        {
          kind: 'paragraph',
          text: 'Because prison administration is a Land function, conditions, regimes and organisation may differ between Länder. This pilot has not researched any Land prison administration, so it describes none — and a reader should treat a national figure as a starting point for a Land-level question, not an answer to it.',
          claim: 'analysis',
          sources: ['de-grundgesetz'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'Non-custodial sanctions, probation and community supervision, rehabilitation and reintegration programmes, prison inspection and complaint mechanisms, and the legislative history of prison law have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No Land prison administration has been researched. No claim is made about conditions, regimes or organisation in any Land.',
        'Probation and community supervision structures have not been researched.',
        'Prison oversight and inspection mechanisms have not been researched.',
        'The legislative competence position for prison law is recorded as unknown in the jurisdiction model rather than asserted, because the relevant provisions have not been read.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Germany',
      summary:
        'Every source used for the Germany pages, what each supports, how it was verified, and the translation status of each legal text.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      reviewedOn: '2026-07-24',
      factsVerifiedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [
        'de-grundgesetz',
        'de-gvg-141',
        'de-gvg-147',
        'de-stpo-160',
        'de-stpo-163',
        'coe-space-i-2024',
        'de-destatis-strafvollzug-2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Germany pages rest on seven sources: the Basic Law, four code provisions, one intergovernmental statistical report and one national statistical publication. Each was read directly and confirmed to contain what it is cited for, on 24 July 2026.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Translations are not the law',
          text: 'The Basic Law is cited here from the English translation published on Gesetze im Internet, produced by named academics with the Bundestag Language Service and stated to reflect amendments up to 22 March 2025. The GVG and StPO provisions are cited from the authoritative GERMAN text, because the official English translations of those codes were not retrievable as far as the sections needed. In every case the German text is legally authoritative and a translation may lag later amendments — which is why the translation status is recorded on each source record rather than assumed.',
        },
        {
          kind: 'callout',
          variant: 'uncertainty',
          title: 'A limit on the statistical sources',
          text: 'The Destatis prison-statistics landing page carries no headline total, so no number is taken from it; it is cited for its reference date and for its explicit statement that the data are transmitted by the Länder statistical offices. The one published figure on these pages comes from SPACE I 2024, with its reference date, its adjusted alternative and its own comparability warning all recorded alongside it.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/germany-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Germany',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'No source describing the institutional organisation of forensic services in Germany has been read. Forensic work is distributed across federal and Land institutions, which means a description assembled from general knowledge would almost certainly assert a national uniformity that does not exist — in a safety-sensitive section where the editorial policy forbids exactly that.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Germany',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Only the constitutional basis for Federal Border Police authorities in Article 87(1) has been read. The statutory competences of the Bundespolizei, the customs administration and the Zollkriminalamt, and the division between border policing, customs, immigration administration and tax enforcement, have not been established. Collapsing those into a single "border force" is the specific error this module exists to prevent.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Germany',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Oversight in Germany is itself federally divided — federal and Land parliaments, federal and Land data-protection authorities, Land-level police complaint arrangements that differ between Länder. Publishing a single national oversight page without that differentiation would imply a uniform national complaints model that does not exist, and listing bodies without establishing their powers would imply effective accountability without evidence.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Germany',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'German institutional history spans the German Empire, the Weimar Republic, the National Socialist dictatorship, the Federal Republic, the German Democratic Republic and reunified Germany. Each requires archival and scholarly sources that have not been consulted, and claims of institutional continuity across those ruptures require evidence rather than inference. This is the module where writing from general knowledge would do the most damage, so it is the module most clearly deferred.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Germany',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-24',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires every milestone to carry its own verified source and a jurisdiction. The dated facts established in this pilot — the Basic Law of 23 May 1949 and the amendment date of the translation used — are not a timeline, and filling the gap with recalled dates across six constitutional orders is precisely the decorative-timeline failure the standards warn against.',
    },
  ],
};
