export function buildGeneralMedicineSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/excelsia-specialist-centre/#brand", name: "Excelsia Specialist Centre", url: "https://smsg.au/excelsia-specialist-centre/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/general-medicine/#service",
        name: "General Medicine Consultation",
        url: "https://smsg.au/general-medicine/",
        description: "General Medicine Physician consultations across Earlwood, Bangor and Sans Souci. Comprehensive assessment for adults whose health picture crosses specialty boundaries.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/general-medicine/#webpage", url: "https://smsg.au/general-medicine/", name: "General Medicine | Excelsia Specialist Centre at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/general-medicine/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/general-medicine/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Excelsia Specialist Centre", item: "https://smsg.au/excelsia-specialist-centre/" },
          { "@type": "ListItem", position: 4, name: "General Medicine", item: "https://smsg.au/general-medicine/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/general-medicine/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to see a GP first?", acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." } },
          { "@type": "Question", name: "How is general medicine different from geriatrics?", acceptedAnswer: { "@type": "Answer", text: "General medicine focuses on complex adult care regardless of age. Geriatrics focuses on the specific medical, cognitive and functional considerations of older adults. Several of our specialists hold both qualifications and can move between the two framings depending on your situation." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your GP referral, all recent hospital discharge summaries, test results, imaging, and a complete list of your current medications including over-the-counter items and supplements." } },
          { "@type": "Question", name: "Will the specialist coordinate with my GP?", acceptedAnswer: { "@type": "Answer", text: "Yes. After each consultation, your specialist sends a letter back to your GP with the assessment and plan. Your GP remains your central point of care." } },
          { "@type": "Question", name: "How long will the first consultation take?", acceptedAnswer: { "@type": "Answer", text: "Longer than a standard single-specialty appointment, because the review is broad. Reception will confirm the expected duration when you book." } },
          { "@type": "Question", name: "Which specialist should I see?", acceptedAnswer: { "@type": "Answer", text: "Your GP will match you to the specialist most appropriate for your situation and the centre closest to you." } },
        ],
      },
    ],
  };
}
