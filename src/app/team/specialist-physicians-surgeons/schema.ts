/**
 * JSON-LD for the specialist physicians & surgeons directory.
 * Maps role_title into MedicalSpecialty tokens where possible.
 */

import type { Practitioner } from "@/lib/schemas/practitioner";
import { routes } from "@/lib/routes";

const SITE = "https://smsg.au";

function specialtyFor(roleTitle: string): string {
  const t = roleTitle.toLowerCase();
  if (t.includes("cardio")) return "Cardiovascular";
  if (t.includes("endocrin")) return "Endocrine";
  if (t.includes("gastro")) return "Gastroenterologic";
  if (t.includes("geriatr")) return "Geriatric";
  if (t.includes("haemat") || t.includes("hemat")) return "Hematologic";
  if (t.includes("nephrol")) return "RenalMedicine";
  if (t.includes("paediatr") || t.includes("pediatr")) return "Pediatrics";
  if (t.includes("respirat") || t.includes("sleep")) return "PulmonaryMedicine";
  return "Medicine";
}

export function buildSpecialistDirectorySchema(specialists: Practitioner[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE}/team/specialist-physicians-surgeons/#webpage`,
        url: `${SITE}/team/specialist-physicians-surgeons/`,
        name: "Specialist Physicians & Surgeons | SMSG",
        inLanguage: "en-AU",
        isPartOf: { "@id": `${SITE}/#org` },
        breadcrumb: {
          "@id": `${SITE}/team/specialist-physicians-surgeons/#breadcrumbs`,
        },
      },
      {
        "@type": "ItemList",
        "@id": `${SITE}/team/specialist-physicians-surgeons/#list`,
        numberOfItems: specialists.length,
        itemListElement: specialists.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Physician",
            name: p.identity.full_name,
            medicalSpecialty: specialtyFor(p.credentials.role_title),
            url: `${SITE}${routes.practitioner(p.slug)}`,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE}/team/specialist-physicians-surgeons/#breadcrumbs`,
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
            name: "Specialist Physicians & Surgeons",
            item: `${SITE}/team/specialist-physicians-surgeons/`,
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
