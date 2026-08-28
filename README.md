# Shubhank Chandak — Engineering Portfolio

[![CI](https://github.com/Shubhank2604/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Shubhank2604/Portfolio/actions/workflows/ci.yml)

A recruiter-focused engineering portfolio covering production backend systems, compiler infrastructure, distributed-systems trade-offs, and evaluated AI work.

## What this site emphasizes

- measurable production outcomes from MathWorks, Wells Fargo, and Bounce;
- curated case studies instead of an exhaustive repository dump;
- reproducible evidence for AI and retrieval claims;
- explicit limitations and reliability roadmaps; and
- technical writing derived from real experiments.

## Stack

Next.js 16 · React 19 · TypeScript · MDX · CSS

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

This runs ESLint, the TypeScript compiler, and a full production build. GitHub Actions executes the same command for pull requests to `master`.

## Content map

```text
app/             Next.js routes, metadata, sitemap, and social preview
components/      Home, project, writing, layout, and UI components
content/writing/ Long-form MDX engineering notes
data/            Profile, experience, project, education, and article content
```

Public identifiers and canonical URLs can be configured through `.env.example`. No credentials belong in this repository.
