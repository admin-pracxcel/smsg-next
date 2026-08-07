export function buildScriptsReferralsSchema() {
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
        "@id":
          "https://smsg.au/patient-information/scripts-and-referrals/#webpage",
        url: "https://smsg.au/patient-information/scripts-and-referrals/",
        name: "Scripts & Referrals | Specialist Medical Services Group",
        description:
          "Request repeat prescriptions and specialist referral renewals through Automed. One business day turnaround for existing SMSG patients.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/patient-information/scripts-and-referrals/#breadcrumbs",
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
            name: "Scripts & Referrals",
            item: "https://smsg.au/patient-information/scripts-and-referrals/",
          },
        ],
      },
    ],
  };
}
