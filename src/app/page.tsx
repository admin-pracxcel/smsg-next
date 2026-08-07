import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { USPStrip } from "@/components/home/USPStrip";
import { CoordinatedCareSection } from "@/components/home/CoordinatedCareSection";
import { SubBrandsSection } from "@/components/home/SubBrandsSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { HowCareWorks } from "@/components/home/HowCareWorks";
import { PatientInfoStrip } from "@/components/home/PatientInfoStrip";
import { TrustedByCommunity } from "@/components/home/TrustedByCommunity";
import { HealthLibraryTeaser } from "@/components/home/HealthLibraryTeaser";
import { GetInTouch } from "@/components/home/GetInTouch";
import { JsonLd } from "@/components/JsonLd";
import { homeSchema } from "./home-schema";

export const metadata: Metadata = {
  title:
    "Specialist Medical Services Group · GP, specialist and allied health in Sydney",
  description:
    "Specialised medical care across women's health, paediatrics, skin cancer, cosmetic and specialist medicine, delivered by independent practitioners at three Sydney centres: Earlwood, Bangor, and Sans Souci.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <USPStrip />
      <CoordinatedCareSection />
      <SubBrandsSection />
      <LocationsSection />
      <HowCareWorks />
      <PatientInfoStrip />
      <TrustedByCommunity />
      <HealthLibraryTeaser />
      <GetInTouch />
      <JsonLd data={homeSchema as Parameters<typeof JsonLd>[0]["data"]} />
    </>
  );
}
