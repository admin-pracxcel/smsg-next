export function buildAlliedHealthCareerSchema() {
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
        "@id": "https://smsg.au/careers/allied-health/#job",
        title: "Allied Health Practitioner",
        description:
          "Ongoing interest in allied health practitioners across SMSG. Speech pathology, occupational therapy, physiotherapy, dietetics, psychology, counselling and podiatry. Employed and consulting arrangements considered depending on the discipline.",
        employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
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
        url: "https://smsg.au/careers/allied-health/",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/careers/allied-health/#webpage",
        url: "https://smsg.au/careers/allied-health/",
        name: "Allied Health Roles | Careers at SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/careers/allied-health/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Careers", item: "https://smsg.au/careers/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Allied Health",
            item: "https://smsg.au/careers/allied-health/",
          },
        ],
      },
    ],
  };
}
