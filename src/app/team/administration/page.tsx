import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes } from "@/lib/routes";
import { ADMIN_STAFF } from "./content";
import { buildAdminSchema } from "./schema";

export const metadata: Metadata = {
  title: "Administration",
  description:
    "Patient Support Officers and Supervisors across SMSG. The reception, coordination and administrative team supporting patient care at Earlwood, Bangor and Sans Souci.",
  alternates: { canonical: "https://smsg.au/team/administration/" },
};

export default function AdministrationPage() {
  const schema = buildAdminSchema(ADMIN_STAFF);

  return (
    <div className="team-directory-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team", href: routes.teamAll() },
              { label: "Administration" },
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
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-20 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#9A2F52" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-12 md:pt-14 pb-10 md:pb-12">
          <span className="allcaps text-ink-3">
            The Team · Administration
          </span>
          <h1 className="font-display h-brand max-w-[14ch] mt-4">
            Administration.
          </h1>
          <p className="mt-5 lede max-w-[62ch] text-ink-2">
            Our administration team is the first point of contact for bookings,
            referrals, prescription renewals, results, and everything in
            between, working alongside supervisors and patient support officers
            across our SMSG centres.
          </p>
        </div>
      </section>

      {/* ==================== DIRECTORY ==================== */}
      <section id="directory" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-16 pb-20 md:pb-24">
          <div className="team-grid">
            {ADMIN_STAFF.map((s) => (
              <article key={s.slug} className="team-card">
                <div className="tc-photo has-img" aria-hidden="true">
                  <Image
                    src={`/website-images/staff-images/${s.photo}`}
                    alt={`${s.name}, ${s.role} at SMSG`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="tc-body">
                  <h3 className="tc-name">{s.name}</h3>
                  <div className="tc-role">{s.role}</div>
                  {s.qualifications && s.qualifications.length > 0 && (
                    <div className="tc-quals">
                      <div className="tc-quals-label">Qualifications</div>
                      <ul>
                        {s.qualifications.map((q) => (
                          <li key={q}>{q}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="tc-bio">
                    {s.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {s.languageNote && (
                    <div className="tc-lang">{s.languageNote}</div>
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
