import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildSkinCancerAwarenessSchema } from "./schema";

export const metadata: Metadata = {
  title: "Skin Cancer Awareness | Clarion Skin Cancer Clinic at SMSG",
  description:
    "Understanding skin cancer, risk factors, warning signs, and prevention. From the Clarion team at SMSG across Earlwood, Bangor and Sans Souci.",
  alternates: { canonical: "https://smsg.au/skin-cancer-awareness/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }

const GLANCE_ROWS = [
  { label: "Category", value: "Patient information resource" },
  { label: "Written by", value: "The Clarion team at SMSG" },
  { label: "Related service", value: "Full-Body Skin Checks" },
  { label: "Where", value: "All three SMSG centres" },
];

const RISK_FACTORS = [
  "Fair skin, particularly if you burn easily and tan poorly",
  "Blue, green or grey eyes",
  "Red or fair hair",
  "A history of childhood sunburn",
  "Significant cumulative sun exposure over your life",
  "A history of solarium use",
  "Many moles (more than 50)",
  "Atypical moles",
  "A previous skin cancer or precancerous spot (actinic keratosis)",
  "A family history of melanoma",
  "Immunosuppression, from medication or medical conditions",
];

const NON_PIGMENTED = [
  "A new spot that persists longer than a few weeks",
  "A sore that doesn't heal",
  "A pearly bump that grows slowly",
  "A rough, scaly patch that persists",
  "A red, scaly spot that bleeds or crusts",
  "A spot that itches or is painful",
];

const SELF_CHECK = [
  "Face and scalp: use a mirror, and part your hair to see the scalp",
  "Ears: front and back, using a mirror",
  "Neck, chest, abdomen: examine directly",
  "Back: use a second mirror or ask someone",
  "Arms and hands: including palms, backs of hands, and between fingers",
  "Legs and feet: including soles, tops of feet, and between toes",
  "Genital area",
];

const BOOK_REASONS = [
  "You've noticed a new spot or a spot that has changed",
  "You have concerns about a specific mole or lesion",
  "You have risk factors for skin cancer and haven't had a check",
  "You've been advised by a health professional to have a skin check",
  "Your last skin check was longer ago than your GP recommended",
];

const LOCATIONS = [
  { key: "earlwood" as const, doctors: "Dr Tao Geng, Dr Jaison Mangahis, Dr Marloes Nordkamp, Dr Grant Yuan, Dr Jenny Yun." },
  { key: "bangor" as const, doctors: "Dr Margaret Colwell, Dr Tao Geng." },
  { key: "sanssouci" as const, doctors: "Dr Jonathan Moore, Dr Marloes Nordkamp." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "5 GPs with skin cancer experience" },
  { key: "bangor", sub: "Dr Margaret Colwell · Dr Tao Geng" },
  { key: "sanssouci", sub: "Dr Jonathan Moore · Dr Marloes Nordkamp" },
];

export default function SkinCancerAwarenessPage() {
  const schema = buildSkinCancerAwarenessSchema();
  return (
    <div className="theme-clarion iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Clarion Skin Cancer Clinic", href: routes.subBrand("clarion") },
            { label: "Skin Cancer Awareness" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden moss-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("clarion")} className="brand-chip"><span className="dot" />Clarion Resource · Skin Cancer Information</Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Skin cancer{" "}<span className="italic font-display-warm">awareness.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Australia has the highest rate of skin cancer in the world.
                Understanding your risk, knowing what to look for, and taking
                practical steps to protect your skin are the most effective
                ways to reduce that risk. This page pulls together what
                matters most, from the Clarion team at SMSG.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a skin check<Arrow /></a>
                <a href="#what-to-look-for" className="btn-outline">What to look for<Arrow /></a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div><div className="g-title">What this page covers.</div>
                {GLANCE_ROWS.map((row) => (<div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>))}
                <div className="g-foot"><span className="dot" /><span>Two in three Australians diagnosed by age 70</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/skin-cancer-awareness-about-bg.webp" alt="A family in sun-safe clothing on the Sydney coastline." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(35, 55, 30, 0.90) 0%, rgba(60, 85, 50, 0.85) 55%, rgba(35, 55, 30, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">Skin cancer in Australia</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Two in three,{" "}<span className="italic font-display-warm" style={{ color: "var(--clarion)" }}>by age 70.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Two in three Australians will be diagnosed with skin cancer before age 70. The vast majority of skin cancers are caused by exposure to ultraviolet (UV) radiation, from the sun or from artificial sources like solariums.</p>
              <p>Skin cancer falls into two broad categories:</p>
              <p><strong>Non-melanoma skin cancer.</strong> Basal cell carcinoma (BCC) and squamous cell carcinoma (SCC) are the two most common types. They&apos;re rarely fatal when caught early but can cause significant local damage if left untreated. Non-melanoma skin cancer is the most common cancer in Australia.</p>
              <p><strong>Melanoma.</strong> Less common but more serious. Melanoma can spread beyond the skin if not detected and treated early. When caught in its early stages, however, melanoma is highly treatable with excellent outcomes.</p>
              <p>Both categories are more common with age, but neither is exclusive to older adults. Melanoma is one of the most common cancers in Australians aged 15 to 39.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative moss-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Risk factors</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Who&apos;s at{" "}<span className="italic font-display-warm">higher risk.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Anyone with darker skin can still develop skin cancer, and skin cancer in darker skin is often diagnosed later because it can appear in less sun-exposed areas (soles of feet, palms, under nails) where people aren&apos;t looking for it.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/skin-cancer-awareness-detail.webp" alt="Applying sunscreen before heading out." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {RISK_FACTORS.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--clarion-deep)" }} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section id="what-to-look-for" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What to look for</span><h2 className="font-display h-section mt-3 max-w-[18ch]">The ABCDE{" "}<span className="italic font-display-warm">guide.</span></h2><p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">Any single feature is worth checking. Any combination should prompt a skin check.</p></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>The signs of skin cancer are generally noticeable if you know what to look for and check regularly.</p>
              <p><strong>For moles and pigmented lesions, use the ABCDE guide:</strong></p>
              <ul>
                <li><strong>A</strong>symmetry. One half doesn&apos;t match the other half.</li>
                <li><strong>B</strong>order. Irregular, ragged, notched or blurred edges.</li>
                <li><strong>C</strong>olour. Uneven, with different shades of brown, black, tan, red, white or blue.</li>
                <li><strong>D</strong>iameter. Larger than 6mm, though melanomas can be smaller.</li>
                <li><strong>E</strong>volving. Changing in size, shape or colour, or developing new symptoms like itching, bleeding or crusting.</li>
              </ul>
              <p><strong>For non-pigmented lesions, watch for:</strong></p>
              <ul>{NON_PIGMENTED.map((r) => (<li key={r}>{r}.</li>))}</ul>
              <p>Any spot that&apos;s changing, growing, bleeding or otherwise different from your other spots is worth checking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">How to check your own skin</span><h2 className="font-display h-section mt-3 max-w-[18ch]">A monthly{" "}<span className="italic font-display-warm">habit.</span></h2><p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">Self-checks don&apos;t replace a professional skin check. They help you notice changes between checks so you can raise them with your GP.</p></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>A monthly self-check is a good habit. Do it in a well-lit room, preferably after a shower.</p>
              <ul>{SELF_CHECK.map((r) => (<li key={r}>{r}.</li>))}</ul>
              <p>Note anything new, anything that has changed, or anything that catches your attention. Photographs can help track spots over time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Prevention</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Slip, slop,{" "}<span className="italic font-display-warm">slap, seek, slide.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>The most effective way to reduce your skin cancer risk is to reduce your exposure to UV radiation. The Cancer Council recommends five sun protection actions when UV levels are 3 or above:</p>
              <ul>
                <li><strong>Slip</strong> on protective clothing that covers as much skin as possible.</li>
                <li><strong>Slop</strong> on SPF 30 or higher, broad-spectrum sunscreen 20 minutes before going outdoors, and reapply every two hours or after swimming or sweating.</li>
                <li><strong>Slap</strong> on a hat with a broad brim that shades the face, neck and ears.</li>
                <li><strong>Seek</strong> shade.</li>
                <li><strong>Slide</strong> on sunglasses that meet the Australian Standard.</li>
              </ul>
              <p>Sun protection matters most between 10am and 3pm in most parts of Australia, and year-round in the northern parts of the country. The SunSmart app and Cancer Council Australia&apos;s Sun Protection Times give the UV forecast for your area.</p>
              <p>Avoid solariums (banned for commercial use in Australia but sometimes used privately).</p>
              <p>Regular skin checks with your GP catch cancers early, when they&apos;re most treatable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">When to see us</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Don&apos;t wait for{" "}<span className="italic font-display-warm">it to &ldquo;become something.&rdquo;</span></h2><p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">Early is better. Skin cancer detected early is highly treatable.</p></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Book a skin check if:</p>
              <ul>{BOOK_REASONS.map((r) => (<li key={r}>{r}.</li>))}</ul>
              <p>See our <Link href="/full-body-skin-checks/" className="link-editorial">Full-Body Skin Checks</Link> page for what to expect at your appointment.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14"><div className="md:col-span-8"><span className="allcaps text-ink-3">Where Clarion is offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div></div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.doctors}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with Clarion</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Book a <span className="italic font-display-warm">skin check.</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href="/full-body-skin-checks/" className="related-card"><span className="kicker">Related service</span><h3>Full-Body Skin Checks</h3><p>Comprehensive skin examination with dermoscopy.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/excision-procedures/" className="related-card"><span className="kicker">Related service</span><h3>Excision Procedures</h3><p>Removal of lesions that need to come out.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
