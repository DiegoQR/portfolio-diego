# Project Memory

## Current state (2026-10-11)
- GitHub MCP is configured for PAT auth using `GITHUB_PERSONAL_ACCESS_TOKEN`; OAuth is disabled and the secret stays out of `opencode.json`.
- Implemented the approved English-language portfolio in React, TypeScript, Vite, and Tailwind CSS.
- Node 22.13+ within Node 22 is required; package-lock.json records installed versions.
- Sections: Home, About Me, Experience, Projects, Education & Courses, and footer.
- Responsive navigation includes a mobile disclosure menu, Escape handling, and native anchor focus.
- Hero includes email contact with the exact approved message and a working PDF download.
- Retro-futurist “orbital observatory” visual direction, approved option B: instrument-paper background, deep-space hero/footer, phosphor accents, geometric headings, and restrained monospace data labels.
- Hero orbital rings and scanline texture are decorative CSS only; content, data, and links remain unchanged.
- Responsive styling preserves keyboard focus visibility and reduced-motion preferences; no dependencies or external assets were added for the redesign.
- Components, sections, data access, types, and styles are separated under src/.

## Content decisions
- User-confirmed biography details, skills, languages, and social profiles live in assets/info/.
- Hobbies: learning about technology and anything new and exciting, video games, and drawing.
- Languages: Spanish (native), English (fluent).
- Work history and education were transcribed from the supplied CV; education dates match it.
- assets/info/projects.json contains a template marked isPlaceholder; placeholders are not published.
- Projects displays an empty state until real project details are supplied.
- Missing project URLs hide their buttons; no course documents have been supplied yet.
- Education supports multiple existing PDF/image documents through an expandable Docs control.
- Add document paths under /assets/studies/[CourseName]/ in education.json.
- Download uses assets/CV/Diego Quinones - CV.pdf; original supplied PDF is preserved in assets/.

## Verification and environment
- npm run lint passed; production TypeScript/Vite build passed.
- All 16 Playwright checks passed across desktop Chromium and mobile Chromium emulation.
- Tests cover real PDF bytes, email/social URLs, keyboard navigation, and 320–1440px layouts.
- All 16 Playwright checks still pass after the visual redesign; lint and production build pass.
- Redesigned desktop/mobile screenshots were reviewed; temporary images live under /tmp/opencode/.
- Linux Node was absent from PATH; verification used /tmp/opencode/node-v22.23.3-linux-x64/bin.
- Browser libraries were extracted into /tmp/opencode/browser-libs without system installation.
- This environment needs that bin directory on PATH and browser-libs/usr/lib/x86_64-linux-gnu on LD_LIBRARY_PATH to repeat tests.
- Standard local setup and browser dependency installation are documented in README.md.
- Native focusable anchor destinations avoid the browser overriding manually focused headings.

## Workflow
- Propose changes and obtain approval before implementation; notify before installing dependencies.
- Keep factual content sourced from Diego or his documents and update this file after tasks.
