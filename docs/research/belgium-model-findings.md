# Belgium — model findings

## The finding: federal, but the inverse of Germany — and no new schema

Belgium is the most interesting model test in Batch A, and it **forces no new field, level, scope,
or authority-basis.** The reason is the point:

- Belgium is a **federal state** (Constitution art. 1).
- But its four justice functions are **federal competences**, held and administered at the federal
  level. The Constitution creates single national institutions "for all Belgium" (arts. 142, 147,
  151); the Communities and Regions run none of the courts, prosecution, police or prisons.

So Belgium is modelled as **one `federal` record with every function `own`** and every
`legislativeCompetence` **`exclusive-federal`**. That is the **inverse of Germany**, whose federal
record is `shared` because the Länder administer the courts and prosecution. The model already
distinguishes:

|              | who legislates   | who administers     | model shape                                                                     |
| ------------ | ---------------- | ------------------- | ------------------------------------------------------------------------------- |
| Germany / US | federal (mostly) | the Länder / states | federal record `shared`; sub-national records `own`                             |
| **Belgium**  | federal          | federal             | **one federal record, all `own` + `exclusive-federal`; no sub-national record** |

The distinction between "federal and justice-devolved" and "federal but justice-centralised" is
carried **entirely by the scope values**. This is exactly the kind of case the model was built to
absorb without growing: a genuinely different constitutional arrangement that reuses the existing
vocabulary.

## What needed a new field or value

Nothing. In particular:

- **No Community/Region jurisdiction record** was created. A record exists only where it does
  institutional work, and none of the six sub-national entities administers any of the four justice
  functions. Creating six records that are `none` throughout would be noise, not modelling.
- **The three-apex court structure** (Court of Cassation, Constitutional Court, Council of State),
  the **integrated two-level police**, and the **investigating-judge** investigation model are all
  institutional composition — prose, not schema, following the United States "institution types,
  not named agencies" rule.
- **The prosecution's constitutional position** (independent in the individual case, but the
  minister may order prosecutions and set criminal policy) is an attribute stated in prose, like the
  Netherlands' minister-led OM. `prosecutionScope: 'own'` is still correct.

## What stayed in prose

Institution names in Dutch/French/German; the "Supreme Court"/Court of Cassation translation point
(Constitution art. 147, official English translation); the 1998 merger of the gendarmerie,
municipal and judicial police; and the honest gaps (Federal Police directorates, the federal prison
directorate, Comité P, and the youth-justice competence shift), which were not confirmed from
reachable primary sources.

## Restricted claim

One, in corrections: SPACE I 2024 (12,041 inmates / 10,680 capacity / density 112.7 on 31 January 2024) — above capacity, scoped as a single-day national aggregate supporting no comparison.
