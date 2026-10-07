# The Regular AI Guy

A preview-only Next.js website for Mark Abplanalp’s upcoming practical AI podcast.

## Run locally

Node 22 or newer (Vercel project currently uses Node 24).

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run qa
npm start -- --port 3001
npx playwright install chromium
node tests/browser-qa.mjs
```

Browser QA covers 1440, 768, 390 and 320 pixel widths, horizontal overflow, four topic tabs with keyboard navigation, prompt selection and clipboard copy, mobile menu open/close/Escape/navigation, back navigation, all content routes, canonical links, 404 handling and axe WCAG checks. Use `QA_BASE_URL` for an alternative server; use `CHROMIUM_PATH` for an installed browser.

## Preview deployment safeguards

- `main` was initialized with only `vercel.json`, automatic deployments disabled, and a deliberately failing build command
- Website implementation lives on `preview/regular-ai-guy`
- This branch enables automatic deployment only for its exact branch name
- The build guard requires `VERCEL_ENV=preview`, otherwise it fails closed
- `framework: nextjs` overrides the existing project’s “Other” preset for this branch
- Preview pages send `noindex, nofollow` and a disallow-all robots file
- Do not merge or promote this preview. A production release requires explicit approval and a deliberate change to deployment guards

## Content and media

- The original supplied logo is preserved. Its 1,000 px transparent WebP derivative is approximately 227 KB. No logo regeneration was used
- The original is not required to build; asset regeneration accepts its local PNG path: `node scripts/prepare-assets.mjs path/to/original.png`
- Fonts are locally bundled through Fontsource; no Google Fonts request is needed
- Four original starter guides include links to official resources
- Upcoming podcast topic concepts are visibly labeled. No published episodes, guests, dates, audience claims, player, signup form, or listening-platform links are invented
- Website/PodcastSeries/Person JSON-LD matches visible content. Guides use Article schema. There are no PodcastEpisode or review records
- Topic exploration and clipboard interactions are client-only. There is no backend or data collection integration

## Before launch

1. Review and approve copy, design, host biography and all four reading guides
2. Supply actual episode audio and metadata, trailer and verified platform links when available
3. Approve production deployment separately; confirm custom-domain/DNS status
4. Review privacy disclosures before adding analytics, email signup, player embeds or other data collection

Content: `src/content/`. Pages: `src/app/`. Interactive components: `src/components/`.
