import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildSkinChecksSchema } from "./schema";

export const metadata: Metadata = {
  title: "Full-Body Skin Checks | Clarion Skin Cancer Clinic at SMSG",
  description:
    "Full-body skin cancer checks with dermoscopy across Earlwood, Bangor and Sans Souci. Systematic examination for early detection of skin cancer.",
  alternates: { canonical: "https://smsg.au/full-body-skin-checks/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Anyone concerned about skin cancer risk" },
  { label: "Duration", value: "Typically 20 to 40 minutes" },
  { label: "Includes", value: "Systematic examination with dermoscopy" },
  { label: "Referral", value: "Not required" },
];

const WHO = [
  "You've never had one and you're an Australian adult",
  "You have fair skin, blue or green eyes, or a history of sunburns",
  "You have many moles, or moles that have changed",
  "You have a personal or family history of skin cancer or melanoma",
  "You've had significant occupational or recreational sun exposure",
  "You've noticed a new spot, or an existing spot that has changed",
  "You're on immunosuppressive medications",
  "You've had solid organ transplant",
];

const FAQS = [
  { q: "How often should I have a skin check?", a: <p>That depends on your risk profile. Your GP will recommend an interval after your first check. Common intervals range from 6 months to 3 years, based on individual risk.</p> },
  { q: "Do I need a referral?", a: <p>No. Skin checks are a GP service and don&apos;t require a referral.</p> },
  { q: "How long does a check take?", a: <p>Typically 20 to 40 minutes, longer if there are many spots to examine or if a biopsy is done on the day.</p> },
  { q: "Can I bring a friend or family member?", a: <p>Yes. If you&apos;re comfortable, having someone present is fine.</p> },
  { q: "What if I only want a specific spot checked?", a: <p>That&apos;s fine. Book a shorter appointment for the specific concern. A full-body check can be done separately.</p> },
  { q: "Will my genital area be checked?", a: <p>The examination includes all skin surfaces where skin cancer can occur. Your GP will ask before examining any area and you can decline any part of the check.</p> },
  { q: "What if a biopsy is needed?", a: <p>Biopsy involves removing a small piece of the lesion for laboratory examination. Local anaesthetic is used. Your GP will explain what&apos;s involved and what to expect.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, doctors: "Dr Tao Geng, Dr Jaison Mangahis, Dr Marloes Nordkamp, Dr Grant Yuan, Dr Jenny Yun." },
  { key: "bangor" as const, doctors: "Dr Margaret Colwell, Dr Tao Geng." },
  { key: "sanssouci" as const, doctors: "Dr Jonathan Moore, Dr Marloes Nordkamp." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Dr Tao Geng · Dr Jaison Mangahis · Dr Marloes Nordkamp · Dr Grant Yuan · Dr Jenny Yun" },
  { key: "bangor", sub: "Dr Margaret Colwell · Dr Tao Geng" },
  { key: "sanssouci", sub: "Dr Jonathan Moore · Dr Marloes Nordkamp" },
];

export default function SkinChecksPage() {
  const schema = buildSkinChecksSchema();
  return (
    <div className="theme-clarion iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Clarion Skin Cancer Clinic", href: routes.subBrand("clarion") },
            { label: "Full-Body Skin Checks" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden moss-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("clarion")} className="brand-chip"><span className="dot" />Clarion Service · Skin Cancer Screening</Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Full-body{" "}<span className="italic font-display-warm">skin checks.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                A full-body skin check is a systematic examination of your
                skin from head to toe, using dermoscopy to look closely at
                spots that need it. The goal is early detection of skin
                cancer, and reassurance when nothing needs action. Available
                at all three SMSG centres through the Clarion team.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a skin check<Arrow /></a>
                <a href="#who" className="btn-outline">Who should book<Arrow /></a>
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
          <Image src="/website-images/full-body-skin-checks-about-bg.webp" alt="A consulting room set up for a skin check at Clarion." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(35, 55, 30, 0.90) 0%, rgba(60, 85, 50, 0.85) 55%, rgba(35, 55, 30, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">A systematic{" "}<span className="italic font-display-warm" style={{ color: "var(--clarion)" }}>examination.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Australia has the highest rate of skin cancer in the world. Regular skin checks are one of the most effective ways to catch skin cancer early, when treatment is straightforward and outcomes are best. Melanoma detected early has very high cure rates. The same is true for the more common non-melanoma skin cancers (basal cell carcinoma and squamous cell carcinoma) which are the most frequent skin cancers seen at Australian skin clinics.</p>
              <p>A full-body skin check at Clarion is a systematic examination, not a quick look. Your GP works through the whole surface of the skin in a defined pattern, using{" "}<Link href="/dermoscopy/" className="link-editorial">dermoscopy</Link>{" "}(a hand-held magnification device with polarised light) to look closely at spots that need it. Spots that look benign are noted. Spots that don&apos;t fit the expected pattern are examined more carefully, and where appropriate, are biopsied on the day or booked for a follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="who" className="relative moss-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Who should book a skin check</span><h2 className="font-display h-section mt-3 max-w-[22ch]">There&apos;s no fixed rule,{" "}<span className="italic font-display-warm">but there are cues.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">If you have a specific spot you&apos;re worried about, book anyway even if a full check isn&apos;t due yet. A single lesion can be assessed in a shorter appointment.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/full-body-skin-checks-detail.webp" alt="A dermatoscope examination during a full-body skin check." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHO.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--clarion-deep)" }} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What happens during the check</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Thorough,{" "}<span className="italic font-display-warm">not invasive.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>You&apos;ll change into a gown so the whole surface of the skin can be examined. The GP works through in a systematic order, examining the scalp, face, ears, neck, chest, abdomen, back, arms, hands, legs, feet, and genital area. The examination is thorough but not invasive.</p>
              <p>Where a spot needs closer inspection, the GP uses dermoscopy, which reveals features of the skin that can&apos;t be seen with the naked eye. Dermoscopy substantially improves the accuracy of skin cancer detection.</p>
              <p>At the end of the check, your GP explains what was found:</p>
              <ul>
                <li><strong>Reassurance.</strong> If nothing suspicious was seen, you&apos;re given a plan for when your next check should be.</li>
                <li><strong>Monitoring.</strong> For spots that are borderline but not clearly concerning, monitoring at a set interval may be recommended.</li>
                <li><strong>Biopsy.</strong> For spots that need histological confirmation, a biopsy may be arranged on the day or booked as a short follow-up.</li>
                <li><strong>Excision.</strong> For spots that need to be removed, <Link href="/excision-procedures/" className="link-editorial">excision</Link> is arranged. This is often done at Clarion, or referred as appropriate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Dr Moore&apos;s plastic surgery assisting rotation at the Melanoma Institute of Australia informs his approach to complex skin cancer work at Sans Souci.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.doctors}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Confirmed at{" "}<span className="italic font-display-warm">booking.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Skin check appointments are typically privately billed with a Medicare rebate applying. Longer appointments and complex checks with multiple areas of concern may attract a longer consultation fee.</p>
              <p>Billing arrangements vary by GP. Reception confirms the specific fee at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with Clarion</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Skin checks are a GP service. No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href={routes.subBrand("clarion")} className="related-card"><span className="kicker">Sub-brand</span><h3>Clarion Skin Cancer Clinic</h3><p>The full Clarion team across three centres.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href="/dermoscopy/" className="related-card"><span className="kicker">Related service</span><h3>Dermoscopy</h3><p>The magnification technique used throughout skin checks and lesion assessments.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/skin-cancer-awareness/" className="related-card"><span className="kicker">Resource</span><h3>Skin Cancer Awareness</h3><p>Understanding your risk, what to look for, and how to protect your skin.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
