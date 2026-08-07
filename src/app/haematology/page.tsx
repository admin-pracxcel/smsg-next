import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildHaematologySchema } from "./schema";

export const metadata: Metadata = {
  title: "Haematology | Excelsia Specialist Centre at SMSG",
  description:
    "Haematology consultations at Earlwood. Assessment and management of blood disorders, anaemia, clotting concerns, and blood cancers. GP referral required for the Medicare rebate.",
  alternates: { canonical: "https://smsg.au/haematology/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const GLANCE_ROWS = [
  { label: "Location", value: "Earlwood Medical Centre" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
  { label: "Billing", value: "Privately billed" },
  { label: "Related", value: "Pathology on-site at all three centres" },
];

const REASONS = [
  "Persistent anaemia not explained by common causes",
  "Iron deficiency requiring specialist input or intravenous iron",
  "Elevated or reduced white blood cell counts",
  "Elevated or reduced platelet counts",
  "Abnormal clotting studies",
  "Suspected or confirmed clotting disorders",
  "Family history of clotting disorders",
  "Deep vein thrombosis or pulmonary embolism follow-up",
  "Abnormal blood tests suggesting a bone marrow concern",
  "Suspected or confirmed lymphoma, leukaemia or myeloma",
  "Elevated haemoglobin or thick blood",
  "Enlarged lymph nodes or spleen",
];

const FAQS = [
  { q: "Do I need to see a GP first?", a: <p>Yes. A GP referral is required for the Medicare rebate to apply.</p> },
  { q: "What should I bring?", a: <p>Your GP referral, recent blood test results, any imaging, medication list, and any hospital or previous specialist letters.</p> },
  { q: "Will I need more tests?", a: <p>Often. Haematology relies heavily on blood tests, and additional investigations (imaging, sometimes bone marrow assessment) may be arranged after the initial consultation.</p> },
  { q: "Is iron deficiency covered?", a: <p>Yes. Persistent or unexplained iron deficiency is a common reason for haematology referral.</p> },
  { q: "How urgent is a referral?", a: <p>Referrals are triaged based on clinical priority indicated by your GP.</p> },
];

const BOOK_TILES: Array<{ key: "earlwood"; sub: string }> = [{ key: "earlwood", sub: "By GP referral · Excelsia specialist rooms" }];

export default function HaematologyPage() {
  const schema = buildHaematologySchema();
  return (
    <div className="theme-excelsia iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Excelsia Specialist Centre", href: routes.subBrand("excelsia") },
            { label: "Haematology" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden excelsia-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("excelsia")} className="brand-chip"><span className="dot" />Excelsia Specialty · Haematology</Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Haematology<span className="italic font-display-warm">.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Haematology consultations at Excelsia, based at Earlwood.
                Assessment and management of blood disorders, from anaemia
                and iron deficiency through to clotting concerns and blood
                cancers. GP referral required for the Medicare rebate.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Enquire about an appointment<Arrow /></a>
                <a href="#reasons" className="btn-outline">Common reasons for referral<Arrow /></a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (<div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>))}
                <div className="g-foot"><span className="dot" /><span>Reception confirms the fee at booking</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/haematology-about-bg.webp" alt="An infusion day room at Excelsia." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30, 55, 68, 0.90) 0%, rgba(50, 80, 95, 0.85) 55%, rgba(30, 55, 68, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the specialty</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Blood, marrow and{" "}<span className="italic font-display-warm" style={{ color: "var(--excelsia)" }}>clotting.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Haematology is the medical specialty focused on the blood, bone marrow, and the systems that produce blood cells and manage clotting. Haematologists assess and manage a wide range of conditions, from common concerns like persistent anaemia and iron deficiency through to more complex clotting disorders and blood cancers.</p>
              <p>Care is coordinated with your GP. Your GP identifies the concern, prepares a referral, and continues general care while the haematologist advises on the blood-related question.</p>
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
              <h2 className="font-display h-section mt-3 max-w-[22ch]">Common reasons{" "}<span className="italic font-display-warm">GPs refer.</span></h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Some patients need short-term specialist input; others are followed regularly over time.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/haematology-detail.webp" alt="Blood collection setup at Excelsia." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {REASONS.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--excelsia-deep)" }} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What happens at the consultation</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">Bloods lead{" "}<span className="italic font-display-warm">the picture.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Bring your GP referral, any recent blood test results (particularly full blood count, iron studies and any abnormal results), imaging results, a list of your current medications, and any hospital or previous specialist letters.</p>
              <ul>
                <li>A detailed history including symptoms, family history, medications and lifestyle factors.</li>
                <li>A clinical examination.</li>
                <li>Review of any tests you&apos;ve already had.</li>
                <li>A management plan that may include further investigation, treatment, and follow-up.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14"><div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">At <span className="italic font-display-warm">Earlwood.</span></h2></div></div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            <div className="contact-row">
              <div className="label"><Link href={routes.location("earlwood")} className="link-editorial">Earlwood Medical Centre</Link></div>
              <div className="value">Excelsia haematology consulting rooms. Weekly sessions by appointment through GP referral.</div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR SPECIALIST — consolidated practitioner content */}
      <section id="specialist" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Your specialist</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">The Excelsia{" "}<span className="italic font-display-warm">haematologist.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Haematology at Excelsia is delivered by{" "}
                <Link href={routes.practitioner("dr-qin-liu")} className="link-editorial">Dr Qin Liu</Link>,
                a Consultant Haematologist consulting from Earlwood, with
                subspecialty interests in lymphoma alongside general clinical,
                laboratory and obstetric haematology.
              </p>
              <p>
                Dr Liu consults in English and Mandarin. See her{" "}
                <Link href={routes.practitioner("dr-qin-liu")} className="link-editorial">practitioner profile</Link>{" "}
                for full clinical background, qualifications, hospital
                appointments, and consulting days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Privately <span className="italic font-display-warm">billed.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Haematology consultations are privately billed. A GP referral is required for the Medicare rebate to apply.</p>
              <p>Reception confirms the specific fee and expected out-of-pocket cost when you book.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">FAQ</span><h2 className="font-display h-section mt-3 max-w-[16ch]">Common <span className="italic font-display-warm">questions.</span></h2></div>
            <div className="md:col-span-8">
              {FAQS.map((f, i) => (<details key={i} className="faq-item"><summary>{f.q}<Chev /></summary><div className="faq-body">{f.a}</div></details>))}
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with Excelsia</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">A GP referral is required. Contact Earlwood reception, or book directly through Automed.</p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => {
                  const c = CLINICS[t.key]; const tel = c.phone.replace(/[^0-9+]/g, "");
                  return (
                    <div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25">
                      <div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div>
                      <div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90"><a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a><a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a></div>
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
            <Link href="/gastroenterology/" className="related-card"><span className="kicker">Related specialty</span><h3>Gastroenterology</h3><p>Digestive causes of iron deficiency.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/nephrology/" className="related-card"><span className="kicker">Related specialty</span><h3>Nephrology</h3><p>Kidney-related anaemia.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
