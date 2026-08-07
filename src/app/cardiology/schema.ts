export function buildCardiologySchema() {
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
        "@id": "https://smsg.au/cardiology/#service",
        name: "Cardiology Consultation",
        url: "https://smsg.au/cardiology/",
        description:
          "Cardiology consultations at Excelsia Specialist Centre with Dr Jennifer Law at Earlwood. Assessment and management of heart-related concerns.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/cardiology/#webpage",
        url: "https://smsg.au/cardiology/",
        name: "Cardiology | Excelsia Specialist Centre at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/cardiology/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/cardiology/#breadcrumbs",
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
            name: "Cardiology",
            item: "https://smsg.au/cardiology/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/cardiology/#faq",
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
              text: "Your GP referral, any recent cardiac tests (ECG, echocardiogram, stress test), blood test results, medication list, and any hospital discharge summaries relevant to the reason for referral.",
            },
          },
          {
            "@type": "Question",
            name: "Will I need tests on the day?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sometimes. Basic tests like an ECG may be done in the consultation. More detailed tests (echocardiogram, stress test, monitoring) are typically arranged after the initial consultation.",
            },
          },
          {
            "@type": "Question",
            name: "How often will I need to come back?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That depends on your condition. Some patients need one consultation and go back to GP-led care. Others need ongoing specialist review.",
            },
          },
          {
            "@type": "Question",
            name: "Can Dr Law see me for hypertension only?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, where your GP has referred you because blood pressure control needs specialist input.",
            },
          },
          {
            "@type": "Question",
            name: "What if my symptoms are severe or getting worse?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you're experiencing chest pain, severe shortness of breath, or symptoms of a heart attack, call 000. Cardiology consultations are for non-urgent specialist review, not for acute emergencies.",
            },
          },
        ],
      },
    ],
  };
}
