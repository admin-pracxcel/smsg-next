import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPsychologySchema } from "./schema";

export const metadata: Metadata = {
  title: "Psychology & Counselling | Allied Health at SMSG",
  description:
    "Psychology and counselling for adults, adolescents and children across Earlwood, Bangor and Sans Souci. Book on a Mental Health Care Plan or directly.",
  alternates: { canonical: "https://smsg.au/psychology-and-counselling/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const MOSS_DOT_STYLE: React.CSSProperties = { background: "var(--moss)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Adults, adolescents and children" },
  { label: "Duration", value: "45 to 60 minutes per session" },
  { label: "Team", value: "Three psychologists, a clinical psychologist, two counsellors" },
  { label: "Referral", value: "Not required; MHCP needed for Medicare rebate" },
];

const WHAT = [
  "Anxiety, including generalised, social, health and panic",
  "Depression and low mood",
  "Adjustment to life changes, relationships and work stress",
  "Trauma and post-traumatic stress",
  "Grief, bereavement, and life transitions",
  "Perinatal mental health, coordinated with Aurora",
  "Children's mental health and behavioural concerns through Kids' Dr",
  "Neurodivergent-affirming support for autism, ADHD and related presentations",
];

const FAQS = [
  { q: "Do I need a referral to see a psychologist or counsellor?", a: <p>No. You can book directly. A GP-prepared Mental Health Care Plan is required if you want to access the Medicare rebate.</p> },
  { q: "How long is a session?", a: <p>Sessions are typically 45 to 60 minutes.</p> },
  { q: "How many sessions will I need?", a: <p>That varies substantially by presentation and goals. Some patients need a small number of sessions; others benefit from longer-term therapy. Your practitioner discusses this at your first session.</p> },
  { q: "Can I choose between a psychologist and a counsellor?", a: <p>Yes. If you&apos;re not sure, reception can help based on what you&apos;re seeing us about. Sometimes practitioners themselves suggest a different colleague after an initial consultation if they think another approach would fit better.</p> },
  { q: "Are your practitioners LGBTQIA+ affirming?", a: <p>Yes.</p> },
  { q: "Are your practitioners neurodivergence-affirming?", a: <p>Sandra Bell specifically describes her practice as neurodiversity-affirming. Other SMSG practitioners work with neurodivergent patients across their practice.</p> },
  { q: "Can children and adolescents be seen?", a: <p>Yes. Sandra Bell, Sue Boursiani and Cara Chillari work with children and adolescents through{" "}<Link href="/kids-dr/" className="link-editorial">Kids&apos; Dr</Link>.</p> },
  { q: "Is there a wait for appointments?", a: <p>Wait times vary by practitioner. Reception can advise on current availability.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Sandra Bell, Sue Boursiani, Cara Chillari, Nita Hidalgo, Thao Tammy Trang." },
  { key: "bangor" as const, note: "Julia Magrin (counselling and psychotherapy)." },
  { key: "sanssouci" as const, note: "Sue Boursiani, Cara Chillari, Nita Hidalgo, Julia Magrin." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Full psychology and counselling team on-site" },
  { key: "bangor", sub: "Counselling with Julia Magrin" },
  { key: "sanssouci", sub: "Psychology and counselling across four practitioners" },
];

export default function PsychologyAndCounsellingPage() {
  const schema = buildPsychologySchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Allied Health", href: `${routes.home()}#care` },
            { label: "Psychology & Counselling" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={MOSS_DOT_STYLE} />Allied Health · Psychology &amp; Counselling</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Psychology and{" "}<span className="italic font-display-warm">counselling.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Psychology and counselling across all three SMSG centres for
                adults, adolescents and children. Six practitioners covering a
                range of therapy modalities. Book on a Mental Health Care Plan
                for the Medicare rebate, or directly if you prefer.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book with a practitioner<Arrow /></a>
                <a href="#what" className="btn-outline">What we work with<Arrow /></a>
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
          <Image src="/website-images/psychology-and-counselling-about-bg.webp" alt="A psychology consulting room at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(50, 55, 45, 0.90) 0%, rgba(80, 85, 65, 0.85) 55%, rgba(50, 55, 45, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">The team</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Options,{" "}<span className="italic font-display-warm" style={{ color: "var(--moss)" }}>not one path.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Mental health support isn&apos;t one-size-fits-all. Different practitioners bring different training, therapy approaches, and personal styles. SMSG has psychologists, a clinical psychologist, and counsellors and psychotherapists so that the fit can be a real match rather than the only option on the day.</p>
              <p><strong>Sandra Bell</strong> (Earlwood) practises in a neurodiversity-affirming way and works within Kids&apos; Dr and Aurora. <strong>Sue Boursiani</strong> and <strong>Cara Chillari</strong> (Earlwood and Sans Souci) also work across Kids&apos; Dr and Aurora. <strong>Nita Hidalgo</strong> (Sans Souci and Earlwood) is our clinical psychologist, primarily within Aurora. <strong>Julia Magrin</strong> (Bangor and Sans Souci) is our Kids&apos; Dr counsellor, working in English and Portuguese. <strong>Thao Tammy Trang</strong> (Earlwood) offers counselling and psychotherapy in English and Vietnamese.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What we work with</span><h2 className="font-display h-section mt-3 max-w-[22ch]">A broad range{" "}<span className="italic font-display-warm">of concerns.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Some practitioners specialise in specific areas. Reception can help match you to the right person for what&apos;s bringing you in.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/psychology-and-counselling-detail.webp" alt="Reflection between counselling sessions." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={MOSS_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Psychology vs counselling</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Understanding the{" "}<span className="italic font-display-warm">difference.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>The distinction between psychology and counselling can be confusing. Broadly, <strong>psychologists</strong> are university-trained in psychological assessment and therapy, and are registered with AHPRA under the Psychology Board of Australia.</p>
              <p><strong>Clinical psychologists</strong> hold additional postgraduate training in the assessment and treatment of complex mental health conditions. Their sessions attract a slightly higher Medicare rebate under a Mental Health Care Plan.</p>
              <p><strong>Counsellors and psychotherapists</strong> are trained in therapy modalities and work with adults, adolescents and families across life concerns, relationship difficulties, grief, and adjustment. Counsellors are not registered with AHPRA but hold professional membership (for example, PACFA or ACA).</p>
              <p>In practice, the differences can be less important than finding the right practitioner for your situation. Reception can help you decide who to book with. For Medicare-rebated sessions, you&apos;ll need a{" "}<Link href="/mental-health-care/" className="link-editorial">Mental Health Care Plan</Link>{" "}prepared by your GP, giving access to up to ten rebated sessions per calendar year.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Each practitioner has one or two home centres. Reception can advise on current availability if you have a specific person in mind.</div>
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
              <p>Psychology and counselling sessions are privately billed. Under a Mental Health Care Plan, Medicare rebates apply for eligible sessions (with a higher rebate for clinical psychology). The gap between the session fee and the Medicare rebate varies by practitioner, and reception can confirm the specific amount for the person you&apos;re booking with.</p>
              <p>Private health fund rebates apply for patients with psychology or counselling extras cover; check with your health fund. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with a psychologist or counsellor</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">You can book directly with any of our psychologists or counsellors. If you&apos;d like a Medicare rebate, see your GP first for a Mental Health Care Plan. If this is a crisis, dial 000 or call Lifeline on 13 11 14.</p>
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
            <Link href="/mental-health-care/" className="related-card"><span className="kicker">Related service</span><h3>Mental Health Care</h3><p>GP-led mental health care and Mental Health Care Plans.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/victim-services-counselling/" className="related-card"><span className="kicker">Related service</span><h3>Victim Services Counselling</h3><p>Counselling for victims of violent crime in NSW.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Paediatric mental health with Sandra Bell, Sue Boursiani and Cara Chillari.</p><span className="go">Meet the team <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
