/**
 * JSON-LD for the Allied Health directory. Allied practitioners are Persons
 * with roles rather than Physicians; we emit schema.org/Person entries and
 * an ItemList wrapper.
 */

import type { Practitioner } from "@/lib/schemas/practitioner";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

export function buildAlliedHealthDirectorySchema(people: Practitioner[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/team/allied-health/#webpage`,
        url: `${SITE}/team/allied-health/`,
        name: "Allied Health | SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE}/#org` },
        breadcrumb: {
          "@id": `${SITE}/team/allied-health/#breadcrumbs`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/team/allied-health/#list`,
        numberOfItems: people.length,
        itemListElement: people.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            name: p.identity.full_name,
            jobTitle: p.credentials.role_title,
            url: `${SITE}${routes.practitioner(p.slug)}`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/team/allied-health/#breadcrumbs`,
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
            name: "Allied Health",
            item: `${SITE}/team/allied-health/`,
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
