import { CLINICS, type ClinicKey } from "@/lib/clinics";
import { external } from "@/lib/routes";

/**
 * LocationDarkBookCTA · full-width dark band at the bottom of the location
 * hub with an existing-patient booking card and a new-patient register card.
 */

function CardArrow() {
  return (
    <svg
      className="arrow text-cream shrink-0"
      width={18}
      height={18}
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

export interface LocationDarkBookCTAProps {
  clinic: ClinicKey;
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  supporting: string;
  /** Reception phone display, used in the "prefer to call?" line */
  phoneDisplay: string;
  phoneTel: string;
}

export function LocationDarkBookCTA({
  clinic,
  eyebrow,
  headingLead,
  headingItalic,
  supporting,
  phoneDisplay,
  phoneTel,
}: LocationDarkBookCTAProps) {
  const c = CLINICS[clinic];
  return (
    <section className="relative overflow-hidden footer-wash">
      <div
        className="paper-noise absolute inset-0 opacity-15 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="hairline-soft w-10 h-px bg-cream"
                style={{ opacity: 0.5 }}
              />
              <span className="allcaps text-cream/70">{eyebrow}</span>
            </div>
            <h2
              className="font-display text-[42px] md:text-[64px] leading-[1.02] max-w-[16ch]"
              style={{ fontVariationSettings: "'SOFT' 100,'opsz' 90" }}
            >
              {headingLead}{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--blush)" }}
              >
                {headingItalic}
              </span>
            </h2>
            <p className="mt-6 body-lg text-cream/85 max-w-[52ch]">
              {supporting}
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="grid gap-4">
              <a
                href={c.automedBase}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-4 rounded-[16px] border border-cream/25 hover:border-cream/60 bg-brand-deep/40 px-6 py-5 transition"
              >
                <div>
                  <div className="allcaps text-cream/60">Existing patient</div>
                  <div
                    className="font-display text-[22px] mt-1 text-cream"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                  >
                    Book online with Automed
                  </div>
                  <div className="text-[12.5px] text-cream/60 mt-1">
                    Same system your reception team uses
                  </div>
                </div>
                <CardArrow />
              </a>

              <a
                href={external.automedRegistration(clinic)}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between gap-4 rounded-[16px] border border-cream/25 hover:border-cream/60 bg-brand-deep/40 px-6 py-5 transition"
              >
                <div>
                  <div className="allcaps text-cream/60">New to SMSG?</div>
                  <div
                    className="font-display text-[22px] mt-1 text-cream"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                  >
                    Register as a new patient
                  </div>
                  <div className="text-[12.5px] text-cream/60 mt-1">
                    So your file is ready on the day
                  </div>
                </div>
                <CardArrow />
              </a>

              <div className="mt-3 text-[13px] text-cream/70 flex items-center gap-3">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth={1.2}
                    strokeLinecap="round"
                  />
                </svg>
                <span>
                  Prefer to call? Reception on{" "}
                  <a
                    href={`tel:${phoneTel}`}
                    className="underline underline-offset-4 hover:text-blush"
                  >
                    {phoneDisplay}
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
