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
- [x] Define local data schemas and data files for skills and web projects in `frontend/src/data/`.
- [x] Implement categorized Skills display.
- [x] Implement Web Projects section with project cards, tech stack tags, live/source links, and screenshots.
- [x] Ensure empty/fallback states for missing links or images.

## Phase 4 — Data Analytics Projects
- [x] Define local data schema and data file for data analytics case studies (`caseStudy` facets in `project.ts` and `projects.json`).
- [x] Implement dedicated Data Analytics section distinct from Web Development projects (`src/components/sections/DataAnalytics.tsx`).
- [x] Display problem statement, dataset, methodology, key findings, and visual artifacts with strict pending indicators for unverified fields.
- [x] Integrate reusable `ProjectList` and dedicated `AnalyticsProjectCard` with plum accent visual identity.
- [x] Ensure Data Analytics navigation links across Header, MobileNav, Footer, and Hero correctly anchor to `#data-analytics`.
- [x] Verify lint (`npm run lint`), TypeScript (`npm run typecheck`), and production build (`npm run build`) without errors.

## Phase 5 — Contact Section and Visual Polish
- [x] Implement complete, responsive Contact section (`src/components/sections/Contact.tsx`) reading from centralized `brandConfig` (`src/config/brand.ts`).
- [x] Support direct email (`mailto:`), GitHub, LinkedIn, and résumé links with pending status badges for unverified fields without broken links or invented data.
- [x] Zero backend form or database dependencies added; direct communication guarantees clearly communicated.
- [x] Visual polish across Hero, About, Skills, Web Projects, and Data Analytics sections (editorial accent flourish, semantic heading hierarchy H1->H2->H3, alternating section background rhythm, `items-stretch` grid card row height alignment).
- [x] Verified clean compilation: `npm run lint` (0 errors), `npm run typecheck` (0 errors), and `npm run build` (1611 modules transformed in 7.73s).

## Phase 6 — Responsive Testing, Accessibility, and Final Validation
- [x] Audit keyboard navigation, visible focus indicators, and ARIA landmarks.
- [x] Verify color contrast and reduced-motion preferences.
- [x] Test across mobile, tablet, and desktop viewports.
- [x] Verify production build (`npm run build`) and run checks without errors.
- [x] Update documentation with verified findings and await Phase 7 approval.

## Phase 7 — Deployment Preparation & Production Readiness
- [x] Inspect project structure and verify frontend production build (`frontend/dist/`).
- [x] Configure relative base path (`base: './'`) in `frontend/vite.config.ts` and `frontend/index.html` for portable static hosting.
- [x] Add static host routing fallbacks (`frontend/public/404.html`, `frontend/public/_redirects`, and root `vercel.json`).
- [x] Create GitHub Actions automated deployment workflow (`.github/workflows/deploy.yml`) for zero-cost GitHub Pages hosting.
- [x] Audit production bundle and codebase for exposed secrets, machine paths, and debug output (0 findings).
- [x] Verify integrity of contact data and candidate projects (strictly unverified items flagged as pending, 0 synthetic data).
- [x] Verify all build and quality commands (`npm run lint`, `npm run typecheck`, `npm run build`).
- [x] Author comprehensive deployment documentation (`docs/DEPLOYMENT.md` and root `README.md`).
- [x] Document automated browser testing limitation.
- [ ] Await user explicit confirmation before pushing code to GitHub or triggering public live deployment.

## Phase 8 — Portfolio Content & Design Update (Hero, Disciplines, Engineering Overview, and Experience)
- [x] Hero Section: Replaced introduction narrative with exact approved copy.
- [x] Branding: Removed decorative logo card from hero discipline showcase while preserving `ARSH.DEV` wordmark, brand identity, and warm ivory/forest green/muted plum/charcoal color palette.
- [x] Core Disciplines: Replaced showcase with 4 exact discipline cards (Web Engineering, Data Analytics, Backend Engineering, Systems & Automation) sourced from centralized data (`frontend/src/data/disciplines.json`), with all fake verification/badges removed.
- [x] Engineering Overview: Replaced technology strip with 4 numbered categories (01. FRONTEND, 02. BACKEND, 03. DATA ANALYTICS, 04. ARCHITECTURE).
- [x] Professional Experience: Created centralized data (`frontend/src/data/experience.json`), TypeScript interfaces (`frontend/src/types/experience.ts`), and dedicated section component (`frontend/src/components/sections/Experience.tsx`) for Zigly Pet Care, GlobalLogic, DRDO, and Encryptix without inventing missing fields.
- [x] Background & Journey Consolidation: Removed legacy "Background & Journey" about content, integrated Professional Experience in its position, and updated section heading to "Career Journey" with eyebrow "Professional Experience".
- [x] Skills Refinement: Removed "Web Accessibility (A11y)" from Architecture & Practices, removed the "Verified Technologies & Tools" subheader label from all cards, and removed checkmark tick icons from skill badges.
- [x] Global Skill Consistency & Color Unification: Standardized all skill tags and badges to a single neutral grey color across Skills, Hero, Projects, and Experience. Simplified HTML entry to "HTML5", renamed "JavaScript (ESNext)" to "JavaScript", verified absence of "Semantic Search", and integrated "Machine Learning" across skills, disciplines, projects, and about summaries.
- [ ] Await user review and confirmation of unverified experience fields (DRDO duration/location/technologies, Encryptix duration/location, and Zigly dates).

## Phase 9 — Layout & Skills Reorganization
- [x] Engineering Overview Removal: Removed the 4-category engineering overview strip (`01. FRONTEND`, `02. BACKEND`, `03. DATA ANALYTICS`, `04. ARCHITECTURE`) from the Hero section left column.
- [x] Page Structure Reordering: Reordered page flow in `frontend/src/App.tsx` to place Skills before Career Journey (Experience), creating a harmonious alternating section background rhythm (Hero -> Skills [Warm Ivory] -> Career Journey [Surface/30] -> Web Projects [Warm Ivory] -> Data Analytics [Surface/30] -> Contact [Warm Ivory]).
- [x] Navigation Alignment: Reordered navigation items in `frontend/src/config/brand.ts` to place Skills before Experience (`#skills` -> `#experience`).
- [x] Systems & Automation Skill Category: Added dedicated "Systems & Automation" category to `frontend/src/data/skills.json` and `frontend/src/types/skill.ts` with label "Applied Engineering", exact copy "Automating repetitive workflows and connecting business systems through API integrations, data pipelines, and intelligent process design.", and associated technologies.
- [x] Skills UI Polish: Enhanced `frontend/src/components/sections/Skills.tsx` to render uppercase category eyebrows (`Applied Engineering`, `Core Discipline`, `Engineering Practices`) and responsive grid spanning for balanced card presentation.
- [x] Clean Verification: Passed `npm run typecheck`, `npm run lint`, and `npm run build` with 0 warnings and 0 errors.

## Phase 10 — Unified Projects Portfolio & Project Catalog Update
- [x] Sourced 6 verified projects in `frontend/src/data/projects.json`: BuildLoop (2026 Major Project), Personal Knowledge Base Copilot (2026 Self Project), AI Fake Job Posting Detector (2026 Self Project), E-Commerce Platform (2025 Self Project), Mobile Sales Analytics Dashboard (2025 Self Project), and Real Estate Marketplace (2024 Self Project).
- [x] Consolidated project presentation into a single unified "Projects" section (`frontend/src/components/sections/Projects.tsx`), removing separate web/data category segregation per user directive.
- [x] Extended `Project` schema and normalization helpers (`frontend/src/types/project.ts`, `frontend/src/utils/projectHelpers.ts`) with optional `year` and `projectType` properties.
- [x] Enhanced `ProjectCard.tsx` to render project type badges ("Major Project", "Self Project"), completion years, lifecycle status, tech stack badges, and bespoke editorial fallback icons (AI/RAG, Analytics/BI, Web).
- [x] Updated main page layout in `frontend/src/App.tsx` removing `DataAnalytics` and establishing a balanced alternating section background rhythm: Hero (Ivory) -> Skills (Warm Ivory) -> Experience (Surface/30) -> Projects (Warm Ivory) -> Contact (Surface/30).
- [x] Verified clean compilation: `npm run typecheck` (0 errors), `npm run lint` (0 errors), and `npm run build` (1611 modules transformed in 8.67s).
- [x] Sorted project catalog sequence in `frontend/src/data/projects.json` by years (reverse chronological 2026 -> 2025 -> 2024): BuildLoop (2026) -> Personal Knowledge Base Copilot (2026) -> AI Fake Job Posting Detector (2026) -> E-Commerce Platform (2025) -> Mobile Sales Analytics Dashboard (2025) -> Real Estate Marketplace (2024).





