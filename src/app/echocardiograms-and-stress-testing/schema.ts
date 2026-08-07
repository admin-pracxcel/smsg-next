export function buildEchocardiogramsSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/echocardiograms-and-stress-testing/#service",
        name: "Echocardiograms & Stress Testing",
        url: "https://smsg.au/echocardiograms-and-stress-testing/",
        description: "Echocardiogram and cardiac stress testing services. Arranged on GP or specialist referral. Reception can confirm availability at each centre.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/echocardiograms-and-stress-testing/#webpage", url: "https://smsg.au/echocardiograms-and-stress-testing/", name: "Echocardiograms & Stress Testing | Diagnostics at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/echocardiograms-and-stress-testing/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/echocardiograms-and-stress-testing/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Diagnostics & On-Site", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Echocardiograms & Stress Testing", item: "https://smsg.au/echocardiograms-and-stress-testing/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/echocardiograms-and-stress-testing/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "Yes. Cardiac diagnostic tests require a referral from a GP or specialist for the Medicare rebate to apply." } },
          { "@type": "Question", name: "Is an echocardiogram painful?", acceptedAnswer: { "@type": "Answer", text: "No. An echocardiogram is a non-invasive ultrasound test. You feel the pressure of the probe on your chest and the gel used to improve image quality, but no pain." } },
          { "@type": "Question", name: "How do I prepare for a stress test?", acceptedAnswer: { "@type": "Answer", text: "Wear comfortable clothing and walking shoes. Avoid caffeine for 24 hours before the test. Some medications may need to be paused; your doctor will let you know if this applies to you." } },
          { "@type": "Question", name: "Can I drive home after an echocardiogram or stress test?", acceptedAnswer: { "@type": "Answer", text: "Yes, in most cases. If you're having a stress test with medication rather than exercise (rare in general practice), specific advice will be given." } },
          { "@type": "Question", name: "How long do results take?", acceptedAnswer: { "@type": "Answer", text: "Reports are typically available within a few days. Discuss results with the ordering doctor." } },
          { "@type": "Question", name: "What about an ECG?", acceptedAnswer: { "@type": "Answer", text: "Standard ECGs (single-time recording of heart electrical activity) are done in the treatment room, not through this pathway. See Treatment Room & Procedures." } },
          { "@type": "Question", name: "Are stress tests risky?", acceptedAnswer: { "@type": "Answer", text: "Stress tests are generally safe. They're conducted with close monitoring and appropriate safety precautions. Your doctor will discuss any specific considerations for your situation." } },
        ],
      },
    ],
  };
}
