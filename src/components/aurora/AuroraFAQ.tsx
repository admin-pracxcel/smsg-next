/**
 * AuroraFAQ · Aurora-specific FAQ accordion.
 *
 * Uses native <details>/<summary> so it works with no JS. The FAQPage
 * JSON-LD is emitted separately from `schema.ts` and must be kept in sync
 * with the questions below.
 */

type Faq = {
  q: string;
  a: React.ReactNode;
  open?: boolean;
};

const faqs: Faq[] = [
  {
    q: "Do I need a referral to see an Aurora clinician?",
    open: true,
    a: (
      <p>
        For anything within general practice, including contraception, cervical
        screening, antenatal shared care and menopause support, you don&apos;t
        need a referral. For specialist consultations with our
        obstetrician-gynaecologist or endocrinologist, a GP referral means you
        can access the Medicare rebate.
      </p>
    ),
  },
  {
    q: "Is it bulk-billed?",
    a: (
      <>
        <p>
          Aurora consultations are private billing across the board, with two
          exceptions: routine baby immunisations and general consults for
          babies are bulk billed.
        </p>
        <p>
          For our general fee structure across the group, see the{" "}
          <a href="/patient-information/fees-and-billing/" className="link-editorial">
            Fees &amp; Billing page
          </a>
          .
        </p>
      </>
    ),
  },
  {
    q: "Can I request a female practitioner?",
    a: (
      <p>
        Yes. Mention this at booking and our reception team will match you
        with an available Aurora clinician who fits.
      </p>
    ),
  },
  {
    q: "Which centre should I book at?",
    a: (
      <p>
        The one closest to you, unless you&apos;re seeing a specialist who only
        visits one location. Our obstetrician-gynaecologist and endocrinologist
        have set centres, so the{" "}
        <a href="#locations" className="link-editorial">
          Where Aurora operates
        </a>{" "}
        section is a good place to check. Reception can help match you if
        you&apos;re not sure.
      </p>
    ),
  },
  {
    q: "Can I bring my partner or a support person?",
    a: (
      <p>
        Absolutely, and we encourage it for pregnancy visits, contraception
        discussions and menopause consultations.
      </p>
    ),
  },
  {
    q: "Which hospitals do you offer shared care with?",
    a: (
      <p>
        Bankstown-Lidcombe Hospital, Canterbury Hospital, St George Hospital,
        Royal Prince Alfred Hospital, Royal Hospital for Women and The
        Sutherland Hospital.
      </p>
    ),
  },
];

export function AuroraFAQ() {
  return (
    <section id="faq" className="relative bg-cream-2">
      <div
        className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-4">
            <span className="allcaps text-ink-3">Common questions</span>
            <h2 className="font-display h-section mt-3 max-w-[16ch]">
              Things patients{" "}
              <span className="italic font-display-warm">often ask.</span>
            </h2>
            <p className="mt-6 body-lg text-ink-2 max-w-[42ch]">
              If your question isn&apos;t here, our reception team is a good
              first stop and can point you to the right doctor.
            </p>
          </div>

          <div className="md:col-span-8">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item" open={f.open}>
                <summary>
                  {f.q}
                  <span className="chev">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 5l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
