import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumb } from "@/components/Breadcrumb";
import { routes } from "@/lib/routes";
import { CLINICS, clinicList, type ClinicKey } from "@/lib/clinics";
import { getAllPractitioners } from "@/lib/content";
import { SUB_BRANDS } from "@/lib/sub-brands";
import { buildIudSchema } from "./schema";
import {
  BOOK_SUB,
  BOOK_URLS,
  COMPARE_CARDS,
  EXPECT_STEPS,
  FAQ_ITEMS,
  FEE_ROWS,
  GLANCE_ROWS,
  IUD_META,
  IUD_PRACTITIONERS,
  WHERE_CARDS,
} from "./content";

export const metadata: Metadata = {
  title: IUD_META.title,
  description: IUD_META.description,
  alternates: { canonical: IUD_META.canonical },
};

/** Local right-arrow glyph, matching source markup. */
function Arrow({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
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
  );
}

export default function IudPage() {
  const schema = buildIudSchema();
  const allPractitioners = getAllPractitioners();

  // Filter to just the IUD-providing practitioners in source order.
  const practitionerBySlug = new Map(
    allPractitioners.map((p) => [p.slug, p])
  );
  const iudPractitioners = IUD_PRACTITIONERS.map((row) => {
    const p = practitionerBySlug.get(row.slug);
    return p ? { ...row, practitioner: p } : null;
  }).filter((x): x is NonNullable<typeof x> => x !== null);

  const leftCol = iudPractitioners.filter((r) => r.column === "left");
  const rightCol = iudPractitioners.filter((r) => r.column === "right");

  return (
    <div className="theme-aurora iud-page">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              {
                label: "Aurora Women & Babies Health",
                href: routes.subBrand("aurora"),
              },
              { label: "Hormonal IUD and contraceptive implant" },
            ]}
          />
        </div>
      </div>

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden blush-wash">
        <div
          className="paper-noise absolute inset-0 opacity-50 pointer-events-none"
          aria-hidden="true"
        />

        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#B77F73" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* LEFT · text */}
            <div className="md:col-span-7">
              <Link
                href={routes.subBrand("aurora")}
                className="brand-chip"
              >
                <span className="dot" />
                Aurora Service · Contraception
              </Link>

              <h1 className="font-display h-service max-w-[18ch] mt-6">
                Hormonal IUD and{" "}
                <span className="italic font-display-warm">
                  contraceptive implant.
                </span>
              </h1>

              <p className="mt-7 lede max-w-[54ch] text-ink-2">
                Long-acting contraception you can plan your life around, rather
                than the other way around. Both options are inserted and
                removed here at Aurora, by GPs who do them regularly.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book insertion or removal
                  <Arrow />
                </a>
                <a href="#options" className="btn-outline">
                  Compare the two options
                  <Arrow />
                </a>
              </div>

              {/* Micro-stats */}
              <div className="mt-10 grid grid-cols-2 gap-6 md:gap-8 max-w-[420px]">
                <div className="border-t border-black/15 pt-4">
                  <div
                    className="font-display text-[26px] md:text-[30px] leading-none"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                  >
                    3-8 yrs
                  </div>
                  <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                    Long-acting cover
                  </div>
                </div>
                <div className="border-t border-black/15 pt-4">
                  <div
                    className="font-display text-[26px] md:text-[30px] leading-none"
                    style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
                  >
                    3
                  </div>
                  <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
                    Clinics for insertion
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT · glance card */}
            <div className="md:col-span-5">
              <div className="glance-card">
                <div className="g-eyebrow">At a glance</div>
                <div className="g-title">What this service covers.</div>

                {GLANCE_ROWS.map((row) => (
                  <div key={row.label} className="glance-row">
                    <div className="g-label">{row.label}</div>
                    <div className="g-val">{row.value}</div>
                  </div>
                ))}

                <div className="g-foot">
                  <span className="dot" />
                  <span>Bulk-billed consult for eligible patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section id="about" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/website-images/iud-about-bg.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
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
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-cream/70">About the service</span>
              <h2 className="font-display h-section mt-3 max-w-[15ch]">
                One decision,{" "}
                <span
                  className="italic font-display-warm"
                  style={{ color: "var(--blush)" }}
                >
                  years of quiet cover.
                </span>
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  "Fully reversible",
                  "Nothing to remember daily",
                  "Same GP for consult and procedure",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 text-[13.5px] text-cream/90"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--blush)" }}
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch] text-cream/90">
              <p>
                Contraception decisions are personal, and the right answer
                tends to change over time. What suited you at nineteen may not
                suit you at thirty-two, and what suited you as a new parent
                trying to catch up on sleep may not suit you five years later.
              </p>
              <p>
                Long-acting reversible contraception, LARC for short, gives you
                a form of birth control that works quietly in the background,
                without a daily routine to remember. Both the hormonal IUD and
                the contraceptive implant sit in the LARC category. They&apos;re
                two of the most effective options available, they&apos;re both
                fully reversible, and both can be started, checked and removed
                with your GP.
              </p>
              <p>
                What&apos;s different between them is where they go, how long
                they last, and how they interact with your cycle. Aurora is our
                women&apos;s health team, and IUD and implant procedures are
                one of the things we do most often. If you&apos;ve been
                thinking about a switch, or considering LARC for the first
                time, we&apos;d rather you came in and asked than tried to
                figure it out on your own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== OPTIONS COMPARISON ==================== */}
      <section id="options" className="relative blush-band">
        <div
          className="paper-noise absolute inset-0 opacity-25 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Your two options</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Two effective forms of{" "}
                <span className="italic font-display-warm">
                  reversible contraception.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Same idea, different shape and location. Your GP will walk
              through which one is likely to suit you, and neither is a
              permanent decision.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {COMPARE_CARDS.map((card) => (
              <div key={card.title} className="compare-card">
                <div className="cc-mark">{card.mark}</div>
                <div className="cc-title">{card.title}</div>
                <div className="cc-sub">{card.sub}</div>
                <ul className="list-none p-0">
                  {card.rows.map((r) => (
                    <li key={r.label} className="cc-row">
                      <div className="cc-label">{r.label}</div>
                      <div className="cc-val">{r.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[13.5px] text-ink-3 max-w-[70ch] leading-relaxed">
            This page describes categories of long-acting reversible
            contraception rather than any specific brand or medicine. Your GP
            will discuss the exact device and product options with you at your
            consultation, and provide the relevant consumer medicine
            information.
          </p>
        </div>
      </section>

      {/* ==================== WHAT TO EXPECT ==================== */}
      <section id="expect" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">What to expect</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                From decision{" "}
                <span className="italic font-display-warm">to procedure.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              A short walk-through of what happens before, during and after
              your appointment, so nothing about the process is a surprise.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <figure className="rounded-[24px] overflow-hidden h-[220px] md:h-[320px] mb-10 md:mb-14 relative">
            <Image
              src="/website-images/iud-what-to-expect.webp"
              alt="A GP in conversation with a patient during a women's health consultation"
              fill
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </figure>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {EXPECT_STEPS.map((step) => (
              <div key={step.num} className="step-card">
                <div className="st-num">{step.num}</div>
                <div className="st-title">{step.title}</div>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHERE OFFERED ==================== */}
      <section id="locations" className="relative bg-cream-2">
        <div
          className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Where it&apos;s offered</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Insertion and removal,{" "}
                <span className="italic font-display-warm">
                  across all three centres.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Insertion and removal are available at each of our three
              locations.
            </div>
          </div>

          <div className="hairline w-full" />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-10">
            {WHERE_CARDS.map((card) => {
              const clinic = CLINICS[card.clinic];
              const suburbCode = clinic.suburbLine.match(/\d{4}/)?.[0];
              const image =
                card.clinic === "sanssouci"
                  ? "/website-images/san-souci.webp"
                  : `/website-images/${clinic.slug.split("-")[0]}.webp`;

              return (
                <article key={card.clinic} className="iud-loc-card">
                  <div className="lc-photo">
                    <Image
                      src={image}
                      alt={`${clinic.label} exterior`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="lc-tag">
                      <span className="dot" />
                      {clinic.shortLabel}
                      {suburbCode ? ` · ${suburbCode}` : ""}
                    </span>
                  </div>
                  <div className="lc-body">
                    <h3
                      className="font-display text-[24px] leading-[1.1]"
                      style={{
                        fontVariationSettings: "'SOFT' 100,'opsz' 60",
                      }}
                    >
                      {clinic.label}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.badges.map((b) => (
                        <span key={b} className="lc-badge">
                          {b}
                        </span>
                      ))}
                    </div>
                    <p className="mt-5 text-[14.5px] text-ink-2 leading-relaxed">
                      {card.body}
                    </p>
                    <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
                      <Link
                        href={routes.location(card.clinic)}
                        className="btn-ghost text-[14px]"
                      >
                        About {clinic.shortLabel}
                        <Arrow />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== PRACTITIONERS ==================== */}
      <section id="team" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">
                Who does the procedure
              </span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                GPs who do this{" "}
                <span className="italic font-display-warm">
                  regularly, not occasionally.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Insertion and removal are performed by the same GP you consult
              with, part of our Aurora team.
            </div>
          </div>

          <div className="hairline w-full mb-4" />

          <div className="grid md:grid-cols-2 gap-x-16">
            {[leftCol, rightCol].map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((row) => {
                  const p = row.practitioner;
                  const initials = p.identity.full_name
                    .split(" ")
                    .filter((w) => !w.match(/^(Dr|Adj|Prof|A\/Prof|Ms|Mr|Mrs)$/i))
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase();
                  const isPlaceholder = p.portrait.is_placeholder;
                  const portraitSrc = isPlaceholder
                    ? /^he\b/.test((p.identity.pronouns ?? "").toLowerCase())
                      ? "/website-images/practitioner-images/placeholder-male.webp"
                      : "/website-images/practitioner-images/placeholder-female.webp"
                    : `/website-images/practitioner-images/${p.portrait.src.split("/").pop()}`;

                  return (
                    <Link
                      key={p.slug}
                      href={routes.practitioner(p.slug)}
                      className="prac-row group"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div
                          className={`p-avatar${
                            isPlaceholder ? " placeholder" : ""
                          }`}
                        >
                          {portraitSrc ? (
                            <Image
                              src={portraitSrc}
                              alt={p.identity.full_name}
                              width={54}
                              height={54}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            initials
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="name">{p.identity.full_name}</div>
                          <div className="role">{row.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <span className="loc">{row.loc}</span>
                        <Arrow className="go" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href={`${routes.subBrand("aurora")}#team`}
              className="link-editorial text-[14px]"
            >
              See the full Aurora team
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FEES ==================== */}
      <section id="fees" className="relative bg-cream-2">
        <div
          className="paper-noise absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">Fees and billing</span>
              <h2 className="font-display h-section mt-3 max-w-[15ch]">
                Straightforward,{" "}
                <span className="italic font-display-warm">
                  Medicare-friendly.
                </span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                For eligible patients, the initial consultation is bulk-billed.
                The procedure itself is privately billed, with a Medicare
                rebate applying to eligible items.
              </p>
            </div>
            <div className="md:col-span-8">
              {FEE_ROWS.map((row) => (
                <div key={row.label} className="iud-fee-row">
                  <div>
                    <div className="f-label">{row.label}</div>
                    <div className="f-desc">{row.desc}</div>
                  </div>
                  <div className="f-val">{row.val}</div>
                </div>
              ))}

              <p className="mt-8 text-[15px] text-ink-2 leading-relaxed max-w-[70ch]">
                The exact fee and gap payment depend on the clinician you see
                and the specific procedure booked, since each of our GPs sets
                their own billing arrangement as an independent practitioner.
                The device itself is available on the PBS for most patients,
                with the standard PBS co-payment applying separately.
                Individual billing details are on each clinician&apos;s profile
                page, and reception confirms the specific fee and expected
                out-of-pocket when you book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">FAQ</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                The questions{" "}
                <span className="italic font-display-warm">
                  we hear most.
                </span>
              </h2>
              <p className="mt-6 text-[15px] text-ink-2 leading-relaxed max-w-[38ch]">
                If your question isn&apos;t here, our reception team is a good
                first stop, and your GP will walk through the specifics at
                your consultation.
              </p>
              <figure className="mt-8 rounded-[20px] overflow-hidden h-[200px] md:h-[240px] max-w-[420px] relative">
                <Image
                  src="/website-images/iud-faq.webp"
                  alt="Illustration of long-acting reversible contraception options"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover"
                />
              </figure>
            </div>

            <div className="md:col-span-8">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.q}
                  className="faq-item"
                  {...(item.open ? { open: true } : {})}
                >
                  <summary>
                    {item.q}
                    <span className="chev">
                      <Chevron />
                    </span>
                  </summary>
                  <div className="faq-body">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BOOK CTA BAND ==================== */}
      <section id="book" className="relative footer-wash">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-24">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <span
                className="allcaps"
                style={{ color: "rgba(245,238,224,0.6)" }}
              >
                Book with Aurora
              </span>
              <h2
                className="font-display mt-3 text-cream"
                style={{
                  fontSize: "clamp(2rem,4vw,3.2rem)",
                  lineHeight: 1.05,
                  fontVariationSettings: "'SOFT' 100,'opsz' 144",
                }}
              >
                Ready to{" "}
                <span className="italic font-display-warm">book?</span>
              </h2>
              <p className="mt-6 body-lg text-cream/85 max-w-[50ch]">
                Choose the centre closest to you. If you&apos;re booking an
                insertion at Sans Souci, reception will move you across to
                Earlwood or Bangor with a doctor who does the procedure.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="space-y-3">
                {clinicList.map((clinic) => {
                  const key = clinic.key as ClinicKey;
                  return (
                    <a
                      key={key}
                      href={BOOK_URLS[key]}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-cream/6 border border-cream/25 hover:bg-cream/10 hover:border-cream/50 transition group"
                    >
                      <div>
                        <div
                          className="font-display text-[19px] text-cream"
                          style={{
                            fontVariationSettings: "'SOFT' 100,'opsz' 30",
                          }}
                        >
                          {clinic.label}
                        </div>
                        <div className="text-cream/70 text-[13px] mt-0.5">
                          {BOOK_SUB[key]}
                        </div>
                      </div>
                      <Arrow className="arrow text-cream/80" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RELATED ==================== */}
      <section className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-12">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Related</span>
              <h2 className="font-display h-section mt-3 max-w-[24ch]">
                Read on{" "}
                <span className="italic font-display-warm">to go deeper.</span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              A few pages our contraception patients most often move to from
              here.
            </div>
          </div>

          <div className="hairline w-full mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                href: routes.subBrand("aurora"),
                eyebrow: "Sub-brand",
                title: "Aurora Women & Babies Health",
                body: "The whole women's health team, from your first period through menopause.",
                dot: SUB_BRANDS.aurora.dotColor,
              },
              {
                href: "/cervical-screening/",
                eyebrow: "Service",
                title: "Cervical screening",
                body: "What to expect at your first cervical screening, from the doctors who do them.",
                dot: SUB_BRANDS.aurora.dotColor,
              },
              {
                href: routes.practitioner("dr-tao-geng"),
                eyebrow: "Practitioner",
                title: "Dr Tao Geng",
                body: "Aurora GP based at Earlwood and Bangor, IUD-experienced.",
                dot: SUB_BRANDS.aurora.dotColor,
              },
              {
                href: "/menopause-support/",
                eyebrow: "Service",
                title: "Menopause support",
                body: "Perimenopause and menopause care from doctors who specialise in it.",
                dot: SUB_BRANDS.aurora.dotColor,
              },
            ].map((r) => (
              <Link key={r.title} href={r.href} className="iud-loc-card">
                <div className="lc-body">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: r.dot }}
                    />
                    <span className="allcaps text-ink-3">{r.eyebrow}</span>
                  </div>
                  <h3
                    className="font-display text-[22px] leading-[1.15]"
                    style={{
                      fontVariationSettings: "'SOFT' 100,'opsz' 40",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink-2">{r.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]}
      />
    </div>
  );
}
