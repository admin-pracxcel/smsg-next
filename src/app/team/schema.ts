/**
 * Team hub JSON-LD. CollectionPage listing the five team directories,
 * plus a BreadcrumbList back to the SMSG root.
 */

const SITE = "https://smsg.au";

export function buildTeamHubSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/team/#webpage`,
        url: `${SITE}/team/`,
        name: "The Team | Specialist Medical Services Group",
        description:
          "GPs, specialists, allied health, nursing and administration teams across Earlwood, Bangor and Sans Souci.",
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE}/#org` },
        breadcrumb: { "@id": `${SITE}/team/#breadcrumbs` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/team/#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "SMSG",
            item: `${SITE}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Team",
            item: `${SITE}/team/`,
          },
        ],
      },
      {
        "@type": "MedicalOrganization",
        "@id": `${SITE}/#org`,
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: `${SITE}/`,
        foundingDate: "2014",
      },
    ],
  };
}
