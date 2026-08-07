"use server";

import { z } from "zod";
import { sendApplicationEmail, type ApplicationField } from "@/lib/email/send-application";
import { roleFields, roleLabels, type Field } from "@/components/careers/field-schemas";

const roleSchema = z.enum([
  "general-practitioner",
  "practice-nurse",
  "patient-support-officer",
]);
type Role = z.infer<typeof roleSchema>;

export type SubmitState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

function requiredString(label: string) {
  return z
    .string({ error: `${label} is required.` })
    .trim()
    .min(1, `${label} is required.`);
}

function optionalString() {
  return z
    .string()
    .trim()
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined));
}

function todayISO(): string {
  const d = new Date();
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function buildSchemaForRole(fields: Field[]) {
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const f of fields) {
    switch (f.type) {
      case "text":
      case "tel":
        shape[f.name] = f.required ? requiredString(f.label) : optionalString();
        break;
      case "email":
        shape[f.name] = f.required
          ? requiredString(f.label).pipe(z.email({ error: "Enter a valid email address." }))
          : optionalString();
        break;
      case "textarea":
        shape[f.name] = f.required ? requiredString(f.label) : optionalString();
        break;
      case "date": {
        const iso = /^\d{4}-\d{2}-\d{2}$/;
        let base: z.ZodTypeAny = z
          .string({ error: `${f.label} is required.` })
          .trim()
          .regex(iso, { error: "Please choose a valid date." });
        if (f.min === "today") {
          const today = todayISO();
          base = (base as z.ZodString).refine((v: string) => v >= today, {
            error: "Date cannot be in the past.",
          });
        }
        shape[f.name] = f.required
          ? base
          : base.optional().transform((v) => (v && String(v).length > 0 ? v : undefined));
        break;
      }
      case "select":
      case "radio": {
        const base = f.required
          ? z
              .string({ error: `${f.label} is required.` })
              .refine((v) => (f.options as readonly string[]).includes(v), {
                error: `${f.label} is required.`,
              })
          : z.string().optional();
        shape[f.name] = base;
        if (f.otherReveals && f.otherName) {
          shape[f.otherName] = z.string().optional();
        }
        break;
      }
      case "checkbox-group":
        shape[f.name] = z.array(z.string()).optional().default([]);
        break;
      case "checkbox":
        shape[f.name] = f.required
          ? z.literal("on", { error: "Please tick the consent checkbox to continue." }).transform(() => true)
          : z.string().optional().transform((v) => v === "on");
        break;
    }
  }

  return z.object(shape).superRefine((data, ctx) => {
    for (const f of fields) {
      if ((f.type === "select" || f.type === "radio") && f.otherReveals && f.otherName) {
        const primary = (data as Record<string, unknown>)[f.name];
        const other = (data as Record<string, unknown>)[f.otherName];
        if (primary === f.otherReveals) {
          if (!other || String(other).trim().length === 0) {
            ctx.addIssue({
              code: "custom",
              path: [f.otherName],
              message: `${f.otherLabel ?? "Please specify"} is required.`,
            });
          }
        }
      }
    }
  });
}

function coerceFormValue(f: Field, formData: FormData): unknown {
  if (f.type === "checkbox-group") {
    return formData.getAll(f.name).map((v) => String(v));
  }
  const raw = formData.get(f.name);
  return raw == null ? undefined : typeof raw === "string" ? raw : undefined;
}

function extractOther(f: Field, formData: FormData): [string, unknown] | null {
  if ((f.type === "select" || f.type === "radio") && f.otherReveals && f.otherName) {
    const raw = formData.get(f.otherName);
    return [f.otherName, typeof raw === "string" ? raw : undefined];
  }
  return null;
}

function displayValue(f: Field, value: unknown): string {
  if (f.type === "checkbox-group") {
    const arr = Array.isArray(value) ? value : [];
    return arr.length > 0 ? arr.join(", ") : "(none selected)";
  }
  if (f.type === "checkbox") {
    return value ? "Yes" : "No";
  }
  if (value == null || value === "") return "";
  return String(value);
}

export async function submitApplication(
  _prevState: SubmitState,
  formData: FormData
): Promise<SubmitState> {
  const roleRaw = formData.get("role");
  const roleParsed = roleSchema.safeParse(roleRaw);
  if (!roleParsed.success) {
    return { ok: false, message: "Unknown role. Please refresh and try again." };
  }
  const role: Role = roleParsed.data;
  const fields = roleFields[role];
  const schema = buildSchemaForRole(fields);

  const raw: Record<string, unknown> = {};
  for (const f of fields) {
    raw[f.name] = coerceFormValue(f, formData);
    const other = extractOther(f, formData);
    if (other) raw[other[0]] = other[1];
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    const flat = z.flattenError(parsed.error);
    const errors: Record<string, string> = {};
    for (const [key, msgs] of Object.entries(flat.fieldErrors)) {
      if (msgs && msgs.length > 0) errors[key] = msgs[0];
    }
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      errors,
    };
  }

  const emailFields: ApplicationField[] = [];
  for (const f of fields) {
    if (f.type === "checkbox") continue;
    const val = displayValue(f, (parsed.data as Record<string, unknown>)[f.name]);
    emailFields.push({ label: f.label, value: val });
    if ((f.type === "select" || f.type === "radio") && f.otherReveals && f.otherName) {
      const specify = (parsed.data as Record<string, unknown>)[f.otherName];
      if (specify && String(specify).trim().length > 0) {
        emailFields.push({
          label: f.otherLabel ?? "Please specify",
          value: String(specify),
        });
      }
    }
  }

  const data = parsed.data as Record<string, unknown>;
  const firstName = String(data.firstName ?? "").trim();
  const lastName = String(data.lastName ?? "").trim();
  const applicantName = [firstName, lastName].filter(Boolean).join(" ") || "(no name)";
  const applicantEmail = String(data.email ?? "").trim();

  const sendResult = await sendApplicationEmail({
    role,
    roleLabel: roleLabels[role],
    applicantName,
    applicantEmail,
    fields: emailFields,
    resume: null,
  });

  if (!sendResult.ok) {
    return {
      ok: false,
      message: "Something went wrong sending your application. Please try again, or email recruitment@smsg.au.",
    };
  }

  return {
    ok: true,
    message: "Thank you. We've received your details and will be in touch.",
  };
}
