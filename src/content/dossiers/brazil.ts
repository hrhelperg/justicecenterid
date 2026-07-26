import type { CountryDossier, RestrictedClaim } from '../types';

/**
 * The Brazil dossier — the federal-law / decentralised-institutions pilot.
 *
 * Research date: every institutional fact was checked against its cited source on 2026-07-25
 * (recorded as `factsVerifiedOn`, not a build date).
 *
 * Source access: planalto.gov.br (the Constitution and the codes), portal.stf.jus.br and
 * cnj.jus.br reset or refuse an ordinary programmatic request, but serve the full text to a
 * browser user-agent. The Constitution, the Lei de Execução Penal and the Código de Processo
 * Penal were retrieved that way and read in full; the prison statistic was extracted from the
 * primary SISDEPEN PDF; the police and Ministério Público facts were read from the institutions'
 * own gov.br / mp.br pages. No verbatim quotation is attributed to a source not read in full.
 *
 * Two things define this dossier and every module holds the line on both:
 *
 *  1. FEDERAL LAW, DECENTRALISED INSTITUTIONS. Brazil is a federation, but the criminal LAW is
 *     unified and federal — penal and procedural law are the exclusive competence of the Union
 *     (CF Art. 22, I) — while the police, courts, prosecution and prisons exist at both the
 *     federal and the state level. The states administer justice without writing the criminal
 *     law, which is the opposite of the United States.
 *
 *  2. INSTITUTIONS THAT DO NOT MAP ONTO THE OTHER PILOTS. A single state runs two separate
 *     police forces with different constitutional functions (an investigative Polícia Civil and
 *     a preventive Polícia Militar), and the Ministério Público is not a prosecutor's office but
 *     an autonomous institution independent of all three branches. These pages describe both in
 *     their own terms rather than forcing them into a foreign template.
 */

/**
 * The pilot's restricted claim — a properly scoped prison-occupancy figure.
 *
 * Brazil's prison system is split between a small federal system and 27 state/DF systems, so —
 * like the German and US claims — the figure aggregates separately administered systems. What
 * makes it publishable is that the official SISDEPEN report states a single-day total for a
 * precisely defined population ("presos em cela física") with its own capacity, so population,
 * capacity and the deficit can be stated exactly rather than approximated.
 */
const BRAZIL_PRISON_OCCUPANCY: RestrictedClaim = {
  id: 'br-prison-occupancy-2024',
  category: 'detention-capacity',
  statement:
    'On 31 December 2024, the state and Federal District prison systems held 670,265 people in physical cells against 494,379 places — a deficit of 175,886 places.',
  claimType: 'fact',
  sources: ['br-sisdepen-2s2024'],
  sourceScope:
    'SENAPPEN / Diretoria de Inteligência Penal, SISDEPEN 17º ciclo, "Relatório do 2º Semestre de 2024", reference period July–December 2024, snapshot date 31 December 2024. The category is "presos em cela física" — people who, regardless of daytime release for work or study, sleep in the prison establishment; it is tabulated separately from prisão domiciliar (home detention). Totals: population 670,265; capacity of places 494,379; deficit of places 175,886.',
  jurisdiction: 'BR',
  temporalScope: 'current',
  verifiedOn: '2026-07-25',
  metricPeriod: '2024-12-31',
  limitation:
    'A single-day total that aggregates 27 separately administered state and Federal District prison systems and describes none of them individually. It counts only people held in physical cells, excluding the large home-detention population the same report tabulates separately, so it is not the total number of people under penal custody in Brazil. The report prints population, capacity and deficit but no occupancy percentage, so any rate is a derivation rather than an official figure. It is a snapshot, not an annual average, and supports no comparison with any other country.',
};

export const BRAZIL: CountryDossier = {
  countryCode: 'BR',
  slug: 'brazil',
  name: 'Brazil',
  officialName: 'Federative Republic of Brazil (República Federativa do Brasil)',
  summary:
    'Brazil is a federation whose criminal law is unified and federal but whose institutions are decentralised. Six constitutional police forces divide the work between the Union and the states, an autonomous Ministério Público holds the power to prosecute, and a five-branch judiciary is topped by a Supreme Federal Court that is also the constitutional court.',
  status: 'published',
  review: 'fact-checked',
  safetyReview: 'cleared',
  updatedOn: '2026-07-25',
  reviewedOn: '2026-07-25',
  factsVerifiedOn: '2026-07-25',
  jurisdictionIds: ['br', 'br-sp', 'br-df'],
  sources: ['br-cf-1988'],
  uncertainty: [
    'Brazilian law is authoritative only in Portuguese; the Constitution and the codes are cited from the official Portuguese text (planalto.gov.br), and the English on these pages is a descriptive rendering, not an official translation.',
    'The forensic system, border and customs arrangements, external oversight machinery and institutional history have not been researched to the required standard and are not described.',
    'No individual state has been researched beyond the constitutional structure; São Paulo and the Federal District appear in the jurisdiction model as samples, not as researched institutions.',
  ],
  blocks: [
    {
      kind: 'callout',
      variant: 'scope',
      title: 'One criminal law, many institutions',
      text: "Brazil is a federation — the indissoluble union of the Union, the states, the Federal District and the municipalities, all autonomous (Constitution, Article 18). But its federalism runs differently from the United States on the one axis that matters most here: the criminal LAW is not the states' to write. Penal and procedural law are the exclusive competence of the Union (Article 22, I), so there is one Penal Code and one Code of Criminal Procedure for the whole country. What is decentralised is the machinery — the police, the courts, the prosecution service and the prisons all exist at both the federal and the state level. A Brazilian state administers justice; it does not legislate the crime.",
    },
    {
      kind: 'paragraph',
      text: "That single design decision explains most of what follows. Because the law is federal and uniform, the questions that dominate the United States pages — fifty criminal codes, which state's law applies — do not arise. Because the institutions are decentralised, the questions that dominate a unitary country do not arise either: there is no single national police, no single prosecution service, and two parallel court systems, federal and state.",
      claim: 'fact',
      sources: ['br-cf-1988'],
    },
    {
      kind: 'callout',
      variant: 'note',
      title: 'Reading the law in Portuguese',
      text: 'Brazilian law has legal effect only in Portuguese. The Presidência da República publishes the Constitution and the codes in Portuguese and hosts no official English translation; the higher courts publish English descriptions of themselves, but those carry the standard caveat that the Portuguese text prevails. These pages therefore keep the Portuguese names of the institutions — Ministério Público, Polícia Civil, Polícia Militar, delegado — and treat any English as a description, never as the authoritative text. Where an English word would import the wrong institution (a "district attorney" for a member of the Ministério Público, say), the Portuguese is kept instead.',
    },
    {
      kind: 'callout',
      variant: 'analysis',
      title: 'Two things that surprise a first reader',
      text: 'Two features of the Brazilian system have no clean equivalent on the other country pages. First, a single state runs TWO police forces at once, with different constitutional jobs: the Polícia Civil investigates crimes, and the Polícia Militar does the visible, preventive street policing. They are separate institutions, not two ranks of one force. Second, the Ministério Público — which holds the power to prosecute — is not part of the executive, the legislature or the judiciary; it is an autonomous institution the Constitution places on its own footing. The law-enforcement and prosecution modules take each in turn.',
    },
    {
      kind: 'paragraph',
      text: 'The institutions that carry the system, then, are these. Public security (Article 144) is divided among six forces — three federal, and, in each state, an investigative and a preventive police. Prosecution belongs to the Ministério Público (Articles 127–129), federal and state. The courts (Articles 92–126) run in two systems, federal and state, plus three specialised branches, under a Supreme Federal Court. And the prisons are run by the states, over a small federal system, under a national execution law. The module pages take each in turn.',
      claim: 'fact',
      sources: ['br-cf-1988'],
    },
  ],
  modules: [
    /* -------------------------------------------------------------------- */
    /* PUBLISHED                                                            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'justice-system',
      title: 'The justice system of Brazil',
      summary:
        "A federation under the 1988 Constitution in which the criminal law is the Union's exclusive competence but the institutions are decentralised — with the due-process guarantees of Article 5 running throughout.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['br-cf-1988'],
      relatedGuides: ['what-is-justice', 'what-is-the-rule-of-law', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Brazil is a constitutional federal republic governed by the Constitution of 1988 (Constituição da República Federativa do Brasil), promulgated on 5 October 1988. Article 1 constitutes the Republic as the indissoluble union of the states, the municipalities and the Federal District, and a Democratic State of Law; Article 2 makes the Legislative, the Executive and the Judiciary independent and harmonious powers.',
          claim: 'fact',
          sources: ['br-cf-1988'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Federal law, decentralised administration',
          text: 'The defining structural fact is the split between who legislates and who administers. Under Article 22, I, penal law and procedural law are the exclusive (privativa) competence of the Union — a single criminal law for the whole country. But the institutions that apply it are largely run by the states: state police, state courts, state prosecutors, state prisons. This is the German pattern — federal law, sub-national administration — carried further, and it is the reverse of the United States, where each state writes its own criminal code. Direito penitenciário (penal-execution law) is one deliberate exception: Article 24, I makes it a concurrent competence of the Union and the states.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The guarantees of Article 5',
              description:
                'The individual rights that frame criminal justice are constitutional and national. Article 5 guarantees due process of law ("ninguém será privado da liberdade ou de seus bens sem o devido processo legal", LIV), the adversarial process and full defence (contraditório e ampla defesa, LV), the inadmissibility of illegally obtained evidence (LVI), the presumption of innocence until final conviction ("ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória", LVII), and habeas corpus (LXVIII).',
            },
            {
              term: 'Who legislates, who administers',
              description:
                'The Union legislates the criminal law and criminal procedure (Article 22, I). The states organise and run the institutions — police, courts, prosecution, prisons — within the constitutional framework, holding the residual competences not withheld from them (Article 25 §1). Municipalities have a limited role in public security.',
            },
            {
              term: 'One country, parallel systems',
              description:
                'Because the institutions are federal and state at once, several of them come in pairs: a federal police alongside state police, federal justice alongside state justice, the Ministério Público da União alongside the state Ministérios Públicos. The module pages describe each pairing.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The law is Portuguese',
          text: 'The constitutional provisions on this page are cited from the official Portuguese text published by the Presidência da República. There is no official English version; the English here describes what a provision does and is not the authoritative wording.',
        },
      ],
      uncertainty: [
        'Constitutional provisions are cited from the authoritative Portuguese text; the English is descriptive only.',
        'The precise federal/state division of legislative competence beyond the criminal-law and penal-execution headings (Articles 22 and 24) has not been researched in detail.',
      ],
    },
    {
      moduleId: 'law-enforcement',
      title: 'Law enforcement in Brazil',
      summary:
        'The six police forces of Article 144 — three federal, and in each state an investigative Polícia Civil and a preventive Polícia Militar — and why a single state runs two forces at once.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['br-cf-1988', 'br-pf-competencias', 'br-prf-competencias'],
      relatedGuides: [
        'why-societies-need-law-enforcement',
        'police-and-law-enforcement-difference',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Public security in Brazil is set out in Article 144 of the Constitution, which makes it "dever do Estado, direito e responsabilidade de todos" and lists the organs that carry it out. There are six: the polícia federal, the polícia rodoviária federal and the polícia ferroviária federal (all federal); the polícias civis and the polícias militares com corpos de bombeiros militares (in each state); and, since a 2019 amendment, the polícias penais. Three of these are federal forces and two are the state forces every state maintains.',
          claim: 'fact',
          sources: ['br-cf-1988'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Two forces, one state — the thing to understand',
          text: 'The feature with no equivalent on the other country pages is that each state runs two distinct police forces with different constitutional jobs. The Polícia Civil is the investigative police — "polícia judiciária", directed by career delegados de polícia, responsible for investigating crimes (Article 144 §4). The Polícia Militar does "a polícia ostensiva e a preservação da ordem pública" — the visible, preventive, public-order policing (§5). They are separate institutions, not two ranks of one force, and both answer to the state Governor (§6). Describing "the state police" as a single body would misstate how Brazilian policing works.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'The federal forces',
              description:
                'The Polícia Federal is a Union body that exercises, in its own words, "com exclusividade, as funções de polícia judiciária da União" — investigating federal crimes — and carries out "polícia marítima, aeroportuária e de fronteiras" and the repression of drug trafficking, smuggling and related offences. The Polícia Rodoviária Federal patrols the federal highways ("o patrulhamento ostensivo das rodovias federais"), and the Polícia Ferroviária Federal the federal railways.',
            },
            {
              term: 'Polícia Civil (state, investigative)',
              description:
                'The state judicial police. Directed by career delegados de polícia, it investigates criminal offences other than military ones, reserving the competence of the Union (Article 144 §4). It is the force that conducts the inquérito policial described on the investigations page.',
            },
            {
              term: 'Polícia Militar (state, preventive)',
              description:
                'The state force responsible for ostensive policing and the preservation of public order (Article 144 §5). The corpos de bombeiros militares, alongside their firefighting role, carry out civil-defence duties. Both are constitutionally "forças auxiliares e reserva do Exército" but are commanded by the state Governor, not the army.',
            },
            {
              term: 'Municipal guards, and penal police',
              description:
                'Municipalities MAY create guardas municipais to protect municipal property, services and installations (Article 144 §8) — a limited role, not general policing. The polícias penais (added in 2019) staff the prison system. Neither displaces the state police.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'Federal and state forces coexist; they do not command each other',
          text: 'The three federal forces and the two state forces operate on their own constitutional mandates. The Polícia Federal is not a national police force sitting above the state police, and the state police are not branches of it. The Constitution places the state Polícia Civil and Polícia Militar under the state Governors (§6); no ordinary power of the federal forces to command them was found. Cooperation across the levels is routine; a chain of command across them is not the structure.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes the constitutional structure of Brazilian policing and the division of functions between the forces. It does not describe deployment, tactics, surveillance capability, operational procedure, or anything that would help a person anticipate, frustrate or evade the police, and it will not.',
        },
      ],
      uncertainty: [
        'The internal organisation, ranks and specialised units of the federal and state forces have not been researched and are not described.',
        'The distinctive arrangement in the Federal District — whose police are organised and maintained by the Union while answering to the DF Governor — is recorded in the jurisdiction model but not researched at the institutional level here.',
        'The role and regulation of the guardas municipais beyond their constitutional basis (and Lei 13.022/2014) has not been researched.',
      ],
    },
    {
      moduleId: 'courts',
      title: 'Courts in Brazil',
      summary:
        'Two court systems, federal and state, plus three specialised branches, under a Supreme Federal Court that is also the constitutional court — with the Conselho Nacional de Justiça as administrative overseer.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['br-cf-1988'],
      relatedGuides: ['what-do-courts-do', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Article 92 of the Constitution lists the organs of the Judiciary: the Supremo Tribunal Federal (STF); the Conselho Nacional de Justiça (CNJ); the Superior Tribunal de Justiça (STJ); the Tribunal Superior do Trabalho (TST); the federal courts (Tribunais Regionais Federais and federal judges); and the courts of the three specialised branches and of the states. Two systems run in parallel — federal justice and state justice — alongside three specialised jurisdictions.',
          claim: 'fact',
          sources: ['br-cf-1988'],
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Supremo Tribunal Federal (STF)',
              description:
                'The apex court, whose primary role is "a guarda da Constituição" (Article 102). Brazil has no separate constitutional court: the STF is both the highest court and the constitutional court. It exercises constitutional review both in the abstract — through the ação direta de inconstitucionalidade and the ação declaratória de constitucionalidade (Articles 102–103) — and incidentally, in any concrete case, subject to the full-bench majority rule of Article 97.',
            },
            {
              term: 'Superior Tribunal de Justiça (STJ)',
              description:
                'Below the STF, the STJ is the highest court for non-constitutional federal law, standardising its interpretation across the country. It sits above both the federal and the state courts on questions of federal statutory law.',
            },
            {
              term: 'Federal and state justice',
              description:
                'Federal justice (Article 106) runs through the Tribunais Regionais Federais and federal judges, hearing matters that involve the Union and federal interests. State justice (Article 125) is organised by each state under its own constitution, topped by a Tribunal de Justiça, and hears the bulk of ordinary civil and criminal cases.',
            },
            {
              term: 'The specialised branches',
              description:
                'Three subject-matter jurisdictions run alongside the ordinary courts, each with its own hierarchy: the labour courts (Justiça do Trabalho, topped by the TST), the electoral courts (Justiça Eleitoral, topped by the TSE), and the military courts (Justiça Militar, topped by the STM).',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The CNJ oversees the courts but does not judge cases',
          text: 'The Conselho Nacional de Justiça (Article 103-B), created in 2004, is an organ of the Judiciary but not a court. Its role is "o controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes" — administrative and financial oversight of the judiciary and the conduct of judges. It is the judiciary\'s internal-control body, and it does not decide the cases the courts hear.',
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The detailed jurisdiction of each court, the routes of appeal, the composition and appointment of the higher courts beyond the constitutional outline, and the recent role of the STF in high-profile matters have not been researched from the primary sources and are not described.',
        },
      ],
      uncertainty: [
        'The competence lists of the STF (Article 102) and STJ (Article 105), and the appeal routes between the courts, are stated only at the level of the organ-enumerating articles.',
        'The number of Tribunais Regionais Federais and the composition of the higher courts change with amendments and were not separately verified.',
      ],
    },
    {
      moduleId: 'prosecution',
      title: 'Prosecution in Brazil',
      summary:
        "The Ministério Público — not a prosecutor's office but an autonomous institution independent of all three branches, holding the exclusive power of public criminal prosecution and the role of guardian of the legal order.",
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['br-cf-1988', 'br-mpu-institucional'],
      relatedGuides: ['what-does-a-prosecutor-do', 'why-justice-systems-need-oversight'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Prosecution in Brazil belongs to the Ministério Público. Article 127 defines it as "instituição permanente, essencial à função jurisdicional do Estado", charged with defending "a ordem jurídica, o regime democrático e os interesses sociais e individuais indisponíveis". Its institutional principles are unity, indivisibility and functional independence, and it is guaranteed functional and administrative autonomy.',
          claim: 'fact',
          sources: ['br-cf-1988'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: "Not a prosecutor's office",
          text: 'The Ministério Público does not fit the prosecutor-as-part-of-the-executive template of many countries, nor the court-attached prosecutor of others. The Constitution places it on its own footing: it is not part of the executive, the legislature or the judiciary. Its remit is also wider than criminal charging. Under Article 129 it "promove, privativamente, a ação penal pública" — it is the exclusive holder of public criminal prosecution — but it also conducts the inquérito civil and the ação civil pública to protect "o patrimônio público e social, o meio ambiente e outros interesses difusos e coletivos", and it exercises external control over police activity. It is prosecutor and guardian of the legal order at once.',
        },
        {
          kind: 'definitionList',
          items: [
            {
              term: 'Two great branches (Article 128)',
              description:
                'The Ministério Público da União (MPU) comprises four ramos: the Ministério Público Federal (MPF), the Ministério Público do Trabalho (MPT), the Ministério Público Militar (MPM) and the Ministério Público do Distrito Federal e Territórios (MPDFT). Alongside it stand the Ministérios Públicos dos Estados — one for each state. The MPU has functional, administrative and financial autonomy, in its own words.',
            },
            {
              term: 'What it prosecutes',
              description:
                "On the criminal side, the Ministério Público is the exclusive holder of the public criminal action: it decides whether to bring a charge (the denúncia) once the police investigation reaches it. It is not the police, and the charging decision is not the investigator's.",
            },
            {
              term: 'Oversight — the CNMP',
              description:
                'The Conselho Nacional do Ministério Público (Article 130-A), created in 2004, is the external body that oversees the Ministério Público — its administrative and financial conduct and the discipline of its members — chaired by the Procurador-Geral da República. It controls the institution without being part of it.',
            },
          ],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'What this page does not settle',
          text: 'This page states the constitutional character, structure and functions of the Ministério Público. It does not research or characterise how its independence operates in any individual case, the balance between its criminal and civil roles in practice, or the relationship between the Procurador-Geral da República and the executive that appoints them.',
        },
      ],
      uncertainty: [
        "The full list of the Ministério Público's functions (Article 129 has nine) is summarised rather than enumerated.",
        'The relationship between the Ministério Público and the executive, and the practical weight of its civil versus criminal roles, have not been researched.',
      ],
    },
    {
      moduleId: 'investigations',
      title: 'Criminal investigations in Brazil',
      summary:
        'The inquérito policial, led by a delegado — the Polícia Civil for state crimes, the Polícia Federal for federal ones — feeding a charging decision that belongs to the Ministério Público.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'cleared',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['br-cf-1988', 'br-cpp-1941', 'br-pf-competencias'],
      relatedGuides: ['what-is-a-criminal-investigation', 'what-is-due-process'],
      blocks: [
        {
          kind: 'paragraph',
          text: 'Criminal investigation in Brazil is the inquérito policial, governed by the Código de Processo Penal. The investigation is conducted by the polícia judiciária: under the Code, "a polícia judiciária será exercida pelas autoridades policiais" and has as its purpose "a apuração das infrações penais e da sua autoria" (Article 4). In practice that means the state Polícia Civil for ordinary crimes and the Polícia Federal for federal ones, each led by a delegado de polícia.',
          claim: 'fact',
          sources: ['br-cpp-1941', 'br-cf-1988'],
        },
        {
          kind: 'paragraph',
          text: 'The investigation and the decision to prosecute are held by different institutions. The police investigate and assemble the inquérito, which "acompanhará a denúncia ou queixa, sempre que servir de base a uma ou outra" (Code of Criminal Procedure, Article 12). But the charge itself belongs to the Ministério Público, which is the exclusive holder of the public criminal action (Constitution, Article 129, I) and may also requisition investigative measures and the opening of an inquérito.',
          claim: 'fact',
          sources: ['br-cpp-1941', 'br-cf-1988'],
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'Why the split matters',
          text: 'Placing the charging decision with the Ministério Público rather than the investigating police is a structural safeguard: the body that decides whether the evidence justifies a prosecution is not the body that gathered it, and the Ministério Público additionally exercises external control over police activity. This page describes that allocation of responsibility; the framing is ours, grounded in the constitutional and procedural texts.',
        },
        {
          kind: 'callout',
          variant: 'safety',
          title: 'What this page does not describe',
          text: 'This page describes who investigates and who decides to charge. It does not describe investigative techniques, interrogation or detention practice, surveillance, or forensic methods, and nothing here would help a person anticipate, frustrate or evade an investigation.',
        },
      ],
      uncertainty: [
        'The rules on arrest, detention and judicial authorisation of investigative measures have not been researched from the primary statute and are not described.',
        'The boundary between police-led and Ministério Público-led investigation, a much-discussed question in Brazil, is stated only at the structural level.',
      ],
    },
    {
      moduleId: 'corrections',
      title: 'Corrections in Brazil',
      summary:
        'A prison system run mostly by the states over a small federal system, under the national Lei de Execução Penal — and a properly scoped figure showing it well over capacity at the end of 2024.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: ['br-lep-1984', 'br-senappen-institucional', 'br-sisdepen-2s2024'],
      relatedGuides: ['what-is-justice', 'why-justice-systems-need-oversight'],
      restrictedClaims: [BRAZIL_PRISON_OCCUPANCY],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Brazilian prison system runs on the Lei de Execução Penal (Lei 7.210/1984), whose stated objective is "efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado". Administration is split: the "Departamento Penitenciário local, ou órgão similar, tem por finalidade supervisionar e coordenar os estabelecimentos penais da Unidade da Federação a que pertencer" (Article 74) — so each state runs its own prisons — while a federal body runs a small federal system and sets national policy.',
          claim: 'fact',
          sources: ['br-lep-1984'],
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The federal body was renamed in 2023',
          text: 'The federal prison-administration body, historically the Departamento Penitenciário Nacional (DEPEN, Articles 71–72 of the Lei de Execução Penal), was transformed into the Secretaria Nacional de Políticas Penais (SENAPPEN) on 1 January 2023, keeping its functions, within the Ministério da Justiça e Segurança Pública. A description written before 2023 will name DEPEN; the current body is SENAPPEN.',
        },
        {
          kind: 'callout',
          variant: 'analysis',
          title: 'The prison population, stated with its limits',
          text: 'SENAPPEN\'s SISDEPEN report records that on 31 December 2024 the state and Federal District prison systems held 670,265 people in physical cells against 494,379 places — a deficit of 175,886 places. Several qualifications travel with the figure. It aggregates 27 separately administered state and Federal District systems and describes none individually. It counts only people in physical cells ("presos em cela física"), excluding the large home-detention population the same report tabulates separately, so it is not the total number of people under penal custody. The report prints population, capacity and deficit but no occupancy percentage, so any rate is a derivation. And it is a single-day snapshot that supports no comparison with any other country.',
        },
        {
          kind: 'paragraph',
          text: "Because the prisons are run state by state, conditions, regimes and organisation differ between the states, and a national total is the starting point for a state-level question rather than an answer to it. This pilot has researched no individual state's prison system and describes none. The Lei de Execução Penal also lists the Juízo da Execução and the Ministério Público among the organs of penal execution (Article 61); those supervisory roles are named here, not detailed.",
          claim: 'fact',
          sources: ['br-lep-1984'],
        },
        {
          kind: 'callout',
          variant: 'scope',
          title: 'Not covered here',
          text: 'The individual state prison systems, the federal maximum-security establishments, non-custodial sanctions, the polícias penais who staff the prisons, and the monitoring of prison conditions by the Conselho Nacional de Justiça have not been researched for this pilot and are not described.',
        },
      ],
      uncertainty: [
        'No individual state prison system has been researched; the figure is a national aggregate.',
        'The home-detention population, non-custodial measures and the work of the Conselho Nacional de Justiça on prisons are named but not described.',
        'The 670,265 "cela física" figure is one of several population measures the report publishes; the combined figure including home detention is larger and is not used here.',
      ],
    },
    {
      moduleId: 'sources',
      title: 'Sources for Brazil',
      summary:
        'Every source used for the Brazil pages, what each supports, how it was accessed and verified, and that the authoritative text of the law is Portuguese.',
      status: 'published',
      review: 'fact-checked',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      reviewedOn: '2026-07-25',
      factsVerifiedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [
        'br-cf-1988',
        'br-cpp-1941',
        'br-lep-1984',
        'br-pf-competencias',
        'br-prf-competencias',
        'br-mpu-institucional',
        'br-senappen-institucional',
        'br-sisdepen-2s2024',
      ],
      blocks: [
        {
          kind: 'paragraph',
          text: 'The Brazil pages rest on eight sources: the Constitution of 1988, the Código de Processo Penal and the Lei de Execução Penal (all from the Presidência da República); the Polícia Federal and Polícia Rodoviária Federal competências pages; the Ministério Público da União institutional page; the SENAPPEN institutional page; and the SENAPPEN SISDEPEN prison-statistics report. Each was read or extracted and confirmed on 25 July 2026.',
          claim: 'fact',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'The authoritative text is Portuguese',
          text: 'The three legislative sources — the Constitution, the Code of Criminal Procedure and the Lei de Execução Penal — are the authoritative Portuguese texts. There is no official English translation on the Presidência da República site; the higher courts publish English descriptions of themselves, but with the caveat that the Portuguese prevails. These pages rely on the Portuguese for what the law says and treat the English as description.',
        },
        {
          kind: 'callout',
          variant: 'note',
          title: 'How these sources were accessed',
          text: "The Presidência da República site (planalto.gov.br) resets an ordinary programmatic request but serves the full text to a browser user-agent; the Constitution, the Código de Processo Penal and the Lei de Execução Penal were retrieved that way and read in full. The SISDEPEN statistic was extracted from the primary PDF. The police and Ministério Público facts were read from the institutions' own gov.br and mp.br pages. The source register records the access path for each source, and no verbatim quotation is attributed to a source that was not read in full.",
        },
        {
          kind: 'paragraph',
          text: 'The full register, with the precise scope and stated limitations of every source, is published in the repository at docs/research/brazil-source-register.md.',
          claim: 'fact',
        },
      ],
    },

    /* -------------------------------------------------------------------- */
    /* DEFERRED — no route, no sitemap entry, no navigation link            */
    /* -------------------------------------------------------------------- */
    {
      moduleId: 'forensics',
      title: 'Forensic system in Brazil',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Forensic science in Brazil is organised through the perícia criminal and the institutos de criminalística, largely at the state level and with a distinctive debate about the autonomy of forensic experts, and it has not been read to the standard required. Forensics is a safety-sensitive section where an under-sourced description is specifically forbidden.',
    },
    {
      moduleId: 'border-and-customs',
      title: 'Border and customs in Brazil',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Border and customs control in Brazil is divided among the Polícia Federal (immigration and border policing), the Receita Federal (customs) and other bodies across a very long land border, and could not be researched to the required standard here. It is better absent than approximated.',
    },
    {
      moduleId: 'oversight',
      title: 'Oversight and accountability in Brazil',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'pending',
      updatedOn: '2026-07-25',
      temporalScope: 'current',
      sources: [],
      blocks: [],
      deferredReason:
        'Oversight in Brazil runs through several channels — the Conselho Nacional de Justiça for the courts, the Conselho Nacional do Ministério Público for the prosecution service, the corregedorias and ouvidorias of the police, and the external control of police activity by the Ministério Público — that must be distinguished precisely rather than merged. The CNJ and CNMP are named on the courts and prosecution pages for context; a full oversight module was not researched to the required standard and is deferred.',
    },
    {
      moduleId: 'history',
      title: 'Institutional history of Brazil',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'Brazilian institutional history — the empire, the old republic, the Vargas era, the 1964–1985 military dictatorship and the 1988 "Constituição Cidadã" that followed it — cannot be written responsibly from general knowledge, and the military-era policing legacy in particular needs careful, well-sourced treatment. It requires scholarly sources not consulted here.',
    },
    {
      moduleId: 'timeline',
      title: 'Institutional timeline for Brazil',
      summary: 'Not yet researched.',
      status: 'draft',
      review: 'unreviewed',
      safetyReview: 'not-required',
      updatedOn: '2026-07-25',
      temporalScope: 'mixed',
      sources: [],
      blocks: [],
      deferredReason:
        'A timeline requires each milestone to carry its own verified source and date. The dated facts established in this pilot — the Constitution of 1988, the Lei de Execução Penal of 1984, the creation of the CNJ and CNMP in 2004, and the DEPEN→SENAPPEN transformation in 2023 — are only a beginning; a responsible timeline needs primary sources for each entry, which were not gathered here.',
    },
  ],
};
