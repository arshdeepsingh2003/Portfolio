# Architecture Overview

## System Layout
- **Frontend (`frontend/`):** React + Vite + TypeScript application contained in `frontend/`.
- **Backend (`backend/`):** Python + FastAPI service in `backend/` for approved future server-side functionality (dormant scaffold).
- **Workspace Root:** Root `package.json` with convenience scripts (`npm run dev`, `npm run build`, `npm run lint`) delegating to `frontend/`.
- **Styling:** Tailwind CSS with custom editorial design tokens.
- **Database:** **None**. Do not add a database, ORM, persistent storage, or admin panel.
- **Content:** Local TypeScript/JSON data files (`frontend/src/data/`) and static assets (`frontend/public/`).
- **Contact:** Direct links (`mailto:`, GitHub, LinkedIn) by default; no backend contact form in MVP.

## Architecture Diagram
```text
Browser ────> React Frontend (frontend/) ────> Local Content & Assets (frontend/src/data/, frontend/public/)
                                          ────> Direct Contact Links (mailto:, GitHub, LinkedIn)
                                         (────> Optional FastAPI Backend in backend/ [Deferred])
```

## Boundaries & Constraints
- React must never connect to a database or external backend for project data.
- All project and skill information is loaded statically from structured local data files.
- The optional FastAPI backend will remain dormant in `backend/` until a real, approved requirement is identified.
- No user accounts, authentication tokens, or administration portals exist in the system.
