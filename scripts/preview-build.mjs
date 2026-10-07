import { spawnSync } from "node:child_process";
if (process.env.VERCEL_ENV !== "preview") {
  console.error(
    "This branch is authorized for Preview deployments only. Production needs a separate, approved release.",
  );
  process.exit(1);
}
const result = spawnSync("npm", ["run", "build"], { stdio: "inherit" });
process.exit(result.status ?? 1);
