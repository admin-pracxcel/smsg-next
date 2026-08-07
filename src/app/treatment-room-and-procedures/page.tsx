import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildTreatmentRoomSchema } from "./schema";

export const metadata: Metadata = {
  title: "Treatment Room & Procedures | SMSG",
  description:
    "Wound care, iron infusions, ECG, spirometry, audiology, ear syringing and cryotherapy across SMSG centres. Minor procedures and diagnostics on-site.",
  alternates: { canonical: "https://smsg.au/treatment-room-and-procedures/" },
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
  { label: "Suitable for", value: "Patients needing minor procedures or diagnostics" },
  { label: "Duration", value: "15 to 60 minutes, depending on the procedure" },
  { label: "Includes", value: "Wound care, iron infusion, ECG, spirometry, cryotherapy" },
  { label: "Referral", value: "Not required" },
];

const WHAT = [
  "Wound care and dressings, including post-surgical and chronic wounds",
  "Iron infusion for iron deficiency not responding to oral supplements",
  "ECG for cardiovascular assessment or pre-medication screening",
  "Spirometry for asthma, COPD and lung function assessment",
  "Audiology and hearing tests for adults and children",
  "Ear syringing for wax causing hearing loss, discomfort or tinnitus",
  "Cryotherapy for warts, skin tags and actinic keratoses",
  "Coordination with your GP for follow-up and specialist referral",
];

const FAQS = [
  { q: "Do I need a referral for treatment room services?", a: <p>No. Treatment room services are part of GP care.</p> },
  { q: "How do I book an iron infusion?", a: <p>Iron infusion requires a GP consultation first, to review your iron studies and confirm it&apos;s appropriate. The infusion is then scheduled as a separate appointment.</p> },
  { q: "How long does an iron infusion take?", a: <p>The infusion itself takes 15 to 30 minutes. With the monitoring period afterwards, plan for about an hour.</p> },
  { q: "Do you do child immunisations in the treatment room?", a: <p>Child immunisations are covered under{" "}<Link href="/travel-medicine-and-vaccinations/" className="link-editorial">Travel Medicine and Vaccinations</Link>, and involve booking with a GP.</p> },
  { q: "Do you do cervical screening in the treatment room?", a: <p>Cervical screening is done during a GP consultation, generally with an{" "}<Link href="/aurora-women-and-babies-health/" className="link-editorial">Aurora</Link>{" "}GP.</p> },
  { q: "Can I book cryotherapy for warts as a first appointment?", a: <p>Book a GP consultation first, so your GP can assess whether cryotherapy is the right treatment for the specific lesion. Cryotherapy may be done in the same appointment or scheduled separately.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Full range of treatment room services." },
  { key: "bangor" as const, note: "Treatment room services." },
  { key: "sanssouci" as const, note: "Treatment room services." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Full range of procedures, iron infusions, diagnostics" },
  { key: "bangor", sub: "Treatment room procedures and diagnostics" },
  { key: "sanssouci", sub: "Treatment room procedures and diagnostics" },
];

export default function TreatmentRoomPage() {
  const schema = buildTreatmentRoomSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "Treatment Room & Procedures" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Treatment Room &amp; Procedures</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Treatment room{" "}<span className="italic font-display-warm">and procedures.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                The treatment room is where a lot of practical care happens.
                Iron infusions, wound care, ECGs and spirometry, ear care,
                and minor procedures like cryotherapy. On-site, mostly in a
                routine appointment, coordinated with your GP.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book with your GP<Arrow /></a>
                <a href="#what" className="btn-outline">What&apos;s available<Arrow /></a>
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
          <Image src="/website-images/treatment-room-and-procedures-about-bg.webp" alt="A treatment room at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the treatment room</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Practical care,{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>on-site.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Wounds that don&apos;t heal quickly, wounds requiring specialist dressings, and post-procedural wound care are managed in the treatment room. Common reasons include post-surgical wound care and suture removal, chronic wounds (venous leg ulcers, pressure areas, diabetic foot wounds), traumatic wounds requiring cleaning and dressing, burns needing initial or ongoing management, and complex wounds referred back from hospital. Our nursing team works alongside your GP on wound assessment, dressing selection, and progress monitoring.</p>
              <p>Iron infusion delivers iron directly into the bloodstream and is used when oral iron isn&apos;t tolerated, isn&apos;t working quickly enough, or when iron deficiency is severe. Common reasons include iron deficiency anaemia not responding to oral supplements, poor tolerance of oral iron, chronic disease affecting absorption, preparation for surgery, pregnancy-related deficiency, and post-hospital anaemia. Your GP determines whether iron infusion is appropriate based on your iron studies, symptoms, and history.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What&apos;s available</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Procedures, diagnostics,{" "}<span className="italic font-display-warm">and steady follow-through.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Not every wax needs syringing, not every wart needs cryotherapy, and not every ear concern needs a procedure. Your GP assesses first, then treats where appropriate.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/treatment-room-and-procedures-detail.webp" alt="A nurse preparing a dressing at an SMSG centre." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Diagnostics, ear care, cryotherapy</span><h2 className="font-display h-section mt-3 max-w-[18ch]">In and out,{" "}<span className="italic font-display-warm">mostly on the day.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p><strong>ECG.</strong> Records the electrical activity of your heart. Used for assessing palpitations, chest pain, before starting certain medications, before surgery, and as part of cardiovascular assessment. The test takes a few minutes and is painless.</p>
              <p><strong>Spirometry.</strong> Measures how well your lungs are working. Used for diagnosing and monitoring asthma, COPD, and other lung conditions, and as part of pre-employment or driver&apos;s licence medicals. The test involves breathing into a mouthpiece under specific instructions.</p>
              <p><strong>Audiology and hearing tests.</strong> Available for adults and children who have concerns about their hearing, or who need a hearing test as part of another assessment (occupational, developmental, or general health). Where more detailed testing or hearing aid consideration is needed, referral to an audiologist or ENT specialist can be arranged.</p>
              <p><strong>Ear syringing.</strong> Removes wax that&apos;s causing symptoms (hearing loss, discomfort, tinnitus) and can&apos;t be managed with drops alone. Done with sterile water or saline using a specific device. Your GP assesses whether the wax is contributing to your symptoms and whether a course of ear drops is the right first step. Not appropriate for everyone, including some patients with previous ear surgery, perforations, or specific ear conditions.</p>
              <p><strong>Cryotherapy.</strong> Uses liquid nitrogen to treat certain skin lesions by freezing them. Common uses include warts, skin tags, actinic keratoses (sun-damaged skin with precancerous changes), and some superficial skin cancers. It stings briefly and may cause temporary redness, blistering or scab formation. Multiple sessions may be needed for some lesions.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Some specific services may be more readily available at particular centres. Reception can confirm what&apos;s available where.</div>
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
              <p>Treatment room services are typically billed under Medicare items for the specific procedure. Iron infusion, ECG, spirometry, ear syringing and cryotherapy all have specific Medicare item numbers. Wound care is billed according to the length and complexity of the appointment.</p>
              <p>Reception confirms specific fee arrangements at booking.</p>
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
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Treatment room services are part of GP care. No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href="/chronic-disease-and-lifestyle/" className="related-card"><span className="kicker">Related service</span><h3>Chronic Disease &amp; Lifestyle</h3><p>Ongoing condition management and coordinated allied health.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/full-body-skin-checks/" className="related-card"><span className="kicker">Related service</span><h3>Full-Body Skin Checks</h3><p>Systematic skin cancer screening at Clarion.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
