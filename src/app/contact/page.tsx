import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LocationContactForm } from "@/components/contact/LocationContactForm";
import { routes } from "@/lib/routes";
import { CLINICS, clinicList } from "@/lib/clinics";
import { buildContactSchema } from "./schema";

export const metadata: Metadata = {
  title: "Contact SMSG | Specialist Medical Services Group",
  description:
    "Contact Earlwood Medical Centre, Bangor Medical Centre and Sans Souci Doctors. Phone, address, hours, and general enquiries.",
  alternates: { canonical: "https://smsg.au/contact/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg className={className} width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h9M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const HOURS: Record<string, { weekday: string; saturday?: string }> = {
  earlwood: { weekday: "Monday to Friday, 9am to 6pm", saturday: "Saturday, 9am to 3pm" },
  bangor: { weekday: "Monday to Friday, 9am to 6pm" },
  sanssouci: { weekday: "Monday to Friday, 9am to 6pm" },
};

const DIRECTIONS: Record<string, string> = {
  earlwood: "https://maps.app.goo.gl/kPzUFgL5gcYHdDZ47",
  bangor: "https://maps.app.goo.gl/CfvQsVvr39eZKvQj6",
  sanssouci: "https://maps.app.goo.gl/dpy1ae4sY8nmtdWk9",
};

const MAP_EMBEDS: Record<string, string> = {
  earlwood:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5544595100455!2d151.1252424!3d-33.9268648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ba6cfa711b01%3A0x2a51a59f20ba79ab!2sEarlwood%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1786688069077!5m2!1sen!2sin",
  bangor:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.004127587714!2d151.029097!3d-34.018105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c1291edcd715%3A0xda1d4870584cde6d!2sBangor%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1786688097960!5m2!1sen!2sin",
  sanssouci:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2830551313064!2d151.1369289!3d-33.9852626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b7730a43d887%3A0xbe37a0dac648036d!2sSans%20Souci%20Doctors!5e0!3m2!1sen!2sin!4v1786688110011!5m2!1sen!2sin",
};

const AFTER_HOURS = [
  { label: "National Home Doctor Service (13 SICK)", value: "13 74 25", tel: "137425" },
  { label: "Healthdirect", value: "1800 022 222", tel: "1800022222" },
  { label: "Poisons Information Centre", value: "13 11 26", tel: "131126" },
];

export default function ContactPage() {
  const schema = buildContactSchema();
  return (
    <div className="iud-page">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb items={[
            { label: "SMSG", href: routes.home() },
            { label: "Contact" },
          ]} />
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-10 md:pb-14">
          <span className="brand-chip">
            <span className="dot" />
            Get in touch
          </span>
          <h1 className="font-display h-service max-w-[16ch] mt-6">
            Contact <span className="italic font-display-warm" style={{ color: "var(--brand)" }}>SMSG.</span>
          </h1>
          <p className="mt-7 lede max-w-[62ch] text-ink-2">
            Three centres across Sydney. Each with its own reception, phone line and opening hours. Contact the centre nearest to you for appointments, enquiries and prescriptions.
          </p>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-10">
          <div className="rounded-2xl border border-black/15 p-6 md:p-8" style={{ background: "rgba(154, 47, 82, 0.06)" }}>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="shrink-0">
                <span className="allcaps" style={{ color: "var(--brand)" }}>Medical emergency</span>
                <div className="font-display mt-1" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", lineHeight: 1.1 }}>
                  Dial <a href="tel:000" className="italic font-display-warm" style={{ color: "var(--brand)" }}>000</a> immediately.
                </div>
              </div>
              <p className="text-ink-2 body-editorial max-w-[52ch] md:pl-8 md:border-l md:border-black/15">
                Don&apos;t wait for an SMSG appointment for anything life-threatening. See our{" "}
                <Link href={routes.patientInfo("emergency-information")} className="link-editorial">Emergency Information</Link>{" "}
                page for the full list of situations requiring emergency care and nearest emergency departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our centres */}
      <section id="centres" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Our centres</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Three centres, <span className="italic font-display-warm">reach reception directly.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Each centre has its own map, its own phone line and its own contact form. Messages route straight to that reception team.
            </div>
          </div>
          <div className="hairline w-full mb-10" />

          <div className="space-y-14 md:space-y-16">
            {clinicList.map((c, i) => {
              const tel = c.phone.replace(/[^0-9+]/g, "");
              const hours = HOURS[c.key];
              const mapEmbedSrc = MAP_EMBEDS[c.key];
              const rowBg = i % 2 === 0 ? "bg-paper" : "bg-cream-2";
              return (
                <div
                  key={c.key}
                  id={c.key}
                  className={`rounded-3xl border border-black/10 ${rowBg} p-6 md:p-10 scroll-mt-28`}
                >
                  <div className="grid md:grid-cols-12 gap-8 md:gap-10">
                    {/* Left: info + map */}
                    <div className="md:col-span-5 flex flex-col">
                      <Link
                        href={routes.location(c.key)}
                        className="font-display"
                        style={{
                          fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                          lineHeight: 1.1,
                          fontVariationSettings: "'SOFT' 100,'opsz' 60",
                        }}
                      >
                        {c.label}
                      </Link>
                      <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-[14.5px] text-ink-2">
                        <div>
                          <div className="allcaps text-[11px] text-ink-3 mb-1">Address</div>
                          <div>{c.address}</div>
                          <div>{c.suburbLine}</div>
                        </div>
                        <div>
                          <div className="allcaps text-[11px] text-ink-3 mb-1">Hours</div>
                          <div>{hours.weekday}</div>
                          {hours.saturday && <div>{hours.saturday}</div>}
                        </div>
                        <div>
                          <div className="allcaps text-[11px] text-ink-3 mb-1">Phone</div>
                          <a href={`tel:${tel}`} className="link-editorial">
                            {c.phone}
                          </a>
                        </div>
                        <div>
                          <div className="allcaps text-[11px] text-ink-3 mb-1">Email</div>
                          <a href={`mailto:${c.email}`} className="link-editorial">
                            {c.email}
                          </a>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
                        <a
                          href={c.automedBase}
                          target="_blank"
                          rel="noopener"
                          className="link-editorial"
                        >
                          Book at {c.shortLabel}
                          <Arrow />
                        </a>
                        <a
                          href={DIRECTIONS[c.key]}
                          target="_blank"
                          rel="noopener"
                          className="link-editorial"
                        >
                          Get directions
                          <Arrow />
                        </a>
                      </div>

                      <div className="mt-6 rounded-2xl overflow-hidden border border-black/10 bg-cream-2">
                        <iframe
                          src={mapEmbedSrc}
                          title={`Map of ${c.label}`}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          allowFullScreen
                          className="block w-full h-[280px] md:h-[320px] border-0"
                        />
                      </div>
                    </div>

                    {/* Right: contact form */}
                    <div className="md:col-span-7">
                      <LocationContactForm clinicKey={c.key} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kids' Dr */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Kids&apos; Dr</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Paediatric <span className="italic font-display-warm">enquiries.</span>
              </h2>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                <Link href="/kids-dr/" className="link-editorial">Kids&apos; Dr</Link>{" "}
                is our multidisciplinary paediatric team based primarily at Sans Souci Doctors, with Dr Damian Lees consulting at Earlwood.
              </p>
              <p>
                For Kids&apos; Dr enquiries at Sans Souci, call{" "}
                <a href={`tel:${CLINICS.sanssouci.phone.replace(/[^0-9+]/g, "")}`} className="link-editorial">{CLINICS.sanssouci.phone}</a>.
                For Dr Lees at Earlwood, contact Earlwood Medical Centre on{" "}
                <a href={`tel:${CLINICS.earlwood.phone.replace(/[^0-9+]/g, "")}`} className="link-editorial">{CLINICS.earlwood.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General enquiries + Careers */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <span className="allcaps text-ink-3">General enquiries</span>
              <h2 className="font-display mt-3 max-w-[16ch]" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", lineHeight: 1.15 }}>
                Not sure who to <span className="italic font-display-warm">ask?</span>
              </h2>
              <div className="mt-6 body-editorial max-w-[52ch]">
                <p>
                  For enquiries about appointments, prescriptions, referrals or results, contact the centre where you usually attend.
                </p>
                <p>
                  If you&apos;re not sure which centre applies to your enquiry, phone any of the three centre numbers and reception will direct you.
                </p>
              </div>
            </div>
            <div>
              <span className="allcaps text-ink-3">Careers</span>
              <h2 className="font-display mt-3 max-w-[16ch]" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)", lineHeight: 1.15 }}>
                Join the <span className="italic font-display-warm">team.</span>
              </h2>
              <div className="mt-6 body-editorial max-w-[52ch]">
                <p>
                  For all careers enquiries and applications, email{" "}
                  <a href="mailto:recruitment@smsg.au" className="link-editorial">recruitment@smsg.au</a>.
                </p>
                <p>
                  See our <Link href={routes.careers()} className="link-editorial">Careers</Link> page for current roles and application details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback / Privacy consolidated */}
      <section className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Feedback, privacy and formal enquiries</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Formal channels, <span className="italic font-display-warm">handled at reception.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Reception at each centre is the first point of contact for feedback, complaints, media and privacy enquiries. They&apos;ll route your request internally.
            </div>
          </div>
          <div className="hairline w-full mb-10" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="font-display" style={{ fontSize: "1.25rem", lineHeight: 1.2 }}>Feedback and complaints</h3>
              <p className="mt-3 text-ink-2 text-[15px]">
                Speak to reception at your centre, phone the centre, or email the centre directly. For formal concerns, phone Earlwood Medical Centre on{" "}
                <a href={`tel:${CLINICS.earlwood.phone.replace(/[^0-9+]/g, "")}`} className="link-editorial">{CLINICS.earlwood.phone}</a>{" "}
                and ask for the practice manager. Full process on our{" "}
                <Link href={routes.about("feedback-and-complaints")} className="link-editorial">Feedback &amp; Complaints</Link> page.
              </p>
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "1.25rem", lineHeight: 1.2 }}>Media enquiries</h3>
              <p className="mt-3 text-ink-2 text-[15px]">
                Direct media enquiries to Earlwood Medical Centre on{" "}
                <a href={`tel:${CLINICS.earlwood.phone.replace(/[^0-9+]/g, "")}`} className="link-editorial">{CLINICS.earlwood.phone}</a>{" "}
                and ask for the practice manager.
              </p>
            </div>
            <div>
              <h3 className="font-display" style={{ fontSize: "1.25rem", lineHeight: 1.2 }}>Privacy enquiries</h3>
              <p className="mt-3 text-ink-2 text-[15px]">
                For questions about how SMSG handles your personal and health information, phone Earlwood Medical Centre on{" "}
                <a href={`tel:${CLINICS.earlwood.phone.replace(/[^0-9+]/g, "")}`} className="link-editorial">{CLINICS.earlwood.phone}</a>{" "}
                and ask for the privacy officer. See our{" "}
                <Link href={routes.about("privacy-policy")} className="link-editorial">Privacy Policy</Link> for the full framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* After-hours */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">After hours</span>
              <h2 className="font-display h-section mt-3 max-w-[18ch]">
                Care outside <span className="italic font-display-warm">opening hours.</span>
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="body-editorial max-w-[60ch]">
                For non-emergency care outside our opening hours, see our{" "}
                <Link href={routes.patientInfo("after-hours-care")} className="link-editorial">After-Hours Care</Link> page. Key numbers:
              </p>
              <div className="contact-block mt-6">
                {AFTER_HOURS.map((row) => (
                  <div key={row.label} className="contact-row">
                    <div className="label">{row.label}</div>
                    <div className="value">
                      <a href={`tel:${row.tel}`} className="link-editorial">{row.value}</a>
                    </div>
                  </div>
                ))}
                <div className="contact-row">
                  <div className="label">Emergency</div>
                  <div className="value">
                    Dial <a href="tel:000" className="link-editorial">000</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related strip */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.patientInfo("book-online")} className="related-card">
              <span className="kicker">Book</span>
              <h3>Book Online</h3>
              <p>Book an appointment at any of the three centres through Automed.</p>
              <span className="go">Book now <Arrow /></span>
            </Link>
            <Link href={routes.patientInfo("emergency-information")} className="related-card">
              <span className="kicker">Emergency</span>
              <h3>Emergency Information</h3>
              <p>Emergency contacts and nearest hospitals to each SMSG centre.</p>
              <span className="go">Learn more <Arrow /></span>
            </Link>
            <Link href={routes.patientInfo("after-hours-care")} className="related-card">
              <span className="kicker">After hours</span>
              <h3>After-Hours Care</h3>
              <p>Care options outside our opening hours, including home doctor and Healthdirect.</p>
              <span className="go">Learn more <Arrow /></span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
