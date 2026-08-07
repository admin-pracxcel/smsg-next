import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildBehaviouralSchema } from "./schema";

export const metadata: Metadata = {
  title: "Behavioural Concerns | Kids' Dr at SMSG",
  description:
    "Behavioural and emotional support for children and adolescents through Kids' Dr, based at Sans Souci. Paediatricians, psychologists and counsellors working together.",
  alternates: { canonical: "https://smsg.au/behavioural-concerns/" },
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
  { label: "Team", value: "Paediatricians, psychologists, counsellors" },
  { label: "Approach", value: "Understand first, respond with what fits" },
  { label: "Referral", value: "Not always required; check with reception" },
];

const ENTRY_POINTS = [
  {
    mark: "①",
    title: "A paediatrician",
    sub: "For developmental or health questions",
    body: "If there's a developmental or health question at the heart of what's happening, starting with the paediatrician makes sense. Dr Martina Popelkova takes a special clinical interest in complex behavioural matters, including oppositional defiant disorder, eating disorders, ADHD and autism spectrum disorder. Dr Moe Moe Thinn is a Consultant Developmental and General Paediatrician. Dr Damian Lees is a General Paediatrician based at Earlwood.",
  },
  {
    mark: "②",
    title: "A psychologist",
    sub: "For emotional regulation and therapy work",
    body: "For emotional regulation, anxiety, low mood, or specific therapy work, a psychologist may be the right first step. Kids' Dr psychologists Sandra Bell, Sue Boursiani and Cara Chillari work with children and families across a range of presentations.",
  },
  {
    mark: "③",
    title: "A counsellor",
    sub: "For counselling support",
    body: "For families seeking counselling support alongside or instead of psychology, Julia Magrin and Thao Tammy Trang are paediatric counsellors within Kids' Dr.",
  },
];

const REASONS = [
  "Emotional outbursts that don't match the situation",
  "Anxiety that affects school attendance, sleep or daily life",
  "Sleep problems in children and adolescents",
  "Oppositional patterns and family conflict",
  "Toileting concerns",
  "Eating concerns or fussy eating that's affecting nutrition or family life",
  "Changes in mood, motivation or engagement",
  "Social difficulties or friendship concerns",
  "Concerns around screens, gaming or online activity",
  "Family transitions (separation, bereavement, moving)",
  "Concerns following a diagnosis (ADHD, autism, learning difficulty)",
];

const HOW_CARE_UNFOLDS = [
  {
    title: "Assessment and understanding.",
    body: "The first appointment focuses on understanding your child, your family context, and what's led to booking. Where behaviours are complex, more than one appointment or clinician's input may be needed to develop the picture.",
  },
  {
    title: "A plan you're part of.",
    body: "Whatever the plan, you're part of building it. That may involve strategies for home, coordination with school, referral to another Kids' Dr clinician for specific work, or a course of therapy.",
  },
  {
    title: "Coordinated care.",
    body: "Where multiple clinicians are involved (say a paediatrician and a psychologist), they communicate with each other within Kids' Dr so you're not managing the coordination.",
  },
  {
    title: "Review.",
    body: "Behaviour and emotional concerns evolve. Review appointments check on progress and adjust the plan as things shift.",
  },
];

const FAQS = [
  {
    q: "Where should we start?",
    a: (
      <p>
        If you&apos;re not sure, reception can guide you. Booking with any
        Kids&apos; Dr clinician is a valid starting point, and we redirect
        internally where a different clinician is a better fit.
      </p>
    ),
  },
  {
    q: "Do I need a referral?",
    a: (
      <p>
        For paediatric consultations, yes, for the Medicare rebate. For
        psychology or counselling, a GP-prepared Mental Health Care Plan
        allows a Medicare rebate but is not required to see a psychologist or
        counsellor.
      </p>
    ),
  },
  {
    q: "How many appointments will we need?",
    a: (
      <p>
        That depends on what&apos;s going on. For some families, a few
        appointments are enough. For others, ongoing support is more helpful.
      </p>
    ),
  },
  {
    q: "What if my child doesn't want to come?",
    a: (
      <p>
        Kids&apos; Dr clinicians are experienced with reluctant children and
        adolescents. The first appointment can be structured to build trust
        rather than push straight into therapy.
      </p>
    ),
  },
  {
    q: "Can school be involved?",
    a: <p>Yes, with your consent. School coordination is often useful.</p>,
  },
  {
    q: "Does Kids' Dr work with families in crisis?",
    a: (
      <p>
        For non-emergency behavioural and mental health support, yes. For
        crisis situations (immediate safety concerns, suicidal thoughts,
        severe self-harm), please see our{" "}
        <Link href={routes.patientInfo("emergency-information")} className="link-editorial">
          Emergency Information page
        </Link>{" "}
        and contact Lifeline (
        <a href="tel:131114" className="link-editorial">
          13 11 14
        </a>
        ) or your nearest emergency department.
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
    sub: "Paediatricians, psychology and counselling",
    phone: CLINICS.sanssouci.phone,
    phoneTel: CLINICS.sanssouci.phone.replace(/[^0-9+]/g, ""),
    email: CLINICS.sanssouci.email,
  },
  {
    key: "earlwood",
    headline: "Earlwood",
    sub: "Dr Damian Lees and allied members visiting",
    phone: CLINICS.earlwood.phone,
    phoneTel: CLINICS.earlwood.phone.replace(/[^0-9+]/g, ""),
    email: CLINICS.earlwood.email,
  },
];

export default function BehaviouralConcernsPage() {
  const schema = buildBehaviouralSchema();
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
              { label: "Behavioural Concerns" },
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
                Behavioural{" "}
                <span className="italic font-display-warm">concerns.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Behaviour is communication. When something&apos;s going on
                with your child that you can&apos;t quite put your finger on,
                or when things have shifted in a way that&apos;s affecting
                home or school life, Kids&apos; Dr helps you understand
                what&apos;s happening and what may help. Paediatricians,
                psychologists and counsellors work together within the Sans
                Souci base.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about an appointment
                  <Arrow />
                </a>
                <a href="#entry" className="btn-outline">
                  Who to start with
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
                  <span>Reception can help you choose the right first appointment</span>
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
            src="/website-images/behavioural-concerns-about-bg.webp"
            alt="A family conversation at a Kids' Dr behavioural appointment."
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
                Understand first,{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--kids)" }}
                >
                  respond with what fits.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Behaviour concerns cover a lot of ground. Emotional outbursts,
                difficulty settling, oppositional patterns, anxiety, sleep
                problems, toileting concerns, changes at school, social
                difficulties, and shifts that are hard to name. Kids&apos; Dr
                approaches behaviour as something to understand rather than
                manage in isolation.
              </p>
              <p>
                Where the picture is not clear at the start, our team helps
                you decide the right entry point. Reception can guide you or
                you can book with any Kids&apos; Dr clinician and be
                redirected if appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ENTRY POINTS */}
      <section id="entry" className="relative amber-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where to start</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Three ways{" "}
                <span className="italic font-display-warm">into care.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Depending on what&apos;s happening, the right first step may
              vary. All three sit within Kids&apos; Dr, and moving between
              them is straightforward.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/behavioural-concerns-detail.webp"
              alt="A quiet consulting space at Kids' Dr."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {ENTRY_POINTS.map((e) => (
              <div key={e.title} className="compare-card">
                <div className="cc-mark">{e.mark}</div>
                <div className="cc-title">{e.title}</div>
                <div className="cc-sub">{e.sub}</div>
                <p className="mt-4 text-[15px] text-ink-2 leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON REASONS */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Common reasons families come</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                None of these is{" "}
                <span className="italic font-display-warm">too small.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              If something on this list is on your mind, it&apos;s worth an
              appointment.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

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

      {/* HOW CARE UNFOLDS */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">How care may unfold</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                A plan you&apos;re{" "}
                <span className="italic font-display-warm">part of.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Whatever the plan, you help build it. Coordination happens
              within Kids&apos; Dr so you&apos;re not managing the moving
              parts.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {HOW_CARE_UNFOLDS.map((h, i) => (
              <div key={i} className="step-card">
                <div className="st-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="st-title">{h.title}</div>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Family involvement</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Support for children{" "}
                <span className="italic font-display-warm">and families.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Support for children with behavioural concerns often includes
                support for families. Parenting strategies, sibling
                considerations, school coordination and family circumstances
                all shape what&apos;s happening. Kids&apos; Dr clinicians work
                with families, not just children.
              </p>
              <p>
                Where family therapy or family coordination is a substantial
                part of what&apos;s needed, our counsellors and psychologists
                can support this. Where a parent&apos;s own mental health is
                relevant, an Aurora GP or one of our general practice GPs is
                well-placed to help.
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
              <div className="value">
                Dr Moe Moe Thinn, Dr Martina Popelkova, and Kids&apos; Dr
                allied team.
              </div>
            </div>
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("earlwood")} className="link-editorial">
                  Earlwood Medical Centre
                </Link>
              </div>
              <div className="value">
                Dr Damian Lees, plus Kids&apos; Dr allied team members who
                consult at Earlwood.
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
                Varies by{" "}
                <span className="italic font-display-warm">clinician type.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Paediatric consultations are privately billed. A GP referral
                is required for the Medicare rebate to apply to paediatric
                consultations.
              </p>
              <p>
                Psychology and counselling sessions may be eligible for
                Medicare rebates under a Mental Health Care Plan prepared by
                a GP. Reception confirms specific fees and rebate arrangements
                at booking.
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
              <p>The full Kids&apos; Dr team and scope.</p>
              <span className="go">
                Meet the team <Arrow />
              </span>
            </Link>
            <Link href="/adhd-diagnosis-and-management/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>ADHD Diagnosis &amp; Management</h3>
              <p>ADHD-specific pathway when the picture points that way.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/autism-assessment/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Autism Assessment</h3>
              <p>Autism pathway when the picture points that way.</p>
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
