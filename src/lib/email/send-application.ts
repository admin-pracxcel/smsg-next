// Server-only helper: sends a careers application email via Resend REST.
// When RESEND_API_KEY isn't set, logs the submission and returns success so
// forms work end-to-end in development.
// Only imported from the "use server" action file, which keeps it server-side.

export type ApplicationField = {
  label: string;
  value: string;
};

export type ApplicationEmailInput = {
  role: string;
  roleLabel: string;
  applicantName: string;
  applicantEmail: string;
  fields: ApplicationField[];
  resume: {
    filename: string;
    contentType: string;
    // Node.js Buffer or a Uint8Array; we'll base64-encode server-side.
    data: Uint8Array;
  } | null;
};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM_ADDRESS = "careers@smsg.au";
const TO_ADDRESS = "recruitment@smsg.au";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function toBase64(bytes: Uint8Array): string {
  // Node.js Buffer is available in the Server Action runtime.
  return Buffer.from(bytes).toString("base64");
}

function buildHtmlBody(input: ApplicationEmailInput): string {
  const rows = input.fields
    .map(
      (f) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e0d5;background:#faf7ef;font-weight:600;vertical-align:top;">${escapeHtml(
          f.label
        )}</td><td style="padding:8px 12px;border:1px solid #e5e0d5;vertical-align:top;white-space:pre-wrap;">${escapeHtml(
          f.value || "(not provided)"
        )}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#2b2320;line-height:1.5;">
  <h2 style="margin:0 0 8px;">New application: ${escapeHtml(input.roleLabel)}</h2>
  <p style="margin:0 0 16px;color:#5a4f47;">Applicant: ${escapeHtml(
    input.applicantName
  )} &lt;${escapeHtml(input.applicantEmail)}&gt;</p>
  <table style="border-collapse:collapse;width:100%;max-width:640px;font-size:14px;">${rows}</table>
  ${
    input.resume
      ? `<p style="margin-top:16px;color:#5a4f47;font-size:13px;">Resume attached: ${escapeHtml(
          input.resume.filename
        )}</p>`
      : `<p style="margin-top:16px;color:#a44;font-size:13px;">No resume attached.</p>`
  }
</body></html>`;
}

export type SendApplicationResult =
  | { ok: true; delivered: boolean; devLogged?: boolean }
  | { ok: false; error: string };

export async function sendApplicationEmail(
  input: ApplicationEmailInput
): Promise<SendApplicationResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const subject = `New application: ${input.roleLabel} - ${input.applicantName}`;

  if (!apiKey) {
    // Dev mode: log a redacted summary so the form flow works locally.
    // eslint-disable-next-line no-console
    console.log(
      "[DEV] Application received (RESEND_API_KEY not configured)",
      {
        role: input.role,
        roleLabel: input.roleLabel,
        applicantName: input.applicantName,
        applicantEmail: input.applicantEmail,
        fields: input.fields,
        resume: input.resume
          ? {
              filename: input.resume.filename,
              contentType: input.resume.contentType,
              bytes: input.resume.data.byteLength,
            }
          : null,
      }
    );
    return { ok: true, delivered: false, devLogged: true };
  }

  const payload: Record<string, unknown> = {
    from: FROM_ADDRESS,
    to: [TO_ADDRESS],
    reply_to: input.applicantEmail,
    subject,
    html: buildHtmlBody(input),
  };

  if (input.resume) {
    payload.attachments = [
      {
        filename: input.resume.filename,
        content: toBase64(input.resume.data),
        content_type: input.resume.contentType,
      },
    ];
  }

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
