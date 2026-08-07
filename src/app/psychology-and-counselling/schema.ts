export function buildPsychologySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/psychology-and-counselling/#service",
        name: "Psychology & Counselling",
        url: "https://smsg.au/psychology-and-counselling/",
        description: "Psychology and counselling for adults, adolescents and children across Earlwood, Bangor and Sans Souci. Book on a Mental Health Care Plan or directly.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/psychology-and-counselling/#webpage", url: "https://smsg.au/psychology-and-counselling/", name: "Psychology & Counselling | Allied Health at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/psychology-and-counselling/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/psychology-and-counselling/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Allied Health", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Psychology & Counselling", item: "https://smsg.au/psychology-and-counselling/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/psychology-and-counselling/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral to see a psychologist or counsellor?", acceptedAnswer: { "@type": "Answer", text: "No. You can book directly. A GP-prepared Mental Health Care Plan is required if you want to access the Medicare rebate." } },
          { "@type": "Question", name: "How long is a session?", acceptedAnswer: { "@type": "Answer", text: "Sessions are typically 45 to 60 minutes." } },
          { "@type": "Question", name: "How many sessions will I need?", acceptedAnswer: { "@type": "Answer", text: "That varies substantially by presentation and goals. Some patients need a small number of sessions; others benefit from longer-term therapy. Your practitioner discusses this at your first session." } },
          { "@type": "Question", name: "Can I choose between a psychologist and a counsellor?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you're not sure, reception can help based on what you're seeing us about. Sometimes practitioners themselves suggest a different colleague after an initial consultation if they think another approach would fit better." } },
          { "@type": "Question", name: "Are your practitioners LGBTQIA+ affirming?", acceptedAnswer: { "@type": "Answer", text: "Yes." } },
          { "@type": "Question", name: "Are your practitioners neurodivergence-affirming?", acceptedAnswer: { "@type": "Answer", text: "Sandra Bell specifically describes her practice as neurodiversity-affirming. Other SMSG practitioners work with neurodivergent patients across their practice." } },
          { "@type": "Question", name: "Can children and adolescents be seen?", acceptedAnswer: { "@type": "Answer", text: "Yes. Sandra Bell, Sue Boursiani and Cara Chillari work with children and adolescents through Kids' Dr." } },
          { "@type": "Question", name: "Is there a wait for appointments?", acceptedAnswer: { "@type": "Answer", text: "Wait times vary by practitioner. Reception can advise on current availability." } },
        ],
      },
    ],
  };
}
