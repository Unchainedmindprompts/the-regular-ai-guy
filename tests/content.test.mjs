import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
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
test("preview-only Vercel deployment policy", async () => {
  const config = JSON.parse(await readFile("vercel.json", "utf8"));
  assert.equal(config.framework, "nextjs");
  assert.equal(config.git.deploymentEnabled.main, false);
  assert.equal(config.git.deploymentEnabled["*"], false);
  assert.equal(config.git.deploymentEnabled["preview/regular-ai-guy"], true);
  for (const env of ["production", "development", ""]) {
    const result = spawnSync(process.execPath, ["scripts/preview-build.mjs"], {
      env: { ...process.env, VERCEL_ENV: env },
      encoding: "utf8",
    });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Preview deployments only/);
  }
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
