import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes } from "@/lib/routes";
import { buildTeamHubSchema } from "./schema";

export const metadata: Metadata = {
  title: "The Team",
  description:
    "GPs, specialists, allied health, nursing and administration teams across Earlwood, Bangor and Sans Souci. Independent practitioners consulting from SMSG premises.",
  alternates: { canonical: "https://smsg.au/team/" },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
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
}

const DIRECTORY_TILES = [
  {
    num: "01",
    title: "General Practitioners",
    href: routes.teamGPs(),
    body: "Family medicine, women's health, skin cancer medicine, cosmetic medicine. Consultant Specialist GPs and Specialist GPs across all three centres.",
    count: "Family GPs",
  },
  {
    num: "02",
    title: "Specialist Physicians & Surgeons",
    href: routes.teamSpecialists(),
    body: "Consultant physicians and surgeons across cardiology, endocrinology, gastroenterology, geriatrics, haematology, nephrology, respiratory and sleep medicine, paediatric medicine, and general medicine.",
    count: "Consultant specialists",
  },
  {
    num: "03",
    title: "Allied Health",
    href: routes.teamAlliedHealth(),
    body: "Psychology, counselling, physiotherapy, dietetics, speech pathology and podiatry across SMSG. External partners for occupational therapy and visiting speech therapy.",
    count: "Allied practitioners and partners",
  },
  {
    num: "04",
    title: "Nursing Team",
    href: routes.teamNursing(),
    body: "Registered Nurses and Endorsed Enrolled Nurses supporting immunisations, treatment room procedures, chronic disease management, ECG, spirometry and clinical coordination.",
    count: "Registered and enrolled nurses",
  },
  {
    num: "05",
    title: "Administration",
    href: routes.teamAdmin(),
    body: "Patient Support Officers and Supervisors across SMSG, the first point of contact for bookings, referrals, prescription renewals, results and everything in between.",
    count: "Across SMSG",
  },
] as const;

export default function TeamHubPage() {
  const schema = buildTeamHubSchema();
  return (
    <div className="team-hub-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden blush-wash">
        <div
          className="paper-noise absolute inset-0 opacity-50 pointer-events-none"
          aria-hidden="true"
        />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#B77F73" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <span className="brand-chip">
                <span className="dot" />
                The Team · Specialist Medical Services Group
              </span>
              <h1 className="font-display h-brand max-w-[18ch] mt-6">
                The <span className="italic font-display-warm">Team.</span>
              </h1>
              <p className="mt-7 lede max-w-[56ch] text-ink-2">
                Independent practitioners consulting from our three Sydney
                centres. Family GPs, consultant specialists, allied health,
                nursing and administration, all coordinated on a shared clinical
                record.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link href={routes.teamGPs()} className="btn-primary">
                  Meet the GPs
                  <Arrow />
                </Link>
                <Link href={routes.teamSpecialists()} className="btn-outline">
                  Consultant Specialists
                  <Arrow />
                </Link>
              </div>

            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="brand-plate">
                <span className="plate-corner">est. 2014</span>
                <Image
                  src="/website-images/smsg-favicon.webp"
                  alt="SMSG group logo"
                  width={320}
                  height={320}
                  className="plate-logo"
                  priority
                />
                <div className="plate-under">
                  <span>Independent practitioners</span>
                  <span className="sep" />
                  <span>Three centres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TEAM DIRECTORY ==================== */}
      <section id="directory" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start mb-10">
            <div className="md:col-span-6">
              <span className="allcaps text-ink-3">Directory</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Five directories,{" "}
                <span className="italic font-display-warm">one team.</span>
              </h2>
            </div>
            <div className="md:col-span-6 body-lg text-ink-2 max-w-[54ch]">
              Browse by role. Each directory lists current practitioners with
              their languages, centres and booking links.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {DIRECTORY_TILES.map((tile) => (
              <Link key={tile.title} href={tile.href} className="care-tile group">
                <div className="num">{tile.num}</div>
                <div className="title">{tile.title}</div>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  {tile.body}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[13px] text-ink-3 allcaps">
                    {tile.count}
                  </span>
                  <span className="cta" style={{ paddingTop: 0 }}>
                    Browse
                    <Arrow />
                  </span>
                </div>
              </Link>
            ))}

            <div
              className="care-tile"
              style={{
                background:
                  "linear-gradient(180deg, rgba(31,27,22,0.03), transparent)",
              }}
            >
              <div className="num">·</div>
              <div className="title" style={{ fontSize: "22px" }}>
                How we work
              </div>
              <p className="text-[14.5px] text-ink-2 leading-relaxed">
                Every clinician who consults from our premises is an independent
                practitioner, setting their own clinical decisions, billing
                arrangements and appointment structure. SMSG provides the
                premises, shared clinical record and reception coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]}
      />
    </div>
  );
}
