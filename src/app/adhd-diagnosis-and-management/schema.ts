export function buildAdhdSchema() {
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
        "@id": "https://smsg.au/adhd-diagnosis-and-management/#service",
        name: "ADHD Diagnosis and Management",
        url: "https://smsg.au/adhd-diagnosis-and-management/",
        description:
          "ADHD assessment and ongoing management for children and adolescents through Kids' Dr, based at Sans Souci with Dr Damian Lees at Earlwood.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/adhd-diagnosis-and-management/#webpage",
        url: "https://smsg.au/adhd-diagnosis-and-management/",
        name: "ADHD Diagnosis & Management | Kids' Dr at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/adhd-diagnosis-and-management/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/adhd-diagnosis-and-management/#breadcrumbs",
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
            name: "ADHD Diagnosis & Management",
            item: "https://smsg.au/adhd-diagnosis-and-management/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/adhd-diagnosis-and-management/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A GP referral is required for the Medicare rebate to apply to paediatric consultations. Your usual GP or one of our GPs can prepare the referral.",
            },
          },
          {
            "@type": "Question",
            name: "How long does the assessment take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assessment usually takes more than one appointment. Your paediatrician will confirm the specific process at your first visit.",
            },
          },
          {
            "@type": "Question",
            name: "Will my child need medication?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not necessarily. Whether medication is appropriate depends on your child's specific situation and is a decision made with you after assessment.",
            },
          },
          {
            "@type": "Question",
            name: "Can Kids' Dr coordinate with my child's school?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, with your consent. Communication with schools helps ensure consistency across settings.",
            },
          },
          {
            "@type": "Question",
            name: "What if my child already has an ADHD diagnosis from another paediatrician?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can transfer ongoing care to Kids' Dr with a GP referral. Bring existing reports and any current management information to your first appointment.",
            },
          },
          {
            "@type": "Question",
            name: "Does Kids' Dr see adolescents?",
            acceptedAnswer: { "@type": "Answer", text: "Yes. Kids' Dr sees children and adolescents." },
          },
        ],
      },
    ],
  };
}
