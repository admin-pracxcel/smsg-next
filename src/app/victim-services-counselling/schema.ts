export function buildVictimServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/victim-services-counselling/#service",
        name: "Victim Services Counselling",
        url: "https://smsg.au/victim-services-counselling/",
        description: "Counselling for victims of violent crime in NSW, provided in coordination with Victims Services NSW. Trauma-informed support across Earlwood, Bangor and Sans Souci.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/victim-services-counselling/#webpage", url: "https://smsg.au/victim-services-counselling/", name: "Victim Services Counselling | Allied Health at SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/victim-services-counselling/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/victim-services-counselling/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Allied Health", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Victim Services Counselling", item: "https://smsg.au/victim-services-counselling/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/victim-services-counselling/#faq",
        mainEntity: [
          { "@type": "Question", name: "Do I need to have reported the crime to police?", acceptedAnswer: { "@type": "Answer", text: "Support through Victims Services NSW does not require police reporting. Eligibility criteria are set by Victims Services NSW." } },
          { "@type": "Question", name: "How do I register with Victims Services NSW?", acceptedAnswer: { "@type": "Answer", text: "Contact the Victims Access Line on 1800 633 063 or visit victimsservices.justice.nsw.gov.au. Our reception team can also help direct you." } },
          { "@type": "Question", name: "Is what I share confidential?", acceptedAnswer: { "@type": "Answer", text: "Yes, with the standard limits that apply to all therapy: your counsellor may need to act on specific safety concerns (immediate risk to yourself or others, harm to a child). Your counsellor will explain this at the first session." } },
          { "@type": "Question", name: "Can I bring a family member to the session?", acceptedAnswer: { "@type": "Answer", text: "That's up to you and your counsellor. Some sessions include family members; most are individual." } },
          { "@type": "Question", name: "What if I'm not eligible for Victims Services NSW support?", acceptedAnswer: { "@type": "Answer", text: "Standard psychology and counselling remains available. Discuss with reception what options fit your situation. Trauma-informed care is available regardless of eligibility for the Victims Services scheme." } },
          { "@type": "Question", name: "Are your counsellors approved by Victims Services NSW?", acceptedAnswer: { "@type": "Answer", text: "Our counsellors work with Victims Services NSW referrals. Reception can confirm specific approvals for the practitioner you'd like to see." } },
          { "@type": "Question", name: "What if I need urgent support?", acceptedAnswer: { "@type": "Answer", text: "For an immediate mental health crisis or safety concern, dial 000 or call Lifeline on 13 11 14. 1800RESPECT (1800 737 732) provides 24-hour national sexual assault and domestic violence support." } },
        ],
      },
    ],
  };
}
