# Canada source register

**Research date:** all sources read or extracted and confirmed **2026-07-26**.
**Registry:** `src/content/sources.ts`, ids prefixed `ca-`.

## Bilingual authority

Canadian federal law is enacted in English and French, and by the equal-authenticity rule
(Charter s.18(1)) **both language versions are equally authoritative** — neither is a translation
of the other. Sources are cited in English; the French title is noted where it matters, and no
English name is invented for a French-named institution (the Sûreté du Québec keeps its French
name). Because the cited version is itself authoritative, `translationStatus` is left unset.

## Access standard

laws-lois.justice.gc.ca (the federal Justice Laws Website) serves the full consolidated bilingual
statutes to a browser user-agent; every constitutional and statutory quotation was read verbatim
from it. The RCMP contract-policing figures were read from the RCMP's own page; the corrections
statistic was extracted from the Statistics Canada primary CSV; the Sûreté du Québec name from
its official site. No verbatim quotation is attributed to a source not read in full.

## The register

| id                       | Publisher                            | Supports (verbatim-verified)                                                                                                                                                                                                                                                |
| ------------------------ | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ca-constitution-1867`   | Justice Laws Website                 | Division of powers: s.91(27) federal criminal law + procedure; s.91(28) federal penitentiaries; the federal residual POGG power; s.92(14) provincial administration of justice; s.92(6) provincial prisons; s.96 federal appointment of superior-court judges; s.100/s.101. |
| `ca-charter-1982`        | Justice Laws Website                 | Charter legal rights: s.7 (life, liberty, security), s.11(d) (presumption of innocence), s.12 (cruel and unusual); s.18(1) equal authenticity of English and French.                                                                                                        |
| `ca-criminal-code`       | Justice Laws Website                 | s.743.1 (life or two years or more → penitentiary — the federal/provincial custody line); s.2 (Attorney General definition).                                                                                                                                                |
| `ca-rcmp-act`            | Justice Laws Website                 | s.3 (a federal police force for Canada); s.5 (federal governance via the Minister/Commissioner); s.20 (arrangements with provinces/municipalities — the contract-policing basis).                                                                                           |
| `ca-rcmp-contract`       | Royal Canadian Mounted Police        | Eight provinces (not Ontario/Quebec), three territories, ~150 municipalities; 70/30 provincial/federal cost-share; agreements expire 31 March 2032; the RCMP stays "Canada's national police force".                                                                        |
| `ca-ppsc-about`          | Public Prosecution Service of Canada | The PPSC prosecutes federal-statute offences; "In the territories, we are the only prosecutors and conduct all prosecutions of offences against the Criminal Code".                                                                                                         |
| `ca-dpp-act`             | Justice Laws Website                 | s.3(1) appointment of the Director of Public Prosecutions (head of the PPSC).                                                                                                                                                                                               |
| `ca-scc-act`             | Justice Laws Website                 | s.4 the Supreme Court of Canada (a Chief Justice and eight puisne judges = nine); s.6 at least three from Quebec.                                                                                                                                                           |
| `ca-statcan-corrections` | Statistics Canada                    | Table 35-10-0154-01, FY2023/2024 provincial/territorial average daily custody: total 25,349.8; remand 19,334.5; sentenced 5,895.1 — excludes federal custody.                                                                                                               |
| `ca-sq`                  | Sûreté du Québec                     | The official (French) name of Quebec's provincial police.                                                                                                                                                                                                                   |

## Stated limitations

- **The English is co-authoritative, not a gloss.** A fine point of law can turn on the French
  version; the pages state facts at a level both versions support.
- **The prison figure is provincial/territorial only.** It excludes federal custody (two years or
  more) and is not combined with it (different collection bases); it is an average daily count.
- **No individual province, territory or Indigenous jurisdiction was researched.** The samples
  carry the constitutional and agreement structure only; First Nations policing is prose.
