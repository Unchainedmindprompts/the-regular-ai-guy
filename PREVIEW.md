# Service-business design preview

This preview is isolated on `preview/service-business-design`. It does not authorize a production release.

## Base and rollback

- Repository: `Unchainedmindprompts/the-regular-ai-guy`
- Unchanged production base: `3a826b8a9b1f211cdd7ccb8d4b9575582aa85f1a`
- Current production deployment observed in Vercel: `F2h2T6NzJUF3ts98M2WFvWd4E9Tf`, from that same commit.
- Preview deployment is enabled only for this specifically named branch, alongside the already enabled branches. The wildcard remains disabled.
- To decline this design, close the draft PR; production remains at its existing version. If approved and merged later, revert the merge commit through a new PR, or restore the recorded base deployment in Vercel with separate production authorization. Never force-reset main.

## Design and content

A personal website-building offer for service-business owners. Deep teal, warm white, restrained cyan, a readable wordmark, and Mark on the right of a mountain hero. Work comes directly after the hero. Owner experience is explicitly window treatments since 2002; AI and website building are self-taught. No invented credentials, prices, reviews, or performance claims.

The previous homepage is preserved at `/explore`, together with the original artwork, podcast topics, prompt interaction, and all four guides. The homepage now describes the website service in its structured data; PodcastSeries remains on `/explore`.

The contact CTA uses Mark's publicly verified `mark@luxewindowworks.com` address. It opens the visitor's email application; no form or delivery-success simulation is present. The destination is clearly identified as the Luxe inbox.

## Assets and provenance

Verified public sites on October 8, 2026:

- https://www.luxewindowworks.com/
- https://www.aestheticsbymichelle.com/
- https://livingdentalhealth.com/
- https://www.realestatewithshirin.com/

The four `public/images/work-*.webp` files are actual browser screenshots of those live websites, resized and compressed locally. They are not invented concept designs.

`public/images/mark-original.webp` is Mark's original public portrait from https://www.luxewindowworks.com/images/mark-photo.webp, as displayed on the Luxe About page. The original repo's `regular-ai-guy-logo.webp` remains unchanged.

`public/images/mark-mountain-hero.webp` was edited with the built-in imagegen tool from that original portrait, with the repo artwork as flannel style reference. The portrait backdrop and clothing are edited; the image is not documentary photography of Mark at a particular location. The original portrait is also shown unedited in the About section. Final prompt:

> Use case: identity-preserve. Create an edited website hero photograph from the FIRST image, Mark's real portrait. Preserve his EXACT facial identity, age, facial proportions, hairline, eyes, nose, mouth, beard, expression and natural skin detail; do not invent or beautify a new face. First photo is identity source and edit target. Second image is only reference for red flannel shirt brand personality, NOT for face. Change black jacket into understated red/burgundy plaid flannel over a dark tee, remove Luxe logo. Framing from waist/chest up, friendly relaxed posture, no pointing needed. Place Mark on the RIGHT third of wide 1536x1024 horizontal composition. Background is subtle softly focused Pacific Northwest evergreen trees, lake and layered mountains at blue hour. Left half is very dark quiet deep teal navy #092e36 negative space, fading smoothly to portrait on right for HTML text overlay. Face must remain well lit naturally with warm soft light. Editorial photograph, approachable service business owner. No microphone, robot, podcast equipment, buildings, headphones, badges, graphics, lettering, words, watermark or borders. Preserve real likeness above all; avoid plastic skin and exaggerated cinematic lighting.

The two supplied Library screenshots returned 403 after a bounded retry. No access bypass was attempted. Repo originals and the independently accessible live Kodecite visual reference were used. No Kodecite source or deployment was changed.

## Verification

- `npm run qa`: ESLint, TypeScript, six content/metadata tests, Next.js production build all pass.
- Local HTTP checks: all nine content routes return 200; missing route returns 404; canonical URLs and noindex headers checked; robots and sitemap return 200.
- Chrome review at 1440, 768, 390, and 320 CSS pixels: no horizontal overflow; live hero text; responsive portrait crop; mobile menu open, Escape close, and contact anchor navigation checked.
- Original portfolio destinations independently opened and verified. Email target inspected without sending a message.
- Production dependency audit: zero vulnerabilities. npm reports five high-severity development dependency advisories in the existing lockfile; no unrelated dependency upgrades were made.
- Browser automation test source was adapted to the new homepage and preserved `/explore` route. The full Playwright/axe suite was not executed; browser checks used the connected Chrome session.
