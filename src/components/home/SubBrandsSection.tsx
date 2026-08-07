import Link from "next/link";
import { subBrandList, type SubBrandKey } from "@/lib/sub-brands";
import { routes } from "@/lib/routes";

/**
 * Sub-brands / Specialised care grid.
 * Each tile links to its sub-brand hub via routes.subBrand(). Copy and
 * gradient tints ported from the approved static homepage template.
 */

type TileMeta = {
  primary: string;
  italic: string;
  description: string;
  cta: string;
  tint: string;
  span: string;
};

const meta: Record<SubBrandKey, TileMeta> = {
  aurora: {
    primary: "Aurora",
    italic: "Women & Babies Health",
    description:
      "Contraception, pregnancy, menstrual and hormonal health, menopause, and everything in between. Practising across all three centres.",
    cta: "Explore Aurora",
    tint: "linear-gradient(180deg, rgba(217,167,154,0.10), transparent 60%)",
    span: "md:col-span-2",
  },
  kidsdr: {
    primary: "Kids'",
    italic: "Dr",
    description:
      "Developmental paediatrics, ADHD and autism assessments, and psychology support for children and their families.",
    cta: "Explore Kids' Dr",
    tint: "linear-gradient(180deg, rgba(231,179,107,0.10), transparent 60%)",
    span: "md:col-span-2",
  },
  excelsia: {
    primary: "Excelsia",
    italic: "Specialist Centre",
    description:
      "Consultant physicians and surgeons across nine specialties: cardiology, endocrinology, gastroenterology, geriatrics, haematology, nephrology, respiratory and sleep medicine, paediatric medicine, and general medicine.",
    cta: "Explore Excelsia",
    tint: "linear-gradient(180deg, rgba(183,107,76,0.10), transparent 60%)",
    span: "md:col-span-2",
  },
  clarion: {
    primary: "Clarion",
    italic: "Skin Cancer Clinic",
    description:
      "Full-body skin checks, dermoscopy, mole mapping, and excision procedures with GPs trained in skin cancer medicine.",
    cta: "Explore Clarion",
    tint: "linear-gradient(180deg, rgba(180,68,104,0.10), transparent 60%)",
    span: "md:col-span-3",
  },
  sydneycosmedic: {
    primary: "Sydney",
    italic: "Cosmedic",
    description:
      "Non-surgical cosmetic procedures delivered by medically qualified practitioners, with an in-person consultation before every treatment.",
    cta: "Explore Sydney Cosmedic",
    tint: "linear-gradient(180deg, rgba(59,52,44,0.06), transparent 60%)",
    span: "md:col-span-3",
  },
};

export function SubBrandsSection() {
  return (
    <section id="care" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Specialised care</span>
            <h2 className="font-display h-section mt-3 max-w-[24ch]">
              For the moments{" "}
              <span className="italic font-display-warm">that need it.</span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[40ch]">
            Five specialty areas, one clinical group. Each carries its own
            team, its own room, and the same connected record so your GP is
            always in the loop.
          </div>
        </div>

        <div className="hairline w-full" />

        <div className="grid md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-black/10 border-b border-black/10">
          {subBrandList.map((sb) => {
            const m = meta[sb.key];
            return (
              <Link
                key={sb.key}
                id={sb.key}
                href={routes.subBrand(sb.key)}
                className={`sb-card group ${m.span} p-8 md:p-10 flex flex-col justify-between min-h-[360px]`}
                style={{ background: m.tint }}
              >
                <div>
                  <div className="flex items-center justify-end">
                    <span
                      className="chip"
                      style={{ background: sb.dotColor }}
                    />
                  </div>
                  <h3
                    className="font-display text-[30px] leading-[1.05] mt-6"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                  >
                    {m.primary}{" "}
                    <span className="italic">{m.italic}</span>
                  </h3>
                  <p className="mt-4 body-lg text-ink-2 max-w-[38ch]">
                    {m.description}
                  </p>
                </div>
                <span className="mt-8 link-editorial">
                  {m.cta}{" "}
                  <svg
                    className="arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h9M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
