export function buildRegistrationSchema() {
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
          "https://smsg.au/patient-information/new-patient-registration/#webpage",
        url: "https://smsg.au/patient-information/new-patient-registration/",
        name: "New Patient Registration | Specialist Medical Services Group",
        description:
          "Register as a new patient at Earlwood, Bangor or Sans Souci before your first appointment. Complete registration online through Automed.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/patient-information/new-patient-registration/#breadcrumbs",
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
            name: "New Patient Registration",
            item: "https://smsg.au/patient-information/new-patient-registration/",
          },
        ],
      },
    ],
  };
}
