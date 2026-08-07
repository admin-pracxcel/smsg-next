/**
 * PractitionerCard · shared card for the team category directories
 * (`/team/general-practitioners/`, `/team/specialist-physicians-surgeons/`,
 * `/team/allied-health/`).
 *
 * Ports the visual pattern of the source `.gp-card` / `.doc-card` / `.p-card`
 * blocks into a single component reading a validated Practitioner record.
 * Portrait paths in the JSON are stored as `../website-images/...`; we
 * normalise to `/website-images/...` here so Next `<Image>` can serve them
 * from `/public`.
 */

import Image from "next/image";
import Link from "next/link";
import { CLINICS, type ClinicKey } from "@/lib/clinics";
import { routes } from "@/lib/routes";
import type { Practitioner } from "@/lib/schemas/practitioner";

function initialsFrom(fullName: string): string {
  return fullName
    .split(" ")
    .filter((w) => !/^(Dr|Adj|Prof|A\/Prof|Ms|Mr|Mrs)$/i.test(w))
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function normalisePortrait(src: string): string {
  // JSON stores the source-relative `../website-images/...` path. Strip the
  // relative prefix so the Next `<Image>` loader can resolve against /public.
  const filename = src.split("/").pop() ?? "";
  return `/website-images/practitioner-images/${filename}`;
}

function placeholderPortraitFor(p: Practitioner): string {
  // Match on the leading pronoun only; substring checks like "he/" wrongly
  // match "she/her" too.
  const pronouns = (p.identity.pronouns ?? "").toLowerCase();
  if (/^he\b/.test(pronouns))
    return "/website-images/practitioner-images/placeholder-male.webp";
  return "/website-images/practitioner-images/placeholder-female.webp";
}

function practitionerBookHref(p: Practitioner, clinic: ClinicKey): string {
  const own = p.hero.ctas.find((c) => c.clinic === clinic)?.href;
  return own ?? CLINICS[clinic].automedBase;
}

function centresLine(p: Practitioner): string {
  return p.clinics.consulting_at.map((k) => CLINICS[k].shortLabel).join(", ");
}

function languagesLine(p: Practitioner): string {
  return p.languages.join(", ");
}

function bookLabel(clinic: ClinicKey): string {
  return `Book at ${CLINICS[clinic].shortLabel}`;
}

export type PractitionerCardProps = {
  practitioner: Practitioner;
  /** Show cross-brand pills row (only used on GP page). */
  showBrandPills?: boolean;
};

export function PractitionerCard({
  practitioner,
  showBrandPills = false,
}: PractitionerCardProps) {
  const p = practitioner;
  const portraitSrc = p.portrait.is_placeholder
    ? placeholderPortraitFor(p)
    : normalisePortrait(p.portrait.src);

  const roleParts: string[] = [];
  if (p.credentials.role_title) roleParts.push(p.credentials.role_title);
  if (p.credentials.post_nominal) roleParts.push(p.credentials.post_nominal);
  const roleLine = roleParts.join(" · ");

  return (
    <article className="gp-card">
      <div className="gp-top">
        <div className={`gp-photo${portraitSrc ? " has-img" : ""}`} aria-hidden="true">
          {portraitSrc ? (
            <Image
              src={portraitSrc}
              alt={p.portrait.alt || p.identity.full_name}
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{initialsFrom(p.identity.full_name)}</span>
          )}
        </div>
        <div className="gp-ident">
          <h3 className="gp-name">{p.identity.full_name}</h3>
          <div className="gp-role">{roleLine}</div>
          {showBrandPills && p.cross_brand_pills.length > 0 && (
            <div className="gp-badges">
              {p.cross_brand_pills.map((pill) => (
                <span
                  key={pill.label}
                  className="gp-badge"
                  style={{
                    background: `color-mix(in oklab, ${pill.dot_color} 12%, transparent)`,
                    borderColor: `color-mix(in oklab, ${pill.dot_color} 32%, transparent)`,
                    color: "var(--ink-2)",
                  }}
                >
                  {pill.label}
                  {pill.role === "extended" ? (
                    <span className="ext">ext</span>
                  ) : null}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="gp-meta">
        <span className="m-row">
          <span className="m-label">Centres</span>
          {centresLine(p)}
        </span>
        {p.languages.length > 0 && (
          <span className="m-row">
            <span className="m-label">Languages</span>
            {languagesLine(p)}
          </span>
        )}
      </div>
      <div className="gp-cta">
        {p.clinics.consulting_at.map((clinic) => (
          <a
            key={clinic}
            href={practitionerBookHref(p, clinic)}
            target="_blank"
            rel="noopener"
            className="gp-book"
          >
            {bookLabel(clinic)}
          </a>
        ))}
        <Link href={routes.practitioner(p.slug)} className="gp-profile">
          View profile
        </Link>
      </div>
    </article>
  );
}
