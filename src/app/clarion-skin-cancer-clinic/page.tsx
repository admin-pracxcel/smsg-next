import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { routes, external } from "@/lib/routes";
import { CLINICS, clinicList } from "@/lib/clinics";
import { SUB_BRANDS } from "@/lib/sub-brands";
import { getAllPractitioners } from "@/lib/content";
import type { Practitioner } from "@/lib/schemas/practitioner";
import { SubBrandCareAreas, type CareTile } from "@/components/sub-brand/SubBrandCareAreas";
import { SubBrandLocations } from "@/components/sub-brand/SubBrandLocations";
import { SubBrandRelatedPages } from "@/components/sub-brand/SubBrandRelatedPages";
import { buildClarionSchema } from "./schema";

export const metadata: Metadata = {
  title:
    "Clarion Skin Cancer Clinic | Full-Body Skin Checks, Dermoscopy and Excision at SMSG",
  description:
    "Skin checks, dermoscopy and excision procedures delivered by independent GPs with dedicated skin cancer medicine training. Clarion Skin Cancer Clinic operates across Earlwood, Bangor and Sans Souci.",
};

const tiles: CareTile[] = [
  {
    num: "01",
    title: "Full-Body Skin Checks",
    body: "A structured, head-to-toe examination of the skin using both direct visual inspection and dermoscopy on any lesion that warrants closer review. Includes an assessment of moles that are new or changing, spots you've noticed and want examined, and areas of higher risk based on skin type and history. For patients returning for annual or half-yearly reviews, findings are recorded against previous visits so change over time is visible in the record.",
    cta: "Full-Body Skin Checks",
    href: "/full-body-skin-checks/",
  },
  {
    num: "02",
    title: "Dermoscopy",
    body: "Every lesion that warrants closer examination is reviewed under dermoscopy. Dermoscopy allows structures below the surface of the skin to be assessed at magnification, which is what allows Clarion clinicians to distinguish between lesions that need excision, lesions that need monitoring, and lesions that are benign.",
    cta: "Dermoscopy",
    href: "/dermoscopy/",
  },
  {
    num: "03",
    title: "Excision Procedures",
    body: "Where a lesion needs to be removed, Clarion clinicians perform the excision on-site with local anaesthetic and closure. Excisions are booked as a separate procedural appointment after the initial skin check that flagged the lesion. The removed tissue is sent to pathology for confirmation of diagnosis. Where the excision is complex or the location is sensitive, Dr Moore's plastic surgery affiliation supports coordinated closure or onward referral.",
    cta: "Excision Procedures",
    href: "/excision-procedures/",
  },
  {
    num: "04",
    title: "Skin Cancer Awareness",
    body: "Clarion invests in patient education because early detection changes clinical outcomes considerably. During each skin check, the clinician talks through what to look out for between appointments, how to check your own skin, and when to book back in earlier than the scheduled review.",
    cta: "Skin Cancer Awareness",
    href: "/skin-cancer-awareness/",
  },
];

function metaLine(p: Practitioner): string {
  const parts: string[] = [];
  if (p.credentials.role_title) parts.push(p.credentials.role_title);
  if (p.credentials.post_nominal) parts.push(p.credentials.post_nominal);
  if (p.languages.length) parts.push(p.languages.join(", "));
  return parts.join(" · ");
}

function locationLine(p: Practitioner): string {
  return p.clinics.consulting_at.map((k) => CLINICS[k].shortLabel).join(" · ");
}

const CTA_SUB = {
  earlwood: "Largest Clarion team · Saturday appointments",
  bangor: "Shire skin cancer team · Dr Geng and Dr Colwell (extended)",
  sanssouci: "Dr Moore's Melanoma Institute of Australia link",
} as const;

export default function ClarionHubPage() {
  const schema = buildClarionSchema();
  const roster = getAllPractitioners().filter((p) =>
    p.sub_brands.some((s) => s.key === "clarion")
  );

  return (
    <div className="theme-clarion">
      <div className="border-b border-black/10 bg-cream-2/60">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-4">
          <Breadcrumb
            items={[
              { label: "SMSG", href: routes.home() },
              { label: "Care", href: `${routes.home()}#care` },
              { label: "Clarion Skin Cancer Clinic" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden moss-wash">
        <div className="paper-noise absolute inset-0 opacity-50 pointer-events-none" aria-hidden="true" />
        <svg
          className="absolute -left-32 -bottom-32 w-[440px] opacity-25 pointer-events-none hidden md:block"
          viewBox="0 0 500 500"
          aria-hidden="true"
        >
          <g stroke="#4E6B3F" strokeWidth="0.6" fill="none">
            <circle cx="250" cy="250" r="240" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="120" />
          </g>
        </svg>

        <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <span className="brand-chip">
                <span className="dot" />
                SMSG Sub-brand · Skin Cancer Medicine
              </span>

              <h1 className="font-display h-brand max-w-[16ch] mt-6">
                Clarion{" "}
                <span className="italic font-display-warm">
                  Skin Cancer Clinic.
                </span>
              </h1>

              <p className="mt-7 lede max-w-[52ch] text-ink-2">
                Skin checks, dermoscopy and excision procedures, with the
                training and referral network to escalate anything that
                warrants it.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="/patient-information/book-online/" className="btn-primary">
                  Book a skin check
                  <Arrow />
                </a>
                <a href="#team" className="btn-outline">
                  Meet the Clarion team
                  <Arrow />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 md:gap-8 max-w-[520px]">
                <Stat n="7" label="GPs with skin cancer training" />
                <Stat n="3" label="SMSG centres" />
                <Stat n="MIA" label="Melanoma Institute of Australia link" />
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="brand-plate">
                <span className="plate-corner">est. within SMSG</span>
                <Image
                  src="/website-images/Clarion Skin Cancer Clinic.webp"
                  alt="Clarion Skin Cancer Clinic brand logo"
                  className="plate-logo"
                  width={420}
                  height={320}
                  priority
                />
                <div className="plate-under">
                  <span>Skin cancer medicine</span>
                  <span className="sep" />
                  <span>Sydney</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="about" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <span className="allcaps text-ink-3">About Clarion</span>
              <h2 className="font-display h-section mt-3 max-w-[16ch]">
                Skin cancer,{" "}
                <span className="italic font-display-warm">taken seriously.</span>
              </h2>
              <div className="mt-8 space-y-3">
                <IntroBullet>
                  Seven GPs delivering skin cancer medicine across our centres
                </IntroBullet>
                <IntroBullet>Full excision service on-site</IntroBullet>
                <IntroBullet>
                  Direct clinical link to the Melanoma Institute of Australia
                </IntroBullet>
              </div>
            </div>
            <div className="md:col-span-8 body-editorial max-w-[62ch]">
              <p>
                Skin checks are one of those things people mean to do more
                often than they actually do. The check itself is not
                complicated. What matters is how carefully the clinician
                examines every lesion worth examining, how quickly a
                suspicious mole gets excised, and where a complex case goes
                when it needs plastic surgery input or specialist melanoma
                review.
              </p>
              <p>
                Clarion Skin Cancer Clinic is SMSG&apos;s dedicated skin cancer
                sub-brand. Five GPs form the formal Clarion team, delivering
                full-body skin checks, dermoscopy, and excision procedures
                across our three Sydney centres. Two further GPs from our
                Aurora Women &amp; Babies Health team perform skin cancer
                medicine at their home centres and complete our extended skin
                cancer network, bringing the group to seven clinicians in
                total. Dr Jonathan Moore holds a plastic surgery assisting
                rotation at the Melanoma Institute of Australia, which gives
                Clarion cases a direct clinical link into a tertiary melanoma
                service where warranted.
              </p>
              <p>
                Our Clarion clinicians work as independent practitioners. All
                operate within a shared clinical protocol so that a skin check
                done at Earlwood, Bangor or Sans Souci follows the same
                process and record structure. If you&apos;ve had skin checks
                with us before, your last visit is on file. If you&apos;re
                new, we start with a full baseline check.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SubBrandCareAreas
        bandClass="moss-band"
        eyebrow="Care areas"
        headingLead="Four"
        headingItalic="core services."
        supporting="Skin checks, dermoscopy, and excision on-site, with education woven through every visit."
        tiles={tiles}
        cols={4}
      />

      {/* TEAM */}
      <section id="team" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8">
              <span className="allcaps text-ink-3">Your Clarion team</span>
              <h2 className="font-display h-section mt-3 max-w-[26ch]">
                Seven GPs with{" "}
                <span className="italic font-display-warm">
                  dedicated skin cancer training.
                </span>
              </h2>
            </div>
            <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
              Five GPs make up the formal Clarion team, delivering skin cancer
              medicine from our supporting premises as independent
              practitioners. Alongside them, two Aurora Women &amp; Babies
              Health GPs perform skin cancer work at their home centres and
              complete our extended skin cancer network. Not sure who to see?
              Our reception team can help you match.
            </div>
          </div>

          <div className="hairline w-full mb-4" />
          <TeamGrid people={roster} />

          <div className="mt-8">
            <Link href={routes.teamGPs()} className="btn-ghost text-[14px]">
              See all SMSG general practitioners
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <SubBrandLocations
        subBrand="clarion"
        eyebrow="Where Clarion operates"
        headingLead="Clarion runs"
        headingItalic="across all three centres."
        supporting="The Clarion team's size and mix vary by location. Here's what's on offer where."
        bullets={{
          earlwood: [
            "Largest Clarion team: Dr Geng, Dr Mangahis, Dr Yuan, Dr Yun, plus Dr Nordkamp (extended)",
            "Excision procedures across all levels of complexity",
            "Saturday appointments available",
          ],
          bangor: [
            "Dr Tao Geng, plus Dr Colwell (extended)",
            "Skin checks and dermoscopy",
            "Excisions on-site, or referred to Earlwood for higher complexity",
          ],
          sanssouci: [
            "Dr Jonathan Moore, plus Dr Nordkamp (extended)",
            "Skin checks and dermoscopy",
            "Dr Moore's Melanoma Institute of Australia affiliation for cases warranting that clinical link",
          ],
        }}
      />

      {/* BOOKING */}
      <section id="book" className="relative">
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-6">
              <span className="allcaps text-ink-3">Booking with Clarion</span>
              <h2 className="font-display h-section mt-3 max-w-[22ch]">
                Every Clarion clinician is{" "}
                <span className="italic font-display-warm">bookable online.</span>
              </h2>

              <div className="body-editorial mt-8 max-w-[56ch]">
                <p>
                  When you book, you&apos;ll see each clinician&apos;s next
                  available appointments at the centres they cover. If
                  you&apos;re not sure where to start, our reception team can
                  help you match to the right clinician for what you&apos;re
                  looking for.
                </p>
              </div>

              <div className="mt-8 space-y-4 max-w-[52ch]">
                <BookingHint
                  eyebrow="If you're new to Clarion"
                  body="A first appointment is a full-body baseline check. Allow 30 minutes, and come without makeup on any areas you'd like reviewed."
                />
                <BookingHint
                  eyebrow="If you're returning for review"
                  body="Six-monthly or annual reviews are typically shorter appointments, comparing findings against your baseline. Reception can book you in with the same clinician you saw last time."
                />
                <BookingHint
                  eyebrow="If a lesion has already been flagged"
                  body="If your GP or one of our Clarion clinicians has flagged a lesion needing removal, the excision is booked as a separate procedural appointment. Reception will coordinate the timing."
                />
              </div>
            </div>

            <div className="md:col-span-6">
              <figure className="rounded-[20px] overflow-hidden h-[200px] md:h-[220px] mb-5 relative">
                <Image
                  src="/website-images/booking-with-aurora.webp"
                  alt="A hand next to a phone showing a calendar and a skin check appointment card"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
              <div className="grid gap-4">
                {clinicList.map((clinic) => (
                  <a
                    key={clinic.key}
                    href={clinic.automedBase}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center justify-between gap-4 rounded-[20px] border border-black/10 hover:border-ink/30 bg-paper px-6 py-5 transition"
                  >
                    <div>
                      <div className="allcaps text-ink-3">{clinic.shortLabel}</div>
                      <div
                        className="font-display text-[22px] mt-1"
                        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 40" }}
                      >
                        Book Clarion at {clinic.shortLabel}
                      </div>
                      <div className="text-[12.5px] text-ink-3 mt-1">
                        {CTA_SUB[clinic.key]}
                      </div>
                    </div>
                    <Arrow className="arrow shrink-0 text-ink-3" size={18} />
                  </a>
                ))}

                <div className="mt-2 text-[13px] text-ink-3 flex items-center gap-3">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>
                    New to SMSG?{" "}
                    <Link
                      href={routes.patientInfo("new-patient-registration")}
                      className="link-editorial text-[13px]"
                    >
                      Register first
                    </Link>{" "}
                    so your file is ready.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-cream-2">
        <div className="paper-noise absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />
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
                first stop.
              </p>
            </div>

            <div className="md:col-span-8">
              <Faq q="Do I need a referral for a skin check?" open>
                <p>
                  No. You don&apos;t need a referral to see a Clarion
                  clinician for a skin check.
                </p>
              </Faq>
              <Faq q="Is it bulk-billed?">
                <p>
                  Skin checks are private-billed with a Medicare rebate
                  applying to the consultation. The exact fee and out-of-pocket
                  vary by clinician and appointment length. For patients with
                  a Health Care Card or in specific circumstances, bulk-billing
                  may be available at the clinician&apos;s discretion.
                  Reception confirms fees at booking.
                </p>
                <p>
                  For our general fee structure across the group, see the{" "}
                  {/* TODO: link to /about/fees-and-billing/ when the page ships */}
                  <a href="/patient-information/book-online/" className="link-editorial">
                    Fees &amp; Billing page
                  </a>
                  .
                </p>
              </Faq>
              <Faq q="What happens if a lesion needs to be removed?">
                <p>
                  The excision is booked as a separate procedural appointment.
                  The removed tissue is sent to pathology for confirmation of
                  diagnosis. Where the excision is complex or the location is
                  sensitive, Dr Moore&apos;s Melanoma Institute of Australia
                  affiliation supports coordinated closure or onward referral
                  to a plastic surgeon or dermatologist.
                </p>
              </Faq>
              <Faq q="How often should I get a skin check?">
                <p>
                  It depends on your skin type, family history, personal
                  history of skin cancer, and previous findings. Your Clarion
                  clinician will recommend a review interval at your first
                  visit, and for most people this is annual or half-yearly.
                </p>
              </Faq>
              <Faq q="Can I get mole mapping?">
                <p>
                  Systematic full-body imaging alongside individual review is
                  discussed at your initial appointment and coordinated on a
                  case-by-case basis.
                </p>
              </Faq>
              <Faq q="Do I need to prepare for a skin check?">
                <p>
                  Come without makeup on any areas you&apos;d like reviewed,
                  remove nail polish if you have any concerns about nail beds,
                  and wear underwear you&apos;re comfortable being examined in.
                </p>
              </Faq>
              <Faq q="Which centre has the fastest appointment?">
                <p>
                  Earlwood typically has the deepest availability given the
                  size of the Clarion team there, though Bangor and Sans Souci
                  often have shorter waits mid-week. Reception can check across
                  the three when you call.
                </p>
              </Faq>
            </div>
          </div>
        </div>
      </section>

      <SubBrandRelatedPages
        subBrand="clarion"
        headingLead="Read on"
        headingItalic="to go deeper."
        supporting="A few pages that patients most often move to from Clarion."
        items={[
          {
            eyebrow: "Service",
            title: "Full-Body Skin Check",
            body: "What happens at the appointment itself and what to expect afterwards.",
            href: "#care",
          },
          {
            eyebrow: "Service",
            title: "Excision Procedures",
            body: "How on-site excision works, from booking through pathology.",
            href: "#care",
          },
          {
            eyebrow: "Location",
            title: "Earlwood Medical Centre",
            body: "The centre with the largest Clarion team.",
            href: routes.location("earlwood"),
          },
          {
            eyebrow: "Sub-brand",
            title: "Aurora Women & Babies Health",
            body: "Cross-booked women's health appointments where relevant.",
            href: routes.subBrand("aurora"),
            dotColor: SUB_BRANDS.aurora.dotColor,
          },
        ]}
      />

      <JsonLd data={schema as unknown as Parameters<typeof JsonLd>[0]["data"]} />
    </div>
  );
}

function Arrow({ className = "arrow", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
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

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-black/15 pt-4">
      <div
        className="font-display text-[26px] md:text-[30px] leading-none"
        style={{ fontVariationSettings: "'SOFT' 100,'opsz' 60" }}
      >
        {n}
      </div>
      <div className="text-[11.5px] text-ink-3 uppercase tracking-[0.14em] mt-2">
        {label}
      </div>
    </div>
  );
}

function IntroBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[13.5px] text-ink-2">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--clarion)" }} />
      {children}
    </div>
  );
}

function TeamGrid({ people, extended = false }: { people: Practitioner[]; extended?: boolean }) {
  return (
    <ul className="grid md:grid-cols-2 gap-x-14">
      {people.map((p) => (
        <li key={p.slug}>
          <Link href={routes.practitioner(p.slug)} className="team-row reveal">
            <div>
              <div className="name">
                {p.identity.full_name}
                {extended && (
                  <span className="ext-chip">
                    <span className="dot" />
                    Extended
                  </span>
                )}
              </div>
              <div className="role">{metaLine(p)}</div>
            </div>
            <div className="text-right">
              <div className="loc">{locationLine(p)}</div>
            </div>
            <svg className="go" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7h9M8 4l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function BookingHint({ eyebrow, body }: { eyebrow: string; body: string }) {
  return (
    <div className="rounded-[16px] border border-black/10 bg-paper p-5 flex items-start gap-4">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: "color-mix(in oklab, var(--clarion) 25%, var(--paper))",
          color: "var(--clarion-deep)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
      <div>
        <div className="allcaps text-ink-3">{eyebrow}</div>
        <div className="text-[14.5px] text-ink mt-1">{body}</div>
      </div>
    </div>
  );
}

function Faq({ q, children, open }: { q: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details className="faq-item" open={open}>
      <summary>
        {q}
        <span className="chev">
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
      <div className="faq-body">{children}</div>
    </details>
  );
}
