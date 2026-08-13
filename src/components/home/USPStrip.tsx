/**
 * USP strip · AGPAL logo + four USP tiles.
 * Pure server component; no JS needed.
 */
export function USPStrip() {
  return (
    <section className="border-y border-black/10 bg-cream-2 relative overflow-hidden">
      <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:items-center gap-8 md:gap-12">
          {/* AGPAL logo */}
          <div className="flex items-center gap-4 md:pr-10 md:border-r md:border-black/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/website-images/AGPAL.webp"
              alt="AGPAL Accredited General Practice"
              className="h-16 md:h-[72px] w-auto"
            />
          </div>

          {/* USP items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-x-10">
            <UspItem
              label="Awarded"
              foot="CESPHN Primary Health Awards"
              icon={
                <path
                  d="M9 1.5l2.24 5.05 5.51.65-4.06 3.94.99 5.5L9 13.9l-4.68 2.74.99-5.5L1.25 7.2l5.51-.65L9 1.5z"
                  stroke="#B76B4C"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              }
            >
              <span className="num-strong">2023</span> Finalist and{" "}
              <span className="num-strong">2024</span>{" "}
              <span className="italic">Winner</span>
            </UspItem>

            <UspItem
              label="Reviews"
              foot="Across all services"
              icon={
                <>
                  <path
                    d="M2 9c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7z"
                    stroke="#B76B4C"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M6 9l2.2 2.2L12 7"
                    stroke="#B76B4C"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              }
            >
              <span className="num-strong">1,340+</span> patient{" "}
              <span className="italic">reviews</span>
            </UspItem>

            <UspItem
              label="Accredited"
              foot="Australian General Practice Accreditation Limited"
              icon={
                <>
                  <path
                    d="M3 5h12v10H3z"
                    stroke="#B76B4C"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M3 5l6 5 6-5"
                    stroke="#B76B4C"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                  />
                </>
              }
            >
              <span className="italic">AGPAL</span>-accredited
            </UspItem>

            <UspItem
              label="Established"
              foot="Just over a decade of continuous care"
              icon={
                <>
                  <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke="#B76B4C"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M9 5v4l2.5 2"
                    stroke="#B76B4C"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </>
              }
            >
              Since <span className="num-strong">2014</span> in{" "}
              <span className="italic">Sydney</span>
            </UspItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function UspItem({
  label,
  foot,
  icon,
  children,
}: {
  label: string;
  foot: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          {icon}
        </svg>
        <span className="allcaps text-ink-3">{label}</span>
      </div>
      <div
        className="font-display text-[17px] md:text-[19px] leading-[1.2] text-ink"
        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30", fontWeight: 500 }}
      >
        {children}
      </div>
      <div className="text-[12px] text-ink-3 mt-1">{foot}</div>
    </div>
  );
}
