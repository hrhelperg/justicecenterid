# Australia pilot — model findings

Australia forced **no new schema**. It reused the Canada pilot's `contracted` value and the
existing `authorityBasis` values, and in doing so it did the one thing the program asked of it:
it **independently validated `contracted`** against a second federation.

---

## AU1 — `contracted` survives (earned by repetition), no schema change

**Real-world fact.** The Australian Capital Territory runs no police of its own. The Commonwealth
Australian Federal Police delivers ACT community policing — "ACT Policing is the community policing
arm of the AFP" — "on behalf of the ACT Government", under the AFP Act 1979 (s.8(1)(a)/(1A)) and a
Policing Arrangement operationalised by a Purchase Agreement the ACT funds. The Northern Territory,
an equally self-governing territory, runs its OWN police force.

**Authoritative source.** `au-afp-actpolicing` (read verbatim), `au-afp-act`, `au-nt-police`.

**Existing-model test.** The Canada pilot added `contracted` = "the jurisdiction holds the
function but procures its delivery from an institution of another order of government under an
agreement." A critic was tasked to REFUTE it against Australia.

**Verdict: survives.** The ACT/AFP case fits `contracted` exactly — holder/client = the ACT
(directs and funds), provider = the Commonwealth AFP (a different order), delivered under an
arrangement; the NT stays `own` (it runs its own force). Because this is a second independent
instance in a differently constructed federation, `contracted` is validated by repetition and is
not an RCMP artefact.

**Refinement (documentary, not schematic).** The enabling law differs: in Canada the agreement is
holder-side (RCMP Act s.20 lets the Minister arrange with a province), in Australia the function is
assigned in the PROVIDER's Commonwealth statute (AFP Act s.8) and the ACT, a Commonwealth-conferred
territory, has a latent-override caveat a sovereign province lacks. `contracted` is therefore
defined AGNOSTICALLY about which order's law creates the arrangement; the enabling instrument and
the provider's identity live in the module prose, not the scope value. No schema change.

**Effect on France / Germany / US / Ireland / Japan / Brazil / Canada.** None — the value already
existed; Australia adds a second user of it. Regression test confirms all prior countries unchanged.

**Status.** Accepted — `contracted` is now earned by two independent countries.

---

## AU2 — The source-of-power difference is already `authorityBasis`

**Fact.** Australian STATES retain residual power (Constitution s.107, read verbatim) and write
their own criminal law — there is no national criminal code — the United States pattern and the
inverse of Canada (federal criminal law, federal residual). The ACT and NT are self-governing under
Commonwealth statutes amendable by the Commonwealth Parliament.

**Considered change.** A critic proposed a new "source-of-power / legal-order basis" enum.

**Decision: no new field — it already exists.** That enum is `authorityBasis`: Australian states
are `reserved-powers` (like US and Brazilian states) with `legalSystemScope: 'own'` (their own
criminal law); the ACT and NT are `federal-plenary` (the value the US pilot added for DC and the
Canada pilot reused for the Yukon). Australia is thus modelled with three reused values and no new
machinery — the maturity check the model-findings standard asks for: a distinctive federation
absorbed by reuse.

**Status.** Resolved by reuse.

---

## Was reuse-only too shallow?

No. Australia's job in the program was explicitly to ADVERSARIALLY test the Canada decision, not to
force new structure — and it did: a critic tried to refute `contracted` and could not, which is a
stronger result than inventing a field. Australia also drew the sharp, verified contrast with
Canada (state criminal law + reserved powers vs federal criminal law + federal residual), showing
the model discriminates between two superficially similar federations using values it already had.
A pilot that validates a prior decision under adversarial pressure and reuses four earlier findings
is doing exactly what a mature model should let it do.
