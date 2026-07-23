# Image and media policy

## Position in this phase

**No content images ship in the foundation phase.** The only graphics in the repository are
ones we authored ourselves: the wordmark and interface icons, expressed as inline SVG.

This is deliberate. Justice and policing imagery carries three risks at once — licensing,
subject dignity, and tone — and none of them should be resolved in a hurry. The `ImageRecord`
type exists now so that the first image added has to satisfy the policy before it can render.

## Permitted sources

In order of preference:

1. **Official institutional media libraries** where licensing terms are published and permit
   reuse.
2. **Wikimedia Commons**, where the file page states a specific licence and the underlying
   provenance is checkable. Commons is a host, not a licensor — always follow through to the
   original source.
3. **Library of Congress** and equivalent national libraries, for public-domain historical
   material.
4. **National archives** with published reuse terms.
5. **Public museum collections** with published reuse terms.
6. **Government open-data and open-licence portals** (e.g. material under a published open
   government licence).
7. **Clearly compatible Creative Commons material** where the licence, the creator, and the
   attribution requirement are all determinable.

## Prohibited sources

- Pinterest, image aggregators, wallpaper sites, and reverse-image search results.
- Scraped blogs and content farms.
- Stock imagery of staged "police" or "courtroom" scenes presented as depiction.
- Any file whose licence cannot be determined from a primary source.
- Any file where "found on Google Images" is the provenance.
- Screenshots of third-party interfaces or documents without a reuse basis.
- AI-generated depictions of institutions, officers, historical events, or documents. A
  synthetic image of a real institution is a fabricated record.

## Required record

Every image is an `ImageRecord` and cannot render without one:

| Field                 | Required       | Notes                                                                                    |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------- |
| `id`                  | yes            | Stable identifier.                                                                       |
| `title`               | yes            | The work's own title where it has one.                                                   |
| `sourceUrl`           | yes            | The page establishing the licence, not a hotlink to the file.                            |
| `creator`             | yes            | `Unknown` is acceptable only for genuinely anonymous archival material.                  |
| `license`             | yes            | Specific: `CC BY-SA 4.0`, `Public domain (US, pre-1930)`, `OGL v3`. Never "free to use". |
| `attribution`         | yes            | The exact attribution string to display.                                                 |
| `originalPublishedOn` | where known    |                                                                                          |
| `depictedDate`        | where known    | Distinct from publication date, and often the more important one.                        |
| `jurisdiction`        | where relevant |                                                                                          |
| `alt`                 | yes            | See below.                                                                               |
| `caption`             | yes            | See below.                                                                               |
| `verification`        | yes            | `verified` required to render.                                                           |

`verification: 'verified'` means a person opened `sourceUrl`, confirmed the licence, confirmed
the creator, and confirmed the file is the one described. It is set by that person, never by
default.

## Attribution

Attribution is rendered visibly beneath the image, not hidden in a tooltip, a metadata block,
or a site-wide credits page. It includes creator, source, and licence, with the licence linked
where the licence has a canonical URL.

Public-domain material is still attributed. There is no legal obligation; there is an
editorial one, because provenance is part of what makes a historical image usable as evidence.

## Alt text and captions

They do different jobs and must not duplicate each other.

- **Alt text** describes what is visually present, for a reader who cannot see it. Concrete
  and specific: "A uniformed officer stands at a wooden desk in a courtroom, facing three
  seated judges." Not "police officer" and not "image of a courtroom".
- **Caption** supplies context the image cannot carry: what it shows, when, where, and why it
  is on this page. The caption is the place for interpretation; the alt text is not.

Decorative images do not exist on this platform. If an image is decorative, it should not be
there. Every image must earn its place by adding information.

## Subject matter rules

Derived from the content-safety and design-direction rules, and binding on image selection:

**Never publish:**

- Depictions of violence, injury, restraint causing visible distress, or human remains.
- Identifiable victims, suspects, defendants, detainees, or witnesses.
- Identifiable children in any justice or enforcement context.
- Crime-scene photography.
- Imagery of an identifiable person in custody or under restraint.
- Weapons or tactical equipment presented as subject matter rather than as documentation.
- Anything that would function as an operational reference — security-control detail, access
  arrangements, facility layouts, document security features.

**Handle with care:**

- Historical images of punishment, incarceration, or colonial-era policing. These are
  legitimate historical evidence and are frequently also records of harm to identifiable
  people. Use only with archival provenance, a caption that supplies historical context, and
  a clear reason the image is necessary to the page.
- Institutional insignia and uniforms. Permitted as documentation of an institution, never
  arranged so that the page could be mistaken for an official communication.

## Insignia, seals, and marks

- We do not use any government seal, coat of arms, police badge, or court emblem in our own
  interface, branding, favicon, or Open Graph imagery.
- Such marks may appear only inside clearly-captioned documentary content about the
  institution they belong to.
- Our own wordmark and iconography are designed so they cannot be mistaken for an official
  emblem: no shield outline, no eagle, no laurel, no star, no scales-of-justice device, no
  crest, no national colours.

## Maps

Maps depicting borders are political statements in some cases. Where a map is used:

- Use a source with a published provenance and state it.
- Where a border or territorial status is disputed, either use a source that represents the
  dispute or do not use a map.
- Never draw a border ourselves.

## Technical requirements

When images do arrive:

- Serve modern formats (AVIF/WebP) with a fallback, at responsive sizes.
- Always set intrinsic `width` and `height` to prevent layout shift.
- Lazy-load below-the-fold images; never lazy-load the largest contentful element.
- Because the site is a static export, `next/image` optimisation is unavailable — derivatives
  are pre-generated at build time, or the deployment model is revisited. See
  [technical-architecture.md](../architecture/technical-architecture.md).
- No image is loaded from a third-party host at runtime. Files are stored in the repository so
  that provenance, licence, and availability are all under our control, and so that readers
  make no request to a third party.

## Video, audio, and embeds

Not used in this phase. No third-party embed (video platform, social post, map widget, font
CDN, analytics) is permitted, because each is a privacy exposure and an external dependency
the reader did not consent to.
