import Image from "next/image";
import Link from "next/link";

/**
 * SubBrandCareAreas · shared numbered care-tiles grid used by every
 * sub-brand hub (Kids' Dr, Excelsia, Clarion, Sydney Cosmedic).
 *
 * The section wrapper accepts a `bandClass` so each hub can apply its
 * own tinted background (amber-band, moss-band, cosmedic-band,
 * excelsia-band). Grid columns default to 3 but can be set per hub.
 * Each tile is a static card with its own CTA link (matches source
 * HTML: the whole tile isn't a link, only the CTA is).
 */

export type CareTile = {
  num: string;
  title: string;
  body: React.ReactNode;
  cta: string;
  href: string;
  id?: string;
};

type Props = {
  bandClass: string;
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  supporting: string;
  imageSrc?: string;
  imageAlt?: string;
  tiles: CareTile[];
  cols?: 2 | 3 | 4;
};

export function SubBrandCareAreas({
  bandClass,
  eyebrow,
  headingLead,
  headingItalic,
  supporting,
  imageSrc,
  imageAlt,
  tiles,
  cols = 3,
}: Props) {
  const gridClass =
    cols === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
      : cols === 4
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6";

  return (
    <section id="care" className={`relative ${bandClass}`}>
      <div
        className="paper-noise absolute inset-0 opacity-25 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <span className="allcaps text-ink-3">{eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[24ch]">
              {headingLead}{" "}
              <span className="italic font-display-warm">{headingItalic}</span>
            </h2>
            <p className="mt-6 body-lg text-ink-2 max-w-[52ch]">{supporting}</p>
          </div>
          {imageSrc && (
            <div className="md:col-span-5">
              <figure className="rounded-[24px] overflow-hidden h-[260px] md:h-[300px] relative">
                <Image
                  src={imageSrc}
                  alt={imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </figure>
            </div>
          )}
        </div>

        <div className="hairline w-full mb-10" />

        <div className={gridClass}>
          {tiles.map((tile) => (
            <div key={tile.num} id={tile.id} className="care-tile reveal">
              <div className="num">{tile.num}</div>
              <div className="title">{tile.title}</div>
              <div className="text-[15px] text-ink-2 leading-relaxed">
                {tile.body}
              </div>
              <TileCTA href={tile.href} label={tile.cta} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TileCTA({ href, label }: { href: string; label: string }) {
  const isAnchor = href.startsWith("#");
  const inner = (
    <>
      {label}
      <svg
        className="arrow"
        width="12"
        height="12"
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
    </>
  );
  return isAnchor ? (
    <a href={href} className="cta">
      {inner}
    </a>
  ) : (
    <Link href={href} className="cta">
      {inner}
    </Link>
  );
}
