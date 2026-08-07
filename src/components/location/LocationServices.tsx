import Link from "next/link";

/**
 * LocationServices · six-tile "services on offer here" grid. Some tiles link
 * out (to a sub-brand or spoke), some are non-linked static tiles.
 */

function TileArrow() {
  return (
    <svg
      className="arrow"
      width={12}
      height={12}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h9M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface ServiceTile {
  /** Two-digit index string, e.g. "01" */
  num: string;
  title: string;
  body: string;
  /** Optional link + link label. If omitted, tile is not clickable. */
  href?: string;
  linkLabel?: string;
}

export interface LocationServicesProps {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  supporting: string;
  tiles: ServiceTile[];
}

export function LocationServices({
  eyebrow,
  headingLead,
  headingItalic,
  supporting,
  tiles,
}: LocationServicesProps) {
  return (
    <section id="services" className="relative bg-cream-2">
      <div
        className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((t) => {
            const inner = (
              <>
                <div className="num">{t.num}</div>
                <h3
                  className="font-display text-[22px] leading-[1.15]"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">
                  {t.body}
                </p>
                {t.href && t.linkLabel ? (
                  <div className="mt-5 text-[13px] text-brand inline-flex items-center gap-2">
                    {t.linkLabel} <TileArrow />
                  </div>
                ) : null}
              </>
            );
            return t.href ? (
              <Link
                key={t.num}
                href={t.href}
                className="svc-tile group"
              >
                {inner}
              </Link>
            ) : (
              <div key={t.num} className="svc-tile">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
