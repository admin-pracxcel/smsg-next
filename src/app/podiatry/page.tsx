import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPodiatrySchema } from "./schema";

export const metadata: Metadata = {
  title: "Podiatry | Allied Health at SMSG",
  description:
    "Podiatry at Earlwood with Hana Rizk. Foot and lower limb assessment, treatment, and paediatric podiatry through Kids' Dr.",
  alternates: { canonical: "https://smsg.au/podiatry/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const MOSS_DOT_STYLE: React.CSSProperties = { background: "var(--moss)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Children and adults" },
  { label: "Duration", value: "30 to 60 minutes initial, 20 to 45 minutes follow-up" },
  { label: "Practitioner", value: "Hana Rizk (English, Arabic)" },
  { label: "Referral", value: "Not required; GP CDM Plan needed for Medicare rebate" },
];

const WHAT = [
  "General foot and nail care, including ingrown, thickened and difficult nails",
  "Biomechanical assessment for foot, ankle, knee and lower back pain",
  "Custom and off-the-shelf orthotics, plus footwear advice",
  "Diabetes foot care and annual reviews for patients with diabetes",
  "Paediatric podiatry through Kids' Dr, including gait and in-toeing",
  "Sports and overuse injuries, including plantar fasciitis and Achilles",
  "Post-injury rehabilitation for ankle sprains and lower limb surgery",
  "Skin and nail conditions, including fungal infections and plantar warts",
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>No. Podiatry can be booked directly. A GP referral under a Chronic Disease Management Plan is required to access the Medicare rebate.</p> },
  { q: "How long is a session?", a: <p>Initial appointments are typically 30 to 60 minutes depending on the assessment needed. Follow-up appointments are usually 20 to 45 minutes.</p> },
  { q: "Do I need to have diabetes to have a foot check?", a: <p>No. Foot checks are useful for people with diabetes because of the specific risks, but anyone with foot concerns can book.</p> },
  { q: "Can podiatrists cut toenails?", a: <p>Yes. Podiatrists provide nail care as part of routine podiatry, particularly for patients whose nails are difficult to manage due to thickness, shape, arthritis or vision.</p> },
  { q: "What about custom orthotics?", a: <p>Custom orthotics can be prescribed where the biomechanical assessment shows they&apos;ll help. Cost of custom orthotics is additional to the consultation and depends on the specific type.</p> },
  { q: "Can Hana see children?", a: <p>Yes. Paediatric podiatry is available through Kids&apos; Dr with Hana at Earlwood.</p> },
  { q: "What about corns and callouses?", a: <p>Yes. Corn and callus removal is straightforward podiatry care that provides immediate relief.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Hana Rizk. Adult and paediatric podiatry, with Kids' Dr coordination." },
];

const BOOK_TILES: Array<{ key: "earlwood"; sub: string }> = [
  { key: "earlwood", sub: "Hana Rizk. Adult and paediatric podiatry." },
];

export default function PodiatryPage() {
  const schema = buildPodiatrySchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Allied Health", href: `${routes.home()}#care` },
            { label: "Podiatry" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={MOSS_DOT_STYLE} />Allied Health · Podiatry</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Podiatry{" "}<span className="italic font-display-warm">at Earlwood.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Podiatry at Earlwood with Hana Rizk. Assessment and treatment of
                foot and lower limb concerns for children and adults, with
                paediatric podiatry offered through Kids&apos; Dr. English,
                Arabic.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a podiatry appointment<Arrow /></a>
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
          <Image src="/website-images/podiatry-about-bg.webp" alt="A podiatry treatment room at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(50, 55, 45, 0.90) 0%, rgba(80, 85, 65, 0.85) 55%, rgba(50, 55, 45, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">The practitioner</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Foot, ankle,{" "}<span className="italic font-display-warm" style={{ color: "var(--moss)" }}>lower limb.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Podiatrists work with the foot, ankle and lower limb. They assess how your feet function, treat conditions that affect the feet and lower limbs, and provide care for populations where foot health matters more than average, such as people with diabetes.</p>
              <p><strong>Hana Rizk</strong> is based at Earlwood and consults through Kids&apos; Dr for paediatric patients as well as adults across a range of foot concerns (English, Arabic). Some visits resolve a concern in a single session; others benefit from a course of appointments, orthotics, or coordinated care with your GP or physiotherapist.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What podiatry covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Care for the{" "}<span className="italic font-display-warm">feet and lower limbs.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">From straightforward nail care to biomechanical assessment for pain that&apos;s coming from the feet up.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/podiatry-detail.webp" alt="A podiatry examination at an SMSG centre." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
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
              <p>Your first appointment covers a history of the concern including any relevant medical background, a physical assessment of the feet and lower limbs, and a biomechanical assessment where it&apos;s relevant. Where immediate treatment is helpful (nail care, callus removal, dressings) it happens in the session.</p>
              <p>You leave with a discussion of findings and options, and a plan for follow-up where needed. For patients with diabetes, an annual foot check is generally included in diabetes care and can be arranged as part of your Chronic Disease Management Plan.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">At Earlwood{" "}<span className="italic font-display-warm">Medical Centre.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Podiatry is currently offered from Earlwood only. Reception can help coordinate if you usually attend Bangor or Sans Souci.</div>
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
              <p>Podiatry sessions are privately billed. Medicare rebates may apply under a Chronic Disease Management Plan prepared by your GP, which allows access to a limited number of rebated sessions per year. For patients with diabetes, an annual foot check is generally included in diabetes care and may be arranged as part of your Chronic Disease Management Plan.</p>
              <p>Private health fund rebates apply for patients with podiatry extras cover; check with your health fund. For NDIS participants, podiatry may be funded through your NDIS plan. Discuss at booking. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a podiatry appointment</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Podiatry with Hana Rizk can be booked directly. If you want a Medicare rebate under a Chronic Disease Management Plan, see your GP first. Reception can guide you through either path.</p>
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
            <Link href="/physiotherapy/" className="related-card"><span className="kicker">Related service</span><h3>Physiotherapy</h3><p>Musculoskeletal assessment and rehabilitation across the body.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/dietetics/" className="related-card"><span className="kicker">Related service</span><h3>Dietetics</h3><p>Nutrition support for diabetes and chronic disease.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Multidisciplinary paediatric care including paediatric podiatry.</p><span className="go">Meet the team <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
