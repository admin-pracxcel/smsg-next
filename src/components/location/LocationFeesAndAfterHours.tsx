import Link from "next/link";
import type { ReactNode } from "react";

/**
 * LocationFeesAndAfterHours · two-column card band. Copy is passed in as
 * pre-composed nodes so each location can inject its own links (fees page,
 * healthdirect, nearest ED, etc.) without a rigid schema.
 */

export interface InfoBlock {
  label: string;
  body: ReactNode;
}

export interface LocationFeesAndAfterHoursProps {
  fees: {
    eyebrow: string;
    headingLead: string;
    headingItalic: string;
    rows: InfoBlock[];
  };
  afterHours: {
    eyebrow: string;
    headingLead: string;
    headingItalic: string;
    rows: InfoBlock[];
  };
}

export function LocationFeesAndAfterHours({
  fees,
  afterHours,
}: LocationFeesAndAfterHoursProps) {
  return (
    <section className="relative bg-cream-2">
      <div
        className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <span className="allcaps text-ink-3">{fees.eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[20ch]">
              {fees.headingLead}{" "}
              <span className="italic font-display-warm">
                {fees.headingItalic}
              </span>
            </h2>
            <div className="info-card mt-8">
              {fees.rows.map((r) => (
                <div className="info-row" key={r.label}>
                  <div className="info-label">{r.label}</div>
                  <div className="text-[15px] text-ink-2 leading-relaxed">
                    {r.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="allcaps text-ink-3">{afterHours.eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              {afterHours.headingLead}{" "}
              <span className="italic font-display-warm">
                {afterHours.headingItalic}
              </span>
            </h2>
            <div className="info-card mt-8">
              {afterHours.rows.map((r) => (
                <div className="info-row" key={r.label}>
                  <div className="info-label">{r.label}</div>
                  <div className="text-[15px] text-ink-2 leading-relaxed">
                    {r.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Convenience wrapper for inline editorial links inside `<InfoBlock body>`. */
export function EditorialLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  if (isExternal || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className="link-editorial text-[15px]">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className="link-editorial text-[15px]">
      {children}
    </Link>
  );
}
