export function buildFeesSchema() {
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
          "https://smsg.au/patient-information/fees-and-billing/#webpage",
        url: "https://smsg.au/patient-information/fees-and-billing/",
        name: "Fees & Billing | Specialist Medical Services Group",
        description:
          "SMSG operates a mixed billing model across Earlwood, Bangor and Sans Souci. Each independent practitioner sets their own billing arrangements. Reception confirms fees at booking.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/patient-information/fees-and-billing/#breadcrumbs",
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
            name: "Fees & Billing",
            item: "https://smsg.au/patient-information/fees-and-billing/",
          },
        ],
      },
    ],
  };
}
