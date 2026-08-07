export function buildPrivacySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
        foundingDate: "2014",
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "privacy",
            name: "SMSG Chief Growth Officer",
            telephone: "+61-2-9554-7788",
            areaServed: "AU",
            availableLanguage: "en",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://smsg.au/about/privacy-policy/#webpage",
        url: "https://smsg.au/about/privacy-policy/",
        name: "Privacy Policy | SMSG",
        description:
          "How Specialist Medical Services Group collects, uses, stores and shares your personal and health information, and your rights as a patient.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://smsg.au/about/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Privacy Policy",
            item: "https://smsg.au/about/privacy-policy/",
          },
        ],
      },
    ],
  };
}
