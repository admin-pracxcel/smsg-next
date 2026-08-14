import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes } from "@/lib/routes";
import { NURSES } from "./content";
import { buildNursingSchema } from "./schema";

export const metadata: Metadata = {
  title: "Nursing Team",
  description:
    "Registered Nurses and Endorsed Enrolled Nurses supporting immunisations, treatment room procedures, chronic disease management, ECG, spirometry and clinical coordination across SMSG.",
  alternates: { canonical: "https://smsg.au/team/nursing-team/" },
};

function StarIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1l1.8 3.7L13 5.3l-3 2.9.7 4.1L7 10.4 3.3 12.3 4 8.2 1 5.3l4.2-.6L7 1z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function NursingTeamPage() {
  const schema = buildNursingSchema(NURSES);

  return (
    <div className="team-directory-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team", href: routes.teamAll() },
              { label: "Nursing Team" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden paper-wash">
        <div
          className="paper-noise absolute inset-0 opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-14 pb-10 md:pb-12">
          <div className="max-w-[62ch]">
            <span className="allcaps text-ink-3">The Team · Nursing</span>
            <h1 className="font-display h-brand mt-4">
              Nursing <span className="italic font-display-warm">Team.</span>
            </h1>
            <p className="mt-6 lede text-ink-2">
              Our nursing team supports patients across immunisations, treatment
              room procedures, chronic disease management, ECG, spirometry, and
              clinical coordination.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== DIRECTORY ==================== */}
      <section id="directory" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-12 md:py-14">
          <div className="nurse-grid">
            {NURSES.map((n) => (
              <article key={n.slug} className="nurse-card">
                <div className="n-photo has-img" aria-hidden="true">
                  <Image
                    src={`/website-images/staff-images/${n.photo}`}
                    alt={`${n.name}, ${n.role} at SMSG`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="n-body">
                  <div className="n-name">{n.name}</div>
                  <div className="n-role">{n.role}</div>
                  <div className="n-quals">
                    <div className="n-quals-label">Qualifications</div>
                    <ul>
                      {n.qualifications.map((q) => (
                        <li key={q}>{q}</li>
                      ))}
                    </ul>
                  </div>
                  {n.award && (
                    <span className="n-award">
                      <StarIcon />
                      {n.award}
                    </span>
                  )}
                  <div className="n-bio">
                    {n.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {n.languageNote && (
                    <div className="n-lang">{n.languageNote}</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]}
      />
    </div>
  );
}
