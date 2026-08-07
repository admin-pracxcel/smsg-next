/**
 * JSON-LD for the Administration page. Admin staff are Persons with roles.
 */

import type { AdminCard } from "./content";

const SITE = "https://smsg.au";

export function buildAdminSchema(staff: AdminCard[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/team/administration/#webpage`,
        url: `${SITE}/team/administration/`,
        name: "Administration | SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE}/#org` },
        breadcrumb: { "@id": `${SITE}/team/administration/#breadcrumbs` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/team/administration/#list`,
        numberOfItems: staff.length,
        itemListElement: staff.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            name: s.name,
            jobTitle: s.role,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/team/administration/#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: `${SITE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "The Team",
            item: `${SITE}/team/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Administration",
            item: `${SITE}/team/administration/`,
          },
        ],
      },
      {
        "@type": "MedicalOrganization",
        "@id": `${SITE}/#org`,
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: `${SITE}/`,
      },
    ],
  };
}
