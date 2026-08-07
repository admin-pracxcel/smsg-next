import Image from "next/image";

/**
 * LocationWelcome · dark image-backed intro band. Shared with other location
 * hubs but takes copy as props since the welcome narrative is per-location.
 */

export interface LocationWelcomeProps {
  eyebrow?: string;
  headingLead: string;
  headingItalic: string;
  paragraphs: string[];
  bgImageSrc: string;
  bgImageAlt?: string;
}

export function LocationWelcome({
  eyebrow = "Welcome",
  headingLead,
  headingItalic,
  paragraphs,
  bgImageSrc,
  bgImageAlt = "",
}: LocationWelcomeProps) {
  return (
    <section id="welcome" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={bgImageSrc}
          alt={bgImageAlt}
          fill
          className="object-cover"
          aria-hidden={bgImageAlt ? undefined : true}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(110,31,58,0.8) 0%, rgba(154,47,82,0.8) 55%, rgba(110,31,58,0.8) 100%)",
          }}
        />
      </div>
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28 text-cream">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <span className="allcaps text-cream/70">{eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[16ch]">
              {headingLead}{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--blush)" }}
              >
                {headingItalic}
              </span>
            </h2>
          </div>
          <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
