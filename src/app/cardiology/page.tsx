import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildCardiologySchema } from "./schema";

export const metadata: Metadata = {
  title: "Cardiology | Excelsia Specialist Centre at SMSG",
  description:
    "Cardiology consultations at Earlwood. Assessment and management of heart conditions, close to home, no city trip needed. GP referral required for the Medicare rebate.",
  alternates: { canonical: "https://smsg.au/cardiology/" },
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
  { label: "Location", value: "Earlwood Medical Centre" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
  { label: "Billing", value: "Privately billed" },
  { label: "Related diagnostics", value: "Echo, stress test, Holter monitoring" },
];

const REASONS = [
  "Chest pain assessment where the picture warrants specialist review",
  "Palpitations and rhythm disturbances",
  "Blood pressure that is difficult to control or has caused organ damage",
  "Elevated cholesterol, especially where cardiovascular risk is high",
  "Suspected or confirmed heart failure",
  "Valve disease identified on examination or echocardiogram",
  "Family history of premature heart disease",
  "Assessment before surgery in patients with cardiac risk",
  "Post-cardiac event follow-up",
  "Athletes with cardiac symptoms or family history",
];

const FAQS = [
  {
    q: "Do I need to see a GP first?",
    a: <p>Yes. A GP referral is required for the Medicare rebate to apply.</p>,
  },
  {
    q: "What should I bring?",
    a: (
      <p>
        Your GP referral, any recent cardiac tests (ECG, echocardiogram, stress
        test), blood test results, medication list, and any hospital discharge
        summaries relevant to the reason for referral.
      </p>
    ),
  },
  {
    q: "Will I need tests on the day?",
    a: (
      <p>
        Sometimes. Basic tests like an ECG may be done in the consultation.
        More detailed tests (echocardiogram, stress test, monitoring) are
        typically arranged after the initial consultation.
      </p>
    ),
  },
  {
    q: "How often will I need to come back?",
    a: (
      <p>
        That depends on your condition. Some patients need one consultation and
        go back to GP-led care. Others need ongoing specialist review.
      </p>
    ),
  },
  {
    q: "Is a hypertension-only referral suitable?",
    a: (
      <p>
        Yes, where your GP has referred you because blood pressure control
        needs specialist input.
      </p>
    ),
  },
  {
    q: "What if my symptoms are severe or getting worse?",
    a: (
      <p>
        If you&apos;re experiencing chest pain, severe shortness of breath, or
        symptoms of a heart attack, call{" "}
        <a href="tel:000" className="link-editorial">
          000
        </a>
        . Cardiology consultations are for non-urgent specialist review, not
        for acute emergencies.
      </p>
    ),
  },
];

const BOOK_TILES: Array<{
  key: "earlwood" | "bangor" | "sanssouci";
  sub: string;
}> = [{ key: "earlwood", sub: "By GP referral · Excelsia specialist rooms" }];

export default function CardiologyPage() {
  const schema = buildCardiologySchema();
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
              { label: "Cardiology" },
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
                Excelsia Specialty · Adult Cardiology
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Cardiology<span className="italic font-display-warm">.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Cardiology consultations at Excelsia, based at Earlwood.
                Assessment and management of heart-related concerns, from
                chest pain and palpitations through hypertension, heart
                failure and rhythm disorders. GP referral required for the
                Medicare rebate.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about a cardiology appointment
                  <Arrow />
                </a>
                <a href="#reasons" className="btn-outline">
                  What we cover
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
            src="/website-images/cardiology-about-bg.webp"
            alt="A cardiology consulting room at Excelsia."
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
                Heart and{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--excelsia)" }}
                >
                  blood vessel care.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Cardiology is the medical specialty focused on the heart and
                blood vessels. Cardiologists assess and manage a wide range of
                conditions, from common concerns like high blood pressure and
                elevated cholesterol through to complex heart failure,
                arrhythmias, valve disease and coronary artery disease.
              </p>
              <p>
                For most patients, cardiology involvement is coordinated with
                your GP. Your GP identifies a concern (an abnormal ECG, chest
                pain, palpitations, high blood pressure not responding to
                first-line treatment, a family history that warrants review),
                prepares a referral, and continues to be your primary point of
                contact for general care while the specialist advises on the
                cardiac question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section id="reasons" className="relative excelsia-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What consultations cover</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Common reasons{" "}
                <span className="italic font-display-warm">GPs refer.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              The cardiologist reviews your history, examines you, orders
              relevant tests, and recommends a management plan.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/cardiology-detail.webp"
              alt="An ECG examination at an Excelsia consultation."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {REASONS.map((r) => (
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

      {/* WHAT HAPPENS */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What happens at the consultation</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                History, exam,{" "}
                <span className="italic font-display-warm">a plan.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                Not every consultation ends with a change in treatment.
                Sometimes reassurance and monitoring is the appropriate
                outcome.
              </p>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Bring your GP referral, any recent test results (bloods, ECG,
                echocardiogram, imaging), a list of your current medications
                and any relevant family history. The consultation involves:
              </p>
              <ul>
                <li>A detailed history of your symptoms and cardiovascular risk factors.</li>
                <li>A clinical examination.</li>
                <li>Review of any tests you&apos;ve already had.</li>
                <li>
                  A plan that may include further investigation, medication
                  adjustment, referral for procedures where relevant, and
                  follow-up review.
                </li>
              </ul>
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
                At{" "}
                <span className="italic font-display-warm">Earlwood.</span>
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
                Excelsia cardiology consulting rooms. Weekly sessions by
                appointment through GP referral.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR SPECIALIST — consolidated practitioner content */}
      <section id="specialist" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Your specialist</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                The Excelsia{" "}
                <span className="italic font-display-warm">cardiologist.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Cardiology at Excelsia is delivered by{" "}
                <Link
                  href={routes.practitioner("dr-jennifer-law")}
                  className="link-editorial"
                >
                  Dr Jennifer Law
                </Link>
                , a Consultant Cardiologist consulting from Earlwood.
              </p>
              <p>
                Dr Law consults in English and Cantonese. See her{" "}
                <Link
                  href={routes.practitioner("dr-jennifer-law")}
                  className="link-editorial"
                >
                  practitioner profile
                </Link>{" "}
                for full clinical background, qualifications, hospital
                appointments, and consulting days.
              </p>
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
                Cardiology consultations are privately billed. A GP referral is
                required for the Medicare rebate to apply. Without a valid
                referral in place, the consultation is fully private.
              </p>
              <p>
                GP referrals are valid for twelve months.
                Specialist-to-specialist referrals are valid for three months.
                If your referral is close to expiring and you&apos;ll need
                ongoing care, request a renewal from your GP.
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
                A GP referral is required. Contact Earlwood reception, or book
                directly through Automed.
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
            <Link href="/endocrinology/" className="related-card">
              <span className="kicker">Related specialty</span>
              <h3>Endocrinology</h3>
              <p>Metabolic and hormonal medicine including diabetes and thyroid.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/respiratory-and-sleep-medicine/" className="related-card">
              <span className="kicker">Related specialty</span>
              <h3>Respiratory &amp; Sleep Medicine</h3>
              <p>Breathing and sleep disorders including sleep apnoea.</p>
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
