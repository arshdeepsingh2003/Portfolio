# ARSH.DEV — Developer & Data Portfolio

A personal developer portfolio built with React, Vite, TypeScript, and Tailwind CSS, showcasing full-stack web engineering and data analytics projects.

## Architecture Highlights
- **Zero Database:** Strictly zero database, ORM, persistent storage, or administrative backends.
- **Data-Driven Content:** All skills, projects, and personal narrative managed through structured local JSON and TypeScript files (`frontend/src/data/`).
- **Separation of Disciplines:** Dedicated and distinct showcases for Web Engineering and Data Analytics case studies.
- **Editorial Design System:** Restrained editorial aesthetic built with warm ivory (`#F5F0E6`), forest green (`#173C32`), muted plum (`#8B7188`), and charcoal (`#252824`).
- **Dormant Backend Scaffold:** Optional Python + FastAPI service in `backend/` preserved for explicitly approved future requirements.

## Quick Start

### Prerequisites
- Node.js `v18+` (tested with Node `v20.20.2`)
- npm `v9+` (tested with npm `10.8.2`)

### Development
```bash
# Install dependencies
npm install
npm --prefix frontend install

# Run local development server (http://localhost:5173)
npm run dev
```

### Verification & Testing
```bash
# Run ESLint checks
npm run lint

# Run TypeScript typechecks
npm run typecheck

# Run production build
npm run build

# Preview production build locally (http://localhost:4173)
npm run preview
```

## Deployment
For detailed deployment instructions, hosting recommendations (GitHub Pages, Cloudflare Pages, Vercel), and configuration details, see [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Documentation Directory
- [PRD.md](docs/PRD.md): Product Requirements Document
- [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md): Visual design specifications and tokens
- [Architecture.md](docs/Architecture.md): System layout and boundaries
- [DEPLOYMENT.md](docs/DEPLOYMENT.md): Production hosting and deployment guide
- [SECURITY.md](docs/SECURITY.md): Security guidelines and checklist
- [TASKS.md](docs/TASKS.md): Project roadmap and implementation task log
- [MEMORY.md](docs/MEMORY.md): Cumulative project memory and verified findings
