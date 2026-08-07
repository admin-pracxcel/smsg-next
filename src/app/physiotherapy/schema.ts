export function buildPhysiotherapySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/physiotherapy/#service",
        name: "Physiotherapy",
        url: "https://smsg.au/physiotherapy/",
        description: "Physiotherapy for adults and children across Earlwood and Sans Souci. Musculoskeletal assessment, injury rehabilitation, and paediatric physiotherapy through Kids' Dr.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/physiotherapy/#webpage", url: "https://smsg.au/physiotherapy/", name: "Physiotherapy | Allied Health at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/physiotherapy/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/physiotherapy/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Allied Health", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Physiotherapy", item: "https://smsg.au/physiotherapy/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/physiotherapy/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral for physiotherapy?", acceptedAnswer: { "@type": "Answer", text: "No. Physiotherapy can be booked directly. A GP referral under a Chronic Disease Management Plan is required if you want to access the Medicare rebate for eligible sessions." } },
          { "@type": "Question", name: "How long is a physiotherapy appointment?", acceptedAnswer: { "@type": "Answer", text: "Initial appointments are typically 30 to 45 minutes. Follow-up appointments are usually 20 to 30 minutes." } },
          { "@type": "Question", name: "How many sessions will I need?", acceptedAnswer: { "@type": "Answer", text: "Depends on the condition. Your physiotherapist will discuss expected timeframes at the first appointment." } },
          { "@type": "Question", name: "Can I claim on my private health fund?", acceptedAnswer: { "@type": "Answer", text: "Yes, if you have physiotherapy extras cover. Ask reception to process the claim on the day using your health fund card." } },
          { "@type": "Question", name: "Is Daniel Tran a paediatric physiotherapist only?", acceptedAnswer: { "@type": "Answer", text: "Daniel has a paediatric focus through Kids' Dr, and also sees adults. Reception can confirm what he's currently taking bookings for." } },
          { "@type": "Question", name: "Do you do WorkCover or CTP physiotherapy?", acceptedAnswer: { "@type": "Answer", text: "These claims are typically handled through our external partner Synergy Medical. Mention the claim type at booking so reception can direct you appropriately." } },
        ],
      },
    ],
  };
}
