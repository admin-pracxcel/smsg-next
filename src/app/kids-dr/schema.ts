/**
 * Kids' Dr hub · JSON-LD schema graph.
 *
 * MedicalClinic (Kids' Dr) + parent MedicalOrganization + FAQPage +
 * BreadcrumbList + WebPage. Physician list driven from practitioner JSON.
 * Keep FAQ answers in sync with the FAQ section in page.tsx.
 */

import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

export function buildKidsDrSchema() {
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "kidsdr")
  );

  const employees = roster
    .filter((p) => p.page_type === "gp" || p.page_type === "specialist")
    .map((p) => ({
      "@type": "Physician" as const,
      name: p.identity.full_name,
      medicalSpecialty: "Pediatrics",
      url: `${SITE}${routes.practitioner(p.slug)}`,
    }));

  const hubUrl = `${SITE}${routes.subBrand("kidsdr")}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "@id": `${hubUrl}#brand`,
      name: "Kids' Dr",
      url: hubUrl,
      description:
        "Paediatric care coordinated across paediatrician, psychology, allied health and school. Three consultant paediatricians and a ten-strong allied team at SMSG.",
      parentOrganization: { "@id": `${SITE}/#org` },
      medicalSpecialty: ["Pediatrics", "Psychology"],
      availableService: [
        { "@type": "MedicalProcedure", name: "ADHD diagnosis and management" },
        { "@type": "MedicalProcedure", name: "Autism assessment" },
        { "@type": "MedicalProcedure", name: "Developmental assessment" },
        { "@type": "MedicalProcedure", name: "Behavioural support" },
        {
          "@type": "MedicalProcedure",
          name: "Learning difficulties and psychometric assessment",
        },
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
          name: "Do I need a referral to see a Kids' Dr paediatrician?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A GP referral is required for the Medicare rebate on paediatric consultations. Our GPs can prepare it, or your child's regular GP can. Some initial screening appointments can be seen without a referral, but the Medicare rebate applies with one in place.",
          },
        },
        {
          "@type": "Question",
          name: "Is it bulk-billed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paediatric consultations are primarily private billing, with Medicare rebates applying where the child is eligible. Assessment appointments (ADHD, autism, developmental, psychometric) may attract additional fees where the assessment is complex or requires cross-disciplinary reporting. For allied health sessions under Chronic Disease Management or Better Access to Mental Health plans, Medicare rebates apply through those plans. Reception confirms the exact arrangement at booking.",
          },
        },
        {
          "@type": "Question",
          name: "How long does an assessment take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Assessment is typically a process across multiple sessions rather than a single appointment. For ADHD and autism, expect an initial paediatric consultation, structured evaluation over subsequent visits, cross-disciplinary input where relevant, and a written report and management plan at the end.",
          },
        },
        {
          "@type": "Question",
          name: "Can I bring my child's teacher's observations?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, please. Teacher input is often central to accurate assessment, particularly for ADHD, behavioural and learning concerns. Standardised questionnaires can be sent to your child's teacher as part of the assessment process.",
          },
        },
        {
          "@type": "Question",
          name: "Which centre should I book at for developmental assessment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paediatric appointments are available at Sans Souci and Earlwood. Sans Souci is the primary base for Dr Moe Moe Thinn and Dr Martina Popelkova, and Earlwood hosts Dr Damian Lees with Dr Popelkova cross-booking there too. Allied support (psychology, counselling, dietetics) is available across the group, including at Bangor for families in the Sutherland Shire.",
          },
        },
        {
          "@type": "Question",
          name: "Can Kids' Dr work with our child's school?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Assessment reports are structured to support conversations with schools. Where school liaison helps, we do it, and we can be a point of contact for school-based accommodations when parents want us to be.",
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
        { "@type": "ListItem", position: 3, name: "Kids' Dr", item: hubUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${hubUrl}#webpage`,
      url: hubUrl,
      name: "Kids' Dr | Paediatric Care, Assessment and Allied Health at SMSG",
      inLanguage: "en-AU",
      about: { "@id": `${hubUrl}#brand` },
      isPartOf: { "@id": `${SITE}/#org` },
    },
  ];
}
