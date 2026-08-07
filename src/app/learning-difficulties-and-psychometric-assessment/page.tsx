import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildLearningSchema } from "./schema";

export const metadata: Metadata = {
  title: "Learning Difficulties & Psychometric Assessment | Kids' Dr at SMSG",
  description:
    "Psychometric and learning assessment for children and adolescents through Kids' Dr. Understand cognitive strengths, learning patterns, and what supports learning best.",
  alternates: {
    canonical:
      "https://smsg.au/learning-difficulties-and-psychometric-assessment/",
  },
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
  { label: "Ages seen", value: "Children and adolescents" },
  { label: "Assessors", value: "Sandra Bell, Sue Boursiani, Cara Chillari" },
  { label: "Purpose", value: "Understand cognitive strengths and learning profile" },
  { label: "Referral", value: "Not required to book" },
];

const ASSESSORS = [
  {
    name: "Sandra Bell",
    role: "Psychologist",
    note: "Neurodiversity-affirming practice",
    location: "Earlwood",
  },
  {
    name: "Sue Boursiani",
    role: "Psychologist",
    note: null,
    location: "Earlwood + Sans Souci",
  },
  {
    name: "Cara Chillari",
    role: "Psychologist",
    note: null,
    location: "Earlwood + Sans Souci",
  },
];

const REASONS = [
  "Concerns from teachers about learning or attention",
  "Difficulty with reading, writing or maths that's not settling with usual approaches",
  "A gap between what your child seems capable of and how they're performing",
  "Application for school accommodations, integration funding, or gifted programs",
  "Following an ADHD or autism diagnosis, where a cognitive profile helps inform support",
  "Preparing for a change of school or education setting",
  "Confirmation of a specific learning disorder (dyslexia, dyscalculia, dysgraphia)",
  "Assessment for intellectual disability or giftedness",
  "Broader questions about how your child learns best",
];

const ASSESSMENT_STEPS = [
  {
    title: "An initial conversation.",
    body: "Your assessor talks with you (and, where relevant, your child) about what's led to booking, what you're hoping to understand, and how the assessment will run.",
  },
  {
    title: "Testing sessions.",
    body: "Structured tasks and questions that measure different aspects of thinking, learning and problem-solving. Sessions are typically spaced across more than one appointment to keep each session manageable.",
  },
  {
    title: "Additional information.",
    body: "Your assessor may ask for input from parents (questionnaires, developmental history) and school (teacher observations, work samples) to build the full picture.",
  },
  {
    title: "A written report.",
    body: "A detailed written report explaining the results, what they mean in your child's context, and recommendations. Used for school accommodations, funding applications, ongoing therapy planning, or your family's own understanding.",
  },
  {
    title: "A feedback appointment.",
    body: "Once the report is complete, you meet with the assessor to go through the findings, ask questions and discuss next steps.",
  },
];

const OUTCOMES = [
  {
    title: "For school.",
    body: "The report supports applications for accommodations, integration funding, or specific programs. Schools use the report to plan how they'll support your child.",
  },
  {
    title: "For therapy planning.",
    body: "Where the assessment identifies specific areas that would benefit from therapy (specialist reading intervention, executive functioning support, occupational therapy for handwriting), the report guides which therapies fit.",
  },
  {
    title: "For ongoing paediatric care.",
    body: "For children under paediatric follow-up at Kids' Dr, the psychometric report informs medical management and school communication.",
  },
  {
    title: "For family understanding.",
    body: "For some families, understanding how your child learns is the main goal. The report gives you a language and a framework for supporting your child, and often reframes patterns that were confusing before.",
  },
];

const FAQS = [
  {
    q: "Do I need a referral?",
    a: <p>No. Psychometric assessments can be booked directly.</p>,
  },
  {
    q: "How long does the assessment take?",
    a: (
      <p>
        Assessment is typically spread across more than one session to keep
        each session manageable for your child. The written report is
        prepared after the sessions are complete. Your assessor confirms the
        schedule with you at the initial conversation.
      </p>
    ),
  },
  {
    q: "Will the assessment give my child a diagnosis?",
    a: (
      <p>
        Sometimes. Psychometric assessment can identify specific learning
        disorders or intellectual disability. Where a broader diagnosis (like
        ADHD or autism) is a possibility, that pathway usually involves a
        paediatrician alongside psychometric testing.
      </p>
    ),
  },
  {
    q: "Is my child too young or too old?",
    a: (
      <p>
        Kids&apos; Dr psychometric assessors work with a range of ages. If
        you&apos;re not sure whether it&apos;s the right time, ask reception.
      </p>
    ),
  },
  {
    q: "What does my child need to know before coming in?",
    a: (
      <p>
        That it&apos;s not a test they can fail, and that the goal is to
        understand how their brain works so they can be supported at school
        and elsewhere. Your assessor will help with this at the initial
        appointment.
      </p>
    ),
  },
  {
    q: "Can I get the report used at school?",
    a: (
      <p>
        Yes. That&apos;s a common reason families come. Your assessor writes
        the report to support school communication and any specific
        applications you plan to make.
      </p>
    ),
  },
  {
    q: "What if I'm not sure whether psychometric assessment is the right step?",
    a: (
      <p>
        Reception can guide you. Sometimes a paediatric appointment is the
        better first step, and reception can help direct.
      </p>
    ),
  },
];

const BOOK_TILES: Array<{
  key: "sanssouci" | "earlwood";
  headline: string;
  sub: string;
  phone: string;
  phoneTel: string;
  email?: string;
}> = [
  {
    key: "sanssouci",
    headline: "Sans Souci",
    sub: "Sue Boursiani and Cara Chillari",
    phone: CLINICS.sanssouci.phone,
    phoneTel: CLINICS.sanssouci.phone.replace(/[^0-9+]/g, ""),
    email: CLINICS.sanssouci.email,
  },
  {
    key: "earlwood",
    headline: "Earlwood",
    sub: "Sandra Bell, Sue Boursiani, Cara Chillari",
    phone: CLINICS.earlwood.phone,
    phoneTel: CLINICS.earlwood.phone.replace(/[^0-9+]/g, ""),
    email: CLINICS.earlwood.email,
  },
];

export default function LearningPage() {
  const schema = buildLearningSchema();
  return (
    <div className="theme-kidsdr iud-page">
      {/* BREADCRUMB */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Kids' Dr", href: routes.subBrand("kidsdr") },
              { label: "Learning Difficulties & Psychometric Assessment" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden amber-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("kidsdr")} className="brand-chip">
                <span className="dot" />
                Kids&apos; Dr Service · Psychometric Assessment
              </Link>
              <h1 className="font-display h-service max-w-[20ch] mt-6">
                Learning difficulties and{" "}
                <span className="italic font-display-warm">
                  psychometric assessment.
                </span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Psychometric assessment for children and adolescents whose
                learning, attention or cognitive profile is affecting how they
                engage with school or day-to-day life. A structured assessment
                by a Kids&apos; Dr psychometric assessor gives you a clear
                picture of your child&apos;s cognitive strengths, learning
                patterns and where support is most useful.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about a psychometric assessment
                  <Arrow />
                </a>
                <a href="#reasons" className="btn-outline">
                  When to consider assessment
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
                  <span>Not eligible for Medicare rebate under Mental Health Care Plan</span>
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
            src="/website-images/learning-difficulties-and-psychometric-assessment-about-bg.webp"
            alt="A psychometric assessment session at Kids' Dr."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(97, 68, 32, 0.88) 0%, rgba(140, 100, 47, 0.82) 55%, rgba(97, 68, 32, 0.88) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Not a test to{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--kids)" }}
                >
                  pass or fail.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Psychometric assessment measures cognitive abilities and
                learning patterns using standardised tests. It&apos;s not a
                test your child can study for or fail. The purpose is to
                understand how your child learns, what they find easy, what
                they find harder, and what support may help them thrive at
                school and beyond.
              </p>
              <p>
                Each assessment is designed around the specific questions
                being asked, your child&apos;s age, and the setting
                they&apos;re in. Your assessor will explain what the
                assessment covers and how it will run before you begin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSORS */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Your assessors</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Three Kids&apos; Dr{" "}
                <span className="italic font-display-warm">psychologists.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                Kids&apos; Dr has three psychometric assessors. Reception can
                help you match to the right assessor for your child.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="contact-block">
                {ASSESSORS.map((a) => (
                  <div key={a.name} className="contact-row">
                    <div className="label">
                      {a.name}
                      <div className="text-[13px] text-ink-3 mt-1">
                        {a.role}
                        {a.note ? ` · ${a.note}` : ""}
                      </div>
                    </div>
                    <div className="value">{a.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN TO CONSIDER */}
      <section id="reasons" className="relative amber-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">When to consider an assessment</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Some families come with a goal,{" "}
                <span className="italic font-display-warm">
                  others with open questions.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Both are valid reasons. If your question isn&apos;t here, ask
              reception.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/learning-difficulties-and-psychometric-assessment-detail.webp"
              alt="Assessment materials laid out for a paediatric session."
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
                  style={{ background: "var(--kids-deep)" }}
                />
                <span>{r}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ASSESSMENT INVOLVES */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What assessment involves</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Five parts across{" "}
                <span className="italic font-display-warm">multiple sessions.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Assessment sessions are spaced so each one stays manageable for
              your child. The written report is the main output.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {ASSESSMENT_STEPS.map((s, i) => (
              <div key={i} className="step-card">
                <div className="st-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="st-title">{s.title}</div>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What happens after assessment</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Four ways families{" "}
                <span className="italic font-display-warm">use the report.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              The written report is the main output. What you do with it
              depends on what you&apos;re looking for.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {OUTCOMES.map((o) => (
              <div key={o.title} className="border-t border-black/10 pt-6">
                <div
                  className="font-display text-[20px] leading-tight"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {o.title}
                </div>
                <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE OFFERED */}
      <section id="locations" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Sans Souci and{" "}
                <span className="italic font-display-warm">Earlwood.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Psychometric assessments are offered at Sans Souci Doctors and
              Earlwood Medical Centre.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="contact-block">
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("sanssouci")} className="link-editorial">
                  Sans Souci Doctors
                </Link>
              </div>
              <div className="value">Sue Boursiani and Cara Chillari consult here.</div>
            </div>
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("earlwood")} className="link-editorial">
                  Earlwood Medical Centre
                </Link>
              </div>
              <div className="value">
                Sandra Bell, Sue Boursiani and Cara Chillari consult here.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
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
                Psychometric assessments are privately billed. The fee
                reflects the assessor&apos;s time across sessions plus report
                preparation.
              </p>
              <p>
                Psychometric assessments are typically not eligible for
                Medicare rebate under a Mental Health Care Plan, since Mental
                Health Care Plans cover therapy sessions rather than
                assessment. Some assessments are eligible for private health
                fund rebates under psychology extras cover; check with your
                health fund.
              </p>
              <p>
                Reception confirms specific fees and expected structure at
                booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
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
                Enquire with Kids&apos; Dr
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
                Kids&apos; Dr appointments are managed through the Sans Souci
                reception team. For assessments at Earlwood, contact Earlwood
                reception directly.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => (
                  <div
                    key={t.key}
                    className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"
                  >
                    <div
                      className="font-display text-[19px] text-cream"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                    >
                      {t.headline}
                    </div>
                    <div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90">
                      <a
                        href={`tel:${t.phoneTel}`}
                        className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition"
                      >
                        {t.phone}
                      </a>
                      {t.email && (
                        <a
                          href={`mailto:${t.email}`}
                          className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition"
                        >
                          {t.email}
                        </a>
                      )}
                    </div>
                  </div>
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
            <Link href={routes.subBrand("kidsdr")} className="related-card">
              <span className="kicker">Sub-brand</span>
              <h3>Kids&apos; Dr</h3>
              <p>The full Kids&apos; Dr team and scope of paediatric and allied care.</p>
              <span className="go">
                Meet the team <Arrow />
              </span>
            </Link>
            <Link href="/adhd-diagnosis-and-management/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>ADHD Diagnosis &amp; Management</h3>
              <p>Where a cognitive profile helps inform ADHD assessment or support.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/developmental-assessment/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Developmental Assessment</h3>
              <p>Paediatrician-led broader developmental review as a starting point.</p>
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
