import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes, external } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";
import { buildRegistrationSchema } from "./schema";

export const metadata: Metadata = {
  title: "New Patient Registration | SMSG",
  description:
    "Register as a new patient at Earlwood, Bangor or Sans Souci before your first appointment. Complete registration online through Automed.",
  alternates: {
    canonical:
      "https://smsg.au/patient-information/new-patient-registration/",
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
  { id: "how-it-works", label: "How registration works" },
  { id: "register", label: "Register at each centre" },
  { id: "what-youll-need", label: "What you'll need" },
  { id: "at-reception", label: "Registration at reception" },
  { id: "after", label: "After registration" },
  { id: "existing", label: "Existing patients" },
];

export default function NewPatientRegistrationPage() {
  const schema = buildRegistrationSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "New Patient Registration" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · New Patient Registration
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            New patient{" "}
            <span className="italic font-display-warm">registration.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>Registration is per centre</span>
            </span>
            <span className="doc-meta">
              <span className="dot" />
              <span>File is shared across the group once opened</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Register as a new patient at the SMSG centre you&apos;ll be
            visiting first. Complete the form online before your appointment so
            reception has your file ready when you arrive.
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
              <article id="how-it-works" className="doc-section">
                <div className="section-eyebrow">Per centre, once</div>
                <h2 className="doc-h2">How registration works.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Registration is per centre. If you&apos;ll be seeing
                    practitioners at more than one SMSG centre, register at the
                    centre you&apos;ll be attending first. Reception can copy
                    your details to another centre later if you need to be seen
                    there too.
                  </p>
                  <p>
                    You can complete the online form at any time. Once
                    submitted, the reception team at your chosen centre reviews
                    the form and opens your file. You&apos;ll receive a
                    confirmation email when your registration is processed.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="register" className="doc-section">
                <div className="section-eyebrow">Direct links</div>
                <h2 className="doc-h2">Register at each centre.</h2>

                <div className="contact-block mt-8">
                  {clinicList.map((c) => (
                    <div className="contact-row" key={c.key}>
                      <div className="label">
                        <Link
                          href={routes.location(c.key)}
                          className="link-editorial"
                        >
                          {c.label}
                        </Link>
                      </div>
                      <div className="value">
                        {c.address}, {c.suburbLine}.{" "}
                        <a
                          href={external.automedRegistration(c.key)}
                          rel="noopener"
                          className="link-editorial"
                        >
                          Register at {c.shortLabel} <Arrow />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 3 */}
              <article id="what-youll-need" className="doc-section">
                <div className="section-eyebrow">Before you start</div>
                <h2 className="doc-h2">What you&apos;ll need.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <ul>
                    <li>Full name, date of birth, and contact details.</li>
                    <li>Medicare card number (if you have one).</li>
                    <li>Private health fund details (if relevant).</li>
                    <li>Emergency contact.</li>
                    <li>
                      Your current GP and any specialist referrals you&apos;re
                      carrying.
                    </li>
                    <li>
                      A brief summary of your medical history, current
                      medications, allergies, and any ongoing conditions.
                    </li>
                  </ul>
                  <p>
                    If you have recent test results, discharge summaries, or
                    specialist letters, you can upload them during
                    registration. This helps your new SMSG clinician have
                    context before your first consultation.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="at-reception" className="doc-section">
                <div className="section-eyebrow">In-person option</div>
                <h2 className="doc-h2">Registration at reception.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you prefer to complete registration at reception,
                    that&apos;s fine. Arrive 15 minutes before your first
                    appointment and bring your Medicare card and any relevant
                    medical documents. Reception will guide you through the
                    form on the day.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="after" className="doc-section">
                <div className="section-eyebrow">Your file</div>
                <h2 className="doc-h2">After registration.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Your file is opened and linked across the SMSG group. When
                    you return for future appointments (at the same centre or a
                    different SMSG centre), your file is already there.
                  </p>
                  <p>
                    If any of your details change (address, phone, GP,
                    medications, allergies), let reception know at your next
                    visit or update your details online through Automed.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="existing" className="doc-section">
                <div className="section-eyebrow">Already a patient</div>
                <h2 className="doc-h2">Existing patients.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you&apos;ve been a patient at Earlwood, Bangor or Sans
                    Souci previously, you don&apos;t need to register again. If
                    your details have changed, mention it at reception on your
                    next visit.
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
                Once your registration is processed, book your first
                appointment directly with a GP or specialist.
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
                How bulk and private billing work across practitioners, and
                what to expect at your first visit.
              </p>
              <span className="go">
                Read the framework <Arrow />
              </span>
            </Link>
            <Link
              href={routes.about("privacy-policy")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Privacy Policy</h3>
              <p>
                How we collect, use and protect your personal and health
                information under the Australian Privacy Principles.
              </p>
              <span className="go">
                Read the policy <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
