export function buildExcisionSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/clarion-skin-cancer-clinic/#brand", name: "Clarion Skin Cancer Clinic", url: "https://smsg.au/clarion-skin-cancer-clinic/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/excision-procedures/#service",
        name: "Skin Lesion Excision",
        url: "https://smsg.au/excision-procedures/",
        description: "Skin lesion excision procedures across Earlwood, Bangor and Sans Souci. Removal of confirmed or suspected skin cancers under local anaesthetic.",
        procedureType: "https://schema.org/SurgicalProcedure",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/excision-procedures/#webpage", url: "https://smsg.au/excision-procedures/", name: "Excision Procedures | Clarion Skin Cancer Clinic at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/excision-procedures/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/excision-procedures/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Clarion Skin Cancer Clinic", item: "https://smsg.au/clarion-skin-cancer-clinic/" },
          { "@type": "ListItem", position: 4, name: "Excision Procedures", item: "https://smsg.au/excision-procedures/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/excision-procedures/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Excisions performed by Clarion GPs are a GP service and don't require a specialist referral." } },
          { "@type": "Question", name: "Will I have a scar?", acceptedAnswer: { "@type": "Answer", text: "All excisions leave a scar. The size and appearance depend on the location, size of the lesion, and how your skin heals. Your GP will explain expected scarring for your specific case." } },
          { "@type": "Question", name: "How painful is it?", acceptedAnswer: { "@type": "Answer", text: "The injection of local anaesthetic can sting for a few seconds. Once the area is numb, you shouldn't feel pain during the procedure. Some soreness afterwards is normal and usually well-managed with paracetamol." } },
          { "@type": "Question", name: "Can I drive home?", acceptedAnswer: { "@type": "Answer", text: "Yes, in most cases. Local anaesthetic doesn't affect your ability to drive." } },
          { "@type": "Question", name: "Can I go back to work?", acceptedAnswer: { "@type": "Answer", text: "Most people return to work the same day or the next day. Physical work may need to be modified until the wound heals." } },
          { "@type": "Question", name: "What if the excised lesion is a cancer?", acceptedAnswer: { "@type": "Answer", text: "Your GP will explain the pathology, what it means, and the follow-up plan. Not all skin cancers need additional treatment after excision. Some need further excision for clear margins, and some need specialist referral." } },
          { "@type": "Question", name: "Are there risks?", acceptedAnswer: { "@type": "Answer", text: "As with any minor procedure, there are risks including infection, bleeding, delayed healing, scar concerns and, rarely, reaction to local anaesthetic. Your GP explains these before the procedure." } },
        ],
      },
    ],
  };
}
