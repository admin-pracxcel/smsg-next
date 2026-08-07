import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildAdhdSchema } from "./schema";

export const metadata: Metadata = {
  title: "ADHD Diagnosis & Management | Kids' Dr at SMSG",
  description:
    "ADHD assessment and ongoing management for children and adolescents through Kids' Dr, based at Sans Souci with paediatricians who take a special clinical interest in behavioural and developmental concerns.",
  alternates: { canonical: "https://smsg.au/adhd-diagnosis-and-management/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function Chev() {
  return (
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
  );
}

const GLANCE_ROWS = [
  { label: "Ages seen", value: "Children and adolescents" },
  { label: "Assessment type", value: "Paediatrician-led" },
  { label: "Ongoing care", value: "Regular review appointments" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
];

const ASSESSMENT_STEPS = [
  {
    title: "A detailed clinical history.",
    body: "Your paediatrician talks through your child's development, current concerns, family history, school reports and any allied health input to date.",
  },
  {
    title: "Information from home and school.",
    body: "Questionnaires completed by parents and teachers give a structured picture of how your child is going across settings. ADHD symptoms need to be present in more than one setting for a diagnosis.",
  },
  {
    title: "A clinical review of your child.",
    body: "The paediatrician sees your child, observes them in the consultation, and asks age-appropriate questions.",
  },
  {
    title: "Consideration of other explanations.",
    body: "Attention and behaviour concerns can have many causes. Anxiety, sleep problems, learning difficulties, sensory issues, hearing problems, family stressors and other conditions can all present similarly to ADHD or coexist with it.",
  },
];

const MANAGEMENT_OPTIONS = [
  {
    title: "Non-medication strategies.",
    body: "Structured routines, environmental adjustments at home and school, sleep and exercise support, and parenting strategies. Kids' Dr allied health team (paediatric psychologists, counsellors and dietitians) provides coordinated support where relevant.",
  },
  {
    title: "Medication.",
    body: "For some children, medication is a useful part of management. Your paediatrician will discuss whether medication is appropriate, which medication may suit your child, and how it is trialled and monitored. Not all children with ADHD need medication.",
  },
  {
    title: "Regular review.",
    body: "Whether or not medication is used, regular review appointments check on progress, discuss adjustments, monitor growth and side effects where medication is prescribed, and respond to changes as your child develops.",
  },
  {
    title: "School coordination.",
    body: "With your consent, your paediatrician can communicate with your child's school to support consistent understanding and appropriate accommodations.",
  },
];

const FAQS = [
  {
    q: "Do I need a referral?",
    a: (
      <p>
        Yes. A GP referral is required for the Medicare rebate to apply to
        paediatric consultations. Your usual GP or one of our GPs can prepare
        the referral.
      </p>
    ),
  },
  {
    q: "How long does the assessment take?",
    a: (
      <p>
        Assessment usually takes more than one appointment. Your paediatrician
        will confirm the specific process at your first visit.
      </p>
    ),
  },
  {
    q: "Will my child need medication?",
    a: (
      <p>
        Not necessarily. Whether medication is appropriate depends on your
        child&apos;s specific situation and is a decision made with you after
        assessment.
      </p>
    ),
  },
  {
    q: "Can Kids' Dr coordinate with my child's school?",
    a: (
      <p>
        Yes, with your consent. Communication with schools helps ensure
        consistency across settings.
      </p>
    ),
  },
  {
    q: "What if my child already has an ADHD diagnosis from another paediatrician?",
    a: (
      <p>
        You can transfer ongoing care to Kids&apos; Dr with a GP referral.
        Bring existing reports and any current management information to your
        first appointment.
      </p>
    ),
  },
  {
    q: "Does Kids' Dr see adolescents?",
    a: <p>Yes. Kids&apos; Dr sees children and adolescents.</p>,
  },
];

/**
 * Kids' Dr appointments are managed through reception, not Automed.
 */
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

export default function AdhdPage() {
  const schema = buildAdhdSchema();
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
              { label: "ADHD Diagnosis & Management" },
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
                ADHD diagnosis and{" "}
                <span className="italic font-display-warm">management.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                ADHD assessment and ongoing management for children and
                adolescents through Kids&apos; Dr, our developmental paediatrics
                team based at Sans Souci. Assessment is a considered process
                that draws on your paediatrician&apos;s clinical review
                alongside input from school and family. Ongoing management is
                a partnership, adjusted as your child grows.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about an ADHD appointment
                  <Arrow />
                </a>
                <a href="#assessment" className="btn-outline">
                  What assessment involves
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
            src="/website-images/adhd-diagnosis-and-management-about-bg.webp"
            alt="A child in a paediatric consultation at an SMSG centre."
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
                A structured view of{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--kids)" }}
                >
                  your child.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                ADHD, or Attention Deficit Hyperactivity Disorder, is a
                neurodevelopmental condition that affects attention regulation,
                activity levels and impulse control. It looks different in
                different children, and the same child at different ages.
                Diagnosis is made by a paediatrician after a structured
                assessment that gathers information from home, school and the
                consultation itself.
              </p>
              <p>
                Kids&apos; Dr paediatricians manage ADHD as part of broader
                developmental and behavioural paediatric care. That means
                assessment considers the full picture of your child&apos;s
                development, not ADHD alone. Where a diagnosis is made,
                ongoing management is a partnership between paediatrician,
                family and school, with review appointments to check on
                progress, adjust medication where prescribed, and address
                anything that has changed.
              </p>
              <p>
                Dr Martina Popelkova takes a special clinical interest in
                complex behavioural matters, including ADHD, oppositional
                defiant disorder and autism spectrum disorder alongside
                general paediatric care. Dr Moe Moe Thinn is a Consultant
                Developmental and General Paediatrician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT */}
      <section id="assessment" className="relative amber-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What assessment involves</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Not a single{" "}
                <span className="italic font-display-warm">test.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Your paediatrician gathers information across several sources so
              the picture is complete. Assessment usually takes more than one
              appointment.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/adhd-diagnosis-and-management-detail.webp"
              alt="Assessment materials prepared for a paediatric appointment."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

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

      {/* MANAGEMENT */}
      <section id="management" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Ongoing management</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Personalised to{" "}
                <span className="italic font-display-warm">your child.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Where an ADHD diagnosis is made, management options are
              tailored. Frequency of review depends on your child&apos;s stage
              and situation.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {MANAGEMENT_OPTIONS.map((m) => (
              <div key={m.title} className="border-t border-black/10 pt-6">
                <div
                  className="font-display text-[20px] leading-tight"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {m.title}
                </div>
                <p className="mt-3 text-[15px] text-ink-2 leading-relaxed">{m.body}</p>
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
                Sans Souci with{" "}
                <span className="italic font-display-warm">Dr Lees at Earlwood.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Kids&apos; Dr is based at Sans Souci Doctors, with Dr Damian
              Lees at Earlwood for families based closer to the Inner West.
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
                is required for the Medicare rebate to apply. Without a valid
                referral in place, the consultation is fully private.
              </p>
              <p>
                Billing arrangements vary by paediatrician. Reception confirms
                the specific fee and expected out-of-pocket cost when you
                book.
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
              <p>The full Kids&apos; Dr team and the range of paediatric and allied care we offer.</p>
              <span className="go">
                Meet the team <Arrow />
              </span>
            </Link>
            <Link href="/autism-assessment/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Autism Assessment</h3>
              <p>Autism-specific pathway when the picture points to autism spectrum disorder.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/developmental-assessment/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Developmental Assessment</h3>
              <p>Broader developmental review when the picture isn&apos;t yet clear.</p>
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
