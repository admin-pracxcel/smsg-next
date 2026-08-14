import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildResultsPolicySchema } from "./schema";

export const metadata: Metadata = {
  title: "Results Policy | SMSG",
  description:
    "How SMSG communicates test results and recalls. Book a follow-up appointment if you're expecting results, and don't assume no news means good news.",
  alternates: {
    canonical: "https://smsg.au/patient-information/results-policy/",
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
  { id: "how-arrive", label: "How results arrive" },
  { id: "how-contacted", label: "How you'll be contacted" },
  { id: "reception", label: "What reception can share" },
  { id: "no-news", label: "No news is not good news" },
  { id: "records", label: "Accessing your records" },
  { id: "sharing", label: "Sharing with other clinicians" },
];

export default function ResultsPolicyPage() {
  const schema = buildResultsPolicySchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "Results Policy" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · Results Policy
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Results{" "}
            <span className="italic font-display-warm">policy.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>Follow-up appointment is the reliable way</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Test results are managed by your treating doctor. Reception can
            tell you whether a result has arrived, but cannot interpret it.
            Book a follow-up appointment for any test where the result matters
            clinically, and don&apos;t assume no news means good news.
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
              <article id="how-arrive" className="doc-section">
                <div className="section-eyebrow">Turnaround</div>
                <h2 className="doc-h2">How results arrive at SMSG.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    When your GP or specialist orders a test, the pathology
                    laboratory, imaging service or specialist letter is sent
                    directly back to your treating doctor at SMSG. Results are
                    usually received electronically and reviewed by the
                    ordering doctor.
                  </p>
                  <p>Typical turnaround times:</p>
                </div>

                <div className="contact-block mt-6">
                  <div className="contact-row">
                    <div className="label">Blood tests</div>
                    <div className="value">1 to 3 business days for standard panels.</div>
                  </div>
                  <div className="contact-row">
                    <div className="label">Imaging</div>
                    <div className="value">
                      X-ray, ultrasound, echocardiogram: 1 to 5 business days
                      depending on the study.
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">Pathology</div>
                    <div className="value">Histology, biopsy: up to 2 weeks.</div>
                  </div>
                  <div className="contact-row">
                    <div className="label">Specialist letters</div>
                    <div className="value">1 to 4 weeks after your specialist appointment.</div>
                  </div>
                </div>

                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Some tests take longer, particularly specialised pathology,
                    genetic testing, or investigations sent to interstate
                    laboratories.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="how-contacted" className="doc-section">
                <div className="section-eyebrow">Three channels</div>
                <h2 className="doc-h2">How you&apos;ll be contacted.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    <strong>Book a follow-up appointment.</strong> For any test
                    where the result matters to your care, book a follow-up
                    appointment when you have the test done. This is the
                    reliable way to receive your result and discuss what it
                    means.
                  </p>
                  <p>
                    <strong>Reception recalls.</strong> For results that need
                    to be actioned or discussed and where the ordering doctor
                    has flagged a recall, reception will contact you by phone.
                    If we can&apos;t reach you by phone, we&apos;ll follow up
                    by SMS or letter.
                  </p>
                  <p>
                    <strong>Urgent results.</strong> If a result is clinically
                    urgent, the ordering doctor or reception will contact you
                    directly, sometimes on the day the result arrives. Make
                    sure your contact details are current in your file.
                  </p>
                </div>
              </article>

              {/* Section 3 */}
              <article id="reception" className="doc-section">
                <div className="section-eyebrow">Scope of reception</div>
                <h2 className="doc-h2">What reception can and can&apos;t tell you.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Reception can confirm whether your result has arrived,
                    whether your doctor has reviewed it, and whether a
                    follow-up appointment is needed.
                  </p>
                  <p>
                    Reception cannot interpret your result, tell you the
                    specific values, or give you clinical advice about what the
                    result means. This is a policy across every
                    AGPAL-accredited practice in Australia, not an SMSG-specific
                    rule. Result interpretation is the treating doctor&apos;s
                    responsibility.
                  </p>
                  <p>
                    If you want to discuss your result, book a follow-up
                    appointment with your doctor. Standard consultation fees
                    apply.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="no-news" className="doc-section">
                <div className="section-eyebrow">Important</div>
                <h2 className="doc-h2">No news is not necessarily good news.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you&apos;ve had a test and you haven&apos;t heard from
                    us, it does not automatically mean the result was normal.
                    Results can be delayed, misfiled, or require review that
                    hasn&apos;t happened yet.
                  </p>
                  <p>
                    If you&apos;re expecting a result and haven&apos;t heard
                    from us within the typical turnaround time above, call
                    reception to check. If you&apos;ve been asked to book a
                    follow-up appointment, book it.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="records" className="doc-section">
                <div className="section-eyebrow">Access request</div>
                <h2 className="doc-h2">Accessing your records.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    You have the right to access your own health records under
                    Australian privacy law. Requests are processed through our
                    Chief Growth Officer within 30 days. A fee may apply for
                    complex or time-intensive requests; the fee is disclosed
                    before we proceed.
                  </p>
                  <p>
                    See our{" "}
                    <Link
                      href={routes.about("privacy-policy")}
                      className="link-editorial"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for the full process.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="sharing" className="doc-section">
                <div className="section-eyebrow">Care coordination</div>
                <h2 className="doc-h2">Sharing results with other clinicians.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Results are shared with other clinicians involved in your
                    care where you&apos;ve consented and where sharing is
                    clinically necessary. This includes your referring GP,
                    referred specialists, hospitals, and allied health
                    providers.
                  </p>
                  <p>
                    If you have a My Health Record, results may be uploaded
                    there where the ordering doctor has arranged it. You
                    control what&apos;s uploaded to your My Health Record;
                    visit{" "}
                    <a
                      href="https://myhealthrecord.gov.au"
                      className="link-editorial"
                      target="_blank"
                      rel="noopener"
                    >
                      myhealthrecord.gov.au
                    </a>{" "}
                    to review or adjust your settings.
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
                Book a follow-up appointment with the doctor who ordered your
                test to discuss the result and next steps.
              </p>
              <span className="go">
                Book an appointment <Arrow />
              </span>
            </Link>
            <Link
              href={routes.about("privacy-policy")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Privacy Policy</h3>
              <p>
                How we collect, use, and share your health information, and
                how to request access to your file.
              </p>
              <span className="go">
                Read the policy <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("scripts-and-referrals")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Scripts &amp; Referrals</h3>
              <p>
                Renew repeat prescriptions and specialist referrals online
                without needing a full consultation.
              </p>
              <span className="go">
                See the process <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
