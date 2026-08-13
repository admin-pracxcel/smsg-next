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
import { buildExcelsiaSchema } from "./schema";

export const metadata: Metadata = {
  title: "Excelsia Specialist Centre | Consultant Physicians and Surgeons at SMSG",
  description:
    "Consultant physicians and surgeons across nine specialties at Earlwood, Bangor and Sans Souci. Specialist consultations by GP referral, without the hospital referral queue.",
};

// Care-area tiles for the nine Excelsia specialties.
const tiles: CareTile[] = [
  {
    num: "01",
    title: "Cardiology",
    body: "Consultations for chest pain assessment, palpitations, heart failure management, hypertension refractory to primary care, and post-cardiac-event follow-up. Onsite ECG, spirometry, and echocardiogram with stress testing can be booked through the Diagnostics service.",
    cta: "Cardiology",
    href: "/cardiology/",
  },
  {
    num: "02",
    title: "Endocrinology",
    body: "Diabetes management (Type 1 and Type 2), thyroid disorders, adrenal and pituitary conditions, obesity and metabolic health, and endocrine components of weight management. Dr Thaw Dar Htet also anchors the Healthy Weight & Wellness service delivered through General Practice.",
    cta: "Endocrinology",
    href: "/endocrinology/",
  },
  {
    num: "03",
    title: "Gastroenterology",
    body: "Reflux and dyspepsia, inflammatory bowel disease, IBS, and colorectal screening pathways.",
    cta: "Gastroenterology",
    href: "/gastroenterology/",
  },
  {
    num: "04",
    title: "Geriatrics",
    body: "Comprehensive geriatric assessment, cognitive assessment and dementia review, falls and mobility, polypharmacy review, and coordinated aged care planning.",
    cta: "Geriatrics",
    href: "/geriatrics/",
  },
  {
    num: "05",
    title: "Haematology",
    body: "Anaemia workup, iron studies interpretation, coagulation disorders, and haematological malignancy review with coordination into tertiary services.",
    cta: "Haematology",
    href: "/haematology/",
  },
  {
    num: "06",
    title: "Nephrology",
    body: "Chronic kidney disease staging and management, electrolyte disorders, hypertensive kidney disease, and pre-dialysis planning.",
    cta: "Nephrology",
    href: "/nephrology/",
  },
  {
    num: "07",
    title: "Respiratory and sleep medicine",
    body: "Asthma and COPD complex management, sleep apnoea assessment and CPAP coordination, chronic cough, and pulmonary function testing interpretation.",
    cta: "Respiratory & Sleep Medicine",
    href: "/respiratory-and-sleep-medicine/",
  },
  {
    num: "08",
    title: "Paediatric medicine",
    body: "Paediatric consultations covering a range of childhood conditions, from routine developmental review to complex chronic paediatric care. See also Kids' Dr for the developmental and psychology-focused paediatric practice within the same team.",
    cta: "Paediatric Medicine",
    href: "/paediatric-medicine/",
  },
  {
    num: "09",
    title: "General medicine",
    body: "General internal medicine consultations for complex multi-system presentations and diagnostic workups that don't fit a single sub-specialty pathway cleanly. Several of our geriatricians hold dual scope in general medicine.",
    cta: "General Medicine",
    href: "/general-medicine/",
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
  return p.clinics.consulting_at.map((k) => CLINICS[k].shortLabel).join(" · ");
}


const CTA_SUB = {
  earlwood: "Largest specialist roster · Onsite cardiac diagnostics",
  bangor: "Shire visiting centres · Five specialist disciplines",
  sanssouci: "Paediatric and adult centres",
} as const;

export default function ExcelsiaHubPage() {
  const schema = buildExcelsiaSchema();
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "excelsia")
  );

  return (
    <div className="theme-excelsia">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Excelsia Specialist Centre" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden excelsia-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#4A6B7A" strokeWidth="0.6" fill="none">
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
                SMSG Sub-brand · Specialist Medicine
              </span>
              <h1 className="font-display h-brand max-w-[16ch] mt-6">
                Excelsia{" "}
                <span className="italic font-display-warm">
                  Specialist Centre.
                </span>
              </h1>
              <p className="mt-7 lede max-w-[52ch] text-ink-2">
                Consultant physicians and surgeons across nine specialties,
                without the hospital referral queue.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book with Excelsia
                  <Arrow />
                </a>
                <a href="#care" className="btn-outline">
                  Explore specialties
                  <Arrow />
                </a>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-6 md:gap-8 max-w-[520px]">
                <Stat n="9" label="Specialties" />
                <Stat n="3" label="SMSG centres" />
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="brand-plate">
                <span className="plate-corner">est. within SMSG</span>
                <Image
                  src="/website-images/Excelsia-01.webp"
                  alt="Excelsia Specialist Centre brand logo"
                  className="plate-logo"
                  width={420}
                  height={320}
                  priority
                />
                <div className="plate-under">
                  <span>Consultant physician care</span>
                  <span className="sep" />
                  <span>Sydney</span>
                </div>

                <div className="plate-photo">
                  <Image
                    src="/website-images/earlwood-interior.webp"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
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
              <span className="allcaps text-ink-3">About Excelsia</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Specialist access,{" "}
                <span className="italic font-display-warm">without the wait.</span>
              </h2>
              <div className="mt-8 space-y-3">
                <IntroBullet>Consultant physicians and surgeons</IntroBullet>
                <IntroBullet>Nine specialties</IntroBullet>
                <IntroBullet>GP referral required for the Medicare rebate</IntroBullet>
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                When your GP writes a referral to a cardiologist, an
                endocrinologist or a nephrologist in most of Sydney, you
                often wait weeks or months for a hospital outpatient
                appointment, even when the clinical need is immediate. The
                wait is often the point at which patients disengage and never
                actually get the specialist review they were meant to have.
              </p>
              <p>
                Excelsia Specialist Centre is our specialist practice within
                SMSG. Consultant physicians and surgeons, most with
                active hospital appointments and academic affiliations, take
                referrals from GPs inside and outside our group. Nine
                specialties across cardiology, endocrinology, gastroenterology,
                geriatrics, haematology, nephrology, respiratory and sleep
                medicine, paediatric medicine, and general medicine. Rooms in
                the same building as your GP, records that talk to each other,
                and specialist letters that come back within days rather than
                months.
              </p>
              <p>
                Our Excelsia specialists are independent practitioners.
                Excelsia provides the premises, the diagnostic infrastructure
                and the referral coordination; the clinical decisions and the
                ongoing specialist relationships belong to them. Every
                Excelsia consultation requires a GP referral for the Medicare
                rebate, and your usual GP or one of ours can prepare it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubBrandCareAreas
        bandClass="excelsia-band"
        eyebrow="Care areas"
        headingLead="Nine specialties,"
        headingItalic="one clinical group."
        supporting="Each specialty operates according to the standard clinical scope of that discipline. What follows gives you a sense of what your GP might refer you for."
        tiles={tiles}
      />

      {/* TEAM · grouped by specialty */}
      <section id="team" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Your Excelsia team</span>
              <h2 className="font-display h-section mt-3 max-w-[26ch]">
                Consultant physicians{" "}
                <span className="italic font-display-warm">and surgeons.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Our Excelsia specialists are independent practitioners
              consulting from our supporting premises. Most hold hospital
              appointments and academic affiliations alongside their Excelsia
              sessions. Reception can confirm availability and match you to
              the shortest wait within the specialty your GP has referred you
              for.
            </div>
          </div>

          <div className="hairline w-full mb-4" />
          <TeamGrid people={roster} />

          <div className="mt-8">
            <Link href={routes.teamSpecialists()} className="btn-ghost text-[14px]">
              See all SMSG specialist physicians &amp; surgeons
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <SubBrandLocations
        subBrand="excelsia"
        eyebrow="Where Excelsia operates"
        headingLead="Across all three SMSG centres,"
        headingItalic="largest team at Earlwood."
        supporting="The specialties consulting at each centre vary. Your GP's referral usually identifies which specialist to see, or reception can match to the shortest wait if the GP has indicated flexibility."
        bullets={{
          earlwood: [
            "Largest Excelsia specialist roster",
            "Cardiology, endocrinology, gastroenterology, geriatrics, haematology, nephrology, respiratory and sleep medicine, paediatric medicine, and general medicine",
            "Onsite ECG, spirometry, echocardiogram and stress testing",
          ],
          bangor: [
            "Five visiting specialist disciplines",
            "Endocrinology, geriatrics, general medicine, nephrology, respiratory and sleep medicine",
            "Convenient for Sutherland Shire patients avoiding a city trip",
          ],
          sanssouci: [
            "Paediatric Medicine (Kids' Dr team)",
            "General medicine, geriatrics, nephrology",
            "Adult specialist and paediatric care under one roof",
          ],
        }}
      />

      {/* BOOKING */}
      <section id="book" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-6">
              <span className="allcaps text-ink-3">Booking with Excelsia</span>
              <h2 className="font-display h-section mt-3 max-w-[26ch]">
                Every Excelsia consultation starts{" "}
                <span className="italic font-display-warm">with a GP referral.</span>
              </h2>
              <div className="body-editorial mt-8 max-w-[56ch]">
                <p>
                  Your GP writes the referral. Reception confirms availability
                  with the specialist you have been referred to, or matches
                  you to the shortest waiting time within the specialty if
                  your GP has indicated flexibility. After the consultation,
                  the specialist writes back to your GP with the assessment,
                  plan, and any recommended investigations or shared
                  follow-up.
                </p>
              </div>
              <div className="mt-8 space-y-4 max-w-[52ch]">
                <BookingHint
                  eyebrow="If you're a new specialist patient"
                  body="New consultations are typically longer than follow-ups. Bring your GP referral, your Medicare card, and any recent investigations relevant to what you're being seen for."
                />
                <BookingHint
                  eyebrow="If you're returning for follow-up"
                  body="Follow-up appointments are shorter. Reception will book you in with the specialist you saw last time."
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <figure className="rounded-[20px] overflow-hidden h-[200px] md:h-[220px] mb-5 relative">
                <Image
                  src="/website-images/booking-with-aurora.webp"
                  alt="A hand next to a phone showing a calendar and a referral note"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="grid gap-4">
                {clinicList.map((clinic) => (
                  <a
                    key={clinic.key}
                    href={clinic.automedBase}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 hover:border-ink/30 bg-paper px-6 py-5 transition"
                  >
                    <div>
                      <div className="allcaps text-ink-3">{clinic.shortLabel}</div>
                      <div
                        className="font-display text-[22px] mt-1"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                      >
                        Book Excelsia at {clinic.shortLabel}
                      </div>
                      <div className="text-[12.5px] text-ink-3 mt-1">
                        {CTA_SUB[clinic.key]}
                      </div>
                    </div>
                    <Arrow className="arrow shrink-0 text-ink-3" size={18} />
                  </a>
                ))}

                <div className="mt-2 text-[13px] text-ink-3 flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
                    so your file is ready.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Common questions</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Things patients{" "}
                <span className="italic font-display-warm">often ask.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[42ch]">
                If your question isn&apos;t here, our reception team is a good
                first stop.
              </p>
            </div>

            <div className="md:col-span-8">
              <Faq q="Do I need a referral?" open>
                <p>
                  Yes. A GP referral is required for the Medicare rebate on
                  specialist consultations. Your usual GP or one of ours can
                  prepare it. Without a valid referral in place, the
                  consultation is fully private.
                </p>
              </Faq>
              <Faq q="How long is the wait?">
                <p>
                  Substantially shorter than a hospital outpatient list,
                  typically. Reception can give you specific wait times for
                  your chosen specialist when you book. If wait matters more
                  than seeing a particular specialist, reception can suggest
                  the shortest wait within the specialty.
                </p>
              </Faq>
              <Faq q="Which specialties aren't at Excelsia?">
                <p>
                  Excelsia currently covers cardiology, endocrinology,
                  gastroenterology, geriatrics, haematology, nephrology,
                  respiratory and sleep medicine, paediatric medicine, and
                  general medicine. If your GP is referring you to a specialty
                  not listed, they will refer to an appropriate external
                  specialist. Reception can help shortlist external options if
                  you&apos;d like.
                </p>
              </Faq>
              <Faq q="Do the specialists write back to my GP?">
                <p>
                  Yes. After the consultation, the specialist writes back to
                  your GP with the assessment, plan, and any recommended
                  follow-up. You keep your GP as the coordinator of your
                  overall care.
                </p>
              </Faq>
              <Faq q="What does a specialist consultation cost?">
                <p>
                  Specialist consultations at Excelsia are private billing,
                  with a Medicare rebate applying when a valid GP referral is
                  in place. Fees vary by specialist and by the complexity of
                  the consultation. Reception confirms the specific fee and
                  expected out-of-pocket for your chosen specialist when you
                  book.
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
              <Faq q="Where do I book?">
                <p>
                  Depends on the specialist. The{" "}
                  <a href="#locations" className="link-editorial">
                    Where Excelsia operates
                  </a>{" "}
                  section lists who consults at which centre. Reception can
                  also help match if you&apos;re not sure.
                </p>
              </Faq>
              <Faq q="Can I be referred from a GP outside SMSG?">
                <p>Yes. Excelsia takes referrals from any GP in Sydney.</p>
              </Faq>
              <Faq q="What if my consultation needs onsite tests?">
                <p>
                  Where an ECG, spirometry, or echocardiogram with stress
                  testing is required, the specialist can book you into the
                  Diagnostics service at Earlwood.
                </p>
              </Faq>
            </div>
          </div>
        </div>
      </section>

      <SubBrandRelatedPages
        subBrand="excelsia"
        headingLead="Read on"
        headingItalic="to go deeper."
        supporting="A few pages that patients most often move to from Excelsia."
        items={[
          {
            eyebrow: "Service",
            title: "Echocardiogram and stress testing",
            body: "Onsite cardiac diagnostics for Excelsia and referred patients.",
            // TODO: link to /services/echocardiograms-and-stress-testing/ when built
            href: "#care",
          },
          {
            eyebrow: "Service",
            title: "Pathology services",
            body: "Onsite blood collection at all three centres.",
            // TODO: link to /services/pathology-services/ when built
            href: "#care",
          },
          {
            eyebrow: "Sub-brand",
            title: "Kids' Dr",
            body: "Paediatric care in the same clinical group at Sans Souci.",
            href: routes.subBrand("kidsdr"),
            dotColor: SUB_BRANDS.kidsdr.dotColor,
          },
          {
            eyebrow: "Location",
            title: "Earlwood Medical Centre",
            body: "The centre with the largest Excelsia roster.",
            href: routes.location("earlwood"),
          },
        ]}
      />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}

function Arrow({ className = "arrow", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-black/15 pt-4">
      <div
        className="font-display text-[26px] md:text-[30px] leading-none"
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
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--excelsia)" }} />
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
            <svg className="go" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
          background: "color-mix(in oklab, var(--excelsia) 25%, var(--paper))",
          color: "var(--excelsia-deep)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
      <div>
        <div className="allcaps text-ink-3">{eyebrow}</div>
        <div className="text-[14.5px] text-ink mt-1">{body}</div>
      </div>
    </div>
  );
}

function Faq({ q, children, open }: { q: string; children: React.ReactNode; open?: boolean }) {
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
