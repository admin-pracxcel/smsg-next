export function buildBookOnlineSchema() {
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
        "@id": "https://smsg.au/patient-information/book-online/#webpage",
        url: "https://smsg.au/patient-information/book-online/",
        name: "Book Online | Specialist Medical Services Group",
        description:
          "Book an appointment with an SMSG practitioner across Earlwood, Bangor or Sans Souci. Online booking through Automed, or call the centre directly.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
        potentialAction: {
          "@type": "ReserveAction",
          target: [
            "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/doctors",
            "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/doctors",
            "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/doctors",
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/patient-information/book-online/#breadcrumbs",
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
            name: "Book Online",
            item: "https://smsg.au/patient-information/book-online/",
          },
        ],
      },
    ],
  };
}
