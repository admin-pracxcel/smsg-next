/**
 * IUD service-spoke page content · hardcoded copy that has no home in the
 * practitioner or sub-brand schemas. Ported verbatim from source
 * `/iud-hormonal-implant/index.html`. Any change should be sourced from
 * Sim, not invented.
 */

import type { ClinicKey } from "@/lib/clinics";

export const IUD_META = {
  title: "Hormonal IUD and Contraceptive Implant | Aurora at SMSG",
  description:
    "Long-acting reversible contraception inserted and removed by experienced female GPs at Earlwood, Bangor and Sans Souci. Consultation, procedure and follow-up in one place.",
  canonical: "https://smsg.au/iud-hormonal-implant/",
};

/** Hero at-a-glance panel rows. */
export const GLANCE_ROWS = [
  { label: "Consultation", value: "30 minutes, in person" },
  { label: "Procedure", value: "Insertion or removal, in-centre" },
  { label: "Follow-up", value: "Review at 4 to 6 weeks" },
  { label: "Referral", value: "Not required" },
] as const;

/** Two-option comparison cards. */
export type CompareCard = {
  mark: string;
  title: string;
  sub: string;
  rows: { label: string; value: string }[];
};

export const COMPARE_CARDS: CompareCard[] = [
  {
    mark: "Option A",
    title: "Hormonal IUD",
    sub: "Intrauterine device",
    rows: [
      { label: "Where it goes", value: "Inside the uterus" },
      { label: "How long", value: "Three to eight years, depending on the type" },
      {
        label: "How it works",
        value:
          "Releases a low-dose progestogen locally in the uterus. Thins the lining and thickens cervical mucus.",
      },
      { label: "Effect on periods", value: "Often lighter or absent over time" },
      { label: "Reversibility", value: "Fertility usually returns quickly after removal" },
    ],
  },
  {
    mark: "Option B",
    title: "Contraceptive implant",
    sub: "Subdermal implant",
    rows: [
      { label: "Where it goes", value: "Under the skin of the upper arm" },
      { label: "How long", value: "Up to three years" },
      {
        label: "How it works",
        value:
          "Releases a progestogen that often prevents ovulation and thickens cervical mucus.",
      },
      {
        label: "Effect on periods",
        value: "Varies. Some become lighter or absent, some become irregular",
      },
      {
        label: "Reversibility",
        value:
          "Fertility usually returns quickly after removal. Replacement can nearly always be done on the same day as removal.",
      },
    ],
  },
];

/** Numbered "What to expect" cards. */
export const EXPECT_STEPS = [
  {
    num: "01",
    title: "Before your appointment",
    body: "We book a preliminary consultation, 30 minutes, so we can walk through your history, your questions, and which option is likely to suit you. You don't need to have decided before you come in; part of the appointment is deciding together.",
  },
  {
    num: "02",
    title: "On the day of the procedure",
    body: "For the implant, we book a 30-minute procedure appointment for insertion, replacement or removal. Please bring the implant with you if you're having one inserted or replaced. If you need a prescription first, speak to your GP at the pre-consult. For an IUD, we set aside a longer appointment slot so there's time to settle both before and after. The insertion itself typically takes around 15 minutes. We use local anaesthetic where appropriate and go through the practical details with you first.",
  },
  {
    num: "03",
    title: "After the procedure",
    body: "For an IUD, some cramping and light spotting for the first few days is common. For the implant, you might have a small bruise on your arm that settles within a week. We book a short review at 4 to 6 weeks to check that everything has settled and answer any questions that have come up since.",
  },
] as const;

/** Where-offered cards. Uses lc-badge chips rather than bullet lists. */
export type WhereCard = {
  clinic: ClinicKey;
  badges: string[];
  body: string;
};

export const WHERE_CARDS: WhereCard[] = [
  {
    clinic: "earlwood",
    badges: ["Insertion", "Removal"],
    body: "Full Aurora team including our obstetrician-gynaecologist. Insertions with Dr Tao Geng and other Aurora GPs.",
  },
  {
    clinic: "bangor",
    badges: ["Insertion", "Removal"],
    body: "Insertions with Dr Tao Geng and Dr Chelsie Tan. Aurora GPs including Dr Margaret Colwell also consult here for contraception discussions.",
  },
  {
    clinic: "sanssouci",
    badges: ["Removal only"],
    body: "Removal available on-site with Dr Huiling Li, Dr Jonathan Moore or Dr Marloes Nordkamp. For new insertions, we book you in with Dr Tao Geng at Earlwood or Bangor, or Dr Chelsie Tan at Bangor.",
  },
];

/**
 * Practitioners who provide IUD/implant services, in the exact order
 * from source. Role text mixes procedure scope + languages; hardcoded
 * here because "IUD provider" isn't a schema field on the practitioner
 * JSON (DATA GAP · see report). Slugs match content/practitioners/*.json.
 */
export type IudPractitioner = {
  slug: string;
  role: string;
  loc: string;
  /** Column: "left" or "right" — preserves the source's two-column order. */
  column: "left" | "right";
};

export const IUD_PRACTITIONERS: IudPractitioner[] = [
  {
    slug: "dr-tao-geng",
    role: "Insertion & removal · English, Mandarin, Shanghainese",
    loc: "Earlwood · Bangor",
    column: "left",
  },
  {
    slug: "dr-chelsie-tan",
    role: "Insertion & removal · English, Malay",
    loc: "Bangor",
    column: "left",
  },
  {
    slug: "dr-huiling-li",
    role: "Removal · English, Cantonese, Mandarin, Hakka",
    loc: "Sans Souci",
    column: "left",
  },
  {
    slug: "dr-marloes-nordkamp",
    role: "Removal · English, Dutch, Danish",
    loc: "Earlwood · Sans Souci",
    column: "right",
  },
  {
    slug: "dr-margaret-colwell",
    role: "Contraception consults · Bangor Aurora GP",
    loc: "Bangor",
    column: "right",
  },
  {
    slug: "dr-jonathan-moore",
    role: "Removal · English",
    loc: "Sans Souci",
    column: "right",
  },
];

/** Fees table rows (kept qualitative per SMSG public-copy rules). */
export const FEE_ROWS = [
  {
    label: "Preliminary consultation",
    desc: "To discuss options, history and questions",
    val: "Bulk-billed for eligible patients",
  },
  {
    label: "Follow-up review",
    desc: "4 to 6 weeks after the procedure",
    val: "Bulk-billed for eligible patients",
  },
  {
    label: "Procedure",
    desc: "Insertion, removal, or removal-and-replace, with or without a Women's Health Check",
    val: "Private fee, Medicare rebate applies",
  },
] as const;

/** FAQ items · first is open by default (matches source). */
export const FAQ_ITEMS = [
  {
    q: "Does it hurt?",
    a: "Some cramping is normal during and after an IUD insertion. We take the time to talk through what to expect, use local anaesthetic where appropriate, and give you the option of taking simple pain relief beforehand. Most patients describe it as brief discomfort rather than pain, and it usually settles within a day or two. For the implant, the sensation is limited to a small local anaesthetic and a very quick placement.",
    open: true,
  },
  {
    q: "How soon does it start working?",
    a: "When protection starts depends on where in your cycle the device or implant is inserted, so your GP will explain the timing for your situation. As a rule, the hormonal IUD should be inserted at least seven days after the start of your period, and the implant no later than five days after the first day of bleeding (or at any time if you're already on the mini-pill, an IUD, or transitioning from progestagen injections). If you've recently given birth, had a miscarriage or termination, we ask you to wait at least six weeks before an IUD insertion. Your GP will confirm whether you need backup contraception in the meantime.",
    open: false,
  },
  {
    q: "Can I have it removed early if I want to try for a baby?",
    a: "Yes. Both options are fully reversible. Fertility usually returns quickly after removal, and many women conceive within the first cycle or two. Your GP can also talk you through preconception planning at the same appointment if you'd like.",
    open: false,
  },
  {
    q: "Can I have an IUD if I've never had a baby?",
    a: "Yes. Hormonal IUDs suit most women, whether or not they have had children. Your GP will talk through the specifics with you at your consultation and answer any concerns you have about insertion.",
    open: false,
  },
  {
    q: "Do I need a referral?",
    a: "No, you can book directly with any Aurora GP. If you already see a GP outside SMSG and want to keep your usual doctor for general care, you're welcome to book with us just for the procedure.",
    open: false,
  },
  {
    q: "What if it doesn't suit me?",
    a: "If you're finding side effects difficult, or the option isn't working the way you hoped, come back and see us. We can review, discuss alternatives, and remove it whenever you decide. That decision is always yours.",
    open: false,
  },
] as const;

/** Booking-CTA sub-labels for each clinic. */
export const BOOK_SUB: Record<ClinicKey, string> = {
  earlwood: "Insertion & removal · Mon-Sat",
  bangor: "Insertion & removal · Mon-Fri",
  sanssouci: "Removal only · Mon-Fri",
};
