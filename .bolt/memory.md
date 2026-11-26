# Project memory

## Product intent & audience

- Personal portfolio website for a nursing professional (Ners & Sarjana Terapan Keperawatan).
- Showcase academic background, skills, and professional profile; production-quality presentation.

## Brand personality & voice

- Professional yet approachable; healthcare/nursing identity.
- Clean, confident, credibility-focused tone.
- Intro/about content style (now removed): dedicated, passionate, patient-centered; English prose with a friendly Indonesian closing ("Senang berkenalan dengan kamu!").

## Visual design & UX direction

- Framework: Vite + React (JSX), Tailwind CSS, Lucide React icons; `@/` alias for `src/`.
- Single-page layout with sections; modular section components.
- Current navbar sections: Home, Academic, Projects, Sosmed.
- About section and its navbar link fully removed per user request.
- Aesthetic goal: beautiful, distinctive, non-cookie-cutter, production-ready.
- Page content font changed to a modern, readable style; navbar font intentionally preserved.
- Navbar text size at normal (1×); 2× enlargement cancelled per user request.

## Decisions, constraints & rationale

- About section removed entirely (text + navbar link); user confirmed removal.
- Academic section restricted to a single entry: "Profesi Ners & Sarjana Terapan Keperawatan" at Poltekkes Kemenkes Surakarta, 2020–2025.
- Prior school entries (SMA, SMP, SD) and other Poltekkes entries removed per explicit user instruction.
- Projects section reduced to a single project: **DampingCare** (image, description, link retained).
- Clinical Internship, Community Health Program, and Emergency Care Workshop cards removed per explicit user instruction.
- No UI/theme/icon packages beyond Lucide React unless explicitly requested.
- Typography update applied globally except navbar; navbar font unchanged, text size at normal (1×).

## Open questions & assumptions

- Assumption: UI copy language is English; user communicates in Indonesian — not explicitly confirmed.
- Remaining sections (experience, skills, contact/sosmed) content and structure not yet specified.
- DampingCare project details (full description, tech stack, live/demo links) may need further elaboration.
- Specific content font family name not recorded; verify if consistent typography reference is needed later.