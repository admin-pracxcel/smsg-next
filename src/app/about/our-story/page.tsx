import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { buildOurStorySchema } from "./schema";

export const metadata: Metadata = {
  title: "Our Story | The History of Specialist Medical Services Group Since 2014",
  description:
    "Founded in 2014, SMSG has grown from a single Earlwood practice to three centres across Sydney, five clinical sub-brands, and 60+ independent practitioners.",
  alternates: { canonical: "https://smsg.au/about/our-story/" },
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

const CHAPTERS = [
  { id: "chapter-2014", label: "2014 · Earlwood" },
  { id: "chapter-growth", label: "2015-2018 · Growth" },
  { id: "chapter-2018", label: "2018 · Bangor" },
  { id: "chapter-2019", label: "2019 · Sans Souci" },
  { id: "chapter-subbrands", label: "The sub-brand era" },
  { id: "chapter-recognition", label: "2023-2024 · Recognition" },
  { id: "chapter-today", label: "Today" },
];

const SUB_BRANDS_ROWS = [
  {
    href: routes.subBrand("aurora"),
    dot: "#D9A79A",
    name: "Aurora Women & Babies Health",
    desc: "Women's healthcare across life stages.",
  },
  { href: routes.subBrand("kidsdr"), dot: "#E7B36B", name: "Kids' Dr", desc: "Developmental paediatrics and coordinated child health." },
  { href: routes.subBrand("excelsia"), dot: "#B76B4C", name: "Excelsia Specialist Centre", desc: "Consultant specialist consultations across nine disciplines." },
  { href: routes.subBrand("clarion"), dot: "#B44468", name: "Clarion Skin Cancer Clinic", desc: "Skin cancer medicine, from full-body checks through excision." },
  { href: routes.subBrand("sydneycosmedic"), dot: "#3B342C", name: "Sydney Cosmedic", desc: "Non-surgical cosmetic care for adult patients." },
];

export default function OurStoryPage() {
  const schema = buildOurStorySchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About", href: routes.aboutHub() },
              { label: "Our Story" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden paper-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-20 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#9A2F52" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-14 md:pb-18">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7 order-1">
              <span className="allcaps text-ink-3">About · Our Story</span>
              <h1 className="font-display h-brand max-w-[14ch] mt-5">
                Our <span className="italic font-display-warm">Story.</span>
              </h1>
              <p className="mt-6 lede max-w-[54ch] text-ink-2">
                From a single Earlwood practice in 2014 to three centres, five sub-brands, and 60-plus independent practitioners across Sydney. This is how SMSG grew, and why it grew the way it did.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6 max-w-[520px]">
                {[
                  { n: "2014", l: "Founded" },
                  { n: "3", l: "Centres today" },
                  { n: "5", l: "Sub-brands" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-black/15 pt-3">
                    <div
                      className="font-display text-[22px] md:text-[26px] leading-none"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[11px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 order-2">
              <figure className="story-hero">
                <div className="relative overflow-hidden rounded-[20px] border border-black/10 aspect-[5/6] bg-cream-paper">
                  {/* Layered brand-tint radial background · pulls in soft
                       accents from each sub-brand palette so the whole plate
                       reads like an SMSG-family composition */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(154,47,82,0.20) 0%, rgba(154,47,82,0.08) 35%, transparent 70%)," +
                        "radial-gradient(circle at 15% 20%, rgba(217,167,154,0.30) 0%, transparent 45%)," + // Aurora blush
                        "radial-gradient(circle at 85% 25%, rgba(233,184,74,0.25) 0%, transparent 45%)," + // Kids' Dr amber
                        "radial-gradient(circle at 82% 82%, rgba(110,138,90,0.22) 0%, transparent 45%)," + // Clarion moss
                        "radial-gradient(circle at 18% 85%, rgba(107,142,158,0.22) 0%, transparent 45%)," + // Excelsia slate
                        "linear-gradient(160deg, #fbf3ec 0%, #f5ede4 50%, #f0e4d8 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />

                  {/* Connector lines from centre to each sub-brand */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <g stroke="rgba(154,47,82,0.18)" strokeWidth="0.15" fill="none">
                      <line x1="50" y1="50" x2="50" y2="15" />
                      <line x1="50" y1="50" x2="82" y2="40" />
                      <line x1="50" y1="50" x2="70" y2="75" />
                      <line x1="50" y1="50" x2="30" y2="75" />
                      <line x1="50" y1="50" x2="18" y2="40" />
                    </g>
                  </svg>

                  {/* Sub-brand badges arranged around the centre */}
                  {[
                    {
                      label: "Aurora Women & Babies Health",
                      src: "/website-images/Aurora Logo.webp",
                      x: "50%",
                      y: "15%",
                    },
                    {
                      label: "Kids' Dr",
                      src: "/website-images/Kids Dr-01.webp",
                      x: "82%",
                      y: "40%",
                    },
                    {
                      label: "Excelsia Specialist Centre",
                      src: "/website-images/Excelsia-01.webp",
                      x: "70%",
                      y: "75%",
                    },
                    {
                      label: "Clarion Skin Cancer Clinic",
                      src: "/website-images/Clarion Skin Cancer Clinic.webp",
                      x: "30%",
                      y: "75%",
                    },
                    {
                      label: "Sydney Cosmedic",
                      src: "/website-images/Sydney Cosmedic.webp",
                      x: "18%",
                      y: "40%",
                    },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: b.x, top: b.y, width: "24%" }}
                    >
                      <div className="aspect-square rounded-full bg-cream-paper border border-black/10 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.28)] p-3 flex items-center justify-center">
                        <Image
                          src={b.src}
                          alt={b.label}
                          width={140}
                          height={140}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  ))}

                  {/* SMSG mark at centre */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: "50%", top: "50%", width: "40%" }}
                  >
                    <div className="aspect-square rounded-full bg-cream-paper border border-brand/25 shadow-[0_24px_50px_-24px_rgba(154,47,82,0.4)] p-5 flex items-center justify-center">
                      <Image
                        src="/website-images/Specialist Medical Services Group.webp"
                        alt="Specialist Medical Services Group"
                        width={220}
                        height={220}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STORY IN BRIEF (in-page nav) ==================== */}
      <section id="story-nav" className="relative border-b border-black/10">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-6 md:py-7">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="allcaps text-ink-3 mr-2">Chapters</span>
            {CHAPTERS.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="story-chip">
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section id="intro" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">In brief</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Services first, <span className="italic font-display-warm">locations second.</span>
              </h2>
              <div className="mt-6 space-y-2.5">
                {[
                  "Founded 2014, Earlwood",
                  "Three centres, five sub-brands",
                  "60+ independent practitioners",
                  "AGPAL-accredited group-wide",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3 text-[13.5px] text-ink-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent-deep, #6E1F3A)" }}
                    />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                Specialist Medical Services Group is a Sydney medical group built around a specific idea: that the quality and breadth of specialised care matter more than the number of locations. Our differentiation is not scale. It is the depth of the clinical services we offer, delivered by independent practitioners, supported by three neighbourhood centres.
              </p>
              <p>
                What follows is the chronological version of that story, from the founding of Earlwood Medical Centre in 2014 through to the five sub-brand structure we operate today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2014 · EARLWOOD ==================== */}
      <section id="chapter-2014" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">2014</span>
                <span className="cm-place">Earlwood</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[16ch]">
                The founding <span className="italic font-display-warm">practice.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                Specialist Medical Services Group was founded in 2014 by a team of health and management professionals with a specific view of what modern general practice ought to look like. Not corporate, not fragmented, and not built around volume.
              </p>
              <p>
                Earlwood Medical Centre opened that same year at 352-354 Homer Street. The founding premise was straightforward: build a general practice that gave patients access to a wider range of care under one roof, with clinicians who chose to be there. Family GPs sat alongside visiting consultant specialists, allied health, and a nursing team, all working from a shared clinical record so patients did not need to explain their history twice.
              </p>
              <p>
                The clinicians were, and are, independent practitioners. Each set their own billing arrangements, appointment structure and clinical scope. SMSG provided the premises, the reception team, and the coordination between disciplines that let a group of independent practitioners function as a connected team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2015-2018 · GROWTH ==================== */}
      <section id="chapter-growth" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">2015 &ndash; 2018</span>
                <span className="cm-place">Growing at Earlwood</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[18ch]">
                Awards, accreditation, and the{" "}
                <span className="italic font-display-warm">specialist visiting model.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                Within twelve months of opening, Earlwood Medical Centre won a Local Business Award in the Health Improvement category. The 2016 Local Business Award for Business Person of the Year followed. In 2018, the Australian Small Business Champion Award for Professional Medical Service.
              </p>
              <p>
                Behind the awards, the practice was building out the visiting specialist model that would eventually become Excelsia Specialist Centre. Consultant physicians in endocrinology, geriatrics, gastroenterology, nephrology, and other disciplines began holding weekly centres at Earlwood on referral from GPs inside and outside the practice. The premise was simple: give patients access to specialist consultations without a hospital outpatient list.
              </p>
              <p>
                Around the same time, the practice was pursuing full AGPAL accreditation against the RACGP Standards for General Practices. Accreditation was granted and has been maintained continuously since.
              </p>
              <ul className="cover-grid mt-8 pt-2">
                <li>2015 · Local Business Award, Health Improvement</li>
                <li>2016 · Business Person of the Year</li>
                <li>2018 · Small Business Champion</li>
                <li>Visiting specialist centres begin</li>
                <li>AGPAL accreditation granted</li>
                <li>Shared clinical record adopted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2018 · BANGOR ==================== */}
      <section id="chapter-2018" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">2018</span>
                <span className="cm-place">Bangor</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[18ch]">
                Bringing the model to the{" "}
                <span className="italic font-display-warm">Sutherland Shire.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                <Link href={routes.location("bangor")} className="link-editorial">
                  Bangor Medical Centre
                </Link>{" "}
                opened in 2018 inside the Bangor Shopping Centre at Shop 6, 121 Yala Road. The Sutherland Shire had a strong existing general practice landscape, but limited local access to specialist consultations. Bangor&apos;s opening premise was to give Shire residents access to the same visiting specialist rhythm that Earlwood patients had, without a trip into the city.
              </p>
              <p>
                Six family GPs, five consultant specialists, and a small allied health team consult from Bangor today. Dr Margaret Colwell, one of the founding Shire GPs, has been serving the local community for more than 27 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2019 · SANS SOUCI ==================== */}
      <section id="chapter-2019" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">2019</span>
                <span className="cm-place">Sans Souci</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[20ch]">
                A bayside centre and the primary base for{" "}
                <span className="italic font-display-warm">Kids&apos; Dr.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                <Link href={routes.location("sanssouci")} className="link-editorial">
                  Sans Souci Doctors
                </Link>{" "}
                opened in 2019 at 39 Campbell Street, bringing SMSG&apos;s model to the St George bayside. Sans Souci grew into something distinct across the group: it became the primary base for Kids&apos; Dr, our paediatric sub-brand, and the location of the largest allied health team.
              </p>
              <p>
                Today, Sans Souci hosts six family GPs, three paediatricians for Kids&apos; Dr, two visiting Excelsia specialists, and a seven-strong allied health team covering psychology, counselling, physiotherapy, dietetics and speech pathology. The centre sits close to Rocky Point Road and services the St George local government area from Kogarah through Ramsgate and Blakehurst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SUB-BRAND ERA ==================== */}
      <section id="chapter-subbrands" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">From 2022</span>
                <span className="cm-place">The sub-brand era</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[20ch]">
                Organising by service rather than{" "}
                <span className="italic font-display-warm">by location.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="body-editorial max-w-[64ch]">
                <p>
                  By 2022, SMSG had grown to a point where the group&apos;s clinical offering was wider than a single practice identity could reasonably explain. Antenatal shared care sat alongside developmental paediatrics, which sat alongside consultant nephrology, which sat alongside skin cancer excision, which sat alongside non-surgical cosmetic care. Patients trying to understand what SMSG offered often struggled to see the shape of it.
                </p>
                <p>
                  The response was the five clinical sub-brands the group operates today. Each sub-brand has its own name, its own team focus, and its own clinical pathway. Together they operate under SMSG&apos;s shared clinical, operational, and administrative infrastructure.
                </p>
              </div>

              <ul className="subbrand-list mt-8">
                {SUB_BRANDS_ROWS.map((sb) => (
                  <li key={sb.name}>
                    <Link href={sb.href} className="sb-row">
                      <span className="sb-dot" style={{ background: sb.dot }} />
                      <span className="sb-name">{sb.name}</span>
                      <span className="sb-desc">{sb.desc}</span>
                      <Arrow className="sb-go" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="mt-8 body-editorial max-w-[64ch]">
                The sub-brand structure is deliberate, and it is how SMSG thinks about itself internally too: services first, locations second.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2023-2024 · RECOGNITION ==================== */}
      <section id="chapter-recognition" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">2023 &ndash; 2024</span>
                <span className="cm-place">Formal recognition</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[18ch]">
                CESPHN Excellence in{" "}
                <span className="italic font-display-warm">General Practice.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                In 2023, Central Eastern Sydney Primary Health Network recognised SMSG with a Certificate of Excellence in General Practice. In 2024, the group returned to the same awards and was named the Winner of Excellence in General Practice for the CESPHN region.
              </p>
              <p>
                The 2020 Doctor of the Year recognition went to Dr Huiling Li, a Sans Souci GP who has been part of the SMSG group since our expansion into the bayside.
              </p>
              <p>
                SMSG is also Great Place to Work Certified, a workplace culture recognition based on employee survey data and independent cultural assessment. The full list of accreditations and awards is on the{" "}
                <Link href={routes.about("awards-and-accreditations")} className="link-editorial">
                  Awards &amp; Accreditations page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TODAY ==================== */}
      <section id="chapter-today" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="chapter-mark">
                <span className="cm-year">Today</span>
                <span className="cm-place">Three neighbourhoods</span>
              </div>
              <h2 className="font-display h-section mt-5 max-w-[20ch]">
                Three centres, five sub-brands,{" "}
                <span className="italic font-display-warm">one connected team.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="body-editorial max-w-[64ch]">
                <p>
                  Today SMSG operates from three centres with more than sixty consulting practitioners between them. Every clinician remains an independent practitioner. Every centre remains AGPAL-accredited. Every sub-brand runs its own clinical pathway while sharing the group&apos;s clinical record, reception infrastructure, and coordination systems.
                </p>
                <p>
                  The three neighbourhoods we operate in have their own personalities. Between them they cover a substantial slice of Sydney&apos;s general practice, women&apos;s health, paediatric and specialist needs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 md:gap-5 mt-8">
                {[
                  {
                    key: "earlwood" as const,
                    cap: "Founding site · 2014",
                    name: "Earlwood Medical Centre",
                    desc: "The founding site and the largest team.",
                    cta: "Visit Earlwood",
                  },
                  {
                    key: "bangor" as const,
                    cap: "Opened 2018",
                    name: "Bangor Medical Centre",
                    desc: "The Shire's family general practice with specialist depth.",
                    cta: "Visit Bangor",
                  },
                  {
                    key: "sanssouci" as const,
                    cap: "Opened 2019",
                    name: "Sans Souci Doctors",
                    desc: "Bayside, paediatric-focused, and allied-heavy.",
                    cta: "Visit Sans Souci",
                  },
                ].map((p) => (
                  <Link key={p.key} href={routes.location(p.key)} className="place-card">
                    <div className="pc-cap">{p.cap}</div>
                    <div className="pc-name">{p.name}</div>
                    <p className="pc-desc">{p.desc}</p>
                    <span className="pc-go">
                      {p.cta} <Arrow className="arrow" />
                    </span>
                  </Link>
                ))}
              </div>

              <p className="mt-10 body-editorial max-w-[64ch]">
                The story continues. Careers at SMSG are advertised as they open. Patient registrations are welcomed at any of the three centres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section id="related" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Related</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Read on to <span className="italic font-display-warm">go deeper.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div>
                {[
                  { href: routes.aboutHub(), name: "About SMSG", desc: "The clinical group overview." },
                  { href: routes.about("awards-and-accreditations"), name: "Awards & Accreditations", desc: "Independent recognition of clinical and workplace standards." },
                  { href: routes.location("earlwood"), name: "Earlwood Medical Centre", desc: "The founding centre." },
                  { href: routes.location("bangor"), name: "Bangor Medical Centre", desc: "The Shire centre." },
                  { href: routes.location("sanssouci"), name: "Sans Souci Doctors", desc: "The bayside and Kids' Dr base." },
                ].map((r) => (
                  <Link key={r.name} href={r.href || "/about/"} className="rel-row group">
                    <span className="name">{r.name}</span>
                    <span className="desc">{r.desc}</span>
                    <Arrow className="go" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
