export function buildAwardsSchema() {
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
        award: [
          "AGPAL Accreditation (all three centres)",
          "CESPHN Excellence in General Practice Winner 2024",
          "CESPHN Certificate of Excellence in General Practice 2023",
          "Great Place to Work Certified",
          "Australian Small Business Champion Award 2018",
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "certification",
            name: "AGPAL Accreditation",
            recognizedBy: {
              "@type": "Organization",
              name: "Australian General Practice Accreditation Limited",
            },
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://smsg.au/about/awards-and-accreditations/#webpage",
        url: "https://smsg.au/about/awards-and-accreditations/",
        name: "Awards & Accreditations | SMSG",
        description:
          "Independent recognition of SMSG's clinical standards and workplace culture. AGPAL-accredited across all three centres, CESPHN Excellence Winner 2024, and Great Place to Work Certified.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/about/awards-and-accreditations/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://smsg.au/about/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Awards & Accreditations",
            item: "https://smsg.au/about/awards-and-accreditations/",
          },
        ],
      },
    ],
  };
}
