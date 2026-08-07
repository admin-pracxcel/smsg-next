import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildGpCareerSchema } from "./schema";
import { ApplicationForm } from "@/components/careers/ApplicationForm";
import { generalPractitionerFields } from "@/components/careers/field-schemas";

export const metadata: Metadata = {
  title: "General Practitioner Roles | Careers at SMSG",
  description:
    "FRACGP and VR GP roles across Earlwood, Bangor and Sans Souci. Full-time and part-time. Register interest or send your resume to recruitment@smsg.au.",
  alternates: { canonical: "https://smsg.au/careers/general-practitioner/" },
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
  { label: "Role type", value: "Consultant Specialist GP (independent practitioner)" },
  { label: "Employment", value: "Full-time and part-time consulting" },
  { label: "Locations", value: "Earlwood, Bangor, Sans Souci" },
  { label: "Apply to", value: "recruitment@smsg.au" },
];

const WHAT = [
  "Multi-disciplinary support with on-site pathology, allied health and consultant specialists",
  "Modern facilities including dedicated treatment rooms and skin procedure rooms",
  "Experienced nursing team and Patient Support Officers handling patient flow",
  "Best Practice clinical software standardised across the group with training provided",
  "Great Place to Work certified, 2023 CESPHN Certificate of Excellence, AGPAL-accredited",
  "Clinical variety across chronic disease, families, women's and maternal care, paediatrics",
  "Support for sub-specialty interests and opportunities to consult across sub-brands",
  "Pathways into leadership within the group",
];

const FAQS = [
  {
    q: "What's the working arrangement for GPs at SMSG?",
    a: (
      <p>
        Consultant Specialist GPs consult as independent practitioners. The
        group provides the premises, patient administration, nursing support
        and coordination across disciplines. Individual consulting patterns
        are agreed between you and the group.
      </p>
    ),
  },
  {
    q: "Do I need to be Fellowed?",
    a: (
      <p>
        Fellowship (FRACGP) or equivalent and Vocational Registration are
        essential. Current AHPRA registration as a General Practitioner is
        required.
      </p>
    ),
  },
  {
    q: "Can I focus on a special interest?",
    a: (
      <p>
        Yes. We actively support special interests in skin cancer medicine
        (Clarion Skin Cancer Clinic), women&apos;s and maternal health (Aurora
        Women &amp; Babies Health), paediatric care (Kids&apos; Dr), and
        chronic disease alongside Excelsia consultants.
      </p>
    ),
  },
  {
    q: "Are weekend hours available?",
    a: (
      <p>
        Saturday consulting is available at Earlwood if you&apos;d like to
        include weekend hours in your pattern.
      </p>
    ),
  },
  {
    q: "What about fees and administrative arrangements?",
    a: <p>Fee structure and administrative arrangements are discussed at interview.</p>,
  },
  {
    q: "Do you welcome multilingual GPs?",
    a: (
      <p>
        Yes. Cantonese, Mandarin, Vietnamese, Arabic, Greek, Italian and other
        languages are all valued by our diverse community patient base.
      </p>
    ),
  },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Consulting across weekdays with Saturday hours available." },
  { key: "bangor" as const, note: "Consulting across weekdays." },
  { key: "sanssouci" as const, note: "Consulting across weekdays, with Kids' Dr paediatric support on site." },
];

export default function GeneralPractitionerCareerPage() {
  const schema = buildGpCareerSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Careers", href: routes.careers() },
              { label: "General Practitioner" },
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
                Careers · Consultant Specialist GP
              </span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                General{" "}
                <span className="italic font-display-warm">Practitioner.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                FRACGP and Vocationally Registered General Practitioner roles
                across our three centres. Full-time and part-time positions,
                with support for special interests in skin cancer medicine,
                women&apos;s health, procedural work and chronic disease.
                Independent consulting arrangement with the group&apos;s
                shared support infrastructure.
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
                <div className="g-title">The GP role at SMSG.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>Confidentiality respected throughout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/care-quiet.webp" alt="" fill sizes="100vw" className="object-cover" />
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
                Independent consulting,{" "}
                <span className="italic font-display-warm" style={TERRA_2_ACCENT}>
                  shared support.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                SMSG Consultant Specialist GPs consult as independent
                practitioners, with the group providing the premises, patient
                administration, nursing support and coordination across
                disciplines. The consulting model gives clinical autonomy
                while removing the administrative overhead of running a
                practice on your own.
              </p>
              <p>
                You&apos;d be part of a group that includes 33 Consultant
                Specialist GPs across the three centres, 17 Excelsia Specialist
                Centre consultants, 12 allied health practitioners, a nursing
                team including senior RNs, and practice management and
                administration.
              </p>
              <p>
                Patient continuity is strong. Many of our patients have been
                with the group for years or across generations, and internal
                referrals within SMSG and its sub-brands (Aurora, Kids&apos;
                Dr, Excelsia, Clarion, Sydney Cosmedic) create rich clinical
                variety.
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
                Consult with{" "}
                <span className="italic font-display-warm">the group behind you.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              The infrastructure is there so consulting time is focused on
              clinical work.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/treatment-room.webp" alt="Warm interior of an SMSG treatment room" fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
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
                <strong>Essential.</strong> Current AHPRA registration as a
                General Practitioner, Fellowship (FRACGP) or equivalent,
                Vocational Registration, and alignment with patient-centred,
                evidence-based general practice.
              </p>
              <p>
                <strong>Welcomed.</strong> Special interest in skin cancer
                medicine (Clarion), women&apos;s health or obstetrics (Aurora),
                paediatrics (Kids&apos; Dr at Sans Souci), procedural skills
                including minor surgery, chronic disease management, and
                language skills relevant to the community (Cantonese,
                Mandarin, Vietnamese, Arabic, Greek, Italian and others are
                all valued).
              </p>
              <p>
                <strong>Special interests we&apos;re keen to support.</strong>{" "}
                Skin cancer medicine through Clarion&apos;s dedicated skin
                procedure rooms and experienced nursing support for excisions.
                Women&apos;s and maternal health through Aurora, including
                antenatal shared care and obstetric care. Paediatric care
                through Kids&apos; Dr, based at Sans Souci with extended
                presence at Earlwood. Chronic disease alongside Endocrinology,
                Nephrology, Cardiology and General Medicine consultants at
                Excelsia. Cantonese-speaking GPs are not essential but warmly
                welcomed by our diverse community patient base.
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
              <span className="allcaps text-ink-3">Where you&apos;d consult</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Three centres,{" "}
                <span className="italic font-display-warm">one group.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Full-time and part-time consulting positions available across
              Earlwood, Bangor and Sans Souci. Individual patterns are agreed
              between you and the group.
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
                Complete the form and our recruitment team will be in touch
                about next steps. Fee structure and consulting arrangements are
                discussed at interview.
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
                role="general-practitioner"
                fields={generalPractitionerFields}
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
              <p>RN and EEN roles across the three centres.</p>
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
