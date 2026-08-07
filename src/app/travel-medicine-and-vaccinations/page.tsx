import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildTravelMedicineSchema } from "./schema";

export const metadata: Metadata = {
  title: "Travel Medicine & Vaccinations | SMSG",
  description:
    "Pre-travel consultations, vaccinations, and childhood immunisations across all three SMSG centres. Talk to your GP before you travel.",
  alternates: { canonical: "https://smsg.au/travel-medicine-and-vaccinations/" },
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
  { label: "Suitable for", value: "Travellers, families, and anyone due for a vaccine" },
  { label: "Duration", value: "15 to 45 minutes, longer for complex trips" },
  { label: "Includes", value: "Travel consults, vaccines, childhood immunisations" },
  { label: "Referral", value: "Not required" },
];

const WHAT = [
  "Destination-specific pre-travel consultations, ideally 6 to 8 weeks ahead",
  "Malaria prevention and other prophylactic medications",
  "Common travel vaccines including Hepatitis A and B, typhoid and meningococcal",
  "Yellow Fever vaccination (confirm current availability with reception)",
  "Childhood immunisations under the National Immunisation Program",
  "Catch-up vaccinations for children behind on the schedule",
  "Adult vaccines including annual flu, COVID-19 boosters, pertussis and shingles",
  "Post-travel review where symptoms or exposure needs follow-up",
];

const FAQS = [
  { q: "When should I book my travel consultation?", a: <p>Ideally 6 to 8 weeks before you leave. Some vaccine schedules require multiple doses over several weeks. If you&apos;re travelling sooner than that, book anyway; we can prioritise the most important vaccines.</p> },
  { q: "Do I need a referral?", a: <p>No. Travel medicine and vaccinations are GP services.</p> },
  { q: "How do I find out what vaccines I need for my destination?", a: <p>Bring your itinerary to the consultation, including all countries you&apos;ll visit and stopover points. Your GP references current recommendations from Smartraveller and the Department of Health.</p> },
  { q: "Can I get Yellow Fever vaccination at SMSG?", a: <p>Yellow Fever administration requires specific accreditation. Contact reception to confirm current availability at your preferred centre. If not available, we can direct you to an accredited centre nearby.</p> },
  { q: "Are childhood vaccinations under the National Immunisation Program free?", a: <p>Yes. The vaccines themselves are free. A consultation fee may apply for the appointment.</p> },
  { q: "What if my child is behind on the immunisation schedule?", a: <p>Catch-up vaccinations can be planned in a longer appointment. Your GP will develop a schedule to bring your child up to date.</p> },
  { q: "Can I get vaccines outside the immunisation schedule?", a: <p>Yes. Adults, adolescents and children can be vaccinated for indications outside the NIP schedule where clinically appropriate. Your GP will advise.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "All GPs. Saturday appointments useful for family visits." },
  { key: "bangor" as const, note: "All GPs." },
  { key: "sanssouci" as const, note: "All GPs." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Travel consultations and childhood immunisations, Saturday available" },
  { key: "bangor", sub: "Travel consultations, vaccines and childhood immunisations" },
  { key: "sanssouci", sub: "Travel consultations, vaccines and childhood immunisations" },
];

export default function TravelMedicinePage() {
  const schema = buildTravelMedicineSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "General Practice", href: `${routes.home()}#care` },
            { label: "Travel Medicine & Vaccinations" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip" style={BRAND_CHIP_STYLE}><span className="dot" style={BRAND_DOT_STYLE} />General Practice · Travel &amp; Immunisations</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Travel medicine{" "}<span className="italic font-display-warm">and vaccinations.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Before you travel, a consultation with your GP covers what
                vaccines you need, what health risks apply to your
                destination, and what to take with you. For families,
                childhood immunisations under the National Immunisation
                Program keep the standard schedule up to date. Available
                across all three SMSG centres.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Book with your GP<Arrow /></a>
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
          <Image src="/website-images/travel-medicine-and-vaccinations-about-bg.webp" alt="A travel medicine and vaccination consult at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43, 35, 28, 0.90) 0%, rgba(75, 60, 48, 0.85) 55%, rgba(43, 35, 28, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the consultation</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Talk to your GP{" "}<span className="italic font-display-warm" style={{ color: "var(--brand)" }}>before you go.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Book a travel consultation ideally 6 to 8 weeks before you leave. This gives time for vaccines to take effect (some require multiple doses spaced weeks apart) and for any specific arrangements to be made. Your consultation covers destination-specific health risks, required and recommended vaccines, malaria prevention and other prophylactic medications, food and water safety, insect avoidance, altitude and climate considerations, traveller&apos;s diarrhoea, medications to take with you, a travel medical kit, and what to do if you get sick overseas.</p>
              <p>For complex trips (long duration, remote destinations, multi-country itineraries) a longer consultation may be needed. Yellow Fever vaccination is required for entry to certain countries and can only be administered at centres approved by the Department of Health and Aged Care. If you need Yellow Fever, contact reception in advance to confirm current availability, or we can direct you to an accredited centre nearby.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What&apos;s covered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Travel vaccines, childhood{" "}<span className="italic font-display-warm">immunisations, and boosters.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Common travel vaccines include Hepatitis A and B, typhoid, tetanus/diphtheria/pertussis (if boosters are due), influenza, COVID-19, meningococcal, Japanese encephalitis, rabies and cholera.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/travel-medicine-and-vaccinations-detail.webp" alt="Preparing for a travel medicine appointment." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={BRAND_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Childhood and adult vaccinations</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Standard schedules,{" "}<span className="italic font-display-warm">and catch-ups.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Childhood immunisations under the National Immunisation Program (NIP) are free for children and are provided by any SMSG GP. The NIP schedule includes vaccines at birth, 6 weeks, 4 months, 6 months, 12 months, 18 months, 4 years, and adolescent years. Your child&apos;s individual schedule may vary based on medical history. Immunisations are recorded in the Australian Immunisation Register and can be accessed through your Medicare online account or the Express Plus Medicare app.</p>
              <p>For families whose children are behind on the schedule (for any reason, including moving from overseas), catch-up vaccinations can be planned during a longer appointment.</p>
              <p>Adult vaccinations recommended under the National Immunisation Program include annual influenza, COVID-19 boosters as recommended, pertussis (whooping cough) booster particularly for pregnant women and grandparents, shingles vaccine for eligible adults, pneumococcal vaccine for eligible adults, and tetanus and diphtheria boosters every 10 years. Ask your GP whether you&apos;re up to date on your recommended adult immunisations.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Travel medicine and vaccinations are available across all three centres. Yellow Fever availability may vary; confirm with reception.</div>
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
              <p>Standard consultations for travel medicine and vaccinations are billed under standard consultation rules. Longer consultations may attract a longer consultation fee with a Medicare rebate applying. Vaccines under the National Immunisation Program are free. Travel vaccines are typically privately purchased; the cost varies by vaccine. Reception can provide an estimate at booking.</p>
              <p>For adult vaccines funded under the NIP for eligible groups (such as annual influenza for over 65s, shingles for eligible adults), the vaccine itself is free and a consultation fee may apply for the appointment.</p>
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
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">Travel medicine and vaccinations are GP services. No referral required. Contact reception at the centre closest to you, or book directly through Automed.</p>
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
            <Link href="/kids-dr/" className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Paediatric care and childhood immunisations under one roof.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href="/medicals-and-assessments/" className="related-card"><span className="kicker">Related service</span><h3>Medicals &amp; Assessments</h3><p>Pre-employment, driver&apos;s licence and commercial medicals.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
