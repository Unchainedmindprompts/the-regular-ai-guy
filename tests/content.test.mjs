import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";
const guideSource = await readFile("src/content/guides.ts", "utf8");
const js = ts.transpileModule(guideSource, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { guides, getGuide } = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);
test("four distinct useful guides with valid source URLs", () => {
  assert.equal(guides.length, 4);
  assert.equal(new Set(guides.map((g) => g.slug)).size, 4);
  for (const guide of guides) {
    assert.ok(getGuide(guide.slug));
    assert.ok(guide.title && guide.summary && guide.takeaway);
    assert.ok(guide.sections.length >= 3);
    assert.ok(guide.sourceLinks.length >= 1);
    for (const source of guide.sourceLinks) {
      assert.equal(new URL(source.url).protocol, "https:");
    }
  }
  assert.equal(getGuide("missing"), undefined);
});
test("approved production and preview Vercel deployment policy", async () => {
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  assert.equal(config.framework, "nextjs");
  assert.equal(config.git.deploymentEnabled.main, true);
  assert.equal(config.buildCommand, "npm run build");
  assert.equal(config.git.deploymentEnabled["*"], false);
  assert.equal(config.git.deploymentEnabled["preview/regular-ai-guy"], true);
});
test("no fabricated episode records or empty links", async () => {
  for (const file of [
    "src/app/page.tsx",
    "src/components/structured-data.tsx",
    "src/content/site.ts",
  ]) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(
      source,
      /PodcastEpisode|aggregateRating|<audio|href=["']#["']/,
    );
  }
});

test("production is indexable while preview headers remain noindex", async () => {
  const configSource = await readFile("next.config.ts", "utf8");
  const configJs = ts.transpileModule(configSource, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  }).outputText;
  const { default: config } = await import(
    "data:text/javascript;base64," + Buffer.from(configJs).toString("base64")
  );
  const previous = process.env.VERCEL_ENV;
  try {
    for (const environment of ["production", "preview"]) {
      process.env.VERCEL_ENV = environment;
      const headers = (await config.headers())[0].headers;
      const robotsHeader = headers.find(
        (header) => header.key === "X-Robots-Tag",
      );
      assert.equal(Boolean(robotsHeader), environment !== "production");
      if (robotsHeader) assert.equal(robotsHeader.value, "noindex, nofollow");
    }
  } finally {
    if (previous === undefined) delete process.env.VERCEL_ENV;
    else process.env.VERCEL_ENV = previous;
  }
});

test("first-prompt headline preserves the requested outcome-first wording", async () => {
  const component = await readFile("src/components/prompt-lab.tsx", "utf8");
  const heading = component
    .match(/<h2>([\s\S]*?)<\/h2>/)?.[1]
    .replace(/\s+/g, " ")
    .trim();
  assert.equal(
    heading,
    "You don’t need to know how to build the solution, just ask the right questions.",
  );
  assert.match(component, /id="first-prompt"/);
  const css = await readFile("src/app/globals.css", "utf8");
  assert.match(css, /\.prompt-context h2 \{[^}]*font-weight: 800;/);
});
