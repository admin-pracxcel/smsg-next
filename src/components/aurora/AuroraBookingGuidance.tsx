import Image from "next/image";
import { clinicList } from "@/lib/clinics";

/**
 * AuroraBookingGuidance · Aurora-specific booking section.
 *
 * Left column has the "If you're pregnant" / "If you're booking for
 * contraception" cards which are Aurora-specific. Right column is the
 * three per-clinic Automed CTAs (uses `clinicList` and the automedBase
 * URLs from the clinic registry, not hardcoded strings).
 */

type ClinicCTASubline = { earlwood: string; bangor: string; sanssouci: string };

const CTA_SUB: ClinicCTASubline = {
  earlwood: "Full Aurora team · Saturday appointments",
  bangor: "Shared care · IUD and implant · Endocrine",
  sanssouci: "Shared care · Cervical screening · IUD removal",
};

export function AuroraBookingGuidance() {
  return (
    <section id="book" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6">
            <span className="allcaps text-ink-3">Booking with Aurora</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              Every Aurora clinician is{" "}
              <span className="italic font-display-warm">bookable online.</span>
            </h2>

            <div className="body-editorial mt-8 max-w-[56ch]">
              <p>
                When you book, you&apos;ll see each practitioner&apos;s next
                available appointments across the centres they cover. If
                you&apos;re not sure which doctor to see, our reception team
                can point you toward the right person for your visit.
              </p>
            </div>

            <div className="mt-8 space-y-4 max-w-[52ch]">
              <BookingHint
                eyebrow="If you're pregnant"
                body="Book a first appointment around 8 to 10 weeks. That gives us time to talk through shared care, arrange your antenatal blood tests and dating scan, and refer to your birth hospital."
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 4v4l3 2"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                }
              />
              <BookingHint
                eyebrow="If you're booking for contraception"
                body="Allow a 30-minute long appointment for the consultation. IUD and implant insertions are typically booked as a separate procedure appointment after the first visit."
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <rect
                      x="2.5"
                      y="3"
                      width="11"
                      height="10"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path
                      d="M2.5 6h11"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <figure className="rounded-[20px] overflow-hidden h-[200px] md:h-[220px] mb-5 relative">
              <Image
                src="/website-images/booking-with-aurora.webp"
                alt="A hand next to a phone showing a calendar and a card with an appointment note"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
            <div className="grid gap-4">
              {clinicList.map((clinic) => (
                <a
                  key={clinic.key}
                  href={clinic.automedBase}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 hover:border-ink/30 bg-paper px-6 py-5 transition"
                >
                  <div>
                    <div className="allcaps text-ink-3">
                      {clinic.shortLabel}
                    </div>
                    <div
                      className="font-display text-[22px] mt-1"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                    >
                      Book Aurora at {clinic.shortLabel}
                    </div>
                    <div className="text-[12.5px] text-ink-3 mt-1">
                      {CTA_SUB[clinic.key]}
                    </div>
                  </div>
                  <svg
                    className="arrow shrink-0 text-ink-3"
                    width="18"
                    height="18"
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
              ))}

              <div className="mt-2 text-[13px] text-ink-3 flex items-center gap-3">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span>
                  New to SMSG?{" "}
                  <a
                    href="/patient-information/new-patient-registration/"
                    className="link-editorial text-[13px]"
                  >
                    Register first
                  </a>{" "}
                  so your file is ready.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingHint({
  eyebrow,
  body,
  icon,
}: {
  eyebrow: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-[16px] border border-black/10 bg-paper p-5 flex items-start gap-4">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "color-mix(in oklab, var(--aurora) 25%, var(--paper))",
          color: "var(--aurora-deep)",
        }}
      >
        {icon}
      </div>
      <div>
        <div className="allcaps text-ink-3">{eyebrow}</div>
        <div className="text-[14.5px] text-ink mt-1">{body}</div>
      </div>
    </div>
  );
}
