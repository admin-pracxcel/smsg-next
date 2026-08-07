"use client";

/**
 * PractitionerServices · booking accordion with clinic toggle.
 *
 * Ported from dr-tao-geng/index.html lines 1541-1883. Preserves three
 * behaviours from the static site:
 *   1. Clinic toggle (Earlwood / Bangor / Sans Souci as applicable) filters
 *      appointments to those with a URL for the active clinic.
 *   2. Category tiles are hidden entirely when no visible appointment
 *      remains for the active clinic.
 *   3. Visible tiles are redistributed across two independent flex columns
 *      on md+, so expanding one accordion never opens a gap next to it.
 *      A single tile falls back to one column.
 *
 * Accordion is exclusive (opening one closes the others).
 *
 * Data source: practitioner.booking.categories[]. Every URL comes from
 * category.appointments[].clinic_urls[clinic] verbatim, nothing constructed.
 */

import { useMemo, useState } from "react";
import type { Practitioner } from "@/lib/schemas/practitioner";
import { CLINICS, type ClinicKey } from "@/lib/clinics";

function ChevDown() {
  return (
    <svg
      className="bi-chev"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5l4 4 4-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      className="bi-link-arrow"
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

type VisibleAppointment = {
  key: string;
  displayName: string;
  tag: string | null;
  href: string;
};

type VisibleCategory = {
  categoryName: string;
  appointments: VisibleAppointment[];
};

/** Filter categories to only include appointments with a URL for the active clinic. */
function filterForClinic(
  categories: Practitioner["booking"]["categories"],
  clinic: ClinicKey
): VisibleCategory[] {
  return categories
    .map((cat) => {
      const appts: VisibleAppointment[] = [];
      cat.appointments.forEach((a, i) => {
        const url = a.clinic_urls[clinic];
        if (url) {
          appts.push({
            key: `${cat.category_name}-${a.display_name}-${i}`,
            displayName: a.display_name,
            tag: a.tag,
            href: url,
          });
        }
      });
      return { categoryName: cat.category_name, appointments: appts };
    })
    .filter((c) => c.appointments.length > 0);
}

/** Even split of visible tiles into two columns. Single tile stays in one. */
function splitIntoColumns<T>(items: T[]): [T[], T[] | null] {
  if (items.length <= 1) return [items, null];
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

/** Phone-only booking band — shown when the practitioner has no online booking. */
function PhoneOnlyBooking({ practitioner: p }: { practitioner: Practitioner }) {
  if (!p.booking.phone_fallback) return null;
  const { clinic_label, phone } = p.booking.phone_fallback;
  const telHref = `tel:${phone.replace(/\s/g, "")}`;
  return (
    <section id="services" className="relative overflow-hidden bg-cream-2">
      <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none"></div>
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-8">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Book by phone</span>
            <h2 className="font-display h-section mt-3 max-w-[26ch]">
              Bookings handled{" "}
              <span className="italic font-display-warm">by reception.</span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            {p.identity.short_ref} isn&apos;t on our online booking system.
            Call {clinic_label} and reception will match you with the next
            available appointment.
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href={telHref} className="btn-primary">
            Call {clinic_label} · {phone}
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export function PractitionerServices({ practitioner: p }: { practitioner: Practitioner }) {
  // Phone-only routing happens before any hooks so hook order stays consistent.
  if (p.booking.mode === "phone_only") {
    return <PhoneOnlyBooking practitioner={p} />;
  }

  const availableClinics = p.clinics.consulting_at;
  const defaultClinic: ClinicKey =
    p.booking.default_clinic && availableClinics.includes(p.booking.default_clinic)
      ? p.booking.default_clinic
      : availableClinics[0];

  const [activeClinic, setActiveClinic] = useState<ClinicKey>(defaultClinic);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const visible = useMemo(
    () => filterForClinic(p.booking.categories, activeClinic),
    [p.booking.categories, activeClinic]
  );

  const [col1, col2] = splitIntoColumns(visible);

  return (
    <section id="services" className="relative overflow-hidden bg-cream-2">
      <div className="paper-noise absolute inset-0 opacity-40 pointer-events-none"></div>
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-8">
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">Booking options</span>
            <h2 className="font-display h-section mt-3 max-w-[26ch]">
              Every appointment type,{" "}
              <span className="italic font-display-warm">bookable directly.</span>
            </h2>
          </div>
          <div className="md:col-span-4 body-lg text-ink-2 max-w-[42ch]">
            Choose the appointment type that fits your visit. Every link goes
            straight to Automed for {p.identity.short_ref}&apos;s next available
            slot at{" "}
            <span data-clinic-label>{CLINICS[activeClinic].shortLabel}</span>.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="allcaps text-ink-3 text-[10.5px]">Booking at</span>
          <div
            className="clinic-toggle"
            role="group"
            aria-label="Choose booking location"
            data-clinic-toggle
          >
            {availableClinics.map((c) => (
              <button
                key={c}
                type="button"
                data-clinic={c}
                aria-pressed={activeClinic === c}
                onClick={() => setActiveClinic(c)}
              >
                {CLINICS[c].shortLabel}
              </button>
            ))}
          </div>
        </div>

        <div className="booking-list mx-auto">
          <BookingColumn
            categories={col1}
            openKey={openKey}
            onToggle={setOpenKey}
          />
          {col2 && (
            <BookingColumn
              categories={col2}
              openKey={openKey}
              onToggle={setOpenKey}
            />
          )}
        </div>
      </div>
    </section>
  );
}

function BookingColumn({
  categories,
  openKey,
  onToggle,
}: {
  categories: VisibleCategory[];
  openKey: string | null;
  onToggle: (k: string | null) => void;
}) {
  return (
    <div className="booking-col">
      {categories.map((cat) => {
        const isOpen = openKey === cat.categoryName;
        const count = cat.appointments.length;
        return (
          <details
            key={cat.categoryName}
            className="booking-item svc-tile"
            open={isOpen}
            onToggle={(e) => {
              const el = e.currentTarget;
              if (el.open) onToggle(cat.categoryName);
              else if (openKey === cat.categoryName) onToggle(null);
            }}
          >
            <summary>
              <span className="bi-title">{cat.categoryName}</span>
              <span className="bi-count">
                {count} {count === 1 ? "appointment" : "appointments"}
              </span>
              <ChevDown />
            </summary>
            <div className="bi-body">
              <ul className="svc-links">
                {cat.appointments.map((a) => (
                  <li key={a.key}>
                    <a
                      className="svc-link bi-link"
                      href={a.href}
                      target="_blank"
                      rel="noopener"
                    >
                      <span className="bi-link-txt">{a.displayName}</span>
                      {a.tag && <span className="svc-tag">{a.tag}</span>}
                      <ArrowRight />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        );
      })}
    </div>
  );
}
