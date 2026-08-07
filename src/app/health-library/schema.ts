export function buildHealthLibrarySchema() {
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
        "@type": "CollectionPage",
        "@id": "https://smsg.au/health-library/#webpage",
        url: "https://smsg.au/health-library/",
        name: "Health Library | Specialist Medical Services Group",
        description:
          "Articles from the SMSG clinical team on women's health, kids' health, skin health, chronic disease, mental health and preventive care.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/health-library/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Health Library",
            item: "https://smsg.au/health-library/",
          },
        ],
      },
    ],
  };
}
