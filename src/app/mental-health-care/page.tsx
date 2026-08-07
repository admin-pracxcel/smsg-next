import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildMentalHealthSchema } from "./schema";

export const metadata: Metadata = {
  title: "Mental Health Care | SMSG",
  description:
    "GP-led mental health care, Mental Health Care Plans, and referral to our psychology and counselling team across Earlwood, Bangor and Sans Souci.",
  alternates: { canonical: "https://smsg.au/mental-health-care/" },
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
  { label: "Suitable for", value: "Adults, adolescents and children" },
  { label: "Duration", value: "30 to 60 minutes for a care plan appointment" },
  { label: "Includes", value: "GP care, Care Plans, psychology and counselling" },
  { label: "Referral", value: "Not required for GP; referral through plan for psychology" },
];

const WHAT = [
  "GP consultations for anxiety, depression, adjustment and life stressors",
  "Mental Health Care Plans opening access to up to ten Medicare-rebated sessions",
  "Referral to psychology, counselling, social work or occupational therapy",
  "Adult psychology across anxiety, depression, grief, trauma and life transitions",
  "Paediatric psychology through Kids' Dr for children and adolescents",
  "Perinatal and women's mental health coordinated with Aurora",
  "Counselling and psychotherapy for adults, adolescents and families",
  "Coordination with external psychiatry where specialist input is needed",
];

const FAQS = [
  { q: "Do I need a Mental Health Care Plan to see a psychologist?", a: <p>No, but it makes the sessions Medicare-rebatable. You can see a psychologist privately without a plan, and this may suit some patients (particularly where confidentiality preferences make a formal plan uncomfortable).</p> },
  { q: "How long is the Mental Health Care Plan consultation?", a: <p>It&apos;s a longer appointment than a standard consultation, typically 30 to 60 minutes.</p> },
  { q: "Can I see any psychologist under my Mental Health Care Plan?", a: <p>The plan can refer to any registered psychologist or allied mental health practitioner who bulk-bills or privately bills with a Medicare rebate. Your GP typically refers within SMSG for continuity of care, but you can request a specific practitioner.</p> },
  { q: "What if I need urgent mental health support?", a: <p>For a mental health crisis, dial 000 or attend an emergency department. For urgent but not life-threatening support, Lifeline (13 11 14) is available 24/7. See our{" "}<Link href="/patient-information/emergency-information/" className="link-editorial">Emergency Information page</Link>{" "}for the full list of crisis support numbers.</p> },
  { q: "What about children and adolescents?", a: <p>Children and adolescents can access mental health care through your GP and{" "}<Link href="/kids-dr/" className="link-editorial">Kids&apos; Dr</Link>. Sandra Bell, Sue Boursiani and Cara Chillari work with young people.</p> },
  { q: "Does SMSG have a psychiatrist?", a: <p>SMSG does not currently have a psychiatrist on-site. Where psychiatric review is needed, your GP arranges a referral to an appropriate external specialist.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "All GPs. Psychology and counselling on-site." },
  { key: "bangor" as const, note: "All GPs. Julia Magrin provides counselling." },
  { key: "sanssouci" as const, note: "All GPs. Nita Hidalgo, Sue Boursiani, Cara Chillari and Julia Magrin provide psychology and counselling here." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "GP mental health care, on-site psychology and counselling" },
  { key: "bangor", sub: "GP mental health care, counselling with Julia Magrin" },
  { key: "sanssouci", sub: "GP mental health care, psychology and counselling" },
];

export default function MentalHealthCarePage() {
  const schema = buildMentalHealthSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "Mental Health Care" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Mental Health Care</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Mental health{" "}<span className="italic font-display-warm">care.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Your GP is often the first point of contact for mental health
                concerns, and the coordinator for ongoing care. From an
                initial conversation through a Mental Health Care Plan,
                referral to a psychologist or counsellor, and ongoing review,
                care is available across all three SMSG centres.
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
          <Image src="/website-images/mental-health-care-about-bg.webp" alt="A mental health consulting space at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">How it works at SMSG</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Right approach{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>for you.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Mental health concerns don&apos;t fit a single pathway. Some patients need one or two conversations with their GP and a plan to try things at home. Others benefit from a Mental Health Care Plan and structured therapy. Some need specialist psychiatric input alongside GP-led care. Your GP works with you to find the right approach.</p>
              <p>A Mental Health Care Plan is a Medicare-funded structured plan prepared by your GP. It documents your mental health concern, the treatment plan, and the referral pathway to a psychologist, counsellor, social worker, or occupational therapist. Under the plan, you can access up to ten Medicare-rebated psychology or allied mental health sessions per calendar year. The first six sessions are recommended and reviewed by your GP, with the option of a further four sessions with GP review.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What mental health care covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Conversations, care plans,{" "}<span className="italic font-display-warm">structured therapy.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Not every concern needs a formal plan or a referral. Sometimes the right approach is regular check-in appointments with your GP while you work through what&apos;s happening.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/mental-health-care-detail.webp" alt="Mental wellbeing support at an SMSG centre." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Counselling and psychology at SMSG</span><h2 className="font-display h-section mt-3 max-w-[18ch]">A team{" "}<span className="italic font-display-warm">across the group.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>SMSG has a team of psychologists, counsellors and a clinical psychologist who work with adults, adolescents and children across a range of presentations. Referral is through your GP under a Mental Health Care Plan, or you can book directly.</p>
              <p><strong>Adult psychology.</strong> Anxiety, depression, adjustment concerns, grief, trauma, relationship concerns, life transitions.</p>
              <p><strong>Perinatal and women&apos;s mental health.</strong> Coordinated with{" "}<Link href="/aurora-women-and-babies-health/" className="link-editorial">Aurora Women &amp; Babies Health</Link>{" "}where relevant.</p>
              <p><strong>Paediatric psychology.</strong> Sandra Bell, Sue Boursiani and Cara Chillari work with children and adolescents through Kids&apos; Dr.</p>
              <p><strong>Counselling and psychotherapy.</strong> Julia Magrin (Bangor and Sans Souci) and Thao Tammy Trang (Earlwood) offer counselling and psychotherapy for adults, adolescents and families.</p>
              <p><strong>Clinical psychology.</strong> Nita Hidalgo (Sans Souci and Earlwood) provides clinical psychology within Aurora.</p>
              <p>Your GP can also prescribe and monitor mental health medications, provide counselling within GP consultations, coordinate care with specialists, support you through a difficult period without formal therapy, or refer to specialist psychiatric care where the situation calls for it.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Mental health care is available with any SMSG GP at any of our three centres, with psychology and counselling available at all three sites.</div>
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
              <p>Standard GP consultations for mental health concerns are billed under standard consultation rules. Mental Health Care Plan preparation attracts a specific Medicare item and is a longer consultation. Care plan reviews are shorter appointments with their own Medicare item.</p>
              <p>Psychology and counselling sessions under a Mental Health Care Plan attract a Medicare rebate. The gap between the session fee and the rebate varies by practitioner. Where a plan isn&apos;t in place, psychology or counselling sessions are privately billed without a Medicare rebate. Reception can confirm the specific gap for the psychologist or counsellor you&apos;re being referred to.</p>
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
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Mental health care starts with a GP consultation. No referral required. Contact reception at the centre closest to you, or book directly through Automed. If this is a crisis, dial 000 or call Lifeline on 13 11 14.</p>
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
            <Link href="/chronic-disease-and-lifestyle/" className="related-card"><span className="kicker">Related service</span><h3>Chronic Disease &amp; Lifestyle</h3><p>Chronic Disease Management Plans and coordinated allied health.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/aurora-women-and-babies-health/" className="related-card"><span className="kicker">Sub-brand</span><h3>Aurora Women &amp; Babies Health</h3><p>Perinatal and women&apos;s mental health, coordinated with your GP.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Paediatric mental health with Sandra Bell, Sue Boursiani and Cara Chillari.</p><span className="go">Meet the team <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
