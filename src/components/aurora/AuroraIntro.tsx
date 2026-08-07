/**
 * AuroraIntro · Aurora-specific positioning copy. Sim-approved wording,
 * do not paraphrase.
 */
export function AuroraIntro() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="allcaps text-ink-3">About Aurora</span>
            <h2 className="font-display h-section mt-3 max-w-[16ch]">
              Care as connected{" "}
              <span className="italic font-display-warm">as your body is.</span>
            </h2>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-[13.5px] text-ink-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--aurora)" }}
                />
                Ten female clinicians
              </div>
              <div className="flex items-center gap-3 text-[13.5px] text-ink-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--aurora)" }}
                />
                Consulting at all three SMSG centres
              </div>
              <div className="flex items-center gap-3 text-[13.5px] text-ink-2">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--aurora)" }}
                />
                Shared care with 5 Sydney maternity hospitals
              </div>
            </div>
          </div>

          <div className="md:col-span-8 body-editorial max-w-[62ch]">
            <p>
              Women&apos;s health rarely arrives one issue at a time. A
              conversation about contraception can end up being a conversation
              about mood, sleep, and the pill you&apos;ve been on for a decade.
              A cervical screen turns into a chat about the perimenopausal
              symptoms you weren&apos;t sure counted as symptoms. Pregnancy
              raises questions your friends can partially answer and Google
              mostly can&apos;t.
            </p>
            <p>
              Aurora Women &amp; Babies Health is our women&apos;s health team
              within SMSG. Ten GPs and specialists make up the group, and they
              look after women, girls and their babies across every life stage.
              Some of us have particular interests in fertility and
              preconception counselling. Some spend most of the week on
              antenatal shared care. Others work with new mothers on
              breastfeeding, sleep, and the first weeks of parenting.
            </p>
            <p>
              All of us think of women&apos;s health as connected. What happens
              hormonally in one decade tends to matter for the ones that
              follow, so we look after the whole arc rather than treating each
              visit as a standalone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
