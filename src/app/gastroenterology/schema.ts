export function buildGastroenterologySchema() {
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
        "@id": "https://smsg.au/gastroenterology/#service",
        name: "Gastroenterology Consultation",
        url: "https://smsg.au/gastroenterology/",
        description:
          "Gastroenterology consultations with Dr Shaleen Sivanes at Earlwood. Assessment of digestive tract, liver and gallbladder concerns.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/gastroenterology/#webpage",
        url: "https://smsg.au/gastroenterology/",
        name: "Gastroenterology | Excelsia Specialist Centre at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/gastroenterology/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/gastroenterology/#breadcrumbs",
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
            name: "Gastroenterology",
            item: "https://smsg.au/gastroenterology/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/gastroenterology/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need to see a GP first?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." },
          },
          {
            "@type": "Question",
            name: "Will I need a colonoscopy or endoscopy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That depends on your specific situation. Not every consultation leads to a procedure. Where investigation is needed, Dr Sivanes will discuss what's involved.",
            },
          },
          {
            "@type": "Question",
            name: "What should I bring?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your GP referral, recent test results, medication list, and any hospital or previous specialist letters.",
            },
          },
          {
            "@type": "Question",
            name: "Can Dr Sivanes see me for liver concerns?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Liver assessment, including liver function abnormalities, fatty liver and hepatitis, is part of gastroenterology practice.",
            },
          },
          {
            "@type": "Question",
            name: "How urgent is a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Referrals are triaged based on clinical priority. Your GP indicates urgency in the referral letter.",
            },
          },
        ],
      },
    ],
  };
}
