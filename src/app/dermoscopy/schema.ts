export function buildDermoscopySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/clarion-skin-cancer-clinic/#brand", name: "Clarion Skin Cancer Clinic", url: "https://smsg.au/clarion-skin-cancer-clinic/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/dermoscopy/#service",
        name: "Dermoscopy",
        url: "https://smsg.au/dermoscopy/",
        description: "Dermoscopy is the magnification technique that lets a GP see features of the skin invisible to the naked eye. Used throughout Clarion skin checks and lesion assessments.",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/dermoscopy/#webpage", url: "https://smsg.au/dermoscopy/", name: "Dermoscopy | Clarion Skin Cancer Clinic at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/dermoscopy/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/dermoscopy/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Clarion Skin Cancer Clinic", item: "https://smsg.au/clarion-skin-cancer-clinic/" },
          { "@type": "ListItem", position: 4, name: "Dermoscopy", item: "https://smsg.au/dermoscopy/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/dermoscopy/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Skin checks and lesion assessments including dermoscopy are GP services." } },
          { "@type": "Question", name: "Does dermoscopy hurt?", acceptedAnswer: { "@type": "Answer", text: "No. The dermatoscope is a hand-held device placed on the surface of the skin. There's no needle, no cutting, and no pain." } },
          { "@type": "Question", name: "Can I have just my mole checked?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you have a single spot of concern, book a shorter appointment. Your GP will examine it with dermoscopy and advise on next steps." } },
          { "@type": "Question", name: "Do I need dermoscopy every time?", acceptedAnswer: { "@type": "Answer", text: "Dermoscopy is used routinely at Clarion for spots that need closer inspection. It's part of good skin cancer practice." } },
          { "@type": "Question", name: "Is dermoscopy the same as a digital body map?", acceptedAnswer: { "@type": "Answer", text: "Digital body maps use photography to record the position of your moles for comparison over time. This is a separate service and may not be routinely offered at all Clarion appointments. Ask your GP whether it's appropriate for your risk profile." } },
          { "@type": "Question", name: "Can dermoscopy replace a biopsy?", acceptedAnswer: { "@type": "Answer", text: "No. Dermoscopy supports the decision about whether a lesion needs biopsy. Histology is required for final diagnosis of any suspicious lesion." } },
        ],
      },
    ],
  };
}
