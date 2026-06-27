import { getPool, isDbConfigured } from "../db.mjs";
import {
  getClientIp,
  isRateLimited,
  normalizeEmail,
  normalizeText,
  readJsonBody,
  sendJson,
} from "../utils.mjs";

const ALLOWED_SOURCES = new Set([
  "homepage_enquiry",
  "contact",
  "newsletter",
  "brochure_download",
]);

const ALLOWED_STATUS = new Set(["new", "contacted", "qualified", "closed", "spam"]);

function validateLeadPayload(body) {
  const source = normalizeText(body.source, 50);
  const name = normalizeText(body.name, 255);
  const email = normalizeEmail(body.email);

  if (!source || !ALLOWED_SOURCES.has(source)) {
    return { error: "Invalid lead source." };
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "A valid email address is required." };
  }

  const resolvedName =
    name ||
    (source === "newsletter" ? "Newsletter Subscriber" : null);

  if (!resolvedName) {
    return { error: "Name is required." };
  }

  return {
    lead: {
      source,
      name: resolvedName,
      email,
      phone: normalizeText(body.phone, 50),
      enquiry_type: normalizeText(body.enquiryType, 100),
      programme: normalizeText(body.programme, 255),
      message: normalizeText(body.message, 5000),
      course_slug: normalizeText(body.courseSlug, 255),
      page_url: normalizeText(body.pageUrl, 500),
    },
  };
}

export async function createLead(req, res) {
  if (!isDbConfigured()) {
    sendJson(res, 503, {
      error: "Lead capture is not configured yet. Please contact support.",
    });
    return;
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    sendJson(res, 429, { error: "Too many submissions. Please try again later." });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    sendJson(res, 400, { error: "Invalid request body." });
    return;
  }

  const validated = validateLeadPayload(body);
  if (validated.error) {
    sendJson(res, 400, { error: validated.error });
    return;
  }

  const userAgent = normalizeText(req.headers["user-agent"], 500);

  try {
    const db = getPool();
    const [result] = await db.execute(
      `INSERT INTO leads
        (source, name, email, phone, enquiry_type, programme, message, course_slug, page_url, ip_address, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        validated.lead.source,
        validated.lead.name,
        validated.lead.email,
        validated.lead.phone,
        validated.lead.enquiry_type,
        validated.lead.programme,
        validated.lead.message,
        validated.lead.course_slug,
        validated.lead.page_url,
        ip,
        userAgent,
      ],
    );

    sendJson(res, 201, {
      ok: true,
      id: result.insertId,
      message: "Thank you. Our team will be in touch shortly.",
    });
  } catch (error) {
    console.error("Failed to save lead:", error);
    sendJson(res, 500, { error: "Unable to save your enquiry. Please try again." });
  }
}

export async function listLeads(req, res, url) {
  if (!isDbConfigured()) {
    sendJson(res, 503, { error: "Database not configured." });
    return;
  }

  const status = url.searchParams.get("status");
  const source = url.searchParams.get("source");
  const search = url.searchParams.get("q");
  const limit = Math.min(Number(url.searchParams.get("limit") || 100), 500);

  const where = [];
  const params = [];

  if (status && ALLOWED_STATUS.has(status)) {
    where.push("status = ?");
    params.push(status);
  }

  if (source && ALLOWED_SOURCES.has(source)) {
    where.push("source = ?");
    params.push(source);
  }

  if (search) {
    where.push("(name LIKE ? OR email LIKE ? OR programme LIKE ? OR message LIKE ?)");
    const term = `%${search.slice(0, 100)}%`;
    params.push(term, term, term, term);
  }

  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";

  try {
    const db = getPool();
    const [rows] = await db.execute(
      `SELECT id, source, name, email, phone, enquiry_type, programme, message, course_slug, page_url, status, notes, created_at, updated_at
       FROM leads
       ${whereSql}
       ORDER BY created_at DESC
       LIMIT ${limit}`,
      params,
    );

    sendJson(res, 200, { ok: true, leads: rows });
  } catch (error) {
    console.error("Failed to list leads:", error);
    sendJson(res, 500, { error: "Unable to load leads." });
  }
}

export async function updateLead(req, res, leadId) {
  if (!isDbConfigured()) {
    sendJson(res, 503, { error: "Database not configured." });
    return;
  }

  if (!Number.isInteger(leadId) || leadId <= 0) {
    sendJson(res, 400, { error: "Invalid lead id." });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    sendJson(res, 400, { error: "Invalid request body." });
    return;
  }

  const status = body.status ? normalizeText(body.status, 20) : null;
  const notes = body.notes !== undefined ? normalizeText(body.notes, 5000) : undefined;

  if (status && !ALLOWED_STATUS.has(status)) {
    sendJson(res, 400, { error: "Invalid status." });
    return;
  }

  if (!status && notes === undefined) {
    sendJson(res, 400, { error: "Nothing to update." });
    return;
  }

  const fields = [];
  const params = [];

  if (status) {
    fields.push("status = ?");
    params.push(status);
  }

  if (notes !== undefined) {
    fields.push("notes = ?");
    params.push(notes);
  }

  params.push(leadId);

  try {
    const db = getPool();
    const [result] = await db.execute(
      `UPDATE leads SET ${fields.join(", ")} WHERE id = ?`,
      params,
    );

    if (result.affectedRows === 0) {
      sendJson(res, 404, { error: "Lead not found." });
      return;
    }

    sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error("Failed to update lead:", error);
    sendJson(res, 500, { error: "Unable to update lead." });
  }
}
