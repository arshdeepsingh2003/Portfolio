# Portfolio Build Tasks

Work on one phase at a time and wait for approval before moving on.

## Phase 0 — Project Discovery and Setup Planning
- [x] Inspect existing repository structure, runtimes, and documentation files.
- [x] Confirm required technology stack (React + Vite + TS, Tailwind CSS, Python + FastAPI, No database).
- [x] Identify documentation conflicts, missing dependencies, and open decisions.
- [x] Align phase roadmap in TASKS.md with user requirements.
- [x] Receive and record user decisions (root structure, ARSH.DEV wordmark, candidate projects, direct contact, docs cleanup).
- [x] Resolve documentation conflicts across PRD.md, API.md, Architecture.md, and MEMORY.md.

## Phase 1 — Design System and Website Layout
- [x] Initialize React + Vite + TypeScript frontend directly in the repository root.
- [x] Configure `tailwind.config.js` and `postcss.config.js` with documented color tokens (`#F5F0E6`, `#173C32`, `#8B7188`, `#252824`, `#FFFCF6`, `#D9D2C6`).
- [x] Import and configure typography in `index.html` and `index.css` (DM Serif Display, Inter, JetBrains Mono).
- [x] Create brand configuration file (`src/config/brand.ts`) for easily editable wordmark (`ARSH.DEV`) and metadata.
- [x] Build layout foundation:
  - Responsive Header/Navbar with `ARSH.DEV` wordmark and section links.
  - Accessible mobile navigation drawer with open/close state.
  - Reusable container and section wrappers.
  - Footer shell with wordmark, copyright, and direct contact anchors.
- [x] Implement reusable foundational UI primitives (Button, SectionHeading, Badge/Tag, CardShell).
- [x] Add root `.gitignore` covering frontend and future backend artifacts.
- [x] Verify clean compilation, linting, standalone typecheck, and production build (`npm run build`, `npm run lint`, `npx tsc --noEmit`).


## Phase 2 — Hero Section and About Section
- [x] Implement Hero section with editorial typography, role introduction, and call-to-actions.
- [x] Implement About section highlighting background, journey, and focus areas.
- [x] Ensure mobile and desktop responsive layout and accessible headings.

## Phase 3 — Skills and Web Development Projects
- [ ] Define local data schemas and data files for skills and web projects in `frontend/src/data/`.
- [ ] Implement categorized Skills display.
- [ ] Implement Web Projects section with project cards, tech stack tags, live/source links, and screenshots.
- [ ] Ensure empty/fallback states for missing links or images.

## Phase 4 — Data Analytics Projects
- [ ] Define local data schema and data file for data analytics case studies.
- [ ] Implement dedicated Data Analytics section distinct from Web Development projects.
- [ ] Display problem statement, dataset, methodology, key findings, and visual artifacts.

## Phase 5 — Contact Section and Visual Polish
- [ ] Implement Contact section with verified direct contact links (email, GitHub, LinkedIn).
- [ ] Add subtle, purposeful visual details and hand-drawn accents per design system.
- [ ] If approved, configure optional FastAPI backend endpoint for contact handling or retain as planned service.

## Phase 6 — Responsive Testing, Accessibility, and Final Validation
- [ ] Audit keyboard navigation, visible focus indicators, and ARIA landmarks.
- [ ] Verify color contrast and reduced-motion preferences.
- [ ] Test across mobile, tablet, and desktop viewports.
- [ ] Verify production build (`npm run build`) and run checks without errors.

## Phase 7 — Deployment (If Required)
- [ ] Configure deployment configuration (e.g., Vercel, Netlify, or GitHub Pages).
- [ ] Perform live post-deployment smoke testing.
