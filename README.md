# Diego Quiñones — Portfolio

A responsive, English-language portfolio built with React, TypeScript, Vite, and Tailwind CSS. Content comes from JSON files and Diego’s supplied CV.

## Run locally

Use **Node.js 22.13 or newer within Node 22** (`.nvmrc` selects Node 22).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a production preview, run `npm run build` followed by `npm run preview`.

## Verify

Install the test browser once:

```sh
npx playwright install chromium
```

Linux machines missing browser system libraries can use `npx playwright install --with-deps chromium`.

```sh
npm run lint
npm run build
npm run test
```

Playwright builds and serves the production site automatically. Tests cover desktop and mobile navigation, keyboard access, responsive layouts, email and social links, and downloading the actual PDF.

## Structure

```text
assets/
  CV/                    PDF used by the download link
  info/                  Editable profile, skills, experience, projects, education
src/
  components/            Reusable navigation, footer, section, dates, skill lists
  data/                  Typed JSON exports and document asset resolution
  sections/              Hero, About, Experience, Projects, Education
  styles/                Tailwind entry point, tokens, responsive styles
  types/                 Shared content types
  app.tsx                Page composition
  main.tsx               React entry point
tests/                   Playwright tests named after their component
```

## Update content

- Edit `assets/info/profile.json` for contact information, biography, hobbies, and social links.
- Edit `assets/info/skills.json` for technologies, soft skills, and languages.
- Edit `assets/info/experience.json` and `education.json` for CV-based entries. Dates use `YYYY-MM`; a null end date displays “Present.” Education dates currently match the supplied CV.
- `assets/info/projects.json` contains only a clearly marked template. Replace its content and set `isPlaceholder` to `false` to publish a real project. Null `liveUrl` and `repositoryUrl` values hide their respective links. Until then, the Projects section shows a short empty state.
- Replace `assets/CV/Diego Quinones - CV.pdf` to update the download. The original supplied PDF is also preserved in `assets/`.
- Add course documents under `assets/studies/[CourseName]/`, then add entries such as `{ "label": "Degree certificate", "path": "/assets/studies/CourseName/certificate.pdf" }` to the course’s `documents` array. PDF, PNG, JPG, JPEG, and WebP are supported. Only existing documents appear in the expandable “Docs” control. No certificates have been supplied yet.
- Future personal photos belong in `assets/media/`; work documents belong in `assets/work/[CompanyName]/`.

Assets are imported through Vite so their links work in production. The design uses local system fonts, semantic landmarks, visible focus indicators, and reduced-motion support. No backend is needed; Contact Me opens the visitor’s email application.
