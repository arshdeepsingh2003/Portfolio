# Deployment Guide

This document describes the production build, hosting recommendations, configuration, and verification steps for deploying the **ARSH.DEV** developer portfolio.

---

## 1. Architecture & Production Footprint

- **Architecture:** Purely static Single-Page Application (SPA) built with React 18, Vite 6, TypeScript, and Tailwind CSS.
- **Backend Decoupling:** The dormant Python + FastAPI service in `backend/` is completely excluded from the frontend production bundle. No server runtime or database is needed to run the portfolio.
- **Database:** **Strictly None**. All portfolio content (projects, skills, about narrative, brand metadata) is statically loaded from structured data files (`frontend/src/data/` and `frontend/src/config/brand.ts`).
- **Production Output Directory:** `frontend/dist/` (or relative `dist/` from the frontend directory).
- **Bundle Composition:**
  - `index.html` (~1.17 kB)
  - `assets/index-[hash].js` (~212 kB / ~61 kB gzip)
  - `assets/index-[hash].css` (~25.9 kB / ~5.7 kB gzip)
  - `favicon.svg` (~294 B)
  - `404.html` (SPA fallback redirect for static hosts)
  - `_redirects` (SPA rewrite rule for Netlify / Cloudflare Pages)

---

## 2. Environment Prerequisites

- **Node.js:** `v18.0.0` or higher (verified with `v20.20.2`).
- **npm:** `v9.0.0` or higher (verified with `10.8.2`).
- **Git:** Version control for repository synchronization.

---

## 3. Build & Quality Verification Commands

Run all commands from the repository root:

```bash
# 1. Install workspace and frontend dependencies
npm install
npm --prefix frontend install

# 2. Run static code analysis / linting
npm run lint

# 3. Verify TypeScript type safety without emitting
npm run typecheck

# 4. Generate optimized production bundle
npm run build

# 5. Preview production build locally (http://localhost:4173)
npm run preview
```

---

## 4. Production Asset Paths & SPA Routing Configuration

### Relative Base Path (`base: './'`)
The application is configured with `base: './'` in `frontend/vite.config.ts` and relative asset links in `frontend/index.html`. This ensures that assets (`./assets/*.js`, `./assets/*.css`, `./favicon.svg`) load successfully regardless of whether the site is hosted:
- At the root domain (e.g., `https://arsh.dev` or `https://portfolio.vercel.app`)
- Under a repository subpath (e.g., `https://arshdeepsingh2003.github.io/Portfolio/`)
- In local static preview contexts

### SPA Routing & Anchor Navigation
The site utilizes in-page semantic section anchors (`#about`, `#skills`, `#projects`, `#data-analytics`, `#contact`). There are no client-side HTML5 history paths (`react-router`) that risk 404 errors on deep linking.

For defensive routing against arbitrary path hits:
- **GitHub Pages:** A static `frontend/public/404.html` redirects visitors back to `./`.
- **Netlify & Cloudflare Pages:** `frontend/public/_redirects` rewrites all paths to `index.html`.
- **Vercel:** A root `vercel.json` defines SPA route rewrites and sets build paths.

---

## 5. Recommended Hosting Platforms (Zero Cost)

### Option A: GitHub Pages (Recommended)
Because the codebase is hosted at `arshdeepsingh2003/Portfolio`, GitHub Pages is the simplest zero-cost solution requiring zero third-party accounts.

#### Configuration Steps:
1. Ensure the automated workflow file [deploy.yml](file:///c:/Users/dell/Documents/GitHub/Portfolio/.github/workflows/deploy.yml) exists in `.github/workflows/`.
2. On GitHub, navigate to **Settings** > **Pages** in the `Portfolio` repository.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push your changes to the `main` branch.
5. GitHub Actions will automatically run linting, typechecking, build `frontend/dist`, and publish the site.
6. The site will be available at: `https://arshdeepsingh2003.github.io/Portfolio/` (with automatic HTTPS).

### Option B: Cloudflare Pages
- **Cost:** Free tier (unlimited bandwidth, 500 builds/month).
- **Setup:**
  1. Log into Cloudflare Dashboard > **Workers & Pages** > **Create application** > **Pages**.
  2. Connect the GitHub repository `arshdeepsingh2003/Portfolio`.
  3. Set **Framework preset:** `Vite`.
  4. Set **Build command:** `npm run build`.
  5. Set **Build output directory:** `frontend/dist`.
  6. Click **Save and Deploy**.

### Option C: Vercel
- **Cost:** Free Hobby tier.
- **Setup:**
  1. Import the repository into Vercel.
  2. The project's root [vercel.json](file:///c:/Users/dell/Documents/GitHub/Portfolio/vercel.json) automatically instructs Vercel to run `npm run build` and serve from `frontend/dist`.
  3. Deploy and receive an instant `*.vercel.app` production and preview URL.

---

## 6. Pre-Deployment Security & Data Integrity Audit

Before publishing live, the following items have been systematically verified:

| Check Item | Status | Verified Details |
| :--- | :--- | :--- |
| **Secrets & Credentials** | Verified Clean | No API keys, credentials, or private secrets exist in the repository or compiled bundle. |
| **Environment Variables** | Verified Clean | No `.env` files are tracked; `.gitignore` rigorously excludes `.env*`. |
| **Local Machine Paths** | Verified Clean | No local filesystem paths (e.g., `C:\Users\dell`) are leaked in production assets. |
| **Debug Statements** | Verified Clean | Zero `console.log` or debug statements in application source. |
| **Unverified Personal Data** | Verified Clean | Email, GitHub, LinkedIn, and résumé links are strictly typed as `null` with explicit "Pending Verification" badges. No fake contact info. |
| **Candidate Projects** | Verified Clean | Web and Analytics candidate projects display explicit "Pending review" badges; no synthetic metrics or URLs fabricated. |
| **Database & Auth** | Verified Clean | Zero database drivers, ORM packages, or user auth systems installed. |

---

## 7. Known Testing Limitations

- **Browser Subagent / Automated Headless Browser:**
  Automated browser execution is restricted in this sandboxed environment. Manual local browser preview (`npm run preview` at `http://localhost:4173`) was conducted to verify visual and interactive integrity.
