"use client";

/**
 * MobileMenu · hamburger button + right-side slide-in drawer with nested
 * accordions. Renders both the toggle (shown lg:hidden) and the drawer.
 *
 * Behaviour mirrors the original static site JS:
 *   - Drawer open/close syncs body scroll-lock
 *   - One group open at a time (accordion)
 *   - Nested sub-groups (Specialty Care -> Aurora, Kids' Dr, etc.)
 *   - Escape and overlay tap both close
 *   - Tapping any nav item closes the drawer
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  primaryNav,
  getSubBrandFlyout,
  type NavDropdown,
  type NavGroup,
  type NavItem,
} from "@/lib/navigation";

function Chev() {
  return (
    <svg
      className="mm-chev"
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

function ChevSmall() {
  return (
    <svg
      className="mm-chev"
      width="12"
      height="12"
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

function ArrowHero() {
  return (
    <svg
      className="arrow"
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

/* ---------- Mobile item ---------- */

function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  return (
    <Link href={item.href} className="mm-item" onClick={onNavigate}>
      <span>
        {item.dotColor && (
          <span className="mm-dot" style={{ background: item.dotColor }} />
        )}
        <span>{item.label}</span>
        {item.sub && <span className="mm-item-sub">{item.sub}</span>}
      </span>
    </Link>
  );
}

/* ---------- Specialty Care nested renderer ---------- */

function SpecialtyCareBody({ onNavigate }: { onNavigate: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const specialtyItems =
    primaryNav[0].columns[0].groups.find(
      (g) => g.heading === "Specialty Care"
    )?.items ?? [];

  return (
    <>
      {specialtyItems.map((sb, i) => {
        const flyout = getSubBrandFlyout(sb.label);
        const isOpen = openIdx === i;

        if (!flyout) {
          // Sydney Cosmedic: direct link, no sub-accordion
          return (
            <Link
              key={sb.label}
              href={sb.href}
              className="mm-item"
              onClick={onNavigate}
            >
              <span className="flex items-center">
                {sb.dotColor && (
                  <span
                    className="mm-dot"
                    style={{ background: sb.dotColor }}
                  />
                )}
                {sb.label}
              </span>
            </Link>
          );
        }

        return (
          <div
            key={sb.label}
            className="mm-sub-group"
            data-open={isOpen ? "true" : "false"}
          >
            <button
              type="button"
              className="mm-sub-group-head"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span className="flex items-center">
                {sb.dotColor && (
                  <span
                    className="mm-dot"
                    style={{ background: sb.dotColor }}
                  />
                )}
                {sb.label}
              </span>
              <ChevSmall />
            </button>
            <div className="mm-sub-group-body">
              {flyout.map((f) => (
                <Link
                  key={f.label}
                  href={f.href}
                  className="mm-item"
                  onClick={onNavigate}
                >
                  <span className={f.strong ? "text-terra" : ""}>
                    {f.label}
                    {f.strong ? " →" : ""}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

/* ---------- Group renderer ---------- */

function MobileGroup({
  dropdown,
  isOpen,
  onToggle,
  onNavigate,
}: {
  dropdown: NavDropdown;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const renderBody = () => {
    if (dropdown.label === "Care") {
      // Special-cased: SPECIALTY CARE nested accordion, then flat groups
      const groups = dropdown.columns[0].groups;
      const flatGroups = groups.filter((g) => g.heading !== "Specialty Care");
      return (
        <>
          <SpecialtyCareBody onNavigate={onNavigate} />
          {flatGroups.map((g, i) => (
            <div key={g.heading ?? i}>
              <div className={`mm-sub-head ${i > 0 ? "mt-3" : ""}`}>
                {g.heading}
              </div>
              {g.items.map((it) => (
                <MobileItem
                  key={it.label}
                  item={it}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          ))}
        </>
      );
    }

    // Standard: iterate columns then groups
    return dropdown.columns.map((col, ci) =>
      col.groups.map((g: NavGroup, gi) => (
        <div key={`${ci}-${gi}`}>
          {g.heading && (
            <div
              className={`mm-sub-head ${ci === 0 && gi === 0 ? "" : "mt-3"}`}
            >
              {g.heading}
            </div>
          )}
          {g.items.map((it) => (
            <MobileItem key={it.label} item={it} onNavigate={onNavigate} />
          ))}
        </div>
      ))
    );
  };

  // Care dropdown is split into two mobile groups: Specialty Care and (everything else).
  // Simpler: render everything under one group named after the dropdown label. This
  // matches the reference site's per-dropdown accordion pattern.
  const label = dropdown.label === "Care" ? "Care" : dropdown.label;

  return (
    <div className="mm-group" data-open={isOpen ? "true" : "false"}>
      <button
        type="button"
        className="mm-group-head"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{label}</span>
        <Chev />
      </button>
      <div className="mm-group-body">{renderBody()}</div>
    </div>
  );
}

/* ---------- Component ---------- */

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  // Body scroll lock + escape handler
  useEffect(() => {
    if (open) {
      document.body.classList.add("mm-lock");
    } else {
      document.body.classList.remove("mm-lock");
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("mm-lock");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        id="mm-toggle"
        className="mm-toggle mm-toggle-fixed lg:hidden"
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="mm-icon-line mm-icon-line-1"
            d="M4 7h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            className="mm-icon-line mm-icon-line-2"
            d="M4 11h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            className="mm-icon-line mm-icon-line-3"
            d="M4 15h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        className={`mm-overlay lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={close}
      />

      <aside
        id="mobile-menu"
        ref={drawerRef}
        className={`mm-drawer lg:hidden ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mm-drawer-head">
          <Link href="/" className="flex items-center gap-3" onClick={close}>
            <Image
              src="/website-images/Specialist%20Medical%20Services%20Group.webp"
              alt="Specialist Medical Services Group"
              width={200}
              height={56}
              className="h-14 w-auto"
            />
          </Link>
          <button
            type="button"
            className="mm-close"
            aria-label="Close menu"
            onClick={close}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="mm-cta">
          <Link
            href="/patient-information/book-online/"
            className="btn-primary w-full justify-center text-[15px]"
            onClick={close}
          >
            Book online
            <ArrowHero />
          </Link>
        </div>

        <nav className="mm-body" aria-label="Mobile primary">
          {primaryNav.map((d, i) => (
            <MobileGroup
              key={d.label}
              dropdown={d}
              isOpen={openGroup === i}
              onToggle={() => setOpenGroup(openGroup === i ? null : i)}
              onNavigate={close}
            />
          ))}
        </nav>

        <div className="mm-drawer-foot">
          <div>
            <span className="allcaps">After hours &amp; emergencies</span>
          </div>
          <div className="mt-1">
            For urgent care outside our opening hours, call{" "}
            <a href="tel:137425">13 SICK (13 74 25)</a>. In an emergency, dial{" "}
            <a href="tel:000">000</a>.
          </div>
        </div>
      </aside>
    </>
  );
}
