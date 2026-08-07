export function buildLearningSchema() {
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
        "@id":
          "https://smsg.au/learning-difficulties-and-psychometric-assessment/#service",
        name: "Learning Difficulties and Psychometric Assessment",
        url:
          "https://smsg.au/learning-difficulties-and-psychometric-assessment/",
        description:
          "Psychometric and learning assessment for children and adolescents through Kids' Dr. Understand cognitive strengths, learning patterns, and what supports learning best.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "WebPage",
        "@id":
          "https://smsg.au/learning-difficulties-and-psychometric-assessment/#webpage",
        url:
          "https://smsg.au/learning-difficulties-and-psychometric-assessment/",
        name: "Learning Difficulties & Psychometric Assessment | Kids' Dr at SMSG",
        inLanguage: "en-AU",
        about: {
          "@id":
            "https://smsg.au/learning-difficulties-and-psychometric-assessment/#service",
        },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/learning-difficulties-and-psychometric-assessment/#breadcrumbs",
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
            name: "Learning Difficulties & Psychometric Assessment",
            item:
              "https://smsg.au/learning-difficulties-and-psychometric-assessment/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id":
          "https://smsg.au/learning-difficulties-and-psychometric-assessment/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Do I need a referral?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Psychometric assessments can be booked directly.",
            },
          },
          {
            "@type": "Question",
            name: "How long does the assessment take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Assessment is typically spread across more than one session to keep each session manageable for your child. The written report is prepared after the sessions are complete.",
            },
          },
          {
            "@type": "Question",
            name: "Will the assessment give my child a diagnosis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sometimes. Psychometric assessment can identify specific learning disorders or intellectual disability. Where a broader diagnosis (like ADHD or autism) is a possibility, that pathway usually involves a paediatrician alongside psychometric testing.",
            },
          },
          {
            "@type": "Question",
            name: "Is my child too young or too old?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Kids' Dr psychometric assessors work with a range of ages. If you're not sure whether it's the right time, ask reception.",
            },
          },
          {
            "@type": "Question",
            name: "What does my child need to know before coming in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "That it's not a test they can fail, and that the goal is to understand how their brain works so they can be supported at school and elsewhere.",
            },
          },
          {
            "@type": "Question",
            name: "Can I get the report used at school?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. That's a common reason families come. Your assessor writes the report to support school communication and any specific applications you plan to make.",
            },
          },
          {
            "@type": "Question",
            name: "What if I'm not sure whether psychometric assessment is the right step?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Reception can guide you. Sometimes a paediatric appointment is the better first step, and reception can help direct.",
            },
          },
        ],
      },
    ],
  };
}
