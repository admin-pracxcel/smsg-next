/**
 * Sub-brand registry. Keys match the `sub_brand_keys` in practitioner JSON.
 * Never invent a new sub-brand key without adding it here.
 */

export const SUB_BRAND_KEYS = [
  "aurora",
  "kidsdr",
  "excelsia",
  "clarion",
  "sydneycosmedic",
] as const;
export type SubBrandKey = (typeof SUB_BRAND_KEYS)[number];

export const SUB_BRANDS: Record<
  SubBrandKey,
  {
    key: SubBrandKey;
    label: string;
    shortLabel: string;
    slug: string;
    dotColor: string;
    accent: string;
    accentDeep: string;
    /** One-line evergreen blurb for cross-brand cards. */
    blurb: string;
  }
> = {
  aurora: {
    key: "aurora",
    label: "Aurora Women & Babies Health",
    shortLabel: "Aurora",
    slug: "aurora-women-and-babies-health",
    dotColor: "#D9A79A",
    accent: "var(--aurora)",
    accentDeep: "var(--aurora-deep)",
    blurb: "Women's and babies' health, from pregnancy through menopause.",
  },
  kidsdr: {
    key: "kidsdr",
    label: "Kids' Dr",
    shortLabel: "Kids' Dr",
    slug: "kids-dr",
    dotColor: "#E9B84A",
    accent: "var(--kids)",
    accentDeep: "#B78E2E",
    blurb: "Paediatric care through the transition to parenthood and beyond.",
  },
  excelsia: {
    key: "excelsia",
    label: "Excelsia Specialist Centre",
    shortLabel: "Excelsia",
    slug: "excelsia-specialist-centre",
    dotColor: "#6B8E9E",
    accent: "var(--excelsia)",
    accentDeep: "#4A6B7A",
    blurb: "Consultant physicians and surgeons, no city trip.",
  },
  clarion: {
    key: "clarion",
    label: "Clarion Skin Cancer Clinic",
    shortLabel: "Clarion",
    slug: "clarion-skin-cancer-clinic",
    dotColor: "#B44468",
    accent: "var(--clarion)",
    accentDeep: "#8B2E4A",
    blurb: "Skin cancer detection, dermoscopy and excision, medically led.",
  },
  sydneycosmedic: {
    key: "sydneycosmedic",
    label: "Sydney Cosmedic",
    shortLabel: "Cosmedic",
    slug: "sydney-cosmedic",
    dotColor: "#C9748B",
    accent: "var(--cosmedic)",
    accentDeep: "#9C4D65",
    blurb: "Non-surgical cosmetic care from medically-qualified practitioners.",
  },
};

export const subBrandList = SUB_BRAND_KEYS.map((k) => SUB_BRANDS[k]);

/**
 * Returns the OTHER four sub-brands as related-card items, ready to pass
 * to `<SubBrandRelatedPages items={...}>`. Used at the foot of each hub.
 */
export function getOtherSubBrandItems(current: SubBrandKey) {
  return SUB_BRAND_KEYS.filter((k) => k !== current).map((k) => {
    const b = SUB_BRANDS[k];
    return {
      eyebrow: "Sub-brand",
      title: b.label,
      body: b.blurb,
      href: `/${b.slug}/`,
      dotColor: b.dotColor,
    };
  });
}
