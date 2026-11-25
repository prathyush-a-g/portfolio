# Gurugubelli Prathyusha — Portfolio

A clean, responsive single-page portfolio built with React, Vite, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; preview it with `npm run preview`.

## Edit content

- Update project, skill, certificate, and education content in [`src/data.ts`](./src/data.ts).
- Update section copy and layout in [`src/App.tsx`](./src/App.tsx).
- Update colors, spacing, typography, and responsive styles in [`src/styles.css`](./src/styles.css).
- Replace [`public/resume-placeholder.txt`](./public/resume-placeholder.txt) with a PDF resume and keep the download link in `src/App.tsx` pointed at the new filename.

## Deploy on Vercel

Import this repository into Vercel. Vercel detects Vite automatically. Use `npm run build` as the build command and leave the output directory as `dist` if Vercel asks for it.
