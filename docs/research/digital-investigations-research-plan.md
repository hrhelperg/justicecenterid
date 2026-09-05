# Wave 22 research plan — digital investigations, surveillance and investigative authority

Written after the baseline, before any page was drafted. Evidence in
`digital-investigations-country-matrix.md`; publication decisions in
`digital-investigations-cannibalization.md`; sources in `digital-investigations-source-register.md`.

## 1. The problem this wave faces

The baseline found a corpus with a strong constitutional investigation layer and **no digital
vocabulary at all**: `metadata`, `traffic data`, `subscriber`, `stored communications`,
`remote access`, `location data`, `digital forensic*`, `encrypt*`, `data retention`, `computer` and
`device search` each occur **zero times** across all 133 published guides.

That is not a gap in coverage of a topic. It is a gap in a **layer**. Wave 21 published the
constitutional rules about privacy, the home and communications, and recorded in its own
uncertainty statements that the statutes operating beneath those rules were not researched. Wave 22
is that layer.

## 2. Method

**Legal function first, technology label second** (Part B). No page is organised around a device, a
service or a technique. Every page is organised around a legal act: taking a thing, examining it,
obtaining something in transit, obtaining something at rest, freezing, compelling, authorising,
bounding.

The consequence is visible in what did not get published. There is no "phone search" page, no
"cloud" page and no "encryption" page, because none of those is a legal act — they are objects and
conditions that several different legal acts may reach.

**Primary law, read directly.** Every provision quoted was extracted from the publisher's own text
and read in context. Where a translation exists alongside an authoritative original — Germany,
Japan, Spain — the limitation is recorded on the source and on the page.

**Verified negatives count as evidence, and are scoped to the text.** Where a code does not contain
a power, that is a fact about the code and is stated as one. Japan's CCP Art. 222-2 is the clearest
case: the Code says interception "shall be executed based upon other acts", so the absence of an
interception power _from the Code_ is itself the finding, and says nothing about whether Japan has
one.

## 3. The distinctions the evidence had to carry

Part G lists ten. Each was tested against primary text before any page relied on it:

| Distinction                                            | Established by                                                                                                                                                        |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| device seizure ≠ device search                         | StPO §§ 94 / 110 — **different authorities**; Convention Art. 19(3)(a) / 19(1); JP CCP Art. 219(1)                                                                    |
| search ≠ forensic examination                          | StPO § 110(1) assigns the _Durchsicht_ to the prosecution office; Wave 16 owns method and it is not published here                                                    |
| interception ≠ stored access                           | Convention Arts. 21 / 19+18; JP Art. 222-2; US chs. 119 / 121                                                                                                         |
| content ≠ traffic data                                 | Convention Arts. 21 / 20; US § 3127(3); StPO §§ 100a / 100g                                                                                                           |
| subscriber ≠ content                                   | Convention Art. 18(3); US § 2703(c)(1)                                                                                                                                |
| preservation ≠ disclosure                              | Convention Art. 16(2) — preserve "to enable ... to seek its disclosure" — against Art. 18                                                                             |
| legal authority ≠ technical capability                 | JP CCP Art. 197(1); LECrim 588 bis a(2)                                                                                                                               |
| warrant ≠ universal model                              | US § 2703 — subpoena, § 2703(d) order and warrant for three categories                                                                                                |
| judicial authorisation not universal in identical form | Convention Art. 15(2) "judicial **or other** independent supervision"; StPO § 100e single judge / panel / higher court; § 100j no judicial order in the ordinary case |
| remote access ≠ physical search                        | StPO § 110(3) sent. 2 and Convention Art. 19(2) (extension of an authorised examination) against StPO § 100b (intrusion into a system)                                |

Every one of these is also a test in `tests/content/wave22-digital-investigations.test.ts`.

## 4. Jurisdictions

Four national systems and one treaty were researched to primary text: **Germany, Spain, the United
States, Japan**, and the **Council of Europe Convention on Cybercrime**.

The brief listed sixteen. **Twelve carry no Wave 22 claim** and are recorded as NOT RESEARCHED
rather than inferred: France, Canada, the United Kingdom, Ireland, the Netherlands, Czechia,
Switzerland, Brazil, South Africa, Kenya, Australia, New Zealand.

The four chosen are not a convenience sample. They were selected because they place these powers in
four structurally different locations — inside the general procedure code (Germany), in a dedicated
chapter of it (Spain), across three separate statutory chapters (United States), and partly outside
the code altogether (Japan) — which is itself the wave's first finding.

## 5. What was deliberately not published

**Covert surveillance as a subject.** Part K permits deferral where intelligence law is too broad
for a precise institutional guide. This wave researched criminal-procedure powers only. A
surveillance page that failed to separate intelligence authority from criminal procedure would
commit exactly the error the suite's test 11 exists to catch, and separating them properly needs
research not done here.

**Cross-border digital evidence.** Part P permits deferral. The Convention's Second Additional
Protocol was located and not read; the EU e-Evidence Regulation was not researched.

**Everything operational.** No page describes how a search is conducted, how data is extracted,
how any protection works or fails, how a measure could be detected, anticipated or frustrated, or
what any person should do in any encounter. Three candidate pages were rejected on that ground
alone rather than being written in a thinned form.

## 6. The editorial spine

The wave's thesis, carried by all seven pages:

> Digital investigation is not legally special because it uses technology. It raises the ordinary
> questions — who has authority, over what, authorised by whom, for how long, subject to what
> review — and the systems answer them by drawing **different categories** around the data.

The second half matters as much as the first. Part B's warning against forcing analog concepts onto
digital systems is honoured by letting the source law draw the lines: German law distinguishes
stored from prospective location data, US law distinguishes content from records by statutory
definition, and the Convention distinguishes preservation from production. None of those lines
comes from the analog world, and none is invented here.
