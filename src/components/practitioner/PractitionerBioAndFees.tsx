/**
 * PractitionerBioAndFees · About section (bio + fellowships) with a
 * sticky right-hand fees card.
 *
 * Structure ported from dr-tao-geng/index.html lines 1483-1540.
 * Fees copy stays qualitative per SMSG house rule (no dollar figures on
 * public pages); the card is generated from the practitioner JSON so all
 * 65 practitioners share the same billing framing in Phase 5.
 */

import Link from "next/link";
import type { Practitioner } from "@/lib/schemas/practitioner";

function shortRef(p: Practitioner): string {
  return p.identity.short_ref || `Dr ${p.identity.last_name}`;
}

export function PractitionerBioAndFees({ practitioner: p }: { practitioner: Practitioner }) {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1360px] mx-auto px-5 md:px-10 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Bio */}
          <div className="md:col-span-8">
            <span className="allcaps text-ink-3">{p.bio.eyebrow}</span>
            <h2 className="font-display h-section mt-3 max-w-[24ch]">
              {p.bio.heading_lead}{" "}
              <span className="italic font-display-warm">{p.bio.heading_warm}</span>
            </h2>

            <div className="body-editorial mt-8 max-w-[62ch]">
              {p.bio.paragraphs.length > 0 ? (
                p.bio.paragraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p className="italic text-ink-3">
                  Bio pending client-supplied content.
                </p>
              )}
            </div>

            {p.fellowships.length > 0 && (
              <div className="fellowships-block mt-8 pt-6 border-t border-black/10">
                <div className="allcaps text-ink-3 mb-3">Fellowships &amp; recognition</div>
                <ul className="list-disc pl-5 text-[14.5px] text-ink-2 leading-relaxed space-y-1.5">
                  {p.fellowships.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Fees card */}
          <aside className="md:col-span-4 md:sticky md:top-[112px]">
            <div className="fee-card">
              <div className="fc-head">Fees and billing</div>
              <div className="fc-row">
                <strong>Bulk-billing</strong>
                <br />
                Routine consultations are bulk-billed for existing regular patients
                seen within the last twelve months, children aged 15 and under, and
                DVA card holders.
              </div>
              <div className="fc-row">
                <strong>Standard consultation</strong>
                <br />
                {shortRef(p)} operates as an independent practitioner and sets their
                own billing arrangement. Routine consults are typically privately
                billed for new and returning patients outside the twelve-month
                window, with Medicare rebate applying to eligible services. Fees
                vary by consultation type and complexity.
              </div>
              <div className="fc-row">
                <strong>Procedures and longer consults</strong>
                <br />
                Non-standard consultations, procedures and telehealth appointments
                are privately billed. Reception confirms the specific fee and
                expected out-of-pocket when you book.
              </div>
              <div className="fc-row">
                <p className="text-[12px] text-ink-3 italic leading-relaxed">
                  {p.identity.full_name} is an independent tenant practitioner at
                  SMSG and responsible for their own fee schedule and conduct at
                  this facility.
                </p>
              </div>
              <div className="fc-row">
                {/* TODO: link to /patient-information/fees-and-billing/ when built */}
                <Link href="/" className="link-editorial text-[13px]">
                  Full SMSG fees and billing schedule
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
