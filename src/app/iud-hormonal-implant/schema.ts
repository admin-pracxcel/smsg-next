/**
 * JSON-LD graph for the IUD service-spoke page. Ported verbatim from
 * source `/iud-hormonal-implant/index.html` (lines 1993-2108). URLs are
 * left as smsg.au canonicals; the source hardcodes them.
 */

export function buildIudSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "@id": "https://smsg.au/iud-hormonal-implant/#service",
        name: "Hormonal IUD and Contraceptive Implant",
        url: "https://smsg.au/iud-hormonal-implant",
        description:
          "Long-acting reversible contraception (LARC), including hormonal IUD and contraceptive implant, inserted and removed by experienced female GPs at Aurora Women & Babies Health within SMSG.",
        procedureType: "https://schema.org/TherapeuticProcedure",
        bodyLocation: ["Uterus", "Upper arm subdermal"],
        howPerformed:
          "In-clinic procedure by an experienced female GP, with a preliminary consultation and follow-up review.",
        preparation:
          "Preliminary consultation with your GP to discuss history, options, and timing within the cycle.",
        followup:
          "Short review appointment scheduled a few weeks after insertion.",
        provider: [
          {
            "@type": "Physician",
            name: "Dr Tao Geng",
            url: "https://smsg.au/gps/dr-tao-geng",
            medicalSpecialty: "GeneralPractice",
          },
          { "@type": "Physician", name: "Dr Chelsie Tan", medicalSpecialty: "GeneralPractice" },
          { "@type": "Physician", name: "Dr Huiling Li", medicalSpecialty: "GeneralPractice" },
          { "@type": "Physician", name: "Dr Marloes Nordkamp", medicalSpecialty: "GeneralPractice" },
          { "@type": "Physician", name: "Dr Margaret Colwell", medicalSpecialty: "GeneralPractice" },
          { "@type": "Physician", name: "Dr Jonathan Moore", medicalSpecialty: "GeneralPractice" },
        ],
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://smsg.au/aurora-women-and-babies-health/#brand",
        name: "Aurora Women & Babies Health",
        url: "https://smsg.au/aurora-women-and-babies-health",
        parentOrganization: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
        foundingDate: "2014",
      },
      {
        "@type": "FAQPage",
        "@id": "https://smsg.au/iud-hormonal-implant/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Does an IUD or contraceptive implant hurt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Some cramping is normal during and after an IUD insertion. We take time to talk through what to expect, use local anaesthetic where appropriate, and give you the option of simple pain relief beforehand. Most patients describe brief discomfort rather than pain. For the implant, the sensation is limited to a small local anaesthetic and a very quick placement.",
            },
          },
          {
            "@type": "Question",
            name: "How soon does an IUD or contraceptive implant start working?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your GP will explain when protection starts based on the timing of insertion in your cycle, and whether you need backup contraception in the meantime.",
            },
          },
          {
            "@type": "Question",
            name: "Can I have my IUD or contraceptive implant removed early if I want to try for a baby?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Both options are fully reversible. Fertility usually returns quickly after removal, and many women conceive within the first cycle or two.",
            },
          },
          {
            "@type": "Question",
            name: "Can I have an IUD if I've never had a baby?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Hormonal IUDs suit most women, whether or not they have had children. Your GP will talk through the specifics with you at your consultation.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a referral for an IUD or contraceptive implant?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, you can book directly with any Aurora GP.",
            },
          },
          {
            "@type": "Question",
            name: "What if the IUD or contraceptive implant doesn't suit me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "If you're finding side effects difficult, or the option isn't working the way you hoped, come back and see us. We can review, discuss alternatives, and remove it whenever you decide.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "SMSG",
            item: "https://smsg.au/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Care",
            item: "https://smsg.au/care",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Aurora Women & Babies Health",
            item: "https://smsg.au/aurora-women-and-babies-health",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Hormonal IUD and Contraceptive Implant",
            item: "https://smsg.au/iud-hormonal-implant",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/iud-hormonal-implant/#webpage",
        url: "https://smsg.au/iud-hormonal-implant",
        name: "Hormonal IUD and Contraceptive Implant | Aurora at SMSG",
        inLanguage: "en-AU",
        about: { "@id": "https://smsg.au/iud-hormonal-implant/#service" },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
    ],
  };
}
