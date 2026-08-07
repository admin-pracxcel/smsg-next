import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { clinicList } from "@/lib/clinics";
import { buildAntenatalSchema } from "./schema";

export const metadata: Metadata = {
  title: "Antenatal Shared Care | Aurora at SMSG",
  description:
    "Share your antenatal care between your Aurora GP at Earlwood, Bangor or Sans Souci and the hospital where you'll give birth. Continuity of care from booking through delivery.",
  alternates: { canonical: "https://smsg.au/antenatal-shared-care/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h9M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Chev() {
  return (
    <span className="chev">
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M3 5l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const GLANCE_ROWS = [
  { label: "Suitable for", value: "Low-risk pregnancies" },
  { label: "Care model", value: "GP and hospital share visits" },
  { label: "Duration", value: "From booking to around 36 weeks" },
  { label: "Referral", value: "Not required to see an Aurora GP" },
];

const STAGES = [
  {
    span: "Weeks 6-12",
    title: "Confirmation and planning.",
    body: "Confirmation of pregnancy, dating scan referral, first bloods and screening tests, discussion of your options for care. This is where we work out whether shared care suits your situation.",
  },
  {
    span: "Weeks 12-20",
    title: "First results and morphology.",
    body: "First trimester screening results reviewed, second trimester bloods, morphology scan referral at 18 to 20 weeks. Alternating GP and hospital visits begin.",
  },
  {
    span: "Weeks 20-36",
    title: "Regular antenatal visits.",
    body: "Regular antenatal visits with your Aurora GP, hospital visits at the intervals set by your specific program. Your GP checks blood pressure, urine, foetal growth, position and movement, and talks through anything that comes up.",
  },
  {
    span: "Weeks 36+",
    title: "Hand-over to the hospital.",
    body: "Hand-over to the hospital for delivery. Your GP remains available for postnatal review, six-week check-up, contraception advice, immunisations for baby, and support with breastfeeding.",
  },
];

const FAQS = [
  {
    q: "Do I need a referral to start shared care with Aurora?",
    a: <p>No. Book directly with any Aurora GP.</p>,
  },
  {
    q: "Can I keep my usual GP outside SMSG for general care?",
    a: (
      <p>
        Yes. Many women see their existing GP for non-pregnancy issues and use
        Aurora for their pregnancy care. We coordinate with your GP so nothing
        falls between the cracks.
      </p>
    ),
  },
  {
    q: "Which hospitals do Aurora GPs share care with?",
    a: (
      <p>
        Aurora GPs work with the shared care programs at the local public
        hospitals. If you&apos;re planning to birth at a private hospital, we
        can discuss what care model works.
      </p>
    ),
  },
  {
    q: "What happens after the birth?",
    a: (
      <p>
        Your Aurora GP is available for postnatal review, six-week check,
        immunisations, contraception advice and support with breastfeeding.
        Dr Yashodha Ediriweera has IBCLC lactation training if you want
        additional lactation support.
      </p>
    ),
  },
  {
    q: "Can I combine shared care with an Aurora obstetrician?",
    a: (
      <p>
        Yes.{" "}
        <Link href={routes.practitioner("dr-aye-thidar-htun")} className="link-editorial">
          Dr Aye Thidar Htun
        </Link>{" "}
        sees Aurora patients where the shared care model isn&apos;t right, or
        where you&apos;d prefer a single consultant through pregnancy. Talk to
        your Aurora GP about the options at your first visit.
      </p>
    ),
  },
];

const LOCATIONS = [
  {
    key: "earlwood" as const,
    doctors: "Full Aurora GP team including Dr Lisa Cheng, Dr Yashodha Ediriweera and Dr Tao Geng.",
  },
  {
    key: "bangor" as const,
    doctors: "Aurora GPs including Dr Margaret Colwell and Dr Tao Geng.",
  },
  {
    key: "sanssouci" as const,
    doctors: "Aurora GPs including Dr Huiling Li, Dr Marloes Nordkamp, Dr Eileen Phuah and Dr Michelle Yeung.",
  },
];

export default function AntenatalSharedCarePage() {
  const schema = buildAntenatalSchema();
  return (
    <div className="theme-aurora iud-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Aurora Women & Babies Health", href: routes.subBrand("aurora") },
              { label: "Antenatal Shared Care" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden blush-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <Link href={routes.subBrand("aurora")} className="brand-chip">
                <span className="dot" />
                Aurora Service · Pregnancy Care
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Antenatal{" "}
                <span className="italic font-display-warm">shared care.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Share your antenatal care between your Aurora GP and the
                hospital where you plan to give birth. Most routine antenatal
                visits happen close to home with a GP who already knows you,
                while your hospital handles ultrasounds, specialist review
                where needed, and the birth itself.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book with an Aurora GP
                  <Arrow />
                </a>
                <a href="#stages" className="btn-outline">
                  See what shared care looks like
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

      {/* ==================== ABOUT ==================== */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/website-images/antenatal-shared-care-about-bg.webp"
            alt="A patient in her second trimester in consultation with an SMSG GP at Earlwood."
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
                A model built for{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--blush)" }}
                >
                  continuity.
                </span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Antenatal shared care is the model Australian public hospitals
                offer for women whose pregnancies are progressing normally.
                Rather than travelling to the hospital for every routine check,
                you see your GP for most visits and the hospital for the
                milestone appointments, ultrasounds and the birth.
              </p>
              <p>
                For women in Sydney&apos;s Inner West and south, the local
                public hospitals each run their own shared care program with
                specific gestational windows for hospital visits and a
                schedule of GP visits in between. Aurora GPs work within the
                guidelines of each program so that whichever hospital
                you&apos;re booked at, your care aligns with what the hospital
                expects at each stage.
              </p>
              <p>
                The Aurora team at SMSG has done shared care as long as SMSG
                has existed. If you already know which hospital you&apos;ll
                give birth at, we&apos;ll match you to a GP who works with
                that program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STAGES ==================== */}
      <section id="stages" className="relative blush-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What shared care looks like</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                A rhythm across{" "}
                <span className="italic font-display-warm">the pregnancy.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Every hospital program is slightly different. Your Aurora GP will
              explain the schedule for your specific program at your first
              visit.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/antenatal-shared-care-detail.webp"
              alt="Antenatal review at an SMSG centre."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {STAGES.map((s) => (
              <div key={s.span} className="step-card">
                <div className="st-num">{s.span}</div>
                <div className="st-title">{s.title}</div>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHEN NOT THE FIT ==================== */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Alternative models</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                When shared care{" "}
                <span className="italic font-display-warm">isn&apos;t the fit.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Shared care suits pregnancies that are progressing normally
                with no significant medical or obstetric concerns. If your
                history or your current pregnancy carries higher-than-average
                risk, you may need midwifery-led care or full obstetric care at
                the hospital instead.
              </p>
              <p>
                Reasons your GP might discuss a different model include a
                previous high-risk pregnancy, a chronic health condition
                affecting the pregnancy, a multiple pregnancy, a pregnancy
                conceived through assisted reproduction where the specialist
                team wants continuity, or preferences you have around the
                birth.
              </p>
              <p>
                At Aurora, we also offer full obstetric care through{" "}
                <Link
                  href={routes.practitioner("dr-aye-thidar-htun")}
                  className="link-editorial"
                >
                  Dr Aye Thidar Htun
                </Link>
                , our Obstetrician &amp; Gynaecologist. If shared care is not
                the fit for you, we can discuss whether{" "}
                <Link href="/obstetrics-and-pregnancy-care/" className="link-editorial">
                  Aurora obstetric care
                </Link>{" "}
                works better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHERE OFFERED ==================== */}
      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Across all{" "}
                <span className="italic font-display-warm">three centres.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Antenatal shared care is available at all three SMSG centres.
              Book with a GP at the centre closest to you.
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

      {/* ==================== FEES ==================== */}
      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
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
                the specific fee at booking.
              </p>
              <p>
                See our{" "}
                <Link href={routes.patientInfo("fees-and-billing")} className="link-editorial">
                  Fees &amp; Billing page
                </Link>{" "}
                for the framework across the group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">FAQ</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Common{" "}
                <span className="italic font-display-warm">questions.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                If your question isn&apos;t here, reception can point you to
                the right Aurora GP or your GP will walk through it at your
                first visit.
              </p>
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

      {/* ==================== BOOK ==================== */}
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
                Choose the centre closest to you and book with any Aurora GP.
                If you have a specific GP in mind, book with them directly.
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

      {/* ==================== RELATED ==================== */}
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
            <Link href="/obstetrics-and-pregnancy-care/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Obstetrics &amp; Pregnancy Care</h3>
              <p>Full specialist obstetric care with Dr Aye Thidar Htun, for pregnancies that need it.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/breastfeeding-and-lactation-support/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Breastfeeding &amp; Lactation Support</h3>
              <p>Breastfeeding and lactation support with the Aurora team, including Dr Yashodha Ediriweera.</p>
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
