/**
 * Navigation data · single source of truth for header, mobile drawer, and footer.
 *
 * Follows CLAUDE.md Section 4 exactly:
 *   Care · The Team · Locations · Patients · About · Careers · Contact
 * Care dropdown has 4 sections: SPECIALTY CARE (5 sub-brands, 4 with flyouts),
 * GENERAL PRACTICE (7 grouped pages + Telehealth), ALLIED HEALTH (6),
 * DIAGNOSTICS & ON-SITE (2).
 *
 * Never hardcode nav in JSX; import from here.
 */

import { clinicList } from "./clinics";
import { subBrandList, SUB_BRANDS } from "./sub-brands";
import { routes } from "./routes";

/* ---------- Types ---------- */

export type NavItem = {
  label: string;
  href: string;
  /** Optional sub-line (e.g. "352-354 Homer Street · Mon-Sat") */
  sub?: string;
  /** Optional accent dot colour, e.g. sub-brand chip */
  dotColor?: string;
  /** Marks a "strong" CTA row (e.g. "Explore all Aurora services") */
  strong?: boolean;
};

export type NavGroup = {
  /** Optional group heading (e.g. "Specialty Care", "General Practice") */
  heading?: string;
  items: NavItem[];
  /** Optional nested flyout children for hover reveal (desktop only) */
  flyoutItems?: NavItem[];
  /**
   * When true, this group and every group after it are wrapped in a
   * `.menu-scroll` container so tall dropdowns (Care) can scroll
   * internally without clipping the flyouts of groups above.
   */
  scrollFromHere?: boolean;
};

export type NavColumn = {
  heading?: string;
  groups: NavGroup[];
};

export type NavDropdownLayout = "single" | "grid-2" | "grouped" | "contact";

export type NavDropdown = {
  label: string;
  /** Href of the label link itself (falls back to "#" if omitted) */
  href?: string;
  /** Panel width in px (desktop) */
  width?: number;
  layout: NavDropdownLayout;
  columns: NavColumn[];
  /** True when panel should right-align (Careers, Contact) */
  alignRight?: boolean;
};

/* ---------- Sub-brand flyout data ---------- */

const auroraFlyout: NavItem[] = [
  { label: "Antenatal Shared Care", href: "/antenatal-shared-care/" },
  { label: "Obstetrics & Pregnancy Care", href: "/obstetrics-and-pregnancy-care/" },
  {
    label: "Hormonal IUD & Contraceptive Implant",
    href: "/iud-hormonal-implant/",
  },
  { label: "Cervical Screening", href: "/cervical-screening/" },
  { label: "Menopause Support", href: "/menopause-support/" },
  {
    label: "Breastfeeding & Lactation Support",
    href: "/breastfeeding-and-lactation-support/",
  },
  {
    label: "Explore all Aurora services",
    href: routes.subBrand("aurora"),
    strong: true,
  },
];

const kidsDrFlyout: NavItem[] = [
  { label: "ADHD Diagnosis & Management", href: "/adhd-diagnosis-and-management/" },
  { label: "Autism Assessment", href: "/autism-assessment/" },
  { label: "Developmental Assessment", href: "/developmental-assessment/" },
  { label: "Behavioural Concerns", href: "/behavioural-concerns/" },
  {
    label: "Learning Difficulties",
    href: "/learning-difficulties-and-psychometric-assessment/",
  },
  {
    label: "Explore all Kids' Dr services",
    href: routes.subBrand("kidsdr"),
    strong: true,
  },
];

const excelsiaFlyout: NavItem[] = [
  { label: "Cardiology", href: "/cardiology/" },
  { label: "Endocrinology", href: "/endocrinology/" },
  { label: "Gastroenterology", href: "/gastroenterology/" },
  { label: "Geriatrics", href: "/geriatrics/" },
  { label: "Haematology", href: "/haematology/" },
  { label: "Nephrology", href: "/nephrology/" },
  { label: "Respiratory & Sleep Medicine", href: "/respiratory-and-sleep-medicine/" },
  { label: "Paediatric Medicine", href: "/paediatric-medicine/" },
  { label: "General Medicine", href: "/general-medicine/" },
  {
    label: "Explore all Excelsia specialties",
    href: routes.subBrand("excelsia"),
    strong: true,
  },
];

const clarionFlyout: NavItem[] = [
  { label: "Full-Body Skin Checks", href: "/full-body-skin-checks/" },
  { label: "Dermoscopy", href: "/dermoscopy/" },
  { label: "Excision Procedures", href: "/excision-procedures/" },
  { label: "Skin Cancer Awareness", href: "/skin-cancer-awareness/" },
  {
    label: "Explore all Clarion services",
    href: routes.subBrand("clarion"),
    strong: true,
  },
];

/* ---------- Care dropdown ---------- */

const specialtyCareItems: NavItem[] = subBrandList.map((sb) => ({
  label: sb.label,
  href: routes.subBrand(sb.key),
  dotColor: sb.dotColor,
}));

const flyoutsBySubBrand: Record<string, NavItem[] | undefined> = {
  aurora: auroraFlyout,
  kidsdr: kidsDrFlyout,
  excelsia: excelsiaFlyout,
  clarion: clarionFlyout,
  // sydneycosmedic: direct to hub, no flyout
};

const generalPracticeItems: NavItem[] = [
  { label: "General Practice & Preventive Care", href: "/general-practice-and-preventive-care/" },
  { label: "Chronic Disease & Lifestyle", href: "/chronic-disease-and-lifestyle/" },
  { label: "Treatment Room & Procedures", href: "/treatment-room-and-procedures/" },
  { label: "Mental Health Care", href: "/mental-health-care/" },
  { label: "Travel Medicine & Vaccinations", href: "/travel-medicine-and-vaccinations/" },
  { label: "Medicals & Assessments", href: "/medicals-and-assessments/" },
  { label: "Telehealth", href: "/telehealth/" },
];

const alliedHealthItems: NavItem[] = [
  { label: "Physiotherapy", href: "/physiotherapy/" },
  { label: "Psychology & Counselling", href: "/psychology-and-counselling/" },
  { label: "Victim Services Counselling", href: "/victim-services-counselling/" },
  { label: "Speech Pathology", href: "/speech-pathology/" },
  { label: "Dietetics", href: "/dietetics/" },
  { label: "Podiatry", href: "/podiatry/" },
];

const diagnosticsItems: NavItem[] = [
  { label: "Pathology Services", href: "/pathology-services/" },
  { label: "Echocardiograms & Stress Testing", href: "/echocardiograms-and-stress-testing/" },
];

const careDropdown: NavDropdown = {
  label: "Care",
  href: "/#care",
  width: 340,
  layout: "grouped",
  columns: [
    {
      groups: [
        {
          heading: "Specialty Care",
          items: specialtyCareItems,
          // flyouts are keyed on item label -> resolved by SiteHeader
        },
        {
          heading: "General Practice",
          items: generalPracticeItems,
          scrollFromHere: true,
        },
        {
          heading: "Allied Health",
          items: alliedHealthItems,
        },
        {
          heading: "Diagnostics & On-Site",
          items: diagnosticsItems,
        },
      ],
    },
  ],
};

/* ---------- The Team dropdown ---------- */

const teamDropdown: NavDropdown = {
  label: "The Team",
  href: routes.teamAll(),
  width: 280,
  layout: "single",
  columns: [
    {
      groups: [
        {
          heading: "Our Clinicians",
          items: [
            { label: "General Practitioners", href: routes.teamGPs() },
            { label: "Specialist Physicians & Surgeons", href: routes.teamSpecialists() },
            { label: "Allied Health", href: routes.teamAlliedHealth() },
            { label: "Nursing Team", href: routes.teamNursing() },
            { label: "Administration", href: routes.teamAdmin() },
          ],
        },
      ],
    },
  ],
};

/* ---------- Locations dropdown ---------- */

const locationsDropdown: NavDropdown = {
  label: "Locations",
  href: "/#locations",
  width: 320,
  layout: "single",
  columns: [
    {
      groups: [
        {
          heading: "Our Centres",
          items: clinicList.map((c) => ({
            label: c.label,
            href: routes.location(c.key),
            sub: `${c.address} · ${c.suburbLine.split(" NSW")[0]}`,
          })),
        },
      ],
    },
  ],
};

/* ---------- Patients dropdown ---------- */

const patientsDropdown: NavDropdown = {
  label: "Patients",
  href: "/#patient-info",
  width: 640,
  layout: "grid-2",
  columns: [
    {
      groups: [
        {
          heading: "Getting Started",
          items: [
            { label: "New Patient Registration", href: routes.patientInfo("new-patient-registration") },
            { label: "Book Online", href: routes.patientInfo("book-online") },
            { label: "Fees & Billing", href: routes.patientInfo("fees-and-billing") },
            { label: "Frequently Asked Questions", href: routes.patientInfo("faq") },
          ],
        },
      ],
    },
    {
      groups: [
        {
          heading: "Ongoing Care",
          items: [
            { label: "Scripts & Referrals", href: routes.patientInfo("scripts-and-referrals") },
            { label: "Results Policy", href: routes.patientInfo("results-policy") },
            { label: "After-Hours Care", href: routes.patientInfo("after-hours-care") },
            { label: "Emergency Information", href: routes.patientInfo("emergency-information") },
            { label: "Health Library", href: routes.healthLibrary() },
          ],
        },
      ],
    },
  ],
};

/* ---------- About dropdown ---------- */

const aboutDropdown: NavDropdown = {
  label: "About",
  href: routes.about("our-story"),
  width: 300,
  layout: "single",
  columns: [
    {
      groups: [
        {
          heading: "About SMSG",
          items: [
            { label: "Our Story", href: routes.about("our-story") },
            { label: "Awards & Accreditations", href: routes.about("awards-and-accreditations") },
            { label: "Zero Workplace Violence Tolerance", href: routes.about("zero-workplace-violence-tolerance") },
            { label: "Feedback & Complaints", href: routes.about("feedback-and-complaints") },
            { label: "Privacy Policy", href: routes.about("privacy-policy") },
            { label: "Terms of Service", href: routes.about("terms-of-service") },
          ],
        },
      ],
    },
  ],
};

/* ---------- Careers dropdown ---------- */

const careersDropdown: NavDropdown = {
  label: "Careers",
  href: routes.careers(),
  width: 300,
  layout: "single",
  alignRight: true,
  columns: [
    {
      groups: [
        {
          heading: "Join SMSG",
          items: [
            { label: "Careers Hub", href: routes.careers() },
            { label: "General Practitioner", href: routes.careersRole("general-practitioner") },
            { label: "Practice Nurse", href: routes.careersRole("practice-nurse") },
            { label: "Patient Support Officer", href: routes.careersRole("patient-support-officer") },
            { label: "Allied Health", href: routes.careersRole("allied-health") },
          ],
        },
      ],
    },
  ],
};

/* ---------- Contact dropdown ---------- */

const contactDropdown: NavDropdown = {
  label: "Contact",
  href: routes.contact(),
  width: 360,
  layout: "contact",
  alignRight: true,
  columns: [
    {
      groups: [
        {
          heading: "Contact SMSG",
          items: clinicList.map((c) => ({
            label: c.shortLabel,
            href: routes.location(c.key),
            sub: `${c.email} · ${c.phone}`,
          })),
        },
      ],
    },
  ],
};

/* ---------- Primary nav export ---------- */

export const primaryNav: NavDropdown[] = [
  careDropdown,
  teamDropdown,
  locationsDropdown,
  patientsDropdown,
  aboutDropdown,
  careersDropdown,
  contactDropdown,
];

/**
 * Sub-brand flyout resolver. SiteHeader looks up flyout items by sub-brand
 * label when rendering the "Specialty Care" section of the Care dropdown.
 */
export function getSubBrandFlyout(label: string): NavItem[] | undefined {
  const sb = subBrandList.find((s) => s.label === label);
  if (!sb) return undefined;
  return flyoutsBySubBrand[sb.key];
}

/* ---------- Footer ---------- */

export type FooterColumn = {
  heading: string;
  items: NavItem[];
};

export const footerColumns: FooterColumn[] = [
  {
    heading: "Locations",
    items: clinicList.map((c) => ({
      label: c.label,
      href: routes.location(c.key),
    })),
  },
  {
    heading: "Care",
    items: subBrandList.map((sb) => ({
      label: sb.label,
      href: routes.subBrand(sb.key),
    })),
  },
  {
    heading: "Patients",
    items: [
      { label: "New patient registration", href: routes.patientInfo("new-patient-registration") },
      { label: "Online booking", href: routes.patientInfo("book-online") },
      { label: "Fees and billing", href: routes.patientInfo("fees-and-billing") },
      { label: "After-hours care", href: routes.patientInfo("after-hours-care") },
      { label: "FAQ", href: routes.patientInfo("faq") },
    ],
  },
  {
    heading: "About",
    items: [
      { label: "Our story", href: routes.about("our-story") },
      { label: "Awards & accreditations", href: routes.about("awards-and-accreditations") },
      { label: "Feedback & complaints", href: routes.about("feedback-and-complaints") },
      { label: "Careers", href: routes.careers() },
    ],
  },
];

/** Re-export for convenience so callers don't need two imports. */
export { SUB_BRANDS };
