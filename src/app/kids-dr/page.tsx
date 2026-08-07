import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes, external } from "@/lib/routes";
import { CLINICS, clinicList } from "@/lib/clinics";
import { SUB_BRANDS } from "@/lib/sub-brands";
import { getAllPractitioners } from "@/lib/content";
import type { Practitioner } from "@/lib/schemas/practitioner";
import { SubBrandCareAreas, type CareTile } from "@/components/sub-brand/SubBrandCareAreas";
import { SubBrandLocations } from "@/components/sub-brand/SubBrandLocations";
import { SubBrandRelatedPages } from "@/components/sub-brand/SubBrandRelatedPages";
import { buildKidsDrSchema } from "./schema";

export const metadata: Metadata = {
  title: "Kids' Dr | Paediatric Care, Assessment and Allied Health at SMSG",
  description:
    "Paediatric care coordinated across paediatrician, psychology, allied health and school. Developmental paediatrics, ADHD and autism assessment, behavioural and learning support. Primary base at Sans Souci.",
};

// Care-area tiles preserved verbatim from source page.
const tiles: CareTile[] = [
  {
    num: "01",
    title: "ADHD diagnosis and management",
    body: "Paediatrician-led ADHD assessment across preschool, school-age and adolescent presentations. Diagnosis follows a structured process that includes developmental history, direct observation, questionnaire input from parents and teachers, and coordination with your child's school where relevant. Management planning covers behavioural strategies, family and school supports, and medication where clinically appropriate.",
    cta: "ADHD Diagnosis & Management",
    href: "/adhd-diagnosis-and-management/",
  },
  {
    num: "02",
    title: "Autism assessment",
    body: "Developmental paediatrician-led assessment for autism spectrum conditions, drawing on standardised assessment tools, structured observation, and input from family, allied health, and school where the child is enrolled. Assessment is not a single appointment; it is a process across multiple sessions and disciplines.",
    cta: "Autism Assessment",
    href: "/autism-assessment/",
  },
  {
    num: "03",
    title: "Developmental assessment",
    body: "For children whose developmental progress is worth a closer look, whether that's motor skills, communication, social development, or a combination. Developmental assessment often flows into referrals to speech pathology, physiotherapy, or occupational therapy depending on what's surfaced.",
    cta: "Developmental Assessment",
    href: "/developmental-assessment/",
  },
  {
    num: "04",
    title: "Behavioural concerns",
    body: "Coordinated support for children whose behaviour at home or at school has raised concern for the family. Paediatrician review, psychology input, family-based counselling where appropriate, and school liaison.",
    cta: "Behavioural Concerns",
    href: "/behavioural-concerns/",
  },
  {
    num: "05",
    title: "Learning difficulties and psychometric assessment",
    body: "Formal psychometric assessment for children whose learning trajectory is not aligning with the classroom, or where the family or school is looking for a clearer picture of cognitive profile and learning support needs. Delivered by Cara Chillari and Sue Boursiani, and often connects to educational advocacy and school-based accommodations.",
    cta: "Learning Difficulties",
    href: "/learning-difficulties-and-psychometric-assessment/",
  },
];

function metaLine(p: Practitioner): string {
  const parts: string[] = [];
  if (p.credentials.role_title) parts.push(p.credentials.role_title);
  if (p.credentials.post_nominal) parts.push(p.credentials.post_nominal);
  if (p.languages.length) parts.push(p.languages.join(", "));
  return parts.join(" · ");
}

function locationLine(p: Practitioner): string {
  return p.clinics.consulting_at
    .map((k) => CLINICS[k].shortLabel)
    .join(" · ");
}

const CTA_SUB = {
  sanssouci: "Primary Kids' Dr base · Dr Thinn and Dr Popelkova",
  earlwood: "Dr Lees paediatrics · Dr Popelkova visiting · Psychology · Allied health",
  bangor: "Counselling · Dietetics",
} as const;

// Source page ordering: Sans Souci first, then Earlwood, then Bangor.
const KIDS_CLINIC_ORDER: (keyof typeof CTA_SUB)[] = [
  "sanssouci",
  "earlwood",
  "bangor",
];

export default function KidsDrHubPage() {
  const schema = buildKidsDrSchema();
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "kidsdr")
  );

  return (
    <div className="theme-kidsdr">
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Kids' Dr" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden amber-wash">
        <div
          className="paper-noise absolute inset-0 opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#B7823C" strokeWidth="0.6" fill="none">
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
                SMSG Sub-brand · Paediatric Care
              </span>

              <h1 className="font-display h-brand max-w-[16ch] mt-6">
                Kids&apos;{" "}
                <span className="italic font-display-warm">Dr.</span>
              </h1>

              <p className="mt-7 lede max-w-[52ch] text-ink-2">
                Paediatric care coordinated across paediatrician, psychology,
                allied health and school, for children and their families.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book with Kids&apos; Dr
                  <Arrow />
                </a>
                <a href="#care" className="btn-outline">
                  Explore care areas
                  <Arrow />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8 max-w-[560px]">
                <Stat n="3" label="Paediatricians" />
                <Stat n="10" label="Allied & psychology" />
                <Stat n="Sans Souci" label="Primary base" small />
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="brand-plate">
                <span className="plate-corner">est. within SMSG</span>
                <Image
                  src="/website-images/Kids Dr-01.webp"
                  alt="Kids' Dr brand logo"
                  className="plate-logo"
                  width={420}
                  height={320}
                  priority
                />
                <div className="plate-under">
                  <span>Every childhood stage</span>
                  <span className="sep" />
                  <span>Sydney</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">About Kids&apos; Dr</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Paediatric care, as coordinated{" "}
                <span className="italic font-display-warm">as it should be.</span>
              </h2>
              <div className="mt-8 space-y-3">
                <IntroBullet>Three paediatricians</IntroBullet>
                <IntroBullet>Ten allied and psychology clinicians</IntroBullet>
                <IntroBullet>
                  Coordinated across paediatrics, psychology, allied health and
                  school
                </IntroBullet>
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                A school report that doesn&apos;t add up is rarely just about
                school. A child with big feelings often needs more than one
                conversation to unpack them. Sleep questions blur into feeding
                questions blur into sensory questions. Development is rarely a
                single line on a chart, and the child who&apos;s a puzzle at
                seven is often the child who was a puzzle at four in ways
                nobody had the language for at the time.
              </p>
              <p>
                Kids&apos; Dr is Specialist Medical Services Group&apos;s
                (SMSG) paediatric sub-brand. Three consultant paediatricians
                work alongside a ten-strong team of psychologists, counsellors,
                dietitians, physiotherapists, a podiatrist and a speech
                pathologist for the children and families who need more than a
                single appointment can offer. Assessment that takes time.
                Reports written in language families can actually use.
                Coordination across the disciplines involved in one
                child&apos;s care, and communication with schools when that
                helps.
              </p>
              <p>
                Kids&apos; Dr previously operated at its own site, kidsdr.au.
                That site is being retired and every clinician, service and
                piece of content is consolidated here on smsg.au. Nothing
                changes about the care itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubBrandCareAreas
        bandClass="amber-band"
        eyebrow="Care areas"
        headingLead="What Kids' Dr"
        headingItalic="covers."
        supporting="Five clinical pathways, each supported by the paediatric and allied team."
        tiles={tiles}
      />

      {/* TEAM */}
      <section id="team" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Your Kids&apos; Dr team</span>
              <h2 className="font-display h-section mt-3 max-w-[26ch]">
                Three paediatricians and{" "}
                <span className="italic font-display-warm">
                  a ten-strong allied team.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Our Kids&apos; Dr clinicians are independent practitioners
              delivering paediatric and allied care from our supporting
              premises. Every child has a paediatrician as the anchor point;
              the allied and psychology team wraps around that, coordinated
              through a shared record. Not sure who to see? Our reception team
              can help you match to the right first appointment.
            </div>
          </div>

          <div className="hairline w-full mb-4" />
          <TeamGrid people={roster} />

          <div className="mt-8">
            <Link href={routes.teamAlliedHealth()} className="btn-ghost text-[14px]">
              See all SMSG allied health
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <SubBrandLocations
        subBrand="kidsdr"
        eyebrow="Where Kids' Dr operates"
        headingLead="Paediatric appointments at Sans Souci"
        headingItalic="and Earlwood, allied support across the group."
        supporting="The clinicians and services vary by location. Here's what's on offer where."
        bullets={{
          sanssouci: [
            "Primary Kids' Dr paediatric base",
            "Home of Dr Moe Moe Thinn and Dr Martina Popelkova",
            "Most of the psychology and psychometric assessment team",
            "Physiotherapy, dietetics and speech pathology on site",
          ],
          earlwood: [
            "Dr Damian Lees, primary General Paediatrician",
            "Dr Martina Popelkova, visiting from Sans Souci",
            "Psychology including neurodiversity-affirming practice (Sandra Bell)",
            "Vietnamese-speaking counselling (Thao Tammy Trang)",
            "Physiotherapy, dietetics, speech pathology, podiatry",
          ],
          bangor: [
            "Counselling (Julia Magrin, English and Portuguese)",
            "Dietetics (Dr Xue-Fei Fay Yu, English, Cantonese and Mandarin)",
            "Convenient for Sutherland Shire families",
          ],
        }}
      />

      {/* BOOKING */}
      <section id="book" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-6">
              <span className="allcaps text-ink-3">
                Booking with Kids&apos; Dr
              </span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Every Kids&apos; Dr clinician is{" "}
                <span className="italic font-display-warm">
                  bookable online.
                </span>
              </h2>
              <div className="body-editorial mt-8 max-w-[56ch]">
                <p>
                  When you book, you&apos;ll see each clinician&apos;s next
                  available appointments at the centres they cover. If
                  you&apos;re not sure where to start, our reception team can
                  point you toward the right first appointment for what your
                  family is trying to work out.
                </p>
              </div>

              <div className="mt-8 space-y-4 max-w-[52ch]">
                <BookingHint
                  eyebrow="If your child needs an assessment"
                  body="Assessment appointments book further ahead than routine visits. Plan a week or two ahead for ADHD, autism, developmental or psychometric assessments. The first appointment is typically longer than a follow-up."
                />
                <BookingHint
                  eyebrow="If your child needs a paediatrician follow-up"
                  body="Follow-up appointments with your usual paediatrician book more quickly."
                />
                <BookingHint
                  eyebrow="If your child is under an allied health plan"
                  body="For Chronic Disease Management or Better Access to Mental Health plans, the paediatrician or a GP can prepare the plan and any accompanying referrals."
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <figure className="rounded-[20px] overflow-hidden h-[200px] md:h-[220px] mb-5 relative">
                <Image
                  src="/website-images/booking-with-aurora.webp"
                  alt="A hand next to a phone showing a calendar and an appointment card"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="grid gap-4">
                {KIDS_CLINIC_ORDER.map((key) => {
                  const clinic = CLINICS[key];
                  return (
                    <a
                      key={key}
                      href={clinic.automedBase}
                      target="_blank"
                      rel="noopener"
                      className="group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 hover:border-ink/30 bg-paper px-6 py-5 transition"
                    >
                      <div>
                        <div className="allcaps text-ink-3">
                          {clinic.shortLabel}
                        </div>
                        <div
                          className="font-display text-[22px] mt-1"
                          style={{
                            fontVariationSettings: "'SOFT' 100,'opsz' 40",
                          }}
                        >
                          Book Kids&apos; Dr at {clinic.shortLabel}
                        </div>
                        <div className="text-[12.5px] text-ink-3 mt-1">
                          {CTA_SUB[key]}
                        </div>
                      </div>
                      <Arrow className="arrow shrink-0 text-ink-3" size={18} />
                    </a>
                  );
                })}

                <div className="mt-2 text-[13px] text-ink-3 flex items-center gap-3">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
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
                      Register first
                    </Link>{" "}
                    so your child&apos;s file is ready before the appointment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-cream-2">
        <div
          className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Common questions</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Things families{" "}
                <span className="italic font-display-warm">often ask.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[42ch]">
                If your question isn&apos;t here, our reception team is a good
                first stop.
              </p>
            </div>

            <div className="md:col-span-8">
              <Faq q="Do I need a referral to see a Kids' Dr paediatrician?" open>
                <p>
                  A GP referral is required for the Medicare rebate on
                  paediatric consultations. Our GPs can prepare it, or your
                  child&apos;s regular GP can. Some initial screening
                  appointments can be seen without a referral, but the
                  Medicare rebate applies with one in place.
                </p>
              </Faq>
              <Faq q="Is it bulk-billed?">
                <p>
                  Paediatric consultations are primarily private billing, with
                  Medicare rebates applying where the child is eligible.
                  Assessment appointments (ADHD, autism, developmental,
                  psychometric) may attract additional fees where the
                  assessment is complex or requires cross-disciplinary
                  reporting. For allied health sessions under Chronic Disease
                  Management or Better Access to Mental Health plans, Medicare
                  rebates apply through those plans. Reception confirms the
                  exact arrangement at booking.
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
              <Faq q="How long does an assessment take?">
                <p>
                  Assessment is typically a process across multiple sessions
                  rather than a single appointment. For ADHD and autism,
                  expect an initial paediatric consultation, structured
                  evaluation over subsequent visits, cross-disciplinary input
                  where relevant, and a written report and management plan at
                  the end.
                </p>
              </Faq>
              <Faq q="Can I bring my child's teacher's observations?">
                <p>
                  Yes, please. Teacher input is often central to accurate
                  assessment, particularly for ADHD, behavioural and learning
                  concerns. Standardised questionnaires can be sent to your
                  child&apos;s teacher as part of the assessment process.
                </p>
              </Faq>
              <Faq q="Which centre should I book at for developmental assessment?">
                <p>
                  Paediatric appointments are available at Sans Souci and
                  Earlwood. Sans Souci is the primary base for Dr Moe Moe
                  Thinn and Dr Martina Popelkova, and Earlwood hosts Dr Damian
                  Lees with Dr Popelkova cross-booking there too. Allied
                  support (psychology, counselling, dietetics) is available
                  across the group, including at Bangor for families in the
                  Sutherland Shire.
                </p>
              </Faq>
              <Faq q="Can Kids' Dr work with our child's school?">
                <p>
                  Yes. Assessment reports are structured to support
                  conversations with schools. Where school liaison helps, we
                  do it, and we can be a point of contact for school-based
                  accommodations when parents want us to be.
                </p>
              </Faq>
            </div>
          </div>
        </div>
      </section>

      <SubBrandRelatedPages
        subBrand="kidsdr"
        headingLead="Read on"
        headingItalic="to go deeper."
        supporting="A few pages that families most often move to from Kids' Dr."
        items={[
          {
            eyebrow: "Service",
            title: "ADHD diagnosis and management",
            body: "What the assessment process looks like, and what happens next.",
            href: "/adhd-diagnosis-and-management/",
          },
          {
            eyebrow: "Service",
            title: "Autism assessment",
            body: "How assessment works across multiple sessions and disciplines.",
            href: "/autism-assessment/",
          },
          {
            eyebrow: "Location",
            title: "Sans Souci Doctors",
            body: "The primary Kids' Dr base, bayside on Campbell Street.",
            href: routes.location("sanssouci"),
          },
          {
            eyebrow: "Sub-brand",
            title: "Aurora Women & Babies Health",
            body: "Care for mothers alongside paediatric care for the child.",
            href: routes.subBrand("aurora"),
            dotColor: SUB_BRANDS.aurora.dotColor,
          },
        ]}
      />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}

/* ============================================================
   Local helper components (Kids' Dr scope)
   ============================================================ */

function Arrow({
  className = "arrow",
  size = 14,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
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

function Stat({
  n,
  label,
  small = false,
}: {
  n: string;
  label: string;
  small?: boolean;
}) {
  return (
    <div className="border-t border-black/15 pt-4">
      <div
        className={`font-display ${small ? "text-[22px] md:text-[26px]" : "text-[26px] md:text-[30px]"} leading-none`}
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
        style={{ background: "var(--kids)" }}
      />
      {children}
    </div>
  );
}

function TeamGrid({ people }: { people: Practitioner[] }) {
  return (
    <ul className="grid md:grid-cols-2 gap-x-14">
      {people.map((p) => (
        <li key={p.slug}>
          <Link href={routes.practitioner(p.slug)} className="team-row reveal">
            <div>
              <div className="name">{p.identity.full_name}</div>
              <div className="role">{metaLine(p)}</div>
            </div>
            <div className="text-right">
              <div className="loc">{locationLine(p)}</div>
            </div>
            <svg
              className="go"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
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
  );
}

function BookingHint({ eyebrow, body }: { eyebrow: string; body: string }) {
  return (
    <div className="rounded-[16px] border border-black/10 bg-paper p-5 flex items-start gap-4">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "color-mix(in oklab, var(--kids) 25%, var(--paper))",
          color: "var(--kids-deep)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path
            d="M8 4v4l3 2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle
            cx="8"
            cy="8"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      </div>
      <div>
        <div className="allcaps text-ink-3">{eyebrow}</div>
        <div className="text-[14.5px] text-ink mt-1">{body}</div>
      </div>
    </div>
  );
}

function Faq({
  q,
  children,
  open,
}: {
  q: string;
  children: React.ReactNode;
  open?: boolean;
}) {
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
