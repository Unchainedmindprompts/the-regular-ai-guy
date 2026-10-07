import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
const original = process.argv[2];
if (!original) throw new Error("Pass the original transparent logo PNG path");
const input = await readFile(original);
const meta = await sharp(input).metadata();
if (!meta.hasAlpha) throw new Error("Logo source must preserve transparency");
await sharp(input)
  .resize(1000, 1000, { fit: "inside" })
  .webp({ quality: 88, alphaQuality: 100 })
  .toFile("public/images/regular-ai-guy-logo.webp");
const svg = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#101e2a"/><path d="M60 61h55" stroke="#59dbed" stroke-width="4"/><text x="60" y="114" font-family="sans-serif" font-size="20" fill="#b8d1d7" letter-spacing="3">THE REGULAR AI GUY</text><text x="60" y="240" font-family="sans-serif" font-size="56" font-weight="700" fill="#f7f5ef">AI for work,</text><text x="60" y="306" font-family="sans-serif" font-size="56" font-weight="700" fill="#f7f5ef">home, and</text><text x="60" y="372" font-family="sans-serif" font-size="56" font-weight="700" fill="#59dbed">everything</text><text x="60" y="438" font-family="sans-serif" font-size="56" font-weight="700" fill="#59dbed">in between.</text><text x="60" y="548" font-family="sans-serif" font-size="18" fill="#b8d1d7">WITH MARK ABPLANALP</text></svg>`,
);
const logo = await sharp(input)
  .resize(560, 560, { fit: "inside" })
  .png()
  .toBuffer();
await sharp(svg)
  .composite([{ input: logo, left: 610, top: 35 }])
  .jpeg({ quality: 88 })
  .toFile("public/images/social-cover.jpg");
await writeFile(
  "src/app/icon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#101e2a"/><g fill="none" stroke="#59dbed" stroke-width="5" stroke-linecap="round"><path d="M14 27v10M23 18v28M32 11v42M41 21v22M50 27v10"/></g></svg>`,
);
console.log("Assets generated. Source unchanged.");
