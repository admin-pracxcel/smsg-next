export function buildObstetricsSchema() {
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
        "@id": "https://smsg.au/obstetrics-and-pregnancy-care/#service",
        name: "Obstetrics and Pregnancy Care",
        url: "https://smsg.au/obstetrics-and-pregnancy-care/",
        description:
          "Specialist obstetric care during pregnancy and gynaecological consultations with Dr Aye Thidar Htun at Earlwood Medical Centre.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        provider: [
          {
            "@type": "Physician",
            name: "Dr Aye Thidar Htun",
            url: "https://smsg.au/dr-aye-thidar-htun/",
            medicalSpecialty: "ObstetricAndGynecology",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/obstetrics-and-pregnancy-care/#webpage",
        url: "https://smsg.au/obstetrics-and-pregnancy-care/",
        name: "Obstetrics & Pregnancy Care | Aurora at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/obstetrics-and-pregnancy-care/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/obstetrics-and-pregnancy-care/#breadcrumbs",
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
            name: "Obstetrics & Pregnancy Care",
            item: "https://smsg.au/obstetrics-and-pregnancy-care/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/obstetrics-and-pregnancy-care/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a GP referral to see Dr Htun?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A GP referral is required for the Medicare rebate to apply. Your usual GP or an Aurora GP can prepare the referral.",
            },
          },
          {
            "@type": "Question",
            name: "Can Aurora GPs refer to Dr Htun?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. If you're already seeing an Aurora GP and they identify a concern that needs specialist review, they will refer internally.",
            },
          },
          {
            "@type": "Question",
            name: "Is Dr Htun a public or private obstetrician?",
            acceptedAnswer: { "@type": "Answer", text: "Private. Fees apply." },
          },
          {
            "@type": "Question",
            name: "What if I've had a shared care pregnancy before and want obstetric care this time?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That's a common reason to shift models. Dr Htun's initial consultation is the right place to talk through your previous pregnancy and plan this one.",
            },
          },
          {
            "@type": "Question",
            name: "Can I see Dr Htun for gynaecological issues if I'm not pregnant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Gynaecological consultations are a substantial part of Dr Htun's practice.",
            },
          },
        ],
      },
    ],
  };
}
