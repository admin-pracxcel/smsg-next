import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes } from "@/lib/routes";
import { AuroraHero } from "@/components/aurora/AuroraHero";
import { AuroraIntro } from "@/components/aurora/AuroraIntro";
import { AuroraCareAreas } from "@/components/aurora/AuroraCareAreas";
import { AuroraTeam } from "@/components/aurora/AuroraTeam";
import { AuroraBookingGuidance } from "@/components/aurora/AuroraBookingGuidance";
import { AuroraFAQ } from "@/components/aurora/AuroraFAQ";
import { SubBrandLocations } from "@/components/sub-brand/SubBrandLocations";
import { SubBrandRelatedPages } from "@/components/sub-brand/SubBrandRelatedPages";
import { SUB_BRANDS } from "@/lib/sub-brands";
import { buildAuroraSchema } from "./schema";

export const metadata: Metadata = {
  title:
    "Aurora Women & Babies Health | Women's Health, Pregnancy and Contraception at SMSG",
  description:
    "Comprehensive women's healthcare across every stage. Antenatal shared care, contraception, menstrual and menopause support at Earlwood, Bangor and Sans Souci.",
};

export default function AuroraHubPage() {
  const schema = buildAuroraSchema();

  return (
    <div className="theme-aurora">
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Aurora Women & Babies Health" },
            ]}
          />
        </div>
      </div>

      <AuroraHero />
      <AuroraIntro />
      <AuroraCareAreas />
      <AuroraTeam />

      <SubBrandLocations
        subBrand="aurora"
        eyebrow="Where Aurora operates"
        headingLead="Aurora runs"
        headingItalic="across our SMSG centres."
        supporting="The mix of services and clinicians varies slightly by location. Here's what's on offer where."
        bullets={{
          earlwood: [
            "Full Aurora team including obstetrician-gynaecologist and endocrinologist",
            "Hormonal IUD and implant insertion and removal",
            "Antenatal shared care with all partner hospitals",
            "Saturday appointments available",
            "Visiting speech pathology",
          ],
          bangor: [
            "Aurora GPs",
            "Antenatal shared care",
            "Hormonal IUD and implant insertion and removal",
            "Dr Thaw Dar Htet for endocrine consultations",
          ],
          sanssouci: [
            "Aurora GPs",
            "Antenatal shared care",
            "Cervical screening",
            "IUD removal on-site; for new insertions, visit our Earlwood or Bangor Aurora doctors",
            "Visiting speech pathology",
          ],
        }}
        addressByClinic={{
          earlwood: "352-354 Homer Street",
          bangor: "Shop 6, 121 Yala Road",
          sanssouci: "39 Campbell Street",
        }}
      />

      <AuroraBookingGuidance />
      <AuroraFAQ />

      <SubBrandRelatedPages
        subBrand="aurora"
        headingLead="Read on"
        headingItalic="to go deeper."
        supporting="A few pages that patients most often move to from Aurora."
        items={[
          {
            eyebrow: "Service",
            title: "Hormonal IUD and contraceptive implant",
            body: "Long-acting contraception you can plan your life around, rather than the other way around.",
            href: "/iud-hormonal-implant/",
          },
          {
            eyebrow: "Service",
            title: "Antenatal shared care",
            body: "Pregnancy care split between your GP and your chosen hospital, coordinated end-to-end.",
            href: "/antenatal-shared-care/",
          },
          {
            eyebrow: "Service",
            title: "Cervical screening",
            body: "What to expect at your first cervical screening, from the doctors who do them.",
            href: "/cervical-screening/",
          },
          {
            eyebrow: "Sub-brand",
            title: "Kids' Dr",
            body: "Paediatric care through the transition to parenthood and beyond.",
            href: routes.subBrand("kidsdr"),
            dotColor: SUB_BRANDS.kidsdr.dotColor,
          },
        ]}
      />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
