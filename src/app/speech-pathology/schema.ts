export function buildSpeechPathologySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/speech-pathology/#service",
        name: "Speech Pathology",
        url: "https://smsg.au/speech-pathology/",
        description: "Speech pathology for children and adults across Earlwood and Sans Souci. Sarah Impellizzeri consults through Kids' Dr, with visiting speech therapy also available.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/speech-pathology/#webpage", url: "https://smsg.au/speech-pathology/", name: "Speech Pathology | Allied Health at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/speech-pathology/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/speech-pathology/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Allied Health", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Speech Pathology", item: "https://smsg.au/speech-pathology/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/speech-pathology/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Speech pathology can be booked directly. A GP referral under a Chronic Disease Management Plan is required to access the Medicare rebate." } },
          { "@type": "Question", name: "How long is a session?", acceptedAnswer: { "@type": "Answer", text: "Sessions are typically 45 to 60 minutes for assessment and 30 to 45 minutes for follow-up." } },
          { "@type": "Question", name: "How many sessions will my child need?", acceptedAnswer: { "@type": "Answer", text: "That varies significantly by the concern. Your speech pathologist will discuss expectations at the first session." } },
          { "@type": "Question", name: "Can Sarah see adults?", acceptedAnswer: { "@type": "Answer", text: "Sarah's primary focus is paediatric through Kids' Dr. Reception can confirm current availability for adult patients." } },
          { "@type": "Question", name: "What's the difference between Sarah and TLC?", acceptedAnswer: { "@type": "Answer", text: "Sarah is part of the SMSG allied health team, working within Kids' Dr. TLC is an external speech pathology service that rents rooms at SMSG. Both are qualified speech pathology services; the arrangements and fee structures differ." } },
          { "@type": "Question", name: "Can I use my NDIS plan?", acceptedAnswer: { "@type": "Answer", text: "Yes, where speech pathology is included in your plan. Discuss at booking." } },
          { "@type": "Question", name: "Is speech pathology different from speech therapy?", acceptedAnswer: { "@type": "Answer", text: "The two terms are used interchangeably in Australia. 'Speech pathology' is the term used by the professional body (Speech Pathology Australia); 'speech therapy' is commonly used in everyday language." } },
        ],
      },
    ],
  };
}
