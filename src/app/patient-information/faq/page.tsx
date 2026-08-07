import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildFaqSchema } from "./schema";

export const metadata: Metadata = {
  title: "FAQ | SMSG",
  description:
    "Answers to common questions about booking, fees, referrals, results, telehealth, care coordination, and other patient matters at SMSG.",
  alternates: {
    canonical: "https://smsg.au/patient-information/faq/",
  },
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

type Faq = {
  q: string;
  /** Plain-text answer used for FAQPage JSON-LD (kept in sync with the JSX). */
  aText: string;
  /** Rendered answer (allows inline links, paragraphs). */
  a: React.ReactNode;
};

type Category = {
  id: string;
  label: string;
  items: Faq[];
};

const CATEGORIES: Category[] = [
  {
    id: "booking",
    label: "Booking and appointments",
    items: [
      {
        q: "Do I need a referral to see a GP?",
        aText: "No. GP appointments do not require a referral.",
        a: <p>No. GP appointments do not require a referral.</p>,
      },
      {
        q: "Do I need a referral to see a specialist?",
        aText:
          "Yes. Specialist consultations at Excelsia Specialist Centre require a GP referral for the Medicare rebate to apply. Your usual GP or one of ours can prepare it. Without a valid referral in place, the consultation is fully private.",
        a: (
          <p>
            Yes. Specialist consultations at Excelsia Specialist Centre require
            a GP referral for the Medicare rebate to apply. Your usual GP or
            one of ours can prepare it. Without a valid referral in place, the
            consultation is fully private.
          </p>
        ),
      },
      {
        q: "Are Saturday appointments available?",
        aText:
          "Yes, at Earlwood Medical Centre only. Saturday hours are 9am to 3pm. Bangor and Sans Souci are closed on weekends.",
        a: (
          <p>
            Yes, at{" "}
            <Link href={routes.location("earlwood")} className="link-editorial">
              Earlwood Medical Centre
            </Link>{" "}
            only. Saturday hours are 9am to 3pm. Bangor and Sans Souci are
            closed on weekends.
          </p>
        ),
      },
      {
        q: "Can I book with any doctor at any centre?",
        aText:
          "Yes. Every SMSG practitioner is bookable through Automed. Continuity of care is better if you see the same GP consistently, but if your regular GP isn't available, another SMSG GP can see you and access your file.",
        a: (
          <p>
            Yes. Every SMSG practitioner is bookable through Automed.
            Continuity of care is better if you see the same GP consistently,
            but if your regular GP isn&apos;t available, another SMSG GP can
            see you and access your file.
          </p>
        ),
      },
      {
        q: "What if I need to cancel?",
        aText:
          "Please give at least 24 hours' notice where possible. Cancellation policies vary by appointment type. Procedural, specialist, and cosmetic appointments have stricter cancellation terms because they hold longer slots. Late cancellations or non-attendance may attract a fee.",
        a: (
          <p>
            Please give at least 24 hours&apos; notice where possible.
            Cancellation policies vary by appointment type. Procedural,
            specialist, and cosmetic appointments have stricter cancellation
            terms because they hold longer slots. Late cancellations or
            non-attendance may attract a fee.
          </p>
        ),
      },
      {
        q: "How do I book if I'm not sure who to see?",
        aText:
          "Call reception at the centre most convenient for you. Reception can match you to the right practitioner for what you're seeing us about.",
        a: (
          <p>
            Call reception at the centre most convenient for you. Reception can
            match you to the right practitioner for what you&apos;re seeing us
            about.
          </p>
        ),
      },
    ],
  },
  {
    id: "fees",
    label: "Fees and billing",
    items: [
      {
        q: "Is bulk billing available?",
        aText:
          "Yes, for eligible appointments. Bulk billing generally applies to routine standard consultations with our registrar GPs and some other GPs, to eligible ongoing patients seen within the last twelve months, and to health assessments and GP Chronic Condition Management Plans.",
        a: (
          <p>
            Yes, for eligible appointments. Bulk billing generally applies to
            routine standard consultations with our registrar GPs and some
            other GPs, to eligible ongoing patients seen within the last twelve
            months, and to health assessments and GP Chronic Condition
            Management Plans. See our{" "}
            <Link
              href={routes.patientInfo("fees-and-billing")}
              className="link-editorial"
            >
              Fees &amp; Billing page
            </Link>{" "}
            for the full framework.
          </p>
        ),
      },
      {
        q: "What if I don't have Medicare?",
        aText:
          "You can still see any SMSG practitioner. Private fees apply. Reception will confirm the specific fee before your appointment.",
        a: (
          <p>
            You can still see any SMSG practitioner. Private fees apply.
            Reception will confirm the specific fee before your appointment.
          </p>
        ),
      },
      {
        q: "Do you accept Health Care Cards?",
        aText:
          "Yes. Some practitioners offer specific concessions for Health Care Card holders; reception can confirm what applies to your chosen practitioner.",
        a: (
          <p>
            Yes. Some practitioners offer specific concessions for Health Care
            Card holders; reception can confirm what applies to your chosen
            practitioner.
          </p>
        ),
      },
      {
        q: "Do you handle Workers' Compensation, CTP or Personal Injury claims?",
        aText:
          "These are handled through our external partner Synergy Medical. Please mention the claim type at booking so reception can direct you appropriately.",
        a: (
          <p>
            These are handled through our external partner Synergy Medical.
            Please mention the claim type at booking so reception can direct
            you appropriately.
          </p>
        ),
      },
    ],
  },
  {
    id: "care",
    label: "Care coordination",
    items: [
      {
        q: "Can I be seen at more than one SMSG centre?",
        aText:
          "Yes. If you're seeing different practitioners at different centres, your file is shared across all three centres. You don't need to explain your history twice.",
        a: (
          <p>
            Yes. If you&apos;re seeing different practitioners at different
            centres (for example, your GP at Earlwood and your Aurora Women
            &amp; Babies Health obstetrician at another centre), your file is
            shared across all three centres. You don&apos;t need to explain
            your history twice.
          </p>
        ),
      },
      {
        q: "What if my regular GP isn't available?",
        aText:
          "Another SMSG GP can see you and will have access to your file. Reception will suggest a colleague of your usual GP if one is available.",
        a: (
          <p>
            Another SMSG GP can see you and will have access to your file.
            Reception will suggest a colleague of your usual GP if one is
            available.
          </p>
        ),
      },
      {
        q: "Can children be seen at SMSG?",
        aText:
          "Yes. Our GPs care for children and families as part of general practice. For developmental paediatrics, ADHD assessment, autism assessment or other specialist paediatric care, our Kids' Dr sub-brand is primarily based at Sans Souci.",
        a: (
          <p>
            Yes. Our GPs care for children and families as part of general
            practice. For developmental paediatrics, ADHD assessment, autism
            assessment or other specialist paediatric care, our{" "}
            <Link href={routes.subBrand("kidsdr")} className="link-editorial">
              Kids&apos; Dr
            </Link>{" "}
            sub-brand is primarily based at Sans Souci.
          </p>
        ),
      },
      {
        q: "How do I get a Chronic Disease Management Plan?",
        aText:
          "Book a longer appointment with your GP. Chronic Disease Management Plans are Medicare-rebated and give you access to bulk-billed allied health sessions as part of your ongoing care.",
        a: (
          <p>
            Book a longer appointment with your GP. Chronic Disease Management
            Plans are Medicare-rebated and give you access to bulk-billed
            allied health sessions (dietitian, physiotherapist, psychologist
            and others) as part of your ongoing care.
          </p>
        ),
      },
    ],
  },
  {
    id: "referrals",
    label: "Referrals and specialists",
    items: [
      {
        q: "How do I renew a specialist referral?",
        aText:
          "Request a renewal through Automed. Existing patients only. Most requests are processed within one business day.",
        a: (
          <p>
            Request a renewal through Automed. Existing patients only. Most
            requests are processed within one business day. See our{" "}
            <Link
              href={routes.patientInfo("scripts-and-referrals")}
              className="link-editorial"
            >
              Scripts &amp; Referrals page
            </Link>{" "}
            for details.
          </p>
        ),
      },
      {
        q: "How long does a specialist referral last?",
        aText:
          "Twelve months from a GP referral. Three months from a specialist-to-specialist referral. If your referral is close to expiring and you'll need to continue seeing the specialist, request a renewal before your next appointment.",
        a: (
          <p>
            Twelve months from a GP referral. Three months from a
            specialist-to-specialist referral. If your referral is close to
            expiring and you&apos;ll need to continue seeing the specialist,
            request a renewal before your next appointment.
          </p>
        ),
      },
      {
        q: "Which specialists are available at Excelsia?",
        aText:
          "Cardiology, endocrinology, gastroenterology, geriatrics, haematology, nephrology, respiratory and sleep medicine, paediatric medicine, and general medicine.",
        a: (
          <p>
            Cardiology, endocrinology, gastroenterology, geriatrics,
            haematology, nephrology, respiratory and sleep medicine,
            paediatric medicine, and general medicine. See our{" "}
            <Link href={routes.subBrand("excelsia")} className="link-editorial">
              Excelsia Specialist Centre page
            </Link>{" "}
            for the full team.
          </p>
        ),
      },
      {
        q: "Can I be referred to a specialist outside SMSG?",
        aText:
          "Yes. If Excelsia doesn't cover the specialty your GP is referring you to, they will refer you to an appropriate external specialist.",
        a: (
          <p>
            Yes. If Excelsia doesn&apos;t cover the specialty your GP is
            referring you to, they will refer you to an appropriate external
            specialist.
          </p>
        ),
      },
    ],
  },
  {
    id: "results",
    label: "Results and records",
    items: [
      {
        q: "How will I get my test results?",
        aText:
          "Book a follow-up appointment with the doctor who ordered the test. This is the reliable way. For results that need urgent action, we will contact you directly.",
        a: (
          <p>
            Book a follow-up appointment with the doctor who ordered the test.
            This is the reliable way. For results that need urgent action, we
            will contact you directly. See our{" "}
            <Link
              href={routes.patientInfo("results-policy")}
              className="link-editorial"
            >
              Results Policy page
            </Link>
            .
          </p>
        ),
      },
      {
        q: "Can I get my results from reception?",
        aText:
          "Reception can confirm whether a result has arrived and whether your doctor has reviewed it, but cannot interpret it or give clinical advice. Result interpretation is the treating doctor's responsibility.",
        a: (
          <p>
            Reception can confirm whether a result has arrived and whether your
            doctor has reviewed it, but cannot interpret it or give clinical
            advice. Result interpretation is the treating doctor&apos;s
            responsibility.
          </p>
        ),
      },
      {
        q: "How do I access my medical records?",
        aText:
          "Contact our Chief Growth Officer through reception at Earlwood on 02 9554 7788. Requests are processed within 30 days. A fee may apply for complex requests.",
        a: (
          <p>
            Contact our Chief Growth Officer through reception at Earlwood on{" "}
            <a href="tel:0295547788" className="link-editorial">
              02 9554 7788
            </a>
            . Requests are processed within 30 days. A fee may apply for
            complex requests. See our{" "}
            <Link
              href={routes.about("privacy-policy")}
              className="link-editorial"
            >
              Privacy Policy
            </Link>{" "}
            for the full process.
          </p>
        ),
      },
    ],
  },
  {
    id: "telehealth",
    label: "Telehealth and remote care",
    items: [
      {
        q: "When is telehealth appropriate?",
        aText:
          "Telehealth suits follow-up appointments, mental health consultations, script and referral discussions, results discussions, and some new-patient consultations where a physical examination isn't required. It doesn't replace a physical consultation where one is needed.",
        a: (
          <p>
            Telehealth suits follow-up appointments, mental health
            consultations, script and referral discussions, results
            discussions, and some new-patient consultations where a physical
            examination isn&apos;t required. It doesn&apos;t replace a physical
            consultation where one is needed.
          </p>
        ),
      },
      {
        q: "Do I need to have seen the doctor in person before telehealth?",
        aText:
          "Under Medicare rules, an established doctor-patient relationship is generally required for the Medicare rebate to apply to a telehealth consultation. Exceptions include some mental health, blood-borne virus and reproductive health services. Reception will confirm what applies to your appointment.",
        a: (
          <p>
            Under Medicare rules, an established doctor-patient relationship is
            generally required for the Medicare rebate to apply to a telehealth
            consultation. Exceptions include some mental health, blood-borne
            virus and reproductive health services. Reception will confirm what
            applies to your appointment.
          </p>
        ),
      },
    ],
  },
  {
    id: "languages",
    label: "Interpreters and languages",
    items: [
      {
        q: "Are interpreters available?",
        aText:
          "Yes. Many of our clinicians and reception team speak languages in addition to English. For consultations, phone interpreting is available through the Translating and Interpreting Service (TIS National, 131 450). Let reception know at booking so an interpreter can be arranged.",
        a: (
          <>
            <p>
              Yes. Many of our GPs, specialists, allied health practitioners
              and reception team speak languages in addition to English.
              Reception can match you to a practitioner who speaks your
              language where possible.
            </p>
            <p>
              For consultations, phone interpreting is available through the
              Translating and Interpreting Service (TIS National,{" "}
              <a href="tel:131450" className="link-editorial">
                131 450
              </a>
              ). Let reception know at booking so an interpreter can be
              arranged.
            </p>
          </>
        ),
      },
      {
        q: "Which languages do SMSG clinicians speak?",
        aText:
          "Between them, our practitioners speak more than a dozen languages. See individual practitioner pages for their spoken languages.",
        a: (
          <p>
            Between them, our practitioners speak more than a dozen languages.
            See individual practitioner pages for their spoken languages.
          </p>
        ),
      },
    ],
  },
  {
    id: "after-hours",
    label: "After-hours and emergencies",
    items: [
      {
        q: "What do I do if I'm sick after hours?",
        aText:
          "For non-emergency care outside our opening hours, call the National Home Doctor Service on 13 SICK (13 74 25) for a home visit, or Healthdirect on 1800 022 222 for nurse-led advice.",
        a: (
          <p>
            For non-emergency care outside our opening hours, call the National
            Home Doctor Service on{" "}
            <a href="tel:137425" className="link-editorial">
              13 SICK (13 74 25)
            </a>{" "}
            for a home visit, or Healthdirect on{" "}
            <a href="tel:1800022222" className="link-editorial">
              1800 022 222
            </a>{" "}
            for nurse-led advice. See our{" "}
            <Link
              href={routes.patientInfo("after-hours-care")}
              className="link-editorial"
            >
              After-Hours Care page
            </Link>
            .
          </p>
        ),
      },
      {
        q: "When should I go to hospital or call an ambulance?",
        aText:
          "For any life-threatening emergency, dial 000 immediately. See our Emergency Information page for the full list of situations that warrant emergency care.",
        a: (
          <p>
            For any life-threatening emergency, dial{" "}
            <a href="tel:000" className="link-editorial">
              000
            </a>{" "}
            immediately. See our{" "}
            <Link
              href={routes.patientInfo("emergency-information")}
              className="link-editorial"
            >
              Emergency Information page
            </Link>{" "}
            for the full list of situations that warrant emergency care.
          </p>
        ),
      },
    ],
  },
  {
    id: "about",
    label: "About SMSG",
    items: [
      {
        q: "Is SMSG AGPAL accredited?",
        aText:
          "Yes. All three centres hold full accreditation from the Australian General Practice Accreditation Limited (AGPAL) against the RACGP Standards for General Practices.",
        a: (
          <p>
            Yes. All three centres hold full accreditation from the Australian
            General Practice Accreditation Limited (AGPAL) against the RACGP
            Standards for General Practices.
          </p>
        ),
      },
      {
        q: "Are your practitioners independent?",
        aText:
          "Yes. Every clinician at SMSG is an independent practitioner. Each sets their own clinical decisions, billing arrangements, and appointment structure. SMSG provides the premises, reception team, and coordination between disciplines.",
        a: (
          <p>
            Yes. Every clinician at SMSG is an independent practitioner. Each
            sets their own clinical decisions, billing arrangements, and
            appointment structure. SMSG provides the premises, reception team,
            and coordination between disciplines.
          </p>
        ),
      },
      {
        q: "How do I make a complaint or give feedback?",
        aText:
          "Speak to reception at the centre, phone the centre, or email the centre directly. For formal or serious concerns, ask Earlwood reception to be directed to our Chief Growth Officer on 02 9554 7788.",
        a: (
          <p>
            Speak to reception at the centre, phone the centre, or email the
            centre directly. For formal or serious concerns, ask Earlwood
            reception to be directed to our Chief Growth Officer on{" "}
            <a href="tel:0295547788" className="link-editorial">
              02 9554 7788
            </a>
            . See our{" "}
            <Link
              href={routes.about("feedback-and-complaints")}
              className="link-editorial"
            >
              Feedback &amp; Complaints page
            </Link>{" "}
            for the full process.
          </p>
        ),
      },
      {
        q: "Are the centres wheelchair accessible?",
        aText:
          "Yes. All three centres offer wheelchair access and accessible bathrooms.",
        a: (
          <p>
            Yes. All three centres offer wheelchair access and accessible
            bathrooms.
          </p>
        ),
      },
    ],
  },
];

const TOC = CATEGORIES.map(({ id, label }) => ({ id, label }));

export default function FaqPage() {
  const flatQas = CATEGORIES.flatMap((c) =>
    c.items.map(({ q, aText }) => ({ q, a: aText }))
  );
  const schema = buildFaqSchema(flatQas);

  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "FAQ" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · FAQ
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Frequently asked{" "}
            <span className="italic font-display-warm">questions.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>{flatQas.length} questions across {CATEGORIES.length} topics</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Common questions grouped by topic. If your question isn&apos;t
            here, reception at any of our three centres is a good first stop.
          </p>
        </div>
      </section>

      {/* ==================== DOC BODY ==================== */}
      <section className="doc-shell">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            {/* LEFT: TOC */}
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} heading="Jump to a topic" />
              </div>
            </aside>

            {/* RIGHT: Body */}
            <div className="md:col-span-9">
              {CATEGORIES.map((cat) => (
                <article
                  key={cat.id}
                  id={cat.id}
                  className="doc-section"
                >
                  <div className="section-eyebrow">FAQ · {cat.label}</div>
                  <h2 className="doc-h2">{cat.label}.</h2>
                  <div className="mt-6">
                    {cat.items.map((f, i) => (
                      <details key={`${cat.id}-${i}`} className="faq-item">
                        <summary>
                          {f.q}
                          <Chev />
                        </summary>
                        <div className="faq-body">{f.a}</div>
                      </details>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link
              href={routes.patientInfo("fees-and-billing")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Fees &amp; Billing</h3>
              <p>
                How our billing framework works across bulk-billed and private
                consultations, and what to expect at reception.
              </p>
              <span className="go">
                Read the framework <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("scripts-and-referrals")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Scripts &amp; Referrals</h3>
              <p>
                How to renew a repeat prescription or specialist referral
                without needing a full appointment, and the turnaround.
              </p>
              <span className="go">
                See the process <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("after-hours-care")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>After-Hours Care</h3>
              <p>
                What to do when SMSG is closed but you need medical care that
                isn&apos;t an emergency.
              </p>
              <span className="go">
                Read the options <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
