# Project Memory

## Confirmed decisions & requirements
- **Project:** Personal developer portfolio website.
- **Repository layout:** Frontend (React + Vite + TypeScript) directly in project root. Python + FastAPI backend reserved in optional `backend/` directory for future approved functionality.
- **Branding:** `ARSH.DEV` as the working wordmark (isolated in a config file for easy changes).
- **Styling:** Tailwind CSS with warm ivory (`#F5F0E6`), forest green (`#173C32`), muted plum (`#8B7188`), charcoal (`#252824`), and surface (`#FFFCF6`).
- **Database:** None. Strictly no database, ORM, persistent storage, admin panel, or authentication.
- **Content storage:** Structured local TypeScript/JSON files (`src/data/`) and static assets (`public/`).
- **Contact strategy:** Direct email, GitHub, and LinkedIn links. No backend contact form or unnecessary API endpoints in MVP.
- **Sections:** Hero, About, Skills, Web Projects, Data Analytics Projects, Contact, Footer.

## Verified environment & discovery (Phase 0)
- System runtimes: Node.js `v20.20.2`, npm `10.8.2`, Python `3.11.6` (via Windows `py` launcher: `C:\Windows\py.exe`).
- Greenfield repository: No code initialized yet; documentation cleaned and harmonized.
- Documentation conflict resolution: Cleaned `PRD.md`, `API.md`, `Architecture.md`, and `README.md` to remove obsolete database, ORM, admin panel, and auth references.

## Candidate projects & category proposal
The four candidate projects are retained with unverified content marked as **pending**:

1. **Web Development:**
   - **EstateApp:** Proposed as a Web Development project (details, screenshots, and links pending user input).
   - **ScreenSync:** Proposed as a Web Development project (details, screenshots, and links pending user input).

2. **Data Analytics:**
   - **Inventory Reconciliation Tool:** Proposed as a Data Analytics project (methodology, dataset, findings, and visual artifacts pending user input).
   - **Warehouse Surveillance Dashboard:** Proposed as a Data Analytics project (operational metrics, dashboard views, and insights pending user input).

*Constraint strictly upheld: No metrics, achievements, URLs, or descriptions have been invented. All unverified fields are marked as pending owner review.*

## Do not invent
Employment history, experience years, achievements, metrics, testimonials, URLs, or project outcomes. Do not publish confidential data.

## Phase 1 Implementation & Verification (Completed)
- **Frontend Architecture:** Initialized in project root with React 18.3.1, Vite 6.1.0, TypeScript 5.7.3, Tailwind CSS 3.4.17, PostCSS, Autoprefixer, and Lucide React.
- **Design Tokens:** `tailwind.config.js` and `src/index.css` configured with documented palette (forest `#173C32`, plum `#8B7188`, ivory `#F5F0E6`, surface `#FFFCF6`, charcoal `#252824`, border `#D9D2C6`).
- **Typography:** DM Serif Display, Inter, and JetBrains Mono imported via `index.html` and configured across Tailwind font families.
- **Brand & Integrity Configuration:** `src/config/brand.ts` isolates configurable `ARSH.DEV` wordmark. Contact values (email, GitHub, LinkedIn, resume) are strictly typed as `null` with pending badges.
- **UI Primitives:** Created `Button` (primary/secondary/ghost/danger/loading/link variants), `SectionHeading` (eyebrow, title, description, configurable heading tags), `Badge` (forest, plum, neutral, success, warning, pending), and `CardShell` (surface, border, subtle shadow, interactive elevation).
- **Layout & Navigation:** Created `Header`, accessible `MobileNav` drawer (Esc key handling, focus management, body-scroll lock, touch target >= 44px), `Container`, `Footer`, and `Layout` with accessible skip-to-content anchor.
- **Root Git Ignore:** `.gitignore` added covering Node.js, Vite build artifacts, and future Python backend files.
- **Verification Run Results:**
  - `npm ls --depth=0`: PASSED (Exit code 0, all top-level dependencies resolved cleanly; Tailwind CSS v3.4.17 confirmed).
  - `npm run build` (`tsc -b && vite build`): PASSED (Exit code 0, 1598 modules transformed in 8.66s, zero compilation/type errors).
  - `npm run lint` (`eslint .`): PASSED (Exit code 0, zero lint warnings or errors).
  - `npx tsc --noEmit`: PASSED (Exit code 0, clean type check).
  - CSS Token Verification: Verified that semantic tokens (`#173C32`, `#8B7188`, `#F5F0E6`, `#FFFCF6`, `#252824`, `#D9D2C6`) and font families are present in compiled bundle.
- **Backend status:** Dormant. No database, ORM, auth, or FastAPI backend initialized.

## Phase 2 Implementation & Verification (Completed)
- **Data Architecture:** Created `src/data/about.ts` holding verified technical background narrative, guiding principles, and factual attributes. Unverified items (e.g. tenure specifics, résumé URL) remain strictly flagged as pending without inventing metrics or company history.
- **Hero Section (`src/components/sections/Hero.tsx`):**
  - Distinctive editorial layout matching design system tokens (forest green, warm ivory, surface `#FFFCF6`, muted plum).
  - Editorial H1 headline (`DM Serif Display`), introductory role narrative, and live availability badge.
  - CTAs linking to `#projects` (Web Projects), `#data-analytics` (Data Analytics), and `#about`.
  - Editorial discipline composition card showcasing both Web Engineering (React, TypeScript) and Data Analytics (Python, SQL, modeling) with an architectural pledge highlighting the zero-database design.
- **About Section (`src/components/sections/About.tsx`):**
  - Structured narrative highlighting technical craftsmanship, data-driven analytical mindset, and core philosophies.
  - Guiding principles breakdown (Clarity Over Complexity, Data Integrity & Honesty, Accessible & Resilient Craft).
  - "Profile at a Glance" summary table with verified parameters and pending tags for unverified items.
  - Direct contact action button and conditional résumé action with pending verification badge.
- **Application Integration (`src/App.tsx`):**
  - Integrated `<Hero />` and `<About />` into main layout landmarks.
  - Preserved navigable placeholder shells for `#skills`, `#projects`, `#data-analytics`, and `#contact` to keep navigation links functional ahead of Phases 3–5.
- **Verification Run Results:**
  - `npm run lint` (`eslint .`): PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npx tsc --noEmit`: PASSED (Exit code 0, clean TypeScript type check).
  - `npm run build` (`tsc -b && vite build`): PASSED (Exit code 0, 1601 modules transformed in 9.59s, zero errors).
- **Backend & Database:** Dormant. No database, ORM, backend endpoints, auth, or external dependencies introduced.

## Repository Restructuring: Dedicated frontend/ and backend/ (Completed)
- **Frontend Isolation (`frontend/`):**
  - All frontend source code (`frontend/src/`), public assets (`frontend/public/`), build setup (`frontend/vite.config.ts`, `frontend/tailwind.config.js`, `frontend/postcss.config.js`), TypeScript configs (`frontend/tsconfig*.json`), ESLint configuration (`frontend/eslint.config.js`), and frontend dependencies (`frontend/package.json`) isolated into the `frontend/` directory.
  - Installed independent frontend node modules (`frontend/node_modules/`).
  - Production build targets `frontend/dist/`.
- **Backend Isolation (`backend/`):**
  - Initialized dormant Python + FastAPI service scaffold in `backend/`.
  - Dependencies: `backend/requirements.txt` (`fastapi`, `uvicorn`, `pydantic`).
  - Application structure: `backend/app/__init__.py`, `backend/app/main.py` with CORS and `/health` status endpoint.
  - Strict compliance: Zero database, zero ORM, zero persistent storage, and documented in `backend/README.md`.
  - Syntax validated with `py -m py_compile backend/app/main.py`.
- **Root Workspace Scripts (`package.json`):**
  - Cleaned root folder of all duplicate and obsolete files.
  - Configured delegation scripts: `dev`, `build`, `lint`, `typecheck`, and `preview` all delegate via `npm --prefix frontend`.
- **Verification Run Results:**
  - `npm run lint` (root & frontend): PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck` (root & frontend): PASSED (Exit code 0, clean TypeScript check).
  - `npm run build` (root & frontend): PASSED (Exit code 0, 1601 modules transformed in 8.76s).
## Phase 3 Implementation & Verification (Completed)
- **Skills Architecture & Data (`frontend/src/data/skills.json`):**
  - Stored categorized supported skills across four domains: Frontend Engineering, Data Analytics & Modeling, Backend & Systems, and Architecture & Practices.
  - Zero arbitrary percentages, rankings, or ratings used—strictly truthful, binary supported technologies.
  - Rendered dynamically via `<Skills />` section component (`frontend/src/components/sections/Skills.tsx`).
- **Data-Driven Projects Architecture (`frontend/src/data/projects.json`):**
  - Fully decoupled project management: all portfolio projects are managed solely via JSON. Adding, modifying, deleting, or reordering entries updates the UI automatically without modifying any React or TypeScript code.
  - Documented strict schema in `frontend/src/types/project.ts`:
    - Required: `id`, `title`, `slug`, `category`, `shortDescription`, `description`, `technologies`, `featured`, `status`.
    - Optional/Sensible defaults: `image`, `githubUrl`, `liveUrl`.
  - Reusable presentation components: `ProjectCard` (`frontend/src/components/projects/ProjectCard.tsx`) and `ProjectList` (`frontend/src/components/projects/ProjectList.tsx`).
  - Graceful fallback: If `image` is null or fails to load, a consistent editorial fallback card with project initials and status note is rendered.
  - Conditional link actions: Live Demo and Source Code buttons render only when valid URLs exist; if neither exists, a subtle note indicates links are pending owner review.
  - Included candidate Web Development projects: `EstateApp` and `ScreenSync`.
  - Designed for Phase 4 compatibility: Included candidate Data Analytics case studies (`Inventory Reconciliation Tool`, `Warehouse Surveillance Dashboard`) with `category: "data-analytics"` in the same `projects.json` file, ready for Phase 4 filtering.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript check with JSON module resolution).
  - `npm run build`: PASSED (Exit code 0, 1608 modules transformed in 7.63s, production bundle generated cleanly).
- **Pending Owner Review:**
  - `EstateApp`: Repository URL, live deployment URL, visual preview asset, and production metrics.
  - `ScreenSync`: Repository URL, live deployment URL, visual preview asset, and production metrics.
  - `Inventory Reconciliation Tool`: Dataset schema origins, analytical pipeline scripts/queries, empirical findings, and visual preview asset.
  - `Warehouse Surveillance Dashboard`: Surveillance dataset sources, operational metrics, dashboard views, and visual preview asset.

## Phase 4 Implementation & Verification (Completed)
- **Data Analytics Architecture & Case Studies:**
  - Data schema extended in `frontend/src/types/project.ts` with `AnalyticsCaseStudy` interface supporting structured case study facets (`coreQuestion`, `datasetSource`, `methodology`, `keyFindings`, `limitations`).
  - Candidate projects in `frontend/src/data/projects.json` updated with `caseStudy` facets:
    - `Inventory Reconciliation Tool` (ID: `inventory-reconciliation`, `category: "data-analytics"`).
    - `Warehouse Surveillance Dashboard` (ID: `warehouse-surveillance`, `category: "data-analytics"`).
  - Strict data integrity preserved: All unverified facets are set to `null` with explicit "Pending owner review" / "Pending" status badges. No synthetic datasets, findings, or metrics have been invented.
  - Adding, editing, or populating metrics in `projects.json` immediately reflects in the UI without modifying React code.
- **Dedicated Visual Identity (`frontend/src/components/projects/AnalyticsProjectCard.tsx`):**
  - Muted plum accents (`text-plum`, `border-plum/50`, `bg-plum/10`) contrasting with the Web Engineering section's forest green focus.
  - Analytical schematic fallback card for missing visual artifacts with `BarChart3` icon, title, and "Visual Artifact Pending" badge.
  - Structured 5-facet case study presentation:
    1. Core Problem / Question (`HelpCircle`)
    2. Dataset & Source (`Database`)
    3. Methodology & Approach (`Layers`)
    4. Key Findings & Outcomes (`CheckCircle2`)
    5. Limitations & Caveats (`AlertCircle`)
  - Tooling & Analytical Stack badges (`Python`, `SQL`, `Data Modeling`, etc.).
  - Action buttons for interactive dashboards or query repos, with fallback indicator when URLs are pending.
- **Dedicated Section (`frontend/src/components/sections/DataAnalytics.tsx`):**
  - Landmark `<section id="data-analytics" aria-labelledby="data-analytics-heading">` matching all navigation anchors.
  - Analytical Integrity Framework banner highlighting 4 core principles: Verified Schema Origins, Zero Invented Metrics, Reproducible Pipelines, and Transparent Limitations.
  - Reusable `ProjectList` component (`variant="analytics"`, `category="data-analytics"`).
- **Navigation Integration:**
  - Preserved `#data-analytics` anchor targets in `Header.tsx` (desktop nav), `MobileNav.tsx` (mobile drawer), `Footer.tsx` (footer links), and `Hero.tsx` (hero CTA button).
  - Replaced Phase 4 placeholder shell in `App.tsx` with `<DataAnalytics />`.
  - Preserved all other sections: Hero, About, Skills, Web Projects, Contact shell (Phase 5), and Footer.
- **Zero-DB & Boundaries Compliance:**
  - Strictly no database, ORM, persistent storage, auth, or unnecessary external dependencies introduced.
- **Verification Run Results:**
  - `npm run lint` (`eslint .`): PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck` (`tsc --noEmit`): PASSED (Exit code 0, clean TypeScript check).
  - `npm run build` (`tsc -b && vite build`): PASSED (Exit code 0, 1610 modules transformed in 8.11s, production bundle built cleanly).

## Phase 5 Implementation & Verification (Completed)
- **Contact Architecture (`frontend/src/components/sections/Contact.tsx`):**
  - Replaced the placeholder shell with a complete, responsive Contact section.
  - Sourced direct email, GitHub, LinkedIn, and résumé links dynamically from `brandConfig` (`frontend/src/config/brand.ts`).
  - Strict data integrity preserved: When contact fields are `null`, clean "Pending Verification" badges and informative notes are shown without inventing email addresses, broken URLs, or personal details.
  - Interactive email action: Integrated clipboard copy with temporary feedback state and `mailto:` action when configured.
  - Direct communication guarantees banner: Explains zero tracking/database policy, direct peer-to-peer discourse, and current availability status.
  - Strictly zero contact form backend, database, or API endpoints introduced.
- **Visual Polish & Editorial Consistency:**
  - Semantic heading hierarchy repaired: Adjusted Hero discipline card sub-elements from `h2` to `h3`, preserving strict H1 (Hero title) -> H2 (Section headings) -> H3 (Card titles) hierarchy.
  - Restrained editorial accent: Added a subtle hand-drawn SVG underline flourish under "decisive insight" in the Hero headline adhering to `docs/DESIGN_SYSTEM.md`.
  - Alternating section rhythm: Balanced section background classes across the page (Hero -> About `bg-surface/30` -> Skills `bg-warm-ivory` -> Projects `bg-surface/30` -> Data Analytics `bg-warm-ivory` -> Contact `bg-surface/30` -> Footer `bg-surface`).
  - Card alignment: Applied `items-stretch` across `ProjectList` and `Skills` grids ensuring consistent row heights and bottom-aligned button action bars.
  - Accessibility: Preserved clear focus indicators (`:focus-visible`), accessible ARIA landmarks (`aria-labelledby`, `aria-label`), touch target sizes >= 44px, and reduced-motion override support.
- **Project & Skill Data Integrity:**
  - Preserved `projects.json` and `skills.json` without hardcoding any details in React components.
  - No synthetic metrics, findings, or links fabricated.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript check).
  - `npm run build`: PASSED (Exit code 0, 1611 modules transformed in 7.73s, production bundle generated cleanly).

## Phase 6 Implementation & Verification (Completed)
- **Accessibility & Assistive Tech Enhancements:**
  - **Accessible Mobile Navigation (`MobileNav.tsx`):** Implemented WAI-ARIA Dialog modal pattern with keyboard focus trapping (`Tab` and `Shift+Tab`), auto-focusing the close button on mount, and returning focus to the triggering element on dismiss.
  - **Status Announcement & Clipboard Resilience (`Contact.tsx`):** Added a persistent live region (`aria-live="polite" aria-atomic="true"`) for screen reader announcements on copy actions. Added a fallback for non-secure or restricted clipboard contexts using a temporary textarea selection mechanism. Added visual feedback for both success (`copied`) and fallback instructions (`failed`).
  - **Landmark Consistency:** Added `id="skills-heading"` and `aria-labelledby="skills-heading"` to the Skills section, and `id="projects-heading"` and `aria-labelledby="projects-heading"` to the Projects section, creating a uniform landmark hierarchy across all major sections.
  - **Image & Icon Accessibility:** Enhanced alt text in `ProjectCard` and `AnalyticsProjectCard` to be descriptive (`Preview screenshot of [Title]` and `Visual analytical artifact for [Title]`), and ensured all decorative icon instances use `aria-hidden="true"`.
- **Responsive Viewport Refinements (320px, 375px, 768px, 1024px, 1440px):**
  - **Subpixel Overflow Prevention:** Added `overflow-x: clip;` to `body` in `index.css`, avoiding horizontal scrolling or jitter without breaking `position: sticky` on the header.
  - **Reduced-Motion Hardening:** Explicitly targeted `html` with `scroll-behavior: auto !important;` under `@media (prefers-reduced-motion: reduce)` to override Tailwind's `scroll-smooth` class.
  - **320px–375px Mobile Touch Targets & Hierarchy:**
    - Adjusted Hero headline scale to `text-3xl sm:text-5xl lg:text-6xl` to prevent awkward word wraps on 320px screens.
    - Added `w-full sm:w-auto` to Hero and About action buttons for full-width touch targets (minimum 44px height) on mobile.
    - Updated discipline highlight strip to `grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3` to avoid crowded columns on compact mobile widths.
    - Refined `CardShell` `lg` padding to `p-5 sm:p-8`, preserving 20px padding on 320px devices.
- **Verification Run Results:**
  - `npm run lint` (`eslint .`): PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck` (`tsc --noEmit`): PASSED (Exit code 0, clean TypeScript check).
  - `npm run build` (`tsc -b && vite build`): PASSED (Exit code 0, 1611 modules transformed in 8.42s, production bundle generated cleanly in `frontend/dist/`).
- **Next Steps:**
  - Proceeded with Phase 7 upon explicit user approval.

## Phase 7 Deployment Preparation & Verification (Completed)
- **Production Asset Portability:**
  - Configured relative base path (`base: './'`) in `frontend/vite.config.ts` and relative favicon path in `frontend/index.html`.
  - Verified bundle asset resolution: `./assets/index-[hash].js`, `./assets/index-[hash].css`, and `./favicon.svg` load without issues on both domain roots and repository subpaths (such as `username.github.io/Portfolio/`).
- **SPA Routing Fallback Hardening:**
  - Added `frontend/public/404.html` with redirect meta script for static web hosts like GitHub Pages.
  - Added `frontend/public/_redirects` (`/* /index.html 200`) for Netlify and Cloudflare Pages.
  - Added root `vercel.json` with build settings and SPA rewrites for Vercel.
- **Automated CI/CD Workflow:**
  - Created `.github/workflows/deploy.yml` configuring zero-cost GitHub Actions deployment to GitHub Pages on pushes to `main`.
- **Security & Bundle Audit:**
  - Scanned `frontend/dist/` and project source for exposed secrets, API keys, credentials, local filesystem paths (`C:\Users\dell`), and debug statements (`console.log`): zero leaked items found.
  - Verified `.gitignore` thoroughly prevents tracking of `.env*`, `node_modules/`, Python virtual environments, and build artifacts.
- **Data Integrity Audit:**
  - Confirmed all contact data (`brand.ts`) and candidate projects (`projects.json`) strictly mark unverified items as `null` / `pending-review` with pending visual badges. Zero synthetic metrics, URLs, or accomplishments fabricated.
- **Deployment Documentation:**
  - Created `docs/DEPLOYMENT.md` detailing architecture, prerequisites, build/verification commands, zero-cost hosting setups (GitHub Pages, Cloudflare Pages, Vercel), and pre-flight security checklist.
  - Created root `README.md` introducing the architecture and linking to key documentation.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript check).
  - `npm run build`: PASSED (Exit code 0, 1611 modules transformed in 8.90s, bundle generated in `frontend/dist/`).
- **Hosting Recommendation:**
  - Primary recommendation: **GitHub Pages** via the included GitHub Actions workflow. Requires zero new accounts, zero cost, and is native to the repository.
  - Secondary options: **Cloudflare Pages** (unlimited bandwidth, edge network) or **Vercel** (instant preview URLs via `vercel.json`).
- **Testing Limitation Notice:**
  - Headless/automated browser execution is restricted in this sandboxed environment; verified manually via local preview command (`npm run preview`).
- **Next Steps:**
  - Await user explicit confirmation before pushing code to GitHub or initiating public live deployment.

## Brand Logo Asset Integration (Completed)
- **Asset Storage:** Uploaded monogram logo asset stored in `frontend/public/images/logo.png` and `frontend/public/logo.png`.
- **Favicon & Apple Touch Icon:** Updated `frontend/index.html` to reference `./images/logo.png` for browser tab icons.
- **Brand Configuration:** Extended `brandConfig` in `frontend/src/config/brand.ts` with `logoUrl: './images/logo.png'`.
- **UI Integration:**
  - **Header (`Header.tsx`):** Rendered brand logo next to the `ARSH.DEV` wordmark with "Software Developer" subtitle.
  - **Mobile Navigation (`MobileNav.tsx`):** Displayed brand logo in drawer header.
  - **Hero Section (`Hero.tsx`):** Integrated "Identity & Vision" emblem showcase card in the right column composition featuring the logo and core principles: Ideas &bull; Code &bull; Solutions &bull; Impact.
  - **About Section (`About.tsx`):** Incorporated logo emblem into the "Profile at a Glance" header card.
  - **Footer (`Footer.tsx`):** Displayed logo mark alongside the wordmark and title.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript check).
  - `npm run build`: PASSED (Exit code 0, 1611 modules transformed, production assets generated cleanly in `frontend/dist/`).

## Database Taxonomy & Architecture Update (Completed)
- **Zero-DB Removal:** Removed all public references to "Zero-DB", "Strict Zero-DB Architecture", and "zero-database footprint" across the frontend.
- **Skills Taxonomy (`src/data/skills.json`):** Replaced "Strict Zero-DB Architecture" with "Database Management & SQL" (highlighted) under Architecture & Practices. Updated category description to "Version control, accessible design standards, and robust database architecture."
- **About Data (`src/data/about.ts`):** Updated Architecture Principles fact to "Database Management & SQL, Semantic HTML, Clean State".
- **Hero Section (`src/components/sections/Hero.tsx`):** Updated architecture summary pill to "Modular &bull; Semantic &bull; Fast" and architectural standard pledge to "Robust database modeling, clean state & authentic data structures."
- **Contact Section (`src/components/sections/Contact.tsx`):** Updated heading description and changed guarantee to "Direct Privacy & Security" emphasizing no third-party tracking scripts or intermediary forms.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1611 modules transformed cleanly).

## Phase 8 Portfolio Content & Design Update (Completed)
- **Hero Section Introduction:**
  - Updated hero narrative to exact copy: *"Hello, I'm Arshdeep Singh, a Full Stack Developer behind ARSH.DEV. I build modern, scalable web applications with a focus on clean code, thoughtful design, and seamless user experiences. Beyond development, I leverage data analytics to transform complex operational data into actionable insights and solve real-world problems through technology."*
  - Removed decorative logo emblem card from the hero discipline showcase.
  - Retained `ARSH.DEV` as primary text wordmark, preserved brand identity across header/nav/footer, and kept existing warm ivory (`#F5F0E6`), forest green (`#173C32`), muted plum (`#8B7188`), and charcoal (`#252824`) color palette.
- **Core Disciplines Showcase:**
  - Centralized in `frontend/src/data/disciplines.json` with TypeScript schema in `frontend/src/types/discipline.ts`.
  - Sourced 4 exact discipline cards: Web Engineering (Core Discipline), Data Analytics (Core Discipline), Backend Engineering (Core Discipline), and Systems & Automation (Applied Engineering).
  - Subtle visual identity per discipline using design system tokens.
  - Removed "Verified" badge and all unsubstantiated verification claims.
- **Engineering Overview:**
  - Replaced compact technology overview with 4 numbered categories:
    - `01. FRONTEND`: React · TypeScript · Tailwind CSS · Vite
    - `02. BACKEND`: Node.js · Express.js · Python · FastAPI
    - `03. DATA ANALYTICS`: Python · Pandas · SQL · Data Modeling
    - `04. ARCHITECTURE`: REST APIs · Automation · Scalable Systems
- **Professional Experience / Career Journey Integration:**
  - Removed the legacy "Background & Journey" about narrative from the active page layout.
  - Positioned the Professional Experience cards directly in that primary narrative slot with section heading **Career Journey** and eyebrow **Professional Experience**.
  - Updated navigation items in `brandConfig.navItems` to direct to `#experience`.
- **Skills Section Refinement:**
  - Removed "Web Accessibility (A11y)" from the "Architecture & Practices" category in `frontend/src/data/skills.json`.
  - Removed the "VERIFIED TECHNOLOGIES & TOOLS" label from all cards in `frontend/src/components/sections/Skills.tsx`.
  - Removed the checkmark tick icons (`CheckCircle2`) from all skill pills, rendering clean and distraction-free technology badges.
- **Global Skill Consistency & Color Unification:**
  - Standardized all skill badges, tags, and category count badges to uniform neutral grey (`variant="neutral"`) across Skills, Hero, Experience, and Project sections.
  - Simplified HTML representations strictly to **HTML5** (removed "HTML5 / Semantic Structure" and separate "HTML" entries).
  - Renamed all instances of "JavaScript (ESNext)" to **JavaScript**.
  - Verified zero occurrences of "Semantic Search" across the repository.
  - Added **Machine Learning** across the Skills taxonomy (`Data Analytics & Modeling`), Disciplines showcase & Engineering Overview, candidate project descriptions, internship experience, and About facts.
- **Quality Checks & Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript check).
  - `npm run build`: PASSED (Exit code 0, 1612 modules transformed in 11.47s, production assets in `frontend/dist/`).

## Phase 9 Layout & Skills Reorganization (Completed)
- **Removed Engineering Overview Section:**
  - Removed the 4-category engineering overview (`01. FRONTEND`, `02. BACKEND`, `03. DATA ANALYTICS`, `04. ARCHITECTURE`) from the Hero section left column.
  - Adjusted primary action buttons spacing to eliminate unnecessary margin, providing visual balance with the 4-discipline composition card in the right column.
  - Cleaned up `engineeringOverview` from `frontend/src/data/disciplines.json` and marked it optional in `frontend/src/types/discipline.ts`.
- **Page & Navigation Reordering:**
  - Moved the **Skills** section directly above **Career Journey** (Experience) in `frontend/src/App.tsx`.
  - Resulting page order: Hero &rarr; Skills &rarr; Career Journey (Experience) &rarr; Web Projects &rarr; Data Analytics &rarr; Contact.
  - Reordered navbar links in `frontend/src/config/brand.ts`: Skills (`#skills`), Experience (`#experience`), Web Projects (`#projects`), Data Analytics (`#data-analytics`), Contact (`#contact`).
  - Perfected alternating section background color cadence: Warm Ivory &rarr; Surface/30 &rarr; Warm Ivory &rarr; Surface/30 &rarr; Warm Ivory.
- **Skills Taxonomy & Systems & Automation Integration:**
  - Added new dedicated category `Systems & Automation` in `frontend/src/data/skills.json`:
    - Label: `Applied Engineering`
    - Description: *"Automating repetitive workflows and connecting business systems through API integrations, data pipelines, and intelligent process design."*
    - Skills: REST APIs, Python Automation, Data Pipelines, API Integrations, System Integration, Workflow Automation, Excel Automation.
  - Extended `SkillCategory` type in `frontend/src/types/skill.ts` to support optional `label?: string`.
  - Updated category naming for backend to `Backend Engineering` with `Core Discipline` label.
  - Enhanced `frontend/src/components/sections/Skills.tsx` to render category label eyebrow, with responsive grid layout (`md:col-span-2` on odd final card).
- **Quality Checks & Verification Run Results:**
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript compilation).
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1612 modules transformed in 8.15s, production assets compiled in `frontend/dist/`).

## Phase 10 Unified Projects Portfolio & Project Catalog Update (Completed)
- **Unified Projects Section:**
  - Removed separate `DataAnalytics` section from main page flow in `frontend/src/App.tsx`.
  - Consolidated all projects into a single, unified "Featured Projects" section in `frontend/src/components/sections/Projects.tsx` with anchor `#projects`.
  - Removed category segregation in `ProjectList` (`projects.json` directly drives the unified showcase).
- **Project Catalog Ingestion:**
  - Ingested 6 verified projects into `frontend/src/data/projects.json` sorted by years (reverse chronological 2026 -> 2025 -> 2024):
    1. **BuildLoop: AI-Powered Product Management Platform** (2026, Major Project, In Progress) — Voyage AI, Pinecone, RAG, Vector Embeddings, Semantic Search, React, Node.js.
    2. **Personal Knowledge Base Copilot (RAG)** (2026, Self Project, In Progress) — Python, RAG, Vector Embeddings, Semantic Search, Document Ingestion, LLMs.
    3. **AI Fake Job Posting Detector** (2026, Self Project, Completed) — Python, Machine Learning, Data Analytics, Text Classification, System Design.
    4. **E-Commerce Platform** (2025, Self Project, Completed) — React, Node.js, Express, MongoDB, Tailwind CSS.
    5. **Mobile Sales Analytics Dashboard (Power BI)** (2025, Self Project, Completed) — Power BI, DAX, Data Modeling, KPI Analytics, Interactive Dashboards.
    6. **Real Estate Marketplace** (2024, Self Project, Completed) — React, Node.js, Express, MongoDB.
- **Card UI & Type Enhancements:**
  - Extended `Project` schema in `frontend/src/types/project.ts` and `frontend/src/utils/projectHelpers.ts` to support optional `year` and `projectType` properties.
  - Enhanced `frontend/src/components/projects/ProjectCard.tsx` to display:
    - Badges for `projectType` ("Major Project", "Self Project"), `year` ("2026", "2025", "2024"), and lifecycle status ("In Progress", "Completed").
    - Tailored editorial fallback icons (`BarChart3` for Power BI/analytics, `Bot` for AI/RAG/ML, `Code2` for full-stack web).
    - Authentic project narrative description without repetition.
- **Navigation & Page Rhythm Alignment:**
  - Updated `brandConfig.navItems` in `frontend/src/config/brand.ts`: Skills (`#skills`), Experience (`#experience`), Projects (`#projects`), Contact (`#contact`).
  - Updated Hero CTA buttons in `frontend/src/components/sections/Hero.tsx` to link to `#projects`, `#experience`, and `#skills`.
  - Maintained alternating section background rhythm: Hero (Ivory) &rarr; Skills (Warm Ivory) &rarr; Career Journey (Surface/30) &rarr; Projects (Warm Ivory) &rarr; Contact (Surface/30).
- **Verification & Build Results:**
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run lint`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1611 modules transformed in 8.67s).

## Phase 11 Motion System & Animation Enhancement (Completed)
- **Zero-Dependency Motion Architecture:**
  - Designed pure CSS3 + React IntersectionObserver architecture without heavy third-party animation libraries or bundle overhead.
  - Implemented `useScrollReveal` custom hook (`frontend/src/hooks/useScrollReveal.ts`) and reusable `ScrollReveal` component (`frontend/src/components/ui/ScrollReveal.tsx`) supporting `fade-up`, `fade`, and `scale` entrance variants.
  - One-time intersection trigger: Disconnects observers immediately upon entrance to eliminate unwanted animation replays on scroll jitter.
  - SSR & Graceful Degradation: If JavaScript or IntersectionObserver is disabled/unavailable, all content remains visible and accessible.
- **Hero Entrance Sequence:**
  - Coordinated sequence: Status indicator badge (`animate-hero-fade`, 60ms delay) &rarr; Editorial headline (`animate-hero-slide`, 150ms delay) &rarr; Narrative description (`animate-hero-slide`, 260ms delay) &rarr; CTA buttons (`animate-hero-slide`, 360ms–500ms stagger) &rarr; 4 Core Discipline showcase (`animate-hero-slide`, 240ms delay).
  - Added gentle floating scroll indicator pill (`animate-float-gentle`) at the bottom of the Hero encouraging visitors to explore downward.
- **Navigation & Header Effects:**
  - Added sticky header scroll listener: dynamically transitions between transparent ivory and elevated `backdrop-blur-md` with `shadow-subtle` and crisp border.
  - Created `useActiveSection` custom hook (`frontend/src/hooks/useActiveSection.ts`) tracking active viewport section anchors (`#skills`, `#experience`, `#projects`, `#contact`).
  - Implemented animated sliding underline (`.nav-link-underline`) on desktop navigation links, highlighting the active section and responding to hover with cubic-bezier easing.
  - Mobile Drawer: Added two-stage transition state ensuring both open AND close transitions animate smoothly (`translate-x-full` to `translate-x-0` and backdrop opacity fade) while strictly maintaining focus trapping, Escape key handling, and focus restoration.
- **Scroll-Triggered Section Reveals & Card Micro-Interactions:**
  - Progressive staggered reveals applied across Section Headings, Skills category cards (`delay={index * 120}`), Experience timeline cards (`delay={index * 120}`), Project catalog cards (`delay={index * 100}`), and Contact channel cards (`delay={index * 100}`).
  - Card hover effects: Refined subtle upward lift (`hover:-translate-y-1` to `hover:-translate-y-1.5`) and elevation shadow (`hover:shadow-card` / `hover:shadow-elevated`).
  - Project Cards: Subtle 5% image scale (`group-hover:scale-105`) strictly within overflow-hidden container, subtle gradient overlay on hover, and directional icon movements on action buttons.
  - Experience Section: Timeline markers with subtle hover scaling, and taste-restrained "Current Role" pulse indicator for Zigly Pet Care based on authentic "Present" duration data.
  - Contact Section: Seamless Copy Email micro-interaction with checkmark feedback icon, screen-reader live announcements, and subtle channel card hover scaling.
  - Button Primitives: Micro-interactions with `hover:-translate-y-0.5`, `active:scale-[0.98]`, and directional icon nudging (`group-hover/btn:translate-x-0.5`).
- **Accessibility & Reduced Motion:**
  - Complete compliance with `@media (prefers-reduced-motion: reduce)` in `frontend/src/index.css`: all animations, transforms, and transitions instantly disabled and zeroed out.
  - Hook-level media query check: `useScrollReveal` immediately sets `isVisible = true` if reduced motion is requested.
  - Keyboard focus rings strictly preserved (`:focus-visible`).
- **Quality Checks & Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, clean TypeScript check).
  - `npm run build`: PASSED (Exit code 0, 1614 modules transformed in 9.01s, production bundle built cleanly).

## Phase 12 Dark Mode System & Fixed Floating Pill Navbar (Completed)
- **Dark Mode Architecture:**
  - Configured class-based dark mode (`darkMode: 'class'`) in [tailwind.config.js](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/tailwind.config.js).
  - Created [ThemeContext](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/context/ThemeContext.tsx), [theme-context.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/context/theme-context.ts), and [useTheme](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/hooks/useTheme.ts) custom hook.
  - Automatically checks `localStorage` key `'portfolio-theme-preference'` and falls back to system `(prefers-color-scheme: dark)`.
  - Added inline `<head>` script in [index.html](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/index.html) to prevent theme flashing on initial page load.
  - Defined CSS variables and base dark rules in [index.css](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/index.css) (`.dark body` `#0F1412`, `.dark h1-h6` `#FAF7F2`, high-contrast emerald/mint focus rings).
- **Fixed Floating Pill Navbar:**
  - Redesigned [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx) to match the reference visual design:
    - Fixed position on scrolling (`fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center`).
    - Frosted glass backdrop blur (`backdrop-blur-md bg-surface/80 dark:bg-[#161D1A]/85 border border-border/60 dark:border-white/10 shadow-lg rounded-2xl sm:rounded-full`).
    - Left brand mark: Orange rounded badge with white terminal prompt `>_` glyph matching the screenshot.
    - Center links: `Home`, `About`, `Work`, `Projects`, `Resume` in clean monospace font with active section highlight via `useActiveSection`.
    - Right toggle: Rounded square outline toggle button with outline `Moon` icon in light mode and `Sun` icon in dark mode.
    - Mobile responsiveness: Compact mobile drawer with full keyboard focus trap, smooth transitions, and dark mode support.
- **Full Dark Mode Styling Across All Components:**
  - Layout, Hero, About, Skills, Experience, Projects, ProjectCard, AnalyticsProjectCard, Contact, Footer, Button, CardShell, Badge, and SectionHeading all updated with curated dark theme tokens.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1619 modules transformed in 10.51s).

## Phase 13 About & Navigation Alignment (Completed)
- **Home Content Relocation to About:**
  - Transferred complete hero overview into [About.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/About.tsx) with `id="about"`, containing the editorial headline, role badge ("Full-Stack Developer & Analyst"), status ("Open to opportunities"), introductory bio, call-to-action buttons ("Explore Projects", "Career Journey", "Technical Skills"), the 4-discipline composition card showcase (`~/arsh.dev/disciplines`), and scroll prompt indicator.
- **Legacy About Content Removal:**
  - Removed old narrative quotes, story paragraphs, guiding principles card, and profile-at-a-glance card from `About.tsx`.
- **Navigation Simplification:**
  - Removed `Home` from `navItems` in [brand.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/config/brand.ts). Navigation items are now: `About` (`#about`), `Work` (`#experience`), `Projects` (`#projects`), and `Resume` (`#contact`).
  - Desktop floating navbar ([Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx)), mobile navigation drawer ([MobileNav.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/MobileNav.tsx)), and footer ([Footer.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Footer.tsx)) all start with `About`.
- **Active Section Tracking Alignment:**
  - Updated [useActiveSection.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/hooks/useActiveSection.ts) and [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx) to monitor `['about', 'skills', 'experience', 'projects', 'contact']`.
  - When viewport is at top (`scrollY < 180`), `#about` is automatically highlighted as active in the navbar.
  - Brand terminal logo in [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx) navigates to `#about`.
- **App Layout Organization:**
  - In [App.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/App.tsx), rendered `<About />` directly as the top section of the page, eliminating duplicate home sections.
  - Kept [Hero.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Hero.tsx) as a clean re-export of `About`.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1617 modules transformed in 10.12s).

## Phase 14 Contact Navigation & Downloadable Resume (Completed)
- **Separated Contact and Resume in Navigation:**
  - Added dedicated `{ label: 'Contact', href: '#contact' }` nav item in [brand.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/config/brand.ts) so clicking "Contact" scrolls directly to `#contact` where emails and contact methods live.
  - Configured `{ label: 'Resume', href: './resume.pdf', isDownload: true, downloadFileName: 'Arshdeep_Singh_Resume.pdf' }` as an explicit downloadable document link.
- **Empty Resume Placeholder:**
  - Created a valid minimal empty PDF file at [resume.pdf](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/public/resume.pdf) in `frontend/public/`, keeping the resume ready for immediate download and simple replacement whenever the user uploads their final resume file.
- **Download Support in UI Primitives & Nav Components:**
  - Extended [Button.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/ui/Button.tsx) with optional `download?: string | boolean` attribute for link rendering.
  - Updated [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx), [MobileNav.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/MobileNav.tsx), [Footer.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Footer.tsx), and [Contact.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Contact.tsx) to pass download attributes and render contextual download icons.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1617 modules transformed in 9.32s).

## Phase 15 Brand Logo Replacement (Completed)
- **New AS Monogram Logo Integration:**
  - Sourced the authentic AS monogram logo into [as-logo.png](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/public/as-logo.png) in `frontend/public/`.
  - Configured `brandConfig.logoUrl` to `'./as-logo.png'` in [brand.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/config/brand.ts).
- **Header, Mobile Navigation & Footer Updates:**
  - Replaced the orange terminal prompt `>_` glyph with the new AS monogram logo wrapped in a clean, elevated container matching dark/light mode styles:
    - [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx): Stylized AS monogram mark with smooth hover scale effect.
    - [MobileNav.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/MobileNav.tsx): Rendered in mobile menu brand header alongside wordmark.
    - [Footer.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Footer.tsx): Rendered in footer brand cluster.
- **Browser Favicon Synchronization:**
  - Updated [index.html](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/index.html) favicon and apple-touch-icon links to `./as-logo.png`.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1617 modules transformed in 9.09s).

## Phase 16 Skills Taxonomy & Categories Refinement (Completed)
- **Updated Skills Data ([skills.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/skills.json)):**
  - Updated the Skills section data to exclusively contain the 6 requested categories and their exact item lists and descriptions:
    1. **Frontend Engineering:** "Building responsive, accessible, and high-performance user interfaces." (HTML5, CSS3 and Tailwind CSS, JavaScript, React.js, TypeScript).
    2. **Backend Engineering:** "Developing scalable backend services, APIs, and application logic." (Python (FastAPI), Node.js, Express.js, REST API Architecture (API Integrations)).
    3. **Data Analytics & Modeling:** "Transforming complex data into meaningful insights through processing and analysis." (SQL, MongoDB, Pandas, OpenPyXL, Data Modeling, Data Reconciliation, Exploratory Data Analysis).
    4. **Machine Learning & AI:** "Applying machine learning techniques to build intelligent, data-driven solutions." (Machine Learning, TensorFlow, Predictive Modeling, Data Preprocessing, Model Evaluation, Feature Engineering).
    5. **Systems & Automation:** "Automating repetitive workflows and connecting business systems efficiently." (Python Automation, Workflow Automation, Data Pipelines, Excel Automation, Microsoft Excel, Power BI).
    6. **Engineering Practices & Tools:** "Building maintainable software through effective development practices and problem-solving." (Git, GitHub, Debugging, Problem Solving, Analytical Thinking, Database Management).
  - All other previous/legacy skills were replaced, strictly confining the section to these 6 categories.
- **Visual Grid Alignment ([Skills.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Skills.tsx)):**
  - Updated the section description to reflect the 6 categories: "A structured overview of core competencies across frontend, backend, data analytics, machine learning, systems automation, and engineering practices."
  - With exactly 6 categories, the cards render in a symmetrical 3x2 grid on desktop and clean single-column cards on mobile.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1617 modules transformed in 10.53s).

## Phase 17 Disciplines Showcase Removal from About Section (Completed)
- **Removed Disciplines Terminal Window:**
  - Completely removed the `~/arsh.dev/disciplines` mock window container and its 4 inner discipline cards (Web Engineering, Data Analytics, Backend Engineering, Systems & Automation) from [About.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/About.tsx).
- **Streamlined Layout & Cleaned Dependencies:**
  - Removed unused imports and icons (`BarChart3`, `Code2`, `Terminal`, `Server`, `Workflow`, `rawDisciplinesData`, `DisciplinesData`, `DisciplineIcon`, `CardShell`).
  - Adjusted the About layout to let the headline, introductory narrative, and call-to-action buttons occupy a clean, spacious single column (`max-w-3xl lg:max-w-4xl`).
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1616 modules transformed in 8.82s).

## Phase 18 Navbar Skills Option & Section Reordering (Completed)
- **Added Skills to Navbar:**
  - Added `{ label: 'Skills', href: '#skills' }` to `brandConfig.navItems` in [brand.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/config/brand.ts).
  - Structured navigation items to match exact top-to-bottom section sequence: `About` (`#about`), `Skills` (`#skills`), `Projects` (`#projects`), `Experience` (`#experience`), `Contact` (`#contact`), and `Resume` (`./resume.pdf`).
- **Reordered Sections in App.tsx:**
  - Positioned [Projects](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Projects.tsx) before [Experience](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Experience.tsx) (Career Journey) in [App.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/App.tsx).
- **Active Section Tracking & Cleanups:**
  - Updated [useActiveSection.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/hooks/useActiveSection.ts) and [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx) to monitor sections in the updated DOM order: `['about', 'skills', 'projects', 'experience', 'contact']`.
  - Swapped section background styling so that [Projects.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Projects.tsx) (`bg-surface/30 dark:bg-[#121815]/50`) and [Experience.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Experience.tsx) (`bg-warm-ivory dark:bg-[#0F1412]`) maintain alternating contrast with adjacent sections.
  - Removed duplicate legacy `<span id="about" className="sr-only">Career Journey</span>` from [Experience.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Experience.tsx).
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1616 modules transformed in 21.88s).

## Phase 19 Official Resume Integration & Verified Contact Configuration (Completed)
- **Official Resume PDF Sourced:**
  - Copied user's genuine resume PDF (`Arshdeep_web_resume.pdf`, 73 KB) into `frontend/public/resume.pdf` and `frontend/dist/resume.pdf` using dedicated [copy-resume.js](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/scripts/copy-resume.js).
  - Nav bar "Resume" button and all "Download Resume" / "Curriculum Vitae" buttons across the application now download the authentic full resume.
- **Configured Verified Contact Details in brandConfig:**
  - Updated `brandConfig.contact` in [brand.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/config/brand.ts) with extracted details:
    - Email: `arshdeepgtbit@gmail.com`
    - Phone: `+91-8799793855`
    - GitHub: `https://github.com/arshdeepsingh2003`
    - LinkedIn: `https://linkedin.com/in/arshdeep-singh-7168a937a`
    - Resume: `./resume.pdf`
- **Updated Contact Section & Footer Channels:**
  - [Contact.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Contact.tsx): Email badge now displays "Active Channel" with 1-click copy and "Compose Email" actions; phone number displayed with click-to-call link; LinkedIn badge displays "Verified Network" linking to profile; GitHub badge displays "Verified Account" linking to repositories.
  - [Footer.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Footer.tsx): Direct Contact includes active Email, Phone, GitHub, and LinkedIn links.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1616 modules transformed in 9.59s).

## Phase 20 Scroll Restoration & Refresh Navigation to About (Completed)
- **Manual Scroll Restoration & Early Head Script ([index.html](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/index.html)):**
  - Configured `history.scrollRestoration = 'manual'` inside the inline `<head>` execution script to disable browser automatic restoration of cached scroll coordinates on reload.
  - Added a `beforeunload` listener to reset viewport scroll to top (0, 0) upon page refresh or unload.
- **On-Mount Navigation to About ([App.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/App.tsx)):**
  - Implemented a mount effect with `scrollIntoView({ behavior: 'instant' })` and `window.scrollTo(0, 0)` fallback targeting `#about`.
  - Added multi-stage synchronization (`requestAnimationFrame` and microtask timeout) guaranteeing that late browser scroll restoration does not override the reset.
  - Aligned URL hash using `window.history.replaceState(null, '', '#about')` so the address bar reflects `#about` and the fixed navbar active section indicator cleanly highlights the About section.
- **In-Session User Navigation Unaffected:**
  - Anchor link clicks (`#skills`, `#projects`, `#experience`, `#contact`) and smooth manual page scrolling during the active session remain responsive and fluid.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1616 modules transformed in 9.40s).

## Phase 21 Component JSON Data Externalization (Completed)
- **Component JSON Data Architecture ([frontend/src/data/](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/)):**
  - Sourced all content, headings, button labels, external links, and copy across the entire portfolio into dedicated, modular JSON files:
    - [about.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/about.json): Drives the About section copy, headline, accent punctuation, bio paragraphs, CTA button links/labels, capability highlights, and background image attributes.
    - [skills.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/skills.json): Drives the Skills section heading metadata and 6 verified skill categories with all technical tags.
    - [projects.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/projects.json): Drives the Projects section heading metadata, empty state message, and 6 verified projects.
    - [experience.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/experience.json): Drives the Experience section heading metadata and career journey internships with roles, dates, locations, overviews, focus areas, and tooling tags.
    - [contact.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/contact.json): Drives the Contact section heading, the 4 communication channel cards (email, GitHub, LinkedIn, Résumé), interactive action labels, and 3 communication guarantees.
    - [header.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/header.json): Drives navigation logo alt text, theme toggle accessibility labels, mobile menu open/close labels, and drawer CTA button.
    - [footer.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/footer.json): Drives footer role subtitle, status badge copy, navigation/contact headings, channel labels, copyright text, and back-to-top button.
    - [brand.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/data/brand.json): Centralizes wordmark, site metadata, navigation items list, and verified personal contact details (email, phone, GitHub, LinkedIn, Résumé).
- **Component Refactoring:**
  - [About.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/About.tsx): Imports `about.json` for dynamic copy, CTAs, and capability badges.
  - [Skills.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Skills.tsx): Dynamically unwraps section heading and categories from `skills.json`.
  - [Projects.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Projects.tsx) & [ProjectList.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/projects/ProjectList.tsx): Dynamically unwraps section heading and projects array from `projects.json`.
  - [Experience.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Experience.tsx): Dynamically unwraps section heading and experience entries from `experience.json`.
  - [Contact.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/Contact.tsx): Consumes `contact.json` for all channel text, guarantees, and section headings.
  - [Header.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Header.tsx) & [MobileNav.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/MobileNav.tsx): Consumes `header.json`.
  - [Footer.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/layout/Footer.tsx): Consumes `footer.json`.
  - [brand.ts](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/config/brand.ts): Sourced from `brand.json` with full TypeScript interfaces intact.
  - [About.tsx](file:///c:/Users/dell/Documents/GitHub/Portfolio/frontend/src/components/sections/About.tsx): Added conditional rendering guard for `brandBadge`, removing the empty white pill container when the field is omitted from `about.json`.
- **Verification Run Results:**
  - `npm run lint`: PASSED (Exit code 0, 0 warnings, 0 errors).
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1621 modules transformed in 9.42s).

### Phase 22: Minimal Contact Strip & Hero Social Contact Integration
- **Hero Section Social/Contact Icons (`About.tsx`):**
  - Added 4 small clickable icons (LinkedIn, GitHub, Phone, Email) in the bottom capability highlights row alongside Web Development, Data Analytics, and Problem Solving.
  - Divided by a subtle vertical separator line matching Screenshot 1.
  - Configured with verified URLs (`https://www.linkedin.com/in/er-arshdeep-singh-7168a937a/`, `https://github.com/arshdeepsingh2003`, `tel:+91-8799793855`, `mailto:arshdeepgtbit@gmail.com`).
- **Minimal Horizontal Contact Strip (`Contact.tsx`):**
  - Removed large contact cards, heavy borders, long descriptions, status badges, guarantees box, and duplicate Resume card.
  - Created a minimal horizontal contact strip matching Screenshot 2 with 4 options: LinkedIn, GitHub, Phone (`Call`), Email (`Email`).
  - Increased font size of phone number (`+91-8799793855`) and email (`arshdeepgtbit@gmail.com`) to ~16–18px (`text-base sm:text-[17px]`) with medium weight (`font-medium`) and high contrast.
  - Added vertical dividers between items on desktop viewports and smooth wrapping for mobile viewports without horizontal overflow.
- **Verification Run Results:**
  - `npm run typecheck`: PASSED (Exit code 0, 0 errors).
  - `npm run lint`: PASSED (Exit code 0, 0 errors).
  - `npm run build`: PASSED (Exit code 0, 1621 modules transformed in 9.93s).


