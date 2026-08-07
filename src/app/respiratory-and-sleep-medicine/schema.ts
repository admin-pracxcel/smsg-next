export function buildRespiratorySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/excelsia-specialist-centre/#brand", name: "Excelsia Specialist Centre", url: "https://smsg.au/excelsia-specialist-centre/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/respiratory-and-sleep-medicine/#service",
        name: "Respiratory and Sleep Medicine Consultation",
        url: "https://smsg.au/respiratory-and-sleep-medicine/",
        description: "Respiratory and sleep medicine consultations with Dr Clarissa Susanto at Earlwood and Bangor. Asthma, COPD, sleep apnoea, and other respiratory or sleep concerns.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/respiratory-and-sleep-medicine/#webpage", url: "https://smsg.au/respiratory-and-sleep-medicine/", name: "Respiratory & Sleep Medicine | Excelsia Specialist Centre at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/respiratory-and-sleep-medicine/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/respiratory-and-sleep-medicine/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Excelsia Specialist Centre", item: "https://smsg.au/excelsia-specialist-centre/" },
          { "@type": "ListItem", position: 4, name: "Respiratory & Sleep Medicine", item: "https://smsg.au/respiratory-and-sleep-medicine/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/respiratory-and-sleep-medicine/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to see a GP first?", acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your GP referral, any recent test results (spirometry, chest imaging, sleep studies), medication list including inhalers, and any hospital or previous specialist letters." } },
          { "@type": "Question", name: "Will I need a sleep study?", acceptedAnswer: { "@type": "Answer", text: "Sometimes. If your referral is about a suspected sleep disorder, a sleep study is often part of the assessment. Dr Susanto will discuss what type of study is appropriate for you." } },
          { "@type": "Question", name: "Will I need spirometry?", acceptedAnswer: { "@type": "Answer", text: "Often. Spirometry is a common test for respiratory concerns. It may be done in the consultation or arranged for a separate appointment." } },
          { "@type": "Question", name: "Can Dr Susanto see me for asthma?", acceptedAnswer: { "@type": "Answer", text: "Yes. Asthma is a substantial part of respiratory medicine practice, particularly asthma that is difficult to control on standard treatment." } },
          { "@type": "Question", name: "Can Dr Susanto see me for snoring?", acceptedAnswer: { "@type": "Answer", text: "Where snoring is affecting your daytime function or where you or your bed partner have noticed pauses in breathing, yes. Snoring alone without other features may not need specialist review; your GP will help decide." } },
        ],
      },
    ],
  };
}
