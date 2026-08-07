import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildZeroToleranceSchema } from "./schema";

export const metadata: Metadata = {
  title: "Zero Workplace Violence Tolerance Policy | SMSG",
  description:
    "SMSG's policy on abuse, aggression and violence toward clinicians, reception and nursing teams, and how we respond to breaches.",
  alternates: {
    canonical: "https://smsg.au/about/zero-workplace-violence-tolerance/",
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
  { id: "our-commitment", label: "A safe environment for everyone" },
  { id: "what-is-not-tolerated", label: "Behaviour that falls under this policy" },
  { id: "what-we-understand", label: "Distress is not the same as abuse" },
  { id: "our-response", label: "How we respond to breaches" },
  { id: "support-for-staff", label: "How we back our team" },
  { id: "reporting-conduct", label: "Reporting concerns about staff conduct" },
  { id: "raise-a-concern", label: "Raising a concern or reporting an incident" },
];

export default function ZeroTolerancePage() {
  const schema = buildZeroToleranceSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About", href: routes.aboutHub() },
              { label: "Zero Tolerance Policy" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span
            className="allcaps"
            style={{ color: "var(--aurora-deep)" }}
          >
            About · Zero Tolerance
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Zero Tolerance <span className="italic font-display-warm">Policy.</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="doc-meta">
              <span>Last updated: 27 July 2026</span>
            </span>
            <span className="doc-meta">
              <span className="dot" />
              <span>Applies at all SMSG centres</span>
            </span>
            <span className="doc-meta">
              <span className="dot" />
              <span>Approximately 750 words</span>
            </span>
          </div>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Every clinician, staff member and patient at SMSG has the right to feel safe. Verbal abuse, threatening behaviour, aggression and violence are not tolerated in our centres, on the phone, or in written communication.
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
                <DocToc sections={TOC} />
              </div>
            </aside>

            {/* RIGHT: Body */}
            <div className="md:col-span-9">
              {/* Summary callout */}
              <div className="doc-callout mb-14">
                <div className="callout-head">
                  <span className="dot" />
                  <span>What this means for you</span>
                </div>
                <h3>The short version.</h3>
                <ul>
                  <li>Our clinicians, reception, nursing and allied health teams have the right to work without abuse, threats or intimidation.</li>
                  <li>Raising a concern firmly, questioning a clinical decision or asking to speak to a manager is not what this policy is about.</li>
                  <li>If you&apos;re distressed, please tell reception; we&apos;d rather know than not know, and we&apos;ll do what we can to help.</li>
                  <li>Behaviour that crosses into aggression, threats or personal attack may end the appointment, end future access to SMSG, or be reported to NSW Police.</li>
                  <li>The same standards of respectful conduct apply to our staff toward you; concerns can be raised through Feedback and Complaints.</li>
                </ul>
              </div>

              {/* Section 1 */}
              <article id="our-commitment" className="doc-section">
                <div className="section-eyebrow">Our commitment</div>
                <h2 className="doc-h2">A safe environment for everyone.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Specialist Medical Services Group is committed to providing a safe, respectful environment for our clinicians, our reception and nursing teams, and our patients. Healthcare workers experience higher rates of workplace violence and aggression than most other occupations, and this affects staff wellbeing, staff retention, and ultimately the quality of care patients receive.
                  </p>
                  <p>
                    We do not accept aggressive or threatening behaviour toward our team, regardless of the source, the circumstance, or the intent behind it. This policy is not a formality. It is enforced, and it applies at all three of our centres, on our phone lines, over email, on social media, and in any other channel where our team interacts with patients or members of the public.
                  </p>
                </div>
              </article>

              {/* Section 2 */}
              <article id="what-is-not-tolerated" className="doc-section">
                <div className="section-eyebrow">What is not tolerated</div>
                <h2 className="doc-h2">Behaviour that falls under this policy.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    The following behaviour, directed at our clinicians, reception team, nursing team, allied health practitioners, or other patients, will not be tolerated at SMSG:
                  </p>
                  <ul>
                    <li>Verbal abuse, including shouting, personal insults, offensive language, or slurs of any kind.</li>
                    <li>Threats of physical harm, whether specific or implied.</li>
                    <li>Physical aggression, including pushing, grabbing, striking, or any unwanted physical contact.</li>
                    <li>Intimidation, including standing over staff, blocking exits, or refusing to leave a consultation room when asked.</li>
                    <li>Damage to centre property, including doors, equipment, or fixtures.</li>
                    <li>Harassment through repeated unwanted contact, whether by phone, email, in person, or through social media.</li>
                    <li>Discrimination on the basis of race, sex, gender identity, sexual orientation, religion, age, disability, or any other characteristic.</li>
                    <li>Behaviour intended to frighten, humiliate, or coerce a staff member or another patient.</li>
                    <li>Attending the centre under the visible influence of alcohol or non-prescribed drugs in a manner that affects your ability to interact safely.</li>
                  </ul>
                </div>
              </article>

              {/* Section 3 */}
              <article id="what-we-understand" className="doc-section">
                <div className="section-eyebrow">What we understand</div>
                <h2 className="doc-h2">Distress is not the same as abuse.</h2>

                <div className="pair-grid mt-8">
                  <div className="pair-card">
                    <div className="pair-head">Not what this policy is about</div>
                    <h3>Being upset, worried or frustrated.</h3>
                    <ul>
                      <li>Raising a concern firmly.</li>
                      <li>Questioning a clinical decision.</li>
                      <li>Asking to speak to a manager.</li>
                      <li>Expressing frustration in words.</li>
                      <li>Being visibly worried, distressed or in pain.</li>
                    </ul>
                  </div>
                  <div className="pair-card">
                    <div className="pair-head">What this policy addresses</div>
                    <h3>Behaviour that crosses a line.</h3>
                    <ul>
                      <li>Intimidation of staff or other patients.</li>
                      <li>Aggression, threats or personal attack.</li>
                      <li>Slurs, insults or discriminatory language.</li>
                      <li>Physical contact that is unwanted.</li>
                      <li>Refusing to leave when asked.</li>
                    </ul>
                  </div>
                </div>

                <div className="body-editorial mt-8 max-w-[68ch]">
                  <p>
                    We understand that health can be distressing. Patients and their families sometimes attend our centres under significant emotional strain, in acute pain, worried about a diagnosis, frustrated by a wait, or upset about a decision they have received elsewhere. Our team is trained to recognise distress and to respond with patience and care.
                  </p>
                  <p>
                    Being distressed is not the same as being abusive. Raising concerns firmly, questioning a clinical decision, asking to speak to a manager, or expressing frustration in words is not what this policy is about. What this policy is about is behaviour that crosses into intimidation, aggression, or personal attack.
                  </p>
                  <p>
                    If you are having a difficult day and something at the centre has upset you, please tell our reception team. We would rather know than not know, and we will do what we can to help.
                  </p>
                </div>
              </article>

              {/* Section 4 */}
              <article id="our-response" className="doc-section">
                <div className="section-eyebrow">Our response</div>
                <h2 className="doc-h2">How we respond to breaches.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Our response to behaviour that breaches this policy depends on the severity and context of the incident. In general, and at the discretion of the clinician or Practice Manager on duty, we may:
                  </p>
                  <ul>
                    <li>Verbally ask you to stop the behaviour and warn you that continued behaviour will result in further action.</li>
                    <li>End the current appointment or interaction.</li>
                    <li>Ask you to leave the premises.</li>
                    <li>Call security or the police if the behaviour poses a safety risk to our team or other patients.</li>
                    <li>Formally deregister you from the practice, meaning you will not be able to book future appointments with any SMSG clinician.</li>
                    <li>Document the incident in your file, so any future contact with SMSG clinicians is informed by the history.</li>
                  </ul>
                  <p>
                    Where behaviour meets a legal threshold, we may report the incident to NSW Police. Assaults on healthcare workers in NSW carry significantly increased penalties under state legislation.
                  </p>
                  <p>
                    Deregistration decisions are made by the Practice Manager in consultation with the treating clinician and, where relevant, the Chief Growth Officer. Once made, a deregistration decision is documented and the affected person is notified in writing.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="support-for-staff" className="doc-section">
                <div className="section-eyebrow">Support for our team</div>
                <h2 className="doc-h2">How we back our team.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    Our clinicians and staff are supported to report incidents through internal channels, and every reported incident is reviewed. Where an incident has been distressing, we provide access to counselling and workplace support. Where legal or protective action is warranted, our team have the group&apos;s full backing to pursue it.
                  </p>
                  <p>
                    Reception staff, in particular, are trained to de-escalate difficult interactions safely. If you have called our reception line and been unhappy with a response, we would rather have that discussion through our{" "}
                    <Link
                      href={routes.about("feedback-and-complaints")}
                      className="link-editorial"
                    >
                      Feedback and Complaints
                    </Link>{" "}
                    channel than through raised voices at the front desk.
                  </p>
                </div>
              </article>

              {/* Section 6 */}
              <article id="reporting-conduct" className="doc-section">
                <div className="section-eyebrow">A two-way policy</div>
                <h2 className="doc-h2">Reporting concerns about staff conduct.</h2>
                <div className="body-editorial mt-6 max-w-[68ch]">
                  <p>
                    This policy is not just about patient behaviour. Our clinicians and staff are also held to standards of respectful, professional conduct toward patients. If you feel a staff member or clinician at SMSG has behaved inappropriately toward you, please raise this through our{" "}
                    <Link
                      href={routes.about("feedback-and-complaints")}
                      className="link-editorial"
                    >
                      Feedback and Complaints
                    </Link>{" "}
                    channel.
                  </p>
                  <p>
                    Complaints about a clinician&apos;s conduct or clinical care may also be raised externally with the Australian Health Practitioner Regulation Agency (AHPRA) or the Health Care Complaints Commission (HCCC) in New South Wales.
                  </p>
                </div>
              </article>

              {/* Section 7: contact / reporting */}
              <article id="raise-a-concern" className="doc-section">
                <div className="section-eyebrow">Raise a concern</div>
                <h2 className="doc-h2">Raising a concern or reporting an incident.</h2>
                <p className="mt-4 body-lg text-ink-2 max-w-[62ch]">
                  If you have been affected by an incident at one of our centres, whether as a patient, a family member, or a witness, please contact us through the channel that suits you.
                </p>

                <div className="contact-block mt-8">
                  <div className="contact-row">
                    <div className="label">If you feel unsafe now</div>
                    <div className="value">
                      Speak to any reception team member or clinician at the centre; they will move you to a safe area and involve the Practice Manager. If there is an immediate risk to life, call{" "}
                      <a href="tel:000" className="link-editorial">
                        000
                      </a>
                      .
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">To report an incident</div>
                    <div className="value">
                      Contact the Practice Manager at the centre where the incident occurred:{" "}
                      <a href="mailto:EMC@smsg.au" className="link-editorial">
                        EMC@smsg.au
                      </a>{" "}
                      (Earlwood Medical Centre),{" "}
                      <a href="mailto:BMC@smsg.au" className="link-editorial">
                        BMC@smsg.au
                      </a>{" "}
                      (Bangor Medical Centre) or{" "}
                      <a href="mailto:SSD@smsg.au" className="link-editorial">
                        SSD@smsg.au
                      </a>{" "}
                      (Sans Souci Doctors).
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">Feedback &amp; Complaints</div>
                    <div className="value">
                      For concerns about staff or clinician conduct, or if you&apos;d like your concern reviewed through our formal process, please use our{" "}
                      <Link
                        href={routes.about("feedback-and-complaints")}
                        className="link-editorial"
                      >
                        Feedback and Complaints
                      </Link>{" "}
                      channel.
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">External bodies</div>
                    <div className="value">
                      Complaints about a clinician&apos;s conduct or clinical care can also be raised with the Australian Health Practitioner Regulation Agency (AHPRA) at{" "}
                      <a
                        href="https://www.ahpra.gov.au/"
                        className="link-editorial"
                        rel="noopener"
                      >
                        ahpra.gov.au
                      </a>{" "}
                      or, in New South Wales, the Health Care Complaints Commission at{" "}
                      <a
                        href="https://www.hccc.nsw.gov.au/"
                        className="link-editorial"
                        rel="noopener"
                      >
                        hccc.nsw.gov.au
                      </a>
                      .
                    </div>
                  </div>
                  <div className="contact-row">
                    <div className="label">After hours</div>
                    <div className="value">
                      For urgent care outside our opening hours, call 13 SICK (
                      <a href="tel:137425" className="link-editorial">
                        13 74 25
                      </a>
                      ). In an emergency, dial{" "}
                      <a href="tel:000" className="link-editorial">
                        000
                      </a>
                      .
                    </div>
                  </div>
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
              href={routes.about("feedback-and-complaints")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Feedback &amp; Complaints</h3>
              <p>
                How to raise a concern about care or conduct through our internal channel, and the external bodies you can also contact.
              </p>
              <span className="go">
                Read the process <Arrow />
              </span>
            </Link>
            <Link href={routes.about("privacy-policy")} className="related-card">
              <span className="kicker">Related</span>
              <h3>Privacy Policy</h3>
              <p>
                How we collect, use and protect your personal and health information under the Australian Privacy Principles.
              </p>
              <span className="go">
                Read the policy <Arrow />
              </span>
            </Link>
            <Link href={routes.about("terms-of-service")} className="related-card">
              <span className="kicker">Related</span>
              <h3>Terms of Service</h3>
              <p>
                The terms that apply when you use our website and book care with any SMSG clinician.
              </p>
              <span className="go">
                Read the terms <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
