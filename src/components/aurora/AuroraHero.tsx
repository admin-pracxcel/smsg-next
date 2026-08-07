import Image from "next/image";

/**
 * AuroraHero · unique "brand plate" hero for the Aurora hub.
 *
 * The plate on the right is Aurora-specific: soft radial arcs, the Aurora
 * logo lockup, an under-tag. This is not part of the reusable sub-brand
 * hero pattern; each sub-brand hub is expected to have its own hero.
 */
export function AuroraHero() {
  return (
    <section className="relative overflow-hidden blush-wash">
      <div
        className="paper-noise absolute inset-0 opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient background arcs */}
      <svg
        className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <g stroke="#B77F73" strokeWidth="0.6" fill="none">
          <circle cx="250" cy="250" r="240" />
          <circle cx="250" cy="250" r="180" />
          <circle cx="250" cy="250" r="120" />
        </g>
      </svg>

      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* LEFT · text column */}
          <div className="md:col-span-7 order-2 md:order-1">
            <span className="brand-chip">
              <span className="dot" />
              SMSG Sub-brand · Women&apos;s Health
            </span>

            <h1 className="font-display h-brand max-w-[16ch] mt-6">
              Aurora{" "}
              <span className="italic font-display-warm">
                Women &amp; Babies Health.
              </span>
            </h1>

            <p className="mt-7 lede max-w-[52ch] text-ink-2">
              Women&apos;s healthcare that grows with you, from your first period
              through motherhood, midlife and beyond.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="/patient-information/book-online/" className="btn-primary">
                Book with Aurora
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
              </a>
              <a href="#care" className="btn-outline">
                Explore care areas
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
              </a>
            </div>

            {/* Micro-stats row */}
            <div className="mt-10 grid grid-cols-2 gap-6 md:gap-8 max-w-[420px]">
              <div className="border-t border-black/15 pt-4">
                <div
                  className="font-display text-[26px] md:text-[30px] leading-none"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                >
                  10
                </div>
                <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                  Female clinicians
                </div>
              </div>
              <div className="border-t border-black/15 pt-4">
                <div
                  className="font-display text-[26px] md:text-[30px] leading-none"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                >
                  3
                </div>
                <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                  SMSG centres
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT · brand plate */}
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="brand-plate">
              <span className="plate-corner">est. within SMSG</span>

              <Image
                src="/website-images/Aurora Logo.webp"
                alt="Aurora Women & Babies Health brand logo"
                className="plate-logo"
                width={420}
                height={320}
                priority
              />

              <div className="plate-under">
                <span>Every life stage</span>
                <span className="sep" />
                <span>Sydney</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
