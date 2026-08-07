export function buildTravelMedicineSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      {
        "@type": "MedicalService",
        "@id": "https://smsg.au/travel-medicine-and-vaccinations/#service",
        name: "Travel Medicine and Vaccinations",
        url: "https://smsg.au/travel-medicine-and-vaccinations/",
        description: "Pre-travel consultations, vaccinations, and childhood immunisations across all three SMSG centres.",
        provider: { "@id": "https://smsg.au/#org" },
      },
      { "@type": "WebPage", "@id": "https://smsg.au/travel-medicine-and-vaccinations/#webpage", url: "https://smsg.au/travel-medicine-and-vaccinations/", name: "Travel Medicine & Vaccinations | SMSG", inLanguage: "en-AU", about: { "@id": "https://smsg.au/travel-medicine-and-vaccinations/#service" }, isPartOf: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/travel-medicine-and-vaccinations/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "General Practice", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 4, name: "Travel Medicine & Vaccinations", item: "https://smsg.au/travel-medicine-and-vaccinations/" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/travel-medicine-and-vaccinations/#faq",
        mainEntity: [
          { "@type": "Question", name: "When should I book my travel consultation?", acceptedAnswer: { "@type": "Answer", text: "Ideally 6 to 8 weeks before you leave. Some vaccine schedules require multiple doses over several weeks. If you're travelling sooner than that, book anyway; we can prioritise the most important vaccines." } },
          { "@type": "Question", name: "Do I need a referral?", acceptedAnswer: { "@type": "Answer", text: "No. Travel medicine and vaccinations are GP services." } },
          { "@type": "Question", name: "How do I find out what vaccines I need for my destination?", acceptedAnswer: { "@type": "Answer", text: "Bring your itinerary to the consultation, including all countries you'll visit and stopover points. Your GP references current recommendations from Smartraveller and the Department of Health." } },
          { "@type": "Question", name: "Can I get Yellow Fever vaccination at SMSG?", acceptedAnswer: { "@type": "Answer", text: "Yellow Fever administration requires specific accreditation. Contact reception to confirm current availability at your preferred centre. If not available, we can direct you to an accredited centre nearby." } },
          { "@type": "Question", name: "Are childhood vaccinations under the National Immunisation Program free?", acceptedAnswer: { "@type": "Answer", text: "Yes. The vaccines themselves are free. A consultation fee may apply for the appointment." } },
          { "@type": "Question", name: "What if my child is behind on the immunisation schedule?", acceptedAnswer: { "@type": "Answer", text: "Catch-up vaccinations can be planned in a longer appointment. Your GP will develop a schedule to bring your child up to date." } },
          { "@type": "Question", name: "Can I get vaccines outside the immunisation schedule?", acceptedAnswer: { "@type": "Answer", text: "Yes. Adults, adolescents and children can be vaccinated for indications outside the NIP schedule where clinically appropriate. Your GP will advise." } },
        ],
      },
    ],
  };
}
