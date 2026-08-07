/**
 * FAQ schema · WebPage + BreadcrumbList + FAQPage (Google's recommended shape
 * for FAQ rich results). Question/answer pairs must stay in sync with the
 * page component; if you edit one, edit the other.
 */

type Qa = { q: string; a: string };

export function buildFaqSchema(qas: Qa[]) {
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
        "@id": "https://smsg.au/patient-information/faq/#webpage",
        url: "https://smsg.au/patient-information/faq/",
        name: "FAQ | Specialist Medical Services Group",
        description:
          "Answers to common questions about booking, fees, referrals, results, telehealth, care coordination, and other patient matters at SMSG.",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/#org" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/patient-information/faq/#breadcrumbs",
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
            name: "FAQ",
            item: "https://smsg.au/patient-information/faq/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/patient-information/faq/#faq",
        mainEntity: qas.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}
