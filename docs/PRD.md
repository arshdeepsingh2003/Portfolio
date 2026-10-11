# Product Requirements Document

## 1. Product Overview
- **Product name:** Personal Developer Portfolio
- **One-line description:** A full-stack portfolio that showcases web development projects, data analytics work, technical skills, and contact details.
- **Product type:** Personal portfolio website
- **Primary platform:** Responsive web application
- **Branding:** `ARSH.DEV` (working wordmark, easily configurable)

## 2. Problem
Recruiters and collaborators need a quick, credible way to understand the owner's capabilities and inspect real work. The site should present web development and data analytics as distinct but related strengths.

## 3. Goals
### Primary goals
- Present a clear professional introduction.
- Showcase web development projects with technologies, outcomes, and source/demo links.
- Give data analytics projects a dedicated, easy-to-find section.
- Make contact and résumé access obvious via direct links.
- Keep content maintainable via structured local frontend data files.
- Preserve optional Python + FastAPI backend in `backend/` for approved future server-side functionality.

### Secondary goals
- Feel crafted and personal rather than template-like or AI-generated.
- Load quickly and work well on mobile.
- Be easy to update as projects and skills change.

## 4. Target Users
- **Recruiters and hiring managers:** assess skills, experience, and project quality.
- **Developers and collaborators:** inspect repositories, demos, and technical choices.
- **Analytics-focused visitors:** find dashboards, SQL/Python analysis, forecasting, and insight summaries.

## 5. User Stories
- As a recruiter, I want to understand the developer's focus quickly.
- As a visitor, I want to browse projects and see the stack, problem, solution, and links.
- As an analytics visitor, I want a dedicated Data Analytics section.
- As a visitor, I want to download or open a résumé easily.
- As a visitor, I want direct, working contact methods (Email, GitHub, LinkedIn).
- As the portfolio owner, I want to update project and skill content easily via structured local data files without backend or database complexity.

## 6. Core Features
### Feature 1 — Portfolio pages
Implement Hero, About, Skills, Web Projects, Data Analytics, Contact, and Footer.

### Feature 2 — Project catalogue
Each project includes title, approved description, category, stack, screenshot, and optional verified repository/demo/case-study links. Stored in local frontend TypeScript/JSON files (`src/data/`).

### Feature 3 — Data Analytics portfolio
A dedicated section with case studies describing the question, dataset/source, approach, findings, and limitations. Do not invent results.

### Feature 4 — Contact
Direct email (`mailto:`), GitHub, and LinkedIn links. Direct contact links are the default; no backend form or database storage.

### Feature 5 — Optional Backend (Future)
An optional Python + FastAPI service in `backend/` reserved for explicitly approved server-side features. No unnecessary endpoints or database connections.

## 7. Non-Goals
- No visitor accounts or authentication.
- No database, ORM, persistent storage, or admin panel.
- No unnecessary backend API endpoints for static portfolio content.
- No fabricated testimonials, statistics, client logos, or project outcomes.
- No publishing confidential employer/client information.

## 8. MVP Scope
### Must have
- Responsive React portfolio initialized in project root.
- Working wordmark: `ARSH.DEV`.
- About, Skills, Web Projects, Data Analytics, Contact, Footer.
- Local data files for projects and skills.
- Verified direct contact links (Email, GitHub, LinkedIn).
- Accessible focus states and semantic HTML.
- Warm ivory and forest green editorial design system.

### Nice to have / Future
- Optional Python + FastAPI endpoints in `backend/` only for approved server-side behavior.
- Optional email forwarding service for a contact form (without persistent storage) if requested.
- Individual project case-study modal or deep-dive views.
- Blog/notes section.

## 9. Success Metrics
- All main sections are reachable on desktop and mobile.
- Project links and direct contact paths work reliably.
- Build and applicable tests/lint checks pass.
- Owner can update project and skill content through local data files.

## 10. Constraints
- **Frontend:** React + Vite + TypeScript (in `frontend/` directory).
- **Styling:** Tailwind CSS.
- **Backend:** Python + FastAPI (in `backend/` directory, dormant scaffold in MVP).
- **Design:** Warm ivory, forest green, muted plum, charcoal, editorial typography, and authentic project visuals.
- **Content:** Owner-approved, genuine project details. No fabricated data.
- **Database:** None. Strictly no database or persistent storage.

## 11. Assumptions
- The portfolio is a public professional showcase.
- Web projects and data analytics have separate sections.
- Content is managed via structured local data files.
- Final links, résumé, screenshots, and contact details will be verified by the owner.

## 12. Resolved Decisions
- **Database:** None. No PostgreSQL, SQLite, or other database.
- **Admin Panel:** None. Content is managed in local data files.
- **Authentication:** None.
- **Contact:** Direct links (Email, GitHub, LinkedIn).
- **Repository layout:** Frontend in `frontend/`; backend in `backend/` folder; convenience workspace scripts at root.

## 13. Definition of Done
- [ ] Required sections are implemented.
- [ ] Project claims and links are verified.
- [ ] Responsive and accessibility checks are completed.
- [ ] Build and applicable checks pass.
- [ ] Documentation reflects the shipped implementation.
