# Portfolio - Diego Macia

This repository contains a front-end portfolio built with Vite + TypeScript and Three.js.

Quick start

- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview build locally: `npm run preview`

Features implemented to respect course requirements:
- Single-page responsive portfolio with navigation menu
- SEO meta tags and Open Graph
- Contact information and contact form (mailto fallback)
- Reflection, learning, and outside-school experience sections
- Downloadable CV PDF at `/cv-diego-macia.pdf`
- 3D hero built with Three.js

Deploy to GitHub Pages

This repo contains a GitHub Actions workflow to build and publish `dist/` to GitHub Pages. To enable automatic deployment:

1. Commit and push this repository to GitHub.
2. Ensure the repository `Settings → Pages` is set to `gh-pages` branch (the action will create it).
3. On push to `main` the `deploy.yml` workflow will build and publish the site.

If you prefer manual publishing, build locally and push the `dist/` contents to the `gh-pages` branch.

Notes

- This project is front-end only and requires no backend.
- If you want SASS/PostCSS or BEM naming, I can add them on request.
