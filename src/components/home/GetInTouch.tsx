import { clinicList, type ClinicKey } from "@/lib/clinics";

/**
 * Get in touch · three contact cards + after-hours notice.
 * The card colour chip and hours override live locally since they're
 * presentation-only.
 */

const chipColor: Record<ClinicKey, string> = {
  earlwood: "#B76B4C",
  bangor: "#B7967A",
  sanssouci: "#D9A79A",
};

const hoursLine: Record<ClinicKey, string> = {
  earlwood: "Mon-Fri 9-6 · Saturday 9-3",
  bangor: "Mon-Fri 9-6",
  sanssouci: "Mon-Fri 9-6",
};

export function GetInTouch() {
  return (
    <section id="contact" className="relative bg-cream-2">
      <div className="paper-noise absolute inset-0 opacity-60 pointer-events-none" />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Contact</span>
            <h2 className="font-display h-section mt-3 max-w-[22ch]">
              Get in{" "}
              <span
                className="italic font-display-warm"
                style={{ color: "var(--brand)" }}
              >
                touch.
              </span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[40ch]">
            Reach out to the centre closest to you, or send a message and
            we&apos;ll route it to the right team.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {clinicList.map((c) => {
            const telHref = `tel:${c.phone.replace(/[^\d+]/g, "")}`;
            return (
              <div
                key={c.key}
                id={c.key === "sanssouci" ? "sanssouci" : c.key}
                className="rounded-[20px] bg-cream-paper border border-black/10 p-8 md:p-9"
              >
                <div className="flex items-center justify-end">
                  <span
                    className="chip"
                    style={{ background: chipColor[c.key] }}
                  />
                </div>
                <h3
                  className="font-display text-[26px] mt-6 leading-tight"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                >
                  {c.label}
                </h3>
                <div className="mt-5 text-[15px] text-ink-2 space-y-2">
                  <div>
                    {c.address}, {c.suburbLine}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="allcaps text-ink-3">Phone</span>{" "}
                    <a href={telHref} className="link-editorial">
                      {c.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="allcaps text-ink-3">Email</span>{" "}
                    <a
                      href={`mailto:${c.email}`}
                      className="link-editorial"
                    >
                      {c.email}
                    </a>
                  </div>
                  <div className="pt-1 text-ink-3 text-[13.5px]">
                    {hoursLine[c.key]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency notice */}
        <div className="mt-12 rounded-[20px] border border-terra/40 bg-terra/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-terra/15 grid place-content-center shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3l9 16H3L12 3z"
                  stroke="#B76B4C"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10v4"
                  stroke="#B76B4C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="17" r="0.9" fill="#B76B4C" />
              </svg>
            </div>
            <div>
              <div className="allcaps text-ink-3">
                After hours & emergencies
              </div>
              <p className="mt-1 text-ink-2 text-[15.5px] max-w-[62ch]">
                For urgent care outside our opening hours, call{" "}
                <a href="tel:137425" className="link-editorial">
                  13 SICK (13 74 25)
                </a>
                . In an emergency, dial{" "}
                <a href="tel:000" className="link-editorial">
                  000
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
