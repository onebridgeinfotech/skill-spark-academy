import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createLead, listLeads, updateLead } from "./handlers/leads.mjs";
import { isAdminAuthorized, sendJson } from "./utils.mjs";
import { isDbConfigured, pingDb } from "./db.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnvFile() {
  const envPath = join(__dirname, "..", ".env");
  if (!existsSync(envPath)) return;

  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

export async function handleApiRequest(req, res, url) {
  const { pathname } = url;

  if (pathname === "/api/health") {
    if (!isDbConfigured()) {
      sendJson(res, 200, { ok: true, db: "not_configured" });
      return true;
    }

    try {
      const result = await pingDb();
      if (result.ok) {
        sendJson(res, 200, { ok: true, db: "connected" });
      } else {
        sendJson(res, 503, {
          ok: false,
          db: "error",
          code: result.code || null,
          hint: result.hint,
        });
      }
    } catch (error) {
      console.error("[db] unexpected health error:", error);
      sendJson(res, 503, { ok: false, db: "error", hint: "Unexpected database error. Check Runtime logs in Hostinger." });
    }
    return true;
  }

  if (pathname === "/api/leads" && req.method === "POST") {
    await createLead(req, res);
    return true;
  }

  if (pathname === "/api/admin/leads") {
    if (!isAdminAuthorized(req)) {
      sendJson(res, 401, { error: "Unauthorized" });
      return true;
    }

    if (req.method === "GET") {
      await listLeads(req, res, url);
      return true;
    }
  }

  const leadMatch = pathname.match(/^\/api\/admin\/leads\/(\d+)$/);
  if (leadMatch && req.method === "PATCH") {
    if (!isAdminAuthorized(req)) {
      sendJson(res, 401, { error: "Unauthorized" });
      return true;
    }

    await updateLead(req, res, Number(leadMatch[1]));
    return true;
  }

  return false;
}

export function getAdminHtmlPath() {
  return join(__dirname, "admin", "index.html");
}
