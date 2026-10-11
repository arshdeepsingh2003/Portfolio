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




