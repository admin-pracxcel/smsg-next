export function buildSkinChecksSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/clarion-skin-cancer-clinic/#brand", name: "Clarion Skin Cancer Clinic", url: "https://smsg.au/clarion-skin-cancer-clinic/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/full-body-skin-checks/#service",
        name: "Full-Body Skin Check",
        url: "https://smsg.au/full-body-skin-checks/",
        description: "Full-body skin cancer checks with dermoscopy across Earlwood, Bangor and Sans Souci. Systematic examination for early detection of skin cancer.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/full-body-skin-checks/#webpage", url: "https://smsg.au/full-body-skin-checks/", name: "Full-Body Skin Checks | Clarion Skin Cancer Clinic at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/full-body-skin-checks/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/full-body-skin-checks/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Clarion Skin Cancer Clinic", item: "https://smsg.au/clarion-skin-cancer-clinic/" },
          { "@type": "ListItem", position: 4, name: "Full-Body Skin Checks", item: "https://smsg.au/full-body-skin-checks/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/full-body-skin-checks/#faq",
        mainEntity: [
          { "@type": "Question", name: "How often should I have a skin check?", acceptedAnswer: { "@type": "Answer", text: "That depends on your risk profile. Your GP will recommend an interval after your first check. Common intervals range from 6 months to 3 years, based on individual risk." } },
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Skin checks are a GP service and don't require a referral." } },
          { "@type": "Question", name: "How long does a check take?", acceptedAnswer: { "@type": "Answer", text: "Typically 20 to 40 minutes, longer if there are many spots to examine or if a biopsy is done on the day." } },
          { "@type": "Question", name: "Can I bring a friend or family member?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you're comfortable, having someone present is fine." } },
          { "@type": "Question", name: "What if I only want a specific spot checked?", acceptedAnswer: { "@type": "Answer", text: "That's fine. Book a shorter appointment for the specific concern. A full-body check can be done separately." } },
          { "@type": "Question", name: "Will my genital area be checked?", acceptedAnswer: { "@type": "Answer", text: "The examination includes all skin surfaces where skin cancer can occur. Your GP will ask before examining any area and you can decline any part of the check." } },
          { "@type": "Question", name: "What if a biopsy is needed?", acceptedAnswer: { "@type": "Answer", text: "Biopsy involves removing a small piece of the lesion for laboratory examination. Local anaesthetic is used. Your GP will explain what's involved and what to expect." } },
        ],
      },
    ],
  };
}
