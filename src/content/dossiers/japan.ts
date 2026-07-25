import type { CountryDossier } from '../types';

/**
 * The Japan dossier — the prefectural-policing-in-a-unitary-state pilot.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-25
 * (recorded as `factsVerifiedOn`, not a build date).
 *
 * Source access: several Japanese official sites (npa.go.jp, courts.go.jp per page) block or
 * truncate automated fetches while serving normally to a browser. The National Police Agency's
 * "Police of Japan 2020" figures were extracted directly from the report PDF; other official
 * pages (Ministry of Justice, the Japanese Law Translation database) were read directly or
 * obtained by search retrieval of the exact official page and cross-corroborated. The source
 * register records the access path for each, and no verbatim quotation is attributed to a
 * source that was not read in full.
 *
 * Two things define this dossier and every module holds the line on both:
 *
 *  1. TRANSLATION INTEGRITY. Japanese institutions are named in Japanese and their statutes are
 *     authoritative only in Japanese. These pages give the official English name where one
 *     exists, keep the Japanese name where it carries meaning the English loses, expand
 *     abbreviations, and never present a convenience translation, a literal gloss, a Western
 *     analogy or a romanization as if it were the authoritative name.
 *
 *  2. COORDINATION, NOT COMMAND. Japan legislates policing nationally but administers it
 *     PREFECTURALLY. The National Police Agency coordinates and supervises the prefectural
 *     police only on matters of national concern; it does not run day-to-day policing and it is
 *     not "Japan's FBI". The dossier states the coordination relationship without ever implying
 *     a national chain of operational command.
 */

export const JAPAN: CountryDossier = {
  countryCode: 'JP',
  slug: 'japan',
  name: 'Japan',
  officialName: 'Japan (日本国, Nihon-koku)',
  summary:
    'Japan is a unitary, civil-law state under the 1946 Constitution. Its courts, public prosecution and prisons are national, but its police are administered by each of the 47 prefectures under prefectural public safety commissions — the national police bodies coordinate and set standards on matters of national concern rather than command operational policing.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-25',
  reviewedOn: '2026-07-25',
  factsVerifiedOn: '2026-07-25',
  jurisdictionIds: ['jp', 'jp-tokyo', 'jp-osaka'],
  sources: ['jp-constitution', 'jp-npa-police-of-japan-2020', 'jp-courts-judicial-system'],
  uncertainty: [
    'Japanese statutes are cited in official English translations that the Ministry of Justice publishes as reference materials only; the authoritative text of each is the Japanese one, and no precise legal point rests on the English wording.',
    'The forensic system, border and customs arrangements, oversight machinery and institutional history have not been researched to the required standard and are not described.',
    'No Japanese detention-capacity statistic is published here; the official prison figures are released in linked spreadsheet tables and a large annual White Paper that could not be verified to the standard the other country pages meet, so the claim was deferred rather than approximated.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'National law, prefectural police',
      text: 'Japan is a unitary state — one national legislature, one national legal system — with a distinctive twist that this dossier exists to record: the police are not a single national force but are administered by each of the 47 prefectures. The words matter here. A "prefecture" (todofuken, 都道府県) is Japan\'s first-level regional division; the four types are the "to" (Tokyo), the "do" (Hokkaido), the "fu" (Osaka and Kyoto) and the "ken" (the other 43). Below the prefectures are municipalities. When these pages say policing is "prefectural" they mean exactly that level — not national, and not municipal.',
    },
    {
      kind: 'paragraph',
      text: 'Under the Constitution of Japan, which came into effect in 1947, the National Diet is "the highest organ of state power" and "the sole law-making organ of the State", and the whole judicial power is vested in a Supreme Court and in lower courts established by law. Courts, public prosecution and the prison system are organised and run nationally. Policing is the exception: the national bodies coordinate it, but the 47 prefectures administer it.',
      claim: 'fact',
      sources: ['jp-constitution', 'jp-courts-judicial-system'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'How these pages handle Japanese names',
      text: 'Japanese institutions are named in Japanese, and their governing statutes have legal effect only in Japanese. These pages use the official English name where the institution publishes one — the National Police Agency, the Supreme Court, the Correction Bureau — and keep the Japanese name where it carries something the English loses, such as the Metropolitan Police Department\'s own name, Keishicho. What they do not do is dress a convenience translation, a word-for-word gloss, a romanized spelling or a foreign analogy up as the real name. That is why the National Police Agency is never called "Japan\'s FBI": the analogy would misdescribe what it is.',
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Coordination is not command',
      text: 'The easiest mistake to make about Japanese policing is to read the national police organisation as a national police force. It is not. The National Public Safety Commission and the National Police Agency draw up basic policies, coordinate police administration on matters of national concern, and set general standards; the Police Act empowers them to control and supervise the prefectural police on those national matters. Operational policing — patrol, investigation, response — is carried out by the prefectural police under their own prefectural public safety commissions. This dossier records the coordinating relationship and stops there; it does not imply a chain of command that reaches down into everyday policing, because there is not one.',
    },
    {
      kind: 'paragraph',
      text: "Four kinds of institution carry most of the system. The prefectural police, overseen by prefectural public safety commissions, do the policing. The public prosecutors, in offices that mirror the court hierarchy, decide whether to bring charges. The courts — the Supreme Court and the lower courts beneath it — try and decide cases. The penal institutions, run by the Ministry of Justice's Correction Bureau, hold those sentenced or detained. The module pages take each in turn.",
      claim: 'fact',
      sources: ['jp-npa-police-of-japan-2020', 'jp-courts-judicial-system'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Japan',
      summary:
        'A unitary, civil-law system under the 1946 Constitution: the Diet as sole law-making organ, judicial power vested in the courts, and constitutionally guaranteed local self-government — with policing the one function administered below the national level.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['jp-constitution', 'jp-courts-judicial-system', 'jp-law-translation-policy'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-do-courts-do'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Japan is a constitutional state with a civil-law legal tradition, governed under the Constitution of Japan, which came into effect on 3 May 1947. Under it the National Diet is "the highest organ of state power" and "the sole law-making organ of the State", and the whole judicial power is vested in a Supreme Court and in such lower courts as are established by law. No extraordinary tribunal may be established, and judges are independent, bound only by the Constitution and the laws.',
          claim: 'fact',
          sources: ['jp-constitution'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Unitary, but not uniform all the way down',
          text: 'Because Japan is unitary, one national legal system runs across the whole country; there is nothing like the state-by-state legal variation of the United States. But the Constitution also guarantees local self-government: the organisation and operations of local public entities are, in its words, "fixed by law in accordance with the principle of local autonomy". That guaranteed local layer is where policing lives. So the picture is national law with one function — the police — administered at the prefectural level. This framing is ours; the institutions it describes are set out from official sources here and on the module pages.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Who legislates',
              description:
                'The National Diet. It is the sole law-making organ, so the codes that govern crime and procedure, the courts, prosecution and corrections are national statutes. Prefectures and municipalities have local ordinance-making power within that national framework, but the criminal law and the police, court and prosecution statutes are national.',
            },
            {
              term: 'Who adjudicates',
              description:
                'The courts. Judicial power is vested in the Supreme Court and the lower courts; there is no separate constitutional court, and the Supreme Court reviews the constitutionality of a law only in the course of deciding a concrete case, not in the abstract. The courts module sets out the five kinds of court.',
            },
            {
              term: 'Who administers what',
              description:
                "Prosecution and corrections are national, run by public prosecutors and by the Ministry of Justice's Correction Bureau. Policing is prefectural. This split — national everything except a prefecturally administered police — is the single most important structural fact about the Japanese system for this platform.",
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Reading the law in translation',
          text: 'The statutes named on these pages are cited in the official English translations the Ministry of Justice publishes through its Japanese Law Translation database. That database states plainly that its translations "are to be used solely as reference materials" and that "only the original Japanese texts have legal effect". These pages therefore treat the English as a reliable guide to what a provision does, never as the authoritative text; anything turning on the precise legal wording rests on the Japanese original.',
        },
      ],
      uncertainty: [
        'Constitutional provisions are described from the official English translation, which is a reference text only; the authoritative version is Japanese.',
        'The relationship between the Diet, the Cabinet and the courts, and the detail of the ordinance-making powers of prefectures and municipalities, have not been researched in depth.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Japan',
      summary:
        'Prefectural police under prefectural public safety commissions do the policing; the National Public Safety Commission and National Police Agency coordinate and set standards on matters of national concern — a national police organisation, not a national police force.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['jp-npa-police-of-japan-2020'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Policing in Japan is administered at the prefectural level. Each of the 47 prefectures maintains its own police, and each prefecture has the authority to carry out police duties within its area. Over that prefectural policing sits a national organisation — the National Public Safety Commission and, under it, the National Police Agency — whose role is to coordinate and to supervise the prefectural police on matters of national concern, and to set general standards.',
          claim: 'fact',
          sources: ['jp-npa-police-of-japan-2020'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'A national organisation, not a national force',
          text: 'The distinction the National Police Agency draws about itself is the one to hold onto. The Police Act lets the national government establish a central police organisation to control and supervise the prefectural police forces on matters of national concern; the National Public Safety Commission draws up basic policies and regulations, coordinates police administration on national matters, and sets general standards. It does not staff the patrol car or run the local investigation — the prefectural police do. Calling the National Police Agency "Japan\'s FBI" gets this backwards: it is a coordinating and standard-setting body over prefectural forces, not a federal investigative agency operating cases of its own in the American sense.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Prefectural public safety commissions',
              description:
                "Each prefecture's police operate under a prefectural public safety commission — a civilian body interposed between the prefectural government and the police, mirroring at prefectural level the civilian oversight the National Public Safety Commission provides nationally. The prefectural police are not branches of the National Police Agency; they are the prefecture's own police under its commission.",
            },
            {
              term: 'Tokyo is the special case',
              description:
                "Tokyo's prefectural police is the Metropolitan Police Department, which uses its own Japanese name, Keishicho (警視庁). It is the prefectural police of the Tokyo metropolis, distinctive because of its scale and its position in the capital — not a national police force and not a branch of the National Police Agency.",
            },
            {
              term: 'The ordinary pattern: Osaka',
              description:
                "Most prefectures follow the standard model, of which Osaka is an example: the Osaka Prefectural Police, under the Osaka Prefectural Public Safety Commission. The pairing of Tokyo and Osaka on this platform is meant to show that the prefectural pattern is the general rule and Tokyo's specially named force is the exception, not the other way round.",
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The Koban, described plainly',
          text: 'Japanese neighbourhood policing is organised partly through the Koban (police box) and the Chuzaisho (residential police box), which the National Police Agency describes as subordinate units of a police station. They are a real and distinctive feature of how prefectural police are deployed locally. This page notes what they are — small local police posts within the prefectural structure — without treating them as a symbol or making claims about their social effect, which this pilot has not researched.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the legal structure of policing in Japan and the division between national coordination and prefectural administration. It does not describe police tactics, deployment, surveillance or investigative capability, or operational procedure, and it will not.',
        },
      ],
      uncertainty: [
        'The internal organisation, ranks and units of the prefectural police, and the detail of the national/prefectural funding and appointment arrangements, have not been researched and are not described.',
        'The circumstances in which national coordination intensifies (for example in a large-scale emergency) are noted only in general terms; the statutory detail has not been researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Japan',
      summary:
        'The Supreme Court and the lower courts — high, district, family and summary — established under the Court Act, with the lay judge (saiban-in) system in which citizens sit alongside professional judges for certain serious criminal cases only.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['jp-courts-judicial-system'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Japan has a single national court system. The whole judicial power is vested in the Supreme Court of Japan and in the lower courts established under the Court Act: the high courts, the district courts, the family courts and the summary courts. There is no separate prefectural or municipal court system; the courts are national, though they sit in locations across the country.',
          claim: 'fact',
          sources: ['jp-courts-judicial-system'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Supreme Court',
              description:
                'The highest court and the court of final appeal. It also has the power of constitutional review — but it exercises that power only when deciding an actual case before it, not by ruling on a law in the abstract. There is no separate constitutional court in Japan.',
            },
            {
              term: 'High courts and district courts',
              description:
                'The high courts hear appeals; the district courts are the principal courts of first instance for most serious civil and criminal matters. Together they form the main tiers between the summary courts and the Supreme Court.',
            },
            {
              term: 'Family courts',
              description:
                'The family courts handle domestic-relations cases and juvenile cases. They are a distinct part of the system, not a division of the ordinary civil or criminal courts.',
            },
            {
              term: 'Summary courts',
              description:
                'The summary courts handle minor civil claims and lighter criminal cases. They are the lowest tier and the most numerous, dealing with the everyday, lower-value matters.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The lay judge (saiban-in) system — not a jury',
          text: 'Since it began on 21 May 2009, Japan has run a lay judge system, saiban-in (裁判員), in which randomly selected citizens take part in trials. It is important to state precisely what it is and is not. Lay judges sit TOGETHER WITH professional judges on a mixed panel and decide both the verdict and the sentence with them; they are not a separate jury that decides guilt on its own. And it applies only to certain serious criminal cases — broadly, offences punishable by death or by life imprisonment, and intentional criminal acts that cause death — not to trials in general. The Supreme Court describes it as having points in common with a jury system; on these pages it is called the lay judge system, and where "jury" is unavoidable as a comparison it is always qualified, never used as a plain equivalent.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The jurisdiction and case thresholds of each court, the routes of appeal, the appointment and independence of judges beyond the constitutional guarantee, and the detailed operation of the lay judge system have not been researched from the primary statutes and are not described.',
        },
      ],
      uncertainty: [
        'The precise jurisdictional boundaries between the courts, and the appeal routes between them, have not been researched from the Court Act itself.',
        "The categories of case that go before a lay judge panel are stated in general terms from the Supreme Court's description, not enumerated from the governing statute.",
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Japan',
      summary:
        'Public prosecutors, in offices that mirror the court hierarchy, decide whether to bring charges — the Supreme, high, district and local public prosecutors’ offices, attached to the courts but not part of them.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['jp-moj-prosecutors', 'jp-code-criminal-procedure'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal prosecution in Japan is conducted by public prosecutors. The Ministry of Justice describes four types of Public Prosecutors’ Office — the Supreme Public Prosecutors’ Office, the high public prosecutors’ offices, the district public prosecutors’ offices and the local public prosecutors’ offices — located to correspond to the courts they appear before. The offices are attached to the courts but are not part of them.',
          claim: 'fact',
          sources: ['jp-moj-prosecutors'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Who decides to charge',
          text: 'Under the Code of Criminal Procedure, prosecution is instituted by a public prosecutor — the charging decision belongs to the prosecutor, who also holds the discretion whether to prosecute at all. That places the decision to bring a case with the prosecutor rather than with the investigating police, a separation the investigations page returns to. This page describes the structure of the prosecution service and where the charging power sits; it is grounded in the Ministry of Justice’s own description and in the Code of Criminal Procedure.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'The relationship between the Minister of Justice and the public prosecutors — in particular any power of general direction — is deliberately not described here. The Public Prosecutor’s Office Act, which governs it, is not among the statutes available in official English translation, and this pilot does not assert the content of a law it has not read. The page states the structure and the charging power, which the read sources support, and stops there.',
        },
      ],
      uncertainty: [
        'The Minister of Justice’s relationship to the prosecution service is not described, because the governing Act is not available in an official English translation and was not read.',
        'The internal ranks and specialised units of the prosecution service, and the practical operation of prosecutorial discretion, have not been researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Japan',
      summary:
        'How investigation and charging are divided: the police act as judicial police officials investigating offences, public prosecutors may also investigate, and it is the prosecutor who institutes the prosecution.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['jp-code-criminal-procedure', 'jp-npa-police-of-japan-2020'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Japan is carried out mainly by the police, who act as judicial police officials investigating offences under the Code of Criminal Procedure. Because policing is prefectural, the day-to-day investigative work is done by the prefectural police within their areas, within the national framework of the Code.',
          claim: 'fact',
          sources: ['jp-code-criminal-procedure', 'jp-npa-police-of-japan-2020'],
        },
        {
          kind: 'paragraph',
          text: 'Public prosecutors are not confined to the courtroom. Under the Code of Criminal Procedure a public prosecutor may, when necessary, investigate an offence himself, and it is the public prosecutor who institutes the prosecution. So investigation is shared — principally the police, with the prosecutor able to investigate — while the decision to charge rests with the prosecutor alone.',
          claim: 'fact',
          sources: ['jp-code-criminal-procedure'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why the division matters',
          text: 'Separating the power to investigate from the power to charge is a structural safeguard: the body that gathers the evidence is, for the charging decision, answerable to a prosecutor who decides whether that evidence justifies a prosecution. This page describes that allocation of responsibility between police and prosecutor; the framing is ours, resting on the Code of Criminal Procedure’s own assignment of these roles.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who decides to charge. It does not describe investigative techniques, interrogation or detention practice, surveillance, or forensic methods, and nothing here would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The rules governing arrest, detention and the questioning of suspects — a much-discussed feature of Japanese criminal procedure — have not been researched from the primary statute and are not described.',
        'The role of the courts in authorising investigative measures, such as warrants, has not been researched here.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Japan',
      summary:
        'Penal institutions — prisons, juvenile prisons and detention houses — are run nationally by the Ministry of Justice’s Correction Bureau and its eight regional correction headquarters.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['jp-moj-corrections'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Corrections in Japan are administered nationally. In Japanese usage prisons, juvenile prisons and detention houses are together called "penal institutions", and the Ministry of Justice states that these penal institutions are under its jurisdiction and are supervised by one of its internal departments, the Correction Bureau, together with the eight regional correction headquarters that serve as its field offices.',
          claim: 'fact',
          sources: ['jp-moj-corrections'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'National, unlike the police',
          text: 'Corrections is a clean contrast with policing. Where the police are administered prefecturally, the penal institutions are run through a single national chain — the Ministry of Justice, its Correction Bureau, and the regional correction headquarters beneath it. A description of the corrections system is therefore a description of one national system, with none of the prefecture-by-prefecture qualification that the law-enforcement page has to carry.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'No prison figure is published here',
          text: 'The other country pages on this site each carry a single, carefully scoped prison-population statistic. Japan does not, and that is deliberate. Japan’s official corrections statistics are published in linked spreadsheet tables and in a large annual White Paper on Crime that could not be verified to the standard those other figures meet. Rather than approximate a number or lift one from a secondary source, this pilot states the structure of the corrections system and omits the statistic. The reasoning is recorded in the model-findings document.',
        },
      ],
      uncertainty: [
        'No Japanese prison-population, capacity or density figure is stated, because none could be verified to the required standard; only the administrative structure of corrections is described.',
        'The distinction between the treatment of adults and of juveniles, the role of the juvenile classification homes and training schools, probation and non-custodial measures, and the inspection of conditions have not been researched and are not described.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Japan',
      summary:
        'Every source used for the Japan pages, what each supports, how it was accessed and verified, and — for the statutes — that the authoritative text is Japanese and the English is reference only.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [
        'jp-constitution',
        'jp-code-criminal-procedure',
        'jp-npa-police-of-japan-2020',
        'jp-courts-judicial-system',
        'jp-moj-prosecutors',
        'jp-moj-corrections',
        'jp-law-translation-policy',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Japan pages rest on seven sources: the Constitution of Japan and the Code of Criminal Procedure (both from the Ministry of Justice’s Japanese Law Translation database), the National Police Agency’s "Police of Japan 2020", the Supreme Court’s account of the judicial system, two Ministry of Justice pages (the public prosecutors’ offices, and the penal institutions under the Correction Bureau), and the Japanese Law Translation database’s own statement of the status of its translations. Each was read or retrieved and confirmed on 25 July 2026.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The authoritative text is Japanese',
          text: 'The two statutes cited — the Constitution and the Code of Criminal Procedure — are quoted from the official English translations the Ministry of Justice publishes, which the database itself describes as reference materials to be used solely to aid understanding, with only the original Japanese texts having legal effect. These pages rely on the English for what a provision does, never as the authoritative wording. The other sources are the institutions’ own English descriptions of themselves.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: 'Some Japanese official sites block or truncate automated access while serving normally to a browser. The National Police Agency’s "Police of Japan 2020" is a large PDF whose text was extracted directly from the report file; the Ministry of Justice and Japanese Law Translation pages were read directly or retrieved by searching for the exact official page and cross-corroborated. The source register records the access path for each source, and no verbatim quotation is attributed to a source that was not read in full.',
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope, translation status and stated limitations of every source, is published in the repository at docs/research/japan-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Japan',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'The organisation of forensic science in Japan (the National Research Institute of Police Science and the prefectural forensic arrangements) has not been read to the standard required, and forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Japan',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Immigration control, customs and the coast guard in Japan are administered by several distinct national bodies whose roles must be distinguished carefully, and they could not be researched to that standard here. It is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Japan',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Oversight in Japan runs through several channels — the national and prefectural public safety commissions as civilian oversight of the police, the courts, prosecutorial review machinery and administrative complaint routes — that need to be distinguished precisely rather than merged into a single "oversight" description. The public safety commissions are noted on the law-enforcement page for context; a full oversight module was not researched to the required standard and is deferred.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Japan',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Japanese institutional history — the Meiji-era codes, the pre-war system, the post-war Constitution and the 1947-48 reorganisation of the police, courts and prosecution — cannot be written responsibly from general knowledge. It requires scholarly and archival sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Japan',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the Constitution coming into effect in 1947 and the start of the lay judge system on 21 May 2009 — are only a beginning; assembling a responsible timeline needs primary sources for each entry, which were not gathered here.',
    },
  ],
};
