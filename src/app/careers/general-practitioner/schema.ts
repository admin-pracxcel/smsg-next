export function buildGpCareerSchema() {
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
        "@type": "JobPosting",
        "@id": "https://smsg.au/careers/general-practitioner/#job",
        title: "General Practitioner",
        description:
          "FRACGP and Vocationally Registered General Practitioner roles across Earlwood, Bangor and Sans Souci. Full-time and part-time consulting arrangements. Support for special interests in skin cancer medicine, women's health, procedural work and chronic disease.",
        employmentType: ["FULL_TIME", "PART_TIME"],
        hiringOrganization: { "@id": "https://smsg.au/#org" },
        jobLocation: [
          {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "352-354 Homer Street",
              addressLocality: "Earlwood",
              addressRegion: "NSW",
              postalCode: "2206",
              addressCountry: "AU",
            },
          },
          {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Shop 6, 121 Yala Road",
              addressLocality: "Bangor",
              addressRegion: "NSW",
              postalCode: "2234",
              addressCountry: "AU",
            },
          },
          {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              streetAddress: "39 Campbell Street",
              addressLocality: "Sans Souci",
              addressRegion: "NSW",
              postalCode: "2219",
              addressCountry: "AU",
            },
          },
        ],
        applicantLocationRequirements: {
          "@type": "Country",
          name: "Australia",
        },
        directApply: false,
        url: "https://smsg.au/careers/general-practitioner/",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/careers/general-practitioner/#webpage",
        url: "https://smsg.au/careers/general-practitioner/",
        name: "General Practitioner Roles | Careers at SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/careers/general-practitioner/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Careers", item: "https://smsg.au/careers/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "General Practitioner",
            item: "https://smsg.au/careers/general-practitioner/",
          },
        ],
      },
    ],
  };
}
