import { external, routes } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";

/**
 * Patient information strip · four tiles (Fees / Results / Scripts+Referrals /
 * MyMedicare registration). The MyMedicare tile deep-links to the per-clinic
 * Automed registration URLs.
 */

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
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function PatientInfoStrip() {
  return (
    <section id="patient-info" className="relative bg-cream-2">
      <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-18">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
          <div className="md:col-span-7">
            <span className="allcaps text-ink-3">Patient information</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              Everything else you{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--terra)" }}
              >
                might need.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 body-lg text-ink-2 max-w-[46ch]">
            Fees, results, scripts and referrals, and MyMedicare. The
            practical bits of being an SMSG patient, all in one place.
          </div>
        </div>

        <div className="hairline w-full mb-8" />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <PiTile eyebrow="Fees" title="Fees and billing" href={routes.patientInfo("fees-and-billing")}>
            How we charge, what&apos;s bulk-billed, and how Medicare rebates
            apply.
          </PiTile>

          <PiTile eyebrow="Results" title="Results policy" href={routes.patientInfo("results-policy")}>
            How we contact you about test results, and when to expect them.
          </PiTile>

          <PiTile
            eyebrow="Ongoing"
            title="Scripts and referrals"
            href={routes.patientInfo("scripts-and-referrals")}
          >
            Repeat prescriptions and referral renewals without needing to come
            in.
          </PiTile>

          {/* MyMedicare — per-clinic registration links */}
          <li>
            <div className="pi-tile h-full flex flex-col justify-between rounded-[16px] bg-cream-paper border border-black/10 p-6 min-h-[210px] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-24px_rgba(154,47,82,0.35)]">
              <div>
                <span className="allcaps text-brand">Medicare</span>
                <h3
                  className="font-display text-[19px] mt-3 leading-tight"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                >
                  MyMedicare registration
                </h3>
                <p className="mt-3 text-[13.5px] text-ink-2 leading-relaxed">
                  Register your preferred centre with Medicare for better
                  coordinated care.
                </p>
              </div>
              <ul className="mt-4 space-y-1 text-[13px]">
                {clinicList.map((c, i) => (
                  <li key={c.key}>
                    <a
                      href={external.automedRegistration(c.key)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between text-brand hover:text-terra py-1 ${
                        i < clinicList.length - 1
                          ? "border-b border-black/10"
                          : ""
                      }`}
                    >
                      <span>{c.shortLabel}</span>
                      {arrowSm}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function PiTile({
  eyebrow,
  title,
  href,
  children,
}: {
  eyebrow: string;
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="pi-tile group h-full flex flex-col justify-between rounded-[16px] bg-cream-paper border border-black/10 p-6 min-h-[210px] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-24px_rgba(154,47,82,0.35)]"
      >
        <div>
          <span className="allcaps text-brand">{eyebrow}</span>
          <h3
            className="font-display text-[19px] mt-3 leading-tight"
            style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
          >
            {title}
          </h3>
          <p className="mt-3 text-[13.5px] text-ink-2 leading-relaxed">
            {children}
          </p>
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-brand">
          View {arrowSm}
        </span>
      </a>
    </li>
  );
}
