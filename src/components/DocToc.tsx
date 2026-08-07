"use client";

/**
 * DocToc · sticky table of contents for long-form policy pages. Mirrors the
 * `.doc-toc` block from `about/zero-workplace-violence-tolerance/` with a
 * scrollspy IntersectionObserver that adds `.is-active` to the current link.
 *
 * Client component because it depends on scroll position. Consumer supplies
 * `sections` (id + label) and can wrap in a sticky container column.
 */

import { useEffect, useState } from "react";

export type TocSection = {
  id: string;
  label: string;
};

export function DocToc({
  sections,
  heading = "On this page",
  className = "",
}: {
  sections: TocSection[];
  heading?: string;
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(
    sections[0]?.id ?? null
  );

  useEffect(() => {
    if (!sections.length) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observed: HTMLElement[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
          }
        });
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) {
        io.observe(el);
        observed.push(el);
      }
    });

    return () => {
      observed.forEach((el) => io.unobserve(el));
      io.disconnect();
    };
  }, [sections]);

  return (
    <nav
      className={`doc-toc ${className}`.trim()}
      aria-label={heading}
    >
      <div className="toc-head">{heading}</div>
      <ol>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={activeId === s.id ? "is-active" : undefined}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
