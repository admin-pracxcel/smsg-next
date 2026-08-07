import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { buildAwardsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Awards & Accreditations | SMSG",
  description:
    "Independent recognition of SMSG's clinical standards and workplace culture. AGPAL-accredited across all three centres, CESPHN Excellence Winner 2024, and Great Place to Work Certified.",
  alternates: { canonical: "https://smsg.au/about/awards-and-accreditations/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
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

const TIMELINE: { year: string; name: string; note: string }[] = [
  { year: "2024", name: "Winner of Excellence in General Practice", note: "Central Eastern Sydney Primary Health Network (CESPHN)" },
  { year: "2023", name: "Certificate of Excellence in General Practice", note: "Central Eastern Sydney Primary Health Network (CESPHN)" },
  { year: "2020", name: "Doctor of the Year · Dr Huiling Li", note: "Sans Souci Doctors" },
  { year: "2018", name: "Australian Small Business Champion Award Winner", note: "Professional Medical Service Category" },
  { year: "2016", name: "Local Business Award Winner", note: "Business Person of the Year Category" },
  { year: "2015", name: "Local Business Award Winner", note: "Health Improvement Category" },
];

export default function AwardsPage() {
  const schema = buildAwardsSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About", href: routes.aboutHub() },
              { label: "Awards & Accreditations" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden paper-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-20 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#9A2F52" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-14 md:pb-18">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <span className="allcaps text-ink-3">About · Awards &amp; Accreditations</span>
              <h1 className="font-display h-brand max-w-[16ch] mt-5">
                Awards <span className="italic font-display-warm">&amp; Accreditations.</span>
              </h1>
              <p className="mt-6 lede max-w-[54ch] text-ink-2">
                Independent recognition of clinical standards, workplace culture, and community contribution. AGPAL-accredited across all three centres, CESPHN Excellence Winner 2024, and Great Place to Work Certified.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 md:gap-6 max-w-[520px]">
                {[
                  { n: "3", l: "AGPAL centres" },
                  { n: "2024", l: "CESPHN Winner" },
                  { n: "2014", l: "Founded" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-black/15 pt-3">
                    <div
                      className="font-display text-[22px] md:text-[26px] leading-none"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                    >
                      {s.n}
                    </div>
                    <div className="text-[11px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="cert-plate">
                <span className="cert-corner">independently reviewed</span>
                <div className="cert-stack">
                  {[
                    { mark: "A", name: "AGPAL Accreditation", note: "Australian General Practice Accreditation Ltd" },
                    { mark: "C", name: "CESPHN Excellence Winner", note: "General Practice · 2024" },
                    { mark: "G", name: "Great Place to Work Certified", note: "Employee experience survey" },
                  ].map((b) => (
                    <div key={b.mark} className="cert-badge">
                      <div className="cb-mark">{b.mark}</div>
                      <div className="cb-body">
                        <div className="cb-name">{b.name}</div>
                        <div className="cb-note">{b.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <span className="cert-num">01 · Group trust signals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CLINICAL ACCREDITATION ==================== */}
      <section id="accreditation" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Clinical accreditation</span>
              <h2 className="font-display h-section mt-3 max-w-[14ch]">
                AGPAL, and <span className="italic font-display-warm">what it means.</span>
              </h2>
              <div className="mt-6 space-y-2.5">
                {[
                  "All three centres accredited",
                  "RACGP Standards, 5th edition",
                  "Onsite surveyor review",
                  "Recertification on cycle",
                ].map((p) => (
                  <div key={p} className="flex items-center gap-3 text-[13.5px] text-ink-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent-deep, #6E1F3A)" }}
                    />
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                Specialist Medical Services Group holds full accreditation from the Australian General Practice Accreditation Limited (AGPAL) across Earlwood Medical Centre, Bangor Medical Centre and Sans Souci Doctors. AGPAL accreditation is the leading general practice accreditation standard in Australia. It is voluntary but sought after because it signals that a practice meets and continues to meet the RACGP Standards for General Practices (5th edition).
              </p>
              <p>
                Accreditation covers clinical safety and quality, patient rights and needs, education and training, health promotion, information management, physical environment, and infection prevention. Practices are assessed onsite by trained AGPAL surveyors and must recertify on a defined cycle. Accreditation lapses if a practice does not maintain the standard.
              </p>
              <p>
                For patients this matters because Medicare requires GPs at accredited practices to hold specific standards for chronic disease management, mental health care plans, and other Medicare-rebated services. Some private health funds also treat accreditation as a factor in specialist referrals.
              </p>

              <ul className="cover-grid mt-8 pt-2">
                <li>Clinical safety &amp; quality</li>
                <li>Patient rights &amp; needs</li>
                <li>Education &amp; training</li>
                <li>Health promotion</li>
                <li>Information management</li>
                <li>Physical environment</li>
                <li>Infection prevention</li>
                <li>Continuous improvement</li>
                <li>Records &amp; privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ACCREDITATION CARDS ==================== */}
      <section className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-10">
            <div className="md:col-span-7">
              <span className="allcaps text-ink-3">Accreditations at a glance</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Three independent <span className="italic font-display-warm">reviews.</span>
              </h2>
            </div>
            <div className="md:col-span-5 text-ink-2 body-lg max-w-[52ch] md:justify-self-end">
              Two of these apply group-wide. One is specific to Earlwood, reflecting international clinical review work undertaken there.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            <article className="accred-card">
              <span className="plate" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 15.3l-5.2 2.7 1-5.8L3.5 8.1l5.9-.8L12 2z" />
                  <circle cx="12" cy="20" r="1" />
                </svg>
              </span>
              <div className="kicker">Group-wide</div>
              <h3 className="title">AGPAL Accreditation</h3>
              <p className="desc">
                Full accreditation from the Australian General Practice Accreditation Limited across all three centres, measured against the RACGP Standards for General Practices, 5th edition.
              </p>
              <div className="foot">Earlwood · Bangor · Sans Souci</div>
            </article>

            <article className="accred-card">
              <span className="plate" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 20h16" />
                  <path d="M6 20V9l6-4 6 4v11" />
                  <path d="M10 20v-6h4v6" />
                </svg>
              </span>
              <div className="kicker">Group-wide</div>
              <h3 className="title">RACGP Standards</h3>
              <p className="desc">
                Compliance with the Royal Australian College of General Practitioners Standards for General Practices, the framework underpinning AGPAL survey.
              </p>
              <div className="foot">5th edition · Reviewed on cycle</div>
            </article>

            <article className="accred-card">
              <span className="plate" aria-hidden="true">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h16.8" />
                  <path d="M12 3c2.5 3 2.5 15 0 18" />
                  <path d="M12 3c-2.5 3-2.5 15 0 18" />
                </svg>
              </span>
              <div className="kicker">Earlwood only</div>
              <h3 className="title">Veteran Evaluation Services</h3>
              <p className="desc">
                Additional accreditation from Veteran Evaluation Services in the United States, allowing Earlwood clinicians to provide clinical review for American Veterans in Australia pursuing US Department of Veterans Affairs benefits.
              </p>
              <div className="foot">Earlwood Medical Centre</div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================== VES DETAIL ==================== */}
      <section id="ves" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Additional accreditation at Earlwood</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                United States{" "}
                <span className="italic font-display-warm">Veteran Evaluation Services.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                Earlwood Medical Centre holds an additional accreditation from Veteran Evaluation Services (VES) in the United States. Under this accreditation, our Earlwood clinicians can provide clinical review and certification for American Veterans in Australia who are pursuing disability compensation and healthcare benefits through the US Department of Veterans Affairs.
              </p>
              <p>
                This accreditation is relatively uncommon among Australian general practices, and it reflects the international clinical review work that some of our Earlwood clinicians undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== AWARDS TIMELINE ==================== */}
      <section id="awards" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Group awards</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Independent recognition{" "}
                <span className="italic font-display-warm">across a decade.</span>
              </h2>
              <p className="mt-6 body-lg text-ink-2 max-w-[38ch]">
                Since the group&apos;s founding in 2014, SMSG and its founding clinicians have been recognised through the following awards.
              </p>
            </div>

            <div className="md:col-span-8">
              <ol className="timeline">
                {TIMELINE.map((t) => (
                  <li key={t.year + t.name} className="tl-item">
                    <div className="body">
                      <span className="year">{t.year}</span>
                      <div>
                        <span className="name">{t.name}</span>
                        <span className="body-note">{t.note}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-10 body-editorial max-w-[62ch]">
                The CESPHN awards are our most recent and, in the context of an accredited general practice, our most substantial. Central Eastern Sydney PHN is the region&apos;s independent primary health network, and its annual Excellence in General Practice recognition assesses practices against multi-dimensional criteria including patient care, clinical outcomes, and community contribution. Being named Winner in 2024 after Finalist in 2023 reflects the CESPHN assessment panel&apos;s view of SMSG as a leading general practice in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORKPLACE CULTURE ==================== */}
      <section id="workplace" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="callout">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <span className="cap">Workplace culture recognition</span>
                <h2 className="title max-w-[18ch]">
                  Great Place to Work <span className="italic font-display-warm">Certified.</span>
                </h2>
              </div>
              <div className="md:col-span-7 body-editorial max-w-[62ch]">
                <p>
                  Specialist Medical Services Group is Great Place to Work Certified, based on a formal employee survey and independent cultural assessment. Great Place to Work is a global research and consulting firm whose certification is granted based on employee experience surveys measuring credibility, respect, fairness, pride, and camaraderie in the workplace.
                </p>
                <p>
                  We take workplace culture seriously because it directly affects the quality of care patients receive. Clinicians who feel supported by their reception team, respected by their peers, and free to run their own practice deliver more consistent care over time. Reception and nursing staff who feel valued stay for longer, which is important in a healthcare environment where continuity matters.
                </p>
                <p>
                  For clinicians and administrative team members considering a role at SMSG, our Great Place to Work certification, along with the group&apos;s{" "}
                  <Link href="/careers/" className="link-editorial">
                    Careers page
                  </Link>
                  , is a good starting point for understanding what working here is like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRACTICAL IMPLICATIONS ==================== */}
      <section id="patient-implications" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">What accreditation and awards do for you as a patient</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                The practical <span className="italic font-display-warm">implications.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="body-editorial max-w-[64ch]">
                Choosing a general practice is a personal decision that turns on many factors: which clinician you trust, how close the centre is, whether they take your family, what your billing arrangement is likely to be. Accreditation and awards do not substitute for any of these. But they can be a useful signal about the standards a practice holds itself to.
              </p>

              <p className="mt-6 text-ink-2 body-lg max-w-[62ch]">
                At SMSG, the practical implications of our accreditation and awards for you as a patient are:
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    t: "AGPAL-accredited standards",
                    b: "Our clinical processes have been independently reviewed and continue to be reviewed on a defined cycle. This covers everything from how we manage your health records to how we run our infection control.",
                  },
                  {
                    t: "Recognised clinical care",
                    b: "Our CESPHN Excellence in General Practice Award reflects an independent panel's view of the care our practitioners provide. It is not a marketing badge; it is a peer-reviewed recognition.",
                  },
                  {
                    t: "Stable workforce",
                    b: "Our Great Place to Work certification indicates that the clinicians and administrative team who care for you are here by choice and are supported to stay. Continuity of care is one of the most important predictors of good outcomes in general practice.",
                  },
                ].map((r) => (
                  <div key={r.t} className="border-l-2 border-brand/40 pl-5 py-1">
                    <div
                      className="font-display text-[19px]"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                    >
                      {r.t}
                    </div>
                    <p className="mt-1 text-[15px] text-ink-2 leading-[1.6] max-w-[64ch]">{r.b}</p>
                  </div>
                ))}
              </div>

              <p className="mt-8 body-editorial max-w-[64ch]">
                For US veterans in Australia, the additional Veteran Evaluation Services accreditation at Earlwood means our clinicians can provide the specific clinical review documentation you may need for VA benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ON DISPLAY ==================== */}
      <section id="on-display" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-16">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Where to see the certifications</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                On display at <span className="italic font-display-warm">every centre.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[64ch]">
              <p>
                Our AGPAL, CESPHN, and Great Place to Work certifications are on display at each of our centre reception areas. Original certificates are available on request. For patients who require confirmation of our accreditation status for a specific purpose, our Practice Manager can provide the underlying documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section id="related" className="relative cream-band">
        <div className="paper-noise absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Related</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Read on to <span className="italic font-display-warm">go deeper.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <div>
                {[
                  { href: routes.aboutHub(), name: "About SMSG", desc: "The clinical group overview." },
                  { href: routes.about("our-story"), name: "Our Story", desc: "The founding narrative and how these accreditations were built into the group." },
                  { href: routes.about("feedback-and-complaints"), name: "Feedback & Complaints", desc: "How to raise a concern with an AGPAL-accredited practice." },
                  { href: routes.careers(), name: "Careers", desc: "Join a Great Place to Work Certified medical group." },
                ].map((r) => (
                  <Link key={r.name} href={r.href} className="rel-row group">
                    <span className="name">{r.name}</span>
                    <span className="desc">{r.desc}</span>
                    <Arrow className="go" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
