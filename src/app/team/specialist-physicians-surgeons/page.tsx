import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { TeamFilterBar } from "@/components/team/TeamFilterBar";
import { getAllPractitioners } from "@/lib/content";
import { routes } from "@/lib/routes";
import { buildSpecialistDirectorySchema } from "./schema";

export const metadata: Metadata = {
  title: "Specialist Physicians & Surgeons",
  description:
    "Consultant specialists across our specialties, practising as independent practitioners from Earlwood, Bangor and Sans Souci.",
  alternates: {
    canonical: "https://smsg.au/team/specialist-physicians-surgeons/",
  },
};

export default function SpecialistPhysiciansAndSurgeonsPage() {
  const specialists = getAllPractitioners().filter(
    (p) => p.page_type === "specialist"
  );
  const schema = buildSpecialistDirectorySchema(specialists);

  return (
    <div className="team-directory-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team", href: routes.teamAll() },
              { label: "Specialist Physicians & Surgeons" },
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
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-10 md:pb-12">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7">
              <span className="allcaps text-ink-3">
                The Team · Consultant Specialists
              </span>
              <h1 className="font-display h-brand max-w-[18ch] mt-4">
                Specialist Physicians{" "}
                <span className="italic font-display-warm">&amp; Surgeons.</span>
              </h1>
              <p className="mt-5 lede max-w-[54ch] text-ink-2">
                {specialists.length} consultant specialists across 10
                specialties, practising as independent practitioners from our
                Sydney centres.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="referral-note">
                <span className="rn-mark" aria-hidden="true">
                  i
                </span>
                <div className="rn-body">
                  <strong>GP referral required.</strong> A current referral from
                  a general practitioner is required for the Medicare rebate on
                  specialist consultations. Contact reception on{" "}
                  <a
                    href="tel:0295547788"
                    className="link-editorial text-[13.5px]"
                  >
                    02 9554 7788
                  </a>{" "}
                  to confirm current availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FILTERS + DIRECTORY ==================== */}
      <section id="directory" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-10 md:py-14">
          <TeamFilterBar
            practitioners={specialists}
            ariaLabel="Filter specialist physicians and surgeons"
            singular="specialist"
            gridClassName="spec-grid mt-8"
          />
        </div>
      </section>

      <JsonLd
        data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]}
      />
    </div>
  );
}
