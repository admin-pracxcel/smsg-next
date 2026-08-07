import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildFeesSchema } from "./schema";

export const metadata: Metadata = {
  title: "Fees & Billing | SMSG",
  description:
    "SMSG operates a mixed billing model across Earlwood, Bangor and Sans Souci. Each independent practitioner sets their own billing arrangements. Reception confirms fees at booking.",
  alternates: {
    canonical: "https://smsg.au/patient-information/fees-and-billing/",
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
  { id: "how-billing-works", label: "How billing works" },
  { id: "bulk-billing", label: "Bulk billing" },
  { id: "private-billing", label: "Private billing" },
  { id: "aurora", label: "Aurora Women & Babies Health" },
  { id: "excelsia", label: "Excelsia Specialist Centre" },
  { id: "sydney-cosmedic", label: "Sydney Cosmedic" },
  { id: "cards", label: "Medicare, private health, and other cards" },
  { id: "cancellations", label: "Cancellations and non-attendance" },
  { id: "individual", label: "Individual practitioner billing" },
];

export default function FeesAndBillingPage() {
  const schema = buildFeesSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "Fees & Billing" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · Fees &amp; Billing
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Fees &amp;{" "}
            <span className="italic font-display-warm">billing.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>Mixed billing across the group</span>
            </span>
            <span className="doc-meta">
              <span className="dot" />
              <span>Reception confirms at booking</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            SMSG operates a mixed billing model across Earlwood, Bangor and
            Sans Souci. Each independent practitioner sets their own billing
            arrangements, so fees can vary from one practitioner to another.
            Reception confirms your specific fee and expected out-of-pocket
            cost when you book.
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
              <article id="how-billing-works" className="doc-section">
                <div className="section-eyebrow">Framework</div>
                <h2 className="doc-h2">How billing works at SMSG.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Every clinician who consults from an SMSG centre is an
                    independent practitioner. Each sets their own fee schedule
                    and billing model. Reception at each centre knows the
                    arrangement for every practitioner and can confirm what
                    applies to you before your appointment.
                  </p>
                  <p>
                    We confirm fees with you at three points: at booking, at
                    check-in, and at check-out. If your appointment turns out
                    to be longer or more complex than expected, or a procedure
                    is added during the consultation, the final fee is
                    confirmed at check-out.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="bulk-billing" className="doc-section">
                <div className="section-eyebrow">No out-of-pocket</div>
                <h2 className="doc-h2">Bulk billing.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Some consultations are bulk billed, meaning there&apos;s no
                    out-of-pocket cost for eligible patients.
                  </p>
                  <p>
                    Bulk billing is generally available for routine standard
                    consultations with our registrar GPs and some other GPs,
                    for eligible ongoing patients seen within the last twelve
                    months, and for health assessments and GP Chronic Condition
                    Management Plans.
                  </p>
                  <p>
                    Reception can tell you whether your specific appointment
                    with your chosen practitioner will be bulk billed when you
                    book.
                  </p>
                </div>
              </article>

              {/* Section 3 */}
              <article id="private-billing" className="doc-section">
                <div className="section-eyebrow">Gap and rebate</div>
                <h2 className="doc-h2">Private billing.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Where bulk billing doesn&apos;t apply, appointments are
                    privately billed. This includes most specialised
                    consultations, procedures, longer consultations, telehealth
                    appointments, and appointments with practitioners who are
                    not part of the bulk billing arrangement.
                  </p>
                  <p>
                    For private appointments, Medicare rebates apply where the
                    service is eligible. Your out-of-pocket cost is the gap
                    between the fee and the Medicare rebate.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="aurora" className="doc-section">
                <div className="section-eyebrow">Sub-brand billing</div>
                <h2 className="doc-h2">Aurora Women &amp; Babies Health.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Consultations under{" "}
                    <Link
                      href={routes.subBrand("aurora")}
                      className="link-editorial"
                    >
                      Aurora Women &amp; Babies Health
                    </Link>{" "}
                    are privately billed across the board, with two exceptions:
                    routine baby immunisations and general consults for babies
                    are bulk billed.
                  </p>
                  <p>
                    Individual Aurora practitioners may have specific billing
                    arrangements for antenatal shared care, cervical screening,
                    or other services. Reception confirms at booking.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="excelsia" className="doc-section">
                <div className="section-eyebrow">Specialist consultations</div>
                <h2 className="doc-h2">Excelsia Specialist Centre.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Specialist consultations at{" "}
                    <Link
                      href={routes.subBrand("excelsia")}
                      className="link-editorial"
                    >
                      Excelsia
                    </Link>{" "}
                    are privately billed. A GP referral is required for the
                    Medicare rebate to apply. Without a valid referral in
                    place, the consultation is fully private.
                  </p>
                  <p>
                    Fees vary by specialist. Reception confirms the specific
                    fee and expected out-of-pocket cost for your chosen
                    specialist when you book.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="sydney-cosmedic" className="doc-section">
                <div className="section-eyebrow">Cosmetic services</div>
                <h2 className="doc-h2">Sydney Cosmedic.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Cosmetic services are privately billed. Medicare rebates
                    do not apply to cosmetic services. Fees vary by treatment
                    and are confirmed at the consultation once the practitioner
                    has examined the treatment area.
                  </p>
                </div>
              </article>

              {/* Section 7 */}
              <article id="cards" className="doc-section">
                <div className="section-eyebrow">What to bring</div>
                <h2 className="doc-h2">Medicare, private health, and other cards.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Bring your Medicare card and any private health details to
                    your first appointment. Rebates are processed on the day
                    where possible.
                  </p>
                  <p>
                    We accept Health Care Cards, Pension Cards, DVA cards, and
                    Health Insurance cards where the service is covered by the
                    relevant scheme. Some practitioners offer specific
                    concessions for Health Care Card holders; reception can
                    confirm what applies to your chosen practitioner.
                  </p>
                  <p>
                    For Workers&apos; Compensation, CTP or Personal Injury
                    claims, please mention this at booking. These are handled
                    separately through our external partner Synergy Medical.
                  </p>
                </div>
              </article>

              {/* Section 8 */}
              <article id="cancellations" className="doc-section">
                <div className="section-eyebrow">Notice periods</div>
                <h2 className="doc-h2">Cancellations and non-attendance.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you need to cancel or reschedule, please give at least
                    24 hours&apos; notice where possible. Cancellation policies
                    vary by appointment type. Procedural, specialist, and
                    cosmetic appointments have stricter cancellation terms
                    because they hold longer slots.
                  </p>
                  <p>
                    Late cancellations or non-attendance may attract a fee,
                    particularly for longer appointments. Reception will
                    explain any applicable fee at booking.
                  </p>
                </div>
              </article>

              {/* Section 9 */}
              <article id="individual" className="doc-section">
                <div className="section-eyebrow">Per practitioner</div>
                <h2 className="doc-h2">Individual practitioner billing.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    For questions about a specific practitioner&apos;s billing
                    arrangement, reception at the practitioner&apos;s usual
                    centre is your best point of contact. Individual
                    practitioner profile pages carry a brief note on their
                    general billing pattern.
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
                Book directly with the practitioner you&apos;d like to see;
                reception will confirm your fee before your appointment.
              </p>
              <span className="go">
                Book an appointment <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("new-patient-registration")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>New Patient Registration</h3>
              <p>
                Register at the centre you&apos;ll be visiting first so
                reception can confirm your fee before you arrive.
              </p>
              <span className="go">
                Register now <Arrow />
              </span>
            </Link>
            <Link href={routes.patientInfo("faq")} className="related-card">
              <span className="kicker">Related</span>
              <h3>Frequently Asked Questions</h3>
              <p>
                Common questions about fees, Medicare, cancellations, referrals
                and how SMSG works day-to-day.
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
