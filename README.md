# Waymate site

One-page landing site for waymate.app. Vite + React. Fonts (Fraunces, Figtree) are bundled, so nothing loads from Google.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Change your links

Edit `src/links.js` (LinkedIn and X still say `YOUR-HANDLE`).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. On vercel.com choose Add New, then Project, and import the repo.
3. Vercel detects Vite on its own: build command `npm run build`, output directory `dist`. Click Deploy.
4. In the project, go to Settings, then Domains, and add `waymate.app`. Vercel shows the DNS records to set at your registrar.

Brand colors, fonts, and rules live in the project file `claude/waymate-brand-design-system.md`.
