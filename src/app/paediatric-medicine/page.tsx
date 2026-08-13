import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildPaediatricMedicineSchema } from "./schema";

export const metadata: Metadata = {
  title: "Paediatric Medicine | Excelsia Specialist Centre at SMSG",
  description:
    "Paediatric medicine consultations with Dr Damian Lees, Dr Martina Popelkova and Dr Moe Moe Thinn across Earlwood and Sans Souci. General and developmental paediatrics.",
  alternates: { canonical: "https://smsg.au/paediatric-medicine/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const GLANCE_ROWS = [
  { label: "Consultants", value: "Consultant paediatricians" },
  { label: "Locations", value: "Earlwood, Sans Souci" },
  { label: "Referral", value: "GP referral required for Medicare rebate" },
  { label: "Dual sub-brand", value: "Excelsia and Kids' Dr" },
];

const REASONS = [
  "General paediatric review for infants, children and adolescents",
  "Growth and feeding concerns",
  "Persistent or recurrent illness",
  "Asthma, eczema and allergy management",
  "Sleep concerns",
  "Developmental questions",
  "Behavioural and emotional concerns",
  "Attention and learning concerns (see Kids' Dr for the developmental pathway)",
  "Autism assessment (see Kids' Dr)",
  "ADHD assessment and management (see Kids' Dr)",
  "Adolescent health concerns",
  "Chronic paediatric conditions requiring specialist input",
];

const FAQS = [
  { q: "Do I need to see a GP first?", a: <p>Yes. A GP referral is required for the Medicare rebate to apply to paediatric consultations.</p> },
  { q: "Should I book with Excelsia or Kids' Dr?", a: <p>For general paediatric review, either. For care that involves developmental assessment, behavioural concerns, psychometric assessment or coordinated allied health, <Link href={routes.subBrand("kidsdr")} className="link-editorial">Kids&apos; Dr</Link> is the sub-brand designed around that. If you&apos;re unsure, reception can guide you.</p> },
  { q: "What should I bring?", a: <p>Your GP referral, your child&apos;s blue book if under school age, any recent test results, previous specialist letters, and a list of current medications.</p> },
  { q: "Will the paediatrician communicate with my GP?", a: <p>Yes. After each consultation, the paediatrician sends a letter back to your GP with the assessment and plan.</p> },
  { q: "Can the paediatrician communicate with my child's school?", a: <p>Yes, with your consent.</p> },
  { q: "What ages do paediatricians see?", a: <p>From birth through adolescence. Older adolescents may transition to adult care, and your paediatrician will discuss timing when relevant.</p> },
];

const LOCATIONS = [
  { key: "sanssouci" as const, doctors: <>Dr Moe Moe Thinn and Dr Martina Popelkova. <Link href={routes.subBrand("kidsdr")} className="link-editorial">Kids&apos; Dr</Link> multidisciplinary team is based here.</> },
  { key: "earlwood" as const, doctors: <>Dr Damian Lees. Dr Popelkova also consults here.</> },
];

const BOOK_TILES: Array<{ key: "sanssouci" | "earlwood"; sub: string }> = [
  { key: "sanssouci", sub: "Dr Moe Moe Thinn · Dr Martina Popelkova" },
  { key: "earlwood", sub: "Dr Damian Lees" },
];

export default function PaediatricMedicinePage() {
  const schema = buildPaediatricMedicineSchema();
  return (
    <div className="theme-excelsia iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Excelsia Specialist Centre", href: routes.subBrand("excelsia") },
            { label: "Paediatric Medicine" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden excelsia-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("excelsia")} className="brand-chip"><span className="dot" />Excelsia Specialty · Paediatric Medicine</Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Paediatric{" "}<span className="italic font-display-warm">medicine.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Paediatric medicine consultations at Excelsia across Earlwood
                and Sans Souci. Consultant paediatricians covering
                general and developmental paediatrics, working alongside our{" "}
                <Link href={routes.subBrand("kidsdr")} className="link-editorial">Kids&apos; Dr</Link>{" "}
                multidisciplinary team for children whose care sits within
                that broader framework.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Enquire about a paediatric appointment<Arrow /></a>
                <a href="#reasons" className="btn-outline">What we cover<Arrow /></a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div><div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (<div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>))}
                <div className="g-foot"><span className="dot" /><span>Kids&apos; Dr for coordinated multidisciplinary care</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/paediatric-medicine-about-bg.webp" alt="A paediatric medicine consultation at Excelsia." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(30, 55, 68, 0.90) 0%, rgba(50, 80, 95, 0.85) 55%, rgba(30, 55, 68, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the specialty</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Infants, children{" "}<span className="italic font-display-warm" style={{ color: "var(--excelsia)" }}>and adolescents.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Paediatric medicine is the medical specialty focused on the health of infants, children and adolescents. Paediatricians assess and manage a wide range of concerns, from acute illness and growth issues through to chronic conditions and developmental concerns.</p>
              <p>At SMSG, paediatric medicine sits across Excelsia (specialist consulting) and Kids&apos; Dr (our multidisciplinary paediatric team based at Sans Souci). For families whose child&apos;s concern is a general paediatric question, either pathway works. For families seeking coordinated multidisciplinary paediatric care including allied health, psychology and psychometric assessment, Kids&apos; Dr is the sub-brand designed around that.</p>
              <p>Care is coordinated with your GP. Your GP identifies the concern, prepares a referral, and continues general care while the paediatrician advises on the specific question.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" className="relative excelsia-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What consultations cover</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Common reasons{" "}<span className="italic font-display-warm">GPs refer.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Dr Moe Moe Thinn is a Consultant Developmental and General
              Paediatrician at Sans Souci. Dr Martina Popelkova is a
              Consultant Paediatrician at Sans Souci. Dr Damian Lees is a
              General Paediatrician at Earlwood.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/paediatric-medicine-detail.webp" alt="Paediatric consulting room at Excelsia." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {REASONS.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: "var(--excelsia-deep)" }} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">What happens at the consultation</span><h2 className="font-display h-section mt-3 max-w-[18ch]">History, exam,{" "}<span className="italic font-display-warm">a plan.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Bring your GP referral, any recent test results, previous specialist letters, and your child&apos;s health record (blue book for infants and children under school age). For infants and younger children, note recent weight, feeding patterns and any concerns you&apos;d like to raise.</p>
              <p>For adolescents, discussing beforehand what your child would like to be part of the consultation is helpful. Paediatricians work with adolescents in ways that respect their emerging autonomy.</p>
              <ul>
                <li>A detailed history from you (and, where relevant, your child).</li>
                <li>A clinical examination.</li>
                <li>Review of any tests or reports you&apos;ve already had.</li>
                <li>A management plan that may include further investigation, treatment, allied health input, and follow-up.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14"><div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Sans Souci and{" "}<span className="italic font-display-warm">Earlwood.</span></h2></div></div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.doctors}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Privately <span className="italic font-display-warm">billed.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Paediatric consultations are privately billed. A GP referral is required for the Medicare rebate to apply.</p>
              <p>Longer initial appointments and assessment appointments may have a different fee structure from standard review appointments. Reception confirms the specific fees at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Book with Excelsia</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">book?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">A GP referral is required. Contact reception at the centre you&apos;d prefer, or book directly through Automed.</p>
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
            <Link href={routes.subBrand("excelsia")} className="related-card"><span className="kicker">Sub-brand</span><h3>Excelsia Specialist Centre</h3><p>The full specialist team across nine disciplines.</p><span className="go">Meet the team <Arrow /></span></Link>
            <Link href={routes.subBrand("kidsdr")} className="related-card"><span className="kicker">Sub-brand</span><h3>Kids&apos; Dr</h3><p>Multidisciplinary paediatric care with allied health and psychology.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/adhd-diagnosis-and-management/" className="related-card"><span className="kicker">Related service</span><h3>ADHD Diagnosis &amp; Management</h3><p>ADHD-specific pathway within Kids&apos; Dr.</p><span className="go">Learn more <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
