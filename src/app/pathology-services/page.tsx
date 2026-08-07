import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPathologyServicesSchema } from "./schema";

export const metadata: Metadata = {
  title: "Pathology Services | Diagnostics at SMSG",
  description:
    "On-site pathology collection at Earlwood, Bangor and Sans Souci. Blood tests, urine, and other specimen collection for tests requested by your GP or specialist.",
  alternates: { canonical: "https://smsg.au/pathology-services/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const DIAG_DOT_STYLE: React.CSSProperties = { background: "var(--excelsia)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Anyone with a valid pathology request form" },
  { label: "Booking", value: "Walk in with your request form during opening hours" },
  { label: "Includes", value: "Blood, urine, microbiology, cytology, histology" },
  { label: "Turnaround", value: "Standard tests within 1 to 5 business days" },
];

const WHAT = [
  "Blood tests: full blood count, iron studies, thyroid, kidney and liver function",
  "Blood glucose, HbA1c, cholesterol and lipid profiles",
  "Hormone tests, vitamin levels and autoimmune markers",
  "Urine tests: urinalysis, culture, albumin-creatinine ratio",
  "Microbiology cultures: throat, wound and other swabs",
  "Faecal tests: occult blood, stool culture, calprotectin",
  "Cervical Screening Test samples and biopsy specimens",
  "Cardiac and other biomarkers where clinically ordered",
];

const FAQS = [
  { q: "Do I need to make an appointment for pathology?", a: <p>Not always. If you have a request form, you can attend reception during opening hours. For fasting bloods or timed samples, timing matters, so check with reception if you&apos;re unsure.</p> },
  { q: "Do I need to fast?", a: <p>Only for specific tests. Your GP will let you know if fasting is required. Fasting typically means no food or drink other than water for 8 to 12 hours before the test.</p> },
  { q: "Can I have pathology done at any SMSG centre?", a: <p>Yes. If your request form was written by an external doctor, you can still have the sample taken at any SMSG centre.</p> },
  { q: "Are all blood tests bulk-billed?", a: <p>Most standard blood tests are bulk-billed to Medicare. Some specialised tests and non-Medicare tests (drug screens for employment, insurance tests) attract a private fee. Your GP will let you know if this applies.</p> },
  { q: "How long do results take?", a: <p>Standard blood tests: 1 to 3 business days. Specialised tests: 1 to 5 business days. Some specialised pathology, including histology and genetic testing, can take up to 2 weeks.</p> },
  { q: "Can I have my Cervical Screening Test done here?", a: <p>Yes. Cervical Screening Tests are done during a consultation with a GP. See our <Link href="/cervical-screening/" className="link-editorial">Cervical Screening page</Link> for details.</p> },
  { q: "What if I can't reach reception for a result?", a: <p>Book a follow-up appointment with your GP. Results are the doctor&apos;s to explain and act on. See our <Link href={routes.patientInfo("results-policy")} className="link-editorial">Results Policy</Link>.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Available Monday to Friday and Saturday." },
  { key: "bangor" as const, note: "Available Monday to Friday." },
  { key: "sanssouci" as const, note: "Available Monday to Friday." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Walk in with a valid request form, or book a GP appointment." },
  { key: "bangor", sub: "Walk in with a valid request form, or book a GP appointment." },
  { key: "sanssouci", sub: "Walk in with a valid request form, or book a GP appointment." },
];

export default function PathologyServicesPage() {
  const schema = buildPathologyServicesSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Diagnostics & On-Site", href: `${routes.home()}#care` },
            { label: "Pathology Services" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={DIAG_DOT_STYLE} />Diagnostics · On-Site Pathology</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Pathology{" "}<span className="italic font-display-warm">services.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                On-site pathology collection at all three SMSG centres. Blood
                tests, urine samples, and other specimens collected during your
                visit and processed by our pathology partner, with results
                returned to your GP or specialist.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a GP appointment<Arrow /></a>
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
          <Image src="/website-images/pathology-services-about-bg.webp" alt="The pathology collection room at Earlwood Medical Centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(40, 55, 60, 0.90) 0%, rgba(60, 80, 88, 0.85) 55%, rgba(40, 55, 60, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">How it works at SMSG</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Ordered, collected,{" "}<span className="italic font-display-warm" style={{ color: "var(--excelsia)" }}>reported.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Pathology is the range of laboratory tests your doctor uses to investigate, diagnose and monitor health conditions. Blood tests are the most common, but pathology also includes urine tests, microbiology cultures, cytology, histology (tissue examination), and other specimen analysis.</p>
              <p>At SMSG, pathology collection is available on-site during opening hours. Your GP or specialist orders the test, you have your sample taken at reception or during your appointment, and the sample is processed by our pathology partner. Results are returned directly to the ordering doctor for review and follow-up.</p>
              <p>For samples that need to be taken in a specific way or at a specific time (fasting bloods, morning cortisol, timed samples), instructions are provided at the time of ordering.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What pathology covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Blood, urine,{" "}<span className="italic font-display-warm">and beyond.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Most tests are ordered by your GP or specialist during a consultation. If you already have a request form, walk in during opening hours.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/pathology-services-detail.webp" alt="Pathology collection setup at an SMSG centre." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={DIAG_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">How to have pathology done</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Two{" "}<span className="italic font-display-warm">paths.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>If your GP or specialist orders pathology during your appointment, the sample can often be taken on the day. For tests that require specific preparation such as fasting, you may return for the sample on another day.</p>
              <p>If you already have a request form from a previous consultation or from an external doctor, you can attend reception during opening hours to have the sample taken. Bring the request form with you.</p>
              <p>Some tests require fasting (no food or drink other than water) for a set period beforehand, and are typically taken first thing in the morning. Others must be taken at specific times of day (early morning cortisol) or under specific conditions. Your GP will explain the timing and preparation for your particular tests.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">All three{" "}<span className="italic font-display-warm">centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Pathology collection is available at every SMSG centre during opening hours. You can attend the centre closest to you regardless of where the request form was written.</div>
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
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Bulk-billed{" "}<span className="italic font-display-warm">where eligible.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Most pathology tests ordered under Medicare are bulk-billed, meaning there is no out-of-pocket cost for the patient. This includes standard blood tests, urine tests, and most routine investigations.</p>
              <p>Some specialised or specific tests are not eligible for a Medicare rebate and are privately billed. Non-Medicare pathology such as private tests, drug screens for employment or legal purposes, and specific insurance tests is charged privately. Your GP will let you know if this applies to a specific test being ordered.</p>
              <p>The consultation with your GP or specialist attracts its own fee, separate from the pathology tests ordered. Reception confirms specific fee arrangements at booking.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Getting your results</span><h2 className="font-display h-section mt-3 max-w-[16ch]">Back to your{" "}<span className="italic font-display-warm">doctor.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Results are returned to the ordering doctor, typically within 1 to 5 business days for standard tests. More specialised tests take longer. For non-urgent results, book a follow-up appointment with the ordering doctor to discuss them.</p>
              <p>See our <Link href={routes.patientInfo("results-policy")} className="link-editorial">Results Policy</Link> for details on how results are managed at SMSG. Reception can confirm whether a result has arrived and whether your doctor has reviewed it, but cannot interpret results or provide clinical advice about them.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative">
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Pathology collection</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">visit?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Walk in during opening hours with your request form, or book a GP appointment first if you need pathology ordered or discussed. Reception can confirm timing for fasting or specifically timed samples.</p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => { const c = CLINICS[t.key]; const tel = c.phone.replace(/[^0-9+]/g, ""); return (<div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"><div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div><div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90"><a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a><a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a></div><div className="mt-3 text-[13.5px] text-cream/80">Walk in with a valid request form during opening hours.</div><a href={c.automedBase} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 text-[13.5px] text-cream/90 hover:text-cream transition">Book a GP appointment at {c.shortLabel}<Arrow className="arrow" /></a></div>); })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href="/echocardiograms-and-stress-testing/" className="related-card"><span className="kicker">Related service</span><h3>Echocardiograms &amp; Stress Testing</h3><p>Cardiac diagnostics arranged on GP or cardiologist referral.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/treatment-room-and-procedures/" className="related-card"><span className="kicker">Related service</span><h3>Treatment Room &amp; Procedures</h3><p>ECG, spirometry, iron infusion, wound care and more.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href={routes.patientInfo("results-policy")} className="related-card"><span className="kicker">Patient information</span><h3>Results Policy</h3><p>How SMSG handles pathology and diagnostic results.</p><span className="go">Read the policy <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
