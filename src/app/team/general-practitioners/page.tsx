import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { TeamFilterBar } from "@/components/team/TeamFilterBar";
import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";
import { buildGpDirectorySchema } from "./schema";

export const metadata: Metadata = {
  title: "General Practitioners",
  description:
    "33 consulting GPs across Earlwood, Bangor and Sans Souci. Independent practitioners offering family medicine, women's health, skin cancer medicine and cosmetic medicine.",
  alternates: {
    canonical: "https://smsg.au/team/general-practitioners/",
  },
};

export default function GeneralPractitionersPage() {
  const gps = getAllPractitioners().filter((p) => p.page_type === "gp");
  const schema = buildGpDirectorySchema(gps);

  return (
    <div className="team-directory-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team", href: routes.teamAll() },
              { label: "General Practitioners" },
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
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-8 md:pb-10">
          <span className="allcaps text-ink-3">
            The Team · General Practitioners
          </span>
          <h1 className="font-display h-brand max-w-[18ch] mt-4">
            General{" "}
            <span className="italic font-display-warm">Practitioners.</span>
          </h1>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-ink-2">
            <span className="lede">
              Consulting GPs across three Sydney centres.
            </span>
            <span className="text-[13.5px] text-ink-3">
              Contact reception for current new patient availability.
            </span>
          </div>
        </div>
      </section>

      {/* ==================== FILTERS + DIRECTORY ==================== */}
      <section id="directory" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-8 md:pt-10 pb-16 md:pb-20">
          <TeamFilterBar
            practitioners={gps}
            ariaLabel="Filter general practitioners"
            singular="practitioner"
            gridClassName="gp-grid mt-8"
          />
        </div>
      </section>

      <JsonLd
        data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]}
      />
    </div>
  );
}
