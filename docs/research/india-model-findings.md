# India — model findings

What India added to the comparative picture, and what it reused.

## 1. The batch's first genuine sub-national case — and the clearest "country answer would lie" example

India is the first Batch C country that **cannot** be described at country level. Because the Seventh
Schedule makes police, public order and prisons exclusive State subjects, the answer to "who runs the
police here" or "who runs the prisons here" is a different State institution in each of the 28 States.
A single country record would have to give one answer where there are dozens. So India is modelled as
a **Union record plus State records**, reusing the exact "federal record + representative subset"
pattern already used for Germany (federal + three Länder) and the United States (federal + four
sub-units): a Union record for the framework, apex courts, national codes and federal agencies, and
three illustrative State records (Maharashtra, Tamil Nadu, Uttar Pradesh) carrying police,
prosecution and prisons. **No new schema** — the `federal`/`state` levels and the
`legislativeCompetence` matrix were already there.

## 2. A distinct federal shape: national codes, State institutions, integrated judiciary

India differs from every federation already on the site:

|                                | Germany               | United States          | **India**                                |
| ------------------------------ | --------------------- | ---------------------- | ---------------------------------------- |
| Criminal code                  | Federal               | Mostly State           | **National (Concurrent, Union-enacted)** |
| Police / prosecution / prisons | Länder                | Mostly State           | **State**                                |
| Court system                   | Federal + Land (dual) | Federal + State (dual) | **Integrated (single hierarchy)**        |

The integrated judiciary is the key contrast: India has one court hierarchy under the Supreme Court,
not two parallel systems. So the Union record's `courtScope` is `own` (unlike Germany's `shared`),
while the State records' `courtScope` is `shared` — they administer the subordinate courts under a
national High Court's control rather than owning a separate system. This is expressed entirely with
existing scope values.

## 3. A restricted claim that is explicitly an aggregate

Because prisons are State-run, India's national prison figure (511,542 / capacity 453,769 / 112.7%,
above capacity) is a **sum across many separate systems**. The restricted claim says so in its
statement and limitation — a national aggregate does not establish the position of any State system,
and State-level occupancy varies widely around it. This is a new honesty wrinkle the earlier
(unitary) restricted claims did not face, and the World Prison Brief itself corroborates it: its
"prison administration" field reads "Governments of States and Union Territories".

## 4. Common-law investigation, State-policed

India reuses the common-law police-led investigation (police investigate under magistrate oversight;
the prosecutor does not direct it), already seen for New Zealand and Singapore — but here the police
are State forces, not one national force. The comparison "who directs a criminal investigation"
therefore has to be answered at two levels for India: police-led (like the other common-law systems)
and State-run (unlike them).

## Net schema change

**None.** India reused the `federal`/`state` levels, the `legislativeCompetence` matrix, and the
representative-subset modelling pattern. Its distinctiveness — national codes over State institutions,
an integrated judiciary, and an aggregate prison figure — lives in the scope values, the prose, and
the tests.
