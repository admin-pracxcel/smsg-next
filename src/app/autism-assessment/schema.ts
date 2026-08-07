export function buildAutismSchema() {
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
        "@id": "https://smsg.au/autism-assessment/#service",
        name: "Autism Assessment",
        url: "https://smsg.au/autism-assessment/",
        description:
          "Autism spectrum disorder assessment for children and adolescents through Kids' Dr at Sans Souci. Paediatrician-led assessment drawing on family, school and clinical review.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/autism-assessment/#webpage",
        url: "https://smsg.au/autism-assessment/",
        name: "Autism Assessment | Kids' Dr at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/autism-assessment/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/autism-assessment/#breadcrumbs",
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
            name: "Autism Assessment",
            item: "https://smsg.au/autism-assessment/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/autism-assessment/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A GP referral is required for the Medicare rebate to apply to paediatric consultations.",
            },
          },
          {
            "@type": "Question",
            name: "How long does an autism assessment take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assessment usually involves more than one appointment. Your paediatrician confirms the specific process at your first visit.",
            },
          },
          {
            "@type": "Question",
            name: "Will my child definitely be diagnosed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Assessment is an evaluation, not a foregone conclusion. Some children are diagnosed with autism, some are diagnosed with a different condition, and some are found to have developmental variation within the typical range.",
            },
          },
          {
            "@type": "Question",
            name: "What if my child has already been assessed elsewhere?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Bring any existing reports to your first appointment. Kids' Dr can provide ongoing paediatric care for children previously assessed by another provider.",
            },
          },
          {
            "@type": "Question",
            name: "Does Kids' Dr manage NDIS applications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Kids' Dr provides the clinical assessment and letter that supports an NDIS application, but the application itself is made through the NDIS.",
            },
          },
          {
            "@type": "Question",
            name: "What if I'm not sure whether autism is the right question?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book anyway. Assessment for autism sits within broader developmental paediatric care. If autism turns out not to be the picture, your paediatrician will explore what is.",
            },
          },
        ],
      },
    ],
  };
}
