import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildAlliedHealthCareerSchema } from "./schema";

export const metadata: Metadata = {
  title: "Allied Health Roles | Careers at SMSG",
  description:
    "Speech pathology, occupational therapy, physiotherapy, dietetics, psychology, counselling and podiatry opportunities across SMSG. Send your resume to recruitment@smsg.au.",
  alternates: { canonical: "https://smsg.au/careers/allied-health/" },
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
  { label: "Disciplines", value: "Physio, psychology, counselling, speech, dietetics, podiatry, OT" },
  { label: "Arrangements", value: "Employed or room-rental, depending on discipline" },
  { label: "Locations", value: "Earlwood, Bangor, Sans Souci" },
  { label: "Apply to", value: "recruitment@smsg.au" },
];

const WHAT = [
  "Direct working relationships with GPs, consultant specialists and nursing team",
  "Established patient base drawn from a large group across three centres",
  "Modern facilities with dedicated treatment spaces at each site",
  "Both employed and room-rental arrangements considered by discipline",
  "Cross-site opportunity to consult at one centre or across the group",
  "Kids' Dr and Aurora provide defined pathways for paediatric and women's health work",
  "Great Place to Work certified, 2023 CESPHN Certificate of Excellence, AGPAL-accredited",
  "Genuine multi-disciplinary coordination through internal referrals",
];

const FAQS = [
  {
    q: "Which allied health disciplines is SMSG open to?",
    a: (
      <p>
        Physiotherapy, psychology, counselling and psychotherapy, speech
        pathology, dietetics and podiatry are all represented. Occupational
        therapy is not currently on the internal team but is of interest for
        the right practitioner.
      </p>
    ),
  },
  {
    q: "Are you offering employed roles or room rental?",
    a: (
      <p>
        Both are considered, depending on the discipline and the situation.
        Let us know your preference when you get in touch and we&apos;ll
        discuss what fits.
      </p>
    ),
  },
  {
    q: "Do I need AHPRA registration?",
    a: (
      <p>
        Current AHPRA registration where relevant, or membership of the
        appropriate professional body (Speech Pathology Australia, DAA for
        dietetics, PACFA or ACA for counselling), is essential.
      </p>
    ),
  },
  {
    q: "What if there isn't a current opening in my discipline?",
    a: (
      <p>
        We may keep your details on file for when the right opportunity
        emerges. Either way, we&apos;ll be in touch about next steps.
      </p>
    ),
  },
  {
    q: "Can I work with paediatric or women's health patients?",
    a: (
      <p>
        Yes. Kids&apos; Dr provides a defined paediatric patient pathway with
        multi-disciplinary support, and Aurora Women &amp; Babies Health
        supports perinatal, women&apos;s and maternal work.
      </p>
    ),
  },
  {
    q: "What software do you use?",
    a: (
      <p>
        Best Practice clinical software is standard across the group.
        Experience is welcomed; training is provided if needed.
      </p>
    ),
  },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Broadest allied health presence, including physio, psychology, dietetics, speech pathology and podiatry." },
  { key: "bangor" as const, note: "Counselling and dietetics on site, with scope to expand." },
  { key: "sanssouci" as const, note: "Physiotherapy, dietetics, speech pathology, and Kids' Dr allied support." },
];

export default function AlliedHealthCareerPage() {
  const schema = buildAlliedHealthCareerSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Careers", href: routes.careers() },
              { label: "Allied Health" },
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
                Careers · Allied Health
              </span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Allied{" "}
                <span className="italic font-display-warm">Health.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Ongoing interest in allied health practitioners across our
                three centres. Speech pathology, occupational therapy,
                physiotherapy, dietetics, psychology, counselling and
                podiatry. Employed and consulting arrangements considered,
                depending on the discipline.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#apply" className="btn-primary">
                  Send your resume
                  <Arrow />
                </a>
                <a href="#disciplines" className="btn-outline">
                  Disciplines we hire across
                  <Arrow />
                </a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">Allied health at SMSG.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>Enquiries kept on file if no current opening</span>
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
              <span className="allcaps text-cream/70">About the opportunity</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Multi-disciplinary{" "}
                <span className="italic font-display-warm" style={TERRA_2_ACCENT}>
                  by design.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Allied health at SMSG works closely with our GPs, consultant
                specialists and nursing team. Coordination between disciplines
                is central to how the group works, and allied health
                practitioners are integral to that.
              </p>
              <p>
                Our current allied health team covers physiotherapy with
                Antonio Kim and Daniel Tran; psychology with Sandra Bell, Sue
                Boursiani, Cara Chillari and Nita Hidalgo; counselling and
                psychotherapy with Julia Magrin and Thao Tammy Trang; speech
                pathology with Sarah Impellizzeri (plus the TLC visiting
                service); dietetics with Dr Xue-Fei Fay Yu PhD and Wing Tung
                Stephanie Yu; and podiatry with Hana Rizk.
              </p>
              <p>
                We&apos;re open to expanding across each of these disciplines,
                and to conversations with practitioners in occupational
                therapy and other allied health areas we don&apos;t currently
                have on the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section id="disciplines" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Disciplines we hire across</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                What allied health{" "}
                <span className="italic font-display-warm">looks like here.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Adult and paediatric work available across most disciplines,
              with defined pathways through Kids&apos; Dr and Aurora.
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
                <strong>Essential across all disciplines.</strong> Current
                AHPRA registration where relevant, or membership of the
                appropriate professional body (Speech Pathology Australia,
                DAA for dietetics, PACFA or ACA for counselling); alignment
                with evidence-based, patient-centred allied health practice;
                and interest in working within a multi-disciplinary team.
              </p>
              <p>
                <strong>Welcomed.</strong> Special interests in areas that
                complement our existing team; experience with Best Practice
                clinical software or willingness to learn; language skills
                relevant to the community; interest in taking on paediatric
                work through Kids&apos; Dr, women&apos;s health through
                Aurora, or specific chronic disease areas.
              </p>
              <p>
                <strong>Disciplines.</strong> Musculoskeletal, sports and
                paediatric physiotherapy; clinical, counselling and general
                psychology; adult and family counselling and psychotherapy,
                including trauma-informed practice for Victim Services
                counselling; paediatric-focused speech pathology with scope
                for adult work; chronic disease, paediatric, women&apos;s
                health and gastrointestinal dietetics; general, diabetes and
                biomechanical podiatry; and occupational therapy, if the
                right practitioner emerges.
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
              <span className="allcaps text-ink-3">Where you&apos;d practise</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Across the{" "}
                <span className="italic font-display-warm">three centres.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Practitioners can consult at one centre or across the group
              depending on need and preference.
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
                Send your resume and a brief note to recruitment@smsg.au.
                Please include the discipline you practise, your
                qualifications and current registration, whether you&apos;re
                looking for an employed role or a room-rental arrangement,
                preferred centre or centres, days and hours you&apos;d want
                to work, and any special interests.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                <div className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25">
                  <div
                    className="font-display text-[19px] text-cream"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                  >
                    Allied health recruitment
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
              </div>
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
            <Link href="/physiotherapy/" className="related-card">
              <span className="kicker">Service</span>
              <h3>Physiotherapy</h3>
              <p>How our physio service operates day to day.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href={routes.subBrand("kidsdr")} className="related-card">
              <span className="kicker">Sub-brand</span>
              <h3>Kids&apos; Dr</h3>
              <p>Multi-disciplinary paediatric care and allied support.</p>
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
