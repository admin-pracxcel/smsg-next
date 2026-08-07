export function buildBreastfeedingSchema() {
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
        "@id": "https://smsg.au/breastfeeding-and-lactation-support/#service",
        name: "Breastfeeding and Lactation Support",
        url: "https://smsg.au/breastfeeding-and-lactation-support/",
        description:
          "Breastfeeding support from the Aurora GP team at Earlwood, Bangor and Sans Souci. Latch, supply, pain, weaning, medications and return to work. Dr Yashodha Ediriweera has IBCLC lactation training.",
        procedureType: "https://schema.org/TherapeuticProcedure",
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/breastfeeding-and-lactation-support/#webpage",
        url: "https://smsg.au/breastfeeding-and-lactation-support/",
        name: "Breastfeeding & Lactation Support | Aurora at SMSG",
        inLanguage: "en-AU",
        about: {
          "@id": "https://smsg.au/breastfeeding-and-lactation-support/#service",
        },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id":
          "https://smsg.au/breastfeeding-and-lactation-support/#breadcrumbs",
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
            name: "Breastfeeding & Lactation Support",
            item: "https://smsg.au/breastfeeding-and-lactation-support/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/breastfeeding-and-lactation-support/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "When should I book if I'm having difficulty?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "As soon as you feel you need support. Waiting rarely helps. Common early concerns like painful latch or supply worry are more resolvable when addressed early.",
            },
          },
          {
            "@type": "Question",
            name: "Can I bring baby to the appointment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, please do. Watching a feed is often the most useful part of the appointment.",
            },
          },
          {
            "@type": "Question",
            name: "Can Aurora GPs prescribe for medications that support supply, or manage mastitis?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Aurora GPs manage the standard medical concerns that come up in breastfeeding, including mastitis, thrush, medications and safe combinations.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to book with Dr Ediriweera specifically?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not always. Most breastfeeding concerns can be managed by any Aurora GP. Dr Ediriweera has IBCLC lactation training if you'd prefer to book with her.",
            },
          },
          {
            "@type": "Question",
            name: "What if I want to wean?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Weaning is part of breastfeeding care. We support you whatever your goal is, whether that's continuing longer than average or stopping sooner. Aurora GPs help you work through the physical and emotional side of weaning at your pace.",
            },
          },
          {
            "@type": "Question",
            name: "What if I've been told I can't breastfeed for a medical reason?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Come and see us anyway. Some situations that are described as 'can't breastfeed' turn out to be manageable, and where they aren't, we support you with formula feeding, mixed feeding, and the emotional side of that.",
            },
          },
          {
            "@type": "Question",
            name: "Are there support services outside SMSG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Australian Breastfeeding Association (1800 686 268) offers 24-hour peer support and is a good resource alongside GP care.",
            },
          },
        ],
      },
    ],
  };
}
