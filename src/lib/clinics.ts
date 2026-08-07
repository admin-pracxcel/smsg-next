/**
 * Clinic constants. These keys appear as literal strings in every practitioner
 * JSON file — treat them as an enum, never as free-form strings.
 */

export const CLINIC_KEYS = ["earlwood", "bangor", "sanssouci"] as const;
export type ClinicKey = (typeof CLINIC_KEYS)[number];

export const CLINICS: Record<
  ClinicKey,
  {
    key: ClinicKey;
    label: string;
    shortLabel: string;
    slug: string;
    address: string;
    suburbLine: string;
    phone: string;
    email: string;
    automedBase: string;
  }
> = {
  earlwood: {
    key: "earlwood",
    label: "Earlwood Medical Centre",
    shortLabel: "Earlwood",
    slug: "earlwood-medical-centre",
    address: "352-354 Homer Street",
    suburbLine: "Earlwood NSW 2206",
    phone: "(02) 9558 8875",
    email: "EMC@smsg.au",
    automedBase:
      "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/doctors",
  },
  bangor: {
    key: "bangor",
    label: "Bangor Medical Centre",
    shortLabel: "Bangor",
    slug: "bangor-medical-centre",
    address: "Shop 6, Bangor Shopping Centre",
    suburbLine: "121 Yala Road, Bangor NSW 2234",
    phone: "02 8582 1318",
    email: "BMC@smsg.au",
    automedBase:
      "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/doctors",
  },
  sanssouci: {
    key: "sanssouci",
    label: "Sans Souci Doctors",
    shortLabel: "Sans Souci",
    slug: "sans-souci-doctors",
    address: "39 Campbell Street",
    suburbLine: "Sans Souci NSW 2219",
    phone: "02 7923 9103",
    email: "SSD@smsg.au",
    automedBase:
      "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/doctors",
  },
};

export const clinicList = CLINIC_KEYS.map((k) => CLINICS[k]);
