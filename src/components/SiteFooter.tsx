/**
 * SiteFooter · 4-column editorial footer with brand wash background,
 * Acknowledgement of Country, socials, and copyright.
 *
 * Data comes from `footerColumns` in `src/lib/navigation.ts`.
 * Server component; no interactivity required.
 */

import Link from "next/link";
import Image from "next/image";
import { footerColumns } from "@/lib/navigation";

function ArrowHero() {
  return (
    <svg
      className="arrow"
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

export function SiteFooter() {
  return (
    <footer className="footer-wash relative overflow-hidden">
      <svg
        className="absolute -bottom-40 -right-40 w-[600px] opacity-10 pointer-events-none"
        viewBox="0 0 500 500"
        aria-hidden="true"
      >
        <g stroke="#F5EEE0" strokeWidth="0.5" fill="none">
          <circle cx="250" cy="250" r="240" />
          <circle cx="250" cy="250" r="180" />
          <circle cx="250" cy="250" r="120" />
          <circle cx="250" cy="250" r="60" />
        </g>
      </svg>

      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-18">
        {/* Top row */}
        <div className="pb-10 border-b border-cream/15">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="inline-block bg-cream rounded-xl px-4 py-3">
              <Image
                src="/website-images/Specialist%20Medical%20Services%20Group.webp"
                alt="Specialist Medical Services Group"
                width={220}
                height={64}
                className="h-14 md:h-16 w-auto"
              />
            </div>
            <div className="text-cream/70 text-[13px] mt-3">
              Sydney · Since 2014
            </div>

            <p
              className="mt-8 font-display italic text-[19px] leading-relaxed max-w-[42ch] text-cream/90"
              style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
            >
              A group of clinicians who talk to each other about the people they
              look after.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <Link
                href="/patient-information/book-online/"
                className="inline-flex items-center gap-2 border border-cream/40 hover:border-cream text-cream px-5 py-3 rounded-full text-[14px] transition"
              >
                Book online <ArrowHero />
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-[14.5px]">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <div className="allcaps text-cream/60">{col.heading}</div>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:text-blush">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgement of Country, inside the top row block */}
        <div className="mt-8 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="allcaps text-cream/60">
              Acknowledgement of Country
            </div>
          </div>
          <p
            className="md:col-span-8 font-display italic text-[17px] leading-[1.55] text-cream/90 max-w-[70ch]"
            style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
          >
            SMSG acknowledges the Traditional Owners of Country throughout
            Australia and their continuing connection to lands, waters and
            communities. We pay our respects to Aboriginal and Torres Strait
            Islander cultures, and to Elders past, present and emerging.
          </p>
        </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-[13px] text-cream/70">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© 2026 Specialist Medical Services Group</span>
            <Link href="/about/privacy-policy/" className="hover:text-cream">
              Privacy policy
            </Link>
            <Link href="/about/terms-of-service/" className="hover:text-cream">
              Terms of service
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/smsgearlwood"
              aria-label="SMSG on Facebook"
              className="hover:text-cream"
              title="Facebook"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.1.5-2 2-2h2V2h-3c-3 0-4 2-4 4.5V10H7v4h3v8h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/specialistmedicalservices/"
              aria-label="SMSG on Instagram"
              className="hover:text-cream"
              title="Instagram"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/specialistmedicalservicesgroup/"
              aria-label="SMSG on LinkedIn"
              className="hover:text-cream"
              title="LinkedIn"
              target="_blank"
              rel="noopener"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V22h-4V8zm7 0h3.8v1.9h.1c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V22h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.28V22h-4V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
