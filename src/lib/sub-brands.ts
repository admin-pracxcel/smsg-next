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
  },
  kidsdr: {
    key: "kidsdr",
    label: "Kids' Dr",
    shortLabel: "Kids' Dr",
    slug: "kids-dr",
    dotColor: "#E9B84A",
    accent: "var(--kids)",
    accentDeep: "#B78E2E",
  },
  excelsia: {
    key: "excelsia",
    label: "Excelsia Specialist Centre",
    shortLabel: "Excelsia",
    slug: "excelsia-specialist-centre",
    dotColor: "#6B8E9E",
    accent: "var(--excelsia)",
    accentDeep: "#4A6B7A",
  },
  clarion: {
    key: "clarion",
    label: "Clarion Skin Cancer Clinic",
    shortLabel: "Clarion",
    slug: "clarion-skin-cancer-clinic",
    dotColor: "#B44468",
    accent: "var(--clarion)",
    accentDeep: "#8B2E4A",
  },
  sydneycosmedic: {
    key: "sydneycosmedic",
    label: "Sydney Cosmedic",
    shortLabel: "Cosmedic",
    slug: "sydney-cosmedic",
    dotColor: "#C9748B",
    accent: "var(--cosmedic)",
    accentDeep: "#9C4D65",
  },
};

export const subBrandList = SUB_BRAND_KEYS.map((k) => SUB_BRANDS[k]);
