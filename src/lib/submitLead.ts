export type LeadSource =
  | "homepage_enquiry"
  | "contact"
  | "newsletter"
  | "brochure_download";

export type LeadPayload = {
  source: LeadSource;
  name?: string;
  email: string;
  phone?: string;
  enquiryType?: string;
  programme?: string;
  message?: string;
  courseSlug?: string;
};

export type LeadResponse = {
  ok: boolean;
  id?: number;
  message?: string;
  error?: string;
};

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
    }),
  });

  const data = (await response.json()) as LeadResponse;

  if (!response.ok) {
    throw new Error(data.error || "Unable to submit your enquiry.");
  }

  return data;
}
