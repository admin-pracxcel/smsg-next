import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPreventiveCareSchema } from "./schema";

export const metadata: Metadata = {
  title: "General Practice & Preventive Care | SMSG",
  description:
    "Health assessments, bowel cancer screening, men's and women's health checks with SMSG GPs across Earlwood, Bangor and Sans Souci.",
  alternates: { canonical: "https://smsg.au/general-practice-and-preventive-care/" },
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
  { label: "Suitable for", value: "Adults across every life stage" },
  { label: "Duration", value: "20 to 60 minutes, depending on the assessment" },
  { label: "Includes", value: "Health assessments, screening, structured reviews" },
  { label: "Referral", value: "Not required" },
];

const WHAT = [
  "45 to 49 lifestyle risk assessment for adults with a chronic disease risk factor",
  "75 and older comprehensive health assessment, at the clinic or in your home",
  "715 Aboriginal and Torres Strait Islander health check, annually at any age",
  "National Bowel Cancer Screening kits for eligible Australians aged 50 to 74",
  "Men's health checks covering cardiovascular risk, mental health, prostate and sleep",
  "Women's health checks across contraception, screening, menopause and bone health",
  "General reviews at any age where a specific concern or family history warrants it",
  "Follow-up and coordination with specialists at Excelsia where needed",
];

const FAQS = [
  { q: "Do I need a referral for a preventive check?", a: <p>No. Preventive care with your GP doesn&apos;t require a referral.</p> },
  { q: "Am I eligible for the 45 to 49 health assessment?", a: <p>The assessment is for adults aged 45 to 49 with at least one chronic disease risk factor. Common risk factors include family history of chronic disease, lifestyle factors, and existing conditions. Ask reception or your GP to check eligibility.</p> },
  { q: "How do I get a bowel cancer screening kit?", a: <p>Kits are mailed to eligible Australians automatically. If yours hasn&apos;t arrived or you&apos;ve lost it, you can request a replacement through the National Bowel Cancer Screening Program. Your GP can also help.</p> },
  { q: "What if I'm outside the standard screening age?", a: <p>Discuss with your GP. Age-based screening programs are population defaults. Individual risk (family history, previous polyps, symptoms) may warrant different arrangements.</p> },
  { q: "Can I have a general check-up if I'm not due for a specific assessment?", a: <p>Yes. Book with your GP and describe what you&apos;re looking for. A general review can be structured around your specific concerns.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "All GPs. Saturday appointments available." },
  { key: "bangor" as const, note: "All GPs." },
  { key: "sanssouci" as const, note: "All GPs." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Full range of preventive care with Saturday availability" },
  { key: "bangor", sub: "Preventive care and health assessments" },
  { key: "sanssouci", sub: "Preventive care and health assessments" },
];

export default function GeneralPracticePreventiveCarePage() {
  const schema = buildPreventiveCareSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "General Practice & Preventive Care" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Preventive Care</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">General practice and{" "}<span className="italic font-display-warm">preventive care.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Prevention is the quiet part of general practice, and often
                the most valuable. A health assessment at the right age can
                pick up a risk before it&apos;s a problem, a screening test
                can catch a cancer early, and a routine check can be the
                moment something otherwise unnoticed comes up. Available
                across all three SMSG centres.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a preventive check<Arrow /></a>
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
          <Image src="/website-images/general-practice-and-preventive-care-about-bg.webp" alt="A GP consultation at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About preventive care</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">The quiet{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>part of care.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Structured health assessments look at your risk profile across body systems and lifestyle factors. Medicare funds specific assessments at particular life stages: the 45 to 49 lifestyle risk assessment, the 75 and older health assessment (which can be done in your home if that&apos;s easier), and the 715 Aboriginal and Torres Strait Islander health check, available annually at any age.</p>
              <p>Alongside those, screening programs run in the background. The National Bowel Cancer Screening Program posts free at-home kits every two years to Australians aged 50 to 74. Bowel cancer detected at stage 1 has a five-year survival rate above 99 per cent, which is a large payoff for a small piece of admin. Your GP receives the result and follows up if further investigation is needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What preventive care covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Assessments, screening,{" "}<span className="italic font-display-warm">and routine review.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">If you have a specific concern (blood pressure, cholesterol, energy or mood changes, a lump you&apos;ve noticed) book it as a dedicated appointment, not an add-on at the end of another visit.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/general-practice-and-preventive-care-detail.webp" alt="A GP consulting room at an SMSG centre." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">How the appointments work</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Structured,{" "}<span className="italic font-display-warm">not scripted.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Health assessments run on a longer appointment format, because there&apos;s a set of questions and checks to work through. Your GP walks through cardiovascular risk, diabetes risk, cancer screening status, lifestyle factors, mental health, and (for older patients) function, cognition, medications, and social circumstances. Nothing is rushed; the assessment&apos;s value is in what surfaces.</p>
              <p>The bowel cancer kit sits on a slower cycle. It arrives in the post, you complete it at home, and the result comes back to your GP. If it&apos;s positive it doesn&apos;t mean cancer; it means further investigation is warranted, usually with a colonoscopy referral. Your GP will discuss the next step.</p>
              <p>Men&apos;s and women&apos;s health checks are structured around what tends to come up at each life stage. Some concerns come up more readily when there&apos;s a dedicated appointment to raise them, rather than a five-minute add-on at the end of something else. For women looking for specific women&apos;s health focus,{" "}<Link href="/aurora-women-and-babies-health/" className="link-editorial">Aurora Women &amp; Babies Health</Link>{" "}at SMSG offers dedicated women&apos;s health care.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Preventive care is available with any SMSG GP at any of our three centres. Saturday appointments at Earlwood can help if weekdays are difficult.</div>
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
              <p>Preventive care appointments are billed according to the length and complexity of the consultation. Some Medicare-funded health assessments (the 45 to 49 lifestyle risk assessment, the 75+ health assessment, and the 715 Aboriginal and Torres Strait Islander health check) are bulk-billed for eligible patients. Bowel cancer screening kits from the national program are free.</p>
              <p>Longer appointments and complex reviews may attract a private fee with a Medicare rebate applying. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a preventive check</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Preventive care is a GP service. No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href="/chronic-disease-and-lifestyle/" className="related-card"><span className="kicker">Related service</span><h3>Chronic Disease &amp; Lifestyle</h3><p>Ongoing management support for long-term conditions.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/mental-health-care/" className="related-card"><span className="kicker">Related service</span><h3>Mental Health Care</h3><p>Mental Health Care Plans and coordinated psychology support.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/full-body-skin-checks/" className="related-card"><span className="kicker">Related service</span><h3>Full-Body Skin Checks</h3><p>Systematic skin cancer screening through the Clarion team.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
