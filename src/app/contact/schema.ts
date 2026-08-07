import { CLINICS } from "@/lib/clinics";

// Split a suburbLine like "Earlwood NSW 2206" or "121 Yala Road, Bangor NSW 2234"
// into a PostalAddress-ish shape. Falls back to the full string in addressLocality.
function parseSuburbLine(address: string, suburbLine: string) {
  // Match trailing "Suburb NSW 2206" at end of suburbLine.
  const trailingRe = /([A-Za-z' \-]+?)\s+NSW\s+(\d{4})\s*$/;
  const match = suburbLine.match(trailingRe);
  const streetPreamble = suburbLine.replace(trailingRe, "").replace(/,\s*$/, "").trim();
  const streetAddress = streetPreamble.length > 0 ? `${address}, ${streetPreamble}` : address;
  return {
    "@type": "PostalAddress" as const,
    streetAddress,
    addressLocality: match ? match[1].trim() : suburbLine,
    addressRegion: "NSW",
    postalCode: match ? match[2] : undefined,
    addressCountry: "AU",
  };
}

type HoursSpec = {
  weekday: string;
  saturday?: string;
};

// Static per-clinic hours mirrored from the page copy (weekday 09:00-18:00
// across all three; Earlwood additionally opens Saturday 09:00-15:00).
const HOURS: Record<string, HoursSpec> = {
  earlwood: { weekday: "09:00-18:00", saturday: "09:00-15:00" },
  bangor: { weekday: "09:00-18:00" },
  sanssouci: { weekday: "09:00-18:00" },
};

function openingHoursFor(key: string) {
  const h = HOURS[key];
  if (!h) return undefined;
  const [weekOpen, weekClose] = h.weekday.split("-");
  const spec: Array<Record<string, unknown>> = [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: weekOpen,
      closes: weekClose,
    },
  ];
  if (h.saturday) {
    const [satOpen, satClose] = h.saturday.split("-");
    spec.push({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: satOpen,
      closes: satClose,
    });
  }
  return spec;
}

export function buildContactSchema() {
  const clinicLocations = Object.values(CLINICS).map((c) => {
    const mapQuery = encodeURIComponent(`${c.address}, ${c.suburbLine}`);
    const hasMap = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=`;
    return {
      "@type": "MedicalClinic",
      "@id": `https://smsg.au/${c.slug}/#brand`,
      name: c.label,
      url: `https://smsg.au/${c.slug}/`,
      telephone: c.phone,
      email: c.email,
      address: parseSuburbLine(c.address, c.suburbLine),
      hasMap,
      openingHoursSpecification: openingHoursFor(c.key),
      parentOrganization: { "@id": "https://smsg.au/#org" },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://smsg.au/#org",
        name: "Specialist Medical Services Group",
        alternateName: "SMSG",
        url: "https://smsg.au/",
      },
      ...clinicLocations,
      {
        "@type": "WebPage",
        "@id": "https://smsg.au/contact/#webpage",
        url: "https://smsg.au/contact/",
        name: "Contact SMSG | Specialist Medical Services Group",
        inLanguage: "en-AU",
        isPartOf: { "@id": "https://smsg.au/#org" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://smsg.au/contact/#breadcrumbs",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "SMSG", item: "https://smsg.au/" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://smsg.au/contact/" },
        ],
      },
    ],
  };
}
