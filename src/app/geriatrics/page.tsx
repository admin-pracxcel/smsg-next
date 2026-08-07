import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildGeriatricsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Geriatrics | Excelsia Specialist Centre at SMSG",
  description:
    "Geriatrician consultations across Earlwood, Bangor and Sans Souci. Comprehensive assessment for older adults with cognitive, functional or complex medical concerns.",
  alternates: { canonical: "https://smsg.au/geriatrics/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const GLANCE_ROWS = [
  { label: "Consultants", value: "Five geriatricians across three centres" },
  { label: "Locations", value: "Earlwood, Bangor, Sans Souci" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
  { label: "Focus", value: "Older adults and complex care" },
];

const REASONS = [
  "Comprehensive geriatric assessment for older adults with multiple concerns",
  "Cognitive concerns and dementia assessment",
  "Falls and mobility review",
  "Medication review where polypharmacy is complex",
  "Unintended weight loss",
  "Functional decline",
  "Frailty assessment",
  "Delirium follow-up",
  "Multi-morbidity requiring a broad view",
  "Pre-operative assessment for older or complex patients",
  "Post-hospital review and coordination of care",
  "Advance care planning",
];

const FAQS = [
  { q: "Do I need to see a GP first?", a: <p>Yes. A GP referral is required for the Medicare rebate to apply.</p> },
  { q: "Should a family member come with me?", a: <p>It often helps, particularly where cognitive concerns are part of the reason for referral. Your geriatrician appreciates hearing from someone who knows you well.</p> },
  { q: "What should I bring?", a: <p>Your GP referral, all recent hospital discharge summaries, test results and imaging, and a complete list of your current medications including over-the-counter items and supplements.</p> },
  { q: "Will the geriatrician coordinate with my GP?", a: <p>Yes. After each consultation, your geriatrician sends a letter back to your GP with the assessment and plan. Your GP remains your central point of care.</p> },
  { q: "Is one consultation enough?", a: <p>For some patients, yes. For others, particularly where cognitive change or complex chronic disease is being managed, ongoing specialist review is helpful.</p> },
  { q: "Which specialist should I see?", a: <p>Your GP will match you to the geriatrician most appropriate for your situation and the centre closest to you.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, doctors: "Dr Seo Lung Ling, Dr Daniel L Wong, and Dr Shahzadi Nadia." },
  { key: "bangor" as const, doctors: "Dr Amanda Khor and Dr Elaine Yap." },
  { key: "sanssouci" as const, doctors: "Dr Amanda Khor consults here." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Dr Seo Lung Ling · Dr Daniel Wong · Dr Shahzadi Nadia" },
  { key: "bangor", sub: "Dr Amanda Khor · Dr Elaine Yap" },
  { key: "sanssouci", sub: "Dr Amanda Khor" },
];

export default function GeriatricsPage() {
  const schema = buildGeriatricsSchema();
  return (
    <div className="theme-excelsia iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Excelsia Specialist Centre", href: routes.subBrand("excelsia") },
            { label: "Geriatrics" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden excelsia-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("excelsia")} className="brand-chip">
                <span className="dot" />
                Excelsia Specialty · Geriatrics
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Geriatrics<span className="italic font-display-warm">.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Geriatrician consultations at Excelsia across Earlwood, Bangor
                and Sans Souci. Comprehensive assessment for older adults with
                cognitive concerns, functional decline, falls, polypharmacy,
                or multiple health conditions that benefit from a coordinated
                review.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Enquire about a geriatric appointment<Arrow /></a>
                <a href="#reasons" className="btn-outline">Common reasons for referral<Arrow /></a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>
                ))}
                <div className="g-foot"><span className="dot" /><span>Family attendance often welcomed</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/geriatrics-about-bg.webp" alt="A geriatric medicine consultation at Excelsia." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30, 55, 68, 0.90) 0%, rgba(50, 80, 95, 0.85) 55%, rgba(30, 55, 68, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the specialty</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                A broad view of{" "}
                <span className="italic font-display-warm" style={{ color: "var(--excelsia)" }}>health in later life.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Geriatrics is the medical specialty focused on the health of
                older adults, particularly those with multiple health
                conditions, medications, or functional and cognitive
                concerns. A geriatric assessment takes a broad view of your
                health, not just the specific issue that led to referral.
                Cognitive change, mobility, medication complexity, nutrition,
                mood and social circumstances all shape health in later life.
              </p>
              <p>
                Many older adults benefit from a geriatric assessment at
                least once, particularly when multiple things are going on or
                when there&apos;s been a change (a hospital admission, a
                fall, cognitive concerns, unexplained decline). The
                assessment often leads to a clearer plan and, in many cases,
                simpler medication.
              </p>
              <p>
                Care is coordinated with your GP. Your GP identifies the
                concern, prepares a referral, and continues general care while
                the geriatrician advises on the broader picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" className="relative excelsia-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What consultations cover</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Common reasons{" "}
                <span className="italic font-display-warm">GPs refer.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Some patients need one comprehensive consultation and go back
              to GP-led care. Others are followed regularly, particularly
              where cognitive change or complex chronic disease benefits from
              specialist continuity.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/geriatrics-detail.webp" alt="A geriatric medicine review at Excelsia." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {REASONS.map((r) => (
              <div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2">
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--excelsia-deep)" }} />
                <span>{r}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What happens at the consultation</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                A broad and{" "}
                <span className="italic font-display-warm">unhurried review.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                It often helps if a family member or carer attends the
                consultation, particularly where cognitive or memory concerns
                are part of the reason for referral.
              </p>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Bring your GP referral, any recent hospital discharge
                summaries, test results, imaging, a complete list of your
                current medications (including over-the-counter and
                supplements), and any information about your usual level of
                function.
              </p>
              <ul>
                <li>A detailed history from you and, where relevant, a family member.</li>
                <li>A clinical examination.</li>
                <li>Cognitive assessment where relevant.</li>
                <li>Functional assessment.</li>
                <li>Review of medications with a view to simplifying where possible.</li>
                <li>A management plan that may include further investigation, medication changes, allied health input, and follow-up.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Across all{" "}
                <span className="italic font-display-warm">three centres.</span>
              </h2>
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => {
              const c = CLINICS[loc.key];
              return (
                <div key={loc.key} className="contact-row">
                  <div className="label">
                    <Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link>
                  </div>
                  <div className="value">{loc.doctors}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Fees and billing</span>
              <h2 className="font-display h-section mt-3 max-w-[15ch]">Privately <span className="italic font-display-warm">billed.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Geriatric consultations are privately billed. A GP referral is required for the Medicare rebate to apply.</p>
              <p>Reception confirms the specific fee and expected out-of-pocket cost when you book.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">FAQ</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Common <span className="italic font-display-warm">questions.</span></h2>
            </div>
            <div className="md:col-span-8">
              {FAQS.map((f, i) => (
                <details key={i} className="faq-item">
                  <summary>{f.q}<Chev /></summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with Excelsia</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>
                Ready to <span className="italic font-display-warm">book?</span>
              </h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">
                A GP referral is required. Contact reception at the centre
                you&apos;d prefer, or book directly through Automed.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => {
                  const c = CLINICS[t.key];
                  const tel = c.phone.replace(/[^0-9+]/g, "");
                  return (
                    <div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25">
                      <div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div>
                      <div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90">
                        <a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a>
                        <a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a>
                      </div>
                      <a href={c.automedBase} target="_blank" rel="noopener" className="mt-3 inline-flex items-center gap-2 text-[13.5px] text-cream/90 hover:text-cream transition">Book online at {c.shortLabel}<Arrow className="arrow" /></a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.subBrand("excelsia")} className="related-card"><span className="kicker">Sub-brand</span><h3>Excelsia Specialist Centre</h3><p>The full specialist team across nine disciplines.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href="/general-medicine/" className="related-card"><span className="kicker">Related specialty</span><h3>General Medicine</h3><p>Broad complex adult care where the picture crosses specialty boundaries.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/cardiology/" className="related-card"><span className="kicker">Related specialty</span><h3>Cardiology</h3><p>Cardiovascular assessment where the picture calls for it.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
