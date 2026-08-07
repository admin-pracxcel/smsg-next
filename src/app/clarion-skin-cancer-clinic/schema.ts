/**
 * Clarion Skin Cancer Clinic hub · JSON-LD schema graph.
 * Keep FAQ answers in sync with the FAQ section in page.tsx.
 */

import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

export function buildClarionSchema() {
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "clarion")
  );

  const employees = roster.map((p) => ({
    "@type": "Physician" as const,
    name: p.identity.full_name,
    medicalSpecialty: "Dermatology",
    url: `${SITE}${routes.practitioner(p.slug)}`,
  }));

  const hubUrl = `${SITE}${routes.subBrand("clarion")}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${hubUrl}#brand`,
      name: "Clarion Skin Cancer Clinic",
      url: hubUrl,
      description:
        "Skin checks, dermoscopy and excision procedures delivered by independent GPs with dedicated skin cancer medicine training. Direct clinical link to the Melanoma Institute of Australia.",
      parentOrganization: { "@id": `${SITE}/#org` },
      medicalSpecialty: ["Dermatology", "GeneralPractice"],
      availableService: [
        { "@type": "MedicalProcedure", name: "Full-body skin check" },
        { "@type": "MedicalProcedure", name: "Dermoscopy" },
        { "@type": "MedicalProcedure", name: "Skin lesion excision" },
        { "@type": "MedicalProcedure", name: "Skin cancer awareness education" },
      ],
      employee: employees,
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "@id": `${SITE}/#org`,
      name: "Specialist Medical Services Group",
      alternateName: "SMSG",
      url: `${SITE}/`,
      foundingDate: "2014",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${hubUrl}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a referral for a skin check?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You don't need a referral to see a Clarion clinician for a skin check.",
          },
        },
        {
          "@type": "Question",
          name: "Is it bulk-billed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Skin checks are private-billed with a Medicare rebate applying to the consultation. The exact fee and out-of-pocket vary by clinician and appointment length. For patients with a Health Care Card or in specific circumstances, bulk-billing may be available at the clinician's discretion. Reception confirms fees at booking.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if a lesion needs to be removed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The excision is booked as a separate procedural appointment. The removed tissue is sent to pathology for confirmation of diagnosis. Where the excision is complex or the location is sensitive, Dr Moore's Melanoma Institute of Australia affiliation supports coordinated closure or onward referral to a plastic surgeon or dermatologist.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I get a skin check?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your skin type, family history, personal history of skin cancer, and previous findings. Your Clarion clinician will recommend a review interval at your first visit, and for most people this is annual or half-yearly.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get mole mapping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Systematic full-body imaging alongside individual review is discussed at your initial appointment and coordinated on a case-by-case basis.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to prepare for a skin check?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Come without makeup on any areas you'd like reviewed, remove nail polish if you have any concerns about nail beds, and wear underwear you're comfortable being examined in.",
          },
        },
        {
          "@type": "Question",
          name: "Which centre has the fastest appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Earlwood typically has the deepest availability given the size of the Clarion team there, though Bangor and Sans Souci often have shorter waits mid-week. Reception can check across the three when you call.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "SMSG", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Care", item: `${SITE}/#care` },
        {
          "@type": "ListItem",
          position: 3,
          name: "Clarion Skin Cancer Clinic",
          item: hubUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: "Clarion Skin Cancer Clinic | Full-Body Skin Checks, Dermoscopy and Excision at SMSG",
      inLanguage: "en-AU",
      about: { "@id": `${hubUrl}#brand` },
      isPartOf: { "@id": `${SITE}/#org` },
    },
  ];
}
