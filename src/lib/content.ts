/**
 * Content loader. Reads JSON from src/content/<type>/ at build time and
 * validates it through Zod. Any drift throws a clear error so we notice
 * before shipping.
 */

import fs from "node:fs";
import path from "node:path";
import {
  PractitionerIndexSchema,
  PractitionerSchema,
  type Practitioner,
  type PractitionerIndex,
} from "./schemas/practitioner";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

/** All 65 practitioner records, validated. */
export function getAllPractitioners(): Practitioner[] {
  const dir = path.join(CONTENT_ROOT, "practitioners");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_"));
  return files.map((file) => {
    const raw = JSON.parse(
      fs.readFileSync(path.join(dir, file), "utf-8")
    );
    const parsed = PractitionerSchema.safeParse(raw);
    if (!parsed.success) {
      throw new Error(
        `Practitioner schema mismatch in ${file}:\n${JSON.stringify(
          parsed.error.issues,
          null,
          2
        )}`
      );
    }
    return parsed.data;
  });
}

/** One practitioner by slug, or undefined. */
export function getPractitioner(slug: string): Practitioner | undefined {
  return getAllPractitioners().find((p) => p.slug === slug);
}

/** The summary index (65 rows). */
export function getPractitionerIndex(): PractitionerIndex {
  const raw = JSON.parse(
    fs.readFileSync(
      path.join(CONTENT_ROOT, "practitioners", "_index.json"),
      "utf-8"
    )
  );
  return PractitionerIndexSchema.parse(raw);
}
