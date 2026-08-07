import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";
import { buildCervicalScreeningSchema } from "./schema";

export const metadata: Metadata = {
  title: "Cervical Screening | Aurora at SMSG",
  description:
    "Cervical Screening Test every five years for women aged 25 to 74, at Earlwood, Bangor and Sans Souci. Clinician-collected or self-collected sample. Reception confirms your fee at booking.",
  alternates: { canonical: "https://smsg.au/cervical-screening/" },
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
  { label: "Recommended for", value: "Women aged 25 to 74" },
  { label: "Frequency", value: "Every five years" },
  { label: "Options", value: "Clinician-collected or self-collected" },
  { label: "Billing", value: "Confirmed at booking" },
];

const COMPARE_CARDS = [
  {
    mark: "①",
    title: "Clinician-collected",
    sub: "Sample taken during the consult",
    rows: [
      { label: "Who takes it", value: "Your Aurora GP" },
      { label: "How", value: "Sample taken from the cervix using a speculum" },
      { label: "Duration", value: "A few minutes, in the consultation" },
      { label: "Familiar", value: "Same technique as a traditional Pap smear" },
    ],
  },
  {
    mark: "②",
    title: "Self-collected",
    sub: "Sample taken in private at the centre",
    rows: [
      { label: "Who takes it", value: "You do" },
      { label: "How", value: "Swab inserted a short distance and rotated" },
      { label: "Setting", value: "Private space at the centre" },
      { label: "Speculum", value: "Not needed" },
    ],
  },
];

const RECALLS = [
  {
    span: "HPV not detected",
    title: "Next screening in five years.",
    body: "We add a reminder to your file and contact you as it approaches. You don't need to think about it in the interim.",
  },
  {
    span: "HPV, not 16 or 18",
    title: "Repeat in twelve months.",
    body: "We recall you for a repeat test to see whether your immune system has cleared the virus.",
  },
  {
    span: "HPV 16 or 18, or persisting",
    title: "Referral for colposcopy.",
    body: "Colposcopy is a more detailed examination of the cervix and is a standard next step, not a diagnosis. Most colposcopies do not find cancer.",
  },
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>No. Book directly with any Aurora GP.</p> },
  {
    q: "What if I've had the HPV vaccine?",
    a: (
      <p>
        You still need cervical screening. The vaccine reduces risk of the HPV
        types that most commonly cause cancer, but it doesn&apos;t cover all
        types, and screening remains the standard of care.
      </p>
    ),
  },
  {
    q: "Can I have the test if I'm pregnant?",
    a: (
      <p>
        Cervical screening can be done during pregnancy but is often deferred
        to the postnatal period unless there&apos;s a specific concern. Talk
        to your GP about timing.
      </p>
    ),
  },
  {
    q: "Can I have the test during my period?",
    a: (
      <p>
        Yes, though heavy bleeding can affect sample quality. Light bleeding
        is usually fine. If you&apos;re on the heaviest days of your period,
        we may suggest rebooking.
      </p>
    ),
  },
  {
    q: "What about women who have had a hysterectomy?",
    a: (
      <p>
        This depends on the reason for the hysterectomy and whether your
        cervix was removed. Your GP will confirm whether ongoing screening is
        needed for you.
      </p>
    ),
  },
  {
    q: "What about women over 74?",
    a: (
      <p>
        The formal program ends at 74, but if you&apos;ve never been screened
        or your most recent test was more than five years ago, screening may
        still be appropriate. Talk to your GP.
      </p>
    ),
  },
  {
    q: "What if the test is abnormal?",
    a: (
      <p>
        Most &ldquo;abnormal&rdquo; results reflect an HPV finding rather than
        cancer. Your GP will explain your specific result and the next step,
        which is usually a repeat test in twelve months or a referral for
        colposcopy.
      </p>
    ),
  },
];

export default function CervicalScreeningPage() {
  const schema = buildCervicalScreeningSchema();
  return (
    <div className="theme-aurora iud-page">
      {/* BREADCRUMB */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Aurora Women & Babies Health", href: routes.subBrand("aurora") },
              { label: "Cervical Screening" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden blush-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("aurora")} className="brand-chip">
                <span className="dot" />
                Aurora Service · Preventive Women&apos;s Health
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Cervical{" "}
                <span className="italic font-display-warm">screening.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Cervical screening is one of the most effective cancer
                prevention tests available in Australia. Every five years for
                women aged 25 to 74, a quick appointment that detects the
                human papillomavirus (HPV) which causes almost all cervical
                cancers. Available at all three Aurora locations, with
                self-collection as an option.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book a screening appointment
                  <Arrow />
                </a>
                <a href="#options" className="btn-outline">
                  Compare collection options
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
                  <span>Results in around 5 to 10 business days</span>
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
            src="/website-images/cervical-screening-about-bg.webp"
            alt="A patient waiting for a cervical screening appointment at an SMSG centre."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(110,31,58,0.8) 0%, rgba(154,47,82,0.8) 55%, rgba(110,31,58,0.8) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the test</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                HPV testing,{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--blush)" }}
                >
                  every five years.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                The Cervical Screening Test replaced the two-yearly Pap smear
                in December 2017. It tests directly for the human
                papillomavirus (HPV), the virus responsible for almost all
                cervical cancers. Because HPV testing is more accurate than
                Pap smear cytology, the test only needs to be done every five
                years for most women rather than every two.
              </p>
              <p>
                The National Cervical Screening Program recommends a Cervical
                Screening Test every five years for anyone with a cervix aged
                25 to 74 who has ever been sexually active. This includes
                women who have received the HPV vaccine, women no longer
                sexually active, and women in same-sex relationships. The
                vaccine reduces but does not eliminate HPV risk, and screening
                remains part of standard preventive care.
              </p>
              <p>
                If your last Pap smear or Cervical Screening Test was
                negative, your next test is due five years from that date. If
                you&apos;re not sure when yours is due, reception can check
                for you or contact your previous provider.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section id="options" className="relative blush-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Your two options</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Clinician-collected or{" "}
                <span className="italic font-display-warm">self-collected.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Since July 2022, all women eligible for cervical screening can
              choose. Both tests are equally accurate for detecting HPV.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {COMPARE_CARDS.map((card) => (
              <div key={card.title} className="compare-card">
                <div className="cc-mark">{card.mark}</div>
                <div className="cc-title">{card.title}</div>
                <div className="cc-sub">{card.sub}</div>
                <ul className="list-none p-0">
                  {card.rows.map((r) => (
                    <li key={r.label} className="cc-row">
                      <div className="cc-label">{r.label}</div>
                      <div className="cc-val">{r.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[13.5px] text-ink-3 max-w-[70ch] leading-relaxed">
            Both samples go to the same laboratory. Self-collection has
            increased screening participation among women who had previously
            avoided or delayed the test. If you&apos;ve been hesitant to book
            because you find the traditional test uncomfortable or difficult,
            self-collection is a legitimate option and the outcome is
            clinically equivalent.
          </p>
        </div>
      </section>

      {/* RECALLS */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Follow-up</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                When you&apos;ll{" "}
                <span className="italic font-display-warm">be recalled.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              What happens after the test depends on what the test finds.
              Three paths, none of them alarming on their own.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/cervical-screening-detail.webp"
              alt="Preparing a cervical screening kit before an appointment."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {RECALLS.map((r) => (
              <div key={r.span} className="step-card">
                <div className="st-num">{r.span}</div>
                <div className="st-title">{r.title}</div>
                <p>{r.body}</p>
              </div>
            ))}
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
                Every Aurora GP,{" "}
                <span className="italic font-display-warm">every centre.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              If you&apos;d prefer a female GP, or a specific practitioner,
              book directly with them or ask reception to match you.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="contact-block">
            {clinicList.map((c) => (
              <div key={c.key} className="contact-row">
                <div className="label">
                  <Link href={routes.location(c.key)} className="link-editorial">
                    {c.label}
                  </Link>
                </div>
                <div className="value">
                  All Aurora GPs consulting here. Book with any of them.
                </div>
              </div>
            ))}
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
                Confirmed at{" "}
                <span className="italic font-display-warm">booking.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Billing arrangements vary by practitioner. Reception confirms
                the specific fee at booking. If you&apos;re combining the
                appointment with a broader women&apos;s health check or other
                concerns, a longer consultation may attract a different fee.
              </p>
              <p>The Cervical Screening Test itself is Medicare-funded.</p>
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
                Book with Aurora
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
                Book with any Aurora GP at the centre closest to you.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {clinicList.map((clinic) => (
                  <a
                    key={clinic.key}
                    href={clinic.automedBase}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25 hover:bg-cream/10 hover:border-cream/50 transition group"
                  >
                    <div>
                      <div
                        className="font-display text-[19px] text-cream"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                      >
                        {clinic.label}
                      </div>
                      <div className="text-cream/70 text-[13px] mt-0.5">
                        Screening with any Aurora GP
                      </div>
                    </div>
                    <Arrow className="arrow text-cream/80" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.subBrand("aurora")} className="related-card">
              <span className="kicker">Sub-brand</span>
              <h3>Aurora Women &amp; Babies Health</h3>
              <p>The full women&apos;s health team, from your first period through menopause.</p>
              <span className="go">
                Meet the team <Arrow />
              </span>
            </Link>
            <Link href="/iud-hormonal-implant/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Hormonal IUD &amp; Contraceptive Implant</h3>
              <p>Long-acting reversible contraception, inserted and removed with Aurora.</p>
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
