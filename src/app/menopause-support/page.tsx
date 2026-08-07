import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";
import { buildMenopauseSchema } from "./schema";

export const metadata: Metadata = {
  title: "Menopause Support | Aurora at SMSG",
  description:
    "Perimenopause and menopause care from Aurora GPs, with endocrinology and gynaecology input where needed. Personalised support for hormonal, cognitive, sexual and cardiovascular changes.",
  alternates: { canonical: "https://smsg.au/menopause-support/" },
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
  { label: "When to see us", value: "Any point from perimenopause onwards" },
  { label: "Care model", value: "GP-led with specialist input where needed" },
  { label: "Common concerns", value: "Symptoms, hormone therapy, bone and heart health" },
  { label: "Referral", value: "Not required to see an Aurora GP" },
];

const COVERAGE = [
  {
    title: "Symptom review and management.",
    body: "Hot flushes, night sweats, sleep disturbance, mood changes, cognitive changes, joint and muscle aches, weight and metabolism changes, urinary symptoms, sexual changes.",
  },
  {
    title: "Menopausal hormone therapy (MHT).",
    body: "Formerly called HRT. Whether it's appropriate for you, which type suits your situation, and how to monitor and adjust it. MHT is safe and effective for most women within ten years of their final period, and the decision is individual.",
  },
  {
    title: "Non-hormonal options.",
    body: "Lifestyle approaches, nutrition support, exercise, cognitive behavioural approaches for hot flushes and sleep, non-hormonal medications where appropriate.",
  },
  {
    title: "Vaginal and sexual health.",
    body: "Vaginal dryness, painful sex, urinary symptoms. Local treatments are effective for most women and safe even for those who cannot use systemic MHT.",
  },
  {
    title: "Bone health.",
    body: "Osteoporosis risk assessment, bone density testing, calcium and vitamin D, exercise recommendations, medications where indicated.",
  },
  {
    title: "Cardiovascular health.",
    body: "Blood pressure, cholesterol, weight, exercise and dietary review. Cardiovascular risk changes at menopause and it's a good moment to reset your prevention plan.",
  },
  {
    title: "Mental health.",
    body: "Mood changes, anxiety, cognitive symptoms. Menopause and midlife can bring genuine mental health challenges that respond well to appropriate treatment.",
  },
  {
    title: "Early menopause and premature ovarian insufficiency.",
    body: "Menopause before 40 has different implications and different management. Aurora GPs handle this with specialist coordination where needed.",
  },
];

const FAQS = [
  {
    q: "When should I book if I think I'm in perimenopause?",
    a: (
      <p>
        Any time you&apos;re noticing changes that concern you. Perimenopause
        can start in the early forties for some women and later for others.
        Symptoms don&apos;t have to be severe to be worth reviewing.
      </p>
    ),
  },
  {
    q: "Do I need any tests before my first appointment?",
    a: (
      <p>
        No. Your Aurora GP will arrange any tests that are useful based on
        your history. Menopause is diagnosed clinically, not by blood test in
        most cases.
      </p>
    ),
  },
  {
    q: "Is menopausal hormone therapy safe?",
    a: (
      <p>
        For most healthy women within ten years of their final period, current
        evidence supports MHT as safe and effective for symptom management.
        There are considerations for specific groups. Your GP will walk
        through your individual profile and the current evidence.
      </p>
    ),
  },
  {
    q: "What if I've had breast cancer or another condition where MHT isn't appropriate?",
    a: (
      <p>
        Non-hormonal options are effective for many symptoms. Local vaginal
        treatments have different safety profiles from systemic MHT. Your GP
        will review what&apos;s suitable for you.
      </p>
    ),
  },
  {
    q: "Can I book an Aurora GP just for menopause and keep my usual GP for other things?",
    a: (
      <p>
        Yes. Many women see an Aurora GP specifically for menopause care while
        continuing to see their existing GP for general care. We coordinate so
        nothing falls between the cracks.
      </p>
    ),
  },
  {
    q: "Is there anything I can do myself?",
    a: (
      <p>
        Yes, and lifestyle contributions matter. Sleep, exercise, nutrition,
        alcohol moderation, stress management and social connection all play a
        role. Your Aurora GP can help you build a plan that&apos;s realistic
        for your circumstances.
      </p>
    ),
  },
];

const LOCATIONS = [
  {
    key: "earlwood" as const,
    doctors:
      "Aurora GPs including Dr Lisa Cheng, Dr Yashodha Ediriweera and Dr Tao Geng. Dr Htet and Dr Htun consult here for specialist input.",
  },
  {
    key: "bangor" as const,
    doctors: "Aurora GPs including Dr Margaret Colwell. Dr Htet also consults here.",
  },
  {
    key: "sanssouci" as const,
    doctors:
      "Aurora GPs including Dr Huiling Li, Dr Marloes Nordkamp, Dr Eileen Phuah and Dr Michelle Yeung.",
  },
];

export default function MenopauseSupportPage() {
  const schema = buildMenopauseSchema();
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
              { label: "Menopause Support" },
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
                Aurora Service · Midlife Women&apos;s Health
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Menopause{" "}
                <span className="italic font-display-warm">support.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Perimenopause and menopause bring a set of changes that can be
                confusing, sometimes for years before the transition is
                complete. Aurora GPs manage this phase as an ongoing area of
                care, with support from our endocrinologist and gynaecologist
                where the picture calls for it. Time to talk properly, options
                explained, and a plan you can adjust as things shift.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book with an Aurora GP
                  <Arrow />
                </a>
                <a href="#coverage" className="btn-outline">
                  See what we cover
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
                  <span>Longer consultations; private with Medicare rebate</span>
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
            src="/website-images/menopause-support-about-bg.webp"
            alt="A menopause consultation at an SMSG centre."
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
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                A life stage,{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--blush)" }}
                >
                  not a condition.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Menopause is a life stage, not a condition, but the changes
                that come with it can affect quality of life significantly.
                Perimenopause, the transition into menopause, can last several
                years and often starts earlier than women expect. Symptoms
                range from hot flushes and sleep disturbance to mood changes,
                brain fog, joint aches, changes in libido and sexual comfort,
                and shifts in cardiovascular and bone health.
              </p>
              <p>
                For many women, symptoms are manageable and don&apos;t need
                much intervention. For others, they interfere with work,
                relationships and daily function. There&apos;s no single right
                approach to menopause management, and the right approach for
                you often changes over time.
              </p>
              <p>
                Aurora GPs manage perimenopause and menopause as an ongoing
                area of care rather than a one-off consultation. First
                appointments usually involve a full review of your history,
                current symptoms, health goals and any concerns about hormone
                therapy or alternatives. From there, a plan is agreed and
                reviewed as needed.
              </p>
              <p>
                Where symptoms are complex, where hormone therapy carries
                specific considerations, or where an endocrine or
                gynaecological picture is contributing, Aurora can bring in
                our endocrinologist{" "}
                <Link
                  href={routes.practitioner("dr-thaw-dar-htet")}
                  className="link-editorial"
                >
                  Dr Thaw Dar Htet
                </Link>{" "}
                or our obstetrician-gynaecologist{" "}
                <Link
                  href={routes.practitioner("dr-aye-thidar-htun")}
                  className="link-editorial"
                >
                  Dr Aye Thidar Htun
                </Link>{" "}
                for input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section id="coverage" className="relative blush-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What we cover</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Eight areas we{" "}
                <span className="italic font-display-warm">work across.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Menopause consultations span physical symptoms, mental health,
              preventive care and lifestyle. We work through what matters most
              to you, at the pace that suits.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/menopause-support-detail.webp"
              alt="Planning a self-management routine after a menopause consultation."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {COVERAGE.map((c) => (
              <div key={c.title} className="border-t border-black/10 pt-6">
                <div
                  className="font-display text-[20px] leading-tight"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {c.title}
                </div>
                <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST INPUT */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Specialist input</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Where the{" "}
                <span className="italic font-display-warm">picture warrants it.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                Referrals within Aurora are seamless. Your GP writes the
                referral and coordinates continuity of care back to you.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="contact-block">
                <div className="contact-row">
                  <div className="label">
                    <Link
                      href={routes.practitioner("dr-thaw-dar-htet")}
                      className="link-editorial"
                    >
                      Dr Thaw Dar Htet
                    </Link>
                    <div className="text-[13px] text-ink-3 mt-1">Endocrinologist</div>
                  </div>
                  <div className="value">
                    Referrals are appropriate where the endocrine picture is
                    complex, where MHT choices interact with diabetes, thyroid
                    or metabolic considerations, or where bone health warrants
                    specialist review. Dr Htet&apos;s research interests
                    include reproductive endocrinology and weight management.
                  </div>
                </div>
                <div className="contact-row">
                  <div className="label">
                    <Link
                      href={routes.practitioner("dr-aye-thidar-htun")}
                      className="link-editorial"
                    >
                      Dr Aye Thidar Htun
                    </Link>
                    <div className="text-[13px] text-ink-3 mt-1">
                      Obstetrician &amp; Gynaecologist
                    </div>
                  </div>
                  <div className="value">
                    Referrals are appropriate for gynaecological complications
                    of menopause, prolapse, urinary incontinence needing
                    specialist review, or where bleeding after menopause
                    requires investigation.
                  </div>
                </div>
              </div>
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
                Across all{" "}
                <span className="italic font-display-warm">three centres.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Aurora GPs consult at all three SMSG centres and provide
              menopause care across the group.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="contact-block">
            {LOCATIONS.map((loc) => {
              const c = clinicList.find((x) => x.key === loc.key)!;
              return (
                <div key={loc.key} className="contact-row">
                  <div className="label">
                    <Link href={routes.location(loc.key)} className="link-editorial">
                      {c.label}
                    </Link>
                  </div>
                  <div className="value">{loc.doctors}</div>
                </div>
              );
            })}
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
                Longer{" "}
                <span className="italic font-display-warm">consultations.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Menopause consultations are typically longer than standard
                consultations because there&apos;s more to cover. Longer
                consultations attract a private fee with a Medicare rebate
                applying to eligible items. Reception confirms your specific
                GP&apos;s fee at booking.
              </p>
              <p>
                Specialist referrals to Dr Htet or Dr Htun are privately
                billed with a Medicare rebate applying when a valid GP
                referral is in place.
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
                        Book a menopause consultation
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
            <Link href="/obstetrics-and-pregnancy-care/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Obstetrics &amp; Pregnancy Care</h3>
              <p>Dr Htun&apos;s specialist practice, including gynaecological review.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/cervical-screening/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Cervical Screening</h3>
              <p>Ongoing preventive screening at all three Aurora centres.</p>
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
