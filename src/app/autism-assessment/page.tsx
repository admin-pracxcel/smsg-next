import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildAutismSchema } from "./schema";

export const metadata: Metadata = {
  title: "Autism Assessment | Kids' Dr at SMSG",
  description:
    "Autism spectrum disorder assessment for children and adolescents through Kids' Dr at Sans Souci. Paediatrician-led assessment drawing on family, school and clinical review.",
  alternates: { canonical: "https://smsg.au/autism-assessment/" },
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
  { label: "Assessment type", value: "Paediatrician-led" },
  { label: "Approach", value: "Neurodiversity-affirming" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
];

const ASSESSMENT_STEPS = [
  {
    title: "Detailed developmental history.",
    body: "Your paediatrician walks through your child's development from early years, current concerns, family history, education setting, and any allied health involvement to date.",
  },
  {
    title: "Information from home and school.",
    body: "Questionnaires completed by parents and teachers give a structured view of how your child is going in different environments. Consistency across settings matters for diagnosis.",
  },
  {
    title: "Clinical review of your child.",
    body: "Your paediatrician observes and interacts with your child in the consultation. For younger children, play-based observation may form part of this.",
  },
  {
    title: "Allied health coordination.",
    body: "Speech pathology and psychology assessment can add valuable context, particularly for language, cognition and social communication. Kids' Dr allied team includes speech pathologist Sarah Impellizzeri and psychologists who work with children on the spectrum.",
  },
  {
    title: "Consideration of overlap.",
    body: "Autism often coexists with ADHD, anxiety, learning differences and sensory processing differences. Assessment considers these possibilities.",
  },
];

const AFTER_ASSESSMENT = [
  {
    title: "A written summary.",
    body: "A clinical letter documenting the assessment, findings and recommendations. This letter is used to access supports, communicate with school, and inform future professionals involved in your child's care.",
  },
  {
    title: "A plan for next steps.",
    body: "This may include allied health input, school communication, family support resources, and follow-up review.",
  },
  {
    title: "Ongoing care where relevant.",
    body: "For children where the assessment leads to a diagnosis or ongoing developmental questions, review appointments help track progress and address changes over time.",
  },
];

const FAQS = [
  {
    q: "Do I need a referral?",
    a: <p>Yes. A GP referral is required for the Medicare rebate to apply to paediatric consultations.</p>,
  },
  {
    q: "How long does an autism assessment take?",
    a: (
      <p>
        Assessment usually involves more than one appointment. Your
        paediatrician confirms the specific process at your first visit.
      </p>
    ),
  },
  {
    q: "Will my child definitely be diagnosed?",
    a: (
      <p>
        No. Assessment is an evaluation, not a foregone conclusion. Some
        children are diagnosed with autism, some are diagnosed with a
        different condition, and some are found to have developmental
        variation within the typical range.
      </p>
    ),
  },
  {
    q: "What if my child has already been assessed elsewhere?",
    a: (
      <p>
        Bring any existing reports to your first appointment. Kids&apos; Dr
        can provide ongoing paediatric care for children previously assessed
        by another provider.
      </p>
    ),
  },
  {
    q: "Does Kids' Dr manage NDIS applications?",
    a: (
      <p>
        No. Kids&apos; Dr provides the clinical assessment and letter that
        supports an NDIS application, but the application itself is made
        through the NDIS.
      </p>
    ),
  },
  {
    q: "What if I'm not sure whether autism is the right question?",
    a: (
      <p>
        Book anyway. Assessment for autism sits within broader developmental
        paediatric care. If autism turns out not to be the picture, your
        paediatrician will explore what is.
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

export default function AutismAssessmentPage() {
  const schema = buildAutismSchema();
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
              { label: "Autism Assessment" },
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
                Autism{" "}
                <span className="italic font-display-warm">assessment.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Autism spectrum disorder assessment for children and
                adolescents through Kids&apos; Dr, based at Sans Souci.
                Assessment is a structured process led by your paediatrician,
                drawing on your knowledge of your child, information from
                school, and clinical review. Time to explore what&apos;s
                happening, not a snap judgement.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about an autism assessment
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
                  <span>Multi-session assessment; report follows</span>
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
            src="/website-images/autism-assessment-about-bg.webp"
            alt="An autism assessment session at Kids' Dr."
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
                Understanding your child,{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--kids)" }}
                >
                  not applying a label.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Autism spectrum disorder is a neurodevelopmental condition
                that shapes how a person communicates, experiences the sensory
                world, and connects with others. It looks different in every
                autistic person. Assessment is a considered process that seeks
                to understand your child, not just to apply a label.
              </p>
              <p>
                Kids&apos; Dr paediatricians assess for autism as part of
                broader developmental paediatric care. Dr Martina Popelkova
                takes a special clinical interest in autism spectrum disorder
                among other behavioural matters. Dr Moe Moe Thinn is a
                Consultant Developmental and General Paediatrician.
              </p>
              <p>
                Some families come to Kids&apos; Dr with autism as the primary
                concern. Others come with more general developmental questions
                where autism turns out to be part of the picture. Either way,
                assessment considers the full developmental profile rather
                than a single diagnosis in isolation.
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
                Information from{" "}
                <span className="italic font-display-warm">several sources.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Autism assessment is not a single test. Your paediatrician
              gathers information across sources so the picture is grounded
              and complete.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/autism-assessment-detail.webp"
              alt="The assessment room set up for a Kids' Dr session."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

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

      {/* AFTER ASSESSMENT */}
      <section id="after" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">After assessment</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                A written summary and a{" "}
                <span className="italic font-display-warm">plan.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Whether or not autism is diagnosed, your paediatrician provides
              a written record and a next step.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {AFTER_ASSESSMENT.map((a, i) => (
              <div key={i} className="step-card">
                <div className="st-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="st-title">{a.title}</div>
                <p>{a.body}</p>
              </div>
            ))}
          </div>

          <div className="body-editorial mt-10 max-w-[68ch]">
            <p>
              Kids&apos; Dr takes a neurodiversity-affirming approach. That
              means we understand autism as a way of being, not something to
              be fixed. Sandra Bell, a psychologist in the Kids&apos; Dr team,
              describes her practice as neurodiversity-affirming. Support
              focuses on what helps your child thrive, at their own pace.
            </p>
          </div>
        </div>
      </section>

      {/* NDIS */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">NDIS and school access</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                A key document{" "}
                <span className="italic font-display-warm">for access.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                For children who receive an autism diagnosis, the
                paediatrician&apos;s letter is one of the documents used to
                apply for NDIS support. Your paediatrician can discuss what
                NDIS access typically involves and where in the process you
                are.
              </p>
              <p>
                For school-related supports (integration funding,
                accommodations, disability funding), the assessment letter is
                a key document for the application, which is made through
                your school.
              </p>
              <p>
                Kids&apos; Dr can guide you on next steps but does not manage
                NDIS applications on your behalf.
              </p>
            </div>
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
                Sans Souci with{" "}
                <span className="italic font-display-warm">Dr Lees at Earlwood.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Kids&apos; Dr is based at Sans Souci Doctors, with Dr Damian
              Lees at Earlwood for families closer to the Inner West.
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
                Paediatric consultations are privately billed. A GP referral
                is required for the Medicare rebate to apply. Without a valid
                referral in place, the consultation is fully private.
              </p>
              <p>
                Longer initial assessment appointments may have a different
                fee structure from standard review appointments. Reception
                confirms the specific fees at booking.
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
              <p>ADHD-specific assessment and ongoing management pathway.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/learning-difficulties-and-psychometric-assessment/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Learning Difficulties &amp; Psychometric Assessment</h3>
              <p>Cognitive assessment when the picture points to learning profile questions.</p>
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
