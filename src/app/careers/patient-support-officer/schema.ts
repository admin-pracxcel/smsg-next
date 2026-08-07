export function buildPsoCareerSchema() {
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
        "@id": "https://smsg.au/careers/patient-support-officer/#job",
        title: "Patient Support Officer",
        description:
          "Patient Support Officer roles across Earlwood, Bangor and Sans Souci. Casual, part-time and full-time positions with a career pathway into practice management, HR, finance, quality and business development through the SMSG Management and Leadership Development Program.",
        employmentType: ["FULL_TIME", "PART_TIME", "TEMPORARY"],
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
        url: "https://smsg.au/careers/patient-support-officer/",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/careers/patient-support-officer/#webpage",
        url: "https://smsg.au/careers/patient-support-officer/",
        name: "Patient Support Officer Roles | Careers at SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/careers/patient-support-officer/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Careers", item: "https://smsg.au/careers/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Patient Support Officer",
            item: "https://smsg.au/careers/patient-support-officer/",
          },
        ],
      },
    ],
  };
}
