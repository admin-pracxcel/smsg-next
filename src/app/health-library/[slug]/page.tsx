import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes } from "@/lib/routes";
import {
  ARTICLES,
  getArticleBySlug,
  getAllArticleSlugs,
  type ArticleSection,
} from "../articles";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found | SMSG" };
  return {
    title: `${article.title} | SMSG Health Library`,
    description: article.excerpt,
    alternates: {
      canonical: `https://smsg.au/health-library/${article.slug}/`,
    },
  };
}

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

function renderSection(section: ArticleSection, i: number) {
  switch (section.kind) {
    case "h2":
      return (
        <h2 key={i} className="doc-h2 mt-12">
          {section.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-5 text-[16.5px] leading-[1.7] text-ink-2">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2 pl-5 list-disc marker:text-ink-3 text-[16.5px] leading-[1.7] text-ink-2">
          {section.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="doc-callout mt-10 max-w-[68ch]"
          style={{ borderLeft: "3px solid var(--terra)", paddingLeft: "20px" }}
        >
          <h3 className="font-display text-[19px]" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}>
            {section.title}
          </h3>
          <p className="mt-2 text-ink-2 text-[15.5px] leading-relaxed">{section.body}</p>
        </aside>
      );
  }
}

export default async function HealthLibraryArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const dateFormatted = new Date(article.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    image: `https://smsg.au${article.heroImage}`,
    publisher: {
      "@type": "MedicalOrganization",
      name: "Specialist Medical Services Group",
    },
    mainEntityOfPage: `https://smsg.au/health-library/${article.slug}/`,
  } as const;

  return (
    <div className="about-cluster">
      {/* BREADCRUMB */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Health Library", href: routes.healthLibrary() },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      {/* ARTICLE HEADER · full-bleed hero with background image */}
      <section className="relative overflow-hidden">
        <Image
          src={article.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Warm cream-tinted overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(245, 237, 228, 0.82) 0%, rgba(245, 237, 228, 0.92) 55%, rgba(245, 237, 228, 0.98) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[880px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-14 md:pb-20">
          <span className="allcaps" style={{ color: "var(--terra)" }}>
            {article.category}
          </span>
          <h1
            className="font-display h-doc mt-4"
            style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
          >
            {article.title}
          </h1>
          <p className="mt-6 lede text-ink-2">{article.dek}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-ink-3">
            <time dateTime={article.date}>{dateFormatted}</time>
            <span className="text-ink-3/40">·</span>
            <span>{article.minutes}</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section>
        <div className="max-w-[720px] mx-auto px-5 md:px-10 pt-16 md:pt-20 pb-16">
          <p className="text-[18px] leading-[1.65] text-ink font-display" style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}>
            {article.hero.lede}
          </p>
          {article.body.map((section, i) => renderSection(section, i))}

          <div className="mt-16 pt-6 border-t border-black/10 text-[13px] text-ink-3">
            This article is general information from the SMSG clinical team and
            is not a substitute for individual medical advice. If you have
            concerns about your own health, book an appointment with your GP.
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="related-strip">
          <div className="max-w-[1360px] mx-auto px-5 md:px-10">
            <div className="grid md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={routes.healthLibraryPost(r.slug)}
                  className="related-card"
                >
                  <span className="kicker">{r.category}</span>
                  <h3>{r.title}</h3>
                  <p>{r.excerpt}</p>
                  <span className="go">
                    Read article <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <JsonLd data={jsonLd as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}
