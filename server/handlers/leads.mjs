import { getPool, isDbConfigured } from "../db.mjs";
import { resolveCourseFields, getCourseList } from "../data/courses.mjs";
import {
  getClientIp,
  isRateLimited,
  normalizeEmail,
  normalizeText,
  readJsonBody,
  sendJson,
} from "../utils.mjs";

const PUBLIC_SOURCES = new Set([
  "homepage_enquiry",
  "contact",
  "newsletter",
  "brochure_download",
]);

const ADMIN_SOURCES = new Set([
  ...PUBLIC_SOURCES,
  "manual",
  "phone",
  "referral",
  "walk_in",
  "email",
  "social",
]);

const ALLOWED_STATUS = new Set([
  "new",
  "contacted",
  "demo_scheduled",
  "qualified",
  "proposal_sent",
  "enrolled",
  "closed_lost",
  "spam",
]);

const ALLOWED_PAYMENT = new Set([
  "none",
  "pending",
  "deposit",
  "partial",
  "paid",
  "refunded",
]);

const ALLOWED_FUNDING = new Set([
  "self_funded",
  "employer",
  "government",
  "instalment",
  "unknown",
]);

const ALLOWED_PRIORITY = new Set(["low", "medium", "high"]);

const ALLOWED_CONTACT = new Set(["email", "phone", "whatsapp"]);

const LEAD_COLUMNS = `
  id, source, name, email, phone, company, job_title,
  enquiry_type, programme, message, course_slug, course_name, course_category,
  page_url, status, notes, assigned_to, follow_up_date, preferred_contact,
  funding_type, deal_value, payment_status, enrollment_date, lost_reason,
  priority, created_at, updated_at
`;

function parseMoney(value) {
  if (value === null || value === undefined || value === "") return 0;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return Math.round(parsed * 100) / 100;
}

function parseDate(value) {
  if (!value) return null;
  const text = String(value).trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) return null;
  return text;
}

function buildLeadRecord(body, { admin = false } = {}) {
  const source = normalizeText(body.source, 50);
  const allowedSources = admin ? ADMIN_SOURCES : PUBLIC_SOURCES;

  if (!source || !allowedSources.has(source)) {
    return { error: "Invalid lead source." };
  }

  const email = normalizeEmail(body.email);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "A valid email address is required." };
  }

  const name = normalizeText(body.name, 255);
  const resolvedName =
    name || (source === "newsletter" ? "Newsletter Subscriber" : null);

  if (!resolvedName) {
    return { error: "Name is required." };
  }

  const courseFields = resolveCourseFields(
    normalizeText(body.courseSlug || body.course_slug, 255),
    normalizeText(body.courseName || body.course_name, 255),
    normalizeText(body.programme, 255),
  );

  const status = normalizeText(body.status, 30);
  if (status && !ALLOWED_STATUS.has(status)) {
    return { error: "Invalid status." };
  }

  const paymentStatus = normalizeText(body.paymentStatus || body.payment_status, 20);
  if (paymentStatus && !ALLOWED_PAYMENT.has(paymentStatus)) {
    return { error: "Invalid payment status." };
  }

  const fundingType = normalizeText(body.fundingType || body.funding_type, 20);
  if (fundingType && !ALLOWED_FUNDING.has(fundingType)) {
    return { error: "Invalid funding type." };
  }

  const priority = normalizeText(body.priority, 10);
  if (priority && !ALLOWED_PRIORITY.has(priority)) {
    return { error: "Invalid priority." };
  }

  const preferredContact = normalizeText(
    body.preferredContact || body.preferred_contact,
    20,
  );
  if (preferredContact && !ALLOWED_CONTACT.has(preferredContact)) {
    return { error: "Invalid preferred contact method." };
  }

  return {
    lead: {
      source,
      name: resolvedName,
      email,
      phone: normalizeText(body.phone, 50),
      company: normalizeText(body.company, 255),
      job_title: normalizeText(body.jobTitle || body.job_title, 255),
      enquiry_type: normalizeText(body.enquiryType || body.enquiry_type, 100),
      programme: courseFields.programme,
      message: normalizeText(body.message, 5000),
      course_slug: courseFields.course_slug,
      course_name: courseFields.course_name,
      course_category: courseFields.course_category,
      page_url: normalizeText(body.pageUrl || body.page_url, 500),
      status: status || "new",
      notes: normalizeText(body.notes, 5000),
      assigned_to: normalizeText(body.assignedTo || body.assigned_to, 100),
      follow_up_date: parseDate(body.followUpDate || body.follow_up_date),
      preferred_contact: preferredContact || null,
      funding_type: fundingType || "unknown",
      deal_value: parseMoney(body.dealValue ?? body.deal_value),
      payment_status: paymentStatus || "none",
      enrollment_date: parseDate(body.enrollmentDate || body.enrollment_date),
      lost_reason: normalizeText(body.lostReason || body.lost_reason, 255),
      priority: priority || "medium",
    },
  };
}

function computeStats(leads) {
  const stats = {
    total: leads.length,
    new: 0,
    contacted: 0,
    inPipeline: 0,
    enrolled: 0,
    pipelineValue: 0,
    revenueWon: 0,
    revenueCollected: 0,
    byCourse: {},
  };

  const pipelineStatuses = new Set([
    "contacted",
    "demo_scheduled",
    "qualified",
    "proposal_sent",
  ]);

  for (const lead of leads) {
    const value = Number(lead.deal_value) || 0;

    if (lead.status === "new") stats.new += 1;
    if (lead.status === "contacted") stats.contacted += 1;
    if (pipelineStatuses.has(lead.status)) {
      stats.inPipeline += 1;
      stats.pipelineValue += value;
    }
    if (lead.status === "enrolled") {
      stats.enrolled += 1;
      stats.revenueWon += value;
    }
    if (["deposit", "partial", "paid"].includes(lead.payment_status)) {
      stats.revenueCollected += value;
    }

    const courseKey = lead.course_name || lead.course_slug || "Unspecified";
    stats.byCourse[courseKey] = (stats.byCourse[courseKey] || 0) + 1;
  }

  stats.pipelineValue = Math.round(stats.pipelineValue * 100) / 100;
  stats.revenueWon = Math.round(stats.revenueWon * 100) / 100;
  stats.revenueCollected = Math.round(stats.revenueCollected * 100) / 100;

  return stats;
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

  const validated = buildLeadRecord(body);
  if (validated.error) {
    sendJson(res, 400, { error: validated.error });
    return;
  }

  const userAgent = normalizeText(req.headers["user-agent"], 500);
  const lead = validated.lead;

  try {
    const db = getPool();
    const [result] = await db.execute(
      `INSERT INTO leads
        (source, name, email, phone, company, job_title, enquiry_type, programme,
         message, course_slug, course_name, course_category, page_url,
         status, priority, ip_address, user_agent)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new', 'medium', ?, ?)`,
      [
        lead.source,
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        lead.job_title,
        lead.enquiry_type,
        lead.programme,
        lead.message,
        lead.course_slug,
        lead.course_name,
        lead.course_category,
        lead.page_url,
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

export async function createAdminLead(req, res) {
  if (!isDbConfigured()) {
    sendJson(res, 503, { error: "Database not configured." });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    sendJson(res, 400, { error: "Invalid request body." });
    return;
  }

  const validated = buildLeadRecord({ ...body, source: body.source || "manual" }, { admin: true });
  if (validated.error) {
    sendJson(res, 400, { error: validated.error });
    return;
  }

  const lead = validated.lead;

  try {
    const db = getPool();
    const [result] = await db.execute(
      `INSERT INTO leads
        (source, name, email, phone, company, job_title, enquiry_type, programme,
         message, course_slug, course_name, course_category, page_url, status, notes,
         assigned_to, follow_up_date, preferred_contact, funding_type, deal_value,
         payment_status, enrollment_date, lost_reason, priority)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        lead.source,
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        lead.job_title,
        lead.enquiry_type,
        lead.programme,
        lead.message,
        lead.course_slug,
        lead.course_name,
        lead.course_category,
        lead.page_url,
        lead.status,
        lead.notes,
        lead.assigned_to,
        lead.follow_up_date,
        lead.preferred_contact,
        lead.funding_type,
        lead.deal_value,
        lead.payment_status,
        lead.enrollment_date,
        lead.lost_reason,
        lead.priority,
      ],
    );

    sendJson(res, 201, { ok: true, id: result.insertId });
  } catch (error) {
    console.error("Failed to create admin lead:", error);
    sendJson(res, 500, { error: "Unable to create lead." });
  }
}

function buildLeadQueryFilters(url) {
  const status = url.searchParams.get("status");
  const source = url.searchParams.get("source");
  const course = url.searchParams.get("course");
  const search = url.searchParams.get("q");

  const where = [];
  const params = [];

  if (status && ALLOWED_STATUS.has(status)) {
    where.push("status = ?");
    params.push(status);
  }

  if (source && ADMIN_SOURCES.has(source)) {
    where.push("source = ?");
    params.push(source);
  }

  if (course) {
    where.push("(course_slug = ? OR course_name = ?)");
    params.push(course, course);
  }

  if (search) {
    where.push(
      "(name LIKE ? OR email LIKE ? OR phone LIKE ? OR company LIKE ? OR programme LIKE ? OR course_name LIKE ? OR message LIKE ? OR notes LIKE ?)",
    );
    const term = `%${search.slice(0, 100)}%`;
    params.push(term, term, term, term, term, term, term, term);
  }

  const whereSql = where.length ? `WHERE ${where.join(" AND ")}` : "";
  return { whereSql, params };
}

function escapeCsvField(value) {
  const text = value === null || value === undefined ? "" : String(value);
  if (/[",\r\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

const CSV_HEADERS = [
  "id",
  "created_at",
  "updated_at",
  "source",
  "status",
  "priority",
  "name",
  "email",
  "phone",
  "company",
  "job_title",
  "preferred_contact",
  "course_name",
  "course_category",
  "course_slug",
  "programme",
  "enquiry_type",
  "deal_value",
  "payment_status",
  "funding_type",
  "enrollment_date",
  "assigned_to",
  "follow_up_date",
  "lost_reason",
  "message",
  "notes",
  "page_url",
];

function leadToCsvRow(lead) {
  return CSV_HEADERS.map((key) => escapeCsvField(lead[key])).join(",");
}

export async function listLeads(req, res, url) {
  if (!isDbConfigured()) {
    sendJson(res, 503, { error: "Database not configured." });
    return;
  }

  const limit = Math.min(Number(url.searchParams.get("limit") || 200), 500);
  const { whereSql, params } = buildLeadQueryFilters(url);

  try {
    const db = getPool();
    const [rows] = await db.execute(
      `SELECT ${LEAD_COLUMNS}
       FROM leads
       ${whereSql}
       ORDER BY created_at DESC
       LIMIT ${limit}`,
      params,
    );

    sendJson(res, 200, {
      ok: true,
      leads: rows,
      stats: computeStats(rows),
      courses: getCourseList(),
    });
  } catch (error) {
    console.error("Failed to list leads:", error);
    sendJson(res, 500, { error: "Unable to load leads." });
  }
}

export async function getLead(req, res, leadId) {
  if (!isDbConfigured()) {
    sendJson(res, 503, { error: "Database not configured." });
    return;
  }

  if (!Number.isInteger(leadId) || leadId <= 0) {
    sendJson(res, 400, { error: "Invalid lead id." });
    return;
  }

  try {
    const db = getPool();
    const [rows] = await db.execute(
      `SELECT ${LEAD_COLUMNS} FROM leads WHERE id = ? LIMIT 1`,
      [leadId],
    );

    if (!rows.length) {
      sendJson(res, 404, { error: "Lead not found." });
      return;
    }

    sendJson(res, 200, { ok: true, lead: rows[0], courses: getCourseList() });
  } catch (error) {
    console.error("Failed to get lead:", error);
    sendJson(res, 500, { error: "Unable to load lead." });
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

  const fields = [];
  const params = [];

  const setters = {
    source: () => {
      const value = normalizeText(body.source, 50);
      if (value && ADMIN_SOURCES.has(value)) {
        fields.push("source = ?");
        params.push(value);
      }
    },
    name: () => {
      const value = normalizeText(body.name, 255);
      if (value) {
        fields.push("name = ?");
        params.push(value);
      }
    },
    email: () => {
      const value = normalizeEmail(body.email);
      if (value) {
        fields.push("email = ?");
        params.push(value);
      }
    },
    phone: () => {
      if (body.phone !== undefined) {
        fields.push("phone = ?");
        params.push(normalizeText(body.phone, 50));
      }
    },
    company: () => {
      if (body.company !== undefined) {
        fields.push("company = ?");
        params.push(normalizeText(body.company, 255));
      }
    },
    job_title: () => {
      if (body.jobTitle !== undefined || body.job_title !== undefined) {
        fields.push("job_title = ?");
        params.push(normalizeText(body.jobTitle || body.job_title, 255));
      }
    },
    enquiry_type: () => {
      if (body.enquiryType !== undefined || body.enquiry_type !== undefined) {
        fields.push("enquiry_type = ?");
        params.push(normalizeText(body.enquiryType || body.enquiry_type, 100));
      }
    },
    programme: () => {
      if (body.programme !== undefined) {
        fields.push("programme = ?");
        params.push(normalizeText(body.programme, 255));
      }
    },
    message: () => {
      if (body.message !== undefined) {
        fields.push("message = ?");
        params.push(normalizeText(body.message, 5000));
      }
    },
    course: () => {
      if (
        body.courseSlug !== undefined ||
        body.course_slug !== undefined ||
        body.courseName !== undefined ||
        body.course_name !== undefined ||
        body.programme !== undefined
      ) {
        const courseFields = resolveCourseFields(
          normalizeText(body.courseSlug || body.course_slug, 255),
          normalizeText(body.courseName || body.course_name, 255),
          normalizeText(body.programme, 255),
        );
        fields.push("course_slug = ?", "course_name = ?", "course_category = ?");
        params.push(
          courseFields.course_slug,
          courseFields.course_name,
          courseFields.course_category,
        );
        if (body.programme === undefined && courseFields.programme) {
          fields.push("programme = ?");
          params.push(courseFields.programme);
        }
      }
    },
    page_url: () => {
      if (body.pageUrl !== undefined || body.page_url !== undefined) {
        fields.push("page_url = ?");
        params.push(normalizeText(body.pageUrl || body.page_url, 500));
      }
    },
    status: () => {
      const value = normalizeText(body.status, 30);
      if (value && ALLOWED_STATUS.has(value)) {
        fields.push("status = ?");
        params.push(value);
      }
    },
    notes: () => {
      if (body.notes !== undefined) {
        fields.push("notes = ?");
        params.push(normalizeText(body.notes, 5000));
      }
    },
    assigned_to: () => {
      if (body.assignedTo !== undefined || body.assigned_to !== undefined) {
        fields.push("assigned_to = ?");
        params.push(normalizeText(body.assignedTo || body.assigned_to, 100));
      }
    },
    follow_up_date: () => {
      if (body.followUpDate !== undefined || body.follow_up_date !== undefined) {
        fields.push("follow_up_date = ?");
        params.push(parseDate(body.followUpDate || body.follow_up_date));
      }
    },
    preferred_contact: () => {
      if (body.preferredContact !== undefined || body.preferred_contact !== undefined) {
        const value = normalizeText(
          body.preferredContact || body.preferred_contact,
          20,
        );
        if (!value || ALLOWED_CONTACT.has(value)) {
          fields.push("preferred_contact = ?");
          params.push(value || null);
        }
      }
    },
    funding_type: () => {
      if (body.fundingType !== undefined || body.funding_type !== undefined) {
        const value = normalizeText(body.fundingType || body.funding_type, 20);
        if (value && ALLOWED_FUNDING.has(value)) {
          fields.push("funding_type = ?");
          params.push(value);
        }
      }
    },
    deal_value: () => {
      if (body.dealValue !== undefined || body.deal_value !== undefined) {
        fields.push("deal_value = ?");
        params.push(parseMoney(body.dealValue ?? body.deal_value));
      }
    },
    payment_status: () => {
      if (body.paymentStatus !== undefined || body.payment_status !== undefined) {
        const value = normalizeText(body.paymentStatus || body.payment_status, 20);
        if (value && ALLOWED_PAYMENT.has(value)) {
          fields.push("payment_status = ?");
          params.push(value);
        }
      }
    },
    enrollment_date: () => {
      if (body.enrollmentDate !== undefined || body.enrollment_date !== undefined) {
        fields.push("enrollment_date = ?");
        params.push(parseDate(body.enrollmentDate || body.enrollment_date));
      }
    },
    lost_reason: () => {
      if (body.lostReason !== undefined || body.lost_reason !== undefined) {
        fields.push("lost_reason = ?");
        params.push(normalizeText(body.lostReason || body.lost_reason, 255));
      }
    },
    priority: () => {
      if (body.priority !== undefined) {
        const value = normalizeText(body.priority, 10);
        if (value && ALLOWED_PRIORITY.has(value)) {
          fields.push("priority = ?");
          params.push(value);
        }
      }
    },
  };

  for (const apply of Object.values(setters)) apply();

  if (!fields.length) {
    sendJson(res, 400, { error: "Nothing to update." });
    return;
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

export function listCourses(_req, res) {
  sendJson(res, 200, { ok: true, courses: getCourseList() });
}

export async function exportLeadsCsv(req, res, url) {
  if (!isDbConfigured()) {
    sendJson(res, 503, { error: "Database not configured." });
    return;
  }

  const { whereSql, params } = buildLeadQueryFilters(url);

  try {
    const db = getPool();
    const [rows] = await db.execute(
      `SELECT ${LEAD_COLUMNS}
       FROM leads
       ${whereSql}
       ORDER BY created_at DESC
       LIMIT 5000`,
      params,
    );

    const lines = [CSV_HEADERS.join(","), ...rows.map(leadToCsvRow)];
    const csv = `\uFEFF${lines.join("\r\n")}`;
    const filename = `ismart-skills-leads-${new Date().toISOString().slice(0, 10)}.csv`;

    res.writeHead(200, {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    });
    res.end(csv);
  } catch (error) {
    console.error("Failed to export leads:", error);
    sendJson(res, 500, { error: "Unable to export leads." });
  }
}
