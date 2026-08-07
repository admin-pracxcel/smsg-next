import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes, external } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { SUB_BRANDS } from "@/lib/sub-brands";
import { getAllPractitioners } from "@/lib/content";
import type { Practitioner } from "@/lib/schemas/practitioner";
import { SubBrandCareAreas, type CareTile } from "@/components/sub-brand/SubBrandCareAreas";
import { SubBrandRelatedPages } from "@/components/sub-brand/SubBrandRelatedPages";
import { buildSydneyCosmedicSchema } from "./schema";

/**
 * Sydney Cosmedic hub · SMSG's non-surgical cosmetic sub-brand.
 *
 * COMPLIANCE (Sim, clinical compliance owner):
 *   1. Adult-only (18+) messaging appears on hero, locations, booking,
 *      and dedicated "What we don't do" section.
 *   2. No Schedule 4 medicine trade names anywhere. Category names only:
 *      "anti-wrinkle treatments", "dermal fillers", "non-surgical skin
 *      treatments".
 *   3. No before-and-after imagery.
 *   4. No patient testimonials, quotes or attributed reviews.
 *   5. In-person consultation required before every procedure (stated
 *      in hero copy and consultation-tile copy).
 *   6. No 7-day cooling-off banner (Sim's clinical position, adults only).
 * Any change must be checked against these rules and Sim's source page.
 */

export const metadata: Metadata = {
  title:
    "Sydney Cosmedic | Non-Surgical Cosmetic Care by Medically Qualified Practitioners at SMSG",
  description:
    "Non-surgical cosmetic care delivered by medically qualified independent practitioners. In-person consultation before every procedure. Adult patients only. Operating from Earlwood.",
};

// Care tiles verbatim from Sim's source page. Do NOT introduce any S4 drug
// brand names. Category descriptions only.
const tiles: CareTile[] = [
  {
    num: "01",
    title: "Anti-wrinkle treatments",
    body: "Injectable treatments that temporarily reduce the appearance of dynamic wrinkles by relaxing the underlying muscle. Suitable areas and treatment plans are discussed at the consultation. All anti-wrinkle products used are Schedule 4 prescription medicines and are not named or promoted on this page or in any advertising.",
    cta: "Anti-wrinkle treatments",
    href: "/patient-information/book-online/",
  },
  {
    num: "02",
    title: "Dermal fillers and facial volumisation",
    body: "Injectable treatments that restore volume, refine contour, or soften static lines. Suitable areas and treatment plans are discussed at the consultation. All filler products used are Schedule 4 prescription medicines and are not named or promoted on this page or in any advertising.",
    cta: "Dermal fillers",
    href: "/patient-information/book-online/",
  },
  {
    num: "03",
    title: "Non-surgical skin treatments",
    body: "Skin-focused treatments including energy-based skin rejuvenation and other non-injectable procedures. Suitable options depend on your skin type and clinical presentation, discussed at the consultation.",
    cta: "Non-surgical skin treatments",
    href: "/patient-information/book-online/",
  },
  {
    num: "04",
    title: "The cosmetic consultation",
    id: "consultation",
    body: (
      <>
        <p>
          Every cosmetic treatment starts with an in-person consultation with
          the treating practitioner. During the consultation, the practitioner
          takes a medical history, discusses your goals, examines the treatment
          area, explains what a treatment can and cannot achieve in your
          specific case, describes the procedure and recovery, and covers
          common and uncommon side effects.
        </p>
        <p className="mt-3 text-[14px] text-ink-3 leading-relaxed">
          If the practitioner recommends a treatment, it is booked as a
          separate appointment. A cooling-off period between consultation and
          treatment applies only to patients under 18, and Sydney Cosmedic
          does not treat patients under 18 in any circumstance.
        </p>
      </>
    ),
    cta: "The cosmetic consultation",
    href: "/patient-information/book-online/",
  },
];

function metaLine(p: Practitioner): string {
  const parts: string[] = [];
  // On Sydney Cosmedic the role_title reads "Registered Medical Practitioner
  // practicing cosmetic procedures" for Danae Lim; the practitioner JSON
  // provides that directly.
  if (p.credentials.role_title) parts.push(p.credentials.role_title);
  if (p.credentials.post_nominal) parts.push(p.credentials.post_nominal);
  if (p.languages.length) parts.push(p.languages.join(", "));
  return parts.join(" · ");
}
function locationLine(p: Practitioner): string {
  return p.clinics.consulting_at.map((k) => CLINICS[k].shortLabel).join(" · ");
}

export default function SydneyCosmedicHubPage() {
  const schema = buildSydneyCosmedicSchema();
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "sydneycosmedic")
  );

  return (
    <div className="theme-cosmedic">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Sydney Cosmedic" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden cosmedic-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-20 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#3B342C" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <span className="brand-chip">
                <span className="dot" />
                SMSG Sub-brand · Cosmetic Medicine
              </span>
              <h1 className="font-display h-brand max-w-[14ch] mt-6">
                Sydney{" "}
                <span className="italic font-display-warm">Cosmedic.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Non-surgical cosmetic care delivered by medically qualified
                independent practitioners, for adults, after an in-person
                consultation.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book a cosmetic consultation
                  <Arrow />
                </a>
                <a href="#consultation" className="btn-outline">
                  What to expect
                  <Arrow />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-5 md:gap-8 max-w-[540px]">
                <Stat n="2" label="Medically qualified practitioners" />
                <Stat n="18+" label="Adult patients only" />
                <Stat n="In‑person" label="Consultation before every procedure" />
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="brand-plate">
                <span className="plate-corner">est. within SMSG</span>
                <Image
                  src="/website-images/Sydney Cosmedic.webp"
                  alt="Sydney Cosmedic brand logo"
                  className="plate-logo"
                  width={420}
                  height={320}
                  priority
                />
                <div className="plate-under">
                  <span>Cosmetic medicine</span>
                  <span className="sep" />
                  <span>Earlwood, Sydney</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">About Sydney Cosmedic</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Cosmetic care as{" "}
                <span className="italic font-display-warm">medical practice.</span>
              </h2>
              <div className="mt-8 space-y-3">
                <IntroBullet>Two medically qualified independent practitioners</IntroBullet>
                <IntroBullet>
                  Anti-wrinkle treatments, dermal fillers, non-surgical skin
                  treatments
                </IntroBullet>
                <IntroBullet>For adult patients only</IntroBullet>
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                Cosmetic medicine is medicine. The questions worth asking
                before any injectable treatment are medical questions. What is
                the plan for your face over the next twelve months. What is
                realistic given your skin, your muscle pattern, your medical
                history and what you would actually like to change. What can
                go wrong, and what happens if it does. What is not a good idea
                in your specific case, and what alternatives might sit better.
              </p>
              <p>
                Sydney Cosmedic is SMSG&apos;s non-surgical cosmetic
                sub-brand. Two medically qualified independent practitioners,
                both consulting from Earlwood Medical Centre, deliver
                anti-wrinkle treatments, dermal fillers and non-surgical skin
                treatments. Every procedure requires an in-person consultation
                with the treating practitioner first. There is no exception to
                that rule.
              </p>
              <p>
                We treat adult patients only. We do not advertise Schedule 4
                prescription medicine trade names, we do not display
                before-and-after imagery, and we do not publish patient
                testimonials. These are AHPRA and TGA requirements that apply
                to every cosmetic practice in Australia. They are also the
                way we think cosmetic medicine ought to be practised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubBrandCareAreas
        bandClass="cosmedic-band"
        eyebrow="Care areas"
        headingLead="Four categories"
        headingItalic="of treatment."
        supporting="Injectable treatments, non-surgical skin treatments, and the consultation process that sits before all of them."
        tiles={tiles}
        cols={2}
      />

      {/* TEAM · handle 1-2 practitioners gracefully (never render empty slots) */}
      <section id="team" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Your Sydney Cosmedic team</span>
              <h2 className="font-display h-section mt-3 max-w-[30ch]">
                Two medically qualified{" "}
                <span className="italic font-display-warm">
                  independent practitioners.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Our Sydney Cosmedic practitioners are independent clinicians
              delivering cosmetic medical care from our supporting premises.
              Both consult from Earlwood Medical Centre.
            </div>
          </div>

          <div className="hairline w-full mb-4" />

          <ul className="grid md:grid-cols-2 gap-x-14">
            {roster.map((p) => (
              <li key={p.slug}>
                <Link href={routes.practitioner(p.slug)} className="team-row reveal">
                  <div>
                    <div className="name">{p.identity.full_name}</div>
                    <div className="role">{metaLine(p)}</div>
                    {p.credentials.ahpra && (
                      <div className="reg">AHPRA Reg: {p.credentials.ahpra}</div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="loc">{locationLine(p)}</div>
                  </div>
                  <svg className="go" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M2 7h9M8 4l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link href={routes.teamGPs()} className="btn-ghost text-[14px]">
              See all SMSG general practitioners
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS · single-clinic layout, distinct from SubBrandLocations */}
      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-10">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">
                Where Sydney Cosmedic operates
              </span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                From Earlwood{" "}
                <span className="italic font-display-warm">Medical Centre.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Sydney Cosmedic consults from a single SMSG location.
            </div>
          </div>

          <div className="hairline w-full" />

          <div className="grid md:grid-cols-12 gap-6 md:gap-8 mt-10">
            <article className="sb-loc-card md:col-span-6">
              <div className="lc-photo">
                <Image
                  src="/website-images/earlwood.webp"
                  alt="Earlwood Medical Centre exterior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span
                  className="lc-tag"
                  style={
                    { ["--dot" as string]: "var(--cosmedic-deep)" } as React.CSSProperties
                  }
                >
                  <span className="dot" style={{ background: "var(--cosmedic-deep)" }} />
                  Earlwood · 2206
                </span>
              </div>
              <div className="lc-body">
                <h3
                  className="font-display text-[26px] leading-[1.05]"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                >
                  Earlwood Medical Centre
                </h3>
                <div className="mt-3 text-[13px] text-ink-3">
                  352-354 Homer Street · Mon-Sat
                </div>

                <ul className="mt-6 space-y-2 text-[14.5px] text-ink-2 leading-relaxed">
                  {[
                    "Both Sydney Cosmedic practitioners",
                    "Consultations and treatments in a dedicated treatment room",
                    "Saturday appointments available through Earlwood's Saturday hours",
                    "On-site nursing team and clinical support",
                  ].map((line, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--cosmedic-deep)" }}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
                  <Link href={routes.location("earlwood")} className="btn-ghost text-[14px]">
                    About Earlwood
                    <Arrow />
                  </Link>
                </div>
              </div>
            </article>

            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="body-editorial max-w-[52ch]">
                <p>
                  Earlwood is the founding SMSG centre and the only site
                  where Sydney Cosmedic operates. Consultations and treatments
                  run through the treatment room during weekday hours, with
                  additional appointments available on Saturdays.
                </p>
              </div>
              <div className="mt-8 compliance-note">
                <strong
                  className="allcaps"
                  style={{ color: "var(--cosmedic-deep)" }}
                >
                  Adult patients only
                </strong>
                <p className="mt-2">
                  Sydney Cosmedic provides non-surgical cosmetic procedures
                  to adult patients aged 18 and over. We do not treat patients
                  under 18 in any circumstance. An in-person consultation with
                  the treating practitioner is required before any procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-6">
              <span className="allcaps text-ink-3">
                Booking with Sydney Cosmedic
              </span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Every treatment starts{" "}
                <span className="italic font-display-warm">
                  with a consultation.
                </span>
              </h2>
              <div className="body-editorial mt-8 max-w-[56ch]">
                <p>
                  There is no way to book a cosmetic treatment without first
                  attending an in-person consultation with the practitioner
                  who will treat you. This is a clinical decision, not a
                  scheduling formality. There are questions that cannot be
                  answered until the practitioner has met you in person and
                  examined the treatment area.
                </p>
              </div>

              <div className="mt-8 space-y-4 max-w-[52ch]">
                <BookingHint
                  eyebrow="If you're new to Sydney Cosmedic"
                  body="Book a first consultation. Allow around 30 minutes. Bring a list of any regular medications, and any information about previous cosmetic treatments you have had."
                />
                <BookingHint
                  eyebrow="If you have completed a consultation"
                  body="Reception will book the treatment appointment with the same practitioner you consulted with, at a time that works for both the treatment plan and your calendar."
                />
                <BookingHint
                  eyebrow="If you have questions before booking"
                  body="Reception can answer general questions about the consultation process, appointment availability, and the fee framework. Specific treatment questions are answered by the practitioner at the consultation, not before."
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <figure className="rounded-[20px] overflow-hidden h-[200px] md:h-[220px] mb-5 relative">
                <Image
                  src="/website-images/booking-with-aurora.webp"
                  alt="A hand next to a phone showing a calendar and a consultation appointment card"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="grid gap-4">
                <a
                  href={CLINICS.earlwood.automedBase}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 hover:border-ink/30 bg-paper px-6 py-5 transition"
                >
                  <div>
                    <div className="allcaps text-ink-3">Earlwood</div>
                    <div
                      className="font-display text-[22px] mt-1"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                    >
                      Book Sydney Cosmedic at Earlwood
                    </div>
                    <div className="text-[12.5px] text-ink-3 mt-1">
                      Both practitioners · Saturday appointments available
                    </div>
                  </div>
                  <Arrow className="arrow shrink-0 text-ink-3" size={18} />
                </a>

                <div className="mt-2 text-[13px] text-ink-3 flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>
                    New to SMSG?{" "}
                    <Link
                      href={routes.patientInfo("new-patient-registration")}
                      className="link-editorial text-[13px]"
                    >
                      Register as a new patient
                    </Link>{" "}
                    so your file is ready.
                  </span>
                </div>

                <div className="mt-6 compliance-note">
                  <strong
                    className="allcaps"
                    style={{ color: "var(--cosmedic-deep)" }}
                  >
                    Adult patients only · in-person consultation required
                  </strong>
                  <p className="mt-2">
                    Sydney Cosmedic services are for patients aged 18 and
                    over. Every procedure requires a prior in-person
                    consultation with the treating practitioner. Cosmetic
                    services are privately billed and Medicare rebates do not
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO NOT DO · compliance boundary list */}
      <section id="not" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <span className="allcaps text-ink-3">
                What Sydney Cosmedic does not do
              </span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                A few things worth being{" "}
                <span className="italic font-display-warm">explicit about.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[46ch]">
                Cosmetic medicine is a strictly regulated area of practice in
                Australia. AHPRA, the TGA and the Medical Board have specific
                advertising, patient-selection and safety requirements that
                Sydney Cosmedic follows fully. The clearest way to explain
                that is to name what we do not do.
              </p>
            </div>

            <div className="md:col-span-7">
              <ul className="ruled-list">
                {[
                  "We do not treat patients under 18 for cosmetic procedures in any circumstance.",
                  "We do not name Schedule 4 prescription medicine trade names on this website or in any advertising.",
                  "We do not display before-and-after imagery on the website.",
                  "We do not publish patient testimonials or case studies.",
                  "We do not offer treatments without a prior in-person consultation.",
                  "We do not compare our services to other cosmetic providers.",
                ].map((line, i) => (
                  <li key={i}>
                    <span className="li-mark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[14.5px] text-ink-2 leading-relaxed max-w-[62ch]">
                Beyond regulatory compliance, these are the boundaries we
                think cosmetic medicine ought to operate within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative">
        <div className="paper-noise absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Common questions</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Things patients{" "}
                <span className="italic font-display-warm">often ask.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[42ch]">
                If your question isn&apos;t here, our reception team is a good
                first stop for procedural questions, and the practitioner is
                the right point for clinical questions.
              </p>
            </div>

            <div className="md:col-span-8">
              <Faq q="Do I need a referral?" open>
                <p>
                  No. You don&apos;t need a referral to see a Sydney Cosmedic
                  practitioner. Every treatment requires an in-person
                  consultation with your treating practitioner first.
                </p>
              </Faq>
              <Faq q="Is it bulk-billed?">
                <p>
                  No. Cosmetic services are privately billed. Medicare rebates
                  do not apply to cosmetic services. Fees vary by treatment
                  and are confirmed at the consultation once the practitioner
                  has examined the treatment area and determined what
                  treatment is clinically appropriate.
                </p>
                <p>
                  For our general fee structure across the group, see the{" "}
                  {/* TODO: link to /about/fees-and-billing/ when the page ships */}
                  <a href="/patient-information/book-online/" className="link-editorial">
                    Fees &amp; Billing page
                  </a>
                  .
                </p>
              </Faq>
              <Faq q="Can you tell me what a specific product costs?">
                <p>
                  Reception can give you a general fee framework at booking.
                  Specific quotes are given at the consultation, after the
                  practitioner has examined the area and determined what
                  treatment (if any) is appropriate for you.
                </p>
              </Faq>
              <Faq q="Can I book a treatment without a consultation?">
                <p>
                  No. The consultation is not optional, and it is not a phone
                  call. There are questions that cannot be answered until the
                  practitioner has met you in person and examined the
                  treatment area.
                </p>
              </Faq>
              <Faq q="Do you offer treatments for patients under 18?">
                <p>
                  No. Sydney Cosmedic does not provide non-surgical cosmetic
                  procedures to patients under 18 in any circumstance.
                </p>
              </Faq>
              <Faq q="Will I see before-and-after photos on the website or during consultation?">
                <p>
                  No before-and-after imagery is displayed on the website.
                  During your consultation, the practitioner will discuss
                  realistic outcomes for your specific case, in words rather
                  than through the imagery of other patients.
                </p>
              </Faq>
              <Faq q="What if I've had treatments elsewhere and want to continue with SMSG?">
                <p>
                  Please mention this at the consultation. Prior treatment
                  history, including which category of product you have had
                  and when, is important for planning your care and avoiding
                  unwanted interactions.
                </p>
              </Faq>
              <Faq q="Which practitioner should I see?">
                <p>
                  If you have a preference, book with the practitioner
                  directly. If you don&apos;t, reception can match you to the
                  shortest wait, and the practitioner will confirm at the
                  consultation that they are the right fit for what
                  you&apos;re looking for.
                </p>
              </Faq>
            </div>
          </div>
        </div>
      </section>

      <SubBrandRelatedPages
        subBrand="sydneycosmedic"
        headingLead="Read on"
        headingItalic="to go deeper."
        supporting="A few pages that patients most often move to from Sydney Cosmedic."
        items={[
          {
            eyebrow: "Location",
            title: "Earlwood Medical Centre",
            body: "The centre Sydney Cosmedic operates from, with Saturday appointments available.",
            href: routes.location("earlwood"),
          },
          {
            eyebrow: "About",
            title: "About SMSG",
            body: "Our clinical group, the sub-brands under it, and the way we work.",
            href: routes.aboutHub(),
          },
          {
            eyebrow: "Sub-brand",
            title: "Clarion Skin Cancer Clinic",
            body: "The skin cancer service within SMSG for medical (rather than cosmetic) skin concerns.",
            href: routes.subBrand("clarion"),
            dotColor: SUB_BRANDS.clarion.dotColor,
          },
          {
            eyebrow: "Service",
            title: "The cosmetic consultation",
            body: "What happens at your first appointment, and why it comes before anything else.",
            href: "#consultation",
          },
        ]}
      />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}

function Arrow({ className = "arrow", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-black/15 pt-4">
      <div
        className="font-display text-[22px] md:text-[30px] leading-none"
        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
      >
        {n}
      </div>
      <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
        {label}
      </div>
    </div>
  );
}

function IntroBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[13.5px] text-ink-2">
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: "var(--cosmedic-deep)" }}
      />
      {children}
    </div>
  );
}

function BookingHint({ eyebrow, body }: { eyebrow: string; body: string }) {
  return (
    <div className="rounded-[16px] border border-black/10 bg-paper p-5 flex items-start gap-4">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "color-mix(in oklab, var(--cosmedic) 20%, var(--paper))",
          color: "var(--cosmedic-deep)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
      <div>
        <div className="allcaps text-ink-3">{eyebrow}</div>
        <div className="text-[14.5px] text-ink mt-1">{body}</div>
      </div>
    </div>
  );
}

function Faq({ q, children, open }: { q: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details className="faq-item" open={open}>
      <summary>
        {q}
        <span className="chev">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>
      <div className="faq-body">{children}</div>
    </details>
  );
}
