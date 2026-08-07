import { z } from "zod";
import { CLINIC_KEYS } from "../clinics";
import { SUB_BRAND_KEYS } from "../sub-brands";

const clinicKey = z.enum(CLINIC_KEYS);
const subBrandKey = z.enum(SUB_BRAND_KEYS);

/** A map of clinic → nullable value (used for booking URLs / slugs / days) */
const clinicMap = <T extends z.ZodTypeAny>(inner: T) =>
  z.object({
    earlwood: inner.nullable().optional(),
    bangor: inner.nullable().optional(),
    sanssouci: inner.nullable().optional(),
  });

export const PractitionerSchema = z.object({
  slug: z.string(),
  page_type: z.enum(["gp", "specialist", "allied_health", "cosmetic"]),
  has_online_booking: z.boolean(),

  sources: z
    .object({
      smsg_url: z.string().optional().nullable(),
      bio_from: z.string().optional().nullable(),
      provider_csv_row: z.number().optional().nullable(),
      notes: z.string().optional().nullable(),
    })
    .partial()
    .optional(),

  identity: z.object({
    full_name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    salutation: z.string().nullable(),
    short_ref: z.string(),
    pronouns: z.string().nullable().optional(),
  }),

  credentials: z.object({
    post_nominal: z.string().nullable(),
    post_nominal_dotted: z.string().nullable(),
    practitioner_type: z.string(),
    role_title: z.string(),
    medical_specialty: z.string().nullable().optional(),
    ahpra: z.string().nullable(),
    abn: z.string().nullable().optional(),
  }),

  languages: z.array(z.string()).default([]),

  clinics: z.object({
    primary: clinicKey,
    consulting_at: z.array(clinicKey),
    // Per-clinic day strings, plus optional `combined` when the practitioner
    // consults the same days at every clinic they visit (source-supplied).
    consulting_days: z.object({
      earlwood: z.string().nullable().optional(),
      bangor: z.string().nullable().optional(),
      sanssouci: z.string().nullable().optional(),
      combined: z.string().nullable().optional(),
    }),
  }),

  sub_brands: z
    .array(
      z.object({
        key: subBrandKey,
        role: z.enum(["primary", "extended"]),
      })
    )
    .default([]),

  cross_brand_pills: z
    .array(
      z.object({
        label: z.string(),
        href: z.string(),
        dot_color: z.string(),
        role: z.enum(["primary", "extended"]),
      })
    )
    .default([]),

  portrait: z.object({
    src: z.string(),
    alt: z.string(),
    is_placeholder: z.boolean(),
  }),

  seo: z.object({
    title: z.string(),
    description: z.string(),
    canonical: z.string(),
  }),

  hero: z.object({
    lede: z.string(),
    ctas: z
      .array(
        z.object({
          label: z.string(),
          clinic: clinicKey,
          style: z.enum(["primary", "outline"]),
          href: z.string(),
        })
      )
      .default([]),
  }),

  bio: z.object({
    eyebrow: z.string(),
    heading_lead: z.string(),
    heading_warm: z.string(),
    paragraphs: z.array(z.string()),
  }),

  fellowships: z.array(z.string()).default([]),
  awards: z.array(z.string()).default([]),
  additional_roles: z.array(z.string()).default([]),

  billing: z.object({
    policy: z.enum(["mixed", "bulk_bill", "private"]).nullable(),
    source_note: z.string().nullable().optional(),
  }),

  booking: z.object({
    mode: z.enum(["online", "phone_only", "doctor_level_only"]),
    phone_fallback: z
      .object({
        clinic_label: z.string(),
        phone: z.string(),
      })
      .nullable(),
    default_clinic: clinicKey.nullable().optional(),
    categories: z
      .array(
        z.object({
          category_name: z.string(),
          source_names: z.record(z.string(), z.string()).optional(),
          appointments: z.array(
            z.object({
              display_name: z.string(),
              tag: z.string().nullable(),
              note: z.string().optional(),
              clinic_slugs: clinicMap(z.string()),
              clinic_urls: clinicMap(z.string()),
            })
          ),
        })
      )
      .default([]),
  }),

  footer_book_links: z
    .array(
      z.object({
        clinic_label: z.string(),
        sub: z.string(),
        href: z.string(),
      })
    )
    .default([]),

  related_care: z
    .array(
      z.object({
        label: z.string(),
        sub: z.string(),
        href: z.string(),
      })
    )
    .default([]),

  /**
   * Peer practitioners suggested at the bottom of this practitioner's page
   * ("Also on the team" column of the consolidated footer band). Optional;
   * when absent, the third column is omitted from the layout.
   */
  also_on_team: z
    .array(
      z.object({
        name: z.string(),
        sub: z.string(),
        href: z.string(),
      })
    )
    .optional(),

  breadcrumb: z.object({
    team_type_label: z.string(),
    team_type_href: z.string(),
  }),

  json_ld: z.record(z.string(), z.unknown()).nullable().optional(),

  flags: z
    .object({
      bio_missing: z.boolean().default(false),
      portrait_placeholder: z.boolean().default(false),
      consulting_days_needs_split: z.boolean().default(false),
      no_bookings_but_expected: z.boolean().default(false),
      review_cross_brand_pills: z.string().nullable().optional(),
      roster_vs_bio_mismatches: z.array(z.string()).default([]),
    })
    .partial()
    .default({}),
});

export type Practitioner = z.infer<typeof PractitionerSchema>;

export const PractitionerIndexSchema = z.array(
  z.object({
    slug: z.string(),
    full_name: z.string(),
    page_type: z.enum(["gp", "specialist", "allied_health", "cosmetic"]),
    primary_clinic: clinicKey,
    consulting_at: z.array(clinicKey),
    has_online_booking: z.boolean(),
    bio_source: z.string().nullable(),
    portrait_placeholder: z.boolean(),
    sub_brand_keys: z.array(subBrandKey),
    folder_exists: z.boolean(),
  })
);

export type PractitionerIndex = z.infer<typeof PractitionerIndexSchema>;
