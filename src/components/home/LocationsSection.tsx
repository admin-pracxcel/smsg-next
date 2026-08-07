import Link from "next/link";
import Image from "next/image";
import { clinicList, type ClinicKey } from "@/lib/clinics";
import { routes } from "@/lib/routes";

/**
 * Locations section · three clinic cards driven from `clinicList`.
 * Per-clinic overlay data (blurb, hours, review link, chip color, image)
 * stays local since it is presentation-only and doesn't belong in the
 * canonical clinic registry.
 */

type ClinicVisual = {
  image: string;
  blurb: string;
  addressLine: string;
  hoursLine: React.ReactNode;
  reviewsUrl: string;
  reviewsRating: string;
  reviewsCount: string;
  chipColor: string;
};

const visuals: Record<ClinicKey, ClinicVisual> = {
  earlwood: {
    image: "/website-images/earlwood.webp",
    blurb:
      "The original practice. Family GPs, women's health, Sydney Cosmedic, and the largest specialist roster in the group.",
    addressLine: "352-354 Homer Street, Earlwood NSW",
    hoursLine: (
      <>
        Mon-Fri 9-6 ·{" "}
        <span
          className="italic font-display"
          style={{ color: "var(--terra)" }}
        >
          Saturday 9-3
        </span>
      </>
    ),
    reviewsUrl: "https://maps.app.goo.gl/orET9Ex7YTUNnis1A",
    reviewsRating: "4.6",
    reviewsCount: "713",
    chipColor: "#B76B4C",
  },
  bangor: {
    image: "/website-images/bangor.webp",
    blurb:
      "Nestled in Bangor Shopping Centre. Weekday family medicine, visiting geriatricians, respiratory and endocrine specialists.",
    addressLine: "Shop 6, 121 Yala Road, Bangor NSW",
    hoursLine: "Mon-Fri 9-6",
    reviewsUrl: "https://maps.app.goo.gl/MXMtTDfToyt967HaA",
    reviewsRating: "4.8",
    reviewsCount: "342",
    chipColor: "#B7967A",
  },
  sanssouci: {
    image: "/website-images/san-souci.webp",
    blurb:
      "The bayside practice. Kids' Dr paediatrics, developmental assessment, and a growing allied health team.",
    addressLine: "39 Campbell Street, Sans Souci NSW",
    hoursLine: "Mon-Fri 9-6",
    reviewsUrl: "https://maps.app.goo.gl/ATjVSnzosHyoPv6P7",
    reviewsRating: "4.8",
    reviewsCount: "311",
    chipColor: "#D9A79A",
  },
};

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

const googleG = (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

export function LocationsSection() {
  return (
    <section id="locations" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-16">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Locations</span>
            <h2 className="font-display h-section mt-3 max-w-none md:max-w-[22ch]">
              Care delivered from{" "}
              <span className="italic font-display-warm">
                three Sydney premises.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            The specialised care above is delivered from our three centres in
            Sydney. Independent practitioners choose which premises they
            consult from, and many work across two or three of our locations
            so patients have flexibility on where they&apos;re seen.
          </div>
        </div>

        <div className="hairline w-full" />

        <div className="grid md:grid-cols-3 gap-0">
          {clinicList.map((c, i) => {
            const v = visuals[c.key];
            const isLast = i === clinicList.length - 1;
            const suburb = c.suburbLine.replace(/^.*NSW /, "");
            const suburbLabel = c.shortLabel;
            const [namePrimary, ...nameRest] = c.label.split(" ");
            const nameSecondary = nameRest.join(" ");
            const href = routes.location(c.key);
            return (
              <article
                key={c.key}
                className={`loc-card py-10 md:py-14 md:px-8 ${
                  isLast ? "" : "md:border-r"
                } border-black/10 flex flex-col justify-between min-h-[420px] ${
                  i > 0 ? "border-t md:border-t-0 border-black/10" : ""
                }`}
              >
                <div>
                  <Link
                    href={href}
                    aria-hidden="true"
                    tabIndex={-1}
                    className="block rounded-[14px] overflow-hidden border border-black/10 mb-8"
                  >
                    <Image
                      src={v.image}
                      alt=""
                      width={800}
                      height={500}
                      className="w-full aspect-[16/10] object-cover"
                    />
                  </Link>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-ink/40" />
                    <span className="allcaps text-ink-3">
                      {suburbLabel} · {suburb}
                    </span>
                  </div>
                  <Link
                    href={href}
                    className="block mt-6 loc-name transition-colors"
                  >
                    <h3
                      className="font-display text-[34px] leading-[1.02]"
                      style={{
                        fontVariationSettings: "'SOFT' 100,'opsz' 90",
                      }}
                    >
                      {c.key === "sanssouci" ? (
                        <>
                          <span className="whitespace-nowrap">Sans Souci</span>{" "}
                          Doctors
                        </>
                      ) : (
                        <>
                          {namePrimary}{" "}
                          <span className="whitespace-nowrap">
                            {nameSecondary}
                          </span>
                        </>
                      )}
                    </h3>
                  </Link>
                  <p className="mt-5 body-lg text-ink-2 max-w-[36ch]">
                    {v.blurb}
                  </p>
                </div>
                <div className="mt-8 text-[14.5px] text-ink-2 space-y-2">
                  <div>{v.addressLine}</div>
                  <div>{v.hoursLine}</div>
                  <a
                    href={v.reviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${c.label} reviews on Google`}
                    className="loc-reviews mt-3 flex items-center gap-2.5 rounded-lg border border-black/10 bg-cream-paper px-3 py-2.5 hover:border-terra/50 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-white grid place-content-center shrink-0 shadow-sm">
                      {googleG}
                    </span>
                    <span className="num-strong text-ink text-[17px]">
                      {v.reviewsRating}
                    </span>
                    <span
                      className="text-terra text-[13px]"
                      aria-hidden="true"
                    >
                      ★★★★★
                    </span>
                    <span className="text-ink-3 text-[13.5px]">
                      <span className="num-strong text-ink-2">
                        {v.reviewsCount}
                      </span>{" "}
                      reviews
                    </span>
                    <svg
                      className="arrow ml-auto text-ink-3"
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
                  </a>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <Link href={href} className="link-editorial">
                    Visit centre {arrow}
                  </Link>
                  <span
                    className="chip"
                    style={{ background: v.chipColor }}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="hairline w-full" />
      </div>
    </section>
  );
}
