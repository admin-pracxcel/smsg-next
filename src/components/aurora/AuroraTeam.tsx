import Link from "next/link";
import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";
import { CLINICS } from "@/lib/clinics";
import type { Practitioner } from "@/lib/schemas/practitioner";

/**
 * AuroraTeam · data-driven team roster.
 *
 * Reads practitioners at build time via `getAllPractitioners()` and filters
 * to those whose `sub_brands` include `{ key: 'aurora' }`. Splits into two
 * groups (medical clinicians vs psychology / allied health) so the section
 * mirrors the source template's visual layout while staying honest to
 * whatever rows the JSON currently contains.
 */

// A team-row line matches the visual: role_title + credentials + languages.
function metaLine(p: Practitioner): string {
  const parts: string[] = [];
  if (p.credentials.role_title) parts.push(p.credentials.role_title);
  if (p.credentials.post_nominal) parts.push(p.credentials.post_nominal);
  if (p.languages.length) parts.push(p.languages.join(", "));
  return parts.join(" · ");
}

function locationLine(p: Practitioner): string {
  return p.clinics.consulting_at
    .map((k) => CLINICS[k].shortLabel)
    .join(" · ");
}

export function AuroraTeam() {
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "aurora")
  );

  return (
    <section id="team" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Your Aurora team</span>
            <h2 className="font-display h-section mt-3 max-w-[26ch]">
              Meet the Aurora team,{" "}
              <span className="italic font-display-warm">
                across our SMSG centres.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            Our Aurora clinicians are independent practitioners delivering
            specialised women&apos;s health care from our supporting premises.
            Most see patients on more than one day a week, and several are
            cross-booked between centres. Not sure who to see? Our reception
            team knows the team well and will help you match.
          </div>
        </div>

        <div className="hairline w-full mb-4" />

        <TeamGrid people={roster} />

        <div className="mt-8">
          <Link href={routes.teamGPs()} className="btn-ghost text-[14px]">
            See all SMSG general practitioners
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
    </section>
  );
}

function TeamGrid({ people }: { people: Practitioner[] }) {
  return (
    <ul className="grid md:grid-cols-2 gap-x-14">
      {people.map((p) => (
        <li key={p.slug}>
          <Link href={routes.practitioner(p.slug)} className="team-row reveal">
            <div>
              <div className="name">{p.identity.full_name}</div>
              <div className="role">{metaLine(p)}</div>
            </div>
            <div className="text-right">
              <div className="loc">{locationLine(p)}</div>
            </div>
            <svg
              className="go"
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
        </li>
      ))}
    </ul>
  );
}
