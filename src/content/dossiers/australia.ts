import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Australia dossier — the second, independent test of contract policing.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-26.
 *
 * Source access: the Australian Constitution was read verbatim from the official Parliament of
 * Australia consolidated PDF; the AFP's ACT-Policing arrangement from the AFP's own page; the
 * prisoner statistic from the ABS release; the Northern Territory Police from its own page. The
 * Federal Register of Legislation (legislation.gov.au) and some agency sites serve their body
 * text through a single-page application or block automated fetching; where a fact rests on such
 * a page it was obtained by search retrieval of the official page and is stated as sourced, not
 * quoted verbatim.
 *
 * Two things define this dossier:
 *
 *  1. STATE CRIMINAL LAW. Unlike Canada, Australia has no national criminal code. The Commonwealth
 *     has only enumerated powers (Constitution s.51); the residue is the States' (s.107); so each
 *     state and territory writes its own criminal law — the United States pattern.
 *
 *  2. CONTRACT POLICING, AGAIN. The Australian Capital Territory runs no police of its own — the
 *     Commonwealth AFP delivers its community policing under an arrangement — while the Northern
 *     Territory runs its own force. This is the second country, in a second federation, to show
 *     the contract-policing pattern the Canada pilot named `contracted`.
 */

/**
 * The pilot's restricted claim — a national point-in-time prisoner count.
 *
 * Australian prisons are run by the states and territories (there is no Commonwealth prison
 * system), so the national figure is an aggregate of those systems. The ABS publishes a clean
 * point-in-time census with the sentenced/unsentenced split, which is what makes it publishable.
 */
const AUSTRALIA_PRISONERS: RestrictedClaim = {
  id: 'au-prisoners-2025',
  category: 'detention-capacity',
  statement:
    'At 30 June 2025 there were 46,998 adult prisoners in custody in Australia, of whom 27,051 were sentenced and 19,850 were unsentenced (on remand, awaiting the outcome of their case).',
  claimType: 'fact',
  sources: ['au-abs-prisoners'],
  sourceScope:
    'Australian Bureau of Statistics, "Prisoners in Australia, 2025", a point-in-time census of adults in the custody of the state and territory corrective-services agencies as at 30 June 2025: 46,998 total; 27,051 sentenced; 19,850 unsentenced (remand).',
  jurisdiction: 'AU',
  temporalScope: 'current',
  verifiedOn: '2026-07-26',
  metricPeriod: '2025-06-30',
  limitation:
    'A national aggregate of the separately administered state and territory prison systems — there is no Commonwealth prison system, and Commonwealth offenders are held in state and territory facilities — so it describes no jurisdiction individually. It is a single-day census (30 June 2025), not an average over the year, and it counts adults only, not youth. "Unsentenced" means people held on remand who have not been convicted or sentenced. The figure supports no comparison with any other country and no inference about crime, effectiveness or conditions.',
};

export const AUSTRALIA: CountryDossier = {
  countryCode: 'AU',
  slug: 'australia',
  name: 'Australia',
  officialName: 'Commonwealth of Australia',
  summary:
    'Australia is a federation in which the states retain residual power and write their own criminal law — there is no national criminal code. Its distinctive feature for this platform is a second instance of contract policing: the Australian Capital Territory runs no police of its own, and the Commonwealth Australian Federal Police delivers its community policing under an arrangement, while the Northern Territory runs its own force.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-26',
  reviewedOn: '2026-07-26',
  factsVerifiedOn: '2026-07-26',
  jurisdictionIds: ['au', 'au-nsw', 'au-act', 'au-nt'],
  sources: ['au-constitution'],
  uncertainty: [
    'The Federal Register of Legislation and some agency sites serve their text through a single-page application or block automated access; facts resting on those pages were obtained by search retrieval of the official page and are stated as sourced rather than quoted verbatim.',
    'The forensic system, border and customs arrangements, external oversight machinery and institutional history have not been researched to the required standard and are not described.',
    "No individual state or territory has been researched beyond the constitutional and arrangement structure; New South Wales, the ACT and the Northern Territory appear as jurisdiction samples. The justice system's relationship with Aboriginal and Torres Strait Islander peoples is a major subject not treated here.",
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'The states write the criminal law',
      text: 'Australia is a federation, and on the axis that matters most here it is the opposite of Canada. The Commonwealth Parliament has only the enumerated powers the Constitution gives it (s.51), and there is no general criminal-law power among them; the powers not given to the Commonwealth are RETAINED by the states (s.107). So there is no national criminal code — each state and territory writes its own criminal law, with Commonwealth criminal offences confined to federal matters. This is the United States pattern, and it runs through everything: state police, state courts, state prosecutors, state prisons.',
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Contract policing, in a second country',
      text: "Australia is the second country on this site to show contract policing — a jurisdiction that is responsible for policing but has it delivered by an institution of another order of government. Every state, and the Northern Territory, runs its own police force. The exception is the Australian Capital Territory, which runs no police of its own: the Commonwealth Australian Federal Police delivers ACT community policing — through its 'ACT Policing' unit — 'on behalf of the ACT Government' under a purchase arrangement. It is the same shape as Canada's RCMP contract policing, in a differently built federation, which is why this site records the ACT's policing with the same value (`contracted`) and the Northern Territory's as its own.",
    },
    {
      kind: 'paragraph',
      text: "The institutions come in Commonwealth and state/territory pairs. Policing is the Commonwealth AFP alongside the state and territory forces. Prosecution is the Commonwealth Director of Public Prosecutions alongside the state and territory DPPs. The courts run in a federal system — the High Court of Australia, the Federal Court — alongside each state and territory's own courts, which also exercise federal jurisdiction. And corrections are run entirely by the states and territories; there is no Commonwealth prison system. The module pages take each in turn.",
      claim: 'fact',
      sources: ['au-constitution'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Australia',
      summary:
        'A federation in which the Commonwealth has only enumerated powers, the states retain the residue, and — with no national criminal code — each state and territory writes its own criminal law.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['au-constitution'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Australia is a federation under the Commonwealth of Australia Constitution Act, which took effect on 1 January 1901. The Commonwealth (federal) Parliament has only the legislative powers the Constitution enumerates: section 51 gives it "power to make laws for the peace, order, and good government of the Commonwealth with respect to" a list of subject matters. Criminal law is not among them as a general head.',
          claim: 'fact',
          sources: ['au-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Residual power sits with the states — the opposite of Canada',
          text: 'Because the Commonwealth’s powers are enumerated, everything else remains with the states. Section 107 provides that every power of a colony that became a state “shall, unless it is by this Constitution exclusively vested in the Parliament of the Commonwealth or withdrawn from the Parliament of the State, continue”. So the residual power is the states’, not the Commonwealth’s — the United States model, and the inverse of Canada, where the residual power is federal and one Criminal Code covers the country. In Australia there is no national criminal code: each state and territory has its own criminal law, and the Commonwealth Criminal Code applies only to offences against Commonwealth law.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Enumerated Commonwealth power',
              description:
                'The Commonwealth may legislate only on the subjects section 51 lists (and a few others). Where a valid state law is inconsistent with a valid Commonwealth law, section 109 makes the Commonwealth law prevail to the extent of the inconsistency — the mechanism that resolves overlap.',
            },
            {
              term: 'States and territories',
              description:
                'The six states have their powers saved by the Constitution (s.107). The territories are different: the Australian Capital Territory and the Northern Territory are self-governing under Commonwealth statutes (the ACT Self-Government Act 1988 and the NT Self-Government Act 1978), which the Commonwealth Parliament can amend — so their self-government is conferred, not constitutionally entrenched.',
            },
            {
              term: 'Courts borrowed for federal work',
              description:
                'The Commonwealth did not build a full parallel court system. Section 77(iii) lets it invest a state court with federal jurisdiction, so state and territory courts hear much federal work alongside their own — the "autochthonous expedient".',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the constitutional division of powers. It does not resolve the extensive case law on the reach of Commonwealth power, nor describe the human-rights framework, which in Australia rests on statute and the common law rather than a constitutional bill of rights.',
        },
      ],
      uncertainty: [
        'Constitutional provisions are cited from the official consolidated text; the extensive case law on the division of powers is not described.',
        'Australia has no single constitutional charter of rights; the criminal-justice rights framework was not researched and is not described.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Australia',
      summary:
        'State and territory police forces, the Commonwealth AFP, and the contract-policing exception — the ACT, policed by the AFP under arrangement, against the Northern Territory, which runs its own force.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['au-afp-act', 'au-afp-actpolicing', 'au-nt-police', 'au-constitution'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Most policing in Australia is done by the states and territories, each of which runs its own police force — for example the New South Wales Police Force and Victoria Police. Alongside them, the Australian Federal Police is the Commonwealth police, established under the Australian Federal Police Act 1979, and enforces Commonwealth criminal law and national security matters across the country.',
          claim: 'fact',
          sources: ['au-afp-act', 'au-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The ACT is policed by the AFP — the contract-policing case',
          text: 'One jurisdiction runs no police of its own. The Australian Capital Territory\'s community policing is delivered by the Australian Federal Police: in the AFP\'s own words, "ACT Policing is the community policing arm of the AFP", providing policing services to the Territory "on behalf of the ACT Government". The statutory hook is the AFP Act 1979, which makes providing police services in relation to the ACT a function of the AFP, arranged between the Commonwealth and the ACT. The ACT government directs and funds that policing through a purchase arrangement, but the officers are AFP members and ACT Policing is an AFP unit — the ACT does not own a force. That is why this site records the ACT\'s policing as `contracted`, the same value it uses for Canada\'s RCMP contract provinces.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Northern Territory is the contrast',
          text: 'The Northern Territory, though it is a self-governing territory like the ACT, runs its OWN police — the Northern Territory Police Force — under its own legislation. So two territories with the same constitutional footing differ on exactly one point: the ACT procures its policing from the Commonwealth, the Northern Territory does not. That difference is the whole reason the `contracted` value exists: it distinguishes a jurisdiction that owns its police from one that arranges for another order of government to deliver them.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes which body polices which jurisdiction and the constitutional and contractual structure behind it. It does not describe deployment, tactics, surveillance capability, operational procedure, or anything that would help a person anticipate, frustrate or evade the police, and it will not.',
        },
      ],
      uncertainty: [
        'The precise terms of the ACT policing arrangement (the Policing Arrangement and the periodically renegotiated Purchase Agreement) were not read from the agreements themselves and are described in general terms.',
        'The internal organisation of the AFP and the individual state and territory forces has not been researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Australia',
      summary:
        "The High Court of Australia and the federal courts alongside each state and territory's own courts, which also exercise federal jurisdiction.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['au-hcourt', 'au-constitution'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'At the apex of the Australian system is the High Court of Australia, established under Chapter III of the Constitution. It interprets and applies Australian law, decides cases including challenges to the constitutional validity of laws, and hears appeals by special leave from federal, state and territory courts — the final court of appeal and the final interpreter of the Constitution.',
          claim: 'fact',
          sources: ['au-hcourt', 'au-constitution'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The federal courts',
              description:
                'Below the High Court, the Federal Court of Australia and the Federal Circuit and Family Court of Australia handle matters under federal law. The judicial power of the Commonwealth is vested by section 71 in the High Court and the other federal courts.',
            },
            {
              term: 'State and territory courts',
              description:
                "Each state and territory has its own court system — a Supreme Court and lower courts — which hears the great majority of criminal matters under that jurisdiction's own law.",
            },
            {
              term: 'State courts doing federal work',
              description:
                'Rather than build a full parallel system, the Commonwealth invests state courts with federal jurisdiction (s.77(iii)), so a state court may decide a federal matter. This is a defining feature of the Australian judicature.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the appeal routes, and the composition and appointment of the courts have not been researched from the primary sources beyond the constitutional outline and are not described.',
        },
      ],
      uncertainty: [
        'The jurisdictional boundaries between the federal and state court systems are stated only structurally.',
        'No individual state or territory court system has been researched.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Australia',
      summary:
        "A split prosecution service — the Commonwealth Director of Public Prosecutions for offences against Commonwealth law, and each state and territory's own DPP for offences against its law.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['au-cdpp', 'au-constitution'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Prosecution in Australia is split along the same line as the law itself. The Commonwealth Director of Public Prosecutions (CDPP) prosecutes offences against Commonwealth law. Offences against the law of a state or territory — which, criminal law being largely a state matter, is most crime — are prosecuted by that state or territory's own Director of Public Prosecutions.",
          claim: 'fact',
          sources: ['au-cdpp'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'One prosecutor per body of law',
          text: 'The logic is simple and follows the division of legislative power: whoever made the law that was broken provides the prosecutor. Because there is no national criminal code, the everyday work of criminal prosecution is done by the state and territory DPPs, while the Commonwealth DPP handles federal offences — fraud against the Commonwealth, drug importation, terrorism, and the like. This page states that allocation; it does not characterise the independence of any of these offices, which was not researched.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states which prosecutor handles which offences. It does not describe the relationship between the Commonwealth Attorney-General and the CDPP, or the independence and discretion of the state and territory DPPs, which were not researched from primary sources.',
        },
      ],
      uncertainty: [
        'The individual state and territory DPPs are named collectively; none has been researched.',
        'The handling of matters that straddle Commonwealth and state law is not described in detail.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Australia',
      summary:
        'Who investigates — the state and territory police for offences against their own law, the AFP for Commonwealth offences — feeding a prosecution decision that follows the same split.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['au-afp-act', 'au-cdpp', 'au-constitution'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: "Criminal investigation in Australia follows the division of the law. Offences against state or territory law — most crime — are investigated by that jurisdiction's police force (or, in the ACT, by the AFP delivering ACT policing). Offences against Commonwealth law are investigated by the Australian Federal Police. The investigation then feeds the matching prosecutor: the state or territory DPP, or the Commonwealth DPP.",
          claim: 'fact',
          sources: ['au-constitution', 'au-afp-act'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Investigation and prosecution, kept separate',
          text: 'As in the other common-law countries on this site, the body that investigates is separate from the body that decides to prosecute: police investigate and assemble the brief, and the relevant Director of Public Prosecutions decides whether and how to prosecute. This page describes that allocation of responsibility; the framing is ours, grounded in the constitutional division and the official descriptions of the prosecuting authorities.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates which offences and who prosecutes them. It does not describe investigative techniques, surveillance, interrogation or detention practice, or forensic methods, and nothing here would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The rules on arrest, detention and the authorisation of investigative measures have not been researched and are not described.',
        'The coordination between the AFP and the state and territory forces on cross-jurisdictional matters is not described.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Australia',
      summary:
        'A prison system run entirely by the states and territories — there is no Commonwealth prison — with a national point-in-time count in which unsentenced remand is a large share.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: ['au-abs-prisoners', 'au-constitution'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [AUSTRALIA_PRISONERS],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Corrections in Australia are run entirely by the states and territories: each has its own corrective-services agency that operates its prisons. There is no Commonwealth prison system — people convicted of Commonwealth offences serve their sentences in state and territory facilities. So a national prison figure is an aggregate of these separate systems, not a single Commonwealth-run one.',
          claim: 'fact',
          sources: ['au-abs-prisoners', 'au-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The prisoner count, stated with its limits',
          text: 'The Australian Bureau of Statistics records that at 30 June 2025 there were 46,998 adult prisoners in custody in Australia, of whom 27,051 were sentenced and 19,850 were unsentenced — that is, held on remand, awaiting the outcome of their case. Three qualifications travel with the figure: it aggregates the separately run state and territory systems and describes none individually; it is a single-day census, not an average over the year; and it counts adults only. The large unsentenced share is the notable, well-sourced fact. The figure supports no comparison with any other country.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual state and territory prison systems, community corrections and parole, youth detention, and — a major and sensitive subject — the over-representation of Aboriginal and Torres Strait Islander people in custody have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No individual state or territory prison system is described; the figure is a national aggregate.',
        'The over-representation of Aboriginal and Torres Strait Islander people in the prison population is a major documented issue not researched or presented here.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Australia',
      summary:
        'Every source used for the Australia pages, what each supports, and how it was accessed.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      reviewedOn: '2026-07-26',
      factsVerifiedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [
        'au-constitution',
        'au-afp-act',
        'au-afp-actpolicing',
        'au-hcourt',
        'au-cdpp',
        'au-nt-police',
        'au-abs-prisoners',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: "The Australia pages rest on seven sources: the Australian Constitution; the Australian Federal Police Act 1979; the AFP's ACT-Policing page; the High Court of Australia; the Commonwealth Director of Public Prosecutions; the Northern Territory Police Force; and the Australian Bureau of Statistics prisoner census. Each was read or retrieved and confirmed on 26 July 2026.",
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: 'The Constitution was read verbatim from the official Parliament of Australia consolidated PDF, the AFP ACT-Policing page and the Northern Territory Police page directly, and the prisoner figures from the ABS release. The Federal Register of Legislation and some agency sites (the CDPP) serve their body text through a single-page application or block automated access; facts resting on those pages were obtained by search retrieval of the official page and are stated as sourced, with no verbatim quotation attributed to a page not read in full.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/australia-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Australia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Forensic science in Australia is delivered through separate state and territory forensic services, and has not been read to the standard required. Forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Australia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs functions in Australia are administered by the Australian Border Force within the Home Affairs portfolio, alongside the AFP, and could not be distinguished to the required standard here. It is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Australia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-26',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Police and integrity oversight in Australia is non-uniform: each state and territory has its own oversight and anti-corruption bodies, and the Commonwealth has its own (including the National Anti-Corruption Commission within federal scope). Presenting a single national oversight picture would imply a uniformity that does not exist, and the state and territory bodies were not researched to the required standard.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Australia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        "Australian institutional history — colonisation, federation in 1901, and above all the justice system's treatment of Aboriginal and Torres Strait Islander peoples, including deaths in custody and the findings of royal commissions — cannot be written responsibly from general knowledge and requires careful, well-sourced treatment not undertaken here.",
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Australia',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-26',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established here — federation (1901), the AFP Act (1979), and the ACT and NT self-government Acts (1988 and 1978) — are only a beginning; a responsible timeline needs primary sources for each entry, which were not gathered.',
    },
  ],
};
