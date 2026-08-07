"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitApplication, type SubmitState } from "@/app/careers/_actions/submit-application";
import type { Field } from "./field-schemas";
import { DatePickerField } from "./DatePickerField";

type Props = {
  role: "general-practitioner" | "practice-nurse" | "patient-support-officer";
  fields: Field[];
};

const INITIAL_STATE: SubmitState = { ok: false };

const inputBase =
  "block w-full bg-paper border border-black/15 rounded-lg px-4 py-3 text-ink placeholder:text-ink-3/60 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/25 transition";
const labelBase = "block text-sm text-ink-2 font-medium mb-1.5";
const errorText = "text-sm text-red-700 mt-1";
const helpText = "text-xs text-ink-3 mt-1";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn-primary" disabled={pending} aria-busy={pending}>
      {pending ? "Sending..." : "Submit application"}
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="arrow">
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

function FieldRow({
  field,
  error,
  currentValues,
  onValueChange,
}: {
  field: Field;
  error?: string;
  currentValues: Record<string, string>;
  onValueChange: (name: string, value: string) => void;
}) {
  const reactId = useId();
  const fieldId = `${reactId}-${field.name}`;
  const errorId = error ? `${fieldId}-error` : undefined;
  const helpId = field.helpText ? `${fieldId}-help` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;
  const hasError = Boolean(error);

  const labelNode = (
    <label htmlFor={fieldId} className={labelBase}>
      {field.label}
      {field.required ? <span className="text-red-600 ml-0.5" aria-hidden="true">*</span> : null}
      {field.required ? <span className="sr-only"> (required)</span> : null}
    </label>
  );

  const renderHelp = () =>
    field.helpText ? (
      <p id={helpId} className={helpText}>
        {field.helpText}
      </p>
    ) : null;

  const renderError = () =>
    error ? (
      <p id={errorId} className={errorText}>
        {error}
      </p>
    ) : null;

  switch (field.type) {
    case "text":
    case "email":
    case "tel":
      return (
        <div>
          {labelNode}
          <input
            id={fieldId}
            type={field.type}
            name={field.name}
            required={field.required}
            autoComplete={field.autoComplete}
            placeholder={field.placeholder}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            className={inputBase}
          />
          {renderHelp()}
          {renderError()}
        </div>
      );
    case "date":
      return (
        <div>
          {labelNode}
          <DatePickerField
            name={field.name}
            required={field.required}
            fieldId={fieldId}
            errorId={errorId}
            helpId={helpId}
            hasError={hasError}
            minToday={field.min === "today"}
          />
          {renderHelp()}
          {renderError()}
        </div>
      );
    case "textarea":
      return (
        <div>
          {labelNode}
          <textarea
            id={fieldId}
            name={field.name}
            rows={field.rows ?? 4}
            required={field.required}
            placeholder={field.placeholder}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            className={`${inputBase} resize-y min-h-[100px]`}
          />
          {renderHelp()}
          {renderError()}
        </div>
      );
    case "select": {
      const showOther = field.otherReveals && currentValues[field.name] === field.otherReveals;
      return (
        <div>
          {labelNode}
          <select
            id={fieldId}
            name={field.name}
            required={field.required}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            className={inputBase}
            defaultValue=""
            onChange={(e) => onValueChange(field.name, e.currentTarget.value)}
          >
            <option value="" disabled>
              Please choose
            </option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {renderHelp()}
          {renderError()}
          {showOther && field.otherName ? (
            <div className="mt-3">
              <label htmlFor={`${fieldId}-other`} className={labelBase}>
                {field.otherLabel ?? "Please specify"}
                <span className="text-red-600 ml-0.5" aria-hidden="true">*</span>
              </label>
              <input
                id={`${fieldId}-other`}
                type="text"
                name={field.otherName}
                required
                className={inputBase}
              />
            </div>
          ) : null}
        </div>
      );
    }
    case "radio": {
      const showOther = field.otherReveals && currentValues[field.name] === field.otherReveals;
      const isButtons = field.variant === "buttons";
      const cols = field.options.length <= 2 ? "grid-cols-2" : field.options.length === 3 ? "grid-cols-3" : "grid-cols-2";
      return (
        <fieldset aria-describedby={describedBy}>
          <legend className={labelBase}>
            {field.label}
            {field.required ? <span className="text-red-600 ml-0.5" aria-hidden="true">*</span> : null}
          </legend>
          {isButtons ? (
            <div className={`grid ${cols} gap-3 mt-1`}>
              {field.options.map((opt) => (
                <label
                  key={opt}
                  className="relative flex items-center justify-center px-4 py-3 rounded-lg border border-black/15 bg-paper text-[15px] text-ink-2 cursor-pointer transition hover:border-terra/60 hover:bg-terra/[0.04] has-[:checked]:border-terra has-[:checked]:bg-terra/[0.08] has-[:checked]:text-ink has-[:checked]:shadow-[0_0_0_1px_var(--terra)_inset]"
                >
                  <input
                    type="radio"
                    name={field.name}
                    value={opt}
                    required={field.required}
                    aria-invalid={hasError || undefined}
                    onChange={(e) => onValueChange(field.name, e.currentTarget.value)}
                    className="sr-only"
                  />
                  <span className="font-medium">{opt}</span>
                </label>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1">
              {field.options.map((opt) => (
                <label key={opt} className="inline-flex items-center gap-2 text-[15px] text-ink-2 cursor-pointer">
                  <input
                    type="radio"
                    name={field.name}
                    value={opt}
                    required={field.required}
                    aria-invalid={hasError || undefined}
                    onChange={(e) => onValueChange(field.name, e.currentTarget.value)}
                    className="accent-terra w-4 h-4"
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}
          {renderHelp()}
          {renderError()}
          {showOther && field.otherName ? (
            <div className="mt-3">
              <label htmlFor={`${fieldId}-other`} className={labelBase}>
                {field.otherLabel ?? "Please specify"}
                <span className="text-red-600 ml-0.5" aria-hidden="true">*</span>
              </label>
              <input
                id={`${fieldId}-other`}
                type={field.otherInputType === "number" ? "number" : "text"}
                name={field.otherName}
                min={field.otherInputType === "number" ? 0 : undefined}
                required
                className={inputBase}
              />
            </div>
          ) : null}
        </fieldset>
      );
    }
    case "checkbox-group":
      return (
        <fieldset aria-describedby={describedBy}>
          <legend className={labelBase}>
            {field.label}
            {field.required ? <span className="text-red-600 ml-0.5" aria-hidden="true">*</span> : null}
          </legend>
          <div className="grid gap-2 mt-1">
            {field.options.map((opt) => (
              <label
                key={opt}
                className="flex items-start gap-3 px-4 py-3 rounded-lg border border-black/15 bg-paper text-[15px] text-ink-2 cursor-pointer transition hover:border-terra/60 hover:bg-terra/[0.04] has-[:checked]:border-terra has-[:checked]:bg-terra/[0.06] has-[:checked]:text-ink"
              >
                <input
                  type="checkbox"
                  name={field.name}
                  value={opt}
                  className="accent-terra w-4 h-4 mt-1 shrink-0"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {renderHelp()}
          {renderError()}
        </fieldset>
      );
    case "checkbox": {
      const parts = field.label.split("Privacy Policy");
      const asLink = field.labelHtml && parts.length === 2 && field.privacyPolicyHref;
      return (
        <div>
          <label className="flex items-start gap-3 text-[15px] text-ink-2 cursor-pointer">
            <input
              type="checkbox"
              name={field.name}
              required={field.required}
              aria-invalid={hasError || undefined}
              aria-describedby={describedBy}
              className="accent-terra w-4 h-4 mt-1 shrink-0"
            />
            <span>
              {asLink ? (
                <>
                  {parts[0]}
                  <a
                    href={field.privacyPolicyHref}
                    className="underline underline-offset-2 hover:text-terra"
                  >
                    Privacy Policy
                  </a>
                  {parts[1]}
                </>
              ) : (
                field.label
              )}
              {field.required ? (
                <span className="text-red-600 ml-0.5" aria-hidden="true">
                  *
                </span>
              ) : null}
            </span>
          </label>
          {renderError()}
        </div>
      );
    }
  }
}

// Group consecutive halfWidth text fields into a 2-column row.
function groupFields(fields: Field[]): Array<Field | Field[]> {
  const out: Array<Field | Field[]> = [];
  let i = 0;
  while (i < fields.length) {
    const f = fields[i];
    const halfable =
      (f.type === "text" || f.type === "email" || f.type === "tel") && (f as { halfWidth?: boolean }).halfWidth;
    if (halfable && i + 1 < fields.length) {
      const next = fields[i + 1];
      const nextHalf =
        (next.type === "text" || next.type === "email" || next.type === "tel") &&
        (next as { halfWidth?: boolean }).halfWidth;
      if (nextHalf) {
        out.push([f, next]);
        i += 2;
        continue;
      }
    }
    out.push(f);
    i += 1;
  }
  return out;
}

export function ApplicationForm({ role, fields }: Props) {
  const [state, formAction] = useActionState(submitApplication, INITIAL_STATE);
  const [values, setValues] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const handleValueChange = (name: string, value: string) => {
    setValues((prev) => (prev[name] === value ? prev : { ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!state.ok && state.errors) {
      if (errorSummaryRef.current) {
        errorSummaryRef.current.focus();
      }
    }
  }, [state]);

  if (state.ok) {
    return (
      <div className="bg-cream-2 rounded-2xl border border-black/10 p-8 md:p-10">
        <div className="max-w-[52ch]">
          <div className="text-xs uppercase tracking-[0.14em] text-ink-3 mb-3">Application received</div>
          <h3
            className="font-display text-ink"
            style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.1 }}
          >
            Thank you. We&apos;ve received your details and will be in touch.
          </h3>
          <p className="mt-5 text-ink-2 body-lg">
            A member of the SMSG recruitment team will follow up shortly. If anything
            changes in the meantime, or if you&apos;d like to add more detail, email{" "}
            <a
              href="mailto:recruitment@smsg.au"
              className="underline underline-offset-2 hover:text-terra"
            >
              recruitment@smsg.au
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  const grouped = groupFields(fields);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="bg-cream-2 rounded-2xl border border-black/10 p-8 md:p-10 space-y-6"
    >
      <input type="hidden" name="role" value={role} />

      {state.message && !state.ok ? (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {state.message}
        </div>
      ) : null}

      {grouped.map((entry, i) =>
        Array.isArray(entry) ? (
          <div key={`row-${i}`} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {entry.map((f) => (
              <FieldRow
                key={f.name}
                field={f}
                error={state.errors?.[f.name]}
                currentValues={values}
                onValueChange={handleValueChange}
              />
            ))}
          </div>
        ) : (
          <FieldRow
            key={entry.name}
            field={entry}
            error={state.errors?.[entry.name]}
            currentValues={values}
            onValueChange={handleValueChange}
          />
        )
      )}

      <div className="pt-2 flex flex-wrap items-center gap-4">
        <SubmitButton />
        <span className="text-xs text-ink-3">
          Your details go straight to the SMSG recruitment team.
        </span>
      </div>
    </form>
  );
}
