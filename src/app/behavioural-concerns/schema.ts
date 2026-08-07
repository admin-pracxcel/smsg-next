export function buildBehaviouralSchema() {
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
        "@id": "https://smsg.au/kids-dr/#brand",
        name: "Kids' Dr",
        url: "https://smsg.au/kids-dr/",
        parentOrganization: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/behavioural-concerns/#service",
        name: "Behavioural Concerns",
        url: "https://smsg.au/behavioural-concerns/",
        description:
          "Behavioural and emotional support for children and adolescents through Kids' Dr, based at Sans Souci. Paediatricians, psychologists and counsellors working together.",
        procedureType: "https://schema.org/TherapeuticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/behavioural-concerns/#webpage",
        url: "https://smsg.au/behavioural-concerns/",
        name: "Behavioural Concerns | Kids' Dr at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/behavioural-concerns/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/behavioural-concerns/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Kids' Dr",
            item: "https://smsg.au/kids-dr/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Behavioural Concerns",
            item: "https://smsg.au/behavioural-concerns/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/behavioural-concerns/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where should we start?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you're not sure, reception can guide you. Booking with any Kids' Dr clinician is a valid starting point, and we redirect internally where a different clinician is a better fit.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For paediatric consultations, yes, for the Medicare rebate. For psychology or counselling, a GP-prepared Mental Health Care Plan allows a Medicare rebate but is not required to see a psychologist or counsellor.",
            },
          },
          {
            "@type": "Question",
            name: "How many appointments will we need?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That depends on what's going on. For some families, a few appointments are enough. For others, ongoing support is more helpful.",
            },
          },
          {
            "@type": "Question",
            name: "What if my child doesn't want to come?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kids' Dr clinicians are experienced with reluctant children and adolescents. The first appointment can be structured to build trust rather than push straight into therapy.",
            },
          },
          {
            "@type": "Question",
            name: "Can school be involved?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, with your consent. School coordination is often useful.",
            },
          },
          {
            "@type": "Question",
            name: "Does Kids' Dr work with families in crisis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For non-emergency behavioural and mental health support, yes. For crisis situations (immediate safety concerns, suicidal thoughts, severe self-harm), please contact Lifeline (13 11 14) or your nearest emergency department.",
            },
          },
        ],
      },
    ],
  };
}
