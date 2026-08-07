import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";
import { buildScriptsReferralsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Scripts & Referrals | SMSG",
  description:
    "Request repeat prescriptions and specialist referral renewals through Automed. One business day turnaround for existing SMSG patients.",
  alternates: {
    canonical:
      "https://smsg.au/patient-information/scripts-and-referrals/",
  },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
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
}

const TOC = [
  { id: "repeat-scripts", label: "Repeat prescriptions" },
  { id: "renew-referrals", label: "Renewing a referral" },
  { id: "request-links", label: "Request at each centre" },
  { id: "turnaround", label: "Turnaround times" },
  { id: "fees", label: "Fees" },
  { id: "not-eligible", label: "What's not eligible" },
];

/**
 * Per-clinic Automed script and referral request URLs. Not in routes.ts
 * because they're patient-info specific rather than general clinic actions.
 * Bases match `clinicList[i].automedBase` up to the `/doctors` segment.
 */
const SCRIPT_URLS: Record<string, string> = {
  earlwood:
    "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/scripts/loc/1",
  bangor:
    "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/scripts/loc/1",
  sanssouci:
    "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/scripts/loc/1",
};

const REFERRAL_URLS: Record<string, string> = {
  earlwood:
    "https://automedsystems.com.au/ams/clinics/5308/earlwood-medical-centre-earlwood-2206/referrals/loc/1",
  bangor:
    "https://automedsystems.com.au/ams/clinics/3941/bangor-medical-centre-bangor-2234/referrals/loc/1",
  sanssouci:
    "https://automedsystems.com.au/ams/clinics/4895/sans-souci-drs-2219/referrals/loc/1",
};

export default function ScriptsReferralsPage() {
  const schema = buildScriptsReferralsSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "Scripts & Referrals" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · Scripts &amp; Referrals
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Scripts &amp;{" "}
            <span className="italic font-display-warm">referrals.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>One business day turnaround</span>
            </span>
            <span className="doc-meta">
              <span className="dot" />
              <span>Existing patients only</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Request repeat prescriptions and specialist referral renewals
            through Automed without needing to come in for a consultation.
            Available to existing SMSG patients only. Most requests are turned
            around within one business day.
          </p>
        </div>
      </section>

      {/* ==================== DOC BODY ==================== */}
      <section className="doc-shell">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} />
              </div>
            </aside>

            <div className="md:col-span-9">
              {/* Section 1 */}
              <article id="repeat-scripts" className="doc-section">
                <div className="section-eyebrow">Prescriptions</div>
                <h2 className="doc-h2">Requesting a repeat prescription.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Existing SMSG patients can request a repeat script online
                    through Automed. Select your usual GP, confirm the
                    medication and dosage, and submit.
                  </p>
                  <p>
                    Your GP reviews the request. If your medication is on the
                    list of items that can be renewed without a consultation,
                    the script is written and available for collection or
                    electronic transfer within one business day.
                  </p>
                  <p>
                    If your GP determines a review is required before the
                    script can be issued, reception will contact you to book an
                    appointment. This applies particularly to Schedule 8
                    medications, some chronic disease medications, and any
                    medication where your GP hasn&apos;t reviewed you within a
                    defined window.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="renew-referrals" className="doc-section">
                <div className="section-eyebrow">Referrals</div>
                <h2 className="doc-h2">Renewing a specialist referral.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If your specialist referral is due to expire and you need
                    to continue seeing your specialist, request a renewal
                    through Automed. Existing patients only.
                  </p>
                  <p>
                    Specialist referrals from a GP are valid for 12 months.
                    Specialist to specialist referrals are valid for three
                    months. If your referral is close to expiring, request a
                    renewal before your next specialist appointment so the
                    Medicare rebate continues to apply.
                  </p>
                  <p>
                    Some specialist referrals require a fresh consultation
                    before renewal, particularly where the underlying condition
                    has changed or where the referring GP hasn&apos;t reviewed
                    you within the required period. Reception will contact you
                    if a consultation is needed.
                  </p>
                </div>
              </article>

              {/* Section 3 */}
              <article id="request-links" className="doc-section">
                <div className="section-eyebrow">Direct links</div>
                <h2 className="doc-h2">Request at each centre.</h2>

                <div className="mt-8">
                  <div className="section-eyebrow">Repeat prescriptions</div>
                  <div className="contact-block mt-4">
                    {clinicList.map((c) => (
                      <div className="contact-row" key={`script-${c.key}`}>
                        <div className="label">
                          <Link
                            href={routes.location(c.key)}
                            className="link-editorial"
                          >
                            {c.label}
                          </Link>
                        </div>
                        <div className="value">
                          <a
                            href={SCRIPT_URLS[c.key]}
                            rel="noopener"
                            className="link-editorial"
                          >
                            Request a script at {c.shortLabel} <Arrow />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="section-eyebrow">Specialist referrals</div>
                  <div className="contact-block mt-4">
                    {clinicList.map((c) => (
                      <div className="contact-row" key={`referral-${c.key}`}>
                        <div className="label">
                          <Link
                            href={routes.location(c.key)}
                            className="link-editorial"
                          >
                            {c.label}
                          </Link>
                        </div>
                        <div className="value">
                          <a
                            href={REFERRAL_URLS[c.key]}
                            rel="noopener"
                            className="link-editorial"
                          >
                            Renew a referral at {c.shortLabel} <Arrow />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Section 4 */}
              <article id="turnaround" className="doc-section">
                <div className="section-eyebrow">How long</div>
                <h2 className="doc-h2">Turnaround times.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Most requests are processed within one business day.
                    Requests made after 3pm on weekdays, or on weekends and
                    public holidays, are processed on the next business day.
                  </p>
                  <p>
                    If your GP is on leave when you submit, another GP in the
                    team will typically review the request. For continuity,
                    requests are ideally addressed by your usual GP, so allow
                    a little extra time if they&apos;re away.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="fees" className="doc-section">
                <div className="section-eyebrow">Cost</div>
                <h2 className="doc-h2">Fees.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    There&apos;s no separate fee for a repeat prescription or a
                    specialist referral renewal processed without a
                    consultation. If the request requires a consultation,
                    standard consultation fees apply and reception will confirm
                    at booking.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="not-eligible" className="doc-section">
                <div className="section-eyebrow">Needs a consultation</div>
                <h2 className="doc-h2">What&apos;s not eligible.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Some requests cannot be handled through the online request
                    flow and will always require an in-person or telehealth
                    consultation. These include:
                  </p>
                  <ul>
                    <li>
                      Schedule 8 medications (opioids, benzodiazepines, and
                      other controlled substances).
                    </li>
                    <li>
                      New medications you haven&apos;t been prescribed before at
                      SMSG.
                    </li>
                    <li>
                      Medications where your treating doctor hasn&apos;t
                      reviewed you within the required window.
                    </li>
                    <li>
                      Referrals to specialists you haven&apos;t previously been
                      referred to.
                    </li>
                    <li>
                      Referrals for a new condition or a significantly different
                      clinical picture.
                    </li>
                  </ul>
                  <p>
                    Reception will let you know if a consultation is needed and
                    help you book one.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link
              href={routes.patientInfo("book-online")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Book Online</h3>
              <p>
                Book a consultation when a script or referral isn&apos;t
                eligible for the online request flow.
              </p>
              <span className="go">
                Book an appointment <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("fees-and-billing")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Fees &amp; Billing</h3>
              <p>
                How fees work if your script or referral request needs a
                consultation.
              </p>
              <span className="go">
                Read the framework <Arrow />
              </span>
            </Link>
            <Link href={routes.service("telehealth")} className="related-card">
              <span className="kicker">Related</span>
              <h3>Telehealth</h3>
              <p>
                Phone and video consultations when a script or referral review
                doesn&apos;t need a physical examination.
              </p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
