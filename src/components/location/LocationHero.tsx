import Image from "next/image";
import { CLINICS, type ClinicKey } from "@/lib/clinics";
import { external } from "@/lib/routes";

/**
 * LocationHero · shared hero for location hubs (Earlwood, Bangor, Sans Souci).
 *
 * Uses the location-specific `.h-place` heading utility. Do NOT swap for
 * `.h-display` or `.h-brand`; those belong to the homepage and sub-brand
 * hero variants respectively.
 */

export interface LocationHeroProps {
  clinic: ClinicKey;
  /** Postcode-appended label for the eyebrow, e.g. "Location · Earlwood 2206". */
  eyebrowLocation: string;
  /** e.g. "Earlwood" */
  titleLead: string;
  /** e.g. "Medical Centre." */
  titleItalic: string;
  /** ~52ch lede paragraph */
  lede: string;
  /** Hours summary lines (2 short lines) */
  hoursLines: [string, string];
  /** Reception phone display, e.g. "02 9554 7788" (also used as tel: href) */
  phoneDisplay: string;
  phoneTel: string;
  /** Fax display line under phone (optional) */
  faxDisplay?: string;
  /** Photo src (public path) */
  photoSrc: string;
  photoAlt: string;
  /** Google Business review data */
  google: {
    rating: string; // "4.6"
    reviewCount: string; // "713"
    mapUrl: string;
  };
  /** CTA labels (Book, Register) */
  ctaLabels?: {
    book?: string;
    register?: string;
  };
}

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

function StarIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.7 5.5 6 .9-4.4 4.3 1 6.1L10 15.4l-5.4 2.9 1-6.1L1.3 7.9l6-.9z" />
    </svg>
  );
}

export function LocationHero({
  clinic,
  eyebrowLocation,
  titleLead,
  titleItalic,
  lede,
  hoursLines,
  phoneDisplay,
  phoneTel,
  faxDisplay,
  photoSrc,
  photoAlt,
  google,
  ctaLabels,
}: LocationHeroProps) {
  const c = CLINICS[clinic];
  const bookLabel = ctaLabels?.book ?? `Book at ${c.shortLabel}`;
  const registerLabel = ctaLabels?.register ?? "Register as a new patient";
  return (
    <section className="relative overflow-hidden">
      <div
        className="paper-noise absolute inset-0 opacity-70 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-20 pb-16 md:pb-20 relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Text */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="hairline-soft w-10 h-px" />
              <span className="allcaps text-ink-3">{eyebrowLocation}</span>
            </div>

            <h1 className="font-display h-place">
              {titleLead}{" "}
              <span className="italic font-display-warm">{titleItalic}</span>
            </h1>

            <p className="lede mt-8 max-w-[52ch] text-ink-2">{lede}</p>

            {/* Address / contact strip */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[52ch]">
              <div className="flex items-start gap-3">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="mt-1 text-ink-3 shrink-0"
                >
                  <path
                    d="M9 16s5.5-5 5.5-10a5.5 5.5 0 10-11 0c0 5 5.5 10 5.5 10z"
                    stroke="currentColor"
                    strokeWidth={1.3}
                  />
                  <circle cx={9} cy={6} r={1.8} stroke="currentColor" strokeWidth={1.3} />
                </svg>
                <div>
                  <div className="allcaps text-ink-3 mb-1">Address</div>
                  <div className="text-[15px] text-ink">
                    {c.address}
                    <br />
                    {c.suburbLine}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="mt-1 text-ink-3 shrink-0"
                >
                  <circle cx={9} cy={9} r={6.5} stroke="currentColor" strokeWidth={1.3} />
                  <path
                    d="M9 5v4l2.5 2"
                    stroke="currentColor"
                    strokeWidth={1.3}
                    strokeLinecap="round"
                  />
                </svg>
                <div>
                  <div className="allcaps text-ink-3 mb-1">Hours</div>
                  <div className="text-[15px] text-ink">
                    {hoursLines[0]}
                    <br />
                    {hoursLines[1]}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="mt-1 text-ink-3 shrink-0"
                >
                  <path
                    d="M5 4h1.5l1 3-1 1a8 8 0 004 4l1-1 3 1V14a1 1 0 01-1 1A11 11 0 013 5a1 1 0 011-1z"
                    stroke="currentColor"
                    strokeWidth={1.3}
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <div className="allcaps text-ink-3 mb-1">Reception</div>
                  <div className="text-[15px] text-ink">
                    <a href={`tel:${phoneTel}`} className="hover:text-terra">
                      {phoneDisplay}
                    </a>
                  </div>
                  {faxDisplay ? (
                    <div className="text-[13px] text-ink-3">Fax {faxDisplay}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                  className="mt-1 text-ink-3 shrink-0"
                >
                  <rect x={2.5} y={4.5} width={13} height={9} rx={1.4} stroke="currentColor" strokeWidth={1.3} />
                  <path d="M2.5 5l6.5 5 6.5-5" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
                </svg>
                <div>
                  <div className="allcaps text-ink-3 mb-1">Email</div>
                  <div className="text-[15px] text-ink">
                    <a href={`mailto:${c.email}`} className="hover:text-terra">
                      {c.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={c.automedBase}
                target="_blank"
                rel="noopener"
                className="btn-primary"
              >
                {bookLabel}
                <ArrowIcon />
              </a>
              <a
                href={external.automedRegistration(clinic)}
                target="_blank"
                rel="noopener"
                className="btn-outline"
              >
                {registerLabel}
                <ArrowIcon />
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="md:col-span-6">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[36px] bg-moss/12 -z-10 hidden md:block" />
              <div className="rounded-[24px] overflow-hidden border border-black/10 shadow-[0_40px_100px_-40px_rgba(154,47,82,0.4)]">
                <Image
                  src={photoSrc}
                  alt={photoAlt}
                  width={900}
                  height={640}
                  className="block w-full h-auto"
                  priority
                />
              </div>
              <a
                href={google.mapUrl}
                target="_blank"
                rel="noopener"
                className="hero-rating group mt-5 md:mt-6 flex items-center gap-3 md:gap-4 rounded-2xl bg-cream-paper border border-black/10 pl-3 pr-3.5 py-3 md:pl-4 md:pr-5 md:py-4 shadow-[0_18px_40px_-24px_rgba(154,47,82,0.35)] transition-all hover:border-terra/50 hover:shadow-[0_22px_50px_-24px_rgba(183,107,76,0.45)]"
              >
                <span className="hero-rating-g shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-black/8 grid place-content-center shadow-sm">
                  <svg
                    className="w-5 h-5 md:w-[22px] md:h-[22px]"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.5 0 19.4-8.4 19.4-19.4 0-1.4-.1-2.8-.3-4.1z" />
                    <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                    <path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.5-5.3l-6.3-5.2c-2 1.4-4.5 2.3-7.2 2.3-5.2 0-9.6-3.3-11.3-8L6 32.9C9.4 39.5 16.1 44 24 44z" />
                    <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.5l6.3 5.2c-.4.4 6.9-5 6.9-14.7 0-1.4-.1-2.8-.3-4.1z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-display text-[24px] md:text-[30px] leading-none text-ink"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                    >
                      {google.rating}
                    </span>
                    <span
                      className="flex items-center gap-0.5 text-terra"
                      aria-hidden="true"
                    >
                      <StarIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <StarIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <StarIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <StarIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                      <StarIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    </span>
                  </div>
                  <div className="mt-1 text-[12px] md:text-[13px] text-ink-3 flex items-center gap-1.5 whitespace-nowrap">
                    <span className="allcaps text-ink-3">{google.reviewCount}</span>
                    <span>Google reviews</span>
                    <span className="opacity-40 hidden sm:inline">·</span>
                    <span className="hidden sm:inline">Read on Google</span>
                  </div>
                </div>
                <svg
                  className="arrow shrink-0 text-ink-3 group-hover:text-terra"
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
