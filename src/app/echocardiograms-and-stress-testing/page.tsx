import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildEchocardiogramsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Echocardiograms & Stress Testing | Diagnostics at SMSG",
  description:
    "Echocardiogram and cardiac stress testing services. Arranged on GP or specialist referral. Reception can confirm availability at each centre.",
  alternates: { canonical: "https://smsg.au/echocardiograms-and-stress-testing/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const DIAG_DOT_STYLE: React.CSSProperties = { background: "var(--excelsia)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Adults referred for cardiac assessment" },
  { label: "Referral", value: "Required from a GP or specialist" },
  { label: "Includes", value: "Echo, exercise stress test, stress echo, Holter, event monitor" },
  { label: "Duration", value: "30 to 60 minutes depending on the test" },
];

const WHAT = [
  "Echocardiogram: ultrasound assessment of heart chambers, valves and function",
  "Exercise stress test: ECG recording during treadmill or bike exertion",
  "Stress echocardiogram: ultrasound compared at rest and after exercise",
  "Holter monitor: continuous ECG recording over 24 to 48 hours",
  "Event monitor: longer-term monitoring for intermittent symptoms",
  "Assessment of chest pain, palpitations and unexplained breathlessness",
  "Monitoring of known valve disease, heart failure and cardiomyopathy",
  "Pre-operative assessment for patients with cardiovascular risk",
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>Yes. Cardiac diagnostic tests require a referral from a GP or specialist for the Medicare rebate to apply.</p> },
  { q: "Is an echocardiogram painful?", a: <p>No. An echocardiogram is a non-invasive ultrasound test. You feel the pressure of the probe on your chest and the gel used to improve image quality, but no pain.</p> },
  { q: "How do I prepare for a stress test?", a: <p>Wear comfortable clothing and walking shoes. Avoid caffeine for 24 hours before the test. Some medications may need to be paused; your doctor will let you know if this applies to you.</p> },
  { q: "Can I drive home after an echocardiogram or stress test?", a: <p>Yes, in most cases. If you&apos;re having a stress test with medication rather than exercise (rare in general practice), specific advice will be given.</p> },
  { q: "How long do results take?", a: <p>Reports are typically available within a few days. Discuss results with the ordering doctor.</p> },
  { q: "What about an ECG?", a: <p>Standard ECGs (single-time recording of heart electrical activity) are done in the treatment room, not through this pathway. See <Link href="/treatment-room-and-procedures/" className="link-editorial">Treatment Room &amp; Procedures</Link>.</p> },
  { q: "Are stress tests risky?", a: <p>Stress tests are generally safe. They&apos;re conducted with close monitoring and appropriate safety precautions. Your doctor will discuss any specific considerations for your situation.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Cardiology consulting rooms at Excelsia. Cardiac testing arranged through SMSG or a partner imaging provider." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Cardiology consulting rooms · GP referral required" },
  { key: "bangor", sub: "Book a GP appointment to arrange the referral. Testing at Earlwood or a partner provider." },
  { key: "sanssouci", sub: "Book a GP appointment to arrange the referral. Testing at Earlwood or a partner provider." },
];

export default function EchocardiogramsPage() {
  const schema = buildEchocardiogramsSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Diagnostics & On-Site", href: `${routes.home()}#care` },
            { label: "Echocardiograms & Stress Testing" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={DIAG_DOT_STYLE} />Diagnostics · Cardiac Testing</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Echocardiograms{" "}<span className="italic font-display-warm">and stress testing.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Echocardiogram and stress testing services for cardiac
                assessment. Referred by your GP or by an Excelsia cardiologist,
                and arranged through SMSG or with a partner provider depending
                on the specific test.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book with your GP<Arrow /></a>
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
          <Image src="/website-images/echocardiograms-and-stress-testing-about-bg.webp" alt="An echocardiogram and stress-testing room at Excelsia." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(40, 55, 60, 0.90) 0%, rgba(60, 80, 88, 0.85) 55%, rgba(40, 55, 60, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">How it works at SMSG</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Referral, testing,{" "}<span className="italic font-display-warm" style={{ color: "var(--excelsia)" }}>report.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Cardiac diagnostic tests provide the objective information cardiologists and GPs use to assess heart function, investigate symptoms, and monitor known conditions. The most common tests are echocardiograms (ultrasound of the heart) and stress tests (assessment of the heart under exertion).</p>
              <p>At SMSG, these tests are typically arranged after a consultation with your GP or with the cardiologist at Excelsia. Depending on the specific test and current arrangements, testing may be done on-site or with a partner cardiac imaging provider. Reception can confirm current arrangements for your specific test.</p>
              <p>For general ECGs (electrocardiograms), see <Link href="/treatment-room-and-procedures/" className="link-editorial" style={{ color: "var(--excelsia)" }}>Treatment Room &amp; Procedures</Link>. Standard ECGs are done on-site during a treatment room appointment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What the tests cover</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Function at rest,{" "}<span className="italic font-display-warm">function under load.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">An echocardiogram uses sound waves to image the heart. A stress test records how it behaves during exertion. A stress echo combines both. Holter and event monitors track rhythm over hours to weeks.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/echocardiograms-and-stress-testing-detail.webp" alt="An echocardiogram examination at Excelsia." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={DIAG_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">When these tests are ordered</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Reasons for{" "}<span className="italic font-display-warm">testing.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Common reasons include chest pain or discomfort, palpitations or awareness of the heart beating irregularly, and shortness of breath, particularly with exertion. Assessment of a murmur heard during a physical examination, or pre-operative assessment in patients with cardiovascular risk, are other frequent indications.</p>
              <p>Ongoing monitoring of known conditions (heart failure, valve disease, cardiomyopathy), family history requiring assessment, follow-up after a cardiac event, and evaluation of blood pressure that has affected heart structure are also common. Your GP or cardiologist will discuss which specific tests are appropriate for your situation.</p>
              <p>For irregular rhythms or intermittent symptoms, a Holter or event monitor may be arranged. These are fitted by our nursing team and returned for analysis after the recording period.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Cardiology sits at{" "}<span className="italic font-display-warm">Earlwood.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Cardiac diagnostic testing is arranged through SMSG at Earlwood, where Excelsia cardiology consults. For patients at Bangor or Sans Souci, tests may be arranged locally or referred to Earlwood or a partner imaging provider.</div>
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
              <p>Cardiac diagnostic tests are typically privately billed with a Medicare rebate applying for eligible tests. A GP or specialist referral is required for the Medicare rebate to apply.</p>
              <p>Fees vary by test type. Reception confirms specific fee arrangements and expected out-of-pocket cost when the test is arranged.</p>
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
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">arrange?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">To arrange cardiac diagnostic testing, book with your GP or through Excelsia cardiology (GP referral required). Reception can confirm which centre is best for your specific test.</p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => { const c = CLINICS[t.key]; const tel = c.phone.replace(/[^0-9+]/g, ""); return (<div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"><div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div><div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90"><a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a><a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a></div><a href={c.automedBase} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-2 text-[13.5px] text-cream/90 hover:text-cream transition">Book a GP appointment at {c.shortLabel}<Arrow className="arrow" /></a></div>); })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href="/cardiology/" className="related-card"><span className="kicker">Related service</span><h3>Cardiology</h3><p>Cardiology consultations at Excelsia for patients requiring specialist assessment.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/treatment-room-and-procedures/" className="related-card"><span className="kicker">Related service</span><h3>Treatment Room &amp; Procedures</h3><p>Standard ECG, spirometry and other in-clinic diagnostics.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/pathology-services/" className="related-card"><span className="kicker">Related service</span><h3>Pathology Services</h3><p>Blood tests and other specimen collection at all three centres.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
