import { CLINICS, type ClinicKey } from "@/lib/clinics";

/**
 * LocationVisit · practice hours + getting here + map.
 *
 * Structure is shared across location hubs; the specific hours rows, transport
 * copy and (optional) special-day callout are passed in.
 */

function ArrowIcon() {
  return (
    <svg
      className="arrow"
      width={14}
      height={14}
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

export interface HoursRow {
  day: string;
  hours: string;
  /** Renders in terra display type (used for Saturday at Earlwood) */
  emphasise?: boolean;
  /** Italic muted (used for Sunday closed) */
  muted?: boolean;
}

export interface GettingHereRow {
  label: string;
  body: string;
}

export interface SpecialCallout {
  eyebrow: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface LocationVisitProps {
  clinic: ClinicKey;
  hoursEyebrow?: string;
  hoursHeadingLead: string;
  hoursHeadingItalic: string;
  hoursRows: HoursRow[];
  /** Optional special callout under the hours card. */
  callout?: SpecialCallout;
  gettingHereEyebrow?: string;
  gettingHereHeadingLead: string;
  gettingHereHeadingItalic: string;
  gettingHereRows: GettingHereRow[];
  /** Google Maps embed and directions query strings */
  mapEmbedQuery: string; // e.g. "352+Homer+Street,+Earlwood+NSW+2206"
  mapEmbedTitle: string;
}

export function LocationVisit({
  hoursEyebrow = "Practice hours",
  hoursHeadingLead,
  hoursHeadingItalic,
  hoursRows,
  callout,
  gettingHereEyebrow = "Getting here",
  gettingHereHeadingLead,
  gettingHereHeadingItalic,
  gettingHereRows,
  mapEmbedQuery,
  mapEmbedTitle,
}: LocationVisitProps) {
  return (
    <section id="visit" className="relative bg-cream-2">
      <div
        className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-stretch">
          {/* Hours */}
          <div className="md:col-span-6 space-y-6 md:flex md:flex-col md:space-y-0 md:gap-6">
            <span className="allcaps text-ink-3">{hoursEyebrow}</span>
            <h2 className="font-display mt-3 whitespace-nowrap text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.05] tracking-[-0.015em]">
              {hoursHeadingLead}{" "}
              <span className="italic font-display-warm">
                {hoursHeadingItalic}
              </span>
            </h2>

            <div className="info-card">
              {hoursRows.map((r) => (
                <div
                  key={r.day}
                  className="info-row flex items-center justify-between gap-4"
                >
                  {r.emphasise ? (
                    <>
                      <div
                        className="text-[15.5px] font-display"
                        style={{
                          fontVariationSettings: "'SOFT' 100,'opsz' 24",
                          color: "var(--terra)",
                        }}
                      >
                        {r.day}
                      </div>
                      <div
                        className="text-[15.5px] font-display"
                        style={{
                          fontVariationSettings: "'SOFT' 100,'opsz' 24",
                          color: "var(--terra)",
                        }}
                      >
                        {r.hours}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className={
                          r.muted
                            ? "text-[15.5px] text-ink-3"
                            : "text-[15.5px] text-ink"
                        }
                      >
                        {r.day}
                      </div>
                      <div
                        className={
                          r.muted
                            ? "text-[15.5px] text-ink-3 italic"
                            : "text-[15.5px] text-ink-2"
                        }
                      >
                        {r.hours}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {callout ? (
              <div className="sat-callout">
                <div className="allcaps mb-2" style={{ color: "var(--terra)" }}>
                  {callout.eyebrow}
                </div>
                <p className="body-lg text-ink max-w-[46ch]">{callout.body}</p>
                <div className="mt-4">
                  <a
                    href={callout.ctaHref}
                    target="_blank"
                    rel="noopener"
                    className="btn-ghost text-[14px]"
                  >
                    {callout.ctaLabel}
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          {/* Getting here */}
          <div className="md:col-span-6 space-y-6 md:flex md:flex-col md:space-y-0 md:gap-6">
            <span className="allcaps text-ink-3">{gettingHereEyebrow}</span>
            <h2 className="font-display mt-3 whitespace-nowrap text-[clamp(1.6rem,2.6vw,2.2rem)] leading-[1.05] tracking-[-0.015em]">
              {gettingHereHeadingLead}{" "}
              <span className="italic font-display-warm">
                {gettingHereHeadingItalic}
              </span>
            </h2>

            <div className="info-card">
              {gettingHereRows.map((r) => (
                <div className="info-row" key={r.label}>
                  <div className="info-label">{r.label}</div>
                  <div className="text-[15.5px] text-ink-2">{r.body}</div>
                </div>
              ))}
            </div>

            <div className="relative rounded-[20px] overflow-hidden border border-black/10 aspect-[16/9] md:aspect-auto md:flex-1 md:min-h-[240px] bg-paper">
              <iframe
                src={`https://www.google.com/maps?q=${mapEmbedQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={mapEmbedTitle}
              />
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapEmbedQuery}`}
                target="_blank"
                rel="noopener"
                className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-cream/95 backdrop-blur px-3 py-1.5 text-[12.5px] text-ink shadow-[0_4px_12px_-2px_rgba(26,24,21,0.25)] hover:bg-cream transition-colors"
              >
                Get directions
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Convenience: build a maps directions query for a clinic's address. */
export function directionsQueryFor(clinic: ClinicKey): string {
  const c = CLINICS[clinic];
  return encodeURIComponent(`${c.address}, ${c.suburbLine}`);
}
