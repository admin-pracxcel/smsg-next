export function buildPaediatricMedicineSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/excelsia-specialist-centre/#brand", name: "Excelsia Specialist Centre", url: "https://smsg.au/excelsia-specialist-centre/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/paediatric-medicine/#service",
        name: "Paediatric Medicine Consultation",
        url: "https://smsg.au/paediatric-medicine/",
        description: "Paediatric medicine consultations with Dr Damian Lees, Dr Martina Popelkova and Dr Moe Moe Thinn across Earlwood and Sans Souci. General and developmental paediatrics.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/paediatric-medicine/#webpage", url: "https://smsg.au/paediatric-medicine/", name: "Paediatric Medicine | Excelsia Specialist Centre at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/paediatric-medicine/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/paediatric-medicine/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Excelsia Specialist Centre", item: "https://smsg.au/excelsia-specialist-centre/" },
          { "@type": "ListItem", position: 4, name: "Paediatric Medicine", item: "https://smsg.au/paediatric-medicine/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/paediatric-medicine/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to see a GP first?", acceptedAnswer: { "@type": "Answer", text: "Yes. A GP referral is required for the Medicare rebate to apply to paediatric consultations." } },
          { "@type": "Question", name: "Should I book with Excelsia or Kids' Dr?", acceptedAnswer: { "@type": "Answer", text: "For general paediatric review, either. For care that involves developmental assessment, behavioural concerns, psychometric assessment or coordinated allied health, Kids' Dr is the sub-brand designed around that. If you're unsure, reception can guide you." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your GP referral, your child's blue book if under school age, any recent test results, previous specialist letters, and a list of current medications." } },
          { "@type": "Question", name: "Will the paediatrician communicate with my GP?", acceptedAnswer: { "@type": "Answer", text: "Yes. After each consultation, the paediatrician sends a letter back to your GP with the assessment and plan." } },
          { "@type": "Question", name: "Can the paediatrician communicate with my child's school?", acceptedAnswer: { "@type": "Answer", text: "Yes, with your consent." } },
          { "@type": "Question", name: "What ages do paediatricians see?", acceptedAnswer: { "@type": "Answer", text: "From birth through adolescence. Older adolescents may transition to adult care, and your paediatrician will discuss timing when relevant." } },
        ],
      },
    ],
  };
}
