# Web Portfolio for Diego Quiñones

## Overview
This project is a web portfolio designed to showcase the work experience and achievements of Diego Quiñones as a Software Engineer. It is built using modern web technologies and follows specific coding conventions and project management guidelines.

## Technology Stack
- **Language**: TypeScript
- **Framework/Runtime**: Node.js 22 + React.js
- **Styling**: Tailwind CSS
- **Testing**: Playwright

## Commands
- `npm run dev` : Starts the local server.
- `npm run test` : Executes the tests (all tests must pass before any commit).
- `npm run lint` : Checks the code style (must be done before any Pull Request).
- `npm run build` : Compiles the application for production.

## Project Structure
- **`assets/CV`**: Contains Diego's CV for display on the page.
- **`assets/media`**: Stores media assets for the portfolio (e.g., personal photos).
- **`assets/work/[CompanyName]`**: Holds documents related to work experience at each company (e.g., certificates, letters).
- **`assets/studies/[CourseName]`**: Contains educational documents (e.g., certificates, notes, titles).
- **`assets/info`**: Includes JSON files that detail work experience, course experience, tech stack, soft skills, and languages spoken.

## Coding Conventions
- Use Camel Case for all variable names (e.g., `workExperience`).
- Test files should be named according to the component they are testing (e.g., `componentName.test.ts`).

## Documentation and Memory Management
- Review `MEMORY.md` at the start of each task to understand the project status and prior decisions.
- Update `MEMORY.md` at the end of each task with the current state, key decisions, and lessons learned.
- Keep updates concise (maximum 50 lines) and remove any outdated context.
- If a decision becomes a permanent rule, propose moving it to `AGENTS.md` for permanence.

## Guidelines
### Do Not
- Install dependencies without notifying.
- Upload `.env*` files to the repository.
- Read or use any information contained in the `.env*` file.
- Use `any` type in TypeScript without explicit justification.


## Workflow
- Propose a plan before commencing trivial tasks; wait for approval before proceeding.
- Tackle one task at a time and provide a summary of changes at task completion for review.
- If uncertain about a decision (above 80% uncertainty), ask for clarification instead of making assumptions.