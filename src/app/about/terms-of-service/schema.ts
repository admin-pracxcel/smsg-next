export function buildTermsSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
      },
      {
        "@type": "AboutPage",
        "@id": "https://smsg.au/about/terms-of-service/#webpage",
        url: "https://smsg.au/about/terms-of-service/",
        name: "Terms of Service | SMSG",
        description:
          "The terms governing your use of the SMSG website and our related services.",
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
            name: "Terms of Service",
            item: "https://smsg.au/about/terms-of-service/",
          },
        ],
      },
    ],
  };
}
