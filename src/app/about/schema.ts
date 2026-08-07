/**
 * JSON-LD schema for /about/ (About hub).
 * MedicalOrganization + AboutPage + BreadcrumbList graph.
 */
export function buildAboutSchema() {
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
        areaServed: { "@type": "AdministrativeArea", name: "Sydney" },
      },
      {
        "@type": "AboutPage",
        "@id": "https://smsg.au/about/#webpage",
        url: "https://smsg.au/about/",
        name: "About SMSG | Specialist Medical Services Group",
        description:
          "SMSG is an AGPAL-accredited medical group operating three centres across southern Sydney, with sixty-plus independent practitioners across five clinical sub-brands.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/about/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://smsg.au/about/" },
        ],
      },
    ],
  };
}
