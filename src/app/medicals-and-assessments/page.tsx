import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildMedicalsAssessmentsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Medicals & Assessments | SMSG",
  description:
    "Pre-employment medicals, driver's licence and commercial medicals, and Veterans' Service (VES) medical reviews across SMSG.",
  alternates: { canonical: "https://smsg.au/medicals-and-assessments/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const BRAND_CHIP_STYLE: React.CSSProperties = {
  background: "color-mix(in oklab, var(--brand) 14%, transparent)",
  borderColor: "color-mix(in oklab, var(--brand) 34%, transparent)",
  color: "var(--brand-deep)",
};
const BRAND_DOT_STYLE: React.CSSProperties = { background: "var(--brand)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Employment, transport licences, program reviews" },
  { label: "Duration", value: "15 minutes to 2 hours, depending on the assessment" },
  { label: "Includes", value: "Pre-employment, driver's licence, VES reviews" },
  { label: "Referral", value: "Not required" },
];

const WHAT = [
  "Pre-employment medicals under our Max-Health service",
  "Vision, hearing, spirometry and ECG where the role requires",
  "Musculoskeletal and fitness-for-role assessments",
  "Drug and alcohol screening as part of pre-employment medicals",
  "Standard driver's licence medicals for drivers over 75 or with declared conditions",
  "Commercial vehicle medicals under the National Assessing Fitness to Drive standard",
  "Veterans' Service (VES) medical reviews at Earlwood for eligible individuals",
  "Direct communication of results to the assessing party with your consent",
];

const FAQS = [
  { q: "Do I need a referral for a medical assessment?", a: <p>No. Medical assessments are booked directly.</p> },
  { q: "How long does a pre-employment medical take?", a: <p>Depending on what the employer requires, anywhere from 30 minutes to two hours. Simple medicals with just history and examination are shorter. Assessments including audiometry, spirometry, ECG, blood tests and drug and alcohol screening take longer. Reception will estimate at booking.</p> },
  { q: "What should I bring?", a: <p>Your identification, any forms provided by the employer or assessing body, glasses if you wear them, a list of current medications, and hearing aids if you use them.</p> },
  { q: "Can the results be sent directly to my employer?", a: <p>With your consent, yes. Your GP or reception can send results directly to the assessing party.</p> },
  { q: "How long does a driver's licence medical take?", a: <p>Typically 15 to 30 minutes for a standard medical. Longer if you have specific conditions requiring more detailed assessment.</p> },
  { q: "What happens if I don't pass the medical?", a: <p>The GP discusses the reasons with you. For some conditions, treatment or specialist input can restore fitness. For others, restrictions may apply to your licence or role. Your GP will explain your options.</p> },
  { q: "Can I do a medical without an appointment?", a: <p>No. Medical assessments require a dedicated booked appointment.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Pre-employment medicals, driver's licence medicals, VES reviews." },
  { key: "bangor" as const, note: "Pre-employment medicals, driver's licence medicals." },
  { key: "sanssouci" as const, note: "Pre-employment medicals, driver's licence medicals." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Pre-employment, driver's licence, and VES reviews" },
  { key: "bangor", sub: "Pre-employment and driver's licence medicals" },
  { key: "sanssouci", sub: "Pre-employment and driver's licence medicals" },
];

export default function MedicalsAssessmentsPage() {
  const schema = buildMedicalsAssessmentsSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "Medicals & Assessments" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Medicals &amp; Assessments</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Medicals{" "}<span className="italic font-display-warm">and assessments.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Medical assessments cover the range of standardised medicals
                people need for work, transport licences, and specific
                programs. Booked as a dedicated appointment with your GP,
                structured to whatever the assessing body requires.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a medical assessment<Arrow /></a>
                <a href="#what" className="btn-outline">What&apos;s covered<Arrow /></a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div><div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (<div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>))}
                <div className="g-foot"><span className="dot" /><span>Reception confirms the fee at booking</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/medicals-and-assessments-about-bg.webp" alt="A pre-employment medical setup at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the assessments</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Structured to what{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>the form asks.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Pre-employment medicals confirm you meet the health requirements for a new role. These are typically requested by an employer as part of the hiring process, particularly for roles involving physical demands, safety-critical tasks, or specific health requirements (transport, mining, construction, emergency services, healthcare). SMSG provides pre-employment medicals under our Max-Health service. Depending on the role and the employer&apos;s requirements, the medical may include medical history review, physical examination, vision, audiometry, spirometry, ECG, blood tests, drug and alcohol screening, musculoskeletal assessment, and fitness-for-role assessment.</p>
              <p>Driver&apos;s licence medicals are required for certain classes of licence in NSW and for older drivers. Common types include the standard driver&apos;s licence medical (required by Transport for NSW for drivers over 75 and for drivers with certain health conditions), commercial vehicle driver&apos;s licence medical (heavy vehicle, bus, taxi, ride-share) which follows the National Assessing Fitness to Drive standard, and learner driver medical where required. Assessment includes vision, hearing, cardiovascular assessment, examination for conditions that could affect driving safety, and completion of the Transport for NSW medical form.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What&apos;s covered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Employment, transport,{" "}<span className="italic font-display-warm">and program reviews.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Bring any forms provided by your employer or the assessing body, plus your identification. If the employer has specific requirements, mention this at booking so the appointment can be structured accordingly.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/medicals-and-assessments-detail.webp" alt="Equipment for a pre-employment or commercial medical." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Veterans&apos; Service (VES)</span><h2 className="font-display h-section mt-3 max-w-[18ch]">A specific{" "}<span className="italic font-display-warm">program pathway.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>SMSG Earlwood provides Veterans&apos; Service (VES) medical reviews for eligible individuals under the VES program. Veterans&apos; Service is a US-based network that arranges medical reviews for American veterans and other eligible individuals located in Australia, coordinating with the assessing body.</p>
              <p>For patients coordinating with the VES program, contact reception at Earlwood on {CLINICS.earlwood.phone} to discuss whether SMSG can assist with your specific requirements. More information on the VES program is available at{" "}<a href="https://www.ves.com/" target="_blank" rel="noopener" className="link-editorial">ves.com</a>.</p>
              <p>For all medical assessments, bring the assessment form from the requesting body, your identification, glasses if you wear them, a list of your medications, and any hearing aids you use. Some conditions may require specialist input alongside the GP assessment; where that&apos;s the case, your GP will coordinate the referral.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Some assessments may be more readily available at particular centres depending on the specific requirements. Reception can direct you.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.note}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Confirmed at{" "}<span className="italic font-display-warm">booking.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Medical assessments are typically privately billed. The fee reflects the length and complexity of the assessment, which varies significantly depending on what&apos;s required. Simple driver&apos;s medicals are shorter and less expensive than comprehensive pre-employment medicals with multiple components.</p>
              <p>Medical assessments for employment, licences and legal purposes are generally not eligible for a Medicare rebate, as they&apos;re not a Medicare-funded service. Reception confirms specific fees at booking based on the type of assessment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">FAQ</span><h2 className="font-display h-section mt-3 max-w-[16ch]">Common <span className="italic font-display-warm">questions.</span></h2></div>
            <div className="md:col-span-8">{FAQS.map((f, i) => (<details key={i} className="faq-item"><summary>{f.q}<Chev /></summary><div className="faq-body">{f.a}</div></details>))}</div>
          </div>
        </div>
      </section>

      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a medical assessment</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Medical assessments are booked directly with your GP. No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => { const c = CLINICS[t.key]; const tel = c.phone.replace(/[^0-9+]/g, ""); return (<div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"><div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div><div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90"><a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a><a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a></div><a href={c.automedBase} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-2 text-[13.5px] text-cream/90 hover:text-cream transition">Book online at {c.shortLabel}<Arrow className="arrow" /></a></div>); })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href="/general-practice-and-preventive-care/" className="related-card"><span className="kicker">Related service</span><h3>General Practice &amp; Preventive Care</h3><p>Health assessments and screening across every life stage.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/travel-medicine-and-vaccinations/" className="related-card"><span className="kicker">Related service</span><h3>Travel Medicine &amp; Vaccinations</h3><p>Pre-travel consultations and vaccinations.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/treatment-room-and-procedures/" className="related-card"><span className="kicker">Related service</span><h3>Treatment Room &amp; Procedures</h3><p>ECG, spirometry, audiology and other on-site diagnostics.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
