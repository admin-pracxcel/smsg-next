export function buildSkinCancerAwarenessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MedicalOrganization", "@id": "https://smsg.au/#org", name: "Specialist Medical Services Group", alternateName: "SMSG", url: "https://smsg.au/" },
      { "@type": "MedicalClinic", "@id": "https://smsg.au/clarion-skin-cancer-clinic/#brand", name: "Clarion Skin Cancer Clinic", url: "https://smsg.au/clarion-skin-cancer-clinic/", parentOrganization: { "@id": "https://smsg.au/#org" } },
      {
        "@type": "MedicalWebPage",
        "@id": "https://smsg.au/skin-cancer-awareness/#webpage",
        url: "https://smsg.au/skin-cancer-awareness/",
        name: "Skin Cancer Awareness | Clarion Skin Cancer Clinic at SMSG",
        inLanguage: "en-AU",
        about: {
          "@type": "MedicalCondition",
          name: "Skin cancer",
          alternateName: ["Melanoma", "Basal cell carcinoma", "Squamous cell carcinoma"],
        },
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/skin-cancer-awareness/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Care", item: "https://smsg.au/#care" },
          { "@type": "ListItem", position: 3, name: "Clarion Skin Cancer Clinic", item: "https://smsg.au/clarion-skin-cancer-clinic/" },
          { "@type": "ListItem", position: 4, name: "Skin Cancer Awareness", item: "https://smsg.au/skin-cancer-awareness/" },
        ],
      },
    ],
  };
}
