import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  createLead,
  createAdminLead,
  listLeads,
  getLead,
  updateLead,
  listCourses,
  exportLeadsCsv,
} from "./handlers/leads.mjs";
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

  if (pathname === "/api/admin/courses" && req.method === "GET") {
    if (!isAdminAuthorized(req)) {
      sendJson(res, 401, { error: "Unauthorized" });
      return true;
    }
    listCourses(req, res);
    return true;
  }

  if (pathname === "/api/admin/leads/export" && req.method === "GET") {
    if (!isAdminAuthorized(req)) {
      sendJson(res, 401, { error: "Unauthorized" });
      return true;
    }
    await exportLeadsCsv(req, res, url);
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

    if (req.method === "POST") {
      await createAdminLead(req, res);
      return true;
    }
  }

  const leadMatch = pathname.match(/^\/api\/admin\/leads\/(\d+)$/);
  if (leadMatch) {
    if (!isAdminAuthorized(req)) {
      sendJson(res, 401, { error: "Unauthorized" });
      return true;
    }

    const leadId = Number(leadMatch[1]);

    if (req.method === "GET") {
      await getLead(req, res, leadId);
      return true;
    }

    if (req.method === "PATCH") {
      await updateLead(req, res, leadId);
      return true;
    }
  }

  return false;
}

export function getAdminHtmlPath() {
  return join(__dirname, "admin", "index.html");
}
