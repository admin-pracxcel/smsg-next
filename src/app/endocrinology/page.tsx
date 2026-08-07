import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildEndocrinologySchema } from "./schema";

export const metadata: Metadata = {
  title: "Endocrinology | Excelsia Specialist Centre at SMSG",
  description:
    "Endocrinology consultations at Earlwood and Bangor. Diabetes, thyroid, PCOS, weight management, bone health and reproductive endocrinology. GP referral required for the Medicare rebate.",
  alternates: { canonical: "https://smsg.au/endocrinology/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chev() {
  return (
    <span className="chev">
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const GLANCE_ROWS = [
  { label: "Locations", value: "Earlwood, Bangor" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
  { label: "Billing", value: "Privately billed" },
  { label: "Cross-referral", value: "Aurora extended team for women's health" },
];

const INTERESTS = [
  "Weight management, including SCOPE-certified specialist care",
  "Different types of diabetes (Type 1, Type 2, gestational, and others)",
  "Pre-diabetes assessment and prevention",
  "Polycystic ovary syndrome (PCOS)",
  "Thyroid disorders (hypothyroidism, hyperthyroidism, thyroid nodules)",
  "Bone disorders including osteoporosis",
  "Reproductive endocrinology, including menopause and fertility-related hormonal concerns",
  "Gestational diabetes management and follow-up",
  "Adrenal and pituitary disorders",
];

const FAQS = [
  {
    q: "Do I need to see a GP first?",
    a: <p>Yes. A GP referral is required for the Medicare rebate to apply. Without a valid referral in place, the consultation is fully private.</p>,
  },
  {
    q: "What should I bring?",
    a: (
      <p>
        Your GP referral, recent blood tests and imaging results, medication
        list, and any hospital or previous specialist letters relevant to the
        reason for referral.
      </p>
    ),
  },
  {
    q: "Will I need tests?",
    a: (
      <p>
        Often. Endocrinology relies heavily on blood tests, and additional
        imaging or dynamic testing may be arranged after the initial
        consultation.
      </p>
    ),
  },
  {
    q: "Is weight management covered?",
    a: (
      <p>
        Yes. Weight and metabolic health form a substantial part of endocrine
        practice at Excelsia, including SCOPE-certified specialist care.
      </p>
    ),
  },
  {
    q: "Is PCOS covered?",
    a: (
      <p>
        Yes. Polycystic ovary syndrome is a core area of endocrine practice at
        Excelsia, including fertility-related and metabolic aspects.
      </p>
    ),
  },
  {
    q: "How does endocrinology fit with menopause care?",
    a: (
      <p>
        Menopause is managed by your{" "}
        <Link href={routes.subBrand("aurora")} className="link-editorial">
          Aurora
        </Link>{" "}
        GP in most cases. Where menopause involves complex hormonal, metabolic
        or bone health considerations, your GP may refer to Excelsia
        endocrinology for co-management.
      </p>
    ),
  },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor"; sub: string }> = [
  { key: "earlwood", sub: "By GP referral · Excelsia specialist rooms" },
  { key: "bangor", sub: "By GP referral · Excelsia specialist rooms" },
];

export default function EndocrinologyPage() {
  const schema = buildEndocrinologySchema();
  return (
    <div className="theme-excelsia iud-page">
      {/* BREADCRUMB */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Excelsia Specialist Centre", href: routes.subBrand("excelsia") },
              { label: "Endocrinology" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden excelsia-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("excelsia")} className="brand-chip">
                <span className="dot" />
                Excelsia Specialty · Endocrinology &amp; Metabolism
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Endocrinology<span className="italic font-display-warm">.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Endocrinology consultations at Earlwood and Bangor. Diabetes,
                thyroid conditions, polycystic ovary syndrome, weight
                management, bone disorders and reproductive endocrinology,
                referred through your GP.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about an appointment
                  <Arrow />
                </a>
                <a href="#interests" className="btn-outline">
                  Clinical interests
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>Reception confirms the fee at booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/website-images/endocrinology-about-bg.webp"
            alt="An endocrinologist reviewing lab results at Excelsia."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 55, 68, 0.90) 0%, rgba(50, 80, 95, 0.85) 55%, rgba(30, 55, 68, 0.90) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the specialty</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Hormones and the{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--excelsia)" }}
                >
                  glands that produce them.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Endocrinology is the medical specialty focused on hormones and
                the glands that produce them. Endocrinologists assess and
                manage conditions of the thyroid, adrenal glands, pituitary,
                pancreas (including diabetes), reproductive hormones, and bone
                metabolism. Weight management and metabolic disorders also
                fall within endocrinology.
              </p>
              <p>
                Endocrine conditions often affect multiple body systems and
                interact with other health issues, so care is typically
                coordinated between the endocrinologist and your GP. Your GP
                identifies the concern, prepares a referral, and continues
                general care while the endocrinologist advises on the
                specific endocrine question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" className="relative excelsia-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Clinical interests</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                What this service{" "}
                <span className="italic font-display-warm">covers.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Endocrinology at Excelsia covers the full breadth of adult
              endocrine practice, from routine thyroid and diabetes management
              through to complex hormonal, metabolic and bone disorders. Care
              is coordinated with your GP and, where relevant, with Aurora for
              women&apos;s health referrals.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/endocrinology-detail.webp"
              alt="A continuous glucose monitor in place during endocrine review."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {INTERESTS.map((r) => (
              <div
                key={r}
                className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: "var(--excelsia-deep)" }}
                />
                <span>{r}.</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* YOUR SPECIALIST — consolidated practitioner content */}
      <section id="specialist" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Your specialist</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                The Excelsia{" "}
                <span className="italic font-display-warm">endocrinologist.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Endocrinology at Excelsia is delivered by{" "}
                <Link
                  href={routes.practitioner("dr-thaw-dar-htet")}
                  className="link-editorial"
                >
                  Dr Thaw Dar Htet
                </Link>{" "}
                (BMed, FRACP), a Consultant Endocrinologist and SCOPE Certified
                Weight Management Specialist. Dr Htet is a Staff Specialist in
                Endocrinology at St George Hospital and holds academic
                appointments as Clinical Lecturer in Medicine at Macquarie
                University and Conjoint Associate Lecturer at UNSW Medicine.
              </p>
              <p>
                For{" "}
                <Link href={routes.subBrand("aurora")} className="link-editorial">
                  Aurora Women &amp; Babies Health
                </Link>{" "}
                patients, Dr Htet is Aurora&apos;s extended team
                endocrinologist, taking referrals for PCOS, gestational
                diabetes, menopause-related metabolic concerns, and weight
                management in a women&apos;s health context.
              </p>
              <p>
                Dr Htet consults in English and Burmese. See her{" "}
                <Link
                  href={routes.practitioner("dr-thaw-dar-htet")}
                  className="link-editorial"
                >
                  practitioner profile
                </Link>{" "}
                for full clinical background, qualifications, and consulting
                days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What happens at the consultation</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Bloods, history,{" "}
                <span className="italic font-display-warm">a plan.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Bring your GP referral, recent blood tests (thyroid function,
                HbA1c, glucose, hormone levels where relevant), imaging
                results where relevant, a list of your current medications,
                and any hospital or previous specialist letters. The
                consultation involves:
              </p>
              <ul>
                <li>A detailed history including symptoms, family history and lifestyle factors.</li>
                <li>A clinical examination.</li>
                <li>Review of any tests you&apos;ve already had.</li>
                <li>
                  A management plan that may include further investigation,
                  medication adjustment, lifestyle recommendations, and
                  follow-up.
                </li>
              </ul>
              <p>
                Some patients need short-term specialist input to establish a
                plan; others are followed regularly over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE OFFERED */}
      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Earlwood and{" "}
                <span className="italic font-display-warm">Bangor.</span>
              </h2>
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="contact-block">
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("earlwood")} className="link-editorial">
                  Earlwood Medical Centre
                </Link>
              </div>
              <div className="value">
                Excelsia endocrinology consulting rooms. Weekly sessions by
                appointment through GP referral.
              </div>
            </div>
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("bangor")} className="link-editorial">
                  Bangor Medical Centre
                </Link>
              </div>
              <div className="value">
                Excelsia endocrinology consulting rooms. Weekly sessions by
                appointment through GP referral.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Fees and billing</span>
              <h2 className="font-display h-section mt-3 max-w-[15ch]">
                Privately{" "}
                <span className="italic font-display-warm">billed.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Endocrinology consultations are privately billed. A GP
                referral is required for the Medicare rebate to apply.
                Without a valid referral in place, the consultation is fully
                private.
              </p>
              <p>
                Reception confirms the specific fee and expected out-of-pocket
                cost when you book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">FAQ</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Common{" "}
                <span className="italic font-display-warm">questions.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              {FAQS.map((f, i) => (
                <details key={i} className="faq-item">
                  <summary>
                    {f.q}
                    <Chev />
                  </summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>
                Book with Excelsia
              </span>
              <h2
                className="font-display mt-3 text-cream"
                style={{
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  lineHeight: 1.05,
                  fontVariationSettings: "'SOFT' 100,'opsz' 144",
                }}
              >
                Ready to{" "}
                <span className="italic font-display-warm">book?</span>
              </h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">
                A GP referral is required. Contact reception at the centre
                you&apos;d prefer, or book directly through Automed.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => {
                  const c = CLINICS[t.key];
                  const tel = c.phone.replace(/[^0-9+]/g, "");
                  return (
                    <div
                      key={t.key}
                      className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"
                    >
                      <div
                        className="font-display text-[19px] text-cream"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                      >
                        {c.shortLabel}
                      </div>
                      <div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90">
                        <a
                          href={`tel:${tel}`}
                          className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition"
                        >
                          {c.phone}
                        </a>
                        <a
                          href={`mailto:${c.email}`}
                          className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition"
                        >
                          {c.email}
                        </a>
                      </div>
                      <a
                        href={c.automedBase}
                        target="_blank"
                        rel="noopener"
                        className="mt-3 inline-flex items-center gap-2 text-[13.5px] text-cream/90 hover:text-cream transition"
                      >
                        Book online at {c.shortLabel}
                        <Arrow className="arrow" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.subBrand("excelsia")} className="related-card">
              <span className="kicker">Sub-brand</span>
              <h3>Excelsia Specialist Centre</h3>
              <p>The full specialist team across nine disciplines.</p>
              <span className="go">
                Meet the team <Arrow />
              </span>
            </Link>
            <Link href={routes.subBrand("aurora")} className="related-card">
              <span className="kicker">Sub-brand</span>
              <h3>Aurora Women &amp; Babies Health</h3>
              <p>Women&apos;s health at SMSG, with endocrinology as an extended-team specialty for hormonal and metabolic referrals.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/menopause-support/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Menopause Support</h3>
              <p>Perimenopause and menopause care with GP-led ongoing support.</p>
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
