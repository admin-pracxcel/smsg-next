export function buildEmergencySchema() {
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
        "@id":
          "https://smsg.au/patient-information/emergency-information/#webpage",
        url: "https://smsg.au/patient-information/emergency-information/",
        name: "Emergency Information | Specialist Medical Services Group",
        description:
          "In a medical emergency, dial 000 or attend your nearest emergency department. Emergency contacts, nearest hospitals to Earlwood, Bangor and Sans Souci, and crisis support lines.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/patient-information/emergency-information/#breadcrumbs",
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
            name: "Emergency Information",
            item: "https://smsg.au/patient-information/emergency-information/",
          },
        ],
      },
    ],
  };
}
