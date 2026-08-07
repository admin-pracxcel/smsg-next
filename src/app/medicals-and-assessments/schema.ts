export function buildMedicalsAssessmentsSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/medicals-and-assessments/#service",
        name: "Medicals and Assessments",
        url: "https://smsg.au/medicals-and-assessments/",
        description: "Pre-employment medicals, driver's licence and commercial medicals, and Veterans' Service (VES) medical reviews across SMSG.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/medicals-and-assessments/#webpage", url: "https://smsg.au/medicals-and-assessments/", name: "Medicals & Assessments | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/medicals-and-assessments/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/medicals-and-assessments/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Medicals & Assessments", item: "https://smsg.au/medicals-and-assessments/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/medicals-and-assessments/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral for a medical assessment?", acceptedAnswer: { "@type": "Answer", text: "No. Medical assessments are booked directly." } },
          { "@type": "Question", name: "How long does a pre-employment medical take?", acceptedAnswer: { "@type": "Answer", text: "Depending on what the employer requires, anywhere from 30 minutes to two hours. Simple medicals with just history and examination are shorter. Assessments including audiometry, spirometry, ECG, blood tests and drug and alcohol screening take longer. Reception will estimate at booking." } },
          { "@type": "Question", name: "What should I bring?", acceptedAnswer: { "@type": "Answer", text: "Your identification, any forms provided by the employer or assessing body, glasses if you wear them, a list of current medications, and hearing aids if you use them." } },
          { "@type": "Question", name: "Can the results be sent directly to my employer?", acceptedAnswer: { "@type": "Answer", text: "With your consent, yes. Your GP or reception can send results directly to the assessing party." } },
          { "@type": "Question", name: "How long does a driver's licence medical take?", acceptedAnswer: { "@type": "Answer", text: "Typically 15 to 30 minutes for a standard medical. Longer if you have specific conditions requiring more detailed assessment." } },
          { "@type": "Question", name: "What happens if I don't pass the medical?", acceptedAnswer: { "@type": "Answer", text: "The GP discusses the reasons with you. For some conditions, treatment or specialist input can restore fitness. For others, restrictions may apply to your licence or role. Your GP will explain your options." } },
          { "@type": "Question", name: "Can I do a medical without an appointment?", acceptedAnswer: { "@type": "Answer", text: "No. Medical assessments require a dedicated booked appointment." } },
        ],
      },
    ],
  };
}
