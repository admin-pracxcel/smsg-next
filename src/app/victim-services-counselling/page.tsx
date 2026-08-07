import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildVictimServicesSchema } from "./schema";

export const metadata: Metadata = {
  title: "Victim Services Counselling | Allied Health at SMSG",
  description:
    "Counselling for victims of violent crime in NSW, provided in coordination with Victims Services NSW. Speak to reception about eligibility.",
  alternates: { canonical: "https://smsg.au/victim-services-counselling/" },
};

function Arrow({ className = "arrow" }: { className?: string }) { return (<svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>); }
function Chev() { return (<span className="chev"><svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>); }

const MOSS_DOT_STYLE: React.CSSProperties = { background: "var(--moss)" };

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Adults and family members affected by violent crime in NSW" },
  { label: "Format", value: "Confidential, trauma-informed counselling" },
  { label: "Funded by", value: "Victims Services NSW for eligible patients" },
  { label: "Referral", value: "Police report not required; contact reception or Victims Services NSW" },
];

const WHAT = [
  "Working through the impact of what happened, at your own pace",
  "Managing symptoms of post-traumatic stress",
  "Anxiety, depression, or sleep changes since the event",
  "Nightmares, flashbacks, or dissociation",
  "Impacts on relationships, work, or daily function",
  "Support around court appearances or legal processes",
  "Grief for a family member or loved one",
  "Rebuilding a sense of safety and control",
];

const FAQS = [
  { q: "Do I need to have reported the crime to police?", a: <p>Support through Victims Services NSW does not require police reporting. Eligibility criteria are set by Victims Services NSW.</p> },
  { q: "How do I register with Victims Services NSW?", a: <p>Contact the Victims Access Line on 1800 633 063 or visit victimsservices.justice.nsw.gov.au. Our reception team can also help direct you.</p> },
  { q: "Is what I share confidential?", a: <p>Yes, with the standard limits that apply to all therapy: your counsellor may need to act on specific safety concerns (immediate risk to yourself or others, harm to a child). Your counsellor will explain this at the first session.</p> },
  { q: "Can I bring a family member to the session?", a: <p>That&apos;s up to you and your counsellor. Some sessions include family members; most are individual.</p> },
  { q: "What if I'm not eligible for Victims Services NSW support?", a: <p>Standard psychology and counselling remains available. Discuss with reception what options fit your situation. Trauma-informed care is available regardless of eligibility for the Victims Services scheme.</p> },
  { q: "Are your counsellors approved by Victims Services NSW?", a: <p>Our counsellors work with Victims Services NSW referrals. Reception can confirm specific approvals for the practitioner you&apos;d like to see.</p> },
  { q: "What if I need urgent support?", a: <p>For an immediate mental health crisis or safety concern, dial 000 or call Lifeline on 13 11 14. 1800RESPECT (1800 737 732) provides 24-hour national sexual assault and domestic violence support. See our{" "}<Link href="/patient-information/emergency-information/" className="link-editorial">Emergency Information page</Link>{" "}for full crisis contacts.</p> },
];

const LOCATIONS = [
  { key: "earlwood" as const, note: "Counselling and psychology; contact reception for specific availability." },
  { key: "bangor" as const, note: "Julia Magrin (counselling and psychotherapy)." },
  { key: "sanssouci" as const, note: "Counselling and psychology; contact reception for specific availability." },
];

const BOOK_TILES: Array<{ key: "earlwood" | "bangor" | "sanssouci"; sub: string }> = [
  { key: "earlwood", sub: "Contact reception for practitioner availability" },
  { key: "bangor", sub: "Julia Magrin, counselling and psychotherapy" },
  { key: "sanssouci", sub: "Contact reception for practitioner availability" },
];

export default function VictimServicesCounsellingPage() {
  const schema = buildVictimServicesSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Care", href: `${routes.home()}#care` },
            { label: "Allied Health", href: `${routes.home()}#care` },
            { label: "Victim Services Counselling" },
          ]} />
        </div>
      </div>

      <section className="relative overflow-hidden cream-band">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <span className="brand-chip"><span className="dot" style={MOSS_DOT_STYLE} />Allied Health · Trauma-Informed Support</span>
              <h1 className="font-display h-service max-w-[18ch] mt-6">Victim services{" "}<span className="italic font-display-warm">counselling.</span></h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Counselling for victims of violent crime in New South Wales,
                provided in coordination with Victims Services NSW. Confidential,
                trauma-informed support delivered by our counselling and
                psychology team.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">Enquire about this service<Arrow /></a>
                <a href="#eligibility" className="btn-outline">Who is eligible<Arrow /></a>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div><div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (<div key={row.label} className="glance-row"><div className="g-label">{row.label}</div><div className="g-val">{row.value}</div></div>))}
                <div className="g-foot"><span className="dot" /><span>Reception can talk you through the options</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/website-images/victim-services-counselling-about-bg.webp" alt="A counselling space at an SMSG centre." fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(50, 55, 45, 0.90) 0%, rgba(80, 85, 65, 0.85) 55%, rgba(50, 55, 45, 0.90) 100%)" }} />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">Support through{" "}<span className="italic font-display-warm" style={{ color: "var(--moss)" }}>Victims Services NSW.</span></h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>Victims Services NSW is a NSW Government agency that supports people affected by violent crime. Support includes funded counselling with approved providers, financial assistance for immediate needs, and recognition payments in certain circumstances.</p>
              <p>Counselling under this scheme is confidential, trauma-informed, and delivered by qualified counsellors, psychologists or social workers approved by Victims Services NSW. SMSG provides this counselling through our psychology and counselling team, based across Earlwood, Bangor and Sans Souci. If you&apos;re eligible for support through Victims Services NSW and would like to see one of our counsellors or psychologists, contact reception and we can guide you through the next step.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Who is eligible</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Set by{" "}<span className="italic font-display-warm">Victims Services NSW.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Eligibility for counselling and other support through Victims Services NSW is set by the NSW Government. In general, you may be eligible if you have been affected by:</p>
              <div className="mt-5 grid md:grid-cols-2 gap-x-16 gap-y-3">
                {[
                  "An act of violence in NSW",
                  "A crime causing physical or psychological injury",
                  "A family member who died as a result of an act of violence",
                  "Witnessing an act of violence",
                  "Sexual assault",
                  "Domestic and family violence",
                ].map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={MOSS_DOT_STYLE} /><span>{r}.</span></div>))}
              </div>
              <p className="mt-6">Both direct victims and family members of victims can be eligible for support. Eligibility applies regardless of whether a crime has been reported to police, and regardless of the outcome of any legal proceedings.</p>
              <p>For the most current eligibility information, visit the Victims Services NSW website (victimsservices.justice.nsw.gov.au) or call the Victims Access Line on{" "}<a href="tel:1800633063" className="link-editorial">1800 633 063</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">How to access</span><h2 className="font-display h-section mt-3 max-w-[18ch]">Two ways{" "}<span className="italic font-display-warm">to start.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p><strong>Through Victims Services NSW.</strong> Register with Victims Services NSW and request counselling as part of your support plan. Victims Services NSW allocates approved counselling hours, and you can request a specific approved counsellor or ask Victims Services NSW to recommend one.</p>
              <p><strong>Through SMSG directly.</strong> If you&apos;d like to see one of our counsellors or psychologists specifically, contact reception. We can guide you through what&apos;s needed and help coordinate with Victims Services NSW.</p>
              <p>Some situations don&apos;t require formal registration with Victims Services NSW. Reception can discuss the options that apply to your circumstances.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">What counselling covers</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Trauma-informed,{" "}<span className="italic font-display-warm">at your pace.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Sessions are confidential. What you share stays between you and your counsellor, unless there are specific safety concerns that require action.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image src="/website-images/victim-services-counselling-detail.webp" alt="A supportive space for counselling." fill sizes="(max-width: 768px) 100vw, 1280px" className="object-cover" />
          </figure>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {WHAT.map((r) => (<div key={r} className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"><span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={MOSS_DOT_STYLE} /><span>{r}.</span></div>))}
          </div>
        </div>
      </section>

      <section id="locations" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8"><span className="allcaps text-ink-3">Where it&apos;s offered</span><h2 className="font-display h-section mt-3 max-w-[22ch]">Across all{" "}<span className="italic font-display-warm">three centres.</span></h2></div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">Where counselling for children or adolescents is needed, our Kids&apos; Dr psychology and counselling team is available.</div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="contact-block">
            {LOCATIONS.map((loc) => { const c = CLINICS[loc.key]; return (<div key={loc.key} className="contact-row"><div className="label"><Link href={routes.location(loc.key)} className="link-editorial">{c.label}</Link></div><div className="value">{loc.note}</div></div>); })}
          </div>
        </div>
      </section>

      <section id="fees" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4"><span className="allcaps text-ink-3">Fees and billing</span><h2 className="font-display h-section mt-3 max-w-[15ch]">Funded by{" "}<span className="italic font-display-warm">Victims Services.</span></h2></div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>Counselling under the Victims Services NSW scheme is funded through Victims Services NSW for eligible patients. There is typically no out-of-pocket cost for approved sessions.</p>
              <p>For patients who don&apos;t qualify for Victims Services NSW support but would like counselling for trauma-related concerns, standard psychology and counselling billing applies. Reception can discuss the arrangements at booking.</p>
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
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>Enquire about victim services counselling</span>
              <h2 className="font-display mt-3 text-cream" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05, fontVariationSettings: "'SOFT' 100,'opsz' 144" }}>Ready to <span className="italic font-display-warm">reach out?</span></h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">You can contact reception at the centre closest to you, or contact Victims Services NSW directly on the Victims Access Line:{" "}<a href="tel:1800633063" className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">1800 633 063</a>. If this is a crisis or immediate safety concern, dial 000. 1800RESPECT (1800 737 732) is available 24/7 for sexual assault and domestic violence support.</p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {BOOK_TILES.map((t) => { const c = CLINICS[t.key]; const tel = c.phone.replace(/[^0-9+]/g, ""); return (<div key={t.key} className="px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25"><div className="font-display text-[19px] text-cream" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>{c.shortLabel}</div><div className="text-cream/70 text-[13px] mt-0.5">{t.sub}</div><div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[14px] text-cream/90"><a href={`tel:${tel}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.phone}</a><a href={`mailto:${c.email}`} className="underline underline-offset-4 decoration-cream/40 hover:decoration-cream transition">{c.email}</a></div></div>); })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href="/psychology-and-counselling/" className="related-card"><span className="kicker">Related service</span><h3>Psychology &amp; Counselling</h3><p>The full psychology and counselling team.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/mental-health-care/" className="related-card"><span className="kicker">Related service</span><h3>Mental Health Care</h3><p>GP-led mental health care and Mental Health Care Plans.</p><span className="go">Learn more <Arrow /></span></Link>
            <Link href="/patient-information/emergency-information/" className="related-card"><span className="kicker">Patient information</span><h3>Emergency Information</h3><p>Crisis support numbers and urgent care pathways.</p><span className="go">View contacts <Arrow /></span></Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
