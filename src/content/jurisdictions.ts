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

  /* ---------------------------------------------------------------------- */
  /* Spain — the national level and four asymmetric autonomous communities   */
  /* ---------------------------------------------------------------------- */
  /*
   * Spain is a decentralised UNITARY state (its Constitution, art. 145.1, forbids federation),
   * and it is the platform's test of ASYMMETRIC decentralisation. The model needs no new field
   * for the asymmetry: it is a set of divergent per-function scope values across sibling
   * autonomous-community records, which is exactly what the tier-vs-unit rule was built to carry.
   *
   *  - POLICING and CORRECTIONS are devolved to SOME communities and not others. Catalonia (the
   *    Mossos d'Esquadra) and the Basque Country (the Ertzaintza) run their own ordinary police
   *    AND their own prison systems (penitentiary administration transferred by Real Decreto
   *    3482/1983 and Real Decreto 474/2021). Navarre runs its own police (the Policía Foral) but
   *    NOT its own prisons. Most other communities (Andalusia stands for them here) run neither
   *    and rely on the national forces and the central prison administration. So policingScope and
   *    correctionalScope vary community by community — `own` where devolved, `national` where not.
   *
   *  - COURTS and PROSECUTION are NOT devolved to any community: the judiciary is unitary
   *    (art. 117.5, unidad jurisdiccional) and the Ministerio Fiscal is a single national body
   *    (art. 124). So courtScope and prosecutionScope are `national` for every community, even
   *    those with their own police and prisons — the model discriminating within one community.
   *
   *  - LEGISLATION on criminal, penitentiary and procedural law is EXCLUSIVELY the State's
   *    (art. 149.1.6); the communities only ADMINISTER. That administration/legislation split is
   *    stated in the notes rather than the schema, and `authorityBasis` is left unset for every
   *    community — their competences are assumed via their Statutes within the Constitution, the
   *    default relationship, not a distinct source of authority.
   *
   * Samples: Spain, Catalonia and the Basque Country (own police + own prisons), Navarre (own
   * police, central prisons) and Andalusia (neither). Not all 17 communities; no public
   * sub-national pages.
   */
  {
    id: 'es',
    slug: 'spain',
    name: 'Kingdom of Spain',
    shortName: 'Spain',
    countryCode: 'ES',
    level: 'country',
    legalSystemScope: 'own',
    // Policing and corrections are partly devolved to some communities, so both are `shared`
    // between the State and the autonomous police / prison systems; courts and prosecution stay
    // unitary/national.
    policingScope: 'shared',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'shared',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['es-constitution'],
    notes:
      "A decentralised unitary state — the Constitution (art. 145.1) forbids federation of the Autonomous Communities. Criminal, penitentiary and procedural LEGISLATION is exclusively the State's (art. 149.1.6), and the justice system is unitary (art. 117.5) with a single national prosecution service (art. 124). But the ADMINISTRATION of two functions is devolved asymmetrically: some communities run their own police (art. 149.1.29) and some run their own prison systems, so policing and corrections are `shared` between the State and the communities, while courts and prosecution remain the State's own. The national security forces are the Cuerpo Nacional de Policía and the Guardia Civil, under the Ministry of the Interior.",
    status: 'published',
  },
  {
    id: 'es-catalonia',
    slug: 'catalonia',
    name: 'Catalonia (Catalunya)',
    shortName: 'Catalonia',
    countryCode: 'ES',
    level: 'autonomous-community',
    parentJurisdictionId: 'es',
    // authorityBasis deliberately unset: competences are assumed via the Statute of Autonomy
    // within the Constitution — the ordinary relationship, not a distinct source of authority.
    legalSystemScope: 'national',
    // Own ordinary police (the Mossos d'Esquadra) and own prison administration (transferred).
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['es-constitution'],
    notes:
      "The most fully devolved community for this platform. Catalonia runs its own ordinary police — the Mossos d'Esquadra (named in Catalan) — under art. 149.1.29 and its Statute, and its own prison system: penitentiary administration was transferred by Real Decreto 3482/1983 (effective 1 January 1984). So policingScope and correctionalScope are `own`. But its courts are part of the single national judiciary (art. 117.5), topped in the community by a Tribunal Superior de Justicia (art. 152), and prosecution is the national Ministerio Fiscal — so courtScope and prosecutionScope are `national`. And the criminal and penitentiary LAW it applies is the State's (art. 149.1.6); Catalonia administers, it does not legislate the crime.",
    status: 'published',
  },
  {
    id: 'es-basque',
    slug: 'basque-country',
    name: 'Basque Country (Euskadi / País Vasco)',
    shortName: 'Basque Country',
    countryCode: 'ES',
    level: 'autonomous-community',
    parentJurisdictionId: 'es',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['es-constitution'],
    notes:
      "Like Catalonia in its devolution, on a different timeline. The Basque Country runs its own ordinary police — the Ertzaintza (named in Basque) — under the Statute of Gernika and art. 149.1.29, and it received the transfer of penitentiary administration more recently, by Real Decreto 474/2021 (effective 1 October 2021), so correctionalScope is now `own`. Its courts remain part of the unitary national judiciary and prosecution the national Ministerio Fiscal (courtScope and prosecutionScope `national`), and the criminal and penitentiary legislation is the State's (art. 149.1.6).",
    status: 'published',
  },
  {
    id: 'es-navarre',
    slug: 'navarre',
    name: 'Navarre (Navarra / Nafarroa)',
    shortName: 'Navarre',
    countryCode: 'ES',
    level: 'autonomous-community',
    parentJurisdictionId: 'es',
    legalSystemScope: 'national',
    // Its own police corps (the Policía Foral) but NOT an integral force: it SHARES ordinary
    // policing with the national forces (its exclusive competence is essentially traffic), so
    // `shared`, not `own` — the middle of the asymmetry gradient. And no prison transfer.
    policingScope: 'shared',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['es-constitution'],
    notes:
      "The middle case of the asymmetry gradient. Navarre has its own police corps — the Policía Foral — under its foral regime (LORAFNA) and art. 149.1.29, but unlike the Mossos d'Esquadra and the Ertzaintza it is NOT an integral force that has displaced the national police: it shares ordinary public-security duties with the Cuerpo Nacional de Policía and the Guardia Civil (its exclusive competence is essentially traffic), so policingScope is `shared`, not `own`. And it did NOT receive the transfer of penitentiary administration, so its prisons are run by the central Secretaría General de Instituciones Penitenciarias (`national`). Its courts and prosecution are the unitary national ones — shared policing, national everything else, between Catalonia/Basque (own police, own prisons) and Andalusia (national throughout).",
    status: 'published',
  },
  {
    id: 'es-andalusia',
    slug: 'andalusia',
    name: 'Andalusia (Andalucía)',
    shortName: 'Andalusia',
    countryCode: 'ES',
    level: 'autonomous-community',
    parentJurisdictionId: 'es',
    legalSystemScope: 'national',
    // No autonomous police and no transferred prisons — the national forces and central
    // administration do the work.
    policingScope: 'national',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['es-constitution'],
    notes:
      'The no-devolution case, standing for the majority of communities. Andalusia has no full autonomous police force of its own — policing is done by the national Cuerpo Nacional de Policía and Guardia Civil — and its prisons are run by the central Secretaría General de Instituciones Penitenciarias. So every modelled function is `national`: the community is a real political entity with a Statute and assembly, but it has not assumed the police or prison competences that Catalonia, the Basque Country and Navarre have. This is why the asymmetry is recorded per community, not as a single national fact.',
    status: 'published',
  },

  /* ---------------------------------------------------------------------- */
  /* Switzerland — the Confederation and three cantons, one per language     */
  /* ---------------------------------------------------------------------- */
  /*
   * Switzerland is the most decentralised federation on the platform, and it forces no new field
   * — it is Brazil's structural twin (reserved-power sub-units applying nationally unified codes)
   * with cantonal sovereignty on top:
   *
   *  - The CANTONS are SOVEREIGN, exercising all rights not vested in the Confederation
   *    (Constitution art. 3) — so `authorityBasis: 'reserved-powers'`, like the United States,
   *    Australia and Brazil. Their legal-system scope is `national` (the civil and criminal LAW
   *    and procedure are federal and unified — arts. 122/123 — one Civil Code, one Criminal Code,
   *    one Criminal Procedure Code), but they ADMINISTER: police, courts, prosecution and the
   *    execution of penalties are cantonal.
   *
   *  - There is NO national general police force: fedpol is a narrow federal body, not
   *    superordinate to the cantonal police, so `policingScope: 'own'` at the canton and `shared`
   *    at the Confederation. Prosecution is cantonal by default (Criminal Procedure Code art. 22)
   *    with a narrow federal exception (the Office of the Attorney General), so `prosecutionScope:
   *    'own'` at the canton. Courts are cantonal, applying the federal procedure code, under the
   *    Federal Supreme Court apex — `courtScope: 'own'`.
   *
   *  - CORRECTIONS are cantonal, but the cantons POOL them through three inter-cantonal
   *    concordats (Constitution art. 48) that jointly run correctional institutions — a PEER
   *    arrangement, not one order procuring from another. So `correctionalScope: 'shared'`, the
   *    value for jointly-exercised functions — NOT `contracted`. The concordats are described in
   *    prose, not a typed entity.
   *
   * Samples: the Confederation and one canton per official language — Zürich (German), Geneva
   * (French) and Ticino (Italian). Not all 26 cantons; no public canton pages.
   */
  {
    id: 'ch',
    slug: 'switzerland',
    name: 'Swiss Confederation',
    shortName: 'Switzerland',
    countryCode: 'CH',
    level: 'federal',
    // The civil and criminal LAW is federal and unified; only the administration is cantonal —
    // so the legal system is `own` (national/unified) at the Confederation, `national` at the
    // canton, exactly as in Brazil.
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
    sources: ['ch-constitution'],
    notes:
      'A federation of 26 sovereign cantons (Constitution art. 3) in which the substantive law is federal and unified — the Confederation legislates civil and criminal law and procedure (arts. 122/123), giving one Civil Code, one Criminal Code and one Criminal Procedure Code — but the administration of justice is cantonal. Every modelled function is `shared`: there is a narrow federal police (fedpol) alongside the cantonal police, the Federal Supreme Court above the cantonal courts, a federal Office of the Attorney General alongside the cantonal prosecutors, and no federal prison system at all — the execution of penalties is entirely cantonal, pooled through inter-cantonal concordats. Federal law is enacted and equally authentic in German, French and Italian.',
    status: 'published',
  },
  {
    id: 'ch-zurich',
    slug: 'zurich',
    name: 'Canton of Zürich',
    shortName: 'Zürich',
    countryCode: 'CH',
    level: 'state',
    parentJurisdictionId: 'ch',
    // Sovereign canton, residual power (art. 3) — reserved-powers, like a US or Australian state.
    authorityBasis: 'reserved-powers',
    // The law is federal and unified, so the canton has no legal system of its own.
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ch-constitution'],
    notes:
      'The German-speaking sample. Like every canton, Zürich is sovereign in the powers not vested in the Confederation (art. 3), so authorityBasis is `reserved-powers`; but the civil and criminal law it applies is the federal, unified codes, so legalSystemScope is `national`. It runs its own police (the Kantonspolizei Zürich), its own courts and its own prosecution service (Staatsanwaltschaft), which apply the federal Criminal Procedure Code — so policing, courts and prosecution are `own`. Its corrections are `shared`: the execution of penalties is a cantonal task, but Zürich runs it through the Eastern Switzerland concordat, one of the three inter-cantonal concordats that pool correctional institutions under art. 48.',
    status: 'published',
  },
  {
    id: 'ch-geneva',
    slug: 'geneva',
    name: 'Canton of Geneva (Genève)',
    shortName: 'Geneva',
    countryCode: 'CH',
    level: 'state',
    parentJurisdictionId: 'ch',
    authorityBasis: 'reserved-powers',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ch-constitution'],
    notes:
      "The French-speaking sample, structurally identical to Zürich but naming its institutions in French — its own police (police cantonale), courts and ministère public — and, for corrections, a member of the Latin concordat (Concordat latin) rather than the Eastern one. The identical scope values across a German and a French canton show that the model represents Switzerland's uniformity of structure beneath its multilingualism; the difference is of language and concordat, recorded in prose, not of scope.",
    status: 'published',
  },
  {
    id: 'ch-ticino',
    slug: 'ticino',
    name: 'Canton of Ticino',
    shortName: 'Ticino',
    countryCode: 'CH',
    level: 'state',
    parentJurisdictionId: 'ch',
    authorityBasis: 'reserved-powers',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'shared',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'concurrent',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['ch-constitution'],
    notes:
      "The Italian-speaking sample, the third official language. Ticino runs its own police (polizia cantonale), courts and public prosecution (ministero pubblico) applying the federal codes, and — like Geneva — belongs to the Latin concordat for the execution of penalties. Its scope values are identical to Zürich's and Geneva's, which is the point: one federal law, cantonally administered, in three languages.",
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Netherlands (Batch A) — decentralised unitary state; justice all national  */
  /* -------------------------------------------------------------------------- */
  {
    id: 'nl',
    slug: 'netherlands',
    name: 'Netherlands',
    shortName: 'Netherlands',
    countryCode: 'NL',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['nl-constitution', 'nl-gov-police'],
    notes:
      "The country of the Netherlands, a decentralised UNITARY state — not a federation. Provinces and municipalities have autonomous administrative powers (Constitution art. 124), but the four justice functions are national competence, established by Act of Parliament under Chapter 6 of the Grondwet: one court system culminating in the Hoge Raad, one Public Prosecution Service (Openbaar Ministerie), one national police force (Politiewet 2012), and prisons run by the central Custodial Institutions Agency (DJI). A single country-level record therefore states the arrangement accurately; there is no sub-national tier that administers any of the four. Two attribute facts stay in the module prose rather than the schema: the OM is part of the judiciary but under the political responsibility of the Minister of Justice and Security (not an independent prosecutor), and art. 120 forbids judicial review of the constitutionality of statutes (there is no constitutional court). 'NL' here is the European country of the Netherlands, not the wider Kingdom (Aruba, Curaçao and Sint Maarten run their own justice systems, sharing the Hoge Raad as court of cassation) — that Kingdom asymmetry is noted in prose and not modelled here.",
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Belgium (Batch A) — FEDERAL state, but justice functions are FEDERAL        */
  /* competences. The inverse of Germany: one federal record, all functions own. */
  /* -------------------------------------------------------------------------- */
  {
    id: 'be',
    slug: 'belgium',
    name: 'Belgium',
    shortName: 'Belgium',
    countryCode: 'BE',
    level: 'federal',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'exclusive-federal',
      courts: 'exclusive-federal',
      prosecution: 'exclusive-federal',
      corrections: 'exclusive-federal',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['be-constitution', 'be-police-law-1998'],
    notes:
      'Belgium is a FEDERAL state (Constitution art. 1, "a federal State composed of Communities and Regions") — but, unlike Germany or the United States, the four justice functions are FEDERAL competences, held and administered at the federal level, not devolved to the Communities or Regions. The Constitution establishes single national bodies "for all Belgium": one Constitutional Court (art. 142), one Court of Cassation (art. 147, rendered "Supreme Court" in the official English translation), and one High Council of Justice and constitutionally independent prosecution (art. 151). Prisons are run by the federal FPS Justice and the police are the federal-plus-local integrated service of the Law of 7 December 1998. So the jurisdiction model represents Belgium as a single `federal` record with every function `own` (federally administered) and every legislative competence `exclusive-federal` — which is the INVERSE of Germany, whose federal record is `shared` because the Länder administer justice. This is why Belgium needs NO new schema: the distinction between \'federal and justice-devolved\' (Germany, US) and \'federal but justice-centralised\' (Belgium) is carried entirely by the scope values. No Community or Region record is created, because none of them does any of the four justice functions — a record exists only where it does institutional work. Youth-justice competence has partly moved to the Communities under successive state reforms, but the current allocation was not researched and is noted only in prose.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Denmark (Batch A) — unitary; justice all national                          */
  /* -------------------------------------------------------------------------- */
  {
    id: 'dk',
    slug: 'denmark',
    name: 'Denmark',
    shortName: 'Denmark',
    countryCode: 'DK',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['dk-constitution', 'dk-ejustice-justice'],
    notes:
      'Denmark (Danmark), a unitary constitutional monarchy under the 1953 Constitutional Act. All four justice functions are national, held under the Ministry of Justice: one court system culminating in the Supreme Court (Højesteret), one Prosecution Service (Anklagemyndigheden), one national police (Rigspolitiet, deconcentrated into 12 districts), and one Prison and Probation Service (Kriminalforsorgen). A single country-level record states the arrangement accurately. Two facts stay in prose: prosecution and police are INTEGRATED under a single district head — the Police Commissioner (politidirektør) is both the head of the police district and the local prosecutor, both under the Ministry of Justice — and the courts alone (no separate constitutional or administrative court) decide constitutional and administrative questions (Constitution §63). Prosecution is under the Ministry of Justice (not independent), even as the courts are constitutionally independent of the executive (§62). Scope note: this is the country of Denmark; the Faroe Islands and Greenland are self-governing within the Realm and each forms its own court and police district under statutory Home Rule/Self-Government — an asymmetric, statutory arrangement (not federalism), noted in prose and not modelled as separate records here.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Norway (Batch A) — unitary, non-EU; justice all national                   */
  /* -------------------------------------------------------------------------- */
  {
    id: 'no',
    slug: 'norway',
    name: 'Norway',
    shortName: 'Norway',
    countryCode: 'NO',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['no-constitution', 'no-domstol-courts'],
    notes:
      'Norway (Norge), a unitary, decentralised (non-federal) constitutional monarchy under the 1814 Constitution, and a non-EU state (EEA/Schengen). All four justice functions are national, under the Ministry of Justice and Public Security: one court system culminating in the Supreme Court (Høyesterett), one Prosecution Authority (Påtalemyndigheten) headed by the Director of Public Prosecutions (Riksadvokaten), one national police (Politiet, in 12 districts under the National Police Directorate), and one Correctional Service (Kriminalomsorgen). Municipalities and counties exist but run none of the four. A single country-level record states the arrangement accurately. Two facts stay in prose: the prosecution is strongly INDEPENDENT — only the King in Council, not the Minister of Justice, may give it general instructions, and it directs criminal investigation, with its lowest tier embedded inside the police (police lawyers holding prosecutorial powers); and constitutional review is exercised by the ordinary courts (Constitution art. 89), so there is no separate constitutional court. The prosecutor-led, police-integrated investigation is a functional arrangement, not a territorial or federal one, and needs no new schema.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Sweden (Batch A) — unitary; constitutional agency autonomy (ministerstyre) */
  /* -------------------------------------------------------------------------- */
  {
    id: 'se',
    slug: 'sweden',
    name: 'Sweden',
    shortName: 'Sweden',
    countryCode: 'SE',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['se-constitution', 'se-polisen'],
    notes:
      'Sweden (Sverige), a unitary constitutional monarchy governed by four fundamental laws, the central one being the Instrument of Government (Regeringsformen, 1974). All four justice functions are national, exercised by central-government administrative authorities: one Police Authority (Polismyndigheten, a single national authority with seven regions), one Prosecution Authority (Åklagarmyndigheten), one Prison and Probation Service (Kriminalvården, a unified corrections body), and two branches of courts. A single country-level record states the arrangement accurately. The defining fact stays in prose: the Instrument of Government (Ch. 12 Art. 2) prohibits ministerstyre — no public authority, including the Government or a minister, may determine how an administrative authority decides an individual case or applies the law, so the police, prosecution and prison service are constitutionally insulated from case-level ministerial direction (a stronger agency autonomy than "under the justice ministry"). Two further prose facts: the courts are in two branches, each with its own apex (the Supreme Court, Högsta domstolen, and the Supreme Administrative Court, Högsta förvaltningsdomstolen; Ch. 11 Art. 1), and there is no constitutional court — every court exercises diffuse constitutional review (Ch. 11 Art. 14). None of this needs a new schema value.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Finland (Batch A) — unitary, bilingual, EU. Mainland is national; Åland is  */
  /* an autonomous region with policing competence (validating autonomous-       */
  /* community by reuse), while courts/prosecution/corrections stay with the      */
  /* State.                                                                      */
  /* -------------------------------------------------------------------------- */
  {
    id: 'fi',
    slug: 'finland',
    name: 'Finland',
    shortName: 'Finland',
    countryCode: 'FI',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['fi-constitution', 'fi-intermin-police'],
    notes:
      "Finland (Suomi / Finland), a unitary, bilingual (Finnish and Swedish, Constitution s. 17) parliamentary republic and EU member state, under the 1999 Constitution. On the mainland all four justice functions are national. Two facts stay in prose: there are TWO supreme courts — the Supreme Court (korkein oikeus) for civil/criminal matters and the Supreme Administrative Court (korkein hallinto-oikeus) for administrative matters (s. 3, s. 99) — and no constitutional court (review is ex-ante by Parliament's Constitutional Law Committee and diffuse under s. 106); and the police sit under the Ministry of the Interior while the courts, prosecution and prisons sit under the Ministry of Justice (a split of ministries the model records in prose, not schema). The prosecution (Syyttäjälaitos) is decisionally independent but within the Ministry of Justice administrative branch. The Åland asymmetry is modelled separately (fi-aland).",
    status: 'published',
  },
  {
    id: 'fi-aland',
    slug: 'aland',
    name: 'Åland',
    shortName: 'Åland',
    countryCode: 'FI',
    level: 'autonomous-community',
    parentJurisdictionId: 'fi',
    legalSystemScope: 'national',
    policingScope: 'own',
    courtScope: 'national',
    prosecutionScope: 'national',
    correctionalScope: 'national',
    legislativeCompetence: {
      policing: 'exclusive-subnational',
      'legal-system': 'exclusive-federal',
      courts: 'exclusive-federal',
      prosecution: 'exclusive-federal',
      corrections: 'exclusive-federal',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['fi-autonomy-act'],
    notes:
      'Åland (Ahvenanmaa), the Swedish-speaking autonomous region of Finland, modelled at the `autonomous-community` level minted by the Spain pilot — it is the same category of thing (an autonomous, legislature-bearing region), not a French administrative `region`. Under the Act on the Autonomy of Åland (1144/1991), Åland holds legislative competence over "public order and security", i.e. POLICING (s. 18(6), with State exceptions for firearms and rescue services), so policingScope is `own`. But criminal law, the courts, the preliminary-investigation/prosecution framework and the enforcement of sentences are reserved to the State (s. 27, subparagraphs 22–24), so courtScope, prosecutionScope and correctionalScope are `national`. This single-function devolution — one autonomous region running its own policing over a national baseline for everything else — is the Finland asymmetry, and it reuses existing values with no new schema. The Autonomy Act establishes the COMPETENCE allocation; the name and administration of a distinct Åland police organisation were not confirmed from a primary source, so only the competence is modelled and the parent-derived legislativeCompetence records that policing is legislated sub-nationally (by the Åland Lagting) while the reserved functions are legislated by the State (`exclusive-federal` here meaning the central/State level, Finland being unitary).',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Italy (Batch B) — regionalised unitary; justice fully national (the         */
  /* contrast to Finland's Åland: special-autonomy regions hold NO justice).     */
  /* -------------------------------------------------------------------------- */
  {
    id: 'it',
    slug: 'italy',
    name: 'Italy',
    shortName: 'Italy',
    countryCode: 'IT',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['it-constitution', 'it-legge-121-1981'],
    notes:
      'Italy (Italia), a regionalised unitary ("Regional State"), not a federation: the Republic is made of municipalities, provinces, metropolitan cities, regions and the State (Constitution art. 114), with 20 regions of which five have special autonomy (art. 116). But the four justice functions are ALL exclusive State competence and fully national — art. 117(2) reserves to the State subparagraph (l) "jurisdiction and procedural law; civil and criminal law; administrative justice", (h) "public order and security, save for local administrative police", and (d) defence; and even the maximum devolution art. 116(3) allows over "justice" is limited to the organizational requirements of the Justice of the Peace. So a single country-level record with all functions `own` states the arrangement accurately, and NO special-autonomy region record is created — the exact opposite of Finland\'s Åland, which does hold policing competence. Facts kept in prose: the prosecution (Pubblico Ministero) is part of the independent judiciary (prosecutors and judges are both magistrati under the same self-governing CSM) with mandatory prosecution (art. 112); there are MULTIPLE national police forces (Polizia di Stato, the military Arma dei Carabinieri, and the Guardia di Finanza), centrally coordinated by the Interior Ministry, with only local administrative police (polizia locale) left to the regions/municipalities; and there are three top courts — the Court of Cassation, the Constitutional Court and the Council of State.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Portugal (Batch B) — unitary with autonomous regions; justice national     */
  /* -------------------------------------------------------------------------- */
  {
    id: 'pt',
    slug: 'portugal',
    name: 'Portugal',
    shortName: 'Portugal',
    countryCode: 'PT',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['pt-constitution', 'pt-loic'],
    notes:
      'Portugal (Portugal), a unitary state (Constitution art. 6(1), "the state is unitary") with a special insular-autonomy feature: the Azores and Madeira are autonomous regions (art. 6(2), arts. 225–234) with their own political-administrative statutes. But the four justice functions are ALL national — criminal law and the organisation of the courts and the Public Prosecution Service are reserved to Parliament (art. 165(1)(c) and (p)) and expressly excluded from regional legislation (art. 227(1)(b)), the security-forces regime is reserved (art. 164(1)(u)) with each force having "a sole organisational structure for the whole of Portuguese territory" (art. 272(4)), and prisons run under a single national directorate. So a single country-level record with all functions `own` states it accurately, and NO autonomous-region record is created — the regions hold no justice competence, the same result as Italy and the opposite of Finland\'s Åland. (The only region-adjacent element is a regional section of the national Court of Auditors, art. 214(4) — a decentralised chamber of a national court, not devolved competence.) Facts kept in prose: the Public Prosecution Service (Ministério Público) is constitutionally AUTONOMOUS, with "its own statute and autonomy" (art. 219(2)), independent of both the judiciary and the executive; there are multiple national police forces (Polícia Judiciária under the justice ministry; the militarised Guarda Nacional Republicana and the civilian Polícia de Segurança Pública under the interior ministry); and there are four top courts (the Supreme Court of Justice, the Supreme Administrative Court, the Constitutional Court and the Court of Auditors) alongside diffuse constitutional review by all courts (art. 204).',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Austria (Batch B) — federal state, justice fully federal (Belgium-type)     */
  /* -------------------------------------------------------------------------- */
  {
    id: 'at',
    slug: 'austria',
    name: 'Austria',
    shortName: 'Austria',
    countryCode: 'AT',
    level: 'federal',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'exclusive-federal',
      policing: 'exclusive-federal',
      courts: 'exclusive-federal',
      prosecution: 'exclusive-federal',
      corrections: 'exclusive-federal',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['at-bvg', 'at-stag'],
    notes:
      'Austria (Österreich) is a FEDERATION of nine Länder — but, like Belgium and unlike Germany or the United States, the four justice functions are FEDERAL competences of both legislation and execution, not devolved to the Länder. Art. 10(1) Z 6 B-VG places civil law, criminal law, "Justizpflege" (the administration of justice) and the protective institutions (the statutory basis for the prison system) in the Federation; Z 7 places the security police in the Federation save for the local security police; Art. 82(1) provides that "ordinary jurisdiction emanates from the Federation". So the model represents Austria as a single `federal` record with every function `own` (federally administered) and every core legislative competence `exclusive-federal` — the same pattern as Belgium, the INVERSE of Germany (whose Länder run courts, police and prisons). NO Land record is created: there are no Land ordinary courts, no Land criminal codes, no Land prosecution services, no Land prison systems and no separate Land police forces (the nine Landespolizeidirektionen are federal authorities under the Interior Minister, Art. 78a/78b). The only devolved judicial element is that each Land organises its own administrative court (Art. 10(1) Z 1 carve-out; Art. 129) — a minor court-organisation matter, not devolution of the core functions — and it is noted only in prose. Facts kept in prose: three co-equal apex courts (Oberster Gerichtshof, Verfassungsgerichtshof, Verwaltungsgerichtshof), none superior to the others; the prosecution (Staatsanwaltschaft) is an organ of the ordinary judiciary but is bound by instructions up a chain terminating at the Federal Minister of Justice (StAG §2(1)) — with a 2026 consultation draft, not enacted, that would replace that apex with an independent federal prosecution; and a single national police under the Interior Ministry.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Czechia (Batch B) — unitary; justice all national                          */
  /* -------------------------------------------------------------------------- */
  {
    id: 'cz',
    slug: 'czechia',
    name: 'Czechia',
    shortName: 'Czechia',
    countryCode: 'CZ',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['cz-constitution', 'cz-ejustice'],
    notes:
      'Czechia (Česká republika) is a unitary state under the Constitution of 1993. It is subdivided into self-governing regions (kraje) and municipalities, but all four justice functions are national/central competences — there is no federal, regional or special-autonomy tier holding any justice power. The regional courts (krajské soudy) and the fourteen regional police directorates are named after regions but are organs of the NATIONAL judiciary and the NATIONAL police, not regional government. So a single country-level record with all functions `own` states it accurately, and NO region record is created. Facts kept in prose: there are three apex courts — the Supreme Court (Nejvyšší soud) and a separate Supreme Administrative Court (Nejvyšší správní soud), both in Brno, plus a separate Constitutional Court (Ústavní soud, fifteen Justices for ten-year terms) outside the ordinary hierarchy; the prosecution (státní zastupitelství / Public Prosecutor\'s Office) is NOT an independent branch but "a component of the executive power … part of the Ministry of Justice", headed by the Prosecutor General\'s Office; the police (Policie ČR) are a single national force under the Interior Ministry; prisons (Vězeňská služba) run under the Ministry of Justice; and there is NO national self-governing judicial council — court administration is exercised by the Ministry of Justice, with only advisory councils within individual courts.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Poland (Batch B) — unitary; justice all national                           */
  /* -------------------------------------------------------------------------- */
  {
    id: 'pl',
    slug: 'poland',
    name: 'Poland',
    shortName: 'Poland',
    countryCode: 'PL',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['pl-constitution', 'pl-prokuratura'],
    notes:
      'Poland (Rzeczpospolita Polska) is a unitary state — Constitution art. 3, "The Republic of Poland shall be a unitary State". It has three-tier territorial self-government (gmina/powiat/województwo), but the Constitution assigns it NO justice competence: the administration of justice is a State function (art. 175(1)), the prosecution, police and prison service are each single national organisations, and no subnational tier holds any justice power. So a single country-level record with all functions `own` states it accurately, and NO region record is created. The one within-central-government nuance is that executive responsibility is split across two ministries — the Minister of Justice (courts administration, the prosecution via a statutory personal union, and the prison service) and the Minister of Internal Affairs (the police) — a functional split, not a territorial one. Facts kept in prose: there are three separate top bodies — the Supreme Court (Sąd Najwyższy, art. 183), a separate supreme administrative court (Naczelny Sąd Administracyjny, art. 184; "Chief Administrative Court" in the official constitutional translation), and the Constitutional Tribunal (Trybunał Konstytucyjny, arts. 188–190); the office of Prosecutor-General is held ex officio by the Minister of Justice (Law on the Prosecutor\'s Office 2016, art. 1 § 2); the police (Policja) are one national force under the interior minister and the prosecutor directs the pre-trial investigation; and the National Council of the Judiciary (Krajowa Rada Sądownictwa, arts. 186–187) safeguards judicial independence, its judicial members\' selection method having been changed by the enacted 2017 amendment — a contested area described on the country pages only by attribution to dated official and EU sources.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Greece (Batch B) — unitary, decentralised; justice all national            */
  /* -------------------------------------------------------------------------- */
  {
    id: 'gr',
    slug: 'greece',
    name: 'Greece',
    shortName: 'Greece',
    countryCode: 'GR',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['gr-constitution', 'gr-ejustice-courts'],
    notes:
      'Greece (Elláda) is a unitary, decentralised state (Constitution art. 101, "the administration of the State shall be organized according to the principle of decentralization"; art. 102, local government limited to local affairs) — NOT federal. All four justice functions are national/central: the courts are created by statute (art. 93(1)) with judges appointed by presidential decree (art. 88(1)); the prosecution is embedded in the national judiciary (arts. 87–88); the police (Hellenic Police) are a single national force; and the prisons are run by a central ministry. So a single country-level record with all functions `own` states it accurately, and NO region record is created. The one special-autonomy element is Mount Athos (Άγιον Όρος, art. 105) — a self-governed ecclesiastical-territorial part of the Greek State over which the State nonetheless retains EXCLUSIVE responsibility for public order and security, and whose monastic judicial power is defined by statute; it is a narrow ecclesiastical autonomy, not a general devolved justice tier, and is noted only in prose (not modelled as a region record). Facts kept in prose: there are THREE co-equal supreme courts — Άρειος Πάγος (Areios Pagos, the Supreme Civil and Criminal Court/court of cassation), Συμβούλιο της Επικρατείας (the Council of State/Supreme Administrative Court), and Ελεγκτικό Συνέδριο (the Court of Audit, art. 98(3) not subject to the Council of State) — and NO dedicated constitutional court: constitutional review is diffuse (art. 93(4), every court must decline to apply an unconstitutional statute), with a conflict-resolving Special Highest Court (art. 100); the prosecution (Εισαγγελία) is an independent part of the judiciary (the Ministry of Justice sets only its general service conditions) and directs/supervises police investigations; and, distinctively, the police AND the prisons are both under the Ministry of Citizen Protection, while the courts and prosecution fall under the Ministry of Justice for service conditions.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* New Zealand (Batch C) — unitary common-law; single national bodies          */
  /* -------------------------------------------------------------------------- */
  {
    id: 'nz',
    slug: 'new-zealand',
    name: 'New Zealand',
    shortName: 'New Zealand',
    countryCode: 'NZ',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['nz-constitution-act', 'nz-courts'],
    notes:
      'New Zealand (Aotearoa) is a unitary common-law state, NOT a federation: it has no states or provinces with justice competence, and local government (regional and district councils) runs none of the four functions. So all four are national, exercised by single national bodies — a unified court system topped by the Supreme Court, the Crown Law Office / Solicitor-General and Crown Solicitors for prosecution, the single New Zealand Police force, and the Department of Corrections — and a single country-level record with all functions `own` states it accurately; NO sub-national record is created. Distinctive features kept in prose (not new schema): the constitution is UNCODIFIED (the Constitution Act 1986 plus convention, common law and the Treaty of Waitangi / Te Tiriti o Waitangi), so Parliament is sovereign and the courts cannot strike down primary legislation — constitutional review is diffuse, and under the New Zealand Bill of Rights Act 1990 the courts may issue declarations of inconsistency but Parliament keeps the last word; tikanga Māori is a recognised source of law (the Supreme Court in Ellis v R [2022] NZSC 114 accepted it "was the first law of Aotearoa New Zealand"); the prosecution is a Law-Officer model (Attorney-General + Solicitor-General + private-practice Crown Solicitors), not a standalone Director of Public Prosecutions; and, in the common-law manner, the Police investigate and prosecutors do not direct investigations (Policing Act 2008 s 16(2) makes the Commissioner act independently of ministers on the investigation and prosecution of offences).',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* South Korea (Batch C) — unitary civil-law; dual apex; prosecution in flux   */
  /* -------------------------------------------------------------------------- */
  {
    id: 'kr',
    slug: 'south-korea',
    name: 'South Korea',
    shortName: 'South Korea',
    countryCode: 'KR',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['kr-constitution', 'kr-fjc-judiciary'],
    notes:
      'South Korea (대한민국, Daehanmin-guk) is a unitary state, NOT a federation (Constitution art. 3, a single indivisible territory; arts. 117–118 confine local self-government to local administrative/welfare matters, not justice). All four justice functions are national — a national judiciary, a single national Prosecution Service, the Korean National Police Agency, and the Korea Correctional Service — so a single country-level record with all functions `own` states it accurately, and NO sub-national record is created. The one genuine sub-national nuance is a 2021 autonomous-police (자치경찰) layer of metropolitan/provincial commissions for community policing, but the officers remain part of the single national force — administrative decentralisation, captured in prose, not a separate record. Facts kept in prose: there are TWO apex bodies — the Supreme Court (대법원, fourteen Justices) for the ordinary three-tier judiciary and a SEPARATE Constitutional Court (헌법재판소, nine adjudicators) with concentrated constitutional review (art. 107, a court refers a constitutionality question to it); the prosecution (검찰청) is under the executive (the Ministry of Justice), headed by the Prosecutor General; a 2020–2021 reform rebalanced investigative power so the police now lead most investigations while prosecutors retain warrant-request, supplementary-investigation and indictment roles; and an enacted 2025 restructuring (recorded as a scheduled change) is to abolish the Prosecution Service on 1 October 2026 and split it into an investigative agency under the Ministry of the Interior and Safety and an indictment office under the Ministry of Justice.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Singapore (Batch C) — unitary common-law city-state                        */
  /* -------------------------------------------------------------------------- */
  {
    id: 'sg',
    slug: 'singapore',
    name: 'Singapore',
    shortName: 'Singapore',
    countryCode: 'SG',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['sg-constitution', 'sg-cpc'],
    notes:
      "Singapore is a unitary common-law sovereign city-state — there is NO federal, state or provincial tier: the Constitution vests judicial power in a single Supreme Court and subordinate courts (art. 93) and establishes one Legislature (art. 38), with no distribution-of-powers lists. All four justice functions sit at the national level — one national judiciary, one national Public Prosecutor, the single Singapore Police Force, and the single Singapore Prison Service — so a single country-level record with all functions `own` states it accurately, and NO sub-national record is created. Facts kept in prose: the apex court is the Court of Appeal, with the High Court split (since a 2019/2021 restructuring) into an Appellate Division and a General Division (art. 94); constitutional review is diffuse, with NO dedicated constitutional court. The most distinctive feature is that the Attorney-General is BOTH the Government's legal adviser (art. 35(7)) AND the Public Prosecutor with discretionary power to institute, conduct or discontinue any prosecution (art. 35(8); Criminal Procedure Code s 11) — a deliberate fusion of adviser and prosecutor in one constitutional officer, who is not a Cabinet minister and is removable only via a judicial tribunal. The police (and specialist agencies) investigate and the Public Prosecutor decides charges (police-led, common-law investigation). Both the Singapore Police Force and the Singapore Prison Service are under the Ministry of Home Affairs. Honestly recorded absences: Singapore has no general public-sector ombudsman, no Paris-Principles national human-rights institution, and no dedicated independent police-complaints commission — these are stated as researched negatives, not gaps, with corruption handled by the Corrupt Practices Investigation Bureau in the Prime Minister's Office.",
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* India (Batch C) — federation; police/prosecution/prisons are STATE subjects */
  /* -------------------------------------------------------------------------- */
  {
    id: 'in',
    slug: 'india',
    name: 'Republic of India',
    shortName: 'India',
    countryCode: 'IN',
    level: 'federal',
    legalSystemScope: 'own',
    policingScope: 'shared',
    courtScope: 'own',
    prosecutionScope: 'shared',
    correctionalScope: 'none',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['in-constitution', 'wpb-india'],
    notes:
      "India is a federation (Union + States) with legislative power divided by the Seventh Schedule (Constitution art. 246) into a Union List, a State List and a Concurrent List. CRITICALLY: Police (State List Entry 2), Public order (Entry 1) and Prisons (Entry 4) are EXCLUSIVE STATE subjects, so each State runs its own police force, prosecution directorate and prison administration — while Criminal law, Criminal procedure and the organisation of subordinate courts are Concurrent (List III Entries 1, 2, 11A), so the criminal codes (the BNS/BNSS/BSA of 2023, in force 1 July 2024) are national. The judiciary is INTEGRATED — a single hierarchy under the Supreme Court, not separate federal and state court systems — so courtScope is `own` at the Union level, unlike Germany's dual-court federation. This Union record therefore holds the framework, the apex judiciary, the national criminal codes, and the federal investigative agencies (the CBI under the Delhi Special Police Establishment Act, needing State consent, and the NIA under the Ministry of Home Affairs); policingScope and prosecutionScope are `shared` because those federal agencies exist alongside — not instead of — the State forces and directorates, and correctionalScope is `none` because there is no Union prison administration (prisons are exclusively a State subject). The State records (three illustrative ones are modelled) carry the police, prosecution and prison functions. Union Territories differ (some justice functions there are Union-administered); that variation is noted but not modelled in detail.",
    status: 'published',
  },
  {
    id: 'in-mh',
    slug: 'maharashtra',
    name: 'Maharashtra',
    shortName: 'Maharashtra',
    countryCode: 'IN',
    level: 'state',
    parentJurisdictionId: 'in',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'shared',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['in-constitution'],
    notes:
      "A representative State, modelled to show that police, prosecution and prisons are run at the State level (Seventh Schedule, State List Entries 1, 2, 4). Maharashtra runs its own State police, its Directorate of Prosecution (under the State Home Department, per the Bharatiya Nagarik Suraksha Sanhita s. 20) and its prison administration. courtScope is `shared` because the integrated judiciary means the State administers the subordinate courts under the control of a national High Court (the Bombay High Court), rather than owning a separate court system. Maharashtra's specific institutional detail has NOT been researched and nothing particular to the State is asserted.",
    status: 'published',
  },
  {
    id: 'in-tn',
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    shortName: 'Tamil Nadu',
    countryCode: 'IN',
    level: 'state',
    parentJurisdictionId: 'in',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'shared',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['in-constitution'],
    notes:
      "A representative State, modelled for the same reason as Maharashtra: police, prosecution and prisons are State-run (Seventh Schedule). Tamil Nadu runs its own State police, prosecution directorate and prison administration, with the subordinate courts administered under the Madras High Court. Tamil Nadu's specific institutional detail has NOT been researched.",
    status: 'published',
  },
  {
    id: 'in-up',
    slug: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    shortName: 'Uttar Pradesh',
    countryCode: 'IN',
    level: 'state',
    parentJurisdictionId: 'in',
    legalSystemScope: 'shared',
    policingScope: 'own',
    courtScope: 'shared',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    legislativeCompetence: {
      'legal-system': 'concurrent',
      policing: 'exclusive-subnational',
      courts: 'concurrent',
      prosecution: 'concurrent',
      corrections: 'exclusive-subnational',
    },
    temporalScope: 'current',
    coverage: 'in-research',
    sources: ['in-constitution'],
    notes:
      "A third representative State (India's most populous), modelled to show the per-State pattern is not confined to one region: police, prosecution and prisons are State-run (Seventh Schedule), with the subordinate courts administered under the Allahabad High Court. Uttar Pradesh's specific institutional detail has NOT been researched.",
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Indonesia (Batch C) — unitary decentralised; all justice national          */
  /* -------------------------------------------------------------------------- */
  {
    id: 'id',
    slug: 'indonesia',
    name: 'Republic of Indonesia',
    shortName: 'Indonesia',
    countryCode: 'ID',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['id-constitution', 'id-polri-law'],
    notes:
      'Indonesia (Republik Indonesia) is a unitary DECENTRALISED state, NOT a federation — Pasal 1(1) UUD 1945, "the State of Indonesia is a unitary state in the form of a Republic"; Pasal 18 divides it into provinces, regencies and cities with regional governments, but none of the four justice functions is a provincial subject. All four are national: a single national judiciary, the single national Prosecution Service (Kejaksaan), the single national police (POLRI) and a national prison service — so a single country-level record with all functions `own` states it accurately, and NO federal-style sub-national record is created. Facts kept in prose: there are TWO apex courts — the Mahkamah Agung (Supreme Court) at the head of four court environments (general, religious, military and administrative) and a separate Mahkamah Konstitusi (Constitutional Court, 2003) with concentrated review of statutes against the Constitution (Pasal 24(2), 24C); the police (POLRI) are a single national force that reports DIRECTLY TO THE PRESIDENT, not a ministry (UU 2/2002 Pasal 8) — a distinctive reporting line; the prosecution (Kejaksaan) is within the executive but functionally independent (UU 11/2021), and is dominus litis (master of the case) over the prosecution while the police investigate; new national codes — the KUHP (Law 1/2023) and a new KUHAP (Law 20/2025) — came into force on 2 January 2026, replacing the Dutch-colonial penal code; and prisons are run by the new Ministry of Immigration and Corrections (Perpres 157/2024). The one bounded special-autonomy feature is Aceh, which applies Islamic criminal law (qanun jinayat) to Muslims through Sharia courts (Mahkamah Syar\'iyah) — but those courts sit within the national religious-court system under the Supreme Court, so Aceh is described in prose, not modelled as a separate justice jurisdiction.',
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Mexico (Batch C) — federation; all four justice functions dual (fed + state) */
  /* -------------------------------------------------------------------------- */
  {
    id: 'mx',
    slug: 'mexico',
    name: 'United Mexican States',
    shortName: 'Mexico',
    countryCode: 'MX',
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
    sources: ['mx-constitution', 'wpb-mexico'],
    notes:
      'Mexico (Estados Unidos Mexicanos) is a FEDERATION — Constitution art. 40, "a representative, democratic, secular and federal Republic composed of free and sovereign States … and Mexico City" — with residual powers reserved to the States (art. 124). Unlike India (where police and prisons are state-only), ALL FOUR justice functions are DUAL, replicated at both the federal and the state level: federal courts (Poder Judicial de la Federación, art. 94) and each entity\'s own judiciary (art. 116); the autonomous federal Fiscalía General de la República (art. 102-A) and 32 state fiscalías; the federal Guardia Nacional plus state and municipal police under the shared-security function (art. 21, "a function of the Federation, the states and the municipalities"); and federal prisons (CEFERESOs) plus each state\'s own prison system (art. 18). So every function is `shared` at the federal level. Harmonisation is unusually high, though: a single national code of criminal procedure and sentence execution governs both orders (art. 73-XXI-c), the criminal process is accusatory and oral nationwide (art. 20, in force by 2016), and since 2024 a uniform elected-judiciary model is imposed on the states (art. 116-III). Facts kept in prose: the Supreme Court (Suprema Corte de Justicia de la Nación, reduced to nine Ministers in 2024) is the constitutional apex, with no separate constitutional court; the Ministerio Público directs the investigation with the police under its command; and the 2024 judicial reform (popular election of judges) is recorded neutrally, by attribution to dated official and intergovernmental sources. The state layer is illustrated by two representative records; the 32 entities are not all modelled.',
    status: 'published',
  },
  {
    id: 'mx-jal',
    slug: 'jalisco',
    name: 'Jalisco',
    shortName: 'Jalisco',
    countryCode: 'MX',
    level: 'state',
    parentJurisdictionId: 'mx',
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
    sources: ['mx-constitution'],
    notes:
      "A representative State, modelled to show that Mexico replicates all four functions at state level: Jalisco has its own judiciary (Poder Judicial del Estado / Tribunal Superior de Justicia), its own prosecution (Fiscalía del Estado), its own state police and its own prison system, applying its own penal code for common-order (fuero común) crimes while the national procedural code governs the process. Since the 2024 reform (Constitution art. 116-III), the state judiciary is subject to the elected-judiciary and judicial-discipline model imposed on all entities. Jalisco's specific institutional detail has NOT been researched.",
    status: 'published',
  },
  {
    id: 'mx-nle',
    slug: 'nuevo-leon',
    name: 'Nuevo León',
    shortName: 'Nuevo León',
    countryCode: 'MX',
    level: 'state',
    parentJurisdictionId: 'mx',
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
    sources: ['mx-constitution'],
    notes:
      "A second representative State, modelled for the same reason as Jalisco: Nuevo León runs its own judiciary, prosecution, state police and prison system, with its own penal code for common-order crimes under the single national procedural code, and — since 2024 — the elected-judiciary model imposed by art. 116-III. Nuevo León's specific institutional detail has NOT been researched.",
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* Argentina (Batch C) — federation; national codes, provincial courts/police  */
  /* -------------------------------------------------------------------------- */
  {
    id: 'ar',
    slug: 'argentina',
    name: 'Argentine Nation',
    shortName: 'Argentina',
    countryCode: 'AR',
    level: 'federal',
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
    sources: ['ar-constitution', 'wpb-argentina'],
    notes:
      'Argentina is a FEDERATION of 23 provinces and the Autonomous City of Buenos Aires, on the reserved-powers rule (Constitution art. 121, "the provinces keep all power not delegated by this Constitution to the federal Government"), with each province obliged to guarantee its own administration of justice (art. 5). The Argentine peculiarity: substantive law is UNIFIED and NATIONAL — Congress enacts the Civil, Commercial and Criminal codes (art. 75 inc. 12) — but those codes are applied by the federal OR the provincial courts by subject-matter, "without altering the local jurisdictions". So all four functions are DUAL: a federal justice, prosecution, police and prison service exist for federal-jurisdiction matters, while each province runs its OWN courts, prosecution (Ministerio Público), police and penitentiary service for ordinary crime — which is the bulk of criminal justice. Every function is therefore `shared` at the federal level, and legal-system competence is `exclusive-federal` (the codes are national). Facts kept in prose: the apex is the Corte Suprema de Justicia de la Nación (art. 108) with DIFFUSE constitutional review and NO separate constitutional court; the federal prosecution (Ministerio Público Fiscal) is a constitutionally AUTONOMOUS fourth organ (art. 120), and under the accusatory Federal Code of Criminal Procedure it directs the investigation with the police as auxiliaries; the four federal police forces and — since Decree 8/2024 — the Federal Penitentiary Service both sit under the Ministry of Security; and the constitutional Ombudsman (Defensor del Pueblo, art. 86) has been VACANT since 2009. The provincial layer is illustrated by two representative records; the 24 sub-national jurisdictions are not all modelled.',
    status: 'published',
  },
  {
    id: 'ar-b',
    slug: 'buenos-aires-province',
    name: 'Provincia de Buenos Aires',
    shortName: 'Buenos Aires (province)',
    countryCode: 'AR',
    level: 'province',
    parentJurisdictionId: 'ar',
    legalSystemScope: 'shared',
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
    sources: ['ar-constitution'],
    notes:
      "A representative Province (Argentina's largest, holding a very large share of the national prison population), modelled to show that the provinces run their own justice for ordinary crime: Buenos Aires has its own courts and Superior Tribunal, its own prosecution (Ministerio Público), its own provincial police (Policía de la Provincia de Buenos Aires) and its own penitentiary service, applying the national codes under its own procedural code. Buenos Aires's specific institutional detail has NOT been researched.",
    status: 'published',
  },
  {
    id: 'ar-x',
    slug: 'cordoba',
    name: 'Córdoba',
    shortName: 'Córdoba',
    countryCode: 'AR',
    level: 'province',
    parentJurisdictionId: 'ar',
    legalSystemScope: 'shared',
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
    sources: ['ar-constitution'],
    notes:
      "A second representative Province, modelled for the same reason as Buenos Aires: Córdoba runs its own courts, prosecution, provincial police and penitentiary service for ordinary crime, applying the national codes under its own procedural code (Córdoba was an early adopter of an accusatory provincial process). Córdoba's specific institutional detail has NOT been researched.",
    status: 'published',
  },

  /* -------------------------------------------------------------------------- */
  /* South Africa (Batch C) — constitutional supremacy; quasi-federal but        */
  /* justice national                                                            */
  /* -------------------------------------------------------------------------- */
  {
    id: 'za',
    slug: 'south-africa',
    name: 'Republic of South Africa',
    shortName: 'South Africa',
    countryCode: 'ZA',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['za-constitution', 'wpb-south-africa'],
    notes:
      'South Africa is a QUASI-FEDERAL / decentralised unitary state (one sovereign state with nine provinces) under a SUPREME Constitution (1996) — NOT parliamentary sovereignty: s 2, "This Constitution is the supreme law of the Republic; law or conduct inconsistent with it is invalid". Despite the nine provinces, all four justice functions are NATIONAL: courts, prosecution, prisons and criminal law appear in NEITHER Schedule 4 (concurrent) NOR Schedule 5 (exclusive provincial), so they fall to the national sphere by residual competence; the only provincial justice-adjacent competence is police "to the extent that Chapter 11 confers", which s 206(3) limits to OVERSIGHT/monitoring, not command of a force. So a single country-level record with all functions `own` states it accurately, and — unlike Mexico, Argentina or India — NO sub-national record is created (the provinces run none of the four functions). Facts kept in prose: the APEX is the Constitutional Court, the highest court for ALL matters since the Seventeenth Amendment of 2012 (s 167(3)), with the Supreme Court of Appeal below it — an apex-court model of constitutional review under which courts CAN strike down statutes (the opposite of New Zealand); prosecution is a "single national prosecuting authority" (the NPA, s 179), headed by a National Director appointed by the President, exercising its functions without fear/favour/prejudice but with the Justice Minister holding "final responsibility"; the police are the single national South African Police Service (s 205–207) with the National Commissioner in command and provinces limited to oversight; prisons run under the national Department of Correctional Services; and oversight is unusually rich — the Chapter 9 institutions (the Public Protector, the Human Rights Commission), the Judicial Service Commission (s 178), the Independent Police Investigative Directorate (IPID), and the Judicial Inspectorate for Correctional Services.',
    status: 'published',
  },
  {
    id: 'ke',
    slug: 'kenya',
    name: 'Republic of Kenya',
    shortName: 'Kenya',
    countryCode: 'KE',
    level: 'country',
    legalSystemScope: 'own',
    policingScope: 'own',
    courtScope: 'own',
    prosecutionScope: 'own',
    correctionalScope: 'own',
    temporalScope: 'current',
    coverage: 'partial',
    sources: ['ke-constitution', 'wpb-kenya'],
    notes:
      'Kenya is a DEVOLVED UNITARY state (one sovereign state with 47 county governments) under a SUPREME, transformative Constitution (2010) with a common-law tradition — Art. 2, the Constitution is supreme and any inconsistent law is void. Despite devolution, ALL FOUR justice functions are NATIONAL: the Fourth Schedule Part 1 assigns to the national government item 7 (police services, including standards of recruitment/training, "criminal law", and "correctional services") and item 8 ("Courts"); prosecution sits with the national Office of the Director of Public Prosecutions (Art. 157). Part 2 gives the counties NONE of the four functions (agriculture, county health, county transport, trade, planning, pre-primary education, firefighting, etc.). So a single country-level record with all functions `own` states it accurately, and — like South Africa, and unlike Mexico, Argentina or India — NO sub-national record is created (the counties run none of the four functions). Facts kept in prose: the APEX is the Supreme Court (Art. 163, created 2010; all courts other than the Supreme Court are bound by it, 163(7)), with the Court of Appeal and the High Court below; the High Court holds unlimited original jurisdiction (165(3)(a)) AND the power to determine whether any law is inconsistent with the Constitution (165(3)(d)) — DIFFUSE constitutional review, with no separate constitutional court; specialised courts of High-Court status exist for employment/labour relations and for environment and land (Art. 162), and the Kadhis\' courts (Art. 170) handle Muslim personal-status matters where all parties profess Islam. Prosecution: the ODPP is a constitutionally INDEPENDENT office (Art. 157(10), not under the direction or control of any person or authority), de-linked from the Attorney-General (Art. 156), with a single non-renewable eight-year term (157(5)) and the power to DIRECT the Inspector-General to investigate (157(4)). Police: one National Police Service throughout Kenya (Art. 243), two services (the Kenya Police Service and the Administration Police Service), with the Inspector-General holding independent command (245(2)(b)) and a firewall barring anyone from directing the Inspector-General on a particular investigation or enforcement (245(4)); the National Police Service Commission handles human resources (Art. 246). Prisons: the Kenya Prisons Service under the State Department for Correctional Services. Oversight is rich: the Art. 59 commissions (the KNCHR, the National Gender and Equality Commission, and the Commission on Administrative Justice / Ombudsman), the Judicial Service Commission (Art. 171), and the statutory Independent Policing Oversight Authority (IPOA).',
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
