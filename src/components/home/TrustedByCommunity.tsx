/**
 * Trusted by community · dark brand-rose section with 4 stats and a
 * languages marquee. Marquee is pure CSS keyframes (see `.marquee-track`
 * in globals.css) so this stays a server component.
 */

const languages = [
  "English",
  "Mandarin",
  "Cantonese",
  "Arabic",
  "Malay",
  "Sinhalese",
  "Dutch",
  "Portuguese",
  "Vietnamese",
  "Shanghainese",
  "Hakka",
  "Danish",
];

export function TrustedByCommunity() {
  return (
    <section
      id="team"
      className="relative bg-brand text-cream overflow-hidden"
    >
      <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" />
      <svg
        className="absolute -top-40 -left-40 w-[700px] h-[700px] opacity-25 pointer-events-none"
        viewBox="0 0 700 700"
        aria-hidden="true"
      >
        <circle
          cx="350"
          cy="350"
          r="349"
          fill="none"
          stroke="#F5EEE0"
          strokeWidth="0.4"
        />
        <circle
          cx="350"
          cy="350"
          r="280"
          fill="none"
          stroke="#F5EEE0"
          strokeWidth="0.4"
        />
        <circle
          cx="350"
          cy="350"
          r="210"
          fill="none"
          stroke="#F5EEE0"
          strokeWidth="0.4"
        />
        <circle
          cx="350"
          cy="350"
          r="140"
          fill="none"
          stroke="#F5EEE0"
          strokeWidth="0.4"
        />
      </svg>

      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="allcaps text-cream/70">Community</span>
            <h2 className="font-display h-section mt-3 max-w-[16ch]">
              Trusted by our{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--blush)" }}
              >
                community.
              </span>
            </h2>
            <p className="body-lg text-cream/85 mt-8 max-w-[46ch]">
              More than{" "}
              <span className="num-strong text-blush">1,400+</span> Google
              reviews across all services. AGPAL-accredited. Recognised
              by the Central and Eastern Sydney Primary Health Network for
              excellence in general practice.
            </p>
            <p className="body-lg text-cream/85 mt-4 max-w-[46ch]">
              We look after multi-generational families across Inner West, the
              Sutherland Shire and the St George area. Our teams speak more
              than a dozen languages between them. If you or your family would
              prefer to see a clinician who speaks your first language, our
              reception team can help you match.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-x-5 sm:gap-x-8 gap-y-8 sm:gap-y-10">
              <Stat
                num="1,400+"
                label="Patient reviews across the group"
              />
              <Stat num="60+" label="Practitioners across GP, specialist and allied health" />
              <Stat num="3" label="Centres across Earlwood, Bangor and Sans Souci" />
              <Stat
                num={
                  <>
                    10+
                    <span
                      className="italic"
                      style={{ fontSize: "0.5em" }}
                    >
                      {" "}
                      yrs
                    </span>
                  </>
                }
                label="Of continuous care in Sydney"
              />
            </div>
          </div>
        </div>

        {/* Language marquee */}
        <div className="mt-20 md:mt-24">
          <div className="flex items-center gap-4 mb-4 text-cream/70">
            <span
              className="hairline-soft w-10 h-px bg-cream"
              style={{ opacity: 0.4 }}
            />
            <span className="allcaps">Languages spoken in our centres</span>
          </div>
          <div className="overflow-hidden">
            <div
              className="marquee-track flex gap-10 font-display text-[36px] md:text-[54px] whitespace-nowrap"
              style={{ fontVariationSettings: "'SOFT' 100,'opsz' 90" }}
            >
              {[...languages, ...languages].map((lang, i) => (
                <span key={`${lang}-${i}`} className="flex items-center gap-10">
                  <span
                    className={i % 2 === 0 ? "italic opacity-95" : "opacity-95"}
                  >
                    {lang}
                  </span>
                  <span className="opacity-50">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  num,
  label,
}: {
  num: React.ReactNode;
  label: string;
}) {
  return (
    <div>
      <div
        className="stat-num text-[44px] sm:text-[64px] md:text-[96px]"
        style={{ color: "var(--blush)" }}
      >
        {num}
      </div>
      <div
        className="hairline-soft mt-3 sm:mt-4 bg-cream"
        style={{ opacity: 0.25 }}
      />
      <div className="mt-3 sm:mt-4 text-cream/85 text-[13px] sm:text-[15px]">
        {label}
      </div>
    </div>
  );
}
