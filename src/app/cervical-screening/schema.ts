export function buildCervicalScreeningSchema() {
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
        "@id": "https://smsg.au/cervical-screening/#service",
        name: "Cervical Screening",
        url: "https://smsg.au/cervical-screening/",
        description:
          "Cervical Screening Test every five years for women aged 25 to 74. Clinician-collected or self-collected sample. Available at all three SMSG centres.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/cervical-screening/#webpage",
        url: "https://smsg.au/cervical-screening/",
        name: "Cervical Screening | Aurora at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/cervical-screening/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/cervical-screening/#breadcrumbs",
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
            name: "Cervical Screening",
            item: "https://smsg.au/cervical-screening/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/cervical-screening/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a referral?",
            acceptedAnswer: { "@type": "Answer", text: "No. Book directly with any Aurora GP." },
          },
          {
            "@type": "Question",
            name: "What if I've had the HPV vaccine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You still need cervical screening. The vaccine reduces risk of the HPV types that most commonly cause cancer, but it doesn't cover all types, and screening remains the standard of care.",
            },
          },
          {
            "@type": "Question",
            name: "Can I have the test if I'm pregnant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cervical screening can be done during pregnancy but is often deferred to the postnatal period unless there's a specific concern. Talk to your GP about timing.",
            },
          },
          {
            "@type": "Question",
            name: "Can I have the test during my period?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, though heavy bleeding can affect sample quality. Light bleeding is usually fine. If you're on the heaviest days of your period, we may suggest rebooking.",
            },
          },
          {
            "@type": "Question",
            name: "What about women who have had a hysterectomy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "This depends on the reason for the hysterectomy and whether your cervix was removed. Your GP will confirm whether ongoing screening is needed for you.",
            },
          },
          {
            "@type": "Question",
            name: "What about women over 74?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The formal program ends at 74, but if you've never been screened or your most recent test was more than five years ago, screening may still be appropriate. Talk to your GP.",
            },
          },
          {
            "@type": "Question",
            name: "What if the test is abnormal?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most abnormal results reflect an HPV finding rather than cancer. Your GP will explain your specific result and the next step, which is usually a repeat test in twelve months or a referral for colposcopy.",
            },
          },
        ],
      },
    ],
  };
}
