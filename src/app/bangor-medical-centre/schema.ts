/**
 * JSON-LD graph for the Bangor Medical Centre location hub.
 * Ported verbatim from the source template.
 */

export function buildBangorSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": "https://smsg.au/bangor-medical-centre/#centre",
        name: "Bangor Medical Centre",
        url: "https://smsg.au/bangor-medical-centre",
        image: "https://smsg.au/website-images/bangor.webp",
        telephone: "+61285821318",
        faxNumber: "+61285821313",
        email: "BMC@smsg.au",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop 6, Bangor Shopping Centre, 121 Yala Road",
          addressLocality: "Bangor",
          addressRegion: "NSW",
          postalCode: "2234",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -34.018105,
          longitude: 151.029097,
        },
        hasMap: "https://maps.app.goo.gl/GcLJE8QzrMKfXy7UA",
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
          "https://www.facebook.com/bangormedicalcentre/",
          "https://maps.app.goo.gl/GcLJE8QzrMKfXy7UA",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "342",
          bestRating: "5",
          worstRating: "1",
        },
        parentOrganization: { "@id": "https://smsg.au/#org" },
        foundingDate: "2018",
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "General practice consultations",
          },
          { "@type": "MedicalProcedure", name: "Antenatal shared care" },
          {
            "@type": "MedicalProcedure",
            name: "Hormonal IUD and Implanon insertion and removal",
          },
          { "@type": "MedicalProcedure", name: "Iron infusion" },
          { "@type": "MedicalProcedure", name: "Cervical screening" },
          {
            "@type": "MedicalProcedure",
            name: "Full-body skin checks and excision procedures",
          },
          { "@type": "MedicalProcedure", name: "ECG and spirometry" },
          {
            "@type": "MedicalProcedure",
            name: "Endocrinology consultations",
          },
          { "@type": "MedicalProcedure", name: "Geriatrics consultations" },
          { "@type": "MedicalProcedure", name: "Nephrology consultations" },
          {
            "@type": "MedicalProcedure",
            name: "Respiratory and sleep medicine consultations",
          },
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
            name: "Bangor Medical Centre",
            item: "https://smsg.au/bangor-medical-centre",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/bangor-medical-centre/#webpage",
        url: "https://smsg.au/bangor-medical-centre",
        name: "Bangor Medical Centre | Family GPs, Specialists and Weekday Care in the Sutherland Shire | SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/bangor-medical-centre/#centre" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
    ],
  };
}
