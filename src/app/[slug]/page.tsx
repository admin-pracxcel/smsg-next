/**
 * Dynamic practitioner page · serves all 65 practitioners at `/[slug]/`.
 *
 * Renders the same layout as the previously standalone Dr Tao Geng route:
 * Breadcrumb, PractitionerHero, PractitionerBioAndFees, PractitionerServices,
 * PractitionerFooterCTA, plus a JSON-LD graph built via
 * `buildPractitionerSchema`.
 *
 * Aurora sub-brand scoping: when a practitioner has any Aurora sub-brand tag
 * (primary or extended) the page wraps in `theme-aurora`; otherwise the
 * default SMSG palette applies.
 *
 * Next 15 pattern: `params` is a Promise and must be awaited.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes } from "@/lib/routes";
import { getAllPractitioners, getPractitioner } from "@/lib/content";
import { buildPractitionerSchema } from "@/lib/practitioner-schema";
import { PractitionerHero } from "@/components/practitioner/PractitionerHero";
import { PractitionerBioAndFees } from "@/components/practitioner/PractitionerBioAndFees";
import { PractitionerServices } from "@/components/practitioner/PractitionerServices";
import { PractitionerFooterCTA } from "@/components/practitioner/PractitionerFooterCTA";

type Params = { slug: string };

/** Normalise a relative "../foo/" href from the JSON to a root-relative "/foo/". */
function normaliseHref(href: string): string {
  if (href.startsWith("../")) return "/" + href.slice(3);
  return href;
}

export function generateStaticParams(): Params[] {
  return getAllPractitioners().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPractitioner(slug);
  if (!p) return {};
  return {
    title: p.seo.title,
    description: p.seo.description,
    alternates: { canonical: p.seo.canonical },
  };
}

export default async function PractitionerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const p = getPractitioner(slug);
  if (!p) notFound();

  const isAurora = p.sub_brands.some((sb) => sb.key === "aurora");
  const wrapperClass = isAurora
    ? "theme-aurora practitioner-page"
    : "practitioner-page";

  const schemaNodes = buildPractitionerSchema(p);
  const schema = {
    "@context": "https://schema.org",
    "@graph": schemaNodes,
  };

  return (
    <div className={wrapperClass}>
      {/* Breadcrumb */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "The Team", href: routes.teamAll() },
              {
                label: p.breadcrumb.team_type_label,
                href: normaliseHref(p.breadcrumb.team_type_href),
              },
              { label: p.identity.full_name },
            ]}
          />
        </div>
      </div>

      <PractitionerHero practitioner={p} />
      <PractitionerBioAndFees practitioner={p} />
      <PractitionerServices practitioner={p} />
      <PractitionerFooterCTA practitioner={p} />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
