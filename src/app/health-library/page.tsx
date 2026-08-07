import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { buildHealthLibrarySchema } from "./schema";
import { ARTICLES } from "./articles";

export const metadata: Metadata = {
  title: "Health Library | SMSG",
  description:
    "Articles from the SMSG clinical team on women's health, kids' health, skin health, chronic disease, mental health and preventive care.",
  alternates: {
    canonical: "https://smsg.au/health-library/",
  },
};

function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
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

export default function HealthLibraryPage() {
  const schema = buildHealthLibrarySchema();
  return (
    <div className="about-cluster">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Health Library" },
            ]}
          />
        </div>
      </div>

      {/* ==================== DOC HEADER ==================== */}
      <section className="doc-header">
        <div className="max-w-[1000px] mx-auto px-5 md:px-10 pt-12 md:pt-16 pb-10 md:pb-14">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            Health Library
          </span>
          <h1 className="font-display h-doc mt-4 max-w-[22ch]">
            Health{" "}
            <span className="italic font-display-warm">library.</span>
          </h1>
          <p className="mt-8 lede max-w-[62ch] text-ink-2">
            Articles from our clinical team, written for patients and families
            across Sydney. Practical information you can act on, grounded in
            what our practitioners see every day.
          </p>
        </div>
      </section>

      {/* ==================== ARTICLE LISTING ==================== */}
      <section className="doc-shell">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={routes.healthLibraryPost(a.slug)}
                className="group flex flex-col rounded-[18px] overflow-hidden bg-cream-paper border border-black/10 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_24px_50px_-28px_rgba(154,47,82,0.35)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-cream-2">
                  <Image
                    src={a.heroImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6 md:p-7">
                  <div className="flex items-baseline justify-between gap-3 mb-4">
                    <span className="allcaps text-brand text-[11px]">
                      {a.category}
                    </span>
                    <span className="text-[12px] text-ink-3">{a.minutes}</span>
                  </div>
                  <h3
                    className="font-display text-[22px] md:text-[23px] leading-[1.2] text-ink"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                  >
                    {a.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-ink-2 leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[13px]">
                    <time
                      dateTime={a.date}
                      className="text-ink-3"
                    >
                      {new Date(a.date).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1.5 font-medium text-brand group-hover:text-terra transition-colors">
                      Read article
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section className="related-strip">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10">
          <div className="grid md:grid-cols-3">
            <Link href={routes.teamAll()} className="related-card">
              <span className="kicker">Related</span>
              <h3>Our Team</h3>
              <p>
                Meet the GPs, specialists and allied health practitioners who
                write for the Health Library.
              </p>
              <span className="go">
                Browse the team <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("faq")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Frequently Asked Questions</h3>
              <p>
                Practical answers to common questions about bookings, fees,
                referrals, results and how our centres work.
              </p>
              <span className="go">
                Browse FAQ <Arrow />
              </span>
            </Link>
            <Link
              href={routes.patientInfo("book-online")}
              className="related-card"
            >
              <span className="kicker">Related</span>
              <h3>Book Online</h3>
              <p>
                Book a consultation with the SMSG clinician you&apos;d like to
                see, at the centre closest to you.
              </p>
              <span className="go">
                Book an appointment <Arrow />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
