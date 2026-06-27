const rateLimit = new Map();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 20;

export function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  return req.socket.remoteAddress || "unknown";
}

export function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + WINDOW_MS;
  }

  entry.count += 1;
  rateLimit.set(ip, entry);
  return entry.count > MAX_REQUESTS;
}

export async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw.trim()) return {};

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("Invalid JSON body");
  }
}

export function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(payload));
}

export function isAdminAuthorized(req) {
  const password = process.env.CRM_ADMIN_PASSWORD;
  if (!password) return false;

  const authHeader = req.headers.authorization || "";
  if (authHeader.startsWith("Bearer ")) {
    return authHeader.slice(7) === password;
  }

  return false;
}

export function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

export function normalizeText(value, maxLength) {
  const text = String(value || "").trim();
  if (!text) return null;
  return text.slice(0, maxLength);
}
