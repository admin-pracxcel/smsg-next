export function buildFeedbackSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            name: "Earlwood Medical Centre",
            email: "EMC@smsg.au",
            telephone: "+61-2-9554-7788",
            areaServed: "AU",
            availableLanguage: "en",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            name: "Bangor Medical Centre",
            email: "BMC@smsg.au",
            telephone: "+61-2-8582-1318",
            areaServed: "AU",
            availableLanguage: "en",
          },
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            name: "Sans Souci Doctors",
            email: "SSD@smsg.au",
            telephone: "+61-2-7923-9103",
            areaServed: "AU",
            availableLanguage: "en",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://smsg.au/about/feedback-and-complaints/#webpage",
        url: "https://smsg.au/about/feedback-and-complaints/",
        name: "Feedback & Complaints | SMSG",
        description:
          "How to give feedback or raise a complaint about care at SMSG, what happens next, and the external bodies you can also contact.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/about/feedback-and-complaints/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://smsg.au/about/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Feedback & Complaints",
            item: "https://smsg.au/about/feedback-and-complaints/",
          },
        ],
      },
    ],
  };
}
