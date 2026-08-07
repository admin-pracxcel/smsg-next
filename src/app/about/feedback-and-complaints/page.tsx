import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { buildFeedbackSchema } from "./schema";
import { DocToc } from "@/components/DocToc";

export const metadata: Metadata = {
  title: "Feedback & Complaints | SMSG",
  description:
    "How to give feedback or raise a complaint about care at SMSG, what happens next, and the external bodies you can also contact.",
  alternates: {
    canonical: "https://smsg.au/about/feedback-and-complaints/",
  },
};

function RArrow() {
  return (
    <svg
      className="r-arrow"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 10h13M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="ct-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6c0-1.1.9-2 2-2h2.5c.4 0 .8.3.9.7l1 3.2c.1.4-.1.9-.5 1.1L8.5 10c1 2 2.5 3.5 4.5 4.5l1-1.4c.2-.4.7-.5 1.1-.4l3.2 1c.4.1.7.5.7.9V17c0 1.1-.9 2-2 2h-1C10.4 19 5 13.6 5 7V6z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="ct-ico" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 6.5C3 5.7 3.7 5 4.5 5h15c.8 0 1.5.7 1.5 1.5v11c0 .8-.7 1.5-1.5 1.5h-15C3.7 19 3 18.3 3 17.5v-11z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M3.5 6l8.5 6 8.5-6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CENTRES = [
  {
    name: "Earlwood Medical Centre",
    addr: "352-354 Homer Street, Earlwood NSW 2206",
    tel: "02 9554 7788",
    telHref: "tel:0295547788",
    email: "EMC@smsg.au",
  },
  {
    name: "Bangor Medical Centre",
    addr: "121 Yala Road, Bangor NSW 2234",
    tel: "02 8582 1318",
    telHref: "tel:0285821318",
    email: "BMC@smsg.au",
  },
  {
    name: "Sans Souci Doctors",
    addr: "39 Campbell Street, Sans Souci NSW 2219",
    tel: "02 7923 9103",
    telHref: "tel:0279239103",
    email: "SSD@smsg.au",
  },
];

const TOC = [
  { id: "our-position", label: "Complaints improve the practice" },
  { id: "how-to-reach", label: "Three ways to reach us" },
  { id: "what-happens", label: "What happens next" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "anonymous", label: "Raising a concern anonymously" },
  { id: "external", label: "External escalation" },
  { id: "positive", label: "Positive feedback and suggestions" },
];

export default function FeedbackComplaintsPage() {
  const schema = buildFeedbackSchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "About", href: routes.aboutHub() },
              { label: "Feedback & Complaints" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="hero-band">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <div className="max-w-[860px]">
            <div className="allcaps text-ink-3 mb-4">
              About · Feedback &amp; Complaints
            </div>
            <h1 className="font-display h-brand text-ink">
              Feedback &amp; Complaints.
            </h1>
            <p className="lede mt-6 max-w-[62ch] text-ink-2">
              Every SMSG patient has the right to give feedback or raise a complaint about their care. We take both seriously, we respond within defined timeframes, and we support external escalation where you prefer that route.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT TILES (top, before ToC) ==================== */}
      <section className="pt-10 md:pt-12">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="flex items-center justify-between gap-6 mb-5">
            <div>
              <div className="allcaps text-ink-3">Reach us directly</div>
              <h2 className="font-display h-section mt-2 text-ink">
                Contact your centre.
              </h2>
            </div>
            <div className="hidden md:block text-[13px] text-ink-3 max-w-[36ch] text-right">
              Emails are checked during business hours. Please do not send clinically urgent matters by email.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {CENTRES.map((c) => (
              <div key={c.name} className="contact-tile">
                <div>
                  <div className="ct-clinic">{c.name}</div>
                  <div className="ct-addr mt-1">{c.addr}</div>
                </div>
                <div className="ct-row">
                  <PhoneIcon />
                  <a href={c.telHref}>{c.tel}</a>
                </div>
                <div className="ct-row">
                  <EmailIcon />
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[13px] text-ink-3 md:hidden">
            Emails are checked during business hours. Please do not send clinically urgent matters by email.
          </div>
        </div>
      </section>

      {/* ==================== BODY (ToC + process) ==================== */}
      <section className="pt-14 md:pt-20 pb-16 md:pb-20">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            {/* LEFT: sticky ToC (shared DocToc pattern used by
                privacy / terms / zero-tolerance so all four pages look and
                behave identically). */}
            <aside className="md:col-span-3">
              <div className="md:sticky" style={{ top: "112px" }}>
                <DocToc sections={TOC} />
              </div>
            </aside>

            {/* Body */}
            <div className="md:col-span-9 max-w-[68ch]">
              {/* Section 1 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  01 · Our position
                </div>
                <h2
                  id="our-position"
                  className="font-display h-section mt-3 text-ink"
                >
                  Complaints improve the practice.
                </h2>
                <div className="body-editorial mt-5">
                  <p>
                    The most useful information we receive about how SMSG is running comes from patients. Not from surveys, not from clinical outcome data alone, but from patients who tell us what worked and what did not. Positive feedback tells us where we should keep doing what we are doing. Complaints tell us where something needs to change.
                  </p>
                  <p>
                    Because of this, our approach to complaints is to welcome them, take them seriously, and treat them as information rather than as attacks on the clinicians or staff involved. Every complaint we receive is documented, reviewed by our Practice Manager, and, depending on severity, escalated to our Chief Growth Officer or to the clinicians involved.
                  </p>
                  <p>
                    We aim to close the loop with you on any complaint you raise. That means telling you what we found, what we changed as a result (if anything), and giving you a clear path if you are not satisfied with our response.
                  </p>
                </div>
              </div>

              <div className="hairline-soft my-12 md:my-16" />

              {/* Section 2 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  02 · How to give feedback
                </div>
                <h2
                  id="how-to-reach"
                  className="font-display h-section mt-3 text-ink"
                >
                  Three ways to reach us.
                </h2>
                <p className="body-lg text-ink-2 mt-5 max-w-[62ch]">
                  You do not need to escalate directly to a manager. Most feedback and complaints are handled well through the reception team at your centre, and this is usually the fastest way to a resolution.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="method-card">
                    <div className="m-tag">
                      <span className="dot" />
                      Option 1
                    </div>
                    <div className="m-title">In person, at reception</div>
                    <p>
                      Speak to the reception team at Earlwood, Bangor, or Sans Souci. If your concern requires a private discussion, ask reception for a quiet space and they will find one.
                    </p>
                  </div>
                  <div className="method-card">
                    <div className="m-tag">
                      <span className="dot" />
                      Option 2
                    </div>
                    <div className="m-title">By phone</div>
                    <p>
                      If your concern is about the clinician you are booked with and you would prefer not to speak to them directly, ask to speak to the Practice Manager.
                    </p>
                    <ul>
                      <li>
                        <span className="lbl">Earlwood</span>
                        <a href="tel:0295547788">02 9554 7788</a>
                      </li>
                      <li>
                        <span className="lbl">Bangor</span>
                        <a href="tel:0285821318">02 8582 1318</a>
                      </li>
                      <li>
                        <span className="lbl">Sans Souci</span>
                        <a href="tel:0279239103">02 7923 9103</a>
                      </li>
                    </ul>
                  </div>
                  <div className="method-card">
                    <div className="m-tag">
                      <span className="dot" />
                      Option 3
                    </div>
                    <div className="m-title">In writing</div>
                    <p>
                      Email the centre where the concern arose. Please do not send clinically urgent matters by email; emails are checked during business hours only.
                    </p>
                    <ul>
                      <li>
                        <span className="lbl">Earlwood</span>
                        <a href="mailto:EMC@smsg.au">EMC@smsg.au</a>
                      </li>
                      <li>
                        <span className="lbl">Bangor</span>
                        <a href="mailto:BMC@smsg.au">BMC@smsg.au</a>
                      </li>
                      <li>
                        <span className="lbl">Sans Souci</span>
                        <a href="mailto:SSD@smsg.au">SSD@smsg.au</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="callout mt-8">
                  <div className="c-head">
                    <span className="dot" />
                    Group management
                  </div>
                  <p>
                    For complaints of a more serious nature, or where you would prefer the matter to bypass the centre and go directly to group management, ask Earlwood reception to be directed to our Chief Growth Officer on{" "}
                    <a
                      href="tel:0295547788"
                      className="link-editorial text-[14.5px]"
                    >
                      02 9554 7788
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="hairline-soft my-12 md:my-16" />

              {/* Section 3 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  03 · Our internal process
                </div>
                <h2
                  id="what-happens"
                  className="font-display h-section mt-3 text-ink"
                >
                  What happens after you contact us.
                </h2>
                <p className="body-lg text-ink-2 mt-5 max-w-[62ch]">
                  Once we receive your feedback or complaint, this is what happens next.
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    {
                      n: "1",
                      when: "Within one business day",
                      title: "Acknowledgement.",
                      items: [
                        "We acknowledge receipt of your complaint. If you have raised it at reception, this is immediate. If by email, expect a response within one business day.",
                        "The complaint is logged in our internal feedback register.",
                      ],
                    },
                    {
                      n: "2",
                      when: "Within five business days",
                      title: "Review and initial response.",
                      items: [
                        "The Practice Manager reviews the complaint and determines the appropriate response.",
                        "If the complaint concerns clinical care, the treating clinician is informed and asked to provide a written response.",
                        "If the complaint concerns reception, nursing, administrative, or facility matters, the Practice Manager investigates directly.",
                        "Where the complaint is complex or requires input from multiple parties, an initial holding response is sent within five business days, and a substantive response within fifteen.",
                      ],
                    },
                    {
                      n: "3",
                      when: "Within fifteen business days",
                      title: "Substantive response.",
                      items: [
                        "We provide you with a substantive response, including what we found, what we have done in response, and what changes (if any) we are making as a result.",
                        "Where the complaint is upheld and warrants an apology, we apologise.",
                        "Where the complaint requires ongoing action, we tell you what the next steps are and when you should expect them.",
                      ],
                    },
                    {
                      n: "4",
                      when: "Ongoing follow-up",
                      title: "Systemic change and formal review.",
                      items: [
                        "Where a complaint prompts a change to a clinical protocol, a change to our reception processes, or any other systemic change, we implement it and confirm to you that it has been implemented.",
                        "Where the complaint has been serious enough to warrant a formal review, that review is minuted and its findings recorded.",
                      ],
                    },
                  ].map((s) => (
                    <div key={s.n} className="step-row">
                      <div className="step-num">{s.n}</div>
                      <div className="step-body">
                        <div className="step-when">
                          <span className="dot" />
                          {s.when}
                        </div>
                        <div className="step-title">{s.title}</div>
                        <ul>
                          {s.items.map((it) => (
                            <li key={it}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hairline-soft my-12 md:my-16" />

              {/* Section 4 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  04 · Confidentiality
                </div>
                <h2
                  id="confidentiality"
                  className="font-display h-section mt-3 text-ink"
                >
                  How we protect you when you raise a complaint.
                </h2>
                <div className="body-editorial mt-5">
                  <p>
                    Raising a complaint at SMSG does not affect your ability to receive care at any of our centres, does not affect your relationship with any other clinician at the group, and is not shared with other patients under any circumstance.
                  </p>
                  <p>
                    Where a complaint concerns a specific clinician, that clinician will be informed of the complaint and given the opportunity to respond. This is required for procedural fairness. The clinician is not told to change their approach to you or given any information they need to change their approach to any other patient. Your file continues to be managed under the same privacy protections that apply to all patient records.
                  </p>
                  <p>
                    If you are worried that raising a complaint will affect your care, please tell the Practice Manager when you contact us. We take confidentiality of complaints seriously.
                  </p>
                </div>
              </div>

              <div className="hairline-soft my-12 md:my-16" />

              {/* Section 5 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  05 · Anonymous concerns
                </div>
                <h2
                  id="anonymous"
                  className="font-display h-section mt-3 text-ink"
                >
                  Raising a concern anonymously.
                </h2>
                <div className="body-editorial mt-5">
                  <p>
                    If you would prefer to raise a concern without giving your name, you can. An anonymous email to any of our centre inboxes will be logged in the feedback register and reviewed by the Practice Manager the same way any other complaint would be.
                  </p>
                  <p>
                    The trade-off is that we will not be able to write back to you, confirm what we found, or tell you what we changed. If the concern relates to a specific appointment or clinician, an anonymous report also limits our ability to investigate the underlying facts. Where you are willing to share your name, we handle your details under the confidentiality protections described above, and you get the benefit of a written response and the chance to raise a follow-up if you are not satisfied.
                  </p>
                  <p>
                    If you would like to give your name to us in confidence but not have it shared with the clinician involved (for example, where you have raised a concern about a doctor you would still like to keep seeing), please say so when you contact us. We will handle the matter accordingly.
                  </p>
                </div>
              </div>

              <div className="hairline-soft my-12 md:my-16" />

              {/* Section 6 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  06 · External escalation
                </div>
                <h2
                  id="external"
                  className="font-display h-section mt-3 text-ink"
                >
                  If our response does not resolve the concern.
                </h2>
                <p className="body-lg text-ink-2 mt-5 max-w-[62ch]">
                  If you are not satisfied with our internal response, or if you prefer to bypass our internal process entirely, you can escalate through the following external bodies. External escalation is your right, and using it does not affect your relationship with SMSG.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      name: "Health Care Complaints Commission (HCCC) NSW",
                      scope: "The HCCC handles complaints about health services in NSW. This includes concerns about the standard of care provided, the conduct of a health practitioner, or the way a health service has responded to a complaint.",
                      site: { label: "hccc.nsw.gov.au", href: "https://hccc.nsw.gov.au" },
                      phone: { label: "1800 043 159", href: "tel:1800043159" },
                    },
                    {
                      name: "Australian Health Practitioner Regulation Agency (AHPRA)",
                      scope: "AHPRA handles notifications about registered health practitioners (medical practitioners, nurses, allied health practitioners) where there are concerns about their professional conduct, performance, or health.",
                      site: { label: "ahpra.gov.au", href: "https://ahpra.gov.au" },
                      phone: { label: "1300 419 495", href: "tel:1300419495" },
                    },
                    {
                      name: "Office of the Australian Information Commissioner (OAIC)",
                      scope: "For complaints specifically about how your personal or health information has been handled, the OAIC is the federal privacy regulator.",
                      site: { label: "oaic.gov.au", href: "https://oaic.gov.au" },
                      phone: { label: "1300 363 992", href: "tel:1300363992" },
                    },
                    {
                      name: "NSW Privacy Commissioner",
                      scope: "For privacy complaints specifically concerning NSW-based health information handling under the Health Records and Information Privacy Act (NSW).",
                      site: { label: "ipc.nsw.gov.au", href: "https://ipc.nsw.gov.au" },
                      phone: { label: "1800 472 679", href: "tel:1800472679" },
                    },
                  ].map((e) => (
                    <div key={e.name} className="esc-card">
                      <div>
                        <div className="e-name">{e.name}</div>
                      </div>
                      <p className="e-scope">{e.scope}</p>
                      <div className="e-meta">
                        <div className="e-row">
                          <span className="e-lbl">Website</span>
                          <a href={e.site.href} target="_blank" rel="noopener">
                            {e.site.label}
                          </a>
                        </div>
                        <div className="e-row">
                          <span className="e-lbl">Phone</span>
                          <a href={e.phone.href}>{e.phone.label}</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hairline-soft my-12 md:my-16" />

              {/* Section 7 */}
              <div>
                <div
                  className="allcaps text-accent"
                  style={{ color: "var(--accent, #9A2F52)" }}
                >
                  07 · Feedback that is not a complaint
                </div>
                <h2
                  id="positive"
                  className="font-display h-section mt-3 text-ink"
                >
                  Positive feedback and suggestions.
                </h2>
                <div className="body-editorial mt-5">
                  <p>
                    We are equally interested in feedback that is not a complaint. If a clinician, receptionist or nurse has given you excellent care and you would like us to know, please tell us. We share positive feedback with the team members involved, and it is a meaningful part of how we recognise and retain our team.
                  </p>
                  <p>
                    You are also welcome to leave a Google review for any of our three centres. Reviews help other patients understand what to expect and help us understand what patients value most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED PAGES ==================== */}
      <section className="pb-20 md:pb-24">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="max-w-[860px]">
            <div className="allcaps text-ink-3">Related</div>
            <h2 className="font-display h-section mt-2 text-ink">
              Read on to go deeper.
            </h2>
          </div>

          <div className="mt-8 max-w-[860px]">
            {[
              {
                href: routes.about("privacy-policy"),
                name: "Privacy Policy",
                desc: "How we handle your personal and health information.",
              },
              {
                href: routes.about("zero-workplace-violence-tolerance"),
                name: "Zero Workplace Violence Tolerance",
                desc: "Our commitment to a safe environment for staff and patients.",
              },
              {
                href: routes.about("terms-of-service"),
                name: "Terms of Service",
                desc: "The terms that govern your use of our services and website.",
              },
              {
                href: routes.about("awards-and-accreditations"),
                name: "Awards & Accreditations",
                desc: "The standards SMSG holds itself to, including AGPAL and CESPHN recognition.",
              },
            ].map((r) => (
              <Link key={r.name} href={r.href} className="related-row group">
                <div>
                  <div className="r-name">{r.name}</div>
                  <div className="r-desc">{r.desc}</div>
                </div>
                <RArrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
