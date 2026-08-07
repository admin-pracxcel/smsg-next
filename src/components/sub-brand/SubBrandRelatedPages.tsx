import Link from "next/link";
import { SUB_BRANDS, type SubBrandKey } from "@/lib/sub-brands";

/**
 * SubBrandRelatedPages · four small cards at the foot of a sub-brand hub
 * pointing to related services or a sister sub-brand.
 *
 * Each item carries its own accent colour (default = the hub's sub-brand
 * dot colour); a cross-brand card can override with `dotColor` from
 * `SUB_BRANDS[key].dotColor`.
 */

export type RelatedItem = {
  eyebrow: string; // e.g. "Service" · "Sub-brand"
  title: string;
  body: string;
  href: string;
  dotColor?: string; // overrides the hub accent for cross-brand cards
};

type Props = {
  subBrand: SubBrandKey;
  eyebrow?: string;
  headingLead: string;
  headingItalic: string;
  supporting: string;
  items: RelatedItem[];
};

export function SubBrandRelatedPages({
  subBrand,
  eyebrow = "Related",
  headingLead,
  headingItalic,
  supporting,
  items,
}: Props) {
  const hubDot = SUB_BRANDS[subBrand].dotColor;
  return (
    <section className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">{eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[24ch]">
              {headingLead}{" "}
              <span className="italic font-display-warm">{headingItalic}</span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            {supporting}
          </div>
        </div>

        <div className="hairline w-full mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, i) => (
            <Link key={i} href={item.href} className="sb-loc-card reveal">
              <div className="lc-body">
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: item.dotColor ?? hubDot }}
                  />
                  <span className="allcaps text-ink-3">{item.eyebrow}</span>
                </div>
                <h3
                  className="font-display text-[22px] leading-[1.15]"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] text-ink-2">{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
