"use client";

import { useEffect, useId, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";

type Props = {
  name: string;
  required?: boolean;
  fieldId: string;
  errorId?: string;
  helpId?: string;
  hasError?: boolean;
  minToday?: boolean;
  placeholder?: string;
};

function todayLocal(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function toISO(d: Date): string {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function formatDisplay(d: Date): string {
  return d.toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function DatePickerField({
  name,
  required,
  fieldId,
  errorId,
  helpId,
  hasError,
  minToday,
  placeholder = "Select a date",
}: Props) {
  const [selected, setSelected] = useState<Date | undefined>(undefined);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverId = useId();
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const disabledMatcher = minToday ? { before: todayLocal() } : undefined;

  return (
    <div ref={rootRef} className="relative">
      {/* Hidden value posted with the form. */}
      <input
        type="hidden"
        name={name}
        value={selected ? toISO(selected) : ""}
        required={required}
      />
      <button
        ref={buttonRef}
        type="button"
        id={fieldId}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={popoverId}
        aria-invalid={hasError || undefined}
        aria-describedby={describedBy}
        className={[
          "flex w-full items-center justify-between gap-3",
          "bg-paper border border-black/15 rounded-lg px-4 py-3 text-[15px]",
          "text-left transition",
          "hover:border-terra/60 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/25",
          selected ? "text-ink" : "text-ink-3/70",
        ].join(" ")}
      >
        <span>{selected ? formatDisplay(selected) : placeholder}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="shrink-0 text-ink-3"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <div
          id={popoverId}
          role="dialog"
          aria-label="Choose a date"
          className="absolute z-30 mt-2 rounded-xl border border-black/10 bg-paper shadow-[0_20px_50px_-20px_rgba(30,20,15,0.35)] p-3"
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(d) => {
              setSelected(d ?? undefined);
              if (d) {
                setOpen(false);
                buttonRef.current?.focus();
              }
            }}
            disabled={disabledMatcher}
            weekStartsOn={1}
            showOutsideDays
            autoFocus
            classNames={{
              root: "smsg-dp",
              months: "flex flex-col gap-2",
              month: "relative space-y-2",
              month_caption: "h-10 flex items-center justify-center px-12",
              caption_label: "font-display text-[15px] text-ink",
              nav: "absolute top-0 inset-x-0 h-10 flex items-center justify-between z-10",
              button_previous:
                "inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-2 border border-black/10 bg-paper hover:bg-terra/[0.10] hover:border-terra/40 transition cursor-pointer",
              button_next:
                "inline-flex items-center justify-center w-10 h-10 rounded-md text-ink-2 border border-black/10 bg-paper hover:bg-terra/[0.10] hover:border-terra/40 transition cursor-pointer",
              chevron: "w-4 h-4 fill-current",
              month_grid: "border-collapse",
              weekdays: "",
              weekday:
                "text-[11px] uppercase tracking-wider text-ink-3 font-medium w-9 h-8 text-center",
              week: "",
              day: "p-0.5",
              day_button:
                "inline-flex items-center justify-center w-9 h-9 rounded-full text-[14px] text-ink-2 hover:bg-terra/[0.10] hover:text-ink transition disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent",
              today: "font-semibold text-terra",
              selected:
                "[&_button]:bg-terra [&_button]:text-cream [&_button]:hover:bg-terra [&_button]:hover:text-cream",
              outside: "text-ink-3/50",
              disabled: "text-ink-3/40",
              hidden: "invisible",
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
