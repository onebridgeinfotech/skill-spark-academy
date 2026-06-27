import { createServer } from "node:http";
import { createReadStream, existsSync, readFileSync } from "node:fs";
import { stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { handleApiRequest, getAdminHtmlPath } from "./server/api.mjs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "dist", "client");
const PORT = Number(process.env.PORT) || 3000;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".map": "application/json",
  ".txt": "text/plain; charset=utf-8",
};

async function fileExists(filePath) {
  try {
    const info = await stat(filePath);
    return info.isFile();
  } catch {
    return false;
  }
}

async function resolveFile(relativePath) {
  const safePath = normalize(relativePath).replace(/^(\.\.[/\\])+/, "");
  const candidates = [
    join(ROOT, safePath),
    join(ROOT, safePath, "index.html"),
    join(ROOT, `${safePath}.html`),
  ];

  for (const candidate of candidates) {
    if (!candidate.startsWith(ROOT)) continue;
    if (await fileExists(candidate)) return candidate;
  }

  return null;
}

async function serveStatic(req, res, url) {
  let pathname = decodeURIComponent(url.pathname);

  if (pathname !== "/" && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  const relativePath =
    pathname === "/" ? "index.html" : pathname.replace(/^\//, "");

  let filePath = await resolveFile(relativePath);

  if (!filePath && !extname(relativePath)) {
    filePath = await resolveFile("index.html");
  }

  if (!filePath) {
    res.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Site build not ready. API and /admin may still be available.");
    return;
  }

  const ext = extname(filePath);
  res.writeHead(200, {
    "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
  });
  createReadStream(filePath).pipe(res);
}

if (!existsSync(ROOT)) {
  console.warn(`Build output not found at ${ROOT}. Static pages unavailable until "npm run build" completes.`);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);

    if (url.pathname === "/admin" || url.pathname === "/admin/") {
      const adminPath = getAdminHtmlPath();
      const html = readFileSync(adminPath, "utf8");
      res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      });
      res.end(html);
      return;
    }

    if (url.pathname.startsWith("/api/")) {
      const handled = await handleApiRequest(req, res, url);
      if (handled) return;
      res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ error: "Not Found" }));
      return;
    }

    await serveStatic(req, res, url);
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving ${ROOT}`);
  console.log(`CRM admin: http://0.0.0.0:${PORT}/admin`);
  console.log(`Listening on http://0.0.0.0:${PORT}`);
});
