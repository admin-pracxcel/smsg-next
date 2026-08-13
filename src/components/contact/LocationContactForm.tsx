"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/contact/_actions/submit-contact";
import {
  CONTACT_TOPICS,
  PATIENT_OPTIONS,
  type SubmitContactState,
} from "@/app/contact/_actions/contact-fields";
import { CLINICS, type ClinicKey } from "@/lib/clinics";

type Props = {
  clinicKey: ClinicKey;
  /**
   * When true, drop the form's own card chrome (bg, border, rounded, padding)
   * so the parent container owns the visual box. Used on the homepage where
   * the form sits inside a shared container with the location info.
   */
  embedded?: boolean;
};

const INITIAL_STATE: SubmitContactState = { ok: false };

const inputBase =
  "block w-full bg-paper border border-black/15 rounded-lg px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-3/60 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/25 transition";
const labelBase = "block text-sm text-ink-2 font-medium mb-1.5";
const errorText = "text-sm text-red-700 mt-1";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending} aria-busy={pending}>
      {pending ? "Sending..." : "Send message"}
      <svg
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="arrow"
      >
        <path
          d="M2 7h9M8 4l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function LocationContactForm({ clinicKey, embedded = false }: Props) {
  const chromeClass = embedded
    ? "space-y-4"
    : "bg-paper rounded-2xl border border-black/10 p-6 md:p-7 space-y-4";
  const successChromeClass = embedded
    ? "flex flex-col justify-center"
    : "bg-paper rounded-2xl border border-black/10 p-7 md:p-8 h-full flex flex-col justify-center";
  const clinic = CLINICS[clinicKey];
  const [state, formAction] = useActionState(submitContact, INITIAL_STATE);
  const formRef = useRef<HTMLFormElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const fid = (name: string) => `${reactId}-${clinicKey}-${name}`;

  // Focus error summary when server responds with errors, then focus first invalid field.
  useEffect(() => {
    if (!state.ok && state.errors && Object.keys(state.errors).length > 0) {
      errorSummaryRef.current?.focus();
      const first = Object.keys(state.errors)[0];
      const el = formRef.current?.querySelector<HTMLElement>(
        `[name="${CSS.escape(first)}"]`
      );
      if (el && typeof el.focus === "function") {
        el.focus({ preventScroll: false });
      }
    }
  }, [state]);

  if (state.ok) {
    return (
      <div className={successChromeClass}>
        <div className="text-xs uppercase tracking-[0.14em] text-ink-3 mb-3">
          Message sent
        </div>
        <h3
          className="font-display text-ink"
          style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.15 }}
        >
          Thank you. Reception at {clinic.shortLabel} will be in touch.
        </h3>
        <p className="mt-4 text-ink-2 text-[15px] max-w-[46ch]">
          For anything urgent, please phone{" "}
          <a
            href={`tel:${clinic.phone.replace(/[^0-9+]/g, "")}`}
            className="link-editorial"
          >
            {clinic.phone}
          </a>{" "}
          during opening hours.
        </p>
      </div>
    );
  }

  const errors = state.errors ?? {};
  const errId = (name: string) => (errors[name] ? `${fid(name)}-error` : undefined);
  const showErr = (name: string) =>
    errors[name] ? (
      <p id={errId(name)} className={errorText}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className={chromeClass}
    >
      <input type="hidden" name="clinicKey" value={clinicKey} />

      <div>
        <div className="text-xs uppercase tracking-[0.14em] text-ink-3">
          Message reception
        </div>
        <h3
          className="font-display mt-1"
          style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)", lineHeight: 1.15 }}
        >
          Send {clinic.shortLabel} a message
        </h3>
      </div>

      {state.message && !state.ok ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-800"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={fid("fullName")} className={labelBase}>
            Full name
            <span className="text-red-600 ml-0.5" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id={fid("fullName")}
            type="text"
            name="fullName"
            required
            autoComplete="name"
            aria-invalid={errors.fullName ? true : undefined}
            aria-describedby={errId("fullName")}
            className={inputBase}
          />
          {showErr("fullName")}
        </div>
        <div>
          <label htmlFor={fid("email")} className={labelBase}>
            Email
            <span className="text-red-600 ml-0.5" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id={fid("email")}
            type="email"
            name="email"
            required
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errId("email")}
            className={inputBase}
          />
          {showErr("email")}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={fid("phone")} className={labelBase}>
            Phone
          </label>
          <input
            id={fid("phone")}
            type="tel"
            name="phone"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errId("phone")}
            className={inputBase}
          />
          {showErr("phone")}
        </div>
        <div>
          <label htmlFor={fid("topic")} className={labelBase}>
            What&apos;s this about
            <span className="text-red-600 ml-0.5" aria-hidden="true">
              *
            </span>
          </label>
          <select
            id={fid("topic")}
            name="topic"
            required
            defaultValue=""
            aria-invalid={errors.topic ? true : undefined}
            aria-describedby={errId("topic")}
            className={inputBase}
          >
            <option value="" disabled>
              Please choose
            </option>
            {CONTACT_TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {showErr("topic")}
        </div>
      </div>

      <fieldset aria-describedby={errId("isPatient")}>
        <legend className={labelBase}>
          Are you an existing patient?
          <span className="text-red-600 ml-0.5" aria-hidden="true">
            *
          </span>
        </legend>
        <div className="grid grid-cols-2 gap-3 mt-1">
          {PATIENT_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="patient-toggle relative flex items-center justify-center px-4 py-3 rounded-lg border border-black/15 bg-paper text-[15px] text-ink-2 cursor-pointer transition hover:border-brand/50 hover:bg-brand/[0.03] has-[:checked]:border-brand has-[:checked]:bg-brand/[0.08] has-[:checked]:text-ink has-[:checked]:shadow-[0_0_0_1px_var(--brand)_inset]"
            >
              <input
                type="radio"
                name="isPatient"
                value={opt}
                required
                aria-invalid={errors.isPatient ? true : undefined}
                className="sr-only"
              />
              <span className="font-medium">{opt}</span>
            </label>
          ))}
        </div>
        {showErr("isPatient")}
      </fieldset>

      <div>
        <label htmlFor={fid("message")} className={labelBase}>
          Message
          <span className="text-red-600 ml-0.5" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id={fid("message")}
          name="message"
          rows={4}
          required
          minLength={20}
          placeholder="A few sentences about what you need."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errId("message")}
          className={`${inputBase} resize-y min-h-[96px]`}
        />
        {showErr("message")}
      </div>

      <div>
        <label className="flex items-start gap-3 text-[14px] text-ink-2 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errId("consent")}
            className="accent-brand w-4 h-4 mt-1 shrink-0"
          />
          <span>
            I consent to SMSG handling my enquiry in accordance with the{" "}
            <a
              href="/about/privacy-policy/"
              className="underline underline-offset-2 hover:text-brand"
            >
              Privacy Policy
            </a>
            .
            <span className="text-red-600 ml-0.5" aria-hidden="true">
              *
            </span>
          </span>
        </label>
        {showErr("consent")}
      </div>

      <div className="pt-1 flex flex-wrap items-center gap-4">
        <SubmitButton />
        <span className="text-xs text-ink-3">
          Routed to {clinic.shortLabel} reception.
        </span>
      </div>
    </form>
  );
}
