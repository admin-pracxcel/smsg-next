"use client";

/**
 * TeamFilterBar · client-side filter for team directory pages (GP, Specialists,
 * Allied Health). Two dropdowns (Centre + Language), a visible-count readout,
 * and a Reset button. Ported from /team/general-practitioners/index.html.
 *
 * Filtering is state-driven (no DOM data-attribute juggling): the component
 * owns the roster, computes the visible slice per render, and hands it to
 * PractitionerCard.
 */

import { useMemo, useState } from "react";
import { PractitionerCard } from "./PractitionerCard";
import { CLINICS, type ClinicKey, CLINIC_KEYS } from "@/lib/clinics";
import type { Practitioner } from "@/lib/schemas/practitioner";

type ClinicFilterValue = "all" | ClinicKey;

export interface TeamFilterBarProps {
  practitioners: Practitioner[];
  /** aria-label for the filter-bar region, e.g. "Filter general practitioners". */
  ariaLabel: string;
  /** Singular noun for the count line, e.g. "practitioner" or "allied health practitioner". */
  singular: string;
  /** Optional plural override (defaults to singular + 's'). */
  plural?: string;
  /** Grid classes applied to the cards container. */
  gridClassName?: string;
  /** Passed through to PractitionerCard. */
  showBrandPills?: boolean;
}

export function TeamFilterBar({
  practitioners,
  ariaLabel,
  singular,
  plural,
  gridClassName = "gp-grid mt-8",
  showBrandPills = false,
}: TeamFilterBarProps) {
  const [clinic, setClinic] = useState<ClinicFilterValue>("all");
  const [lang, setLang] = useState<string>("all");

  const total = practitioners.length;
  const pluralWord = plural ?? `${singular}s`;

  const availableLanguages = useMemo(() => {
    const set = new Set<string>();
    practitioners.forEach((p) => p.languages.forEach((l) => set.add(l)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [practitioners]);

  const visible = useMemo(() => {
    return practitioners.filter((p) => {
      const okClinic = clinic === "all" || p.clinics.consulting_at.includes(clinic);
      const okLang =
        lang === "all" ||
        p.languages.some((l) => l.toLowerCase() === lang.toLowerCase());
      return okClinic && okLang;
    });
  }, [practitioners, clinic, lang]);

  const anyActive = clinic !== "all" || lang !== "all";
  const nounForCount = visible.length === 1 ? singular : pluralWord;

  return (
    <>
      <div
        className="filter-bar"
        role="region"
        aria-label={ariaLabel}
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          <div>
            <label className="filter-group-label" htmlFor="filter-clinic">
              Centre
            </label>
            <div className="filter-select-wrap">
              <select
                id="filter-clinic"
                className={`filter-select${clinic !== "all" ? " is-set" : ""}`}
                value={clinic}
                onChange={(e) => setClinic(e.target.value as ClinicFilterValue)}
              >
                <option value="all">All centres</option>
                {CLINIC_KEYS.map((key) => (
                  <option key={key} value={key}>
                    {CLINICS[key].shortLabel}
                  </option>
                ))}
              </select>
              <ChevIcon />
            </div>
          </div>
          <div>
            <label className="filter-group-label" htmlFor="filter-lang">
              Language
            </label>
            <div className="filter-select-wrap">
              <select
                id="filter-lang"
                className={`filter-select${lang !== "all" ? " is-set" : ""}`}
                value={lang}
                onChange={(e) => setLang(e.target.value)}
              >
                <option value="all">All languages</option>
                {availableLanguages.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
              <ChevIcon />
            </div>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
          <div className="filter-count">
            <span>{visible.length}</span> of {total} {nounForCount} shown
          </div>
          <button
            type="button"
            className="filter-reset"
            disabled={!anyActive}
            onClick={() => {
              setClinic("all");
              setLang("all");
            }}
          >
            Reset filters
          </button>
        </div>
      </div>

      <div className={gridClassName}>
        {visible.map((p) => (
          <PractitionerCard
            key={p.slug}
            practitioner={p}
            showBrandPills={showBrandPills}
          />
        ))}
      </div>

      {visible.length === 0 && (
        <div className="mt-8 text-center text-ink-3 text-[14px]">
          No {pluralWord} match this filter. Try{" "}
          <button
            type="button"
            className="underline underline-offset-4 hover:text-terra"
            onClick={() => {
              setClinic("all");
              setLang("all");
            }}
          >
            resetting the filters
          </button>
          .
        </div>
      )}
    </>
  );
}

function ChevIcon() {
  return (
    <svg
      className="filter-select-chev"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 4.5l3 3 3-3"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
