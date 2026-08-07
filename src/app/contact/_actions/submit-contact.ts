"use server";

import { z } from "zod";
import { CLINIC_KEYS, type ClinicKey } from "@/lib/clinics";
import { sendContactMessage } from "@/lib/email/send-contact";
import {
  CONTACT_TOPICS,
  PATIENT_OPTIONS,
  type SubmitContactState,
} from "./contact-fields";

const clinicKeySchema = z.enum(CLINIC_KEYS);
const topicSchema = z.enum(CONTACT_TOPICS);
const patientSchema = z.enum(PATIENT_OPTIONS);

const schema = z.object({
  clinicKey: clinicKeySchema,
  fullName: z
    .string({ error: "Full name is required." })
    .trim()
    .min(1, "Full name is required."),
  email: z
    .string({ error: "Email is required." })
    .trim()
    .min(1, "Email is required.")
    .pipe(z.email({ error: "Enter a valid email address." })),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v && v.length > 0 ? v : undefined)),
  topic: topicSchema,
  isPatient: patientSchema,
  message: z
    .string({ error: "Message is required." })
    .trim()
    .min(20, "Please add at least 20 characters so we can help."),
  consent: z.literal("on", { error: "Please give consent to proceed." }),
});

function stringOrUndefined(v: FormDataEntryValue | null): string | undefined {
  if (v == null) return undefined;
  return typeof v === "string" ? v : undefined;
}

export async function submitContact(
  _prevState: SubmitContactState,
  formData: FormData
): Promise<SubmitContactState> {
  const clinicRaw = formData.get("clinicKey");
  const clinicParsed = clinicKeySchema.safeParse(clinicRaw);
  if (!clinicParsed.success) {
    return {
      ok: false,
      message: "Unknown clinic. Please refresh and try again.",
    };
  }
  const clinicKey: ClinicKey = clinicParsed.data;

  const raw = {
    clinicKey,
    fullName: stringOrUndefined(formData.get("fullName")),
    email: stringOrUndefined(formData.get("email")),
    phone: stringOrUndefined(formData.get("phone")),
    topic: stringOrUndefined(formData.get("topic")),
    isPatient: stringOrUndefined(formData.get("isPatient")),
    message: stringOrUndefined(formData.get("message")),
    consent: stringOrUndefined(formData.get("consent")),
  };

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

  const result = await sendContactMessage({
    clinicKey: parsed.data.clinicKey,
    fullName: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    topic: parsed.data.topic,
    isPatient: parsed.data.isPatient,
    message: parsed.data.message,
  });

  if (!result.ok) {
    return {
      ok: false,
      message:
        "Something went wrong sending your message. Please try again, or phone reception directly.",
    };
  }

  return {
    ok: true,
    message: "Thank you. Reception will be in touch shortly.",
  };
}
