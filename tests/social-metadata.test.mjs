import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import sharp from "sharp";
import ts from "typescript";

const source = await readFile("src/content/site.ts", "utf8");
const js = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext },
}).outputText;
const { site } = await import(
  "data:text/javascript;base64," + Buffer.from(js).toString("base64")
);

test("social metadata uses the verified public production host", () => {
  assert.equal(site.url, "https://the-regular-ai-guy.vercel.app");
  assert.equal(
    new URL("/images/social-cover.jpg", site.url).toString(),
    "https://the-regular-ai-guy.vercel.app/images/social-cover.jpg",
  );
});

test("the social card is a 1200 by 630 JPEG", async () => {
  const metadata = await sharp("public/images/social-cover.jpg").metadata();
  assert.equal(metadata.format, "jpeg");
  assert.equal(metadata.width, 1200);
  assert.equal(metadata.height, 630);
  const layout = await readFile("src/app/layout.tsx", "utf8");
  assert.match(layout, /type: "image\/jpeg"/);
});
