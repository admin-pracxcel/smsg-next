export function buildMentalHealthSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/mental-health-care/#service",
        name: "Mental Health Care",
        url: "https://smsg.au/mental-health-care/",
        description: "GP-led mental health care, Mental Health Care Plans, and referral to our psychology and counselling team across Earlwood, Bangor and Sans Souci.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/mental-health-care/#webpage", url: "https://smsg.au/mental-health-care/", name: "Mental Health Care | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/mental-health-care/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/mental-health-care/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Mental Health Care", item: "https://smsg.au/mental-health-care/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/mental-health-care/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a Mental Health Care Plan to see a psychologist?", acceptedAnswer: { "@type": "Answer", text: "No, but it makes the sessions Medicare-rebatable. You can see a psychologist privately without a plan, and this may suit some patients (particularly where confidentiality preferences make a formal plan uncomfortable)." } },
          { "@type": "Question", name: "How long is the Mental Health Care Plan consultation?", acceptedAnswer: { "@type": "Answer", text: "It's a longer appointment than a standard consultation, typically 30 to 60 minutes." } },
          { "@type": "Question", name: "Can I see any psychologist under my Mental Health Care Plan?", acceptedAnswer: { "@type": "Answer", text: "The plan can refer to any registered psychologist or allied mental health practitioner who bulk-bills or privately bills with a Medicare rebate. Your GP typically refers within SMSG for continuity of care, but you can request a specific practitioner." } },
          { "@type": "Question", name: "What if I need urgent mental health support?", acceptedAnswer: { "@type": "Answer", text: "For a mental health crisis, dial 000 or attend an emergency department. For urgent but not life-threatening support, Lifeline (13 11 14) is available 24/7." } },
          { "@type": "Question", name: "What about children and adolescents?", acceptedAnswer: { "@type": "Answer", text: "Children and adolescents can access mental health care through your GP and Kids' Dr. Sandra Bell, Sue Boursiani and Cara Chillari work with young people." } },
          { "@type": "Question", name: "Does SMSG have a psychiatrist?", acceptedAnswer: { "@type": "Answer", text: "SMSG does not currently have a psychiatrist on-site. Where psychiatric review is needed, your GP arranges a referral to an appropriate external specialist." } },
        ],
      },
    ],
  };
}
