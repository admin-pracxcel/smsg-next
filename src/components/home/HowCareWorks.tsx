import { external } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";

/**
 * How care works · three-step booking journey.
 * Registration URLs from external.automedRegistration. Scripts + referrals
 * URLs are per-clinic scripts/referrals deep links (not yet in the route
 * builder — kept inline here, one URL per clinic).
 */

// Per-clinic scripts and referrals endpoints, mirrored from the approved
// homepage template. If/when a first-class helper for these is added to
// @/lib/routes, migrate to it.
const clinicSlugForScripts: Record<string, { scripts: string; referrals: string }> =
  {
    earlwood: {
      scripts:
        "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/scripts/loc/4",
      referrals:
        "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/referrals/loc/4",
    },
    bangor: {
      scripts:
        "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/scripts/loc/1",
      referrals:
        "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/referrals/loc/1",
    },
    sanssouci: {
      scripts:
        "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/scripts/loc/1",
      referrals:
        "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/referrals/loc/1",
    },
  };

const arrow = (
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
);

const arrowSm = (
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
    />
  </svg>
);

export function HowCareWorks() {
  return (
    <section id="book" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <span className="allcaps text-ink-3">How it works</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              How care works{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--brand)" }}
              >
                at SMSG.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 body-lg text-ink-2 max-w-[46ch]">
            Register at the centre you&apos;ll visit first, then book with any
            of our clinicians whenever you need to. Repeat prescriptions and
            referral renewals are handled per-centre so you&apos;re not
            chasing paperwork between visits.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 01 */}
          <div
            id="new-patient"
            className="rounded-[20px] bg-brand text-cream p-8 md:p-9 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
          >
            <svg
              className="absolute -top-6 -right-6 w-40 opacity-20"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#F5EEE0"
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
              <circle
                cx="50"
                cy="50"
                r="34"
                fill="none"
                stroke="#F5EEE0"
                strokeWidth="0.5"
              />
            </svg>
            <div>
              <span className="allcaps opacity-80">Step 01</span>
              <h3
                className="font-display text-[28px] mt-3 leading-tight"
                style={{ fontVariationSettings: "'SOFT' 50,'opsz' 60" }}
              >
                Register at your centre
              </h3>
              <p className="mt-3 body-lg opacity-90 max-w-[36ch]">
                Patient registration is per centre. Fill in your details
                before your first appointment at the centre you&apos;ll be
                visiting, so the reception team has your file ready when you
                arrive.
              </p>
            </div>
            <div className="mt-6 space-y-1.5 text-[14.5px]">
              {clinicList.map((c, i) => (
                <a
                  key={c.key}
                  href={external.automedRegistration(c.key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between text-cream hover:text-blush py-1.5 ${
                    i < clinicList.length - 1 ? "border-b border-cream/25" : ""
                  }`}
                >
                  <span>Register at {c.shortLabel}</span>
                  {arrow}
                </a>
              ))}
            </div>
          </div>

          {/* Step 02 */}
          <div
            className="rounded-[20px] p-8 md:p-9 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FAF5EA, #F5EEE0)",
              border: "1px solid rgba(26,24,21,0.1)",
            }}
          >
            <svg
              className="absolute -bottom-6 -left-6 w-40 opacity-40"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                d="M20 60 Q 50 20 80 60"
                stroke="#B76B4C"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M20 70 Q 50 30 80 70"
                stroke="#B76B4C"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M20 80 Q 50 40 80 80"
                stroke="#B76B4C"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
            <div>
              <span className="allcaps text-ink-3">Step 02</span>
              <h3
                className="font-display text-[28px] mt-3 leading-tight"
                style={{ fontVariationSettings: "'SOFT' 50,'opsz' 60" }}
              >
                Book with any of our clinicians
              </h3>
              <p className="mt-3 body-lg text-ink-2 max-w-[36ch]">
                Every doctor, specialist and allied health provider at every
                location is bookable online through Automed. Pick your
                clinician and a time that works for you.
              </p>
            </div>
            <div className="mt-6 space-y-2 text-[14.5px]">
              {clinicList.map((c, i) => (
                <a
                  key={c.key}
                  href={c.automedBase}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between hover:text-terra py-1.5 ${
                    i < clinicList.length - 1 ? "border-b border-black/10" : ""
                  }`}
                >
                  <span>{c.shortLabel}</span>
                  {arrow}
                </a>
              ))}
            </div>
          </div>

          {/* Step 03 */}
          <div
            id="scripts"
            className="rounded-[20px] p-8 md:p-9 flex flex-col justify-between min-h-[300px] relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FDFBF4, #FAF5EA)",
              border: "1px solid rgba(26,24,21,0.1)",
            }}
          >
            <svg
              className="absolute -bottom-6 -right-6 w-40 opacity-30"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <rect
                x="20"
                y="30"
                width="60"
                height="50"
                rx="6"
                fill="none"
                stroke="#B7967A"
                strokeWidth="0.7"
              />
              <line
                x1="30"
                y1="45"
                x2="70"
                y2="45"
                stroke="#B7967A"
                strokeWidth="0.7"
              />
              <line
                x1="30"
                y1="55"
                x2="60"
                y2="55"
                stroke="#B7967A"
                strokeWidth="0.7"
              />
              <line
                x1="30"
                y1="65"
                x2="65"
                y2="65"
                stroke="#B7967A"
                strokeWidth="0.7"
              />
            </svg>
            <div>
              <span className="allcaps text-ink-3">Step 03</span>
              <h3
                className="font-display text-[28px] mt-3 leading-tight"
                style={{ fontVariationSettings: "'SOFT' 50,'opsz' 60" }}
              >
                Scripts and referrals, without a visit
              </h3>
              <p className="mt-3 body-lg text-ink-2 max-w-[36ch]">
                Once you&apos;re a patient, repeat prescriptions and referral
                renewals go through the same system. No appointment needed for
                most, and requests are typically turned around within one
                business day. Pick your centre below.
              </p>
            </div>
            <div
              id="referrals"
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-1 text-[13.5px]"
            >
              <div className="allcaps text-ink-3 col-span-2 mb-1">
                Repeat prescriptions
              </div>
              {clinicList.map((c, i) => (
                <a
                  key={`scripts-${c.key}`}
                  href={clinicSlugForScripts[c.key].scripts}
                  target="_blank"
                  rel="noopener"
                  className={`flex items-center justify-between hover:text-terra py-1 ${
                    i === clinicList.length - 1 ? "col-span-2" : ""
                  } ${i < clinicList.length - 1 ? "border-b border-black/10" : "border-b border-black/10"}`}
                >
                  <span>{c.shortLabel}</span>
                  {arrowSm}
                </a>
              ))}

              <div className="allcaps text-ink-3 col-span-2 mt-3 mb-1">
                Referral renewals
              </div>
              {clinicList.map((c, i) => (
                <a
                  key={`referrals-${c.key}`}
                  href={clinicSlugForScripts[c.key].referrals}
                  target="_blank"
                  rel="noopener"
                  className={`flex items-center justify-between hover:text-terra py-1 ${
                    i === clinicList.length - 1 ? "col-span-2" : "border-b border-black/10"
                  }`}
                >
                  <span>{c.shortLabel}</span>
                  {arrowSm}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
