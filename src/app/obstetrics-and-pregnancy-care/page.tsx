import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import { buildObstetricsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Obstetrics & Pregnancy Care | Aurora at SMSG",
  description:
    "Specialist obstetric care during pregnancy and gynaecological consultations at Aurora Women & Babies Health, Earlwood. GP referral required for the Medicare rebate.",
  alternates: { canonical: "https://smsg.au/obstetrics-and-pregnancy-care/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
  { label: "Care model", value: "Specialist obstetrician-gynaecologist" },
  { label: "Scope", value: "Pregnancy care, delivery, gynaecology" },
  { label: "Referral", value: "Required for Medicare rebate" },
  { label: "Location", value: "Earlwood Medical Centre" },
];

const GYNAE_REASONS = [
  "Persistent or worsening pelvic pain",
  "Heavy or irregular menstrual bleeding not resolving with first-line management",
  "Suspected endometriosis",
  "Fibroids causing symptoms",
  "Ovarian cysts identified on imaging",
  "Polycystic ovary syndrome with fertility implications",
  "Menopausal symptoms not settling with first-line care",
  "Recurrent miscarriage",
  "Fertility concerns",
  "Prolapse or urinary symptoms",
];

const FAQS = [
  {
    q: "Do I need a GP referral?",
    a: (
      <p>
        Yes. A GP referral is required for the Medicare rebate to apply. Your
        usual GP or an Aurora GP can prepare the referral.
      </p>
    ),
  },
  {
    q: "Can Aurora GPs refer internally?",
    a: (
      <p>
        Yes. If you&apos;re already seeing an Aurora GP and they identify a
        concern that needs specialist review, they will refer internally.
      </p>
    ),
  },
  {
    q: "Is this public or private obstetric care?",
    a: <p>Private. Fees apply.</p>,
  },
  {
    q: "What if I've had a shared care pregnancy before and want obstetric care this time?",
    a: (
      <p>
        That&apos;s a common reason to shift models. An initial consultation is
        the right place to talk through your previous pregnancy and plan this
        one.
      </p>
    ),
  },
  {
    q: "Are gynaecology-only referrals suitable?",
    a: <p>Yes. Gynaecological consultations are a substantial part of the service, independent of pregnancy.</p>,
  },
];

export default function ObstetricsPage() {
  const schema = buildObstetricsSchema();
  const earlwood = CLINICS.earlwood;
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
              { label: "Obstetrics & Pregnancy Care" },
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
                Aurora Service · Specialist Obstetrics
              </Link>
              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Obstetrics and{" "}
                <span className="italic font-display-warm">pregnancy care.</span>
              </h1>
              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Specialist obstetric care during pregnancy and gynaecological
                consultations at Aurora, based at Earlwood. For patients who
                want specialist-led antenatal review alongside their Aurora GP,
                or who need gynaecological review beyond what a GP can address.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Enquire about an appointment
                  <Arrow />
                </a>
                <a href="#gynae" className="btn-outline">
                  Gynaecological consultations
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
                  <span>Privately billed with Medicare rebate on valid referral</span>
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
            src="/website-images/obstetrics-and-pregnancy-care-about-bg.webp"
            alt="A postnatal review at an Aurora consultation."
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
                Specialist-led{" "}
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
                Obstetric care with a specialist obstetrician means you see
                the same clinician for your antenatal review through
                pregnancy. For patients who want specialist-led antenatal
                review alongside their Aurora GP, or whose history or current
                pregnancy warrants specialist input from the start, this is
                the model.
              </p>
              <p>
                Gynaecological consultations cover the conditions and concerns
                that sit outside routine general practice. Menstrual disturbance
                that needs investigation, pelvic pain, endometriosis assessment
                and management, fibroids, ovarian cysts, polycystic ovary
                syndrome that needs specialist input, prolapse, urinary
                incontinence, and pre-conception review after previous
                pregnancy complications.
              </p>
              <p>
                Aurora GPs continue to provide primary women&apos;s health care
                across all three SMSG centres, referring to the specialist
                obstetrician when their assessment identifies a need. Care is
                coordinated between the two throughout pregnancy and, for
                gynaecological patients, between the specialist consultation
                and ongoing GP care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREGNANCY CARE */}
      <section className="relative blush-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-14 md:mb-16 relative">
            <Image
              src="/website-images/obstetrics-and-pregnancy-care-detail.webp"
              alt="Ultrasound equipment ready in a consulting room at an SMSG centre."
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Pregnancy care</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                One specialist,{" "}
                <span className="italic font-display-warm">every visit.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Specialist obstetric care typically starts as soon as
                pregnancy is confirmed. Your first appointment covers your
                history, screening options, and a plan for the pregnancy that
                suits your circumstances.
              </p>
              <p>
                Subsequent visits follow the standard antenatal schedule, more
                frequently as you approach term. Between visits, your
                obstetrician arranges ultrasounds, reviews blood tests, and
                manages any issues that arise during the pregnancy.
              </p>
              <p>
                Postnatal care includes the six-week postnatal check,
                contraception discussion, and coordination back to your
                Aurora GP for ongoing family and women&apos;s health care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GYNAECOLOGICAL CONSULTATIONS */}
      <section id="gynae" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Gynaecology</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Specialist{" "}
                <span className="italic font-display-warm">gynaecological review.</span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                Some conditions can be managed with medical treatment; others
                require surgical review.
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="body-editorial max-w-[68ch]">
                <p>
                  Referral for specialist gynaecological review is appropriate
                  when your GP identifies a concern that benefits from a closer
                  look. Common reasons include:
                </p>
                <ul>
                  {GYNAE_REASONS.map((r) => (
                    <li key={r}>{r}.</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE OFFERED */}
      <section id="locations" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                At{" "}
                <span className="italic font-display-warm">Earlwood.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Aurora GPs continue at all three SMSG centres and refer to the
              specialist obstetrician-gynaecologist when specialist input is
              needed.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="contact-block">
            <div className="contact-row">
              <div className="label">
                <Link href={routes.location("earlwood")} className="link-editorial">
                  {earlwood.label}
                </Link>
              </div>
              <div className="value">
                {earlwood.address}, {earlwood.suburbLine}. Phone{" "}
                <a href={`tel:${earlwood.phone.replace(/[^0-9+]/g, "")}`} className="link-editorial">
                  {earlwood.phone}
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEES */}
      <section id="fees" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Fees and billing</span>
              <h2 className="font-display h-section mt-3 max-w-[15ch]">
                Privately{" "}
                <span className="italic font-display-warm">billed.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Specialist obstetric and gynaecological consultations are
                privately billed. A GP referral is required for the Medicare
                rebate to apply. Without a valid referral in place, the
                consultation is fully private.
              </p>
              <p>
                Fees for obstetric care through pregnancy are structured
                differently from single consultation appointments. Reception
                confirms the fee structure and expected out-of-pocket cost when
                you book.
              </p>
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
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                The Aurora obstetrician{" "}
                <span className="italic font-display-warm">and gynaecologist.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[68ch]">
              <p>
                Specialist obstetric and gynaecological care at Aurora is
                delivered by{" "}
                <Link href={routes.practitioner("dr-aye-thidar-htun")} className="link-editorial">
                  Dr Aye Thidar Htun
                </Link>
                , a Consultant Obstetrician and Gynaecologist consulting from
                Earlwood.
              </p>
              <p>
                Dr Htun consults in English and Burmese. See her{" "}
                <Link href={routes.practitioner("dr-aye-thidar-htun")} className="link-editorial">
                  practitioner profile
                </Link>{" "}
                for full clinical background, qualifications, hospital
                appointments, and consulting days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
                Specialist obstetric and gynaecological consultations are at
                Earlwood. A GP referral is required. If you don&apos;t have a
                referral yet, book with an Aurora GP first.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                <a
                  href={earlwood.automedBase}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25 hover:bg-cream/10 hover:border-cream/50 transition group"
                >
                  <div>
                    <div
                      className="font-display text-[19px] text-cream"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                    >
                      Book at Earlwood
                    </div>
                    <div className="text-cream/70 text-[13px] mt-0.5">Aurora specialist consulting rooms</div>
                  </div>
                  <Arrow className="arrow text-cream/80" />
                </a>
                <Link
                  href={routes.subBrand("aurora")}
                  className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25 hover:bg-cream/10 hover:border-cream/50 transition group"
                >
                  <div>
                    <div
                      className="font-display text-[19px] text-cream"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                    >
                      Need a referral first?
                    </div>
                    <div className="text-cream/70 text-[13px] mt-0.5">Book with an Aurora GP</div>
                  </div>
                  <Arrow className="arrow text-cream/80" />
                </Link>
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
              <p>GP-and-hospital shared model for pregnancies that don&apos;t need specialist-led care.</p>
              <span className="go">
                Learn more <Arrow />
              </span>
            </Link>
            <Link href="/menopause-support/" className="related-card">
              <span className="kicker">Related service</span>
              <h3>Menopause Support</h3>
              <p>Perimenopause and menopause care with GP and specialist input where needed.</p>
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
