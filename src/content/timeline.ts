import type { TimelineEntry } from './types';

/**
 * A *selected* set of institutional milestones, not a chronology.
 *
 * Every entry requires at least one source whose URL was individually verified. The list is
 * short because verification, not ambition, sets its length — and because a timeline that
 * grows faster than its sourcing is how invented dates enter a reference site.
 *
 * The current selection is weighted towards European and international instruments. That is
 * a limitation of what we have verified so far, not a claim about where the relevant history
 * lies, and it is stated on the timeline page itself.
 */
export const TIMELINE: readonly TimelineEntry[] = [
  {
    id: 'magna-carta-1215',
    year: 1215,
    displayDate: '1215',
    title: 'Magna Carta agreed in England',
    description:
      'King John agreed the charter later known as Magna Carta, setting out limits on royal authority in response to demands from rebel barons.',
    region: 'England',
    significance:
      'Frequently cited as an early written constraint on a ruler’s power. Its long-term significance comes substantially from how later generations reinterpreted it rather than from what it originally achieved.',
    claimType: 'fact',
    sources: ['tna-magna-carta', 'loc-magna-carta'],
    uncertainty:
      'The 1215 charter was annulled shortly after it was agreed and was reissued in altered forms afterwards. Popular accounts frequently conflate the 1215 text with later versions, and attribute to it protections it did not contain.',
  },
  {
    id: 'magna-carta-1297',
    year: 1297,
    displayDate: '1297',
    title: 'Magna Carta confirmed and entered on the statute roll',
    description:
      'The confirmation of Magna Carta in 1297 is the version that entered the statute book of England. Clauses from this text remain in force in England and Wales.',
    region: 'England',
    significance:
      'Shows that the document with continuing legal effect is the 1297 confirmation rather than the 1215 charter — a distinction routinely lost in general accounts.',
    claimType: 'fact',
    sources: ['magna-carta-1297'],
  },
  {
    id: 'metropolitan-police-act-1829',
    year: 1829,
    displayDate: '1829',
    title: 'Metropolitan Police Act creates a permanent force for London',
    description:
      'The Metropolitan Police Act 1829 established a full-time, centrally organised, publicly funded police force for the Metropolitan area of London.',
    region: 'England',
    significance:
      'A documented example of the shift from part-time community obligation and private arrangement towards permanent salaried policing. It applied to the area it named and did not create the wider pattern it illustrates.',
    claimType: 'fact',
    sources: ['met-police-act-1829'],
    uncertainty:
      'This platform does not describe any force as "the first modern police force". Which institution qualifies depends entirely on the definition used, and the answer is contested between historians.',
  },
  {
    id: 'udhr-1948',
    year: 1948,
    displayDate: '10 December 1948',
    title: 'Universal Declaration of Human Rights adopted',
    description:
      'The United Nations General Assembly adopted the Universal Declaration of Human Rights, which declares equality before the law, the right to an effective remedy, the right to a fair and public hearing by an independent and impartial tribunal, and the presumption of innocence.',
    region: 'International',
    significance:
      'Established a shared vocabulary for justice standards across very different legal systems. A declaration of principle rather than a binding treaty.',
    claimType: 'fact',
    sources: ['udhr'],
  },
  {
    id: 'iccpr-1966',
    year: 1966,
    displayDate: '1966',
    title: 'International Covenant on Civil and Political Rights adopted',
    description:
      'The United Nations General Assembly adopted the International Covenant on Civil and Political Rights, converting several of the Declaration’s principles into treaty obligations, including the Article 14 fair-trial guarantees.',
    region: 'International',
    significance:
      'Moved fair-trial standards from declared principle to binding obligation for states that ratified it. Registered in the United Nations Treaty Series on 23 March 1976.',
    claimType: 'fact',
    sources: ['iccpr'],
    uncertainty:
      'Sources differ on whether to give the adoption date as 16 or 19 December 1966. We give the year only rather than pick between them.',
  },
  {
    id: 'rome-statute-1998',
    year: 1998,
    displayDate: '1998',
    title: 'Rome Statute of the International Criminal Court adopted',
    description:
      'The Rome Statute established the International Criminal Court as a permanent court with jurisdiction over defined international crimes, complementary to national jurisdictions rather than superior to them.',
    region: 'International',
    significance:
      'Created a standing international criminal jurisdiction, on the express basis that it acts only where national systems are unwilling or unable to do so.',
    claimType: 'fact',
    sources: ['rome-statute'],
  },
  {
    id: 'mandela-rules-2015',
    year: 2015,
    displayDate: '2015',
    title: 'Nelson Mandela Rules adopted',
    description:
      'The United Nations Standard Minimum Rules for the Treatment of Prisoners were revised and adopted as the Nelson Mandela Rules, setting minimum standards for the treatment of people in detention and providing for regular inspection of prisons by bodies independent of the prison administration.',
    region: 'International',
    significance:
      'The current international reference standard for detention conditions, and the basis on which independent prison inspection is expected rather than optional.',
    claimType: 'fact',
    sources: ['mandela-rules'],
  },
];

export const TIMELINE_SORTED: readonly TimelineEntry[] = TIMELINE.toSorted(
  (a, b) => a.year - b.year,
);
