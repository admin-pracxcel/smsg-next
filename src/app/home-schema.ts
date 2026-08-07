/**
 * Homepage JSON-LD graph. Ported 1:1 from the approved static homepage
 * template. Renders through the shared <JsonLd /> component.
 */

export const homeSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://smsg.au/#org",
      name: "Specialist Medical Services Group",
      alternateName: "SMSG",
      url: "https://smsg.au/",
      logo: "https://smsg.au/Images/Brand%20Logos/_SMSG%20LOGOS/Source%20Files%20-%20Specialist%20Medical%20Services%20Group/SMSG%20-%20Logo.svg",
      foundingDate: "2014",
      sameAs: [
        "https://www.facebook.com/earlwoodmedicalcentre/",
        "https://www.facebook.com/bangormedicalcentre/",
        "https://www.facebook.com/sanssoucidrs",
        "https://www.instagram.com/specialistmedicalservices/",
        "https://www.linkedin.com/company/specialistmedicalservicesgroup/",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.73",
        reviewCount: "1340",
        bestRating: "5",
        worstRating: "1",
      },
      subOrganization: [
        { "@id": "https://smsg.au/earlwood-medical-centre/#loc" },
        { "@id": "https://smsg.au/bangor-medical-centre/#loc" },
        { "@id": "https://smsg.au/sans-souci-doctors/#loc" },
      ],
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://smsg.au/earlwood-medical-centre/#loc",
      name: "Earlwood Medical Centre",
      parentOrganization: { "@id": "https://smsg.au/#org" },
      url: "https://smsg.au/earlwood-medical-centre",
      telephone: "+61 2 9554 7788",
      email: "EMC@smsg.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "352-354 Homer Street",
        addressLocality: "Earlwood",
        addressRegion: "NSW",
        postalCode: "2206",
        addressCountry: "AU",
      },
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "713",
      },
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://smsg.au/bangor-medical-centre/#loc",
      name: "Bangor Medical Centre",
      parentOrganization: { "@id": "https://smsg.au/#org" },
      url: "https://smsg.au/bangor-medical-centre",
      telephone: "+61 2 8582 1318",
      email: "BMC@smsg.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop 6, 121 Yala Road",
        addressLocality: "Bangor",
        addressRegion: "NSW",
        postalCode: "2234",
        addressCountry: "AU",
      },
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "342",
      },
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://smsg.au/sans-souci-doctors/#loc",
      name: "Sans Souci Doctors",
      parentOrganization: { "@id": "https://smsg.au/#org" },
      url: "https://smsg.au/sans-souci-doctors",
      telephone: "+61 2 7923 9103",
      email: "SSD@smsg.au",
      address: {
        "@type": "PostalAddress",
        streetAddress: "39 Campbell Street",
        addressLocality: "Sans Souci",
        addressRegion: "NSW",
        postalCode: "2219",
        addressCountry: "AU",
      },
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "311",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://smsg.au/#website",
      url: "https://smsg.au/",
      name: "Specialist Medical Services Group",
      publisher: { "@id": "https://smsg.au/#org" },
      inLanguage: "en-AU",
    },
  ],
};
