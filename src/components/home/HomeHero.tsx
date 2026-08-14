import Image from "next/image";
import Link from "next/link";
import { subBrandList } from "@/lib/sub-brands";
import { routes } from "@/lib/routes";

const arrow = (
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

// Logo assets, filenames and italic-second-word framing pulled from the
// approved static homepage template.
const subBrandLogo: Record<
  (typeof subBrandList)[number]["key"],
  { src: string; alt: string; maxH: string; primary: string; italic: string }
> = {
  aurora: {
    src: "/website-images/Aurora Logo.webp",
    alt: "Aurora Women & Babies Health logo",
    maxH: "max-h-[78px]",
    primary: "Aurora",
    italic: "Women & Babies Health",
  },
  kidsdr: {
    src: "/website-images/Kids Dr-01.webp",
    alt: "Kids' Dr logo",
    maxH: "max-h-[80px]",
    primary: "Kids'",
    italic: "Dr",
  },
  excelsia: {
    src: "/website-images/Excelsia-01.webp",
    alt: "Excelsia Specialist Centre logo",
    maxH: "max-h-[80px]",
    primary: "Excelsia",
    italic: "Specialist Centre",
  },
  clarion: {
    src: "/website-images/Clarion Skin Cancer Clinic.webp",
    alt: "Clarion Skin Cancer Clinic logo",
    maxH: "max-h-[72px]",
    primary: "Clarion",
    italic: "Skin Cancer Clinic",
  },
  sydneycosmedic: {
    src: "/website-images/Sydney Cosmedic.webp",
    alt: "Sydney Cosmedic logo",
    maxH: "max-h-[82px]",
    primary: "Sydney",
    italic: "Cosmedic",
  },
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-noise absolute inset-0 opacity-70 pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* Left column: eyebrow + H1 + copy */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <span className="hairline w-10 md:w-16" />
              <span className="eyebrow text-[15px] md:text-[17px] text-ink-2">
                Specialised medical care in Sydney. Tradition since 1961.
              </span>
            </div>

            <h1 className="font-display h-display max-w-[12ch]">
              Care that fits
              <br />
              <span
                className="italic font-display-warm"
                style={{ color: "var(--brand)" }}
              >
                your life.
              </span>
            </h1>

            <p className="lede max-w-[46ch] text-ink-2 mt-8 md:mt-10">
              Specialised medical care across women&apos;s health, paediatrics,
              skin cancer, cosmetic and specialist medicine, delivered by
              independent practitioners working from our Sydney premises.
              Everything you and your family need in one connected group, with
              clinicians who actually talk to each other about the people they
              look after.
            </p>
          </div>

          {/* Right column: image + CTAs */}
          <div className="md:col-span-6">
            <div className="rounded-[24px] overflow-hidden border border-black/10 shadow-[0_40px_100px_-40px_rgba(154,47,82,0.4)]">
              <Image
                src="/website-images/hero-image-1.webp"
                alt="Care at Specialist Medical Services Group"
                width={1200}
                height={800}
                priority
                className="block w-full h-auto"
              />
            </div>

            <div className="mt-7 md:mt-8">
              {/* TODO: point primary CTA to a real global booking page or the location selector */}
              <a href="/patient-information/book-online/" className="btn-primary whitespace-nowrap">
                Book an appointment
                {arrow}
              </a>
            </div>

            <div className="mt-6 text-[13.5px] text-ink-3 leading-relaxed space-y-2">
              <p>
                <span className="text-ink font-medium">New patient?</span>{" "}
                <a
                  href="#new-patient"
                  className="link-editorial text-[13.5px]"
                >
                  Register at the centre you&apos;ll visit first
                </a>{" "}
                so your file is ready before your appointment.
              </p>
              <p>
                <span className="text-ink font-medium">Existing patient?</span>{" "}
                Request a{" "}
                <a href="#scripts" className="link-editorial text-[13.5px]">
                  repeat prescription
                </a>{" "}
                or a{" "}
                <a href="#referrals" className="link-editorial text-[13.5px]">
                  referral renewal
                </a>
                , no booked appointment needed.
              </p>
            </div>

            <div className="flex items-center gap-3 text-ink-3 text-[12.5px] mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block" />
              <span>
                Online booking via Automed, the same system your reception team
                uses.
              </span>
            </div>
          </div>
        </div>

        {/* Sub-brand quick links (5 tiles) */}
        <div className="mt-14 md:mt-20">
          <div className="flex items-baseline justify-between mb-4">
            <span className="allcaps text-ink-3">
              Specialised care · For the moments that need it
            </span>
          </div>
          <div className="hairline w-full" />
          <ul className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 items-stretch">
            {subBrandList.map((sb) => {
              const logo = subBrandLogo[sb.key];
              return (
                <li key={sb.key} className="h-full">
                  <Link
                    href={routes.subBrand(sb.key)}
                    className="group flex flex-col h-full rounded-[16px] border border-black/10 bg-cream-paper hover:border-ink/25 hover:bg-cream transition overflow-hidden"
                  >
                    <span className="block bg-white border-b border-black/10 flex items-center justify-center h-[96px] px-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className={`${logo.maxH} max-w-full object-contain`}
                      />
                    </span>
                    <span className="flex flex-1 flex-col gap-2 px-4 py-4">
                      <span className="flex items-center justify-between gap-2 min-w-0">
                        <span className="flex items-center gap-2 min-w-0">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: sb.dotColor }}
                          />
                          <span
                            className="font-display text-[14.5px] leading-tight text-ink"
                            style={{
                              fontVariationSettings: "'SOFT' 100,'opsz' 24",
                            }}
                          >
                            {logo.primary}{" "}
                            <span className="italic text-ink-2">
                              {logo.italic}
                            </span>
                          </span>
                        </span>
                        <svg
                          className="arrow shrink-0 text-ink-3"
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
                      </span>
                      <span className="text-[12.5px] leading-snug text-ink-2 pl-3.5">
                        {sb.blurb}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
