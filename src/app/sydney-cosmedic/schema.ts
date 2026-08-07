/**
 * Sydney Cosmedic hub · JSON-LD schema graph.
 *
 * COMPLIANCE NOTE: no Schedule 4 brand names appear anywhere in this file,
 * only category descriptions. Do not add drug trade names.
 * Keep FAQ answers in sync with the FAQ section in page.tsx.
 */

import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

export function buildSydneyCosmedicSchema() {
  const roster = getAllPractitioners().filter(
    (p) =>
      p.sub_brands.some((s) => s.key === "sydneycosmedic") ||
      p.page_type === "cosmetic"
  );

  const employees = roster.map((p) => ({
    "@type": "Physician" as const,
    name: p.identity.full_name,
    medicalSpecialty: "CosmeticProcedure",
    url: `${SITE}${routes.practitioner(p.slug)}`,
  }));

  const hubUrl = `${SITE}${routes.subBrand("sydneycosmedic")}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${hubUrl}#brand`,
      name: "Sydney Cosmedic",
      url: hubUrl,
      description:
        "Non-surgical cosmetic care delivered by medically qualified independent practitioners. In-person consultation before every procedure. Adult patients only.",
      parentOrganization: { "@id": `${SITE}/#org` },
      medicalSpecialty: "CosmeticProcedure",
      availableService: [
        { "@type": "MedicalProcedure", name: "Anti-wrinkle treatments" },
        { "@type": "MedicalProcedure", name: "Dermal fillers and facial volumisation" },
        { "@type": "MedicalProcedure", name: "Non-surgical skin treatments" },
        { "@type": "MedicalProcedure", name: "Cosmetic consultation" },
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
          name: "Do I need a referral?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. You don't need a referral to see a Sydney Cosmedic practitioner. Every treatment requires an in-person consultation with your treating practitioner first.",
          },
        },
        {
          "@type": "Question",
          name: "Is it bulk-billed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Cosmetic services are privately billed. Medicare rebates do not apply to cosmetic services. Fees vary by treatment and are confirmed at the consultation once the practitioner has examined the treatment area and determined what treatment is clinically appropriate.",
          },
        },
        {
          "@type": "Question",
          name: "Can you tell me what a specific product costs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reception can give you a general fee framework at booking. Specific quotes are given at the consultation, after the practitioner has examined the area and determined what treatment (if any) is appropriate for you.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a treatment without a consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The consultation is not optional, and it is not a phone call. There are questions that cannot be answered until the practitioner has met you in person and examined the treatment area.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer treatments for patients under 18?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Sydney Cosmedic does not provide non-surgical cosmetic procedures to patients under 18 in any circumstance.",
          },
        },
        {
          "@type": "Question",
          name: "Will I see before-and-after photos on the website or during consultation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No before-and-after imagery is displayed on the website. During your consultation, the practitioner will discuss realistic outcomes for your specific case, in words rather than through the imagery of other patients.",
          },
        },
        {
          "@type": "Question",
          name: "What if I've had treatments elsewhere and want to continue with SMSG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Please mention this at the consultation. Prior treatment history, including which category of product you have had and when, is important for planning your care and avoiding unwanted interactions.",
          },
        },
        {
          "@type": "Question",
          name: "Which practitioner should I see?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If you have a preference, book with the practitioner directly. If you don't, reception can match you to the shortest wait, and the practitioner will confirm at the consultation that they are the right fit for what you're looking for.",
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
        { "@type": "ListItem", position: 3, name: "Sydney Cosmedic", item: hubUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: "Sydney Cosmedic | Non-Surgical Cosmetic Care by Medically Qualified Practitioners at SMSG",
      inLanguage: "en-AU",
      about: { "@id": `${hubUrl}#brand` },
      isPartOf: { "@id": `${SITE}/#org` },
    },
  ];
}
