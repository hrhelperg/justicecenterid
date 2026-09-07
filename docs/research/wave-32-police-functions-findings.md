# Police functions, described from named services — model findings

Research findings from Knowledge Expansion Wave 32. Six guides, five new sources, one reused, four
services: British Transport Police, New Zealand Police, and the Dutch national police.

## The gap this closes

The corpus already said specialisations exist. `/law-enforcement/specialist-roles-in-policing`
enumerates ten areas of work and then states, in its own uncertainty:

> Which specialisations exist in any particular service was NOT RESEARCHED … no service is claimed
> to have any specific one.
>
> How a person enters any specialisation, what selection it involves, and what training it requires
> were not researched for any system.

Both are now answered for named services from their own published pages. The boundary is the one
Wave 28 proved for qualification routes: the generic page keeps the country-free shape, and these
pages name systems and cite them.

**The taxonomy is untouched.** `rank-role-and-specialisation` keeps the four-way distinction,
`what-a-police-unit-is` keeps the organisational form, `how-specialist-units-cover-a-country` keeps
unit geography. Guards enforce all three.

## Architecture decision

**No new route family.** The brief warns against creating `/units` or `/specialisations` "simply for
neatness". These are functions within policing and they live in `/law-enforcement` with the other
46 pages. A test asserts no such family exists.

## What the research found

### A police force can be defined by an estate rather than a territory

Almost every force in this corpus is defined by an area. British Transport Police is defined by a
network, and every other structural fact follows from that:

- "We are the only police force in the country with a national footprint, operating across England,
  Wales and Scotland" — one force across two legal systems the corpus treats separately everywhere
  else.
- The estate is "over 10,000 miles of railway track and more than 3,000 stations, platforms and
  transport hubs", plus light rail and trams.
- "BTP is uniquely positioned under the Department for Transport rather than the Home Office."
- It is funded primarily by the rail industry rather than directly from the public purse.

Reporting to a transport ministry places the force inside the department that owns the policy
problem rather than the one that owns policing. Being paid for by the industry it polices raises an
independence question a tax-funded force does not face. Neither is stated as a criticism.

### The public picture of police dogs is the reverse of the published balance

New Zealand Police publish the composition: "Patrol dog teams (previously known as general purpose
teams) operate in all dog sections and police districts and make up **90 percent of capability**."

Detection — the thing most people picture — is the minority. Detector teams are defined by category:
"trained to detect narcotics, firearms, currency and explosives."

Training is central while the capability is distributed: all the service's dogs are trained at one
centre, and patrol teams operate in every district.

### Dog handling is a destination, not a door

> All police dog handlers are officers with about five years policing experience behind them before
> they join the Dog Unit.

That single sentence closes, for this service, the career question the corpus had left open.
Somebody joining that police service cannot join its dog section.

### A maritime unit's published purpose is mostly not crime work

The categories New Zealand Police publish run: crime and disorder; "protecting boaties from
water-based dangers, crime and reckless behaviour"; search and rescue; "public events — overseeing
aquatic events and controlling spectator craft"; and "body recovery, medical emergencies and other
activities".

Only the first is straightforwardly law enforcement. And much of the enforcement is not police-only:
joint patrols run with **seven named agencies** — Customs, the Ministry for Primary Industries,
Immigration, the Department of Conservation, Maritime New Zealand, the Ministry of Transport and
regional councils. Water is regulated by many bodies at once, and a police unit operating there
works inside that crowd.

### Police search and rescue is coordination, and it is bounded by category

> Police coordinates Category One searches (land, inland waterways, subterranean and close-to-shore).

Category Two — aircraft, offshore, emergency locator beacons — is coordinated by the Rescue
Coordination Centre New Zealand, **not** by police. The searching capacity is largely held by
volunteer and partner organisations: Coastguard New Zealand, the Defence Force, rescue helicopter
services, amateur radio emergency communications, and Land Search and Rescue.

The shape is unusual: the specialist skill kept in-house is the organising, not the doing. Officers
in every district are trained as coordinators.

### A neighbourhood role defined by seniority, and by what it refers away

The Dutch police open their description with seniority rather than duties: **"De wijkagent is een
ervaren politieagent"** — an experienced police officer. The function is stated in terms of access:
"een eerste aanspreekpunt in de wijk en een bekend gezicht".

A substantial part of the published description concerns what the officer does _not_ keep — matters
referred to support services, the municipality, housing associations or neighbourhood mediation.
Referral is the function, not an admission of limits.

## A tension preserved rather than resolved

The same system publishes both:

- the wijkagent described as an experienced police officer; and
- a three-year hbo bachelor named **Politiekunde Wijkagent**, recorded elsewhere in this corpus as
  an entry programme.

Both are official. Whether the degree leads into the role directly, or the role is reached later
regardless, was **NOT ESTABLISHED**. Nothing here reconciles them, and a guard fails if a later edit
does so without evidence.

## What was deliberately not used

Every source read for this wave contains operational material. None is used.

- The dog page describes handling and working; nothing about deployment, handling or capability
  appears.
- The maritime page publishes **berth locations and unit establishment** (a named building, a
  senior sergeant, ten constables). Neither is reproduced — precise siting is operational, and one
  unit's establishment does not describe a function.
- Tactical bodies named in the source lists were not made into pages. Public-order and special
  tactical units carry a safety profile where the institutional value does not justify the risk.

## Sources

| id                                 | Body                     | Supports                                                                     |
| ---------------------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| `uk-btp-what-makes-us-different`   | British Transport Police | National footprint, estate size, department, funding                         |
| `nz-police-dog-section`            | New Zealand Police       | Two categories, 90% patrol, central training, five-year handler precondition |
| `nl-politie-wijkagent`             | Nationale Politie        | Seniority, basisteam, first point of contact, referral                       |
| `nz-police-maritime-units`         | New Zealand Police       | Categories of activity, seven-agency joint patrols, support role             |
| `nz-police-search-and-rescue`      | New Zealand Police       | Category One/Two split, volunteer organisations, district coordinators       |
| `nz-police-teams-units` _(reused)_ | New Zealand Police       | The published teams-and-units list                                           |
