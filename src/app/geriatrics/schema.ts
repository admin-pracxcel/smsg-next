export function buildGeriatricsSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/excelsia-specialist-centre/#brand", name: "Excelsia Specialist Centre", url: "https://smsg.au/excelsia-specialist-centre/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/geriatrics/#service",
        name: "Geriatrics Consultation",
        url: "https://smsg.au/geriatrics/",
        description: "Geriatrician consultations across Earlwood, Bangor and Sans Souci. Comprehensive assessment for older adults with cognitive, functional or complex medical concerns.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/geriatrics/#webpage", url: "https://smsg.au/geriatrics/", name: "Geriatrics | Excelsia Specialist Centre at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/geriatrics/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/geriatrics/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Excelsia Specialist Centre", item: "https://smsg.au/excelsia-specialist-centre/" },
          { "@type": "ListItem", position: 4, name: "Geriatrics", item: "https://smsg.au/geriatrics/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/geriatrics/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to see a GP first?", acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." } },
          { "@type": "Question", name: "Should a family member come with me?", acceptedAnswer: { "@type": "Answer", text: "It often helps, particularly where cognitive concerns are part of the reason for referral. Your geriatrician appreciates hearing from someone who knows you well." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your GP referral, all recent hospital discharge summaries, test results and imaging, and a complete list of your current medications including over-the-counter items and supplements." } },
          { "@type": "Question", name: "Will the geriatrician coordinate with my GP?", acceptedAnswer: { "@type": "Answer", text: "Yes. After each consultation, your geriatrician sends a letter back to your GP with the assessment and plan. Your GP remains your central point of care." } },
          { "@type": "Question", name: "Is one consultation enough?", acceptedAnswer: { "@type": "Answer", text: "For some patients, yes. For others, particularly where cognitive change or complex chronic disease is being managed, ongoing specialist review is helpful." } },
          { "@type": "Question", name: "Which specialist should I see?", acceptedAnswer: { "@type": "Answer", text: "Your GP will match you to the geriatrician most appropriate for your situation and the centre closest to you." } },
        ],
      },
    ],
  };
}
