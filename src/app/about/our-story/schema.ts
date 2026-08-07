export function buildOurStorySchema() {
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
      },
      {
        "@type": "AboutPage",
        "@id": "https://smsg.au/about/our-story/#webpage",
        url: "https://smsg.au/about/our-story/",
        name: "Our Story | The History of Specialist Medical Services Group Since 2014",
        description:
          "Founded in 2014, Specialist Medical Services Group has grown from a single Earlwood practice to three centres across Sydney, five clinical sub-brands, and 60+ independent practitioners.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
        mainEntity: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/about/our-story/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://smsg.au/about/" },
          { "@type": "ListItem", position: 3, name: "Our Story", item: "https://smsg.au/about/our-story/" },
        ],
      },
    ],
  };
}
