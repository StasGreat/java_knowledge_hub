# Java Knowledge Hub

Interactive knowledge base for Java Backend interview preparation built with Docusaurus and designed for GitHub Pages.

## What is included

- structured docs for Java Core, Backend, Spring, SQL, Architecture, Interview, and Practice
- reusable `QuizCard` component for quick tests
- GitHub Actions workflow for automatic deployment to GitHub Pages
- ready-to-edit content templates that you can extend with your own notes, definitions, code examples, and tasks

## 1. Create the GitHub repository

Create a repository named:

`java_knowledge_hub`

## 2. Update GitHub username in config

Open `docusaurus.config.ts` and replace all occurrences of:

`StasGreat`

with your real GitHub username.

Expected settings for a normal project repository:

- `url: 'https://StasGreat.github.io'`
- `baseUrl: '/java_knowledge_hub/'`
- `organizationName: 'StasGreat'`
- `projectName: 'java_knowledge_hub'`

## 3. Install dependencies

```bash
npm install
```

## 4. Run locally

```bash
npm run start
```

Docusaurus will print a local address, usually:

```bash
http://localhost:3000/java_knowledge_hub/
```

If the browser does not open automatically, copy the printed URL and open it manually.

## 5. Build locally

```bash
npm run build
```

Optional preview of production build:

```bash
npm run serve
```

## 6. Publish with GitHub Pages

This project already includes `.github/workflows/deploy.yml`.

In GitHub:

1. open the repository
2. go to `Settings -> Pages`
3. under `Build and deployment`, choose `GitHub Actions`
4. push to the `main` branch

GitHub Actions will build and publish the site automatically.

## 7. Final site URL

After deployment the site will be available at:

```text
https://StasGreat.github.io/java_knowledge_hub/
```

## 8. How to add a new topic

1. create a new `.md` or `.mdx` file in `docs/...`
2. add front matter with `id` and `title`
3. register the page in `sidebars.ts`

Example:

```md
---
id: java-core/hashmap
title: HashMap
---

# HashMap
```

## 9. Common deployment problems

### Styles are broken or pages return 404

Usually this means `baseUrl` is wrong.

For this repository it must be:

```ts
baseUrl: '/java_knowledge_hub/'
```

### GitHub Pages shows nothing

Check:

- repository name is exactly `java_knowledge_hub`
- `Settings -> Pages -> Source` is set to `GitHub Actions`
- `StasGreat` was replaced everywhere in `docusaurus.config.ts`

## 10. Recommended workflow

- write theory in `docs/`
- use `QuizCard` in `.mdx` pages for mini-tests
- keep one topic per file
- add sections: definition, explanation, code example, interview question, common mistakes, practice task
