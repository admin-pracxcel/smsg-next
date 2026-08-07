/**
 * Type-safe route builder. This is the ONLY way to construct internal URLs.
 * Never hardcode a path. TypeScript will catch every wrong href at build time.
 */

import type { ClinicKey } from "./clinics";
import { CLINICS } from "./clinics";
import type { SubBrandKey } from "./sub-brands";
import { SUB_BRANDS } from "./sub-brands";

export const routes = {
  home: () => "/",
  practitioner: (slug: string) => `/${slug}/`,
  location: (clinic: ClinicKey) => `/${CLINICS[clinic].slug}/`,
  subBrand: (key: SubBrandKey) => `/${SUB_BRANDS[key].slug}/`,
  service: (slug: string) => `/${slug}/`,
  aboutHub: () => "/about/",
  about: (slug: string) => `/about/${slug}/`,
  patientInfo: (slug: string) => `/patient-information/${slug}/`,
  careers: () => "/careers/",
  careersRole: (slug: string) => `/careers/${slug}/`,
  contact: () => "/contact/",
  healthLibrary: () => "/health-library/",
  healthLibraryPost: (slug: string) => `/health-library/${slug}/`,
  teamAll: () => "/team/",
  teamGPs: () => "/team/general-practitioners/",
  teamSpecialists: () => "/team/specialist-physicians-surgeons/",
  teamAlliedHealth: () => "/team/allied-health/",
  teamNursing: () => "/team/nursing-team/",
  teamAdmin: () => "/team/administration/",
} as const;

/**
 * External URL builders. Isolated here so a URL structure change at the
 * source (Automed) only edits one function.
 */
export const external = {
  automedDoctor: (clinic: ClinicKey, doctorSlug: string) =>
    `${CLINICS[clinic].automedBase}/d/${doctorSlug}`,
  automedAppointment: (
    clinic: ClinicKey,
    doctorSlug: string,
    appointmentSlug: string
  ) =>
    `${CLINICS[clinic].automedBase}/d/${doctorSlug}/a/${appointmentSlug}`,
  automedRegistration: (clinic: ClinicKey) => {
    const map: Record<ClinicKey, string> = {
      earlwood: "https://automed.au/m/5308/4/",
      bangor: "https://automed.au/m/3941/1/",
      sanssouci: "https://automed.au/m/4895/1/",
    };
    return map[clinic];
  },
} as const;
