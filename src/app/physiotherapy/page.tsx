import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPhysiotherapySchema } from "./schema";

export const metadata: Metadata = {
  title: "Physiotherapy | Allied Health at SMSG",
  description:
    "Physiotherapy for adults and children across Earlwood and Sans Souci. Musculoskeletal assessment, injury rehabilitation, and paediatric physiotherapy through Kids' Dr.",
  alternates: { canonical: "https://smsg.au/physiotherapy/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const MOSS_DOT_STYLE: React.CSSProperties = { background: "var(--moss)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Adults and children" },
  { label: "Duration", value: "30 to 45 minutes initial, 20 to 30 minutes follow-up" },
  { label: "Includes", value: "Musculoskeletal, rehab, paediatric, chronic pain" },
  { label: "Referral", value: "Not required; GP CDM Plan needed for Medicare rebate" },
];

const WHAT = [
  "Musculoskeletal assessment for neck, back, joint and sports concerns",
  "Injury rehabilitation, including post-surgical recovery programs",
  "Chronic pain support alongside medical and psychological care",
  "Paediatric physiotherapy through Kids' Dr with Daniel Tran",
  "Post-hospital rehabilitation for orthopaedic and cardiac recovery",
  "Balance assessment and fall prevention for older adults",
  "Return-to-activity and return-to-sport programs",
  "WorkCover and CTP referrals coordinated via Synergy Medical",
];

const FAQS = [
  { q: "Do I need a referral for physiotherapy?", a: <p>No. Physiotherapy can be booked directly. A GP referral under a Chronic Disease Management Plan is required if you want to access the Medicare rebate for eligible sessions.</p> },
  { q: "How long is a physiotherapy appointment?", a: <p>Initial appointments are typically 30 to 45 minutes. Follow-up appointments are usually 20 to 30 minutes.</p> },
  { q: "How many sessions will I need?", a: <p>Depends on the condition. Your physiotherapist will discuss expected timeframes at the first appointment.</p> },
  { q: "Can I claim on my private health fund?", a: <p>Yes, if you have physiotherapy extras cover. Ask reception to process the claim on the day using your health fund card.</p> },
  { q: "Is Daniel Tran a paediatric physiotherapist only?", a: <p>Daniel has a paediatric focus through Kids&apos; Dr, and also sees adults. Reception can confirm what he&apos;s currently taking bookings for.</p> },
  { q: "Do you do WorkCover or CTP physiotherapy?", a: <p>These claims are typically handled through our external partner Synergy Medical. Mention the claim type at booking so reception can direct you appropriately.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Antonio Kim and Daniel Tran." },
  { key: "sanssouci" as const, note: "Daniel Tran, with paediatric focus through Kids' Dr." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Antonio Kim, Daniel Tran (adult and paediatric)" },
  { key: "sanssouci", sub: "Daniel Tran, paediatric focus through Kids' Dr" },
];

export default function PhysiotherapyPage() {
  const schema = buildPhysiotherapySchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Allied Health", href: `${routes.home()}#care` },
            { label: "Physiotherapy" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={MOSS_DOT_STYLE} />Allied Health · Physiotherapy</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Physiotherapy{" "}<span className="italic font-display-warm">for movement.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Physiotherapy for adults and children across Earlwood and Sans
                Souci. Assessment and management of musculoskeletal concerns,
                injury rehabilitation, and paediatric physiotherapy through
                Kids&apos; Dr. Book directly, or on a GP referral if you want to
                access a Medicare rebate.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a physio appointment<Arrow /></a>
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
          <Image src="/website-images/physiotherapy-about-bg.webp" alt="A physiotherapy consulting room at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(50, 55, 45, 0.90) 0%, rgba(80, 85, 65, 0.85) 55%, rgba(50, 55, 45, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">How it works at SMSG</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Movement, function,{" "}<span className="italic font-display-warm" style={{ color: "var(--moss)" }}>a plan.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Physiotherapy addresses movement and function. Physiotherapists assess how you move, identify what&apos;s contributing to pain or restriction, and work with you on treatment that reduces symptoms and improves function over time.</p>
              <p>Two physiotherapists consult at SMSG. Antonio Kim sees adult patients at Earlwood (English, Korean). Daniel Tran consults across Earlwood and Sans Souci with a paediatric focus through Kids&apos; Dr, and also sees adults (English, Vietnamese). Physiotherapy sits within general adult care and, for children, within our Kids&apos; Dr multidisciplinary team.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What physiotherapy covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Assessment, treatment,{" "}<span className="italic font-display-warm">rehab that lasts.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Most concerns benefit from a short course of appointments rather than a single visit. Your physiotherapist maps out what to expect at the first session.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/physiotherapy-detail.webp" alt="A physiotherapy assessment at an SMSG centre." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={MOSS_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What happens in an appointment</span><h2 className="font-display h-section mt-3 max-w-[18ch]">The first{" "}<span className="italic font-display-warm">visit.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Your first appointment is a proper conversation. Your physio takes a detailed history of what&apos;s brought you in, examines the area of concern, and talks through the likely contributors and the treatment options.</p>
              <p>Where hands-on treatment is helpful, it happens in the first session. You leave with an exercise program to practise between visits and a plan for follow-up. Physiotherapy is generally not a single-session fix; most conditions benefit from a course of appointments spaced over weeks to months.</p>
              <p>For paediatric appointments with Daniel Tran, sessions are structured around the child&apos;s age and situation, and family members are welcome to participate. Where care is coordinated with a Kids&apos; Dr paediatrician, findings feed into the wider multidisciplinary picture.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Earlwood and{" "}<span className="italic font-display-warm">Sans Souci.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Physiotherapy is currently offered at two of the three SMSG centres. Reception can advise on which physio suits your concern.</div>
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
              <p>Physiotherapy sessions are privately billed. Medicare rebates may apply under a Chronic Disease Management Plan prepared by your GP, which typically allows access to a limited number of bulk-billed or partially rebated sessions per year for eligible patients.</p>
              <p>Private health fund rebates apply for patients with physiotherapy extras cover; check with your health fund. Reception can process the claim on the day using your health fund card. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a physio appointment</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Physiotherapy can be booked directly. If you want a Medicare rebate under a Chronic Disease Management Plan, see your GP first. Reception can guide you through either path.</p>
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
            <Link href="/psychology-and-counselling/" className="related-card"><span className="kicker">Related service</span><h3>Psychology &amp; Counselling</h3><p>Mental health support alongside physical rehabilitation.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/podiatry/" className="related-card"><span className="kicker">Related service</span><h3>Podiatry</h3><p>Foot, ankle and lower limb care with Hana Rizk at Earlwood.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Multidisciplinary paediatric care including paediatric physiotherapy.</p><span className="go">Meet the team <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
