/**
 * JSON-LD graph for the Sans Souci Doctors location hub.
 * Ported verbatim from the source template.
 */

export function buildSansSouciSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": "https://smsg.au/sans-souci-doctors/#centre",
        name: "Sans Souci Doctors",
        url: "https://smsg.au/sans-souci-doctors",
        image: "https://smsg.au/website-images/san-souci.webp",
        telephone: "+61279239103",
        faxNumber: "+61279239108",
        email: "SSD@smsg.au",
        priceRange: "$$",
        foundingDate: "2019",
        address: {
          "@type": "PostalAddress",
          streetAddress: "39 Campbell Street",
          addressLocality: "Sans Souci",
          addressRegion: "NSW",
          postalCode: "2219",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.9852626,
          longitude: 151.1369289,
        },
        hasMap: "https://maps.app.goo.gl/eksWcSRLtboNrcyP7",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/sanssoucidrs",
          "https://maps.app.goo.gl/eksWcSRLtboNrcyP7",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "311",
          bestRating: "5",
          worstRating: "1",
        },
        parentOrganization: { "@id": "https://smsg.au/#org" },
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "General practice consultations",
          },
          { "@type": "MedicalProcedure", name: "Developmental paediatrics" },
          { "@type": "MedicalProcedure", name: "ADHD and autism assessment" },
          {
            "@type": "MedicalProcedure",
            name: "Psychology and psychometric assessment",
          },
          { "@type": "MedicalProcedure", name: "Speech pathology" },
          { "@type": "MedicalProcedure", name: "Physiotherapy" },
          { "@type": "MedicalProcedure", name: "Dietetics" },
          { "@type": "MedicalProcedure", name: "Cervical screening" },
          {
            "@type": "MedicalProcedure",
            name: "Implanon insertion and removal",
          },
          { "@type": "MedicalProcedure", name: "ECG and spirometry" },
        ],
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
        foundingDate: "2014",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "SMSG",
            item: "https://smsg.au/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Locations",
            item: "https://smsg.au/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Sans Souci Doctors",
            item: "https://smsg.au/sans-souci-doctors",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/sans-souci-doctors/#webpage",
        url: "https://smsg.au/sans-souci-doctors",
        name: "Sans Souci Doctors | Family GPs, Kids' Dr Paediatrics and Allied Health Bayside | SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/sans-souci-doctors/#centre" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
    ],
  };
}
