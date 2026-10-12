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
- [x] Designer Mockup Alignment: Updated About/Hero to panoramic widescreen workspace layout with clean sunlit studio backdrop, terracotta accent line & period, primary `View My Work` and `Download Resume` actions, and inline capability metrics (`Web Development`, `Data Analytics`, `Problem Solving`).

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
- [x] Confirmed experience details: Added DRDO Research Intern duration (July 2025 – August 2025) & location (New Delhi, India), and removed Encryptix entry per user instruction.

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
- [x] Removed year mentions across project data and cards; reordered project catalog into requested sequence: E-Commerce Platform (`ecommerce-platform`) -> Real Estate Marketplace (`real-estate-marketplace`) -> Mobile Sales Analytics Dashboard (`mobile-sales-analytics-dashboard`) -> AI Fake Job Posting Detector (`ai-fake-job-posting-detector`) -> BuildLoop (`buildloop`) -> Personal Knowledge Base Copilot (`personal-knowledge-base-copilot`).

## Phase 11 — Motion System & Animation Enhancement
- [x] Technical Foundation: Configured Tailwind animation keyframes and timing curves, reusable `ScrollReveal` component, and `useScrollReveal` hook with strict `prefers-reduced-motion` detection and zero external dependencies.
- [x] Hero Section Entrance: Staggered sequence for introductory label, editorial headline, supporting description, action buttons, discipline composition cards, and gentle floating scroll indicator.
- [x] Navigation & Header: Sticky transition with shadow/backdrop blur, animated sliding underlines on hover and active section indicator, smooth anchor scrolling, and animated mobile drawer entrance/exit with focus trap preservation.
- [x] Section Reveals: Scroll-triggered progressive reveals for section headers, skill cards, experience timeline entries, and unified project cards with one-time intersection triggers.
- [x] Card & Button Micro-Interactions: Refined elevation on hover, subtle image/icon zoom within bounds, directional external link arrows, tag hover feedback, and smooth email copy feedback.
- [x] Accessibility & Verification: Full adherence to `prefers-reduced-motion`, responsive layouts (320px–1440px), keyboard focus rings, zero layout shift, passing `npm run lint` (0 errors), `npm run typecheck` (0 errors), and `npm run build` (1614 modules transformed in 9.01s).

## Phase 12 — Dark Mode & Floating Fixed Navbar
- [x] Class-based Dark Mode Engine: Created `ThemeContext`, `theme-context.ts`, and `useTheme` hook with system preference detection, localStorage persistence, and inline `<head>` script in `index.html` preventing theme flash.
- [x] Tailwind & CSS Dark Mode Foundation: Added `darkMode: 'class'` to `tailwind.config.js`, defined CSS variables for dark forest, dark surface, dark text, and heading colors in `index.css`.
- [x] Fixed Floating Pill Navbar: Replaced full-width header with a fixed floating pill centered near the top of the viewport (`fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center`), styled with frosted glass backdrop blur, rounded-full/rounded-2xl border, that remains fixed on scrolling.
- [x] Orange Terminal Brand Mark: Integrated orange rounded badge with white terminal prompt `>_` matching user screenshot on left of navbar.
- [x] Navigation Links: Configured `Home`, `About`, `Work`, `Projects`, `Resume` in monospace/clean font with active state tracking via `useActiveSection`.
- [x] Theme Toggle Button: Added rounded square outline toggle button with outline `Moon` icon (in light mode) and `Sun` icon (in dark mode) on right of navbar.
- [x] Full Dark Mode Theme Across All Components: Implemented dark mode classes across Layout, Hero, About, Skills, Experience, Projects, ProjectCard, AnalyticsProjectCard, Contact, Footer, Button, CardShell, Badge, and SectionHeading.
## Phase 13 — About & Navigation Alignment
- [x] Home Content Relocation: Moved complete home hero content (editorial headline, intro bio, action buttons, core disciplines showcase, and floating scroll indicator) into `About.tsx` with `id="about"`.
- [x] Legacy About Removal: Completely removed legacy About content (narrative lead quote, paragraphs, guiding principles card, profile at a glance card).
- [x] Navigation Bar Alignment: Removed `Home` from `navItems` in `src/config/brand.ts`; desktop navbar, mobile drawer, and footer now start with `About` (`#about`), followed by `Work`, `Projects`, `Resume`.
- [x] Active Section & Header Sync: Updated `useActiveSection` and `Header.tsx` to monitor `['about', 'skills', 'experience', 'projects', 'contact']`, with `#about` active at page top and brand terminal logo linking to `#about`.
- [x] Clean Validation: Passed `npm run typecheck`, `npm run lint`, and `npm run build` (1617 modules transformed, 0 errors, 0 warnings).

## Phase 14 — Contact Navigation & Resume Download Configuration
- [x] Add Contact Link to Navbar: Added `{ label: 'Contact', href: '#contact' }` to `navItems` in `src/config/brand.ts`, enabling direct navigation to the Contact section where contact information is hosted.
- [x] Dedicated Downloadable Resume Nav Item: Configured `{ label: 'Resume', href: './resume.pdf', isDownload: true, downloadFileName: 'Arshdeep_Singh_Resume.pdf' }` in `navItems`.
- [x] Minimal Blank Resume Placeholder: Created valid empty PDF file at `frontend/public/resume.pdf` ready for user replacement whenever their finalized résumé is ready.
- [x] Download Support on UI Primitives & Navigation: Enhanced `Button` component, `Header.tsx`, `MobileNav.tsx`, `Footer.tsx`, and `Contact.tsx` to handle `download` attributes and display appropriate download iconography.
- [x] Clean Verification: Passed `npm run typecheck` (0 errors), `npm run lint` (0 errors), and `npm run build` (1617 modules transformed in 9.32s).

## Phase 15 — Brand Logo Replacement
- [x] Integrate New AS Monogram Logo Asset: Sourced user's provided AS code logo into `frontend/public/as-logo.png` and `frontend/public/images/as-logo.png`.
- [x] Update Brand Configuration: Updated `logoUrl` in `src/config/brand.ts` to `./as-logo.png`.
- [x] Replace Orange Terminal Glyph: Replaced previous orange square terminal glyph across `Header.tsx`, `MobileNav.tsx`, and `Footer.tsx` with high-resolution AS monogram icon.
- [x] Favicon & Head Tags Update: Updated `index.html` favicon and apple-touch-icon links to `./as-logo.png`.
- [x] Clean Validation: Verified 0 errors with `npm run typecheck`, 0 warnings with `npm run lint`, and passing production build with `npm run build` (1617 modules transformed in 9.09s).

## Phase 16 — Skills Taxonomy & Categories Refinement
- [x] Sourced 6 Exact Categories: Updated `frontend/src/data/skills.json` to keep exclusively the 6 requested categories and their exact skill sets:
  1. Frontend Engineering (HTML5, CSS3 and Tailwind CSS, JavaScript, React.js, TypeScript)
  2. Backend Engineering (Python (FastAPI), Node.js, Express.js, REST API Architecture (API Integrations))
  3. Data Analytics & Modeling (SQL, MongoDB, Pandas, OpenPyXL, Data Modeling, Data Reconciliation, Exploratory Data Analysis)
  4. Machine Learning & AI (Machine Learning, TensorFlow, Predictive Modeling, Data Preprocessing, Model Evaluation, Feature Engineering)
  5. Systems & Automation (Python Automation, Workflow Automation, Data Pipelines, Excel Automation, Microsoft Excel, Power BI)
  6. Engineering Practices & Tools (Git, GitHub, Debugging, Problem Solving, Analytical Thinking, Database Management)
- [x] Replaced Previous Data: Removed all legacy/other categories and isolated skills, strictly confining the Skills section to these 6 categories.
- [x] Section Copy & Grid Presentation: Refined section description in `frontend/src/components/sections/Skills.tsx` and ensured a balanced 2-column grid layout (3 rows of 2 cards).
- [x] Clean Verification: Passed `npm run typecheck` (0 errors), `npm run lint` (0 errors), and production build with `npm run build` (1617 modules transformed in 10.53s).

## Phase 17 — Disciplines Showcase Removal from About Section
- [x] Removed Disciplines Showcase Window: Deleted the `~/arsh.dev/disciplines` mock terminal window shell and the 4 discipline cards (Web Engineering, Data Analytics, Backend Engineering, Systems & Automation) from `frontend/src/components/sections/About.tsx`.
- [x] Streamlined Layout: Cleaned up unused imports and icons (`BarChart3`, `Code2`, `Terminal`, `Server`, `Workflow`, `rawDisciplinesData`, `DisciplinesData`, `CardShell`), allowing the About introduction content and action CTAs to breathe in a balanced, spacious container.
- [x] Clean Validation: Passed `npm run typecheck` (0 errors), `npm run lint` (0 errors), and production build with `npm run build` (1616 modules transformed in 8.82s).

## Phase 18 — Navbar Skills Option & Section Reordering
- [x] Navbar Skills Option: Added `{ label: 'Skills', href: '#skills' }` to `navItems` in `src/config/brand.ts` and structured items to match page hierarchy (`About`, `Skills`, `Projects`, `Experience`, `Contact`, `Resume`).
- [x] Section Reordering: Reordered sections in `src/App.tsx` so that `Projects` is positioned immediately before `Experience` (Career Journey).
- [x] Active Section Synchronization: Updated `useActiveSection` hook and `Header.tsx` to monitor section anchors in the updated DOM sequence (`['about', 'skills', 'projects', 'experience', 'contact']`).
- [x] Visual Alternation & Anchor Cleanup: Swapped section background styling so that `Projects` (`bg-surface/30 dark:bg-[#121815]/50`) and `Experience` (`bg-warm-ivory dark:bg-[#0F1412]`) maintain alternating contrast with adjacent sections, and removed duplicate legacy `#about` anchor span from `Experience.tsx`.
## Phase 19 — Official Resume Integration & Verified Contact Configuration
- [x] Integrate Official Resume PDF: Sourced the user's authentic resume PDF (`Arshdeep_web_resume.pdf`, 73 KB) into `frontend/public/resume.pdf` and `frontend/dist/resume.pdf` using dedicated `copy-resume` script.
- [x] Configure Verified Contact Details: Updated `brandConfig.contact` in `src/config/brand.ts` with genuine contact details extracted from the resume:
  - Email: `arshdeepgtbit@gmail.com`
  - Phone: `+91-8799793855`
  - GitHub: `https://github.com/arshdeepsingh2003`
  - LinkedIn: `https://linkedin.com/in/arshdeep-singh-7168a937a`
  - Resume: `./resume.pdf`
- [x] Contact Section & Footer Channel Updates: Updated `Contact.tsx` and `Footer.tsx` to display the active email with copy and compose actions, direct phone row with `tel:` link, and verified external profiles for GitHub and LinkedIn.
- [x] Clean Verification: Passed `npm run typecheck` (0 errors), `npm run lint` (0 errors), and production build `npm run build` (1616 modules transformed in 9.59s).

## Phase 20 — Scroll Restoration & Refresh Navigation to About Section
- [x] Scroll Restoration Configuration: Configured `history.scrollRestoration = 'manual'` in early inline `<script>` in `frontend/index.html` and bound `beforeunload` to reset scroll to top, preventing browser cached scroll coordinates on reload.
- [x] On-Mount Navigation to About: Added mount effect in `frontend/src/App.tsx` using `scrollIntoView` and `window.scrollTo(0, 0)` with double-frame synchronization, guaranteeing immediate navigation to `#about` whenever the user refreshes or initialises the page.
- [x] URL Hash Alignment: Synchronized URL state with `window.history.replaceState(null, '', '#about')` on refresh, keeping browser history and navbar active section tracker cleanly anchored to `#about`.
- [x] In-Session Navigation Preservation: Preserved smooth scrolling and interaction for on-page navigation clicks (`#skills`, `#projects`, `#experience`, `#contact`) and regular viewport scrolling.
- [x] Clean Verification: Passed `npm run lint` (0 errors), `npm run typecheck` (0 errors), and production build `npm run build` (1616 modules transformed in 9.40s).

## Phase 21 — Component JSON Data Externalization
- [x] Dedicated JSON Data Files: Created modular JSON files under `frontend/src/data/` for every UI component so all copy, links, headlines, and metadata can be edited without modifying TSX code:
  - `about.json`: Eyebrow, headline, headline accent, bio greeting, name, role intro, brand badge, description, CTA buttons, and capability highlight items.
  - `skills.json`: Section heading metadata (eyebrow, title, description) and 6 verified skill categories with individual skill tags.
  - `projects.json`: Section heading metadata (eyebrow, title, description, empty state copy) and 6 verified portfolio projects.
  - `experience.json`: Section heading metadata (eyebrow, title, description) and 3 verified career journey internship entries with focus areas and tooling tags.
  - `contact.json`: Section heading metadata, 4 communication channel cards (email, GitHub, LinkedIn, Résumé) with titles, subtitles, descriptions, button labels, clipboard feedback, and 3 communication guarantees.
  - `header.json`: Brand logo alt text, theme toggle ARIA labels, mobile menu open/close ARIA labels, role subtitle, and mobile drawer CTA button.
  - `footer.json`: Subtitle, status badge copy, navigation heading, direct contact heading, channel labels, copyright notice, and back-to-top button labels.
  - `brand.json`: Wordmark, site title, meta description, owner display name, logo URL, navigation items, and verified contact links.
- [x] Component Dynamic Integration: Refactored `About.tsx`, `Skills.tsx`, `Projects.tsx`, `ProjectList.tsx`, `Experience.tsx`, `Contact.tsx`, `Header.tsx`, `MobileNav.tsx`, and `Footer.tsx` to consume their respective JSON files while maintaining full backward-compatibility and zero layout shift.
- [x] Config Integration: Updated `src/config/brand.ts` to source directly from `brand.json` with strict TypeScript types preserved.
- [x] Optional Brand Badge Support: Enhanced `About.tsx` to conditionally render the brand badge pill element only when `brandBadge` is provided in `about.json`, preventing empty white placeholder pills from appearing when the field is omitted.
- [x] Clean Verification: Passed `npm run typecheck` (0 errors), `npm run lint` (0 errors), and production build `npm run build` (1621 modules transformed in 9.42s).

## Phase 22 — Minimal Contact Strip & Hero Social Contact Integration
- [x] Hero Capability Row Contact Icons: Added 4 small clickable icons (LinkedIn, GitHub, Phone, Email) directly to the bottom capability highlights row in `About.tsx`, separated by a subtle vertical divider matching the visual layout of Screenshot 1.
- [x] Minimal Contact Strip: Replaced the large cards, lengthy descriptions, status badges, and duplicate Resume card in `Contact.tsx` with a clean, minimal, horizontal contact strip matching Screenshot 2.
- [x] Four Direct Contact Channels:
  - LinkedIn: Clickable icon box + `LinkedIn` serif label pointing to `https://www.linkedin.com/in/er-arshdeep-singh-7168a937a/`.
  - GitHub: Clickable icon box + `GitHub` serif label pointing to verified repo profile `https://github.com/arshdeepsingh2003`.
  - Phone: Clickable icon box + `Call` serif label + `+91-8799793855` linked to `tel:+91-8799793855`.
  - Email: Clickable icon box + `Email` serif label + `arshdeepgtbit@gmail.com` linked to `mailto:arshdeepgtbit@gmail.com`.
- [x] Typography & Contrast Visibility: Enhanced font size of phone number (`+91-8799793855`) and email address (`arshdeepgtbit@gmail.com`) to ~16–18px (`text-base sm:text-[17px]`) with medium weight (500) and high contrast against the beige background.
- [x] Responsive Wrapping & Spacing: Ensured smooth responsive wrapping on mobile viewports with zero horizontal overflow, hiding desktop dividers on narrow screens and preserving consistent spacing.
- [x] Brand Data Synchronization: Updated `brand.json` with the exact verified LinkedIn profile URL.
- [x] Verification: Passed standalone typecheck (`npm run typecheck`), linting (`npm run lint`), and production build (`npm run build`) with 0 errors.


