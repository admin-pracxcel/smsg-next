import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildEmergencySchema } from "./schema";

export const metadata: Metadata = {
  title: "Emergency Information | SMSG",
  description:
    "In a medical emergency, dial 000 or attend your nearest emergency department. Emergency contacts, nearest hospitals to Earlwood, Bangor and Sans Souci, and crisis support lines.",
  alternates: {
    canonical: "https://smsg.au/patient-information/emergency-information/",
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

const TOC = [
  { id: "life-threatening", label: "Life-threatening emergencies" },
  { id: "nearest-ed", label: "Nearest emergency departments" },
  { id: "poisons", label: "Poisons Information Centre" },
  { id: "mental-health", label: "Mental health crisis support" },
  { id: "not-emergency", label: "When it's not an emergency" },
  { id: "after-emergency", label: "After an emergency" },
];

type Crisis = { name: string; phone: string; tel: string; note: string };

const CRISIS_LINES: Crisis[] = [
  { name: "Lifeline", phone: "13 11 14", tel: "131114", note: "24-hour crisis support and suicide prevention" },
  { name: "Suicide Call Back Service", phone: "1300 659 467", tel: "1300659467", note: "24-hour telephone counselling for people affected by suicide" },
  { name: "Beyond Blue", phone: "1300 22 4636", tel: "1300224636", note: "24-hour support for anxiety and depression" },
  { name: "Kids Helpline", phone: "1800 55 1800", tel: "1800551800", note: "24-hour support for children and young people up to 25" },
  { name: "1800RESPECT", phone: "1800 737 732", tel: "1800737732", note: "24-hour national sexual assault and domestic violence support" },
  { name: "13YARN", phone: "13 92 76", tel: "139276", note: "24-hour crisis support for Aboriginal and Torres Strait Islander people" },
  { name: "MensLine Australia", phone: "1300 78 99 78", tel: "1300789978", note: "24-hour telephone counselling for men" },
];

type Hospital = { name: string; address: string; phone: string; tel: string; primary?: boolean };

const CATCHMENTS: { centre: string; slug: keyof typeof routes; hospitals: Hospital[] }[] = [
  {
    centre: "Earlwood",
    slug: "location",
    hospitals: [
      { name: "Royal Prince Alfred Hospital", address: "50 Missenden Road, Camperdown NSW 2050", phone: "02 9515 6111", tel: "0295156111", primary: true },
      { name: "St George Hospital", address: "Gray Street, Kogarah NSW 2217", phone: "02 9113 1111", tel: "0291131111" },
    ],
  },
  {
    centre: "Bangor",
    slug: "location",
    hospitals: [
      { name: "Sutherland Hospital", address: "430 The Kingsway, Caringbah NSW 2229", phone: "02 9540 7111", tel: "0295407111", primary: true },
      { name: "St George Hospital", address: "Gray Street, Kogarah NSW 2217", phone: "02 9113 1111", tel: "0291131111" },
    ],
  },
  {
    centre: "Sans Souci",
    slug: "location",
    hospitals: [
      { name: "St George Hospital", address: "Gray Street, Kogarah NSW 2217", phone: "02 9113 1111", tel: "0291131111", primary: true },
      { name: "Sutherland Hospital", address: "430 The Kingsway, Caringbah NSW 2229", phone: "02 9540 7111", tel: "0295407111" },
    ],
  },
];

export default function EmergencyInformationPage() {
  const schema = buildEmergencySchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Patient Information" },
              { label: "Emergency Information" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Patient Information · Emergency Information
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Emergency{" "}
            <span className="italic font-display-warm">information.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>Life-threatening: dial 000</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            In a medical emergency, dial{" "}
            <a href="tel:000" className="link-editorial">
              000
            </a>{" "}
            immediately or attend your nearest emergency department. Do not
            wait for an SMSG appointment for anything life-threatening.
          </p>
        </div>
      </section>

      {/* ==================== DOC BODY ==================== */}
      <section className="doc-shell">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} />
              </div>
            </aside>

            <div className="md:col-span-9">
              {/* Summary callout */}
              <div className="doc-callout mb-14">
                <div className="callout-head">
                  <span className="dot" />
                  <span>If you need help now</span>
                </div>
                <h3>Life-threatening emergency.</h3>
                <ul>
                  <li>
                    Dial{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>{" "}
                    for ambulance, fire, or police.
                  </li>
                  <li>
                    Poisoning or overdose: Poisons Information Centre{" "}
                    <a href="tel:131126" className="link-editorial">
                      13 11 26
                    </a>{" "}
                    (or 000 if unconscious).
                  </li>
                  <li>
                    Suicidal crisis: Lifeline{" "}
                    <a href="tel:131114" className="link-editorial">
                      13 11 14
                    </a>
                    , or 000 if there is immediate danger.
                  </li>
                </ul>
              </div>

              {/* Section 1: Life-threatening */}
              <article id="life-threatening" className="doc-section">
                <div className="section-eyebrow">Call 000</div>
                <h2 className="doc-h2">Life-threatening emergencies.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Call{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>{" "}
                    for any of the following:
                  </p>
                  <ul>
                    <li>Chest pain, tightness, or pressure.</li>
                    <li>Sudden shortness of breath or difficulty breathing.</li>
                    <li>
                      Signs of stroke: use the FAST test (Face drooping, Arm
                      weakness, Speech difficulty, Time to call 000).
                    </li>
                    <li>Severe bleeding that won&apos;t stop with direct pressure.</li>
                    <li>Loss of consciousness or unresponsiveness.</li>
                    <li>
                      Severe allergic reaction with breathing difficulty, throat
                      tightness, or swelling of the face and lips.
                    </li>
                    <li>Serious injury, fracture, burn, or head injury.</li>
                    <li>Seizure lasting more than five minutes, or first-ever seizure.</li>
                    <li>Sudden severe headache.</li>
                    <li>
                      Suicidal thoughts with a plan or means, or a suicide
                      attempt in progress.
                    </li>
                    <li>Any other situation you believe is life-threatening.</li>
                  </ul>
                  <p>
                    <strong>Do not drive yourself</strong> or the affected
                    person to hospital if the situation is life-threatening.
                    Call an ambulance. Ambulance officers can begin treatment
                    immediately and can radio ahead to the emergency department.
                  </p>
                </div>
              </article>

              {/* Section 2: Nearest EDs */}
              <article id="nearest-ed" className="doc-section">
                <div className="section-eyebrow">By centre catchment</div>
                <h2 className="doc-h2">Nearest emergency departments.</h2>
                <p className="mt-4 body-lg text-ink-2 max-w-[62ch]">
                  If you&apos;re in doubt about which hospital to attend, call{" "}
                  <a href="tel:000" className="link-editorial">
                    000
                  </a>{" "}
                  and the operator will direct you.
                </p>

                {CATCHMENTS.map((cat) => (
                  <div key={cat.centre} className="mt-8">
                    <div className="section-eyebrow">
                      For {cat.centre} patients
                    </div>
                    <div className="contact-block mt-4">
                      {cat.hospitals.map((h) => (
                        <div className="contact-row" key={h.name}>
                          <div className="label">
                            {h.primary ? (
                              <strong>{h.name}</strong>
                            ) : (
                              h.name
                            )}
                          </div>
                          <div className="value">
                            {h.address}. Phone{" "}
                            <a
                              href={`tel:${h.tel}`}
                              className="link-editorial"
                            >
                              {h.phone}
                            </a>
                            .
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </article>

              {/* Section 3: Poisons */}
              <article id="poisons" className="doc-section">
                <div className="section-eyebrow">Exposure or overdose</div>
                <h2 className="doc-h2">Poisons Information Centre.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you or someone in your care has been exposed to
                    something harmful (medication overdose, chemical exposure,
                    plant, or bite), call the{" "}
                    <strong>Poisons Information Centre on</strong>{" "}
                    <a href="tel:131126" className="link-editorial">
                      13 11 26
                    </a>
                    . Available 24 hours a day, every day. Staffed by
                    pharmacists and toxicologists who can advise on immediate
                    action.
                  </p>
                  <p>
                    For a poisoning that has caused loss of consciousness,
                    breathing difficulty, or seizure, call{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>{" "}
                    first.
                  </p>
                </div>
              </article>

              {/* Section 4: Mental health crisis */}
              <article id="mental-health" className="doc-section">
                <div className="section-eyebrow">Crisis lines</div>
                <h2 className="doc-h2">Mental health crisis support.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    <strong>
                      If you or someone with you is in immediate danger, call{" "}
                      <a href="tel:000" className="link-editorial">
                        000
                      </a>
                      .
                    </strong>
                  </p>
                  <p>For mental health support in a crisis:</p>
                </div>

                <div className="contact-block mt-8">
                  {CRISIS_LINES.map((c) => (
                    <div className="contact-row" key={c.name}>
                      <div className="label">{c.name}</div>
                      <div className="value">
                        <a href={`tel:${c.tel}`} className="link-editorial">
                          {c.phone}
                        </a>
                        {" · "}
                        {c.note}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="body-editorial mt-8 max-w-[68ch]">
                  <p>
                    Reception at SMSG can help you access ongoing mental health
                    support with a GP-led Mental Health Care Plan and
                    referrals to our psychology team. This is for planned care
                    rather than crisis support.
                  </p>
                </div>
              </article>

              {/* Section 5: Not an emergency */}
              <article id="not-emergency" className="doc-section">
                <div className="section-eyebrow">Non-emergency care</div>
                <h2 className="doc-h2">When it&apos;s not an emergency.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If your concern is not life-threatening but you need care
                    outside our opening hours, see our{" "}
                    <Link
                      href={routes.patientInfo("after-hours-care")}
                      className="link-editorial"
                    >
                      After-Hours Care
                    </Link>{" "}
                    page. Options include the National Home Doctor Service{" "}
                    <a href="tel:137425" className="link-editorial">
                      13 SICK
                    </a>{" "}
                    and Healthdirect{" "}
                    <a href="tel:1800022222" className="link-editorial">
                      1800 022 222
                    </a>
                    .
                  </p>
                  <p>
                    If you&apos;re not sure whether your situation is an
                    emergency, call Healthdirect on{" "}
                    <a href="tel:1800022222" className="link-editorial">
                      1800 022 222
                    </a>{" "}
                    to speak to a registered nurse who can help you decide, or
                    call{" "}
                    <a href="tel:000" className="link-editorial">
                      000
                    </a>{" "}
                    and the operator will assess and direct.
                  </p>
                </div>
              </article>

              {/* Section 6: After */}
              <article id="after-emergency" className="doc-section">
                <div className="section-eyebrow">Follow-up</div>
                <h2 className="doc-h2">After an emergency.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    If you&apos;ve been seen at an emergency department or by
                    an ambulance service, book a follow-up with your usual SMSG
                    GP within a few days. The hospital sends a discharge
                    summary to your GP, and follow-up matters for medications,
                    referrals, and any ongoing care.
                  </p>
                  <p>
                    If you don&apos;t have a usual GP at SMSG,{" "}
                    <Link
                      href={routes.patientInfo("new-patient-registration")}
                      className="link-editorial"
                    >
                      register as a new patient
                    </Link>{" "}
                    and book a follow-up appointment.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link
              href={routes.patientInfo("after-hours-care")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>After-Hours Care</h3>
              <p>
                Non-emergency options when SMSG is closed: the National Home
                Doctor Service and Healthdirect.
              </p>
              <span className="go">
                Read the options <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("book-online")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Book Online</h3>
              <p>
                Book a follow-up with your usual GP after an emergency
                department visit or ambulance call.
              </p>
              <span className="go">
                Book an appointment <Arrow />
              </span>
            </Link>
            <Link
              href={routes.about("feedback-and-complaints")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Feedback &amp; Complaints</h3>
              <p>
                How to raise a concern about care received at SMSG or through
                the emergency system.
              </p>
              <span className="go">
                Read the process <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
