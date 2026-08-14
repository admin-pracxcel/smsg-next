import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildCareersHubSchema } from "./schema";

export const metadata: Metadata = {
  title: "Careers at SMSG | Specialist Medical Services Group",
  description:
    "Roles for General Practitioners, Practice Nurses, Patient Support Officers and Allied Health practitioners across Earlwood, Bangor and Sans Souci.",
  alternates: { canonical: "https://smsg.au/careers/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TERRA_DOT_STYLE: React.CSSProperties = { background: "var(--terra)" };
const TERRA_2_ACCENT: React.CSSProperties = { color: "var(--terra-2)" };

const GLANCE_ROWS = [
  { label: "Role streams", value: "GP, Practice Nurse, Patient Support Officer, Allied Health" },
  { label: "Employment types", value: "Casual, part-time and full-time; consulting for GPs" },
  { label: "Locations", value: "Earlwood, Bangor, Sans Souci" },
  { label: "Apply to", value: "recruitment@smsg.au" },
];

const WHY = [
  "Multidisciplinary by design, with GPs, consultant specialists, allied health and nursing under one roof",
  "Modern facilities including dedicated treatment rooms, on-site pathology collection, and skin procedure rooms",
  "Consultative culture where independent practitioners work alongside a support team built around clinical care",
  "Learning and development, including registrar support, nurse mentorship, and administration career pathways",
  "Language diversity, with the team collectively speaking more than a dozen languages",
  "Southern Sydney and Inner West footprint, within reach of the wider Sydney area and public transport",
  "Great Place to Work certified, with the 2023 CESPHN Certificate of Excellence in General Practice",
  "AGPAL-accredited across all three centres",
];

const OPEN_ROLES = [
  {
    num: "01",
    title: "General Practitioner",
    body: "FRACGP or VR GPs for full-time or part-time consulting positions across all three centres. Special interests in skin cancer medicine, women's health, procedural work and chronic disease welcomed.",
    href: routes.careersRole("general-practitioner"),
  },
  {
    num: "02",
    title: "Practice Nurse",
    body: "EEN or RN roles across the three centres. Casual, part-time and full-time. New graduates welcome; mentored by senior RNs in the team.",
    href: routes.careersRole("practice-nurse"),
  },
  {
    num: "03",
    title: "Patient Support Officer",
    body: "Patient-facing administration and coordination roles across the three centres. Career pathway into practice management, HR, quality, and business development through our Management and Leadership Development Program.",
    href: routes.careersRole("patient-support-officer"),
  },
  {
    num: "04",
    title: "Allied Health",
    body: "Ongoing interest in speech pathology, occupational therapy, physiotherapy, dietetics, psychology, counselling and podiatry roles. Employed and room-rental arrangements considered depending on the discipline.",
    href: routes.careersRole("allied-health"),
  },
];

const LOCATION_KEYS = ["earlwood", "bangor", "sanssouci"] as const;

export default function CareersHubPage() {
  const schema = buildCareersHubSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Careers" },
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
                Careers · Join the team
              </span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Careers{" "}
                <span className="italic font-display-warm">at SMSG.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Specialist Medical Services Group is a three-centre practice
                group in Sydney&apos;s Inner West and south, home to 60+
                clinicians and a large support team. We hire for clinical,
                administrative and allied health roles across Earlwood, Bangor
                and Sans Souci. If you&apos;re considering a move, this is
                where the current roles sit and how to get in touch.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#roles" className="btn-primary">
                  See open roles
                  <Arrow />
                </a>
                <a href="#apply" className="btn-outline">
                  How to apply
                  <Arrow />
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">What we recruit for.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>Confidentiality is respected throughout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / GROUP AT A GLANCE */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/three-centres-one-group.webp" alt="SMSG's three Sydney centres, one clinical group." fill sizes="100vw" className="object-cover" />
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
              <span className="allcaps text-cream/70">The group at a glance</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Three centres,{" "}
                <span className="italic font-display-warm" style={TERRA_2_ACCENT}>
                  one group.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Earlwood Medical Centre on Homer Street, Bangor Medical Centre
                on Yala Road, and Sans Souci Doctors on Campbell Street. Each
                has its own team, patient base and clinical focus, all working
                within the same group.
              </p>
              <p>
                Sixty-plus clinicians consult across the group: Consultant
                Specialist GPs, Excelsia Specialist Centre consultants across
                ten specialties, Aurora Women &amp; Babies Health clinicians,
                Kids&apos; Dr paediatricians and allied health, the Clarion
                Skin Cancer Clinic team, and Sydney Cosmedic.
              </p>
              <p>
                Great Place to Work certified. Award-winning practices,
                including the 2023 CESPHN Certificate of Excellence in General
                Practice. AGPAL-accredited across all three centres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SMSG */}
      <section id="why" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Why SMSG</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                A group built around{" "}
                <span className="italic font-display-warm">clinical care.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Independent practitioners work alongside a support team of
              practice managers, senior RNs and a leadership team who know your
              name.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHY.map((r) => (
              <div
                key={r}
                className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"
              >
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={TERRA_DOT_STYLE} />
                <span>{r}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Current roles</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Four ongoing{" "}
                <span className="italic font-display-warm">role streams.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Click through for the specifics of each role, what we&apos;re
              looking for, and how to apply.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="grid md:grid-cols-2 gap-6">
            {OPEN_ROLES.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group block rounded-[20px] border border-black/10 hover:border-ink/30 bg-paper p-7 transition"
              >
                <div className="allcaps text-ink-3">{role.num}</div>
                <div
                  className="font-display text-[24px] mt-2"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {role.title}
                </div>
                <p className="mt-3 text-[15px] text-ink-2 leading-[1.55]">
                  {role.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[13.5px] text-ink group-hover:text-terra transition">
                  Read the role
                  <Arrow />
                </span>
              </Link>
            ))}
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
                Three centres, one{" "}
                <span className="italic font-display-warm">connected group.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Roles are offered across Earlwood, Bangor and Sans Souci. Some
              positions rotate across sites; others are based primarily at one
              centre.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATION_KEYS.map((k) => {
              const c = CLINICS[k];
              return (
                <div key={k} className="contact-row">
                  <div className="label">
                    <Link href={routes.location(k)} className="link-editorial">
                      {c.label}
                    </Link>
                  </div>
                  <div className="value">
                    {c.address}, {c.suburbLine}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>
                How to apply
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
                Register interest through the relevant role page, or send your
                resume and a brief note to recruitment@smsg.au. Include the
                role that interests you, your current situation and when
                you&apos;d be available to start. Our recruitment team reviews
                all applications and will be in touch about next steps.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                <div className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25">
                  <div
                    className="font-display text-[19px] text-cream"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                  >
                    Careers enquiries
                  </div>
                  <div className="text-cream/70 text-[13px] mt-0.5">
                    Reviewed by the SMSG recruitment team
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90">
                    <a
                      href="mailto:recruitment@smsg.au"
                      className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition"
                    >
                      recruitment@smsg.au
                    </a>
                  </div>
                </div>
                <div className="text-[13px] text-cream/70">
                  For general SMSG contact (patient enquiries, appointments),
                  see the{" "}
                  <Link href={routes.contact()} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">
                    Contact page
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.careersRole("general-practitioner")} className="related-card">
              <span className="kicker">Role</span>
              <h3>General Practitioner</h3>
              <p>FRACGP and VR GP consulting across the three centres.</p>
              <span className="go">
                Read the role <Arrow />
              </span>
            </Link>
            <Link href={routes.careersRole("practice-nurse")} className="related-card">
              <span className="kicker">Role</span>
              <h3>Practice Nurse</h3>
              <p>RN and EEN roles with senior RN mentorship across the group.</p>
              <span className="go">
                Read the role <Arrow />
              </span>
            </Link>
            <Link href={routes.careersRole("allied-health")} className="related-card">
              <span className="kicker">Role</span>
              <h3>Allied Health</h3>
              <p>Physio, psychology, dietetics, speech, podiatry and more.</p>
              <span className="go">
                Read the role <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
