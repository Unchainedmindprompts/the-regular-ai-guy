# The Regular AI Guy

The Next.js website for Mark Abplanalp’s website-building service and practical AI resources.

This branch contains a service-business design preview. See [PREVIEW.md](PREVIEW.md) for the production base, rollback instructions, asset provenance, and verification.

## Run locally

Node 22 or newer (Vercel project uses Node 24).

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

The initial cloud shell could not launch Chromium, so the full automated browser suite was not run there. Hosted manual browser checks covered desktop and mobile layouts down to a 321-pixel CSS viewport, topic controls, menu dismissal/navigation, copy-success UI, all eight content routes, metadata, images, and in-page anchors. Local lint, typecheck, content tests and build passed. Production dependency audit was clean after updating sharp.

## Deployment

- `main` is the approved production branch of the existing Vercel project `the-regular-ai-guy`
- The production release was explicitly approved on October 7, 2026
- Automatic deployment is enabled for `main`, `preview/regular-ai-guy`, and `preview/service-business-design`; other branches remain disabled by the configuration
- `framework: nextjs` explicitly selects the correct framework
- Production pages permit indexing; preview and local environments send noindex/nofollow and a disallow-all robots file
- The original preview branch retains its preview-only guard until deliberately updated
- Custom domain configuration and DNS are managed separately from the source code
- No third-party service keys or environment secrets are required

## Content and media

- The original supplied logo is preserved. Its 1,000 px transparent WebP derivative is approximately 227 KB. No logo regeneration was used
- The original is not required to build; asset regeneration accepts its local PNG path: `node scripts/prepare-assets.mjs path/to/original.png`
- Fonts are locally bundled through Fontsource; no Google Fonts request is needed
- Four original starter guides include links to official resources
- Upcoming podcast topic concepts are visibly labeled. No published episodes, guests, dates, audience claims, player, signup form, or listening-platform links are invented
- Website/PodcastSeries/Person JSON-LD matches visible content. Guides use Article schema. There are no PodcastEpisode or review records
- Topic exploration and clipboard interactions are client-only. There is no backend or data collection integration

## When episodes are ready

Supply the real audio, episode metadata, trailer and verified listening-platform links. Review privacy disclosures before adding analytics, email signup, player embeds or other data collection.

Content: `src/content/`. Pages: `src/app/`. Interactive components: `src/components/`.
