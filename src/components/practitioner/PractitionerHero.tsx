/**
 * PractitionerHero · portrait, name/lede, awards, primary CTAs,
 * hero at-a-glance strip and cross-brand pills row.
 *
 * Structure ported verbatim from the approved Dr Tao Geng template
 * (dr-tao-geng/index.html lines 1375-1481). Data comes from the
 * validated Practitioner JSON so any of the 65 practitioner pages
 * can reuse the same component in Phase 5.
 */

import Link from "next/link";
import type { Practitioner } from "@/lib/schemas/practitioner";
import { CLINICS, type ClinicKey } from "@/lib/clinics";
import { external } from "@/lib/routes";

function ArrowRight({ className = "arrow" }: { className?: string }) {
  return (
    <svg
      className={className}
      width={14}
      height={14}
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

function StarIcon() {
  return (
    <svg width={10} height={10} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.5 5.5 6 .8-4.4 4.2 1.1 6-5.2-2.9-5.2 2.9 1.1-6L3.5 8.3l6-.8L12 2z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg width={10} height={10} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 3h12v6a6 6 0 11-12 0V3z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path
        d="M9 21h6M12 15v6"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M6 5h-2v3a3 3 0 003 3M18 5h2v3a3 3 0 01-3 3"
        stroke="currentColor"
        strokeWidth={1.8}
      />
    </svg>
  );
}

/** Split "SMSG Doctor of the Year Awardee 2018" into label + year pill parts. */
function parseAward(raw: string): { label: string; year: string | null; isYear: boolean } {
  const match = raw.match(/^(.*?)(?:\s*[·-])?\s*(\d{4})\s*$/);
  if (match) {
    return {
      label: match[1].replace(/\s+Awardee$/i, "").trim(),
      year: match[2],
      isYear: /of the Year/i.test(match[1]),
    };
  }
  return { label: raw, year: null, isYear: /of the Year/i.test(raw) };
}

function firstName(fullName: string): string {
  // "Dr Tao Geng" -> "Tao"; "Dr Tao" -> "Tao"; adjusts for two-word first names naively.
  const parts = fullName.split(/\s+/);
  if (parts[0] === "Dr" || parts[0] === "Adj" || parts[0] === "Prof") {
    return parts.slice(1, -1).join(" ") || parts[1] || "";
  }
  return parts.slice(0, -1).join(" ") || parts[0];
}

function lastName(fullName: string): string {
  const parts = fullName.split(/\s+/);
  return parts[parts.length - 1] ?? "";
}

function formatConsultingAt(p: Practitioner): string {
  const combined = p.clinics.consulting_days.combined;
  return p.clinics.consulting_at
    .map((k) => {
      // Prefer per-clinic days; fall back to combined when the source data
      // uses one shared day list across all clinics.
      const days = p.clinics.consulting_days[k] ?? combined ?? null;
      const shortLabel = CLINICS[k].shortLabel;
      const daysShort = days ? shortenDays(days) : null;
      return daysShort ? `${shortLabel} (${daysShort})` : shortLabel;
    })
    .join(" · ");
}

/**
 * Abbreviate day names inside a free-form day string, matching the source's
 * "Mon-Fri", "Mon & Thu", "Tue, alt Thu, Fri" conventions. Handles:
 *   - comma separators: "Monday, Thursday"
 *   - dash ranges: "Monday-Friday", "Tue-Sat"
 *   - ampersand joins: "Monday & Thursday", "Monday &amp; Thursday"
 *   - "alt" prefixes: "alt Thursday" -> "alt Thu"
 * Also decodes literal &amp; entities that leak from source HTML.
 */
function shortenDays(days: string): string {
  const map: Record<string, string> = {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  };
  // Decode entities and normalise ampersand text
  let s = days.replace(/&amp;/g, "&");
  // Abbreviate singular day names only. Source leaves the pluralised form
  // ("Tuesdays", "Wednesdays") unabbreviated so we preserve it too.
  for (const [full, short] of Object.entries(map)) {
    // Negative lookahead prevents matching "Mondays" as "Monday"+"s".
    s = s.replace(new RegExp(`\\b${full}\\b(?!s)`, "g"), short);
  }
  return s;
}

function ctaSummary(p: Practitioner): string {
  const clinics = p.clinics.consulting_at.map((k) => CLINICS[k].shortLabel);
  if (clinics.length === 0) return "";
  if (clinics.length === 1) return `Consulting weekly at ${clinics[0]}`;
  if (clinics.length === 2) return `Consulting weekly at ${clinics[0]} and ${clinics[1]}`;
  return `Consulting weekly at ${clinics.slice(0, -1).join(", ")} and ${clinics[clinics.length - 1]}`;
}

export function PractitionerHero({ practitioner: p }: { practitioner: Practitioner }) {
  const fn = firstName(p.identity.full_name);
  const ln = lastName(p.identity.full_name);
  const eyebrow =
    p.credentials.post_nominal_dotted || p.credentials.post_nominal
      ? `${p.credentials.practitioner_type} · ${p.credentials.post_nominal_dotted ?? p.credentials.post_nominal}`
      : p.credentials.practitioner_type;

  return (
    <section className="relative overflow-hidden">
      <div className="paper-noise absolute inset-0 opacity-70 pointer-events-none"></div>
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 pt-10 md:pt-14 pb-12 md:pb-16 relative">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Portrait */}
          <div className="md:col-span-3">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-blush/15 -z-10 hidden md:block"></div>
              <div className="rounded-[20px] overflow-hidden border border-black/10 shadow-[0_30px_60px_-40px_rgba(154,47,82,0.35)] bg-cream-paper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    p.portrait.is_placeholder
                      ? /^he\b/.test((p.identity.pronouns ?? "").toLowerCase())
                        ? "/website-images/practitioner-images/placeholder-male.webp"
                        : "/website-images/practitioner-images/placeholder-female.webp"
                      : `/website-images/practitioner-images/${p.portrait.src.split("/").pop()}`
                  }
                  alt={p.portrait.alt}
                  className="block w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-ink-3 text-[12.5px]">
                <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block"></span>
                <span>{ctaSummary(p)}</span>
              </div>
            </div>
          </div>

          {/* Name, lede, awards, CTAs */}
          <div className="md:col-span-9">
            <div className="flex items-center gap-3 mb-3">
              <span className="hairline-soft w-10 h-px"></span>
              <span className="allcaps text-ink-3">{eyebrow}</span>
            </div>

            <h1 className="font-display h-name">
              {p.identity.salutation ? `${p.identity.salutation} ` : ""}
              {fn} <span className="italic font-display-warm">{ln}</span>
            </h1>

            <p className="lede mt-6 text-ink-2">{p.hero.lede}</p>

            {p.awards.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.awards.map((a) => {
                  const { label, year, isYear } = parseAward(a);
                  return (
                    <li
                      key={a}
                      className="inline-flex items-center gap-2 rounded-full pl-1.5 pr-3 py-1 border"
                      style={{
                        background: "color-mix(in oklab, var(--brand) 7%, var(--paper))",
                        borderColor: "color-mix(in oklab, var(--brand) 20%, transparent)",
                      }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background:
                            "color-mix(in oklab, var(--brand) 18%, var(--paper))",
                          color: "var(--brand)",
                        }}
                      >
                        {isYear ? <StarIcon /> : <TrophyIcon />}
                      </span>
                      <span
                        className="font-display text-[12.5px] text-ink"
                        style={{ fontVariationSettings: "'SOFT' 100, 'opsz' 24" }}
                      >
                        {label}
                        {year && <span className="text-ink-3"> · {year}</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {p.hero.ctas.length > 0
                ? p.hero.ctas.map((cta) => (
                    <a
                      key={cta.clinic}
                      href={cta.href}
                      className={
                        cta.style === "primary" ? "btn-primary" : "btn-outline"
                      }
                      target="_blank"
                      rel="noopener"
                    >
                      {cta.label}
                      <ArrowRight />
                    </a>
                  ))
                : p.booking.phone_fallback && (
                    <a
                      href={`tel:${p.booking.phone_fallback.phone.replace(/\s/g, "")}`}
                      className="btn-primary"
                    >
                      Call {p.booking.phone_fallback.clinic_label.replace(
                        / Medical Centre$| Doctors$/,
                        "",
                      )}{" "}
                      · {p.booking.phone_fallback.phone}
                      <ArrowRight />
                    </a>
                  )}
            </div>
          </div>
        </div>

        {/* AT A GLANCE */}
        <div className="mt-10 md:mt-12 pt-7 border-t border-black/10">
          <div className="hero-glance">
            {p.credentials.ahpra && (
              <div>
                <div className="hg-label">AHPRA registration</div>
                <div className="hg-value">{p.credentials.ahpra}</div>
                <div className="ahpra-verify text-[11px] text-ink-3 mt-1">
                  <svg
                    className="inline-block mr-1 align-[-2px]"
                    width={11}
                    height={11}
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth={1.2}
                      strokeLinecap="round"
                    />
                  </svg>
                  Verifiable via the{" "}
                  <a
                    href="https://www.ahpra.gov.au/registration/registers-of-practitioners.aspx"
                    target="_blank"
                    rel="noopener"
                    className="link-editorial text-[11px]"
                  >
                    AHPRA public register
                  </a>
                  .
                </div>
              </div>
            )}
            {(p.credentials.post_nominal_dotted || p.credentials.post_nominal) && (
              <div>
                <div className="hg-label">Qualifications</div>
                <div className="hg-value">
                  {p.credentials.post_nominal_dotted ?? p.credentials.post_nominal}
                </div>
              </div>
            )}
            {p.languages.length > 0 && (
              <div>
                <div className="hg-label">Languages</div>
                <div className="hg-value">{p.languages.join(" · ")}</div>
              </div>
            )}
            {p.clinics.consulting_at.length > 0 && (
              <div>
                <div className="hg-label">Consulting at</div>
                <div className="hg-value">{formatConsultingAt(p)}</div>
              </div>
            )}
          </div>
        </div>

        {/* Cross-brand pills */}
        {p.cross_brand_pills.length > 0 && (
          <div className="mt-10 md:mt-14 pt-7 border-t border-black/10">
            <div className="flex items-center gap-3 mb-4">
              <span className="allcaps text-ink-3">Also works within</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {p.cross_brand_pills.map((pill) => {
                // Convert "../aurora-women-and-babies-health/" -> "/aurora-women-and-babies-health/"
                const href = pill.href.startsWith("../")
                  ? "/" + pill.href.slice(3)
                  : pill.href;
                return (
                  <Link key={pill.label} href={href} className="brand-pill">
                    <span
                      className="brand-dot"
                      style={{ background: pill.dot_color }}
                    ></span>
                    {pill.label}
                    <ArrowRight className="b-arrow" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/** Re-exported convenience: computes the primary Automed doctor URL for a clinic. */
export function primaryAutomedUrl(p: Practitioner, clinic: ClinicKey): string {
  return external.automedDoctor(clinic, p.slug);
}
