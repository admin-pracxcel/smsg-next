/**
 * Breadcrumb · accessible breadcrumb trail with schema.org BreadcrumbList
 * microdata inline. Use for spoke pages (services, practitioners, about, etc.).
 *
 * Emits a valid `itemListElement` chain that Rich Results Test accepts without
 * needing a separate JSON-LD block, but you may still add BreadcrumbList
 * JSON-LD via `<JsonLd>` if you prefer a single-source schema graph.
 */

import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-ink-3">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex flex-wrap items-center gap-x-2 gap-y-1"
      >
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={`${c.label}-${i}`}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              {c.href && !isLast ? (
                <Link
                  href={c.href}
                  itemProp="item"
                  className="hover:text-terra transition-colors"
                >
                  <span itemProp="name">{c.label}</span>
                </Link>
              ) : (
                <span
                  itemProp="name"
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-ink-2" : ""}
                >
                  {c.label}
                </span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
              {!isLast && (
                <span aria-hidden="true" className="text-ink-3/60">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
