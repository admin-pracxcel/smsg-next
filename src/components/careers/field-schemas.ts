// Field schemas for careers application forms.
// Each schema is a list of field definitions consumed by <ApplicationForm />.

export type BaseField = {
  name: string;
  label: string;
  required?: boolean;
  helpText?: string;
};

export type TextField = BaseField & {
  type: "text" | "email" | "tel";
  placeholder?: string;
  autoComplete?: string;
  halfWidth?: boolean;
};

export type TextareaField = BaseField & {
  type: "textarea";
  placeholder?: string;
  rows?: number;
};

export type SelectField = BaseField & {
  type: "select";
  options: string[];
  otherReveals?: string;
  otherLabel?: string;
  otherName?: string;
};

export type RadioField = BaseField & {
  type: "radio";
  options: string[];
  // "buttons" renders as full-width toggle buttons splitting the row evenly.
  // "inline" (default) renders classic inline radios.
  variant?: "inline" | "buttons";
  otherReveals?: string;
  otherLabel?: string;
  otherName?: string;
  otherInputType?: "text" | "number";
};

export type CheckboxGroupField = BaseField & {
  type: "checkbox-group";
  options: string[];
};

export type DateField = BaseField & {
  type: "date";
  // "today" clamps min to the current date on both client and server
  // (i.e. the user can pick today or any future date, no past dates).
  min?: "today";
  helpText?: string;
};

export type CheckboxField = BaseField & {
  type: "checkbox";
  labelHtml?: boolean;
  privacyPolicyHref?: string;
};

export type Field =
  | TextField
  | TextareaField
  | SelectField
  | RadioField
  | CheckboxGroupField
  | DateField
  | CheckboxField;

// Shared field fragments
const nameContactFields: Field[] = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    required: true,
    autoComplete: "given-name",
    halfWidth: true,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
    required: true,
    autoComplete: "family-name",
    halfWidth: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    required: true,
    autoComplete: "email",
    placeholder: "you@example.com",
    halfWidth: true,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
    required: true,
    autoComplete: "tel",
    placeholder: "0400 000 000",
    halfWidth: true,
  },
];

const startDateField: DateField = {
  name: "startDate",
  type: "date",
  label: "Start date",
  required: true,
  min: "today",
  helpText: "The earliest date you could commence.",
};

const consentField: CheckboxField = {
  name: "consent",
  type: "checkbox",
  label: "I consent to SMSG handling my application data in accordance with the Privacy Policy.",
  required: true,
  labelHtml: true,
  privacyPolicyHref: "/about/privacy-policy/",
};

const yesNo = ["Yes", "No"];

export const generalPractitionerFields: Field[] = [
  ...nameContactFields,
  {
    name: "iHave",
    type: "checkbox-group",
    label: "I have",
    helpText: "Select any that apply.",
    options: [
      "Vocational Registration (FRACGP, FACRRM, FRNZCGP)",
      "Full Australian Work Rights",
      "General Practice experience in Australia",
    ],
  },
  startDateField,
  consentField,
];

export const practiceNurseFields: Field[] = [
  ...nameContactFields,
  startDateField,
  {
    name: "sponsorship",
    type: "radio",
    label: "Will you now or in the future require sponsorship for employment visa status?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  {
    name: "workAuthorised",
    type: "radio",
    label: "Are you legally authorised to work in Australia?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  {
    name: "driverLicense",
    type: "radio",
    label: "Do you have a valid driver's licence?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  {
    name: "ahpraRegistered",
    type: "radio",
    label: "Do you have a current AHPRA registration as a nurse?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  {
    name: "nursingQualification",
    type: "radio",
    label: "Have you completed a qualification in nursing?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  consentField,
];

export const patientSupportOfficerFields: Field[] = [
  ...nameContactFields,
  startDateField,
  {
    name: "sponsorship",
    type: "radio",
    label: "Will you now or in the future require sponsorship for employment visa status?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  {
    name: "workAuthorised",
    type: "radio",
    label: "Are you legally authorised to work in Australia?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  {
    name: "driverLicense",
    type: "radio",
    label: "Do you have a valid driver's licence?",
    required: true,
    variant: "buttons",
    options: yesNo,
  },
  consentField,
];

export const roleLabels: Record<string, string> = {
  "general-practitioner": "General Practitioner",
  "practice-nurse": "Practice Nurse",
  "patient-support-officer": "Patient Support Officer",
};

export const roleFields: Record<string, Field[]> = {
  "general-practitioner": generalPractitionerFields,
  "practice-nurse": practiceNurseFields,
  "patient-support-officer": patientSupportOfficerFields,
};
