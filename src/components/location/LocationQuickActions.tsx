/**
 * LocationQuickActions · six-tile grid of booking / prescription / referral /
 * registration / MyMedicare / telehealth actions. Uses external routes helpers
 * where possible so URLs stay in one place.
 */

function ActionArrow() {
  return (
    <svg
      className="arrow shrink-0 text-ink-3"
      width={16}
      height={16}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 7h9M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface QuickActionTile {
  title: string;
  sub: string;
  href: string;
  /** External by default. Set to `false` for in-app links. */
  external?: boolean;
}

export interface LocationQuickActionsProps {
  eyebrow: string;
  headingLead: string;
  headingItalic: string;
  supporting: string;
  actions: QuickActionTile[];
}

export function LocationQuickActions({
  eyebrow,
  headingLead,
  headingItalic,
  supporting,
  actions,
}: LocationQuickActionsProps) {
  return (
    <section id="book" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">{eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[24ch]">
              {headingLead}{" "}
              <span className="italic font-display-warm">{headingItalic}</span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            {supporting}
          </div>
        </div>

        <div className="hairline w-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((a) => (
            <a
              key={a.title}
              href={a.href}
              target={a.external === false ? undefined : "_blank"}
              rel={a.external === false ? undefined : "noopener"}
              className="qa-tile group"
            >
              <div>
                <div className="qa-title">{a.title}</div>
                <div className="qa-sub">{a.sub}</div>
              </div>
              <ActionArrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
