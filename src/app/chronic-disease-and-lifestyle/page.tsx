import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildChronicDiseaseSchema } from "./schema";

export const metadata: Metadata = {
  title: "Chronic Disease & Lifestyle | SMSG",
  description:
    "Chronic Disease Management Plans, smoking cessation, diabetes and asthma management, and medications review across all three SMSG centres.",
  alternates: { canonical: "https://smsg.au/chronic-disease-and-lifestyle/" },
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
  { label: "Suitable for", value: "Anyone managing an ongoing health condition" },
  { label: "Duration", value: "Standard or longer, depending on the review" },
  { label: "Includes", value: "CDM Plans, medication reviews, quit support" },
  { label: "Referral", value: "Not required" },
];

const WHAT = [
  "Chronic Disease Management Plans (also called GP Management Plans)",
  "Team Care Arrangements coordinating GP, allied health and specialists",
  "Bulk-billed allied health sessions through a CDM Plan (up to five per year)",
  "Diabetes management including monitoring, medications and lifestyle change",
  "Asthma and COPD management with spirometry and action plans",
  "Smoking cessation support including nicotine replacement and prescription options",
  "Medications review during appointments or via a formal Home Medicines Review",
  "Coordination with endocrinology, respiratory and cardiology at Excelsia",
];

const FAQS = [
  { q: "Do I need a referral for a Chronic Disease Management Plan?", a: <p>No. Plans are prepared by your GP directly. You need to have an eligible condition and typically an established relationship with the practice.</p> },
  { q: "How often is the plan reviewed?", a: <p>Plans are reviewed at defined intervals, typically every 3 to 6 months, depending on your condition.</p> },
  { q: "Can I access allied health without a CDM Plan?", a: <p>Yes. You can see allied health practitioners privately at any time. A CDM Plan opens access to bulk-billed sessions under Medicare.</p> },
  { q: "What's the difference between a CDM Plan and a Team Care Arrangement?", a: <p>A GP Management Plan (part of a CDM Plan) is prepared by your GP. A Team Care Arrangement is prepared when other providers are involved in your care. Both are usually done together for patients accessing bulk-billed allied health.</p> },
  { q: "Can I get help to quit smoking without a CDM Plan?", a: <p>Yes. Smoking cessation support can be provided in a standard consultation with your GP, and Quitline is a free national resource on 13 78 48.</p> },
  { q: "Who prepares a Home Medicines Review?", a: <p>Your GP refers to an accredited pharmacist. The pharmacist visits you at home and prepares a report for your GP to act on.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "All GPs. On-site allied health support." },
  { key: "bangor" as const, note: "All GPs." },
  { key: "sanssouci" as const, note: "All GPs." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Chronic disease reviews, care plans, medication reviews" },
  { key: "bangor", sub: "Chronic disease reviews and care plans" },
  { key: "sanssouci", sub: "Chronic disease reviews and care plans" },
];

export default function ChronicDiseasePage() {
  const schema = buildChronicDiseaseSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "Chronic Disease & Lifestyle" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Chronic Disease Management</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Chronic disease{" "}<span className="italic font-display-warm">and lifestyle.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Managing an ongoing health condition well is about small,
                consistent steps over time. Your GP is the coordinator,
                keeping the plan on track, watching for what changes, and
                looping in specialists and allied health where useful.
                Available across all three SMSG centres.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book with your GP<Arrow /></a>
                <a href="#what" className="btn-outline">What&apos;s included<Arrow /></a>
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
          <Image src="/website-images/chronic-disease-and-lifestyle-about-bg.webp" alt="Reviewing a care plan during a GP appointment." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About chronic disease care</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Steady care,{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>over time.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Chronic Disease Management (CDM) Plans, also called GP Management Plans, are Medicare-funded structured plans for patients with a chronic health condition. They provide a written framework for managing your condition, coordinating care between your GP and other providers, and reviewing progress at set intervals. CDM Plans open access to bulk-billed allied health sessions, which is particularly valuable when a dietitian, physiotherapist, psychologist or podiatrist is part of the picture.</p>
              <p>Conditions commonly managed under a plan include diabetes, asthma, chronic obstructive pulmonary disease (COPD), heart disease, chronic kidney disease, mental health conditions, arthritis, and other long-term illnesses. For conditions that need specialist input, referral pathways to{" "}<Link href="/excelsia-specialist-centre/" className="link-editorial">Excelsia</Link>{" "}are coordinated by your GP.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What&apos;s covered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Care plans, quit support,{" "}<span className="italic font-display-warm">and steady review.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Quitting smoking isn&apos;t a single decision; it&apos;s often a series of attempts. Support at each attempt substantially improves the chance of long-term success.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/chronic-disease-and-lifestyle-detail.webp" alt="Home monitoring supports a chronic disease management plan." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Diabetes, asthma and medications</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Coordinated,{" "}<span className="italic font-display-warm">not siloed.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p><strong>Diabetes.</strong> Management is coordinated between your GP and, where relevant, an endocrinologist, dietitian, diabetes educator, and other allied health. Care includes regular monitoring of glucose, cholesterol, kidney function, eyes, feet, and cardiovascular risk. Medications are adjusted based on how you&apos;re going. For Type 1 or complex Type 2 diabetes, endocrinologist input at Excelsia is available. Prevention and reversal of pre-diabetes with weight, diet, exercise and, where appropriate, medication can substantially reduce risk of progression.</p>
              <p><strong>Asthma and COPD.</strong> Both involve airway inflammation and are managed with a combination of medication, avoiding triggers, and monitoring lung function. Your GP confirms the diagnosis with spirometry where relevant, establishes a medication plan, prepares an Asthma Action Plan or COPD Action Plan, reviews control at set intervals, and adjusts treatment as your condition evolves. For airways that are difficult to control,{" "}<Link href="/respiratory-and-sleep-medicine/" className="link-editorial">respiratory specialist input</Link>{" "}at Excelsia is available.</p>
              <p><strong>Medications review.</strong> Reviewing medications regularly is part of good care. Multiple medications can interact, some may no longer be needed, and some may benefit from a different dose or timing. Your GP can review during a routine appointment, or a formal Home Medicines Review can be arranged. That involves an accredited pharmacist visiting you at home, followed by a written report to your GP, who then discusses findings with you. Medicare-funded for eligible patients.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Chronic disease and lifestyle care is available with any SMSG GP at any of our three centres, with coordinated allied health support where needed.</div>
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
              <p>Chronic Disease Management Plans, care plan reviews, and Home Medicines Reviews are Medicare-funded services, and are typically bulk-billed for eligible patients. Standard consultations for chronic disease management follow the same billing arrangements as other consultations. Longer appointments (for care plan preparation, complex reviews, or comprehensive assessment) may attract a private fee with a Medicare rebate applying.</p>
              <p>Bulk-billed allied health sessions accessed through a CDM Plan are Medicare-funded up to the annual entitlement (currently five sessions per calendar year across all allied health under a CDM Plan). Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with your GP</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Chronic disease reviews and care plans are GP services. No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href="/mental-health-care/" className="related-card"><span className="kicker">Related service</span><h3>Mental Health Care</h3><p>Mental Health Care Plans and psychology support.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/excelsia-specialist-centre/" className="related-card"><span className="kicker">Sub-brand</span><h3>Excelsia Specialist Centre</h3><p>Endocrinology, respiratory and cardiology referral pathways.</p><span className="go">Meet the team <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
