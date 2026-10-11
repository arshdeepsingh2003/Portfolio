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
  - Python check (`py -m py_compile backend/app/main.py`): PASSED (Exit code 0).




