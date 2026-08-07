export function buildHaematologySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/excelsia-specialist-centre/#brand", name: "Excelsia Specialist Centre", url: "https://smsg.au/excelsia-specialist-centre/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/haematology/#service",
        name: "Haematology Consultation",
        url: "https://smsg.au/haematology/",
        description: "Haematology consultations with Dr Qin Liu at Earlwood. Assessment and management of blood disorders, anaemia, clotting concerns, and blood cancers.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/haematology/#webpage", url: "https://smsg.au/haematology/", name: "Haematology | Excelsia Specialist Centre at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/haematology/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/haematology/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Excelsia Specialist Centre", item: "https://smsg.au/excelsia-specialist-centre/" },
          { "@type": "ListItem", position: 4, name: "Haematology", item: "https://smsg.au/haematology/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/haematology/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to see a GP first?", acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your GP referral, recent blood test results, any imaging, medication list, and any hospital or previous specialist letters." } },
          { "@type": "Question", name: "Will I need more tests?", acceptedAnswer: { "@type": "Answer", text: "Often. Haematology relies heavily on blood tests, and additional investigations (imaging, sometimes bone marrow assessment) may be arranged after the initial consultation." } },
          { "@type": "Question", name: "Can Dr Liu see me for iron deficiency?", acceptedAnswer: { "@type": "Answer", text: "Yes. Persistent or unexplained iron deficiency is a common reason for haematology referral." } },
          { "@type": "Question", name: "How urgent is a referral?", acceptedAnswer: { "@type": "Answer", text: "Referrals are triaged based on clinical priority indicated by your GP." } },
        ],
      },
    ],
  };
}
