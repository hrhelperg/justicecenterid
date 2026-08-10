import { PUBLISHED_DOSSIERS } from './dossiers';
import { GLOSSARY_OWNED_ELSEWHERE, PUBLISHED_GLOSSARY } from './glossary';
import {
  validateGlossaryPublication,
  type GlossaryPublicationContext,
} from './reference-publication-gate';
import { SOURCES } from './sources';
import type { GlossaryTerm } from './types';

/**
 * Which glossary terms carry a standalone route.
 *
 * ---------------------------------------------------------------------------
 * ROUTING IS DERIVED FROM THE GATE, NOT DECLARED BY A FLAG
 * ---------------------------------------------------------------------------
 * The institution and profession registries use `review: 'fact-checked'` to mark a record
 * as routed. That does not work here: all 32 glossary terms are already fact-checked, so
 * the flag would carry no information — every term would route, including the 15 whose
 * intent belongs to a page that already exists.
 *
 * So a term is routed **if and only if it satisfies `validateGlossaryPublication`**. There
 * is no field an author can set to publish a page; the only way to route a term is to give
 * it the substance the gate asks for — a reader question, institutional context, a stated
 * purpose, a jurisdiction note, two sources, a worked country example, and no existing
 * owner elsewhere on the platform.
 *
 * The Wave 3 audit found that 27 of 32 do not have it, which is the correct result for a
 * glossary: most entries are one or two sentences resting on a single citation, which is
 * exactly what a glossary should be and exactly what a page should not.
 *
 * `routePaths` is deliberately omitted from this context. The route registry is built FROM
 * this list, so including it would be circular; the route-existence condition is checked
 * separately in the tests, where the registry is already available.
 */
const ROUTING_CONTEXT: GlossaryPublicationContext = {
  knownSourceIds: SOURCES.map((source) => source.id),
  publishedCountrySlugs: PUBLISHED_DOSSIERS.map((dossier) => dossier.slug),
  ownedElsewhere: GLOSSARY_OWNED_ELSEWHERE,
};

export const ROUTED_GLOSSARY: readonly GlossaryTerm[] = PUBLISHED_GLOSSARY.filter(
  (term) => validateGlossaryPublication(term, ROUTING_CONTEXT).length === 0,
);

/** Terms that remain entries on the hub with no page of their own. */
export const HUB_ONLY_GLOSSARY: readonly GlossaryTerm[] = PUBLISHED_GLOSSARY.filter(
  (term) => validateGlossaryPublication(term, ROUTING_CONTEXT).length > 0,
);

const ROUTED_INDEX = new Map(ROUTED_GLOSSARY.map((term) => [term.slug, term]));

/** Resolves only ROUTED terms. A hub-only slug returns undefined, and so 404s. */
export function getRoutedGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return ROUTED_INDEX.get(slug);
}

/** Exported so tests can drive the same context the routing decision used. */
export function glossaryRoutingContext(): GlossaryPublicationContext {
  return ROUTING_CONTEXT;
}
