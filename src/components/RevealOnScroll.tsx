"use client";

/**
 * RevealOnScroll · progressive-enhancement client component.
 *
 * Mirrors the reveal-on-scroll behaviour of the original static site: on
 * mount, tags every `section`, `.sb-card` and `.loc-card` with `.reveal`,
 * then observes each and adds `.in` when it enters the viewport. Without
 * JS, `.no-js .reveal` reveals everything so this is purely additive.
 *
 * Explicit `.reveal` elements (added by page components) are picked up too.
 *
 * Mounted once in the root layout so it applies to every page.
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTORS = "section, .sb-card, .loc-card";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = new Set<HTMLElement>();
    document
      .querySelectorAll<HTMLElement>(REVEAL_SELECTORS)
      .forEach((el) => {
        el.classList.add("reveal");
        targets.add(el);
      });
    document
      .querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => targets.add(el));

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
