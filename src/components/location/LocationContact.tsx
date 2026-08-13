import Image from "next/image";
import { CLINICS, type ClinicKey } from "@/lib/clinics";
import { external } from "@/lib/routes";

/**
 * LocationContact · reception / fax / email / address tiles plus follow
 * (Facebook + Google Reviews) cards. Takes clinic key for address + email.
 */

function TileArrow() {
  return (
    <svg
      className="arrow text-ink-3"
      width={16}
      height={16}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h9M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface LocationContactProps {
  clinic: ClinicKey;
  interiorImageSrc: string;
  interiorImageAlt: string;
  interiorCaption: string;

  contactEyebrow: string;
  contactHeadingLead: string;
  contactHeadingItalic: string;

  phoneDisplay: string;
  phoneTel: string;
  phoneHoursNote: string;

  faxDisplay: string;
  faxNote: string;

  emailNote: string;
  addressDirectionsHref: string;

  followEyebrow: string;
  followHeadingLead: string;
  followHeadingItalic: string;
  facebook: {
    href: string;
    handleLabel: string;
  };
  google: {
    href: string;
    summary: string; // e.g. "4.6 stars · 713 reviews"
  };

  /**
   * When provided, replaces the left "Contact" column with a "Book at ..."
   * column: eyebrow + heading + supporting copy + existing-patient booking
   * card + new-patient registration card. Contact info props are ignored.
   */
  bookOverride?: {
    eyebrow: string;
    headingLead: string;
    headingItalic: string;
    supporting: string;
  };
}

export function LocationContact({
  clinic,
  interiorImageSrc,
  interiorImageAlt,
  interiorCaption,
  contactEyebrow,
  contactHeadingLead,
  contactHeadingItalic,
  phoneDisplay,
  phoneTel,
  phoneHoursNote,
  faxDisplay,
  faxNote,
  emailNote,
  addressDirectionsHref,
  followEyebrow,
  followHeadingLead,
  followHeadingItalic,
  facebook,
  google,
  bookOverride,
}: LocationContactProps) {
  const c = CLINICS[clinic];
  return (
    <section id="contact" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <figure className="relative overflow-hidden rounded-[24px] border border-black/10 mb-14 md:mb-20">
          <Image
            src={interiorImageSrc}
            alt={interiorImageAlt}
            width={1360}
            height={480}
            className="w-full h-[220px] md:h-[300px] object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,13,10,0) 55%, rgba(15,13,10,0.35) 100%)",
            }}
          />
          <span
            className="absolute left-5 bottom-4 md:left-7 md:bottom-5 allcaps text-cream/90 text-[10.5px] tracking-[0.18em]"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
          >
            {interiorCaption}
          </span>
        </figure>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            {bookOverride ? (
              <>
                <span className="allcaps text-ink-3">{bookOverride.eyebrow}</span>
                <h2 className="font-display h-section mt-3 max-w-[20ch]">
                  {bookOverride.headingLead}{" "}
                  <span className="italic font-display-warm">
                    {bookOverride.headingItalic}
                  </span>
                </h2>
                <p className="mt-6 body-lg text-ink-2 max-w-[52ch]">
                  {bookOverride.supporting}
                </p>

                <div className="mt-10 grid gap-4">
                  <a
                    href={c.automedBase}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between gap-4 rounded-[16px] border border-black/10 bg-paper hover:border-ink/25 px-6 py-5 transition"
                  >
                    <div>
                      <div className="allcaps text-ink-3">Existing patient</div>
                      <div
                        className="font-display text-[22px] mt-1"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                      >
                        Book online with Automed
                      </div>
                    </div>
                    <TileArrow />
                  </a>

                  <a
                    href={external.automedRegistration(clinic)}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between gap-4 rounded-[16px] border border-black/10 bg-paper hover:border-ink/25 px-6 py-5 transition"
                  >
                    <div>
                      <div className="allcaps text-ink-3">New to SMSG?</div>
                      <div
                        className="font-display text-[22px] mt-1"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                      >
                        Register as a new patient
                      </div>
                    </div>
                    <TileArrow />
                  </a>

                  <div className="mt-3 text-[13px] text-ink-3 flex items-center gap-3">
                    <span>
                      Prefer to call? Reception on{" "}
                      <a
                        href={`tel:${phoneTel}`}
                        className="underline underline-offset-4 hover:text-terra"
                      >
                        {phoneDisplay}
                      </a>
                      .
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <span className="allcaps text-ink-3">{contactEyebrow}</span>
                <h2 className="font-display h-section mt-3 max-w-[20ch]">
                  {contactHeadingLead}{" "}
                  <span className="italic font-display-warm">
                    {contactHeadingItalic}
                  </span>
                </h2>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="info-card">
                    <div className="info-label">Reception</div>
                    <a
                      href={`tel:${phoneTel}`}
                      className="font-display text-[26px] mt-1 inline-block hover:text-terra transition"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                    >
                      {phoneDisplay}
                    </a>
                    <div className="text-[13px] text-ink-3 mt-1">
                      {phoneHoursNote}
                    </div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Fax</div>
                    <div
                      className="font-display text-[26px] mt-1"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                    >
                      {faxDisplay}
                    </div>
                    <div className="text-[13px] text-ink-3 mt-1">{faxNote}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Email</div>
                    <a
                      href={`mailto:${c.email}`}
                      className="font-display text-[22px] mt-1 inline-block hover:text-terra transition break-all"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                    >
                      {c.email}
                    </a>
                    <div className="text-[13px] text-ink-3 mt-2">{emailNote}</div>
                  </div>
                  <div className="info-card">
                    <div className="info-label">Address</div>
                    <div
                      className="font-display text-[18px] mt-1 leading-[1.35]"
                      style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                    >
                      {c.address}
                      <br />
                      {c.suburbLine}
                    </div>
                    <a
                      href={addressDirectionsHref}
                      target="_blank"
                      rel="noopener"
                      className="text-[13px] link-editorial mt-3 inline-flex"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="md:col-span-5">
            <span className="allcaps text-ink-3">{followEyebrow}</span>
            <h3
              className="font-display text-[26px] md:text-[30px] leading-[1.1] mt-3"
              style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
            >
              {followHeadingLead}{" "}
              <span className="italic font-display-warm">
                {followHeadingItalic}
              </span>
            </h3>

            <a
              href={facebook.href}
              target="_blank"
              rel="noopener"
              className="mt-8 group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 bg-paper hover:border-ink/25 p-6 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="text-brand"
                  >
                    <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-2 2-2h2V2h-3c-3 0-4 2-4 4.5V10H7v4h3v8h3z" />
                  </svg>
                </div>
                <div>
                  <div className="allcaps text-ink-3">Facebook</div>
                  <div
                    className="font-display text-[19px] mt-0.5"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                  >
                    {facebook.handleLabel}
                  </div>
                </div>
              </div>
              <TileArrow />
            </a>

            <a
              href={google.href}
              target="_blank"
              rel="noopener"
              className="mt-4 group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 bg-paper hover:border-ink/25 p-6 transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center">
                  <svg width={22} height={22} viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.5 0 19.4-8.4 19.4-19.4 0-1.4-.1-2.8-.3-4.1z" />
                    <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                    <path fill="#FBBC05" d="M24 44c5.2 0 9.9-2 13.5-5.3l-6.3-5.2c-2 1.4-4.5 2.3-7.2 2.3-5.2 0-9.6-3.3-11.3-8L6 32.9C9.4 39.5 16.1 44 24 44z" />
                    <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.5l6.3 5.2c-.4.4 6.9-5 6.9-14.7 0-1.4-.1-2.8-.3-4.1z" />
                  </svg>
                </div>
                <div>
                  <div className="allcaps text-ink-3">Google reviews</div>
                  <div
                    className="font-display text-[19px] mt-0.5"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                  >
                    {google.summary}
                  </div>
                </div>
              </div>
              <TileArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
