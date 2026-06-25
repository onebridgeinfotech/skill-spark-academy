import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

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

if (existsSync(zipPath)) rmSync(zipPath);
if (process.platform === "win32") {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${outputDir.replace(/'/g, "''")}\\*' -DestinationPath '${zipPath.replace(/'/g, "''")}' -Force"`,
    { stdio: "inherit" },
  );
} else {
  execSync(`cd "${outputDir}" && zip -r "${zipPath}" .`, { stdio: "inherit" });
}

console.log(`Hostinger files ready in: ${outputDir}`);
console.log(`Zip ready for upload: ${zipPath}`);
console.log("Upload and extract into public_html on Hostinger (not the GitHub source repo).");
