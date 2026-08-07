import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildPrivacySchema } from "./schema";

export const metadata: Metadata = {
  title: "Privacy Policy | SMSG",
  description:
    "How Specialist Medical Services Group collects, uses, stores and shares your personal and health information, and your rights as a patient.",
  alternates: { canonical: "https://smsg.au/about/privacy-policy/" },
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
  { id: "about-this-policy", label: "What this policy covers" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-we-collect", label: "How we collect it" },
  { id: "how-we-use", label: "How we use it" },
  { id: "who-we-share", label: "Who we share with" },
  { id: "my-health-record", label: "My Health Record" },
  { id: "storage-security", label: "Storage and security" },
  { id: "your-rights", label: "Your rights" },
  { id: "retention", label: "How long we keep it" },
  { id: "website-cookies", label: "Website and cookies" },
  { id: "contact-complaints", label: "Contact and complaints" },
  { id: "changes", label: "Changes to this policy" },
];

export default function PrivacyPolicyPage() {
  const schema = buildPrivacySchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About", href: routes.aboutHub() },
              { label: "Privacy Policy" },
            ]}
          />
        </div>
      </div>

      {/* ==================== LEGAL HERO ==================== */}
      <section className="legal-hero relative">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-12 md:pb-16">
          <span className="allcaps text-ink-3">About · Privacy</span>
          <h1 className="font-display h-brand mt-4 max-w-[14ch]">
            Privacy <span className="italic font-display-warm">Policy.</span>
          </h1>
          <p className="mt-6 lede max-w-[62ch] text-ink-2">
            How Specialist Medical Services Group collects, uses, stores and shares your personal and health information, and your rights as a patient.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-ink-3">
            <div className="flex items-center gap-2">
              <span className="allcaps">Last updated</span>
              <time dateTime="2026-07-27" className="text-ink-2">
                27 July 2026
              </time>
            </div>
            <span className="hidden md:inline text-ink-3/40">·</span>
            <div className="flex items-center gap-2">
              <span className="allcaps">Effective</span>
              <span className="text-ink-2">August 2026</span>
            </div>
            <span className="hidden md:inline text-ink-3/40">·</span>
            <div className="flex items-center gap-2">
              <span className="allcaps">Governing law</span>
              <span className="text-ink-2">
                Privacy Act 1988 (Cth) &amp; HRIP Act 2002 (NSW)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== POLICY BODY ==================== */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            {/* LEFT: sticky ToC */}
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} />
              </div>
            </aside>

            {/* RIGHT: policy body */}
            <div className="md:col-span-9">
              {/* At a glance */}
              <div id="at-a-glance" className="about-glance-card">
                <div className="glance-head">
                  <span className="dot" />
                  At a glance
                </div>
                <ul>
                  <li>
                    <span>
                      We collect only what your care requires: identifying detail, health information, and payment records, and we don&apos;t collect what we don&apos;t need.
                    </span>
                  </li>
                  <li>
                    <span>
                      We share your information with clinicians involved in your care, with services that process your investigations, and where the law requires. We don&apos;t share it for marketing or any commercial purpose outside your care.
                    </span>
                  </li>
                  <li>
                    <span>
                      You can ask to see the records we hold about you, ask us to correct them, and withdraw consent for particular uses. Requests go to our Chief Growth Officer; contact details are in the block at the bottom of this page.
                    </span>
                  </li>
                  <li>
                    <span>
                      We&apos;re bound by the Australian Privacy Principles under the Privacy Act 1988 (Cth) and by the Health Records and Information Privacy Act 2002 (NSW). If our response doesn&apos;t resolve a concern, you can escalate to the OAIC or the NSW Privacy Commissioner.
                    </span>
                  </li>
                  <li>
                    <span>
                      The full text below explains each of these in detail. If you&apos;d rather just get in touch, our contact block is at the{" "}
                      <a href="#contact-complaints">bottom of this page</a>.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 01 */}
              <section
                id="about-this-policy"
                className="legal-section mt-14"
              >
                <span className="section-num">01 · Overview</span>
                <h2>What this policy covers, and why.</h2>
                <div className="section-body body-editorial">
                  <p>
                    This Privacy Policy sets out how Specialist Medical Services Group (SMSG, we, us, our) handles personal information and health information about patients, prospective patients, website visitors, and members of the public who interact with our centres.
                  </p>
                  <p>
                    We are bound by the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth) and the Health Records and Information Privacy Act 2002 (NSW). Both apply to our handling of your information. This policy explains what we collect, how we use it, who we share it with, and how you can access and correct your own records.
                  </p>
                  <p>
                    If any part of this policy is unclear, our Chief Growth Officer is your first point of contact. Full contact detail is at the{" "}
                    <a href="#contact-complaints">end of this page</a>.
                  </p>
                </div>
              </section>

              {/* Section 02 */}
              <section id="what-we-collect" className="legal-section">
                <span className="section-num">02 · Information</span>
                <h2>Personal information and health information.</h2>
                <div className="section-body body-editorial">
                  <p>
                    The information we collect about you depends on your relationship with us. In general, we collect three categories.
                  </p>

                  <div className="legal-sub">Personal identifying information</div>
                  <ul>
                    <li>Your full name, date of birth, gender, and address.</li>
                    <li>Contact detail including phone number and email address.</li>
                    <li>Medicare number, private health fund detail, DVA number, Health Care Card number, or other relevant identification.</li>
                    <li>Emergency contact details you provide us.</li>
                    <li>Your GP or referring practitioner, where relevant.</li>
                  </ul>

                  <div className="legal-sub">Health information</div>
                  <ul>
                    <li>Your medical history, including past diagnoses, procedures, and hospitalisations.</li>
                    <li>Current medications, allergies, and adverse reactions.</li>
                    <li>Immunisation status.</li>
                    <li>Clinical notes from consultations at SMSG.</li>
                    <li>Investigation results, including pathology, imaging, and specialist reports.</li>
                    <li>Referral letters to and from other clinicians.</li>
                    <li>Any other information a clinician records in your file for the purpose of your care.</li>
                  </ul>

                  <div className="legal-sub">Financial information</div>
                  <ul>
                    <li>Payment method used at the centre.</li>
                    <li>Medicare and private health fund transaction records.</li>
                    <li>Outstanding accounts.</li>
                  </ul>

                  <p>
                    We collect this information because we cannot provide clinical care without it. We do not collect information we do not need.
                  </p>
                </div>
              </section>

              {/* Section 03 */}
              <section id="how-we-collect" className="legal-section">
                <span className="section-num">03 · Sources</span>
                <h2>Where the information comes from.</h2>
                <div className="section-body body-editorial">
                  <p>
                    Most of the information we hold about you is collected directly from you, either at your appointment, over the phone, or through our patient registration process online.
                  </p>
                  <p>Some information is collected from others with your consent. This includes:</p>
                  <ul>
                    <li>Referral letters from your GP or specialist.</li>
                    <li>Pathology, imaging and other diagnostic results ordered by an SMSG clinician.</li>
                    <li>Correspondence from hospitals, allied health providers, or other clinicians involved in your care.</li>
                    <li>Medicare and private health fund transaction records.</li>
                    <li>My Health Record data, where you have consented to us accessing it.</li>
                  </ul>
                  <p>
                    We only collect information from third parties where it is reasonably necessary for your care or where you have consented.
                  </p>
                </div>
              </section>

              {/* Section 04 */}
              <section id="how-we-use" className="legal-section">
                <span className="section-num">04 · Use</span>
                <h2>The primary purposes.</h2>
                <div className="section-body body-editorial">
                  <p>We use your personal and health information for the primary purposes of:</p>
                  <ul>
                    <li>Providing clinical care to you at your appointments.</li>
                    <li>Coordinating your care across the clinicians involved in your treatment, including within SMSG and with external clinicians.</li>
                    <li>Communicating with you about appointments, results, referrals, and follow-up care.</li>
                    <li>Meeting our legal, professional and Medicare obligations.</li>
                    <li>Billing you and processing Medicare rebates and private health fund claims.</li>
                    <li>Improving the quality of care we provide, including through internal clinical audits and continuing professional development.</li>
                    <li>Meeting AGPAL accreditation requirements.</li>
                  </ul>
                  <p>
                    We may also use your information for secondary purposes reasonably related to your care, provided you would reasonably expect us to do so. These include:
                  </p>
                  <ul>
                    <li>Following up on outstanding tests, referrals, or clinical concerns.</li>
                    <li>Sending you appointment reminders and health promotion communications where you have consented.</li>
                    <li>Providing information to the Medicare Benefits Schedule and Pharmaceutical Benefits Scheme as required by law.</li>
                    <li>Reporting notifiable conditions (for example certain infectious diseases) as required by public health law.</li>
                  </ul>
                </div>
              </section>

              {/* Section 05 */}
              <section id="who-we-share" className="legal-section">
                <span className="section-num">05 · Sharing</span>
                <h2>Sharing your information for your care.</h2>
                <div className="section-body body-editorial">
                  <p>Health information is shared where it is necessary for your care. This includes:</p>
                  <ul>
                    <li>Other clinicians treating you at SMSG (family GPs, specialists, allied health, nursing team).</li>
                    <li>External clinicians treating you, including your referring GP, referred specialists, allied health providers, and hospitals.</li>
                    <li>Pathology providers and imaging services processing your investigations.</li>
                    <li>Pharmacists dispensing your medications.</li>
                    <li>Emergency services if there is a serious threat to your life, health or safety.</li>
                  </ul>
                  <p>We may also share information where required by law:</p>
                  <ul>
                    <li>Court orders, subpoenas, or coronial requirements.</li>
                    <li>Notifiable disease reporting under NSW and federal public health law.</li>
                    <li>Reporting obligations to Medicare, the PBS, and DVA.</li>
                    <li>Requirements under child protection legislation.</li>
                  </ul>
                  <p>We may share de-identified information for:</p>
                  <ul>
                    <li>Clinical audit and quality improvement.</li>
                    <li>Public health research approved by a Human Research Ethics Committee.</li>
                  </ul>
                  <p>
                    We do not share your personal or health information for marketing, advertising, or any commercial purpose external to your care.
                  </p>
                </div>
              </section>

              {/* Section 06 */}
              <section id="my-health-record" className="legal-section">
                <span className="section-num">06 · My Health Record</span>
                <h2>If you have a My Health Record.</h2>
                <div className="section-body body-editorial">
                  <p>
                    If you have a My Health Record, our clinicians may upload clinical documents to it (with your consent) and may access information you have consented to share.
                  </p>
                  <p>
                    You control what is uploaded to your My Health Record and who can see it. You can opt out of specific clinicians accessing it, restrict specific documents, or cancel your My Health Record altogether through{" "}
                    <a href="https://www.myhealthrecord.gov.au" rel="noopener">
                      myhealthrecord.gov.au
                    </a>
                    .
                  </p>
                </div>
              </section>

              {/* Section 07 */}
              <section id="storage-security" className="legal-section">
                <span className="section-num">07 · Storage</span>
                <h2>Security of your records.</h2>
                <div className="section-body body-editorial">
                  <p>
                    Your personal and health information is stored in our clinical practice management system, which is an Australian-based, secure electronic health record used by many Australian general practices. Access to the system is restricted to authorised clinicians and staff, and every access is logged.
                  </p>
                  <p>
                    We hold physical records in secure, locked storage where they exist in paper form. Paper records are being digitised progressively.
                  </p>
                  <p>Our security measures include:</p>
                  <ul>
                    <li>Individual user logins with password requirements and multi-factor authentication for external access.</li>
                    <li>Role-based access controls so staff can only see the information they need for their work.</li>
                    <li>Access logs that can be reviewed.</li>
                    <li>Regular backup and disaster recovery testing.</li>
                    <li>Physical security at each of our centres (locked file rooms, staff-only areas).</li>
                    <li>Encryption of data in transit and at rest.</li>
                    <li>Contracts with our IT providers requiring them to meet Australian privacy standards.</li>
                  </ul>
                  <p>
                    Notwithstanding all reasonable precautions, no security system is impenetrable. Where a data breach affects your information, we will notify you and the Office of the Australian Information Commissioner as required under the Notifiable Data Breaches scheme.
                  </p>
                </div>
              </section>

              {/* Section 08 */}
              <section id="your-rights" className="legal-section">
                <span className="section-num">08 · Your rights</span>
                <h2>Access, correction, and choice.</h2>
                <div className="section-body body-editorial">
                  <p>You have the right to:</p>
                  <ul>
                    <li>
                      <strong>Access your own records.</strong> You can request a copy of the information we hold about you. We will provide access within a reasonable time, usually within thirty days. A fee may apply where the request is complex or requires significant staff time; the fee is disclosed before we proceed.
                    </li>
                    <li>
                      <strong>Correct inaccurate information.</strong> If you believe information we hold about you is incorrect or out of date, you can ask us to correct it. Corrections to clinical records are made by annotation rather than deletion (this is a clinical record-keeping requirement).
                    </li>
                    <li>
                      <strong>Withdraw consent.</strong> You can withdraw consent for us to share your information with a specific third party or for a specific secondary purpose. Withdrawing consent does not affect information already shared, and it may affect our ability to provide certain aspects of your care.
                    </li>
                    <li>
                      <strong>Make a privacy complaint.</strong> If you believe we have mishandled your information, you can complain to our Chief Growth Officer (see below). If our response does not resolve your concern, you can escalate to the Office of the Australian Information Commissioner or the NSW Privacy Commissioner.
                    </li>
                  </ul>
                  <p>
                    To exercise any of these rights, contact our Chief Growth Officer. We may need to verify your identity before releasing information.
                  </p>
                </div>
              </section>

              {/* Section 09 */}
              <section id="retention" className="legal-section">
                <span className="section-num">09 · Retention</span>
                <h2>How long we keep your information.</h2>
                <div className="section-body body-editorial">
                  <p>Health records are retained for the periods required by NSW and Commonwealth law. In general:</p>
                  <ul>
                    <li>Adult patient records are retained for at least seven years from the date of last entry.</li>
                    <li>Records of patients who were under 18 at the time of last entry are retained until the patient turns 25, or seven years from the date of last entry, whichever is longer.</li>
                    <li>Some categories of records (for example, those relevant to compensation, medico-legal matters, or ongoing care) may be retained for longer.</li>
                  </ul>
                  <p>
                    Records are securely destroyed when they are no longer required, in accordance with our record retention protocol.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="website-cookies" className="legal-section">
                <span className="section-num">10 · Website</span>
                <h2>How our website handles your information.</h2>
                <div className="section-body body-editorial">
                  <p>
                    Our website uses cookies to remember your preferences (for example, whether you have dismissed a notice), to help with navigation, and to gather anonymous analytics about how the site is used. Analytics data is aggregated and does not identify individual visitors.
                  </p>
                  <p>
                    We do not use our website to collect personal or health information about you unless you actively enter it into a form (for example, a new patient registration form or a contact enquiry form). Any information entered into a form on our website is transmitted securely and stored under the same protections as your other personal information.
                  </p>
                  <p>
                    Our website may link to external websites. This Privacy Policy does not apply to those websites, and we recommend you review their own privacy policies.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="contact-complaints" className="legal-section">
                <span className="section-num">11 · Contact</span>
                <h2>How to reach our Chief Growth Officer.</h2>
                <div className="section-body body-editorial">
                  <p>
                    For any question about this Privacy Policy, to request access to your records, to correct information, or to make a privacy complaint, contact our Chief Growth Officer.
                  </p>

                  <div className="contact-card mt-6 not-prose">
                    <dl>
                      <dt>SMSG Chief Growth Officer</dt>
                      <dd>
                        The senior officer responsible for privacy at Specialist Medical Services Group.
                      </dd>

                      <dt>Phone</dt>
                      <dd>
                        <a href="tel:0295547788">02 9554 7788</a> (Earlwood reception, ask to be directed to the CGO).
                      </dd>

                      <dt>Post</dt>
                      <dd>
                        Chief Growth Officer
                        <br />
                        Earlwood Medical Centre
                        <br />
                        352-354 Homer Street
                        <br />
                        Earlwood NSW 2206
                      </dd>
                    </dl>
                  </div>

                  <p className="mt-6">
                    We will acknowledge your privacy enquiry within one business day and respond substantively within thirty days.
                  </p>

                  <div className="legal-sub mt-8">
                    If our response doesn&apos;t resolve your concern
                  </div>
                  <p>You may escalate to either of these external bodies:</p>
                  <ul className="escalation-list not-prose">
                    <li>
                      <span className="name">
                        <strong>Office of the Australian Information Commissioner</strong>
                        <br />
                        <a href="https://www.oaic.gov.au" rel="noopener">
                          oaic.gov.au
                        </a>
                      </span>
                      <span className="num">
                        <a href="tel:1300363992">1300 363 992</a>
                      </span>
                    </li>
                    <li>
                      <span className="name">
                        <strong>NSW Privacy Commissioner</strong>
                        <br />
                        <a href="https://www.ipc.nsw.gov.au" rel="noopener">
                          ipc.nsw.gov.au
                        </a>
                      </span>
                      <span className="num">
                        <a href="tel:1800472679">1800 472 679</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 12 */}
              <section id="changes" className="legal-section">
                <span className="section-num">12 · Updates</span>
                <h2>How we update this document.</h2>
                <div className="section-body body-editorial">
                  <p>
                    This Privacy Policy may be updated from time to time to reflect changes in our practices or legal requirements. The current version is always the one published at this URL. The effective date at the top of this page indicates when the current version was published.
                  </p>
                  <p>
                    Material changes will be flagged with a notice on our website. Non-material changes (such as clarifications or contact detail updates) may be made without notice.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED PAGES ==================== */}
      <section className="relative bg-cream-2/50 border-t border-black/5">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-end mb-8">
            <div className="md:col-span-7">
              <span className="allcaps text-ink-3">Related pages</span>
              <h2 className="font-display h-legal mt-3 max-w-[24ch]">
                Read on to go <span className="italic font-display-warm">deeper.</span>
              </h2>
            </div>
            <div className="md:col-span-5 body-lg text-ink-2 max-w-[46ch] md:text-right md:ml-auto">
              The rest of our About cluster: the legal terms that go with this policy, how to raise a concern, and where we stand on safety at our centres.
            </div>
          </div>

          <div data-related="grid-3">
            <Link href={routes.about("terms-of-service")} className="rc-card group">
              <div>
                <div className="rc-eyebrow">About · Legal</div>
                <div className="rc-title">Terms of Service</div>
                <div className="rc-desc">
                  The legal terms governing your use of our website.
                </div>
              </div>
              <span className="rc-cta">
                Read the terms <Arrow />
              </span>
            </Link>
            <Link href={routes.about("feedback-and-complaints")} className="rc-card group">
              <div>
                <div className="rc-eyebrow">About · Feedback</div>
                <div className="rc-title">Feedback &amp; Complaints</div>
                <div className="rc-desc">
                  How to raise a concern with SMSG through internal or external channels.
                </div>
              </div>
              <span className="rc-cta">
                Raise a concern <Arrow />
              </span>
            </Link>
            <Link
              href={routes.about("zero-workplace-violence-tolerance")}
              className="rc-card group"
            >
              <div>
                <div className="rc-eyebrow">About · Safety</div>
                <div className="rc-title">Zero Workplace Violence Tolerance</div>
                <div className="rc-desc">
                  Our position on abuse, aggression and violence at our centres.
                </div>
              </div>
              <span className="rc-cta">
                Read the policy <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
