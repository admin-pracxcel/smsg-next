export function buildAntenatalSchema() {
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
        "@type": "MedicalClinic",
        "@id": "https://smsg.au/aurora-women-and-babies-health/#brand",
        name: "Aurora Women & Babies Health",
        url: "https://smsg.au/aurora-women-and-babies-health/",
        parentOrganization: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/antenatal-shared-care/#service",
        name: "Antenatal Shared Care",
        url: "https://smsg.au/antenatal-shared-care/",
        description:
          "Shared antenatal care between an Aurora GP and a local partner hospital for low-risk pregnancies. Routine antenatal visits with your GP, milestone visits and the birth at the hospital.",
        procedureType: "https://schema.org/DiagnosticProcedure",
        howPerformed:
          "Alternating GP and hospital visits from booking through around 36 weeks, following the shared care program of the birth hospital.",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/antenatal-shared-care/#webpage",
        url: "https://smsg.au/antenatal-shared-care/",
        name: "Antenatal Shared Care | Aurora at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/antenatal-shared-care/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/antenatal-shared-care/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Aurora Women & Babies Health",
            item: "https://smsg.au/aurora-women-and-babies-health/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Antenatal Shared Care",
            item: "https://smsg.au/antenatal-shared-care/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/antenatal-shared-care/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a referral to start shared care with Aurora?",
            acceptedAnswer: { "@type": "Answer", text: "No. Book directly with any Aurora GP." },
          },
          {
            "@type": "Question",
            name: "Can I keep my usual GP outside SMSG for general care?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Many women see their existing GP for non-pregnancy issues and use Aurora for their pregnancy care. We coordinate with your GP so nothing falls between the cracks.",
            },
          },
          {
            "@type": "Question",
            name: "Which hospitals do Aurora GPs share care with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Aurora GPs work with the shared care programs at the local public hospitals. If you're planning to birth at a private hospital, we can discuss what care model works.",
            },
          },
          {
            "@type": "Question",
            name: "What happens after the birth?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your Aurora GP is available for postnatal review, six-week check, immunisations, contraception advice and support with breastfeeding. Dr Yashodha Ediriweera has IBCLC lactation training if you want additional lactation support.",
            },
          },
          {
            "@type": "Question",
            name: "Can I combine shared care with an Aurora obstetrician?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Dr Aye Thidar Htun sees Aurora patients where the shared care model isn't right, or where you'd prefer a single consultant through pregnancy. Talk to your Aurora GP about the options at your first visit.",
            },
          },
        ],
      },
    ],
  };
}
