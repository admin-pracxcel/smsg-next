/**
 * PractitionerFooterCTA · dark consolidated footer band with three columns:
 * related care, book with this practitioner, also on the team.
 *
 * All three columns are data-driven from the practitioner JSON:
 *   - Column 1: `related_care[]`
 *   - Column 2: `footer_book_links[]`
 *   - Column 3: `also_on_team[]` (optional; column omitted when absent)
 *
 * The "See all" link under column 3 uses `breadcrumb.team_type_href` so a GP
 * links to /team/general-practitioners/, a specialist to
 * /team/specialist-physicians-surgeons/, etc.
 */

import Link from "next/link";
import type { Practitioner } from "@/lib/schemas/practitioner";

/** Normalise a relative "../foo/" href from the JSON to a root-relative "/foo/". */
function normaliseHref(href: string): string {
  if (href.startsWith("../")) return "/" + href.slice(3);
  return href;
}

export function PractitionerFooterCTA({
  practitioner: p,
}: {
  practitioner: Practitioner;
}) {
  const shortRef = p.identity.short_ref || `Dr ${p.identity.last_name}`;
  const hasPeers = Boolean(p.also_on_team && p.also_on_team.length > 0);
  const seeAllLabel = `See all ${p.breadcrumb.team_type_label.toLowerCase()}`;

  return (
    <section id="book" className="relative overflow-hidden footer-wash">
      <div className="paper-noise absolute inset-0 opacity-15 pointer-events-none"></div>
      <div className="relative max-w-[1360px] mx-auto px-5 md:px-10 py-16 md:py-20">
        <div
          className={
            hasPeers
              ? "grid md:grid-cols-3 gap-10 md:gap-14"
              : "grid md:grid-cols-2 gap-10 md:gap-14"
          }
        >
          {/* Related care */}
          {p.related_care.length > 0 && (
            <div>
              <div className="footer-col-head">Related care</div>
              {p.related_care.map((item) => (
                <Link
                  key={item.label}
                  href={normaliseHref(item.href)}
                  className="footer-list-item"
                >
                  <div className="fli-lead">{item.label}</div>
                  <div className="fli-sub">{item.sub}</div>
                </Link>
              ))}
            </div>
          )}

          {/* Book with this practitioner. Phone-only practitioners have an
              empty footer_book_links[] since they can't be booked online; we
              fall back to the phone_fallback tel: link so the column is never
              empty. */}
          <div>
            <div className="footer-col-head">Book with {shortRef}</div>
            {p.footer_book_links.length > 0 ? (
              p.footer_book_links.map((link) => (
                <a
                  key={link.clinic_label}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="footer-list-item"
                >
                  <div className="fli-lead">Book at {link.clinic_label}</div>
                  <div className="fli-sub">{link.sub}</div>
                </a>
              ))
            ) : p.booking.phone_fallback ? (
              <a
                href={`tel:${p.booking.phone_fallback.phone.replace(/\s/g, "")}`}
                className="footer-list-item"
              >
                <div className="fli-lead">
                  Call {p.booking.phone_fallback.clinic_label}
                </div>
                <div className="fli-sub">
                  {p.booking.phone_fallback.phone} · reception matches you with
                  the next appointment
                </div>
              </a>
            ) : null}
            <div className="mt-6 text-[13px] text-cream/70 leading-relaxed">
              New to SMSG?{" "}
              <Link
                href="/patient-information/new-patient-registration/"
                className="underline underline-offset-4 hover:text-blush"
              >
                Register at the centre you&apos;ll visit first
              </Link>{" "}
              so your file is ready before your appointment.
            </div>
          </div>

          {/* Also on the team */}
          {hasPeers && (
            <div>
              <div className="footer-col-head">Also on the team</div>
              {p.also_on_team!.map((peer) => (
                <Link
                  key={peer.name}
                  href={normaliseHref(peer.href)}
                  className="footer-list-item"
                >
                  <div className="fli-lead">{peer.name}</div>
                  <div className="fli-sub">{peer.sub}</div>
                </Link>
              ))}
              <div className="mt-4">
                <Link
                  href={normaliseHref(p.breadcrumb.team_type_href)}
                  className="text-[13px] text-cream/70 hover:text-blush underline underline-offset-4"
                >
                  {seeAllLabel}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
