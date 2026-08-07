export function buildPreventiveCareSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/general-practice-and-preventive-care/#service",
        name: "General Practice and Preventive Care",
        url: "https://smsg.au/general-practice-and-preventive-care/",
        description: "Health assessments, bowel cancer screening, men's and women's health checks with SMSG GPs across Earlwood, Bangor and Sans Souci.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/general-practice-and-preventive-care/#webpage", url: "https://smsg.au/general-practice-and-preventive-care/", name: "General Practice & Preventive Care | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/general-practice-and-preventive-care/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/general-practice-and-preventive-care/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "General Practice & Preventive Care", item: "https://smsg.au/general-practice-and-preventive-care/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/general-practice-and-preventive-care/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral for a preventive check?", acceptedAnswer: { "@type": "Answer", text: "No. Preventive care with your GP doesn't require a referral." } },
          { "@type": "Question", name: "Am I eligible for the 45 to 49 health assessment?", acceptedAnswer: { "@type": "Answer", text: "The assessment is for adults aged 45 to 49 with at least one chronic disease risk factor. Common risk factors include family history of chronic disease, lifestyle factors, and existing conditions. Ask reception or your GP to check eligibility." } },
          { "@type": "Question", name: "How do I get a bowel cancer screening kit?", acceptedAnswer: { "@type": "Answer", text: "Kits are mailed to eligible Australians automatically. If yours hasn't arrived or you've lost it, you can request a replacement through the National Bowel Cancer Screening Program. Your GP can also help." } },
          { "@type": "Question", name: "What if I'm outside the standard screening age?", acceptedAnswer: { "@type": "Answer", text: "Discuss with your GP. Age-based screening programs are population defaults. Individual risk (family history, previous polyps, symptoms) may warrant different arrangements." } },
          { "@type": "Question", name: "Can I have a general check-up if I'm not due for a specific assessment?", acceptedAnswer: { "@type": "Answer", text: "Yes. Book with your GP and describe what you're looking for. A general review can be structured around your specific concerns." } },
        ],
      },
    ],
  };
}
