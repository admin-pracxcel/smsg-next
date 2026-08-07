export function buildPodiatrySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/podiatry/#service",
        name: "Podiatry",
        url: "https://smsg.au/podiatry/",
        description: "Podiatry at Earlwood with Hana Rizk. Foot and lower limb assessment, treatment, and paediatric podiatry through Kids' Dr.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/podiatry/#webpage", url: "https://smsg.au/podiatry/", name: "Podiatry | Allied Health at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/podiatry/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/podiatry/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Allied Health", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Podiatry", item: "https://smsg.au/podiatry/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/podiatry/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Podiatry can be booked directly. A GP referral under a Chronic Disease Management Plan is required to access the Medicare rebate." } },
          { "@type": "Question", name: "How long is a session?", acceptedAnswer: { "@type": "Answer", text: "Initial appointments are typically 30 to 60 minutes depending on the assessment needed. Follow-up appointments are usually 20 to 45 minutes." } },
          { "@type": "Question", name: "Do I need to have diabetes to have a foot check?", acceptedAnswer: { "@type": "Answer", text: "No. Foot checks are useful for people with diabetes because of the specific risks, but anyone with foot concerns can book." } },
          { "@type": "Question", name: "Can podiatrists cut toenails?", acceptedAnswer: { "@type": "Answer", text: "Yes. Podiatrists provide nail care as part of routine podiatry, particularly for patients whose nails are difficult to manage due to thickness, shape, arthritis or vision." } },
          { "@type": "Question", name: "What about custom orthotics?", acceptedAnswer: { "@type": "Answer", text: "Custom orthotics can be prescribed where the biomechanical assessment shows they'll help. Cost of custom orthotics is additional to the consultation and depends on the specific type." } },
          { "@type": "Question", name: "Can Hana see children?", acceptedAnswer: { "@type": "Answer", text: "Yes. Paediatric podiatry is available through Kids' Dr with Hana at Earlwood." } },
          { "@type": "Question", name: "What about corns and callouses?", acceptedAnswer: { "@type": "Answer", text: "Yes. Corn and callus removal is straightforward podiatry care that provides immediate relief." } },
        ],
      },
    ],
  };
}
