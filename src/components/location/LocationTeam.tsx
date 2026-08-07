import Image from "next/image";
import Link from "next/link";
import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";
import type { ClinicKey } from "@/lib/clinics";
import type { Practitioner } from "@/lib/schemas/practitioner";

/**
 * LocationTeam · three-band team roster at a location (Family GPs, Visiting
 * specialists, Allied health). Data-driven from practitioner JSON, filtered
 * to those whose `clinics.consulting_at` array includes the location key.
 *
 * Copy for each band's left-column intro is passed in per location.
 */

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={14}
      height={14}
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

export interface TeamBandCopy {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  body: string;
  /** Optional "see more" ghost link under the band body. */
  ctaLabel?: string;
  ctaHref?: string;
}

export interface LocationTeamProps {
  clinic: ClinicKey;
  sectionEyebrow: string;
  sectionHeadingLead: string;
  sectionHeadingItalic: string;
  sectionSupporting: string;
  sectionImageSrc: string;
  sectionImageAlt: string;
  gps: TeamBandCopy;
  /**
   * Optional paediatricians band (Kids' Dr). When provided, specialists whose
   * sub_brands include "kidsdr" are split out into this band; the main
   * `specialists` band then shows only non-paediatric consultants.
   */
  paediatricians?: TeamBandCopy;
  specialists: TeamBandCopy;
  alliedIntro: TeamBandCopy;
  alliedNote?: string;
}

function langLine(p: Practitioner): string {
  const parts: string[] = [];
  if (p.languages.length) parts.push(p.languages.join(", "));
  if (p.credentials.post_nominal) parts.push(p.credentials.post_nominal);
  return parts.join(" · ");
}

function specialistMetaLine(p: Practitioner): string {
  const parts: string[] = [];
  if (p.languages.length) parts.push(p.languages.join(", "));
  if (p.credentials.role_title) parts.push(p.credentials.role_title);
  if (p.credentials.post_nominal) parts.push(p.credentials.post_nominal);
  return parts.join(" · ");
}

export function LocationTeam({
  clinic,
  sectionEyebrow,
  sectionHeadingLead,
  sectionHeadingItalic,
  sectionSupporting,
  sectionImageSrc,
  sectionImageAlt,
  gps,
  paediatricians,
  specialists,
  alliedIntro,
  alliedNote,
}: LocationTeamProps) {
  const roster = getAllPractitioners().filter((p) =>
    p.clinics.consulting_at.includes(clinic),
  );
  const gpList = roster.filter((p) => p.page_type === "gp");
  const allSpecialists = roster.filter((p) => p.page_type === "specialist");
  const alliedList = roster.filter((p) => p.page_type === "allied_health");
  const paedList = paediatricians
    ? allSpecialists.filter((p) =>
        p.sub_brands.some((sb) => sb.key === "kidsdr"),
      )
    : [];
  const specialistList = paediatricians
    ? allSpecialists.filter(
        (p) => !p.sub_brands.some((sb) => sb.key === "kidsdr"),
      )
    : allSpecialists;

  return (
    <section id="team" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <span className="allcaps text-ink-3">{sectionEyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              {sectionHeadingLead}{" "}
              <span className="italic font-display-warm">
                {sectionHeadingItalic}
              </span>
            </h2>
            <p className="mt-6 body-lg text-ink-2 max-w-[52ch]">
              {sectionSupporting}
            </p>
          </div>
          <div className="md:col-span-5">
            <figure className="relative overflow-hidden rounded-[20px] border border-black/10">
              <Image
                src={sectionImageSrc}
                alt={sectionImageAlt}
                width={720}
                height={520}
                className="w-full h-[240px] md:h-[260px] object-cover object-center"
              />
            </figure>
          </div>
        </div>

        <div className="hairline w-full" />

        {/* Family GPs */}
        <TeamBand
          copy={gps}
          renderRight={() => <TeamList people={gpList} metaFn={langLine} />}
          topSpacing="mt-14 md:mt-16"
        />

        {paediatricians ? (
          <>
            <div className="hairline-soft w-full mt-16 mb-14" />
            {/* Kids' Dr paediatricians */}
            <TeamBand
              copy={paediatricians}
              renderRight={() => (
                <TeamList people={paedList} metaFn={specialistMetaLine} />
              )}
            />
          </>
        ) : null}

        <div className="hairline-soft w-full mt-16 mb-14" />

        {/* Visiting specialists */}
        <TeamBand
          copy={specialists}
          renderRight={() => (
            <TeamList people={specialistList} metaFn={specialistMetaLine} />
          )}
        />

        <div className="hairline-soft w-full mt-16 mb-14" />

        {/* Allied health practitioners at this location */}
        <TeamBand
          copy={alliedIntro}
          renderRight={() => (
            <>
              {alliedList.length > 0 ? (
                <TeamList people={alliedList} metaFn={specialistMetaLine} />
              ) : (
                <div className="text-[14px] text-ink-3">
                  No allied health practitioners currently consult from this
                  centre.
                </div>
              )}
              {alliedNote ? (
                <div className="mt-4 text-[13px] text-ink-3">{alliedNote}</div>
              ) : null}
            </>
          )}
        />
      </div>
    </section>
  );
}

function TeamBand({
  copy,
  renderRight,
  topSpacing = "",
}: {
  copy: TeamBandCopy;
  renderRight: () => React.ReactNode;
  topSpacing?: string;
}) {
  return (
    <div className={topSpacing}>
      <div className="grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="hairline-soft w-8 h-px" />
            <span className="allcaps text-ink-3">{copy.eyebrow}</span>
          </div>
          <h3
            className="font-display text-[30px] md:text-[36px] leading-[1.05] mt-4"
            style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
          >
            {copy.headingLead}{" "}
            <span className="italic font-display-warm">
              {copy.headingItalic}
            </span>
          </h3>
          <p className="mt-6 body-lg text-ink-2 max-w-[42ch]">{copy.body}</p>
          {copy.ctaHref && copy.ctaLabel ? (
            <Link
              href={copy.ctaHref}
              className="btn-ghost text-[14px] mt-6 inline-flex"
            >
              {copy.ctaLabel}
              <ArrowIcon className="arrow" />
            </Link>
          ) : null}
        </div>
        <div className="md:col-span-8">{renderRight()}</div>
      </div>
    </div>
  );
}

function TeamList({
  people,
  metaFn,
}: {
  people: Practitioner[];
  metaFn: (p: Practitioner) => string;
}) {
  return (
    <ul className="grid md:grid-cols-2 gap-x-10">
      {people.map((p) => (
        <li key={p.slug}>
          <Link href={routes.practitioner(p.slug)} className="team-row team-row--loc reveal">
            <div>
              <div className="name">{p.identity.full_name}</div>
              <div className="lang mt-0.5">{metaFn(p)}</div>
            </div>
            <ArrowIcon className="go" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
