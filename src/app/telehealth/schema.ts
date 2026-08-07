export function buildTelehealthSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/telehealth/#service",
        name: "Telehealth",
        url: "https://smsg.au/telehealth/",
        description: "Telehealth consultations by phone or video with SMSG GPs. Available for existing patients across all three centres.",
        provider: { "@id": "https://smsg.au/#org" },
        availableService: "Telehealth consultation",
      },
      { "@type": "WebPage", "@id": "https://smsg.au/telehealth/#webpage", url: "https://smsg.au/telehealth/", name: "Telehealth | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/telehealth/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/telehealth/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Telehealth", item: "https://smsg.au/telehealth/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/telehealth/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need a referral for telehealth?", acceptedAnswer: { "@type": "Answer", text: "No. Telehealth is a mode of consultation, not a separate service. If you're seeing your usual GP, it's booked directly." } },
          { "@type": "Question", name: "Can new patients book telehealth?", acceptedAnswer: { "@type": "Answer", text: "Under Medicare rules, an established relationship is generally required for the Medicare rebate. New patients typically need an in-person consultation first, unless they qualify for one of the exceptions." } },
          { "@type": "Question", name: "Can specialists at Excelsia offer telehealth?", acceptedAnswer: { "@type": "Answer", text: "Yes. Some specialists offer telehealth appointments for eligible patients. Contact reception to ask about a specific specialist." } },
          { "@type": "Question", name: "Is video better than phone?", acceptedAnswer: { "@type": "Answer", text: "For most consultations, either works. Video can help where visual assessment adds something (a skin lesion, a wound, an eye concern). Phone is simpler and doesn't require good internet or a camera." } },
          { "@type": "Question", name: "Is telehealth secure and private?", acceptedAnswer: { "@type": "Answer", text: "Yes. The platforms used are compliant with Australian privacy standards for healthcare. Your consultation notes are kept in your file as they would be for an in-person consultation." } },
          { "@type": "Question", name: "What if the connection drops out during a video call?", acceptedAnswer: { "@type": "Answer", text: "Your GP will try to reconnect. If the connection is unstable, the appointment usually continues by phone." } },
          { "@type": "Question", name: "Can telehealth prescriptions be sent to my pharmacy?", acceptedAnswer: { "@type": "Answer", text: "Yes. Electronic prescriptions are sent to any Australian pharmacy of your choice." } },
        ],
      },
    ],
  };
}
