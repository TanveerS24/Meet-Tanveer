# S Tanveer Muhammed — Personal Portfolio Website

Production-ready personal portfolio built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion + Three.js**. Visual design system extracted directly from Stitch MCP (`projects/15442935136784604842`).

---

## 🚀 Quick Start & Local Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Preview build locally
npm run preview
```

---

## 📂 Content Architecture (`src/content/`)

All site content, copy, metrics, and facts are organized in typed files:
- `profile.ts`: Bio, tagline, email (`stanveer1809@gmail.com`), GitHub & LinkedIn URLs. *(Note: Phone numbers are excluded everywhere)*.
- `projects.ts`: Shipped apps (Sikkim Tourism Platform [SIH 2025 Winner], CodeSense, Policy-Lens, Sky-Port, TrustLedger, Skill-Nest).
- `experience.ts`: Roche AR Intern (Jun–Aug 2026), Jupyter Transcriptions Intern (+178% operations boost), SIMATS CSE Degree (9.32 CGPA).
- `certifications.ts`: SIH 2025 National Championship, Oracle SQL Specialist, Data Science Professional.
- `stats.ts`: LeetCode metrics (272 solved, 13 streak, 50 Days badge) and GitHub repository counts.
- `skills.ts`: Categorized list of languages, frameworks, 3D engines, and cloud tools.
- `terminalCommands.ts`: Interactive CLI command parser & responses.

---

## 🎨 Swapping Media & Adding Blender 3D Model

### 1. Photos & Screenshots
Place real images in `/public/placeholders/`:
- `photo.webp`: Hero avatar portrait.
- `sikkim_mockup.webp`, `codesense_mockup.webp`, `policylens_mockup.webp`: Project showcase graphics.
- `render1_cyberpunk.webp`, `render2_roche_hud.webp`: 3D gallery render screenshots.

### 2. Exporting 3D Model from Blender
To load your own custom 3D model in the 3D Corner:
1. In Blender, select your final model setup.
2. Go to **File > Export > glTF 2.0 (.glb)**.
3. In export settings:
   - Check **Draco Mesh Compression** (Compression level: 6).
   - Target total file size **under 3 MB** for instant web loading.
4. Save the file as `/public/models/showcase.glb`.
5. If `/public/models/showcase.glb` is not present, the app automatically falls back to a rotating procedural **TorusKnot** mesh in brand colors.

---

## 🔑 Environment Variables & Contact Form Setup

Copy `.env.example` to `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
VITE_ANALYTICS_ENDPOINT=https://your-analytics-provider.com/count
VITE_OWNER_PASSCODE=tanveer2026
```

- **Contact Form**: Register a free key at [Web3Forms](https://web3forms.com/). If unset, the form gracefully falls back to `mailto:stanveer1809@gmail.com`.
- **Analytics**: Privacy-friendly wrapper automatically logs pageviews, outbound clicks, form submits, theme toggles, terminal usage, and `?ref=company` tracking parameters.

---

## 🔒 Hidden Owner Dashboard (`/#/owner`)

- Access the hidden owner control panel at `/#/owner`.
- Default local passcode: `tanveer2026` (configurable via `VITE_OWNER_PASSCODE`).
- **Features**:
  - **Trackable Link Generator**: Generates `?ref=company_name` URLs to track recruiter opens.
  - **Recruiter CRM**: Manage leads, statuses, and notes stored in browser `localStorage`. Includes JSON export/import.
  - **Monthly Checklist**: Keep content and metrics up to date.
- *Security Note*: The passcode gate is a convenience UI lock. Sensitive third-party form entries and analytics remain secured inside their respective web dashboards.

---

## 🌐 Deploying

This app utilizes React Router `HashRouter` (`/#/`) and is 100% static host ready:

### GitHub Pages
```bash
# Add gh-pages package if desired, or deploy the dist/ folder to gh-pages branch
npm run build
```

### Vercel / Netlify
1. Connect repository.
2. Build command: `npm run build`
3. Output directory: `dist`
