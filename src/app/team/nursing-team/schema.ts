/**
 * JSON-LD for the Nursing Team page. Nurses aren't in the Physician schema,
 * so we emit them as Persons with a Nurse jobTitle.
 */

import type { NurseCard } from "./content";

const SITE = "https://smsg.au";

export function buildNursingSchema(nurses: NurseCard[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/team/nursing-team/#webpage`,
        url: `${SITE}/team/nursing-team/`,
        name: "Nursing Team | SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE}/#org` },
        breadcrumb: { "@id": `${SITE}/team/nursing-team/#breadcrumbs` },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/team/nursing-team/#list`,
        numberOfItems: nurses.length,
        itemListElement: nurses.map((n, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            name: n.name,
            jobTitle: n.role,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/team/nursing-team/#breadcrumbs`,
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
            name: "Nursing Team",
            item: `${SITE}/team/nursing-team/`,
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
