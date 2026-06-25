import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const source = join(root, "dist", "client");
const outputDir = join(root, "hostinger-deploy");
const zipPath = join(root, "hostinger-deploy.zip");

if (!existsSync(source)) {
  console.error("Missing dist/client. Run npm run build first.");
  process.exit(1);
}

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
cpSync(source, outputDir, { recursive: true });

console.log(`Hostinger files ready in: ${outputDir}`);
console.log("Upload everything inside hostinger-deploy/ to public_html on Hostinger.");
