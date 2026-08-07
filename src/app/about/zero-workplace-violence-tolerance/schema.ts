export function buildZeroToleranceSchema() {
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
        "@id": "https://smsg.au/about/zero-workplace-violence-tolerance/#webpage",
        url: "https://smsg.au/about/zero-workplace-violence-tolerance/",
        name: "Zero Workplace Violence Tolerance Policy | SMSG",
        description:
          "SMSG's policy on abuse, aggression and violence toward clinicians, reception and nursing teams, and how we respond to breaches.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/about/zero-workplace-violence-tolerance/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://smsg.au/about/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Zero Tolerance Policy",
            item: "https://smsg.au/about/zero-workplace-violence-tolerance/",
          },
        ],
      },
    ],
  };
}
