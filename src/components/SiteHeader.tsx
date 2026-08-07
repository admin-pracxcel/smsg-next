/**
 * SiteHeader · desktop-only sticky header with hover dropdowns.
 *
 * Server component. All interactivity (dropdown open/close, sticky condense)
 * lives in either pure CSS (:hover / :focus-within on `.has-menu`) or in
 * HeaderContainer (scroll listener adds `.header-scrolled`). MobileMenu is a
 * separate client component rendered alongside this one.
 */

import Link from "next/link";
import Image from "next/image";
import type {
  NavColumn,
  NavDropdown,
  NavGroup,
  NavItem,
} from "@/lib/navigation";
import { primaryNav, getSubBrandFlyout } from "@/lib/navigation";

/* ---------- Small inline SVGs ---------- */

function ChevDown() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="opacity-70"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 3.5l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevRight() {
  return (
    <svg
      className="m-chev"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 2l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowSmall() {
  return (
    <svg
      className="m-arrow"
      width="12"
      height="12"
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

/* ---------- Menu link ---------- */

function MenuLink({ item }: { item: NavItem }) {
  const flyout =
    item.dotColor !== undefined ? getSubBrandFlyout(item.label) : undefined;
  const hasFlyout = flyout && flyout.length > 0;

  const linkInner = (
    <>
      <span className="flex items-center gap-2">
        {item.dotColor && (
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: item.dotColor }}
          />
        )}
        <span>{item.label}</span>
      </span>
      {hasFlyout ? <ChevRight /> : <ArrowSmall />}
    </>
  );

  const className = `menu-link ${item.strong ? "menu-link-strong" : ""}`.trim();

  if (hasFlyout) {
    return (
      <div className="menu-sub">
        <Link href={item.href} className={className}>
          {linkInner}
        </Link>
        <div className="menu-flyout" role="menu">
          {flyout!.map((f) => (
            <Link
              key={f.label}
              href={f.href}
              className={`menu-link ${f.strong ? "menu-link-strong" : ""}`.trim()}
            >
              <span>{f.label}</span>
              <ArrowSmall />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.sub ? (
        <span>
          <span className="block">{item.label}</span>
          <span className="block text-[12px] text-ink-3">{item.sub}</span>
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {item.dotColor && (
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: item.dotColor }}
            />
          )}
          <span>{item.label}</span>
        </span>
      )}
      <ArrowSmall />
    </Link>
  );
}

/* ---------- Group + column ---------- */

function Group({ group, isFirst }: { group: NavGroup; isFirst: boolean }) {
  return (
    <div>
      {group.heading && (
        <div className={`menu-col-head ${isFirst ? "" : "mt-3"}`}>
          {group.heading}
        </div>
      )}
      {isFirst ? (
        group.items.map((item) => <MenuLink key={item.label} item={item} />)
      ) : (
        <>
          <div className="menu-divider" />
          {group.items.map((item) => (
            <MenuLink key={item.label} item={item} />
          ))}
        </>
      )}
    </div>
  );
}

function Column({ col }: { col: NavColumn }) {
  const scrollIndex = col.groups.findIndex((g) => g.scrollFromHere);
  const before = scrollIndex === -1 ? col.groups : col.groups.slice(0, scrollIndex);
  const scrolled = scrollIndex === -1 ? [] : col.groups.slice(scrollIndex);

  return (
    <div>
      {before.map((g, i) => (
        <Group key={g.heading ?? i} group={g} isFirst={i === 0} />
      ))}
      {scrolled.length > 0 && (
        <div className="menu-scroll">
          {scrolled.map((g, i) => (
            <Group
              key={g.heading ?? `s-${i}`}
              group={g}
              isFirst={before.length === 0 && i === 0}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Contact panel ---------- */

function ContactPanel({ dropdown }: { dropdown: NavDropdown }) {
  const items = dropdown.columns[0]?.groups[0]?.items ?? [];
  return (
    <>
      <div className="menu-col-head">Contact SMSG</div>
      <ul className="space-y-3 text-[13.5px]">
        {items.map((c) => {
          const [email, phone] = (c.sub ?? "").split(" · ");
          return (
            <li
              key={c.label}
              className="flex items-start justify-between gap-4"
            >
              <div>
                <div
                  className="font-display text-[15px]"
                  style={{ fontVariationSettings: "'SOFT' 100,'opsz' 30" }}
                >
                  {c.label}
                </div>
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="text-ink-3 hover:text-terra"
                  >
                    {email}
                  </a>
                )}
              </div>
              {phone && (
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="link-editorial text-[13px]"
                >
                  {phone}
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <div className="hairline-soft my-4" />
      <div className="text-[13px] text-ink-2 leading-relaxed">
        <div>
          <span className="allcaps text-ink-3">Group hours</span>
          <br />
          Mon-Fri 9-6 · Earlwood also Sat 9-3
        </div>
        <div className="mt-3">
          <span className="allcaps text-ink-3">After hours & emergencies</span>
          <br />
          Urgent care:{" "}
          <a href="tel:137425" className="link-editorial text-[13px]">
            13 SICK
          </a>{" "}
          · Emergency:{" "}
          <a href="tel:000" className="link-editorial text-[13px]">
            000
          </a>
        </div>
      </div>
    </>
  );
}

/* ---------- Panel wrapper ---------- */

function DropdownPanel({ dropdown }: { dropdown: NavDropdown }) {
  const positionClass = dropdown.alignRight
    ? "right-0 -mr-4"
    : "left-0 -ml-4";
  const widthStyle = { width: `${dropdown.width ?? 320}px` };
  const layoutClass =
    dropdown.layout === "grid-2" ? "grid grid-cols-2 gap-8" : "";

  return (
    <div
      className={`menu-panel absolute ${positionClass} top-full mt-3 rounded-[16px] p-6 z-50 ${layoutClass}`}
      style={widthStyle}
      role="menu"
    >
      {dropdown.layout === "contact" ? (
        <ContactPanel dropdown={dropdown} />
      ) : (
        dropdown.columns.map((col, i) => <Column key={i} col={col} />)
      )}
    </div>
  );
}

/* ---------- Top-level ---------- */

function NavDropdownItem({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="has-menu relative">
      <Link
        href={dropdown.href ?? "#"}
        className="nav-link inline-flex items-center gap-1"
        aria-haspopup="true"
        aria-expanded="false"
        data-menu-trigger
      >
        {dropdown.label}
        <ChevDown />
      </Link>
      <DropdownPanel dropdown={dropdown} />
    </div>
  );
}

export function SiteHeader() {
  return (
    <div className="max-w-[1360px] mx-auto px-5 md:px-10 h-[72px] md:h-[84px] lg:h-[92px] flex items-center justify-between gap-8">
      <Link
        href="/"
        className="flex items-center gap-3 group"
        aria-label="Specialist Medical Services Group, home"
      >
        <Image
          src="/website-images/Specialist%20Medical%20Services%20Group.webp"
          alt="Specialist Medical Services Group"
          width={220}
          height={64}
          priority
          className="h-14 lg:h-16 w-auto"
        />
      </Link>

      <nav
        aria-label="Primary"
        className="hidden lg:flex items-center gap-6 text-[14.5px] text-ink"
      >
        {primaryNav.map((d) => (
          <NavDropdownItem key={d.label} dropdown={d} />
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/patient-information/book-online/"
          className="btn-primary text-[14px] hidden lg:inline-flex"
        >
          Book online
          <ArrowHero />
        </Link>
        {/* Mobile hamburger lives in MobileMenu (client component) */}
        <div id="mm-toggle-slot" className="lg:hidden" />
      </div>
    </div>
  );
}
