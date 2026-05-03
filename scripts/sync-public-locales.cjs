/**
 * Keep `public/locales/*.json` in sync with `src/locales/*.json` (bundled source of truth).
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const srcDir = path.join(root, "src", "locales");
const outDir = path.join(root, "public", "locales");

fs.mkdirSync(outDir, { recursive: true });
for (const lng of ["en", "ko", "uz"]) {
  const name = `${lng}.json`;
  fs.copyFileSync(path.join(srcDir, name), path.join(outDir, name));
  console.log("synced", path.join("public", "locales", name));
}
