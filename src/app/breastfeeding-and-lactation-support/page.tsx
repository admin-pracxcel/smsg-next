import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";
import { buildBreastfeedingSchema } from "./schema";

export const metadata: Metadata = {
  title: "Breastfeeding & Lactation Support | Aurora at SMSG",
  description:
    "Breastfeeding support from the Aurora team at Earlwood, Bangor and Sans Souci. Latch, supply, pain, weaning and returning to work. Dr Yashodha Ediriweera has IBCLC lactation training.",
  alternates: { canonical: "https://smsg.au/breastfeeding-and-lactation-support/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chev() {
  return (
    <span className="chev">
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

const GLANCE_ROWS = [
  { label: "When to book", value: "Any point from pregnancy onwards" },
  { label: "Common concerns", value: "Latch, supply, pain, weaning, medications" },
  { label: "Lactation-trained", value: "Dr Yashodha Ediriweera has IBCLC lactation training" },
  { label: "Referral", value: "Not required" },
];

const REASONS = [
  "Difficulty with latch in the first days or weeks",
  "Persistent pain during or after feeding",
  "Concerns about supply, low or oversupply",
  "Blocked ducts, mastitis, thrush",
  "Weight gain concerns for baby",
  "Reflux, colic and other feeding-related infant concerns",
  "Nipple damage that isn't settling",
  "Medication safety while breastfeeding",
  "Planning return to work while continuing to feed",
  "Weaning support",
];

const WALKTHROUGH = [
  {
    title: "Full history and observation.",
    body: "We start with your birth, how feeding has gone so far, what you've tried, how your baby is going, and what you're most concerned about. We look at a feed if we can, or talk through what feeds are looking like.",
  },
  {
    title: "Latch and technique.",
    body: "For latch and technique concerns, we work through positions and adjustments, and you may need to try different approaches over subsequent visits.",
  },
  {
    title: "Supply.",
    body: "For supply concerns, we take a broader view: sleep, nutrition, hydration, medications, the birth experience, and hormonal factors can all play a role. Sometimes the issue is what you'd expect. Sometimes it isn't.",
  },
  {
    title: "Pain.",
    body: "For pain concerns, we look at latch, and also at less obvious contributors like tongue tie, thrush, vasospasm, or damaged skin needing time and care.",
  },
  {
    title: "Medication questions.",
    body: "For medication questions, we check what's safe during lactation. Most medications are compatible with breastfeeding, but some aren't, and some need a different approach. Your GP can look this up with you.",
  },
];

const FAQS = [
  {
    q: "When should I book if I'm having difficulty?",
    a: (
      <p>
        As soon as you feel you need support. Waiting rarely helps. Common
        early concerns like painful latch or supply worry are more resolvable
        when addressed early.
      </p>
    ),
  },
  {
    q: "Can I bring baby to the appointment?",
    a: (
      <p>
        Yes, please do. Watching a feed is often the most useful part of the
        appointment.
      </p>
    ),
  },
  {
    q: "Can Aurora GPs prescribe for medications that support supply, or manage mastitis?",
    a: (
      <p>
        Yes. Aurora GPs manage the standard medical concerns that come up in
        breastfeeding, including mastitis, thrush, medications and safe
        combinations.
      </p>
    ),
  },
  {
    q: "Do I need to book with Dr Ediriweera specifically?",
    a: (
      <p>
        Not always. Most breastfeeding concerns can be managed by any Aurora
        GP. Dr Ediriweera has IBCLC lactation training if you&apos;d prefer
        to book with her.
      </p>
    ),
  },
  {
    q: "What if I want to wean?",
    a: (
      <p>
        Weaning is part of breastfeeding care. We support you whatever your
        goal is, whether that&apos;s continuing longer than average or
        stopping sooner. Aurora GPs help you work through the physical and
        emotional side of weaning at your pace.
      </p>
    ),
  },
  {
    q: "What if I've been told I can't breastfeed for a medical reason?",
    a: (
      <p>
        Come and see us anyway. Some situations that are described as
        &ldquo;can&apos;t breastfeed&rdquo; turn out to be manageable, and
        where they aren&apos;t, we support you with formula feeding, mixed
        feeding, and the emotional side of that.
      </p>
    ),
  },
  {
    q: "Are there support services outside SMSG?",
    a: (
      <p>
        Yes. The Australian Breastfeeding Association (
        <a href="tel:1800686268" className="link-editorial">
          1800 686 268
        </a>
        ) offers 24-hour peer support and is a good resource alongside GP
        care.
      </p>
    ),
  },
];

const LOCATIONS = [
  {
    key: "earlwood" as const,
    doctors: (
      <>
        <Link
          href={routes.practitioner("dr-yashodha-ediriweera")}
          className="link-editorial"
        >
          Dr Yashodha Ediriweera
        </Link>
        , plus other Aurora GPs.
      </>
    ),
  },
  {
    key: "bangor" as const,
    doctors: <>Aurora GPs including Dr Margaret Colwell.</>,
  },
  {
    key: "sanssouci" as const,
    doctors: (
      <>
        Aurora GPs including Dr Huiling Li, Dr Marloes Nordkamp, Dr Eileen
        Phuah and Dr Michelle Yeung.
      </>
    ),
  },
];

export default function BreastfeedingPage() {
  const schema = buildBreastfeedingSchema();
  return (
    <div className="theme-aurora iud-page">
      {/* BREADCRUMB */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Aurora Women & Babies Health", href: routes.subBrand("aurora") },
              { label: "Breastfeeding & Lactation Support" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden blush-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("aurora")} className="brand-chip">
                <span className="dot" />
                Aurora Service · Postnatal Care
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Breastfeeding and{" "}
                <span className="italic font-display-warm">lactation support.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Breastfeeding is often described as natural, and it can be.
                It&apos;s also frequently harder than expected, especially in
                the first weeks. Aurora GPs support new mothers through the
                whole arc, from latch and supply issues in the early days
                through returning to work, weaning, and everything in between.{" "}
                <Link
                  href={routes.practitioner("dr-yashodha-ediriweera")}
                  className="link-editorial"
                >
                  Dr Yashodha Ediriweera
                </Link>{" "}
                has IBCLC lactation training.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book with Aurora
                  <Arrow />
                </a>
                <a href="#reasons" className="btn-outline">
                  Common reasons women book
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">What this service covers.</div>
                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}
                <div className="g-foot">
                  <span className="dot" />
                  <span>Reception confirms the fee at booking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/website-images/breastfeeding-and-lactation-support-about-bg.webp"
            alt="A mother with her newborn at home."
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(110,31,58,0.8) 0%, rgba(154,47,82,0.8) 55%, rgba(110,31,58,0.8) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Part of{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--blush)" }}
                >
                  women&apos;s health.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Breastfeeding support at Aurora ranges from a fifteen-minute
                consultation about a specific concern to ongoing support
                through the first year and beyond. Aurora GPs see
                breastfeeding as part of women&apos;s health, not a separate
                specialty, and there&apos;s no threshold you have to reach
                before it&apos;s worth booking.
              </p>
              <p>
                Dr Yashodha Ediriweera at Earlwood has IBCLC lactation
                training. Other Aurora GPs regularly manage breastfeeding
                concerns as part of postnatal and infant care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section id="reasons" className="relative blush-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Common reasons</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Reasons women{" "}
                <span className="italic font-display-warm">book with us.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              None of these is too small to bring in. If it&apos;s on your
              mind, it&apos;s worth an appointment.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-3">
            {REASONS.map((r) => (
              <div
                key={r}
                className="flex gap-3 items-start border-t border-black/10 pt-3 text-[15px] text-ink-2"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                  style={{ background: "var(--aurora-deep)" }}
                />
                <span>{r}.</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">In the appointment</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                What happens{" "}
                <span className="italic font-display-warm">when you come in.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Every appointment starts from where you are. Some are one visit,
              some are the first of several as we work through it together.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/breastfeeding-and-lactation-support-detail.webp"
              alt="A lactation consultant session at an SMSG centre."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {WALKTHROUGH.map((w, i) => (
              <div key={i} className="step-card">
                <div className="st-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="st-title">{w.title}</div>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIED SUPPORT */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Coordinated support</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Allied support{" "}
                <span className="italic font-display-warm">where it helps.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                Referrals within SMSG are seamless and coordinated back
                through your Aurora GP.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="contact-block">
                <div className="contact-row">
                  <div className="label">Dietetics</div>
                  <div className="value">
                    For maternal nutrition, and for infant feeding questions
                    once solids are introduced.
                  </div>
                </div>
                <div className="contact-row">
                  <div className="label">Psychology</div>
                  <div className="value">
                    For postnatal mental health, which affects and is affected
                    by feeding.
                  </div>
                </div>
                <div className="contact-row">
                  <div className="label">Speech pathology</div>
                  <div className="value">
                    For infants with feeding difficulties suggestive of oral
                    function issues.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE OFFERED */}
      <section id="locations" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Across{" "}
                <span className="italic font-display-warm">all three centres.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Aurora GPs manage breastfeeding concerns across the group.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="contact-block">
            {LOCATIONS.map((loc) => {
              const c = clinicList.find((x) => x.key === loc.key)!;
              return (
                <div key={loc.key} className="contact-row">
                  <div className="label">
                    <Link href={routes.location(loc.key)} className="link-editorial">
                      {c.label}
                    </Link>
                  </div>
                  <div className="value">{loc.doctors}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Fees and billing</span>
              <h2 className="font-display h-section mt-3 max-w-[15ch]">
                Confirmed at{" "}
                <span className="italic font-display-warm">booking.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Billing arrangements vary by practitioner. Reception confirms
                the specific fee at booking. Longer consultations or extended
                lactation review appointments may attract a different fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">FAQ</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Common{" "}
                <span className="italic font-display-warm">questions.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              {FAQS.map((f, i) => (
                <details key={i} className="faq-item">
                  <summary>
                    {f.q}
                    <Chev />
                  </summary>
                  <div className="faq-body">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOK */}
      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span className="allcaps" style={{ color: "rgba(245,238,224,0.6)" }}>
                Book with Aurora
              </span>
              <h2
                className="font-display mt-3 text-cream"
                style={{
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  lineHeight: 1.05,
                  fontVariationSettings: "'SOFT' 100,'opsz' 144",
                }}
              >
                Ready to{" "}
                <span className="italic font-display-warm">book?</span>
              </h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">
                Book with any Aurora GP at the centre closest to you.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {clinicList.map((clinic) => (
                  <a
                    key={clinic.key}
                    href={clinic.automedBase}
                    target="_blank"
                    rel="noopener"
                    className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25 hover:bg-cream/10 hover:border-cream/50 transition group"
                  >
                    <div>
                      <div
                        className="font-display text-[19px] text-cream"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                      >
                        {clinic.label}
                      </div>
                      <div className="text-cream/70 text-[13px] mt-0.5">
                        Book with any Aurora GP
                      </div>
                    </div>
                    <Arrow className="arrow text-cream/80" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.subBrand("aurora")} className="related-card">
              <span className="kicker">Sub-brand</span>
              <h3>Aurora Women &amp; Babies Health</h3>
              <p>The full women&apos;s health team, from your first period through menopause.</p>
              <span className="go">
                Meet the team <Arrow />
              </span>
            </Link>
            <Link href="/antenatal-shared-care/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Antenatal Shared Care</h3>
              <p>Pregnancy care shared between your Aurora GP and your hospital.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/obstetrics-and-pregnancy-care/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Obstetrics &amp; Pregnancy Care</h3>
              <p>Dr Htun&apos;s specialist practice for pregnancies that need specialist-led care.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
