import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildDieteticsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Dietetics | Allied Health at SMSG",
  description:
    "Dietetics for children and adults across Earlwood, Bangor and Sans Souci. Two Accredited Practising Dietitians working across paediatric and adult nutrition.",
  alternates: { canonical: "https://smsg.au/dietetics/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const MOSS_DOT_STYLE: React.CSSProperties = { background: "var(--moss)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Children and adults" },
  { label: "Duration", value: "45 to 60 minutes initial, 30 to 45 minutes follow-up" },
  { label: "Team", value: "Two Accredited Practising Dietitians" },
  { label: "Referral", value: "Not required; GP CDM Plan needed for Medicare rebate" },
];

const WHAT = [
  "Chronic disease including diabetes, cardiovascular, kidney and liver",
  "Sustainable weight management that fits your life",
  "Gastrointestinal conditions including IBS, IBD, reflux, coeliac",
  "Food allergy and intolerance, structured elimination and reintroduction",
  "Paediatric nutrition through Kids' Dr, including fussy eating and growth",
  "Pregnancy and postnatal nutrition, coordinated with Aurora",
  "Older adult nutrition, including unintended weight loss",
  "Eating concerns and disordered eating, alongside psychology and medical review",
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>No. Dietetics can be booked directly. A GP referral under a Chronic Disease Management Plan is required to access the Medicare rebate.</p> },
  { q: "How long is a session?", a: <p>Initial appointments are typically 45 to 60 minutes. Follow-up appointments are usually 30 to 45 minutes.</p> },
  { q: "How many sessions will I need?", a: <p>That varies substantially by concern. Your dietitian discusses expected timeframes at the first session.</p> },
  { q: "Do dietitians provide meal plans?", a: <p>Sometimes. Meal plans work for some patients and not others. Dietitians typically focus on strategies you can adapt over time rather than fixed plans that may not fit your life beyond the short term.</p> },
  { q: "Are dietitians the same as nutritionists?", a: <p>No. In Australia, &quot;dietitian&quot; (specifically Accredited Practising Dietitian) is a regulated title requiring specific qualifications. &quot;Nutritionist&quot; is not regulated and covers a wider range of training. Both of our dietitians are Accredited Practising Dietitians.</p> },
  { q: "Can dietitians work with eating disorders?", a: <p>Yes. Dietetics for eating disorders is a specialised area and is coordinated with psychology and medical review. Discuss with reception whether the dietitians on our team are the right fit for your specific presentation.</p> },
  { q: "Can I use my NDIS plan?", a: <p>Yes, where dietetics is included in your plan. Discuss at booking.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Weekly dietetics sessions." },
  { key: "bangor" as const, note: "Weekly dietetics sessions." },
  { key: "sanssouci" as const, note: "Weekly dietetics sessions." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Dietitian consulting rooms" },
  { key: "bangor", sub: "Dietitian consulting rooms" },
  { key: "sanssouci", sub: "Dietitian consulting rooms" },
];

export default function DieteticsPage() {
  const schema = buildDieteticsSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Allied Health", href: `${routes.home()}#care` },
            { label: "Dietetics" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={MOSS_DOT_STYLE} />Allied Health · Dietetics</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Dietetics{" "}<span className="italic font-display-warm">that fits life.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Dietetics for children and adults across all three SMSG centres.
                Two Accredited Practising Dietitians working across paediatric
                nutrition (through Kids&apos; Dr) and adult dietary support. Book
                directly, or under a Chronic Disease Management Plan for a
                Medicare rebate.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a dietitian appointment<Arrow /></a>
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
          <Image src="/website-images/dietetics-about-bg.webp" alt="A dietetics consultation at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(50, 55, 45, 0.90) 0%, rgba(80, 85, 65, 0.85) 55%, rgba(50, 55, 45, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Evidence into{" "}<span className="italic font-display-warm" style={{ color: "var(--moss)" }}>practical change.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Accredited Practising Dietitians (APDs) are qualified to translate nutrition evidence into practical dietary changes for individuals. They work with the range of conditions where diet plays a role: chronic disease, weight management, gastrointestinal conditions, allergy and intolerance, feeding difficulties, and paediatric growth and nutrition.</p>
              <p>Dietetics at SMSG works across all three centres, with weekly sessions and coordination with your GP, paediatrician or specialist as relevant. Paediatric appointments are coordinated with Kids&apos; Dr; adult chronic disease work is coordinated with your GP under a Chronic Disease Management Plan where appropriate.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What dietetics covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Chronic disease, growth,{" "}<span className="italic font-display-warm">everything in between.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Dietetics generally involves more than one session. Behaviour change takes time, and follow-up appointments help you refine what&apos;s working and adjust what isn&apos;t.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/dietetics-detail.webp" alt="Meal planning notes after a dietetics consultation." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
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
              <p>Your first appointment starts with a detailed history of what you&apos;re currently eating, your medical history, medications, activity and lifestyle. Your dietitian then works with you on your goals and the specific concern that&apos;s brought you in.</p>
              <p>You leave with practical changes to try, a plan for follow-up where needed, and coordination with your GP or paediatrician where relevant. Follow-up appointments help refine what&apos;s working and adjust what isn&apos;t.</p>
              <p>For paediatric appointments, sessions are structured around the child&apos;s age and the situation. Where care is coordinated with a Kids&apos; Dr paediatrician, dietetic findings feed into the wider multidisciplinary picture.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Each dietitian has one or two home centres. Reception can advise on current availability if you have a specific person in mind.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.note}</div></div>); })}
          </div>
        </div>
      </section>

      {/* YOUR DIETITIANS — consolidated practitioner content */}
      <section id="specialist" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Your dietitians</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Two Accredited{" "}<span className="italic font-display-warm">Practising Dietitians.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                <Link href={routes.practitioner("xue-fei-fay-yu")} className="link-editorial">
                  Dr Xue-Fei Fay Yu (PhD)
                </Link>{" "}
                consults at Earlwood and Bangor, working with paediatric
                patients through Kids&apos; Dr and with adult patients across
                chronic disease and general nutrition. English, Cantonese and
                Mandarin.
              </p>
              <p>
                <Link href={routes.practitioner("stephanie-yu")} className="link-editorial">
                  Wing Tung Stephanie Yu
                </Link>{" "}
                consults at Earlwood and Sans Souci, working across paediatric
                and adult nutrition with a particular interest in weight
                management, gastrointestinal conditions and pregnancy
                nutrition. English and Mandarin.
              </p>
              <p>
                See either practitioner profile for full clinical background,
                qualifications, and consulting days. Reception can advise on
                current availability if you have a specific person in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Confirmed at{" "}<span className="italic font-display-warm">booking.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Dietetics sessions are privately billed. Medicare rebates may apply under a Chronic Disease Management Plan prepared by your GP, which allows access to a limited number of rebated sessions per year (currently up to five sessions per calendar year across all allied health under a CDM Plan).</p>
              <p>Private health fund rebates apply for patients with dietetics extras cover; check with your health fund. For NDIS participants, dietetics may be funded through your NDIS plan. Discuss at booking. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a dietitian appointment</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Dietetics can be booked directly. If you want a Medicare rebate under a Chronic Disease Management Plan, see your GP first. Reception can guide you through either path.</p>
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
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Multidisciplinary paediatric care including paediatric nutrition.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href="/endocrinology/" className="related-card"><span className="kicker">Related service</span><h3>Endocrinology</h3><p>Metabolic care and diabetes review, coordinated with dietetics.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/aurora-women-and-babies-health/" className="related-card"><span className="kicker">Sub-brand</span><h3>Aurora Women &amp; Babies Health</h3><p>Pregnancy nutrition and postnatal support.</p><span className="go">Meet the team <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
