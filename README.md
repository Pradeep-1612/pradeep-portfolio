# Pradeep Reddy Juturu — Portfolio

**Live site:** [pradeep-portfolio.vercel.app](https://pradeep-portfolio.vercel.app) *(after deployment)*

Portfolio of Pradeep Reddy Juturu — Lead Software Engineer with 5+ years at IBM and TCS.
Built with **React + Vite + TypeScript + IBM Carbon Design System**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Language | TypeScript |
| UI components | IBM Carbon Design System (`@carbon/react`) |
| Styling | Carbon CSS + custom CSS (no Tailwind, no extra dependencies) |
| Routing | None (single-page, scroll-based) |
| State | Local React state only |
| Deployment | Vercel (static SPA) |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Type check + build
npm run build

# Preview production build
npm run preview
```

---

## Deploying to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel login
cd pradeep-portfolio
vercel --prod
```

Your site will be live at `https://pradeep-portfolio.vercel.app` (or a generated URL).

### Option 2 — GitHub → Vercel (recommended for ongoing deployment)

1. Push this folder as a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio build"
   git remote add origin https://github.com/YOUR_USERNAME/pradeep-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New Project** → Import from GitHub.

3. Vercel auto-detects Vite. Click **Deploy**.

4. Every `git push` to `main` deploys automatically.

### Custom domain (optional)

After deployment, in the Vercel dashboard:
- Settings → Domains → Add your domain (e.g. `pradeepreddy.dev`)
- Follow Vercel's DNS instructions for your registrar.

---

## GitHub Pages Alternative

```bash
npm run build
# Upload the `dist/` folder to GitHub Pages (Settings → Pages → Deploy from branch)
```

For GitHub Pages with React Router, set the `base` in `vite.config.ts`:
```ts
base: "/pradeep-portfolio/",
```

---

## Updating Content

All portfolio content is in a single data file:

```
src/data/portfolio.ts
```

Update:
- `PROJECTS` — case studies
- `EXPERIENCE` — work history
- `METRICS` — impact numbers
- `GITHUB_REPOS` — featured repositories
- `AWARDS` — recognition

No component changes needed for content-only updates.

---

## Project Structure

```
src/
  components/          # Nav, Footer (shared layout)
  sections/
    hero/              # Hero section
    capabilities/      # "What I Do" section
    metrics/           # Impact by the Numbers
    work/              # Featured Work / Case Studies
    experience/        # IBM + TCS experience timeline
    architecture/      # Architecture & Engineering
    principles/        # Engineering Principles
    awards/            # Awards
  data/
    portfolio.ts       # All content data (single source of truth)
  hooks/
    useActiveSection.ts  # Scroll-spy for nav highlighting
  index.css            # Global styles + Carbon import
  App.tsx              # Root component + section assembly
  main.tsx             # Entry point
```

---
