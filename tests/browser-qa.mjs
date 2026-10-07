import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
await mkdir("qa-artifacts", { recursive: true });
const baseURL = process.env.QA_BASE_URL || "http://localhost:3001";
const browser = await chromium.launch({
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {}),
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const results = [];
for (const viewport of [
  { width: 1440, height: 1100 },
  { width: 390, height: 844 },
  { width: 320, height: 740 },
  { width: 768, height: 1024 },
]) {
  const context = await browser.newContext({
    viewport,
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(baseURL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  assert.equal(await page.locator("h1").count(), 1);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  assert.equal(overflow, false, `Overflow at ${viewport.width}`);
  await page.screenshot({
    path: `qa-artifacts/home-${viewport.width}.png`,
    fullPage: true,
  });
  if (viewport.width === 1440 || viewport.width === 390) {
    await page.screenshot({ path: `qa-artifacts/hero-${viewport.width}.png` });
  }
  await page.getByRole("tab", { name: "Everyday life" }).click();
  assert.match(
    await page.getByRole("tabpanel").innerText(),
    /What could AI take off your plate/,
  );
  await page.getByRole("tab", { name: "Everyday life" }).press("ArrowRight");
  assert.equal(
    await page
      .getByRole("tab", { name: "Work & business" })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.getByRole("tab", { name: "Work & business" }).press("End");
  assert.equal(
    await page
      .getByRole("tab", { name: "Risks & reality" })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.getByRole("tab", { name: "Risks & reality" }).press("Home");
  assert.equal(
    await page
      .getByRole("tab", { name: "Everyday life" })
      .getAttribute("aria-selected"),
    "true",
  );
  await page.getByRole("button", { name: "A busy week", exact: true }).click();
  await page.getByRole("button", { name: "Copy prompt", exact: true }).click();
  assert.equal(
    await page.getByRole("button", { name: "Copied", exact: true }).count(),
    1,
  );
  assert.match(
    await page.evaluate(() => navigator.clipboard.readText()),
    /family schedule/,
  );
  await page
    .getByRole("button", { name: "A confusing letter", exact: true })
    .click();
  assert.equal(
    await page
      .getByRole("button", { name: "Copy prompt", exact: true })
      .count(),
    1,
  );
  if (viewport.width < 760) {
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    assert.equal(
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .isVisible(),
      true,
    );
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .isVisible(),
      false,
    );
    await page.getByRole("button", { name: "Open menu", exact: true }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Start here" })
      .click();
    await page.waitForURL("**/start-here");
    assert.equal(
      await page
        .getByRole("navigation", { name: "Mobile navigation" })
        .isVisible(),
      false,
    );
    await page.goBack();
    await page.waitForURL(baseURL + "/");
  }
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  results.push({
    viewport,
    errors,
    accessibilityViolations: axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      description: v.description,
      nodes: v.nodes.map((n) => ({ html: n.html, summary: n.failureSummary })),
    })),
  });
  assert.deepEqual(errors, []);
  await context.close();
}
const page = await browser.newPage();
const routes = [
  "/start-here",
  "/about",
  "/privacy",
  "/guides/first-useful-prompt",
  "/guides/ai-at-work",
  "/guides/personal-agents",
  "/guides/risks-and-reality",
];
for (const path of routes) {
  const response = await page.goto(`${baseURL}${path}`, {
    waitUntil: "networkidle",
  });
  assert.equal(response.status(), 200);
  assert.equal(await page.locator("h1").count(), 1);
  assert.match(
    await page.locator("link[rel=canonical]").getAttribute("href"),
    new RegExp(path + "$"),
  );
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  results.push({
    path,
    accessibilityViolations: axe.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      nodes: v.nodes.map((n) => ({ html: n.html, summary: n.failureSummary })),
    })),
  });
}
await page.goto(baseURL + "/guides/first-useful-prompt");
await page.screenshot({
  path: "qa-artifacts/guide-desktop.png",
  fullPage: true,
});
const nf = await page.goto(baseURL + "/missing");
assert.equal(nf.status(), 404);
await writeFile(
  "qa-artifacts/browser-report.json",
  JSON.stringify(results, null, 2),
);
console.log(JSON.stringify(results, null, 2));
await browser.close();
const count = results.reduce(
  (sum, r) => sum + r.accessibilityViolations.length,
  0,
);
assert.equal(count, 0, `${count} accessibility violations`);
