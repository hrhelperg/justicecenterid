import type { FunctionScope, JurisdictionLevel, JurisdictionRecord } from './types';

/**
 * The jurisdiction registry.
 *
 * Scope discipline: this is NOT a geopolitical database. A record exists only where it does
 * institutional work — where a jurisdiction has, shares, lacks, or is explicitly excluded
 * from one of the five modelled functions. There is no record for each of France's 101
 * departments or 34,000+ communes, because in France those tiers are legally uniform and one
 * tier record states the arrangement accurately.
 *
 * That uniformity is itself a country-specific fact. A federal system will need one record
 * per unit (each US state has its own courts, prosecution and corrections), and the model
 * supports that without change: the tier-vs-unit choice is a research output, not a schema
 * property. Recorded in docs/architecture/jurisdiction-model.md.
 */
export const JURISDICTIONS: readonly JurisdictionRecord[] = [
  /* ---------------------------------------------------------------------- */
  /* France — national                                                      */
  /* ---------------------------------------------------------------------- */
  {
    id: 'fr',
    slug: 'france',
    name: 'French Republic',
    shortName: 'France',
    countryCode: 'FR',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958'],
    notes:
      'Article 1 of the Constitution of 4 October 1958 states that France is an indivisible Republic and that its organisation is decentralised. Decentralisation distributes administrative competences to territorial collectivities; it does not create separate legal systems, separate court hierarchies, or separate prosecution services beneath the national level.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* France — metropolitan administrative tiers                             */
  /* ---------------------------------------------------------------------- */
  /*
   * These three records are the reason FunctionScope exists. Each is a real territorial
   * collectivity named in Article 72, and each has genuine administrative competences — but
   * none of them is a legal jurisdiction for courts or prosecution. Recording courtScope as
   * `national` rather than `own` is the difference between an accurate page and a
   * plausible-sounding wrong one.
   */
  {
    id: 'fr-region',
    slug: 'region',
    name: 'Région (French regional tier)',
    countryCode: 'FR',
    level: 'region',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'national',
    policingScope: 'none',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958'],
    notes:
      'Named as a category of territorial collectivity in Article 72. Regions hold administrative competences. They are not a level of the court system, and there is no regional police force, prosecution service, or prison administration.',
    status: 'published',
  },
  {
    id: 'fr-departement',
    slug: 'departement',
    name: 'Département (French departmental tier)',
    countryCode: 'FR',
    level: 'department',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'national',
    policingScope: 'none',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958', 'fr-justice-courts'],
    notes:
      'Named as a category of territorial collectivity in Article 72. The departmental map and the judicial map are drawn separately and do not coincide: courts sit in their own ressorts, and one of the criminal courts is named cour criminelle départementale without the department being the body that organises it. Treating the department as a court jurisdiction would be a category error.',
    status: 'published',
  },
  {
    id: 'fr-commune',
    slug: 'commune',
    name: 'Commune (French municipal tier)',
    countryCode: 'FR',
    level: 'municipality',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'none',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fr-constitution-1958', 'fr-csi-l511-1'],
    notes:
      'The only French tier below the state with a policing function of its own. A commune may establish a police municipale whose agents act under the authority of the mayor. Article L511-1 of the Code de la sécurité intérieure states this is "sans préjudice de la compétence générale de la police nationale et de la gendarmerie nationale" — the municipal force does not displace the national ones. It is optional: many communes have none. policingScope is therefore `own` in the sense of a distinct legal arrangement, not in the sense that every commune exercises it.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* France — special-status and overseas                                   */
  /* ---------------------------------------------------------------------- */
  /*
   * Overseas: every one of these is at `in-research`, not `partial`.
   *
   * Article 72-3 names ten overseas territories, and Articles 73 and 74 tell us which regime
   * governs which. That is enough to record `legalSystemScope: 'delegated'` with a source.
   * It is NOT enough to say anything about how courts, prosecution or prison administration
   * are actually organised in each of them — those follow from each territory's own statute,
   * which has not been researched. Those scopes stay `unknown`.
   *
   * This is the single most important honesty property of the model: an unresearched
   * territory must not silently inherit the metropolitan arrangement just because it is part
   * of the same Republic.
   */
  {
    id: 'fr-guadeloupe',
    slug: 'guadeloupe',
    name: 'Guadeloupe',
    countryCode: 'FR',
    level: 'region',
    alsoExercisesLevels: ['department'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'An overseas department and region governed by Article 73, under which laws and regulations apply of right, subject to possible adaptations. legalSystemScope is `delegated` rather than `own` for that reason: the adaptation power is real but derives from the national legal order.',
    status: 'published',
  },
  {
    id: 'fr-martinique',
    slug: 'martinique',
    name: 'Martinique',
    countryCode: 'FR',
    level: 'special',
    alsoExercisesLevels: ['department', 'region'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'A single territorial collectivity exercising the competences of both a department and a region, created under the last paragraph of Article 73, which Article 72-3 references directly. This is the case that forced `alsoExercisesLevels` into the model: assigning it to either tier alone would be wrong.',
    status: 'published',
  },
  {
    id: 'fr-guyane',
    slug: 'guyane',
    name: 'Guyane',
    countryCode: 'FR',
    level: 'special',
    alsoExercisesLevels: ['department', 'region'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'A single territorial collectivity exercising both departmental and regional competences, created under the last paragraph of Article 73.',
    status: 'published',
  },
  {
    id: 'fr-la-reunion',
    slug: 'la-reunion',
    name: 'La Réunion',
    countryCode: 'FR',
    level: 'region',
    alsoExercisesLevels: ['department'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas department and region governed by Article 73.',
    status: 'published',
  },
  {
    id: 'fr-mayotte',
    slug: 'mayotte',
    name: 'Mayotte',
    countryCode: 'FR',
    level: 'region',
    alsoExercisesLevels: ['department'],
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'Named in Article 72-3 and governed by Article 73. Mayotte reached that status considerably later than the other overseas departments, and its arrangements have changed within living memory; any claim about its current institutional detail needs a source dated after the change rather than a general statement about overseas departments.',
    status: 'published',
  },
  {
    id: 'fr-polynesie-francaise',
    slug: 'polynesie-francaise',
    name: 'Polynésie française',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      "An overseas collectivity governed by Article 74, which provides a statute taking account of each collectivity's own interests. The specific division of competences is set by its own organic statute and has not been researched here.",
    status: 'published',
  },
  {
    id: 'fr-saint-pierre-et-miquelon',
    slug: 'saint-pierre-et-miquelon',
    name: 'Saint-Pierre-et-Miquelon',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-saint-barthelemy',
    slug: 'saint-barthelemy',
    name: 'Saint-Barthélemy',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-saint-martin',
    slug: 'saint-martin',
    name: 'Saint-Martin',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-wallis-et-futuna',
    slug: 'wallis-et-futuna',
    name: 'Îles Wallis et Futuna',
    countryCode: 'FR',
    level: 'territory',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes: 'An overseas collectivity under Article 74. Its statute has not been researched.',
    status: 'published',
  },
  {
    id: 'fr-nouvelle-caledonie',
    slug: 'nouvelle-caledonie',
    name: 'Nouvelle-Calédonie',
    countryCode: 'FR',
    level: 'special',
    parentJurisdictionId: 'fr',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fr-constitution-1958'],
    notes:
      'New Caledonia is governed by neither Article 73 nor Article 74. It has its own title of the Constitution — Title XIII, "Dispositions transitoires relatives à la Nouvelle-Calédonie". It is deliberately recorded at level `special` rather than `territory`: grouping it with the Article 74 collectivities would misstate its constitutional position. Nothing about its institutional arrangements is asserted here without dated sources.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Germany — federal level                                                */
  /* ---------------------------------------------------------------------- */
  /*
   * LAND SELECTION (A3). Four records, chosen for what each tests, not for familiarity:
   *   - `de`      the Bund, to test federal/Land parentage and the split between
   *               legislative competence and administrative execution;
   *   - `de-by`   Bavaria, a territorial Land with its own constitutional court — tests a
   *               Land owning a court function the Bund does not supply;
   *   - `de-be`   Berlin, a city-state — tests one body exercising Land AND municipal levels
   *               simultaneously, reusing `alsoExercisesLevels` from the France pilot;
   *   - `de-nw`   North Rhine-Westphalia — tests an INTERMEDIATE tier (Regierungsbezirke)
   *               that Berlin and Hamburg do not have at all, which is the cleanest available
   *               proof that Länder are not structurally interchangeable.
   *
   * No record is created for any Kreis, kreisfreie Stadt or municipality. Those tiers are not
   * uniform across Länder — which is itself the finding — and inventing tier records for them
   * would assert a uniformity the sources do not support.
   */
  {
    id: 'de',
    slug: 'germany',
    name: 'Federal Republic of Germany',
    shortName: 'Germany',
    countryCode: 'DE',
    level: 'federal',
    legalSystemScope: 'own',
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'none',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['de-grundgesetz'],
    notes:
      'Article 20(1) of the Basic Law describes the Federal Republic as a federal state. Article 30 provides that the exercise of state powers is a matter for the Länder except as otherwise provided, and Article 83 that the Länder execute federal laws in their own right. The federal level therefore holds broad legislative competence while administering comparatively little: policing, courts, prosecution and prisons are largely administered by the Länder. correctionalScope is `none` at federal level because no federal prison administration is established by the Basic Law; policingScope is `shared` because Article 73(1) no. 10 and Article 87(1) permit defined federal police bodies alongside Land police, not instead of them.',
    status: 'published',
  },
  {
    id: 'de-by',
    slug: 'bayern',
    name: 'Freistaat Bayern (Bavaria)',
    shortName: 'Bavaria',
    countryCode: 'DE',
    level: 'state',
    parentJurisdictionId: 'de',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['de-grundgesetz', 'de-gvg-147'],
    notes:
      "A territorial Land. Under Article 92 of the Basic Law judicial power is vested in the Federal Constitutional Court, the federal courts and the courts of the Länder, so a Land owns its own court function rather than hosting a federal one. Under § 147 no. 2 GVG the Landesjustizverwaltung holds the right of supervision and direction over all prosecution officials of that Land. Bavaria's own institutional detail — its police organisation, its constitutional court, its prison administration — has NOT been researched and nothing specific to Bavaria is asserted.",
    status: 'published',
  },
  {
    id: 'de-be',
    slug: 'berlin',
    name: 'Land Berlin',
    shortName: 'Berlin',
    countryCode: 'DE',
    level: 'state',
    alsoExercisesLevels: ['municipality'],
    parentJurisdictionId: 'de',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['de-grundgesetz'],
    notes:
      'A city-state: a Land that is simultaneously a single municipality, so the Land and municipal levels are exercised by the same body. This is why a "German municipal police model" cannot be stated generally — in a city-state the municipal level is the Land level, and any statement about how municipalities relate to Land police means something different here than in a territorial Land. Berlin-specific institutional detail has NOT been researched.',
    status: 'published',
  },
  {
    id: 'de-nw',
    slug: 'nordrhein-westfalen',
    name: 'Land Nordrhein-Westfalen (North Rhine-Westphalia)',
    shortName: 'North Rhine-Westphalia',
    countryCode: 'DE',
    level: 'state',
    parentJurisdictionId: 'de',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['de-grundgesetz'],
    notes:
      'Included specifically because it maintains an intermediate administrative tier (Regierungsbezirke) that the city-states do not have at all. That asymmetry is the point: the German sub-national structure is not a single ladder repeated sixteen times, so a tier record of the kind used for France would misdescribe the country. No Regierungsbezirk record is created here, because their powers have not been researched and their existence varies by Land. NRW-specific institutional detail has NOT been researched.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* United States — federal level                                          */
  /* ---------------------------------------------------------------------- */
  /*
   * SAMPLE SELECTION. Five records, each chosen for a distinct model test, not for size:
   *   - `us`         the federal level, to test a federation whose sub-national units hold
   *                  RESERVED rather than delegated powers;
   *   - `us-ca`      California, a state with elected county sheriffs and district attorneys —
   *                  tests a state that legislates AND administers its own justice system, the
   *                  sharp contrast with Germany where the Länder administer federal law;
   *   - `us-la`      Louisiana, whose county-equivalent is the PARISH — tests "not every state
   *                  has counties" and that a shared function can have a different local name;
   *   - `us-dc`      the District of Columbia — tests a non-state jurisdiction under Congress's
   *                  plenary authority, neither a reserved-power state nor a sovereign;
   *   - `us-tribal`  tribal jurisdiction as a category — the reason `authorityBasis` exists.
   *
   * No record is created for any county, municipality or specific named tribe. The 17,541
   * general-purpose state and local law-enforcement agencies (BJS CSLLEA 2018) are the reason
   * a per-unit model cannot be attempted for the US at this depth; the sample tests the model
   * without pretending to enumerate the country.
   */
  {
    id: 'us',
    slug: 'united-states',
    name: 'United States of America',
    shortName: 'United States',
    countryCode: 'US',
    level: 'federal',
    legalSystemScope: 'shared',
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['us-const-amend-10', 'us-courts-comparing'],
    notes:
      'A federation in which the states, not the federal government, hold residual authority. The Tenth Amendment reserves to the states (or the people) the powers not delegated to the United States. Every modelled function is `shared`: federal institutions and state institutions both police, prosecute, adjudicate and imprison, within their own spheres. There is no single national police, no single national prosecution service, and two separate court systems — federal and state — that the US Courts describe as distinct.',
    status: 'published',
  },
  {
    id: 'us-ca',
    slug: 'california',
    name: 'State of California',
    shortName: 'California',
    countryCode: 'US',
    level: 'state',
    parentJurisdictionId: 'us',
    authorityBasis: 'reserved-powers',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'exclusive-subnational',
      prosecution: 'exclusive-subnational',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['us-const-amend-10', 'us-courts-comparing'],
    notes:
      'A sample state. In the US a state both LEGISLATES and ADMINISTERS its own courts, police, prosecution and prisons — the US Courts state that each state establishes its own courts through its own constitution and laws. This is the sharp contrast with Germany, where the Länder administer courts organised by FEDERAL law: courts.legislativeCompetence is `exclusive-subnational` here and was `concurrent` for a German Land. County sheriffs and district attorneys within California are elected offices, described in prose on the law-enforcement and prosecution modules. No California-specific institutional detail beyond this structural point has been researched.',
    status: 'published',
  },
  {
    id: 'us-la',
    slug: 'louisiana',
    name: 'State of Louisiana',
    shortName: 'Louisiana',
    countryCode: 'US',
    level: 'state',
    parentJurisdictionId: 'us',
    authorityBasis: 'reserved-powers',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'exclusive-subnational',
      prosecution: 'exclusive-subnational',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['us-const-amend-10'],
    notes:
      'Included because its county-equivalent is the PARISH, not the county — the cleanest available proof that a function shared down to the local level does not carry a uniform local name or structure across states. The model handles this without a schema change: a Louisiana parish would be a `county`-level record with a note that the local name is "parish". No such sub-state record is created here, because parish institutions have not been researched.',
    status: 'published',
  },
  {
    id: 'us-dc',
    slug: 'district-of-columbia',
    name: 'District of Columbia',
    shortName: 'District of Columbia',
    countryCode: 'US',
    level: 'special',
    parentJurisdictionId: 'us',
    authorityBasis: 'federal-plenary',
    legalSystemScope: 'delegated',
    policingScope: 'unknown',
    courtScope: 'unknown',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    legislativeCompetence: {
      'legal-system': 'framework',
      policing: 'framework',
      courts: 'unknown',
      prosecution: 'unknown',
      corrections: 'unknown',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['us-dc-home-rule'],
    notes:
      'Not a state. The District of Columbia Home Rule Act of 1973 created an elected mayor and council, but Congress retains plenary authority: it reviews all Council legislation before it becomes law and retains authority over the District budget. authorityBasis is `federal-plenary` — DC holds neither the reserved powers of a state nor the inherent authority of a sovereign; its local legislative power is delegated by Congress and revocable. The court and prosecution arrangements of the District are distinctive and have NOT been researched here, so those scopes are recorded as `unknown` rather than assumed.',
    status: 'published',
  },
  {
    id: 'us-tribal',
    slug: 'tribal-jurisdiction',
    name: 'Tribal jurisdiction (United States)',
    shortName: 'Tribal jurisdiction',
    countryCode: 'US',
    level: 'tribal',
    parentJurisdictionId: 'us',
    authorityBasis: 'inherent-sovereign',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'unknown',
    correctionalScope: 'unknown',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['us-bia-pl280'],
    notes:
      'A CATEGORY record, not a specific named nation. Tribal sovereignty is INHERENT: it predates the Constitution and is not derived from the federal government or from any state. The parent link to `us` therefore records geographic location within the United States ONLY, not derivation of authority — a tribe is located within the country without being a subdivision of it. The Bureau of Indian Affairs records that tribal courts exercise jurisdiction over Indian country, that Public Law 280 (1953) transferred certain criminal and civil jurisdiction to named states without terminating tribal jurisdiction, and that tribal jurisdiction may be exercised concurrently. Prosecution and corrections scopes are `unknown` because the arrangements vary by nation and by whether Public Law 280 applies, and no specific nation has been researched. No specific tribe is named or described.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Ireland — national                                                     */
  /* ---------------------------------------------------------------------- */
  /*
   * One record. Ireland is a unitary state — the model handles it exactly as it handled
   * France, at the country level, with every function `own`. No sub-national record exists
   * because policing, prosecution, courts and prisons are all organised nationally and there
   * is no tier below the State that administers any of them separately.
   *
   * SCOPE INTEGRITY. `IE` is the sovereign State of Ireland, NOT the island of Ireland and NOT
   * Northern Ireland (which is part of the United Kingdom, a separate jurisdiction). The
   * Constitution's territorial claim over the whole island was replaced in 1998 by the
   * Nineteenth Amendment with an aspiration to unity achievable only by the consent of
   * majorities in both jurisdictions. Every Ireland page states this; nothing here describes
   * Northern Ireland.
   */
  {
    id: 'ie',
    slug: 'ireland',
    name: 'Ireland',
    shortName: 'Ireland',
    countryCode: 'IE',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['ie-courts-service', 'ie-citizensinfo-gfa'],
    notes:
      'The sovereign State of Ireland — a unitary, common-law state. Justice is administered nationally: a single national police service (An Garda Síochána), a single independent prosecutor (the Director of Public Prosecutions), one court system administered by the Courts Service, and one prison service. There is no sub-national tier that administers any of these separately, which is why a single country-level record states the arrangement accurately. `IE` is not the island of Ireland and not Northern Ireland; that scope distinction is stated on every Ireland page.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Japan — national and two prefectural samples                           */
  /* ---------------------------------------------------------------------- */
  /*
   * Japan is a UNITARY state, structurally like France, with one decisive difference that the
   * whole pilot exists to record: police are administered at the PREFECTURAL level, not the
   * national one. So unlike Ireland (one country record, everything `own`) Japan needs the
   * national record PLUS prefectural samples, and its national `policingScope` is `shared`
   * rather than `own` — the national bodies coordinate, set standards and supervise matters of
   * national concern, while the 47 prefectures administer operational policing.
   *
   * COORDINATION, NOT COMMAND (A2). The National Public Safety Commission and National Police
   * Agency do NOT operationally command the prefectural police in normal times; the NPA
   * "controls and supervises" them only "on matters of national concern" and sets general
   * standards. That relationship is captured HONESTLY by scope alone — national `shared`,
   * prefectural `own` — with no invented "commands" relationship. This follows the United
   * States finding: a relationship the scope fields already express does not earn a new field.
   *
   * PREFECTURAL SAMPLES (A3). Two only — Tokyo (a special case, the Metropolitan Police
   * Department / Keishichō) and Osaka (the standard prefectural-police model). Not all 47.
   * These are STRUCTURAL records resting on the national Police Act framework the NPA report
   * describes; no prefecture-specific institutional detail beyond that framework is asserted.
   */
  {
    id: 'jp',
    slug: 'japan',
    name: 'Japan',
    shortName: 'Japan',
    countryCode: 'JP',
    level: 'country',
    legalSystemScope: 'own',
    // Policing is the one function Japan does NOT decide wholly at the national level: the
    // national bodies coordinate and supervise, the prefectures administer. Hence `shared`.
    policingScope: 'shared',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['jp-constitution', 'jp-npa-police-of-japan-2020', 'jp-courts-judicial-system'],
    notes:
      'The State of Japan — a unitary, civil-law state under the 1946 Constitution. Courts, public prosecution and corrections are organised and administered nationally (courtScope, prosecutionScope and correctionalScope are `own` at this level, with no sub-national tier administering them). Policing is the exception, which is why policingScope is `shared`: the National Public Safety Commission and the National Police Agency form the national police organisation, but the Police Act empowers them to "control and supervise prefectural police forces on matters of national concern" and to set general standards — NOT to run day-to-day policing, which each of the 47 prefectures administers through its own prefectural police and prefectural public safety commission. The national/prefectural split is recorded structurally, not as a chain of command.',
    status: 'published',
  },
  {
    id: 'jp-tokyo',
    slug: 'tokyo',
    name: 'Tokyo Metropolis (東京都)',
    shortName: 'Tokyo',
    countryCode: 'JP',
    level: 'prefecture',
    parentJurisdictionId: 'jp',
    // A unitary state: prefectural authority is derived within the national constitutional
    // order (local self-government is guaranteed by the Constitution but its organisation is
    // "fixed by law"), exactly as France's départements are treated — hence `delegated`, not
    // `reserved-powers` (US states) and not `inherent-sovereign` (tribal nations).
    authorityBasis: 'delegated',
    legalSystemScope: 'national',
    // The point of the pilot: the prefecture administers its OWN police.
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    // Police administration is `own`, but the framework is the national Police Act — the same
    // administration/legislation divergence the Germany pilot recorded for courts. Only the
    // policing key is set; the other functions are national at this level and legislate nowhere
    // here, so no competence key is asserted for them.
    legislativeCompetence: {
      policing: 'framework',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['jp-npa-police-of-japan-2020'],
    notes:
      'Tokyo is a special case among the prefectures. It is a "to" (都, metropolis), one of the four types of prefecture (to, dō, fu, ken), and its police force is the Metropolitan Police Department (Keishichō, 警視庁) — NOT a branch of the National Police Agency but the prefectural police of Tokyo, distinctive because of its size and its position in the capital. Recorded to show that a prefecture administers its own police (policingScope `own`) while courts, prosecution and prisons remain national (`national`). No Tokyo-specific institutional detail beyond this structural point is asserted; the record rests on the national Police Act framework the NPA report describes.',
    status: 'published',
  },
  {
    id: 'jp-osaka',
    slug: 'osaka',
    name: 'Osaka Prefecture (大阪府)',
    shortName: 'Osaka',
    countryCode: 'JP',
    level: 'prefecture',
    parentJurisdictionId: 'jp',
    authorityBasis: 'delegated',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    legislativeCompetence: {
      policing: 'framework',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['jp-npa-police-of-japan-2020'],
    notes:
      'An ordinary prefecture for policing purposes, included as the contrast to Tokyo. Osaka is a "fu" (府, one of two urban prefectures alongside Kyoto), and its police — the Osaka Prefectural Police — follows the STANDARD prefectural-police model under a Prefectural Public Safety Commission, unlike Tokyo\'s specially named Metropolitan Police Department. The structural facts are identical to Tokyo\'s (policing `own`; courts, prosecution and corrections `national`); the pair demonstrates that this pattern is the general rule across the 47 prefectures, not a Tokyo peculiarity. No Osaka-specific institutional detail beyond the national Police Act framework is asserted.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Brazil — federal, plus one ordinary state and the sui-generis DF        */
  /* ---------------------------------------------------------------------- */
  /*
   * Brazil is a federation (Art. 18: União, Estados, Distrito Federal e Municípios, "todos
   * autônomos"). It reuses machinery every earlier pilot built, and forces no new field:
   *
   *  - The LAW is unified but the INSTITUTIONS are decentralised. Penal and procedural law are
   *    the EXCLUSIVE competence of the Union (Art. 22, I), so the states administer justice
   *    without writing the criminal law — the Germany "federal law, sub-national administration"
   *    split, sharpened. This is why the states' `legalSystemScope` is `national` (as Japan's
   *    prefectures were) while policing, courts, prosecution and corrections are `own`, and why
   *    `legislativeCompetence['legal-system']` is `exclusive-federal` (contrast the United
   *    States, where states write their own criminal codes → `concurrent`).
   *
   *  - The states hold RESERVED/residual competence (Art. 25 §1), so `authorityBasis` is
   *    `reserved-powers` — the field the US pilot added, reused unchanged.
   *
   *  - FUNCTION-SPLIT POLICING is INSTITUTIONAL, not a jurisdiction-scope question. A single
   *    state runs BOTH an investigative Polícia Civil (Art. 144 §4) and a preventive Polícia
   *    Militar (Art. 144 §5); `policingScope: 'own'` says the state administers its own policing,
   *    and the two-force composition is described in prose, exactly as the US pilot described its
   *    thousands of agencies under one scope. No "force" structure is invented.
   *
   *  - The sui-generis Distrito Federal accumulates state AND municipal competences (Art. 32 §1)
   *    — recorded with `alsoExercisesLevels`, the field France added for Martinique — while its
   *    police, courts and Ministério Público are organised and maintained by the UNION
   *    (Art. 21, XIII–XIV), which is why its policing/court/prosecution scopes are `shared`.
   *
   * Samples: the federation, one ordinary state (São Paulo) and the Federal District. Not all
   * 26 states; no public state pages.
   */
  {
    id: 'br',
    slug: 'brazil',
    name: 'Federative Republic of Brazil',
    shortName: 'Brazil',
    countryCode: 'BR',
    level: 'federal',
    // The legal system is national and unified — criminal law is the Union's exclusive
    // competence (Art. 22, I) — so, unlike the United States, legalSystemScope is `own` at the
    // federal level and `national` at the state level, not `shared`.
    legalSystemScope: 'own',
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['br-cf-1988'],
    notes:
      'A federation of the Union, the states, the Federal District and the municipalities, all autonomous (Art. 18). Its defining feature for this platform: the substantive criminal LAW is unified and federal — penal and procedural law are the exclusive (privativa) competence of the Union (Art. 22, I) — while the INSTITUTIONS are decentralised. Policing, courts, public prosecution and prisons all exist at both the federal and the state level, so each is `shared`: there is a federal Polícia Federal alongside state Polícias Civis and Militares; federal justice alongside state justice; the Ministério Público da União alongside the state Ministérios Públicos; and a small federal prison system alongside the state systems that hold the overwhelming majority of prisoners. legalSystemScope is `own` because the national legal order is unified rather than split between federal and state law.',
    status: 'published',
  },
  {
    id: 'br-sp',
    slug: 'sao-paulo',
    name: 'State of São Paulo',
    shortName: 'São Paulo',
    countryCode: 'BR',
    level: 'state',
    parentJurisdictionId: 'br',
    authorityBasis: 'reserved-powers',
    // The criminal law is federal (Art. 22, I), so the state has no legal system of its own.
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['br-cf-1988'],
    notes:
      "An ordinary state, the most populous, included as the standard model. Like every Brazilian state it administers its own institutions — an investigative Polícia Civil and a preventive Polícia Militar (both subordinate to the Governor, Art. 144 §6), its own court system (the Tribunal de Justiça), its own Ministério Público, and its own prison system — but it does NOT write the criminal law it enforces: penal and procedural law are the Union's exclusive competence (Art. 22, I), which is why legalSystemScope is `national` and legislativeCompetence for the legal system is `exclusive-federal`. This is the sharp contrast with a United States state, which writes its own criminal code. The two-force police structure is described on the law-enforcement page, not encoded as separate records; no São Paulo-specific institutional detail beyond this constitutional structure is asserted.",
    status: 'published',
  },
  {
    id: 'br-df',
    slug: 'distrito-federal',
    name: 'Federal District (Distrito Federal)',
    shortName: 'Distrito Federal',
    countryCode: 'BR',
    level: 'special',
    parentJurisdictionId: 'br',
    // Art. 32 §1: the DF holds the legislative competences reserved to BOTH the states and the
    // municipalities — the France `alsoExercisesLevels` case, reused.
    alsoExercisesLevels: ['state', 'municipality'],
    authorityBasis: 'reserved-powers',
    legalSystemScope: 'national',
    // Its police, courts and Ministério Público are organised and maintained by the UNION
    // (Art. 21, XIII–XIV) even though the police answer to the DF Governor (Art. 144 §6) — a
    // genuinely shared arrangement, hence `shared` rather than `own`.
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['br-cf-1988'],
    notes:
      "The Federal District — a sui-generis federative unit, not a state and constitutionally barred from being divided into municipalities (Art. 32). It accumulates the legislative competences reserved to both the states and the municipalities (Art. 32 §1), recorded with alsoExercisesLevels. What makes it distinctive for this platform is that its Polícia Civil, Polícia Militar and Corpo de Bombeiros, and its Judiciary and Ministério Público, are organised and maintained by the UNION (Art. 21, XIV and XIII), while the police nonetheless answer to the DF Governor (Art. 144 §6) — so policing, courts and prosecution are `shared` between the DF and the Union rather than wholly the DF's own. Its Ministério Público, the MPDFT, is a branch of the Ministério Público da União, not a state MP. No DF-specific institutional detail beyond this constitutional arrangement is asserted.",
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Canada — federal, two self-policing provinces, a contract province, a   */
  /* territory                                                               */
  /* ---------------------------------------------------------------------- */
  /*
   * Canada is a federation whose defining feature for this platform is CONTRACT POLICING, and it
   * is the country that earns the `contracted` FunctionScope value:
   *
   *  - The criminal LAW is federal (Constitution Act 1867 s.91(27)) — one Criminal Code — but the
   *    ADMINISTRATION of justice is provincial (s.92(14)). This is the Germany/Brazil split, with
   *    one difference from both Brazil and the United States: the residual power (POGG) is
   *    FEDERAL, not provincial, so `authorityBasis: 'reserved-powers'` would INVERT Canadian
   *    federalism and is deliberately NOT used. Provincial powers are constitutionally enumerated
   *    and exclusive (s.92); the records leave `authorityBasis` unset (its default carries no
   *    claim) and state the arrangement in the notes.
   *
   *  - POLICING is where a single scope value could not tell the truth. Ontario (Ontario
   *    Provincial Police) and Quebec (Sûreté du Québec) run their OWN provincial police —
   *    `policingScope: 'own'`. But eight provinces and the three territories procure their
   *    provincial/territorial policing from the RCMP — a federal institution that stays federally
   *    governed — under a cost-shared Police Service Agreement: `policingScope: 'contracted'`.
   *    British Columbia and the Yukon sample that. No typed relationship graph is built; the
   *    RCMP/OPP/SQ identities live in the law-enforcement module prose.
   *
   *  - TERRITORIES differ from provinces: their powers are delegated by federal statute and are
   *    amendable by Parliament, so `authorityBasis: 'federal-plenary'` (the value the US pilot
   *    added for the District of Columbia, reused), and prosecution in the territories is done by
   *    the federal Public Prosecution Service of Canada, so the Yukon's `prosecutionScope` is
   *    `national`, not `own`.
   *
   * Samples: Canada (federal), Ontario and Quebec (self-policing; Quebec also the bijural
   * civil-law case), British Columbia (RCMP contract province) and the Yukon (territory). Not all
   * provinces/territories; no public sub-national pages; no public Indigenous-jurisdiction pages
   * (First Nations policing is described in prose only).
   */
  {
    id: 'ca',
    slug: 'canada',
    name: 'Canada',
    shortName: 'Canada',
    countryCode: 'CA',
    level: 'federal',
    // Bijural and federal: federal criminal law coexists with provincial private law (common
    // law, and Quebec civil law) — a shared legal order, like the United States.
    legalSystemScope: 'shared',
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['ca-constitution-1867'],
    notes:
      "A federation in which the criminal LAW is federal and uniform — Parliament has exclusive authority over 'The Criminal Law ... including the Procedure in Criminal Matters' (Constitution Act 1867 s.91(27)) — but the ADMINISTRATION of justice is provincial (s.92(14)). Every modelled function is therefore `shared`: a federal police force (the RCMP) alongside provincial and municipal police; federal courts alongside provincially organised courts; federal prosecution (the Public Prosecution Service of Canada) alongside provincial Crown prosecution; federal penitentiaries (sentences of two years or more) alongside provincial custody (under two years and remand). Unlike the United States and Brazil, the residual 'Peace, Order, and good Government' power is FEDERAL. Canada is bijural (common law, and civil law for private law in Quebec) and bilingual (English and French versions of federal law equally authoritative).",
    status: 'published',
  },
  {
    id: 'ca-on',
    slug: 'ontario',
    name: 'Ontario',
    shortName: 'Ontario',
    countryCode: 'CA',
    level: 'province',
    parentJurisdictionId: 'ca',
    // authorityBasis deliberately unset: provincial powers are constitutionally enumerated and
    // exclusive (s.92); `reserved-powers` would wrongly imply the residual is provincial (in
    // Canada POGG is federal). The arrangement is stated in the notes.
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ca-constitution-1867'],
    notes:
      'A common-law province that runs its OWN provincial police — the Ontario Provincial Police — and does NOT contract the RCMP for provincial policing, the contrast that makes the `contracted` value meaningful. Ontario administers its own courts and prosecutes most Criminal Code offences through its Crown attorneys, and runs provincial custody for sentences under two years. Its superior-court judges are appointed and paid by the federal government (s.96, s.100) while the province constitutes and administers the courts (s.92(14)) — a hybrid recorded in prose, with courtScope `own` because the province owns the courts. Provincial powers are constitutionally enumerated and exclusive; the residual power is federal.',
    status: 'published',
  },
  {
    id: 'ca-qc',
    slug: 'quebec',
    name: 'Quebec (Québec)',
    shortName: 'Quebec',
    countryCode: 'CA',
    level: 'province',
    parentJurisdictionId: 'ca',
    // Quebec has its own legal system for PRIVATE law — the civil-law tradition — so
    // legalSystemScope is `own` in the strongest sense; criminal law remains federal.
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ca-constitution-1867'],
    notes:
      'The bijural case. Quebec applies the CIVIL-LAW tradition to private law (the Civil Code of Québec), while the other provinces apply the common law — but the criminal law is the same federal Criminal Code everywhere, so legalSystemScope is `own` for the distinct private-law system with criminal law federal. Quebec runs its own provincial police, the Sûreté du Québec (named in French; no official English name is asserted), prosecutes through the Directeur des poursuites criminelles et pénales, administers its own courts, and runs provincial custody. Like Ontario it does NOT contract the RCMP for provincial policing.',
    status: 'published',
  },
  {
    id: 'ca-bc',
    slug: 'british-columbia',
    name: 'British Columbia',
    shortName: 'British Columbia',
    countryCode: 'CA',
    level: 'province',
    parentJurisdictionId: 'ca',
    legalSystemScope: 'own',
    // THE contract-policing case: provincial policing is delivered by the federal RCMP under a
    // Police Service Agreement — the province holds the responsibility but procures the service.
    policingScope: 'contracted',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ca-constitution-1867'],
    notes:
      "A contract-policing province: the province is constitutionally responsible for policing (s.92(14)) but procures its PROVINCIAL police service from the RCMP — a federal institution that remains federally governed — under a cost-shared Police Service Agreement (RCMP Act s.20). This is why policingScope is `contracted` rather than `own`: British Columbia does not own the force policing it. Some larger municipalities run their own police (for example the Vancouver Police Department) or hold their own RCMP municipal contracts; that within-province variation is described on the law-enforcement page. British Columbia administers its own courts, prosecutes through the BC Prosecution Service (with Crown pre-charge approval), and runs provincial custody. The RCMP's identity and the agreement's terms are stated in prose, not encoded as a typed institution record.",
    status: 'published',
  },
  {
    id: 'ca-yt',
    slug: 'yukon',
    name: 'Yukon',
    shortName: 'Yukon',
    countryCode: 'CA',
    level: 'territory',
    parentJurisdictionId: 'ca',
    // A territory, not a province: its legislature and powers exist by federal statute (the Yukon
    // Act) and are amendable by Parliament — hence federal-plenary (the DC value, reused), and a
    // `delegated` legal system.
    authorityBasis: 'federal-plenary',
    legalSystemScope: 'delegated',
    policingScope: 'contracted',
    courtScope: 'own',
    // In the territories the federal Public Prosecution Service of Canada is the ONLY prosecutor
    // and conducts all Criminal Code prosecutions — so prosecution is national here, not the
    // territory's own (the sharp province/territory contrast).
    prosecutionScope: 'national',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'framework',
      courts: 'framework',
      prosecution: 'exclusive-federal',
      corrections: 'framework',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ca-constitution-1867'],
    notes:
      "A territory, included to test the province/territory distinction. Unlike a province, the Yukon's legislature and legislative powers exist by federal statute (the Yukon Act) and can be amended by Parliament, so authorityBasis is `federal-plenary` (the value the United States pilot added for the District of Columbia) and its legal-system scope is `delegated`. Its policing is delivered by the RCMP under a territorial Police Service Agreement (`contracted`), and — the decisive contrast with the provinces — criminal prosecution is conducted by the FEDERAL Public Prosecution Service of Canada, which states it is 'the only' prosecutor in the territories and conducts all Criminal Code prosecutions there, so prosecutionScope is `national`. The Yukon runs its own territorial custody for shorter sentences and remand.",
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Australia — Commonwealth, a state, and two contrasting territories      */
  /* ---------------------------------------------------------------------- */
  /*
   * Australia is the SECOND independent test of the `contracted` scope, and it earns the value by
   * repetition. The Australian Capital Territory runs no police of its own: the Commonwealth
   * Australian Federal Police delivers ACT community policing "on behalf of the ACT Government"
   * under a Commonwealth–ACT arrangement (a purchase agreement), so `policingScope: 'contracted'`
   * — exactly the RCMP pattern, in a second federation with a different constitutional
   * architecture. The Northern Territory, by contrast, runs its OWN police force, so
   * `policingScope: 'own'`. Two self-governing territories, one contracting and one not — the
   * discrimination the value exists to preserve.
   *
   * The sharp difference from Canada is NOT the scope value but the source of power, which the
   * existing `authorityBasis` field already captures: Australian STATES retain residual power
   * (Constitution s.107) and write their own criminal law (no national code), so they are
   * `reserved-powers` and `legalSystemScope: 'own'`, exactly like United States states — the
   * inverse of Canada. The TERRITORIES are self-governing under Commonwealth statute (the ACT
   * Self-Government Act 1988, the NT Self-Government Act 1978), amendable by the Commonwealth
   * Parliament, so they are `federal-plenary` (the DC / Yukon value, reused again).
   *
   * Samples: the Commonwealth, New South Wales (a large state), and the ACT and NT (the two
   * mainland self-governing territories). Not all states/territories; no public sub-national pages.
   */
  {
    id: 'au',
    slug: 'australia',
    name: 'Commonwealth of Australia',
    shortName: 'Australia',
    countryCode: 'AU',
    level: 'federal',
    // Criminal law is largely state, with Commonwealth offences under enumerated powers — a
    // shared legal order like the United States, not a single federal code like Canada.
    legalSystemScope: 'shared',
    policingScope: 'shared',
    courtScope: 'shared',
    prosecutionScope: 'shared',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'concurrent',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['au-constitution'],
    notes:
      'A federation in which the Commonwealth has only enumerated legislative powers (Constitution s.51) and the States retain the residue (s.107). There is no general Commonwealth criminal-law power and no national criminal code: each state and territory has its own criminal law, alongside Commonwealth offences for federal matters. Every modelled function is `shared` — the Commonwealth Australian Federal Police alongside state and territory police; the High Court and Federal Court alongside state and territory courts; the Commonwealth Director of Public Prosecutions alongside state and territory DPPs; and — there being no Commonwealth prison system — federal offenders held in state and territory prisons. Residual power is with the States, the inverse of Canada.',
    status: 'published',
  },
  {
    id: 'au-nsw',
    slug: 'new-south-wales',
    name: 'New South Wales',
    shortName: 'New South Wales',
    countryCode: 'AU',
    level: 'state',
    parentJurisdictionId: 'au',
    // A reserved-power state: the Constitution saves its powers (s.107), the residue is the
    // state's — exactly like a United States state (and the inverse of a Canadian province).
    authorityBasis: 'reserved-powers',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'exclusive-subnational',
      prosecution: 'exclusive-subnational',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['au-constitution'],
    notes:
      'A large state, the model of Australian sub-national justice. New South Wales writes its own criminal law, runs its own police (the New South Wales Police Force), its own courts, its own Director of Public Prosecutions and its own corrective services. Its powers are reserved by the Constitution (s.107), so authorityBasis is `reserved-powers` and legalSystemScope is `own` — the United States pattern, the inverse of a Canadian province, which administers a single federal Criminal Code. This is the contrast that shows the `contracted` policing value is a real discrimination, not the norm: a state runs its own force.',
    status: 'published',
  },
  {
    id: 'au-act',
    slug: 'australian-capital-territory',
    name: 'Australian Capital Territory',
    shortName: 'ACT',
    countryCode: 'AU',
    level: 'territory',
    parentJurisdictionId: 'au',
    // Self-governing under a Commonwealth statute (ACT Self-Government Act 1988), amendable by
    // the Commonwealth Parliament — federal-plenary, the DC / Yukon value reused.
    authorityBasis: 'federal-plenary',
    legalSystemScope: 'own',
    // THE Australian test of `contracted`: the ACT runs no police of its own; the Commonwealth
    // AFP delivers ACT community policing on behalf of the ACT Government under a purchase
    // arrangement.
    policingScope: 'contracted',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'framework',
      courts: 'exclusive-subnational',
      prosecution: 'exclusive-subnational',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['au-constitution'],
    notes:
      "The independent second instance of contract policing. The ACT is self-governing under the Commonwealth's Australian Capital Territory (Self-Government) Act 1988, so authorityBasis is `federal-plenary`. It makes its own criminal law and runs its own courts, Director of Public Prosecutions and corrective services — but it runs NO police force of its own: the Australian Federal Police, a Commonwealth institution, delivers ACT community policing (through its 'ACT Policing' unit) 'on behalf of the ACT Government' under a purchase arrangement. So policingScope is `contracted`, the same value the Canada pilot added for RCMP contract policing — earned here by repetition in a second, differently structured federation. The provider's identity (the AFP) and the arrangement live in the law-enforcement prose.",
    status: 'published',
  },
  {
    id: 'au-nt',
    slug: 'northern-territory',
    name: 'Northern Territory',
    shortName: 'Northern Territory',
    countryCode: 'AU',
    level: 'territory',
    parentJurisdictionId: 'au',
    authorityBasis: 'federal-plenary',
    legalSystemScope: 'own',
    // The contrast with the ACT: the NT runs its OWN police force.
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'exclusive-subnational',
      prosecution: 'exclusive-subnational',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['au-constitution'],
    notes:
      'The contrast that makes `contracted` a real distinction. Like the ACT, the Northern Territory is self-governing under a Commonwealth statute (the Northern Territory (Self-Government) Act 1978), so authorityBasis is `federal-plenary`. But unlike the ACT, the NT runs its OWN police force (the Northern Territory Police Force) under its own legislation — so policingScope is `own`, not `contracted`. Two self-governing territories with the same source of power, differing only in whether they procure policing from the Commonwealth: the ACT does, the NT does not.',
    status: 'published',
  },
];

/* -------------------------------------------------------------------------- */
/* Lookup helpers                                                             */
/* -------------------------------------------------------------------------- */

export function getJurisdiction(id: string): JurisdictionRecord | undefined {
  return JURISDICTIONS.find((j) => j.id === id);
}

export function getJurisdictionsForCountry(countryCode: string): JurisdictionRecord[] {
  return JURISDICTIONS.filter((j) => j.countryCode === countryCode);
}

/** Levels that may exist without a parent. Everything else must be attached to one. */
const ROOT_LEVELS: readonly JurisdictionLevel[] = [
  'international',
  'supranational',
  'country',
  /*
   * `federal` is a ROOT level, not a child of `country`. The Bund is the national-level record
   * for Germany exactly as `fr` is for France; the level says how power is organised, not how
   * deep the record sits. The France pilot never created a `federal` record, so this rule went
   * untested — Germany is what exposed it.
   */
  'federal',
];

/**
 * Coverage states at which a jurisdiction may NOT assert any researched functional scope.
 * `in-research` is deliberately excluded: it is the state for a jurisdiction whose
 * constitutional basis is sourced but whose institutional detail is not, which is exactly
 * where every French overseas record sits.
 */
const UNRESEARCHED_COVERAGE = ['none', 'planned'] as const;

/** Coverage states that require at least one source. */
const SOURCED_COVERAGE = ['in-research', 'partial', 'established'] as const;

const FUNCTION_FIELDS = [
  'legalSystemScope',
  'policingScope',
  'courtScope',
  'prosecutionScope',
  'correctionalScope',
] as const;

/**
 * Validation rules for a jurisdiction record.
 *
 * Returns a list of human-readable problems; an empty list means valid. Implemented as a pure
 * function rather than inline in a test so the invalid combinations can be exercised directly
 * with synthetic records, instead of only being asserted against the registry that happens to
 * be correct today.
 */
export function validateJurisdiction(
  record: JurisdictionRecord,
  all: readonly JurisdictionRecord[] = JURISDICTIONS,
): string[] {
  const problems: string[] = [];

  if (!/^[a-z0-9-]+$/.test(record.slug)) {
    problems.push(`slug "${record.slug}" must be lowercase kebab-case`);
  }

  const isRoot = ROOT_LEVELS.includes(record.level);

  if (isRoot && record.parentJurisdictionId) {
    problems.push(`level "${record.level}" must not have a parent jurisdiction`);
  }
  if (!isRoot && !record.parentJurisdictionId) {
    problems.push(`level "${record.level}" requires a parentJurisdictionId`);
  }

  if (record.parentJurisdictionId) {
    const parent = all.find((j) => j.id === record.parentJurisdictionId);
    if (!parent) {
      problems.push(`parentJurisdictionId "${record.parentJurisdictionId}" does not resolve`);
    } else if (parent.id === record.id) {
      problems.push('a jurisdiction cannot be its own parent');
    } else if (parent.countryCode !== record.countryCode) {
      problems.push(
        `parent "${parent.id}" is in country ${parent.countryCode} but this record is in ${record.countryCode}`,
      );
    }
  }

  // Cycle detection, independent of the parent-exists check above.
  const seen = new Set<string>([record.id]);
  let cursor = record.parentJurisdictionId;
  while (cursor) {
    if (seen.has(cursor)) {
      problems.push(`parent chain contains a cycle at "${cursor}"`);
      break;
    }
    seen.add(cursor);
    cursor = all.find((j) => j.id === cursor)?.parentJurisdictionId;
  }

  if (record.temporalScope !== 'current' && !record.historicalPeriod) {
    problems.push(`temporalScope "${record.temporalScope}" requires a historicalPeriod`);
  }
  if (record.temporalScope === 'current' && record.historicalPeriod) {
    problems.push('a current jurisdiction must not carry a historicalPeriod');
  }

  if (record.alsoExercisesLevels?.includes(record.level)) {
    problems.push(`alsoExercisesLevels repeats the record's own level "${record.level}"`);
  }

  const unresearched = (UNRESEARCHED_COVERAGE as readonly string[]).includes(record.coverage);

  if (
    (SOURCED_COVERAGE as readonly string[]).includes(record.coverage) &&
    record.sources.length === 0
  ) {
    problems.push(`coverage "${record.coverage}" requires at least one source`);
  }

  /*
   * The coverage ceiling, mirroring the country rule. A jurisdiction that has not been
   * researched may not assert a researched functional scope — `unknown` is the only honest
   * value, and it is never interchangeable with `none`. This is what stops an unresearched
   * territory from silently inheriting the metropolitan arrangement.
   */
  if (unresearched) {
    for (const field of FUNCTION_FIELDS) {
      if (record[field] !== 'unknown') {
        problems.push(
          `coverage "${record.coverage}" but ${field} is "${record[field]}" — ` +
            'unresearched jurisdictions must record every functional scope as "unknown"',
        );
      }
    }
  }

  /*
   * Federal-competence rule (Germany finding). Where a record sits under a `federal` parent,
   * who legislates and who administers are different questions, and leaving the legislative
   * dimension blank silently implies the administrative answer covers both.
   */
  const parent = all.find((j) => j.id === record.parentJurisdictionId);
  if (
    parent?.level === 'federal' &&
    record.authorityBasis !== 'inherent-sovereign' &&
    !unresearched &&
    (!record.legislativeCompetence || Object.keys(record.legislativeCompetence).length === 0)
  ) {
    problems.push(
      'a researched sub-national record under a federal parent must declare ' +
        'legislativeCompetence — who administers a function does not establish who legislates on it',
    );
  }

  /*
   * Inherent-sovereign records (US finding). Their parent link is geographic containment, not
   * derivation of authority, and that inversion must never be left implicit — a reader or a
   * later editor could otherwise read the parent link as "subdivision of". Two guards:
   * the record must explain the non-derivation in its notes, and the legislative-competence
   * rule above does not apply, because inherent sovereignty is not a division of the parent's
   * legislative competence.
   */
  if (record.authorityBasis === 'inherent-sovereign') {
    if (!record.notes || record.notes.trim().length === 0) {
      problems.push(
        'an inherent-sovereign jurisdiction must explain in notes that its parent link is ' +
          'geographic containment, not derivation of authority',
      );
    } else if (!/inherent|not derived|not a subdivision|geographic/i.test(record.notes)) {
      problems.push(
        'an inherent-sovereign jurisdiction must state in notes that its authority is not ' +
          'derived from its parent (e.g. "inherent", "not derived", "geographic")',
      );
    }
  }

  if (record.status === 'published' && record.sources.length === 0) {
    problems.push('a published jurisdiction requires at least one source');
  }

  return problems;
}

/** Scopes that assert a researched finding, as opposed to an admission of ignorance. */
export function isResearchedScope(scope: FunctionScope): boolean {
  return scope !== 'unknown';
}
