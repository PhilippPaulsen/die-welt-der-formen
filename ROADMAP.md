# Roadmap

This roadmap is ordered by current priority, not by date. Near-term work concerns the generative fruitfulness of Ostwald's form theory; editorial framing follows; long-term platform phases are listed for reference.

---

## Priority 1 — Generative Extensions Suggested by Ostwald

Ostwald himself pointed, across both works, to extensions he did not carry out. These form the immediate development backlog for `world_of_forms_generator` and, where relevant, `SpaceHarmony`.

### 1.1 Higher orders of existing nets
- Sixth and seventh triangle (Ostwald: "already drawn," never published)
- Fourth hexagon (200+ patterns, deliberately omitted for scope)
- Each of the three series (triangle / square / hexagon) is, per Ostwald, unboundedly extensible

### 1.2 Alternative net construction
- General method: connect any two nodes, complete to a regular triangle/square/hexagon, tile the plane with the result — not restricted to nearest-neighbor sub-polygons
- Ostwald announced this method but never published it (*Sixth Portfolio, Concluding Remark*)

### 1.3 Freer theme lines
- Allow theme-line endpoints outside the sub-polygon
- Offset overlays: superimpose two sheets shifted by whole mesh-widths (not aligned) for patterns of "diminished lawfulness, i.e. greater freedom"

### 1.4 Curved substitution for straight lines
- Systematic curve variants: 1-/2-/3-fold curvature, symmetric/asymmetric, left-/right-leaning → 18 base cases
- Compound lines (two straights, straight+curve, two curves) with inward/outward meeting angle
- Ostwald announced a dedicated portfolio of curve examples — never realized

### 1.5 Free "clothing" of lines
- Geometric or naturalistic free strokes around the theme lines, with the underlying straight lines either visible or hidden ("hidden law")
- Even fully arbitrary, non-repeating lines between node pairs yield usable patterns if node points are held exact

### 1.6 Projection onto other surfaces
- Perspectival transformation of a regular net onto a less regular one (straight lines stay straight; only length ratios change)
- Projection onto curved/spatial surfaces: straight lines become geodesics — Ostwald stops here explicitly, calling it a step into three-fold space

### 1.7 Solid forms (3D) — the explicit open problem
- *Harmonie der Formen*, Ch. 8: Ostwald states he cannot undertake a harmony of solid forms himself, cites crystallography as partial groundwork, and explicitly invites others to develop a new, aesthetically grounded systematics
- Direct conceptual mandate for `SpaceHarmony`

### 1.8 Temporal / dynamic form art
- *Harmonie der Formen*, "The Two Sources of Art": Ostwald anticipates a future formal "light art" comparable to the art of tone, explicitly including "the great artistic means of temporal variation" — an implicit invitation to animate/parametrize form harmony over time

### 1.9 Higher-order combinatorics
- Pairs → triples → quadruples systematically applied throughout; Ostwald stops enumerating individually only for reasons of scope, not principle — the method itself is open-ended

---

## Priority 2 — Editorial Framing (planned, coming weeks)

- Diachronic framing: the project's place in the history of form theory (Truchet/Douat → Ostwald → today)
- Synchronic framing: how the two works relate to each other and to contemporary generative design
- Historical contextualization of dated or chauvinistic language in the source texts — situating without excusing
- Introductory essays for the Harmony and World editions (see also `docs/website-editorial-checklist.md`)

---

## Priority 3 — Long-Term Platform Phases

### Phase A — Raumharmonik Module
Interactive complement to *Die Harmonie der Formen*, built step by step as p5.js / Observable tools:

| Component | Content |
|---|---|
| Lines | straight, curved, continuous/discontinuous; sine, substitute-sine, zigzag, sawtooth; jump/kink/shock; direction, curvature |
| Braids (Flechten) | wave overlays via shifting; single-/multi-strand; wavelength, phase, symmetry, density; water waves, meanders |
| Bands (Bänder) | translation/reflection/rotation combinations; edge/midline structure; loosening stages |
| Unlimited Surfaces | triangular/square/hexagonal nets; lawful coverage; golden ratio; loose vs. tiling distribution |
| Limited Surfaces | frames, borders, spandrels; central piece; gravity influence; harmonious subdivision |
| Pictorial Art & Solid Forms | balance, density, symmetry; 2D → 3D transition; outlook to spatial structures |

Planned tools: line generator, wave/braid generator, band generator, surface-pattern explorers, limited-surface and pictorial-balance modules.

### Phase B — Book Development
- Critical-edition commentary integration for both works
- Print-quality image reproduction
- Formalized DE/EN terminology glossary
- Visual index of all form categories
- Layout coordination with Spector Books; academic peer review

### Phase C — Expanded Digital Platform
- Ostwald Form Lexicon (DE/EN)
- Historical documents and unpublished material
- Gallery of user-generated/derived forms
- API-like access for educators/researchers
- Workshops and teaching material

### Phase D — Long-Term Vision
- Establish the platform as an open research tool for design education, computational arts, and mathematical/geometric art
- Physical prototyping (plotter, laser cutting, CNC)
- Partnerships with archives, museums, universities
- Second edition or extension volume: *Raumharmonik & Computation*

---

## See also
- `docs/website-editorial-checklist.md` — near-term editorial/UX polish plan (structure, readability, tone), independent of the generative-development priorities above.