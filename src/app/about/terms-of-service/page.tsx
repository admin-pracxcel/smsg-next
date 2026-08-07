import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { DocToc } from "@/components/DocToc";
import { routes } from "@/lib/routes";
import { buildTermsSchema } from "./schema";

export const metadata: Metadata = {
  title: "Terms of Service | SMSG",
  description:
    "The terms governing your use of the SMSG website and our related services. Please read them carefully.",
  alternates: { canonical: "https://smsg.au/about/terms-of-service/" },
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
  { id: "acceptance", label: "What using this site means" },
  { id: "scope", label: "Information, not medical advice" },
  { id: "booking", label: "How our appointment process works" },
  { id: "use", label: "What you can and cannot do" },
  { id: "ip", label: "Content ownership" },
  { id: "reviews", label: "Your voice on our platforms" },
  { id: "third-party", label: "Content we do not control" },
  { id: "liability", label: "Limits of our responsibility" },
  { id: "clinical", label: "Terms specific to your care" },
  { id: "law", label: "Which laws apply" },
  { id: "contact", label: "Questions about these Terms" },
];

export default function TermsOfServicePage() {
  const schema = buildTermsSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About", href: routes.aboutHub() },
              { label: "Terms of Service" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HEADER BLOCK ==================== */}
      <section className="relative overflow-hidden legal-wash">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <div className="max-w-[52ch]">
            <span className="legal-hero-eyebrow">
              <span className="dot" />
              About
              <span className="sep" />
              Terms of Service
            </span>

            <h1 className="font-display h-brand mt-6">
              Terms of <span className="italic font-display-warm">Service.</span>
            </h1>

            <p className="mt-6 lede text-ink-2 max-w-[46ch]">
              The terms governing your use of the SMSG website and our related services. Please read them carefully.
            </p>

            <div className="mt-7 legal-meta">
              <div>
                <span className="allcaps text-ink-3">Last updated</span>{" "}
                <strong className="ml-2">27 July 2026</strong>
              </div>
              <div>
                <span className="allcaps text-ink-3">Effective</span>{" "}
                <strong className="ml-2">August 2026</strong>
              </div>
              <span className="pill">
                Governing law: New South Wales, Australia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BODY ==================== */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16">
            {/* LEFT: Sticky ToC */}
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} />
              </div>
            </aside>

            {/* RIGHT: Terms body */}
            <div className="md:col-span-9">
              {/* Key points card */}
              <div className="keypoints">
                <div className="kp-label">
                  <span className="dot" />
                  Key points, in plain English
                </div>
                <ol>
                  <li>
                    By using the SMSG website you agree to these Terms. If you don&apos;t agree, please don&apos;t use the site.
                  </li>
                  <li>
                    The site is general information about our centres and clinicians. It is not medical advice, and it is not a substitute for a consultation with your doctor.
                  </li>
                  <li>
                    Bookings, cancellations and no-shows follow the policies we notify you of at the time of booking. Late cancellations or non-attendance may attract a fee.
                  </li>
                  <li>
                    Our content and branding are protected. Personal, non-commercial use is welcome. Commercial reuse, republishing or training AI on our content is not.
                  </li>
                  <li>
                    These Terms are governed by the laws of New South Wales, Australia. Nothing here limits your rights under the Australian Consumer Law.
                  </li>
                </ol>
              </div>

              {/* 01 */}
              <article className="legal-section" id="acceptance">
                <span className="section-num">Section 01</span>
                <h2>What using this site means.</h2>
                <div className="body-editorial">
                  <p>
                    By accessing or using the SMSG website at smsg.au (the Site) or any of our related digital services, you agree to be bound by these Terms of Service (Terms). If you do not agree with these Terms, please do not use the Site.
                  </p>
                  <p>
                    These Terms are between you and Specialist Medical Services Group (SMSG, we, us, our), the operator of this Site. Where you access the Site as a representative of an organisation, you confirm you have the authority to bind that organisation to these Terms.
                  </p>
                  <p>
                    We may update these Terms from time to time. The version in force is the one published at this URL. Continued use of the Site after changes constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </article>

              {/* 02 */}
              <article className="legal-section" id="scope">
                <span className="section-num">Section 02</span>
                <h2>Information, not medical advice.</h2>
                <div className="body-editorial">
                  <p>
                    The SMSG Site provides general information about our centres, our clinicians, our services, and how to become a patient. Content on the Site includes:
                  </p>
                  <ul>
                    <li>Descriptions of clinical services offered at our three centres</li>
                    <li>Profiles of our practitioners</li>
                    <li>Practical information about locations, hours, contact detail, and booking</li>
                    <li>General educational content about health conditions and treatments</li>
                    <li>Policies and legal information about SMSG</li>
                  </ul>
                  <p>
                    <strong>Nothing on this Site constitutes medical advice.</strong> The Site content is general in nature. It does not take account of your personal circumstances, medical history, or clinical presentation. It is not a substitute for a consultation with a qualified clinician who has examined you.
                  </p>
                  <p>
                    If you have a health concern, book an appointment with an SMSG clinician or another qualified healthcare professional. If you are experiencing a medical emergency, dial 000 immediately or attend your nearest emergency department.
                  </p>
                </div>
              </article>

              {/* 03 */}
              <article className="legal-section" id="booking">
                <span className="section-num">Section 03</span>
                <h2>How our appointment process works.</h2>
                <div className="body-editorial">
                  <p>
                    Bookings made through the Site are subject to availability and confirmation by our reception team. A booking is not confirmed until you receive a confirmation email or SMS.
                  </p>

                  <h3>Cancellations</h3>
                  <p>
                    Please provide at least 24 hours&apos; notice if you need to cancel or reschedule an appointment. Cancellation policies vary by service, with cosmetic and procedural appointments having stricter terms. Late cancellations or non-attendance may attract a fee, which is disclosed at the time of booking.
                  </p>

                  <h3>No-show fees</h3>
                  <p>
                    Where a patient does not attend a booked appointment and has not cancelled with reasonable notice, a no-show fee may apply. This is separately notified to you at booking.
                  </p>

                  <h3>Deposit-secured appointments</h3>
                  <p>
                    Certain procedural or cosmetic appointments require a deposit to secure the booking. The deposit is applied to your account at attendance, or forfeited in the event of a late cancellation or no-show.
                  </p>

                  <h3>Appointment reminders</h3>
                  <p>
                    We may send you SMS or email appointment reminders. You can opt out of these reminders through reception, though we recommend keeping them active as no-shows attract fees.
                  </p>

                  <p>
                    Full detail of fees for cancellation and no-show is available at reception. Our Fees &amp; Billing page covers the general fee framework across the group.
                  </p>
                </div>
              </article>

              {/* 04 */}
              <article className="legal-section" id="use">
                <span className="section-num">Section 04</span>
                <h2>What you can and cannot do.</h2>
                <div className="body-editorial">
                  <p>
                    You may use the Site for personal, non-commercial purposes, including learning about our services, booking appointments, and communicating with our centres through the channels provided.
                  </p>
                  <p>You must not:</p>
                  <ul>
                    <li>Use the Site in a way that breaches Australian law</li>
                    <li>Attempt to gain unauthorised access to any part of the Site, our clinical systems, or the systems of our IT providers</li>
                    <li>Reverse-engineer, decompile, or otherwise attempt to derive source code from the Site</li>
                    <li>Introduce viruses, malware, or other malicious code to the Site</li>
                    <li>Scrape, mirror, or duplicate substantial portions of the Site&apos;s content without our written consent</li>
                    <li>Use the Site to send unsolicited communications, spam, or promotional material</li>
                    <li>Impersonate another patient, clinician, or member of SMSG staff</li>
                    <li>Post reviews or comments that are false, defamatory, or in breach of any person&apos;s rights</li>
                    <li>Use any content from the Site for the purpose of training AI or machine learning models without our written consent</li>
                  </ul>
                  <p>
                    Breach of these use terms may result in suspension of your access to online services, including online booking, and may be reported to law enforcement where warranted.
                  </p>
                </div>
              </article>

              {/* 05 */}
              <article className="legal-section" id="ip">
                <span className="section-num">Section 05</span>
                <h2>Content ownership.</h2>
                <div className="body-editorial">
                  <p>
                    The Site, and all content on it including text, images, graphics, video, audio, logos, brand names, layouts, and design elements, is either owned by SMSG or used under licence.
                  </p>
                  <p>Copyright in the Site and its content belongs to SMSG. You may:</p>
                  <ul>
                    <li>View, download, and print content from the Site for personal, non-commercial use</li>
                    <li>Quote small portions of content for the purpose of review or reference, with attribution</li>
                  </ul>
                  <p>You may not:</p>
                  <ul>
                    <li>Reproduce, republish, or redistribute substantial portions of the content commercially</li>
                    <li>Modify content and present it as your own</li>
                    <li>Use SMSG branding, logos, or sub-brand names (including Aurora Women &amp; Babies Health, Kids&apos; Dr, Excelsia Specialist Centre, Clarion Skin Cancer Clinic, and Sydney Cosmedic) in your own marketing or content without written permission</li>
                    <li>Use content from the Site to train AI systems</li>
                  </ul>
                  <p>
                    Reasonable requests to use content for educational, research, or media purposes will generally be granted. Contact our Chief Growth Officer for permission.
                  </p>
                </div>
              </article>

              {/* 06 */}
              <article className="legal-section" id="reviews">
                <span className="section-num">Section 06</span>
                <h2>Your voice on our platforms.</h2>
                <div className="body-editorial">
                  <p>
                    We welcome patient reviews, feedback, and comments through legitimate channels including Google Reviews, our website contact forms, and formal complaints.
                  </p>
                  <p>
                    Where you post publicly, please ensure your review is honest, based on your own experience, and does not identify other patients or clinicians in ways that breach their privacy. Reviews that are defamatory, false, or in breach of Google&apos;s or any other platform&apos;s terms may be reported to that platform for removal.
                  </p>
                  <p>
                    We reserve the right to publicly respond to reviews about SMSG on the platforms where they are posted, subject to our obligation to protect patient privacy. Where we respond, we will not confirm or deny that the reviewer is a patient, and we will not disclose clinical detail.
                  </p>
                </div>
              </article>

              {/* 07 */}
              <article className="legal-section" id="third-party">
                <span className="section-num">Section 07</span>
                <h2>Content and services we do not control.</h2>
                <div className="body-editorial">
                  <p>
                    The Site may link to third-party websites and services, for example, Automed for appointment booking, HotDoc for reminders, or external health information resources.
                  </p>
                  <p>
                    We do not control these third parties. Their content, terms, and privacy practices are their own. We are not responsible for the accuracy, availability, or security of content or services on linked sites. Where you click through to a third-party site, please review that site&apos;s own terms and privacy policy.
                  </p>
                  <p>
                    The third-party services we integrate with are chosen with care and are subject to appropriate contractual protections. Where a third-party service handles your personal or health information on our behalf (for example, our appointment booking provider), that handling is covered under our Privacy Policy.
                  </p>
                </div>
              </article>

              {/* 08 */}
              <article className="legal-section" id="liability">
                <span className="section-num">Section 08</span>
                <h2>Limits of our responsibility.</h2>
                <div className="body-editorial">
                  <p>
                    The Site content is provided on an &quot;as is&quot; basis and without warranty of any kind, express or implied. While we take reasonable care to ensure the accuracy and currency of the Site content, we do not guarantee that:
                  </p>
                  <ul>
                    <li>The content is free from error or omission</li>
                    <li>The Site is uninterrupted, secure, or free from viruses</li>
                    <li>Third-party services integrated with the Site will always be available</li>
                    <li>General health information on the Site applies to your specific circumstances</li>
                  </ul>
                  <p>To the extent permitted by law:</p>
                  <ul>
                    <li>We exclude all liability for indirect, consequential, or special loss arising from your use of the Site</li>
                    <li>Our total liability for any claim relating to your use of the Site is limited to the amount you have paid us for the specific service the claim relates to</li>
                  </ul>
                  <p>
                    Nothing in these Terms limits or excludes rights you have under the Australian Consumer Law, including consumer guarantees that cannot be excluded.
                  </p>
                </div>
              </article>

              {/* 09 */}
              <article className="legal-section" id="clinical">
                <span className="section-num">Section 09</span>
                <h2>Terms specific to the care you receive.</h2>
                <div className="body-editorial">
                  <p>
                    The terms above cover your use of the Site. The clinical services you receive from an SMSG clinician are separately governed by:
                  </p>
                  <ul>
                    <li>The clinician-patient relationship established at your appointment</li>
                    <li>Australian medical, legal, and ethical standards for healthcare</li>
                    <li>The Health Records and Information Privacy Act (NSW), the Privacy Act (Cth), and other applicable law</li>
                    <li>Any specific consents you provide for treatment or investigation</li>
                    <li>Our Fees &amp; Billing page for the fee framework</li>
                  </ul>
                  <p>
                    Clinical outcomes cannot be guaranteed. Every medical intervention carries some risk, and your clinician will discuss the specific risks and benefits of any recommended treatment with you before you consent.
                  </p>
                </div>
              </article>

              {/* 10 */}
              <article className="legal-section" id="law">
                <span className="section-num">Section 10</span>
                <h2>Which laws apply.</h2>
                <div className="body-editorial">
                  <p>
                    These Terms are governed by the laws of New South Wales, Australia. You submit to the exclusive jurisdiction of the courts of New South Wales for any dispute arising in connection with these Terms.
                  </p>
                </div>
              </article>

              {/* 11 */}
              <article className="legal-section" id="contact">
                <span className="section-num">Section 11</span>
                <h2>Questions about these Terms.</h2>
                <div className="body-editorial">
                  <p>
                    For any question about these Terms, or to seek permission for uses of content not covered above, contact our Chief Growth Officer.
                  </p>
                </div>

                <div className="contact-card mt-8 max-w-[52ch]">
                  <div className="cc-label">
                    How to contact us about these Terms
                  </div>
                  <div className="cc-name">SMSG Chief Growth Officer</div>
                  <dl>
                    <div>
                      <dt>Phone</dt>
                      <dd>
                        <a
                          href="tel:0295547788"
                          className="link-editorial text-[13.5px]"
                        >
                          02 9554 7788
                        </a>{" "}
                        (Earlwood reception, ask to be directed to the CGO)
                      </dd>
                    </div>
                    <div>
                      <dt>Post</dt>
                      <dd>
                        Chief Growth Officer, Earlwood Medical Centre, 352-354 Homer Street, Earlwood NSW 2206
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="body-editorial mt-6">
                  <p>
                    For privacy-specific questions, please see our{" "}
                    <Link
                      href={routes.about("privacy-policy")}
                      className="link-editorial text-[15.5px]"
                    >
                      Privacy Policy
                    </Link>{" "}
                    for the contacts and processes that apply.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED PAGES ==================== */}
      <section className="relative border-t border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-16">
          <div className="flex items-end justify-between gap-6 mb-8">
            <div>
              <div className="allcaps text-ink-3">Related pages</div>
              <h2 className="font-display h-section mt-2">
                Read on to go deeper.
              </h2>
            </div>
            <Link
              href={routes.aboutHub()}
              className="btn-ghost hidden md:inline-flex"
            >
              Back to About
              <Arrow />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Link href={routes.about("privacy-policy")} className="related-tile group">
              <div>
                <div className="rt-eyebrow">About · Privacy</div>
                <div className="rt-title">Privacy Policy</div>
                <p className="rt-desc">
                  How we handle your personal and health information across the group, and the rights you have.
                </p>
              </div>
              <span className="rt-cta">
                Read the policy <Arrow />
              </span>
            </Link>
            <Link
              href={routes.about("zero-workplace-violence-tolerance")}
              className="related-tile group"
            >
              <div>
                <div className="rt-eyebrow">About · Safety</div>
                <div className="rt-title">Zero Workplace Violence Tolerance</div>
                <p className="rt-desc">
                  Our position on aggressive or abusive behaviour toward clinicians and reception, and what happens if it occurs.
                </p>
              </div>
              <span className="rt-cta">
                Read the policy <Arrow />
              </span>
            </Link>
            <Link
              href={routes.about("feedback-and-complaints")}
              className="related-tile group"
            >
              <div>
                <div className="rt-eyebrow">About · Complaints</div>
                <div className="rt-title">Feedback &amp; Complaints</div>
                <p className="rt-desc">
                  How to raise a concern with SMSG, what happens next, and the external avenues open to you.
                </p>
              </div>
              <span className="rt-cta">
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
