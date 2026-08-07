export const CONTACT_TOPICS = [
  "Appointment enquiry",
  "Prescription repeat",
  "Referral",
  "Results enquiry",
  "General enquiry",
  "Feedback",
  "Other",
] as const;

export const PATIENT_OPTIONS = ["Yes", "No"] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
export type PatientOption = (typeof PATIENT_OPTIONS)[number];

export type SubmitContactState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};
