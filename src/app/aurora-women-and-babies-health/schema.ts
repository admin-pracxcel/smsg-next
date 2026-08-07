/**
 * Aurora hub · JSON-LD schema graph.
 *
 * MedicalClinic (Aurora) + parent MedicalOrganization + FAQPage +
 * BreadcrumbList + WebPage. Physician list is driven from the practitioner
 * JSON so it stays in sync with the roster shown on the page.
 *
 * Keep FAQ answers in sync with `AuroraFAQ.tsx`.
 */

import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

const specialtyForPageType: Record<string, string> = {
  gp: "GeneralPractice",
  specialist: "Endocrine",
  allied_health: "Psychology",
  cosmetic: "CosmeticProcedure",
};

// A rough map from the practitioner's role_title to a schema medicalSpecialty
// so specialists get their real specialty rather than the page_type default.
function specialtyFor(roleTitle: string, pageType: string): string {
  const t = roleTitle.toLowerCase();
  if (t.includes("obstetric")) return "ObstetricsAndGynecology";
  if (t.includes("endocrin")) return "Endocrine";
  if (t.includes("gynaecolog")) return "ObstetricsAndGynecology";
  if (t.includes("paediatr")) return "Pediatrics";
  if (t.includes("cardio")) return "Cardiovascular";
  return specialtyForPageType[pageType] ?? "GeneralPractice";
}

export function buildAuroraSchema() {
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "aurora")
  );

  const employees = roster
    .filter((p) => p.page_type === "gp" || p.page_type === "specialist")
    .map((p) => ({
      "@type": "Physician" as const,
      name: p.identity.full_name,
      medicalSpecialty: specialtyFor(
        p.credentials.role_title,
        p.page_type
      ),
      url: `${SITE}${routes.practitioner(p.slug)}`,
    }));

  const hubUrl = `${SITE}${routes.subBrand("aurora")}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${hubUrl}#brand`,
      name: "Aurora Women & Babies Health",
      alternateName: "Aurora Women and Babies",
      url: hubUrl,
      description:
        "Women's healthcare that grows with you, from your first period through motherhood, midlife and beyond. Ten female clinicians consulting across Earlwood, Bangor and Sans Souci.",
      parentOrganization: { "@id": `${SITE}/#org` },
      medicalSpecialty: [
        "ObstetricsAndGynecology",
        "Endocrine",
        "GeneralPractice",
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "Contraception and family planning" },
        { "@type": "MedicalProcedure", name: "Hormonal IUD insertion and removal" },
        { "@type": "MedicalProcedure", name: "Contraceptive implant insertion" },
        { "@type": "MedicalProcedure", name: "Antenatal shared care" },
        { "@type": "MedicalProcedure", name: "Cervical screening" },
        { "@type": "MedicalProcedure", name: "Menopause support" },
        { "@type": "MedicalProcedure", name: "Breastfeeding and lactation support" },
        { "@type": "MedicalProcedure", name: "Perinatal mental health care" },
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
          name: "Do I need a referral to see an Aurora clinician?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For anything within general practice, including contraception, cervical screening, antenatal shared care and menopause support, you don't need a referral. For specialist consultations with our obstetrician-gynaecologist or endocrinologist, a GP referral means you can access the Medicare rebate.",
          },
        },
        {
          "@type": "Question",
          name: "Is it bulk-billed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aurora consultations are private billing across the board, with two exceptions: routine baby immunisations and general consults for babies are bulk billed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I request a female practitioner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aurora is entirely staffed by female clinicians, so any Aurora appointment will be with a female doctor.",
          },
        },
        {
          "@type": "Question",
          name: "Which centre should I book at?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The one closest to you, unless you're seeing a specialist who only visits one location. Our obstetrician-gynaecologist and endocrinologist have set centres, so the location guide is a good place to check. Reception can help match you if you're not sure.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring my partner or a support person?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely, and we encourage it for pregnancy visits, contraception discussions and menopause consultations.",
          },
        },
        {
          "@type": "Question",
          name: "Which hospitals do you offer shared care with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bankstown-Lidcombe Hospital, St George Hospital, Royal Prince Alfred Hospital, Royal Hospital for Women and The Sutherland Hospital.",
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "SMSG",
          item: `${SITE}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Care",
          item: `${SITE}/#care`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Aurora Women & Babies Health",
          item: hubUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: "Aurora Women & Babies Health | Women's Health, Pregnancy and Contraception at SMSG",
      inLanguage: "en-AU",
      about: { "@id": `${hubUrl}#brand` },
      isPartOf: { "@id": `${SITE}/#org` },
    },
  ];
}
