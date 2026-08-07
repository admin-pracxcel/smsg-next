export function buildDieteticsSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/dietetics/#service",
        name: "Dietetics",
        url: "https://smsg.au/dietetics/",
        description: "Dietetics for children and adults across Earlwood, Bangor and Sans Souci. Two Accredited Practising Dietitians working across paediatric and adult nutrition.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/dietetics/#webpage", url: "https://smsg.au/dietetics/", name: "Dietetics | Allied Health at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/dietetics/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/dietetics/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Allied Health", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Dietetics", item: "https://smsg.au/dietetics/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/dietetics/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Dietetics can be booked directly. A GP referral under a Chronic Disease Management Plan is required to access the Medicare rebate." } },
          { "@type": "Question", name: "How long is a session?", acceptedAnswer: { "@type": "Answer", text: "Initial appointments are typically 45 to 60 minutes. Follow-up appointments are usually 30 to 45 minutes." } },
          { "@type": "Question", name: "How many sessions will I need?", acceptedAnswer: { "@type": "Answer", text: "That varies substantially by concern. Your dietitian discusses expected timeframes at the first session." } },
          { "@type": "Question", name: "Do dietitians provide meal plans?", acceptedAnswer: { "@type": "Answer", text: "Sometimes. Meal plans work for some patients and not others. Dietitians typically focus on strategies you can adapt over time rather than fixed plans that may not fit your life beyond the short term." } },
          { "@type": "Question", name: "Are dietitians the same as nutritionists?", acceptedAnswer: { "@type": "Answer", text: "No. In Australia, 'dietitian' (specifically Accredited Practising Dietitian) is a regulated title requiring specific qualifications. 'Nutritionist' is not regulated and covers a wider range of training. Both of our dietitians are Accredited Practising Dietitians." } },
          { "@type": "Question", name: "Can dietitians work with eating disorders?", acceptedAnswer: { "@type": "Answer", text: "Yes. Dietetics for eating disorders is a specialised area and is coordinated with psychology and medical review. Discuss with reception whether the dietitians on our team are the right fit for your specific presentation." } },
          { "@type": "Question", name: "Can I use my NDIS plan?", acceptedAnswer: { "@type": "Answer", text: "Yes, where dietetics is included in your plan. Discuss at booking." } },
        ],
      },
    ],
  };
}
