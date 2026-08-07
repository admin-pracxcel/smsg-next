/**
 * Excelsia Specialist Centre hub · JSON-LD schema graph.
 * Keep FAQ answers in sync with the FAQ section in page.tsx.
 */

import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

function specialtyFor(roleTitle: string): string {
  const t = roleTitle.toLowerCase();
  if (t.includes("cardio")) return "Cardiovascular";
  if (t.includes("endocrin")) return "Endocrine";
  if (t.includes("gastro")) return "Gastroenterologic";
  if (t.includes("geriatric")) return "Geriatric";
  if (t.includes("haematol") || t.includes("hematol")) return "Hematologic";
  if (t.includes("nephrol") || t.includes("renal")) return "Nephrologic";
  if (t.includes("paediatr") || t.includes("pediatr")) return "Pediatrics";
  if (t.includes("respirat") || t.includes("sleep")) return "PulmonaryMedicine";
  return "InternalMedicine";
}

export function buildExcelsiaSchema() {
  const roster = getAllPractitioners().filter(
    (p) =>
      p.sub_brands.some((s) => s.key === "excelsia") ||
      p.page_type === "specialist"
  );

  const employees = roster.map((p) => ({
    "@type": "Physician" as const,
    name: p.identity.full_name,
    medicalSpecialty: specialtyFor(p.credentials.role_title),
    url: `${SITE}${routes.practitioner(p.slug)}`,
  }));

  const hubUrl = `${SITE}${routes.subBrand("excelsia")}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${hubUrl}#brand`,
      name: "Excelsia Specialist Centre",
      url: hubUrl,
      description:
        "Consultant physicians and surgeons across nine specialties at SMSG. Specialist consultations by GP referral, without the hospital referral queue.",
      parentOrganization: { "@id": `${SITE}/#org` },
      medicalSpecialty: [
        "Cardiovascular",
        "Endocrine",
        "Gastroenterologic",
        "Geriatric",
        "Hematologic",
        "Nephrologic",
        "PulmonaryMedicine",
        "Pediatrics",
        "InternalMedicine",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Cardiology consultation" },
        { "@type": "MedicalProcedure", name: "Endocrinology consultation" },
        { "@type": "MedicalProcedure", name: "Gastroenterology consultation" },
        { "@type": "MedicalProcedure", name: "Geriatrics consultation" },
        { "@type": "MedicalProcedure", name: "Haematology consultation" },
        { "@type": "MedicalProcedure", name: "Nephrology consultation" },
        { "@type": "MedicalProcedure", name: "Respiratory and sleep medicine consultation" },
        { "@type": "MedicalProcedure", name: "Paediatric medicine consultation" },
        { "@type": "MedicalProcedure", name: "General medicine consultation" },
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
            text: "Yes. A GP referral is required for the Medicare rebate on specialist consultations. Your usual GP or one of ours can prepare it. Without a valid referral in place, the consultation is fully private.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the wait?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Substantially shorter than a hospital outpatient list, typically. Reception can give you specific wait times for your chosen specialist when you book. If wait matters more than seeing a particular specialist, reception can suggest the shortest wait within the specialty.",
          },
        },
        {
          "@type": "Question",
          name: "Which specialties aren't at Excelsia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Excelsia currently covers cardiology, endocrinology, gastroenterology, geriatrics, haematology, nephrology, respiratory and sleep medicine, paediatric medicine, and general medicine. If your GP is referring you to a specialty not listed, they will refer to an appropriate external specialist. Reception can help shortlist external options if you'd like.",
          },
        },
        {
          "@type": "Question",
          name: "Do the specialists write back to my GP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. After the consultation, the specialist writes back to your GP with the assessment, plan, and any recommended follow-up. You keep your GP as the coordinator of your overall care.",
          },
        },
        {
          "@type": "Question",
          name: "What does a specialist consultation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Specialist consultations at Excelsia are private billing, with a Medicare rebate applying when a valid GP referral is in place. Fees vary by specialist and by the complexity of the consultation. Reception confirms the specific fee and expected out-of-pocket for your chosen specialist when you book.",
          },
        },
        {
          "@type": "Question",
          name: "Where do I book?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depends on the specialist. The Where Excelsia operates section lists who consults at which centre. Reception can also help match if you're not sure.",
          },
        },
        {
          "@type": "Question",
          name: "Can I be referred from a GP outside SMSG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Excelsia takes referrals from any GP in Sydney.",
          },
        },
        {
          "@type": "Question",
          name: "What if my consultation needs onsite tests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Where an ECG, spirometry, or echocardiogram with stress testing is required, the specialist can book you into the Diagnostics service at Earlwood.",
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
          name: "Excelsia Specialist Centre",
          item: hubUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: "Excelsia Specialist Centre | Consultant Physicians and Surgeons at SMSG",
      inLanguage: "en-AU",
      about: { "@id": `${hubUrl}#brand` },
      isPartOf: { "@id": `${SITE}/#org` },
    },
  ];
}
