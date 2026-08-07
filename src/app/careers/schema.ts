export function buildCareersHubSchema() {
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
        "@type": "WebPage",
        "@id": "https://smsg.au/careers/#webpage",
        url: "https://smsg.au/careers/",
        name: "Careers at SMSG | Specialist Medical Services Group",
        inLanguage: "en-AU",
        description:
          "Roles for General Practitioners, Practice Nurses, Patient Support Officers and Allied Health practitioners across Earlwood, Bangor and Sans Souci.",
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/careers/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Careers", item: "https://smsg.au/careers/" },
        ],
      },
    ],
  };
}
