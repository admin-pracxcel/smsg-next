import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPsoCareerSchema } from "./schema";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { patientSupportOfficerFields } from "@/components/careers/field-schemas";

export const metadata: Metadata = {
  title: "Patient Support Officer Roles | Careers at SMSG",
  description:
    "Patient Support Officer roles across Earlwood, Bangor and Sans Souci. Casual, part-time and full-time. Career pathway into practice management and leadership.",
  alternates: { canonical: "https://smsg.au/careers/patient-support-officer/" },
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
  { label: "Role type", value: "Patient-facing administration and coordination" },
  { label: "Employment", value: "Casual, part-time and full-time" },
  { label: "Career pathway", value: "Practice management, HR, finance, quality, projects" },
  { label: "Apply to", value: "recruitment@smsg.au" },
];

const WHAT = [
  "Growth-focused culture with genuine commitment to developing people internally",
  "Cross-site experience across three centres with different patient bases and rhythms",
  "Modern systems including Best Practice Medical Software and HICAPs across all sites",
  "A large, supportive team of fifteen PSOs plus four Supervisors across the group",
  "Great Place to Work certified, 2023 CESPHN Certificate of Excellence, AGPAL-accredited",
  "Casual, part-time and full-time arrangements with rostering discussed to suit",
  "Management and Leadership Development Program supporting long-term progression",
  "Multilingual applicants warmly welcomed across the team",
];

const FAQS = [
  {
    q: "Do I need previous medical administration experience?",
    a: (
      <p>
        Experience with Best Practice Medical Software, HICAPs terminals or
        previous work in medical or clinical administration is preferred but
        not essential. We invest in people who show maturity, communication
        skills and adaptability.
      </p>
    ),
  },
  {
    q: "What does day-to-day work look like?",
    a: (
      <p>
        Appointment scheduling for GPs, specialists and allied health;
        patient enquiries by phone, email and in person; billing, receipting
        and Medicare processing; document scanning and data entry;
        investigation coordination and results follow-up; and coordination
        with allied health and external providers.
      </p>
    ),
  },
  {
    q: "What is the Management and Leadership Development Program?",
    a: (
      <p>
        A dedicated development program that supports PSOs to move into
        higher-level roles over time. Includes one-to-one development
        check-ins, targeted workshops, job shadowing across sites and teams,
        and cross-training across different areas of the business.
      </p>
    ),
  },
  {
    q: "Can I work across multiple centres?",
    a: (
      <p>
        Yes. The role may involve consulting across our three centres
        depending on business needs, and flexibility across sites is
        welcomed. Rostering is discussed to suit your circumstances.
      </p>
    ),
  },
  {
    q: "Do you value language skills?",
    a: (
      <p>
        Yes. Multilingual applicants are warmly welcomed. Languages of
        particular value to our community include Greek, Cantonese, Mandarin,
        Italian, Arabic and Mongolian.
      </p>
    ),
  },
  {
    q: "Are university graduates encouraged to apply?",
    a: <p>Yes. University graduates are among the preferred profiles for the role.</p>,
  },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Full PSO team across weekdays, with weekend work available." },
  { key: "bangor" as const, note: "Full PSO team across weekdays." },
  { key: "sanssouci" as const, note: "Full PSO team across weekdays." },
];

export default function PatientSupportOfficerCareerPage() {
  const schema = buildPsoCareerSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Careers", href: routes.careers() },
              { label: "Patient Support Officer" },
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
                Careers · Patient Administration
              </span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Patient Support{" "}
                <span className="italic font-display-warm">Officer.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Patient Support Officer roles across our three centres.
                Casual, part-time and full-time positions available. Designed
                for people who want to build a long-term career in healthcare
                administration, with a clear pathway into practice management,
                HR, finance, quality and business development.
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
                <div className="g-title">The PSO role at SMSG.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>Long-term career development supported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/waiting-warm.webp" alt="" fill sizes="100vw" className="object-cover" />
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
                The first point{" "}
                <span className="italic font-display-warm" style={TERRA_2_ACCENT}>
                  of contact.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Patient Support Officers are the first point of contact for
                patients and other health professionals across all three SMSG
                centres. Day-to-day work includes appointment scheduling for
                GPs, specialists and allied health; patient enquiries by
                phone, email and in person; billing, receipting and Medicare
                processing; document scanning and data entry; investigation
                coordination and results follow-up; general administrative
                support to the clinical team; and coordination with allied
                health and external providers.
              </p>
              <p>
                You&apos;ll work in a large, dynamic team, and the position
                may involve consulting across our three centres depending on
                business needs.
              </p>
              <p>
                This role is designed for people who want to build a
                long-term career in healthcare, not just do reception work.
                Many of our senior administrators and Practice Operations
                team members started in PSO roles and progressed internally
                as they demonstrated initiative, reliability and capability.
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
                A pathway into{" "}
                <span className="italic font-display-warm">healthcare leadership.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              If you&apos;re prepared to invest in your growth, we support the
              journey.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/corridor-warm.webp" alt="Warm corridor inside an SMSG centre" fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
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
                <span className="italic font-display-warm">preferred.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                <strong>Essential.</strong> High level of maturity as the
                first point of contact for patients and professionals; strong
                communication and interpersonal skills; organisational skills
                including time management, accuracy and attention to detail;
                the ability to multi-task and work efficiently under pressure;
                a team player comfortable in a large dynamic team; and
                adaptability across changing situations.
              </p>
              <p>
                <strong>Preferred.</strong> Experience with Best Practice
                Medical Software, experience with HICAPs terminals, previous
                experience in medical, allied health or clinical
                administration, flexibility with hours (four to five days per
                week, with or without weekends), university graduates, and
                flexibility to work across our three centres.
              </p>
              <p>
                <strong>Career progression.</strong> Higher-level tasks that
                can develop over time include reporting, rostering support,
                billing and accounts, audit and quality activities,
                recruitment assistance, or supporting new projects and
                service launches.
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
                <span className="italic font-display-warm">one PSO team.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Roles are offered across all three centres, with flexibility
              across sites welcomed.
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
                Rostering is discussed to suit your circumstances.
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
              <ApplicationForm
                role="patient-support-officer"
                fields={patientSupportOfficerFields}
              />
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
            <Link href={routes.careersRole("practice-nurse")} className="related-card">
              <span className="kicker">Related role</span>
              <h3>Practice Nurse</h3>
              <p>Clinical nursing roles supporting the wider team.</p>
              <span className="go">
                Read the role <Arrow />
              </span>
            </Link>
            <Link href={routes.about("awards-and-accreditations")} className="related-card">
              <span className="kicker">About</span>
              <h3>Awards &amp; Accreditations</h3>
              <p>Recognition of our work across the group.</p>
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
