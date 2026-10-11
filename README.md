# ARSH.DEV — Developer & Data Portfolio

A modern, high-performance personal portfolio for **Arshdeep Singh**, showcasing full-stack web engineering, data analytics, and machine learning capabilities. Built with React, Vite, TypeScript, and Tailwind CSS.

---

## 🌟 Key Features & Sections

- **Panoramic Hero & About**:
  - Full-width 3D developer workspace panoramic visual featuring a dual-screen development and analytics setup with warm studio ambient lighting.
  - Clear editorial messaging with direct call-to-action buttons (*View My Work* & *Download Resume*).
  - Quick capability indicators (*Web Development*, *Data Analytics*, and *Problem Solving*).
- **Categorized Technical Skills**:
  - Structured competencies categorized into Core Disciplines (*Frontend Engineering*, *Backend Architecture*, *Data Analytics & ML*) and Applied Engineering (*Systems & Automation*, *Engineering Practices*).
- **Career Journey (Professional Experience)**:
  - Chronological records of industry and research internships:
    - **Zigly Pet Care** — Full Stack Developer Intern (September 2026 – Present, New Delhi)
    - **GlobalLogic** — Engineering Intern (January 2026 – August 2026, New Delhi)
    - **Defence Research and Development Organisation (DRDO)** — Research Intern (July 2025 – August 2025, New Delhi)
- **Unified Projects Showcase**:
  - Portfolio catalog spanning full-stack web applications, AI tools, and data analytics dashboards (e.g., *BuildLoop*, *Personal Knowledge Base Copilot*, *AI Fake Job Posting Detector*, *E-Commerce Platform*, *Mobile Sales Analytics Dashboard*, *Real Estate Marketplace*).
- **Direct & Secure Contact**:
  - Direct communication links for Email (`mailto:`), LinkedIn, GitHub, and downloadable PDF résumé.
  - Zero database or contact form overhead for privacy, reliability, and security.
- **Dark Mode & Responsive Polish**:
  - Dual light and dark themes with fluid transitions and glowing ambient accents.
  - Fully responsive across mobile, tablet, and desktop viewports with accessible keyboard navigation and semantic HTML landmarks.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Typography** | DM Serif Display, Inter, JetBrains Mono |
| **Backend (Optional scaffold)** | Python 3.10+ & FastAPI (`backend/`, zero database) |
| **Deployment** | Vercel / GitHub Pages / Static Web Hosts |

---

## 🏛️ Architecture & Principles

- **Zero Database / Zero Persistent State**: Purely client-side static generation. No database, ORM, persistent cookies, or authentication required.
- **Data-Driven Architecture**: All data resides in clean, type-safe JSON and TypeScript configuration files (`frontend/src/data/` and `frontend/src/config/brand.ts`).
- **Strict Privacy**: Direct contact links; no unnecessary third-party tracking scripts or backend forms.
- **Separation of Concerns**: Modular components for layout, sections, and UI primitives with strict TypeScript interfaces.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) `v18+` (tested on Node `v20+`)
- [npm](https://www.npmjs.com/) `v9+`

### Installation
```bash
# Clone the repository
git clone https://github.com/arshdeepsingh2003/Portfolio.git

# Navigate to the project root
cd Portfolio

# Install dependencies (root and frontend workspace)
npm install
npm --prefix frontend install
```

### Local Development
```bash
# Start local development server with hot-reload (http://localhost:5173)
npm run dev
```

### Verification & Quality Checks
```bash
# Run TypeScript compilation check
npm run typecheck

# Run ESLint linter
npm run lint

# Build production bundle
npm run build

# Preview production build locally (http://localhost:4173)
npm run preview
```

---

## 📁 Repository Structure

```
Portfolio/
├── docs/                      # Project documentation and specifications
│   ├── Architecture.md        # Technical architecture and constraints
│   ├── DEPLOYMENT.md          # Multi-platform production deployment guide
│   ├── DESIGN_SYSTEM.md      # Color tokens, typography, and UI rules
│   ├── MEMORY.md              # Project history and verified decisions
│   ├── PRD.md                 # Product requirements document
│   ├── SECURITY.md            # Security posture and verification guidelines
│   └── TASKS.md               # Task roadmap and progress tracker
├── frontend/                  # React + Vite + TypeScript application
│   ├── public/                # Static assets (images, favicon, resume.pdf)
│   ├── src/
│   │   ├── components/        # UI primitives, layout, and sections
│   │   │   ├── layout/        # Header, Footer, MobileNav, Container
│   │   │   ├── projects/      # ProjectCard, AnalyticsProjectCard, ProjectList
│   │   │   ├── sections/      # About, Skills, Experience, Projects, Contact
│   │   │   └── ui/            # Button, Badge, CardShell, SectionHeading
│   │   ├── config/            # Brand metadata (brand.ts)
│   │   ├── context/           # Theme context (Light / Dark mode)
│   │   ├── data/              # JSON data (projects, skills, experience, disciplines)
│   │   ├── hooks/             # Custom React hooks (useActiveSection, useTheme)
│   │   ├── types/             # TypeScript definitions
│   │   └── utils/             # Normalization and helper functions
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
├── backend/                   # Optional FastAPI scaffold (no database)
├── package.json               # Root workspace scripts
└── README.md
```

---

## 🌐 Deployment

The frontend produces a standard static single-page application inside `frontend/dist/`. For step-by-step guides on deploying to **Vercel**, **Cloudflare Pages**, or **GitHub Pages**, refer to [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## 📄 License & Attribution

Designed and developed by **Arshdeep Singh** ([ARSH.DEV](https://github.com/arshdeepsingh2003)). All rights reserved.
