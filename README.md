# Shubhank Chandak — Engineering Portfolio

Astro 7, TypeScript, Tailwind CSS v4, and Markdown/MDX content collections. Adapted from [BracoZS's Astro Starter Portfolio](https://github.com/BracoZS/astro-starter-portfolio), with its MIT notice preserved in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Development

Use Node.js 22.12+ (Node 24 is supported).

```sh
npm ci
npm run dev
```

Open http://localhost:4321. In Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

## Checks and production build

```sh
npm run check
npx playwright install chromium
npm run test:browser
npm run preview
```

`check` validates Astro/TypeScript, builds the static site to `dist/`, and checks generated internal links, assets, heading metadata, and legacy routes. Browser checks cover 320–1440px layouts, filters, theme persistence, keyboard navigation, accessibility, and no-JavaScript project rendering. Screenshots are written to ignored `.qa/`.

## Content structure

```text
src/
  pages/                 Homepage, About, Projects, Writing, 404, robots, social image
  layouts/               Shared base, project, and article layouts
  components/            Navigation, theme control, compact content rows
  content/projects/      One Markdown case study per project
  content/writing/       Published engineering notes in MDX
  content.config.ts      Validated content schemas
  data/                  Experience, education, skills, achievements
  styles/global.css      Design tokens, 1024px layout, responsive/prose styles
  site.config.ts         Identity, email, social links, optional resume
scripts/check-site.mjs    Static output verification
tests/                   Browser and accessibility checks
vercel.json              Static Astro deployment settings
```

Edit experience in `src/data/experience.ts` and education in `src/data/education.ts`. Both homepage and About use the same data.

### Add a project

Add a Markdown file to `src/content/projects/`. Its filename is the route slug. Copy a current entry's frontmatter: title, summary, category, technologies, status, repository URL, display order, publication flag, source reference, and verification date. Optional `featuredOrder` selects homepage work. No route registration is needed.

### Publish a note

Add an MDX file in `src/content/writing/` with title, description, category, date, readingTime, and `published: true`. Keep drafts `published: false`; they are excluded from indexes, static routes, and sitemap. Add a full ISO publication date only when known.

### Resume and images

Add the actual resume as `public/resume.pdf`; the shared configuration displays resume links only when that file exists. Do not publish a placeholder PDF.

Owned images may be added under `public/images/` when needed. No stock images, demo assets, or empty image folders are required.

## Vercel migration

Retain the existing Vercel project and https://shubhankchandak.vercel.app domain. The production branch is `master`, not `main`.

The source migration lives on `migration/astro-portfolio`; `backup/nextjs-before-astro-2026-11-03` preserves the old implementation at `34feb553b28c02df07df22168032be100e1f6284`.

`vercel.json` specifies Astro, `npm run build`, and `dist`. A server adapter and API keys are unnecessary. The contact link now uses the email explicitly supplied in the redesign brief, so the old Formspree and Resend configuration can be removed from Vercel.

Optional environment variable:

```text
PUBLIC_SITE_URL=https://shubhankchandak.vercel.app
```

Without it, the same production URL is the default. Remove old `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORMSPREE_FORM_ID` variables if no longer needed.

1. Push the migration branch to obtain a Vercel Preview deployment.
2. Confirm the preview uses Astro; if dashboard build/output overrides exist, clear them or set Astro / npm run build / dist.
3. Verify navigation, the ten project pages, the historical article, theme control, mobile layout, email, and real resume if supplied.
4. After review and explicit production authorization, merge into `master`.
5. Verify the production deployment on the existing domain. Do not create a replacement Vercel project.
6. Roll back using Vercel's previous successful deployment if needed; the backup branch retains source for the original implementation.

Existing six project slugs and the published article slug are retained. The older `price-prediction-model` route is restored, and `/work/` redirects to `/projects/`.

## Migration audit

Local notes in ignored `.migration/CONTENT_AUDIT.md` record evidence, disputed facts, and validation limits. The legacy Next.js sources are archived in ignored `.migration/legacy-nextjs/` and the backup branch; neither is part of the Astro output.

UF/OAR employment now uses the signed offer's OPS Student Analyst Intern title and the Sep 2025–Present period confirmed in Shubhank's UF-job resume. The latest general resume confirms a UF GPA of 3.8/4.0. Bounce and Selegic descriptions follow the explicit technical details in his older resume, and Placewit's 100+ mentoring figure follows his direct confirmation. Unverified additional roles and certifications remain unpublished. Project descriptions use current default-branch documentation; notebook experiments explicitly disclose reproducibility limitations. The original BM25 article body is preserved, with a separate historical-context note.
