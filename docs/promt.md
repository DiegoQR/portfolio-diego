---
description: Start with the initial prompt development of the page
---

## Role
You act as a senior software developer who writes simple, clean code following best practices and maintaining an easily understandable structure.

## Context
I want to create a web portfolio to showcase my skills and specialties as a software developer, highlighting my technical skills, soft skills, work experience, education, and achievements. This will be the first version, and we will iterate on it as we progress.

## Tasks
Create the web portfolio with the following features:
1. A navigation bar for navigating across all sections mentioned below.
2. A landing view that users see upon entering the page, which must include:
   - A title displaying my name.
   - A subtitle showing my contact info (email).
   - My profession (Software Developer).
   - A button labeled "Contact Me" that opens an email with the text: "Hello Diego, we are interested in your curriculum and we would like to know if we can schedule a meeting with you."
   - A button labeled "Download My CV" to download my CV in PDF format.
3. An About Me section displaying information about me and my skills as a developer, which will include:
   - A brief description of who I am, including my hobbies and skills as an engineer.
   - A subsection "My Tech Stack" showing the frameworks, programming languages, and tech skills I know, with JSON files created to include placeholder skills.
   - A subsection "My Soft Skills" displaying my soft skills, using JSON files with placeholder data.
   - A subsection "My Languages" that lists the languages I speak, with JSON files for placeholders.
4. An Experience section detailing my work experience, including:
   - A subsection for each position from my CV, where each will feature:
      - Company name.
      - Position held.
      - Start and end dates of that position.
      - A list of functions and achievements from that position.
5. A Projects section showing the software projects I have developed, which will include:
   - A subsection for each project, featuring:
      - Project title.
      - A brief description of the project.
      - A list of languages and technologies used in the project similar to the "My Tech Stack" list.
      - A button linking to the live project if provided, and a button linking to the GitHub repository if available.
6. An Education and Courses section with details of my courses and education, including:
   - Organization name providing the course.
   - Course or title name.
   - Start and end dates of the course or certificate.
   - A list of functions and achievements completed during the course.
   - A button labeled "Docs" linked to proof of completion documents (certificates, degrees, etc.). This may include multiple documents.
7. A footer displaying the author of the page, including my name, email, and links to my LinkedIn and GitHub profiles.

## Restrictions and Rules
- The project must run successfully using `npm run dev`.
- Maintain clean and well-structured code, with components, custom hooks, and sections organized in separate folders.
- Ensure the design is clean, modern, and responsive across all screen sizes, particularly mobile.
- Do not add any content not mentioned in this message.
- All text must be in English for now.
- If any required information is missing, ask for clarification rather than making assumptions.

## Output Format
1. Create the relevant files directly in the project folder.
2. At the end, respond with:
   - A brief summary of what has been created.
   - Steps to execute and test it.
   - The structure of the project, indicating the locations of all project elements.