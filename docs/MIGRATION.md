# Astro migration delivery

## Source and safety

Original source: `34feb553b28c02df07df22168032be100e1f6284` on `master`.

The migration uses `migration/astro-portfolio`. The original implementation is retained on `backup/nextjs-before-astro-2026-11-03` and in the ignored local `.migration/legacy-nextjs/` archive. Do not merge to production before reviewing a confirmed Vercel preview.

## Implementation

- Astro 7 static output, TypeScript, Tailwind CSS v4, typed content collections, and MDX.
- Adapted BracoZS's starter architecture and token system; required MIT notice preserved.
- Warm light theme, 1024px content width, compact rows, responsive navigation, persisted dark theme, visible focus, reduced-motion support.
- Seven professional roles, five selected project rows, ten case studies, two education records, one preserved published article.
- Skills and recognition moved to About. Removed terminal, proof counters, Formspree/backend contact flow, obsolete Next.js components, and React dependencies.
- Shared metadata, canonical URLs, personalized PNG social preview, favicon, sitemap, robots, and conditional real-resume links.

## Routes

- `/`
- `/about/`
- `/projects/`
- `/projects/context-invariant/`
- `/projects/finsight-ai/`
- `/projects/park-plus/`
- `/projects/cafeteria-buddy/`
- `/projects/expense-platform/`
- `/projects/text-to-code/`
- `/projects/oar-data-assistant/`
- `/projects/text-summarization/`
- `/projects/music-genre-classification/`
- `/projects/price-prediction-model/`
- `/writing/`
- `/writing/building-retrieval-systems-that-know-their-limits/`
- `/404.html`, `/robots.txt`, `/sitemap-index.xml`, `/og-image.png`

`/work/` and `/work/:slug` redirect to project routes on Vercel. All six immediately preceding project slugs are preserved, and the older housing-model route is restored.

## Content inventory

Projects: ContextInvariant; FinSight AI; Parking Management System; CafeteriaBuddy; Splitwise / Expense Sharing API; Text-to-SQL Explorer; OAR Data Assistant; Text Summarization with Transformers; Music Genre Classification & Recommendation; Bengaluru House Price Prediction.

Experience: University of Florida · Assessment & Research; MathWorks; Wells Fargo; Bounce; Placewit; Selegic Inc.; Scaler. UF's official OPS Student Analyst Intern title is confirmed by the signed offer, and its Sep 2025–Present period is supported by Shubhank's UF-job resume. Detailed responsibilities remain available on About.

Education: University of Florida (Aug 2025–May 2027) and NIT Durgapur (Jul 2018–May 2022).

Writing: the original BM25 note retains its body, table, code, month, and slug. A separate note identifies its historical FinSight configuration. Drafts are filtered out of generated pages.

## Content needing confirmation

- UF GPA is reconciled to 3.8/4.0 using the latest general resume.
- UF/OAR work is included with its verified title, period, and public-safe workflow description; no private operational data or employment documents are published.
- No actual resume PDF exists in this checkout. Resume links are omitted until `public/resume.pdf` is supplied.
- Selegic's Java/Spring proof of concept is confirmed in Shubhank's older resume. Scaler remains freelance writing; no separate mentoring role is inferred. Placewit's 100+ mentoring figure was explicitly confirmed by Shubhank.
- Gateway replacement is deferred at the user's direction. The three clearly labeled notebook experiments remain secondary entries, after the stronger seven projects. Scaler article URLs and further awards/certifications remain optional future additions.

## Verification

`npm run check` validates Astro/TypeScript, builds `dist/`, and checks generated internal links, anchors, assets, metadata, project inventory, and legacy URLs.

`npm run test:browser` checks responsive overflow at 320, 375, 430, 768, 1024, 1280, and 1440px; filtering; theme persistence; keyboard/mobile navigation; reduced motion; no-JavaScript rendering; and automated accessibility on the principal routes. Screenshots are saved under ignored `.qa/`.

These are portfolio checks. Project repositories' application suites were inspected as evidence but not executed as part of the website migration. No Lighthouse score or production load claim is made.

Local validation results on 2026-11-03:

- Astro check: 29 files, zero errors/warnings/hints.
- Static build: 16 HTML pages and generated sitemap/robots/social image.
- Link checker: all local links, anchors, assets, and legacy routes passed.
- Browser suite: 11 tests passed, including seven viewport widths, light/dark accessibility, mobile keyboard controls, project filters, nested refresh, 404, and static rendering without JavaScript.
- Original article body comparison passed after normalizing line endings.
- Desktop/mobile homepage and desktop project screenshots captured and visually reviewed in `.qa/`.

Pre-merge content review on 2026-11-04:

- Added OAR as the seventh role using the signed offer and Shubhank's own UF-job resume.
- Corrected Bounce and Selegic from explicit resume descriptions; retained Placewit's directly confirmed mentoring scope and Scaler's writing role.
- Reconciled UF GPA and MathWorks/Wells Fargo metrics against the latest general resume.
- Removed the selected-project counter and its unused presentation code.
- Re-ran `npm run check` and all 11 browser tests successfully; regenerated and inspected desktop/mobile screenshots.
- Hosted preview requests still redirect to Vercel authentication. Authenticated visual sign-off remains required before production; local review does not substitute for that sign-off.

## Deployment handoff

Keep the existing Vercel project and `https://shubhankchandak.vercel.app` domain. The existing default branch is `master`.

1. Push the migration branch; let the Git integration build a Preview deployment.
2. Confirm Astro / `npm run build` / `dist` settings. `vercel.json` supplies them; clear conflicting dashboard overrides.
3. Review the preview and verify nested project/article routes and contact links.
4. After production authorization, merge the branch to `master`.
5. Confirm the production deployment on the same domain. Previous Vercel deployments and the backup branch provide rollback options.

No secrets or email-service credentials are needed. `PUBLIC_SITE_URL` is optional because the correct production domain is the default.

At the local audit, Vercel was not connected through the available integration. A successful GitHub Vercel status confirmed the old commit's deployment, but does not prove a new migration preview exists. Only report a preview after the platform confirms it.
