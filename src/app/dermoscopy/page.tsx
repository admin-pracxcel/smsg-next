import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildDermoscopySchema } from "./schema";

export const metadata: Metadata = {
  title: "Dermoscopy | Clarion Skin Cancer Clinic at SMSG",
  description:
    "Dermoscopy is the magnification technique that lets a GP see features of the skin invisible to the naked eye. Used throughout Clarion skin checks and lesion assessments.",
  alternates: { canonical: "https://smsg.au/dermoscopy/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const GLANCE_ROWS = [
  { label: "What it is", value: "Magnified skin examination with polarised light" },
  { label: "Used for", value: "Skin cancer detection, lesion assessment" },
  { label: "Where", value: "All three SMSG centres" },
  { label: "Referral", value: "Not required" },
];

const USES = [
  { title: "During a full-body skin check.", body: "Any spot that needs closer inspection is examined under the dermatoscope. This is standard practice at Clarion." },
  { title: "For a single lesion of concern.", body: "If you've noticed a specific spot that's new or changing, your GP can examine it dermoscopically as part of a shorter consultation." },
  { title: "For monitoring known lesions.", body: "Some spots don't warrant excision but need to be watched. Dermoscopy allows precise monitoring for change over time. Digital dermoscopy images can be stored and compared at future checks." },
  { title: "For pre-excision planning.", body: "Before excising a lesion, dermoscopy helps confirm the diagnosis and margins." },
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>No. Skin checks and lesion assessments including dermoscopy are GP services.</p> },
  { q: "Does dermoscopy hurt?", a: <p>No. The dermatoscope is a hand-held device placed on the surface of the skin. There&apos;s no needle, no cutting, and no pain.</p> },
  { q: "Can I have just my mole checked?", a: <p>Yes. If you have a single spot of concern, book a shorter appointment. Your GP will examine it with dermoscopy and advise on next steps.</p> },
  { q: "Do I need dermoscopy every time?", a: <p>Dermoscopy is used routinely at Clarion for spots that need closer inspection. It&apos;s part of good skin cancer practice.</p> },
  { q: "Is dermoscopy the same as a digital body map?", a: <p>Digital body maps use photography to record the position of your moles for comparison over time. This is a separate service and may not be routinely offered at all Clarion appointments. Ask your GP whether it&apos;s appropriate for your risk profile.</p> },
  { q: "Can dermoscopy replace a biopsy?", a: <p>No. Dermoscopy supports the decision about whether a lesion needs biopsy. Histology is required for final diagnosis of any suspicious lesion.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, doctors: "Dr Tao Geng, Dr Jaison Mangahis, Dr Marloes Nordkamp, Dr Grant Yuan, Dr Jenny Yun." },
  { key: "bangor" as const, doctors: "Dr Margaret Colwell, Dr Tao Geng." },
  { key: "sanssouci" as const, doctors: "Dr Jonathan Moore, Dr Marloes Nordkamp." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "5 GPs with dermoscopy experience" },
  { key: "bangor", sub: "Dr Margaret Colwell · Dr Tao Geng" },
  { key: "sanssouci", sub: "Dr Jonathan Moore · Dr Marloes Nordkamp" },
];

export default function DermoscopyPage() {
  const schema = buildDermoscopySchema();
  return (
    <div className="theme-clarion iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Clarion Skin Cancer Clinic", href: routes.subBrand("clarion") },
            { label: "Dermoscopy" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden moss-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("clarion")} className="brand-chip"><span className="dot" />Clarion Service · Diagnostic Technique</Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Dermoscopy<span className="italic font-display-warm">.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Dermoscopy is a hand-held magnification technique that lets
                your GP see features of the skin invisible to the naked eye.
                It substantially improves the accuracy of skin cancer
                detection and is used throughout Clarion skin checks and
                lesion assessments.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a skin check with dermoscopy<Arrow /></a>
                <a href="#uses" className="btn-outline">When it&apos;s used<Arrow /></a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div><div className="g-title">What this technique covers.</div>
                {GLANCE_ROWS.map((row) => (<div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>))}
                <div className="g-foot"><span className="dot" /><span>Used within a standard consultation; not billed separately</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/dermoscopy-about-bg.webp" alt="A dermatoscope, the tool used in dermoscopy at Clarion." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(35, 55, 30, 0.90) 0%, rgba(60, 85, 50, 0.85) 55%, rgba(35, 55, 30, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About dermoscopy</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">A closer look{" "}<span className="italic font-display-warm" style={{ color: "var(--clarion)" }}>under the surface.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Dermoscopy uses a hand-held device (a dermatoscope) that combines magnification with polarised light to reveal features of the skin that can&apos;t be seen with a standard visual check. The technique lets a trained GP look through the surface of the skin at the structures underneath, which is where the diagnostic clues to skin cancer often live.</p>
              <p>Dermoscopy has been shown in multiple studies to substantially improve the accuracy of skin cancer detection compared with visual inspection alone. It reduces both missed cancers and unnecessary biopsies of benign lesions.</p>
              <p>At Clarion, dermoscopy is used routinely as part of skin checks and single-lesion assessments. Your GP examines each area of concern under the dermatoscope, looking for specific patterns that indicate whether a lesion is benign, whether it needs monitoring, or whether it needs biopsy or excision.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="uses" className="relative moss-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">When dermoscopy is used</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Four common{" "}<span className="italic font-display-warm">situations.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Dermoscopy is used across a range of situations, from routine skin checks through pre-excision planning.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/dermoscopy-detail.webp" alt="Reviewing dermoscopic images after a skin check." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {USES.map((u, i) => (<div key={i} className="step-card"><div className="st-num">{String(i + 1).padStart(2, "0")}</div><div className="st-title">{u.title}</div><p>{u.body}</p></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What dermoscopy can and cannot do</span><h2 className="font-display h-section mt-3 max-w-[18ch]">A decision-support{" "}<span className="italic font-display-warm">tool.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p><strong>What dermoscopy can do.</strong> Substantially improve the accuracy of skin cancer detection. Identify features that distinguish melanoma from benign moles, and non-melanoma skin cancers from benign lesions. Support decisions about which spots need biopsy and which can be monitored or left alone.</p>
              <p><strong>What dermoscopy cannot do.</strong> Provide a definitive diagnosis without histology. Any lesion that looks concerning under dermoscopy still needs a biopsy for final confirmation. Dermoscopy is a decision-support tool, not a substitute for pathology.</p>
              <p><strong>Non-melanoma cancers.</strong> Basal cell carcinoma and squamous cell carcinoma have specific dermoscopic features that support diagnosis, but as with melanoma, histology is required for confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What to expect</span><h2 className="font-display h-section mt-3 max-w-[18ch]">No prep,{" "}<span className="italic font-display-warm">no pain.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>You don&apos;t need to prepare for dermoscopy. It&apos;s not painful, requires no injections, and doesn&apos;t disrupt your day.</p>
              <p>During your appointment, your GP:</p>
              <ul>
                <li>Examines the lesion or lesions visually first.</li>
                <li>Applies the dermatoscope to the skin, sometimes with a thin layer of alcohol or gel to reduce surface reflection.</li>
                <li>Examines features under magnification and polarised light.</li>
                <li>May take a photograph for records or for comparison over time.</li>
                <li>Explains what was seen and what happens next.</li>
              </ul>
              <p>If the lesion is clearly benign, no further action is needed. If it needs monitoring, an interval is agreed. If it needs biopsy or excision, the plan is discussed with you.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14"><div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div></div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.doctors}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Not billed{" "}<span className="italic font-display-warm">separately.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Dermoscopy is used within a standard consultation and is not billed separately. The consultation fee for a skin check or lesion assessment covers the dermoscopy component.</p>
              <p>Billing arrangements vary by GP. Reception confirms the specific fee at booking.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
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
