import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { CLINICS, clinicList } from "@/lib/clinics";
import { buildBookOnlineSchema } from "./schema";

export const metadata: Metadata = {
  title: "Book Online | SMSG",
  description:
    "Book an appointment with an SMSG practitioner across Earlwood, Bangor or Sans Souci. Online booking through Automed, or call the centre directly.",
  alternates: {
    canonical: "https://smsg.au/patient-information/book-online/",
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
  { id: "how-to-book", label: "How to book" },
  { id: "what-to-have", label: "What to have ready" },
  { id: "new-patients", label: "New to SMSG" },
  { id: "prefer-to-call", label: "Prefer to call" },
];

export default function BookOnlinePage() {
  const schema = buildBookOnlineSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "Book Online" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · Book Online
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Book{" "}
            <span className="italic font-display-warm">online.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>Three centres, one booking flow per practitioner</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Book directly with the practitioner you&apos;d like to see at
            Earlwood, Bangor or Sans Souci. Online booking is the fastest way.
            Reception can help if you&apos;re not sure which practitioner to
            book with.
          </p>
        </div>
      </section>

      {/* ==================== LOCATION BOXES (prominent) ==================== */}
      <section
        aria-labelledby="location-cards-heading"
        className="relative bg-cream-2"
      >
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 py-12 md:py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2
              id="location-cards-heading"
              className="font-display text-[26px] md:text-[32px] leading-[1.15] max-w-[22ch]"
              style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
            >
              Pick your centre to{" "}
              <span className="italic font-display-warm" style={{ color: "var(--terra)" }}>
                book online.
              </span>
            </h2>
            <span className="hidden md:inline allcaps text-ink-3 pb-2">
              Direct to Automed
            </span>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {clinicList.map((c) => (
              <li key={c.key}>
                <a
                  href={c.automedBase}
                  rel="noopener"
                  className="group h-full flex flex-col rounded-[18px] bg-cream-paper border border-black/10 p-6 md:p-7 transition hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-[0_20px_44px_-24px_rgba(154,47,82,0.4)]"
                >
                  <span className="allcaps text-brand text-[11px]">{c.shortLabel}</span>
                  <h3
                    className="font-display text-[22px] md:text-[24px] mt-3 leading-tight"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                  >
                    {c.label}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-2 leading-relaxed">
                    {c.address}, {c.suburbLine}
                  </p>
                  <p className="mt-1 text-[13.5px] text-ink-3">
                    Phone{" "}
                    <span className="text-ink-2">{c.phone}</span>
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-brand group-hover:text-terra">
                    Book at {c.shortLabel}
                    <Arrow />
                  </span>
                </a>
              </li>
            ))}
          </ul>
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
              {/* Section 1: How to book */}
              <article id="how-to-book" className="doc-section">
                <div className="section-eyebrow">The three steps</div>
                <h2 className="doc-h2">How to book.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    <strong>Choose your centre.</strong> Each centre has its
                    own Automed booking page listing every clinician who
                    consults there and their next available appointments.
                  </p>
                  <p>
                    <strong>Choose your practitioner.</strong> If you have a
                    preferred GP or specialist, book with them directly. If
                    you&apos;re not sure, our reception team can match you to
                    the shortest wait or the right practitioner for what
                    you&apos;re seeing us about.
                  </p>
                  <p>
                    <strong>Choose your appointment type.</strong> Standard
                    consultation, long consultation, telehealth, procedure, or
                    one of the specialist appointment types. If the type you
                    need isn&apos;t visible online, call the centre and
                    reception will fit you in.
                  </p>
                </div>
              </article>

              {/* Section 2: What to have ready */}
              <article id="what-to-have" className="doc-section">
                <div className="section-eyebrow">Before you book</div>
                <h2 className="doc-h2">What to have ready.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <ul>
                    <li>
                      <strong>Your Medicare card</strong> if you have one, plus
                      any private health fund details relevant to the
                      appointment.
                    </li>
                    <li>
                      <strong>Your reason for the appointment.</strong> A brief
                      description helps reception match you to the right
                      appointment length and, where relevant, the right
                      clinician.
                    </li>
                    <li>
                      <strong>Existing patient number</strong> if you have one.
                      If you&apos;re new to SMSG, register as a new patient
                      first so your file is ready when you arrive.
                    </li>
                  </ul>
                </div>
              </article>

              {/* Section 3: New to SMSG */}
              <article id="new-patients" className="doc-section">
                <div className="section-eyebrow">First visit</div>
                <h2 className="doc-h2">New to SMSG.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Register as a new patient at the centre you&apos;ll be
                    visiting first. Registration takes a few minutes and lets
                    reception open your file before your appointment.
                  </p>
                  <p>
                    <Link
                      href={routes.patientInfo("new-patient-registration")}
                      className="link-editorial"
                    >
                      Register as a new patient
                    </Link>
                    .
                  </p>
                </div>
              </article>

              {/* Section 4: Prefer to call */}
              <article id="prefer-to-call" className="doc-section">
                <div className="section-eyebrow">Speak to reception</div>
                <h2 className="doc-h2">Prefer to call.</h2>
                <p className="mt-4 body-lg text-ink-2 max-w-[62ch]">
                  Reception at each centre is available during opening hours.
                </p>

                <div className="contact-block mt-8">
                  {clinicList.map((c) => (
                    <div className="contact-row" key={c.key}>
                      <div className="label">{c.shortLabel}</div>
                      <div className="value">
                        <a
                          href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                          className="link-editorial"
                        >
                          {c.phone}
                        </a>
                        {" · "}
                        <a
                          href={`mailto:${c.email}`}
                          className="link-editorial"
                        >
                          {c.email}
                        </a>
                      </div>
                    </div>
                  ))}
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
              href={routes.patientInfo("new-patient-registration")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>New Patient Registration</h3>
              <p>
                Register at the SMSG centre you&apos;ll be visiting first so
                your file is ready when you arrive.
              </p>
              <span className="go">
                Register now <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("fees-and-billing")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Fees &amp; Billing</h3>
              <p>
                How bulk billing and private billing work across our
                practitioners, and what to expect at reception.
              </p>
              <span className="go">
                Read the framework <Arrow />
              </span>
            </Link>
            <Link href={routes.service("telehealth")} className="related-card">
              <span className="kicker">Related</span>
              <h3>Telehealth</h3>
              <p>
                Phone and video consultations with an SMSG GP for suitable
                concerns, during our normal hours.
              </p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
      {/* Suppress unused warning: CLINICS accessed via clinicList */}
      {CLINICS ? null : null}
    </div>
  );
}
