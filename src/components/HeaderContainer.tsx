"use client";

/**
 * HeaderContainer · client wrapper that composes SiteHeader (server) and
 * MobileMenu (client) inside a single sticky <header>. Adds `.header-scrolled`
 * when the page scrolls past 8px so the header condenses.
 */

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";

export function HeaderContainer({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close open dropdowns after client-side navigation. Next.js keeps the
  // DOM around across route changes, so the clicked link retains focus
  // and `:focus-within` keeps the parent menu panel open until the user
  // clicks somewhere else. Blurring on pathname change releases it.
  useEffect(() => {
    const el = document.activeElement as HTMLElement | null;
    if (el && typeof el.blur === "function") el.blur();
  }, [pathname]);

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 header-shell transition-all duration-300 ${
        scrolled ? "header-scrolled" : ""
      }`}
    >
      <div className="relative">
        {children}
        <MobileMenu />
      </div>
    </header>
  );
}
