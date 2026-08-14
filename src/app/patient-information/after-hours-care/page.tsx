import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildAfterHoursSchema } from "./schema";

export const metadata: Metadata = {
  title: "After-Hours Care | SMSG",
  description:
    "When SMSG is closed and you need non-emergency medical care, call 13 SICK for the National Home Doctor Service, or Healthdirect on 1800 022 222 for advice.",
  alternates: {
    canonical: "https://smsg.au/patient-information/after-hours-care/",
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
  { id: "opening-hours", label: "When we're open" },
  { id: "home-doctor", label: "National Home Doctor Service" },
  { id: "healthdirect", label: "Healthdirect (nurse triage)" },
  { id: "when-to-use", label: "Which service to use, when" },
  { id: "follow-up", label: "Follow up with your GP" },
];

export default function AfterHoursCarePage() {
  const schema = buildAfterHoursSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "After-Hours Care" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · After-Hours Care
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            After-hours{" "}
            <span className="italic font-display-warm">care.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>For non-emergency care outside our hours</span>
            </span>
            <span className="doc-meta">
              <span className="dot" />
              <span>All three SMSG centres</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            When SMSG is closed and your concern is not a life-threatening
            emergency, there are three main options: call an after-hours home
            doctor service, speak to a nurse through Healthdirect, or wait
            until we open. This page covers what to do outside our opening
            hours for non-emergency situations. For emergencies, see our{" "}
            <Link
              href={routes.patientInfo("emergency-information")}
              className="link-editorial"
            >
              Emergency Information
            </Link>{" "}
            page.
          </p>
        </div>
      </section>

      {/* ==================== DOC BODY ==================== */}
      <section className="doc-shell">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            {/* LEFT: TOC */}
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} />
              </div>
            </aside>

            {/* RIGHT: Body */}
            <div className="md:col-span-9">
              {/* Summary callout */}
              <div className="doc-callout mb-14">
                <div className="callout-head">
                  <span className="dot" />
                  <span>If you need help now</span>
                </div>
                <h3>The short version.</h3>
                <ul>
                  <li>
                    Life-threatening emergency — dial{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>{" "}
                    or attend the nearest emergency department.
                  </li>
                  <li>
                    Need a doctor tonight, not an emergency — call{" "}
                    <a href="tel:137425" className="link-editorial">
                      13 SICK (13 74 25)
                    </a>{" "}
                    for a bulk-billed home visit.
                  </li>
                  <li>
                    Not sure whether it needs a doctor — call{" "}
                    <a href="tel:1800022222" className="link-editorial">
                      Healthdirect on 1800 022 222
                    </a>{" "}
                    to speak to a registered nurse.
                  </li>
                  <li>
                    Book a follow-up with your usual SMSG GP on the next
                    business day; continuity of care matters.
                  </li>
                </ul>
              </div>

              {/* Section 1: Opening hours */}
              <article id="opening-hours" className="doc-section">
                <div className="section-eyebrow">When we&apos;re open</div>
                <h2 className="doc-h2">SMSG opening hours.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Our three centres share weekday hours, and Earlwood also
                    opens on Saturday morning. Outside these hours, the
                    after-hours options below apply.
                  </p>
                </div>

                <div className="contact-block mt-8">
                  <div className="contact-row">
                    <div className="label">
                      <Link
                        href={routes.location("earlwood")}
                        className="link-editorial"
                      >
                        Earlwood Medical Centre
                      </Link>
                    </div>
                    <div className="value">
                      Monday to Friday 9am to 6pm. Saturday 9am to 3pm. Sunday
                      closed.
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">
                      <Link
                        href={routes.location("bangor")}
                        className="link-editorial"
                      >
                        Bangor Medical Centre
                      </Link>
                    </div>
                    <div className="value">
                      Monday to Friday 9am to 6pm. Saturday and Sunday closed.
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">
                      <Link
                        href={routes.location("sanssouci")}
                        className="link-editorial"
                      >
                        Sans Souci Doctors
                      </Link>
                    </div>
                    <div className="value">
                      Monday to Friday 9am to 6pm. Saturday and Sunday closed.
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 2: Home Doctor Service */}
              <article id="home-doctor" className="doc-section">
                <div className="section-eyebrow">Home visit tonight</div>
                <h2 className="doc-h2">National Home Doctor Service.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    For non-emergency medical care outside our hours, call the
                    National Home Doctor Service on{" "}
                    <a href="tel:137425" className="link-editorial">
                      13 SICK (13 74 25)
                    </a>
                    .
                  </p>
                  <p>
                    The service arranges for a bulk-billed doctor to visit you
                    at home in the evening, overnight, on weekends, or on
                    public holidays. This is a genuine home visit, not a
                    telephone consultation. You do not need to be an SMSG
                    patient to use it.
                  </p>
                  <p>
                    Home visits are for conditions that need medical attention
                    but don&apos;t warrant an emergency department, such as:
                  </p>
                  <ul>
                    <li>
                      Sudden onset of illness like fever, sore throat, or ear
                      infection.
                    </li>
                    <li>Vomiting, diarrhoea or mild dehydration.</li>
                    <li>Rashes and minor skin infections.</li>
                    <li>Urinary symptoms.</li>
                    <li>Minor injuries that don&apos;t require hospital care.</li>
                    <li>
                      Follow-up on symptoms that have worsened after we&apos;ve
                      closed.
                    </li>
                  </ul>
                  <p>
                    The visiting doctor sends a report to your usual GP the
                    next business day, so continuity of care is preserved. Call{" "}
                    <a href="tel:137425" className="link-editorial">
                      13 SICK
                    </a>{" "}
                    or visit{" "}
                    <a
                      href="https://homedoctor.com.au"
                      className="link-editorial"
                      target="_blank"
                      rel="noopener"
                    >
                      homedoctor.com.au
                    </a>{" "}
                    to arrange a visit.
                  </p>
                </div>
              </article>

              {/* Section 3: Healthdirect */}
              <article id="healthdirect" className="doc-section">
                <div className="section-eyebrow">Nurse triage line</div>
                <h2 className="doc-h2">Healthdirect on 1800 022 222.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    For non-urgent health advice, call{" "}
                    <a href="tel:1800022222" className="link-editorial">
                      Healthdirect on 1800 022 222
                    </a>
                    . This is a free, 24-hour phone service staffed by
                    registered nurses, available every day of the year.
                  </p>
                  <p>
                    Healthdirect nurses can help you decide whether you need to
                    see a doctor now, whether your symptoms can wait until we
                    open, or whether you should attend an emergency department.
                  </p>
                  <p>
                    Healthdirect is not an emergency service. For emergencies,
                    dial{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>
                    .
                  </p>
                </div>
              </article>

              {/* Section 4: When to use which */}
              <article id="when-to-use" className="doc-section">
                <div className="section-eyebrow">Choosing the right option</div>
                <h2 className="doc-h2">Which service to use, when.</h2>

                <div className="pair-grid mt-8">
                  <div className="pair-card">
                    <div className="pair-head">Not sure yet</div>
                    <h3>Speak to a nurse first.</h3>
                    <ul>
                      <li>
                        You have symptoms but aren&apos;t sure how serious.
                      </li>
                      <li>You want advice before deciding what to do.</li>
                      <li>Someone else in your household is unwell.</li>
                    </ul>
                    <p className="mt-4 text-ink-2 text-[15px]">
                      Call{" "}
                      <a href="tel:1800022222" className="link-editorial">
                        Healthdirect on 1800 022 222
                      </a>
                      .
                    </p>
                  </div>
                  <div className="pair-card">
                    <div className="pair-head">Need a doctor tonight</div>
                    <h3>Arrange a home visit.</h3>
                    <ul>
                      <li>You know you need to be seen but it&apos;s not 000.</li>
                      <li>It&apos;s evening, overnight, weekend, or a holiday.</li>
                      <li>You&apos;d rather not travel to an emergency department.</li>
                    </ul>
                    <p className="mt-4 text-ink-2 text-[15px]">
                      Call{" "}
                      <a href="tel:137425" className="link-editorial">
                        13 SICK (13 74 25)
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className="body-editorial mt-8 max-w-[68ch]">
                  <p>
                    If it&apos;s life-threatening, dial{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>{" "}
                    or attend the nearest emergency department. See our{" "}
                    <Link
                      href={routes.patientInfo("emergency-information")}
                      className="link-editorial"
                    >
                      Emergency Information
                    </Link>{" "}
                    page for what constitutes an emergency and the nearest
                    hospital to each of our centres.
                  </p>
                </div>
              </article>

              {/* Section 5: Follow up */}
              <article id="follow-up" className="doc-section">
                <div className="section-eyebrow">After the after-hours</div>
                <h2 className="doc-h2">Follow up with your GP.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you&apos;ve been seen by the National Home Doctor
                    Service or spoken to Healthdirect, book a follow-up with
                    your usual SMSG GP on the next business day. Continuity of
                    care matters, and your usual GP has the full context of
                    your history.
                  </p>
                  <p>
                    The visiting after-hours doctor sends a report to SMSG. If
                    you were seen by Healthdirect only, mention it to your GP
                    at your next appointment so it can be added to your file.
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
              href={routes.patientInfo("emergency-information")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Emergency Information</h3>
              <p>
                What counts as an emergency, when to call 000, and the nearest
                hospital to each SMSG centre.
              </p>
              <span className="go">
                Read the guide <Arrow />
              </span>
            </Link>
            <Link
              href={routes.service("telehealth")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Telehealth</h3>
              <p>
                Phone and video consultations with an SMSG GP for suitable
                concerns, available during our normal hours.
              </p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("faq")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Frequently Asked Questions</h3>
              <p>
                Common questions about bookings, fees, referrals, results and
                how our centres work.
              </p>
              <span className="go">
                Browse FAQ <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
