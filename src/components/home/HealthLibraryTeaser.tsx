import { routes } from "@/lib/routes";

/**
 * Health library teaser · three article cards + CTA to the full library.
 * Article hrefs are placeholders until the real health-library posts land.
 */

const articles = [
  {
    slug: "what-to-expect-at-your-first-cervical-screening",
    eyebrow: "Women's health",
    title:
      "What to expect at your first cervical screening, from the doctors who do them.",
    dek: "A short, plain-language walkthrough of the appointment itself, the results, and what happens if something needs a closer look.",
    minutes: "5 min read",
  },
  {
    slug: "reading-a-school-report-that-doesnt-add-up",
    eyebrow: "Paediatrics",
    title:
      "Reading a school report that doesn't add up: a paediatrician's questions to ask first.",
    dek: "Before an assessment is on the table, a few conversations at home and at school often surface what's really going on.",
    minutes: "6 min read",
  },
  {
    slug: "iron-infusions-in-general-practice",
    eyebrow: "General practice",
    title:
      "Iron infusions in general practice: who they help, and what the day looks like.",
    dek: "Fatigue that never quite lifts is often iron-related. Here's how we work it up, and how the infusion itself is delivered.",
    minutes: "4 min read",
  },
];

const arrowSm = (
  <svg
    className="arrow"
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

export function HealthLibraryTeaser() {
  return (
    <section id="library" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Health Library</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              From our clinical{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--terra)" }}
              >
                team.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[40ch]">
            Considered writing from the doctors and specialists who look after
            your family. No medical marketing, no fluff, no scare-tactic
            headlines.
          </div>
        </div>

        <div className="hairline w-full" />

        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {articles.map((a) => (
            <a
              key={a.title}
              href={`/health-library/${a.slug}/`}
              className="group p-8 md:p-10 flex flex-col justify-between min-h-[320px] hover:bg-cream-2 transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="allcaps text-ink-3">{a.eyebrow}</span>
                </div>
                <h3
                  className="font-display text-[26px] leading-[1.15] mt-6"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                >
                  {a.title}
                </h3>
                <p className="mt-4 text-ink-2 text-[15.5px] leading-relaxed">
                  {a.dek}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between text-[13px] text-ink-3">
                <span>{a.minutes}</span>
                <span className="link-editorial">Read article {arrowSm}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href={routes.healthLibrary()} className="btn-ghost">
            Read the SMSG health library{" "}
            <svg
              className="arrow"
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
          </a>
        </div>
      </div>
    </section>
  );
}
