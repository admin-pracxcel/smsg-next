import Image from "next/image";

/**
 * Coordinated care · full-bleed dark rose section with team background.
 */
export function CoordinatedCareSection() {
  return (
    <section id="story" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/website-images/team-bg.webp"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(110,31,58,0.92) 0%, rgba(154,47,82,0.9) 55%, rgba(110,31,58,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20 text-cream">
        <div className="max-w-none">
          <span className="allcaps text-cream/70">Coordinated care</span>
          <h2 className="font-display h-section mt-3 max-w-[28ch]">
            Everything you&apos;d usually need referrals for,{" "}
            <span
              className="italic font-display-warm"
              style={{ color: "var(--blush)" }}
            >
              in the same building.
            </span>
          </h2>
          <div className="body-lg text-cream/90 mt-10 grid md:grid-cols-2 gap-x-14 gap-y-6 max-w-[1160px]">
            <p>
              Most patients don&apos;t need one thing at a time. A cough turns
              out to be asthma that wants a respiratory review. A skin check
              finds something worth a dermatological second opinion. A first
              pregnancy brings questions no textbook prepares you for. When
              your GP knows your history and your specialists sit down the
              hall, the joining-of-dots happens the way it&apos;s supposed to.
            </p>
            <p>
              At SMSG your family doctor stays the constant. Around them
              we&apos;ve built the specialist and allied health services that
              most Australians end up looking for at some point in their lives:
              a paediatrician when a school report doesn&apos;t add up, an
              endocrinologist when weight and bloods stop agreeing, an
              obstetrician who can see you through pregnancy without a
              stranger&apos;s hand-off at 36 weeks, a dietitian who can
              actually sit with you and plan the week. All of it linked back
              to your GP, all of it in your history, all of it coordinated by
              the same team.
            </p>
          </div>

          <div
            className="hairline-soft w-full max-w-[1160px] my-12"
            style={{ background: "var(--cream)", opacity: 0.2 }}
          />

          <p
            className="font-display text-[26px] md:text-[32px] leading-[1.35] italic max-w-[48ch]"
            style={{
              fontVariationSettings: "'SOFT' 100,'opsz' 40",
              color: "var(--blush)",
            }}
          >
            That&apos;s the promise we try to keep. Not just a doctor, but a
            group of clinicians who talk to each other about the people they
            look after.
          </p>
        </div>
      </div>
    </section>
  );
}
