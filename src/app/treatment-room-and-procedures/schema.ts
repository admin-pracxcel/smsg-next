export function buildTreatmentRoomSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/treatment-room-and-procedures/#service",
        name: "Treatment Room and Procedures",
        url: "https://smsg.au/treatment-room-and-procedures/",
        description: "Wound care, iron infusions, ECG, spirometry, audiology, ear syringing and cryotherapy across SMSG centres. Minor procedures and diagnostics on-site.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/treatment-room-and-procedures/#webpage", url: "https://smsg.au/treatment-room-and-procedures/", name: "Treatment Room & Procedures | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/treatment-room-and-procedures/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/treatment-room-and-procedures/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Treatment Room & Procedures", item: "https://smsg.au/treatment-room-and-procedures/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/treatment-room-and-procedures/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral for treatment room services?", acceptedAnswer: { "@type": "Answer", text: "No. Treatment room services are part of GP care." } },
          { "@type": "Question", name: "How do I book an iron infusion?", acceptedAnswer: { "@type": "Answer", text: "Iron infusion requires a GP consultation first, to review your iron studies and confirm it's appropriate. The infusion is then scheduled as a separate appointment." } },
          { "@type": "Question", name: "How long does an iron infusion take?", acceptedAnswer: { "@type": "Answer", text: "The infusion itself takes 15 to 30 minutes. With the monitoring period afterwards, plan for about an hour." } },
          { "@type": "Question", name: "Do you do child immunisations in the treatment room?", acceptedAnswer: { "@type": "Answer", text: "Child immunisations are covered under Travel Medicine and Vaccinations, and involve booking with a GP." } },
          { "@type": "Question", name: "Do you do cervical screening in the treatment room?", acceptedAnswer: { "@type": "Answer", text: "Cervical screening is done during a GP consultation, generally with an Aurora GP." } },
          { "@type": "Question", name: "Can I book cryotherapy for warts as a first appointment?", acceptedAnswer: { "@type": "Answer", text: "Book a GP consultation first, so your GP can assess whether cryotherapy is the right treatment for the specific lesion. Cryotherapy may be done in the same appointment or scheduled separately." } },
        ],
      },
    ],
  };
}
