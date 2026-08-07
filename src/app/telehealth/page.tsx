import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildTelehealthSchema } from "./schema";

export const metadata: Metadata = {
  title: "Telehealth | SMSG",
  description:
    "Telehealth consultations by phone or video with SMSG GPs. When telehealth suits, when it doesn't, and how to book. Available for existing patients.",
  alternates: { canonical: "https://smsg.au/telehealth/" },
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
  { label: "Suitable for", value: "Existing SMSG patients" },
  { label: "Duration", value: "Same as an in-person consultation" },
  { label: "Includes", value: "Phone or video appointments" },
  { label: "Referral", value: "Not required" },
];

const WHEN_SUITS = [
  "Follow-up appointments where a review is needed but examination isn't",
  "Mental health consultations",
  "Discussing test results",
  "Prescription renewals that need a consultation",
  "Specialist referral discussions",
  "Managing chronic conditions with regular check-ins",
  "Some new consultations for specific concerns that don't need examination",
  "Advice on non-urgent symptoms and care coordination",
];

const FAQS = [
  { q: "Do I need a referral for telehealth?", a: <p>No. Telehealth is a mode of consultation, not a separate service. If you&apos;re seeing your usual GP, it&apos;s booked directly.</p> },
  { q: "Can new patients book telehealth?", a: <p>Under Medicare rules, an established relationship is generally required for the Medicare rebate. New patients typically need an in-person consultation first, unless they qualify for one of the exceptions.</p> },
  { q: "Can specialists at Excelsia offer telehealth?", a: <p>Yes. Some specialists offer telehealth appointments for eligible patients. Contact reception to ask about a specific specialist.</p> },
  { q: "Is video better than phone?", a: <p>For most consultations, either works. Video can help where visual assessment adds something (a skin lesion, a wound, an eye concern). Phone is simpler and doesn&apos;t require good internet or a camera.</p> },
  { q: "Is telehealth secure and private?", a: <p>Yes. The platforms used are compliant with Australian privacy standards for healthcare. Your consultation notes are kept in your file as they would be for an in-person consultation.</p> },
  { q: "What if the connection drops out during a video call?", a: <p>Your GP will try to reconnect. If the connection is unstable, the appointment usually continues by phone.</p> },
  { q: "Can telehealth prescriptions be sent to my pharmacy?", a: <p>Yes. Electronic prescriptions are sent to any Australian pharmacy of your choice.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Telehealth with your usual Earlwood GP." },
  { key: "bangor" as const, note: "Telehealth with your usual Bangor GP." },
  { key: "sanssouci" as const, note: "Telehealth with your usual Sans Souci GP." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Book a telehealth appointment through Automed" },
  { key: "bangor", sub: "Book a telehealth appointment through Automed" },
  { key: "sanssouci", sub: "Book a telehealth appointment through Automed" },
];

export default function TelehealthPage() {
  const schema = buildTelehealthSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "Telehealth" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Remote Care</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Telehealth,{" "}<span className="italic font-display-warm">by phone or video.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Telehealth consultations by phone or video for existing SMSG
                patients. Useful for follow-up appointments, mental health,
                results discussions, and specific consultations where a
                physical examination isn&apos;t required. Available across all
                three centres.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book a telehealth appointment<Arrow /></a>
                <a href="#when" className="btn-outline">When telehealth suits<Arrow /></a>
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
          <Image src="/website-images/telehealth-about-bg.webp" alt="A GP conducting a telehealth consultation at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About telehealth at SMSG</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Same care,{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>different room.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Telehealth means a consultation done remotely, either by video call or phone. It became a major part of general practice during COVID-19 and has continued as a standard mode of care where it suits. For SMSG patients, telehealth appointments are booked the same way as in-person appointments. Your GP calls or video-calls you at the appointment time. The consultation is Medicare-rebatable under standard rules.</p>
              <p>Telehealth doesn&apos;t replace in-person care where a physical examination is needed. Your GP will let you know if an in-person appointment is more appropriate for what you&apos;re seeing us about. Under current Medicare rules, telehealth is rebatable when there&apos;s an established doctor-patient relationship, generally meaning you&apos;ve had a face-to-face consultation with the same practice within the previous 12 months. Exceptions apply for some mental health items, reproductive and blood-borne virus items, patients in eligible rural and remote areas, patients experiencing homelessness, and Aboriginal and Torres Strait Islander patients through eligible services.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="when" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">When telehealth suits</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Follow-ups, results,{" "}<span className="italic font-display-warm">and mental health.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Telehealth doesn&apos;t suit new physical symptoms (chest pain, abdominal pain, rashes, joint pain, injuries), acute illness where a physical exam guides management, skin checks, vaccinations, procedures, or emergencies. Your GP will recommend in-person care where appropriate.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/telehealth-detail.webp" alt="A patient joining a telehealth appointment from home." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHEN_SUITS.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">How the appointment works</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Book, take the call,{" "}<span className="italic font-display-warm">follow up.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Book online through Automed and select a telehealth appointment type, or call reception. Confirm your contact number and whether you want a phone or video appointment. At the appointment time, your GP calls you at the number you&apos;ve provided. If you&apos;re doing a video consultation, you&apos;ll receive a link to join a secure video platform shortly before the appointment.</p>
              <p>During the consultation, your GP conducts things as they would in person. Any prescriptions can be sent electronically to your pharmacy, any referrals can be prepared and sent, any pathology or imaging requests can be issued, and a follow-up plan is agreed. If during the telehealth consultation your GP identifies something that needs in-person review, they&apos;ll book that or advise you to attend.</p>
              <p><strong>Preparation.</strong> Find a quiet, private space. Charge your phone or device. Make sure you have decent phone reception or internet connection. Have your notes ready (what you want to raise, your medications, any relevant test results). If using video, position your camera so your face is well lit and clearly visible. Have your Medicare card handy. For video appointments, your GP may ask you to use your camera to show a specific area (a skin lesion, an eye, or similar); this is not a substitute for physical examination but can help.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">With your usual GP,{" "}<span className="italic font-display-warm">wherever they consult.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Telehealth is available with any SMSG GP at any of our three centres. Your telehealth appointment is with your usual GP wherever they consult.</div>
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
              <p>Telehealth appointments follow the same billing arrangements as in-person appointments. Medicare rebates apply where the appointment meets Medicare&apos;s telehealth eligibility rules.</p>
              <p>Bulk-billing arrangements for telehealth vary by practitioner. Reception confirms specific fee arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book a telehealth appointment</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Book online through Automed and select the telehealth appointment type, or contact reception at the centre where your usual GP consults.</p>
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
            <Link href="/mental-health-care/" className="related-card"><span className="kicker">Related service</span><h3>Mental Health Care</h3><p>Many mental health consultations work well via telehealth.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/chronic-disease-and-lifestyle/" className="related-card"><span className="kicker">Related service</span><h3>Chronic Disease &amp; Lifestyle</h3><p>Regular chronic condition check-ins by phone or video.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/patient-information/scripts-and-referrals/" className="related-card"><span className="kicker">Patient info</span><h3>Scripts &amp; Referrals</h3><p>Automated request forms for simple renewals.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
