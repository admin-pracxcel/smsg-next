import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { buildAboutSchema } from "./schema";

export const metadata: Metadata = {
  title: "About SMSG | Specialist Medical Services Group",
  description:
    "SMSG is an AGPAL-accredited medical group operating three centres across southern Sydney, with sixty-plus independent practitioners across five clinical sub-brands.",
  alternates: { canonical: "https://smsg.au/about/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function SmallArrow() {
  return (
    <svg
      className="arrow"
      width="12"
      height="12"
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

const SUB_BRAND_TILES = [
  {
    num: "01",
    title: "Aurora Women & Babies Health",
    body: "Women's healthcare across every stage. Antenatal shared care, obstetrics and pregnancy care, contraception including hormonal IUD and Implanon services, cervical screening, menopause support, and breastfeeding and lactation support. Ten consulting clinicians alongside psychology, counselling, dietetics and speech pathology support.",
    href: routes.subBrand("aurora"),
    cta: "Explore Aurora",
  },
  {
    num: "02",
    title: "Kids' Dr",
    body: "Developmental paediatrics, ADHD and autism assessment, behavioural concerns, and learning difficulties assessment. Three paediatricians, alongside a ten-strong psychology, counselling and allied team. Primarily based at Sans Souci.",
    href: routes.subBrand("kidsdr"),
    cta: "Explore Kids' Dr",
  },
  {
    num: "03",
    title: "Excelsia Specialist Centre",
    body: "Our specialist practice, giving patients access to consultant physicians and surgeons across nine specialties without the hospital referral queue. Sixteen consultant specialists, with visiting centres across Earlwood, Bangor and Sans Souci.",
    href: routes.subBrand("excelsia"),
    cta: "Explore Excelsia",
  },
  {
    num: "04",
    title: "Clarion Skin Cancer Clinic",
    body: "Full-body skin checks, dermoscopy, and excision procedures. Six GPs with dedicated skin cancer medicine training, and a direct clinical link to the Melanoma Institute of Australia through Dr Jonathan Moore.",
    href: routes.subBrand("clarion"),
    cta: "Explore Clarion",
  },
  {
    num: "05",
    title: "Sydney Cosmedic",
    body: "Non-surgical cosmetic care by three medically qualified independent practitioners. Adult patients only, in-person consultation before every procedure, and full compliance with AHPRA and TGA advertising rules.",
    href: routes.subBrand("sydneycosmedic"),
    cta: "Explore Sydney Cosmedic",
  },
];

const CENTRES = [
  {
    key: "earlwood" as const,
    label: "Earlwood Medical Centre",
    tag: "Earlwood · 2206",
    image: "/website-images/earlwood.webp",
    meta: "352-354 Homer Street · Founded 2014 · Mon-Sat",
    body: "The founding centre. The largest concentration of consulting doctors, allied health, and Excelsia specialist visiting centres in the group. Saturday appointments are available at Earlwood only.",
  },
  {
    key: "bangor" as const,
    label: "Bangor Medical Centre",
    tag: "Bangor · 2234",
    image: "/website-images/bangor.webp",
    meta: "Shop 6, 121 Yala Road · Opened 2018 · Mon-Fri",
    body: "SMSG's Sutherland Shire location, inside the Bangor Shopping Centre. Family GPs alongside visiting Excelsia consultants across endocrinology, geriatrics, general medicine, nephrology, and respiratory and sleep medicine.",
  },
  {
    key: "sanssouci" as const,
    label: "Sans Souci Doctors",
    tag: "Sans Souci · 2219",
    image: "/website-images/san-souci.webp",
    meta: "39 Campbell Street · Opened 2019 · Mon-Fri",
    body: "SMSG's bayside centre, and the primary base for Kids' Dr and the largest allied health team in the group. Family GPs, three paediatricians, and a seven-strong allied health team consult here.",
  },
];

const AWARDS: { year: string; text: string }[] = [
  { year: "2024", text: "Central Eastern Sydney PHN Winner of Excellence in General Practice" },
  { year: "2023", text: "Central Eastern Sydney PHN Certificate of Excellence in General Practice" },
  { year: "2020", text: "Dr Huiling Li at Sans Souci named Doctor of the Year" },
  { year: "2018", text: "Australian Small Business Champion Award Winner in Professional Medical Service Category" },
  { year: "2016", text: "Local Business Award Winner in Business Person of the Year Category" },
  { year: "2015", text: "Local Business Award Winner in Health Improvement Category" },
];

export default function AboutHubPage() {
  const schema = buildAboutSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden blush-wash">
        <div
          className="paper-noise absolute inset-0 opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#B77F73" strokeWidth="0.6" fill="none">
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
                About · Specialist Medical Services Group
              </span>
              <h1 className="font-display h-brand max-w-[18ch] mt-6">
                About <span className="italic font-display-warm">SMSG.</span>
              </h1>
              <p className="mt-7 lede max-w-[56ch] text-ink-2">
                Specialist Medical Services Group is an AGPAL-accredited medical group operating three centres across Sydney. Sixty-plus independent practitioners work under our roof across family medicine, women&apos;s health, paediatrics, skin cancer medicine, cosmetic medicine and specialist consultations.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href={routes.about("our-story")} className="btn-primary">
                  Our Story
                  <Arrow />
                </Link>
                <Link href={routes.about("awards-and-accreditations")} className="btn-outline">
                  Awards &amp; Accreditations
                  <Arrow />
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8 max-w-[520px]">
                {[
                  { n: "2014", l: "Founded" },
                  { n: "3", l: "Centres" },
                  { n: "60+", l: "Practitioners" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-black/15 pt-4">
                    <div
                      className="font-display text-[26px] md:text-[30px] leading-none"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="brand-plate">
                <span className="plate-corner">est. 2014</span>
                <Image
                  src="/website-images/smsg-favicon.webp"
                  alt="SMSG group logo"
                  width={220}
                  height={220}
                  className="plate-logo"
                  priority
                />
                <div className="plate-under">
                  <span>Five sub-brands</span>
                  <span className="sep" />
                  <span>Sydney</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT SMSG IS ==================== */}
      <section id="about" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What SMSG is</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                A clinical group organised around{" "}
                <span className="italic font-display-warm">specialised care.</span>
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  "Not a corporate chain",
                  "Every clinician is independent",
                  "AGPAL-accredited across all three centres",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-3 text-[13.5px] text-ink-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--aurora)" }}
                    />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                Specialist Medical Services Group (SMSG) was founded in 2014 by a team of health and management professionals committed to affordable, high-quality healthcare. What began as a single practice at Earlwood has grown into a three-centre group with five clinical sub-brands and a team of more than sixty consulting practitioners.
              </p>
              <p>
                The distinguishing feature of SMSG is not our size. It is how care is organised. Every clinician who consults from our premises is an independent practitioner. Family GPs, consultant specialists, paediatricians, psychologists, counsellors, dietitians, physiotherapists, podiatrists, speech pathologists, cosmetic clinicians. Each is a tenant of SMSG, setting their own clinical decisions, billing arrangements, and appointment structure.
              </p>
              <p>
                SMSG provides the premises, the shared clinical record, the reception team, and the coordination between disciplines. What we do not do is direct clinical practice. This model matters for patients because it means the clinicians you see at SMSG are here because they chose to be, not because they were assigned by a corporate group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FIVE SUB-BRANDS ==================== */}
      <section id="sub-brands" className="relative blush-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">The five clinical sub-brands</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                How specialised care is{" "}
                <span className="italic font-display-warm">organised within SMSG.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[56ch]">
                Rather than presenting as a single generalist medical group, SMSG operates through five clinical sub-brands. Each is anchored by a team of clinicians who focus on that area of care, with cross-referral pathways when a patient&apos;s needs sit across disciplines.
              </p>
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SUB_BRAND_TILES.map((t) => (
              <div key={t.num} className="care-tile">
                <div className="num">{t.num}</div>
                <div className="title">{t.title}</div>
                <p className="text-[15px] text-ink-2 leading-relaxed">{t.body}</p>
                <Link href={t.href} className="cta">
                  {t.cta}
                  <SmallArrow />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== THE THREE CLINICS ==================== */}
      <section id="clinics" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">The three centres</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Sydney,{" "}
                <span className="italic font-display-warm">three neighbourhoods.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Each centre has its own personality and its own concentration of services, though the shared clinical record means your care travels with you.
            </div>
          </div>

          <div className="hairline w-full" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {CENTRES.map((c) => (
              <article key={c.key} className="loc-card">
                <div className="lc-photo">
                  <Image
                    src={c.image}
                    alt={`${c.label} exterior`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="lc-tag">
                    <span className="dot" />
                    {c.tag}
                  </span>
                </div>
                <div className="lc-body">
                  <h3
                    className="font-display text-[26px] leading-[1.05]"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                  >
                    {c.label}
                  </h3>
                  <div className="mt-3 text-[13px] text-ink-3">{c.meta}</div>
                  <p className="mt-5 text-[15px] text-ink-2 leading-relaxed">{c.body}</p>
                  <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
                    <Link href={routes.location(c.key)} className="btn-ghost text-[14px]">
                      Learn about {c.label}
                      <Arrow />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE BELIEVE ==================== */}
      <section id="beliefs" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What we believe</span>
              <h2 className="font-display h-section mt-3 max-w-[26ch]">
                The principles behind{" "}
                <span className="italic font-display-warm">how SMSG operates.</span>
              </h2>
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="body-editorial max-w-[52ch]">
              <p>
                <strong>Clinical Quality is our Tradition. Patient Safety is our Commitment.</strong> This is not just a strapline. It is why we are AGPAL-accredited, why our clinical record system is shared across all three centres, why every practitioner&apos;s credentials are verified against the AHPRA register, and why our reception team confirms fees with patients at three points in every visit (booking, check-in, check-out).
              </p>
            </div>
            <div className="body-editorial max-w-[52ch]">
              <p>
                <strong>Independent practitioners, coordinated care.</strong> Every clinician at SMSG owns their own practice. What SMSG provides is the coordination between them, so a patient seeing an Aurora GP for antenatal shared care and a Kids&apos; Dr paediatrician for their older child does not need to explain their family history twice.
              </p>
            </div>
            <div className="body-editorial max-w-[52ch]">
              <p>
                <strong>Services lead, locations support.</strong> Our essence is the quality and breadth of specialised services our practitioners deliver, not the number of premises we operate from. The three centres exist to support the clinicians&apos; work, not to define the group&apos;s identity.
              </p>
            </div>
            <div className="body-editorial max-w-[52ch]">
              <p>
                <strong>Density over decoration.</strong> Our patients tell us they value clarity and clinical substance more than marketing polish. Our reception team can tell you before your first appointment whether your consultation will be bulk-billed. Our clinicians write letters to your GP in plain language. Our website tells you what will happen at your appointment before you get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ACCREDITATIONS & RECOGNITION ==================== */}
      <section id="accreditations" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5">
              <span className="allcaps text-ink-3">Accredited and recognised by</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Independent verification of{" "}
                <span className="italic font-display-warm">clinical standards.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[42ch]">
                SMSG holds full AGPAL accreditation across all three centres, which requires ongoing compliance with the RACGP Standards for General Practices (5th edition). This is the same accreditation held by leading general practices across Australia.
              </p>
              <p className="mt-4 body-lg text-ink-2 max-w-[42ch]">
                In addition, Earlwood Medical Centre is accredited by Veteran Evaluation Services in the United States to provide clinical review and certification for American Veterans in Australia.
              </p>

              <div className="mt-10">
                <Link
                  href={routes.about("awards-and-accreditations")}
                  className="link-editorial text-[14px]"
                >
                  Read more on Awards &amp; Accreditations
                  <Arrow />
                </Link>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="allcaps text-ink-3">Group awards</div>
              <ol className="mt-6 space-y-4">
                {AWARDS.map((a, i) => (
                  <li
                    key={a.year}
                    className={`flex gap-5 items-start border-t border-black/10 pt-4${i === AWARDS.length - 1 ? " border-b pb-4" : ""}`}
                  >
                    <div
                      className="font-display text-[24px] leading-none w-[70px] shrink-0"
                      style={{
                        fontVariationSettings: "'SOFT' 100,'opsz' 40",
                        color: "var(--terra)",
                      }}
                    >
                      {a.year}
                    </div>
                    <div className="text-[15px] text-ink-2 leading-relaxed">{a.text}</div>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-[14px] text-ink-3 max-w-[52ch] leading-relaxed">
                SMSG is also Great Place to Work Certified, a global recognition of workplace culture based on employee surveys and cultural assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW TO REACH US ==================== */}
      <section id="contact" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">How to reach us</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Direct contacts for{" "}
                <span className="italic font-display-warm">the three centres.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[56ch]">
                Reception at each centre is your first point of contact for bookings, questions, and everything in between. For matters that need to go beyond reception, our Practice Manager or Chief Growth Officer will be in touch. See our{" "}
                <Link
                  href={routes.about("feedback-and-complaints")}
                  className="link-editorial text-[16px]"
                >
                  Feedback and Complaints
                </Link>{" "}
                page for more.
              </p>
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              { name: "Earlwood Medical Centre", tel: "02 9554 7788", telHref: "+61295547788", email: "EMC@smsg.au" },
              { name: "Bangor Medical Centre", tel: "02 8582 1318", telHref: "+61285821318", email: "BMC@smsg.au" },
              { name: "Sans Souci Doctors", tel: "02 7923 9103", telHref: "+61279239103", email: "SSD@smsg.au" },
            ].map((c) => (
              <div key={c.name} className="info-card">
                <div className="info-row">
                  <div className="info-label">{c.name}</div>
                  <div className="text-[15px] text-ink-2 leading-relaxed">
                    <a href={`tel:${c.telHref}`} className="link-editorial text-[15px]">
                      {c.tel}
                    </a>
                    <br />
                    <a href={`mailto:${c.email}`} className="link-editorial text-[15px]">
                      {c.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[14px] text-ink-3">
            Full contact detail on each location page.
          </p>
        </div>
      </section>

      {/* ==================== ACKNOWLEDGEMENT OF COUNTRY ==================== */}
      <section id="acknowledgement" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Acknowledgement of Country</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Our respect for the{" "}
                <span className="italic font-display-warm">Traditional Owners.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                SMSG acknowledges the Traditional Owners of Country throughout Australia and their continuing connection to lands, waters and communities. We pay our respect to Aboriginal and Torres Strait Islander cultures, and Elders past, present and emerging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED PAGES ==================== */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Related</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Read on <span className="italic font-display-warm">to go deeper.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              More detail on how SMSG operates and what patients can expect.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                href: routes.about("our-story"),
                eyebrow: "About",
                title: "Our Story",
                body: "The founding narrative and how SMSG grew across three centres.",
              },
              {
                href: routes.about("awards-and-accreditations"),
                eyebrow: "About",
                title: "Awards & Accreditations",
                body: "Independent recognition of clinical and workplace standards.",
              },
              {
                href: routes.about("zero-workplace-violence-tolerance"),
                eyebrow: "Policy",
                title: "Zero Tolerance Policy",
                body: "Our commitment to a safe environment for staff and patients.",
              },
              {
                href: routes.about("feedback-and-complaints"),
                eyebrow: "Policy",
                title: "Feedback & Complaints",
                body: "How to raise a concern and what happens next.",
              },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="loc-card">
                <div className="lc-body">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--terra)" }}
                    />
                    <span className="allcaps text-ink-3">{r.eyebrow}</span>
                  </div>
                  <h3
                    className="font-display text-[22px] leading-[1.15]"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-2">{r.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
