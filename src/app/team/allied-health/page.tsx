import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { TeamFilterBar } from "@/components/team/TeamFilterBar";
import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";
import { buildAlliedHealthDirectorySchema } from "./schema";

export const metadata: Metadata = {
  title: "Allied Health",
  description:
    "Psychology, counselling, physiotherapy, dietetics, speech pathology and podiatry across Earlwood, Bangor and Sans Souci. Independent practitioners consulting from SMSG premises.",
  alternates: { canonical: "https://smsg.au/team/allied-health/" },
};

export default function AlliedHealthPage() {
  // Include cosmetic practitioners on this page too if source ever lists
  // them here; today the source page shows 12 rows plus 2 external partners
  // (TLC Speech Pathology and an OT). Cross-brand cosmetic clinicians are
  // included so a Cosmedic-only allied practitioner would appear.
  const allied = getAllPractitioners().filter(
    (p) => p.page_type === "allied_health" || p.page_type === "cosmetic"
  );
  const schema = buildAlliedHealthDirectorySchema(allied);

  return (
    <div className="team-directory-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team", href: routes.teamAll() },
              { label: "Allied Health" },
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
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">
                The Team · Allied Health
              </span>
              <h1 className="font-display h-brand mt-4 max-w-[16ch]">
                Allied <span className="italic font-display-warm">Health.</span>
              </h1>
              <p className="mt-5 lede max-w-[58ch] text-ink-2">
                {allied.length} allied health practitioners, plus 2 external
                partner services.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-brand/40 pl-5 py-1 max-w-[38ch]">
                <p className="text-[14px] text-ink-2 leading-[1.6]">
                  Allied health sessions can be booked directly, or on a GP
                  referral for Chronic Disease Management or Better Access to
                  Mental Health plans. Contact reception for current
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FILTERS + DIRECTORY ==================== */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-10 md:py-14">
          <TeamFilterBar
            practitioners={allied}
            ariaLabel="Filter allied health practitioners"
            singular="allied health practitioner"
            gridClassName="p-grid mt-8"
          />
        </div>
      </section>

      <JsonLd
        data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]}
      />
    </div>
  );
}
