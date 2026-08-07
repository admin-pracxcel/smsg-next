export function buildNephrologySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/excelsia-specialist-centre/#brand", name: "Excelsia Specialist Centre", url: "https://smsg.au/excelsia-specialist-centre/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/nephrology/#service",
        name: "Nephrology Consultation",
        url: "https://smsg.au/nephrology/",
        description: "Nephrology consultations with Dr Teresa Chang and Dr Christina Lai across Earlwood, Bangor and Sans Souci. Kidney disease assessment, management and monitoring.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/nephrology/#webpage", url: "https://smsg.au/nephrology/", name: "Nephrology | Excelsia Specialist Centre at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/nephrology/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/nephrology/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Excelsia Specialist Centre", item: "https://smsg.au/excelsia-specialist-centre/" },
          { "@type": "ListItem", position: 4, name: "Nephrology", item: "https://smsg.au/nephrology/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/nephrology/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to see a GP first?", acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your GP referral, recent blood and urine test results, any imaging, medication list, and any hospital or previous specialist letters." } },
          { "@type": "Question", name: "Which specialist should I see?", acceptedAnswer: { "@type": "Answer", text: "Your GP will match you to the specialist most appropriate for your situation and the centre closest to you." } },
          { "@type": "Question", name: "How urgent is a nephrology referral?", acceptedAnswer: { "@type": "Answer", text: "Referrals are triaged based on clinical priority. Early nephrology input is important for chronic kidney disease, and your GP indicates the urgency in the referral letter." } },
          { "@type": "Question", name: "Will I need more tests?", acceptedAnswer: { "@type": "Answer", text: "Often. Nephrology relies on blood tests, urine tests and imaging, and additional investigations may be arranged after the initial consultation." } },
          { "@type": "Question", name: "Can Dr Lai see me for general medicine concerns too?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dr Lai is a Nephrologist and General Medicine Physician and can provide broader assessment where relevant." } },
        ],
      },
    ],
  };
}
