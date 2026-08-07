export function buildMenopauseSchema() {
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
        "@id": "https://smsg.au/menopause-support/#service",
        name: "Menopause Support",
        url: "https://smsg.au/menopause-support/",
        description:
          "Perimenopause and menopause care from Aurora GPs, with endocrinology and gynaecology input where the picture calls for it. Symptom management, hormone therapy, bone and cardiovascular health.",
        procedureType: "https://schema.org/TherapeuticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/menopause-support/#webpage",
        url: "https://smsg.au/menopause-support/",
        name: "Menopause Support | Aurora at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/menopause-support/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/menopause-support/#breadcrumbs",
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
            name: "Menopause Support",
            item: "https://smsg.au/menopause-support/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/menopause-support/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "When should I book if I think I'm in perimenopause?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Any time you're noticing changes that concern you. Perimenopause can start in the early forties for some women and later for others. Symptoms don't have to be severe to be worth reviewing.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need any tests before my first appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Your Aurora GP will arrange any tests that are useful based on your history. Menopause is diagnosed clinically, not by blood test in most cases.",
            },
          },
          {
            "@type": "Question",
            name: "Is menopausal hormone therapy safe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most healthy women within ten years of their final period, current evidence supports MHT as safe and effective for symptom management. There are considerations for specific groups. Your GP will walk through your individual profile and the current evidence.",
            },
          },
          {
            "@type": "Question",
            name: "What if I've had breast cancer or another condition where MHT isn't appropriate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non-hormonal options are effective for many symptoms. Local vaginal treatments have different safety profiles from systemic MHT. Your GP will review what's suitable for you.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book an Aurora GP just for menopause and keep my usual GP for other things?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Many women see an Aurora GP specifically for menopause care while continuing to see their existing GP for general care. We coordinate so nothing falls between the cracks.",
            },
          },
          {
            "@type": "Question",
            name: "Is there anything I can do myself?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, and lifestyle contributions matter. Sleep, exercise, nutrition, alcohol moderation, stress management and social connection all play a role. Your Aurora GP can help you build a plan that's realistic for your circumstances.",
            },
          },
        ],
      },
    ],
  };
}
