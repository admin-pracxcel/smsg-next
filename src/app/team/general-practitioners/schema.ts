/**
 * JSON-LD for the GP directory page. Emits ItemList of Physicians, plus
 * BreadcrumbList and a parent MedicalOrganization reference.
 */

import type { Practitioner } from "@/lib/schemas/practitioner";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

export function buildGpDirectorySchema(gps: Practitioner[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/team/general-practitioners/#webpage`,
        url: `${SITE}/team/general-practitioners/`,
        name: "General Practitioners | SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE}/#org` },
        breadcrumb: {
          "@id": `${SITE}/team/general-practitioners/#breadcrumbs`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/team/general-practitioners/#list`,
        numberOfItems: gps.length,
        itemListElement: gps.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Physician",
            name: p.identity.full_name,
            medicalSpecialty: "GeneralPractice",
            url: `${SITE}${routes.practitioner(p.slug)}`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/team/general-practitioners/#breadcrumbs`,
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
            name: "General Practitioners",
            item: `${SITE}/team/general-practitioners/`,
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
