import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildDevelopmentalAssessmentSchema } from "./schema";

export const metadata: Metadata = {
  title: "Developmental Assessment | Kids' Dr at SMSG",
  description:
    "Developmental assessment for children whose progress in one or more areas is different from expected. Paediatrician-led at Kids' Dr, based at Sans Souci with Dr Lees at Earlwood.",
  alternates: { canonical: "https://smsg.au/developmental-assessment/" },
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
  { label: "Ages seen", value: "Infants, children and adolescents" },
  { label: "When to book", value: "Speech, motor, learning, behaviour or social concerns" },
  { label: "Approach", value: "Paediatrician-led, broad developmental view" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
];

const REASONS = [
  "Delay in speech milestones",
  "Late walking or persistent motor coordination differences",
  "Difficulty in concentration or with studies",
  "Sensitive emotional outbursts",
  "Fussy eating behaviour or feeding concerns",
  "Weight and growth under or over expected patterns",
  "Balance and posture coordination concerns",
  "Social differences at preschool or school",
  "Sleep, toileting or general behaviour patterns you'd like a paediatrician's view on",
];

const ASSESSMENT_STEPS = [
  {
    title: "A detailed developmental history.",
    body: "Your paediatrician walks through your child's development from early years to now, including the current concerns and any allied health input to date.",
  },
  {
    title: "Clinical review.",
    body: "Your paediatrician examines and interacts with your child in the consultation. For younger children, play-based observation forms part of this.",
  },
  {
    title: "Input from education and care settings.",
    body: "Where relevant, information from your child's preschool, school or other setting helps ground the picture.",
  },
  {
    title: "Consideration of contributors.",
    body: "Developmental patterns can reflect many things: growth, hearing, vision, sleep, nutrition, family circumstances, learning environment, and specific developmental conditions.",
  },
];

const WHAT_FOLLOWS = [
  {
    title: "Reassurance and monitoring.",
    body: "For many families, assessment ends with a paediatrician's view that development is progressing within expected variation. Follow-up appointments may be scheduled to check in over time.",
  },
  {
    title: "Targeted allied health.",
    body: "Where a specific area (speech, motor coordination, feeding, learning) needs support, your paediatrician can coordinate referrals within the Kids' Dr multidisciplinary team.",
  },
  {
    title: "Further specialist assessment.",
    body: "Where the assessment suggests a specific condition (autism, ADHD, learning disorder, or another paediatric concern), your paediatrician will discuss the appropriate next step.",
  },
  {
    title: "Ongoing paediatric care.",
    body: "For families with ongoing questions, Kids' Dr paediatricians provide continuity across visits so you don't have to start from the beginning each time.",
  },
];

const ALLIED_TEAM = [
  { discipline: "Speech pathology", names: "Sarah Impellizzeri" },
  { discipline: "Paediatric physiotherapy", names: "Daniel Tran" },
  { discipline: "Paediatric dietetics", names: "Dr Xue-Fei Fay Yu PhD, Wing Tung Stephanie Yu" },
  { discipline: "Psychology", names: "Sandra Bell, Sue Boursiani, Cara Chillari" },
  { discipline: "Counselling and psychotherapy", names: "Julia Magrin, Thao Tammy Trang" },
  { discipline: "Paediatric podiatry", names: "Hana Rizk" },
];

const FAQS = [
  {
    q: "Do I need a referral?",
    a: <p>Yes. A GP referral is required for the Medicare rebate to apply.</p>,
  },
  {
    q: "Is my concern serious enough to book?",
    a: (
      <p>
        If you&apos;re wondering, it&apos;s worth asking. Paediatricians see
        the full range from mild questions to significant concerns. Early
        input often helps regardless of the outcome of assessment.
      </p>
    ),
  },
  {
    q: "How is developmental assessment different from ADHD or autism assessment?",
    a: (
      <p>
        Developmental assessment is broader and can be a starting point. Where
        a specific condition (like{" "}
        <Link href="/adhd-diagnosis-and-management/" className="link-editorial">
          ADHD
        </Link>{" "}
        or{" "}
        <Link href="/autism-assessment/" className="link-editorial">
          autism
        </Link>
        ) emerges as the picture, the appropriate condition-specific pathway
        begins.
      </p>
    ),
  },
  {
    q: "Will my child need multiple appointments?",
    a: (
      <p>
        Sometimes. Your paediatrician will discuss what&apos;s needed after
        the first appointment.
      </p>
    ),
  },
  {
    q: "Can Kids' Dr work with my child's school or preschool?",
    a: (
      <p>
        Yes, with your consent. School and preschool information often adds
        valuable context.
      </p>
    ),
  },
  {
    q: "What if my child has been assessed before?",
    a: (
      <p>
        Bring existing reports. Kids&apos; Dr can build on previous work
        rather than starting from scratch.
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
    sub: "Dr Moe Moe Thinn · Dr Martina Popelkova",
    phone: CLINICS.sanssouci.phone,
    phoneTel: CLINICS.sanssouci.phone.replace(/[^0-9+]/g, ""),
    email: CLINICS.sanssouci.email,
  },
  {
    key: "earlwood",
    headline: "Earlwood",
    sub: "Dr Damian Lees",
    phone: CLINICS.earlwood.phone,
    phoneTel: CLINICS.earlwood.phone.replace(/[^0-9+]/g, ""),
    email: CLINICS.earlwood.email,
  },
];

export default function DevelopmentalAssessmentPage() {
  const schema = buildDevelopmentalAssessmentSchema();
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
              { label: "Developmental Assessment" },
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
                Kids&apos; Dr Service · Developmental Paediatrics
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Developmental{" "}
                <span className="italic font-display-warm">assessment.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Developmental assessment for children whose progress in one or
                more areas is different from what&apos;s expected for their
                age. A structured review with a paediatrician to understand
                what&apos;s happening, whether further assessment is needed,
                and what support may help. No question is too small.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about a developmental assessment
                  <Arrow />
                </a>
                <a href="#reasons" className="btn-outline">
                  Common reasons families book
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
                  <span>Broad developmental view; specific pathways where needed</span>
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
            src="/website-images/developmental-assessment-about-bg.webp"
            alt="A developmental check at Kids' Dr."
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
                Sometimes a phase.{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--kids)" }}
                >
                  Sometimes worth exploring.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Children develop at different rates, and variation within the
                typical range is common. Sometimes a difference is a phase.
                Sometimes it&apos;s a sign of something worth understanding
                better. Developmental assessment is the appointment to
                explore that question with a paediatrician who takes a broad
                view of your child.
              </p>
              <p>
                Kids&apos; Dr paediatricians assess the developmental picture
                as a whole. Where a specific concern (such as ADHD or autism)
                becomes the focus, we move into that pathway. Where the
                picture is broader, the assessment stays broad, and support is
                coordinated across the multidisciplinary Kids&apos; Dr team
                where relevant.
              </p>
              <p>
                Dr Moe Moe Thinn is a Consultant Developmental and General
                Paediatrician. Dr Martina Popelkova is a General Paediatrician
                with a special clinical interest in behavioural matters. Dr
                Damian Lees is a General Paediatrician based at Earlwood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section id="reasons" className="relative amber-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Common reasons to book</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                A broad set of{" "}
                <span className="italic font-display-warm">questions.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Any of these is worth an appointment. If your question
              isn&apos;t here, book anyway.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/developmental-assessment-detail.webp"
              alt="Recording growth chart data during a paediatric assessment."
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

      {/* ASSESSMENT */}
      <section id="assessment" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What assessment involves</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                The whole{" "}
                <span className="italic font-display-warm">child.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Your paediatrician gathers information from several sources.
              Depending on what emerges, further assessment or targeted allied
              health may follow.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
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

      {/* WHAT FOLLOWS */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What might follow assessment</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Four possible{" "}
                <span className="italic font-display-warm">next steps.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              What follows assessment depends on what emerges. The most
              common outcomes:
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {WHAT_FOLLOWS.map((w, i) => (
              <div key={i} className="step-card">
                <div className="st-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="st-title">{w.title}</div>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIED */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Coordinated allied support</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Six disciplines{" "}
                <span className="italic font-display-warm">under one roof.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                Where assessment identifies areas that benefit from allied
                health input, referrals within Kids&apos; Dr are seamless.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="contact-block">
                {ALLIED_TEAM.map((t) => (
                  <div key={t.discipline} className="contact-row">
                    <div className="label">{t.discipline}</div>
                    <div className="value">{t.names}</div>
                  </div>
                ))}
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
                Sans Souci with{" "}
                <span className="italic font-display-warm">Dr Lees at Earlwood.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Kids&apos; Dr is based at Sans Souci Doctors, with Dr Damian
              Lees at Earlwood.
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
              <div className="value">Dr Moe Moe Thinn and Dr Martina Popelkova.</div>
            </div>
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("earlwood")} className="link-editorial">
                  Earlwood Medical Centre
                </Link>
              </div>
              <div className="value">Dr Damian Lees.</div>
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
                Paediatric consultations are privately billed. A GP referral
                is required for the Medicare rebate to apply.
              </p>
              <p>
                Billing arrangements vary by paediatrician. Reception confirms
                the specific fee at booking.
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
                reception team. For Dr Lees at Earlwood, contact Earlwood
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
              <p>ADHD pathway if the picture points to attention regulation.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/learning-difficulties-and-psychometric-assessment/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Learning Difficulties &amp; Psychometric Assessment</h3>
              <p>Cognitive and learning assessment when learning profile is the question.</p>
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
