import Image from "next/image";
import Link from "next/link";
import { clinicList, CLINICS, type ClinicKey } from "@/lib/clinics";
import { routes } from "@/lib/routes";
import { SUB_BRANDS, type SubBrandKey } from "@/lib/sub-brands";

/**
 * SubBrandLocations · generic three-location card grid for a sub-brand hub.
 *
 * The bullet points differ per sub-brand and per clinic, so those are
 * passed in as `bullets[clinicKey]`. The hours label defaults to what's
 * used on the Aurora template; override via `hoursByClinic` if a hub
 * needs different wording. Chip and dot colours are pulled from
 * `SUB_BRANDS[subBrand]`.
 *
 * A stub `imageByClinic` map falls back to the standard clinic exterior
 * photos already used on the homepage.
 */

const DEFAULT_HOURS: Record<ClinicKey, string> = {
  earlwood: "Mon-Sat",
  bangor: "Mon-Fri",
  sanssouci: "Mon-Fri",
};

const DEFAULT_IMAGE: Record<ClinicKey, string> = {
  earlwood: "/website-images/earlwood.webp",
  bangor: "/website-images/bangor.webp",
  sanssouci: "/website-images/san-souci.webp",
};

const DEFAULT_ADDRESS: Record<ClinicKey, string> = {
  earlwood: "352-354 Homer Street",
  bangor: "Shop 6, 121 Yala Road",
  sanssouci: "39 Campbell Street",
};

type Props = {
  subBrand: SubBrandKey;
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  supporting: string;
  bullets: Record<ClinicKey, string[]>;
  hoursByClinic?: Partial<Record<ClinicKey, string>>;
  imageByClinic?: Partial<Record<ClinicKey, string>>;
  addressByClinic?: Partial<Record<ClinicKey, string>>;
};

export function SubBrandLocations({
  subBrand,
  eyebrow,
  headingLead,
  headingItalic,
  supporting,
  bullets,
  hoursByClinic,
  imageByClinic,
  addressByClinic,
}: Props) {
  const brand = SUB_BRANDS[subBrand];

  return (
    <section id="locations" className="relative bg-cream-2">
      <div
        className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">{eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              {headingLead}{" "}
              <span className="italic font-display-warm">{headingItalic}</span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            {supporting}
          </div>
        </div>

        <div className="hairline w-full" />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
          {clinicList.map((clinic) => {
            const key = clinic.key;
            const hours = hoursByClinic?.[key] ?? DEFAULT_HOURS[key];
            const address = addressByClinic?.[key] ?? DEFAULT_ADDRESS[key];
            const image = imageByClinic?.[key] ?? DEFAULT_IMAGE[key];
            const suburbCode = CLINICS[key].suburbLine.match(/\d{4}/)?.[0];
            const items = bullets[key] ?? [];

            return (
              <article key={key} className="sb-loc-card reveal">
                <div className="lc-photo">
                  <Image
                    src={image}
                    alt={`${CLINICS[key].label} exterior`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span
                    className="lc-tag"
                    style={
                      {
                        // per-brand dot colour
                        ["--dot" as string]: brand.dotColor,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className="dot"
                      style={{ background: brand.dotColor }}
                    />
                    {CLINICS[key].shortLabel}
                    {suburbCode ? ` · ${suburbCode}` : ""}
                  </span>
                </div>
                <div className="lc-body">
                  <h3
                    className="font-display text-[26px] leading-[1.05]"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                  >
                    {CLINICS[key].label}
                  </h3>
                  <div className="mt-3 text-[13px] text-ink-3">
                    {address} · {hours}
                  </div>

                  <ul className="mt-6 space-y-2 text-[14.5px] text-ink-2 leading-relaxed">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="mt-2 w-1 h-1 rounded-full shrink-0"
                          style={{ background: brand.accent }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
                    <Link
                      href={routes.location(key)}
                      className="btn-ghost text-[14px]"
                    >
                      About {CLINICS[key].shortLabel}
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
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
