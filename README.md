# Java Knowledge Hub

Learning hub for Java theory, quizzes, practice, and progress tracking.

## What is included

- theory topics in `docs/`
- topic quizzes with automatic completion at 90%+
- manual completion buttons on topic pages
- progress page with overall completion summary
- final mixed quiz
- GitHub Actions deployment for GitHub Pages

## Local run

```bash
npm install
npm run start
```

Local URL is usually:

```text
http://localhost:3000/java_knowledge_hub/
```

Ukrainian locale run:

```bash
npm run start:uk
```

## Build

```bash
npm run build
```

## Before publishing

Open `docusaurus.config.ts` and replace:

- `StasGreat`

with your real GitHub username in:

- `url`
- `organizationName`
- GitHub links in navbar and docs edit URL

The project is configured for this repository name:

```text
java_knowledge_hub
```

So keep:

```ts
baseUrl: '/java_knowledge_hub/'
projectName: 'java_knowledge_hub'
```

## Publish to GitHub Pages

1. Create a GitHub repository named `java_knowledge_hub`
2. Upload the project files
3. In GitHub open `Settings -> Pages`
4. Set `Source` to `GitHub Actions`
5. Push to `main`

## Git commands

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/StasGreat/java_knowledge_hub.git
git push -u origin main
```

## Published URL

```text
https://StasGreat.github.io/java_knowledge_hub/
```

## How progress works

Progress is stored in the browser using `localStorage`.

A topic becomes completed when:

- you click `Mark completed`, or
- your best topic quiz score reaches `90%` or more

This means progress is local to the current browser/profile unless you add a backend later.
