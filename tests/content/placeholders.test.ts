import { describe, expect, it } from 'vitest';
import { COUNTRY_DOSSIERS } from '@/content/dossiers';
import {
  findDossierResidue,
  findPlaceholderResidue,
  PLACEHOLDER_PATTERNS,
} from '@/content/placeholders';

describe('placeholder / template-leak detection', () => {
  it('fires on every residue family', () => {
    const residue = [
      'TODO: research this',
      'value is TBD',
      'FIXME later',
      'lorem ipsum dolor',
      'name is {{country}}',
      'unresolved }} token',
      'the <COUNTRY_NAME> goes here',
      'this is placeholder text',
      'replace me with real prose',
      'cite an example source',
      'SCAFFOLD skeleton',
    ];
    for (const text of residue) {
      expect(findPlaceholderResidue(text), `expected residue in "${text}"`).not.toEqual([]);
    }
  });

  it('does not fire on real editorial prose (use/mention safety)', () => {
    const clean = [
      'The corrections system administers custodial sentences.',
      'Prosecutors decide whether to bring charges.',
      'This module explains the court hierarchy and appeal routes.',
      'The Sûreté du Québec is the provincial police force.',
      'Detention capacity figures are published annually.',
      // near-misses that must NOT trip the word-boundary markers
      'She completed her todos for the week.',
      'The custody suite holds detainees before charge.',
    ];
    for (const text of clean) {
      expect(findPlaceholderResidue(text), `false positive in "${text}"`).toEqual([]);
    }
  });

  it('every pattern has a marker and a reason', () => {
    for (const p of PLACEHOLDER_PATTERNS) {
      expect(p.marker.length).toBeGreaterThan(0);
      expect(p.reason.length).toBeGreaterThan(10);
    }
  });

  it('the ten published dossiers contain no residue anywhere in reader-facing text', () => {
    for (const dossier of COUNTRY_DOSSIERS) {
      const residue = findDossierResidue(dossier);
      expect(
        residue,
        `${dossier.slug} has residue: ${residue.map((r) => `${r.marker}("${r.match}")`).join(', ')}`,
      ).toEqual([]);
    }
  });
});
