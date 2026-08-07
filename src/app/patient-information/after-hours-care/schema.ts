export function buildAfterHoursSchema() {
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
        "@id": "https://smsg.au/patient-information/after-hours-care/#webpage",
        url: "https://smsg.au/patient-information/after-hours-care/",
        name: "After-Hours Care | Specialist Medical Services Group",
        description:
          "When SMSG is closed and you need non-emergency medical care, call 13 SICK for the National Home Doctor Service, or Healthdirect on 1800 022 222 for advice.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/patient-information/after-hours-care/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Patient Information",
            item: "https://smsg.au/patient-information/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "After-Hours Care",
            item: "https://smsg.au/patient-information/after-hours-care/",
          },
        ],
      },
    ],
  };
}
