import type { InstitutionType } from './types';

/**
 * Institution *types*, not named agencies.
 *
 * `presenceNote` is required on every entry, because the single most useful thing this
 * registry can tell a reader is where a type does not exist and where a familiar name means
 * something else entirely.
 */
export const INSTITUTION_TYPES: readonly InstitutionType[] = [
  {
    slug: 'municipal-police',
    title: 'Municipal police',
    summary:
      'A police service established by and accountable to a city or local authority, with jurisdiction over that area.',
    section: 'law-enforcement',
    distinguishingFeatures: [
      'Jurisdiction defined by local-authority boundaries',
      'Accountability arrangements that run to local government or a local body',
      'Funding wholly or partly from local sources',
    ],
    typicalMandate: [
      'Response, public order, and local crime',
      'Local regulatory enforcement, which in some countries is the larger part of the role',
      'Community engagement and problem-solving with other local services',
    ],
    commonConfusions: [
      'With national police operating locally, which is a different accountability structure',
      'With municipal enforcement officers who hold regulatory powers but are not police',
    ],
    presenceNote:
      'Common in countries with strong municipal traditions and largely absent in countries with centralised policing. Where both municipal and national police exist, the division of responsibility between them is set nationally and varies.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'national-police',
    title: 'National police service',
    summary:
      'A single police organisation with jurisdiction across a whole country, accountable to national government.',
    section: 'law-enforcement',
    distinguishingFeatures: [
      'Nationwide jurisdiction under a single command structure',
      'Accountability to a national ministry or an equivalent national body',
      'Consistent standards, training, and powers across the territory',
    ],
    typicalMandate: [
      'The full range of policing functions across the country',
      'Coordination of national capabilities such as major investigation and specialist units',
    ],
    commonConfusions: [
      'With federal agencies, which have jurisdiction over specified offences rather than general policing',
      'With gendarmeries, which are national in reach but of military status',
    ],
    presenceNote:
      'Present in many unitary states. In federal states the equivalent function is normally divided between state or provincial forces and federal agencies with limited subject-matter jurisdiction.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'gendarmerie',
    title: 'Gendarmerie',
    summary:
      'A police force with military status performing ordinary civilian policing, usually alongside a separate civilian police service.',
    section: 'law-enforcement',
    distinguishingFeatures: [
      'Military status affecting the chain of command, discipline, and conditions of service',
      'Ordinary civilian policing duties, typically with a rural or nationwide remit',
      'A separate institutional history from municipal policing',
    ],
    typicalMandate: [
      'General policing in areas allocated to it, frequently rural and inter-urban',
      'Public order and certain national security-adjacent functions',
    ],
    commonConfusions: [
      'With military police, which police the armed forces rather than the public',
      'With paramilitary units inside a civilian police service, which are not of military status',
    ],
    presenceNote:
      'Present in a number of countries and entirely absent from others. Where it exists, the division of territory or function between it and the civilian police is set nationally. It is not a general category into which any armed police force can be placed.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'federal-investigative-agency',
    title: 'Federal or national investigative agency',
    summary:
      'A body with jurisdiction over specified categories of offence across a whole country, rather than general policing of a territory.',
    section: 'law-enforcement',
    distinguishingFeatures: [
      'Jurisdiction defined by subject matter rather than by territory',
      'Typically investigative rather than responsive; rarely the first point of public contact',
      'Frequently handles offences crossing internal borders or involving national institutions',
    ],
    typicalMandate: [
      'Serious and organised crime, financial crime, corruption, or offences against national institutions, depending on the country',
      'Coordination between territorial forces where an offence crosses their boundaries',
    ],
    commonConfusions: [
      'That such agencies outrank local police. They generally have different jurisdiction rather than superior authority.',
      'With intelligence services, which in most systems have no policing powers',
    ],
    presenceNote:
      'Present in most federal states and in many unitary ones. The list of offences within its jurisdiction is defined by national law and is not comparable between countries without checking each.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'prosecution-service',
    title: 'Prosecution service',
    summary:
      'The body responsible for deciding whether criminal cases are brought and for presenting them in court.',
    section: 'prosecution',
    distinguishingFeatures: [
      'Holds the charging decision, separately from the body that investigated',
      'Owes duties to the court and to the accused, not only to its own case',
      'Operates against published charging standards in most systems',
    ],
    typicalMandate: [
      'Applying evidential and public-interest tests to charging decisions',
      'Disclosure to the defence',
      'Presenting cases and, in many systems, making submissions on sentence',
    ],
    commonConfusions: [
      'With the police, from whom it is separate in most systems',
      'With the judiciary, though in several countries prosecutors are part of a judicial career track',
      'Between country-specific titles that do not denote the same role',
    ],
    presenceNote:
      'Nearly universal as a function; its institutional position varies more than almost any other body. It may be constitutionally separate, part of a ministry, or part of the judiciary, and that placement determines how independent it is of the executive.',
    temporalScope: 'current',
    sources: ['un-prosecutors-guidelines'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'border-and-customs-authority',
    title: 'Border and customs authority',
    summary:
      'Bodies controlling the movement of people and of goods across a border — two distinct legal regimes, frequently exercised at the same location.',
    section: 'public-safety',
    distinguishingFeatures: [
      'Powers derived from immigration or customs law rather than from general police powers',
      'Jurisdiction defined by the border and by designated control points',
      'Frequently a separate complaints and oversight route from policing',
    ],
    typicalMandate: [
      'Immigration control: the entry, stay, and departure of people',
      'Customs: duties, prohibitions, and restrictions on goods',
    ],
    commonConfusions: [
      'That border control and customs are the same body. They are distinct functions and are often distinct organisations.',
      'That police oversight bodies cover them. They usually do not.',
    ],
    presenceNote:
      'The functions exist wherever there is a controlled border. Whether they sit in one body, two bodies, the police, or the armed forces differs by country.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'coast-guard',
    title: 'Coast guard',
    summary:
      'A maritime body whose status ranges from an armed military service to a civilian search-and-rescue or regulatory organisation.',
    section: 'public-safety',
    distinguishingFeatures: [
      'Maritime jurisdiction, defined by waters rather than by land territory',
      'Status varying from military to civilian, with correspondingly different powers and oversight',
    ],
    typicalMandate: [
      'Search and rescue',
      'Maritime safety and regulatory enforcement',
      'Law enforcement at sea, where the body holds such powers',
    ],
    commonConfusions: [
      'That the name denotes the same kind of organisation everywhere. It does not, and the difference between a military service and a civilian regulator is substantial.',
      'With navies, which have a different mandate even where the coast guard is of military status',
    ],
    presenceNote:
      'Present in most coastal states in some form. Landlocked states may have an equivalent inland-waterway body or none. The name is one of the clearest cases where the same term denotes materially different institutions.',
    temporalScope: 'current',
    sources: ['unodc-cpcj'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
  {
    slug: 'correctional-service',
    title: 'Correctional service',
    summary:
      'The body responsible for operating places of detention and, in many systems, for supervising people serving sentences in the community.',
    section: 'corrections',
    distinguishingFeatures: [
      'Operates closed institutions, which is why external inspection is a defining feature',
      'Acts after a court decision rather than before it',
      'Frequently combines custodial operation with community supervision',
    ],
    typicalMandate: [
      'Safe and lawful custody',
      'Regime, education, work, and health access',
      'Preparation for release and, in many systems, supervision afterwards',
    ],
    commonConfusions: [
      'With the police, who operate short-term detention for entirely different purposes',
      'With probation, which is a separate service in some countries and part of the same body in others',
    ],
    presenceNote:
      'Universal as a function. Whether prisons are run by a ministry, an executive agency, a regional authority, or contracted providers varies, as does whether probation is inside the same organisation.',
    temporalScope: 'current',
    sources: ['mandela-rules'],
    status: 'published',
    review: 'editorial-review',
    updatedOn: '2026-07-23',
  },
];

export const PUBLISHED_INSTITUTION_TYPES: readonly InstitutionType[] = INSTITUTION_TYPES.filter(
  (institution) => institution.status === 'published',
);
