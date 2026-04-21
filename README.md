# Maverick — client-facing static site

Self-contained Maverick studio pages (no Vaal / parent project). Deploy this folder as the **document root** so the client URL only ever serves these files.

**Remote:** [github.com/Franksmittt/maverick_visuals](https://github.com/Franksmittt/maverick_visuals)

## Contents

| File | Purpose |
|------|---------|
| `index.html` | Hub — links to all tools |
| `maverick-studio.html` | Business cards (upload + PNG export) |
| `maverick-social.html` | Social squares + `msoc-square-templates.js` |
| `maverick-brand.html` | Brand guide |
| `maverick-flyer.html` | Flyers & brochures |
| `maverick-corporate.html` | Corporate |
| `assets/maverick-mobile.css` | Touch targets, safe areas, small-screen layout |
| `assets/maverick-blob-download.js` | Share-sheet save on capable phones; `<a download>` fallback |

## New git repository

From the **parent** repo you can keep this as a subfolder, or split it out:

```bash
cd maverick-client
git init
git add .
git commit -m "Initial Maverick client site"
git branch -M main
git remote add origin https://github.com/Franksmittt/maverick_visuals.git
git push -u origin main
```

To **replace** remote history later, use force push only if you intend to overwrite the remote.

## Hosting (HTTPS)

Any static host works if the **site root** is this folder:

- **Netlify**: drag-and-drop this folder, or connect the Git repo; publish directory = repo root (or `/` if repo is only this site).
- **Cloudflare Pages**, **Vercel**, **GitHub Pages**: set root to this directory; no build command.

**Important:** Serve over **HTTPS** so camera roll / file uploads behave consistently on mobile browsers.

## Syncing from the main project

The canonical copies in development may live under `public/` in the larger repo. When you change Maverick pages there, copy the updated files into `maverick-client/` (and `assets/`) before tagging a client release.

## Mobile behaviour

- Viewport uses `viewport-fit=cover` for notched devices.
- Primary actions use at least **44px** touch height where applicable.
- **Download:** on many phones, **Web Share** opens with the PNG so the user can save to Files / Photos / Drive. If share is unavailable, a classic file download is used.

No server-side code is required; everything runs in the browser.
