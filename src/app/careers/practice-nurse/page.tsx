import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPracticeNurseCareerSchema } from "./schema";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { practiceNurseFields } from "@/components/careers/field-schemas";

export const metadata: Metadata = {
  title: "Practice Nurse Roles | Careers at SMSG",
  description:
    "Practice Nurse roles for RNs and EENs across Earlwood, Bangor and Sans Souci. Casual, part-time and full-time. New graduates welcome.",
  alternates: { canonical: "https://smsg.au/careers/practice-nurse/" },
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

const TERRA_DOT_STYLE: React.CSSProperties = { background: "var(--terra)" };
const TERRA_2_ACCENT: React.CSSProperties = { color: "var(--terra-2)" };

const GLANCE_ROWS = [
  { label: "Role type", value: "Registered Nurse or Enrolled Nurse" },
  { label: "Employment", value: "Casual, part-time and full-time" },
  { label: "Locations", value: "Earlwood, Bangor, Sans Souci" },
  { label: "Apply to", value: "recruitment@smsg.au" },
];

const WHAT = [
  "Mentorship by senior RNs for all newly recruited nurses, including new graduates",
  "Variety across immunisations, treatment room procedures, and chronic disease coordination",
  "Multi-site flexibility across three centres or focused work at one",
  "Best Practice clinical software standardised across the group with training provided",
  "Career progression into leadership within the nursing team",
  "Great Place to Work certified, 2023 CESPHN Certificate of Excellence, AGPAL-accredited",
  "Casual, part-time and full-time arrangements with rostering discussed to suit",
  "Saturday hours available at Earlwood if weekend work suits your pattern",
];

const FAQS = [
  {
    q: "Do I need practice nursing experience?",
    a: (
      <p>
        No. New graduates are welcome to apply and will be mentored by our
        senior RNs, developing skills across the full range of practice
        nursing.
      </p>
    ),
  },
  {
    q: "What does day-to-day work look like?",
    a: (
      <p>
        Treatment room procedures (ECG, spirometry, iron infusions, wound
        care, ear syringing, cryotherapy, injections), immunisations under
        the National Immunisation Program, chronic disease support, procedural
        assistance for GPs and specialists, patient triage, and care
        coordination with allied health, specialists and hospitals.
      </p>
    ),
  },
  {
    q: "Which qualifications do I need?",
    a: (
      <p>
        Current AHPRA registration as a Registered Nurse (RN) or Enrolled
        Nurse (EEN). Willingness to work across the range of general practice
        nursing, and interest in ongoing professional development.
      </p>
    ),
  },
  {
    q: "Can I work across multiple centres?",
    a: (
      <p>
        Yes. Some roles involve rotation across sites; others are based
        primarily at one centre. Rostering is discussed to suit your
        circumstances.
      </p>
    ),
  },
  {
    q: "Is training provided for Best Practice software?",
    a: <p>Yes. Best Practice is standard across the group and training is provided.</p>,
  },
  {
    q: "What about pay and rostering?",
    a: <p>Rostering and pay arrangements are discussed at interview.</p>,
  },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Full nursing team across weekdays with Saturday hours available." },
  { key: "bangor" as const, note: "Full nursing team across weekdays." },
  { key: "sanssouci" as const, note: "Full nursing team across weekdays." },
];

export default function PracticeNurseCareerPage() {
  const schema = buildPracticeNurseCareerSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Careers", href: routes.careers() },
              { label: "Practice Nurse" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip">
                <span className="dot" style={TERRA_DOT_STYLE} />
                Careers · Clinical Nursing
              </span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Practice{" "}
                <span className="italic font-display-warm">Nurse.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Registered Nurse and Enrolled Nurse roles across our three
                centres. Casual, part-time and full-time positions. New
                graduates are welcome and will be mentored by senior RNs in
                the nursing team.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#apply" className="btn-primary">
                  Register your interest
                  <Arrow />
                </a>
                <a href="#what" className="btn-outline">
                  What we offer
                  <Arrow />
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">The nurse role at SMSG.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>New graduates welcome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/three-centres-one-group.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(60, 40, 30, 0.90) 0%, rgba(95, 65, 48, 0.85) 55%, rgba(60, 40, 30, 0.90) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the role</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Clinical work with{" "}
                <span className="italic font-display-warm" style={TERRA_2_ACCENT}>
                  genuine breadth.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Practice Nurses at SMSG work across the range of general
                practice nursing: treatment room procedures, clinical support
                to GPs, immunisations, chronic disease coordination, iron
                infusions, wound care, ECGs, spirometry and patient triage.
                Days are varied and no two are quite the same.
              </p>
              <p>
                The nursing team is central to how the group works. We
                coordinate patient flow, support GPs with procedures, and are
                often the person a patient sees before, during and after a
                consultation.
              </p>
              <p>
                You&apos;d be part of a team of seven internal nursing team
                members across the three centres, with senior RNs leading the
                clinical direction of the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SMSG OFFERS */}
      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What SMSG offers</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Mentorship, variety,{" "}
                <span className="italic font-display-warm">room to grow.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Development is practical and hands-on across a range of clinical
              work.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/care-quiet.webp" alt="Quiet interior of an SMSG centre" fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (
              <div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2">
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={TERRA_DOT_STYLE} />
                <span>{r}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE'RE LOOKING FOR */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What we&apos;re looking for</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Essential and{" "}
                <span className="italic font-display-warm">welcomed.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                <strong>Essential.</strong> Current AHPRA registration as an
                RN or EEN, willingness to work across the range of general
                practice nursing, ability to work as part of a team and
                autonomously when needed, and interest in ongoing professional
                development.
              </p>
              <p>
                <strong>Welcomed.</strong> Experience with Best Practice
                clinical software (training provided), previous general
                practice experience, skills in specific areas (immunisations,
                wound care, chronic disease, paediatric nursing, women&apos;s
                health), and language skills relevant to the community.
              </p>
              <p>
                <strong>New graduates.</strong> Welcome to apply. Mentored by
                our senior RNs and supported to develop skills across the
                full range of practice nursing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where you&apos;d work</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Three centres,{" "}
                <span className="italic font-display-warm">one nursing team.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Casual, part-time and full-time roles available at Earlwood,
              Bangor and Sans Souci.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => {
              const c = CLINICS[loc.key];
              return (
                <div key={loc.key} className="contact-row">
                  <div className="label">
                    <Link href={routes.location(loc.key)} className="link-editorial">
                      {c.label}
                    </Link>
                  </div>
                  <div className="value">{loc.note}</div>
                </div>
              );
            })}
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
                Common <span className="italic font-display-warm">questions.</span>
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

      {/* APPLY */}
      <section id="apply" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-5">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>
                Register your interest
              </span>
              <h2
                className="font-display mt-3 text-cream"
                style={{
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  lineHeight: 1.05,
                  fontVariationSettings: "'SOFT' 100,'opsz' 144",
                }}
              >
                Ready to <span className="italic font-display-warm" style={TERRA_2_ACCENT}>get in touch?</span>
              </h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[54ch]">
                Complete the form and our recruitment team will be in touch.
                Rostering and pay arrangements are discussed at interview.
              </p>
              <p className="mt-6 text-cream/75 text-sm">
                Prefer to email? Send your resume and a brief note to{" "}
                <a
                  href="mailto:recruitment@smsg.au"
                  className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition"
                >
                  recruitment@smsg.au
                </a>
                .
              </p>
            </div>
            <div className="md:col-span-7">
              <ApplicationForm role="practice-nurse" fields={practiceNurseFields} />
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.careers()} className="related-card">
              <span className="kicker">Careers</span>
              <h3>Careers hub</h3>
              <p>All current roles across SMSG.</p>
              <span className="go">
                See all roles <Arrow />
              </span>
            </Link>
            <Link href={routes.careersRole("patient-support-officer")} className="related-card">
              <span className="kicker">Related role</span>
              <h3>Patient Support Officer</h3>
              <p>Administration roles supporting the clinical team.</p>
              <span className="go">
                Read the role <Arrow />
              </span>
            </Link>
            <Link href="/treatment-room-and-procedures/" className="related-card">
              <span className="kicker">Service</span>
              <h3>Treatment Room &amp; Procedures</h3>
              <p>The nursing work day to day, across the group.</p>
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
