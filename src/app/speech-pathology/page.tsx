import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildSpeechPathologySchema } from "./schema";

export const metadata: Metadata = {
  title: "Speech Pathology | Allied Health at SMSG",
  description:
    "Speech pathology for children and adults across Earlwood and Sans Souci. Sarah Impellizzeri consults through Kids' Dr, with visiting speech therapy also available.",
  alternates: { canonical: "https://smsg.au/speech-pathology/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const MOSS_DOT_STYLE: React.CSSProperties = { background: "var(--moss)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Children (primary), and adults on request" },
  { label: "Duration", value: "45 to 60 minutes assessment, 30 to 45 minutes follow-up" },
  { label: "Primary practitioner", value: "Sarah Impellizzeri (SMSG, through Kids' Dr)" },
  { label: "Also available", value: "TLC Speech Therapy (visiting external service)" },
];

const WHAT = [
  "Speech sound production, articulation, and post-stroke changes",
  "Language development, understanding and expression",
  "Fluency concerns including stuttering and cluttering",
  "Voice concerns including hoarseness and vocal fatigue",
  "Swallowing difficulties (dysphagia) in adults and children",
  "Infant feeding, including breastfeeding, bottle and solids transitions",
  "Literacy support for reading, writing and spelling",
  "Autism and social communication within the Kids' Dr team",
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>No. Speech pathology can be booked directly. A GP referral under a Chronic Disease Management Plan is required to access the Medicare rebate.</p> },
  { q: "How long is a session?", a: <p>Sessions are typically 45 to 60 minutes for assessment and 30 to 45 minutes for follow-up.</p> },
  { q: "How many sessions will my child need?", a: <p>That varies significantly by the concern. Your speech pathologist will discuss expectations at the first session.</p> },
  { q: "Can Sarah see adults?", a: <p>Sarah&apos;s primary focus is paediatric through Kids&apos; Dr. Reception can confirm current availability for adult patients.</p> },
  { q: "What's the difference between Sarah and TLC?", a: <p>Sarah is part of the SMSG allied health team, working within Kids&apos; Dr. TLC is an external speech pathology service that rents rooms at SMSG. Both are qualified speech pathology services; the arrangements and fee structures differ.</p> },
  { q: "Can I use my NDIS plan?", a: <p>Yes, where speech pathology is included in your plan. Discuss at booking.</p> },
  { q: "Is speech pathology different from speech therapy?", a: <p>The two terms are used interchangeably in Australia. &quot;Speech pathology&quot; is the term used by the professional body (Speech Pathology Australia); &quot;speech therapy&quot; is commonly used in everyday language.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Sarah Impellizzeri. TLC visiting service consults from Earlwood on Saturdays." },
  { key: "sanssouci" as const, note: "Sarah Impellizzeri. TLC visiting service also consults from Sans Souci." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Sarah Impellizzeri, through Kids' Dr" },
  { key: "sanssouci", sub: "Sarah Impellizzeri, through Kids' Dr" },
];

export default function SpeechPathologyPage() {
  const schema = buildSpeechPathologySchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Allied Health", href: `${routes.home()}#care` },
            { label: "Speech Pathology" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={MOSS_DOT_STYLE} />Allied Health · Speech Pathology</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Speech{" "}<span className="italic font-display-warm">pathology.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Speech pathology for children and adults. Sarah Impellizzeri
                consults through Kids&apos; Dr at Earlwood and Sans Souci, with a
                visiting speech therapy service (TLC) also available on our
                premises at both centres.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book with Sarah<Arrow /></a>
                <a href="#tlc" className="btn-outline">About the TLC visiting service<Arrow /></a>
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
          <Image src="/website-images/speech-pathology-about-bg.webp" alt="A speech pathology session at Kids' Dr." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(50, 55, 45, 0.90) 0%, rgba(80, 85, 65, 0.85) 55%, rgba(50, 55, 45, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">The team</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Communication and{" "}<span className="italic font-display-warm" style={{ color: "var(--moss)" }}>swallowing care.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Speech pathologists work with communication and swallowing across the life course. They assess and treat concerns with speech (how words are produced), language (how words are understood and used), voice, fluency (stuttering), and swallowing.</p>
              <p><strong>Sarah Impellizzeri</strong> is a speech pathologist on our allied health team, consulting through Kids&apos; Dr at Earlwood and Sans Souci. Her practice is primarily paediatric, and she works alongside our Kids&apos; Dr paediatricians as part of a multidisciplinary approach to development, autism, ADHD and related presentations. Adult bookings are considered where availability allows.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What speech pathology covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Speech, language,{" "}<span className="italic font-display-warm">feeding, and voice.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">For children being assessed alongside a Kids&apos; Dr paediatrician, speech pathology forms part of the multidisciplinary picture.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/speech-pathology-detail.webp" alt="Speech pathology materials laid out for a session." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={MOSS_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section id="tlc" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Visiting service on our premises</span><h2 className="font-display h-section mt-3 max-w-[18ch]">TLC Speech{" "}<span className="italic font-display-warm">Therapy.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>TLC Speech Therapy is an external speech therapy service that consults from SMSG premises. TLC rents rooms at both Earlwood (Saturdays) and Sans Souci. Both TLC and Sarah are qualified speech pathology services; the arrangements and fee structures differ.</p>
              <p><strong>How to book.</strong> TLC bookings are handled by TLC directly, not through SMSG reception or Automed. Contact TLC to enquire about availability, fees, and appointment scheduling.</p>
              <p><strong>Fees.</strong> TLC Speech Therapy has its own fee structure and billing arrangements. Contact TLC directly for details.</p>
              <p>If you&apos;re unsure whether Sarah or TLC is the better fit for your situation, SMSG reception can help you understand the difference; the booking itself for TLC still happens through TLC.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Earlwood and{" "}<span className="italic font-display-warm">Sans Souci.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Sarah consults at both Earlwood and Sans Souci. TLC visits both premises independently.</div>
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
              <p>Speech pathology sessions with Sarah Impellizzeri are privately billed. Medicare rebates may apply under a Chronic Disease Management Plan prepared by your GP, which allows access to a limited number of rebated sessions per year.</p>
              <p>Private health fund rebates apply for patients with speech pathology extras cover; check with your health fund. For NDIS participants, speech pathology may be funded through your NDIS plan. Discuss with reception at booking.</p>
              <p>TLC Speech Therapy has its own fee structure and billing arrangements; contact TLC directly for details. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a speech pathology appointment</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">For Sarah Impellizzeri, book directly through Automed or contact reception at the centre closest to you. For TLC Speech Therapy, contact TLC directly (their contact details are held with TLC as the external provider).</p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => { const c = CLINICS[t.key]; const tel = c.phone.replace(/[^0-9+]/g, ""); return (<div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"><div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div><div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90"><a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a><a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a></div><a href={c.automedBase} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-2 text-[13.5px] text-cream/90 hover:text-cream transition">Book online at {c.shortLabel}<Arrow className="arrow" /></a></div>); })}
                <div className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25">
                  <div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>TLC Speech Therapy</div>
                  <div className="text-cream/70 text-[13px] mt-0.5">Visiting external service, on our premises</div>
                  <div className="mt-3 text-[14px] text-cream/85">Bookings and fees handled by TLC directly. Contact TLC to enquire.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Multidisciplinary paediatric care including speech pathology.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href="/autism-assessment/" className="related-card"><span className="kicker">Related service</span><h3>Autism Assessment</h3><p>Speech pathology forms part of the assessment.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/dietetics/" className="related-card"><span className="kicker">Related service</span><h3>Dietetics</h3><p>Feeding and nutrition support alongside speech.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
