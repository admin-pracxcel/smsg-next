/**
 * Practitioner JSON-LD schema graph builder.
 *
 * Ported from src/app/dr-tao-geng/schema.ts, parameterised so every
 * practitioner page emits the same graph shape driven off its JSON.
 *
 * Returns an array of nodes; the calling page wraps them in a single
 * `@context` / `@graph` object at render time so `<JsonLd>` emits one script.
 */

import type { Practitioner } from "@/lib/schemas/practitioner";
import { CLINICS, type ClinicKey } from "@/lib/clinics";

/** Clinic node factory · one per consulting_at entry. */
function clinicNode(key: ClinicKey) {
  const c = CLINICS[key];
  return {
    "@type": ["MedicalClinic", "LocalBusiness"] as const,
    "@id": `https://smsg.au/${c.slug}/#loc`,
    name: c.label,
    url: `https://smsg.au/${c.slug}`,
    telephone: c.phone,
    email: c.email,
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: c.address,
      addressLocality: c.shortLabel,
      addressRegion: "NSW",
      addressCountry: "AU",
    },
  };
}

/** Normalise the practitioner breadcrumb team_type_href into an absolute URL. */
function absoluteTeamHref(relOrRoot: string): string {
  const rootRel = relOrRoot.startsWith("../")
    ? "/" + relOrRoot.slice(3)
    : relOrRoot;
  return `https://smsg.au${rootRel.startsWith("/") ? "" : "/"}${rootRel}`;
}

export function buildPractitionerSchema(p: Practitioner): unknown[] {
  const personId = `https://smsg.au/${p.slug}/#person`;
  const canonical = p.seo.canonical;

  const clinics = p.clinics.consulting_at.map(clinicNode);
  const worksFor = p.clinics.consulting_at.map((key) => ({
    "@id": `https://smsg.au/${CLINICS[key].slug}/#loc`,
  }));

  const hasCredential = (p.fellowships.length > 0
    ? p.fellowships
    : p.credentials.post_nominal
      ? p.credentials.post_nominal.split(/,\s*/).filter(Boolean)
      : []
  ).map((name) => ({
    "@type": "EducationalOccupationalCredential" as const,
    credentialCategory: /fellow|frac|racgp|fracp/i.test(name)
      ? "fellowship"
      : "degree",
    name,
  }));

  const person: Record<string, unknown> = {
    "@type": ["Physician", "Person"],
    "@id": personId,
    name: p.identity.full_name,
    givenName: p.identity.first_name,
    familyName: p.identity.last_name,
    url: canonical,
    jobTitle: p.credentials.role_title,
    worksFor,
    parentOrganization: { "@id": "https://smsg.au/#org" },
  };

  if (p.identity.salutation) person.honorificPrefix = p.identity.salutation;
  if (p.portrait?.src && !p.portrait.is_placeholder) {
    person.image = p.portrait.src.startsWith("../")
      ? `https://smsg.au/${p.portrait.src.slice(3)}`
      : p.portrait.src;
  }
  if (p.credentials.ahpra) {
    person.identifier = {
      "@type": "PropertyValue",
      propertyID: "AHPRA",
      value: p.credentials.ahpra,
    };
  }
  if (hasCredential.length > 0) person.hasCredential = hasCredential;
  if (p.credentials.medical_specialty) {
    person.medicalSpecialty = p.credentials.medical_specialty;
  }
  if (p.languages.length > 0) person.knowsLanguage = p.languages;
  if (p.awards.length > 0) person.award = p.awards;

  const org = {
    "@type": "MedicalOrganization" as const,
    "@id": "https://smsg.au/#org",
    name: "Specialist Medical Services Group",
    alternateName: "SMSG",
    url: "https://smsg.au/",
    foundingDate: "2014",
  };

  const breadcrumb = {
    "@type": "BreadcrumbList" as const,
    itemListElement: [
      {
        "@type": "ListItem" as const,
        position: 1,
        name: "SMSG",
        item: "https://smsg.au/",
      },
      {
        "@type": "ListItem" as const,
        position: 2,
        name: "The Team",
        item: "https://smsg.au/team/",
      },
      {
        "@type": "ListItem" as const,
        position: 3,
        name: p.breadcrumb.team_type_label,
        item: absoluteTeamHref(p.breadcrumb.team_type_href),
      },
      {
        "@type": "ListItem" as const,
        position: 4,
        name: p.identity.full_name,
        item: canonical,
      },
    ],
  };

  const webPage = {
    "@type": "WebPage" as const,
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: p.seo.title,
    inLanguage: "en-AU",
    about: { "@id": personId },
    isPartOf: { "@id": "https://smsg.au/#org" },
  };

  return [person, org, ...clinics, breadcrumb, webPage];
}
