import type { MetadataRoute } from "next";

// Pre-launch: disallow all crawlers. When Sim greenlights launch, swap the
// rule to `allow: "/"` and add the sitemap URL, and flip the `robots` entry
// in src/app/layout.tsx to index: true / follow: true.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
