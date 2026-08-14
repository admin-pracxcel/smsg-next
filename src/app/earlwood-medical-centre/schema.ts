/**
 * JSON-LD graph for the Earlwood Medical Centre location hub.
 * Ported verbatim from the source template (lines 1883-1966).
 */

export function buildEarlwoodSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": "https://smsg.au/earlwood-medical-centre/#loc",
        name: "Earlwood Medical Centre",
        url: "https://smsg.au/earlwood-medical-centre",
        image: "https://smsg.au/website-images/earlwood.webp",
        telephone: "+61 2 9554 7788",
        faxNumber: "+61 2 9554 7733",
        email: "EMC@smsg.au",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "352-354 Homer Street",
          addressLocality: "Earlwood",
          addressRegion: "NSW",
          postalCode: "2206",
          addressCountry: "AU",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -33.9268,
          longitude: 151.1246,
        },
        hasMap: "https://maps.app.goo.gl/orET9Ex7YTUNnis1A",
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
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "15:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/smsgearlwood",
          "https://maps.app.goo.gl/orET9Ex7YTUNnis1A",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.6",
          reviewCount: "733",
          bestRating: "5",
          worstRating: "1",
        },
        parentOrganization: { "@id": "https://smsg.au/#org" },
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "General practice consultations",
          },
          { "@type": "MedicalProcedure", name: "Antenatal shared care" },
          {
            "@type": "MedicalProcedure",
            name: "Hormonal IUD insertion and removal",
          },
          { "@type": "MedicalProcedure", name: "Iron infusion" },
          { "@type": "MedicalProcedure", name: "Cervical screening" },
          {
            "@type": "MedicalProcedure",
            name: "Skin lesion assessment and minor procedures",
          },
          { "@type": "MedicalProcedure", name: "ECG and spirometry" },
          { "@type": "MedicalProcedure", name: "Audiology and hearing tests" },
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
            name: "Earlwood Medical Centre",
            item: "https://smsg.au/earlwood-medical-centre/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/earlwood-medical-centre/#webpage",
        url: "https://smsg.au/earlwood-medical-centre",
        name: "Earlwood Medical Centre | Family GPs, Specialists and Saturday Appointments | SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/earlwood-medical-centre/#loc" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
    ],
  };
}
