export function buildResultsPolicySchema() {
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
        "@id": "https://smsg.au/patient-information/results-policy/#webpage",
        url: "https://smsg.au/patient-information/results-policy/",
        name: "Results Policy | Specialist Medical Services Group",
        description:
          "How SMSG communicates test results and recalls. Book a follow-up appointment if you're expecting results, and don't assume no news means good news.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/patient-information/results-policy/#breadcrumbs",
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
            name: "Results Policy",
            item: "https://smsg.au/patient-information/results-policy/",
          },
        ],
      },
    ],
  };
}
