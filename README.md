# Rishil Pasunuri — Portfolio

Minimal, editorial-style React portfolio inspired by [Stelvio / Northside](https://stelvio.framer.website/work/portfolio-website). Built with Vite + React (JS).

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Customising

- **Hero, projects, skills, education, FAQs, contact** — content lives in the components in `src/components/`. Plain JS data arrays at the top of each file.
- **Theme colours** — `src/styles/global.css`. Light + dark are both defined as CSS variables.
- **Typography** — Inter (UI) and Instrument Serif (headlines), loaded from Google Fonts in `index.html`.

## Deploy

Any static host works. Easiest options:

- **Vercel** — `vercel` from the project root.
- **Netlify** — drag-and-drop the `dist/` folder after `npm run build`.
- **GitHub Pages** — push `dist/` to a `gh-pages` branch.
