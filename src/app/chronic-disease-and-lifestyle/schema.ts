export function buildChronicDiseaseSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/chronic-disease-and-lifestyle/#service",
        name: "Chronic Disease and Lifestyle Care",
        url: "https://smsg.au/chronic-disease-and-lifestyle/",
        description: "Chronic Disease Management Plans, smoking cessation, diabetes and asthma management, and medications review across all three SMSG centres.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/chronic-disease-and-lifestyle/#webpage", url: "https://smsg.au/chronic-disease-and-lifestyle/", name: "Chronic Disease & Lifestyle | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/chronic-disease-and-lifestyle/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/chronic-disease-and-lifestyle/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Chronic Disease & Lifestyle", item: "https://smsg.au/chronic-disease-and-lifestyle/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/chronic-disease-and-lifestyle/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral for a Chronic Disease Management Plan?", acceptedAnswer: { "@type": "Answer", text: "No. Plans are prepared by your GP directly. You need to have an eligible condition and typically an established relationship with the practice." } },
          { "@type": "Question", name: "How often is the plan reviewed?", acceptedAnswer: { "@type": "Answer", text: "Plans are reviewed at defined intervals, typically every 3 to 6 months, depending on your condition." } },
          { "@type": "Question", name: "Can I access allied health without a CDM Plan?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can see allied health practitioners privately at any time. A CDM Plan opens access to bulk-billed sessions under Medicare." } },
          { "@type": "Question", name: "What's the difference between a CDM Plan and a Team Care Arrangement?", acceptedAnswer: { "@type": "Answer", text: "A GP Management Plan (part of a CDM Plan) is prepared by your GP. A Team Care Arrangement is prepared when other providers are involved in your care. Both are usually done together for patients accessing bulk-billed allied health." } },
          { "@type": "Question", name: "Can I get help to quit smoking without a CDM Plan?", acceptedAnswer: { "@type": "Answer", text: "Yes. Smoking cessation support can be provided in a standard consultation with your GP, and Quitline is a free national resource on 13 78 48." } },
          { "@type": "Question", name: "Who prepares a Home Medicines Review?", acceptedAnswer: { "@type": "Answer", text: "Your GP refers to an accredited pharmacist. The pharmacist visits you at home and prepares a report for your GP to act on." } },
        ],
      },
    ],
  };
}
