import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildExcisionSchema } from "./schema";

export const metadata: Metadata = {
  title: "Excision Procedures | Clarion Skin Cancer Clinic at SMSG",
  description:
    "Skin lesion excision procedures across Earlwood, Bangor and Sans Souci. Removal of confirmed or suspected skin cancers under local anaesthetic.",
  alternates: { canonical: "https://smsg.au/excision-procedures/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const GLANCE_ROWS = [
  { label: "Purpose", value: "Removal of skin lesions" },
  { label: "Anaesthetic", value: "Local" },
  { label: "Setting", value: "In-centre minor procedure appointment" },
  { label: "Follow-up", value: "Wound review and pathology review" },
];

const WHEN = [
  "A skin check identifies a suspicious lesion that needs histological confirmation",
  "A biopsy has confirmed a skin cancer that needs to be removed",
  "A lesion is causing symptoms (irritation, bleeding, catching on clothing)",
  "A lesion has features suggesting it should be removed rather than monitored",
  "A patient prefers removal of a lesion that could otherwise be monitored",
];

const REFERRAL_REASONS = [
  "The lesion is large or in a cosmetically sensitive area (face, ears, digits) needing reconstruction",
  "The lesion involves a difficult anatomical area",
  "Pathology shows a cancer needing wider re-excision by a specialist",
  "Multiple lesions need coordinated removal",
  "The pathology result suggests specialist follow-up",
];

const FAQS = [
  { q: "Do I need a referral?", a: <p>No. Excisions performed by Clarion GPs are a GP service and don&apos;t require a specialist referral.</p> },
  { q: "Will I have a scar?", a: <p>All excisions leave a scar. The size and appearance depend on the location, size of the lesion, and how your skin heals. Your GP will explain expected scarring for your specific case.</p> },
  { q: "How painful is it?", a: <p>The injection of local anaesthetic can sting for a few seconds. Once the area is numb, you shouldn&apos;t feel pain during the procedure. Some soreness afterwards is normal and usually well-managed with paracetamol.</p> },
  { q: "Can I drive home?", a: <p>Yes, in most cases. Local anaesthetic doesn&apos;t affect your ability to drive.</p> },
  { q: "Can I go back to work?", a: <p>Most people return to work the same day or the next day. Physical work may need to be modified until the wound heals.</p> },
  { q: "What if the excised lesion is a cancer?", a: <p>Your GP will explain the pathology, what it means, and the follow-up plan. Not all skin cancers need additional treatment after excision. Some need further excision for clear margins, and some need specialist referral.</p> },
  { q: "Are there risks?", a: <p>As with any minor procedure, there are risks including infection, bleeding, delayed healing, scar concerns and, rarely, reaction to local anaesthetic. Your GP explains these before the procedure.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, doctors: "Dr Tao Geng, Dr Jaison Mangahis, Dr Marloes Nordkamp, Dr Grant Yuan, Dr Jenny Yun." },
  { key: "bangor" as const, doctors: "Dr Margaret Colwell, Dr Tao Geng." },
  { key: "sanssouci" as const, doctors: "Dr Jonathan Moore, Dr Marloes Nordkamp." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "5 GPs experienced in excision" },
  { key: "bangor", sub: "Dr Margaret Colwell · Dr Tao Geng" },
  { key: "sanssouci", sub: "Dr Jonathan Moore · Dr Marloes Nordkamp" },
];

export default function ExcisionPage() {
  const schema = buildExcisionSchema();
  return (
    <div className="theme-clarion iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Clarion Skin Cancer Clinic", href: routes.subBrand("clarion") },
            { label: "Excision Procedures" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden moss-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("clarion")} className="brand-chip"><span className="dot" />Clarion Service · Skin Cancer Treatment</Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Excision{" "}<span className="italic font-display-warm">procedures.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Skin lesion excision procedures at Clarion across all three
                SMSG centres. Removal of confirmed or suspected skin cancers,
                precancerous lesions, and other spots that need treatment.
                Performed under local anaesthetic in a routine minor procedure
                appointment.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Enquire about an excision<Arrow /></a>
                <a href="#when" className="btn-outline">When excision is recommended<Arrow /></a>
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
          <Image src="/website-images/excision-procedures-about-bg.webp" alt="A treatment room prepared for a minor procedure at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(35, 55, 30, 0.90) 0%, rgba(60, 85, 50, 0.85) 55%, rgba(35, 55, 30, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">A routine{" "}<span className="italic font-display-warm" style={{ color: "var(--clarion)" }}>minor procedure.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>An excision is the surgical removal of a skin lesion, typically for one of three reasons: confirmed skin cancer that needs to be removed, a lesion that needs biopsy for diagnostic confirmation, or a bothersome lesion that isn&apos;t cancerous but is being removed for functional or cosmetic reasons.</p>
              <p>At Clarion, excisions are performed by GPs experienced in skin cancer medicine. Straightforward excisions on most parts of the body are done in a routine minor procedure appointment. More complex excisions (larger lesions, cosmetically sensitive areas, or areas that require reconstruction) may be referred to a plastic surgeon or dermatologist.</p>
              <p><Link href={routes.practitioner("dr-jonathan-moore")} className="link-editorial" style={{ color: "var(--clarion)" }}>Dr Jonathan Moore</Link>&apos;s plastic surgery assisting rotation at the Melanoma Institute of Australia informs his approach to skin cancer excision at Sans Souci.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="when" className="relative moss-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">When excision is recommended</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Not every suspicious spot{" "}<span className="italic font-display-warm">needs excision.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Some are biopsied (a smaller sample taken for pathology) first, with the decision on excision made after the biopsy result. Your GP will discuss which approach is appropriate.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/excision-procedures-detail.webp" alt="Preparing the sterile field before a minor procedure." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHEN.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--clarion-deep)" }} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What happens during an excision</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Before, during{" "}<span className="italic font-display-warm">and after.</span></h2><p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">Most excisions are completed within 30 to 60 minutes. Complex excisions may take longer.</p></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p><strong>Before the procedure:</strong></p>
              <ul>
                <li>Your GP explains what will be done, the expected outcome, and any risks.</li>
                <li>You&apos;re asked about medications (particularly blood thinners), allergies, and previous reactions to local anaesthetic.</li>
                <li>The area is cleaned and the borders of the excision marked.</li>
                <li>Local anaesthetic is injected. This is the only part of the procedure that involves any needle work, and takes a few moments.</li>
              </ul>
              <p><strong>During the procedure:</strong></p>
              <ul>
                <li>The area is fully numb, so you shouldn&apos;t feel pain, though you may feel pressure.</li>
                <li>The GP removes the lesion with a defined margin of surrounding tissue.</li>
                <li>The wound is closed with sutures (stitches).</li>
                <li>A dressing is applied.</li>
              </ul>
              <p><strong>After the procedure:</strong></p>
              <ul>
                <li>Wound care instructions are given.</li>
                <li>A follow-up appointment is arranged to remove sutures, typically 7 to 14 days later depending on the location.</li>
                <li>The excised tissue is sent to the laboratory for histological examination.</li>
                <li>The pathology result is discussed with you at your follow-up appointment.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">After the excision</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Wound care{" "}<span className="italic font-display-warm">and follow-up.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p><strong>Wound care.</strong> Keep the wound dry and clean as directed. Some minor bleeding or oozing in the first day is normal. Contact the centre if you have concerns.</p>
              <p><strong>Activity.</strong> Avoid heavy lifting, strenuous exercise or activities that stretch the wound area for the recommended period. This helps the wound heal cleanly.</p>
              <p><strong>Suture removal.</strong> Your GP tells you when to return. This is a short appointment.</p>
              <p><strong>Pathology result.</strong> The excised tissue is examined by a pathologist. Results typically take one to two weeks. You&apos;ll receive the result at your follow-up appointment or, for time-sensitive results, contacted sooner.</p>
              <p><strong>Follow-up plan.</strong> Depending on the pathology, you may need no further action, additional excision for clear margins, referral to a specialist, or ongoing skin surveillance. Your GP will explain the plan for your specific result.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">When specialist referral is appropriate</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Not all excisions{" "}<span className="italic font-display-warm">are done in GP.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Referral to a plastic surgeon or dermatologist is appropriate when:</p>
              <ul>{REFERRAL_REASONS.map((r) => (<li key={r}>{r}.</li>))}</ul>
              <p>Where specialist referral is needed, your Clarion GP arranges it and coordinates the referral pathway.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14"><div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div></div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.doctors}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Item-based{" "}<span className="italic font-display-warm">fees.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Excision procedures attract a fee based on the procedure performed. Medicare rebates apply for eligible procedures. Skin excisions have specific Medicare item numbers that vary by lesion type, size and location.</p>
              <p>Billing arrangements vary by GP. Reception confirms the specific fee and expected out-of-pocket cost when you book.</p>
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
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">No specialist referral needed. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href="/dermoscopy/" className="related-card"><span className="kicker">Related service</span><h3>Dermoscopy</h3><p>The magnification technique used to assess lesions.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
