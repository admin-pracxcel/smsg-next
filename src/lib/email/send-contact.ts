// Server-only helper: sends a per-clinic contact enquiry via Resend REST.
// When RESEND_API_KEY isn't set, logs a redacted summary and returns success
// so the flow works end-to-end in development.
// Only imported from the "use server" action file, which keeps it server-side.

import { CLINICS, type ClinicKey } from "@/lib/clinics";

export type ContactEmailInput = {
  clinicKey: ClinicKey;
  fullName: string;
  email: string;
  phone?: string;
  topic: string;
  isPatient: string;
  message: string;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM_ADDRESS = "contact@smsg.au";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Row = { label: string; value: string };

function buildRows(input: ContactEmailInput, clinicLabel: string): Row[] {
  return [
    { label: "Clinic", value: clinicLabel },
    { label: "Full name", value: input.fullName },
    { label: "Email", value: input.email },
    { label: "Phone", value: input.phone && input.phone.length > 0 ? input.phone : "(not provided)" },
    { label: "Topic", value: input.topic },
    { label: "Existing patient", value: input.isPatient },
    { label: "Message", value: input.message },
  ];
}

function buildHtmlBody(input: ContactEmailInput, clinicLabel: string): string {
  const rows = buildRows(input, clinicLabel)
    .map(
      (f) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e0d5;background:#faf7ef;font-weight:600;vertical-align:top;">${escapeHtml(
          f.label
        )}</td><td style="padding:8px 12px;border:1px solid #e5e0d5;vertical-align:top;white-space:pre-wrap;">${escapeHtml(
          f.value
        )}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2b2320;line-height:1.5;">
  <h2 style="margin:0 0 8px;">New contact enquiry: ${escapeHtml(clinicLabel)}</h2>
  <p style="margin:0 0 16px;color:#5a4f47;">${escapeHtml(input.topic)} from ${escapeHtml(
    input.fullName
  )} &lt;${escapeHtml(input.email)}&gt;</p>
  <table style="border-collapse:collapse;width:100%;max-width:640px;font-size:14px;">${rows}</table>
</body></html>`;
}

export type SendContactResult =
  | { ok: true; delivered: boolean; devLogged?: boolean }
  | { ok: false; error: string };

export async function sendContactMessage(
  input: ContactEmailInput
): Promise<SendContactResult> {
  const clinic = CLINICS[input.clinicKey];
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `[Contact] ${input.topic} - ${input.fullName} (${clinic.shortLabel})`;

  if (!apiKey) {
    // Dev mode: redacted log so the form flow works locally.
    // eslint-disable-next-line no-console
    console.log(
      "[DEV] Contact message received (RESEND_API_KEY not configured)",
      {
        clinicKey: input.clinicKey,
        clinicLabel: clinic.label,
        to: clinic.email,
        fullName: input.fullName,
        email: input.email,
        phone: input.phone ?? null,
        topic: input.topic,
        isPatient: input.isPatient,
        messageChars: input.message.length,
      }
    );
    return { ok: true, delivered: false, devLogged: true };
  }

  const payload: Record<string, unknown> = {
    from: FROM_ADDRESS,
    to: [clinic.email],
    reply_to: input.email,
    subject,
    html: buildHtmlBody(input, clinic.label),
  };

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      // eslint-disable-next-line no-console
      console.error("Resend send failed", res.status, detail);
      return { ok: false, error: "Email service returned an error." };
    }

    return { ok: true, delivered: true };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Resend send threw", err);
    return { ok: false, error: "Email service unreachable." };
  }
}
