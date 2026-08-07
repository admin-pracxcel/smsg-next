export function buildDevelopmentalAssessmentSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://smsg.au/kids-dr/#brand",
        name: "Kids' Dr",
        url: "https://smsg.au/kids-dr/",
        parentOrganization: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/developmental-assessment/#service",
        name: "Developmental Assessment",
        url: "https://smsg.au/developmental-assessment/",
        description:
          "Developmental assessment for children whose progress in one or more areas is different from expected. Paediatrician-led at Kids' Dr, based at Sans Souci with Dr Lees at Earlwood.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/developmental-assessment/#webpage",
        url: "https://smsg.au/developmental-assessment/",
        name: "Developmental Assessment | Kids' Dr at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/developmental-assessment/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/developmental-assessment/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Kids' Dr",
            item: "https://smsg.au/kids-dr/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Developmental Assessment",
            item: "https://smsg.au/developmental-assessment/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/developmental-assessment/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A GP referral is required for the Medicare rebate to apply.",
            },
          },
          {
            "@type": "Question",
            name: "Is my concern serious enough to book?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you're wondering, it's worth asking. Paediatricians see the full range from mild questions to significant concerns. Early input often helps regardless of the outcome of assessment.",
            },
          },
          {
            "@type": "Question",
            name: "How is developmental assessment different from ADHD or autism assessment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Developmental assessment is broader and can be a starting point. Where a specific condition (like ADHD or autism) emerges as the picture, the appropriate condition-specific pathway begins.",
            },
          },
          {
            "@type": "Question",
            name: "Will my child need multiple appointments?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sometimes. Your paediatrician will discuss what's needed after the first appointment.",
            },
          },
          {
            "@type": "Question",
            name: "Can Kids' Dr work with my child's school or preschool?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, with your consent. School and preschool information often adds valuable context.",
            },
          },
          {
            "@type": "Question",
            name: "What if my child has been assessed before?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bring existing reports. Kids' Dr can build on previous work rather than starting from scratch.",
            },
          },
        ],
      },
    ],
  };
}
