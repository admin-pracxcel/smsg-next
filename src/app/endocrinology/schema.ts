export function buildEndocrinologySchema() {
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
        "@id": "https://smsg.au/excelsia-specialist-centre/#brand",
        name: "Excelsia Specialist Centre",
        url: "https://smsg.au/excelsia-specialist-centre/",
        parentOrganization: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/endocrinology/#service",
        name: "Endocrinology Consultation",
        url: "https://smsg.au/endocrinology/",
        description:
          "Endocrinology consultations with Dr Thaw Dar Htet at Earlwood and Bangor. Diabetes, thyroid, PCOS, weight management, bone health and reproductive endocrinology.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/endocrinology/#webpage",
        url: "https://smsg.au/endocrinology/",
        name: "Endocrinology | Excelsia Specialist Centre at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/endocrinology/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/endocrinology/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Excelsia Specialist Centre",
            item: "https://smsg.au/excelsia-specialist-centre/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Endocrinology",
            item: "https://smsg.au/endocrinology/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/endocrinology/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need to see a GP first?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." },
          },
          {
            "@type": "Question",
            name: "What should I bring?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your GP referral, recent blood tests and imaging results, medication list, and any hospital or previous specialist letters relevant to the reason for referral.",
            },
          },
          {
            "@type": "Question",
            name: "Will I need tests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Often. Endocrinology relies heavily on blood tests, and additional imaging or dynamic testing may be arranged after the initial consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Can Dr Htet see me for weight management?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Dr Htet is a SCOPE Certified Weight Management Specialist and manages weight and metabolic health as a substantial part of her practice.",
            },
          },
          {
            "@type": "Question",
            name: "Can Dr Htet see me for PCOS?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. PCOS is one of Dr Htet's clinical interests, including fertility-related and metabolic aspects.",
            },
          },
          {
            "@type": "Question",
            name: "Can Dr Htet see me for menopause-related concerns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dr Htet takes referrals from Aurora GPs where menopause management involves complex hormonal, metabolic or bone health considerations. Your GP will discuss whether specialist referral is appropriate for you.",
            },
          },
        ],
      },
    ],
  };
}
