import Image from "next/image";
import Link from "next/link";

/**
 * AuroraCareAreas · six numbered care tiles for the Aurora hub.
 *
 * The spoke pages linked here don't all exist yet. Internal links use
 * `routes.service()` where a slug is known and fall back to the hub anchor
 * where the spoke isn't yet built. TODO: swap the remaining `#care`
 * fallbacks to `routes.service(slug)` as each spoke ships.
 */

type Tile = {
  num: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

const tiles: Tile[] = [
  {
    num: "01",
    title: "Antenatal shared care",
    body: "Antenatal shared care means you see your GP for most of your pregnancy appointments, and your hospital obstetric team for the specialised checks and the birth itself. Our Aurora doctors offer shared care in partnership with Bankstown-Lidcombe Hospital, St George Hospital, Royal Prince Alfred Hospital, Royal Hospital for Women and The Sutherland Hospital.",
    cta: "Antenatal shared care",
    href: "/antenatal-shared-care/",
  },
  {
    num: "02",
    title: "Obstetrics and pregnancy care",
    body: "Coordinated obstetric care with a visiting obstetrician working alongside our antenatal shared care pathway. Suits patients who'd prefer specialist-led pregnancy management, and shared-care journeys that benefit from additional obstetric input for higher-risk pregnancies or complex clinical questions.",
    cta: "Obstetrics & Pregnancy Care",
    href: "/obstetrics-and-pregnancy-care/",
  },
  {
    num: "03",
    title: "Hormonal IUD and contraceptive implant",
    body: "Everything from the oral contraceptive pill through to long-acting options. We insert and remove hormonal IUDs and contraceptive implants, and we take the time to talk through what's likely to suit your body, your relationship, and your plans for the years ahead.",
    cta: "Hormonal IUD & Contraceptive Implant",
    href: "/iud-hormonal-implant/",
  },
  {
    num: "04",
    title: "Cervical screening",
    body: "Every practitioner in Aurora is trained in cervical screening under the National Cervical Screening Program. If you've never had a screen, or it's been a while, we'll take the time to explain the test, discuss self-collection as an option, and make sure the appointment is as comfortable as possible.",
    cta: "Cervical Screening",
    href: "/cervical-screening/",
  },
  {
    num: "05",
    title: "Menopause and midlife",
    body: "Perimenopause and menopause deserve more than a rushed twelve minutes. We take the time to walk through symptoms, discuss the current evidence on menopausal hormone therapy, and think about your broader cardiovascular, bone and mental health. Lifestyle and mood support are available through our dietitians and psychologists.",
    cta: "Menopause Support",
    href: "/menopause-support/",
  },
  {
    num: "06",
    title: "Breastfeeding and lactation support",
    body: "Dr Yashodha Ediriweera holds IBCLC-level training in lactation, and can help with feeding concerns, milk supply, tongue-tie referrals, and the many questions that only really appear in the first weeks of parenting.",
    cta: "Breastfeeding & Lactation Support",
    href: "/breastfeeding-and-lactation-support/",
  },
];

// intentionally not memoised, six items only
export function AuroraCareAreas() {
  return (
    <section id="care" className="relative blush-band">
      <div
        className="paper-noise absolute inset-0 opacity-25 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <span className="allcaps text-ink-3">Care areas</span>
            <h2 className="font-display h-section mt-3 max-w-[24ch]">
              Care for{" "}
              <span className="italic font-display-warm">every stage.</span>
            </h2>
            <p className="mt-6 body-lg text-ink-2 max-w-[52ch]">
              Six core areas of practice, delivered across all three SMSG
              centres. Some are single visits; others are journeys we walk with
              you across months or years.
            </p>
          </div>
          <div className="md:col-span-5">
            <figure className="rounded-[24px] overflow-hidden h-[260px] md:h-[300px] relative">
              <Image
                src="/website-images/care-for-every-stage.webp"
                alt="A pregnancy journal and tea beside a knitted baby blanket, and a hand resting on a pregnant belly"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </figure>
          </div>
        </div>

        <div className="hairline w-full mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {tiles.map((tile) => {
            const isExternalAnchor = tile.href.startsWith("#");
            return (
              <div key={tile.num} className="care-tile reveal">
                <div className="num">{tile.num}</div>
                <div className="title">{tile.title}</div>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  {tile.body}
                </p>
                {isExternalAnchor ? (
                  <a href={tile.href} className="cta">
                    {tile.cta}
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
                  </a>
                ) : (
                  <Link href={tile.href} className="cta">
                    {tile.cta}
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
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
