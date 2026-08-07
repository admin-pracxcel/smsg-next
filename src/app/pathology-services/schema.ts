export function buildPathologyServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/pathology-services/#service",
        name: "Pathology Services",
        url: "https://smsg.au/pathology-services/",
        description: "On-site pathology collection at Earlwood, Bangor and Sans Souci. Blood tests, urine, and other specimen collection for tests requested by your GP or specialist.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/pathology-services/#webpage", url: "https://smsg.au/pathology-services/", name: "Pathology Services | Diagnostics at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/pathology-services/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/pathology-services/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Diagnostics & On-Site", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Pathology Services", item: "https://smsg.au/pathology-services/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/pathology-services/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to make an appointment for pathology?", acceptedAnswer: { "@type": "Answer", text: "Not always. If you have a request form, you can attend reception during opening hours. For fasting bloods or timed samples, timing matters, so check with reception if you're unsure." } },
          { "@type": "Question", name: "Do I need to fast?", acceptedAnswer: { "@type": "Answer", text: "Only for specific tests. Your GP will let you know if fasting is required. Fasting typically means no food or drink other than water for 8 to 12 hours before the test." } },
          { "@type": "Question", name: "Can I have pathology done at any SMSG centre?", acceptedAnswer: { "@type": "Answer", text: "Yes. If your request form was written by an external doctor, you can still have the sample taken at any SMSG centre." } },
          { "@type": "Question", name: "Are all blood tests bulk-billed?", acceptedAnswer: { "@type": "Answer", text: "Most standard blood tests are bulk-billed to Medicare. Some specialised tests and non-Medicare tests attract a private fee. Your GP will let you know if this applies." } },
          { "@type": "Question", name: "How long do results take?", acceptedAnswer: { "@type": "Answer", text: "Standard blood tests: 1 to 3 business days. Imaging and specialised tests: 1 to 5 business days. Some specialised pathology (histology, genetic testing) can take up to 2 weeks." } },
          { "@type": "Question", name: "Can I have my Cervical Screening Test done here?", acceptedAnswer: { "@type": "Answer", text: "Yes. Cervical Screening Tests are done during a consultation with a GP. See our Cervical Screening page for details." } },
          { "@type": "Question", name: "What if I can't reach reception for a result?", acceptedAnswer: { "@type": "Answer", text: "Book a follow-up appointment with your GP. Results are the doctor's to explain and act on. See our Results Policy for details." } },
        ],
      },
    ],
  };
}
